import { clientServices } from '../services/client-services.js';
import { mostrarProducto } from '../controllers/mostrar-productos.js';

const autoctonas = document.querySelector('[data-autoctonas]');
const jardin = document.querySelector('[data-jardin]');
console.log(jardin);
const variedades = document.querySelector('[data-variedades]');


clientServices.listaProductos().then(data => {
    data.forEach(({ nombre, precio, imagen, id, categoria, descripcion }) => {
        //mostrar en el index
        if (categoria === 'jardin') {
            const nuevoProducto = mostrarProducto(nombre, precio, imagen, id, categoria, descripcion);
            jardin.appendChild(nuevoProducto);
        } else if (categoria === 'autoctonas') {
            const nuevoProducto = mostrarProducto(nombre, precio, imagen, id, categoria, descripcion);
            autoctonas.appendChild(nuevoProducto);
        } else if (categoria === 'variedades') {
            const nuevoProducto = mostrarProducto(nombre, precio, imagen, id, categoria, descripcion);
            variedades.appendChild(nuevoProducto);
        }
    })
})