import { useState, useEffect } from "react"
import { archetypes } from './archetypes.js'
import Radar from './components/Radar.jsx'
import Footer from './components/Footer.jsx'

export default function Result(){
  
  let final = JSON.parse(localStorage.getItem("score"))
  const [archetype, setArchetype] = useState({})

  useEffect(() => {
    function scorePlayer(){
    const xAxis = final.x < 0 ? "Team" : "Solo"
    const yAxis = final.y > 0 ? "Planner" : "Action"
    const archeTypeDeets = archetypes[`${xAxis}-${yAxis}`]
    setArchetype(archeTypeDeets)
  }
  scorePlayer()
}, [])

    return(
        <>
        <div className="flex invert flex-col font-[Jetbrains_Mono] w-full bg-[#06140D] text-white relative h-fit gap-15 pt-10 justify-center items-center">
           <div className="schtuff flex flex-col items-center">
              <h1 className="text-5xl">{(archetype.name)?.toUpperCase()}</h1>
              <p>{archetype.subtitle}</p>
            </div>
           <div className=" relative flex justify-center items-center">
            
            <div className="h-full w-fit">
              <p>TEAM</p>
            </div>
            <div className="absolute z-2 aspect-5/4 w-1/2 flex text-white flex-col justify-between">
            <div className=" w-full h-10 flex justify-between">
              <p className="opacity-60">INTEL</p>
              <p className="opacity-60">TACTICIAN</p>
            </div>
            <div className=" w-full flex justify-between h-10">
              <p className="opacity-60">COMMANDER</p>
              <p className="opacity-60">ASSAULT</p>
            </div>
            </div>
             <div className={`absolute aspect-square h-2 rounded-full z-999 bg-orange-600`}
            style={{
              marginLeft:  `${(final.x)*1.7}px`,
              marginBottom: `${(final.y)*1.7}px`
            }}>
              <p className="absolute">YOU</p>
            </div>
            <div className="flex text-white flex-col items-center">
              <p>PLANNING/ANALYSIS</p>
              <Radar />
            <p>ACTION/INITIATIVE</p>
            </div>
             <div className="h-full w-fit">
              <p>SOLO</p>
            </div>
           </div>
           <div className="flex w-9/10 lg:w-2/5 gap-5 items-center flex-col">
        
            <p className="w-full">{archetype.description}</p>
            {/* strenght start */}
            <div className="w-full">
              <p className="text-3xl">STRENGTHS</p>
              <div>
                {(archetype.strengths)?.map((item, i) => {
                  return (
                    <div key={i}>
                      {item}
                    </div>
                  )
                })}
              </div>
            </div>
            {/* strenght end */}
            <div className="w-full">
              <p className="text-3xl">WEAKNESS</p>
              <div className="font-bold">{archetype.weakness}</div>
              <div>{archetype.weaknessDescription}</div>
            </div>
            {/* weakness end */}
           </div>
           <Footer />
        </div>
        </>
    )
}