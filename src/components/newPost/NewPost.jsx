import React, { useState } from "react";
import axios from "axios";
import useSession from "../../hooks/useSession";
import { fetchPosts } from "../../reducers/postReducer";
import { useDispatch } from "react-redux";
const NewPost = () => {
  const session = useSession();
  const [post, setPost] = useState({});
  const dispatch = useDispatch();
  const [maxLength, setMaxLength] = useState(false);
  const [minLength, setMinLength] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPost({
      ...post,
      author: session.id,
      [name]: value,
    });
  };

  const sendPost = async () => {
    if (post.content.length > 150) {
      setMaxLength(true);
      return;
    }

    if (post.content.length < 20) {
      setMinLength(true);
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/posts/create`,
        post,
      );
      setPost({
        content: "",
      });
      dispatch(fetchPosts());
      setMaxLength(false);
      setMinLength(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="animate__animated animate__fadeInRight bg-white dark:bg-black">
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
        dark:bg-black
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
        {maxLength ? (
          <div
            className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">Danger alert!</span> Post content
            cannot exceed 150 characters.
          </div>
        ) : minLength ? (
          <div
            className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">Danger alert!</span> Post content must
            be at least 20 characters.
          </div>
        ) : null}

        <button
          className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400"
          onClick={sendPost}
        >
          <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-black">
            Create new post
          </span>
        </button>
      </div>
    </section>
  );
};

export default NewPost;
