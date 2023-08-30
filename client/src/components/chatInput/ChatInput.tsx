import { TextField, Box, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

interface IChatInputProps {
  text: string;
  username: string;
  setMessage: (text: string) => void;
  sendMessage: () => void;
}

export const ChatInput = ({
  text,
  username,
  setMessage,
  sendMessage,
}: IChatInputProps) => {
  return (
    <Box display="flex" justifyContent="center" gap={2}>
      <TextField
        variant="outlined"
        label="write a message..."
        value={text}
        sx={{ width: "50%" }}
        onChange={(e) => setMessage(e.target.value)}
        multiline
        maxRows={2}
      />
      {
        <IconButton
          color="primary"
          onClick={sendMessage}
          disabled={!text || text.trim().length === 0 || !username}
        >
          <SendIcon fontSize="large" />
        </IconButton>
      }
    </Box>
  );
};
