import { React, useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuped, setIsDuped] = useState(false);
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    if (props.contacts) return setAllContacts(props.contacts)
  }, [props.contacts])

  useEffect(() => {
    allContacts.forEach((contact) => {
      if (contact.name === name) {
        setIsDuped(true);
      }
  })
  }, [allContacts, name])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDuped) return;
    props.newContact(e)
    const reset = '';
    setName(reset);
    setPhone(reset);
    setEmail(reset);
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList />
      </section>
    </div>
  );
};
