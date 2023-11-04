import { Outlet } from "react-router-dom";
import Auth from "../pages/auth/Auth";

export const isAuth = () => {
  return JSON.parse(localStorage.getItem("loggedInUser"));
};

const ProtectedRoutes = () => {
  const auth = isAuth();

  return auth ? <Outlet /> : <Auth />;
};

export default ProtectedRoutes;
