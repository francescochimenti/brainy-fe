import React from 'react';

const Login = () => {
  return (
    <div className="h-screen bg-slate-200 p-4">
      <div className="mt-40">
        <h1 className="mb-10 text-center text-5xl font-semibold uppercase text-slate-600">
          Brainy
        </h1>
        <form action="submit" className="flex flex-col items-center gap-10">
          <input
            className="w-full max-w-xs rounded-md p-4 shadow transition-all focus:outline-none
            focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-slate-200
            "
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full max-w-xs rounded-md p-4 shadow transition-all focus:outline-none
            focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-slate-200
            "
            type="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="active: w-full max-w-xs rounded-xl bg-slate-400 p-4 font-semibold text-slate-200 shadow transition-all hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-slate-200 active:bg-slate-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
