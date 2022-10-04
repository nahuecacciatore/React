import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { productos } from "./Products";



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    const { id: itemId } = useParams()

    useEffect(() => {
        getItemDetail().then (response => {
            setProducto( response )
        })
    }, [itemId])

    const getItemDetail = (itemId) => { 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve( producto.find( p => p.id == itemId) )
            }, 3000);
        })
       }

  return (
    <ItemDetail producto={producto}/>

  )
}
export default ItemDetailContainer
