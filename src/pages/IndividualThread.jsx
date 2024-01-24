import React,{useRef, useState} from 'react'
import Navbar from '../components/Navbar'
import image from '../assets/demo-img.png'
import { MdAddToPhotos } from "react-icons/md"; 
import { BiSolidDislike, BiSolidLike } from 'react-icons/bi'
import { FaCopy, FaShareFromSquare } from 'react-icons/fa6'

export default function IndividualThread() {
  const [inputValue, setInputValue] = useState('');
  const fileInputRef = useRef(null);
  const username= "username"

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

  const sendMessage = async () => {
    if (inputValue.trim()) {
      const userMessage = { Comment: inputValue, sender: username, createdAt:"24 th januarary " };
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
       
      } catch (error) {
        console.error('There was an error sending the message:', error);
      }

      setInputValue(''); // Clear the input after sending
    }
  };
const [messages, setMessages]= useState([{
    sender:"username",
   Comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates a distinctio.",
   createdAt:"24 th januarary "
  },
  {
    sender:"another",
   Comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates a distinctio.",
   createdAt:"24 th januarary "
  },
  {
    sender:"another",
   Comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates a distinctio.",
   createdAt:"24 th januarary "
  },
  {
    sender:"another",
   Comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates a distinctio.",
   createdAt:"24 th januarary "
  },
])
  const ThreadInfo = {
    id: 1,
    title: "Oh mas title is there ",
    description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quaerat explicabo dolore? Pariatur, minima blanditiis! Neque repellendus error et deleniti nihil dolor facilis, est ducimus libero omnis unde sed illo pariatur natus voluptate quam cupiditate veritatis itaque quaerat soluta eaque tempore mollitia dolorem aliquid. Vitae, quaerat. Suscipit minus placeat porro.",
    tags: ["maths", "science"],
    imageUrl: image,
  }
  return (
    <>
      <Navbar />
      <section className='m-8 border border-gray-60 rounded-2xl p-3  shadow-2xl'>
        <div className='border border-gray-500 rounded-lg p-3 border-solid'>
          <h1 className=' text-gray-900 font-semibold text-2xl p-1'><u className=' font-bold'>Question-</u> {ThreadInfo.title}</h1>
          <h2 className='p-3 font-semibold'><u className='text-gray-700 font-bold'>Description-</u>{ThreadInfo.description}</h2>s
          {ThreadInfo.tags.map(tag => <span key={tag} className="text p-3 m-3 font-semibold  text-gray-700 bg-blue-50 rounded-lg px-2 mr-2">{tag}</span>)}
          <img className='h-[300px] m-3 roudned' src={ThreadInfo.imageUrl} />
          <div>
            
        <div className="flex rounded-lg border-2 sticky border-gray-300 overflow-hidden">
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
        {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === username ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg px-4 py-2 my-1 ${msg.sender === 'user' ? 'bg-black text-white' : 'bg-gray-200'}`}>
                <div className='font-semibold uppercase'>{msg.sender}:-<span className='text-gray-700'>{msg.createdAt}</span></div>
                <div className='px-3 font-semibold'>{msg.Comment}</div>

                {
                  (msg.sender !== username) &&  (msg.text !== 'HI WELCOME BACL TO HERE DASTEK EDU YOU CAN ASK ANY QUESTIONS HERES') &&
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
        </div>
      </section>
    </>
  )
}
