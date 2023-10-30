import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState(null);
  const [loginData, setLoginData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/login`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(loginData),
        },
      );
      const data = await response.json();

      if (data.token) {
        localStorage.setItem("loggedInUser", JSON.stringify(data.token));
        navigate("/home");
      }

      setLogin(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="background-animate h-screen w-full bg-gradient-to-l from-slate-300 to-slate-500 p-4">
      <div className="mt-40">
        <h1 className="mb-10 text-center text-6xl font-semibold uppercase text-slate-200">
          Brainy
        </h1>
        <form onSubmit={onSubmit} className="flex flex-col items-center gap-10">
          <input
            className="w-full max-w-xs rounded-md p-4 shadow transition-all focus:outline-none
            focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-slate-200
            "
            type="email"
            name="email"
            required
            onChange={handleInputChange}
          />
          <input
            className="w-full max-w-xs rounded-md p-4 shadow transition-all focus:outline-none
            focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-slate-200
            "
            type="password"
            name="password"
            required
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="active: w-full max-w-xs rounded-xl bg-slate-400 p-4 font-semibold uppercase text-slate-100 shadow transition-all hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-slate-200 active:bg-slate-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
