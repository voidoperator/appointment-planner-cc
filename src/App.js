import { React, useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const defaultContacts = [
    {
      name: 'Atanas Dimitrov',
      phone: '07712345678',
      email: 'atanas@defaultemail.com'
    },
    {
      name: 'John Doe',
      phone: '07787654321',
      email: 'john@defaultemail.com'
    }
  ]
  const [contacts, setContacts] = useState(defaultContacts);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const handleNewContact = (name, phone, email) => {
    const newContact = {
      name: name,
      phone: phone,
      email: email,
    };
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const handleNewAppointment = (title, contact, date, time) => {
    const newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time,
    };
    setAppointments((prevAppointments) => {
      return [...prevAppointments, newAppointment];
    });
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage newContact={handleNewContact} contacts={contacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
              newAppointment={handleNewAppointment}
              contacts={contacts}
              appointments={appointments}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
