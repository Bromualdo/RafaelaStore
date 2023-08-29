import React from 'react'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Cart from './Components/Cart'
import SendOrder from './Components/SendOrder'
import Encontro from './Components/Encontro'
import Ubicacion from './Components/Ubicacion'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ShoppingCartContext from './context/ShoppingCartContext'



const App = () => {
  return (
    <>
      <BrowserRouter>

        <ShoppingCartContext>     
        <NavBar />
                        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ubicacion" element={<Ubicacion />} />          
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/category/:category" element={<ItemListContainer />}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/goForm" element={<SendOrder/>}/>
          <Route exact path="/search" element={<Encontro/>}/>
        </Routes>
        </ShoppingCartContext>      
      </BrowserRouter>
    </>
  );
}

export default App