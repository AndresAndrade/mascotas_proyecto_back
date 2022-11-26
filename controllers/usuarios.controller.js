const Usuario = require("../models/usuarios.model");
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

exports.login = function (req, res, next) {

    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

    Usuario.findOne({
            username: req.body.username,
            pass: hashedpass
        },
        function (err, username) {
            let response = {
                token: null
            }

            if (username !== null) {
                response.token = jwt.sign({
                        id: username._id,
                        usuario: username.username
                    }, "__recret__",
                    {expiresIn: '12h'}
                )
            }
            res.json(response);
        })
}