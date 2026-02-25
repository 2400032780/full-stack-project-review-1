import { Outlet } from "react-router";
import { DashboardSidebar } from "../components/DashboardSidebar";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "../components/ui/button";

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-0 md:w-20"
        } transition-all duration-300 bg-white border-r border-gray-200 overflow-hidden`}
      >
        <DashboardSidebar collapsed={!sidebarOpen} />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-lg">Dashboard</h1>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
