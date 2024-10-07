import express from 'express'
const router = express.Router()

import {    
        abreedtcategoria, 
        edtcategoria, 
        listarusuarios, 
        detalhe, 
        abreaddcategoria,
        deletacategoria, 
        addcategoria, 
        listarcategoria, 
        filtrarcategoria,
        abreaddproduto,
        addcproduto,
        listarproduto,
        filtrarproduto,
        deletaproduto,
        abreedtproduto,
        edtproduto
    } from '../controllers/admin.js';

router.get("/admin/usuarios/lst", listarusuarios)
router.get("/admin/usuarios/detalhe/:id", detalhe)

//create do modelo categoria (create)
router.get('/admin/categoria/add', abreaddcategoria)
router.post('/admin/categoria/add', addcategoria)

//rotas do modelo categoria (read)
router.get('/admin/categoria/lst', listarcategoria)
router.post('/admin/categoria/lst', filtrarcategoria)

//rota do modelo categoria (delete)
router.get('/admin/categoria/del/:id', deletacategoria)

//rota do modelo categoria (editar)
router.get('/admin/categoria/edt/:id', abreedtcategoria)
router.post('/admin/categoria/edt/:id', edtcategoria)

//create do modelo produto (create)
router.get('/admin/produto/add', abreaddproduto)
router.post('/admin/produto/add', addcproduto)

//rotas do modelo produto (read)
router.get('/admin/categoria/lst', listarproduto)
router.post('/admin/produto/lst', filtrarproduto)

//rota do modelo produto (delete)
router.get('/admin/produto/del/:id', deletaproduto)

//rota do modelo produto (editar)
router.get('/admin/produto/edt/:id', abreedtproduto)
router.post('/admin/produto/edt/:id', edtproduto)
export default router