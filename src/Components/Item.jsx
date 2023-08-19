import React from "react";

import {  Button,  Flex,  Card,  Divider,  Stack,  Heading,  Image,  Text,  Spacer, Box,} from "@chakra-ui/react";
import { Link} from "react-router-dom";

const Item = ({nombre,precio,imagen,id,descripcion}) => {
  
 console.log(descripcion)
 

  return (     
    <Box display="flex" flexDirection="column">
          <Card
            w="200px"
            
            display="flex"
            flexDirection="column"
            borderRadius="5"
          >
            <Image src={imagen} w="100%" h="200px" />
            <Stack mt="2">
              <Heading size="">{nombre}</Heading>
              <Divider />
              <Flex   justifyContent="center" alignItems="center" flexDirection="column">
                <Text color="purple.600" fontSize="3xl" marginLeft="10px">
                  {precio}
                </Text> 
                <Text>{descripcion}</Text>                             
              </Flex>
            </Stack>
            </Card>
           <Flex  marginTop="2px" gap="0.5em" >
            <Link to={`/item/${id}`}>
           <Button bg="purple.100"
           color="rgba(89,63,111,1)"
           fontSize="20px"
           w="200px"
           
           border="2px solid purple">
            Detalles
            </Button>
            </Link>
            
            </Flex>
          
      
          </Box>
  );
};

export default Item;
