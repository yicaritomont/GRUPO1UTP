import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const parqueaderoSchema = new Schema({
    id_usuario: String,
    nombre_parqueadero: {type: String, required: [true, 'Nombre obligatorio']},
    servicios: {type: String, required: [true, 'Servicios  obligatorio']},
    id_ciudad: String,
    direccion: {type: String, required: [true, 'Direccion obligatorio']},
    telefono: {type: String, required: [true, 'Telefono obligatorio']},
    celular: String,
    activo: {type: Boolean, default: true},
    date:{type: Date, default: Date.now}
});

// Convertir a modelo
const Parqueadero = mongoose.model('Parqueadero', parqueaderoSchema);
export default Parqueadero;