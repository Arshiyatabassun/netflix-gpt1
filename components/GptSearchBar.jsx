

const GptSearchBar = ()=>{
    return(
      <div className="pt-[20%] flex justify-center">
        <form className=" w-1/2 bg-black grid grid-cols-12">
 <input type="text" className="p-4 m-4 bg-white col-span-9" placeholder="What would you like to Watch today?" />
 <button className="px-2 m-4 text-white rounded-lg bg-red-700 col-span-3">Search</button>
        </form>
      </div>
    )
}

export default GptSearchBar;