const ModelEmpleado = require("../models/empleado");
const empleadoCtrl={};

//CREATE
empleadoCtrl.createEmpleado = async(req,res) =>{
    const body = req.body;
    const respuesta = await ModelEmpleado.create (body)
    res.send(respuesta)
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