import Item from './Item'
import {useContext} from 'react'
import { CartContext } from '../context/ShoppingCartContext';

import {Flex} from "@chakra-ui/react";


const Collection = () => {
  
  const {productos} =useContext(CartContext)  
 
 

  return (
    <Flex w="70%" h="50%"   flexWrap="wrap" gap="2em"  justifyContent="center" alignItems="flex-end" alignContent="flex-end">
      {productos.map((p)=>{
        return(
          <Item key={p.id} id={p.id} nombre={p.Nombre} imagen={p.Imagen} precio={p.Precio+" $"}/>
        
        )
      })}
       
    </Flex>
  )
}

export default Collection