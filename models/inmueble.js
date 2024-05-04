import mongoose  from "mongoose";


const inmuebleSchema = new mongoose.Schema({
    numero_referencia: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    tipo: {
        type: String,
        required: [true, 'El tipo es obligatorio'],
    },
    superficie: {
        type: Number,
        required: [true, 'La superficie es obligatoria'],
    },
    nuevo:{
        type: Boolean,
        default: false
    },
    direccion: {
        type: String,
        required: [true, 'La Direcciòn es obligatorio'],
    },
    precio: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        required: [true, 'El estado es obligatorio'],
        enum: ['EN VENTA', 'ALQUILER']
    },
    propietario: {
        nombre: {
            type: String,
            required: [true, 'El nombre es obligatorio']
        },
        correo: {
            type: String,
            required: [true, 'El correo es obligatorio'],
            unique: true
        },
        celular_contacto: {
            type: String,
            required: [true, 'El celular es obligatorio']
        },
        telefono_contacto: {
            type: String,
        }
    },
    caracteristicas: {
        numero_habitaciones: {
            type: Number,
            default: 0
        },
        numero_baños: {
            type: Number,
            default: 0
        },
        piscina: {
            type: Boolean,
            default: false
        },
        acondicionado: {
            type: Boolean,
            default: false           
        },
        parqueadero:{
            type: Boolean,
            default: false
        },
        servicios:{
            gas:{
                type: Boolean,
                default: true
            },
            electrico:{
                type: Boolean,
                default: true
            },
            acueducto:{
                type: Boolean, 
                default: true
            },
        },
        otro:{
            type: String,
            default: null
        }
    },
    oficina: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Oficina',
        required: true
    },
    visitas: [{
        cliente: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cliente',
            required: true
        },
        fecha: {
            type: Date,
            required: [true, 'La fecha es obligatoria']
        },
        comentario: {
            type: String,
        },
        estado:{
            type: String,
            required: [true, 'El estado es obligatorio'],
            enum: ['POR VISITAR', 'VISITADO']
        }      
        
    }]

});

const inmueble = mongoose.model('Inmueble', inmuebleSchema);

export default inmueble;