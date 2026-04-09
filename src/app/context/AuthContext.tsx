import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "farmer" | "expert" | "admin" | "public";
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on initial load
  useEffect(() => {
    const savedUserId = localStorage.getItem("userId");
    const savedUserName = localStorage.getItem("userName");
    const savedUserEmail = localStorage.getItem("userEmail");
    const savedUserRole = localStorage.getItem("userRole");

    if (savedUserId && savedUserRole) {
      setUser({
        id: savedUserId,
        name: savedUserName || "",
        email: savedUserEmail || "",
        role: savedUserRole.toLowerCase() as User["role"],
      });
    }
    setLoading(false);
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("userId", userData.id);
    localStorage.setItem("userName", userData.name);
    localStorage.setItem("userEmail", userData.email);
    localStorage.setItem("userRole", userData.role);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
    // Also clear other potential session data
    localStorage.removeItem("token");
  };

  if (loading) {
    return null; // Or a loading spinner
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

