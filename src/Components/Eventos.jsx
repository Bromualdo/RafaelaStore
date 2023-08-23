import React, { useState } from 'react'

const Eventos = () => {
    
    const [nombre,setNombre]=useState("")

    

    const handleSubmit=(e)=>{
        e.preventDefault()
        nombre === "" ? alert("campo vacio") : alert(nombre)
        console.log(`enviando ${nombre}`)
    }


  return (
   <form onSubmit={handleSubmit}>
    <input type="text" onChange={(e) =>setNombre(e.target.value)} />
    <button type='submit'>Enviar</button>
   </form>
  )
}

export default Eventos

