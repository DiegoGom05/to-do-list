(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(81),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([e.id,":root{\n    --outer: #322E42;\n    --side: #605C72;\n    --content: #ADA9BB;\n}\n\nbody{\n    margin: 0;\n}\n\n.container{\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 2fr 10fr 1fr;\n    \n    height: 100vh;\n}\n\nheader{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 72px;\n    grid-row: 1;\n    grid-column: 1/3;\n    background-color:var(--outer);\n    color: white;\n}\n\n\n.content{\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-row: 2/3;\n    grid-column: 1/3;\n    \n} \n\n.sidebar {\n    grid-template-columns: 1;\n    grid-template-rows: 2/3;\n    background-color: var(--side);\n    color: white;\n}\n\n.tasks {\n    background-color: var(--content);\n\n}\n\nfooter{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color:var(--outer);\n    color: white;\n    grid-column: 1/3;\n}\n\n.inbox{\n\n    display: flex;\n    flex-direction: column;\n    margin: 30px 10px 10px 10px;\n    gap: 16px;\n}\n\n.projects-list {\n    display: flex;\n    flex-direction: column;\n    flex-direction: column;\n    margin:  20px 10px;\n    \n}\n\nbutton{\n    background: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n.active{\n    background-color: #94B0B3;\n}\n\n.title{\n    margin: 25px;\n}\n\n.add-project{\n    display: none;\n    margin-top: 20px;\n}\n\n.add-project.active{\n    background-color: #605C72;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.add{\n    margin-top: 10px;\n    background-color: #ADA9BB;\n    width: 150px;\n}\n \n\n.projectElement{\n    background-color: var(--content);\n    margin-top: 8px;\n}\n\n\n.task-btn {\n    margin-left: 50px;\n    width: 600px;\n    text-align: left;\n}\n\n.add-task-popup {\n    display: none;\n    \n}\n\n\n.add-task-popup.active{\n    display: flex;\n    width: 500px;\n    margin-left: 50px;\n    flex-direction: column;\n     \n}\n\n.add-task{\n    margin-top: 10px;\n    border: solid black 2px;\n     \n}\n\n.hide {\n    display: none;\n}\n\n.task{\n    margin: 15px 0 10px 60px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.task::before {\n    content: '\\2022';  \n    margin-right: 8px;  \n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),c=t.n(a),i=t(565),s=t.n(i),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=document.querySelector(".task-btn"),g=document.querySelector(".add-task"),h=document.querySelector(".add-task-popup");let y="";function x(e,n,t){const o=document.querySelector(".tasks-list");if(o.innerHTML="",void 0===t)n.forEach((n=>{const t=document.createElement("div");t.innerHTML=`<strong>Title: </strong>${n.Title} <strong>Date due: </strong> ${n.Date} <strong>Priority: </strong> ${n.priorityLevel}`,t.classList.add("task");const r=document.createElement("input");r.type="checkbox",r.addEventListener("change",(function(){t.style.textDecoration="none",r.checked&&e.done(t)})),t.appendChild(r),o.appendChild(t)}));else switch(t){case"Inbox":D.forEach((n=>{n.todos.forEach((n=>{const t=document.createElement("div");t.innerHTML=`<strong>Title: </strong>${n.Title} <strong>Date due: </strong> ${n.Date} <strong>Priority: </strong> ${n.priorityLevel}`,t.classList.add("task");const r=document.createElement("input");r.type="checkbox",r.addEventListener("change",(function(){t.style.textDecoration="none",r.checked&&e.done(t)})),t.appendChild(r),o.appendChild(t)}))}));break;case"Today":D.forEach((n=>{n.todos.forEach((n=>{if(function(e){const n=new Date,t=new Date(e);return n.setHours(0,0,0,0),t.setHours(0,0,0,0),t.setDate(t.getDate()+1),t.getTime()===n.getTime()}(n.Date)){const t=document.createElement("div");t.innerHTML=`<strong>Title: </strong>${n.Title} <strong>Date due: </strong> ${n.Date} <strong>Priority: </strong> ${n.priorityLevel}`,t.classList.add("task");const r=document.createElement("input");r.type="checkbox",r.addEventListener("change",(function(){t.style.textDecoration="none",r.checked&&e.done(t)})),t.appendChild(r),o.appendChild(t)}}))}));break;case"Week":D.forEach((n=>{n.todos.forEach((n=>{if(function(e){const n=new Date,t=n.getDay(),o=new Date(n);o.setDate(n.getDate()-t);const r=new Date(o);return r.setDate(o.getDate()+6),e>=o&&e<=r}(new Date(n.Date))){const t=document.createElement("div");t.innerHTML=`<strong>Title: </strong>${n.Title} <strong>Date due: </strong> ${n.Date} <strong>Priority: </strong> ${n.priorityLevel}`,t.classList.add("task");const r=document.createElement("input");r.type="checkbox",r.addEventListener("change",(function(){t.style.textDecoration="none",r.checked&&e.done(t)})),t.appendChild(r),o.appendChild(t)}}))}))}}const k=document.querySelector(".add-project"),b=document.querySelector(".add"),L=document.querySelector(".projects-list");let E=1,D=[];function T(){const e=document.querySelector(".title");e.innerHTML=C,e.style.fontWeight="700",e.style.fontSize="36px",document.querySelector(".task-btn").classList.remove("hide"),D.forEach((e=>{e.name==C&&(y=e.todos)})),x(void 0,y,void 0)}const w=document.querySelector(".task-btn"),S=document.querySelectorAll(".btn");let C="Inbox";S.forEach((e=>{e.addEventListener("mouseover",(()=>{S.forEach((e=>{e.classList.remove("active")})),e.classList.add("active")})),e.addEventListener("mouseout",(()=>{e.classList.remove("active")})),e.addEventListener("click",(()=>{!function(e){const n=document.querySelector(".title");switch(e){case"Projects":!function(){const e=document.querySelector("#projectName");function n(){const n=e.value;if(e.value="",n){const e={id:`project${E}`,name:n,todos:[]};D.push(e),E++;const t=document.createElement("button");t.innerText=`${e.name}`,t.id=e.id,t.classList="projectElement",L.appendChild(t),document.querySelectorAll(".projectElement").forEach((e=>{e.removeEventListener("click",T),e.addEventListener("click",(()=>{C=e.innerText,T()}))}))}k.classList.remove("active")}k.classList.add("active"),b.removeEventListener("click",n),b.addEventListener("click",n)}();break;case"Inbox":case"Today":case"Week":n.innerHTML=e,n.style.fontWeight="700",n.style.fontSize="36px",x(void 0,y,e)}}(e.id),w.classList.contains("hide")||w.classList.add("hide")}))})),w.addEventListener("mouseover",(()=>{w.classList.add("active")})),w.addEventListener("mouseout",(()=>{w.classList.remove("active")})),w.addEventListener("click",(()=>{!function(){h.classList.add("active"),v.classList.add("hide");const e=function(){const n=document.querySelector(".input-add-task-popup").value,t=document.getElementById("taskDate").value,o=document.querySelectorAll('input[name="priority"]');let r;for(const e of o)if(e.checked){r=e.value;break}n&&""!==n&&function(e,n,t){const o={Title:e,Date:n,priorityLevel:t,done:function(e){e.style.textDecoration="line-through"}};D.forEach((e=>{e.name==C&&(e.todos.push(o),y=e.todos)})),x(o,y,void 0)}(n,t,r),g.removeEventListener("click",e),h.classList.remove("active"),v.classList.remove("hide")};g.addEventListener("click",e)}()}))})()})();