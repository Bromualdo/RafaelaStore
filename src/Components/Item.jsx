import React from 'react'
import ItemCount from './ItemCount'
import { Flex } from '@chakra-ui/react'

const Item = () => {
  return (
    <Flex marginTop="40px"
    w="200px"
    h="200px"
    flexDirection='column' 
  alignItems="center" 
  justifyContent="center" 
  border="solid 2px black" >
      <ItemCount/>
    </Flex>
  )
}

export default Item