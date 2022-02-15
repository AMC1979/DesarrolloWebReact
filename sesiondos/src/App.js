//import logo from './logo.svg';
import './App.css';
import CliclodeVida from './ciclodevidacomponente/state'
import Contador from './ciclodevidacomponente/contador'
import Contador2 from './contadorhooks/contador'
//import Form  from './Components/formulario/form.js';
import Form  from './Components/formulario/RetoComponenteReu';

import FormListclass from './sesioncinco/formularioListClass.js'

//import FormList from './sesioncinco/formulariolistCFH'

import Contadores from './sesioncinco/RetoBotones.js'

import RenderizadoCondicional from './sesioncinco/ejemplo2/index.js'

  const App = () => {
    return (
      <div className="App">
       <CliclodeVida/>
       Buena esa<Contador/>
       <Contador2/>
       <Form/>
       <FormListclass/>
       
       <Contadores/>

       <RenderizadoCondicional/>
      </div>)
    }


/*    
import AntiHeroes from './Components/AntiheroBox';
import IMGD  from './images/Deathstrok.jpg'
import IMGG  from './images/ghostrider.jpg'
//import IMGE  from './images/elektra.jpg'



import Heroes from './Components/HeroBox';
import IMGS  from './images/Superman.jpg'
import IMGW  from './images/wonderwoman.jpg'
import IMGB  from './images/Batman.jpg'



const App = () => {
  return (
    <div className="App">
      <Heroes className="Hero-Superman" name="clarck" heroName="superpan" >
     <img src={IMGS} width="200" height="200" alt="super" />
     <p align="Justify">
      Superman (en español: Superhombre) es un superhéroe ficticio que apareció por primera vez en los cómics estadounidenses publicados por DC Comics.1​2​3​4​El personaje fue creado por el escritor estadounidense Jerry Siegel y el artista canadiense Joe Shuster en 1933 cuando ambos se encontraban viviendo en Cleveland, Ohio.. 
      </p>     
      <a href="https://es.wikipedia.org/wiki/Superman" >superman url</a>
    </Heroes>

    <Heroes className="Hero-Mujer-Maravilla" name="Diana" heroName="Mujer Maravilla" >
    <img src={IMGW} width="200" height="200" alt="super"/>
      <p align="Justify">
      La Mujer Maravilla (en inglés: Wonder Woman) es una superheroína ficticia creada por William Moulton Marston para la editorial DC Comics. Es una princesa guerrera de las Amazonas, pueblo ficticio basado en el de las amazonas de la mitología griega. En su tierra natal es conocida como la princesa Diana de Temiscira pero fuera de esta utiliza la identidad secreta de Diana Prince. Está dotada de una amplia gama de poderes superhumanos y habilidades de combate de batalla superiores, gracias a sus dones obtenidos de los dioses y su amplio entrenamiento. Ella posee un gran arsenal de armas, incluyendo entre las principales el Lazo de la Verdad, un par de brazaletes mágicos indestructibles, su tiara, que sirve como arma, y en algunos relatos, en la edad de oro, tuvo un avión invisible. Pero más adelante, se le fue mostrando con la capacidad de volar cada vez con mayor frecuencia por lo que el avión invisible fue dejando de utilizarse.
      </p>     
      <a href="https://es.wikipedia.org/wiki/Mujer_Maravilla" >Wonder Girl url</a>
    </Heroes>


    <Heroes className="Hero-Batman" name="Barman" heroName="El Burcielago" >
    <img src={IMGB} width="200" height="200" alt="super"/>

    <p align="Justify">
    Batman (conocido inicialmente como Bat-Man y en españosssssl como el Hombre Murciélago) es un personaje de cómic creado por los estadounidenses Bob Kane y Bill Finger,13​ y propiedad de DC Comics. Apareció por primera vez en la historia titulada «El caso del sindicato químico» de la revista Detective Comics N.º 27, lanzada por la editorial National Publications el 30 de marzo de 1939.
      </p>     
      <a href="  https://es.wikipedia.org/wiki/Batman" >Barman</a>
  
    </Heroes>

    <AntiHeroes className="Hero-DeadStroke" name="Slade Joseph Wilso" antiHeroe="DeadStroke"   >
     <img src={IMGD} width="200" height="200" alt="super" />
     <p className="fontanero">Deathstroke (Slade Joseph Wilson) es un antihéroe ficticio que aparece en los cómics estadounidenses publicados por DC Comics.2​Creado por Marv Wolfman y George Pérez, el personaje debutó en The New Teen Titans # 2 en diciembre de 1980.3</p>
     <a href="https://es.wikipedia.org/wiki/Deathstroke" >link DeadStroke</a>
       
     </AntiHeroes>

      <AntiHeroes className="Hero-ghostrider" name="Nicolas KAgye" antiHeroe="Ghostrider" >
      <img src={IMGG} width="200" height="200" alt="super" />
      <p className="fontanero">Ghost Rider (conocido en España como El Motorista Fantasma y en Hispanoamérica como El Vengador Fantasma) es el nombre de muchos antihéroes que aparecen en los cómics estadounidenses publicados por Marvel Comics. Marvel había usado previamente el nombre en un personaje del oeste cuyo nombre más tarde se cambió a Jinete Fantasma.</p>
      <a href="https://es.wikipedia.org/wiki/Ghost_Rider"> link Ghost Rider</a>
      </AntiHeroes>

    </div>
    
 
  );
 }*/



/*
function App() { 
  return (
    <div className="App" >

     <AntiHeroes className="Hero-DeadStroke" name="Slade Joseph Wilso" antiHeroe="DeadStroke" img src={IMGD} alt="DEAD"  >
     <img src={IMGD} width="200" height="200" alt="super" />
      <p>bla bla </p>
       
     </AntiHeroes>

      <AntiHeroes className="Hero-ghostrider" name="Nicolas KAgye" antiHeroe="Ghostrider" src={IMGG} alt="GHOST" >
      <img src={IMGG} width="200" height="200" alt="super" />
      <p>bla bla </p>
      </AntiHeroes>
     
    </div>
  );
}*/

export default App;
