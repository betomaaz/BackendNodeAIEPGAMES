import { Document, model, Schema } from "mongoose";


const genreSchema = new Schema({
    name : {
        type: String,
        required : [true,'El nombre es requerido']
    },
    games : [{
        type: Schema.Types.ObjectId,
        ref: 'games'
    }]
});

interface IGenre extends Document{
    name:string
}

export const Genres = model('Genres',genreSchema)