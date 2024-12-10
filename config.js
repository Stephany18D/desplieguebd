const mongoose = require('mongoose');
require("dotenv").config();

const dbconnect = async () => {
    mongoose.set("strictQuery", true);
    console.log("MONGODB_URL:", process.env.MONGODB_URL);
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Conexión exitosa");
    } catch (err) {
        console.log("Error en la conexión:", err.message);
    }
};

module.exports = dbconnect;
