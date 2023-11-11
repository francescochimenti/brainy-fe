import React from "react";
import useSession from "../../hooks/useSession";
import UserPosts from "../userPosts/UserPosts";

const UserProfile = () => {
  const session = useSession();

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center bg-white dark:bg-black">
      <div className="animate__animated animate__fadeInLeft flex max-w-screen-xl flex-col items-center justify-center gap-11 text-center">
        <img
          className="mb-2.5 mt-1 h-32 w-32 rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500"
          src={session.avatar}
          alt="User avatar"
        />

        <h1 className="mb-4 text-4xl font-semibold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          {session.firstName} {session.lastName}
        </h1>
      </div>
      <UserPosts />
    </div>
  );
};

export default UserProfile;
