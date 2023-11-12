import { Outlet } from "react-router-dom";
import Auth from "../pages/auth/Auth";

//This function checks if the user is logged in
export const isAuth = () => {
  return JSON.parse(localStorage.getItem("loggedInUser"));
};

//This function checks if the user is logged in and if it is not logged in it redirects to the login page
const ProtectedRoutes = () => {
  const auth = isAuth();

  return auth ? <Outlet /> : <Auth />;
};

export default ProtectedRoutes;
