import bodyParser from "body-parser";
import mongoose from "mongoose";
import Server from "./classes/server";
import defaultRoutes from "./routes/default.routes";
import userRoutes from "./routes/user.routes";
import cors from 'cors';

const server = new Server();

server.app.use(cors());
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());
server.app.use('/',defaultRoutes);
server.app.use('/user',userRoutes);

mongoose.connect('mongodb://localhost:27017/bdaiepgames',(error)=>{
    if(error){
        throw error;
    }
    console.log('Base de datos online');
})

server.Start(()=>{
    console.log(`Servidor corriendo en puerto: ${server.port}`)
})