import { Request, Response, Router } from "express"
import { Genres } from "../models/genre.model";

const genreRoutes = Router();

genreRoutes.post('/',(req:Request,res:Response)=>{

    const genre = {
        name : req.body.name
    }

    Genres.create(genre)
    .then(genreDb=>{
        res.json({
            ok:true,
            obj:genreDb
        })
    }).catch(err=>{
        res.json({
            ok:false,
            error:err
        })
    })
})

export default genreRoutes;