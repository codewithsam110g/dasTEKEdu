import React, { useState, useRef, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import Navbar from "../components/Navbar";
import { Link, Navigate, redirect } from "react-router-dom";
import { ref, get, child, set } from "firebase/database";
import { database as db } from "../firebase";
import { useUserAuth } from "../UserAuth";

const DiscussionPage = () => {
  const fileInputRef = useRef(null);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [thread, setThread] = useState({
    id: 0,
    title: "",
    desc: "",
    createdBy: "",
    createdAt: "",
    totalMessages: 0,
  });

  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const databaseRef = ref(db);

      try {
        const snapshot = await get(child(databaseRef, "threads"));

        if (snapshot.exists()) {
          const dataArray = [];
          snapshot.forEach((childSnapshot) => {
            dataArray.push(childSnapshot.val());
          });
          setDiscussions(dataArray);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-4 p-4 min-h-screen bg-white shadow-lg rounded">
        {/* Modal for new discussion */}
        <Dialog
          open={isModalOpen}
          onClose={closeModal}
          className="fixed z-10 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="f bg-gray-500 bg-opacity-75 transition-opacity" />
            <div className="bg-white rounded-lg p-4 w-[90vw]">
              <div className="text-lg font-bold mb-4">
                Create New Discussion
              </div>
              <input
                type="text"
                name="title"
                placeholder="Enter topic title..."
                value={thread.title}
                onChange={(e) =>
                  setThread({ ...thread, title: e.target.value })
                }
                className="px-4 py-2 border rounded w-full mb-4"
              />
              <input
                type="text"
                name="tags"
                placeholder="Enter tags, separated by commas"
                className="px-4 py-2 border rounded w-full mb-4"
              />
              <textarea
                type="text"
                name="description"
                placeholder="Enter the description "
                value={thread.desc}
                className="px-4 py-2 border rounded w-full mb-4"
                rows={"10"}
                onChange={(e) => setThread({ ...thread, desc: e.target.value })}
              />
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Upload a photo
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }} // Hide the file input
                  className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-black file:text-blue-700
                   hover:file:bg-blue-100"
                  multiple // Remove this if you want only single file selection
                />
                <button className="py-2 px-4 rounded-full bg-black text-white font-semibold">
                  Upload Files
                </button>
              </div>
              <button className="px-4 py-2 bg-black  text-white rounded-lg">
                Post
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 ml-2 bg-gray-700 text-white rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </Dialog>
        <div className="flex flex-row justify-between mb-4">
          {/* Tabs */}
          <div className="flex">
            <div className="mr-2 px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-t">
              Discusions
            </div>
            {/* More tabs... */}
          </div>
          {/* Search box */}
          <div>
            <input
              type="text"
              placeholder="Search question"
              className="px-4 py-2 border rounded"
            />
          </div>
          <div>
            <button
              onClick={openModal}
              className="px-3 bg-black rounded-lg text-white h-10"
            >
              Post
            </button>
          </div>
        </div>
        {/* Discussions list */}

        <div>
          {discussions.map((discussion) => (
            <Link to={`/threads/${discussion.id}`}>
              <div
                key={discussion.id}
                className="flex flex-row justify-between items-center py-4 border-b border-gray-300"
              >
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{discussion.title}</h3>
                  {discussion.desc}
                  <div className="flex mt-2">
                    {/* {discussion.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm text-white p-1 bg-gray-700 rounded-full px-2 mr-2"
                      >
                        {tag}
                      </span>
                    ))} */}
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-semibold">
                    {discussion.totalMessages} Posts
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Tags section */}
        <div className="w-1/4">{/* Tags would go here */}</div>
      </div>
    </>
  );
};

export default DiscussionPage;
