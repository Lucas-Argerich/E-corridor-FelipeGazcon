import React from "react";
import ItemCount from "./ItemCount";

const ItemUno = ({ nombre, id, picurl, initial, stock }) => {
  return (
    <div>
      <p> <strong> {nombre} </strong> </p>
      <img src={picurl}></img>
      <ItemCount initial={initial} stock={stock} />
    </div>
  );
};

export default ItemUno;
