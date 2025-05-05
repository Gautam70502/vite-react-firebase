
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import GBSApplication from "./pages/GBSApplication";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./hooks/useAuth";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import WeeklySlips from "./pages/WeeklySlips";

// Create a new query client instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <Routes>
            {/* Auth routes (public) */}
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            
            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route
                path="/"
                element={
                  <Layout title="GPS Dashboard" activePage="dashboard">
                    <Dashboard />
                  </Layout>
                }
              />
              <Route
                path="/referrals"
                element={
                  <Layout title="Referrals" activePage="referrals">
                    <div className="p-6">
                      <h1 className="text-2xl font-bold mb-6">Referrals</h1>
                      <p>This page is under construction.</p>
                    </div>
                  </Layout>
                }
              />
              <Route
                path="/events"
                element={
                  <Layout title="Events" activePage="events">
                    <div className="p-6">
                      <h1 className="text-2xl font-bold mb-6">Events</h1>
                      <p>This page is under construction.</p>
                    </div>
                  </Layout>
                }
              />
              <Route
                path="/reports"
                element={
                  <Layout title="Reports" activePage="reports">
                    <div className="p-6">
                      <h1 className="text-2xl font-bold mb-6">Reports</h1>
                      <p>This page is under construction.</p>
                    </div>
                  </Layout>
                }
              />
              <Route
                path="/testimonials"
                element={
                  <Layout title="Testimonials" activePage="testimonials">
                    <div className="p-6">
                      <h1 className="text-2xl font-bold mb-6">Testimonials</h1>
                      <p>This page is under construction.</p>
                    </div>
                  </Layout>
                }
              />
              <Route
                path="/profile"
                element={
                  <Layout title="Profile" activePage="profile">
                    <div className="p-6">
                      <h1 className="text-2xl font-bold mb-6">Profile</h1>
                      <p>This page is under construction.</p>
                    </div>
                  </Layout>
                }
              />
              <Route
                path="/weekly-slips"
                element={
                  <Layout title="Weekly Slips" activePage="weekly-slips">
                    <WeeklySlips />
                  </Layout>
                }
              />
              <Route
                path="/gbs-application"
                element={
                  <Layout title="GBS Application Form" activePage="gbs-application">
                    <GBSApplication />
                  </Layout>
                }
              />
              <Route
                path="/settings"
                element={
                  <Layout title="Settings" activePage="settings">
                    <div className="p-6">
                      <h1 className="text-2xl font-bold mb-6">Settings</h1>
                      <p>This page is under construction.</p>
                    </div>
                  </Layout>
                }
              />
            </Route>
            
            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
