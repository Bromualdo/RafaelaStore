import React from 'react'
import Item from './Item'
import { Spacer, Flex } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
    
  return (
    <Flex 
    marginTop="40px"
      flexDirection='column' 
    alignItems="center" 
    justifyContent="center"  
    width="200px" height="175px">
        <p>{greeting}</p>
      <Spacer/>
      <Item/>

    </Flex>
    
  )
}

export default ItemListContainer