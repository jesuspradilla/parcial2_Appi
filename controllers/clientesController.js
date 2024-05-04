import Cliente from "../models/cliente.js";

//Consultar clientes

export async function getClientes(req, res, next) {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        next(error);
    }
};

//Crear clientes

export async function createCliente(req, res, next) {
    try {
        const cliente = new Cliente(req.body);
        await cliente.save();
        res.json(cliente);
    } catch (error) {
        next(error);
    }
};

//Actualizar Cliente

export async function updateCliente(req, res, next) {
    try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(cliente);
    } catch (error) {
        next(error);
    }
};




    
