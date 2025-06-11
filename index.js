import{a as b}from"./assets/vendor-BbYF_8OW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const m=document.querySelector(".description-wrapper"),p=document.querySelector(".modal-title"),g=document.querySelector(".albums-list"),L=document.querySelector(".loader"),O=document.querySelector(".artists-gallery"),c=document.querySelector(".backdrop"),k=document.querySelector(".modal-close-button"),v=document.querySelector(".albums-title");let $;function P(){L.classList.remove("visually-hidden")}function D(){L.classList.add("visually-hidden")}async function I(e){return(await b.get(`https://sound-wave.b.goit.study/api/artists/${e}`)).data}async function N(e){m.innerHTML="",g.innerHTML="",p.innerHTML="",v.innerHTML="",P();try{const t=await I(e);v.innerHTML="Albums",k.addEventListener("click",d),c.addEventListener("click",w),document.addEventListener("keydown",T),R(t),W(t)}catch(t){console.error("Error loading artist data:",t)}finally{D()}}function C(e){const t=Math.floor(e/1e3),n=Math.floor(t/60),o=t%60;return`${n}:${o.toString().padStart(2,"0")}`}function Y({strTrack:e,intDuration:t,movie:n}){return`
<li class="tracks-item">
              <p class="track-name">${e}</p>
              <p class="track-length">${C(t)}</p>
              <div class="track-link-space">
                ${n?`<a class="track-link" href='${n}' target="_blank" rel="noopener noreferrer"
                  ><svg class="track-link-icon" width="24" height="24">
                    <use
                      href="/img/artist-modal/artist-modal.svg#icon-youtube"
                    ></use></svg
                ></a>`:""} 
              </div>
            </li>
    `}function U(e){return e.map(Y).join("")}function G({tracksList:e}){const t={},n=Math.min(100,e.length);for(let o=0;o<n;o++){const s=e[o],r=s.strAlbum;t[r]||(t[r]=[]),t[r].push(s)}return t}function _(e,t){return`
        <li class="albums-item">
          <h5 class="album-title">${e}</h5>
          <div class="tracks-heading">
            <p class="tracks-heading-text">Track</p>
            <p class="tracks-heading-text">Time</p>
            <p class="tracks-heading-text">Link</p>
          </div>
          <ul class="tracks">
          ${U(t[e])}
          </ul>
        </li>
    `}function F(e){return Object.keys(e).map(t=>_(t,e)).join("")}function R(e){const t=G(e);g&&g.insertAdjacentHTML("beforeend",F(t))}function l(e,t){return`
    <li class="artist-desc-item">
      <h4 class="artist-desc-title">${e}</h4>
      <p class="artist-desc-text">${t}</p>
    </li>
  `}function z(e){return`
    <li class="artist-genres-item">
      <p class="artist-genres-text">${e}</p>
    </li>
  `}function K(e){const{intDiedYear:t,intFormedYear:n,intMembers:o,strArtist:s,strArtistThumb:r,strBiographyEN:i,strCountry:u,strGender:x}=e;p&&(p.textContent=s);const H=$;return`
      <img class="modal-img" src="${r}" alt="${s}" />
      <div class="description-text-wrapper">
        <ul class="artist-description">
          ${l("Years active",`${n} - ${t||"present"}`)}
          ${l("Sex",x)}
          ${l("Members",o)}
          ${l("Country",u)}
        </ul>
        <div class="artist-biography">
          <h4 class="artist-desc-title">Biography</h4>
          <p class="artist-desc-text">${i}</p>
        </div>
        <ul class="artist-genres">
          ${H.map(z).join("")}
        </ul>
      </div>
    `}function W(e){m&&m.insertAdjacentHTML("beforeend",K(e))}O.addEventListener("click",e=>{e.target.nodeName==="BUTTON"&&(c.classList.add("is-open"),document.body.style.overflowY="hidden",$=e.target.dataset.genres.split(","),N(e.target.dataset.id))});function d(){c.classList.remove("is-open"),document.body.style.overflowY="auto",k.removeEventListener("click",d),c.removeEventListener("click",w),document.removeEventListener("keydown",T)}function w(e){e.target===c&&d()}function T(e){e.key==="Escape"&&d()}const f=document.querySelector(".backdrop-header"),M=document.querySelector(".js-toggle-menu"),E=M.querySelector(".menu-icon"),J=document.querySelector(".js-logo-icon use"),S=()=>{const e=window.innerWidth>=768?"/img/sprite.svg#icon-header-logo":"/img/sprite.svg#icon-header-logo-mobile";J.setAttribute("href",e)};M.addEventListener("click",()=>{const e=f.classList.toggle("is-open");E.setAttribute("href",e?"/img/sprite.svg#icon-header-close-menu":"/img/sprite.svg#icon-header-open-menu"),document.body.classList.toggle("menu-open",e)});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.getAttribute("href").substring(1),o=document.getElementById(n);if(o){const r=document.querySelector(".header").offsetHeight,u=o.getBoundingClientRect().top+window.scrollY-r;window.scrollTo({top:u,behavior:"smooth"})}f.classList.contains("is-open")&&(f.classList.remove("is-open"),E.setAttribute("href","/img/sprite.svg#icon-header-open-menu"),document.body.classList.remove("menu-open"))})});window.addEventListener("resize",()=>{S()});window.addEventListener("DOMContentLoaded",()=>{S()});const Q="https://sound-wave.b.goit.study/api",V="/artists";function A(e=1){const t={limit:8,page:e};return b.get(`${Q}${V}`,{params:t}).then(n=>n.data).catch(n=>{throw console.error("Error fetching artists:",n),n})}const y=document.querySelector(".load-more-btn");function X({_id:e,genres:t,strArtist:n,strBiographyEN:o,strArtistThumb:s}){return`<li class="artists-item">
        <img class="artists-img" src="${s}" alt="${n}" width="288"/>
        <ul class="artists-genres">${t.map(r=>`<li class="artists-genres-item"><p class="artists-genres-text">${r}</p></li>`).join(`
`)}</ul>
                  <h3 class="artsits-name">${n}</h3>
        <p class="artists-descr">${o}</p>
        <button class="learn-btn" type="button" data-id="${e}" data-genres="${t}">Learn More<svg class="learn-more-svg" width="24" height="24">
        <use href="/img/sprite.svg#icon-triangle-right"></use>
      </svg></button>
      </li>`}function q(e){return e.map(X).join(`
`)}function Z(){y.classList.remove("hidden")}function ee(){y.classList.add("hidden")}function B(e,t){if(e<t){Z();return}else ee()}y.addEventListener("click",te);let a=1,h=1;const j=document.querySelector(".artists-gallery");A(a).then(e=>{const t=q(e.artists);h=Math.ceil(e.totalArtists/e.limit),j.insertAdjacentHTML("beforeend",t),B(a,h)});function te(){a++,A(a).then(e=>{const t=q(e.artists);j.insertAdjacentHTML("beforeend",t),B(a,h)})}
//# sourceMappingURL=index.js.map
