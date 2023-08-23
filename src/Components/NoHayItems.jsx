import { Flex, Stack,Text } from '@chakra-ui/react'
import React from 'react'

const NohayItems = () => {
  return (
    <>
    <Stack w="100%" h="770px" alignItems="center" justifyContent="center">
        <Flex w="50%" h="70%"   fontSize="80px" id="noHay" bgColor="yellow.100" alignItems="center" justifyContent="center" border="double 2px pink">Tu carrito esta vacio
</Flex>
    </Stack>
    
    </>
  )
}

export default NohayItems