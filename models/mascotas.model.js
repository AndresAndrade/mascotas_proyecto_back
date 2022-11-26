const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MascotasSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            max: 60//Cantidad de caracteres
        },
        edad: {
            type: Number,
            required: true,
            max: 25 //Máximo de la edad, en este caso no son caracteres
        },
        especie: {
            type: String,
            required: true,
            max: 60
        },
        raza: {
            type: String,
            required: true,
            max: 60
        }
    });

module.exports = mongoose.model("mascotas", MascotasSchema);