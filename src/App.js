import logo from './logo.svg';
import './App.css';
import ContactForm from './component/contactForm';
import { useState } from 'react';
import ContactInfoList from './component/contactInfoList';

function App() {

  const [contacts, setContacts] = useState([]);

  const addContact =  (contactInfo) => {
    
    setContacts([...contacts, contactInfo])
    console.log(contacts);
  }

  const deleteContact = (index) =>{
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  }

  return (
    <div className="App">
      <h1>Contact Info</h1>
      <ContactForm addContact = {addContact}/>
      <br /><br />
      <ContactInfoList  contacts={contacts} deleteContact={deleteContact}/>
    </div>
  );
}

export default App;
