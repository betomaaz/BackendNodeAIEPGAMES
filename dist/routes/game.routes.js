"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const game_model_1 = require("../models/game.model");
const gameRoutes = (0, express_1.Router)();
gameRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const games = yield game_model_1.Games.find().populate('genres').exec();
    res.json({
        ok: true,
        games
    });
}));
gameRoutes.post('/', (req, res) => {
    const game = {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        ano: req.body.ano,
        portada: req.body.portada,
        genres: req.body.genres
    };
    const arrGenres = game.genres.split(",");
    game.genres = arrGenres;
    game_model_1.Games.create(game)
        .then(gameDb => {
        res.json({
            ok: true,
            game: gameDb
        });
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});
exports.default = gameRoutes;
