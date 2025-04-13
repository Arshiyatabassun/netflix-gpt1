import { useSelector } from "react-redux";


const GptMoviesSuggestions = ()=>{
    const {movieName ,movieResults} =useSelector(store =>store.gpt)
 if(!movieName) return null;
    return(
       <div className="p-4 m-4 bg-black opacity-70 text-white">
        <div>
            {movieName.map((movieName,index) => (<MovieList key={movieName} title ={movieName} movies ={movieResults[index]}/>))}
    
        </div>
 
       </div>
    )
}
export default GptMoviesSuggestions;