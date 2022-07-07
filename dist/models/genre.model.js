"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genres = void 0;
const mongoose_1 = require("mongoose");
const genreSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    games: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Games'
        }]
});
exports.Genres = (0, mongoose_1.model)('Genres', genreSchema);
