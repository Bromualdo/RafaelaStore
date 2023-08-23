import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Card, Flex, Text,Image, Box,Button } from '@chakra-ui/react'
import HayItems from './HayItems'
import NoHayItems from './NohayItems'

const Cart = () => {
  const {cart,setCart}=useContext(CartContext)

  const emptyCart=()=>{
    
    setCart(cart.splice(0,cart.length))
   
  }  

  let acu=0
  let acutotal=0



  return (
    <>
  {cart.length>0?<HayItems/>:<NoHayItems/>}
    </>
    )
}

export default Cart