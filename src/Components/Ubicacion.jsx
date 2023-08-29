import React from 'react'
import {Text,Box} from '@chakra-ui/react'

const Ubicacion = () => {
  return (
    <>
        <Text w="100%"display="flex" alignItems="center" alignContent="center" justifyContent="center" justifyItems="center" flexWrap="wrap" fontFamily='Butterfly Kids' fontSize="50px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse beatae ipsum excepturi rerum ex natus, obcaecati fugiat quaerat saepe libero provident. Tenetur consequatur provident, nisi unde voluptatibus eum officiis facere!</Text>
      <Box display="flex" w="100%" justifyContent="center" marginTop="20px">  
        <iframe width="591" height="409" id="gmap_canvas" src="https://maps.google.com/maps?q=Avenida+General+San+Mart%C3%ADn+656%2C+Ramos+Mej%C3%ADa%2C+Buenos+Aires&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
        </iframe>
            </Box> 
    
    </>
  )
}

export default Ubicacion