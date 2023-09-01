import Item from './Item'
import {useContext} from 'react'
import { CartContext } from '../context/ShoppingCartContext';

import {Flex} from "@chakra-ui/react";


const Collection = () => {
  
  const {productos} =useContext(CartContext)  
 
 let nombreAco=""

  return (
    <Flex w="70%" h="50%"   flexWrap="wrap" gap="2em"  justifyContent="center" alignItems="flex-end" alignContent="flex-end">
      {productos.map((p)=>{
       p.Nombre.length > 20?   nombreAco=p.Nombre.slice(0,20):nombreAco=p.Nombre 
           
           
        
        return(
          <Item key={p.id} id={p.id} nombre={nombreAco} imagen={p.Imagen} precio={p.Precio+" $"}/>
        
        )
      })}
       
    </Flex>
  )
}

export default Collection