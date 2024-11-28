import express from 'express';
const router = express.Router();
import multer from 'multer';
import { upload } from "../config/multer.js";

import { abrecadastro, cadastro, abrelogin, login, abreindex } from '../controllers/public.js';

router.get('/cadastro', abrecadastro)

router.post('/cadastro', upload.single('foto'), cadastro)

router.get('/login', abrelogin)

router.post('/login', login)

router.get('/', abreindex)

export default router