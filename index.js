//importa a biblioteca express
import express from 'express';
//inicializa a aplicação usando a bibliotea express
const app = express();
//cria uma variável com o número da porta
const port = process.env.PORT || 3000;
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Converte o caminho do arquivo atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//configura o node para usar ejs como view (visão)
app.set('view engine', 'ejs');
//configura o node para receber dados dos formulários
app.use(express.urlencoded({ extended: true }));
//configura a pasta de arquivos estáticos (fotos, vídeos ...)
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'))


//importa os arquivos de rotas (os endereços são cadastrados neles)
import publicroutes from './routes/public.js';
import adminroutes from './routes/admin.js';

//usa os arquivos de rotas
app.use(publicroutes);
app.use(adminroutes);

//faz a aplicação ficar escurando a porta cadastrada
app.listen(port);