import ItemDetailContainer, { producto } from "./ItemDetailContainer"

const  ItemDetail = ({producto}) => {

  return (
    <>
    <div className='m-8 border-2 flex flex-col items-center'>
      <div>
        <section>
          <img className="max-w-xs" src={producto.img} alt={producto.name}></img>
       </section>
      </div>
     
      <div className="text-center">
          <h1>Detalles del producto</h1>
          <div>Nombre: {producto.name}</div>
          <div>Precio: {producto.price}</div>
          <p>Descripcion:{producto.description}</p>
      </div>

    </div>
    

    
    </>
  )
}
export default ItemDetail