import "./ItemListContainer.css"
import ItemUno from "./ItemsList/ItemUno";
import React, {useState} from "react";
import ItemList from "./ItemsList/ItemList";

function ItemListContainer() {
  
  return (
    <div className="ItemListContainer">
      <ItemList/>
    </div>
  );
}

export default ItemListContainer;