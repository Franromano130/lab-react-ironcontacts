import {userState} from "react"
import allContacts from "../contacts.json"

function Contacts() {


  const addContact = () => {
   
      const indexRandom = Math.floor(Math.random() * allContacts.length)
      const randomContatc = allContacts[indexRandom]
      console.log(randomContact)
  

  }
  
  
  const contactOrder = () => {
  
 
  
  const cloneContacts = JSON.parse( JSON.stringify)
  
  cloneContacts.sort((contact2, contact1) => {

      if (contact2.name > contact1.name) {
          return 1
      } else if ( contact2.name < contact1.name) {
          return -1 
      } else {
          return 0
      }
  })
  
 
  setContacts (cloneContacts)
  }
  
  const deleteContact = (index) => {
  console.log("intentando borrar wizard", index)

  const cloneContacts = JSON.parse(JSON.stringify(contacts))
  cloneContacts.splice (index, 1)
  
  
  setContacts(cloneContacts)
  }
  
  
  
  
  
  return (
    
    <div>
      


       <button onClick={addContact}>Añadir</button>
        <button onClick={contactOrder}>Ordenar</button>


    
    {wizards.map ((eachContact, index) => {
        return (
            <div key={eachContact.id}>
        <h5>Name: {eachContact.name}</h5>
        <p>Description: {eachContact.description}</p>
        
        <button onClick={() => deleteContact(index)}>Delete</button>
            </div>
        )
    })} 


    </div>
  )
}

export default Contacts