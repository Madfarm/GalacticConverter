import { useState } from 'react'
import './App.css'
import PlanetForm from './PlanetForm.tsx';

function App() {
  const [result, setResult] = useState(28);
  const [planet, setPlanet] = useState("Earth");

  return (
    
    <div id="app">
      
      <h1>Calculate the weight of an object on a planet</h1>
      
      <PlanetForm />

      
      {result && 
        <div id="result">
          <p>
            It would weigh {result} on {planet}!
          </p>
        </div> 
      }
    </div>
    
  )
}

export default App
