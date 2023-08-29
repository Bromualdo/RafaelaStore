import React from 'react'
import { Flex } from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'



const ItemListContainer = () => {
    const [products,setProducts] =useState([])
    const {category}=useParams()

    useEffect(()=>{   
   
      const database= getFirestore()
      const miColeccion=collection(database,"Productos")
      getDocs(miColeccion).then((snapshot)=>{
      const docs = snapshot.docs.map((doc)=>doc.data())
      setProducts(docs)      
    })
  }
  ,[])   
       
    const filteredProducts=products.filter((producto)=>producto.Categoria === category)
   
  return (
    <Flex 
    marginTop="40px"
    w="100%"
    justifyContent="center"
    >      
            
      <ItemList  productos={filteredProducts}/>
      
    </Flex>
    
  )
}

export default ItemListContainer