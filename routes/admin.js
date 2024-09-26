import express from 'express'
const router = express.Router()

import {listarusuarios} from '../controllers/admin.js';

router.get("/admin/usuarios/lst", listarusuarios)

export default router