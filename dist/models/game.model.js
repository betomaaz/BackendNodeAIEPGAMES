"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const mongoose_1 = require("mongoose");
const gameSchema = new mongoose_1.Schema({
    titulo: {
        type: String,
        required: [true, 'El título es requerido']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es requerida']
    },
    ano: {
        type: Number,
        required: [true, 'El año es requerido']
    },
    portada: {
        type: String,
        required: [true, 'La portada es requerida']
    }
});
exports.Game = (0, mongoose_1.model)('Games', gameSchema);
