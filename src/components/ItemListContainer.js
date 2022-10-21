import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import MoonLoader from "react-spinners/MoonLoader";

const ItemListContainer = ({greeting}) => {

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
    <>
    {
      loading ?
      <div className="flex justify-center items-center w-full h-screen">
          <MoonLoader 
        
          color={"#532bd4"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
          />
      </div>
    
      :

    <div>
        <h1 className="text-center text-2xl ">
             {greeting}
        </h1>
      <ItemList producto={products}/>
    </div>
    }
    </>
  )
}
export default ItemListContainer