import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'

const Busqueda = () => {
  return (    
    <InputGroup  w="50%" bgColor="white" _focus={({borderColor:"purple.200"})} borderRadius="10px">
        <Input placeholder='Que estas buscando?'/>
        <InputRightElement>
        <SearchIcon color="purple.500" fontSize="25px"/>
        </InputRightElement>
    </InputGroup>
    
    
  )
}

export default Busqueda