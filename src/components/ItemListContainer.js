import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ItemCard } from "./ItemCard"
import ItemList from "./ItemList"

const ItemListContainer = ( {greeting}) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
  }, [])
  
  const getProducts = () => { 
        const db = getFirestore()
        const productCollection = collection(db, 'items')
        getDocs(productCollection).then ( res => {
          const productsData = res.docs.map( d => ({id: d.id, ...d.data()}))
          console.log(productsData);
          setProducts(productsData)
          setLoading(false)
        })
        
   }
  
  return (
    <div>
      { loading ? <h1>Cargando...</h1>
        :

      <>
      <h1 className="text-center text-2xl ">
        {greeting}
      </h1>

      <div className="flex flex-col items-center">
        {products.map( p =><ItemCard key={p.id} {...p}/>)}
      </div>

    </>
  }
    </div>
  )
}
export default ItemListContainer