(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5041:function(e,t,n){Promise.resolve().then(n.bind(n,7427)),Promise.resolve().then(n.bind(n,9296)),Promise.resolve().then(n.t.bind(n,2471,23)),Promise.resolve().then(n.t.bind(n,8788,23))},3453:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return a},default:function(){return l}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let a=r[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?o[a]=!!n[e]:o.setAttribute(a,n[e])}let{children:a,dangerouslySetInnerHTML:l}=n;return l?o.innerHTML=l.__html||"":a&&(o.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),o}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function l(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),l=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<l;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&i.push(n)}let u=t.map(o).filter(e=>{for(let t=0,n=i.length;t<n;t++){let n=i[t];if(a(n,e))return i.splice(t,1),!1}return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(l-i.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8043:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return m},initScriptLoader:function(){return g},default:function(){return h}});let r=n(1024),o=n(8533),a=r._(n(4887)),l=o._(n(2265)),i=n(1330),s=n(3453),u=n(8043),c=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(a.default.preinit){e.forEach(e=>{a.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},y=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:a,children:l="",strategy:i="afterInteractive",onError:u,stylesheets:y}=e,m=n||t;if(m&&d.has(m))return;if(c.has(t)){d.add(m),c.get(t).then(r,u);return}let g=()=>{o&&o(),d.add(m)},_=document.createElement("script"),h=new Promise((e,t)=>{_.addEventListener("load",function(t){e(),r&&r.call(this,t),g()}),_.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(a?(_.innerHTML=a.__html||"",g()):l?(_.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",g()):t&&(_.src=t,c.set(t,h)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();_.setAttribute(e,r)}"worker"===i&&_.setAttribute("type","text/partytown"),_.setAttribute("data-nscript",i),y&&p(y),document.body.appendChild(_)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>y(e))}):y(e)}function g(e){e.forEach(m),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}()}function _(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:s="afterInteractive",onError:c,stylesheets:f,...p}=e,{updateScripts:m,scripts:g,getIsSsr:_,appDir:h,nonce:b}=(0,l.useContext)(i.HeadManagerContext),v=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;v.current||(o&&e&&d.has(e)&&o(),v.current=!0)},[o,t,n]);let x=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!x.current&&("afterInteractive"===s?y(e):"lazyOnload"===s&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>y(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>y(e))})),x.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(m?(g[s]=(g[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:c,...p}]),m(g)):_&&_()?d.add(t||n):_&&!_()&&y(e)),h){if(f&&f.forEach(e=>{a.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(a.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),l.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),l.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===s&&n&&a.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(_,"__nextScript",{value:!0});let h=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9296:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(7437),o=n(2265);function a(){let[e,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=function(e,t){let n=localStorage.getItem(e);return null!==n&&"undefined"!==n?JSON.parse(n):null}("cookie_consent",0);t(e)},[t]),(0,o.useEffect)(()=>{let t=e?"granted":"denied";window.gtag("consent","update",{analytics_storage:t}),localStorage.setItem("cookie_consent",JSON.stringify(e)),console.log("Cookie Consent: ",e)},[e]),(0,r.jsxs)("div",{className:" ".concat(null!=e?"hidden":"flex"," my-10 mx-auto max-w-max md:max-w-screen-sm\n                        fixed bottom-0 left-0 right-0 \n                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  \n                         bg-gray-600 rounded-lg shadow text-white"),children:[(0,r.jsx)("div",{className:"text-center",children:(0,r.jsxs)("p",{children:["We use ",(0,r.jsx)("span",{className:"font-bold",children:"cookies"})," on our site."]})}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)("button",{className:"px-5 py-2 text-gray-300 rounded-md border-gray-900",onClick:()=>t(!1),children:"Decline"}),(0,r.jsx)("button",{className:"bg-green-500 px-5 py-2 text-white rounded-lg",onClick:()=>t(!0),children:"Allow Cookies"})]})]})}},7427:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7437),o=n(8475),a=n.n(o),l=n(4033),i=n(2265);let s=(e,t)=>{window.gtag("config",e,{page_path:t})};function u(e){let{GA_MEASUREMENT_ID:t}=e,n=(0,l.usePathname)(),o=(0,l.useSearchParams)();return(0,i.useEffect)(()=>{let e=n+o.toString();s(t,e)},[n,o,t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)}),(0,r.jsx)(a(),{id:"google-analytics",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n\n                gtag('consent', 'default', {\n                    'analytics_storage': 'denied'\n                });\n                \n                gtag('config', '".concat(t,"', {\n                    page_path: window.location.pathname,\n                });\n                ")}})]})}},2471:function(){},8788:function(e){e.exports={style:{fontFamily:"'__Inter_20951f', '__Inter_Fallback_20951f'",fontStyle:"normal"},className:"__className_20951f"}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:c,props:a,_owner:i.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},7437:function(e,t,n){"use strict";e.exports=n(622)},4033:function(e,t,n){e.exports=n(8165)},8475:function(e,t,n){e.exports=n(3015)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=5041)}),_N_E=e.O()}]);