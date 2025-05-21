// Import necessary components from react-router-dom and other parts of the application.
import { Link,useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useState } from "react";
import { getContacts,createContact } from "../services/api";

export const AddContact = () => {
   // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  const [ name, setName] = useState([""])
  const [ email, setEmail] = useState([""])
  const [ address, setAddress] = useState([""])
  const [ phone, setPhone] = useState([""])
  const [ user,setUser ]=useState(["new_contact"])
  const navigate = useNavigate();

  const handleCreateContact = async () => {
    
    await createContact(user,{
        "name": name,
        "phone": phone,
        "email": email,
        "address": address,
      });

    const contactData = await getContacts(user);
    dispatch({type:"get_contacts",payload: contactData});
    navigate("/contact")
  }

  return (
    <>
    <h1>Create new contact</h1>
    <div className="container">
     <form>
    <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input 
    type="text" 
    className="form-control" 
    id="emailId" 
    aria-describedby="emailHelp" 
    placeholder="Enter email"
    onChange={((e) =>setEmail(e.target.value))} />

  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input 
    type="text"
    id="nameId" 
    className="form-control" 
    placeholder="Enter name"
    onChange={((e) =>setName(e.target.value))} />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Phone number</label>
    <input 
    type="text"
    id="phoneId" 
    className="form-control"
    placeholder="Enter phone number"
    onChange={((e) =>setPhone(e.target.value))} />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Address</label>
    <input 
    type="text"
    id="addressId"
     className="form-control"
       placeholder="Enter address"
       onChange={((e) =>setAddress(e.target.value))} />
  </div>
</form>
<br/>
 <button onClick={()=> handleCreateContact()} type="submit" className="btn btn-primary">Create Contact</button>
    </div>
    </>
  )
};
