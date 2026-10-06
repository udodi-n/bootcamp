import { useState , useEffect, useRef} from 'react'
// import useEngine from './act-engine.js'
import './App.css'
import './index.css'
import { act1 } from '../public/acts/act-1.js'
import { act2 } from '../public/acts/act-2.js'
import { act3 } from '../public/acts/act-3.js'
import { act4 } from '../public/acts/act-4.js'
import { grabChoice } from './ choice-engine.js'

function App() {
  const answers = useRef([])
  const [expression, setExpression] = useState("neutral")
  const [background, setBackground] = useState("")
  const [playerChoice, setPlayerChoice] = useState("")
  const [choiceDisplay, setChoiceDisplay] = useState(false)
  const [speaker, setSpeaker] = useState()
  const [textDisplay, setTextDisplay] = useState(false)
  
  const [options, setOptions] = useState([])
  const [resolveOption, setResolveOption] = useState(null)
  const [textResolve, setTextResolve] = useState(null)

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function makechoice(choiceArray){
    return new Promise(async (resolve) => {
      await delay(500)
      const options = await grabChoice(choiceArray)
      setOptions(options)
      setChoiceDisplay(true)
      setResolveOption(() => () => {
        console.log(choiceDisplay)
        setChoiceDisplay(false)
        resolve()
      })
    })
}

async function useEngine(act){
    for (let i = 0; i < act.length-1; i++){
        const key = Object.keys(act[i+1])
        const acc = act[i+1][key];
        setSpeaker({speaker: acc.speaker, text: acc.text})
        setExpression(acc.expression)
        // console.log(sumn)
        await displayText()
        await makechoice(acc.choices)
        console.log(choiceDisplay)
    }
}

function displayText(){
  setTextDisplay(true)
  console.log('hi')
  return new Promise(resolve => {
    const timer = setTimeout(() => {
        console.log('ho')
      resolve()
      setTextResolve(null)
      setTextDisplay(false)
    }, 7000)

    setTextResolve(() => () => {
      setTextDisplay(false)
      clearTimeout(timer)
      resolve()
      setTextResolve(null)
    })
  })
}

 async function startPlay(){
    await useEngine(act1, makechoice)
    await useEngine(act2, makechoice)
    await useEngine(act3, makechoice)
    await useEngine(act4, makechoice)
  }

  return (
    <>
     <div  className='w-full py-10 h-screen flex justify-center items-center'>
      {/* big div  */}

      <div onClick={() => {
        if(textResolve){
          textResolve()
        }
          }} 
          className='aspect-16/9 h-3/4 flex flex-col relative justify-between  bg-black'>
        <button onClick={startPlay} className='aspect-6/4 h-10 bg-red-500'>
       start
       </button>
       {/* character box div */}
       <div className="character-box overflow-hidden flex justify-between h-9/10 bg-green-200 ">
        <img src="/characters/male-cadet-neutral.png" className='h-full flip slide-in-left' alt="" />
        <img src={`/characters/commander-${expression}.png`} className='h-full slide-in-right' alt="" />

        {/* div that contains message and option */}
       
        <div className='w-full h-50 flex justify-center  absolute  bottom-0'>

          {/* gun */}

          <img src="/guns/gun-left.png" className={`${textDisplay ? 'flex'  : 'hidden'}`} alt="" />
           {/* div for the message */}
           <div className={`message  h-9/10 flex flex-col  w-3/5 bg-orange-500 ${textDisplay ? 'flex'  : 'hidden'}`}>
           <p className='text-2xl pl-6 pb-2 text-bold'>{speaker?.speaker}</p>
           <div className='w-full notebook px-3 py-1 flex flex-1'>
            {speaker?.text || "hi"}
           </div>
           </div>
           {/* div end for the message */}

          <div className='flex flex-col gap-2 justify-start h-full w-90'>
            {options.map((option) => {
              return(
                <button onClick={() => {resolveOption(option.id); answers.current.push(option.id); console.log(answers, "hi")}} className={`h-fit justify-center w-full pixel-blast bg-red-400 ${choiceDisplay? 'flex' : 'hidden'}`}  key={option.id}>{option.text}</button>
              )
            })}
          </div>
            <img className={`${textDisplay ? 'flex'  : 'hidden'}`} src="/guns/gun-right.png" alt="" />
        </div>
       </div>
       
       </div>
       {/* big div end  */}
     </div>
    </>
  )
}

export default App