import { Box, Heading } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <Box>
      <Heading as="h2" fontSize="2xl" textAlign={"center"} mb="24px">Please, log in</Heading>
      <LoginForm />
    </Box>
  );
}