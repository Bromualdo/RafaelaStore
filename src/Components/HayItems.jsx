
import React, { useContext, useState,useEffect } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Card, Flex, Text,Image, Box,Button } from '@chakra-ui/react'
import Loading from './Loading'
import {Link} from 'react-router-dom'
import { CloseIcon } from '@chakra-ui/icons'

const HayItems = () => {

    const[loading,setLoading]=useState(true)
    const[elemento,setElemento]=useState([])
    const {cart,setCart,total,setTotal}=useContext(CartContext)
    
    
    useEffect(()=>{
        setTimeout(()=>{        
        setLoading(false)
    },1000)},[])

    const removeItem=(id)=>{
      
      const updatedCart=cart.filter(item=>item.id!==id)      
      setCart(updatedCart)
    }

    if(loading){return <Loading/>}
        
    const emptyCart=()=>{      
    
    setCart([])
   
  }  

  const SumaTotal = cart.reduce((total,item) => total +item.Precio*item.Cantidad,0)  

  const productoFinal= ()=>setTotal(SumaTotal)
 
  const asegurarse =()=>{ Swal.fire({
    icon: 'error',
    title: 'Estas seguro que quieres vaciar el carrito?',
    text: 'todos tus productos se borraran!',
    showCancelButton: true,
    cancelButtonText: 'Volver',
    confirmButtonText: 'Si estoy seguro!',
    cancelButtonColor: 'rgba(89,63,111,1)',
    confirmButtonColor: 'rgba(116,94,134,1)',
    reverseButtons: true
    
  }).then((result)=>{
    if (result.isConfirmed){
      emptyCart()
    }
  })

  
}

return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
    {
        
        cart.map((p)=>{          
          
          const confirmaElimina=()=>{Swal.fire({
            title: 'Seguro? que quieres eliminar?',
            
            icon: 'error',
            showCancelButton: true,
            cancelButtonText: 'Volver',
            confirmButtonText: 'Si estoy seguro!',
            cancelButtonColor: "orange" ,
            confirmButtonColor: 'rgba(116,94,134,1)',
            reverseButtons: true
            
          }).then((result)=>{
            if (result.isConfirmed){
              removeItem(p.id)
            }
            
          })}


        return(
          <Card w="500px" key={p.id} marginTop="20px" boxShadow="2xl">
          <Box display="flex" >
            <Box>
            <Image src={p.Imagen} w="100%" h="120px"  borderRight="solid grey 1px"/>
            
            </Box>
            <Box marginLeft="4px" w="40%">
            <Text>{p.Nombre}</Text>
                        
            <Box display="flex" w="150%" flexDirection="column">
            <Text>Precio por unidad: {p.Precio+" $"}</Text>
            <Text>Cantidad: {p.Cantidad}</Text>
            </Box>
            </Box>
            <Box display="flex" w="50%" justifyContent="flex-end" alignItems="flex-start">
            <button onClick={confirmaElimina}><CloseIcon/></button>
            </Box>
          </Box>
          
          </Card>
          
        )
        
      })}
    <Text  fontSize="50px">{"Total:"+SumaTotal+" $"}</Text>
      <Box w="100%" display="flex" justifyContent="space-between">
    <Button w="30%" onClick= {asegurarse} bgColor="red.300" color="white" marginTop="20px">Vaciar Carrito</Button>
    <Link to={"/goForm"}>  
    <Button w="100%" bgColor="purple.300" color="white" marginTop="20px" onClick={productoFinal}>Finalizar Compra</Button>
    </Link>
    </Box>
    </Box>
  )
}

export default React.memo(HayItems)