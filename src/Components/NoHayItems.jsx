import { Flex, Stack,Button } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import React from 'react'

const NohayItems = () => {
  return (
    <>
    <Stack w="100%" h="770px" alignItems="center" justifyContent="center">
        <Flex w="50%" h="70%"   fontSize="50px" id="noHay" bgColor="yellow.100" alignItems="center" justifyContent="center" border="double 2px pink">Tu carrito esta vacio
</Flex>
    <Link to={"/"}>  
    <Button variant="solid" colorScheme="purple" w="100%">Volver a inicio</Button>
    </Link>
    </Stack>
    </>
  )
}

export default NohayItems