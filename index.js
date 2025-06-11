import{a as b}from"./assets/vendor-BbYF_8OW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const m=document.querySelector(".description-wrapper"),p=document.querySelector(".modal-title"),g=document.querySelector(".albums-list"),k=document.querySelector(".loader"),N=document.querySelector(".artists-gallery"),c=document.querySelector(".backdrop"),$=document.querySelector(".modal-close-button"),L=document.querySelector(".albums-title");let w;function C(){k.classList.remove("visually-hidden")}function Y(){k.classList.add("visually-hidden")}async function U(e){return(await b.get(`https://sound-wave.b.goit.study/api/artists/${e}`)).data}async function G(e){m.innerHTML="",g.innerHTML="",p.innerHTML="",L.innerHTML="",C();try{const t=await U(e);L.innerHTML="Albums",$.addEventListener("click",d),c.addEventListener("click",T),document.addEventListener("keydown",M),J(t),X(t)}catch(t){console.error("Error loading artist data:",t)}finally{Y()}}function _(e){const t=Math.floor(e/1e3),n=Math.floor(t/60),o=t%60;return`${n}:${o.toString().padStart(2,"0")}`}function F({strTrack:e,intDuration:t,movie:n}){return`
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
    `}function W(e){return Object.keys(e).map(t=>K(t,e)).join("")}function J(e){const t=z(e);g&&g.insertAdjacentHTML("beforeend",W(t))}function l(e,t){return`
    <li class="artist-desc-item">
      <h4 class="artist-desc-title">${e}</h4>
      <p class="artist-desc-text">${t}</p>
    </li>
  `}function Q(e){return`
    <li class="artist-genres-item">
      <p class="artist-genres-text">${e}</p>
    </li>
  `}function V(e){const{intDiedYear:t,intFormedYear:n,intMembers:o,strArtist:s,strArtistThumb:r,strBiographyEN:i,strCountry:u,strGender:D}=e;p&&(p.textContent=s);const I=w;return`
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
          ${I.map(Q).join("")}
        </ul>
      </div>
    `}function X(e){m&&m.insertAdjacentHTML("beforeend",V(e))}N.addEventListener("click",e=>{e.target.nodeName==="BUTTON"&&(c.classList.add("is-open"),document.body.style.overflowY="hidden",w=e.target.dataset.genres.split(","),G(e.target.dataset.id))});function d(){c.classList.remove("is-open"),document.body.style.overflowY="auto",$.removeEventListener("click",d),c.removeEventListener("click",T),document.removeEventListener("keydown",M)}function T(e){e.target===c&&d()}function M(e){e.key==="Escape"&&d()}const f=document.querySelector(".backdrop-header"),S=document.querySelector(".js-toggle-menu"),A=S.querySelector(".menu-icon"),Z=document.querySelector(".js-logo-icon use"),E=()=>{const e=window.innerWidth>=768?"/img/sprite.svg#icon-header-logo":"/img/sprite.svg#icon-header-logo-mobile";Z.setAttribute("href",e)};S.addEventListener("click",()=>{const e=f.classList.toggle("is-open");A.setAttribute("href",e?"/img/sprite.svg#icon-header-close-menu":"/img/sprite.svg#icon-header-open-menu"),document.body.classList.toggle("menu-open",e)});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.getAttribute("href").substring(1),o=document.getElementById(n);if(o){const r=document.querySelector(".header").offsetHeight,u=o.getBoundingClientRect().top+window.scrollY-r;window.scrollTo({top:u,behavior:"smooth"})}f.classList.contains("is-open")&&(f.classList.remove("is-open"),A.setAttribute("href","/img/sprite.svg#icon-header-open-menu"),document.body.classList.remove("menu-open"))})});window.addEventListener("resize",()=>{E()});window.addEventListener("DOMContentLoaded",()=>{E()});const ee="https://sound-wave.b.goit.study/api",te="/artists";function q(e=1){const t={limit:8,page:e};return b.get(`${ee}${te}`,{params:t}).then(n=>n.data).catch(n=>{throw console.error("Error fetching artists:",n),n})}const se="/musicians-website/img/sprite.svg",y=document.querySelector(".load-more-btn"),B=document.querySelector(".loader-artists");function re({_id:e,genres:t,strArtist:n,strBiographyEN:o,strArtistThumb:s}){return`<li class="artists-item">
        <img class="artists-img" src="${s}" alt="${n}" width="288"/>
        <ul class="artists-genres">${t.map(r=>`<li class="artists-genres-item"><p class="artists-genres-text">${r}</p></li>`).join(`
`)}</ul>
                  <h3 class="artsits-name">${n}</h3>
        <p class="artists-descr">${o}</p>
        <button class="learn-btn" type="button" data-id="${e}" data-genres="${t}">Learn More<svg class="learn-more-svg" width="24" height="24">
        <use href="${se}#icon-triangle-right"></use>
      </svg></button>
      </li>`}function j(e){return e.map(re).join(`
`)}function ne(){y.classList.remove("visually-hidden")}function v(){y.classList.add("visually-hidden")}function x(e,t){if(e<t){ne();return}else v()}function H(){B.classList.remove("visually-hidden")}function O(){B.classList.add("visually-hidden")}y.addEventListener("click",oe);let a=1,h=null;const P=document.querySelector(".artists-gallery");H();v();q(a).then(e=>{const t=j(e.artists);h=Math.ceil(e.totalArtists/e.limit),P.insertAdjacentHTML("beforeend",t),O(),x(a,h)});function oe(){v(),H(),a++,q(a).then(e=>{const t=j(e.artists);P.insertAdjacentHTML("beforeend",t),O(),x(a,h)})}
//# sourceMappingURL=index.js.map
