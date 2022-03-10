import React, {useState, useEffect} from "react";

function ItemUno(props) {

  const [numeroActual, cambiarnumeroActual] = React.useState(0);
  const [stockActual, cambiarstockActual] = React.useState(8)

  console.log(stockActual);

  return (
    <li className="ItemUno">
        <p>Nombre: {props.nombre} </p>
        <p>Descripcion: {props.descripcion} </p>
        <p>Stock: {stockActual}</p>
        <button onClick={() => {
          if(numeroActual >= stockActual){
            console.log("Imposible la compra item ");
          }else{
            console.log("Click")
            cambiarnumeroActual(numeroActual+1)
            cambiarstockActual(stockActual-1)
          }
        }}>+1</button>
        <p>{numeroActual}</p>
        <button onClick={() => {
          if(numeroActual === 0){
            console.log("Imposible la compra item 2");
          }else{
            console.log("Click")
            cambiarnumeroActual(numeroActual-1)
            cambiarstockActual(stockActual+1)
            return stockActual 
          }
        }}>-1</button>
    </li>
  );
}

export default ItemUno;
