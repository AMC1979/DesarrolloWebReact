
import React from "react"
import Boton from './boton'

class Contador extends React.Component
{
       constructor(props){
        super(props)
        this.state = {
               contador: 0 
            }
        }
        //esto se llam dentro del this y hannddle click va en el otro lado
        handleClick =  () =>{

            this.setState
            ({
            contador: this.state.contador + 1
            })
        }

        render() {
            return(
                <>
                    <div>
                        <Boton
                        texto = {this.state.contador}
                        handdleClick={this.handleClick} /> 
                    </div>
                </>
            )
        }
  }        

  export default Contador