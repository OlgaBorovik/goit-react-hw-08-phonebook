import { useSelector , useDispatch} from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { Text, Button, HStack } from '@chakra-ui/react'; 

// import { useAuth } from 'hooks';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.selectUserEmail);

  return (
    <HStack spacing="24px">
      <Text fontSize='xl' as='b'>{email}</Text>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())} w='100px' p='4px' borderRadius='4' colorScheme={"teal"}>
        LOG OUT
      </Button>
    </HStack>
  );
};