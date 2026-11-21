import { useRef } from "react";
import './Chatbot.css'

function ChatForm({ onSend, pending }) {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const getMessage = inputRef.current.value.trim();
    if (pending || !getMessage) return;
    inputRef.current.value = "";

    onSend(getMessage);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        name="input-text"
        placeholder="Message..."
        autoComplete="off" 
        className="message-input"
        required
      />
      <button disabled={pending} aria-label="Send message" className="material-symbols-rounded">keyboard_arrow_up</button>
    </form>
  );
}

export default ChatForm;
