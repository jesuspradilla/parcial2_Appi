import express  from "express";
import {authenticateToken} from "../middlewares/authMiddleware.js";
import {
    createInmueble,
    getInmuebleByReference,
    listarInmuebles,
    createInmuebleVisit
} from "../controllers/inmueblesController.js";

const inmueblesRoutes = express.Router();

inmueblesRoutes.post("/create",authenticateToken, createInmueble);
inmueblesRoutes.get('/:numero_referencia',authenticateToken, getInmuebleByReference);
inmueblesRoutes.get("/",authenticateToken, listarInmuebles);
inmueblesRoutes.get("/visita/create/:numero_referencia",authenticateToken, createInmuebleVisit);


export default inmueblesRoutes;