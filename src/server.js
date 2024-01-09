import cors from "cors";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import morgan from "morgan";
import express from "express";

//importando archivos
import routes from "./routes/index.js";
import { notFoundController } from "./middlewares/index.js";

//Comienzo a definir servidores
const server = express();

dotenv.config();
const { UPLOADS_DIR } = process.env;

server.use(morgan("dev"));
server.use(express.json());
server.use(cors()); //acepta pedidos desde cualquier IP

// lo usare para usar req.files
server.use(fileUpload());

//middleware de rutas
server.use(routes);

//middleware de ruta no encontrada
server.use(notFoundController);
//middleware de manejo de errores
server.use(errorController);

export default server;
