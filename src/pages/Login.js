import { Box, Heading } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <Box>
      
        <Heading as="h2">Login</Heading>
      
      <LoginForm />
    </Box>
  );
}