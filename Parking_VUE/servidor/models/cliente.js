import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const clienteSchema = new Schema({
    id_usuario: String,
    id_ciudad: String,
    documento:String,
    telefono: {type: String, required: [true, 'Telefono obligatorio']},
    activo: {type: Boolean, default: true},
    date:{type: Date, default: Date.now}
});

// Convertir a modelo
const Cliente = mongoose.model('Cliente', clienteSchema);
export default Cliente;