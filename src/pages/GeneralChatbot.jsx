import React, { useEffect, useState } from 'react';

const ChatComponent = ({ endpoint }) => {
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
    <div className="flex flex-col h-[80vh] bg-gray-200 sticky sm:h-[88vh]">
      <div className="overflow-auto p-3 flex-grow">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-lg px-4 py-2 my-1 ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-white'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 bg-white flex-none">
        <div className="flex rounded-lg border-2 border-gray-300 overflow-hidden">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-2"
            placeholder="Type a message..."
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 focus:outline-none"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
