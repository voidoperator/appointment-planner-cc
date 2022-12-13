import React from "react";

export const Tile = (props) => {
  const details = props.contact;
  const contact = Object.values(details)
  return (
    <div className="tile-container">
      {contact.map((contact, index) => {
        return index === 0
        ? <p className="tile-title" key={index}>{contact}</p>
        : <p className="tile" key={index}>{contact}</p>
      })}
    </div>
  );
};
