import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const onChangeSetFile = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async (cover) => {
    const fileData = new FormData();
    fileData.append("cover", cover);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/users/upload`,
        fileData,
      );
      return response.data;
    } catch (error) {
      console.log("Si è verificato un errore:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (file) {
      try {
        const uploadedFile = await uploadFile(file);
        const finalBody = {
          ...registerData,
          avatar: uploadedFile.avatar,
        };
        await axios.post(
          `${process.env.REACT_APP_SERVER_BASE_URL}/users/create`,
          finalBody,
          { headers: { "Content-Type": "application/json" } },
        );
        setFile(null);
      } catch (error) {
        console.log("Si è verificato un errore:", error);
      }
    } else {
      console.error("File non caricato");
    }
  };
  return (
    <section class="max-h-fit bg-gray-50 dark:bg-gray-900">
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
              Register in to Brainy
            </h2>
            <form
              class="mt-8 space-y-6"
              encType="
            multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  for="text"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Chuck"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  for="text"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Norris"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  for="file"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Avatar
                </label>
                <input
                  type="file"
                  name="cover"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                  onChange={onChangeSetFile}
                />
              </div>
              <div>
                <label
                  for="birthday"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Birthday
                </label>
                <input
                  type="date"
                  name="birthday"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="name@company.com"
                  required
                  onChange={handleInputChange}
                />
              </div>
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
                  placeholder="••••••••"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm your password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                class="w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
              >
                Register
              </button>
              <div class="text-sm font-medium text-gray-900 dark:text-white">
                Already have an account?{" "}
                <a
                  href="/"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Login to your account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
