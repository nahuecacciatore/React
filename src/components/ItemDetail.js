import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productos } from "./Products"

const  ItemDetail = () => {

   const { id: itemId } = useParams()

   const [item, setItem] = useState({})

    useEffect(() => {
        getItemDetail().then (response => {
            setItem( response )
        })
    }, [])
    

   const getItemDetail = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( productos.find( p => p.id == itemId) )
        }, 3000);
    })
   }

  return (
    <>
    <section>
        <img src={item.img} alt={item.name}></img>
    </section>
    <div>
        <h1>Detalles del producto</h1>
        <div>Nombre: {item.name}</div>
        <div>Precio: {item.price}</div>
        <p>Descripcion:{item.description}</p>
    </div>
    
    
    </>
  )
}
export default ItemDetail