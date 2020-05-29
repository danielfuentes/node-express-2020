const express = require('express');
const app = express();

//Levantar servidor
app.listen(3000,()=>console.log('Servidor corriendo en el Puerto 3000'));

//LLamar el archivo que contiene las rutas y luego debemos usar ese archivo
const webRoutes  = require('./routes/webRoutes');
app.use(webRoutes);


