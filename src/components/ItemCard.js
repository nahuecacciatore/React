import { Link } from 'react-router-dom'
import ItemList from './ItemList'


const ItemCard = ({id, name, price, img}) => {
  return (
    <div className='m-8 border-2'> 
    <Link to={`/item/${id}`}>
      <section>
        <img className='max-w-md' src={img}></img>
      </section>
      <div>
        <h2 className='underline underline-offset-1 uppercase'>{name}</h2>
        <h4>precio: ${price}</h4>
      </div>
    </Link>
    </div>
  )
}
export default ItemCard