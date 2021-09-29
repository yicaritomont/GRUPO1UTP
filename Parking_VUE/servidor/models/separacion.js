import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const separacionSchema = new Schema({
    id_cliente: String,
    id_parqueadero: String,
    fecha: Date,
    descripcion_servicio: String,
    activo: {type: Boolean, default: true},
});

// Convertir a modelo
const Separacion = mongoose.model('Separacion', separacionSchema);
export default Separacion;