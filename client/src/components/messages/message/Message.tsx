import { Avatar, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { stringAvatar } from "../../../helpers";
import moment from "moment";

export interface IMessage {
  id: number;
  content: string;
  username: string;
  createdAt: string;
}

interface IMessageProps {
  message: IMessage;
}

export const Message = ({
  message: { content, username, createdAt },
}: IMessageProps) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const connectedUsername = query.get("username") || "";

  const theme = useTheme();
  const isSameUserMessage = connectedUsername === username;

  return (
    <Box
      display="flex"
      justifyContent={username === "admin" ? "center" : "unset"}
      gap={2}
      flexDirection={isSameUserMessage ? "row-reverse" : "row"}
    >
      {username !== "admin" && <Avatar {...stringAvatar(username)} />}

      <Box display="flex" flexDirection="column" gap={1} maxWidth="50%">
        {username !== "admin" && (
          <Typography
            variant="caption"
            textAlign={
              username === "admin"
                ? "center"
                : isSameUserMessage
                ? "right"
                : "left"
            }
          >
            {moment(createdAt).format("MMMM Do, H:mm")}
          </Typography>
        )}
        <Box
          padding={theme.spacing(1, 2)}
          bgcolor={
            username === "admin"
              ? "success.light"
              : isSameUserMessage
              ? "primary.main"
              : "secondary.main"
          }
          sx={{
            borderRadius: theme.spacing(2),
            borderTopRightRadius:
              isSameUserMessage && username !== "admin" ? 0 : theme.spacing(2),
            borderTopLeftRadius:
              !isSameUserMessage && username !== "admin" ? 0 : theme.spacing(2),
            wordBreak: "break-word",
          }}
        >
          <Typography variant="body1" color="white">
            {content}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
