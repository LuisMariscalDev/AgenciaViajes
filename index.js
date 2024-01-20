import express from 'express';
import router from './routes/index.js';

const app = express();


// Definir puerto
const port = process.env.PORT || 3000;

// Habilitar PUG
app.set('view engine', 'pug');

app.use(express.static('public'))

// Agregar router
app.use('/', router);


app.listen(port, () => {
    console.log(`El servidor está funcionano en el puerto ${port}`);
})