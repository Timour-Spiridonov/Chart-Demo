import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Charts from './components/Charts';
import BarChart from './components/BarChart';


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <Charts/> 
    </div>
     
  )
}

export default App
