import "./ItemListContainer.css"
import ItemUno from "./ItemsList/ItemUno";
import React, {useState} from "react";
import ItemList from "./ItemsList/ItemList";

function ItemListContainer(props) {
  
  /*return (
    <div className="ItemListContainer">
      <ItemList/>
    </div>
  );*/

  const listaEpica = [
    {nombre : "Objeto a la venta 1", id : "0", picurl : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Logo_TVE-1.svg/125px-Logo_TVE-1.svg.png", initial : "0", stock : "8"},
    {nombre : "Objeto a la venta 2", id : "1", picurl : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Logo_TVE-2.svg/125px-Logo_TVE-2.svg.png", initial : "0", stock : "8"},
    {nombre : "Objeto a la venta 3", id : "2", picurl : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/3NumberThreeInCircle_whitebackground.png/220px-3NumberThreeInCircle_whitebackground.png", initial : "0", stock : "8"}
  ] 

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (listaEpica.length === 0) {
        reject("No hay productos");
      } else {
        resolve(<ItemList listaEpica={listaEpica} />);
      }
    }, 2000);
  });
}

export default ItemListContainer;
