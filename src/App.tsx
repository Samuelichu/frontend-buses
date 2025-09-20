import { useState } from 'react'
import Table from './components/Table'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='font-semibold text-2xl'>Información Buses: </h1>
    <div className="p-3">

      <Table></Table>
    </div>
      
    </>
  )
}

export default App
