import React from "react";
import ItemCount from "./ItemCount";
import {  Button,  Flex,  Card,  Divider,  Stack,  Heading,  Image,  Text,  Spacer,} from "@chakra-ui/react";

const Item = ({nombre,precio,imagen}) => {
  
 
  
 
  return (     
    
          <Card
            w="250px"
            height="350px"
            maxH="sm"
            display="flex"
            flexDirection="column"
            borderRadius="0"
          >
            <Image src={imagen} w="100%" h="200px" />
            <Stack mt="2">
              <Heading size="md">{nombre}</Heading>
              <Divider />
              <Flex alignContent="center" alignItems="center">
                <Text color="purple.600" fontSize="3xl" marginLeft="10px">
                  {precio}
                </Text>                              
              </Flex>
            </Stack>
           <Flex justifyContent="space-evenly" marginTop="20px" >
           <Button bg="purple.100"
           color="white"
           fontSize="20px"
           
           >Detalles</Button>
            <Button
              variant="ghost"
              color="white"
              fontSize="15px"
              bg="purple.300"
              
              display="flex"
              alignContent="center"
            >
              Add to cart
            </Button>
            
            </Flex>
          </Card>
      
   
  );
};

export default Item;
