import express from 'express';
const router = express.Router();

// importar el modelo  
import Ciudad from '../models/ciudad';

//Agregar ciudad
router.post('/nuevo', async(req, res) => {
    const body = req.body;
    try {
        const ciudadDB = await Ciudad.create(body);
        res.status(200).json(ciudadDB);
        console.log("READY");
    } catch (error) {
        console.log("FALSE");
        return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
        })
    }
});

//Consultar ciudad específica
router.get('/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const ciudadDB = await Ciudad.findOne({_id});
        res.json(ciudadDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Get con todos los clientes
router.get('/all', async(req, res) => {
    try {
        const ciudadDb = await Ciudad.find();
        res.json(ciudadDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Delete eliminar 
router.delete('/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const ciudadDb = await Ciudad.findByIdAndDelete({_id});
        if(!ciudadDb){
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }
        res.json(ciudadDb);
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
        const ciudadDb = await Ciudad.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(ciudadDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Exportamos la configuración de express app
module.exports = router;
