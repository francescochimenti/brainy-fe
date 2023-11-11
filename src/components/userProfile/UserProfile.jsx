import React from "react";
import useSession from "../../hooks/useSession";
import UserPosts from "../userPosts/UserPosts";

const UserProfile = () => {
  const user = useSession();

  return (
    <div className="container mx-auto my-24 md:px-6">
      <section className="mb-32 text-center lg:text-left">
        <div className="px-6 py-12 md:px-12">
          <div className="container mx-auto xl:px-32">
            <div className="flex grid items-center lg:grid-cols-2">
              <div className="animate__animated animate__fadeInLeft mb-12 rounded-md shadow-md dark:border-2 dark:border-yellow-500 md:mt-12 lg:mb-0 lg:mt-0">
                <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                  <h2 className="text-primary mb-2 text-3xl font-bold dark:text-white">
                    {user.firstName} {user.lastName}
                  </h2>
                  <p className="mb-4 font-bold text-yellow-600 dark:text-yellow-500">
                    {user.id === "6543f2fbdf363f5d8f6eef8d"
                      ? "CEO of Brainy"
                      : "Member of Brainy"}
                  </p>
                  <p className="mb-6 px-4 font-extrabold text-neutral-500 dark:text-neutral-300">
                    "Nunc tincidunt vulputate elit. Mauris varius purus
                    malesuada neque iaculis malesuada. Aenean gravida magna
                    orci, non efficitur est porta id. Donec magna diam."
                  </p>
                  <p className="mb-6 px-4 font-bold text-neutral-500 dark:text-neutral-300">
                    "Nunc tincidunt vulputate elit. Mauris varius purus
                    malesuada neque iaculis malesuada. Aenean gravida magna
                    orci, non efficitur est porta id. Donec magna diam."
                  </p>
                  <p className="mb-6 px-4 font-semibold text-neutral-500 dark:text-neutral-300">
                    "Nunc tincidunt vulputate elit. Mauris varius purus
                    malesuada neque iaculis malesuada. Aenean gravida magna
                    orci, non efficitur est porta id. Donec magna diam."
                  </p>
                </div>
              </div>
              <div className="animate__animated animate__fadeInUp h-[650px] rounded-md bg-yellow-400 shadow-md md:mb-12 lg:mb-0">
                <img
                  src={user.avatar}
                  className="max-h-full max-w-full rounded-lg shadow-lg dark:border-2 dark:border-yellow-400 dark:shadow-black/20 lg:rotate-[6deg]"
                  alt="User avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
