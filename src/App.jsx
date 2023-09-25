import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("green")

  return (
    <div className="container min-w-full h-screen flex justify-center items-center" style={{
      backgroundColor:color
    }}>
      <div className="button-container flex gap-10 bg-gray-300 w-[1000px] justify-center items-center py-4 rounded-lg">
        <button 
          className="bg-red-500 text-white px-4 py-4" 
          onClick={()=> setColor("red")}>
            Red
        </button>
        <button 
          className="bg-yellow-500 text-white px-4 py-4"
          onClick={()=> setColor("yellow")}
        >
          Yellow
        </button>
        <button 
          className="bg-green-500 text-white px-4 py-4"
          onClick={()=> setColor("green")}
        >
          Green
        </button>
        <button 
          className="bg-white text-black px-4 py-4" 
          onClick={()=> setColor("white")}
        >
          White
        </button>
        <button 
          className="bg-black text-white px-4 py-4"
          onClick={()=> setColor("black")}
        >
          Black
        </button>
        <button 
          className="bg-[#808000] text-white px-4 py-4"
          onClick={()=> setColor("#808000")}
        >
          Olive
        </button>
      </div>
    </div>
  )
}

export default App
