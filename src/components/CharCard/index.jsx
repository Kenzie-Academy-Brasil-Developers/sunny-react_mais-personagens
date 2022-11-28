import React from "react";
import "./style.css"

export const CharCard = ({ elt }) => {
  return (
    <li className="CharCard">
      <h2>{elt.name}</h2>
      <img src={elt.image} alt="elt.name" />
    </li>
  );
};
