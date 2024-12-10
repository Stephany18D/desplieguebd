require('dotenv').config();
const express = require('express');
const cors = require ("cors");
const connectDB = require('./config');
const app = express();



app.use((req, res, next) => { 
    if (req.originalUrl === '/favicon.ico') { 
            res.status(204).end(); 
            return; 
        } 
        next(); 
    });



app.use(express.json());
app.use(cors({origin:"*"}));
app.use("/api/usuarios",require("./routes/usuario.route"));
app.use("/api/empleados",require("./routes/empleado.route"));
connectDB();
const port = process.env.PORT || 3005; // Ajustar el puerto según sea necesario 
app.listen(port, () => { 
    console.log(`El servidor está en el puerto ${port}`);

});
