import React, { useRef, useEffect, useState } from "react";
import LikeButton from "../likeButton/LikeButton";
import BrainyLogo from "../brainyLogo/BrainyLogo";
import { Link } from "react-router-dom";
import DeleteButton from "../deleteButton/DeleteButton";
import useSession from "../../hooks/useSession";

const SinglePost = ({ post }) => {
  const [isVisible, setIsVisible] = useState(false);
  const postRef = useRef(null);
  const user = useSession();

  useEffect(() => {
    // Observer to detect when element becomes visible
    const observer = new IntersectionObserver(
      (entries) => {
        // If element is visible, set isVisible to true and stop observing
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      // Trigger when element is 10% visible
      { threshold: 0.1 },
    );

    // If element exists, start observing
    if (postRef.current) {
      observer.observe(postRef.current);
    }

    // On component unmount, stop observing
    return () => {
      if (postRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(postRef.current);
      }
    };
  }, []); // Run once on component mount
  if (post.author.role !== "Company")
    return (
      <div
        ref={postRef}
        className={`my-4 max-w-4xl rounded-lg  bg-white px-10 py-6 text-gray-700 shadow-md dark:bg-black dark:text-white dark:shadow-blue-300 md:w-[800px] ${
          isVisible ? "animate__animated animate__bounceInLeft" : ""
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <BrainyLogo />
          <span>
            <LikeButton post={post} />
            {post.author._id === user.id || user.role === "CEO" ? (
              <DeleteButton postId={post._id} post={post} />
            ) : null}
          </span>
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
        className={`my-4 max-w-4xl rounded-lg  bg-white px-10 py-6 text-gray-700 shadow-lg dark:bg-black dark:text-white dark:shadow-yellow-300 md:w-[800px] ${
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
