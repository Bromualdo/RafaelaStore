import React from "react";
import {
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Flex bgGradient="linear-gradient(90deg, rgba(89,63,111,1) 0%, rgba(89,63,111,1) 30%, rgba(116,94,134,1) 60%, rgba(116,94,134,1) 100%)">
      <Box id="logo"></Box>
      

      
     
      <Box display="flex" flexDirection="column">
        <Box id="slogan" >Rafaela</Box>
        <Spacer/>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bgColor="rgba(89,63,111,0.01)"
            
            color="white"
            alignItems="center"
            _hover={{ bg: 'rgba(160,156,182,100)' }}
          >
            Tienda Bebé
          </MenuButton>
          <MenuList>
            <MenuItem _hover={{ bg: 'rgba(160,156,182,100)' }}>Jugetes</MenuItem>
            <MenuItem _hover={{ bg: 'rgba(160,156,182,100)' }}>Cochecitos</MenuItem>
            <MenuItem _hover={{ bg: 'rgba(160,156,182,100)' }}>Puericultura y Alimentación</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box display="flex" flexDirection="column" justifyContent="flex-end">
        <CartWidget></CartWidget>
      </Box>
    </Flex>
  );
};

export default NavBar;
