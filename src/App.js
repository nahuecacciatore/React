import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart';

function App() {

  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={'/'        } element={<ItemListContainer greeting='¡Bienvenido a mi tienda!'/>}/>
          <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
        </Routes> 
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
