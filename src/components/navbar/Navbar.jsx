import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import logoDark from "../../assets/logoDark.svg";
import logoLight from "../../assets/logoLight.svg";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setTheme(currentTheme.matches ? "dark" : "light");
    };

    handleChange();

    currentTheme.addEventListener("change", handleChange);

    return () => currentTheme.removeEventListener("change", handleChange);
  }, []);

  return (
    <nav className="animate__animated animate__bounceInDown border-gray-200 bg-white dark:bg-black">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <div className="flex items-center">
          <img
            src={theme === "dark" ? logoLight : logoDark}
            className="h-12"
            alt="Brainy Logo"
          />
          <span className="self-center whitespace-nowrap text-4xl font-bold dark:text-white">
            Brainy
          </span>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => {
            document
              .getElementById("navbar-default")
              .classList.toggle("hidden");
          }}
        >
          <span className="sr-only">Open main menu</span>
          <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-black md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-black">
            {localStorage.getItem("loggedInUser") ? (
              <>
                <li>
                  <a
                    href="/home"
                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/profile"
                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                    aria-current="page"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Posts of the week
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                    onClick={() => {
                      localStorage.removeItem("loggedInUser");
                    }}
                  >
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a
                    href="/login"
                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="/register"
                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Register
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
