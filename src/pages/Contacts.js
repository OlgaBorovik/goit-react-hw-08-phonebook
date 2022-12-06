import  ContactList  from "../components/ContactList/ContactList"
import { Filter } from "../components/Filter/Filter"
import ContactsForm from "../components/ContactsForm/ContactsForm"
import { Section, Container, Title } from "../components/section.styled"
import { Outlet } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchContacts } from "redux/operations"
// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/auth';



export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
// const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn)
  return (
    <Section>
        <Container>
          <Title>Phonebook</Title>
          <ContactsForm/>
        </Container>
        <Container>
        <Title>Contacts</Title>
          {/* {isLoading && <p>Loading tasks...</p>} */}
          {/* {error && <p>{error}</p>} */}
          <Filter />
          <ContactList />
          
      </Container>
      <Outlet />
    </Section>
    
  )
}

