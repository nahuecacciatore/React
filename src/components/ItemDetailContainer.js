import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { productos } from "./Products";



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    const { id } = useParams()

    useEffect(() => {
        getItemDetail().then (response => {
            setProducto( response )
        })
    }, [id])

    const getItemDetail = (itemId) => { 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve( productos.find( p => p.id == id) )
            }, 3000);
        })
       }

  return (
    <ItemDetail producto={producto}/>

  )
}
export default ItemDetailContainer
