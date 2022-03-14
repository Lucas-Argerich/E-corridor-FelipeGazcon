import React from "react";
import ItemCount from "./ItemCount";

const ItemUno = ({ initial, stock }) => {
  return (
    <div>
      <div>
        <ItemCount initial={initial} stock={stock} />
      </div>
    </div>
  );
};

export default ItemUno;
