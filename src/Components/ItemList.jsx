import React from 'react'
import Item from './Item'


const ItemList = () => {

  const productos = [
    {id:1, nombre:"Producto A", precio:"300 $",src:  "url(./Assets/jugete1.png)" ,descripcion:"soy el item 1", stock:5},
    {id:2, nombre:"Producto B", precio:"400 $",src : "url(./Assets/jugete2.png)" ,descripcion:"soy el item 2", stock:15},    
    {id:3, nombre:"Producto C", precio:"500 $",src : "url(./Assets/jugete3.png)" ,descripcion:"soy el item3", stock:25}
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
    <div >
      {productos.map((p)=>{
        return(
          
          <Item key={p.id} nombre={p.nombre} precio={p.precio} imagen={p.src} />
          
        )
      })}
       
    </div>
  )
}

export default ItemList