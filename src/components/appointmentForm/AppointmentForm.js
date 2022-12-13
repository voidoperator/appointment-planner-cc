import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="titleInput">Title</label>
      <input
      value={title}
      onChange={(e) => setTitle(e)}
      type="text"
      id="titleInput"
      required
      />
      <label htmlFor="dateInput">Date</label>
      <input
      value={date}
      onChange={(e) => setDate(e)}
      type="date"
      id="dateInput"
      min={getTodayString()}
      required
      />
      <label htmlFor="timeInput">Time</label>
      <input
      value={time}
      onChange={(e) => setTime(e)}
      type="time"
      id="timeInput"
      required
      />
      <ContactPicker contacts={contacts} contact={contact} setContact={setContact} />
      <input type="submit" value="Submit" />
    </form>
  );
};
