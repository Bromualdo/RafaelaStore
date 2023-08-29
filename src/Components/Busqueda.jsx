import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputRightElement ,Button} from '@chakra-ui/react'

const Busqueda = () => {
  return (    
    <InputGroup  w="50%" bgColor="white" borderRadius="10px" _focus={{ borderColor:"purple" }}>
        <Input placeholder='Que estas buscando?' _focus={{ borderColor:"purple" }}/>
        <InputRightElement>
        <Button borderRadius="0 5px 5px 0" ><SearchIcon color="purple.500" fontSize="25px"/></Button>
        </InputRightElement>
    </InputGroup>
    
    
  )
}

export default Busqueda