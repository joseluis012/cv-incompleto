
import { useState } from 'react';
import './Deslizable.css'
function Deslizable() {

    const [selectedValue, setSelectedValue] = useState('');

    const optionDescriptions = {
        opcion1:'HTML, CSS y JavaScript',
        opcion2:'Gestionar incidencias de red',
        opcion3:'Gestionar operaciones de TI'
    }

    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
    }

  return (
    <div>
      <h2>OTRAS HABILIDADES</h2>
      <hr/>
      <select value={selectedValue} onChange={handleDropdownChange} className='deslizable'>
        <option value="">Selecciona una opción</option>
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
      </select>
      {selectedValue && <p>{optionDescriptions[selectedValue]}</p>}
    </div>
  );
}

export default Deslizable