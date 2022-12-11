import React from "react";
// import { ContactsUl, ContactItem } from "./ContactList.styled"
import Contact from "../Contact/Contact"
import { selectContacts, selectFilter } from '../../redux/selectors'
import { useSelector } from "react-redux"
import { ListItem, List, ListIcon } from '@chakra-ui/react'
import {HiPhone} from "react-icons/hi"
 


function ContactList() {
    const contacts = useSelector(selectContacts)
    const filterStatus = useSelector(selectFilter)
    const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filterStatus.toLowerCase()))
    
    return (
            <List spacing={3}>
                {visibleContacts.map(contact  => (
                    <ListItem key={contact.id} display={"flex"} borderBottom="1px" borderColor="teal" width={"100%"}>
                    
                        <ListIcon as={HiPhone} color='teal' boxSize="1.5em" mr="8px" />
                        <Contact contact={contact}  />    
                    </ListItem>    
                ))}
            </List>
        )
    

}


export default ContactList