export default function DropDown({newAct, reverseDrop, text}){
    return(
        <div className={`absolute flex justify-center items-center actOverlay w-full h-full ${newAct ? 'drop-down' : ''} ${reverseDrop ? 'reverseDrop' : ''}`}
          style={{
            backgroundImage: "url('/backgrounds/dropdown-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <p className='text-white text-4xl'>{text}</p>
          </div>
    )
}