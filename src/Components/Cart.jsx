import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Flex} from '@chakra-ui/react'
import HayItems from './HayItems'
import NoItems from './NoItems'

const Cart = () => {
  const {cart,setCart}=useContext(CartContext)

  return (
    <Flex alignItems="center" justifyContent="center" h="50em">
  {cart.length>0?<HayItems/>:<NoItems/>}
    </Flex>
    )
}

export default Cart