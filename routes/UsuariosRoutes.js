import express  from "express";
import {authenticateToken} from "../middlewares/authMiddleware.js";
import { check } from "express-validator";
import {
    getUsuarios,
    createUsuario,
    updateUsuario
} from "../controllers/usuarioController.js";

const usuariosRoutes = express.Router();

usuariosRoutes.get("/", authenticateToken,getUsuarios);
usuariosRoutes.put('/:id', authenticateToken, updateUsuario);

usuariosRoutes.post("/create",[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('identificacion','La identificacion es obligatoria').not().isEmpty(),
    check('direccion','La dirección es obligatoria').not().isEmpty(),
    check('telefono','El telefono es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),
    check('password').isLength({min: 8}),
    
] , authenticateToken, createUsuario);

export default usuariosRoutes;