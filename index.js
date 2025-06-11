import{a as v}from"./assets/vendor-BbYF_8OW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const u=document.querySelector(".description-wrapper"),m=document.querySelector(".modal-title"),p=document.querySelector(".albums-list"),b=document.querySelector(".loader"),H=document.querySelector(".artists-gallery"),c=document.querySelector(".backdrop"),L=document.querySelector(".modal-close-button"),y=document.querySelector(".albums-title");let k;function I(){b.classList.remove("visually-hidden")}function D(){b.classList.add("visually-hidden")}async function N(e){return(await v.get(`https://sound-wave.b.goit.study/api/artists/${e}`)).data}async function P(e){u.innerHTML="",p.innerHTML="",m.innerHTML="",y.innerHTML="",I();try{const t=await N(e);y.innerHTML="Albums",L.addEventListener("click",d),c.addEventListener("click",$),document.addEventListener("keydown",M),z(t),V(t)}catch(t){console.error("Error loading artist data:",t)}finally{D()}}function C(e){const t=Math.floor(e/1e3),r=Math.floor(t/60),o=t%60;return`${r}:${o.toString().padStart(2,"0")}`}function Y({strTrack:e,intDuration:t,movie:r}){return`
<li class="tracks-item">
              <p class="track-name">${e}</p>
              <p class="track-length">${C(t)}</p>
              <div class="track-link-space">
                ${r?`<a class="track-link" href='${r}' target="_blank" rel="noopener noreferrer"
                  ><svg class="track-link-icon" width="24" height="24">
                    <use
                      href="/img/artist-modal/artist-modal.svg#icon-youtube"
                    ></use></svg
                ></a>`:""} 
              </div>
            </li>
    `}function U(e){return e.map(Y).join("")}function G({tracksList:e}){const t={},r=Math.min(100,e.length);for(let o=0;o<r;o++){const s=e[o],n=s.strAlbum;t[n]||(t[n]=[]),t[n].push(s)}return t}function _(e,t){return`
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
    `}function F(e){return Object.keys(e).map(t=>_(t,e)).join("")}function z(e){const t=G(e);p&&p.insertAdjacentHTML("beforeend",F(t))}function l(e,t){return`
    <li class="artist-desc-item">
      <h4 class="artist-desc-title">${e}</h4>
      <p class="artist-desc-text">${t}</p>
    </li>
  `}function K(e){return`
    <li class="artist-genres-item">
      <p class="artist-genres-text">${e}</p>
    </li>
  `}function R(e){const{intDiedYear:t,intFormedYear:r,intMembers:o,strArtist:s,strArtistThumb:n,strBiographyEN:i,strCountry:x,strGender:B}=e;m&&(m.textContent=s);const O=k;return`
      <img class="modal-img" src="${n}" alt="${s}" />
      <div class="description-text-wrapper">
        <ul class="artist-description">
          ${l("Years active",`${r} - ${t||"present"}`)}
          ${l("Sex",B)}
          ${l("Members",o)}
          ${l("Country",x)}
        </ul>
        <div class="artist-biography">
          <h4 class="artist-desc-title">Biography</h4>
          <p class="artist-desc-text">${i}</p>
        </div>
        <ul class="artist-genres">
          ${O.map(K).join("")}
        </ul>
      </div>
    `}function V(e){u&&u.insertAdjacentHTML("beforeend",R(e))}H.addEventListener("click",e=>{e.target.nodeName==="BUTTON"&&(c.classList.add("is-open"),document.body.style.overflowY="hidden",k=e.target.dataset.genres.split(","),P(e.target.dataset.id))});function d(){c.classList.remove("is-open"),document.body.style.overflowY="auto",L.removeEventListener("click",d),c.removeEventListener("click",$),document.removeEventListener("keydown",M)}function $(e){e.target===c&&d()}function M(e){e.key==="Escape"&&d()}const g=document.querySelector(".backdrop-header"),T=document.querySelector(".js-toggle-menu"),w=T.querySelector(".menu-icon"),W=document.querySelector(".js-logo-icon use"),E=()=>{const e=window.innerWidth>=768?"/img/header/icons-header.svg#icon-header-logo":"/img/header/icons-header.svg#icon-header-logo-mobile";W.setAttribute("href",e)};T.addEventListener("click",()=>{const e=g.classList.toggle("is-open");w.setAttribute("href",e?"/img/header/icons-header.svg#icon-header-close-menu":"/img/header/icons-header.svg#icon-header-open-menu")});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const r=e.getAttribute("href").substring(1),o=document.getElementById(r);o&&o.scrollIntoView({behavior:"smooth",block:"start"}),g.classList.contains("is-open")&&(g.classList.remove("is-open"),w.setAttribute("href","/img/header/icons-header.svg#icon-header-open-menu"))})});window.addEventListener("resize",E);window.addEventListener("DOMContentLoaded",E);const J="https://sound-wave.b.goit.study/api",Q="/artists";function S(e=1){const t={limit:8,page:e};return v.get(`${J}${Q}`,{params:t}).then(r=>r.data).catch(r=>{throw console.error("Error fetching artists:",r),r})}const h=document.querySelector(".load-more-btn");function X({_id:e,genres:t,strArtist:r,strBiographyEN:o,strArtistThumb:s}){return`<li class="artists-item">
        <img class="artists-img" src="${s}" alt="${r}" width="288"/>
        <ul class="artists-genres">${t.map(n=>`<li class="artists-genres-item"><p class="artists-genres-text">${n}</p></li>`).join(`
`)}</ul>
                  <h3 class="artsits-name">${r}</h3>
        <p class="artists-descr">${o}</p>
        <button class="learn-btn" type="button" data-id="${e}" data-genres="${t}">Learn More<svg class="learn-more-svg" width="24" height="24">
        <use href="/img/sprite.svg#icon-triangle-right"></use>
      </svg></button>
      </li>`}function A(e){return e.map(X).join(`
`)}function Z(){h.classList.remove("hidden")}function ee(){h.classList.add("hidden")}function q(e,t){if(e<t){Z();return}else ee()}h.addEventListener("click",te);let a=1,f=1;const j=document.querySelector(".artists-gallery");S(a).then(e=>{const t=A(e.artists);f=Math.ceil(e.totalArtists/e.limit),j.insertAdjacentHTML("beforeend",t),q(a,f)});function te(){a++,S(a).then(e=>{const t=A(e.artists);j.insertAdjacentHTML("beforeend",t),q(a,f)})}
//# sourceMappingURL=index.js.map
