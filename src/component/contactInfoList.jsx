import ContactListItem from "./contactListItem";
import "./css/contactInfoList.css";

const ContactInfoList = (props) => {
  return (
    <div className="list">
      <h2>Contacts:</h2>

      <ul className="styled-list">
        {props.contacts.map((contact, index) => (
          <ContactListItem
            key={index}
            contact={contact}
            deleteContact={props.deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactInfoList;
