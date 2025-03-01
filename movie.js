import { getMovies } from "./Components/scripts.js";
import { showEachMovie } from "./Components/banner.js";

let streamtype = JSON.parse(localStorage.getItem("streamtype")) || "movie";


let movie_id = JSON.parse(localStorage.getItem("movie_id"))
let movie_url = `https://api.themoviedb.org/3/${streamtype}/${movie_id}?api_key=2254f6a103ea45b2d2965212918395da&append_to_response=videos,images,credits,similar,reviews`




let data = await getMovies(movie_url);

console.log(data)
showEachMovie(data)
