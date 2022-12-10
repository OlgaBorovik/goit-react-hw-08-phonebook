import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useState } from 'react';
import { Box,  Input, Button, Heading } from '@chakra-ui/react';
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
    <Box>
      <Heading as="h2">Страница логина</Heading>

      <FormControl onSubmit={handleSubmit}  autoComplete="off">
        <FormLabel >
          Почта
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </FormLabel>

        <FormLabel>
          Пароль
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </FormLabel>

        <Button type="submit">Войти</Button>
      </FormControl>
    </Box>
  );
}