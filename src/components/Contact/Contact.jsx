import { Button, Span, ContactBox } from "./Contact.styled"
import { deleteContact } from "../../redux/operations"
import { useDispatch } from "react-redux";


const Contact = ({contact}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));
    return (
        <ContactBox>
            <Span>{contact.name}: {contact.phone}</Span>
            <Button type="button" onClick={handleDelete}>Delete</Button> 
        </ContactBox>
    )
}

export default Contact