import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedLayout from "../layouts/ProtectedLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import BusinessSetup from "../pages/business/BusinessSetup";
import NotFound from "../pages/errors/NotFound";
import Unauthorized from "../pages/errors/Unauthorized";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/business-setup" element={<BusinessSetup />} />
      <Route element={<ProtectedLayout />}>
      <Route path="/dashboard" element={<Dashboard />} /></Route>
      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route path="*" element={<NotFound />} />
    </Routes>

    
  );
};

export default AppRoutes;