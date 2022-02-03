import React from 'react'
import "./CartWidget.css"
import CartWidgetCart from '../assets/img/carrito.png'

export default function CartWidget() {
    return (<>
        <button type="button" className="btn btn-primary">
            <img src={CartWidgetCart} className='img-fluid' alt="carrito" />
            <span className="badge bg-secondary">4</span>
        </button>
    </>);
}
