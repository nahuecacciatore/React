import { ItemCard } from "./ItemCard"


const ItemList = ({producto, greeting}) => {
  return (
    <div>     
        <h1 className="text-center text-2xl ">
             {greeting}
        </h1>

      <div className="flex flex-col items-center">
          {producto.map( p =><ItemCard key={p.id} {...p}/>)}
      </div>

    </div>
  )
}
export default ItemList