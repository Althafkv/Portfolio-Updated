import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./ChatbotIcon";
import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";
import { getReply } from "./getReply";
import "./Chatbot.css";

function Chatbot() {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatBot, setShowChatBot] = useState(false);
  const chatBodyRef = useRef();

  const [pending, setPending] = useState(false);

  const sendMessage = async (text) => {
    if (pending) return;
    const history = [...chatHistory, { role: "user", text }];
    setPending(true);
    setChatHistory([...history, { role: "model", text: "Thinking..." }]);
    const reply = await getReply(history);
    setChatHistory([...history, { role: "model", text: reply }]);
    setPending(false);
  };
  useEffect(() => {
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);
  return (
    <div className={`container ${showChatBot ? "show-chatbot" : ""}`}>
      <button
        onClick={() => setShowChatBot((prev) => !prev)}
        id="chatbot-toggler"
      >
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>
      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">ChatBot</h2>
          </div>
          <button
            onClick={() => setShowChatBot((prev) => !prev)}
            className="material-symbols-rounded"
          >
            keyboard_arrow_down
          </button>
        </div>

        {/* Chatbot Body */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there 👋 <br /> How can I help you today?
            </p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chatbot Footer */}
        <div className="chat-footer">
          <ChatForm onSend={sendMessage} pending={pending} />
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
