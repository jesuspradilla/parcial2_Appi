//const mongoose = require('mongoose');
import mongoose from "mongoose";

const dbconnection = async () => {
    console.log("Conectando a Bade de datos...");
    try {
        const uri = process.env.DB_CONNECTION;
        await mongoose.connect(uri);
        console.log('Conectado a MongoDB Atlas');
    } catch (error) {
        console.error('Error al conectar a MongoDB Atlas', error);
        process.exit(1);  
    }
};

export default dbconnection;
