import './Alumnos.css'

function Alumnos (props){
    
    return(
        <div className="alumnos"
        style={{backgroundColor:props.color}}>
            <h3>Nombre: {props.nombre}</h3>
            <p>Edad:{props.edad}</p>

        </div>
    )
    
}

export default Alumnos;