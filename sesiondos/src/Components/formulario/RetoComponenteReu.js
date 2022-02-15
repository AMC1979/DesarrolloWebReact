import React from 'react';
const Form = () => {
    const [state, setState] = React.useState(
        {
            nombres: " ",
            apellidos: ['', ''],
        })

    const editarState = (atributo, index) => (event) => {
        const apellidos = [...state.apellidos]; //recorrido de apellidos
        apellidos[index] = event.target.value;

        //setState funcion interna de REAC, recibe parametro como PREV que mantiene el valor previo del estado
        setState(prev => ({
            ...prev,
            [atributo]: (index === undefined) ? event.target.value : apellidos
        }))
    };

    return (

        <div className="margen">
            Nombre :<input type="text" onChange={editarState('nombres')}  />
            <br /> <br />
            {/* num profesores */}
            Apellido Paterno<input type="text" onChange={editarState('apellidos', 0)} />

            <br />
            {/* num alumnos */}
            Apellido Materno<input type="text" onChange={editarState('apellidos', 1)} />
            <br /> <br />
            
            My Name is : {state.nombres} {state.apellidos[0]} {state.apellidos[1]}
        </div>
    )
}

export default Form
