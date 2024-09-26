import express from 'express';
const router = express.Router();

import { abrecadastro, cadastro, abrelogin, login } from '../controllers/public.js';

router.get('/cadastro', abrecadastro)

router.post('/cadastro', cadastro)

router.get('/login', abrelogin)

router.post('/login', login)

export default router