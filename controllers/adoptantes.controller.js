const Adoptante = require("../models/adoptantes.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function (req, res) {
    let adoptante = new Adoptante({
        cedula: req.body.cedula,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        telefono: req.body.telefono,
        mail: req.body.mail,
        departamento: req.body.departamento,
        ciudad: req.body.ciudad,
        direccion: req.body.direccion
    })

    adoptante.save(function (err) {
        if (err) {
            console.error(err);
            response.exito = false;
            response.msg = "Error al guardar el adoptante";
            res.json(response);
            return;
        }

        response.exito = true;
        response.msg = "El adoptante se guardó correctamente";
        res.json(response)
    })
}

exports.find = function (req, res) {
    Adoptante.find(function (err, adoptantes) {
        res.json(adoptantes)
    })
}

exports.findOne = function (req, res) {
    Adoptante.findOne({_id: req.params.id}, function (err, adoptante) {
        res.json(adoptante)
    })
}


exports.update = function (req, res) {
    let adoptante = {
        cedula: req.body.cedula,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        telefono: req.body.telefono,
        mail: req.body.mail,
        departamento: req.body.departamento,
        ciudad: req.body.ciudad,
        direccion: req.body.direccion
    }

    Adoptante.findByIdAndUpdate(req.params.id, {$set: adoptante}, function (err) {
        if (err) {
            console.error(err);
            response.exito = false;
            response.msg = "Error al modificar el adoptante";
            res.json(response);
            return;
        }

        response.exito = true;
        response.msg = "El adoptante se modifico correctamente";
        res.json(response);
    })
}

exports.remove = function (req, res) {
    Adoptante.findByIdAndRemove({_id: req.params.id}, function (err) {
        if (err) {
            console.error(err);
            response.exito = false;
            response.msg = "Error al eliminar el adoptante";
            res.json(response);
            return;
        }

        response.exito = true;
        response.msg = "El adoptante se ha eliminado correctamente";
        res.json(response);
    })
}