if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,c,i)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const t={uri:location.origin+r.slice(1)};return Promise.all(c.map(r=>{switch(r){case"exports":return s;case"module":return t;default:return e(r)}})).then(e=>{const r=i(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"about.html",revision:"d2d95d67450c406f2c0aac0ef9aa8fd1"},{url:"app.js",revision:"c24e28f8370626baa4aca04b8560acad"},{url:"helpers.js",revision:"3b8657ae9ac1fcc77cbb5f1a3b0d0887"},{url:"icon.png",revision:"93944143dc8d7f9b3da5ffc7c7bc1e4d"},{url:"index.html",revision:"ac540245b50434e65ca61c6c77f1b1ec"},{url:"manifest.webmanifest",revision:"c6ace11beaa9715d3c269cca2a72c7b2"},{url:"style.css",revision:"0588670e11067d3e0e4af057e8ee80bb"}],{})}));
//# sourceMappingURL=sw.js.map
