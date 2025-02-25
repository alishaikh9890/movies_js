
let s_type = document.getElementById("stream_type")


export const showType = () =>{

    s_type.innerHTML =`
       <div class="btn-group btn-group-sm" id="stream_btn" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check btn-sm" name="btnradio" id="btnradio1" autocomplete="off" value="movie" checked>
                            <label class="btn btn-outline-warning" for="btnradio1"><i class="bi bi-camera-reels"></i> Movies</label>
                        
                            <input type="radio" class="btn-check btn-sm" name="btnradio" id="btnradio3" autocomplete="off" value="tv" >
                            <label class="btn btn-outline-danger" for="btnradio3"><i class="bi bi-display"></i> TV shows</label>
                        </div>

`

}





// streaming type 

export function stream1(){

    let stream = document.querySelectorAll(".btn-check");
    stream.forEach((ele)=>{
       if(ele.checked)
       {
             console.log(ele.value);
             localStorage.setItem("streamtype", JSON.stringify(ele.value));
 
             location.reload();
 
       }
    
    })
 }
 
 // streaming type 
 