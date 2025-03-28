

const VideoTitle =({title,overview})=>{

    return (

       <div className="pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
         <h1 className="px-4 pt-10 font-bold text-6xl">{title}</h1>
         <p className="py-6 w-1/4 text-lg">{overview}</p>
         <div>
            <button className=" p-4 px-10 bg-white  rounded-lg text-black  cursor-pointer hover:opacity-80">▶Play</button>
            <button className=" p-4 px-10 mx-2 bg-gray-500 rounded-lg text-white cursor-pointer">ℹ️More Info</button>
         </div>
       </div>

    )
}

export default VideoTitle;