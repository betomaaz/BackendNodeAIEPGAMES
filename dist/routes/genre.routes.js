"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const genre_model_1 = require("../models/genre.model");
const genreRoutes = (0, express_1.Router)();
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
exports.default = genreRoutes;
