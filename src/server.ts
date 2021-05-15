import app from "./app";
import "reflect-metadata";
import "./database";
import { Server, Socket } from "socket.io";
import { createServer } from "http";
import { TalksService } from "./services";

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

const server = app.listen(3000, () => {
  console.log("🏃 Running Server");
});

io.listen(server);

io.on("connection", (socket) => {
  console.log('Usuário conectado')
  socket.on("newMessage", async ({ senderId, destinataryId, message }) => {
    try {
      const talksService = new TalksService();
      console.log(`
    - Nova comunicação -
    Mensagem enviada de : ${senderId}
    Para: ${destinataryId}
    Mensagem: ${message}
    `);
      const updatedMessages = await talksService.sendMessage({
        senderId,
        destinataryId,
        message,
      });
      socket.emit("updatedMessages", updatedMessages);
    } catch (error) {
      console.log(`Erro ao retornar mensagem: ${error.message}`)
      socket.emit("errors", error.message)
    }
  });
});
