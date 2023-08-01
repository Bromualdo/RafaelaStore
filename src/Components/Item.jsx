import React from "react";
import ItemCount from "./ItemCount";
import {  Button,  Flex,  Card,  Divider,  Stack,  Heading,  Image,  Text,  Spacer,} from "@chakra-ui/react";

const Item = ({nombre,precio,imagen}) => {
  
 
  
 
  return (     
    
          <Card
            w="250px"
            maxH="sm"
            display="flex"
            flexDirection="column"
            borderRadius="0"
          >
            <Image src="url(./)" w="100%" />
            <Stack mt="2">
              <Heading size="md">{nombre}</Heading>
              <Divider />
              <Flex alignContent="center" alignItems="center">
                <Text color="purple.600" fontSize="3xl">
                  {precio}
                </Text>
                <Spacer />

                <ItemCount />
              </Flex>
            </Stack>
            <Button
              variant="ghost"
              color="white"
              fontSize="40px"
              bg="purple.300"
              borderRadius="0"
              shadow="dark-lg"
              display="flex"
              alignContent="center"
            >
              Add to cart
            </Button>
          </Card>
      
   
  );
};

export default Item;
