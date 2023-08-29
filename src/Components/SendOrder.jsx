import {collection,addDoc,getFirestore} from "firebase/firestore"
import {useState,useContext} from "react"
import { CartContext } from '../context/ShoppingCartContext'
import {FormLabel,Card,Input,Button,Box, Flex,Text} from '@chakra-ui/react'

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
   
  

    const handleSubmit = ()=>{    
    addDoc(ordersCollection,order).then(({id})  =>
        setOrderId(id))
    }

    const validacionFinal=(e)=>{ 
        e.preventDefault()       
        Swal.fire({
            
            title: `${name} confirma si esto es correcto`,
            text: `nombre: ${name}
                   apellido: ${lastName} \n
                    y la factura total es de ${total} pesos` ,
            showCancelButton: true,
            cancelButtonText: 'Espera algo anda mal',
            confirmButtonText: 'Confirmar',
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
            reverseButtons: true
            
          }).then((result)=>{
            if (result.isConfirmed){
                
             handleSubmit()
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Compra realizada con exito!'
              })
              
            }
          })
        
    }
    
    const order ={
            buyer: { nombre: name,apellido:lastName,email:email},
            items: lastCart,
            total:  total
        }   
    
    const ordersCollection =collection(db,"Facturas")

  return (
    <Flex display="flex" w="100%" alignItems="center" justifyContent="center"  h="500px" marginTop="20px">
    <Card w="40%" display="flex" alignItems="center">
    <Text fontFamily='Butterfly Kids' fontSize="50px" >Ingrese sus datos para finalizar la compra</Text>
      
        <form onSubmit={validacionFinal}  >
            
            <Box display="flex" alignItems="flex-end"  justifyContent="center"  marginTop="25px">
            <FormLabel>Nombre :</FormLabel>
            <Input type="text" placeholder="Nombre" _focus={{ borderColor:"purple" }} isRequired
            onChange={(e)=>setName(e.target.value)} w="20%"/>
            <FormLabel marginLeft="10px">Apellido :</FormLabel>
            <Input type="text" placeholder="Apellido" _focus={{ borderColor:"purple" }} isRequired
            onChange={(e)=>setlastName(e.target.value)} w="20%"/>
            </Box>
            <Box display="flex" w="100%" justifyContent="center"  marginTop="10px" alignItems="flex-end">
            <FormLabel>Email :</FormLabel>
            <Input type="text" placeholder="Ingrese Email" _focus={{ borderColor:"purple" }} isRequired
            onChange={(e)=>setEmail(e.target.value)} w="55%"/>
            </Box>
            <Box display="flex" w="92%" justifyContent="center"  marginTop="10px" alignItems="flex-end">
            <FormLabel>Direccion :</FormLabel>
            <Input type="text" placeholder="Direccion" _focus={{ borderColor:"purple" }} isRequired
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