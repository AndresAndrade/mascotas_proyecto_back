const Fundacion = require("../models/fundaciones.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function (req, res) {
    let fundacion = new Fundacion({
        fundacion_id: req.body.fundacion_id,
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        mail: req.body.mail,
        departamento: req.body.departamento,
        ciudad: req.body.ciudad,
        direccion: req.body.direccion
    })

    fundacion.save(function (err) {
        if (err) {
            console.error(err);
            response.exito = false;
            response.msg = "Error al guardar la fundación";
            res.json(response);
            return;
        }

        response.exito = true;
        response.msg = "La fundación se guardó correctamente";
        res.json(response)
    })
}

exports.find = function (req, res) {
    Fundacion.find(function (err, fundaciones) {
        res.json(fundaciones)
    })
}

exports.findOne = function (req, res) {
    Fundacion.findOne({_id: req.params.id}, function (err, fundacion) {
        res.json(fundacion)
    })
}


exports.update = function (req, res) {
    let fundacion = {
        fundacion_id: req.body.fundacion_id,
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        mail: req.body.mail,
        departamento: req.body.departamento,
        ciudad: req.body.ciudad,
        direccion: req.body.direccion
    }

    Fundacion.findByIdAndUpdate(req.params.id, {$set: fundacion}, function (err) {
        if (err) {
            console.error(err);
            response.exito = false;
            response.msg = "Error al modificar la fundación";
            res.json(response);
            return;
        }

        response.exito = true;
        response.msg = "La fundación se modifico correctamente";
        res.json(response);
    })
}

exports.remove = function (req, res) {
    Fundacion.findByIdAndRemove({_id: req.params.id}, function (err) {
        if (err) {
            console.error(err);
            response.exito = false;
            response.msg = "Error al eliminar la fundación";
            res.json(response);
            return;
        }

        response.exito = true;
        response.msg = "El empleado eliminado correctamente";
        res.json(response);
    })
}