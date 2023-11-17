import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AiTwotoneSetting } from "react-icons/ai";
import useSession from "../../hooks/useSession";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [posts, setPosts] = useState([]);
  const [notLoaded, setNotLoaded] = useState(false);
  const { id } = useParams();
  const user = useSession();

  useEffect(() => {
    const fetchPosts = async () => {
      setNotLoaded(true);
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/posts/user/${id}/popular`,
      );
      setPosts(response.data.posts);
      setNotLoaded(false);
    };
    fetchPosts();
  }, [id]);

  const hasPosts = posts && posts.length > 0;

  if (!hasPosts)
    return (
      <div className="container mx-auto my-6 md:px-6">
        <section className="mb-32 text-center lg:text-left">
          <div className="px-6 py-12 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="flex grid items-center lg:grid-cols-2">
                {hasPosts && (
                  <>
                    <div className="animate__animated animate__fadeInLeft mb-12 rounded-md shadow-lg dark:border-2 dark:border-yellow-500 md:mt-12 lg:mb-0 lg:mt-0">
                      <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                        <h2 className="text-primary mb-2 text-2xl font-extrabold dark:text-white md:text-3xl">
                          {user.firstName} {user.lastName}
                        </h2>
                        <div className="flex items-center justify-between">
                          <p className="mb-4 ml-40 font-bold text-yellow-600 dark:text-yellow-500 md:ml-0">
                            {user.role} of Brainy
                          </p>
                          {user.id === user._id ? (
                            <Link to={"/settings"}>
                              <AiTwotoneSetting className="mb-4 text-2xl text-black dark:text-white md:mr-12 lg:text-4xl" />
                            </Link>
                          ) : null}
                        </div>
                        <p className="mb-6 px-5 font-bold text-neutral-500 dark:text-neutral-300">
                          "No posts yet"
                        </p>
                      </div>
                    </div>
                    <div className="animate__animated animate__fadeInUp h-[full] rounded-md bg-yellow-400 shadow-md md:mb-12 lg:mb-0">
                      <img
                        src={user.avatar}
                        className="max-h-full max-w-full rounded-lg shadow-lg dark:border-2 dark:border-yellow-400 dark:shadow-black/20 lg:rotate-[6deg]"
                        alt="User avatar"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );

  if (!notLoaded)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div
          role="status"
          class="animate-pulse space-y-8 rtl:space-x-reverse md:flex md:items-center md:space-x-8 md:space-y-0"
        >
          <div class="flex h-48 w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700 sm:w-96">
            <svg
              class="h-10 w-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div class="w-full">
            <div class="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );

  return (
    <>
      <div className="container mx-auto my-6 md:px-6">
        <section className="mb-32 text-center lg:text-left">
          <div className="px-6 py-12 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="flex grid items-center lg:grid-cols-2">
                {hasPosts && (
                  <>
                    <div className="animate__animated animate__fadeInLeft mb-12 rounded-md shadow-lg dark:border-2 dark:border-yellow-500 md:mt-12 lg:mb-0 lg:mt-0">
                      <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                        <h2 className="text-primary mb-2 text-2xl font-extrabold dark:text-white md:text-3xl">
                          {posts[0].author.firstName} {posts[0].author.lastName}
                        </h2>
                        <div className="flex items-center justify-between">
                          <p className="mb-4 ml-40 font-bold text-yellow-600 dark:text-yellow-500 md:ml-0">
                            {posts[0].author.role} of Brainy
                          </p>
                          {user.id === posts[0].author._id ? (
                            <Link to={"/settings"}>
                              <AiTwotoneSetting className="mb-4 text-2xl text-black dark:text-white md:mr-12 lg:text-4xl" />
                            </Link>
                          ) : null}
                        </div>
                        {posts.map((post, i) => (
                          <p
                            className="mb-6 px-5 font-bold text-neutral-500 dark:text-neutral-300"
                            key={i}
                          >
                            "{post.content}"
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="animate__animated animate__fadeInUp h-[full] rounded-md bg-yellow-400 shadow-md md:mb-12 lg:mb-0">
                      <img
                        src={posts[0].author.avatar}
                        className="max-h-full max-w-full rounded-lg shadow-lg dark:border-2 dark:border-yellow-400 dark:shadow-black/20 lg:rotate-[6deg]"
                        alt="User avatar"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserProfile;
