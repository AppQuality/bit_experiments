if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./service-worker.js",["./workbox-430d7aca"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/index.html",revision:"e73e87c16b4cd14780b8d169d965d4ee"},{url:"/static/css/318.91647372.css",revision:null},{url:"/static/js/318.00f64e2c.js",revision:null},{url:"/static/js/318.00f64e2c.js.LICENSE.txt",revision:"7b8f71e5607db479410937bd14e4321b"},{url:"/static/js/main.6af8d9dd.js",revision:null},{url:"/static/js/runtime-main.a5d2428d.js",revision:null}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("public/index.html"),{denylist:[/^\/_/,/\/[^/?]+\.[^/]+$/]}))}));
