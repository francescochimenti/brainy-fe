import React, { useState } from "react";
import axios from "axios";
import useSession from "../../hooks/useSession";

const NewPost = () => {
  const session = useSession();
  const [post, setPost] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPost({
      ...post,
      author: session.id,
      [name]: value,
    });
  };

  const sendPost = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/posts/create`,
        post,
      );
      setPost({
        content: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center px-4 py-4 text-center lg:py-5">
        <h3 className="animate__animated animate__slideInDown mb-4 pb-3 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white lg:text-3xl">
          Unveil your thoughts, let words do the wonder.
        </h3>
        <textarea
          className="
        mb-5
        h-24
        w-3/4
        resize-none
        rounded
        border-2
        border-slate-300
        px-5
        py-3
        text-center
        text-gray-700
        focus:border-orange-200
        focus:outline-none
        dark:border-orange-200
        dark:bg-gray-800
        dark:text-gray-100
        dark:focus:border-orange-300
        md:w-2/4
"
          type="text"
          placeholder="Write your thoughts here..."
          name="content"
          onChange={handleInputChange}
          value={post.content}
        />
        <button
          className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400"
          onClick={sendPost}
        >
          <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
            Create new post
          </span>
        </button>
      </div>
    </section>
  );
};

export default NewPost;
