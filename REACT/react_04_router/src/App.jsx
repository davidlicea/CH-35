import './App.css'
import { Routes, Route } from 'react-router-dom'
import Contacto from './components/Contacto'
import Inicio from './components/Inicio'
import Nosotros from './components/SobreNosotros'

// -Routes: Actua como contenedor padre de todas la s rutas individuales que se crearan en la aplicación
/* -Route: Es la ruta 'hija' de cada componente. Recibe dos atributos 
  1. path: especifica la ruta (URL) a seguir 
  2. element: especifica el componente que se renderiza 
*/
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={ <Inicio /> } />
      <Route path='nosotros' element={ <Nosotros/> } />
      <Route path='contacto' element={ <Contacto/> } />
    </Routes>
    </>
  )
}

export default App

