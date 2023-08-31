import React from 'react'
import { Flex } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react'
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'



const ItemListContainer = () => {
    const {productos}=useContext(CartContext)
    const {category}=useParams()

    
    const filteredProducts=productos.filter((producto)=>producto.Categoria === category)
   
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