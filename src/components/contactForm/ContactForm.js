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
      placeholder="First & Last"
      required />
      <label htmlFor="phoneInput">Phone</label>
      <input
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      type="tel"
      id="phoneInput"
      placeholder="###-###-####"
      pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
      required />
      <label htmlFor="emailInput">Email</label>
      <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      id="emailInput"
      placeholder="email@example.com"
      pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
      required />
      <input type="submit" value="Submit" />
    </form>
  );
};
