!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var r,i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,v=d||s||Function("return this")(),m=Object.prototype.toString,b=Math.max,y=Math.min,g=function(){return v.Date.now()};function p(e,t,n){var r,i,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function m(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){return c=e,f=setTimeout(w,t),d?m(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function w(){var e=g();if(S(e))return T(e);f=setTimeout(w,function(e){var n=t-(e-l);return s?y(n,u-(e-c)):n}(e))}function T(e){return f=void 0,v&&r?m(e):(r=i=void 0,a)}function h(){var e=g(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return p(l);if(s)return f=setTimeout(w,t),m(l)}return void 0===f&&(f=setTimeout(w,t)),a}return t=O(t)||0,j(n)&&(d=!!n.leading,u=(s="maxWait"in n)?b(O(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},h.flush=function(){return void 0===f?a:T(g())},h}function j(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var r=f.test(t);return r||l.test(t)?c(t.slice(2),r?2:8):a.test(t)?NaN:+t}r=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return j(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var S,w=document.querySelector('[name="email"]'),T=document.querySelector('[name="message"]'),h=document.querySelector(".feedback-form"),N="feedback-form-state";!function(){var e=localStorage.getItem(N),t=JSON.parse(e);if(!t)return;w.value=t.email,T.value=t.message}(),h.addEventListener("submit",(function(e){e.preventDefault(),console.log(x),e.currentTarget.reset(),localStorage.removeItem(N)})),h.addEventListener("input",e(r)((function(e){x[w.name]=w.value,x[T.name]=T.value,localStorage.setItem(N,JSON.stringify(x))}),500));var x=(S={},e(n)(S,w.name,w.value),e(n)(S,T.name,T.value),S);localStorage.setItem(N,JSON.stringify(x))}();
//# sourceMappingURL=03-feedback.b7f94950.js.map
