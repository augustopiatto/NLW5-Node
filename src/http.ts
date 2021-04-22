import express from "express";
import "./database"; //importa por padrão o index.ts e o createConnection
import { routes } from "./routes";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view_engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
})

const http = createServer(app);

const io = new Server(http);

io.on("connection", (socket: Socket) => {
  console.log("Seconectou", socket.id);
});

app.use(express.json());

app.use(routes);

export { http, io }