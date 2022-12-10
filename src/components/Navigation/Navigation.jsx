import { Link as NavLink } from 'react-router-dom';
import { Link, Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';


export const Navigation = () => {
const isLoggedIn  = useSelector(authSelectors.selectIsLoggedIn)

  return (
    <nav>
      <Box w='100px' bg='white' p='4px' borderRadius='4' mr="24px" textAlign='center' border='1px' borderColor={'teal.500'} color='teal.500' _hover={{bg:'teal.500', color:'white' }}>
        <Link as={NavLink}  to="/" >
        HOME
      </Link>
      </Box>
      
      {isLoggedIn && <NavLink to="/contacts">Contacts </NavLink> }
        
      
    </nav>
  );
};