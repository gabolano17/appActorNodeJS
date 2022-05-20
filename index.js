const express = require('express');
const cors = require('cors');
const actor = require('./routes/actor');
const db = require('./database/db');
const app = express();
const port = process.env.PORT || 3000;

db.sync().then(() => {
    console.log('Conexion a la BD Exitosa!!')
}).catch(err => console.error('Error', err));

//MIDDLEWARE
app.use(cors())//Habilita otras app para hacer solicitudes a este servidor
app.disable('etag');
app.use('/actor/listar',actor);

app.listen(port, () => {
    console.log('Servidor ejecutando en el puerto', port)
})