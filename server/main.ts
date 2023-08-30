import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { Message } from "./models/message";

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.BASE_URL,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected! ${socket.id}`);

  socket.on("join", async ({ username }) => {
    if (username) {
      socket.join("default");
      console.log("user entered the room!");

      const lastMessages = await Message.findAll({
        limit: 10,
        order: [["createdAt", "DESC"]],
      });

      socket.emit("receive_messages", lastMessages);

      socket.emit("receive_messages", {
        username: "admin",
        content: `${username}, welcome to the chat.`,
        time: new Date(),
      });

      socket.broadcast.to("default").emit("receive_messages", {
        username: "admin",
        content: `${username} has joined the chat!`,
        time: new Date(),
      });
    }
  });

  socket.on("msgSent", async (data) => {
    if (data.username && data.content) {
      const message = await Message.create(data);
      io.to("default").emit("receive_messages", message);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected!", socket.id);
  });
});

server.listen(process.env.PORT, () => {
  console.log("server is running!");
});
