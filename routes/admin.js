import express from 'express'
const router = express.Router()

import {listarusuarios, detalhe, abreaddcategoria, addcategoria} from '../controllers/admin.js';

router.get("/admin/usuarios/lst", listarusuarios)
router.get("/admin/usuarios/detalhe/:id", detalhe)

//create do modelo categoria
router.get('/admin/categoria/add', abreaddcategoria)
router.post('/admin/categoria/add', addcategoria)


export default router