import React, { useEffect, useState } from "react";
import axios from "axios";
import SinglePost from "../singlePost/SinglePost";

const PostContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/posts`,
      );
      setPosts(
        res.data.posts.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }),
      );
      console.log(posts);
    };
    fetchPosts();
  }, []);

  return (
    <section className="body-font bg-white text-gray-600 dark:bg-gray-900">
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
