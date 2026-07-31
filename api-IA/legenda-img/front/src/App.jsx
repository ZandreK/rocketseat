import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Caption Generator</h1>
      <div className="url-form">
        <input></input>
        <button>Generate</button>
      </div>
      <div className="caption-image">
        <img height = {200} width = {200} style = {{ marginBottom: '10px' }}></img>
        <span>Caption</span>
      </div>
    </>
  )
}

export default App
