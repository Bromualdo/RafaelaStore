import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { Flex, Box, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ItemCount = () => {
  const [contador, setContador] = useState(0);

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
          onClick={sumar}
          className="botones"
          color="white"
          size="sm"
          variant="outline"
          icon={<FaPlus />}
        />
        <Spacer />
        <p>{contador}</p>
        <Spacer />
        <IconButton
          onClick={restar}
          className="botones"
          size="sm"
          color="white"
          variant="outline"
          icon={<FaMinus />}
        />
      </Flex>
    </div>
  );
};

export default ItemCount;
