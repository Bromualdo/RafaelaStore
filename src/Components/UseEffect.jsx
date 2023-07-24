import { useEffect,useState } from "react"

const UseEffect = () => {
  
    const [mensaje, setMensaje] = useState("Mensaje Inicial") 
    const [contador,setContador]=useState(0)

    useEffect(()=>{
        console.log("efecto secundario")
    },[mensaje])

    const sumar =()=>{
        setContador(contador+1)
    }

    const restar =()=>{
        setContador(contador-1)
    }

    const reset =()=>{
        setContador(0)
    }
    return (
    <div><p>{mensaje}</p>
    <button onClick={()=>setMensaje("Mensaje Modificado")}>Cambiar</button>
        <p>{contador}</p>
    <button onClick={sumar}>Sumar</button>
    <button onClick={restar}>Restar</button>
    <button onClick={reset}>Reset</button>
    </div>

    

  )
}

export default UseEffect