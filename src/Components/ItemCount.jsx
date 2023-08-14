import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { Flex, Box, Spacer,Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ItemCount = () => {
  const [contador, setContador] = useState(0);

// const [qty,setQty]=useState(0)
//  const onAdd =()=>{
  // push a cart =[{id , nombre , qty , precio}]
// }

  const sumar = () => {

    contador<10 ? setContador(contador + 1) : setContador(contador); 
  };

  const restar = () => {
    contador>0 ? setContador(contador - 1) : setContador(contador);
  };

  const reset = () => {
    setContador(0);
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
