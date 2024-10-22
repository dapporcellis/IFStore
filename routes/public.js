import express from 'express';
const router = express.Router();
import multer from 'multer';
const upload = multer({ dest: 'public/usuarios/' })

import { abrecadastro, cadastro, abrelogin, login } from '../controllers/public.js';

router.get('/cadastro', abrecadastro)

router.post('/cadastro', upload.single('foto'), cadastro)

router.get('/login', abrelogin)

router.post('/login', login)

export default router