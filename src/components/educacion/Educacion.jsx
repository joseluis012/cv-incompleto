import './Educacion.css'
/* import libro from'./imagenes/libro.png' */

function Educacion() {
  return (

    <div className="educacion">
        <div>
        {/* <img src={libro} alt=""></img> */}
        <h2>EDUCACION</h2>
        </div>
            
            <hr></hr>
        <div className> 
                <div className='ruta'>
                    <div>
                        2021 
                    </div>
                    <div>
                        <h3>INGLES</h3>
                        <ul>
                            <lo>English-Connect</lo>
                        </ul>
                        
                    </div>
                </div>
                <div className='ruta'>
                    <div>
                        2012 
                    </div>
                    <div>
                        <h3>CCNA Routing y Switching</h3>
                        <ul>
                            <lo>Academia Netacad</lo>
                        </ul>
                        
                    </div>
                </div>
                <div className='ruta'>
                    <div>
                        2004 
                    </div>
                    <div>
                        <h3>JHON F KENNEDY</h3>
                        <ul>
                            <lo>Bachiler en humanidades</lo>
                        </ul>
                        
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Educacion