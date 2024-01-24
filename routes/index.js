import express from 'express';
import { paginaInicio,
        paginaNosotros,
        paginaViajes,
        paginaTestimoniales,
        paginaDetalleViaje
} from '../controllers/paginasController.js';

const router = express.Router();

router.get('/', paginaInicio);  // req: lo que enviamos, res: lo que express nos responde


router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);

export default router;