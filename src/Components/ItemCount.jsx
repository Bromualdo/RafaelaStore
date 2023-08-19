import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { FaPlus, FaMinus } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { Flex,Spacer,Text } from "@chakra-ui/react";



const ItemCount =() => {
  const {contador, setContador} = useContext(CartContext);  
  

  const sumar = () => {

    contador<10 ? setContador(contador + 1) : setContador(contador); 
  };

  const restar = () => {
    contador>1 ? setContador(contador - 1) : setContador(contador);
  }; 

  return (
    <div>
      <Flex alignItems="center" width="100px">
        <IconButton
          onClick={restar}
          className="botones"
          color="white"
          size="sm"
          variant="outline"
          icon={<FaMinus />}
        />
        <Spacer />
        <Text fontSize="25px">{contador}</Text>
        <Spacer />
        <IconButton
          onClick={sumar}
          className="botones"
          size="sm"
          color="white"
          variant="outline"
          icon={<FaPlus />}
        />
      </Flex>
    </div>
  );
};

export default ItemCount;
