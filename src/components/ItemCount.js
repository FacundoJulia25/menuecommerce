import React from 'react';
import { useState } from 'react';

export default function Counter({ stock, initial }) {
    const [cantidad, setCantidad] = useState(initial);
    const añadir = () => {
        cantidad < stock && setCantidad(cantidad + 1);
    };
    const disminuir = () => {
        cantidad > initial && setCantidad(cantidad - 1);
    };
    const onAdd = () => {
        alert('Todos los productos han sido añadidos');
    };
    return (
        <div className="container">
            <div>
                <h2>Cantidad de productos</h2>
            </div>
            <div>
                <button onClick={añadir}>+</button>
                <p>{cantidad}</p>
                <button onClick={disminuir}>-</button>
            </div>
            <div>
                <button onClick= {onAdd}>añadir al carrito </button>
            </div>
        </div>
    );
}

