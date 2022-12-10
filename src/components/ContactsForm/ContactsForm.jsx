
import React from "react";
// import { Form, Label, Input, Button } from "./ContactForm.styled"
import { useDispatch, useSelector } from "react-redux"
import { addContact } from "../../redux/operations"
import { selectContacts } from "redux/selectors";
import { Button, Input, FormLabel, FormControl } from "@chakra-ui/react";

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newContact = {
      name: form.elements.name.value,
      number: form.elements.number.value
    }
    
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      form.reset();
      return;
    }
    
      dispatch(addContact(newContact))
      form.reset();
      
    }
      
    return (
      <FormControl onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <Button type="submit">Add contact</Button>
      </FormControl>
    )
    
  }

export default ContactsForm

