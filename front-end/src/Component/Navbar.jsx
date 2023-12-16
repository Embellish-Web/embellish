

import React from 'react';
import { Flex, Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa'; // Assuming these icons are suitable for Favourites, Cart, and Dashboard
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex
      bg="transparent"
      color="white"
      p={4}
      justify="space-between"
      align="center"
    >
       <Menu bg="transparent">
      <MenuButton
        as={Text}
        fontSize="lg"
        fontWeight="bold"
        bg={'transparent'}
        _hover={{ textDecoration: 'none' }}
        _expanded={{ bg: 'transparent' }} // Set background to transparent when menu is open
      >
        Categories <BiChevronDown />
      </MenuButton>
      <MenuList bg="transparent" borderColor="transparent" color={'blue'}> {/* Set background and border color to transparent */}
        <MenuItem _expanded={{ bg: 'transparent' }} >
          <Link to="#">Phone charms</Link>
        </MenuItem >
        <MenuItem _expanded={{ bg: 'transparent' }}>
          <Link to="#">Bracelets</Link>
        </MenuItem>
        <MenuItem>
          <Link to="#">Anklets</Link>
        </MenuItem>
        <MenuItem>
          <Link to="#">Necklace</Link>
        </MenuItem>
        <MenuItem>
          <Link to="#">Rings</Link>
        </MenuItem>
        <MenuItem>
          <Link to="#">Bracelet stack</Link>
        </MenuItem>
        <MenuItem>
          <Link to="#">Duo Bracelets</Link>
        </MenuItem>
      </MenuList>
    </Menu>

      
        <Link
          mr={4}
          _hover={{ textDecoration: 'none', color: 'white' }}
        >
          Favourites
        </Link>
        <Link
          mr={4}
          _hover={{ textDecoration: 'none', color: 'white' }}
        >
          Cart
        </Link>
        <Link
          _hover={{ textDecoration: 'none', color: 'white' }}
        >
          Dashboard
        </Link>
      </Flex>
   
  );
};

export default Navbar;
