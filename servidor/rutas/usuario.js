import express from 'express';
import Cliente from '../models/cliente';
import Parqueadero from '../models/parqueadero';
const router = express.Router();

// importar el modelo usuario 
import Usuario from '../models/usuario';

//Agregar una usuario
router.post('/nuevo-usuario', async(req, res) => {
    const body = req.body;
    try {
        const usuarioDB = await Usuario.create(body);
        res.status(200).json(usuarioDB);
    } catch (error) {
        return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
        })
    }
});

//Consultar una usuario específica
router.get('/getusuario/:id', async(req, res) => {
    const _id = req.params.id;
    
    try {
        const usuarioDB = await Usuario.findOne({_id});
        const clienteDB = await Cliente.findOne({id_usuario: _id});
        const parqueaderoDB = await Parqueadero.findOne({id_usuario: _id});
        res.json({usuario: usuarioDB, cliente:clienteDB, parqueadero: parqueaderoDB});
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Get con todos los documentos
router.get('/usuario', async(req, res) => {
    try {
        const usuarioDb = await Usuario.find();
        res.json(usuarioDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Delete eliminar una usuario
router.delete('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const usuarioDb = await Usuario.findByIdAndDelete({_id});
        if(!usuarioDb){
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }
        res.json(usuarioDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Put actualizar una usuario
router.put('/usuarioup/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const usuarioDb = await Usuario.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(usuarioDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//POST Validar credenciales 
router.post('/login', async(req, res) => {
    try {    
        await Usuario.findOne({ correo_electronico: req.body.email}).then(user=> {
            if (!user){
                res.status(400).json({mensaje: 'Usuario No registrado', error});
            } 
            else {
                if(req.body.password == user.contrasena){
                    res.status(200).json(user);
                }
                else{
                    res.status(403).json({mensaje:"USUARIO INCORRECTO"});
                }
            }
        })
        .catch(error=>{
            res.status(403).json({mensaje:"USUARIO INCORRECTO", fail: error});
        })
       
       
    } catch (error) {
        return res.status(500).json({
        mensaje: 'Ocurrio un error!!!',
        error
        })
    }
});
   


// Exportamos la configuración de express app
module.exports = router;
