import React from 'react';
import './ItemListContainer.css';
import Counter from './ItemCount';
import { useEffect } from 'react';
import { getProducts } from './api';
import { useState } from 'react';
import ItemList from './ItemList';


export default function ItemListContainer() {
  //definimos los productos con un array vacío
  const [products, setProducts] = useState([])
 
 // cuando se carga el componente le pasamos el valor de "products" al array
 //...vacío para cargar los datos de nuestros productos,
 //..utilizando "useEffect"
  useEffect(() => {

    getProducts().then(function (products) {
      setProducts(products)
    })
  }, [])

  // Array de dependencias...

  return (
    <div className='CajaDePaletas'>
      {products.length >0 ? <ItemList products={products}/> : <p>cargando...</p>}
      <Counter stock={5} initial={1} />
    </div>)
}
