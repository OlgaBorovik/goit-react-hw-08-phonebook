import React from "react";
import { ContactsUl, ContactItem } from "./ContactList.styled"
import Contact from "../Contact/Contact"
import { selectContacts, selectFilter } from '../../redux/selectors'
import { useSelector} from "react-redux"



function ContactList() {
    const contacts = useSelector(selectContacts)
    const filterStatus = useSelector(selectFilter)
    // const visible = useSelector(selectVisibleContacts)
    const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filterStatus.toLowerCase()))
    console.log(visibleContacts)

    return (
            <ContactsUl>
                {visibleContacts.map(contact  => (
                <ContactItem key={contact.id}>
                    <Contact contact={contact}  />    
                </ContactItem>    
                ))}
            </ContactsUl>
        )
    

}


export default ContactList