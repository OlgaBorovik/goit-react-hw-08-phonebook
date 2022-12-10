import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav.jsx';
// import { useAuth } from 'hooks';
// import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Flex, Spacer } from '@chakra-ui/react';

export const AppBar = () => {
 const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn)

  return (
    <Flex as="header" p="8px" >
      <Navigation />
      <Spacer />
    {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
};