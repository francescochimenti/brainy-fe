import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-red-600 dark:text-red-500 lg:text-9xl">
              404
            </h1>
            <p className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              This page doesn't exist.
            </p>
            <p className="mb-4 text-lg font-bold text-yellow-300 dark:text-yellow-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <button
              type="button"
              class="mb-2 me-2 rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-red-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-red-300 dark:shadow-lg dark:shadow-red-800/80 dark:focus:ring-red-800"
            >
              <Link to="/home">Back to home page</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
