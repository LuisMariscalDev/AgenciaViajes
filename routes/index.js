import express from 'express';

const router = express.Router();

router.get('/', (req, res) => { // req: lo que enviamos, res: lo que express nos responde
    res.render('Inicio')
});

router.get('/nosotros', (req, res) => {
    res.render('Nosotros')
})

export default router;