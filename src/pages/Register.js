import { Box, Heading } from '@chakra-ui/react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <Box>
        <Heading as="h2" fontSize="2xl" textAlign={"center"} mb="24px">Registration</Heading>
        <RegisterForm />
    </Box>
  );
}