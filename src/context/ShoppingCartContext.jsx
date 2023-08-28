import { createContext,useState } from "react"

export const CartContext = createContext(null)


export const ShoppingCartProvider=({children})=>{

    const [cart,setCart]=useState([])
    const [contador, setContador] = useState(1);
    const [total,setTotal]=useState(0)  
    
    return(
        <CartContext.Provider value={{cart ,setCart,contador,setContador,total,setTotal}}>

            {children}

        </CartContext.Provider>
        
    )
}

export default ShoppingCartProvider