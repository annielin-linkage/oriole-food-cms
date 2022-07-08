(()=>{"use strict";var e={1727:(e,t,r)=>{r(8964),r(702);var o=r(1957),n=r(1947),a=r(499),i=r(9835);function l(e,t,r,o,n,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const s=(0,i.aZ)({name:"App"});var c=r(1639);const d=(0,c.Z)(s,[["render",l]]),p=d;var u=r(3340),f=r(7363);const h=(0,u.h)((()=>{const e=(0,f.WB)();return e}));var m=r(8631);const g=[{path:"/",children:[{path:"",component:()=>Promise.all([r.e(736),r.e(387)]).then(r.bind(r,9387))},{path:"",component:()=>Promise.all([r.e(736),r.e(590)]).then(r.bind(r,2590)),children:[{path:"reprocessing",name:"reprocessing",component:()=>Promise.all([r.e(736),r.e(64),r.e(733)]).then(r.bind(r,1998)),meta:{headerClass:"bg-yellow-8"}},{path:"delivery_order",name:"delivery_order",component:()=>Promise.all([r.e(736),r.e(64),r.e(47)]).then(r.bind(r,6295)),meta:{headerClass:"bg-blue-4"}}]}]},{path:"/:catchAll(.*)*",redirect:"/"}],v=g,b=(0,u.BC)((function(){const e=m.r5,t=(0,m.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("")});return t}));async function w(e,t){const r=e(p);r.use(n.Z,t);const o="function"===typeof h?await h({}):h;r.use(o);const i=(0,a.Xl)("function"===typeof b?await b({store:o}):b);return o.use((({store:e})=>{e.router=i})),{app:r,store:o,router:i}}var y=r(4328),C=r(4486);const x={config:{},plugins:{Notify:y.Z,Dialog:C.Z}},P="";async function k({app:e,router:t,store:r},o){let n=!1;const a=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},i=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let c=0;!1===n&&c<o.length;c++)try{await o[c]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:l,publicPath:P})}catch(s){return s&&s.url?void i(s.url):void console.error("[Quasar] boot error:",s)}!0!==n&&(e.use(t),e.mount("#q-app"))}w(o.ri,x).then((e=>Promise.all([Promise.resolve().then(r.bind(r,3612)),Promise.resolve().then(r.bind(r,4136)),Promise.resolve().then(r.bind(r,2363)),Promise.resolve().then(r.bind(r,4864))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));k(e,r)}))))},4136:(e,t,r)=>{r.r(t),r.d(t,{api:()=>i,default:()=>l});var o=r(3340),n=r(9981),a=r.n(n);const i=a().create({baseURL:"https://api.example.com"}),l=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},2363:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var o=r(3340),n=r(4170);const a={ToUpperCase(e){return e.trim().toUpperCase()},ToProperCase(e){return e.trim().toLowerCase().replace(/\w\S*/g,(e=>e.replace(/^\w/,(e=>e.toUpperCase()))))},FormatDate(e,t){return n.ZP.formatDate(e,t)},ToDigitNumber(e){return e.toLocaleString()},NumberToPrice(e,t=2){return e?new Intl.NumberFormat("en-HK",{minimumFractionDigits:t,maximumFractionDigits:t}).format(e):"0.00"}},i=(0,o.xr)((({app:e})=>{e.config.globalProperties.$filters=a}))},4864:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var o={};r.r(o),r.d(o,{dataToBlob:()=>f,showAlert:()=>h,showConfirm:()=>m,validateEmail:()=>g});var n=r(3340),a=r(9981),i=r.n(a),l=r(7674),s=r(4409);const c={},d={logo:"logo.png",favicon:"favicon.ico",color:{}},p=Object.assign({},d);var u=r(4486);const f=(e,t)=>{const r=new Blob([e]),o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,document.body.appendChild(n),n.style.display="none",n.click(),n.remove(),window.URL.revokeObjectURL(r)},h=(e="",t,r)=>{const o={title:e,html:!0,message:'<div style="display: flex;align-items: center;"><svg t="1578909209339" style="flex-shrink: 0;" viewBox="0 0 1037 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10529" width="40" height="40"><path d="M512.869781 9.558668C234.941567 9.558668 9.624543 234.161109 9.624543 511.240755c0 277.079646 225.317024 501.682087 503.245238 501.682087 277.950545 0 503.245238-224.602441 503.245237-501.682087C1016.115018 234.161109 790.820325 9.558668 512.869781 9.558668z m288.646962 371.560948l-325.470329 324.465446a45.666334 45.666334 0 0 1-64.424144 0l-187.399452-186.818852a45.331373 45.331373 0 0 1 0-64.223168 45.666334 45.666334 0 0 1 64.424144 0l155.176214 154.7296 293.291754-292.376194a45.644004 45.644004 0 0 1 64.401813 0 45.309043 45.309043 0 0 1 0 64.223168z" fill="#548235" p-id="10530"></path></svg><span style="margin-left:16px;font-weight:bold;color:#000">'+t+"</span></div>",persistent:!0};"ERROR"===e&&(o.message='<div style="display: flex;align-items: center;"><svg t="1578909089954" style="flex-shrink: 0;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8404" width="40" height="40"><path d="M512 0A512 512 0 1 1 0 512 512 512 0 0 1 512 0z m219.648 665.1392L578.56 512l153.088-153.1392a47.7184 47.7184 0 0 0 0-66.56 47.2576 47.2576 0 0 0-66.56 0L512 445.44 358.912 292.3008a47.2576 47.2576 0 0 0-66.56 0 47.7184 47.7184 0 0 0 0 66.56L445.44 512l-153.088 153.1392a47.7184 47.7184 0 0 0 0 66.56 47.2576 47.2576 0 0 0 66.56 0L512 578.56l153.088 153.1392a47.104 47.104 0 0 0 66.56-66.56z" p-id="8405" fill="#ff0000"></path></svg><span style="margin-left:16px;font-weight:bold;color:#000">'+t+"</span></div>"),u.Z.create(o).onOk((()=>{r&&r()})).onCancel((()=>{})).onDismiss((()=>{}))},m=(e,t,r,o)=>{u.Z.create({title:e,html:!0,message:'<div style="display: flex;align-items: center;"><svg t="1578909297794" style="flex-shrink: 0;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11620" width="40" height="40"><path d="M512.333086 81.305771c-231.917 0-420.00068 188.082656-420.00068 420.00068 0 231.918024 188.083679 420.001703 420.00068 420.001703 231.918024 0 420.001703-188.083679 420.001703-420.001703C932.334789 269.38945 744.25111 81.305771 512.333086 81.305771L512.333086 81.305771 512.333086 81.305771M509.631558 795.2092c-34.180474 0-61.990866-27.225061-61.990866-60.7322 0-33.502022 27.712155-60.731176 61.990866-60.731176 34.175357 0 61.98575 27.228131 61.98575 60.731176C571.618331 767.983115 543.906176 795.2092 509.631558 795.2092L509.631558 795.2092 509.631558 795.2092M676.084591 451.584002c-12.163017 19.117406-37.947264 45.088918-77.530794 78.012771-20.470217 16.991999-33.212426 30.701233-38.139645 41.130769-4.92108 10.328229-7.240915 28.870538-6.759961 55.616692l-88.24481 0c-0.192382-12.649088-0.384763-20.377096-0.384763-23.176862 0-28.576849 4.728698-52.037167 14.190187-70.480214 9.461489-18.442024 28.385491-39.199791 56.678884-62.179155 28.290323-23.076578 45.281299-38.137599 50.78771-45.281299 8.495488-11.295254 12.836353-23.750937 12.836353-37.271882 0-18.826787-7.621585-34.947953-22.686698-48.463782-15.061021-13.422707-35.532261-20.182668-61.116963-20.182668-24.716938 0-45.381583 7.048533-61.987796 21.050432-16.607236 13.996782-30.896684 44.895513-34.277688 64.012919-3.186576 18.056238-90.178859 25.683962-89.116667-10.909467 1.060145-36.594453 20.084431-76.276221 52.716642-105.046474 32.638351-28.7723 75.506694-43.161009 128.510886-43.161009 55.81112 0 100.126418 14.58109 133.145439 43.736107 33.021068 29.158087 49.437969 63.049988 49.437969 101.765755C694.234973 412.18876 688.154487 432.465572 676.084591 451.584002L676.084591 451.584002 676.084591 451.584002M676.084591 451.584002 676.084591 451.584002z" p-id="11621" fill="#1296db"></path></svg><span style="margin-left:16px;font-weight:bold;color:#000">'+t+"</span></div>",ok:"YES",cancel:"NO",persistent:!0}).onOk((()=>{r&&r()})).onCancel((()=>{o&&o()})).onDismiss((()=>{}))},g=e=>/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e);var v=r(5140);const b=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=i(),e.config.globalProperties.$api=c,e.config.globalProperties.$system=p,e.config.globalProperties.$utils=o,e.config.globalProperties.$hooks=v,Object.keys(p.color).map((e=>(0,l.Z)(e,(0,s.get)(p.color,e))))}))},3612:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var o=r(3340),n=r(9991);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},l=(0,o.xr)((({app:e})=>{const t=(0,n.o)({locale:"en-US",messages:i});e.use(t)}))},5140:(e,t,r)=>{r.r(t),r.d(t,{useModelWrapper:()=>n});var o=r(9835);function n(e,t,r){return(0,o.Fl)({get:()=>e[r],set:e=>t(`update:${r}`,e)})}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,n,a]=e[d],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{47:"564b0816",64:"256229d5",387:"c6fd5d62",590:"1b73ec7c",733:"a50d20eb"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{47:"0f0295f8",143:"bf7f08b6",733:"75954e13",736:"42754dff"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="oriole-food-cms:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var p=c[d];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+a){l=p;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[n];var u=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,n.parentNode.removeChild(n),o(s)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),l=r.p+i;if(t(i,l))return n();e(o,l,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={47:1,733:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),l=new Error,s=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,l,s]=o,c=0;if(i.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var d=s(r)}for(t&&t(o);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},o=globalThis["webpackChunkoriole_food_cms"]=globalThis["webpackChunkoriole_food_cms"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(1727)));o=r.O(o)})();