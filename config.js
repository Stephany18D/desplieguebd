const mongoose = require('mongoose');

const connectDB = async () => {
    const uri = process.env.MONGODB_URL;
    console.log("MONGODB_URL:", uri); // Verifica que la variable esté definida
    
    if (!uri) {
        console.error("MONGODB_URL no está definida.");
        process.exit(1); // Salir con error
    }
    
    try {
        await mongoose.connect(uri);
        console.log('Conectado a MongoDB');
    } catch (err) {
        console.error('Error en la conexión:', err.message);
        process.exit(1); // Salir con error
    }
};

module.exports = connectDB;
