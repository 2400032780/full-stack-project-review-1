import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "farmer" | "expert" | "admin" | "public";
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string, role: string) => {
    // Mock login - in a real app, this would call an API
    const mockUser: User = {
      id: "1",
      name: "John Doe",
      email: email,
      role: role as User["role"],
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

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
