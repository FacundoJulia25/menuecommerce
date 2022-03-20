import Item from './Item'
import './ItemList.css'


export default function ItemList({ products }) {
    //Yo tengo en el array de products, un array de objetos 
    // Quiero iterar sobre el array de objetos y transformarlo en un array de elementos JSX
   return(
    products.map(function (producto){

        return (
                <Item  key={producto.id} item={producto}/>
        )
        }))

}