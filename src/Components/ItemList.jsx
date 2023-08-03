import React from 'react'
import Item from './Item'
import { Flex } from '@chakra-ui/react'


const ItemList = ({productos}) => {

  
  return (
    <Flex justifyContent="space-evenly">
      {productos.map((p)=>{
        return(
          
          <Item key={p.id} nombre={p.nombre} precio={p.precio} imagen={p.src} />
          
        )
      })}
       
    </Flex>
  )
}

export default ItemList