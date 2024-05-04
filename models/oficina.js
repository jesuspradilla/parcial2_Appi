import mongoose  from "mongoose";


const oficinaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
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
    zona: {
        type: String,
        required: [true, 'La zona es obligatorio']
    },
    estado: {
        type: String,
        required: [true, 'El estado es obligatorio'],
        enum: ['ACTIVA', 'INACTIVA']
    }
});

const oficina = mongoose.model('Oficina', oficinaSchema);

export default oficina;