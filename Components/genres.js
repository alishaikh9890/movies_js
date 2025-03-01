


export function showGenres(gen, filter_array, addFilter, inject){
    inject.innerHTML = "";
       gen.map((ele) => {
        inject.innerHTML +=`
                <button class="btn ${filter_array.includes(ele.id) ? `btn-warning` : `btn-outline-warning`} btn-sm m-1 filter_btn" >${ele.name}</button>
          `
       });


// console.log(inject.childNodes)

document.querySelectorAll(".filter_btn").forEach((ele, index) => {
   ele.addEventListener("click", function(){
     addFilter((gen[index].id), filter_array)
   })
})
 
 }
 
 



 export function addFilter(id, filter_array)
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

       localStorage.setItem("filter_array", JSON.stringify(filter_array))
  
       location.reload();
}
