import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { productos } from "./Products";



const ItemDetailContainer = () => {

    const { id } = useParams()
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
        setTimeout(() => {
        getProduct()
        setLoading(false)
      }, 3000);
    }, [])
    
    const getProduct = () => { 
          const db = getFirestore()
          const productCollection = collection(db, 'items')
          const docRef = doc(productCollection, id)
          getDoc(docRef).then ( res => {
            console.log(res.data);
            setProduct(res.data)
          } )
          
     }
    
  return (
    <div>
        <h1>Id del producto : {}</h1>
{/*         <ItemDetail producto={producto}/> */}

    </div>

  )
}
export default ItemDetailContainer
