import express from 'express';
import dotenv from 'dotenv';
import dbconnection from './DB/conection.js';
import inmueblesRoutes from './routes/InmueblesRouters.js';
import oficinasRoutes from './routes/OficinasRoutes.js';
import clientesRoutes from './routes/ClientesRoutes.js';
import usuariosRoutes from './routes/UsuariosRoutes.js';
import authRoutes from './routes/AuthRoutes.js';


//Inicializar express()
const app = express();
dotenv.config();

//Mensinar que las respuestas seran en tipo Json
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/inmuebles", inmueblesRoutes);
app.use("/api/oficinas", oficinasRoutes);
app.use("/api/clientes", clientesRoutes);



dbconnection();

//Levantar el server
app.listen(process.env.PORT,() => {
    console.log(`Servidor Corriendo en Puero:${process.env.PORT}`)
})