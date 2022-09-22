import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const estilos = {border: `solid 2px red`, width: `200px`}

  return (
    <>
        <NavBar/>
        <ItemListContainer greeting='¡Bienvenido a mi tienda!'/>
    </>
  );
}

export default App;
