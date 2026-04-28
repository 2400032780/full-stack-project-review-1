import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";

// Public Pages
import { Landing } from "./pages/Landing";
import { FarmingProblems } from "./pages/FarmingProblems";
import { LocalMethods } from "./pages/LocalMethods";
import { Articles } from "./pages/Articles";
import { Contact } from "./pages/Contact";

// Auth Pages
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { ForgotPassword } from "./pages/auth/ForgotPassword";

// Dashboard Pages
import { FarmerDashboard } from "./pages/dashboards/FarmerDashboard";
import { FarmerSettings } from "./pages/dashboards/FarmerSettings";
import { FarmerConsult } from "./pages/dashboards/FarmerConsult";
import { AdminDashboard } from "./pages/dashboards/AdminDashboard";
import { ExpertDashboard } from "./pages/dashboards/ExpertDashboard";

// 404
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Landing },
      { path: "problems", Component: FarmingProblems },
      { path: "methods", Component: LocalMethods },
      { path: "articles", Component: Articles },
      { path: "contact", Component: Contact },
      { path: "login", Component: Login },
      { path: "signup", Component: Signup },
      { path: "forgot-password", Component: ForgotPassword },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { path: "farmer", Component: FarmerDashboard },
      { path: "farmer/settings", Component: FarmerSettings },
      { path: "farmer/consult", Component: FarmerConsult },
      { path: "admin", Component: AdminDashboard },
      { path: "expert", Component: ExpertDashboard },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
