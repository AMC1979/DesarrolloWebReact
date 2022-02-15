import React from "react";
import { useParams } from "react-router-dom";

const SubTemaHook = () =>{
 const {subtema} = useParams();

 return (
  <div>

    <p>{subtema}</p>
   
  </div>
 )
};

export default SubTemaHook