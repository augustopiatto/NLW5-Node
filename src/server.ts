import express from "express";
import "./database"; //importa por padrão o index.ts e o createConnection
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server tá rodando!"));
