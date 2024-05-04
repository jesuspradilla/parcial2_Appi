import Inmueble from "../models/inmueble.js";

export async function createInmueble(req, res, next){
  try {
    const inmueble = new Inmueble(req.body);
    await inmueble.save();
    res.json(inmueble);
  } catch (error) {
    next(error);
  }
};

export async function getInmuebleByReference(req, res, next){
  try {
    const inmueble = await Inmueble.findOne({ numero_referencia: req.params.numero_referencia });
    if (!inmueble) {
      return res.status(404).json({ message: 'No se encontro el Inmueble' });
    }
    res.json(inmueble);
  } catch (error) {
    next(error);
  }
}

//Funcion para listar los inmuebles disponibles para venta o alquiler

export async function listarInmuebles(req, res, next){
  try {
    const inmuebles = await Inmueble.find();
    res.json(inmuebles);
  } catch (error) {
    next(error);
  }
}

//funcion para crear una visita a un inmueble

export async function createInmuebleVisit(req, res, next){
  try {
    const inmueble = await Inmueble.findOne({ numero_referencia: req.params.numero_referencia });

    if (!inmueble) {
      return res.status(404).json({ message: 'No se encontro el Inmueble' });
    }
    // Agregar la información de la visita al inmueble
    inmueble.visitas.push(req.body);

    await inmueble.save();
    res.json(inmueble);
  } catch (error) {
    next(error);
  }
}




    
