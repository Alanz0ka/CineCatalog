// Importando os pacotes
const express = require("express");
const port = 3000;
app = express();

// iniciando o código
app.get("/", (req, res)=>
res.send("<h1>Teste server</h1>")
);

app.listen(port, ()=>
console.log(`Servidor rodando na porta ${port}`)
);

module.exports = app