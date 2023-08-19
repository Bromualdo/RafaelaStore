import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Card, Flex, Text,Image, Box,Button } from '@chakra-ui/react'

const Cart = () => {
  const {cart,setCart}=useContext(CartContext)

  const emptyCart=()=>{
    window.location.reload()
    cart.splice(0,cart.length)
   
  }  

  
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="600px">
    {/* <Text display="flex"  justifyContent="center" fontSize="50px">NO HAY ITEMS EN EL CARRITO</Text> */}
    
      {cart.map((p)=>{
        return(
          <Card w="500px" key={p.id} marginTop="20px" boxShadow="2xl">
          <Box display="flex" >
            <Box>
            <Image src={p.src} w="150px" h="100px"  />
            
            </Box>
            <Box>
            <Text>{p.nombre}</Text>
            <Text>{p.descripcion}</Text>
            <Text>Cantidad: {p.cantidad}</Text>
            <Text>Precio total: {p.precio*p.cantidad+" $"}</Text>
            
            </Box>
            <Box display="flex" alignItems="center" w="40%">
            <Box w="100%" display="flex" flexDirection="column">
            
            </Box>
            </Box>
            <div>x</div>
          </Box>
          
          </Card>
          
        )
        
      })}
    <Text>Total</Text>

    <Button w="500px" onClick= {emptyCart} bgColor="purple.300" color="white" marginTop="20px">Vaciar Carrito</Button>
    <Button w="500px" bgColor="purple.300" color="white" marginTop="20px">Finalizar Compra</Button>
    
    </Box>
  )
}

export default Cart