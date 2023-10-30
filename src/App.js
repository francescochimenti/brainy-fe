import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import ProtectedRoutes from "./middlewares/ProtectedRoutes";
import BranyVideo from "./components/brainyVideo/BranyVideo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<BranyVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
