import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/account/Login";
import Register from "./components/account/Register";

const AppRoutes: FC = () => {
  return (
    <Routes>
      {/* Routes open for all users */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Routes for authenticated users */}

      {/* Routes for admin users */}

      {/* Routes for guest users */}

      {/* Default route */}
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
