import React,{ Component }  from "react"

class ClockUsingClass extends Component
{
//ciclo de vida componente
constructor(props){
    super(props)
    this.state = {
        date:new Date(),
    }
}

componentDidMount()
{
    //modif de estado estructura o funcio para modificar el estado
this.time = setInterval(() => 
    {
        this.changeTime();

    },1000);
}

changeTime()
{
 this.setState({ date: new Date() })
}


componentWillMount()
{
//limpieza de info o estado fallecido

}

render (){

        return(

            <>
            <div> hola desde componente clases</div>
            

            <div>
            <h1>la hora es: {this.state.date.toLocaleTimeString()}</h1>
            </div>

            </>
        )
    }
}

export default ClockUsingClass

