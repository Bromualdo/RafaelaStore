
import React, { useContext, useState,useEffect } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Card, Flex, Text,Image, Box,Button } from '@chakra-ui/react'
import Loading from './Loading'

const HayItems = () => {

    const[loading,setLoading]=useState(true)
    const[elemento,setElemento]=useState([])
    const {cart,setCart}=useContext(CartContext)
    
    useEffect(()=>{
        setTimeout(()=>{        
        setLoading(false)
    },1000)},[])

    const removeItem=(id)=>{
      
      const updatedCart=cart.filter(item=>item.id!==id)
      console.log("jelou",updatedCart,id);
      setCart(updatedCart)
    }

    if(loading){return <Loading/>}
        
    const emptyCart=()=>{
    
    setCart([])
   
  } 
  //hay que implementar reduce en vez de esto//
  let acu=0
  let acutotal=0

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="600px">
    {/* <Text display="flex"  justifyContent="center" fontSize="50px">NO HAY ITEMS EN EL CARRITO</Text> */}
    {
        
        cart.map((p)=>{
          
          
          acu=p.precio*p.cantidad
          acutotal+=acu
        return(
          <Card w="500px" key={p.id} marginTop="20px" boxShadow="2xl">
          <Box display="flex" >
            <Box>
            <Image src={p.src} w="150px" h="100px"  borderRight="solid grey 1px"/>
            
            </Box>
            <Box marginLeft="4px">
            <Text>{p.nombre}</Text>
            <Text>{p.descripcion}</Text>
            <Text>Cantidad: {p.cantidad}</Text>
            <Text>Precio total: {acu+" $"}</Text>
            
            </Box>
            <Box display="flex" alignItems="center" w="40%">
            <Box w="100%" display="flex" flexDirection="column">
            
            </Box>
            </Box>
            <button onClick={()=>removeItem(p.id)}>x</button>
          </Box>
          
          </Card>
          
        )
        
      })}
    <Text>{"Total:"+acutotal}</Text>

    <Button w="500px" onClick= {emptyCart} bgColor="purple.300" color="white" marginTop="20px">Vaciar Carrito</Button>
    <Button w="500px" bgColor="purple.300" color="white" marginTop="20px">Finalizar Compra</Button>
    
    </Box>
  )
}

export default React.memo(HayItems)