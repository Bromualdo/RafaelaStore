import React from 'react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const ItemDetail = ({productos}) => {
  const {id}=useParams()
  
  const filteredProducts= productos.filter((producto)=> producto.id==id)

  
  return (
      <div>
        
        {filteredProducts.map((p)=>{
          return(
            <div key={p.id}>
              <Box>{p.nombre}</Box>
              
            </div>
              
          
          )
        })}
      </div>

  )
}

export default ItemDetail