import React, { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux"
import  {authOperations, authSelectors} from "../redux/auth"
import { Route, Routes } from 'react-router-dom';
import {PrivateRoute} from "./PrivateRoute"
import { RestrictedRoute } from "./RestrictedRoute";
import {Layout} from "./Layout/Layout"


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));


const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing)

  // Викликаємо операцію
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return !isRefreshing && (
      <Routes >
      <Route path="/" element={<Layout />}>
        <Route index  element={<HomePage />}/>
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route path="/contacts" element={
          <PrivateRoute redirectTo="/login" component={<ContactsPage />} ></PrivateRoute>
        }></Route>
        
      </Route>
      
             
    </Routes>
    )
    
  
  
}

export default App

