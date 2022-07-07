import { Request, Response, Router } from "express"
import { Genres } from "../models/genre.model";

const genreRoutes = Router();

genreRoutes.get('/', async (req:Request,res:Response)=>{
    const genre = await Genres.find().exec();
    res.json({
        ok:true,
        genre
    })
});

genreRoutes.get('/byid/:id', async (req:Request,res:Response)=>{
    const id = req.params.id;
    if(!id){
        res.json({
            ok:false,
            error:"Id no existe"})
        return;
    }

    const genreDb = await Genres.findById(id).exec();
    
    if(!genreDb){
        res.json({
            ok:false,
            error:"El género no existe"})
        return;
    }

    res.json({
        ok:true,
        genreDb})
    
    return;
});

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

genreRoutes.put('/',(req:Request,res:Response)=>{
    const genreId = req.body._id;
    const genre = {
        name : req.body.name
    }

    Genres.findByIdAndUpdate(genreId,genre)
        .then(genreDb=>{
            res.json({
                ok:true,
                genreDb
            })
        })
});

genreRoutes.delete('/', async (req:Request,res:Response)=>{
    const id = req.query.id;
    await Genres.findByIdAndDelete(id);
    res.json({
        ok:true,
        id
    })
})

export default genreRoutes;