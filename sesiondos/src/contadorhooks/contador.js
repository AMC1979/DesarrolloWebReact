import React, { useState }  from "react";
import Boton from './boton'

const Contador2 = () =>
{
    const [contador,setContador] = useState(0)
    const handleClick = () =>
    {
     setContador(contador+1)
    }
   
 
    return(
        <>
            
                <Boton
                texto = {contador}
                handdleClick={handleClick} /> 
            
        </>
    )
    
 }

 export default Contador2