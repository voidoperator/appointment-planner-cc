import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [currentContact, setCurrentContact] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleNewAppointment(currentTitle, currentContact, currentDate, currentTime)
    setCurrentTitle('');
    setCurrentDate('');
    setCurrentTime('');
    setCurrentContact('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
        handleSubmit={handleSubmit}
        title={currentTitle}
        setTitle={setCurrentTitle}
        date={currentDate}
        setDate={setCurrentDate}
        time={currentTime}
        setTime={setCurrentTime}
        contact={currentContact}
        setContact={setCurrentContact}
        contacts={props.contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList contacts={props.contacts}/>
      </section>
    </div>
  );
};
