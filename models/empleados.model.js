const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema(
    {
        empleado_id: {
            type: String,
            required: true,
            max:60
        },
        nombres: {
            type: String,
            required: true,
            max:60
        },
        apellidos: {
            type: String,
            required: true,
            max:60
        },
        telefono: {
            type: String,
            required: true,
            max:15
        },
        mail: {
            type: String,
            required: false,
            max:70
        },
        departamento: {
            type: String,
            required: false,
            max:150
        },
        ciudad: {
            type: String,
            required: false,
            max:150
        },
        direccion: {
            type: String,
            required: false,
            max:150
        },
        fundacion: {
            type: String,
            required: false,
            max:150
        }
    });

module.exports = mongoose.model("empleados", EmpleadosSchema);