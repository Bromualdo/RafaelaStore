import React from 'react'
import { Spacer, Flex } from '@chakra-ui/react'
import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => {
    

  const productos = [
    {id:1, nombre:"Producto A", precio:"300 $",src:  "./src/assets/jugete1.png" ,descripcion:"soy el item 1", stock:5},
    {id:2, nombre:"Producto B", precio:"400 $",src : "./src/assets/jugete2.jpeg" ,descripcion:"soy el item 2", stock:15},    
    {id:3, nombre:"Producto C", precio:"500 $",src : "./src/assets/jugete3.jpg" ,descripcion:"soy el item3", stock:25}
  ]
  
  const getProductos=new Promise((resolve, reject)=>{
      if (productos.length > 0){
        setTimeout(() => {
          resolve(productos)
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
    <Flex 
    marginTop="40px"
      flexDirection='column' 

    
    w="100%" 
    >
    
        
      <Spacer/>
      <ItemList productos={productos}/>
      
    </Flex>
    
  )
}

export default ItemListContainer