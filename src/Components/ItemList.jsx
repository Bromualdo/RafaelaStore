import React from 'react'
import Item from './Item'
import { Flex,Spacer } from '@chakra-ui/react'


const ItemList = ({productos}) => {

  
  return (
    <Flex w="40%"   flexWrap="wrap"  gap="2em" justifyContent="space-evenly" alignItems="center">
      {productos.map((p)=>{
        return(
          <Item key={p.Id} id={p.Id} nombre={p.Nombre} imagen={p.Imagen} precio={p.Precio+" $"}/>
        
        )
      })}
       
    </Flex>
  )
}

export default ItemList