import logo from './logo.svg';
import './App.css';
import ContactForm from './component/contactForm';
import { useState } from 'react';

function App() {

  const [contacts, setContacts] = useState([]);

  const addContact =  (contactInfo) => {
    
    setContacts([...contacts, contactInfo])
    console.log(contacts);
  }

  return (
    <div className="App">
      <h1>Contact Info</h1>
      <ContactForm addContact = {addContact} contacts={contacts}/>
    </div>
  );
}

export default App;
