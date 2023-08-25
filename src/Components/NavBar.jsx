import React from "react";
import {  Flex,  Box,  Menu,  MenuButton,  MenuList,  MenuItem,  Button,  Spacer} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom'

const NavBar = () => {
  
  return (
    <Flex bgGradient="linear-gradient(90deg, rgba(89,63,111,1) 0%, rgba(89,63,111,1) 30%, rgba(116,94,134,1) 60%, rgba(116,94,134,1) 100%)">
      <Box display="flex">      
      <Link to={"/"}>  
      <Box display="flex" flexDirection="column" alignItems="center">
        <div id="logo"></div>
        <div id="slogan">Rafaela</div>
      </Box> 
      </Link>
       
        <Box display="flex" alignSelf="flex-end" marginLeft="20px">
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bgColor="rgba(89,63,111,0.01)"
            _hover={{ bg: 'rgba(160,156,182,100)'}}
            
            color="white"
            alignItems="center"            
          >
            Tienda Bebé
          </MenuButton>
          <MenuList>
           
            <Link to={`/category/${'Andadores'}`}>
            <MenuItem _hover={{ bg: 'rgba(160,156,182,100)' ,color:"white" }}>
              Andadores
              </MenuItem>          
              </Link>
            
            <Link to={`/category/${'Peluches'}`}>
            <MenuItem _hover={{ bg: 'rgba(160,156,182,100)',color:"white" }}>
              Peluches
              </MenuItem>
            </Link >
              <Link to={`/category/${'Agua&Playa'}`}>
            <MenuItem _hover={{ bg: 'rgba(160,156,182,100)',color:"white" }}>
              Agua&Playa
              </MenuItem>
              </Link>
          </MenuList>
        </Menu>
        </Box>
      </Box>
      <Spacer />
      <Box display="flex" flexDirection="column" justifyContent="flex-end" >
        <Link to={"/cart"} >
        <CartWidget />
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
