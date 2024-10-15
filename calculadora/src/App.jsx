import { useState } from 'react'
import './App.css'
import Boton from './componentes/Boton'
import BotonClear from './componentes/BotonClear'
import Pantalla from './componentes/Pantalla'
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    if(input){
      const lastChar = input.slice(-1);
      const operators = ['+', '-', '*', '/'];      

      if(String(input)!='Infinity'){        
        if (operators.includes(lastChar) && operators.includes(val)) {
          // Si ya hay un operador, sobrescribir el último carácter con el nuevo operador
          setInput(input.slice(0, -1) + val);
        } else {
          // De lo contrario, concatenar val normalmente
          setInput(input + val);
        }
      } else{        
        setInput(''+val);
      }
    } else{
      setInput(input + val);
    }
  };

  const calcularResultado = () => {
    if(input){
      let result = evaluate(input)
      if(isNaN(result)){
        setInput('');        
      } else{
        setInput(String(result));
      }
    }    
  };

  return (
    <div className='App'>
      <div className='contenedor-calculadora'>        
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear  manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  )
}

export default App
