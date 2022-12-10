import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';


export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };


  return (
    <FormControl onSubmit={handleSubmit} autoComplete="on">
      <FormLabel >
        Username
        <Input type="text" name="name" value={name} onChange={handleChange}/>
      </FormLabel>
      <FormLabel>
        Email
        <Input type="email" name="email" value={email} onChange={handleChange}/>
      </FormLabel>
      <FormLabel>
        Password
        <Input type="password" name="password" value={password} onChange={handleChange}/>
      </FormLabel>
      <Button type="submit">Register</Button>
      <Text>{name} {email} {password}</Text>
    </FormControl>
  );
};
