
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json()); //"Parsear JSON"

app.use(cors({
    origin: 'http://localhost:5173',
}));

app.get('/', (req, res) => {
    res.send('Olá!');
});

app.post("/translate", (req, res) => {
    // Lógica para traduzir a legenda da imagem
    console.log("Nova requisição!");

    const textENG = req.body["text"];

    res.send(traslate(textENG));
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});