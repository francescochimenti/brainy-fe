import React, { useEffect, useState } from "react";
import axios from "axios";
import useSession from "../../hooks/useSession";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const session = useSession();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/posts/user/${session.id}`,
      );
      setPosts(response.data.posts);
    };
    fetchPosts();
  }, [session.id]);

  return (
    <div className="animate__animated animate__fadeInRight flex w-full flex-col items-center justify-center p-4">
      {posts.map((post, i) => (
        <div
          key={i}
          className="flex w-full flex-col items-center justify-center"
        >
          <blockquote className="my-4 w-full border-l-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
            <p className="text-xl font-medium italic leading-relaxed text-gray-900 dark:text-white">
              "{post.content}"
            </p>
          </blockquote>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
