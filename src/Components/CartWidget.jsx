
import { FaShoppingBag } from "react-icons/fa";
import { Flex, Box,Spacer,Text} from "@chakra-ui/react";
import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const CartWidget = () => {
  
const {cart}=useContext(CartContext)
const cartLen=cart.length

const valor=document.getElementById('valor')

const muestroNumero= ()=>{
  if (cartLen>0){
    return (
      <p id="valor" className="me_anime">{cartLen}</p>
    ) 
  }else {
    <p id="valor" className="me_animare">{cartLen}</p>
  }
}






  


  return (
    <Flex position="relative" marginRight="3" marginBottom="1">       
      <Box>
        <FaShoppingBag id="carrito"/>
      </Box>
        <Spacer/>
      <Box display="flex" alignItems="center" justifyContent="center"
        position="absolute" 
        right="2.5" 
        bottom="1.4"
        w="5"
        h="5" 
        color="white"
        bgColor='rgba(89,63,111)'
        borderRadius="10"     
        
        >
        {muestroNumero()}
      </Box>
      
    </Flex>
  );
};

export default CartWidget;
