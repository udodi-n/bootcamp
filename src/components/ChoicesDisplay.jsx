export default function ChoicesDisplay({display, options, resolve, sounds, answers}){
    return(
         <div className='lg:h-45 lg:overflow-y-auto scrollie border-1 flex justify-center w-full'>
             <div className={`flex flex-col gap-2 justify-start  w-9/10  ${display? 'flex' : 'hidden'}`}>
                  {options?.map((option, i) => {
                    return(
                      <button onClick={() => {sounds.page.play(); resolve(option.id); answers.current.push(option.id)}}
          
                      className={`h-fit rounded-md justify-start flex items-center group gap-5 px-2 py-[5px] w-full border-[#4DA348] border-1 text-white hover:border-[#D89D19] hover:bg-[#d89c1915] transition duration-50 ease-in ${display? 'flex' : 'hidden'}`}  key={option.id}>
          
                        <div className='h-10 flex justify-center items-center rounded-sm bg-[#4DA348] text-black group-hover:bg-[#D89D19] px-4'>{i+1}</div>
          
                        <p className='w-full text-left'>{option.text}</p></button>
                    )
                  })}
                </div>
           </div>
    )
}