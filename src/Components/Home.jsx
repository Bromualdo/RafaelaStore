import React from 'react'
import Eventos from './Eventos'
import Collection from './Collection'
import SendOrder from './SendOrder'
import { Flex,Text } from '@chakra-ui/react'

const Home = () => {

  
  return (
    <Flex flexDirection="column" w="100%" alignItems="center">
    <Text fontSize="80px" fontFamily='Butterfly Kids'>Bienvenidos a Rafaela Store!</Text>
    <Collection />
    </Flex>       
  )
}

export default Home