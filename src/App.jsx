import React from 'react'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemListContainer'
import UseEffect from './Components/UseEffect'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ItemDetail from './Components/ItemDetail'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Cart from './Components/Cart'
const App = () => {  
 

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        {/* <ItemListContainer greeting="Welcome to Rafi Store"/>
        <ItemDetailContainer/> */}
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>

    
    
    </BrowserRouter>
       
  )
}

export default App