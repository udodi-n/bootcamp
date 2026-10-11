import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Result from './Result'
import './index.css'
import './App.css'

function App(){
  return(
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/result" element={<Result />} />
      </Routes>
    </>
  )
}

export default App