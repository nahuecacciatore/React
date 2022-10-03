import ItemDetailContainer, { producto } from "./ItemDetailContainer"

const  ItemDetail = ({producto}) => {

  return (
    <>
    
    <section>
        <img src={producto.img} alt={producto.name}></img>
    </section>
    <div>
        <h1>Detalles del producto</h1>
        <div>Nombre: {producto.name}</div>
        <div>Precio: {producto.price}</div>
        <p>Descripcion:{producto.description}</p>
    </div>

    
    </>
  )
}
export default ItemDetail