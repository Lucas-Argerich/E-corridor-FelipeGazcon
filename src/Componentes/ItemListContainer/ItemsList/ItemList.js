import React from "react";
import ItemUno from "./ItemUno";

const ItemList = () => {
  return (
    <ul className="">
        <li className="">
          <ItemUno initial={0} stock={8} />
        </li>
        <li className="">
          <ItemUno initial={0} stock={8} />
        </li>
        <li className="">
          <ItemUno initial={0} stock={6} />
        </li>
    </ul>
  );
};

export default ItemList;
