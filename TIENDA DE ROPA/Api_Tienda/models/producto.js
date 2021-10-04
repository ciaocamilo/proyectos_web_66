import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productoSchema = new Schema(
    {
        nombre: {type: String, required: [true, 'Nombre requerido']},
        precio: {type: Number, required: [true, 'Precio requerido']},
        imagen: String,
        descripcion: {type: String, default: 'Lorem'}
    }
);

// Convertir a modelo
const Producto = mongoose.model('Producto', productoSchema);

export default Producto;