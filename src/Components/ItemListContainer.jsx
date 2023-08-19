import React from 'react'
import { Spacer, Flex, Divider, Box } from '@chakra-ui/react'
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'



const ItemListContainer = () => {
    const {category}=useParams()

  const productos = [
    {id:1, nombre:"Producto A", precio:"300",src:  "../src/assets/jugete1.png" ,descripcion:"soy el item 1", stock:5,categoria:"cat1",cantidad:1},
    {id:2, nombre:"Producto B", precio:"400",src : "../src/assets/jugete2.jpeg" ,descripcion:"soy el item 2", stock:15,categoria:"cat2",cantidad:1},    
    {id:3, nombre:"Producto C", precio:"500",src : "../src/assets/jugete3.jpg" ,descripcion:"soy el item3", stock:25,categoria:"cat3",cantidad:1},
    {id:4, nombre:"Producto D", precio:"400",src : "../src/assets/jugete2.jpeg" ,descripcion:"soy el item 4", stock:6,categoria:"cat1",cantidad:1}, 
    {id:5, nombre:"Producto E", precio:"100",src : "../src/assets/jugete2.jpeg" ,descripcion:"soy el item 5", stock:8,categoria:"cat2",cantidad:1},
    {id:6, nombre:"Producto F", precio:"500",src : "../src/assets/jugete2.jpeg" ,descripcion:"soy el item 6", stock:10,categoria:"cat3",cantidad:1}, 
    {id:7, nombre:"Producto G", precio:"700",src : "../src/assets/jugete2.jpeg" ,descripcion:"soy el item 7", stock:9,categoria:"cat1",cantidad:1}, 
    {id:8, nombre:"Producto H", precio:"800",src : "../src/assets/jugete2.jpeg" ,descripcion:"soy el item 8", stock:3,categoria:"cat2",cantidad:1}, 
    {id:9, nombre:"Producto I", precio:"200",src : "../src/assets/jugete2.jpeg" ,descripcion:"soy el item 9", stock:6,categoria:"cat3",cantidad:1},  
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

    const filteredProducts=productos.filter((producto)=>producto.categoria === category)
  return (
    <Flex 
    marginTop="40px"
    w="100%"
    justifyContent="center"
    >      
            
      <ItemList productos={filteredProducts}/>
      
    </Flex>
    
  )
}

export default ItemListContainer