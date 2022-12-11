import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useState } from 'react';
import { Input, Button, } from '@chakra-ui/react';
import { FormControl, FormLabel } from "@chakra-ui/form-control"


export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
      <form onSubmit={handleSubmit}  autoComplete="off">
        <FormControl >
        <FormLabel  fontSize="lg" mb="16px">
          E-mail
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            id="1"
            isRequired
          />
        </FormLabel>

        <FormLabel  fontSize="lg" mb="16px">
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            id="2"
            isRequired
          />
        </FormLabel>

        <Button type="submit" colorScheme="teal" mb="36px" display={"block"} ml="auto" mr="auto">Войти</Button>
      </FormControl>
    </form>
      
    
  );
}