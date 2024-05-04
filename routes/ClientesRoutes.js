import express  from "express";
import {authenticateToken} from "../middlewares/authMiddleware.js";

import {
    getClientes,
    createCliente,
    updateCliente
} from "../controllers/clientesController.js";

const clientesRoutes = express.Router();

clientesRoutes.get("/",authenticateToken, getClientes);
clientesRoutes.post("/create",authenticateToken, createCliente);
clientesRoutes.put('/:id',authenticateToken, updateCliente);


export default clientesRoutes;