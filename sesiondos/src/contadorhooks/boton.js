//import react from "react"

//import PropTypes from 'react' --------> tambien funciona  -_-
import PropTypes from 'prop-types';

const Boton = (props) =>
{
     return(
               
                    <div>
                        <button onClick={props.handdleClick}>
                           Contandole! {props.texto}
                        </button>
                    </div>
     )
 }

Boton.propTypes = {
 texto: PropTypes.string,
 handdleClick: PropTypes.func
 //handdleClick: PropTypes.func.isRequired  ---> con o sin esta linea funciona
 }

    

  export default Boton