import React from "react";

const Header = () => {
  return (
    <section className="animate__animated animate__fadeInLeft bg-white dark:bg-black">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-yellow-400 dark:text-yellow-300 md:text-5xl lg:text-6xl">
          Nurturing the Power of Words
        </h1>
        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:px-48 lg:text-xl">
          Brainy is the platform that values ideas and celebrates authentic
          communication, redefining how connections and creativity intertwine in
          the digital weave.
        </p>
      </div>
    </section>
  );
};

export default Header;
