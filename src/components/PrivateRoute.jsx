import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { authSelectors } from "redux/auth";


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const  isLoggedIn  = useSelector(authSelectors.selectIsLoggedIn)
  const shouldRedirect = !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};