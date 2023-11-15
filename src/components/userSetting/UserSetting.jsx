import React, { useEffect, useState } from "react";
import useSession from "../../hooks/useSession";
import axios from "axios";

const UserSetting = () => {
  const user = useSession();
  const [isUpdated, setIsUpdated] = useState(false);

  const [registerData, setRegisterData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    avatar: user.avatar,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const updateProfile = async (e) => {
    if (file) {
      e.preventDefault();
      try {
        const uploadedFile = await uploadFile(file);
        const finalBody = {
          ...registerData,
          avatar: uploadedFile.avatar,
        };
        await axios.patch(
          `${process.env.REACT_APP_SERVER_BASE_URL}/users/update/${user.id}`,
          finalBody,
        );
        setIsUpdated(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const [file, setFile] = useState(null);

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
      console.log("Error:", error);
    }
  };

  const deleteProfile = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_BASE_URL}/users/delete/${user.id}`,
      );
      localStorage.removeItem("loggedInUser");
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUpdated(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isUpdated]);

  return (
    <div className="animate__animated animate__fadeInLeft mx-auto mt-2 h-screen max-w-screen-lg p-4">
      <h1 className="mb-10 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        User settings
      </h1>
      <form
        onSubmit={updateProfile}
        encType="
            multipart/form-data"
      >
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            value={registerData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            value={registerData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            value={registerData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Avatar
          </label>
          <input
            type="file"
            name="cover"
            className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            onChange={onChangeSetFile}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update settings
          </button>
          {isUpdated && (
            <div
              id="toast-success"
              class="mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
              role="alert"
            >
              <div class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                <svg
                  class="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="sr-only">Check icon</span>
              </div>
              <div class="ms-3 text-sm font-normal">
                User updated successfully.
              </div>
              <button
                type="button"
                class="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
                data-dismiss-target="#toast-success"
                aria-label="Close"
              >
                <span class="sr-only">Close</span>
                <svg
                  class="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
          )}
          <button
            className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={deleteProfile}
          >
            Delete Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserSetting;
