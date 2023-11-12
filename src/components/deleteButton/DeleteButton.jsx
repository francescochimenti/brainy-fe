import React, { useState } from "react";
import axios from "axios";
import { fetchPosts } from "../../reducers/postReducer";
import { useDispatch } from "react-redux";

const DeleteButton = ({ postId, post }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [postContent, setPostContent] = useState({ content: post.content });
  const dispatch = useDispatch();

  const toggleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleButtonClick = () => {
    toggleDeleteModal();
    toggleEditModal();
  };

  const deletePost = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_BASE_URL}/posts/${postId}`,
      );
      dispatch(fetchPosts());
      setIsDeleteModalOpen(false);
    } catch (e) {
      console.log(e);
    }
  };

  const updatePost = async () => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/posts/${postId}`,
        postContent,
      );
      dispatch(fetchPosts());
      setIsEditModalOpen(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <button
        onClick={toggleDeleteModal}
        className="px-1 text-center text-4xl text-black hover:text-red-600 dark:text-white dark:hover:text-red-600"
        type="button"
      >
        ...
      </button>

      {/* Delete Confirmation Modal */}
      <div
        id="popup-modal"
        tabIndex="-1"
        className={`fixed left-0 right-0 top-0 z-50 ${
          isDeleteModalOpen ? "flex" : "hidden"
        } h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0`}
      >
        <div className="relative max-h-full w-full max-w-lg p-4">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <div className="p-4 text-center md:p-5">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this post?
              </h3>
              <button
                onClick={deletePost}
                className="me-2 inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
                type="button"
              >
                Yes, I'm sure
              </button>
              <button
                onClick={handleButtonClick}
                className="me-2 inline-flex items-center rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                type="button"
              >
                Edit Post
              </button>
              <button
                onClick={toggleDeleteModal}
                className="me-2 mt-1 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600 md:mt-0"
                type="button"
              >
                No, close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Post Modal */}
      <div
        id="crud-modal"
        tabIndex="-1"
        className={`fixed left-0 right-0 top-0 z-50 ${
          isEditModalOpen ? "flex" : "hidden"
        } h-[400px] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0`}
      >
        <div class="relative max-h-full w-full max-w-md p-4">
          <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <div class="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-2">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Edit post
              </h3>
              <button
                type="button"
                class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
                onClick={toggleEditModal}
              >
                <svg
                  class="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>

            <div class="mb-4 grid grid-cols-2 gap-4">
              <div class="col-span-2">
                <input
                  type="text"
                  name="content"
                  id="name"
                  class="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border bg-gray-50 p-2.5 text-sm text-gray-900 shadow-md dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  value={postContent.content}
                  onChange={(e) => setPostContent({ content: e.target.value })}
                />
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={updatePost}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteButton;
