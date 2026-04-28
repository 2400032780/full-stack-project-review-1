import { Link, useLocation, useNavigate } from "react-router";
import { Sprout, LayoutDashboard, FileText, Users, Settings, HelpCircle, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";
import { Button } from "./ui/button.jsx";

export function DashboardSidebar({ collapsed }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const currentPath = location.pathname;

  const dashboardType = currentPath.includes("farmer")
    ? "farmer"
    : currentPath.includes("admin")
    ? "admin"
    : "expert";

  const farmerLinks = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/farmer" },
    { icon: FileText, label: "Articles", path: "/articles" },
    { icon: HelpCircle, label: "Ask Expert", path: "/dashboard/farmer/consult" },
    { icon: Settings, label: "Settings", path: "/dashboard/farmer/settings" },
  ];

  const adminLinks = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/admin" },
    { icon: Users, label: "Users", path: "/dashboard/admin/users" },
    { icon: FileText, label: "Content", path: "/dashboard/admin/content" },
    { icon: Settings, label: "Settings", path: "/dashboard/admin/settings" },
  ];

  const expertLinks = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/expert" },
    { icon: FileText, label: "Articles", path: "/dashboard/expert/articles" },
    { icon: HelpCircle, label: "Queries", path: "/dashboard/expert/queries" },
    { icon: Settings, label: "Settings", path: "/dashboard/expert/settings" },
  ];

  const links =
    dashboardType === "farmer"
      ? farmerLinks
      : dashboardType === "admin"
      ? adminLinks
      : expertLinks;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="h-full flex flex-col bg-white border-r border-gray-200 shadow-sm">
      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        {!collapsed ? (
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Sprout className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-primary">
              FarmConnect
            </span>
          </Link>
        ) : (
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mx-auto">
            <Sprout className="h-6 w-6 text-white" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {links.map((link) => {
          const isActive = currentPath === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "text-gray-600 hover:bg-gray-50 hover:text-primary"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <link.icon className={`h-5 w-5 flex-shrink-0 ${isActive ? "text-white" : ""}`} />
              {!collapsed && <span className="font-medium">{link.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout at bottom */}
      <div className="p-4 border-t border-gray-100">
        <Button
          variant="ghost"
          className={`w-full text-red-600 hover:text-red-700 hover:bg-red-50 justify-start gap-3 px-4 ${collapsed ? "justify-center" : ""}`}
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && <span className="font-medium">Logout</span>}
        </Button>
      </div>
    </div>
  );
}
