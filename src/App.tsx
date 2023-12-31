import { useState } from 'react'
import './App.css'
import PlanetForm from './PlanetForm.tsx';

function App() {
  const [result, setResult] = useState(null);
  const [planet, setPlanet] = useState("Earth");
  const [weight, setWeight] = useState(0);

  return (
    
    <div id="app">
      
      <h1>Calculate the weight of an object on another planet</h1>
      
      <PlanetForm 
       weight={weight}
       setWeight={setWeight} 
       planet={planet} 
       setPlanet={setPlanet}
       setResult={setResult}
       />

      
      {result && 
        <div id="result">
          <p>
            That's {result} lbs on {planet}!
          </p>
        </div> 
      }
    </div>
    
  )
}

export default App
