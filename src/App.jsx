import { useState , useEffect} from 'react'
import useEngine from './act-engine.js'
import './App.css'
import { act1 } from '../public/acts/act-1.js'
import { act2 } from '../public/acts/act-2.js'
import { act3 } from '../public/acts/act-3.js'
import { act4 } from '../public/acts/act-4.js'

function App() {

 async function startPlay(){
    await useEngine(act1)
    await useEngine(act2)
    await useEngine(act3)
    await useEngine(act4)

  }

  return (
    <>
     <div className='w-full h-screen flex justify-center items-center'>
       <button onClick={startPlay} className='aspect-6/4 h-50 bg-red-500'>
       start
       </button>
     </div>
    </>
  )
}

export default App