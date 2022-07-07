import { request, Request, Response, Router } from "express";
import { Games } from "../models/game.model";

const gameRoutes = Router();

gameRoutes.get('/',async (req:Request,res:Response)=>{
    const games = await Games.find().exec();
    res.json({
        ok:true,
        games
    })
})

gameRoutes.post('/',(req:Request,res:Response)=>{

    const game = {
        titulo : req.body.titulo,
        descripcion : req.body.descripcion,
        ano : req.body.ano,
        portada : req.body.portada,
        genres : req.body.genres
    }

    const arrGenres = game.genres.split(",");

    game.genres = arrGenres;

    Games.create(game)
        .then(gameDb=>{
            res.json({
                ok:true,
                game:gameDb
            })
        }).catch(err=>{
            res.json({
                ok:false,
                err
            })
        })

    
})

export default gameRoutes;