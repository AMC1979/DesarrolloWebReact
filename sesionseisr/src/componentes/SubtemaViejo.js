import React from "react";
import { useParams } from "react-router-dom";

const SubTemaViejo = () => {
    const { subtema } = useParams();
    return (
  

    <div>

        <p>{subtema}</p>

    </div>
 )
};

export default SubTemaViejo