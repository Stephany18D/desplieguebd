const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('Conectado a MongoDB');
  } catch (err) {
    console.error('Error en la conexión:', err.message);
    process.exit(1); // Salir con error
  }
};

module.exports = connectDB;
