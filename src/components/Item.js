import './Item.css'

export default function Item({ item }) {
        return (
            <div className="tarjeta">
                <img src={item.pictureUrl}/>
                <p className='title'>{item.title}</p>
                <p className='price'>${item.price}</p>
            </div>
        )
}