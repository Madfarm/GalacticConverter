import { useState } from 'react'
import './App.css'
import PlanetForm from './PlanetForm.tsx';

function App() {
  const [result, setResult] = useState(null);

  return (
    
    <div id="app">
      <h1>Calculate the weight of an object on a planet</h1>
      
      <PlanetForm />

      

      <div id="result">
        <p>
          {result}
        </p>
      </div>
    </div>
    
  )
}

export default App
