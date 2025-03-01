let dom_eachmovie = document.getElementById("eachmovie");

let img_path = `https://image.tmdb.org/t/p/w500`
let img_back = `https://image.tmdb.org/t/p/w1280`


export function showEachMovie(data){

    let trailer = data.videos.results.find(ele => ele.name =="Official Trailer")
    console.log(trailer)
    const {backdrop_path, poster_path, title, overview, vote_average} = data;
    dom_eachmovie.innerHTML = `
            <div class="container-fluid py-5" style="background:url(${img_back+backdrop_path}), #000000ba; background-size:cover; background-blend-mode:overlay" >
               <div class="container">
                     <div class="row">
                        <div class="col-lg-3">
                            <img src=${img_path+poster_path} class="img-fluid shadow rounded-3" alt="">
                        </div>
                        <div class="col-lg-5 text-white">
                           <h2 class="text-light">${title}</h2>
                           <p><span class="badge bg-warning">${vote_average}</span></p>
                           <p class="text-white-50">${overview}</p>
                        </div>
                        <div class="col-lg-4">
                            <iframe width="100%" class="rounded-3" style="aspect-ratio:5/3" src="https://www.youtube.com/embed/${trailer.key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                </div>   
               </div>
            </div>
`

}