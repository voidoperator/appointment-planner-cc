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


// import React from "react";

// import { Tile } from "../tile/Tile";

// export const TileList = (props) => {

//   const tiles = props.allContacts.map((info, index) => <Tile info={info} key={index} />);

//   return (
//     <div>
//       {tiles}
//     </div>
//   );
// };
