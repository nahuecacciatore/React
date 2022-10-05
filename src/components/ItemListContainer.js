import ItemList from "./ItemList"

const ItemListContainer = ( {greeting}) => {

  
  return (
    <div>
      <h1 className="text-center text-2xl ">{greeting}</h1>
      <div><ItemList/></div>
    </div>
  )
}
export default ItemListContainer