import React, { useEffect } from "react";
import SinglePost from "../singlePost/SinglePost";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../reducers/postReducer";

const PostContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  if (postStatus === "loading") {
    return (
      <section className="body-font bg-white text-gray-600 dark:bg-gray-900">
        <div className="container mx-auto flex flex-col items-center justify-center gap-12  px-5 ">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              role="status"
              className=" w-full max-w-lg animate-pulse space-y-2.5"
            >
              <div className="flex w-full items-center space-x-2">
                <div className="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-[480px] items-center space-x-2">
                <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-[400px] items-center space-x-2">
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-[480px] items-center space-x-2">
                <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-[440px] items-center space-x-2">
                <div className="h-2.5 w-32 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="flex w-full max-w-[360px] items-center space-x-2">
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="body-font bg-white text-gray-600 dark:bg-black">
      <div className="container mx-auto flex items-center justify-center px-5">
        <div className="grid grid-cols-1 gap-2">
          {posts &&
            posts.map((post) => <SinglePost post={post} key={post._id} />)}
        </div>
      </div>
    </section>
  );
};

export default PostContainer;
