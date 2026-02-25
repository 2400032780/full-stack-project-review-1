import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { Menu, X, Sprout, User } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // Mock user state - in a real app, this would come from context/auth
  const isLoggedIn = false;
  const userRole = null; // 'farmer' | 'admin' | 'expert' | null

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Farming Problems", path: "/problems" },
    { label: "Local Methods", path: "/methods" },
    { label: "Articles", path: "/articles" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Sprout className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-primary">
              FarmConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate(`/dashboard/${userRole}`)}>
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button onClick={() => navigate("/signup")}>
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-200 space-y-2">
              {isLoggedIn ? (
                <>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      navigate(`/dashboard/${userRole}`);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Dashboard
                  </Button>
                  <Button variant="outline" className="w-full">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      navigate("/login");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    className="w-full"
                    onClick={() => {
                      navigate("/signup");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
