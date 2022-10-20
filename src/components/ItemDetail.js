import ItemDetailContainer, { producto } from "./ItemDetailContainer"

const  ItemDetail = ({producto}) => {

  return (
    <>
    <div className='m-8 border-2 flex flex-col items-center'>
      <div className="max-w-xs">
        <section>
          <img  src={producto.img} alt={producto.name}></img>
       </section>
      </div>
     
      <div className="text-center">
          <h1>Detalles del producto</h1>
          <div className="flex justify-center">
            <h2>Nombre: </h2> <span>{producto.name}</span> 
          </div>
          
          <div className="flex justify-center">
            <h2>Precio: </h2> <span>{producto.price}</span> 
          </div>
          <p className="max-w-xs">Descripcion:{producto.description}</p>
      </div>
    <button className="btn m-6">AÑADIR AL CARRITO</button>
    </div>
    

    
    </>
  )
}
export default ItemDetail