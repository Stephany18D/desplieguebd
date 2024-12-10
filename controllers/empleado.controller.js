const ModelEmpleado = require("../models/empleado");
const empleadoCtrl={};

//CREATE
empleadoCtrl.createEmpleado = async(req,res) =>{
    try { 
        const body = req.body; 
        if (!body.name || !body.position || !body.office || !body.salary) { 
            return res.status(400).send("Todos los campos son obligatorios"); 
        } 
        const respuesta = await ModelEmpleado.create(body); 
        res.status(201).send(respuesta); 
    } catch (error) { console.error("Error al crear el empleado:", error.message); 
        res.status(500).send("Error Interno del Servidor"); 
    }
}


//CONSULTAR
empleadoCtrl.getEmpleado = async(req,res) =>{
    const respuesta = await ModelEmpleado.find({})
    res.send(respuesta)

}

// CONSULTAR POR ID
empleadoCtrl.getUniqueEmpleado = async (req, res) => {
    try {
        const id = req.params.id;
        const respuesta = await ModelEmpleado.findById(id); // Cambiado aquí
        if (!respuesta) {
            return res.status(404).send("Usuario no encontrado");
        }
        res.send(respuesta);
    } catch (error) {
        res.status(500).send("Error en la consulta");
    }
}


//ACTUALIZAR
empleadoCtrl.editEmpleado = async(req,res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelEmpleado.findByIdAndUpdate ({_id:id},body);
    res.send(respuesta)
} 

//ELIMINAR
empleadoCtrl.deleteEmpleado = async(req,res) =>{
    const id = req.params.id
    const respuesta = await ModelEmpleado.deleteOne ({_id:id})
    res.send(respuesta)
}

module.exports =empleadoCtrl;