import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ciudadSchema = new Schema({
    nombre:String,
    activo: {type: Boolean, default: true},
    date:{type: Date, default: Date.now}
});

// Convertir a modelo
const Ciudad = mongoose.model('Ciudad', ciudadSchema);
export default Ciudad;