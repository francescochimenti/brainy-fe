import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AiTwotoneSetting } from "react-icons/ai";
import useSession from "../../hooks/useSession";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const user = useSession();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/posts/user/${id}/popular`,
      );
      setPosts(response.data.posts);
    };
    fetchPosts();
  }, [id]);

  const hasPosts = posts && posts.length > 0;

  return (
    <>
      <div className="container mx-auto my-6 md:px-6">
        <section className="mb-32 text-center lg:text-left">
          <div className="px-6 py-12 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="flex grid items-center lg:grid-cols-2">
                {hasPosts && (
                  <>
                    <div className="animate__animated animate__fadeInLeft mb-12 rounded-md shadow-lg dark:border-2 dark:border-yellow-500 md:mt-12 lg:mb-0 lg:mt-0">
                      <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                        <h2 className="text-primary mb-2 text-2xl font-extrabold dark:text-white md:text-3xl">
                          {posts[0].author.firstName} {posts[0].author.lastName}
                        </h2>
                        <div className="flex items-center justify-between">
                          <p className="mb-4 ml-40 font-bold text-yellow-600 dark:text-yellow-500 md:ml-0">
                            {posts[0].author.role} of Brainy
                          </p>
                          {user.id === posts[0].author._id ? (
                            <Link to={"/settings"}>
                              <AiTwotoneSetting className="mb-4 text-2xl text-black dark:text-white md:mr-12 lg:text-4xl" />
                            </Link>
                          ) : null}
                        </div>
                        {posts.map((post, i) => (
                          <p
                            className="mb-6 px-5 font-bold text-neutral-500 dark:text-neutral-300"
                            key={i}
                          >
                            "{post.content}"
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="animate__animated animate__fadeInUp h-[full] rounded-md bg-yellow-400 shadow-md md:mb-12 lg:mb-0">
                      <img
                        src={posts[0].author.avatar}
                        className="max-h-full max-w-full rounded-lg shadow-lg dark:border-2 dark:border-yellow-400 dark:shadow-black/20 lg:rotate-[6deg]"
                        alt="User avatar"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserProfile;
