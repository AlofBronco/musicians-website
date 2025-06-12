import{a as b}from"./assets/vendor-BbYF_8OW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const m=document.querySelector(".description-wrapper"),p=document.querySelector(".modal-title"),g=document.querySelector(".albums-list"),k=document.querySelector(".loader"),C=document.querySelector(".artists-gallery"),c=document.querySelector(".backdrop"),$=document.querySelector(".modal-close-button"),L=document.querySelector(".albums-title");let w;function N(){k.classList.remove("visually-hidden")}function Y(){k.classList.add("visually-hidden")}async function U(e){return(await b.get(`https://sound-wave.b.goit.study/api/artists/${e}`)).data}async function G(e){m.innerHTML="",g.innerHTML="",p.innerHTML="",L.innerHTML="",N();try{const t=await U(e);L.innerHTML="Albums",$.addEventListener("click",d),c.addEventListener("click",S),document.addEventListener("keydown",E),W(t),X(t)}catch(t){console.error("Error loading artist data:",t)}finally{Y()}}function _(e){const t=Math.floor(e/1e3),n=Math.floor(t/60),o=t%60;return`${n}:${o.toString().padStart(2,"0")}`}function F({strTrack:e,intDuration:t,movie:n}){return`
<li class="tracks-item">
              <p class="track-name">${e}</p>
              <p class="track-length">${_(t)}</p>
              <div class="track-link-space">
                ${n?`<a class="track-link" href='${n}' target="_blank" rel="noopener noreferrer"
                  ><svg class="track-link-icon" width="24" height="24">
                    <use
                      href="/img/artist-modal/artist-modal.svg#icon-youtube"
                    ></use></svg
                ></a>`:""} 
              </div>
            </li>
    `}function R(e){return e.map(F).join("")}function z({tracksList:e}){const t={},n=Math.min(100,e.length);for(let o=0;o<n;o++){const s=e[o],r=s.strAlbum;t[r]||(t[r]=[]),t[r].push(s)}return t}function K(e,t){return`
        <li class="albums-item">
          <h5 class="album-title">${e}</h5>
          <div class="tracks-heading">
            <p class="tracks-heading-text">Track</p>
            <p class="tracks-heading-text">Time</p>
            <p class="tracks-heading-text">Link</p>
          </div>
          <ul class="tracks">
          ${R(t[e])}
          </ul>
        </li>
    `}function V(e){return Object.keys(e).map(t=>K(t,e)).join("")}function W(e){const t=z(e);g&&g.insertAdjacentHTML("beforeend",V(t))}function l(e,t){return`
    <li class="artist-desc-item">
      <h4 class="artist-desc-title">${e}</h4>
      <p class="artist-desc-text">${t}</p>
    </li>
  `}function J(e){return`
    <li class="artist-genres-item">
      <p class="artist-genres-text">${e}</p>
    </li>
  `}function Q(e){const{intDiedYear:t,intFormedYear:n,intMembers:o,strArtist:s,strArtistThumb:r,strBiographyEN:i,strCountry:u,strGender:D}=e;p&&(p.textContent=s);const I=w;return`
      <img class="modal-img" src="${r}" alt="${s}" />
      <div class="description-text-wrapper">
        <ul class="artist-description">
          ${l("Years active",`${n} - ${t||"present"}`)}
          ${l("Sex",D)}
          ${l("Members",o)}
          ${l("Country",u)}
        </ul>
        <div class="artist-biography">
          <h4 class="artist-desc-title">Biography</h4>
          <p class="artist-desc-text">${i}</p>
        </div>
        <ul class="artist-genres">
          ${I.map(J).join("")}
        </ul>
      </div>
    `}function X(e){m&&m.insertAdjacentHTML("beforeend",Q(e))}C.addEventListener("click",e=>{e.target.nodeName==="BUTTON"&&(c.classList.add("is-open"),document.body.style.overflowY="hidden",w=e.target.dataset.genres.split(","),G(e.target.dataset.id))});function d(){c.classList.remove("is-open"),document.body.style.overflowY="auto",$.removeEventListener("click",d),c.removeEventListener("click",S),document.removeEventListener("keydown",E)}function S(e){e.target===c&&d()}function E(e){e.key==="Escape"&&d()}const Z="https://sound-wave.b.goit.study/api",ee="/artists";function M(e=1){const t={limit:8,page:e};return b.get(`${Z}${ee}`,{params:t}).then(n=>n.data).catch(n=>{throw console.error("Error fetching artists:",n),n})}const te="/musicians-website/img/sprite.svg",y=document.querySelector(".load-more-btn"),T=document.querySelector(".loader-artists");function se({_id:e,genres:t,strArtist:n,strBiographyEN:o,strArtistThumb:s}){return`<li class="artists-item">
        <img class="artists-img" src="${s}" alt="${n}" width="288"/>
        <ul class="artists-genres">${t.map(r=>`<li class="artists-genres-item"><p class="artists-genres-text">${r}</p></li>`).join(`
`)}</ul>
                  <h3 class="artsits-name">${n}</h3>
        <p class="artists-descr">${o}</p>
        <button class="learn-btn" type="button" data-id="${e}" data-genres="${t}">Learn More<svg class="learn-more-svg" width="24" height="24">
        <use href="${te}#icon-triangle-right"></use>
      </svg></button>
      </li>`}function A(e){return e.map(se).join(`
`)}function re(){y.classList.remove("visually-hidden")}function v(){y.classList.add("visually-hidden")}function q(e,t){if(e<t){re();return}else v()}function x(){T.classList.remove("visually-hidden")}function B(){T.classList.add("visually-hidden")}y.addEventListener("click",ne);let a=1,f=null;const j=document.querySelector(".artists-gallery");x();v();M(a).then(e=>{const t=A(e.artists);f=Math.ceil(e.totalArtists/e.limit),j.insertAdjacentHTML("beforeend",t),B(),q(a,f)});function ne(){v(),x(),a++,M(a).then(e=>{const t=A(e.artists);j.insertAdjacentHTML("beforeend",t),B(),q(a,f)})}const h=document.querySelector(".backdrop-header"),O=document.querySelector(".js-toggle-menu"),H=O.querySelector(".menu-icon"),oe=document.querySelector(".js-logo-icon use"),P=()=>{const e=window.innerWidth>=768?"/img/sprite.svg#icon-header-logo":"/img/sprite.svg#icon-header-logo-mobile";oe.setAttribute("href",e)};O.addEventListener("click",()=>{const e=h.classList.toggle("is-open");H.setAttribute("href",e?"/img/sprite.svg#icon-header-close-menu":"/img/sprite.svg#icon-header-open-menu"),document.body.classList.toggle("menu-open",e)});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.getAttribute("href").substring(1),o=document.getElementById(n);if(o){const r=document.querySelector(".header").offsetHeight,u=o.getBoundingClientRect().top+window.scrollY-r;window.scrollTo({top:u,behavior:"smooth"})}h.classList.contains("is-open")&&(h.classList.remove("is-open"),H.setAttribute("href","/img/sprite.svg#icon-header-open-menu"),document.body.classList.remove("menu-open"))})});window.addEventListener("resize",()=>{P()});window.addEventListener("DOMContentLoaded",()=>{P()});function ie(){const e=document.querySelector("#btn");e&&e.addEventListener("click",()=>{const t=document.querySelector("#artists");t&&t.scrollIntoView({behavior:"smooth",block:"start"})})}document.addEventListener("DOMContentLoaded",()=>{ie()});
//# sourceMappingURL=index.js.map
