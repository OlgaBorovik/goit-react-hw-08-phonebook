import { useSelector , useDispatch} from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { Box, Text, Button } from '@chakra-ui/react'; 

// import { useAuth } from 'hooks';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName);

  return (
    <Box>
      <Text>Welcome, {name}</Text>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </Button>
    </Box>
  );
};