import React, { useEffect } from "react";
import ContactsForm from "./ContactsForm/ContactsForm"
import ContactList from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter"
import {Section, Title, Container} from "./section.styled"
import { useSelector, useDispatch } from "react-redux"
import { selectIsLoading, selectError } from "redux/selectors";
import { fetchContacts } from "../redux/operations"
// import { selectVisibleContacts } from '../../redux/selectors'


const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <Section>
        <Container>
          <Title>Phonebook</Title>
          <ContactsForm/>
        </Container>
        <Container>
        <Title>Contacts</Title>
          {isLoading && <p>Loading tasks...</p>}
          {error && <p>{error}</p>}
          <Filter />
          <ContactList />
      </Container>
      </Section>
    )
  

  
}

export default App

