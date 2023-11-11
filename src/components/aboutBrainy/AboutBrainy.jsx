import React from "react";

const AboutBrainy = () => {
  return (
    <>
      <section className="animate__animated animate__fadeInLeft bg-white dark:bg-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Brainy: The Art of Words in the Visual Era.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:px-48 lg:text-xl">
            Brainy rediscovers the essence of human communication, elevating the
            written word in a world saturated with images. Here, every sentence
            is a journey, every word a universe to explore. Join us in this
            space where deep thought and reflection reign supreme.
          </p>
          {!localStorage.getItem("loggedInUser") ? (
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-lg bg-red-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-red-900"
              >
                Join in Brainy
                <svg
                  className="ml-2 h-3.5 w-3.5"
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
          ) : null}
        </div>
      </section>
      <div class="animate__animated animate__fadeInRight mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <img
          class="w-full rounded-md shadow-lg"
          src="https://images.unsplash.com/photo-1523903716430-8b05cc1ce968?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="dashboard asd"
        />
        <div class="mt-4 md:mt-0">
          <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Let's forge more words and insights that unite us
          </h2>
          <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Brainy revolutionizes the social media experience, transforming the
            way we connect online. The platform places a unique emphasis on the
            power of words, shifting focus from images to the expressive
            strength of language. In this digital space, users are encouraged to
            build deeper and more meaningful connections, based on shared
            interests and ideas.
          </p>
        </div>
      </div>
      {!localStorage.getItem("loggedInUser") ? (
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <a
            href="/login"
            className="inline-flex items-center justify-center rounded-lg bg-red-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-red-900"
          >
            Join in Brainy
            <svg
              className="ml-2 h-3.5 w-3.5"
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
      ) : null}
    </>
  );
};

export default AboutBrainy;
