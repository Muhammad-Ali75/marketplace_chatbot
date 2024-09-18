import { useEffect, useState } from 'react';
import { socket } from '../../config/socket';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Listen for bot responses from the server
    socket.on('botMessage', (message) => {
      console.log(message);
      const botMessage = { text: message, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    });

    // Clean up on component unmount
    return () => {
      socket.off('botMessage');
    };
  }, []);

  // Function to handle sending messages
  const sendMessage = () => {
    if (!input.trim()) return;

    console.log(input);

    // Add user message to the chat
    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    // Send the message to the server via socket
    socket.emit('userMessage', input);

    // Clear input field
    setInput('');
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} className="input-box">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
