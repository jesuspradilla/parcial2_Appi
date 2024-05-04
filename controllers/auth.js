import Usuario from "../models/usuario.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';

//logear a usuario y retornar el jwt

export async function login(req, res){
    const { correo, password } = req.body;
    try {
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(404).json({ message: 'Las credenciales son incorrectas' });
        }
        
        
        const considencia = await bcryptjs.compare(password, usuario.password);
        if (!considencia) {
            return res.status(404).json({ message: 'Las credenciales son incorrectas' });
        }

        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        const payload =  {
            uid : usuario.id 
        };

                
        const token = jwt.sign(payload, jwtSecretKey, { expiresIn: '1h' });

        res.json({ token });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};