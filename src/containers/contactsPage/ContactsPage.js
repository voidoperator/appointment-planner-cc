import { React, useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    props.contacts.forEach((contact) => {
      if (contact.name === currentName) {
        setDuplicate(true);
      }
  })
  }, [currentName, props.contacts])

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 3000)
  }, [alert])

  const handleSubmit = (e) => {
    e.preventDefault();
    const reset = '';
    if (duplicate) {
      setAlert(true);
      setCurrentName(reset);
      setCurrentPhone(reset);
      setCurrentEmail(reset);
      return;
    };
    props.newContact(currentName, currentPhone, currentEmail)
    setCurrentName(reset);
    setCurrentPhone(reset);
    setCurrentEmail(reset);
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm handleSubmit={handleSubmit}
        name={currentName}
        setName={setCurrentName}
        phone={currentPhone}
        setPhone={setCurrentPhone}
        email={currentEmail}
        setEmail={setCurrentEmail}
        />
      </section>
      <hr />
      <section>
        {alert && <h2 style={{textAlign: 'center', color: 'red'}}>Duplicate contact found... Please try again.</h2>}
        <h2>Contacts</h2>
        <TileList contacts={props.contacts} />
      </section>
    </div>
  );
};
