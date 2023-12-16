import React from 'react';
import { Box, Container, CSSReset, ChakraProvider } from '@chakra-ui/react';
import Navbar from './Navbar';
export const Home = () => {
  return (
    
    <>
   <CSSReset />
      <Box bg="black" color="white">
        <Navbar />
        <Container maxW="container.xl" py={20}>
          {/* Your content goes here */}
          <h1>Welcome to the Homepage</h1>
        </Container>
      </Box>

  
    </>
    
  )
}
export default Home