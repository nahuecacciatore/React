import React, { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";


const ListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getItems()
    }, [])
    

const getItem = () => {
   const db = getFirestore()
   const docRef = doc(db, 'items', 'j9Ne4L3R21use1TAyEYv')
   getDoc(docRef).then( res => {
    console.log({id:res.id, ...res.data()});
   })
}

    const getItems = () => { 
        const db = getFirestore()
        const coleccion = collection(db, 'items')
        getDocs(coleccion).then
        (res => {
            const data = res.docs.map
            ( e => ({id: e.id, ...e.data()}))
            setItems(data)
        })
     }

  return (
    <div>
        {items.map (i => <li key={i.id}>{i.title}</li>)}
    </div>
  )
}
export default ListContainer