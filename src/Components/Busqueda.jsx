import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputRightElement ,Button, omitThemingProps} from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext,useState} from 'react'
import { Link} from 'react-router-dom'
import ItemList from './ItemList'

const Busqueda = () => {

  
  const [Busqueda,setBusqueda]=useState()
  const {productos}=useContext(CartContext)

  
  const handleSubmit =(e)=>{
    e.preventDefault()
    return (
      <ItemList  productos={filteredProducts}/>
    )
    
  }
  
  const found=productos.filter(e=>e.Nombre.includes(Busqueda))
  const filteredProducts=found.filter((producto)=>producto.Nombre === category)
  console.log("hiciste una busquediviris", filteredProducts,found);


  
  return (  
    
    <form onSubmit={handleSubmit} >
    <InputGroup  w="100%" bgColor="white" borderRadius="10px" _focus={{ borderColor:"purple" }} >
        <Input placeholder='Que estas buscando?' _focus={{ borderColor:"purple" }} onChange={(e) =>setBusqueda(e.target.value)} />
        <InputRightElement>
        <Link to={'/search'}>
        <Button type="submit" borderRadius="0 5px 5px 0" ><SearchIcon color="purple.500" fontSize="25px"/></Button>
        </Link>
        </InputRightElement>
    </InputGroup>
    </form>
   
    
  )
}

export default Busqueda