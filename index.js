import{a as k}from"./assets/vendor-BvLu_gPC.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const m=document.querySelector(".description-wrapper"),p=document.querySelector(".modal-title"),b=document.querySelector(".modal"),f=document.querySelector(".albums-list"),$=document.querySelector(".loader"),D=document.querySelector(".artists-gallery"),c=document.querySelector(".backdrop"),S=document.querySelector(".modal-close-button"),v=document.querySelector(".albums-title");let M;function I(){$.classList.remove("visually-hidden")}function C(){$.classList.add("visually-hidden")}async function N(t){return(await k.get(`https://sound-wave.b.goit.study/api/artists/${t}`)).data}async function Y(t){m.innerHTML="",f.innerHTML="",p.innerHTML="",v.innerHTML="",b.style.display="none",I();try{const e=await N(t);v.innerHTML="Albums",S.addEventListener("click",d),c.addEventListener("click",w),document.addEventListener("keydown",E),V(e),Q(e),b.style.display="block"}catch(e){console.error("Error loading artist data:",e)}finally{C()}}function G(t){const e=Math.floor(t/1e3),n=Math.floor(e/60),o=e%60;return`${n}:${o.toString().padStart(2,"0")}`}function _({strTrack:t,intDuration:e,movie:n}){return`
<li class="tracks-item">
              <p class="track-name">${t}</p>
              <p class="track-length">${G(e)}</p>
              <div class="track-link-space">
                ${n?`<a class="track-link" href='${n}' target="_blank" rel="noopener noreferrer"
                  ><svg class="track-link-icon" width="24" height="24">
                    <use
                      href="./img/sprite.svg#icon-youtube"
                    ></use></svg
                ></a>`:""} 
              </div>
            </li>
    `}function F(t){return t.map(_).join("")}function R({tracksList:t}){const e={},n=Math.min(100,t.length);for(let o=0;o<n;o++){const s=t[o],r=s.strAlbum;e[r]||(e[r]=[]),e[r].push(s)}return e}function K(t,e){return`
        <li class="albums-item">
          <h5 class="album-title">${t}</h5>
          <div class="tracks-heading">
            <p class="tracks-heading-text">Track</p>
            <p class="tracks-heading-text">Time</p>
            <p class="tracks-heading-text">Link</p>
          </div>
          <ul class="tracks">
          ${F(e[t])}
          </ul>
        </li>
    `}function U(t){return Object.keys(t).map(e=>K(e,t)).join("")}function V(t){const e=R(t);f&&f.insertAdjacentHTML("beforeend",U(e))}function l(t,e){return`
    <li class="artist-desc-item">
      <h4 class="artist-desc-title">${t}</h4>
      <p class="artist-desc-text">${e}</p>
    </li>
  `}function z(t){return`
    <li class="artist-genres-item">
      <p class="artist-genres-text">${t}</p>
    </li>
  `}function J(t){const{intDiedYear:e,intFormedYear:n,intMembers:o,strArtist:s,strArtistThumb:r,strBiographyEN:i,strCountry:u,strGender:P}=t;p&&(p.textContent=s);const O=M;return`
      <img class="modal-img" src="${r}" alt="${s}" />
      <div class="description-text-wrapper">
        <ul class="artist-description">
          ${l("Years active",`${n} - ${e||"present"}`)}
          ${l("Sex",P)}
          ${l("Members",o)}
          ${l("Country",u)}
        </ul>
        <div class="artist-biography">
          <h4 class="artist-desc-title">Biography</h4>
          <p class="artist-desc-text">${i}</p>
        </div>
        <ul class="artist-genres">
          ${O.map(z).join("")}
        </ul>
      </div>
    `}function Q(t){m&&m.insertAdjacentHTML("beforeend",J(t))}D.addEventListener("click",t=>{const e=t.target.closest("button");e&&(c.classList.add("is-open"),document.body.style.overflowY="hidden",M=e.dataset.genres.split(","),Y(e.dataset.id))});function d(){c.classList.remove("is-open"),document.body.style.overflowY="auto",S.removeEventListener("click",d),c.removeEventListener("click",w),document.removeEventListener("keydown",E)}function w(t){t.target===c&&d()}function E(t){t.key==="Escape"&&d()}const W="https://sound-wave.b.goit.study/api",X="/artists";function T(t=1){const e={limit:8,page:t};return k.get(`${W}${X}`,{params:e}).then(n=>n.data).catch(n=>{throw console.error("Error fetching artists:",n),n})}const Z="/musicians-website/img/sprite.svg",y=document.querySelector(".load-more-btn"),A=document.querySelector(".loader-artists");function tt({_id:t,genres:e,strArtist:n,strBiographyEN:o,strArtistThumb:s}){return`<li class="artists-item">
        <img class="artists-img" src="${s}" alt="${n}" width="288"/>
        <ul class="artists-genres">${e.map(r=>`<li class="artists-genres-item"><p class="artists-genres-text">${r}</p></li>`).join(`
`)}</ul>
                  <h3 class="artsits-name">${n}</h3>
        <p class="artists-descr">${o}</p>
        <button class="learn-btn" type="button" data-id="${t}" data-genres="${e}">Learn More<svg class="learn-more-svg" width="24" height="24">
        <use href="${Z}#icon-triangle-right"></use>
      </svg></button>
      </li>`}function q(t){return t.map(tt).join(`
`)}function et(){y.classList.remove("visually-hidden")}function L(){y.classList.add("visually-hidden")}function x(t,e){if(t<e){et();return}else L()}function B(){A.classList.remove("visually-hidden")}function j(){A.classList.add("visually-hidden")}y.addEventListener("click",st);let a=1,g=null;const H=document.querySelector(".artists-gallery");B();L();T(a).then(t=>{const e=q(t.artists);g=Math.ceil(t.totalArtists/t.limit),H.insertAdjacentHTML("beforeend",e),j(),x(a,g)});function st(){L(),B(),a++,T(a).then(t=>{const e=q(t.artists);H.insertAdjacentHTML("beforeend",e),j(),x(a,g)})}const h=document.querySelector(".backdrop-header"),rt=document.querySelector(".js-toggle-menu");rt.addEventListener("click",()=>{const t=h.classList.toggle("is-open");document.body.classList.toggle("menu-open",t)});document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const n=t.getAttribute("href").substring(1),o=document.getElementById(n);if(o){const r=document.querySelector(".header").offsetHeight,u=o.getBoundingClientRect().top+window.scrollY-r;window.scrollTo({top:u,behavior:"smooth"})}h.classList.contains("is-open")&&(h.classList.remove("is-open"),document.body.classList.remove("menu-open"))})});function nt(){const t=document.querySelector("#btn");t&&t.addEventListener("click",()=>{const e=document.querySelector("#artists");e&&e.scrollIntoView({behavior:"smooth",block:"start"})})}document.addEventListener("DOMContentLoaded",()=>{nt()});
//# sourceMappingURL=index.js.map
