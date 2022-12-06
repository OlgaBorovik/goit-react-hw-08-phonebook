import React, { useEffect, lazy } from "react";
// import ContactsForm from "./ContactsForm/ContactsForm"
// import ContactList from "./ContactList/ContactList"
// import { Filter } from "./Filter/Filter"
// import {Section, Title, Container} from "./section.styled"
import { useDispatch } from "react-redux"
// import { selectIsLoading, selectError } from "redux/selectors";
import { fetchContacts } from "../redux/operations"
import { Route, Routes } from 'react-router-dom';
import {Layout} from "./Layout/Layout"
// import { selectVisibleContacts } from '../../redux/selectors'

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));


const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index  element={<HomePage />}/>
        <Route path="/register" element={<RegisterPage />} />
     
        <Route path="/login" element={<LoginPage />} />
              
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
      
             
    </Routes>
  )
  

  
}

export default App

