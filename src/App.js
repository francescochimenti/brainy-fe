import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./middlewares/ProtectedRoutes";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import NewAuth from "./pages/newAuth/NewAuth";
import Profile from "./pages/profile/Profile";
import About from "./pages/about/About";
import TopPost from "./pages/topPost/TopPost";
import Settings from "./pages/settings/Settings";
import ErrorPage from "./pages/errorPage/ErrorPage";

//This is the main component of the application, it is responsible for rendering the routes and the components
//I set the div with the class bg-white dark:bg-black to change the background color of the application

const App = () => {
  return (
    <div className="bg-white dark:bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<NewAuth />} />
          <Route path="*" element={<ErrorPage />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/posts" element={<TopPost />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
