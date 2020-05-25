const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
//console.log(app);

//Levantar servidor
app.listen(3000,()=>console.log('Servidor corriendo en el Puerto 3000'));

const heroes = JSON.parse(fs.readFileSync(path.resolve(__dirname , '../data/heroes.json')));
//console.log(heroes);

//Ruta
app.get('/', (req,res)=>res.send(heroes));
