import  ContactList  from "../components/ContactList/ContactList"
import { Filter } from "../components/Filter/Filter"
import ContactsForm from "../components/ContactsForm/ContactsForm"
// import { Section, Container, Title } from "../components/section.styled"
import { Outlet } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchContacts } from "redux/operations"
import {Box, Heading, Text} from "@chakra-ui/react"
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { selectContacts } from "redux/selectors"




export default function Contacts() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName)
  const contacts = useSelector(selectContacts)
 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
// const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn)
  return (
    <Box as="section" p="8px">
        <Box>
        <Heading as="h1" fontSize="4xl" textAlign={"center"} mb="24px">{name}'s phonebook</Heading>
          <ContactsForm/>
      </Box>
      {contacts.length === 0
        ? <Text fontSize={"lg"} as="b">
            There is no contacts in your phonebook.<br /> Please add a new contact
          </Text>
        : ( 
        <Box>
        <Heading as="h2" fontSize="2xl" textAlign={"center"} mb="24px">Contacts</Heading>
          {/* {isLoading && <p>Loading tasks...</p>} */}
          {/* {error && <p>{error}</p>} */}
          <Filter />
          <ContactList />
          
      </Box>
      )}
        
      <Outlet />
    </Box>
    
  )
}

