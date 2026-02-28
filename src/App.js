import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/common/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/common/Footer";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./components/admin/ProtectedRoute";

/* ================= LAYOUT ================= */

function Layout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

/* ================= MAIN APP ================= */

function App() {
  useEffect(() => {
    // AOS
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });

    // Dynamic Page Title (Recruiter Optimized)
    document.title =
      "Hussain | SaaS Systems Engineer | MERN Architect | Stripe Integration";
  }, []);

  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;