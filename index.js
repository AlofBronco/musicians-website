import{a as k}from"./assets/vendor-BbYF_8OW.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const m=document.querySelector(".description-wrapper"),p=document.querySelector(".modal-title"),f=document.querySelector(".albums-list"),$=document.querySelector(".loader"),N=document.querySelector(".artists-gallery"),c=document.querySelector(".backdrop"),S=document.querySelector(".modal-close-button"),v=document.querySelector(".albums-title");let T;function C(){$.classList.remove("visually-hidden")}function Y(){$.classList.add("visually-hidden")}async function U(t){return(await k.get(`https://sound-wave.b.goit.study/api/artists/${t}`)).data}async function G(t){m.innerHTML="",f.innerHTML="",p.innerHTML="",v.innerHTML="",C();try{const e=await U(t);v.innerHTML="Albums",S.addEventListener("click",d),c.addEventListener("click",w),document.addEventListener("keydown",M),J(e),X(e)}catch(e){console.error("Error loading artist data:",e)}finally{Y()}}function _(t){const e=Math.floor(t/1e3),n=Math.floor(e/60),o=e%60;return`${n}:${o.toString().padStart(2,"0")}`}function F({strTrack:t,intDuration:e,movie:n}){return`
<li class="tracks-item">
              <p class="track-name">${t}</p>
              <p class="track-length">${_(e)}</p>
              <div class="track-link-space">
                ${n?`<a class="track-link" href='${n}' target="_blank" rel="noopener noreferrer"
                  ><svg class="track-link-icon" width="24" height="24">
                    <use
                      href="/img/artist-modal/artist-modal.svg#icon-youtube"
                    ></use></svg
                ></a>`:""} 
              </div>
            </li>
    `}function R(t){return t.map(F).join("")}function K({tracksList:t}){const e={},n=Math.min(100,t.length);for(let o=0;o<n;o++){const s=t[o],r=s.strAlbum;e[r]||(e[r]=[]),e[r].push(s)}return e}function V(t,e){return`
        <li class="albums-item">
          <h5 class="album-title">${t}</h5>
          <div class="tracks-heading">
            <p class="tracks-heading-text">Track</p>
            <p class="tracks-heading-text">Time</p>
            <p class="tracks-heading-text">Link</p>
          </div>
          <ul class="tracks">
          ${R(e[t])}
          </ul>
        </li>
    `}function z(t){return Object.keys(t).map(e=>V(e,t)).join("")}function J(t){const e=K(t);f&&f.insertAdjacentHTML("beforeend",z(e))}function l(t,e){return`
    <li class="artist-desc-item">
      <h4 class="artist-desc-title">${t}</h4>
      <p class="artist-desc-text">${e}</p>
    </li>
  `}function Q(t){return`
    <li class="artist-genres-item">
      <p class="artist-genres-text">${t}</p>
    </li>
  `}function W(t){const{intDiedYear:e,intFormedYear:n,intMembers:o,strArtist:s,strArtistThumb:r,strBiographyEN:i,strCountry:u,strGender:D}=t;p&&(p.textContent=s);const I=T;return`
      <img class="modal-img" src="${r}" alt="${s}" />
      <div class="description-text-wrapper">
        <ul class="artist-description">
          ${l("Years active",`${n} - ${e||"present"}`)}
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
    `}function X(t){m&&m.insertAdjacentHTML("beforeend",W(t))}N.addEventListener("click",t=>{t.target.nodeName==="BUTTON"&&(c.classList.add("is-open"),document.body.style.overflowY="hidden",T=t.target.dataset.genres.split(","),G(t.target.dataset.id))});function d(){c.classList.remove("is-open"),document.body.style.overflowY="auto",S.removeEventListener("click",d),c.removeEventListener("click",w),document.removeEventListener("keydown",M)}function w(t){t.target===c&&d()}function M(t){t.key==="Escape"&&d()}const Z="https://sound-wave.b.goit.study/api",tt="/artists";function E(t=1){const e={limit:8,page:t};return k.get(`${Z}${tt}`,{params:e}).then(n=>n.data).catch(n=>{throw console.error("Error fetching artists:",n),n})}const et="/musicians-website/img/sprite.svg",L=document.querySelector(".load-more-btn"),A=document.querySelector(".loader-artists");function st({_id:t,genres:e,strArtist:n,strBiographyEN:o,strArtistThumb:s}){return`<li class="artists-item">
        <img class="artists-img" src="${s}" alt="${n}" width="288"/>
        <ul class="artists-genres">${e.map(r=>`<li class="artists-genres-item"><p class="artists-genres-text">${r}</p></li>`).join(`
`)}</ul>
                  <h3 class="artsits-name">${n}</h3>
        <p class="artists-descr">${o}</p>
        <button class="learn-btn" type="button" data-id="${t}" data-genres="${e}">Learn More<svg class="learn-more-svg" width="24" height="24">
        <use href="${et}#icon-triangle-right"></use>
      </svg></button>
      </li>`}function q(t){return t.map(st).join(`
`)}function rt(){L.classList.remove("visually-hidden")}function b(){L.classList.add("visually-hidden")}function x(t,e){if(t<e){rt();return}else b()}function B(){A.classList.remove("visually-hidden")}function j(){A.classList.add("visually-hidden")}L.addEventListener("click",nt);let a=1,g=null;const H=document.querySelector(".artists-gallery");B();b();E(a).then(t=>{const e=q(t.artists);g=Math.ceil(t.totalArtists/t.limit),H.insertAdjacentHTML("beforeend",e),j(),x(a,g)});function nt(){b(),B(),a++,E(a).then(t=>{const e=q(t.artists);H.insertAdjacentHTML("beforeend",e),j(),x(a,g)})}const h="/musicians-website/img/sprite.svg",y=document.querySelector(".backdrop-header"),O=document.querySelector(".js-toggle-menu"),P=O.querySelector(".menu-icon");O.addEventListener("click",()=>{const t=y.classList.toggle("is-open");P.setAttribute("href",t?`${h}#icon-header-close-menu`:`${h}#icon-header-open-menu`),document.body.classList.toggle("menu-open",t)});document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const n=t.getAttribute("href").substring(1),o=document.getElementById(n);if(o){const r=document.querySelector(".header").offsetHeight,u=o.getBoundingClientRect().top+window.scrollY-r;window.scrollTo({top:u,behavior:"smooth"})}y.classList.contains("is-open")&&(y.classList.remove("is-open"),P.setAttribute("href",`${h}#icon-header-open-menu`),document.body.classList.remove("menu-open"))})});function ot(){const t=document.querySelector("#btn");t&&t.addEventListener("click",()=>{const e=document.querySelector("#artists");e&&e.scrollIntoView({behavior:"smooth",block:"start"})})}document.addEventListener("DOMContentLoaded",()=>{ot()});
//# sourceMappingURL=index.js.map
