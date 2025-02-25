

export function totalPage(tpage){
  document.getElementById("pages").innerHTML = "";
  document.getElementById("pages").innerHTML = `
       <li class="page-item"><button class="page-link ${tpage==1 ? `disabled` : ``}"  id="prev" >Prev</button></li>
             <li class="page-item"><a class="page-link">${tpage}</a></li>
             <li class="page-item"><button class="page-link" id="next" >Next</button></li>
  `
}

export function changePage(page, no){
        localStorage.setItem("page_no", JSON.stringify(page+no));
        
        location.reload();
}
