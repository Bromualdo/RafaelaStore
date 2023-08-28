import React from 'react'
import Eventos from './Eventos'
import Collection from './Collection'
import SendOrder from './SendOrder'
import { Flex } from '@chakra-ui/react'

const Home = () => {

  
  return (
    <Flex flexDirection="column" w="100%" alignItems="center">
    <div>Bienvenido a mis productos</div>
    
    <Collection />
    </Flex>       
  )
}

export default Home