import GptMoviesSuggestions from "./GptMovieSuggesstions";
import GptSearchBar from "./GptSearchBar";
import {USER_AVATR} from "../utils/constants"

const GptSearchPage =()=>{
 return (
   <div>
 <div className="fixed -z-10">  
      <img src={USER_AVATR} alt="logo"/>
    </div>
      <GptSearchBar />
      <GptMoviesSuggestions />
   </div>
 )
}
export default GptSearchPage;