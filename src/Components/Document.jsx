import { useEffect,useState } from "react"
import {doc,getDoc,getFirestore} from 'firebase/firestore'
import {Image} from '@chakra-ui/react'
const Documents = () => {

  const [product, setProduct]=useState([])
  

useEffect(()=>{
  const db=getFirestore()
  
  const oneItem =doc(db,"Productos","AFELHBGvI4dkoDfqtWXC")
  getDoc(oneItem).then((snapshot)=>{
    if(snapshot.exists()){
      const docs =snapshot.data()
      
      setProduct(docs)
    }
  })
},[])

  return (
    <div><h1>Producto</h1>
      {
        <div>
          <h3>{product.Nombre}</h3>
          </div>
      }
    </div>
  )
}

export default Documents