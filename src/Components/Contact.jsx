import {FormLabel,Card,Input,Button,Box, Flex,Text,Textarea} from '@chakra-ui/react'

const Contact = () => {
  return (
    
    <Flex display="flex" w="100%" alignItems="center" justifyContent="center"  h="500px" marginTop="20px">
    <Card w="40%" display="flex" alignItems="center">
        <Text fontFamily='Butterfly Kids' fontSize="50px" >Comunicate con nosotros!</Text>
        <form  >
            
            <Box display="flex" alignItems="flex-end"  justifyContent="center"  marginTop="25px">
            <FormLabel>Nombre :</FormLabel>
            <Input type="text" placeholder="Nombre" _focus={{ borderColor:"purple" }} isRequired
            w="20%"/>
            <FormLabel marginLeft="10px">Apellido :</FormLabel>
            <Input type="text" placeholder="Apellido" _focus={{ borderColor:"purple" }}
             w="20%"/>
            </Box>
            <Box display="flex" w="100%" justifyContent="center"  marginTop="10px" alignItems="flex-end">
            <FormLabel>Email :</FormLabel>
            <Input type="text" placeholder="Ingrese Email" _focus={{ borderColor:"purple" }}
             w="55%"/>
            </Box>
            <Box display="flex" w="100%" justifyContent="center"  marginTop="10px" alignItems="center">
            <FormLabel>Dejanos tus comentarios :</FormLabel>
            <Textarea type="textarea" marginTop="50px" placeholder="Deja tu comentario aqui" _focus={{ borderColor:"purple" }}
            onChange={(e)=>setAdress(e.target.value)} w="55%"/>
            </Box>
            
            <Box  w="100%" display="flex" justifyContent="center" marginTop="10px">
            <Button  type="submit" variant="solid" colorScheme="purple" marginBottom="10px">Enviar Informacion</Button>
            </Box>
        </form>
        
    </Card>
    </Flex>

  )
}

export default Contact