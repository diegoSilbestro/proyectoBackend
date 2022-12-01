const mongoose = require('mongoose');
require ('dotenv').config();

const dbConection = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_CNN);
        console.log('Base de datos conectada');
    } catch {
        console.log('No se pudo conectar con la base de datos');
    }
}

module.exports = {dbConection};