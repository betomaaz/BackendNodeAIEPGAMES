import { model, Schema } from "mongoose";


const gameSchema = new Schema({
    titulo:{
        type:String,
        required : [true,'El título es requerido']
    },
    descripcion:{
        type:String,
        required : [true,'La descripción es requerida']
    },
    ano:{
        type:Number,
        required : [true,'El año es requerido']
    },
    portada:{
        type:String,
        required : [true,'La portada es requerida']
    }
});

interface IGame extends Document{
    titulo:string;
    descripcion:string;
    ano:number;
    portada:string
}

export const Game = model<IGame>('Games',gameSchema)