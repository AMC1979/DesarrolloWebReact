//import react from "react"

//import PropTypes from 'react' --------> tambien funciona  -_-
import PropTypes from 'prop-types';

const Boton = (props) =>
{
     return(
               
                    <div>
                        <button onClick={props.handdleClick}>
                           Contando y contando! {props.texto}
                        </button>
                    </div>
     )
 }

Boton.propTypes = {
 texto: PropTypes.string.isRequired,
 //handdleClick: PropTypes.func.isRequired  ---> con o sin esta linea funciona
 }

    

  export default Boton