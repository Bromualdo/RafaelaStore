import React from 'react'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import UseEffect from './Components/UseEffect'
import ItemCount from './Components/ItemCount'



const App = () => {
  
  const productos = [
    {id:1, nombre:"Prdoucto A", description:"Descripcion de Producto A", stock:5},
    {id:2, nombre:"Producto B", description:"Descripcion de Producto A", stock:15},    
    {id:3, nombre:"Prdoucto C", description:"Descripcion de Producto A", stock:25}
  ]
  
  const getProductos=new Promise((resolve, reject)=>{
      if (productos.length > 0){
        setTimeout(() => {
          resolve(productos)
        },2000)
      }else{
        reject (new Error("No hay datos"))
        }
    })
  
    getProductos
    .then((res)=>{
      console.log(res)
    })
    .catch((error)=>{
      console.log(error)
    })

 

  return (
    <>
   <NavBar/>
   <ItemListContainer greeting="Welcome to Rafi Store"/>
    {/* <UseEffect/>  */}
    
    </>
       
  )
}

export default App