import { Link as NavLink } from 'react-router-dom';
import { Box, Link, Flex } from '@chakra-ui/react';


export const AuthNav = () => {
  return (
    <Flex>
      <Box w='100px' bg='white' p='4px' borderRadius='4' mr="24px" textAlign='center' border='1px' borderColor={'teal.500'} color='teal.500' _hover={{bg:'teal.500', color:'white' }} >
        <Link as={NavLink}  to="/register" >
        Register
      </Link>
      </Box>
      
      <Box w='100px' bg='white' p='4px' borderRadius='4' mr="24px" textAlign='center' border='1px' borderColor={'teal.500'} color='teal.500' _hover={{bg:'teal.500', color:'white' }}>
        <Link as={NavLink} to="/login">
        Log In
      </Link>
      </Box>
      
    </Flex>
  );
};
