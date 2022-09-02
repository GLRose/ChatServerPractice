const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { createServer } = require("http");
const cors = require("cors");
app.use(cors());

dotenv.config();
dotenv.config({
  path: './config.env'
})
const port = process.env.PORT;
const origin = process.env.ORIGIN;

const httpServer = createServer(app);

const io = require("socket.io")(httpServer, {
  cors: {
    origin:  origin,
    methods: ["Get", "Post"],
  }
});


io.on("connection", (socket) => {
  console.log(`Client Connected: ${socket.id}`); 
  // socket.on("hello", (arg) => {
  //   console.log(arg); // world
  // });
});

//Routes

//The home page for the react app this will serve as the page that will have a join button 
// app.get('/', (req, res) => {
 
// });

//there will be a button that says "join room" this will be where the chat room is
// app.get('/chatroom', (req, res) => {

// });

httpServer.listen(port, () => {
  console.log(`Now listening on PORT:${port}`);
});




