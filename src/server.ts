import app from "./app";
import "reflect-metadata";
import "./database";
import { Server, Socket } from "socket.io";
import { createServer } from "http";

const httpServer = createServer(app);

const io = new Server(httpServer, { cors: { origin: "*" , methods:['GET','POST']} });



const server = app.listen(3000, () => {
  console.log("🏃 Running Server");
});

io.listen(server);

io.on('connection', socket => {
  socket.on('message', (msg) => {
    console.log(msg)
  })
})

