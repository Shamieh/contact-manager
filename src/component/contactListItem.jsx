import './css/contactListItem.css'



const ContactListItem = (props) => {
    return (
        <div>
            <li key={props.index} className="list-item">
                <strong>
                {props.contact.username}
                - 
                {props.contact.email}
                </strong>
                <button onClick={()=>props.deleteContact(props.index)}>Delete</button>
                </li>
        </div>
    );
}

export default ContactListItem;
