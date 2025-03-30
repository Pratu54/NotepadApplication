
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import { Route, Routes } from 'react-router-dom'



function App() {


  return (
   <div>

  <Routes>
 
    <Route path='/' element={
      <div className="w-full h-full flex flex-col">
        <Navbar/>
        <Home/>
      </div>
    }/>

    <Route  path="/pastes" element={
      <div className="w-full h-full flex flex-col">
        <Navbar/>
      <Paste/>
      </div>
    }/>
    
    <Route path='/pastes/:id' element={
      <div className="w-full h-full flex flex-col">
        <Navbar/>
        <ViewPaste/>
      </div>
    }/>
       

  </Routes>
   </div>
  )
}

export default App
