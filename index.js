import{a as b}from"./assets/vendor-BbYF_8OW.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const m=document.querySelector(".description-wrapper"),p=document.querySelector(".modal-title"),f=document.querySelector(".albums-list"),k=document.querySelector(".loader"),P=document.querySelector(".artists-gallery"),c=document.querySelector(".backdrop"),$=document.querySelector(".modal-close-button"),v=document.querySelector(".albums-title");let S;function D(){k.classList.remove("visually-hidden")}function I(){k.classList.add("visually-hidden")}async function N(t){return(await b.get(`https://sound-wave.b.goit.study/api/artists/${t}`)).data}async function C(t){m.innerHTML="",f.innerHTML="",p.innerHTML="",v.innerHTML="",D();try{const e=await N(t);v.innerHTML="Albums",$.addEventListener("click",d),c.addEventListener("click",T),document.addEventListener("keydown",M),K(e),J(e)}catch(e){console.error("Error loading artist data:",e)}finally{I()}}function Y(t){const e=Math.floor(t/1e3),n=Math.floor(e/60),o=e%60;return`${n}:${o.toString().padStart(2,"0")}`}function G({strTrack:t,intDuration:e,movie:n}){return`
<li class="tracks-item">
              <p class="track-name">${t}</p>
              <p class="track-length">${Y(e)}</p>
              <div class="track-link-space">
                ${n?`<a class="track-link" href='${n}' target="_blank" rel="noopener noreferrer"
                  ><svg class="track-link-icon" width="24" height="24">
                    <use
                      href="/img/artist-modal/artist-modal.svg#icon-youtube"
                    ></use></svg
                ></a>`:""} 
              </div>
            </li>
    `}function _(t){return t.map(G).join("")}function F({tracksList:t}){const e={},n=Math.min(100,t.length);for(let o=0;o<n;o++){const s=t[o],r=s.strAlbum;e[r]||(e[r]=[]),e[r].push(s)}return e}function R(t,e){return`
        <li class="albums-item">
          <h5 class="album-title">${t}</h5>
          <div class="tracks-heading">
            <p class="tracks-heading-text">Track</p>
            <p class="tracks-heading-text">Time</p>
            <p class="tracks-heading-text">Link</p>
          </div>
          <ul class="tracks">
          ${_(e[t])}
          </ul>
        </li>
    `}function U(t){return Object.keys(t).map(e=>R(e,t)).join("")}function K(t){const e=F(t);f&&f.insertAdjacentHTML("beforeend",U(e))}function l(t,e){return`
    <li class="artist-desc-item">
      <h4 class="artist-desc-title">${t}</h4>
      <p class="artist-desc-text">${e}</p>
    </li>
  `}function V(t){return`
    <li class="artist-genres-item">
      <p class="artist-genres-text">${t}</p>
    </li>
  `}function z(t){const{intDiedYear:e,intFormedYear:n,intMembers:o,strArtist:s,strArtistThumb:r,strBiographyEN:i,strCountry:u,strGender:H}=t;p&&(p.textContent=s);const O=S;return`
      <img class="modal-img" src="${r}" alt="${s}" />
      <div class="description-text-wrapper">
        <ul class="artist-description">
          ${l("Years active",`${n} - ${e||"present"}`)}
          ${l("Sex",H)}
          ${l("Members",o)}
          ${l("Country",u)}
        </ul>
        <div class="artist-biography">
          <h4 class="artist-desc-title">Biography</h4>
          <p class="artist-desc-text">${i}</p>
        </div>
        <ul class="artist-genres">
          ${O.map(V).join("")}
        </ul>
      </div>
    `}function J(t){m&&m.insertAdjacentHTML("beforeend",z(t))}P.addEventListener("click",t=>{t.target.nodeName==="BUTTON"&&(c.classList.add("is-open"),document.body.style.overflowY="hidden",S=t.target.dataset.genres.split(","),C(t.target.dataset.id))});function d(){c.classList.remove("is-open"),document.body.style.overflowY="auto",$.removeEventListener("click",d),c.removeEventListener("click",T),document.removeEventListener("keydown",M)}function T(t){t.target===c&&d()}function M(t){t.key==="Escape"&&d()}const Q="https://sound-wave.b.goit.study/api",W="/artists";function w(t=1){const e={limit:8,page:t};return b.get(`${Q}${W}`,{params:e}).then(n=>n.data).catch(n=>{throw console.error("Error fetching artists:",n),n})}const X="/musicians-website/img/sprite.svg",y=document.querySelector(".load-more-btn"),E=document.querySelector(".loader-artists");function Z({_id:t,genres:e,strArtist:n,strBiographyEN:o,strArtistThumb:s}){return`<li class="artists-item">
        <img class="artists-img" src="${s}" alt="${n}" width="288"/>
        <ul class="artists-genres">${e.map(r=>`<li class="artists-genres-item"><p class="artists-genres-text">${r}</p></li>`).join(`
`)}</ul>
                  <h3 class="artsits-name">${n}</h3>
        <p class="artists-descr">${o}</p>
        <button class="learn-btn" type="button" data-id="${t}" data-genres="${e}">Learn More<svg class="learn-more-svg" width="24" height="24">
        <use href="${X}#icon-triangle-right"></use>
      </svg></button>
      </li>`}function A(t){return t.map(Z).join(`
`)}function tt(){y.classList.remove("visually-hidden")}function L(){y.classList.add("visually-hidden")}function q(t,e){if(t<e){tt();return}else L()}function x(){E.classList.remove("visually-hidden")}function B(){E.classList.add("visually-hidden")}y.addEventListener("click",et);let a=1,g=null;const j=document.querySelector(".artists-gallery");x();L();w(a).then(t=>{const e=A(t.artists);g=Math.ceil(t.totalArtists/t.limit),j.insertAdjacentHTML("beforeend",e),B(),q(a,g)});function et(){L(),x(),a++,w(a).then(t=>{const e=A(t.artists);j.insertAdjacentHTML("beforeend",e),B(),q(a,g)})}const h=document.querySelector(".backdrop-header"),st=document.querySelector(".js-toggle-menu");st.addEventListener("click",()=>{const t=h.classList.toggle("is-open");document.body.classList.toggle("menu-open",t)});document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const n=t.getAttribute("href").substring(1),o=document.getElementById(n);if(o){const r=document.querySelector(".header").offsetHeight,u=o.getBoundingClientRect().top+window.scrollY-r;window.scrollTo({top:u,behavior:"smooth"})}h.classList.contains("is-open")&&(h.classList.remove("is-open"),document.body.classList.remove("menu-open"))})});function rt(){const t=document.querySelector("#btn");t&&t.addEventListener("click",()=>{const e=document.querySelector("#artists");e&&e.scrollIntoView({behavior:"smooth",block:"start"})})}document.addEventListener("DOMContentLoaded",()=>{rt()});
//# sourceMappingURL=index.js.map
