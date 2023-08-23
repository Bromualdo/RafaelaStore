import {useEffect, useState} from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import {Image} from '@chakra-ui/react'



const Collection = () => {
  const [products,setProducts] =useState([])
 
 
  console.log(products);
  
     useEffect(()=>{
    
   
      const database= getFirestore()
      const miColeccion=collection(database,"Productos")
      getDocs(miColeccion).then((snapshot)=>{
      const docs = snapshot.docs.map((doc)=>doc.data())
      setProducts(docs)
      
    })
  }
  ,[])
  
 

  return (
    <div>
      <h1>Productos</h1>
      
      {
        products.map((product)=>(
          <div key={product.Nombre}>
            <h3>Producto: {product.Nombre}</h3>
            <h2>Categoria: {product.Categoria}</h2>
            
          </div>
        ))
      }
    </div>
  )
}

export default Collection