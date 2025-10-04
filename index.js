import{a as w,S,i as c}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const q="52560033-9cbbf5f969f605b9fcf55c2f5",v="https://pixabay.com/api/";async function P(r,t=1){const i={key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await w.get(v,{params:i})).data}const d=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=document.querySelector(".button-load"),$=new S(".gallery a",{captionsData:"alt",captionDelay:250});function B(r){const t=r.map(({largeImageURL:i,webformatURL:s,tags:e,likes:o,views:n,comments:L,downloads:b})=>`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
              width="360"
              height="200"
            />
          </a>
          <ul class="gallery-item-info">
            <li class="info-block"><h5>Likes</h5><p>${o}</p></li>
            <li class="info-block"><h5>Views</h5><p>${n}</p></li>
            <li class="info-block"><h5>Comments</h5><p>${L}</p></li>
            <li class="info-block"><h5>Downloads</h5><p>${b}</p></li>
          </ul>
        </li>`).join("");d.insertAdjacentHTML("beforeend",t),$.refresh()}function E(){d.innerHTML=""}function m(){f.classList.remove("is-hidden")}function M(){f.classList.add("is-hidden")}function O(){h.classList.remove("is-hidden")}function p(){h.classList.add("is-hidden")}const y=document.querySelector(".form"),R=document.querySelector(".form-input"),x=document.querySelector(".button-load");let a=1,u="",l=0;const H=15;y.addEventListener("submit",async r=>{r.preventDefault();const t=R.value.trim();if(!t){c.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}u=t,a=1,E(),p(),m(),g(u,a)});x.addEventListener("click",async()=>{a+=1,m(),p(),await g(u,a)});async function g(r,t){try{const i=await P(r,t);if(l=i.totalHits,i.hits.length===0){c.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}B(i.hits),t>1&&I();const s=Math.ceil(l/H);a<s?O():l>0&&c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{c.error({title:"Error",message:"Ups.. Something went wrong",position:"topRight"})}finally{setTimeout(()=>{M()},1500),t===1&&y.reset()}}function I(){const r=document.querySelector(".gallery-item");if(r){const t=r.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
