import React from "react";
// import { Label } from "./Filter.styled"
// import { Input } from "../ContactsForm/ContactForm.styled"
import { useDispatch } from "react-redux"
import { setFilter } from "../../redux/filterSlice"
import { FormLabel, Input } from "@chakra-ui/react";


export const Filter = () => {
    const dispatch = useDispatch()
        
    const filterChangeHandler = (event) => {
        dispatch(setFilter(event.target.value))
    }


    return <FormLabel>
        Find contacts by name
        <Input
            type="text"
            name="filter"
            onChange={filterChangeHandler}
        />
        </FormLabel>
}

