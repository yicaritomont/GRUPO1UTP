import express from 'express';
const router = express.Router();

// importar el modelo parqueadero 
import Parqueadero from '../models/parqueadero';

//Agregar parqueadero
router.post('/nuevo', async(req, res) => {
    const body = req.body;
    try {
        const parqueaderoDB = await Parqueadero.create(body);
        res.status(200).json(parqueaderoDB);
    } catch (error) {
        return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
        })
    }
});

//Consultar un parqueadero específica
router.get('/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const parqueaderoDB = await Parqueadero.findOne({_id});
        res.json(parqueaderoDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Get con todos los parqueaderos
router.get('/all', async(req, res) => {
    try {
        const parqueaderoDb = await Parqueadero.find();
        res.json(parqueaderoDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Delete eliminar parqueadero
router.delete('/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const parqueaderoDb = await Parqueadero.findByIdAndDelete({_id});
        if(!parqueaderoDb){
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }
        res.json(parqueaderoDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Put actualizar 
router.put('/up/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const parqueaderoDb = await Parqueadero.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(parqueaderoDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

router.get('/search/:ciudad/:zona', async(req, res) => {
    try {
        //const parqueaderoDb = await Parqueadero.find({id_ciudad: req.params.ciudad ,direccion:  { $regex: req.params.zona } });
        const parqueaderoDb = await Parqueadero.find({id_ciudad: req.params.ciudad ,direccion:  { $regex: new RegExp(req.params.zona, "i") } });
        
        res.json(parqueaderoDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Exportamos la configuración de express app
module.exports = router;
