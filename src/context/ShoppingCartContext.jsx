import { createContext,useState } from "react"

export const CartContext = createContext(null)


export const ShoppingCartProvider=({children})=>{

    const [cart,setCart]=useState([])

   const cartLen=cart.length
    
    return(
        <CartContext.Provider value={{cart ,setCart}}>

            {children}

        </CartContext.Provider>
        
    )
}

export default ShoppingCartProvider