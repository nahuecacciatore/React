import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={'/'} element={<ItemListContainer greeting='¡Bienvenido a mi tienda!'/>}/>
          <Route path={'/NavBar/item/:id'} element={<ItemDetail/>}/>
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
