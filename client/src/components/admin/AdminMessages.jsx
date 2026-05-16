import React, { useState } from "react";
import "./Admin.css";
import { FaMoon, FaSun, FaBars, FaHome, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function AdminMessages() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [replyText, setReplyText] = useState("");

  const [chatData, setChatData] = useState({
    1: { 
      name: "Ahmed Al-Balushi", 
      messages: [{ sender: "user", text: "Hello, I have a question about my appointment." }] 
    },
    2: { 
      name: "Sara Al-Riyami", 
      messages: [{ sender: "user", text: "Can I change my center?" }] 
    },
    3: { 
      name: "Mazin Al-Harthy", 
      messages: [{ sender: "user", text: "Payment was successful, thank you." }] 
    }
  });

  const handleSend = () => {
    if (replyText.trim() && selectedUserId) {
      const newMessage = { sender: "admin", text: replyText };
      setChatData({
        ...chatData,
        [selectedUserId]: {
          ...chatData[selectedUserId],
          messages: [...chatData[selectedUserId].messages, newMessage]
        }
      });
      setReplyText("");
    }
  };

  const selectedUser = chatData[selectedUserId];

  
}