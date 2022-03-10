import "./ItemListContainer.css"
import ItemUno from "./Items/ItemUno";
import React, {useState} from "react";

function ItemListContainer() {
  
  return (
    <div className="ItemListContainer">
      <ul>
        <ItemUno nombre="Producto 1" descripcion="1"/>
        <ItemUno nombre="Producto 2" descripcion="2"/>
        <ItemUno nombre="Producto 3" descripcion="3"/>
      </ul>
    </div>
  );
}

export default ItemListContainer;