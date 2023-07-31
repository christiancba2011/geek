//consultar productos
const listaProductos = () => fetch('https://64c7de2ca1fe0128fbd56625.mockapi.io/productos').then(respuesta => respuesta.json());
//const listaProductos = () => fetch('https://zealous-loincloth-bass.cyclic.app/productos').then(respuesta => respuesta.json());


//detalle producto
const detalleProducto = async (id) => {
    return fetch(`https://64c7de2ca1fe0128fbd56625.mockapi.io/productos/${id}`)
        .then(respuesta => respuesta.json())
}


//crear productos
const crearProducto = (nombre, precio, imagen, categoria, descripcion) => {
    return fetch(`https://64c7de2ca1fe0128fbd56625.mockapi.io/productos`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ nombre, precio, imagen, categoria, descripcion })
    }).then(respuesta => {
        if (respuesta.ok) {
            return respuesta.body
        }
    })
    throw new Error('no se pudo crear el producto')
};

/*const crearCliente = (nombre, email) => {
    return fetch("http://localhost:3000/perfil",{
      method: "POST",
      headers: {
       "Content-Type":"application/json"
      },
      body: JSON.stringify({nombre,email,id: uuid.v4()})//JSON.stringify Transforma el objeto {nombre,email} a texto
    });
  }*/

//editar productos
// const actualizarProducto = (nombre, precio, imagen, id, categoria, descripcion) => {
//     return fetch(`http://localhost:3000/productos/${id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(({ nombre, precio, id, imagen, categoria, descripcion }))
//             .then(respuesta => respuesta).catch(error => console.log(error))
//     });
// };

//editar productos corregido
const actualizarProducto = (nombre, precio, imagen, id, categoria, descripcion) => {
    return fetch(`https://64c7de2ca1fe0128fbd56625.mockapi.io/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre,
            precio,
            id,
            imagen,
            categoria,
            descripcion
        })
    })
        .then(respuesta => respuesta)
        .catch(error => console.log(error));
};



//eliminar productos
const eliminarProducto = (id) => {
    return fetch(`https://64c7de2ca1fe0128fbd56625.mockapi.io/productos/${id}`, {
        method: "DELETE"
    })
}

export const clientServices = {
    listaProductos,
    detalleProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};
