import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

import usuario from './models/usuario.js'

app.get('/cadastro', (req, res)=>{
    res.render('cadastro')
})

app.post('/cadastro', async (req, res)=>{
    //esse comando equivale a um if
    const admin = req.body.admin=="on" ? true : false;

    const novousuario = new usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        endereco: req.body.endereco,
        foto: req.body.foto,
        telefone: req.body.telefone,
        cpf: req.body.cpf,
        admin: admin
    })

    await novousuario.save();
    res.send("Cadastrado com sucesso!")
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.post('/login', (req, res)=>{
    res.redirect('/admin/usuarios/lst')
})

app.listen(port);