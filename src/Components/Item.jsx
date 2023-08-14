import React from "react";
import ItemCount from "./ItemCount";
import {  Button,  Flex,  Card,  Divider,  Stack,  Heading,  Image,  Text,  Spacer,} from "@chakra-ui/react";
import { Link} from "react-router-dom";

const Item = ({nombre,precio,imagen,id}) => {
  
 
 
  return (     
    
          <Card
            w="200px"
            maxH="sm"
            display="flex"
            flexDirection="column"
            borderRadius="0"
          >
            <Image src={imagen} w="100%" h="200px" />
            <Stack mt="2">
              <Heading size="">{nombre}</Heading>
              <Divider />
              <Flex alignContent="center" alignItems="center" justifyContent="center">
                <Text color="purple.600" fontSize="3xl" marginLeft="10px">
                  {precio}
                </Text>                              
              </Flex>
            </Stack>
           <Flex justifyContent="space-evenly" marginTop="20px" gap="0.5em" >
            <Link to={`/item/${id}`}>
           <Button bg="purple.100"
           color="rgba(89,63,111,1)"
           fontSize="20px"
           
           border="2px solid purple">
            Detalles
            </Button>
            </Link>
            
            <Button
              variant="ghost"
              color="white"
              fontSize="15px"
              bg="purple.300"
              
              display="flex"
              alignContent="center"
              border="2px solid purple"
            >
              Add to cart
            </Button>
            
            </Flex>
          </Card>
      
   
  );
};

export default Item;
