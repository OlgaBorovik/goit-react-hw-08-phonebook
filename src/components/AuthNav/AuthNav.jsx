import { Link as NavLink } from 'react-router-dom';
import { Link, Flex } from '@chakra-ui/react';


export const AuthNav = () => {
  return (
    <Flex>
      <Link as={NavLink}  to="/register" mr="16px" w='100px' p='4px' borderRadius='4' textAlign='center' border='2px' borderColor={'teal.500'} _hover={{bg:'teal.500', color:'white' }} textDecoration={"none"} >
        REGISTER
      </Link>
      <Link as={NavLink} to="/login" w='100px' p='4px' borderRadius='4' textAlign='center' border='2px' borderColor={'teal.500'} _hover={{bg:'teal.500', color:'white' }} textDecoration={"none"} >
        LOG IN
      </Link>
      
      
    </Flex>
  );
};
