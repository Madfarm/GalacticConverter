import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState(null);

  return (
    <>
    <div id="app">
      <h1>Calculate the weight of an object on a planet</h1>
      
      <div id="result">
        <p>
          {result}
        </p>
      </div>
    </div>
    </>
  )
}

export default App
