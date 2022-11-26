const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FundacionesSchema = new Schema(
    {
        fundacion_id: {
            type: String,
            required: true,
            max: 60
        },
        nombre: {
            type: String,
            required: true,
            max: 150//Cantidad de caracteres
        },
        telefono: {
            type: String,
            required: true,
            max: 15
        },
        mail: {
            type: String,
            required: true,
            max: 70
        },
        departamento: {
            type: String,
            required: true,
            max: 150
        },
        ciudad: {
            type: String,
            required: true,
            max: 150
        },
        direccion: {
            type: String,
            required: true,
            max: 150
        }
    });

module.exports = mongoose.model("fundaciones", FundacionesSchema);