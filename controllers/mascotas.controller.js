const Mascota = require("../models/mascotas.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req, res){
    let mascota = new Mascota({
        nombre: req.body.nombre,
        edad: req.body.edad,
        especie: req.body.especie,
        raza: req.body.raza
    })

    mascota.save(function(err){
        if(err){
            console.error(err);
            response.exito = false;
            response.msg = "Error al guardar la mascota";
            res.json(response);
            return;
        }

        response.exito = true;
        response.msg = "La mascota se guardó correctamente";
        res.json(response)
    })
}

exports.find = function(req, res){
    Mascota.find(function(err, mascotas){
        res.json(mascotas)
    })
}

exports.findOne = function(req, res){
    Mascota.findOne({_id: req.params.id},function(err, mascota){
        res.json(mascota)
    })
}


exports.update = function(req, res){
    let mascota = {
        nombre: req.body.nombre,
        edad: req.body.edad,
        especie: req.body.especie,
        raza: req.body.raza
    }

    Mascota.findByIdAndUpdate(req.params.id, {$set: mascota}, function(err){
        if(err){
            console.error(err);
            response.exito = false;
            response.msg = "Error al modificar la mascota";
            res.json(response);
            return;
        }

        response.exito = true;
        response.msg = "La mascota se modifico correctamente";
        res.json(response);
    })
}

exports.remove = function(req, res){
    Mascota.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err);
            response.exito = false;
            response.msg = "Error al eliminar la mascota";
            res.json(response);
            return;
        }

        response.exito = true;
        response.msg = "La mascota eliminada correctamente";
        res.json(response);
    })
}