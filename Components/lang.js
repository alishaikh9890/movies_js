


export function showLang(allLang_data, lang_arr, addFilterLang, all_lang){
    all_lang.innerHTML = "";
    allLang_data.map((ele) => {
        all_lang.innerHTML +=`
                <button class="btn ${lang_arr.includes(ele.iso_639_1) ? `btn-warning` : `btn-outline-warning`} btn-sm m-1 filter_btn_lang" >${ele.english_name}</button>
          `
       });


// console.log(all_lang.childNodes)

document.querySelectorAll(".filter_btn_lang").forEach((ele, index) => {
   ele.addEventListener("click", function(){
    addFilterLang((allLang_data[index].iso_639_1), lang_arr)
   })
})
 
 }
 
 



 export function addFilterLang(id, lang_arr)
{
   if(lang_arr.length !=0)
   {
      if(lang_arr.includes(id))
      {
         let ind = lang_arr.indexOf(id)
         lang_arr.splice(ind, 1)
      }
      else{
         lang_arr.push(id)
      }
   }
   else{
      lang_arr.push(id);
   }

   console.log(id)

       localStorage.setItem("lang", JSON.stringify(lang_arr))
  
       location.reload();
}
