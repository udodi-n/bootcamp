export default function Header(){
    return(
        <>
        <div className="w-full flex items-center px-2 text-[#4DA348] justify-between h-19 border-1 border-[#4DA348]">
            <div className="w-fit flex  items-center lg:gap-5 gap-2  lg:p-2 h-full">
                <img src="/logo.png" className=" h-3/4 lg:h-full" alt="" />
                <h1 className=" lg:text-3xl">BOOTCAMP</h1>
                </div>

                <a href="/blokes.html" className="flex justify-end text-right underline lg:pr-3">made by the blokes</a>
        </div>
        </>
    )
}