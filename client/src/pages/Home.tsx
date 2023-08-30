import {
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.mode === "light" ? "#E7EBF0" : "#1A2027",
  flex: 1,
}));

export const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  return (
    <StyledPaper>
      <Card sx={{ mt: 5 }}>
        <CardContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            gap={3}
          >
            <Typography variant="h4">Welcome to Chat App</Typography>
            <Typography variant="h5">Please enter a username</Typography>
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={() =>
                username ? navigate(`/chat?username=${username}`) : null
              }
            >
              Join
            </Button>
          </Box>
        </CardContent>
      </Card>
    </StyledPaper>
  );
};
