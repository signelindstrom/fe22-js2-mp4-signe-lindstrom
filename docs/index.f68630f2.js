function e(e,r,n,t){Object.defineProperty(e,r,{get:n,set:t,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=r.parcelRequire9b8f;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},r.parcelRequire9b8f=o),o.register("27Lyk",(function(r,n){var t,o;e(r.exports,"register",(()=>t),(e=>t=e)),e(r.exports,"resolve",(()=>o),(e=>o=e));var i={};t=function(e){for(var r=Object.keys(e),n=0;n<r.length;n++)i[r[n]]=e[r[n]]},o=function(e){var r=i[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),o("27Lyk").register(JSON.parse('{"lQ5gF":"index.f68630f2.js","31hqD":"accept.c842a2a6.png"}'));const i=document.querySelector(".display"),l=document.querySelectorAll("button"),a=document.querySelector("img");var c;c=new URL(o("27Lyk").resolve("31hqD"),import.meta.url).toString();const s=new URL(c);let u="",f="",d="";l.forEach((e=>{e.addEventListener("click",(()=>{let r=e.textContent;"C"===r?(i.innerText="",u="",f="",d="",a.src=""):"="===r?(!function(){const e=parseInt(u),r=parseInt(f);switch(d){case"+":i.innerText=(e+r).toString();break;case"-":i.innerText=(e-r).toString();break;case"*":i.innerText=(e*r).toString();break;case"/":i.innerText=(e/r).toString()}u="",f="",d=""}(),a.src=s.href):"+"===r||"-"===r||"*"===r||"/"===r?(d=r,u=i.innerText,f="",i.innerText=r):""===d?(u+=r,i.innerText=u):(f+=r,i.innerText=f)}))}));
//# sourceMappingURL=index.f68630f2.js.map
