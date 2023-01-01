// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterCosh=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,c=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var f,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(t,r)||c.call(t,r)?(f=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=f):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),p&&i&&i.call(t,r,n.set),t};var f=r;function l(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,n,e;if(null==t)return s.call(t);n=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return s.call(t)}return e=s.call(t),r?t[w]=n:delete t[w],e}:function(t){return s.call(t)},g=Boolean.prototype.toString;var A=b();function h(t){return"object"==typeof t&&(t instanceof Boolean||(A?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function _(t){return p(t)||h(t)}function O(){return new Function("return this;")()}l(_,"isPrimitive",p),l(_,"isObject",h);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="object"==typeof global?global:null;var T=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),F=T.document&&T.document.childNodes,I=Int8Array;function N(){return/^\s*function\s*([^(]*)/i}var P=/^\s*function\s*([^(]*)/i;l(N,"REGEXP",P);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function x(t){return null!==t&&"object"==typeof t}function G(t){var r,n,e,o;if(("Object"===(n=j(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=P.exec(e.toString()))return r[1]}return x(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(x,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!V(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(x));var H="function"==typeof y||"object"==typeof I||"function"==typeof F?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function B(t){return"function"===H(t)}function L(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&B(t.next)}function M(t){return"number"==typeof t}var C=Number,W=C.prototype.toString;var k=b();function Y(t){return"object"==typeof t&&(t instanceof C||(k?function(t){try{return W.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function R(t){return M(t)||Y(t)}l(R,"isPrimitive",M),l(R,"isObject",Y);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var q,z=Object.getPrototypeOf;q=B(Object.getPrototypeOf)?z:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var D=q;var J=Object.prototype;function K(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),D(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&B(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&B(r.isPrototypeOf)&&(r===J||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function Q(t,r){return K(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function Z(t,r,n){var e,o,u,i;if(!L(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!B(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Q(e,n)))throw u;return l(o={},"next",a),l(o,"return",c),X&&B(t[X])&&l(o,X,f),o;function a(){var n;return i?{done:!0}:(n=t.next()).done?(i=!0,n):{value:M(n.value)?r(n.value):e.invalid,done:!1}}function c(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function f(){return Z(t[X](),r,e)}}function $(t){return t!=t}var tt=Math.floor,rt=Math.ceil;function nt(t){return t<0?rt(t):tt(t)}var et=C.NEGATIVE_INFINITY,ot=Number.POSITIVE_INFINITY;function ut(t){return t===ot||t===et}var it="function"==typeof Uint32Array;var at="function"==typeof Uint32Array?Uint32Array:null;var ct,ft="function"==typeof Uint32Array?Uint32Array:void 0;ct=function(){var t,r,n;if("function"!=typeof at)return!1;try{r=new at(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(it&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?ft:function(){throw new Error("not implemented")};var lt=ct,yt="function"==typeof Float64Array;var pt="function"==typeof Float64Array?Float64Array:null;var vt,bt="function"==typeof Float64Array?Float64Array:void 0;vt=function(){var t,r,n;if("function"!=typeof pt)return!1;try{r=new pt([1,3.14,-3.14,NaN]),n=r,t=(yt&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?bt:function(){throw new Error("not implemented")};var st=vt,dt="function"==typeof Uint8Array;var mt="function"==typeof Uint8Array?Uint8Array:null;var wt,jt="function"==typeof Uint8Array?Uint8Array:void 0;wt=function(){var t,r,n;if("function"!=typeof mt)return!1;try{r=new mt(r=[1,3.14,-3.14,256,257]),n=r,t=(dt&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?jt:function(){throw new Error("not implemented")};var gt=wt,At="function"==typeof Uint16Array;var ht="function"==typeof Uint16Array?Uint16Array:null;var _t,Ot="function"==typeof Uint16Array?Uint16Array:void 0;_t=function(){var t,r,n;if("function"!=typeof ht)return!1;try{r=new ht(r=[1,3.14,-3.14,65536,65537]),n=r,t=(At&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Ot:function(){throw new Error("not implemented")};var Ut,St={uint16:_t,uint8:gt};(Ut=new St.uint16(1))[0]=4660;var Et,Tt,Ft=52===new St.uint8(Ut.buffer)[0];!0===Ft?(Et=1,Tt=0):(Et=0,Tt=1);var It={HIGH:Et,LOW:Tt},Nt=new st(1),Pt=new lt(Nt.buffer),Vt=It.HIGH,xt=It.LOW;function Gt(t,r,n,e){return Nt[0]=t,r[e]=Pt[Vt],r[e+n]=Pt[xt],r}function Ht(t){return Gt(t,[0,0],1,0)}l(Ht,"assign",Gt);var Bt,Lt,Mt=!0===Ft?1:0,Ct=new st(1),Wt=new lt(Ct.buffer);function kt(t){return Ct[0]=t,Wt[Mt]}!0===Ft?(Bt=1,Lt=0):(Bt=0,Lt=1);var Yt={HIGH:Bt,LOW:Lt},Rt=new st(1),Xt=new lt(Rt.buffer),qt=Yt.HIGH,zt=Yt.LOW;function Dt(t,r){return Xt[qt]=t,Xt[zt]=r,Rt[0]}var Jt=[0,0];function Kt(t,r,n,e){return $(t)||ut(t)?(r[e]=t,r[e+n]=0,r):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(r[e]=4503599627370496*t,r[e+n]=-52,r):(r[e]=t,r[e+n]=0,r)}l((function(t){return Kt(t,[0,0],1,0)}),"assign",Kt);var Qt=[0,0],Zt=[0,0];function $t(t,r){var n,e,o,u,i,a;return 0===r||0===t||$(t)||ut(t)?t:(Kt(t,Qt,1,0),r+=Qt[1],r+=function(t){var r=kt(t);return(r=(2146435072&r)>>>20)-1023|0}(t=Qt[0]),r<-1074?(o=0,u=t,Ht.assign(o,Jt,1,0),i=Jt[0],i&=2147483647,a=kt(u),Dt(i|=a&=2147483648,Jt[1])):r>1023?t<0?et:ot:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Ht.assign(t,Zt,1,0),n=Zt[0],n&=2148532223,e*Dt(n|=r+1023<<20,Zt[1])))}var tr=1.4426950408889634,rr=1/(1<<28);function nr(t){var r;return $(t)||t===ot?t:t===et?0:t>709.782712893384?ot:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<rr?1+t:function(t,r,n){var e,o,u,i;return $t(1-(r-(e=t-r)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-t),n)}(t-.6931471803691238*(r=nt(t<0?tr*t-.5:tr*t+.5)),1.9082149292705877e-10*r,r)}function er(t){return $(t)?t:(t<0&&(t=-t),t>21?nr(t)/2:(nr(t)+nr(-t))/2)}return function(t){return Z(t,er)}}));
//# sourceMappingURL=index.js.map
