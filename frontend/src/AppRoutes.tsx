import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/account/Login";
import Register from "./components/account/Register";
import Dashboard from "./components/dashboard/Dashboard";

const AppRoutes: FC = () => {
  return (
    <Routes>
      {/* Routes open for all users */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Routes for authenticated users */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Routes for admin users */}

      {/* Routes for guest users */}

      {/* Default route */}
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
