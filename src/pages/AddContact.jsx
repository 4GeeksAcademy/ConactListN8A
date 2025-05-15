import { createContact } from "../services/api";

export const AddContact = () => {


    await createContact() 
    return (

        <h1>Add new contact view</h1>
    );
};
