import express from 'express';
import router from './routes/index.js';

const app = express();


// Definir puerto
const port = process.env.PORT || 3000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    next();
})

// Definir la carpeta pública
app.use(express.static('public'))

// Agregar router
app.use('/', router);


app.listen(port, () => {
    console.log(`El servidor está funcionano en el puerto ${port}`);
})