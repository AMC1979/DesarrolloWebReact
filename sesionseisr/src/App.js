
import './App.css';
import Header from './componentes/header'
import { BrowserRouter, Route } from 'react-router-dom';

import PlanReact from './componentes/PlanReact'
import PlanRedux from './componentes/PlanRedux'
import { RUTAS } from './helpers/constants'
import SubTemaHook from './componentes/SubtemaHook'
import SubTemaViejo from './componentes/SubtemaViejo'

function App() {
  return (

    <BrowserRouter>
      <div className='App'>
        <Header />
        <Route exact path={RUTAS.PlanReact} component={PlanReact} />
        <Route exact path={` ${RUTAS.PlanReact}/:subtema `} component={SubTemaHook} />

        <Route exact path={RUTAS.PlanRedux} component={PlanRedux} />
        <Route exact path={` ${RUTAS.PlanRedux}/:subtema `} component={SubTemaViejo} />
      </div>
    </BrowserRouter>
  );
}

export default App;
