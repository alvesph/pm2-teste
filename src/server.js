const express = require('express');
const app = express();
const PORT = 5001;

app.get('/', (req, res) => {
  res.send("Tudo no AR");
});

app.get('/health', (req, res) => {
  res.send('Olá DevOps');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
