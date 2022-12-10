import React from "react";
// import { ContactsUl, ContactItem } from "./ContactList.styled"
import Contact from "../Contact/Contact"
import { selectContacts, selectFilter } from '../../redux/selectors'
import { useSelector } from "react-redux"
import { ListItem, UnorderedList } from '@chakra-ui/react'



function ContactList() {
    const contacts = useSelector(selectContacts)
    const filterStatus = useSelector(selectFilter)
    // const visible = useSelector(selectVisibleContacts)
    const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filterStatus.toLowerCase()))
    console.log(visibleContacts)

    return (
            <UnorderedList>
                {visibleContacts.map(contact  => (
                <ListItem key={contact.id}>
                    <Contact contact={contact}  />    
                </ListItem>    
                ))}
            </UnorderedList>
        )
    

}


export default ContactList