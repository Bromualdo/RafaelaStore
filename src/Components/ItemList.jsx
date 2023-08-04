import React from 'react'
import Item from './Item'
import { Flex,Spacer } from '@chakra-ui/react'


const ItemList = ({productos}) => {

  
  return (
    <Flex w="40%"   flexWrap="wrap"  gap="2em" justifyContent="space-evenly" alignItems="center">
      {productos.map((p)=>{
        return(
          <Item key={p.id} id={p.id} nombre={p.nombre} imagen={p.src} precio={p.precio}/>
        
        )
      })}
       
    </Flex>
  )
}

export default ItemList