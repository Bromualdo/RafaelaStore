import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Card, Flex, Text,Image, Box,Button } from '@chakra-ui/react'
import HayItems from './HayItems'
import NoHayItems from './NohayItems'

const Cart = () => {
  const {cart,setCart}=useContext(CartContext)

  return (
    <Flex alignItems="center" justifyContent="center" h="50em">
  {cart.length>0?<HayItems/>:<NoHayItems/>}
    </Flex>
    )
}

export default Cart