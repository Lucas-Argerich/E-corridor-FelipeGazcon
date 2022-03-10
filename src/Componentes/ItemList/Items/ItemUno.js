import React, {useState, useEffect} from "react";

function ItemUno(props) {

  const [numeroActual, cambiarnumeroActual] = React.useState(0)

  const stock1 = Math.random()*10;
  console.log(stock1);

  return (
    <li className="ItemUno">
        <p>Nombre: {props.nombre} </p>
        <p>Descripcion: {props.descripcion} </p>
        <button onClick={() => {
          if(numeroActual + 1 > stock1){
            console.log("Imposible la compra item 2");
          }else{
            console.log("Click")
            cambiarnumeroActual(numeroActual+1)
          }
        }}>+1</button>
        <p>{numeroActual}</p>
        <button onClick={() => {
          if(numeroActual === 0){
            console.log("Imposible la compra item 1");
          }else{
            console.log("Click")
            cambiarnumeroActual(numeroActual-1)
          }
        }}>-1</button>
    </li>
  );
}

export default ItemUno;
