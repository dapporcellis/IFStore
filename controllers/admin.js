import Usuario from '../models/usuario.js';

export async function listarusuarios(req, res){
    const usuarios = await Usuario.find({});
    res.render('admin/usuarios/lst', {usuarios: usuarios});
}