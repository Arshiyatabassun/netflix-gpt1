

const VideoTitle =({title,overview})=>{

    return (

       <div className="pt-36 px-12">
         <h1 className="px-4 pt-10 text-bold text-6xl">{title}</h1>
         <p className="py-6 w-1/4 text-lg">{overview}</p>
         <div>
            <button className=" p-4 px-10 bg-gray-500 bg-opacity-50 rounded-lg text-white  bg-opacity-50 cursor-pointer">▶️Play</button>
            <button className=" p-4 px-10 mx-2 bg-gray-500 rounded-lg text-white cursor-pointer">ℹ️More Info</button>
         </div>
       </div>

    )
}

export default VideoTitle;