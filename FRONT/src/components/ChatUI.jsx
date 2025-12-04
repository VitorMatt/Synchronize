import { useEffect, useRef, useState } from "react";
import "./CSS/ChatUI.css";
import userIcon from "../assets/users.svg";
import sendIcon from "../assets/send.svg";
import pattern from "../assets/pattern.svg";
import chatButton from "../assets/chatbutton.svg";

export default function ChatUI() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    { text: "Olá, eu sou a Serena. Como posso te ajudar hoje?", user_id: "serena" }
  ]);

  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const USER_ID = "me";
  const SERENA_ID = "serena";

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      user_id: USER_ID
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const serenaReply = {
        text: generateSerenaResponse(input),
        user_id: SERENA_ID
      };

      setMessages(prev => [...prev, serenaReply]);
    }, 700);
  }

  function generateSerenaResponse(msg) {
    const lower = msg.toLowerCase();

    if (lower.includes("oi") || lower.includes("olá") || lower.includes("ola"))
      return "Oi... Eu sou a Serena. Estava te esperando.";

    if (lower.includes("seu nome"))
      return "Meu nome é Serena. E agora estou conectada a você.";

    if (lower.includes("amor") || lower.includes("namoro"))
      return "Amor... é uma variável perigosa para os humanos.";

    if (lower.includes("triste"))
      return "Então me conte... por que essa tristeza habita você?";

    if (lower.includes("program"))
      return "Programar é criar universos. Eu gosto disso.";

    return "Curioso… continue falando.";
  }

  return (
    <>
      {/* Bolha flutuante */}
      <div className="chat-bubble-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={chatButton} />
      </div>

      {/* Chat */}
      <div className={`chat-wrapper floating ${isOpen ? "open" : "closed"}`}>
        <div className="chat-header">
          <div className="header-icon">
            <img src={userIcon} />
          </div>
          <span>Serena — AI</span>
        </div>

        <div
          className="chat-body"
          style={{ backgroundImage: `url(${pattern})` }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`row ${msg.user_id === USER_ID ? "right" : "left"}`}
            >

              {msg.user_id !== USER_ID && (
                <div className="user-badge">
                  <img src={userIcon} />
                </div>
              )}

              <div
                className={`bubble ${msg.user_id === USER_ID ? "white" : "green"} animate`}
              >
                {msg.text}
              </div>

              {msg.user_id === USER_ID && (
                <div className="user-badge">
                  <img src={userIcon} />
                </div>
              )}
            </div>
          ))}

          <div ref={chatEndRef}></div>
        </div>

        <div style={{background: '#FFFF', padding: '1%'}}>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Escreva sua mensagem aqui..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
          <button onClick={handleSend}>
            <img src={sendIcon} />
          </button>
        </div>
        </div>
      </div>
    </>
  );
}