import Usuario from '../models/usuario.js';
import Categoria from '../models/categoria.js';

export async function listarusuarios(req, res){
    const usuarios = await Usuario.find({}).catch(function(err){console.log(err)});
    res.render('admin/usuarios/lst', {usuarios: usuarios});
}

export async function detalhe(req, res) {
    const usuario = await Usuario.findById(req.params.id);
    res.render('admin/usuarios/detalhe', {usuario: usuario});
}

export async function abreaddcategoria(req, res) {
    res.render('admin/categoria/add')
}

export async function addcategoria(req, res) {
    await Categoria.create({
        nome:req.body.nome
    })
    res.redirect('/admin/categoria/add')
}

export async function listarcategoria(req, res) {
    const categorias = await Categoria.find({})
    res.render('admin/categoria/lst',{Categorias: categorias});
}

export async function filtrarcategoria(req, res) {
    const categorias = await Categoria.find({nome: new RegExp(req.body.pesquisar,"i")})
    res.render('admin/categoria/lst',{Categorias: categorias});
}

export async function deletacategoria(req, res) {
    await Categoria.findByIdAndDelete(req.params.id)
    res.redirect('/admin/categoria/lst')
}

export async function abreedtcategoria(req, res){
    const categoria = await Categoria.findById(req.params.id)
    res.render('admin/categoria/edt.ejs',{Categoria: categoria})
}

export async function edtcategoria(req, res){
    await Categoria.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/admin/categoria/lst')
}

