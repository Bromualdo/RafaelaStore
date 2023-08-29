import React from 'react'
import ItemDetail from './ItemDetail'
import {useEffect, useState} from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { Flex } from '@chakra-ui/react'

const ItemDetailContainer = () => {

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
  
 

  




  const getProductos=new Promise((resolve, reject)=>{
      if (products.length > 0){
        setTimeout(() => {
          resolve(products)
        },2000)
      }else{
        reject (new Error("No hay datos"))
        }
    })
  
    getProductos
    .then((res)=>{
      console.log(res)
    })
    .catch((error)=>{
      console.log(error)
    }) 


 
  return (
    <Flex justifyContent="center" alignItems="center">
    <ItemDetail productos={products}/>
    </Flex>
  )
}

export default ItemDetailContainer