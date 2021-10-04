import express from 'express';
const router = express.Router();

// importar el modelo cliente 
import Separacion from '../models/separacion';

//Agregar separacion
router.post('/nuevo', async(req, res) => {
    const body = req.body;
    try {
        const separacionDB = await Separacion.create(body);
        res.status(200).json(separacionDB);
    } catch (error) {
        return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
        })
    }
});

//Consultar separacion específica
router.get('/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const separacionDB = await Separacion.findOne({_id});
        res.json(separacionDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Consultar separacion  por usuario
router.get('/listUser/:id', async(req, res) => {
    const _id = req.params.id;
    try {
       const separacionDB = await Separacion.find({'id_cliente':_id});
        res.json(separacionDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

router.get('/listPark/:id', async(req, res) => {
    const _id = req.params.id;
    try {
       const separacionDB = await Separacion.find({'id_parqueadero':_id});
        res.json(separacionDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});


// Get con todas las separaciones
router.get('/all', async(req, res) => {
    try {
        const separacionDb = await Separacion.find();
        res.json(separacionDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Delete eliminar separacion
router.delete('/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const separacionDb = await Separacion.findByIdAndDelete({_id});
        if(!separacionDb){
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }
        res.json(separacionDb);
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
        const separacionDb = await Separacion.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(separacionDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Exportamos la configuración de express app
module.exports = router;
