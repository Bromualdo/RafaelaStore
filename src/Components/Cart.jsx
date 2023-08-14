import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Flex, Text } from '@chakra-ui/react'

const Cart = () => {
  const {cart,setCart}=useContext(CartContext)
  console.log(cart)

  

  
  return (
    <Flex>
    <Text display="flex"  justifyContent="center" fontSize="50px">NO HAY ITEMS EN EL CARRITO</Text>
    <Text>
      {cart.map((p)=>{
        return(
          <div key={p.id}>
            <Text>{p.nombre}</Text>
          </div>
        )
      })}
    </Text>

    
    </Flex>
  )
}

export default Cart