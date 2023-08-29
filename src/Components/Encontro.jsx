import React from 'react'
import ItemList from './ItemList'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext} from 'react'
import {Flex} from '@chakra-ui/react'

const Encontro = () => {

const {Resultado}=useContext(CartContext)  

console.log(Resultado);
  return (
    <>
    <Flex justifyContent="center" alignItems="center" marginTop="20px">
    <ItemList  productos={Resultado}/>
    </Flex>
      </>
  )
}

export default Encontro