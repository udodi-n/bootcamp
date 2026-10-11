export default function MessageBox({speaker, show}){
    return(
        <div className='w-full h-fit flex justify-center absolute bottom-0 pb-5'>
            {/* div for the message */}
            <div className={`message h-fit py-2 flex flex-col w-9/10 lg:w-1/2 px-4 bg-black ${show ? 'flex'  : 'hidden'}`}>
            <p className='text-2xl text-[#D89D19] pb-2 text-bold underline'>{(speaker?.speaker)?.toUpperCase()}</p>
            <div className='w-full text-white text-sm py-1 flex flex-1'>
            {speaker?.text || "hi"}
            </div>
            </div>
            {/* div end for the message */}
        </div>
    )
}