import { Link } from 'react-router-dom'


export const ItemCard = ( {id, img, name, price} ) => {
  return (
    <div>
        <div className='m-8 border-2'> 
      <Link to={`/item/${id}`}>
          <section>
            <img className='max-w-md' src={img}></img>
          </section>
          <div>
            <h2 className='underline underline-offset-1 uppercase text-center'>{name}</h2>
            <h4 className='m-1 text-center'>precio: ${price}</h4>
          </div>
      </Link>
          <button button className='btn m-5'>AÑADIR AL CARRITO</button>
      </div>
    </div>
  )
}