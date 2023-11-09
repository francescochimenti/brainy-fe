import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./middlewares/ProtectedRoutes";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import NewAuth from "./pages/newAuth/NewAuth";
import Profile from "./pages/profile/Profile";
import About from "./pages/about/About";

const App = () => {
  return (
    <div className="bg-white dark:bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<NewAuth />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
