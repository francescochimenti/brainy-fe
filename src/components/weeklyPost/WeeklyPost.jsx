import React, { useEffect, useState } from "react";
import axios from "axios";

const WeeklyPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/posts/popular`,
      );
      setPosts(res.data.posts);
      console.log(posts);
    };
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section class="bg-white dark:bg-black">
      <div class="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <div class="animate__animated animate__fadeInLeft mx-auto max-w-screen-sm">
          <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Posts of the week
          </h2>
          <p class="mb-8 text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
            Where words shine and thoughts provoke. Celebrating our community's
            most compelling expressions.
          </p>
        </div>
        <div class="mb-8 grid lg:mb-12 lg:grid-cols-2">
          {posts.map((post, i) => (
            <figure
              class="animate__animated animate__fadeInUp mx-auto max-w-screen-md p-4"
              key={i}
            >
              <svg
                class="mx-auto mb-3 h-12 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p class="text-2xl font-medium text-gray-900 dark:text-white">
                  "{post.content}"
                </p>
              </blockquote>
              <figcaption class="mt-6 flex items-center justify-center space-x-3">
                <img
                  class="h-6 w-6 rounded-full"
                  src={post.author.avatar}
                  alt="Avatar of author"
                />
                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="pr-3 font-medium text-gray-900 dark:text-white">
                    {post.author.firstName} {post.author.lastName}
                  </div>
                  <div class="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyPost;
