import Oficina from "../models/oficina.js";


//Consultar las oficinas

export async function getOficinas(req, res, next){
  try {
    const ofininas = await Oficina.find();
    res.json(ofininas);
  } catch (error) {
    next(error);
  }
};
export async function createOficina(req, res, next){
  try {
    const ofinina = new Oficina(req.body);
    await ofinina.save();
    res.json(ofinina);
  } catch (error) {
    next(error);
  }
};

//Actualizar una oficina existente
export async function updateOficina(req, res, next){
  try {
    const ofinina = await Oficina.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(ofinina);
  } catch (error) {
    next(error);
  }
};

//Eliminar una oficina existente
export async function deleteOficina(req, res, next){
  try {
    const ofinina = await Oficina.findByIdAndDelete(req.params.id);
    res.json(ofinina);
  } catch (error) {
    next(error);
  }
};
