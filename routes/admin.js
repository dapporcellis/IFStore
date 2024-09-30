import express from 'express'
const router = express.Router()

import {listarusuarios, detalhe} from '../controllers/admin.js';

router.get("/admin/usuarios/lst", listarusuarios)
router.get("/admin/usuarios/detalhe/:id", detalhe)

export default router