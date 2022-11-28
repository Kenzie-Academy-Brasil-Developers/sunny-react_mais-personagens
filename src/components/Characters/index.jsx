import React from "react";
import { CharCard } from "../CharCard";
import "./style.css";

export const Characters = ({ nextPage, previusPage, characterList }) => {
  return (
    <ul className="Characters">
      <li className="Characters-title">
        <button onClick={previusPage}>Anterior</button>
        <h1>Meus Personagens</h1>
        <button onClick={nextPage}>Próxima</button>
      </li>
      {characterList.map((elt) => (
        <CharCard key={elt.id} elt={elt} />
      ))}
    </ul>
  );
};
