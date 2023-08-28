
import {collection,addDoc,getFirestore} from "firebase/firestore"
import {useState,useContext} from "react"
import { CartContext } from '../context/ShoppingCartContext'
import {FormControl,FormLabel,FormErrorMessage,FormHelperText,Card,Input,Button,Box, Flex,Text} from '@chakra-ui/react'

const SendOrder = () =>{

    const [name,setName] =useState("")
    const [lastName,setlastName]=useState("")
    const [adress,setAdress]=useState("")
    const [email,setEmail]=useState("")
    const [orderId,setOrderId]=useState(null)
    const {cart,total}=useContext(CartContext)
    const db=getFirestore()
   
    
    const cartFilter=['id','Nombre','Precio','Cantidad']

    const lastCart=cart.map(item=>{
        const newitem={}
        cartFilter.forEach(key=>{
            newitem[key]=item[key]
        })
        return newitem
    }) 
   
  

    const handleSubmit = (e)=>{
    e.preventDefault()
    addDoc(ordersCollection,order).then(({id})  =>
        setOrderId(id))
    }

    
    const order ={
            buyer: { nombre: name,apellido:lastName,email:email},
            items: lastCart,
            total:  total
        }   
    
    const ordersCollection =collection(db,"orden")

  return (
    <Flex display="flex" w="100%" alignItems="center" justifyContent="center"  h="500px" marginTop="20px">
    <Card w="40%" display="flex" alignItems="center">
        <h1>Ingrese sus datos para finalizar la compra</h1>
        <form onSubmit={handleSubmit}  >
            
            <Box display="flex" alignItems="flex-end"  justifyContent="center"  marginTop="25px">
            <FormLabel>Nombre :</FormLabel>
            <Input type="text" placeholder="Nombre" _focus={{ borderColor:"purple" }} isRequired
            onChange={(e)=>setName(e.target.value)} w="20%"/>
            <FormLabel marginLeft="10px">Apellido :</FormLabel>
            <Input type="text" placeholder="Apellido" _focus={{ borderColor:"purple" }}
            onChange={(e)=>setlastName(e.target.value)} w="20%"/>
            </Box>
            <Box display="flex" w="100%" justifyContent="center" align marginTop="10px" alignItems="flex-end">
            <FormLabel>Email :</FormLabel>
            <Input type="text" placeholder="Ingrese Email" _focus={{ borderColor:"purple" }}
            onChange={(e)=>setEmail(e.target.value)} w="55%"/>
            </Box>
            <Box display="flex" w="92%" justifyContent="center" align marginTop="10px" alignItems="flex-end">
            <FormLabel>Direccion :</FormLabel>
            <Input type="text" placeholder="Direccion" _focus={{ borderColor:"purple" }}
            onChange={(e)=>setAdress(e.target.value)} w="55%"/>
            </Box>
            
            <Box  w="100%" display="flex" justifyContent="center" marginTop="10px">
            <Button  type="submit" variant="solid" colorScheme="purple">Enviar Informacion</Button>
            </Box>
        </form>
        <Text display="flex" justifyContent="center" w="70%" marginTop="10px">Numero de orden: {orderId}</Text>
    </Card>
    </Flex>

  )
}

export default SendOrder