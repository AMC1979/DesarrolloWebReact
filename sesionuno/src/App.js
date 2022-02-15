//import logo from './logo.svg';
import './App.css';
import React from 'react'

import Foco from './Components/Foco';


//import Altet2 from "./Components/FocosAlternos"

import Focotop from './Components/FocosAlternos';

//import ReactDOM from 'react-dom'

//componentes funcionales y de clases

//Un componente funcional es una función que recibe el objeto Props y retorna un ReactNode 
//(un ReactNode puede ser un elemento html, un string, un booleano, entre otros tipos de datos.).

//Un componente de clase es una clase de javascript que extiende la clase Component de React.
//Este nos permite guardar su estado y controlar lo que ocurre durante su ciclo de vida, exponiéndonos métodos 
//como componentDidMount o componentWillUnmount.

/*props 
on un patrón para compartir información entre un componente padre y un componente hijo, 
donde el componente padre setea atributos y los envía al componente hijo como un objeto. 
Es importante saber que esto trabaja de manera unilateral, es decir, que la información solo se
 comparte desde que el padre hacía el hijo y no al revés.
*/

function App() {
  return (
    <div className="techo">
    <Foco/>
    <Foco/>
    <Focotop/>
    
        </div>
    
    
  );
}

export default App;
