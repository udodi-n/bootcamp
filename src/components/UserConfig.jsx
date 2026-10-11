import Card from './Card.jsx'
import { useState } from 'react'

export default function UserConfig({start, selected, value, setVal, func, submitFunc}){
    return(
        <div className={`border-1 flex flex-col border-[#D89D19] w-full ${start? 'hidden' : 'lg:flex lg:flex-row'} flex-1`}>
        {/* left */}
        <div className="left p-2 flex lg:pl-5 gap-2 lg:gap-6 w-full lg:w-11/20 justify-center items-center">
        <Card image={"/characters/male-cadet-face.webp"} cadet="male cadet"
          selected={selected === "male"}
          onSelect={() => func("male")} />
        <Card image={"/characters/female-cadet-face.webp"} cadet="female cadet"
          selected={selected === "female"}
          onSelect={() => func("female")} />
        </div>
        {/* right */}
        <div className="right lg:pr-5 text-[#D89D19] lg:w-9/20 h-full flex items-center">
        <div className='px-3 py-1 flex flex-col  w-full gap-3 justify-center h-3/4 bg-black'>
        <h1>PERSONAL CONFIG</h1>
        {/* form start */}
        <form className='flex gap-6 flex-col h-fit w-full' onSubmit={submitFunc}>
          <input value={value.replaceAll(" ", "").slice(0, 8)} onChange={(e) => setVal(e.target.value)} className='focus:outline-none px-2 border-[#D89D19] h-10 border-1' type="text" />
          <button className='w-full text-black bg-[#D89D19] h-10'>START</button>
        </form>
      
        </div>
        </div>
      </div>
    )
}