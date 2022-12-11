// import { Button, Span, ContactBox } from "./Contact.styled"
import { deleteContact } from "../../redux/operations"
import { useDispatch } from "react-redux";
import { Button, Text, Box } from "@chakra-ui/react";

const Contact = ({contact}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));
    return (
        <Box mb="8px" display='flex' justifyContent={"space-between"} width={"100%"}>
            <Text fontSize="lg">{contact.name}: {contact.number}</Text>
            
            <Button type="button" onClick={handleDelete} colorScheme="teal" mb="4px" variant="outline" >Delete</Button> 
        </Box>
    )
}

export default Contact