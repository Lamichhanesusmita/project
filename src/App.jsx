import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
    <Routers>
    <Route path='/home' element={<div> this is homem page</div>} />
        <Route path='/about' element={<div>This is About Page</div>} />
        <Route path='/profile' element={<div>This is Profile Page</div>} />

    </Routers> 
    </BrowserRouter>
  )
}

export default App
