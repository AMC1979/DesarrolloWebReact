import React from 'react';
//form escuela
//for alta profesores / alumnos
const Form = () => {
  //const [nombre,setNombre] = React.useState(" ") //vacio para captar lo que entra


  const [state, setState] = React.useState(
    {
      nombres: " ",
      profesores: 0,
      alumnos: 0,
    }
  )

  // const editarNombre = (event) => setNombre(event.target.value)

  /*const editarProfesores = (event) => setState({
      profesores: event.target.value,
        })

    const editarAlumnos = (event) => setState({
      alumnos: event.target.value
    })*/

  const editarState = (atributo) => (event) => setState({

    [atributo]: event.target.value
  })

  return (

    <div className="margen">
      <input type="text" onChange={editarState('nombres')} />
      {state.nombres}
      <br /> <br />
      {/* num profesores */}
      <input type="number" onChange={editarState('profesores')} />
      {state.profesores}
      <br />
      {/* num alumnos */}
      <input type="number" onChange={editarState('alumnos')} />
      {state.alumnos}
    </div>
  )
}

export default Form
