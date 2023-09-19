import './App.css'
import jose from './image/jose.png'
import Perfil from './components/perfil/Perfil'
import Habilidades from './components/habilidades/Habilidades'
import Idiomas from './components/idiomas/Idiomas'
import Intereses from './components/intereses/Intereses'
import Description from './components/description/Description'
import Experiencia from './components/experiencia/Experiencia'
import Educacion from './components/educacion/Educacion'
import Alumnos from './components/props/Alumnos'
import Deslizable from './components/deslizable/Deslizable'




function App() {

  
  return (
    <>
    <div className='vitae'>
      <div className='perfil'>
      <div>
        <perfil></perfil>
        <img src={jose} alt=""></img>
        <Perfil></Perfil>
        
        <Habilidades></Habilidades>
        <Deslizable></Deslizable>
        <Idiomas></Idiomas>
        <Intereses></Intereses>
      </div>

      </div>
      <div className='developer'>

        <div>
          <Description></Description>

        </div>

        <div>
          <Experiencia></Experiencia>
          <Educacion></Educacion>
        </div>
        <div>

          
          <Alumnos nombre="Jose" edad="38"color="red"/>
          <Alumnos nombre="Tommy" edad="3" color="green"/>
          <Alumnos nombre="Juan" edad="9" color="blue"/>
          <Alumnos nombre="Emily" edad="9"/>
          <Alumnos nombre="Neri" edad="32"/>
          <Alumnos nombre="Aaron" edad="6"/>


        </div>

      </div>

    </div>
    </>
  )
}

export default App
