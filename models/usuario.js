import mongoose  from "mongoose";


const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    identificacion: {
        type: String,
        required: [true, 'La identificación es obligatoria'],
        unique: true
    },
    direccion: {
        type: String,
        required: [true, 'La Direcciòn es obligatorio'],
    },
    telefono: {
        type: String,
        required: [true, 'El telefono es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    estado: {
        type: Boolean,
        default: true
    }
});

const usuario = mongoose.model('Usuario', usuarioSchema);

export default usuario;