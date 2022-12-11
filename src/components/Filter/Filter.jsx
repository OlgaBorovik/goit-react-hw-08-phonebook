import React from "react";
// import { Label } from "./Filter.styled"
// import { Input } from "../ContactsForm/ContactForm.styled"
import { useDispatch } from "react-redux"
import { setFilter } from "../../redux/filterSlice"
import { FormLabel, Input, Text } from "@chakra-ui/react";


export const Filter = () => {
    const dispatch = useDispatch()
        
    const filterChangeHandler = (event) => {
        dispatch(setFilter(event.target.value))
    }


    return <FormLabel>
        <Text fontSize="xl" mb="16px">Find contacts by name</Text>
        <Input
            type="text"
            name="filter"
            onChange={filterChangeHandler}
            mb="16px"
        />
        </FormLabel>
}

