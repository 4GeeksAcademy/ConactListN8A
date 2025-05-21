const apiBaseUrl = "https://playground.4geeks.com/contact"

// service to create contacts
export const createContact = async (agenda,bodyData) => {
    
    const createUser = await fetch(apiBaseUrl + "/agendas/" + agenda ,
        {
            method:"POST",
            headers:{
                "content-type": "application/json"
            }
        }
    );

    const newUser = await fetch(apiBaseUrl + "/agendas/" + agenda + "/contacts",
        {
            method:"POST",
            body: JSON.stringify(bodyData),
            headers:{
                "content-type": "application/json"
            }
        }
    );
    const response = await newUser.json();
    return response;

}

//get contact list
export const getContacts = async (agenda) => {

    const createUser = await fetch(apiBaseUrl + "/agendas/" + agenda ,
        {
            method:"POST",
            headers:{
                "content-type": "application/json"
            }
        }
    );
    const response = await fetch(apiBaseUrl + "/agendas/" + agenda + "/contacts" );
    const data = await response.json();
    const contactos = data.contacts;
    return contactos; //we return array with contacts
}




export const deleteContact = async (agenda,contactId) => {
    
// we generate url with id https://playground.4geeks.com/contact/agendas/N8A/contacts


    const deleteUser = await fetch(apiBaseUrl + "/agendas/" + agenda + "/contacts/"+ contactId,
        {
            method:"DELETE",
            headers:{
                "content-type": "application/json"
            }
        }
    );
    const response = await deleteUser.json();
    return response;

}