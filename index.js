 
let streamtype = JSON.parse(localStorage.getItem("streamtype")) || "movies";
let filter_array = JSON.parse(localStorage.getItem("filter_array")) || [];

let n=1;


let api_key = `?api_key=2254f6a103ea45b2d2965212918395da`;
let base_url = `https://api.themoviedb.org/3/`;
let end_point =  `discover/${streamtype ? streamtype : `movie`}`
let img_path = `https://image.tmdb.org/t/p/w500`;
let e_pages = `&page=`;
let e_page = 1;
let w_genre = `&with_genres=${filter_array.join(',')}`;
let e_lang = '&with_original_language=ta'
let api_url = base_url+end_point+api_key+w_genre+e_pages+e_page;





const getMovies = (api_url) => {
   fetch(api_url)
   .then((res) => {
      return res.json()
   })
   .then((data) => {
      console.log(data.results);
      totalPage(data.page)
      showMovies(data.results);
   })
}
getMovies(api_url);


// streaming type 

function stream(){
   let stream = document.querySelectorAll(".btn-check");
   stream.forEach((ele)=>{
      if(ele.checked)
      {
            console.log(ele.value);
            localStorage.setItem("streamtype", JSON.stringify(ele.value))
            getMovies(base_url+`discover/${ele.value}`+api_key);

            location.reload();

      }
   
   })
}

// streaming type 



 fetch(`${base_url}genre/${streamtype}/list${api_key}`)
 .then((res) => {
    return res.json()
 })
 .then((data) => {
   console.log(data);
   showGenres(data.genres)
 })



 function page(n){
   let page_url = base_url+end_point+api_key+w_genre+e_pages+n
   getMovies(page_url)
 }



 function eachMovie(id)
 {
   localStorage.setItem("movie_id", JSON.stringify(id));
   location.href = "movie.html"
 }

 function showMovies(data){
   document.getElementById("allmovies").innerHTML = "";
   data.map((ele)=> {
      document.getElementById("allmovies").innerHTML += `
         <div class="col">
                <div class="card h-100 border-0 rounded-2 overflow-hidden" style="box-shadow:0px 0px 5px 1px #00fff338" >
                    <img src="${img_path+ele.poster_path}" class="card-img-top" alt="...">
                    <div class="card-body p-1 bg-black text-white">
                     <p><span class="badge text-bg-secondary">${ele.vote_average}</span></p>
                      <h6 class="card-title">${ele.title || ele.name}</h6>
                      <button onclick="eachMovie(${ele.id})" class="btn btn-warning btn-sm">view more</button>
                    </div>
                  </div>
            </div>
      `
   })
 }


 function totalPage(tpage){
   document.getElementById("pages").innerHTML = "";
   document.getElementById("pages").innerHTML = `
        <li class="page-item"><button class="page-link ${tpage==1 ? `disabled` : ``}"  onclick="page(${tpage-1})">Prev</button></li>
              <li class="page-item"><a class="page-link">${tpage}</a></li>
              <li class="page-item"><button class="page-link" onclick="page(${tpage+1})">Next</button></li>
   `
}

// function showGenres(gen){
//    document.getElementById("genre").innerHTML = "";
// gen.map((ele) => {
//    document.getElementById("genre").innerHTML +=`
//      <div class="dropdown-item"  > <input id="check" type="checkbox" value="${ele.id}" />${ele.name}</div>
//    `
// })

// }

function addFilter(id)
{
   if(filter_array.length !=0)
   {
      if(filter_array.includes(id))
      {
         let ind = filter_array.indexOf(id)
         filter_array.splice(ind, 1)
      }
      else{
         filter_array.push(id)
      }
   }
   else{
      filter_array.push(id);
   }

   
   localStorage.setItem("filter_array", JSON.stringify(filter_array));
   location.reload();
}

function showGenres(gen){
   document.getElementById("genres").innerHTML = "";
      gen.map((ele) => {
         document.getElementById("genres").innerHTML +=`
               <button class="btn ${filter_array.includes(ele.id) ? `btn-warning` : `btn-outline-warning`} btn-sm m-1" onclick="addFilter(${ele.id})">${ele.name}</button>
         `
      })

}




//  let doc = document.getElementById("check")
// doc.addEventListener("change", function(){
// if(this.checked){
//    console.log("checked")
// }
//    console.log(e.target.value)
 
// })




let search = document.getElementById("search")

search.addEventListener("keyup", function(e){
   e.preventDefault();
let s = e.target.value;
let search_url = base_url+`discover/movie`+api_key+`&with_text_query=${s}`;
getMovies(search_url)

})


