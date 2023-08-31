import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputRightElement ,Button} from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext, useState} from 'react'
import { Link} from 'react-router-dom'


const Busqueda = () => {

  const[Busqueda,setBusqueda]=useState()
  
  const {productos,setResultado}=useContext(CartContext)

  
  const EfectuarBusqueda =(e)=>{
    e.preventDefault() 
    
    setResultado(found)   
    
  }

 
  
  const found=productos.filter(e=>e.Nombre.includes(Busqueda))  

  
  return (  
    
   
    <InputGroup  w="50%" bgColor="white" borderRadius="10px" _focus={{ borderColor:"purple" }} >
        <Input placeholder='Que estas buscando?' _focus={{ borderColor:"purple" }} onChange={(e) =>setBusqueda(e.target.value)} />
        <InputRightElement>
        <Link to={'/search'}>
        <Button borderRadius="0 5px 5px 0" ><SearchIcon color="purple.500" fontSize="25px" onClick={EfectuarBusqueda} /></Button>
        </Link>
        </InputRightElement>
    </InputGroup>
    
   
    
  )
}

export default Busqueda