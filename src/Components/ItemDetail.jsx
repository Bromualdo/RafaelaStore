import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import {  Box,Image,Button,  Flex,CardBody,  Card,  Stack,  Heading,Text,  Spacer, filter} from "@chakra-ui/react";

let acc=0

const ItemDetail = ({productos}) => {
  const {id}=useParams()
  const {cart,setCart}=useContext(CartContext)
  const filteredProducts= productos.filter((producto)=> producto.id==id)
   
  console.log("esto es ",cart)
  const handleClick =()=>{
    setCart(current=>[...current,filteredProducts[0]])
  }
  
  
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
                  <Button variant="solid" colorScheme="purple" w="100%" onClick={handleClick}>
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