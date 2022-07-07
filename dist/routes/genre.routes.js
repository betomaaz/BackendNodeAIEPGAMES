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
const genre_model_1 = require("../models/genre.model");
const genreRoutes = (0, express_1.Router)();
genreRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const genre = yield genre_model_1.Genres.find().exec();
    res.json({
        ok: true,
        genre
    });
}));
genreRoutes.get('/byid/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!id) {
        res.json({
            ok: false,
            error: "Id no existe"
        });
        return;
    }
    const genreDb = yield genre_model_1.Genres.findById(id).exec();
    if (!genreDb) {
        res.json({
            ok: false,
            error: "El género no existe"
        });
        return;
    }
    res.json({
        ok: true,
        genreDb
    });
    return;
}));
genreRoutes.post('/', (req, res) => {
    const genre = {
        name: req.body.name
    };
    genre_model_1.Genres.create(genre)
        .then(genreDb => {
        res.json({
            ok: true,
            obj: genreDb
        });
    }).catch(err => {
        res.json({
            ok: false,
            error: err
        });
    });
});
genreRoutes.put('/', (req, res) => {
    const genreId = req.body._id;
    const genre = {
        name: req.body.name
    };
    genre_model_1.Genres.findByIdAndUpdate(genreId, genre)
        .then(genreDb => {
        res.json({
            ok: true,
            genreDb
        });
    });
});
genreRoutes.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    yield genre_model_1.Genres.findByIdAndDelete(id);
    res.json({
        ok: true,
        id
    });
}));
exports.default = genreRoutes;
