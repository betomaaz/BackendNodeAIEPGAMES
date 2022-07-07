import { request, Request, Response, Router } from "express";
import { Game } from "../models/game.model";

const gameRoute = Router();

gameRoute.get('/',async (req:Request,res:Response)=>{
    const games = await Game.find().exec();
    res.json({
        ok:true,
        games
    })
})

gameRoute.post('/',(req:Request,res:Response)=>{

    const game = {
        titulo : req.body.titulo,
        descripcion : req.body.descripcion,
        ano : req.body.ano,
        portada : req.body.portada
    }

    Game.create(game)
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

export default gameRoute;