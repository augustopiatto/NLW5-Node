import express from "express"
import "./database"; //importa por padrão o index.ts e o createConnection

const app = express();

app.get("/", (request, response) => {
  return response.send("Olá NLW5");
});

app.post("/users", (request, response) => {
  return response.json(({ messsage: "Usuário salvo com sucesso!"}));
});

app.listen(3333, () => console.log("Server tá rodando!"));
