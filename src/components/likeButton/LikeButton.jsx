import React, { useState, useEffect } from "react";
import { postLikes } from "../../reducers/likeReducer";
import { useDispatch } from "react-redux";
import useSession from "../../hooks/useSession";
import { deleteLikes } from "../../reducers/likeReducer";

const LikeButton = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const user = useSession();

  //This useEffect set the like button to true if the user has already liked the post
  useEffect(() => {
    if (post.likes.includes(user.id)) {
      setLiked(true);
    }
  }, [post.likes, user.id]);

  //This function handles the like button click and dispatches the like or delete like action
  const handleLikeClick = (postId) => {
    if (!liked) {
      dispatch(postLikes({ postId, userId: user.id }));
      setLiked(true);
    }
    if (liked) {
      dispatch(deleteLikes({ postId, userId: user.id }));
      setLiked(false);
    }
  };

  return (
    <button
      className={
        liked
          ? "rounded bg-blue-400 px-2 py-1 font-bold text-gray-100 hover:bg-red-500"
          : "rounded bg-black px-2 py-1 font-bold text-white hover:bg-gray-500 dark:bg-white dark:text-black"
      }
      onClick={() => handleLikeClick(post._id)}
    >
      {liked ? "This let you think." : "This let me think."}
    </button>
  );
};

export default LikeButton;
