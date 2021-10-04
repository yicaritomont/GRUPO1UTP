import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    apellido: {type: String, required: [true, 'Apellido obligatorio']},
    tipo_usuario: String,
    correo_electronico: String,
    contrasena: String,
    activo: {type: Boolean, default: true},
    date:{type: Date, default: Date.now},
   /* id_ciudad: {type: String, required: [true, 'Ciudad obligatorio'], default:"1"},
    // para cliente
    documento:{type:String, default:'0'},
    // para parqueadero
    nombre_parqueadero: {type: String, required: [true, 'Nombre obligatorio']},
    servicios: {type: String, required: [true, 'Servicios  obligatorio']},
    
    direccion: {type: String, required: [true, 'Direccion obligatorio']},
    telefono: {type: String, required: [true, 'Telefono obligatorio']},
    celular: String,*/

});

// Convertir a modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;