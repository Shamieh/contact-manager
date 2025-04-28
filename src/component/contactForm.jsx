import { useState } from "react";
import './css/contactForm.css'


const ContactForm = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');


    const addContactHandler = (e)=> {
    
        e.preventDefault();
        const contactInfo ={
            username,
            email
        };
        props.addContact(contactInfo);

    }
    return (
        <div>
            <form onSubmit={addContactHandler}>
                <input 
                type="text"
                placeholder="Name"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
                <input 
                type="email"
                placeholder="Email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;
