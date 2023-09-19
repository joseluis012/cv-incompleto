import './Habilidades.css'
import flecha from './image/flecha.png'


function Habilidades() {
  return (
    <div>
      <h2>HABILIDADES</h2>
      <hr></hr>
      <ul className='sin-marcadores'>
        <li>
          <p>Trabajo proactivo</p>
        </li>
        <li>
          <p>Trabajo en equipo</p>
        </li>
        <li>
          <p>Mantenimiento de computadoras</p>
        </li>
        <li>
          <p>Soporte Remoto</p>
        </li>
        {/* <li>
          <p>Gestionar operaciones de TI</p>
        </li>
        <li>
          <p><li>
          <p>Gestionar incidencias de red</p>
        </li></p>
        </li>
        <li>
          <p>HTML, CSS y JavaScript</p>
        </li> */}
      </ul>

      <div>
             
              <a href="#" className=''>HABILIDADES</a>
              <img src={flecha} className='flecha' alt=""/>
   
        

      </div> 

      <ul>
        <li>
          <a>Estoy adentro</a>
        </li>
        <li>
          <a>Estoy adentro</a>
        </li>
        <li>
          <a>Estoy adentro</a>
        </li>
      </ul>
    </div>
  )
}

export default Habilidades

