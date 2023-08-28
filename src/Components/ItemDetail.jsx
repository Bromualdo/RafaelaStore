import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import {  Box,Image,Button,  Flex,CardBody,  Card,  Stack,  Heading,Text,  Spacer, filter} from "@chakra-ui/react";



const ItemDetail = ({productos}) => {
  const acc=0
  const {id}=useParams()
  const {cart,setCart}=useContext(CartContext)
  const {contador,setContador}=useContext(CartContext)
  const filteredProducts= productos.filter((producto)=> producto.id==id)
    const precioTotal=(number)=>{

    let total=number*contador    
    return (total)
  
  }
  console.log(filteredProducts);
  
  const handleClick =()=>{
    const filter=filteredProducts[0]
    setContador(current=>filter.cantidad=current)
    setCart(current=>[...current,filteredProducts[0]])
    setContador(1)
    console.log(filter)
  }
  
  
  return (
      <Flex marginTop="20px" w="30%">
        
        {filteredProducts.map((p)=>{
          return (
            <div key={p.id}>
              <Card>
                <CardBody boxShadow="dark-lg">
                  <Image
                    w="500px" h="500px"
                    src={p.Imagen}

                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{p.Nombre}</Heading>
                    <Text >{p.Descripcion}</Text>
                    <Box display="flex" >
                    <Text color="purple.600" fontSize="50px">
                      {precioTotal(p.Precio)+" $"}
                    </Text>
                    <Spacer/>
                    <Box display="flex" alignItems="flex-end"  marginBottom="5px">
                    <Text marginRight="10px" fontSize="20px">Cantidad</Text>
                    <ItemCount cuenta={acc}/>
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