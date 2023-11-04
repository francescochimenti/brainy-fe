import React, { useRef, useEffect, useState } from "react";

const SinglePost = ({ post }) => {
  const [isVisible, setIsVisible] = useState(false);
  const postRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (postRef.current) {
      observer.observe(postRef.current);
    }

    return () => {
      if (postRef.current) {
        observer.unobserve(postRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={postRef}
      className={`my-4 max-w-4xl rounded-lg bg-white px-10 py-6 text-gray-700 shadow-md dark:bg-slate-800 dark:text-white ${
        isVisible ? "animate__animated animate__bounceInLeft" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold text-yellow-500">
          {new Date(post.createdAt).toLocaleDateString()}
        </span>
        <a
          className="rounded bg-gray-600 px-2 py-1 font-bold text-gray-100 hover:bg-gray-500"
          href="/"
        >
          Let me think!
        </a>
      </div>
      <div className="mt-2">
        <a className="hover: text-2xl font-bold " href="/">
          Accessibility tools for designers and developers
        </a>
        <p className="mt-2 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
          enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
          ratione libero!
          {post.content}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <a className="text-blue-600 hover:underline" href="/">
          Read more
        </a>
        <div>
          <a className="flex items-center" href="/">
            <img
              className="mx-4 hidden h-10 w-10 rounded-full object-cover sm:block"
              src={post.author.avatar}
              alt="avatar"
            />
            <h1 className="font-bold ">
              {post.author.firstName} {post.author.lastName}
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
