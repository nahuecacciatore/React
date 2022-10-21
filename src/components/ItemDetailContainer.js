import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoonLoader} from "react-spinners";
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})
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
            console.log(res.data());
            setProduct(res.data())
          } )
          
     }
    
  return (
    <div>
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

        <ItemDetail producto={product}/>
      }
    </div>

  )
}
export default ItemDetailContainer
