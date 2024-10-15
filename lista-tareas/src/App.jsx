import { useState } from 'react'
import './styles/App.css'
import ListaDeTareas from './components/ListaDeTareas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='aplicacion-tareas'>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>        
        <ListaDeTareas />
      </div>
    </div>
  )
}

export default App
