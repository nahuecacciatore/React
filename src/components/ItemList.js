import { useEffect, useState } from "react"
import { ItemCard } from "./ItemCard"
import { productos } from "./Products"


const ItemList = () => {

    const [item, setItem] = useState([])


    useEffect (()=> {
        getProductos().then( res => {
            setItem( res )
         })
    }, [])

    const getProductos = () => {
        return new Promise( (resolve) => { 
            setTimeout( ()=>{
                resolve( productos )
            }, 3000)
        })
    }


  return (
    <div>
        {item.map( productos => 
        <ItemCard key={productos.id} {...productos}/> )}
    </div>
  )
}
export default ItemList