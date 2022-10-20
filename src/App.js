import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';
import ListContainer from './firebase/ListContainer';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={'/'        } element={<ItemListContainer greeting='¡Bienvenido a mi tienda!'/>}/>
          <Route path={'/firebase'} element={<ListContainer/>}/>
          <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
