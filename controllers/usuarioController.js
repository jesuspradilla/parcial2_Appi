import Usuario from "../models/usuario.js";
import bcryptjs from "bcryptjs";


//Consultar usuarios

export async function getUsuarios(req, res, next) {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

//Crear usuario encriptando la password

export async function createUsuario(req, res, next) {
    try {
        const usuario = new Usuario(req.body);
        usuario.password = await bcryptjs.hash(req.body.password, 10);
        await usuario.save();
        res.json(usuario);
    } catch (error) {
        next(error);
    }
};

//actualizar usuario 

export async function updateUsuario(req, res, next) {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(usuario);
    } catch (error) {
        next(error);
    }
};
