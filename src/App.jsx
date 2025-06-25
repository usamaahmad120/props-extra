import React, { useState } from 'react'
import './App.css'
import Car from './component/Car'
import Card from './component/Card'
function App() {

  const[count , setCount] = useState(0)
  function handClick(){
    setCount(count+1)
  }
  function handleDec(){
    setCount(count - 1)
  }

  return (
    <>
     <Car name ="this is me usama ahmad">

     </Car>
      
     <Card handClick={handClick}  handleDec={handleDec}
     text = "increment" text1 = "decrement">
      
      <h1>{count}</h1>
      
     </Card>
    </>
  )
}

export default App
