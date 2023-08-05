import React from 'react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import {  Box,Image,Button,  Flex,CardBody,CardFooter,  Card,  Divider,  Stack,  Heading,Text,  Spacer,ButtonGroup} from "@chakra-ui/react";

const ItemDetail = ({productos}) => {
  const {id}=useParams()
  console.log(productos)
  const filteredProducts= productos.filter((producto)=> producto.id==id)

  
  return (
      <Flex marginTop="20px" >
        
        {filteredProducts.map((p)=>{
          return (
            <div key={p.id}>
              <Card >
                <CardBody boxShadow="dark-lg">
                  <Image
                    w="500px" h="500px"
                    src={p.src}

                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{p.nombre}</Heading>
                    <Text>{p.descripcion}</Text>
                    <Box display="flex" >
                    <Text color="purple.600" fontSize="50px">
                      {p.precio}
                    </Text>
                    <Spacer/>
                    <Box display="flex" alignItems="flex-end"  marginBottom="5px">
                    <Text marginRight="10px" fontSize="20px">Cantidad</Text>
                    <ItemCount/>
                    </Box>
                    </Box>
                  </Stack>
                  <Button variant="solid" colorScheme="purple" w="100%">
                     COMPRAR
                    </Button>
                </CardBody>
              
               
                    
                
              </Card>
            </div>
          );
        })}
        
        
      </Flex>

  )
}

export default ItemDetail