import { Box, Paper, styled } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { ChatInput } from "../components";
import { useSocket } from "../hooks";
import { useLocation } from "react-router-dom";
import { Messages, IMessage } from "../components";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.mode === "light" ? "#E7EBF0" : "#1A2027",
  height: "100%",
}));

export const Chat = () => {
  const { socket } = useSocket();
  const divRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const username = query.get("username") || "";

  useEffect(() => {
    socket.emit("join", { username });
  }, [socket, username]);

  useEffect(() => {
    socket.on("receive_messages", (data) => {
      setMessages((prevMessages) => {
        if (Array.isArray(data)) {
          return [...prevMessages, ...data.reverse()];
        } else {
          return [...prevMessages, data];
        }
      });

      divRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  }, [socket]);

  const sendMessage = () => {
    if (currentMessage && currentMessage.trim().length !== 0 && username) {
      const messageData = {
        username,
        content: currentMessage,
      };

      socket.emit("msgSent", messageData);
      setCurrentMessage("");
    }
  };

  return (
    <StyledPaper>
      <Box
        mt={3}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width="100%"
      >
        <Box height="75vh" sx={{ overflowY: "auto" }}>
          <Messages messages={messages} />
          {/* This div is to scroll the chat to the bottom */}
          <div ref={divRef} style={{ height: 50 }}></div>
        </Box>
        <ChatInput
          text={currentMessage}
          setMessage={(text) => setCurrentMessage(text)}
          sendMessage={sendMessage}
          username={username}
        />
      </Box>
    </StyledPaper>
  );
};
