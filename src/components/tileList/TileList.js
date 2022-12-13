import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = (props) => {
  return (
    <div>
      {props.contacts.map((contact, index) => {
        return <Tile contact={contact} key={index} />
      })}
    </div>
  );
};
