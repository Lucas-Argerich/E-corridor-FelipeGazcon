import './NavBar.css';
import logo from "./base-de-datos.png"
import CartWidget from './CartWidget/CartWidget';

function NavBar() {
  return (
    <div className="NavBar">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <section className="Img-Titulo">
        <img src={logo} className="NavBar-logo" alt="NavBarlogo" />
      </section>
      <section className="Section2NavBar">
        <h1>E-Corridor</h1>
      </section>
      <section className="CartSection">
        <ul>
          <li>Inicio</li>
          <li>Consolas</li>
          <li>Juegos</li>
          <li>Hardware</li>
          <li>Software</li>
        </ul>
      </section>
      <section>
        <CartWidget/>
      </section>
    </div>
  );
}

export default NavBar;
