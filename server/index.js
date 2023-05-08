const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

const app = express();
const port = 3000;
const apiRouter = express.Router();

app.use(bodyParser.json());
app.use("/api", apiRouter);

app.get("/chat/:name", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT 1 as val");
    console.log(rows); //[ {val: 1}, meta: ... ]
    const res = await conn.query("INSERT INTO myTable value (?, ?)", [
      1,
      "mariadb",
    ]);
    console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
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

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
