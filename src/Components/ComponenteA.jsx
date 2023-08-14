import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const ComponenteA = () => {

  const {cart,setCart}=useContext(CartContext)

  
  
  const longitud=cart.length

  return (
    <div>     
      <p>{longitud}</p>
      <button onClick={()=>setCart("Nuevo valor")}>Cambiar Valor</button>
      </div>
  )
}

export default ComponenteA