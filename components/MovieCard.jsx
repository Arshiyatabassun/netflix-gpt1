import { IMG_CDN_URL } from "../utils/constants";


const MovieCard=({posterPath})=>{
    if(!posterPath) return null;
    return (
        <div className="w-44 pr-4">
            <img  alt="movies-img" src={IMG_CDN_URL + posterPath}/>
        </div>
    )
}
 export default MovieCard; 