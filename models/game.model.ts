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
    },
    genres:[{
        type :Schema.Types.ObjectId,
        ref : 'Genres'
    }]
});

interface IGame extends Document{
    titulo:string;
    descripcion:string;
    ano:number;
    portada:string
}

export const Games = model<IGame>('Games',gameSchema)