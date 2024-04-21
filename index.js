const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send(`Hello World from port ${port}! `)
  console.log(process.env.PORT)
});

app.get('/myname/:name/:edad', (req, res) => { // :name es un parámetro de la URL
  const name = req.params.name; // req.params es un objeto que contiene los parámetros de la URL
  const edad = req.params.edad; 
  res.send(`Hello, my name is ${name} and im ${edad} years old!`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});