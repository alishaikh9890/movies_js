
let img_path = `https://image.tmdb.org/t/p/w500`;


export const getMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data;
 }





export function showMovies(data){
    document.getElementById("allmovies").innerHTML = "";
    data.results.map((ele)=> {
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