import React from "react";
import { Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { IMessage, Message } from "./message";

interface IMessagesProps {
  messages: IMessage[];
}

export const Messages = ({ messages }: IMessagesProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      sx={{ px: { xs: 1, sm: 5 } }}
    >
      {messages.map((message) => (
        <Message key={message.id || uuidv4()} message={message} />
      ))}
    </Box>
  );
};
