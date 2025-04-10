import { useSelector } from "react-redux";
import langConstants from "../utils/langConstants";


const GptSearchBar = ()=>{

  const langKey = useSelector((store)=>store.config.lang)
  console.log(langKey)
    return(
      <div className="pt-[20%] flex justify-center">
        <form className=" w-1/2 bg-black grid grid-cols-12">
 <input type="text" className="p-4 m-4 bg-white col-span-9" placeholder={langConstants[langKey].gptPlaceholder} />
 <button className="px-2 m-4 text-white rounded-lg bg-red-700 col-span-3">{langConstants[langKey].search}</button>
        </form>
      </div>
    )
}

export default GptSearchBar;