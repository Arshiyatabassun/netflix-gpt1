import { useSelector } from "react-redux";
import langConstants from "../utils/langConstants";
import { useRef } from "react";
import openai from "../utils/openAi";


const GptSearchBar = ()=>{

  const langKey = useSelector((store)=>store.config.lang)
  console.log(langKey)
  const searchText =useRef(null);
  const handleGptSearchClick = async()=>{
  console.log(searchText.current.value)
  //Make an API call to GPt API and get API results
  const gptQuery ="Act as a some movie Recommendation System and suggest some movies for the query"+ searchText.current.value +".only give the names of five movies comma separated like the example Result given ahead.Example Result:Gadar,sholay,koi mil gaya, Golmaal"
  const gptResults = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content:gptQuery }  ],
  });
  if(!gptResults.choices) return "Invalid Movies Names"
  console.log(gptResults.choices?.[0]?.message?.content);
  const gptMovies =gptResults.choices?.[0]?.message?.content.split(",")
  console.log(gptMovies)

  }
    return(
      <div className="pt-[20%] flex justify-center">
        <form className=" w-1/2 bg-black grid grid-cols-12" onSubmit = {(e)=>e.preventDefault()}>
 <input ref={searchText} type="text" className="p-4 m-4 bg-white col-span-9" placeholder={langConstants[langKey].gptPlaceholder}  />
 <button className="px-2 m-4 text-white rounded-lg bg-red-700 col-span-3 cursor-pointer" onClick={handleGptSearchClick}>{langConstants[langKey].search}</button>
        </form>
      </div>
    )
}

export default GptSearchBar;