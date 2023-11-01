import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section class="h-screen bg-gray-50 pt-10 dark:bg-gray-900 md:pt-32">
      <div class="mx-auto grid max-w-screen-xl gap-8 px-4 py-8 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <div class="flex flex-col justify-center">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Embrace Pure Expression. Welcome to Brainy!
          </h1>
          <p class="mb-6 p-4 text-lg font-normal text-gray-500 dark:text-gray-400 md:p-1 lg:text-xl">
            Welcome to Brainy! Immerse yourself in a realm where the power of
            words takes the lead. Join us in celebrating genuine expression.
            Here, your thoughts hold significance. Let's cultivate creativity
            together!
          </p>
          <a
            href="/"
            class="inline-flex items-center p-4 text-lg font-medium text-blue-600 hover:underline dark:text-blue-500 md:p-1"
          >
            Read more about Brainy
            <svg
              class="ml-2 h-3.5 w-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        <div>
          <div class="w-full space-y-8 rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800 sm:p-8 lg:max-w-xl">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              Sign in to Brainy
            </h2>
            <form class="mt-8 space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="name@company.com"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                class="w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                onClick={onSubmit}
              >
                Login to your account
              </button>
              <div class="text-sm font-medium text-gray-900 dark:text-white">
                Not registered yet?{" "}
                <a
                  href="/register"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
