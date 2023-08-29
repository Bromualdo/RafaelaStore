
import { FaShoppingBag } from "react-icons/fa";
import { Flex, Box,Spacer,Text} from "@chakra-ui/react";
import React, { useContext, useState,useEffect } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const CartWidget = () => {
  
const {cart}=useContext(CartContext)
const cartLen=cart.length
const [animacion,setAnimacion]=useState('') 








  


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
        {<p className="animate__animated animate__bounceInRight">{cartLen}</p> }
      </Box>
      
    </Flex>
  );
};

export default CartWidget;
