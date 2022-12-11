import { Link as NavLink } from 'react-router-dom';
import { Link, HStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';


export const Navigation = () => {
const isLoggedIn  = useSelector(authSelectors.selectIsLoggedIn)

  return (
    <HStack spacing='24px'>
      
        <Link as={NavLink}  to="/" w='100px' p='4px' borderRadius='4' textAlign='center' border='2px' borderColor={'teal.500'} _hover={{bg:'teal.500', color:'white' }} textDecoration={"none"} >
        HOME
      </Link>
      
      
      {isLoggedIn && <Link as={NavLink} to="/contacts" w='100px' p='4px' borderRadius='4' textAlign='center' border='2px' borderColor={'teal.500'} _hover={{ bg: 'teal.500', color: 'white' }} textDecoration={"none"}>
        CONTACTS
      </Link>}
        
      
    </HStack>
  );
};