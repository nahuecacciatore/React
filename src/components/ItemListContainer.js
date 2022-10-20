import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ItemListContainer = ( {greeting}) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      getProducts()
      setLoading(false)
    }, 3000);
  }, [])
  
  const getProducts = () => { 
        const db = getFirestore()
        const productCollection = collection(db, 'items')
        getDocs(productCollection).then ( res => {
          const productsData = res.docs.map( d => ({id: d.id, ...d.data()}))
          console.log(productsData);
          setProducts(productsData)
        })
        
   }
  
  return (
    <div><ItemList producto={products}/></div>
  )
}
export default ItemListContainer