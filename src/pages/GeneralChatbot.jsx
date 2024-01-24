import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import { MdAddToPhotos } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaShareFromSquare } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";

const ChatComponent = ({ endpoint }) => {
  const fileInputRef = useRef(null);


  const handleFilechange = (event) => {
    // Handle the file change event
    // You can access the selected files using event.target.files
    console.log(event.target.files);
    // ... additional code to handle the files
  };

  const triggerFileInput = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };

  const [messages, setMessages] = useState([
    {
      text: "HI WELCOME BACL TO HERE DASTEK EDU YOU CAN ASK ANY QUESTIONS HERES",
      sender: 'server'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Function to handle the submission of the message

  const sendMessage = async () => {
    if (inputValue.trim()) {
      const userMessage = { text: inputValue, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Here you would send the message to the server endpoint
      // and wait for the response
      try {
        // const response = await fetch(endpoint, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ message: inputValue }),
        // });
        // const data = await response.json();

        // Add server response to chat
        const serverMessage = { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laudantium voluptas repellat?", sender: 'server' };
        setMessages((prevMessages) => [...prevMessages, serverMessage]);
      } catch (error) {
        console.error('There was an error sending the message:', error);
      }

      setInputValue(''); // Clear the input after sending
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-[80vh] bg-gray-200 sticky sm:h-[88vh]">
        <div className="overflow-auto p-3 flex-grow">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg px-4 py-2 my-1 ${msg.sender === 'user' ? 'bg-black text-white' : 'bg-white'}`}>
                {msg.text}
                {
                  (msg.sender === 'server') &&  (msg.text !== 'HI WELCOME BACL TO HERE DASTEK EDU YOU CAN ASK ANY QUESTIONS HERES') &&
                  <div className='flex gap-x-10 mt-5'>
                    <BiSolidLike size={20} />
                    <BiSolidDislike size={20} />
                    <FaCopy size={20} />
                    <FaShareFromSquare size={20} />
                  </div>

                }
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 bg-white flex-none">
          <div className="flex rounded-lg border-2 border-gray-300 overflow-hidden">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFilechange}
              style={{ display: 'none' }} // Hide the file input
              className="block  text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100 m-"
              multiple // Remove this if you want only single file selection
            />
            <button
              onClick={triggerFileInput}
              className="py-2 px-4 rounded-full h-10 bg-black text-white font-semibold m-1  text-sm"
            >
              <MdAddToPhotos />

            </button>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-2 outline-none"
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className=" bg-black text-white px-4 py-2 focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatComponent;
