import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    apellido: {type: String, required: [true, 'Apellido obligatorio']},
    tipo_usuario: String,
    correo_electronico: String,
    contrasena: String,
    activo: {type: Boolean, default: true},
    date:{type: Date, default: Date.now}
});

// Convertir a modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;