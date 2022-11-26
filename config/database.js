//Importar la dependencia mongoose
const mongoose = require("mongoose");

/*const host = "localhost";
const port = "27017";
const db = "adopta_una_huella";*/

const host = "admin";
const port = "admin123@cluster0.kgfsuq8.mongodb.net";
const db = "adopta_una_huella?retryWrites=true&w=majority";


exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb+srv://${host}:${port}/${db}`;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console,"Mongodb connection error"))
}