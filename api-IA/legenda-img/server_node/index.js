
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

app.post("/translate", async (req, res) => {
    // Lógica para traduzir a legenda da imagem
    console.log("Nova requisição!");

    const textENG = req.body["text"];

    console.log("Texto recebido: " + textENG);
    
    const textPTBR = await Translator.translate(textENG);
    
    console.log("Texto traduzido: " + textPTBR[0]["translation_text"]);
    
    res.send(textPTBR);
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});