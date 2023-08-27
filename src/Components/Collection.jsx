import Item from './Item'
import {useEffect, useState} from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import {Flex} from "@chakra-ui/react";


const Collection = () => {
  const [products,setProducts] =useState([])
 
 
  
  
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
    <Flex w="70%" h="50%"   flexWrap="wrap" gap="2em"  justifyContent="flex-end" alignItems="flex-end" alignContent="flex-end">
      {products.map((p)=>{
        return(
          <Item key={p.id} id={p.id} nombre={p.Nombre} imagen={p.Imagen} precio={p.Precio+" $"}/>
        
        )
      })}
       
    </Flex>
  )
}

export default Collection