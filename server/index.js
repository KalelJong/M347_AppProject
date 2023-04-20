import pool from "./db.js"
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());  

app.get("/chat/:name", async (req, res) => {
  let conn;
  try
  {
    conn = await pool.getConnection();

    let sql = `SELECT * FROM desserts`;
    let result = await conn.query(sql);
    res.send(result);
  } catch (error) {
        throw error
    } finally {
        if (conn) {
          conn.release()
        }
    }
});
// const server = http.createServer(app);
// const io = new Server(server, {
// });

// io.on("connection", (socket) => {
//   console.log(`User Connected ${socket.id}`);

//   socket.on("join_room", (data) => {
//     socket.join(data);
//     console.log(`User with ID: ${socket.id} join room: ${data}`);
//   });

//   socket.on("send_message", (data) => {
//     socket.to(data.room).emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("User Disconnected", socket.id);
//   });
// });
// server.listen(3001, () => {
//   console.log("SERVER RUNNING");
// });
