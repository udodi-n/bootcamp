export default function Card({image, cadet, selected, onSelect}){

    return(
        <>
        <button type="button" onClick={onSelect} 
        className={`flex group flex-col  hover:bg-[#4DA348] w-40 overflow-hidden h-50 transition duration-100 ease-in border-1 ${selected ? 'bg-[#4DA348]' : 'bg-[#D89D19]'}`}>

        <div className="w-full h-17/20 flex items-end">
            <img className="w-full transform transition duration-300 ease-in-out group-hover:scale-110" src={image} alt="" />
        </div>
        <div className="zirest z-1 w-full flex items-center pl-2 flex-1 bg-green-100">
            {cadet || "Hallo"}
        </div>
        </button>
        </>
    )
}
