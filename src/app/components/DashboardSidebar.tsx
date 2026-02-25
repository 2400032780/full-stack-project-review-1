import { Link, useLocation } from "react-router";
import { Sprout, LayoutDashboard, FileText, Users, Settings, HelpCircle } from "lucide-react";

interface DashboardSidebarProps {
  collapsed: boolean;
}

export function DashboardSidebar({ collapsed }: DashboardSidebarProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine which dashboard we're in based on path
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

  return (
    <div className="h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
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
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => {
          const isActive = currentPath === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <link.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>{link.label}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
