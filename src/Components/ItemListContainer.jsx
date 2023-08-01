import React from 'react'
import { Spacer, Flex } from '@chakra-ui/react'
import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => {
    





  return (
    <Flex 
    marginTop="40px"
      flexDirection='column' 
    alignItems="center" 
    justifyContent="center"  
    >
        <p>{greeting}</p>
      <Spacer/>
      <ItemList/>
      
    </Flex>
    
  )
}

export default ItemListContainer