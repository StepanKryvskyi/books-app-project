import{l as h}from"./support-ukraine-8bbd70a3.js";const a=document.querySelector(".shopping-list-empty"),t=document.querySelector(".shop-list-with-books"),l=document.querySelector(".container-support");window.innerWidth>=1440?(l.classList.remove("is-hidden"),h()):l.classList.add("is-hidden");let e=localStorage.getItem("books");try{e=JSON.parse(e)}catch(o){console.error(o.message)}p();function p(){if(!e||!e.length){t.classList.add("is-hidden"),a.classList.remove("is-hidden");return}else a.classList.add("is-hidden"),t.classList.remove("is-hidden"),t.insertAdjacentHTML("beforeend",m()),t.addEventListener("click",g)}function g(o){if(o.target.dataset.action!=="remove")return;const s=o.target.closest(".shopping-list-item").dataset.id;e=e.filter(i=>i._id!==s),localStorage.setItem("books",JSON.stringify(e)),t.innerHTML="",p()}function m(){return e.map(({_id:o,book_image:r,title:s,author:i,buy_links:n,description:c,list_name:d})=>`<li class="shopping-list-item" data-id=${o}>
        <button type="button" class="shopping-list-svg" data-action="remove">
             <svg data-action="remove" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                <title>trash-03</title>
                <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" stroke="#fff" d="M12 4h8M4 8h24M25.333 8l-0.935 14.026c-0.14 2.104-0.21 3.156-0.665 3.954-0.4 0.702-1.004 1.267-1.731 1.62-0.826 0.4-1.881 0.4-3.99 0.4h-4.025c-2.109 0-3.163 0-3.99-0.4-0.727-0.353-1.331-0.917-1.731-1.62-0.455-0.798-0.525-1.85-0.665-3.954l-0.935-14.026M13.333 14v6.667M18.667 14v6.667"></path>
            </svg>              
        </button>
        <img src="${r}" alt="book-cover" class="shopping-list-img">
        <div class="shopping-list-book-details">
            <h2 class="shopping-list-book-name">${s}</h2>
            <p class="shopping-list-book-genre">${d}</p>
            <p class="shopping-list-book-description">${c}</p>
            <p class="shopping-list-author">${i}</p>        
                <div class="shopping-list-company-icons">
                    <a href="${n[0].url}" target="_blank" rel="noopener noreferrer"><img src="./img/shopping-list-icon/company-1.png" alt="Amazon"></a>
                    <a href="${n[1].url}" target="_blank" rel="noopener noreferrer"><img src="./img/shopping-list-icon/company-2.png" alt="Apple Books"></a>
                    <a href="${n[4].url}" target="_blank" rel="noopener noreferrer"><img src="./img/shopping-list-icon/company-3.png" alt="Bookshop"></a>
                </div>      
        </div>
    </li>`).join(" ")}
