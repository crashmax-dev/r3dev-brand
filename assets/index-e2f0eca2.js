(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=`<svg xmlns="http://www.w3.org/2000/svg" width="107" height="35" fill="none">
  <path fill="var(--bg-badge, #fff)" d="M.5 13.768v8.4a8 8 0 0 0 8 8h70.592l-.492-.24a8 8 0 0 1-4.5-7.193V12.094a8 8 0 0 1 3.102-6.326H8.5a8 8 0 0 0-8 8Z"/>
  <path fill="var(--text-badge, #000)" d="M19.805 13.634v8.934h-1.792v-5.811l-2.393 5.811h-1.357l-2.406-5.811v5.811h-1.792v-8.934H12.1l2.841 6.643 2.842-6.643h2.022Zm1.311 5.363c0-.717.141-1.353.423-1.907.29-.555.678-.982 1.164-1.28a3.134 3.134 0 0 1 1.652-.448c.529 0 .99.106 1.382.32.401.213.721.482.96.806v-1.011h1.805v7.091h-1.805v-1.037a2.7 2.7 0 0 1-.96.832c-.401.214-.866.32-1.395.32a3.045 3.045 0 0 1-1.639-.46 3.298 3.298 0 0 1-1.164-1.293c-.282-.564-.423-1.208-.423-1.933Zm5.581.026c0-.436-.085-.807-.256-1.114a1.751 1.751 0 0 0-.691-.717 1.812 1.812 0 0 0-.935-.256c-.332 0-.64.081-.921.243a1.864 1.864 0 0 0-.691.717c-.171.307-.256.674-.256 1.1 0 .428.085.803.256 1.127.179.316.41.56.69.73.29.17.598.256.922.256.333 0 .645-.081.935-.243.29-.171.52-.41.691-.717.17-.316.256-.691.256-1.127Zm3.094-.026c0-.717.141-1.353.423-1.907a3.17 3.17 0 0 1 1.177-1.28 3.134 3.134 0 0 1 1.651-.448c.461 0 .9.102 1.319.307.418.196.75.46.998.793v-3.366h1.818v9.472h-1.818v-1.05a2.43 2.43 0 0 1-.934.845c-.401.214-.866.32-1.395.32a3.045 3.045 0 0 1-1.639-.46 3.263 3.263 0 0 1-1.177-1.293c-.282-.564-.423-1.208-.423-1.933Zm5.581.026c0-.436-.085-.807-.256-1.114a1.751 1.751 0 0 0-.691-.717 1.812 1.812 0 0 0-.935-.256c-.332 0-.64.081-.921.243a1.864 1.864 0 0 0-.691.717c-.171.307-.256.674-.256 1.1 0 .428.085.803.256 1.127.179.316.41.56.69.73.29.17.598.256.922.256.333 0 .645-.081.935-.243.29-.171.52-.41.691-.717.17-.316.256-.691.256-1.127Zm10.147-.154c0 .256-.017.486-.051.691h-5.184c.042.512.222.913.537 1.203.316.29.704.435 1.165.435.666 0 1.14-.285 1.421-.857h1.933a3.264 3.264 0 0 1-1.178 1.69c-.58.435-1.293.652-2.137.652a3.79 3.79 0 0 1-1.844-.448 3.298 3.298 0 0 1-1.267-1.293c-.299-.554-.448-1.194-.448-1.92 0-.733.15-1.378.448-1.932a3.125 3.125 0 0 1 1.255-1.28c.537-.299 1.156-.448 1.856-.448.674 0 1.275.145 1.804.435.538.29.952.704 1.242 1.241.299.53.448 1.14.448 1.83Zm-1.856-.512c-.009-.46-.175-.828-.5-1.1-.323-.283-.72-.423-1.19-.423-.443 0-.819.136-1.126.41-.299.264-.482.635-.55 1.113h3.366Zm8.006-1.843c.23-.342.546-.619.947-.832a2.97 2.97 0 0 1 1.395-.32 3.068 3.068 0 0 1 2.804 1.728c.29.546.435 1.181.435 1.907 0 .725-.145 1.37-.435 1.933-.282.554-.67.985-1.165 1.293a3.004 3.004 0 0 1-1.639.46c-.529 0-.994-.102-1.395-.307a2.773 2.773 0 0 1-.947-.82v1.012h-1.792v-9.472h1.792v3.418Zm3.75 2.483c0-.427-.09-.794-.268-1.1a1.814 1.814 0 0 0-1.613-.96c-.325 0-.632.084-.922.255a1.864 1.864 0 0 0-.691.717c-.17.316-.256.687-.256 1.114 0 .426.085.797.256 1.113.18.316.41.559.691.73.29.162.598.243.922.243a1.84 1.84 0 0 0 1.613-.986c.179-.316.268-.69.268-1.126Zm9.917-3.52-4.39 10.445h-1.908l1.536-3.533-2.841-6.912h2.01l1.83 4.953 1.856-4.953h1.907Z"/>
  <path fill="var(--bg-logo, #00a621)" d="M106.5 22.735V12.094a8 8 0 0 0-4.79-7.328l-8.2-3.592a8 8 0 0 0-6.42 0l-8.2 3.592a7.995 7.995 0 0 0-4.79 7.328v10.641a8 8 0 0 0 4.5 7.194l.492.24 7.708 3.75a8 8 0 0 0 7 0l8.2-3.99a8 8 0 0 0 4.5-7.194Z"/>
  <path fill="var(--text-logo, #fff)" d="M83.914 19.587a.41.41 0 0 0-.614.354v3.876a.41.41 0 0 0 .205.354l2.046 1.182a.41.41 0 0 0 .614-.355v-3.875a.41.41 0 0 0-.204-.355l-2.047-1.181ZM90.86 8.25l-.034.007c-.166.033-.339.067-.486.151l-6.835 3.947a.41.41 0 0 0-.205.354v3.167a.41.41 0 0 0 .205.355l2.046 1.181a.41.41 0 0 0 .614-.354v-2.789a.41.41 0 0 1 .205-.354l5.034-2.907a.378.378 0 0 1 .151-.05 1.434 1.434 0 0 1 1.462.882c.018.043.025.09.025.136v4.184a.41.41 0 0 1-.205.354l-3.806 2.198a.41.41 0 0 0 0 .71l5.28 3.048a.41.41 0 0 1 .205.354v2.647a.41.41 0 0 0 .204.355l1.883 1.087a.41.41 0 0 0 .614-.355v-5.483a.41.41 0 0 0-.204-.354l-2.252-1.3a.41.41 0 0 1 0-.709l.942-.543a.41.41 0 0 0 .204-.355v-5.39a4.227 4.227 0 0 0-.536-2.1 4.237 4.237 0 0 0-2.329-1.935 4.25 4.25 0 0 0-2.182-.14Z"/>
</svg>`,i=`:host {
  transition: transform 0.2s ease-in-out;
}

a:not(.visible) {
  display: none;
}

:host(:hover) {
  transform: scale(1.1);
}

@media (prefers-color-scheme: light) {
  :host {
    --bg-badge: #000;
    --text-badge: #fff;
  }
}
`;class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
      <style>${i}</style>
      <a target="_blank">${l}</a>
    `}connectedCallback(){if(!this.isShowBadge())return;const a=this.shadowRoot.querySelector("a");a.href=this.getAttribute("href")??"#",a.classList.add("visible")}isShowBadge(){const a=new URLSearchParams(location.search),o=this.getAttribute("key")??"utm_source",r=this.getAttribute("value")??"upwork",e=a.get(o);return!e||!r?!1:e===r}}customElements.define("r3-badge",n);
