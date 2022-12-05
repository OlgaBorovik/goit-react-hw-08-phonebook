import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav.jsx';
// import { useAuth } from 'hooks';
// import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export const AppBar = () => {
 const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn)

  return (
    <header>
    <Navigation />
    {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};