// import { Button, Span, ContactBox } from "./Contact.styled"
import { deleteContact } from "../../redux/operations"
import { useDispatch } from "react-redux";
import { Button, Box, Text } from "@chakra-ui/react";

const Contact = ({contact}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));
    return (
        <Box>
            <Text>{contact.name}: {contact.number}</Text>
            <Button type="button" onClick={handleDelete}>Delete</Button> 
        </Box>
    )
}

export default Contact