 import { showGenres, addFilter } from "./Components/genres.js";
import { getMovies, showMovies } from "./Components/scripts.js";
import { showType, stream1 } from "./Components/type.js";
import { changePage, totalPage } from "./Components/pages.js";

let all_genres =document.getElementById("genres")
let all_lang =document.getElementById("languages")

let streamtype = JSON.parse(localStorage.getItem("streamtype")) || "movie";
let filter_array = JSON.parse(localStorage.getItem("filter_array")) || [];

let lang_arr = JSON.parse(localStorage.getItem("lang")) || []

let page_no = JSON.parse(localStorage.getItem("page_no")) || 1;

let api_key = `?api_key=2254f6a103ea45b2d2965212918395da`;
let base_url = `https://api.themoviedb.org/3/`;
let end_point =  `discover/${streamtype ? streamtype : `movie`}`
let img_path = `https://image.tmdb.org/t/p/w500`;
let e_pages = `&page=${page_no}`;
let w_genre = `&with_genres=${filter_array.join(',')}`;
let e_lang = `&with_original_language=${lang_arr.join(',')}`
let api_url = base_url+end_point+api_key+w_genre+e_lang+e_pages;
let api_gen_list = `${base_url}genre/${streamtype}/list${api_key}`
let api_lang_list = `${base_url}configuration/languages${api_key}`





//----------- showing stream type start ----------------//

 showType();
 let stream_btn = document.getElementById("stream_btn")
 stream_btn.onclick = () => stream1()

//----------- showing stream type end ----------------//




//----------- showing all movies start ----------------//

const allMovies_data = await getMovies(api_url);
console.log(allMovies_data)
showMovies(allMovies_data)

//----------- showing all movies end ----------------//




//----------- showing all movies start ----------------//

const allGenres_data = await getMovies(api_gen_list);
console.log(allGenres_data)
showGenres(allGenres_data.genres,filter_array, addFilter, all_genres)

//----------- showing all movies end ----------------//





//----------- showing all movies start ----------------//

const allLang_data = await getMovies(api_lang_list);
console.log(allLang_data)
showGenres(allLang_data, lang_arr, addFilter, all_lang)



//----------- showing all movies end ----------------//




//----------- Pagination start ----------------//

// console.log(allLang_data)
totalPage(allMovies_data.page);

let prev = document.getElementById("prev");
prev.onclick = () => changePage(page_no, -1)

let next = document.getElementById("next");
next.onclick = () => changePage(page_no, +1)

//----------- Pagination end ----------------//



//  function eachMovie(id)
//  {
//    localStorage.setItem("movie_id", JSON.stringify(id));
//    location.href = "movie.html"
//  }



let search = document.getElementById("search")

search.addEventListener("keyup", async function(e){
   e.preventDefault();
let s = e.target.value;
let search_url = api_url+`&with_text_query=${s}`;
let search_data = await getMovies(search_url);

showMovies(search_data)

})



document.getElementById("logo").addEventListener("click", function(){
   localStorage.clear();
   location.reload()
})