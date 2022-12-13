import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nameInput">Name</label>
      <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      type="text"
      id="nameInput"
      required />
      <label htmlFor="phoneInput">Phone</label>
      <input
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      type="tel"
      id="phoneInput"
      required />
      <label htmlFor="emailInput">Email</label>
      <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      id="emailInput"
      required />
      <input type="submit" value="Submit" />
    </form>
  );
};
