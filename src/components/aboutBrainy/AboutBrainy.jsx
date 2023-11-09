import React from "react";

const AboutBrainy = () => {
  return (
    <>
      <section className="animate__animated animate__fadeInLeft bg-white dark:bg-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Brainy: L'arte delle parole nell'era visiva
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:px-48 lg:text-xl">
            Brainy riscopre l'essenza della comunicazione umana, esaltando la
            parola scritta in un mondo saturato di immagini. Qui, ogni frase è
            un viaggio, ogni parola un universo da esplorare. Unisciti a noi in
            questo spazio dove il pensiero profondo e la riflessione sono
            sovrani.
          </p>
          {!localStorage.getItem("loggedInUser") ? (
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Entra in Brainy
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
      <div className="grid grid-cols-2 gap-4 p-12 md:grid-cols-4">
        <div className="grid gap-4">
          <div>
            <img
              className="animate__animated animate__fadeInRight mt-12 h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=2730&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img of book"
            />
          </div>
          <div>
            <img
              className="animate__animated animate__fadeInRight mt-2 h-auto max-w-full rounded-lg"
              src="https://plus.unsplash.com/premium_photo-1663047380098-6d2fe784e89c?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img of book"
            />
          </div>
          <div>
            <img
              className="animate__animated animate__fadeInRight h-auto max-w-full rounded-lg"
              src="https://plus.unsplash.com/premium_photo-1681126228712-83bd4101603a?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img of book"
            />
          </div>
        </div>
        <div className="animate__animated animate__fadeInRight grid gap-4">
          <div>
            <img
              className="animate__animated animate__fadeInRight h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?auto=format&fit=crop&q=80&w=2785&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img of book"
            />
          </div>
          <div>
            <img
              className="animate__animated animate__fadeInRight h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1544185310-0b3cf501672b?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img of book"
            />
          </div>
          <div>
            <img
              className="animate__animated animate__fadeInRight h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img of book"
            />
          </div>
        </div>
        <div className="animate__animated animate__fadeInRight grid gap-4">
          <div>
            <img
              className="animate__animated animate__fadeInRight mt-20 h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1602399481667-07536109851e?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img of book"
            />
          </div>
          <div>
            <img
              className="animate__animated animate__fadeInRight h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1608099269227-82de5da1e4a8?auto=format&fit=crop&q=80&w=2785&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img of book"
            />
          </div>
          <div>
            <img
              className="animate__animated animate__fadeInRight h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=1968&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img of book"
            />
          </div>
        </div>
        <div className="animate__animated animate__fadeInRight grid gap-4">
          <div>
            <img
              className="animate__animated animate__fadeInRight h-auto max-w-full rounded-lg"
              src="https://plus.unsplash.com/premium_photo-1664373232760-0209debe810e?auto=format&fit=crop&q=80&w=2788&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img of book"
            />
          </div>
          <div>
            <img
              className="animate__animated animate__fadeInRight h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img of book"
            />
          </div>
          <div>
            <img
              className="animate__animated animate__fadeInRight h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1575709527142-a93ed587bb83?auto=format&fit=crop&q=80&w=2864&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img of book"
            />
          </div>
        </div>
      </div>
      {!localStorage.getItem("loggedInUser") ? (
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <a
            href="/login"
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Entra in Brainy
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
