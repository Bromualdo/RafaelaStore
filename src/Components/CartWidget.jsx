import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Flex, Box,Spacer} from "@chakra-ui/react";

const CartWidget = () => {
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
        <p>3</p>
      </Box>
      
    </Flex>
  );
};

export default CartWidget;
