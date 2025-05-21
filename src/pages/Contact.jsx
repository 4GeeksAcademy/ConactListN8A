// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import ContactCard from "./ContactCard";
import { useEffect, useState } from "react";
import { deleteContact,getContacts,createContact } from "../services/api";


const Contact = () => {
  const { store, dispatch } = useGlobalReducer()
  const [contactList,setContactList]=useState([])
  const [user,setUser]=useState(["new_contact"])
  const [flagDelete,setFlagDelete] = useState(null);

  const handleCreateContact = async () => {
    
    await createContact(user,{
        "name": "Felix",
        "phone":"Kityy",
        "email": "fefe@gmail.com",
        "address": "Feline Street"
      });

    const contactData = await getContacts(user);
    dispatch({type:"get_contacts",payload: contactData});
    //setContactList(contactData);
  }
  const handleDelete = async (contactId)=> {

    deleteContact(user,contactId);
    
    
    const contactData = await getContacts(user);
    dispatch({type:"get_contacts",payload: await contactData});
    
	}

  useEffect(()=>{

    const contacts = async (agenda) => {
     
        const contactData = await getContacts(agenda)
        dispatch({type:"get_contacts",payload: contactData})
        //setContactList(contactData)
    }
    contacts(user); //.then((data)=>console.log(data));

    //console.log(contacts);
  },[])

  return (
    <>
    <h1>Contacts</h1>
    <ul>
    {
    store.contacts.map((contact)=>(
      <li key={contact.id}
          className="d-flex justify-between py-2 px-5 w-100 border-bottom border-1 position-relative bg-light" 
          onMouseOver={()=>(setFlagDelete(contact.id))}
          onMouseLeave={()=>(setFlagDelete(null))}
      >
          <ContactCard name={contact.name} phone={contact.phone} email={contact.email} address={contact.address} /> 
          { flagDelete === contact.id && <button className="btn btn-danger mx-2 text-end position-absolute top-50 end-0 translate-middle-y" onClick={()=>(handleDelete(contact.id))}> x </button>}
      </li>
    ))}
    </ul>
    <button className="btn btn-primary" onClick={()=> handleCreateContact()}> Generate a demo contact</button>
    </>
  )
};
export default Contact;