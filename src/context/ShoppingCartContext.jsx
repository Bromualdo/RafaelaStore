import { createContext,useState } from "react"

export const CartContext = createContext(null)


export const ShoppingCartProvider=({children})=>{

    const [cart,setCart]=useState([])
    const [contador, setContador] = useState(1);  
    
    return(
        <CartContext.Provider value={{cart ,setCart,contador,setContador}}>

            {children}

        </CartContext.Provider>
        
    )
}

export default ShoppingCartProvider