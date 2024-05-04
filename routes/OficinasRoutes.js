import express  from "express";
import {authenticateToken} from "../middlewares/authMiddleware.js";
import {
    getOficinas,
    createOficina,
    updateOficina,
    deleteOficina
} from "../controllers/oficinasController.js";

const oficinasRoutes = express.Router();

oficinasRoutes.get("/",authenticateToken, getOficinas);
oficinasRoutes.post("/create",authenticateToken, createOficina);
oficinasRoutes.put('/:id',authenticateToken, updateOficina);
oficinasRoutes.delete("/delete/:id",authenticateToken, deleteOficina);


export default oficinasRoutes;