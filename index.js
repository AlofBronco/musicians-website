import{a as p}from"./assets/vendor-BbYF_8OW.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const g="https://sound-wave.b.goit.study/api",h="/artists";function u(e=1){const r={limit:8,page:e};return p.get(`${g}${h}`,{params:r}).then(i=>i.data).catch(i=>{throw console.error("Error fetching artists:",i),i})}const l=document.querySelector(".load-more-btn");function y({_id:e,genres:r,strArtist:i,strBiographyEN:o,strArtistThumb:t}){return`<li class="artists-item">
        <img class="artists-img" src="${t}" alt="${i}" width="288"/>
        <ul class="artists-genres">${r.map(s=>`<li class="artists-genres-item"><p class="artists-genres-text">${s}</p></li>`).join(`
`)}</ul>
                  <h3 class="artsits-name">${i}</h3>
        <p class="artists-descr">${o}</p>
        <button class="learn-btn" type="button" id="${e}">Learn More<svg class="learn-more-svg" width="24" height="24">
        <use href="/img/sprite.svg#icon-triangle-right"></use>
      </svg></button>
      </li>`}function d(e){return e.map(y).join(`
`)}function L(){l.classList.remove("hidden")}function b(){l.classList.add("hidden")}function f(e,r){if(e<r){L();return}else b()}l.addEventListener("click",v);let n=1,c=1;const m=document.querySelector(".artists-gallery");u(n).then(e=>{const r=d(e.artists);c=Math.ceil(e.totalArtists/e.limit),m.insertAdjacentHTML("beforeend",r),f(n,c)});function v(){n++,u(n).then(e=>{const r=d(e.artists);m.insertAdjacentHTML("beforeend",r),f(n,c)})}
//# sourceMappingURL=index.js.map
