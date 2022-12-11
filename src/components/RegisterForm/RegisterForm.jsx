import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useState } from 'react';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';


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
    <form onSubmit={handleSubmit} autoComplete="on">
      <FormControl >
      <FormLabel fontSize="lg" mb="16px">
        Username
        <Input type="text" name="name" value={name} onChange={handleChange} id="3"/>
      </FormLabel>
      <FormLabel fontSize="lg" mb="16px">
        Email
        <Input type="email" name="email" value={email} onChange={handleChange} id="4"/>
      </FormLabel>
      <FormLabel fontSize="lg" mb="16px">
        Password
        <Input type="password" name="password" value={password} onChange={handleChange} id="5"/>
      </FormLabel>
      <Button type="submit" colorScheme="teal" mb="36px" display={"block"} ml="auto" mr="auto" >Register</Button>
      
    </FormControl>
    </form>
    
  );
};
