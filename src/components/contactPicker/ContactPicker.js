import React from "react";

export const ContactPicker = (props) => {
  return (
    <>
      <label htmlFor="dropdownInput">Select a contact...</label>
      <select id="dropdownInput" onChange={props.onChange}>
        <option key="default" defaultValue></option>
        {props.contacts.map((contact, index) => {
          return (
            <option key={index} value={contact.name}>{contact.name}</option>
          )
        })}
      </select>
    </>
  );
};
