import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { addContact } from "../../redux/operations"
import { selectContacts } from "redux/selectors";
import { Button, Input, FormLabel, FormControl, Box, Heading } from "@chakra-ui/react";

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
    <Box>
      <Heading as="h2" fontSize="2xl" textAlign={"center"} mb="24px">Add a new contact</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
        <FormLabel fontSize="lg" mb="16px">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            
          />
        </FormLabel>
        <FormLabel fontSize="lg" mb="16px">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            
          />
        </FormLabel>
        <Button type="submit" colorScheme="teal" mb="36px" display={"block"} ml="auto" mr="auto" >Add contact</Button>
        </FormControl>
        
      </form>
      
    </Box>
      
    )
    
  }

export default ContactsForm

