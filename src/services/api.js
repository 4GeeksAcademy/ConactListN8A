const apiBaseUrl = "https://playground.4geeks.com/contact"

//service to create contact
export const createContact = async (agenda, bodyData) => {

    const newUser = await fetch(apiBaseUrl+"/agendas/"+ agenda + "/contacts",
        {
            method: "POST",
            body: JSON.stringify(bodyData,
                headers: {
                    "Content-Type": "application/json",}
            )


        }



    )
    const response = await newUser.json()
    return response
}



//service to get contact list

export const getContacts = async (agenda) => {
    const response
}