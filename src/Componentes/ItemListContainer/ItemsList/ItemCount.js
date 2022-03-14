import React, {useState, useEffect} from "react";
import Cuenta from "./Cuenta";



function ItemCount(props){ 

    const [cuenta, setCuenta] = useState(props.initial);

    const SumaProducto = (e) => {
      const sumarCarrito = e.target.getAttribute("name");
      if (sumarCarrito === "comprar") {
        if (props.stock > cuenta) setCuenta(cuenta + 1);
      } else {
        alert("Sin stock");
      }
    };
    const RestaProducto = (e) => {
      if (cuenta > 0) {
        setCuenta(cuenta - 1);
      } else {
        alert("Tenes que tener algo en el carrito");
      }
    };
    useEffect(() => {}, []);

    return (
        <div>
          {cuenta === 0 ? (
            <p>Pre compra</p>
          ) : (
            <Cuenta cuenta={cuenta} />
          )}
    
          <button onClick={SumaProducto} className="btn btn-success" name="comprar">
            +1
          </button>
          <button
            onClick={RestaProducto}
            className="btn btn-danger"
            name="restar"
          >
            -1{" "}
          </button>
        </div>
    );
}

export default ItemCount;
