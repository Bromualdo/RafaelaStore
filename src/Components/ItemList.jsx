import React from 'react'
import Item from './Item'
import { Flex} from '@chakra-ui/react'


const ItemList = ({productos}) => {


  
  return (
    <Flex w="40%"   flexWrap="wrap"  gap="2em" justifyContent="space-evenly" alignItems="flex-end">
      {productos.map((p)=>{
        return(
          <Item key={p.Nombre} id={p.id} nombre={p.Nombre} imagen={p.Imagen} precio={p.Precio+" $"}/>
        
        )
      })}
       
    </Flex>
  )
}

export default ItemList