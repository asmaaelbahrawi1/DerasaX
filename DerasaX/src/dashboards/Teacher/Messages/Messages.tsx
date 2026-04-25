import React, { useState } from "react";
import "./Messages.css";
import NavTeacher from "../NavTeacher/NavTeacher";
import FooterTeacher from "../FooterTeacher/FooterTeacher";
import MessageIcon from "../../../assets/icons/message.png";
import send from "../../../assets/icons/send.png";

type Message = {
  id: number;
  sender: string;
  role: string;
  subject: string;
  content: string; // 👈 بدل preview
  date: string;
  isRead: boolean;
};

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "Michael Anderson",
    role: "Student: Liam Anderson",
    subject: "Concern about Recent Math Performance",
    content:
      "Hello Ms. Johnson,\n\nI’ve noticed that Liam has been struggling with his recent math assignments. His grades have dropped from the 80s to the mid-70s. Is there anything we can do at home to help him improve?",
    date: "Thu, Nov 28, 10:30 AM",
    isRead: false,
  },
  {
    id: 2,
    sender: "Michael Anderson",
    role: "Student: Liam Anderson",
    subject: "Concern about Recent Math Performance",
    content:
      "Hello Ms. Johnson,\n\nI’ve noticed that Liam has been struggling with his recent math assignments.",
    date: "Thu, Nov 28, 10:30 AM",
    isRead: false,
  },
  {
    id: 3,
    sender: "Michael Anderson",
    role: "Student: Liam Anderson",
    subject: "Concern about Recent Math Performance",
    content:
      "Hello Ms. Johnson,\n\nJust checking in about Liam’s progress.",
    date: "Thu, Nov 28, 10:30 AM",
    isRead: true,
  },
  {
    id: 4,
    sender: "Michael Anderson",
    role: "Student: Liam Anderson",
    subject: "Concern about Recent Math Performance",
    content:
      "Hello Ms. Johnson,\n\nJust checking in about Liam’s progress.",
    date: "Thu, Nov 28, 10:30 AM",
    isRead: true,
  },
];

const Inbox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [reply, setReply] = useState("");

  const handleSelectMessage = (msg: Message) => {
    setSelectedMessage(msg);

    if (!msg.isRead) {
      setMessages((prev) =>
        prev.map((m) => (m.id === msg.id ? { ...m, isRead: true } : m))
      );
    }
  };

  const filteredMessages =
    filter === "unread" ? messages.filter((m) => !m.isRead) : messages;

  return (
    <>
      <NavTeacher />

      <div className="profile-container">
        <h2 className="profile-title">Messages</h2>
        <p className="profile-subtitle">
          Communicate with parents about student progress
        </p>
      </div>

      <div className="inbox-container">
        {/* LEFT */}
        <div className="inbox-left">
          <div className="inbox-header">
            <h3>Inbox</h3>
            <p>Your parent messages</p>

            <div className="filters">
              <button
                className={filter === "all" ? "active" : ""}
                onClick={() => setFilter("all")}
              >
                Total
              </button>
              <button
                className={filter === "unread" ? "active" : ""}
                onClick={() => setFilter("unread")}
              >
                Unread
              </button>
            </div>
          </div>

          <div className="message-list">
            {filteredMessages.map((msg) => (
              <div
                key={msg.id}
                className={`message-item ${!msg.isRead ? "unread" : ""}`}
                onClick={() => handleSelectMessage(msg)}
              >
                <div className="message-top">
                  <h4>{msg.sender}</h4>
                  <span>{msg.date}</span>
                </div>

                <p className="role">{msg.role}</p>
                <p className="subject">{msg.subject}</p>
                <p className="preview">
                  {msg.content.substring(0, 80)}...
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="inbox-right">
          {selectedMessage ? (
            <div className="message-details">
              <h2 className="details-title">
                {selectedMessage.subject}
              </h2>

              <p className="details-from">
                From: {selectedMessage.sender} •{" "}
                {selectedMessage.role}
              </p>

              <p className="details-date">
                {selectedMessage.date}
              </p>

              <div className="details-content">
                {selectedMessage.content
                  .split("\n")
                  .map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
              </div>

              <p className="reply-label">Reply to parent</p>

              <textarea
                className="reply-textarea"
                placeholder="Type your reply here..."
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              />

              <button
                className="reply-button"
                onClick={() => {
                  console.log("Reply:", reply);
                  setReply("");
                }}
              >
                Send reply <img src={send} alt="send" />
              </button>
            </div>
          ) : (
            <div className="empty-state">
              <div className="icon">
                <img src={MessageIcon} alt="message" />
              </div>
              <h3>No messages selected</h3>
              <p>Select a message from the inbox to view and reply</p>
            </div>
          )}
        </div>
      </div>

      <FooterTeacher />
    </>
  );
};

export default Inbox;