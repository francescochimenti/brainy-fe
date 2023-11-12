import React, { useRef, useEffect, useState } from "react";
import LikeButton from "../likeButton/LikeButton";
import BrainyLogo from "../brainyLogo/BrainyLogo";
import { Link } from "react-router-dom";

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
  if (post.author.role !== "Company")
    return (
      <div
        ref={postRef}
        className={`my-4 max-w-4xl rounded-lg  bg-white px-10 py-6 text-gray-700 shadow-md dark:bg-black dark:text-white dark:shadow-sm dark:shadow-white md:w-[800px] ${
          isVisible ? "animate__animated animate__bounceInLeft" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <BrainyLogo />
          <LikeButton post={post} />
        </div>
        <div className="mt-2 font-semibold">
          <p className="mt-2 ">"{post.content}"</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="mr-4 text-slate-500 md:mr-0">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
          <div>
            <div className="flex items-center">
              <Link to={`/profile/${post.author._id}`}>
                <img
                  className="mr-2 h-10 min-h-[40px] w-10 min-w-[40px] rounded-full object-cover "
                  src={post.author.avatar}
                  alt="avatar"
                />
              </Link>

              <span className="font-semibold">
                <Link to={`/profile/${post.author._id}`}>
                  {post.author.firstName} {post.author.lastName}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    );

  if (post.author.role === "Company")
    return (
      <div
        ref={postRef}
        className={`my-4 max-w-4xl rounded-lg  bg-white px-10 py-6 text-gray-700 shadow-md dark:bg-black dark:text-white dark:shadow-sm dark:shadow-white md:w-[800px] ${
          isVisible ? "animate__animated animate__bounceInLeft" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <BrainyLogo />
          <p className="rounded bg-orange-400 px-2 py-1 font-bold text-white dark:bg-orange-500 dark:text-white">
            ADS
          </p>
        </div>
        <div className="mt-2 font-semibold">
          <p className="mt-2 ">"{post.content}"</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="mr-4 text-slate-500 md:mr-0">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
          <div>
            <div className="flex items-center">
              <Link to={`/profile/${post.author._id}`}>
                <img
                  className="mr-2 h-10 min-h-[40px] w-10 min-w-[40px] rounded-full object-cover "
                  src={post.author.avatar}
                  alt="avatar"
                />
              </Link>

              <span className="font-semibold">
                <Link to={`/profile/${post.author._id}`}>
                  {post.author.firstName}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SinglePost;
