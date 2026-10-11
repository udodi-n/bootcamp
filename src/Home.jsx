import { useState, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import btnClick from './assets/sfx/button-click.mp3'
import bgMusic from './assets/sfx/bg-music.mp3'
import pageSound from './assets/sfx/page-sound.mp3'
import thud from './assets/sfx/thud.mp3'
import bgVideo from './assets/bg.mp4'
import MessageBox from './components/MessageBox.jsx'
import ChoicesDisplay from './components/ChoicesDisplay.jsx'
import UserConfig from './components/UserConfig.jsx'
import { openingAct } from '../public/acts/opening-act.js'
import DropDown from './components/DropDown.jsx'
import Header from './components/Header.jsx'
import { act1 } from '../public/acts/act-1.js'
import { act2 } from '../public/acts/act-2.js'
import { act3 } from '../public/acts/act-3.js'
import { act4 } from '../public/acts/act-4.js'
import { closingAct } from '../public/acts/closing-act.js'
import { grabChoice } from './ choice-engine.js'

function Home() {
  const navigate = useNavigate()
  const sounds = {
    click: new Audio(btnClick),
    thud: new Audio(thud),
    page: new Audio(pageSound),
  }
  const expressions = ["neutral", "surprised", "smiling", "proud", "suspicious", "thinking"]
  const answers = useRef([])
  const audioRef = useRef(null) 
  const videoRef = useRef(null) 
  const [start, setStart] = useState(false)
  const [value, setValue] = useState("")
  const [expression, setExpression] = useState("neutral")
  const [background, setBackground] = useState("/backgrounds/command-room.avif")
  const [dropDownText, setDropdownText] = useState("")
  const [newAct, setNewAct] = useState(false)
  const [reverseDrop, setReverseDrop] = useState(false)
  const [choiceDisplay, setChoiceDisplay] = useState(false)
  const [speaker, setSpeaker] = useState()
  const [textDisplay, setTextDisplay] = useState(false)
  
  const [options, setOptions] = useState([])
  const [resolveOption, setResolveOption] = useState(null)
  const [textResolve, setTextResolve] = useState(null)
  const [selectedCadet, setSelectedCadet] = useState(null)

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function makechoice(choiceArray){
    return new Promise(async (resolve) => {
      await delay(500)
      const options = await grabChoice(choiceArray)
      setOptions(options)
      setChoiceDisplay(true)
      setResolveOption(() => () => {
        
        setChoiceDisplay(false)
        resolve()
      })
    })
}

async function getResult(){
  fetch(`${import.meta.env.VITE_FETCH_URL || "http://localhost:3000/"}api/score`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(answers.current)
  })
  .then(response => response.json())
  .then((data) => {
    
    localStorage.setItem("score", JSON.stringify(data))
  })
  .catch(error => console.error(error))
  navigate('/result')
}

function chooseCadet(cadet){
    sounds.page.play()
    setSelectedCadet(cadet)
  }


async function useEngine(act){
    setBackground(act[1].background)
    for (let i = 0; i < act.length-2; i++){
        const key = Object.keys(act[i+2])
        const acc = act[i+2][key];
        setSpeaker({speaker: acc.speaker, text: acc.text})
        const random = expressions[Math.round(Math.random() * 5)]
        setExpression(random)
        await displayText()
        await makechoice(acc.choices)
        
    }
}

async function openCloseEngine(act){
    setBackground(act[1].background)
    for (let i = 0; i < act.length-2; i++){
        const key = Object.keys(act[i+2])
        const acc = act[i+2][key];
        setSpeaker({speaker: acc.speaker, text: acc.text})
        const random = expressions[Math.round(Math.random() * 6)]
        setExpression(random)
        await displayText()
        
    }
}

function displayText(){
  setTextDisplay(true)
  
  return new Promise(resolve => {
    const timer = setTimeout(() => {
        
      resolve()
      setTextResolve(null)
      setTextDisplay(false)
    }, 7000)

    setTextResolve(() => () => {
      
      sounds.click.play()
      setTextDisplay(false)
      clearTimeout(timer)
      resolve()
      setTextResolve(null)
    })
  })
}

async function newActFunc(text){
  setReverseDrop(false)
  setDropdownText(text)
  setNewAct(true)
  sounds.thud.play()
  await delay(3500)
  setReverseDrop(true)
  setNewAct(false)
  
}

 async function startPlay(){
    await openCloseEngine(openingAct(globalThis.name))
    await newActFunc("First Contact")
    await useEngine(act1, makechoice)
    await newActFunc("Under Pressure")
    await useEngine(act2, makechoice)
    await newActFunc("The Squad")
    await useEngine(act3, makechoice)
    await newActFunc("Breaking Point")
    await useEngine(act4, makechoice)
    await newActFunc("The Decision")
    await openCloseEngine(closingAct)
    setReverseDrop(false)
    getResult()
  }

async function submitForm(e){
  e.preventDefault()
  if(selectedCadet && value.length >= 3){}else{
    alert("pick a character and put in your name, dummy")
    return}
  audioRef.current.muted = false;
  audioRef.current.play()
  videoRef.current.play()
  
  localStorage.setItem("deets", JSON.stringify({gender: selectedCadet, name: value}))
  globalThis.name = value;
  
  setStart(true)
  startPlay()
}

  return (
    <>
     <div className='w-full body relative h-screen flex justify-center items-center'>
      <video muted loop ref={videoRef} className="background-video object-fill bg-red-500 grayscale absolute w-full h-full">
        <source className='h-full object-fill w-full' src={bgVideo} type="video/mp4" />
    </video>
      <audio ref={audioRef} src={bgMusic} muted loop />

      <div className='lg:aspect-16/10 aspect-9/16 border-[#4DA348] border-1 z-999 p-5 lg:w-3/5 w-95/100 flex flex-col justify-start items-center bg-black'>
      <Header />hidden
      <UserConfig start={start} setVal={setValue} value={value} selected={selectedCadet} func={chooseCadet} submitFunc={submitForm}/>
        <div className={` w-full ${start? 'flex' : 'hidden'} gap-5 flex-col h-full`}>
          <div onClick={() => {
            if(textResolve){
              textResolve()
            }
              }}
              className='w-full h-3/5 flex flex-col relative justify-end border-[#4DA348] border-1 z-999 overflow-hidden'
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}>
                {/* dropdown OVERLAY ACT TRANSITION here */}
            <DropDown newAct={newAct} reverseDrop={reverseDrop} text={dropDownText}/>
         
          {/* add bg here */}
           {/* character box div */}
           <div className="character-box overflow-hidden flex justify-between items-end w-full h-9/10">
           {/* CHARACTERS */}
            <img src={`/characters/${selectedCadet}-cadet-neutral.webp`} className={`lg:h-full h-3/4 ${newAct? 'left-back' : 'slide-in-left'}`} alt="" />
            <img src={`/characters/commander-${expression}.webp`} className={`lg:h-full h-3/4 ${newAct? 'right-back' : 'slide-in-right'}`} alt="" />
            {/* CHARACTERS END */}
            {/* div that contains message and option */}
            <MessageBox speaker={speaker} show={textDisplay}/>
           </div>
          
           </div>
          <ChoicesDisplay display={choiceDisplay} sounds={sounds} options={options} answers={answers} resolve={resolveOption}/> 
        </div>
         {/* big div end  */}
             </div>
      </div>
    </>
  )
}

export default Home