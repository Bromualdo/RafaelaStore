import React from 'react'
import ItemDetail from './ItemDetail'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react'
import { Flex } from '@chakra-ui/react'

const ItemDetailContainer = () => {

  const {productos}=useContext(CartContext)
  
  return (
    <Flex justifyContent="center" alignItems="center">
    <ItemDetail productos={productos}/>
    </Flex>
  )
}

export default ItemDetailContainer