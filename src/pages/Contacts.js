import  ContactList  from "../components/ContactList/ContactList"
import { Filter } from "../components/Filter/Filter"
import ContactsForm from "../components/ContactsForm/ContactsForm"
// import { Section, Container, Title } from "../components/section.styled"
import { Outlet } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchContacts } from "redux/operations"
import {Box, Heading} from "@chakra-ui/react"
// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/auth';



export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
// const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn)
  return (
    <Box as="section">
        <Box>
          <Heading as="h2">Phonebook</Heading>
          <ContactsForm/>
        </Box>
        <Box>
        <Heading as="h2">Contacts</Heading>
          {/* {isLoading && <p>Loading tasks...</p>} */}
          {/* {error && <p>{error}</p>} */}
          <Filter />
          <ContactList />
          
      </Box>
      <Outlet />
    </Box>
    
  )
}

