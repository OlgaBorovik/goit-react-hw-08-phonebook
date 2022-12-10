import { Box, Heading } from '@chakra-ui/react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <Box>
      
        <Heading as="h2">Registration</Heading>
      
      <RegisterForm />
    </Box>
  );
}