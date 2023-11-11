import React, { useRef, useEffect, useState } from "react";
import LikeButton from "../likeButton/LikeButton";

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(postRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={postRef}
      className={`my-4 max-w-4xl rounded-lg  bg-white px-10 py-6 text-gray-700 shadow-md dark:bg-slate-900 dark:text-white md:w-[800px] ${
        isVisible ? "animate__animated animate__bounceInLeft" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold text-yellow-500">
          {new Date(post.createdAt).toLocaleDateString()}
        </span>
        <LikeButton post={post} />
      </div>
      <div className="mt-2">
        <p className="mt-2 ">{post.content}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button className="text-blue-600 hover:underline" href="/">
          {post.likeCount > 0
            ? post.likeCount === 1
              ? `${post.likeCount} people think with this`
              : `${post.likeCount} people's thinks with this`
            : `No one thinks about this.`}
        </button>
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
