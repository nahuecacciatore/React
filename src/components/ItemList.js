import { ItemCard } from "./ItemCard"


const ItemList = ({producto}) => {
  return (
    <div>     
      <div className="flex flex-col items-center">
          {producto.map( p =><ItemCard key={p.id} {...p}/>)}
      </div>

    </div>
  )
}
export default ItemList