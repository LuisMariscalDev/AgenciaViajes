import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola Mundo desde NodeJS')
})

export default router;