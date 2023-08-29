import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import {  Box,Image,Button,  Flex,CardBody,  Card,  Stack,  Heading,Text,  Spacer} from "@chakra-ui/react";



const ItemDetail = ({productos}) => {
  
  const {id}=useParams()
  const {cart,setCart,contador,setContador}=useContext(CartContext)  
  const filteredProducts= productos.filter((producto)=> producto.id==id)
    

    const precioTotal=(number)=>{
    let total=number*contador    
    return (total)
    }
 
    const handleClick =()=>{    
    const filter=filteredProducts[0]
    if (cart.find((valor)=> valor.id===filter.id)){
      Swal.fire({
        icon: 'warning',
        title : 'ya tienes este producto en tu carrito!',
        confirmButtonColor: 'rgba(116,94,134,1)'
      })
    }
    else{
      setContador(current=>filter.Cantidad=current)
      setCart(current=>[...current,filteredProducts[0]])
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Producto agregado al carrito!'
      })

          
      }
    setContador(1)    
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
                    <ItemCount/>
                    </Box>
                    </Box>
                  </Stack>
                  <Button variant="solid" colorScheme="purple" w="100%" onClick={handleClick} >
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