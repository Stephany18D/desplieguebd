const ModelUser = require("../models/model");
const usuarioCtrl={};

//CREATE
usuarioCtrl.createUser = async(req,res) =>{
    const body = req.body;
    const respuesta = await ModelUser.create (body)
    res.send(respuesta)
}

// INICIO DE SESIÓN 
usuarioCtrl.loginUser = async(req, res) => { 
    const { nomuser, password } = req.body; 
    const user = await ModelUser.findOne({ nomuser: nomuser });
    
    if (user && user.password === password) { 
        res.send("Autenticación satisfactoria"); 
    } else { 
        res.status(401).send("Error en la autenticación"); 
    } 
};

//CONSULTAR
usuarioCtrl.getUsers = async(req,res) =>{
    const respuesta = await ModelUser.find({})
    res.send(respuesta)

}

// CONSULTAR POR ID
usuarioCtrl.getUniqueUser = async (req, res) => {
    try {
        const id = req.params.id;
        const respuesta = await ModelUser.findById(id); // Cambiado aquí
        if (!respuesta) {
            return res.status(404).send("Usuario no encontrado");
        }
        res.send(respuesta);
    } catch (error) {
        res.status(500).send("Error en la consulta");
    }
}


//ACTUALIZAR
usuarioCtrl.editUser = async(req,res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findByIdAndUpdate ({_id:id},body);
    res.send(respuesta)
} 

//ELIMINAR
usuarioCtrl.deleteUser = async(req,res) =>{
    const id = req.params.id
    const respuesta = await ModelUser.deleteOne ({_id:id})
    res.send(respuesta)
}

module.exports =usuarioCtrl;