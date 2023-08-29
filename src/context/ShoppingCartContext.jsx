import { createContext,useState,useEffect} from "react"
import { collection, getDocs, getFirestore } from 'firebase/firestore'

export const CartContext = createContext(null)


export const ShoppingCartProvider=({children})=>{

    const [cart,setCart]=useState([])
    const [contador, setContador] = useState(1);
    const [total,setTotal]=useState(0)  
    const [productos,setProductos] =useState([]) 
  
  
     useEffect(()=>{   
   
      const database= getFirestore()
      const miColeccion=collection(database,"Productos")
      getDocs(miColeccion).then((snapshot)=>{
      const docs = snapshot.docs.map((doc)=>doc.data())
      setProductos(docs)
      
    })
  }
  ,[]) 

    
    return(
        <CartContext.Provider value={{cart ,setCart,contador,setContador,total,setTotal,productos}}>            {children}

        </CartContext.Provider>
        
    )
}

export default ShoppingCartProvider