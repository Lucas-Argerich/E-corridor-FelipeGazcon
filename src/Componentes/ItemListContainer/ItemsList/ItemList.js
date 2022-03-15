import React from "react";
import ItemUno from "./ItemUno";

const ItemList = (...props) => {
  return (
    <ul className="">
      {props.listaEpica.map(
        u => <li key={u.id}> <ItemUno nombre={u.nombre} picurl={u.picurl} initial={u.initial} stock={u.stock}/> </li>)}
    </ul>
  );
};

export default ItemList;
