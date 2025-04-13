import { useDispatch, useSelector } from "react-redux";
import langConstants from "../utils/langConstants";
import { useRef } from "react";
import openai from "../utils/openAi";
import { API_Options } from "../utils/constants";
import { addgptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch =useDispatch()
  const langKey = useSelector((store) => store.config.lang);
  console.log(langKey);
  const searchText = useRef(null);

//search movies of TMDB
  const searchMoviesTMDB =async(movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1", API_Options)
    const json =await data.json()
     return json.results()
  }
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an API call to GPt API and get API results
    const gptQuery =
      "Act as a some movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      ".only give the names of five movies comma separated like the example Result given ahead.Example Result:Gadar,sholay,koi mil gaya, Golmaal";
    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });
    if (!gptResults.choices) return "GPT API failed";
    console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // for each movie i will search TMDB API
    const promiseArray =gptMovies.map(movie =>searchMoviesTMDB(movie))
    // console.log(gptMovies);
    const tmdbResults = await Promise.all(promiseArray)
    console.log(tmdbResults)
    dispatch(addgptMovieResults({movieName:gptMovies,movieResults:tmdbResults}));
  };
  return (
    <div className="pt-[20%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-white col-span-9"
          placeholder={langConstants[langKey].gptPlaceholder}
        />
        <button
          className="px-2 m-4 text-white rounded-lg bg-red-700 col-span-3 cursor-pointer"
          onClick={handleGptSearchClick}
        >
          {langConstants[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
