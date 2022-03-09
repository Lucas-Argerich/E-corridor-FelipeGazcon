import "./ItemListContainer.css"
import ItemUno from "./Items/ItemUno";

function ItemListContainer() {
  return (
    <div className="ItemListContainer">
      <ul>
        <ItemUno nombre="Lorem Impsum" descripcion="ABC"/>
        <ItemUno nombre="Correccion de la clase 4" descripcion="ABC"/>
        <ItemUno nombre="Esta bien asi?" descripcion="ABC"/>
      </ul>
    </div>
  );
}

export default ItemListContainer;
