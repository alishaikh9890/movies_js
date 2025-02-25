


export function showGenres(gen, filter_array, addFilter, inject){
    inject.innerHTML = "";
       gen.map((ele) => {
        inject.innerHTML +=`
                <button class="btn ${filter_array.includes(ele.iso_639_1 || ele.id) ? `btn-warning` : `btn-outline-warning`} btn-sm m-1 filter_btn" >${ele.english_name || ele.name}</button>
          `
       });


// console.log(inject.childNodes)

inject.childNodes.forEach((ele, index) => {
   ele.addEventListener("click", function(){
     addFilter((gen[index].id || gen[index].iso_639_1), filter_array)
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

   if(typeof id=='number')
   {
       localStorage.setItem("filter_array", JSON.stringify(filter_array))
    }
    else
    {
       localStorage.setItem("lang", JSON.stringify(filter_array))
       
    }
       location.reload();
}
