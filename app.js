const express = require('express');
const cors = require ("cors");
const dbconnect = require('./config');
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
app.listen(3005, ()=>{
    console.log("El servidor esta en el puerto 3005")
})
 dbconnect();