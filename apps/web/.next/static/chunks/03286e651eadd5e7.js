(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,445481,e=>{"use strict";let t,i,a;var r=e.i(664211),n=Object.create,s=Object.defineProperty,o=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,d=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=function(e,t){return function(){return e&&(t=e(e=0)),t}},h=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};function m(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):m(e,t)}var p=c(function(){p()});function b(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var g=c(function(){}),f=h(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),E=h(function(e,t){function i(e,t){if(!m(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}p(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),y=h(function(e,t){function i(e,t){if(!m(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}p(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),_=h(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),T=h(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),k=h(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),A=h(function(e,t){g(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"<!--"+t.data+"-->";default:var n,s,o;return s=[],o=(n=t).tagName,"http://www.w3.org/1999/xhtml"===n.namespaceURI&&(o=o.toLowerCase()),s.push("<"+o+function(e){var t=[];for(var i in e)(function(e,t){var i=b(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(n)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(n)),i.indexOf(o)>-1?s.push(" />"):(s.push(">"),n.childNodes.length?s.push.apply(s,n.childNodes.map(e)):n.textContent||n.innerText?s.push(r(n.textContent||n.innerText)):n.innerHTML&&s.push(n.innerHTML),s.push("</"+o+">")),s.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),w=h(function(e,t){p();var i=f(),a=_(),r=T(),n=k(),s=A(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!m(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),S=h(function(e,t){p();var i=w();function a(e){if(!m(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),I=h(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),C=h(function(e,t){p();var i=f(),a=E(),r=y(),n=w(),s=S(),o=I(),l=_(),d=T(),u=k();function c(){if(!m(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),R=h(function(e,t){t.exports=new(C())}),L=h(function(t,i){var a,r=e.g,n=R();"undefined"!=typeof document?a=document:(a=r["__GLOBAL_DOCUMENT_CACHE@4"])||(a=r["__GLOBAL_DOCUMENT_CACHE@4"]=n),i.exports=a});function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function x(e,t){if(e){if("string"==typeof e)return M(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return M(e,t)}}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||x(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},O=function(){var e=N.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())},P=function(){if("function"==typeof(null==(e=N.crypto)?void 0:e.getRandomValues)){i=new Uint8Array(32),N.crypto.getRandomValues(i);for(var e,t,i,a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=16*Math.random()|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t="x"===e?i[n]:3&i[n]|8;return n++,t.toString(16)});var s=O(),o=null==s?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},U=function(){return("000000"+(0x81bf1000*Math.random()|0).toString(36)).slice(-6)},H=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=U()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},W=function(e){e&&void 0!==e.nodeName?e=H(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function B(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var $=function(e){var t,i,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,B(o)),d=(i=console.info).bind.apply(i,B(o)),u=(a=console.debug).bind.apply(a,B(o)),c=(r=console.warn).bind.apply(r,B(o)),h=(n=console.error).bind.apply(n,B(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>0))return l.apply(void 0,B(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>1))return u.apply(void 0,B(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>2))return d.apply(void 0,B(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>3))return c.apply(void 0,B(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>4))return h.apply(void 0,B(t))},get level(){return m},set level(v){v!==this.level&&(m=null!=v?v:s)}}}("[mux]");function q(){return"1"===(N.doNotTrack||N.navigator&&N.navigator.doNotTrack)}function V(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t){if(!m(e,t))throw TypeError("Cannot call a class as a function")}function K(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function j(e,t,i){return t&&K(e.prototype,t),i&&K(e,i),e}function G(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t,i){return(z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Y(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(i||e):r.value}})(e,t,i||e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}function X(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var i,a=Y(e);return i=t?Reflect.construct(a,arguments,Y(this).constructor):a.apply(this,arguments),i&&("object"===b(i)||"function"==typeof i)?i:V(this)}}p(),g();var J=function(e){return ee(e)[0]},ee=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},et=function(){var e=N.performance;return void 0!==(e&&e.timing)},ei=function(){var e=N.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},ea=function(){var e=N.performance,t=e&&e.timing;return t&&t.navigationStart};function er(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function en(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){G(e,t,i[t])})}return e}function es(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var eo=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],el=["x-cdn","content-type"].concat(eo);function ed(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(el.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function eu(e){if(e){var t=eo.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var ec=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},eh=["addtrack","removetrack","change"],em=function(e,t){try{if(e&&t in e){var i,a=e[t];if(a&&"object"==typeof a&&"length"in a&&"number"==typeof a.length&&(i=a)&&"object"==typeof i&&"addEventListener"in i&&"function"==typeof i.addEventListener&&"removeEventListener"in i&&"function"==typeof i.removeEventListener)return a}}catch(e){$.warn("Unable to access `"+t+"` on the media element.",e)}},ep=function(e,t,i){if(!(e.readyState<1))return Array.prototype.find.call(t,i)||null},ev=function(e,t,i,a){var r=em(e,t);if(r){var n,s=function(){try{var s=ep(e,r,i);void 0!==s&&s!==n&&(n=s,a(n))}catch(e){$.warn("Exception while checking `"+t+"` for changes.",e)}},o=function(){try{e.removeEventListener("loadedmetadata",s),e.removeEventListener("emptied",s),eh.forEach(function(e){return r.removeEventListener(e,s)})}catch(e){$.warn("Unable to stop monitoring `"+t+"`.",e)}};try{eh.forEach(function(e){return r.addEventListener(e,s)}),e.addEventListener("loadedmetadata",s),e.addEventListener("emptied",s)}catch(e){$.warn("Unable to monitor `"+t+"`.",e),o();return}return{refresh:s,destroy:o}}},eb=function(e){switch(e){case 1:return"mono";case 2:return"stereo";case 6:return"5.1";case 8:return"7.1"}return String(e)},eg=function(e){if(!e)return{player_audio_track_enabled:!1};var t,i,a={player_audio_track_enabled:!0};return e.label&&(a.player_audio_track_name=e.label),e.language&&(a.player_audio_track_language=e.language),null!=(t=e.configuration)&&t.codec&&(a.player_audio_track_codec=e.configuration.codec),null!=(i=e.configuration)&&i.numberOfChannels&&(a.player_audio_track_channels=eb(e.configuration.numberOfChannels)),a},ef=function(e){return e.enabled},eE=function(e){var t=em(e,"audioTracks");if(t){var i=ep(e,t,ef);return void 0===i?void 0:eg(i)}if("mozHasAudio"in e&&"boolean"==typeof e.mozHasAudio)return{player_audio_track_enabled:e.mozHasAudio}},ey=function(e){var t=e.mediaElement,i=e.onChange;return ev(t,"audioTracks",ef,function(e){return i(eg(e))})},e_=function(e){switch(e){case"captions":return"cc";case"subtitles":case"forced":return"subtitles"}},eT=function(e){return"showing"===e.mode&&void 0!==e_(e.kind)},ek=function(e,t){if(Array.prototype.some.call(t.querySelectorAll("track"),function(t){return t.track===e}))return"webvtt"},eA=function(e,t){if(!e)return{player_text_track_enabled:!1};var i={player_text_track_enabled:!0},a=e_(e.kind);a&&(i.player_text_track_type=a);var r=ek(e,t);return r&&(i.player_text_track_format=r),e.label&&(i.player_text_track_name=e.label),e.language&&(i.player_text_track_language=e.language),i},ew=function(e){var t=em(e,"textTracks");if(t){var i=ep(e,t,eT);if(void 0!==i)return eA(i,e)}},eS=function(e){var t=e.mediaElement,i=e.onChange;return ev(t,"textTracks",eT,function(e){return i(eA(e,t))})},eI=function(e,t){var i=Object.keys(e),a=Object.keys(t);return i.length===a.length&&i.every(function(i){return Object.prototype.hasOwnProperty.call(t,i)&&e[i]===t[i]})},eC=function(e){if(e){if((e=String(e)).endsWith("/JOC"))return"atmos";var t=parseInt(e,10);return String(t)===e?eb(t):e}},eR=function(e){if(e.length)return e[0].player_audio_track_enabled?e.reduce(function(e,t){return en({},t,e)}):{player_audio_track_enabled:!1}},eL=function(e){var t,i={player_audio_track_enabled:!0};e.name&&(i.player_audio_track_name=e.name),e.lang&&(i.player_audio_track_language=e.lang),e.audioCodec&&(i.player_audio_track_codec=e.audioCodec);var a=e.channels||(null==(t=e.attrs)?void 0:t.CHANNELS),r=a&&eC(a);return r&&(i.player_audio_track_channels=r),i},eM=["mp4a","ac-3","ec-3","ac-4","opus","flac","alac"],ex=function(e){var t,i,a={player_audio_track_enabled:!0};if(e.codec){var r="audio"===e.id?e.codec:e.codec.split(",").map(function(e){return e.trim()}).find(function(e){return -1!==eM.indexOf(e.slice(0,4).toLowerCase())});r&&(a.player_audio_track_codec=r)}return null!=(i=e.metadata)&&i.channelCount&&(a.player_audio_track_channels=eb(null==(t=e.metadata)?void 0:t.channelCount)),a},eD=function(e){var t=e.find(function(e){return e.audio});if(t)return t.audio;var i=e.find(function(e){return e.audiovideo});return null==i?void 0:i.audiovideo},eN=function(e,t){var i=!1,a=!0,r=!1,n=void 0;try{for(var s,o=["player_audio_track_name","player_audio_track_language"][Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var l=s.value,d=e[l],u=t[l];if(d&&u){if(d!==u)return!1;i=!0}}}catch(e){r=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw n}}return i},eO=function(){function e(t){var i=t.hls,a=t.Hls,r=t.onAudioTrackChange,n=this;F(this,e),G(this,"hls",void 0),G(this,"audioSwitchIsPlayheadBased",!1),G(this,"listeners",[]),G(this,"onAudioTrackChange",void 0),G(this,"previousEvent",void 0),G(this,"transition",void 0),this.onAudioTrackChange=r;var s=D(String(null==a?void 0:a.version).split("."),2),o=s[0],l=s[1];if("1"!==o)return void $.warn("Unsupported hls.js version "+(null==a?void 0:a.version)+" for audiotrackchange detection. Audio track changes are only reported from the media element.");var d=parseInt(l);isFinite(d)&&d>=7&&(this.audioSwitchIsPlayheadBased=!0);var u,c=a.Events||{},h=(G(u={},c.LEVEL_SWITCHING,this.onLevelSwitching),G(u,c.LEVEL_SWITCHED,this.onLevelSwitched),G(u,c.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching),G(u,c.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched),G(u,c.BUFFER_CODECS,this.onBufferCodecs),G(u,c.MANIFEST_LOADING,this.onManifestLoading),G(u,c.MEDIA_ATTACHED,this.onMediaAttached),G(u,c.MEDIA_DETACHING,this.onMediaDetaching),G(u,c.ERROR,this.onError),u);this.hls=i,this.addMediaElementMonitorOverride(),Object.keys(h).forEach(function(e){var t=h[e],a=function(e,i){try{t.call(n,e,i)}catch(t){$.warn("Exception in hls.js "+e+" handler for audiotrackchange.",t)}};n.listeners.push([e,a]),i.on(e,a)})}return j(e,[{key:"addMediaElementMonitorOverride",value:function(){var e,t,i=this;null!=(t=this.hls)&&null!=(e=t.media)&&e.mux&&(this.hls.media.mux.audioTrackChangeHandler=function(e){return i.onMediaElementMonitorEvent(e)})}},{key:"removeMediaElementMonitorOverride",value:function(){var e,t,i;null==(i=this.hls)||null==(t=i.media)||null==(e=t.mux)||delete e.audioTrackChangeHandler}},{key:"destroy",value:function(){var e=this.hls;e&&(this.removeMediaElementMonitorOverride(),this.hls=void 0,this.transition=void 0,this.listeners.forEach(function(t){var i=D(t,2),a=i[0],r=i[1];return e.off(a,r)}),this.listeners=[])}},{key:"onMediaElementMonitorEvent",value:function(e){this.transition&&(this.transition.mediaElementMonitorEvent=e)}},{key:"onManifestLoading",value:function(){this.transition=void 0}},{key:"onMediaAttached",value:function(){this.addMediaElementMonitorOverride()}},{key:"onMediaDetaching",value:function(){this.removeMediaElementMonitorOverride(),this.transition=void 0,this.previousEvent=void 0}},{key:"onError",value:function(e,t){null!=t&&t.fatal&&(this.transition=void 0)}},{key:"onLevelSwitching",value:function(e,t){this.transition=this.transition||{},this.transition.levelSwitching=en({},t),this.transition.levelSwitched&&(this.transition.levelSwitched=void 0,this.transition.bufferCodecs=void 0)}},{key:"onLevelSwitched",value:function(e,t){this.transition&&(this.transition.levelSwitched=en({},t),this.checkTransitionFinished())}},{key:"onBufferCodecs",value:function(e,t){this.transition&&(this.transition.bufferCodecs=this.transition.bufferCodecs||[],this.transition.bufferCodecs.push(en({},t)))}},{key:"onAudioTrackSwitching",value:function(e,t){this.transition=this.transition||{},this.transition.audioTrackSwitching=en({},t);var i,a,r,n="number"==typeof(null==t?void 0:t.id)?t.id:null==(i=this.hls)?void 0:i.audioTrack;this.transition.audioTrackObj=null==(r=this.hls)||null==(a=r.audioTracks)?void 0:a[n],this.transition.audioTrackSwitched&&(this.transition.audioTrackSwitched=void 0,this.transition.bufferCodecs=void 0)}},{key:"onAudioTrackSwitched",value:function(e,t){this.transition&&(this.transition.audioTrackSwitched=en({},t),this.checkTransitionFinished())}},{key:"checkTransitionFinished",value:function(){var e,t,i,a=this.transition;if(a&&!(a.audioTrackSwitching&&!a.audioTrackSwitched)&&!(a.levelSwitching&&!a.levelSwitched)){this.transition=void 0;var r=a.audioTrackObj||(null==(t=this.hls)||null==(e=t.audioTracks)?void 0:e[this.hls.audioTrack]),n=(null==(i=a.bufferCodecs)?void 0:i.length)&&eD(a.bufferCodecs);if(!(r&&!a.audioTrackSwitched&&!n&&!a.mediaElementMonitorEvent)){var s=[],o=r&&eL(r);o&&s.push(o),n&&s.push(ex(n));var l=a.mediaElementMonitorEvent;if(!l){var d,u=null==(d=this.hls)?void 0:d.media;u&&(this.audioSwitchIsPlayheadBased||a.levelSwitched)&&(l=eE(u))}l&&(!o||eN(l,o))&&s.push(l);var c=eR(s);if(c){var h=this.previousEvent;h&&!a.audioTrackSwitched&&eI(h,c)||(this.previousEvent=c,this.onAudioTrackChange(en({},c)))}}}}}]),e}(),eP=["public.accessibility.transcribes-spoken-dialog","public.accessibility.describes-music-and-sound"],eU=function(e){if(e){var t=e.split(",").map(function(e){return e.trim()});if(eP.every(function(e){return -1!==t.indexOf(e)}))return"cc"}return"subtitles"},eH=function(e){if(e)return"wvtt"===e?"webvtt":0===e.indexOf("stpp")?"ttml":e},eW=function(e){var t,i={player_text_track_enabled:!0},a=eU(e.characteristics||(null==(t=e.attrs)?void 0:t.CHARACTERISTICS));a&&(i.player_text_track_type=a);var r=eH(e.textCodec);return r&&(i.player_text_track_format=r),e.name&&(i.player_text_track_name=e.name),e.lang&&(i.player_text_track_language=e.lang),i},eB=function(){function e(t){var i=t.hls,a=t.Hls,r=t.onTextTrackChange,n=this;if(F(this,e),G(this,"hls",void 0),G(this,"listeners",[]),G(this,"onTextTrackChange",void 0),G(this,"levelSwitched",!1),G(this,"previousEvent",void 0),this.onTextTrackChange=r,"1"!==D(String(null==a?void 0:a.version).split("."),1)[0])return void $.warn("Unsupported hls.js version "+(null==a?void 0:a.version)+" for texttrackchange detection. Text track changes are only reported from the media element.");var s=a.Events||{},o=[[s.LEVEL_SWITCHED,this.onLevelSwitched],[s.SUBTITLE_TRACKS_UPDATED,this.refresh],[s.SUBTITLE_TRACKS_CLEARED,this.refresh],[s.SUBTITLE_TRACK_SWITCH,this.refresh],[s.MEDIA_ATTACHED,this.onMediaAttached],[s.MEDIA_DETACHING,this.onMediaDetaching]];this.hls=i,this.addMediaElementMonitorOverride(),o.forEach(function(e){var t=D(e,2),a=t[0],r=t[1];if(a){var s=function(e){try{r.call(n)}catch(t){$.warn("Exception in hls.js "+e+" handler for texttrackchange.",t)}};n.listeners.push([a,s]),i.on(a,s)}}),this.refresh()}return j(e,[{key:"addMediaElementMonitorOverride",value:function(){var e,t,i=this;null!=(t=this.hls)&&null!=(e=t.media)&&e.mux&&(this.hls.media.mux.textTrackChangeHandler=function(e){return i.onMediaElementMonitorEvent(e)})}},{key:"removeMediaElementMonitorOverride",value:function(){var e,t,i;null==(i=this.hls)||null==(t=i.media)||null==(e=t.mux)||delete e.textTrackChangeHandler}},{key:"destroy",value:function(){var e=this.hls;e&&(this.removeMediaElementMonitorOverride(),this.hls=void 0,this.listeners.forEach(function(t){var i=D(t,2),a=i[0],r=i[1];return e.off(a,r)}),this.listeners=[])}},{key:"getSelectedSubtitleTrack",value:function(){var e,t=this.hls;if(!(!t||"number"!=typeof t.subtitleTrack||t.subtitleTrack<0))return null==(e=t.subtitleTracks)?void 0:e[t.subtitleTrack]}},{key:"onMediaElementMonitorEvent",value:function(e){try{if(this.getSelectedSubtitleTrack())return;this.emit(e)}catch(e){$.warn("Exception handling a media element text track change for hls.js.",e)}}},{key:"onLevelSwitched",value:function(){this.levelSwitched=!0,this.refresh()}},{key:"onMediaAttached",value:function(){this.addMediaElementMonitorOverride(),this.getSelectedSubtitleTrack()&&this.refresh()}},{key:"onMediaDetaching",value:function(){this.removeMediaElementMonitorOverride(),this.previousEvent=void 0}},{key:"isLevelSwitched",value:function(){var e,t=null==(e=this.hls)?void 0:e.currentLevel;return this.levelSwitched||"number"==typeof t&&t>=0}},{key:"refresh",value:function(){try{var e=this.hls;if(!e||!this.isLevelSwitched())return;var t=this.getSelectedSubtitleTrack();if(t)return void this.emit(eW(t));var i=e.media&&ew(e.media);i&&this.emit(i)}catch(e){$.warn("Exception while refreshing the hls.js text track state.",e)}}},{key:"emit",value:function(e){this.previousEvent&&eI(this.previousEvent,e)||(this.previousEvent=e,this.onTextTrackChange(en({},e)))}}]),e}(),e$=function(e){if(!e)return{};var t=ea(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},eq=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return ed(e.getAllResponseHeaders())},eV=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!et())return void r.warn("performance timing not supported. Not tracking HLS.js.");var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=e$(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,b=c.responseEnd;o("requestcompleted",es(en({},ec(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:b,request_type:"manifest",request_hostname:J(r),request_response_headers:eq(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=e$(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:J(i.url),request_response_headers:eq(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=e$(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:J(i.url),request_response_headers:eq(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=e$(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?eq(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?J(r.responseURL):void 0,request_id:h?eu(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?eq(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:J(c),request_id:h?eu(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null==(i=t.err)?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:J(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var b=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,b);var g=new eO({hls:i,Hls:a,onAudioTrackChange:function(e){o("audiotrackchange",e)}}),f=new eB({hls:i,Hls:a,onTextTrackChange:function(e){o("texttrackchange",e)}});i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,b),i.off(a.Events.DESTROYING,i._stopMuxMonitor),g.destroy(),f.destroy(),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},eF=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eK=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=J(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=ed(u[u.length-1]._responseHeaders||""));var c=i?eu(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},ej=function(e,t){if("function"==typeof t.getCurrentRepresentationForType){var i=t.getCurrentRepresentationForType(e);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=t.getQualityFor(e),r=t.getCurrentTrackFor(e).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},eG=function(e){var t;return null==(t=e.match(/.*codecs\*?="(.*)"/))?void 0:t[1]},eY=function(e){try{var t,i;return null==(i=e.getVersion)||null==(t=i.call(e))?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},ez=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on)return void a.warn("Invalid dash.js player reference. Monitoring blocked.");var r=eY(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:J(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=eK(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,b=c.requestResponseHeaders,g=c.requestMediaDuration,f=c.requestHostname,E=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:b,request_hostname:f,request_id:c.requestId,request_url:E,request_media_duration:g,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=eK(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,b=u.requestResponseHeaders,g=u.requestMediaDuration,f=u.requestHostname,E=u.requestUrl,y=u.requestId,_=ej(d,i),T=_.currentLevel,k=_.renditionWidth,A=_.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:b,request_hostname:f,request_id:y,request_url:E,request_media_start_time:l,request_media_duration:g,request_current_level:T,request_labeled_bitrate:_.renditionBitrate,request_video_width:k,request_video_height:A})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height))return void a.warn("have bitrate info for video but missing width/height");var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:eG(c.video.codec)}}},m=function(e,t,r){var s=e.mediaType;if("audio"===s||"video"===s){if("function"==typeof i.getRepresentationsByType)if(e.newRepresentation)o={bitrate:e.newRepresentation.bandwidth,width:e.newRepresentation.width,height:e.newRepresentation.height,qualityIndex:e.newRepresentation.absoluteIndex};else{var o,l=i.getRepresentationsByType(s);if(l&&"number"==typeof e.newQuality){var d=l.find(function(t){return t.absoluteIndex===e.newQuality||t.index===e.newQuality});d&&(o={bitrate:d.bandwidth,width:d.width,height:d.height,qualityIndex:e.newQuality})}}else{if("number"!=typeof e.newQuality)return void a.warn("missing evt.newQuality in qualityChangeRendered event",e);o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality})}if(!(o&&"number"==typeof o.bitrate))return void a.warn("missing bitrate info for ".concat(s));c[s]=es(en({},o),{codec:i.getCurrentTrackFor(s).codec});var u=h();u&&n("renditionchange",u)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:J(t.url)})};i.on("fragmentLoadingAbandoned",p);var b=function(e){var t,i,a=e.error,r=(null==a||null==(t=a.data)?void 0:t.request)||{},s=(null==a||null==(i=a.data)?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:J(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",b),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",b),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},eQ=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eZ=0,eX=function(){function e(){F(this,e),G(this,"_listeners",void 0)}return j(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++eZ,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++eZ;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before"+e]||[],r=this._listeners["before*"]||[],n=this._listeners[e]||[],s=this._listeners["after"+e]||[],o=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};o(a,t),o(r,t),o(n,t),o(s,t)}}}]),e}(),eJ=function(){function e(t){var i=this;F(this,e),G(this,"_playbackHeartbeatInterval",void 0),G(this,"_playheadShouldBeProgressing",void 0),G(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(N.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return j(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=N.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(N.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),e0=function e(t){var i=this;F(this,e),G(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null==(e=t.data)||delete e.player_error_code,null==(i=t.data)||delete i.player_error_message,null==(a=t.data)||delete a.player_error_context,null==(r=t.data)||delete r.player_error_severity,null==(n=t.data)||delete n.player_error_business_exception})},e1=function(){function e(t){F(this,e),G(this,"_watchTimeTrackerLastCheckedTime",void 0),G(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return j(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),er(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),e2=function(){function e(t){var i=this;F(this,e),G(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),G(this,"_lastTime",void 0),G(this,"_isAdPlaying",void 0),G(this,"_callbackUpdatePlaybackTime",void 0),G(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=O(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,t.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};t.on("seeked",r),t.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",n),t.on("seeking",n),t.on("rebufferstart",n),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=O(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return j(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=O(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,t=O(),i=t-this._lastTime,a=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?a=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(a=i),a>0&&a<=1e3&&er(this.pm.data,"view_content_playback_time",a),null!==this._callbackUpdatePlaybackTime&&i>0&&i<=1e3&&(this._isAdPlaying&&er(this.pm.data,"ad_playing_time_ms_cumulative",i),er(this.pm.data,"view_playing_time_ms_cumulative",i)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),e3=function(){function e(t){F(this,e),G(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return j(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),e4=function e(t){if(F(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;er(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(er(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},e5=function(){function e(t){var i=this;F(this,e),G(this,"_lastCheckedTime",void 0),G(this,"_lastPlayheadTime",void 0),G(this,"_lastPlayheadTimeUpdatedTime",void 0),G(this,"_rebuffering",void 0),G(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:O()})}))}return j(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(e,t);if(null===this._lastCheckedTime)return void this._prepareRebufferTrackerState(t.viewer_time);if(this._lastPlayheadTime!==this.pm.data.player_playhead_time)return void this._cleanupRebufferTracker(e,t,!0);var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),e9=function(){function e(t){var i=this;F(this,e),G(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||O(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||O(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return j(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),e}(),e8=function e(t){var i=this;F(this,e),G(this,"_lastPlayerHeight",void 0),G(this,"_lastPlayerWidth",void 0),G(this,"_lastPlayheadPosition",void 0),G(this,"_lastSourceHeight",void 0),G(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),er(t.data,"view_total_content_playback_time",e),er(t.data,"view_total_upscaling",r*e),er(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange","playbackmodechange"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},e6=function e(t){var i=this;F(this,e),G(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=O(),r=(t.data.viewer_time||e)-(a||e);er(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,er(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},e7=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},te=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],tt=function(){function e(t){var i=this;F(this,e),G(this,"_adHasPlayed",void 0),G(this,"_adRequests",void 0),G(this,"_adResponses",void 0),G(this,"_currentAdRequestNumber",void 0),G(this,"_currentAdResponseNumber",void 0),G(this,"_prerollPlayTime",void 0),G(this,"_wouldBeNewAdPlay",void 0),G(this,"isAdBreak",void 0),G(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),te.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),e7(i._adRequests,a),er(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||er(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),e7(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&er(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,er(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||er(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||er(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return j(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=D(ee(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=D(ee(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id,null!=t&&t.ad_type&&(this.pm.data.ad_type=null==t?void 0:t.ad_type)}}]),e}(),ti=function e(t){var i=this;F(this,e),G(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=O(),t.on("before*",r)},r=function(e){var a=O(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},ta=(i5=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t},function e(t){function i(e,a,r){var n;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(r=i5({path:"/"},i.defaults,r)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}try{n=JSON.stringify(a),/^[\{\[]/.test(n)&&(a=n)}catch(e){}return a=t.write?t.write(a,e):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=e+"="+a+(r.expires?"; expires="+r.expires.toUTCString():"")+(r.path?"; path="+r.path:"")+(r.domain?"; domain="+r.domain:"")+(r.secure?"; secure":"")}e||(n={});for(var o=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<o.length;d++){var u=o[d].split("="),c=u.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{var h=u[0].replace(l,decodeURIComponent);if(c=t.read?t.read(c,h):t(c,h)||c.replace(l,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch(e){}if(e===h){n=c;break}e||(n[h]=c)}catch(e){}}return n}}return i.set=i,i.get=function(e){return i.call(i,e)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(e,t){i(e,"",i5(t,{expires:-1}))},i.withConverter=e,i}(function(){})),tr="muxData",tn=function(){var e;try{e=(ta.get(tr)||"").split("&").reduce(function(e,t){var i=D(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},ts=function(e){try{ta.set(tr,Object.entries(e).map(function(e){var t=D(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},to=function(){var e=tn();return e.mux_viewer_id=e.mux_viewer_id||P(),e.msn=e.msn||Math.random(),ts(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},tl=function(){var e=tn(),t=O();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=P(),e.sst=t),e.sex=t+15e5,ts(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},td=tc({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),tu=tc({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",cj:"channels",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",si:"sid",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tr:"track",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function tc(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function th(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=td[s];o||($.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),tu[e]?o+=tu[e]:Number.isInteger(Number(e))?o+=e:($.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var tm=(i8=null!=(i9=L())?n(d(i9)):{},function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var r,n=l(t),d=0,c=n.length;d<c;d++)r=n[d],u.call(e,r)||void 0===r||s(e,r,{get:(function(e){return t[e]}).bind(null,r),enumerable:!(a=o(t,r))||a.enumerable});return e}(i9&&i9.__esModule?i8:s(i8,"default",{value:i9,enumerable:!0}),i9)),tp="undefined"!=typeof document?document:tm.default,tv={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},tb=["hb","requestcompleted","requestfailed","requestcanceled"],tg=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},tv,t)};tg.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},tg.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&1===this._eventQueue.length?this._eventQueue.pop():(this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending())},tg.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),N.clearTimeout(this._sendTimeout)},tg.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],th({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);tE(this._beaconUrl,i,!0,function(){})},tg.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=O();tE(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,$.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=O()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},tg.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},tg.prototype._startBeaconSending=function(){var e=this;N.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=N.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},tg.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(O())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||($.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===tb.indexOf(e.e)}),s()),o()||($.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var tf="function"==typeof tp.exitPictureInPicture?function(e){return e.length<=57344}:function(e){return!1},tE=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t))return void a();if(N.fetch)return void N.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:tf(t)}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});if(N.XMLHttpRequest){var r=new N.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},ty=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],t_=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],tT=["ad_id","ad_creative_id","ad_universal_id"],tk=["viewstart","error","ended","viewend"],tA=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,b,g,f,E,y,_,T,k=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};F(this,e),G(this,"mux",void 0),G(this,"envKey",void 0),G(this,"options",void 0),G(this,"eventQueue",void 0),G(this,"sampleRate",void 0),G(this,"disableCookies",void 0),G(this,"respectDoNotTrack",void 0),G(this,"previousBeaconData",void 0),G(this,"lastEventTime",void 0),G(this,"rateLimited",void 0),G(this,"pageLevelData",void 0),G(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=k,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new tg((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?(/localhost(?::\d+)?$/.test(n)?"http://":"https://")+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!=(y=this.options.sampleRate)?y:1,this.disableCookies=null!=(_=this.options.disableCookies)&&_,this.respectDoNotTrack=null!=(T=this.options.respectDoNotTrack)&&T,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null==(o=this.options.platform)?void 0:o.name,viewer_application_version:null==(l=this.options.platform)?void 0:l.version,viewer_application_engine:null==(d=this.options.platform)?void 0:d.layout,viewer_device_name:null==(u=this.options.platform)?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null==(c=this.options.platform)?void 0:c.manufacturer,viewer_os_family:null==(m=this.options.platform)||null==(h=m.os)?void 0:h.family,viewer_os_architecture:null==(b=this.options.platform)||null==(p=b.os)?void 0:p.architecture,viewer_os_version:null==(f=this.options.platform)||null==(g=f.os)?void 0:g.version,page_url:null==N||null==(E=N.location)?void 0:E.href},this.viewerData=this.disableCookies?{}:to()}return j(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&q())return $.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return $.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:tl(),a=es(en({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!=(r=a.mux_sample_number)?r:0)>=this.sampleRate,s=th(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return $.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||$.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited)if($.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&"hb"===e)this.eventQueue.flushEvents(!0);else if(tk.indexOf(e)>=0){if("error"===e&&"warning"===t.player_error_severity)return;this.eventQueue.flushEvents()}if(this.rateLimited)return a.event="eventrateexceeded",s=th(a),this.eventQueue.queueEvent(a.event,s),$.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=en({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=D(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||ty.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){switch(e){case"audiotrackchange":if(t.startsWith("player_audio_track_"))return!0;break;case"playbackmodechange":if(t.startsWith("player_playback_mode"))return!0;break;case"renditionchange":if(t.startsWith("video_source_"))return!0;break;case"texttrackchange":if(t.startsWith("player_text_track_"))return!0}return!!(tT.includes(t)&&t_.includes(e))}}]),e}(),tw=function e(t){F(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},tS=function e(t){var i=this;F(this,e),G(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=O(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,G({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})};function tI(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}var tC=function e(t){F(this,e);var i=function(e){var i,a,r,o=null!=(i=e)&&i.request_type&&("media"===i.request_type||"video"===i.request_type)&&null!=(a=i.request_response_headers)&&a["x-cdn"]?i.request_response_headers["x-cdn"]:null!=i&&i.video_cdn?i.video_cdn:null,l=null!=(r=e)&&r.request_start?r.request_start:null!=r&&r.viewer_time?r.viewer_time:Date.now();null!=o&&!tI(o,n)&&s<=l&&(n=o,s=l,t.emit("cdnchange",{video_cdn:o}))},a=null,r=null,n=null,s=0;t.on("viewinit",function(){a=null,r=null,n=null,s=0}),t.on("beforecdnchange",function(e,t){var i=null==t?void 0:t.video_cdn;i&&(void 0===t.video_previous_cdn||null===t.video_previous_cdn)&&(tI(i,r)?t.video_previous_cdn=null!=a?a:void 0:(t.video_previous_cdn=null!=r?r:void 0,a=r,r=i))}),t.on("requestcompleted",function(e,t){i(t)})},tR=function(e){try{return JSON.parse(e),!0}catch(e){return!1}},tL=function e(t){var i=this;F(this,e),G(this,"_emittingAutomaticEvent",!1),G(this,"_hasInitialized",!1),G(this,"_currentMode","standard"),t.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=t.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,t.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),t.on("viewend",function(){i._hasInitialized=!1}),t.on("playbackmodechange",function(e,a){i._emittingAutomaticEvent||(a.player_playback_mode_data?tR(a.player_playback_mode_data)||(t.mux.log.warn("Invalid JSON string for player_playback_mode_data"),a.player_playback_mode_data="{}"):a.player_playback_mode_data="{}",t.data.player_playback_mode_data=a.player_playback_mode_data,t.data.player_playback_mode=a.player_playback_mode,i._currentMode=a.player_playback_mode)})},tM=function(){function e(t){F(this,e),G(this,"pm",void 0),G(this,"_currentRangeStart",void 0),G(this,"_lastPlayheadTime",void 0),this.pm=t,this._currentRangeStart=null,this._lastPlayheadTime=null,t.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),t.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return j(e,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var t=this.pm.data.player_playhead_time||0;e[e.length-1][1]=t}}},{key:"_updatePlaybackRange",value:function(){var e,t=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&null!=(e=this.pm.adTracker)&&e.isAdBreak&&null!==this._lastPlayheadTime&&t<this._lastPlayheadTime)){if(null!==this._lastPlayheadTime&&null!==this._currentRangeStart&&Math.abs(t-this._lastPlayheadTime)>1e3){var i=this.pm.data.video_playback_ranges;i&&i.length>0&&(i[i.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}if(null===this._currentRangeStart){var a=this.pm.data.video_playback_ranges||[];a.length>0&&a[a.length-1][1]===t?this._currentRangeStart=a[a.length-1][0]:(this._currentRangeStart=t,a.push([t,t])),this.pm.data.video_playback_ranges=a}else this._updateLastRangeEnd();this._lastPlayheadTime=t}}},{key:"_endPlaybackRange",value:function(){null!==this._currentRangeStart&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),e}();g();var tx=function e(t,i,a){var r=this;F(this,e),G(this,"_lastPayload",null),G(this,"_seenThisView",!1),G(this,"_emittingAutomaticEvent",!1);var n=function(e){var t={};return Object.keys(e).forEach(function(i){i.startsWith(a)&&(t[i]=e[i])}),t},s=function(){Object.keys(t.data).forEach(function(e){e.startsWith(a)&&delete t.data[e]})};t.on("viewinit",function(){r._seenThisView=!1,s()}),t.on("viewstart",function(){r._lastPayload&&!r._seenThisView&&(r._emittingAutomaticEvent=!0,t.emit(i,en({},r._lastPayload)),r._emittingAutomaticEvent=!1)});var o=a+"enabled";t.on("before"+i,function(e,l){var d=l[o];if("boolean"!=typeof d){var u=Object.keys(l).some(function(e){return e!==o&&e.startsWith(a)&&void 0!==l[e]});l[o]=u,t.mux.log.warn("Expected a boolean for ".concat(o," on ").concat(i,", got ").concat(void 0===d?"undefined":b(d)," ")+"(".concat(String(d),"); inferred as ").concat(u," from the payload."))}r._emittingAutomaticEvent||(r._seenThisView=!0,r._lastPayload=n(l)),s()})},tD=function(e){Z(i,e);var t=X(i);function i(e){return F(this,i),t.call(this,e,"texttrackchange","player_text_track_")}return i}(tx),tN=function(e){Z(i,e);var t=X(i);function i(e){return F(this,i),t.call(this,e,"audiotrackchange","player_audio_track_")}return i}(tx),tO=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),tP=function(e){if(!e)return tO.UNKNOWN;switch(e){case"cellular":case"wimax":return tO.CELLULAR;case"wifi":return tO.WIFI;case"ethernet":return tO.WIRED;case"none":return tO.NO_CONNECTION;case"bluetooth":case"other":default:return tO.OTHER;case"unknown":return tO.UNKNOWN}},tU=function(){function e(t){var i=this;F(this,e),G(this,"pm",void 0),G(this,"lastType",void 0),G(this,"lastLowDataMode",void 0),this.pm=t,this.pm.one("viewinit",function(){var t,a=i.emit.bind(i);a(),N.addEventListener("online",a),N.addEventListener("offline",a),null==(t=e.connection)||t.addEventListener("change",a),i.pm.on("destroy",function(){var t;null==(t=e.connection)||t.removeEventListener("change",a),N.removeEventListener("online",a),N.removeEventListener("offline",a)})})}return j(e,[{key:"type",get:function(){var t,i;return(null==(t=N.navigator)?void 0:t.onLine)===!1?tO.NO_CONNECTION:null!=(i=e.connection)&&i.type?tP(e.connection.type):tO.UNKNOWN}},{key:"lowDataMode",get:function(){var t;return null==(t=e.connection)?void 0:t.saveData}},{key:"emit",value:function(){var e=this.type,t=this.lowDataMode;e===this.lastType&&t===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=t,this.pm.emit("networkchange",en({viewer_connection_type:e},void 0!==t&&{viewer_connection_low_data_mode:t})))}}],[{key:"connection",get:function(){var e;return"object"==typeof(e=N.navigator)&&"connection"in e&&"object"==typeof e.connection?N.navigator.connection:null}}]),e}(),tH=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange","texttrackchange","audiotrackchange"],tW=new Set(["requestcompleted","requestfailed","requestcanceled"]),tB=function(e){Z(i,e);var t=X(i);function i(e,a,r){F(this,i),G(V(n=t.call(this)),"pageLoadEndTime",void 0),G(V(n),"pageLoadInitTime",void 0),G(V(n),"_destroyed",void 0),G(V(n),"_heartBeatTimeout",void 0),G(V(n),"adTracker",void 0),G(V(n),"dashjs",void 0),G(V(n),"data",void 0),G(V(n),"disablePlayheadRebufferTracking",void 0),G(V(n),"disableRebufferTracking",void 0),G(V(n),"disableAdPlaybackRangeFiltering",void 0),G(V(n),"errorTracker",void 0),G(V(n),"errorTranslator",void 0),G(V(n),"emitTranslator",void 0),G(V(n),"getAdData",void 0),G(V(n),"getPlayheadTime",void 0),G(V(n),"getStateData",void 0),G(V(n),"stateDataTranslator",void 0),G(V(n),"hlsjs",void 0),G(V(n),"id",void 0),G(V(n),"longResumeTracker",void 0),G(V(n),"minimumRebufferDuration",void 0),G(V(n),"mux",void 0),G(V(n),"playbackEventDispatcher",void 0),G(V(n),"playbackHeartbeat",void 0),G(V(n),"playbackHeartbeatTime",void 0),G(V(n),"playheadTime",void 0),G(V(n),"seekingTracker",void 0),G(V(n),"sustainedRebufferThreshold",void 0),G(V(n),"watchTimeTracker",void 0),G(V(n),"currentFragmentPDT",void 0),G(V(n),"currentFragmentStart",void 0),n.pageLoadInitTime=ea(),n.pageLoadEndTime=ei(),n.mux=e,n.id=a,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),$.level=r.debug?1:3,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.disableAdPlaybackRangeFiltering=r.disableAdPlaybackRangeFiltering,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new tA(e,r.data.env_key,r),n.data={player_instance_id:P(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind(V(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var o=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",o,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),tH.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new tS(V(n)),n.errorTracker=new e0(V(n)),new ti(V(n)),n.seekingTracker=new e6(V(n)),n.playheadTime=new e3(V(n)),n.playbackHeartbeat=new eJ(V(n)),new e8(V(n)),n.watchTimeTracker=new e1(V(n)),new e2(V(n)),new tM(V(n)),n.adTracker=new tt(V(n)),new e5(V(n)),new e4(V(n)),new e9(V(n)),new tw(V(n)),new tC(V(n)),new tL(V(n)),new tD(V(n)),new tN(V(n)),new tU(V(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return j(i,[{key:"emit",value:function(e,t){var a,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(a=z(Y(i.prototype),"emit",this)).call.apply(a,[this].concat(B(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=D(ee(t.video_source_url),2),a=i[0];t.video_source_domain=i[1],t.video_source_hostname=a}delete t.ad_request_id,t.video_playback_ranges&&(t.video_playback_range=JSON.stringify(t.video_playback_ranges.filter(function(e){return e[0]!==e[1]}).map(function(e){return"".concat(e[0],":").concat(e[1])})),delete t.video_playback_ranges),this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,tW.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e,t=this.getStateData();if("function"==typeof this.stateDataTranslator)try{t=this.stateDataTranslator(t)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}null!=(e=this.data)&&e.video_cdn&&null!=t&&t.video_cdn&&(t.video_cdn,t=function(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(t,["video_cdn"])),Object.assign(this.data,t),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate","player_audio_track_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=P(),i=function(){t===e.data.view_id&&er(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){e.hlsjs?this.hlsjs?this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):(this.hlsjs=e.hlsjs,eV(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)):this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){this.hlsjs&&(eF(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){e.dashjs?this.dashjs?this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):(this.dashjs=e.dashjs,ez(this.mux,this.id,e.dashjs)):this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){this.dashjs&&(eQ(this.dashjs),this.dashjs=void 0)}}]),i}(eX);function t$(){return tp&&!!(tp.fullscreenElement||tp.webkitFullscreenElement||tp.mozFullScreenElement||tp.msFullscreenElement)}var tq=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tV={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};N&&N.WeakMap&&(i6=new WeakMap);var tF=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};tF.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},tF.prototype.processLine=function(e){var t=e.indexOf(":"),i=tZ(e,t),a=i[0],r=2===i.length?tG(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case"#EXT-X-TARGETDURATION":if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case"#EXT-X-PART-INF":tK(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case"#EXT-X-SERVER-CONTROL":tK(this.manifest,i),this.setHoldBack();break;case"#EXTINF":0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case"#EXT-X-PROGRAM-DATE-TIME":var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case"#EXT-X-VERSION":tK(this.manifest,i);break;case"#EXT-X-SESSION-DATA":var s=ec(tX(i[1]));Object.assign(this.manifest.sessionData,s)}},tF.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var tK=function(e,t){var i,a=tj(t[0].replace("#EXT-X-",""));tQ(t[1])?(i={},i=Object.assign(tz(t[1]),i)):i=tG(t[1]),e[a]=i},tj=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tG=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tY=function(e){var t={},i=e.split("=");return i.length>1&&(t[tj(i[0])]=tG(i[1])),t},tz=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(tY(t[a]),i);return i},tQ=function(e){return e.indexOf("=")>-1},tZ=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tX=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tJ={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){$.info("safeCall error",e)}return r},safeIncrement:er,getComputedStyle:function(e,t){var i;return e&&t&&N&&"function"==typeof N.getComputedStyle?(i6&&i6.has(e)&&(i=i6.get(e)),i||(i=N.getComputedStyle(e,null),i6&&i6.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:ed,cdnHeadersToRequestId:eu,extractHostnameAndDomain:ee,extractHostname:J,manifestParser:tF,generateShortID:U,generateUUID:P,now:O,findMediaElement:W},t0={},t1=function(e){var t=arguments;"string"==typeof e?t1.hasOwnProperty(e)?N.setTimeout(function(){t=Array.prototype.splice.call(t,1),t1[e].apply(null,t)},0):$.warn("`"+e+"` is an unknown task"):"function"==typeof e?N.setTimeout(function(){e(t1)},0):$.warn("`"+e+"` is invalid.")},t2={loaded:O(),NAME:"mux-embed",VERSION:"5.19.0",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=D(W(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,i=(null==(e=this.getPlayheadTime)?void 0:e.call(this))||d(r.currentTime),a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),s={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:t$(),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null==(t=r.getVideoPlaybackQuality)?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&i>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();s.player_program_time=u+i,r.seekable.length>0&&(s.player_live_edge_program_time=u+r.seekable.end(r.seekable.length-1))}}return s}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u,c,h=function(){u&&(u.destroy(),u=void 0),c&&(c.destroy(),c=void 0)},m=function(){h(),null==(u=ey({mediaElement:r,onChange:function(t){var i;null!=(i=r.mux)&&i.audioTrackChangeHandler?r.mux.audioTrackChangeHandler(t):e.emit(n,"audiotrackchange",t)}}))||u.refresh(),null==(c=eS({mediaElement:r,onChange:function(t){var i;null!=(i=r.mux)&&i.textTrackChangeHandler?r.mux.textTrackChangeHandler(t):e.emit(n,"texttrackchange",t)}}))||c.refresh()},p=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){h(),Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=p,r.mux.swapElement=p,r.mux.emit=p,r.mux.addHLSJS=p,r.mux.addDashJS=p,r.mux.removeHLSJS=p,r.mux.removeDashJS=p,r.mux.updateData=p,r.mux.setEmitTranslator=p,r.mux.setStateDataTranslator=p,r.mux.setGetPlayheadTime=p,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=D(W(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a,m()):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=i.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,i),e.emit(n,"playerready"),m(),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},tq.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=tV[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))}),r.mux.listeners.enterpictureinpicture=function(){e.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var t=t$()?"fullscreen":"standard";e.emit(n,"playbackmodechange",{player_playback_mode:t,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var t=t$(),i=document.fullscreenElement;if(t&&(i===r||null!=i&&i.contains(r)))e.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!t){var a=document.pictureInPictureElement===r;e.emit(n,"playbackmodechange",{player_playback_mode:a?"pip":"standard",player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}(t1,e,t)},destroyMonitor:function(e){var t=D(W(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():$.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=H(e);t0[i]?t0[i].addHLSJS(t):$.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=H(e);t0[i]?t0[i].addDashJS(t):$.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=H(e);t0[t]?t0[t].removeHLSJS():$.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=H(e);t0[t]?t0[t].removeDashJS():$.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){q()&&t&&t.respectDoNotTrack&&$.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=H(e);t0[i]=new tB(t1,i,t)},emit:function(e,t,i){var a=H(e);t0[a]?(t0[a].emit(t,i),"destroy"===t&&delete t0[a]):$.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=H(e);t0[i]?t0[i].emit("hb",t):$.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=H(e);t0[i]?t0[i].emitTranslator=t:$.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=H(e);t0[i]?t0[i].stateDataTranslator=t:$.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=H(e);t0[i]?t0[i].getPlayheadTime=t:$.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:q,log:$,utils:tJ,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",TEXT_TRACK_CHANGE:"texttrackchange",AUDIO_TRACK_CHANGE:"audiotrackchange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(t1,t2),void 0!==N&&"function"==typeof N.addEventListener&&N.addEventListener("pagehide",function(e){e.persisted||(t1.WINDOW_UNLOADING=!0)},!1);var t3=e.i(839033),t4=t3.default,t5="video",t9=e=>e===t5?"playback":e,t8=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};t8.MEDIA_ERR_ABORTED=1,t8.MEDIA_ERR_NETWORK=2,t8.MEDIA_ERR_DECODE=3,t8.MEDIA_ERR_SRC_NOT_SUPPORTED=4,t8.MEDIA_ERR_ENCRYPTED=5,t8.MEDIA_ERR_CUSTOM=100,t8.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var t6=(e,t)=>null!=t&&e in t,t7={ANY:"any",MUTED:"muted"},ie="on-demand",it="live",ii="unknown",ia="native",ir={HEADER:"header",QUERY:"query",NONE:"none"},is=Object.values(ir),io={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},il={HLS:io.M3U8},id=(Object.keys(il),[...Object.values(io)],{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"}),iu={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},ic={DESCENDING:"desc"},ih={code:"en"},im=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},ip=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},iv=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return t6(e,il)?il[e]:t}return iE(e)},ib=e=>"VOD"===e?ie:it,ig=e=>"EVENT"===e?1/0:"VOD"===e?NaN:0,iE=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=i_(t).pathname}catch{console.error("Invalid url when trying to infer mime type",t)}let a=i.lastIndexOf(".");if(a<0)return ik(e)?io.M3U8:"";let r=i.slice(a+1).toUpperCase();return t6(r,io)?io[r]:""},iy=e=>{try{return new URL(e),!1}catch{return!0}},i_=(e,t)=>{var i;if(!iy(e))return new URL(e);let a=null==(i=null==window?void 0:window.location)?void 0:i.href,r=null!=t?t:a;return t&&iy(t.toString())&&(r=new URL(t,a)),new URL(e,r)},iT="mux.com",ik=({src:e,customDomain:t=iT})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a="https:"===i.protocol,r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=2===n.length,o=!(null!=n&&n[1].includes("."));return a&&r&&s&&o},iA=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}};function iw(e,t=!0){var i;return new iS(t&&null!=(i=null==ih?void 0:ih[e])?i:e,t?ih.code:"en")}var iS=class{constructor(e,t=(e=>null!=(e=ih)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},iI=Object.values(t7),iC=e=>"boolean"==typeof e||"string"==typeof e&&iI.includes(e),iR=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case t7.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case t7.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},iL=e=>e.split("-")[0],iM=({language:e})=>"string"==typeof e?e.toLowerCase():void 0,ix=Number.MAX_SAFE_INTEGER,iD=e=>"time"in e?e.time:e.startTime;function iN(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function iO(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}var iP=new WeakMap;async function iU(e,t,i){let a=iO(e,t,i);if(a){let e=iP.get(a);return e&&await e,a}let r=iN(e,i,t);r.mode="hidden";let n=new Promise(e=>setTimeout(e,0));return iP.set(r,n),await n,iP.delete(r),r}async function iH(e,t,i,a){let r=await iU(e,i,a);return iW(e,r,t,a),r}function iW(e,t,i,a){"hidden"!==t.mode&&(t.mode="hidden"),[...i].sort((e,t)=>iD(t)-iD(e)).forEach(i=>{var r,n;let s=i.value,o=iD(i);if("endTime"in i&&null!=i.endTime&&Number.isFinite(i.endTime))null==t||t.addCue(new VTTCue(o,i.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let i=Array.prototype.findIndex.call(null==t?void 0:t.cues,e=>e.startTime>=o),l=null==(r=null==t?void 0:t.cues)?void 0:r[i],d=l?l.startTime:Number.isFinite(e.duration)&&e.duration>0?e.duration:ix,u=null==(n=null==t?void 0:t.cues)?void 0:n[i-1];u&&(u.endTime=o),null==t||t.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}var iB="cuepoints",i$=Object.freeze({label:iB});async function iq(e,t,i=i$){return iH(e,t,i.label,"metadata")}var iV=e=>({time:e.startTime,value:JSON.parse(e.text)});function iF(e,t={label:iB}){var i,a;let r=iO(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iV(r.activeCues[0]);let{currentTime:n}=e;return iV(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function iK(e,t=i$){return new Promise(i=>{im(e,"loadstart",async()=>{let a=await iq(e,[],t);im(e,"cuechange",()=>{let t=iF(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var ij="chapters",iG=Object.freeze({label:ij}),iY=(e,t)=>{let{duration:i}=t,a=Number.isFinite(i)&&i>0?Math.min(e.endTime,i):e.endTime>=ix?1/0:e.endTime;return{startTime:e.startTime,endTime:a,value:e.text}},iz=new WeakSet;function iQ(e){var t;Array.from(null!=(t=e.cues)?t:[]).filter(e=>iz.has(e)).forEach(t=>e.removeCue(t))}async function iZ(e,t,i=iG){let a=await iU(e,i.label,"chapters");return t.length&&iQ(a),iW(e,a,t,"chapters"),a}async function iX(e,t,i,a=iG){var r,n;let s=await iU(e,a.label,"chapters");return null!=i&&i.aborted||Array.from(null!=(r=s.cues)?r:[]).some(e=>!iz.has(e))||(iQ(s),iW(e,s,t,"chapters"),Array.from(null!=(n=s.cues)?n:[]).forEach(e=>iz.add(e))),s}function iJ(e,t={label:ij}){var i,a;let r=iO(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iY(r.activeCues[0],e);let{currentTime:n}=e;return iY(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0],e)}async function i0(e,t=iG){return new Promise(i=>{im(e,"loadstart",async()=>{let a=await iZ(e,[],t);im(e,"cuechange",()=>{let t=iJ(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var i1=(e,t,i,a,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var s,o,l;let d,u;if(n){let i=iw("Your device appears to be offline",r),a=t8.MEDIA_ERR_NETWORK,n=new t8(i,a,!1,void 0);return n.errorCategory=t,n.muxCode=2000002,n.data=e,n}let c="status"in e?e.status:e.code,h=Date.now(),m=t8.MEDIA_ERR_NETWORK;if(200===c)return;let p=t9(t),b=(d=t9(t),u=`${d}Token`,null!=(o=i.tokens)&&o[d]?null==(l=i.tokens)?void 0:l[d]:t6(u,i)?i[u]:void 0),g=t===t5?"v":"drm"===t?"d":void 0,[f]=ip(null!=(s=i.playbackId)?s:"");if(!c||!f)return;let E=iA(b);if(b&&!E){let i=new t8(iw("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:p}),m,!0,iw("Compact JWT string: {token}",r).format({token:b}));return i.errorCategory=t,i.muxCode=2412202,i.data=e,i}if(c>=500){let e=new t8("",m,null==a||a);return e.errorCategory=t,e.muxCode=2e6,e}if(403===c)if(E){if((({exp:e},t=Date.now())=>!e||1e3*e<t)(E,h)){let i={timeStyle:"medium",dateStyle:"medium"},a=iw("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:p}),n=new Intl.DateTimeFormat("en",i).format(h),s=new t8(a,m,!0,E.exp?iw("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",i).format(1e3*E.exp),currentDate:n}):iw("The {tokenNamePrefix}-token has no exp value. Current time: {currentDate}.",r).format({tokenNamePrefix:p,currentDate:n}));return s.errorCategory=t,s.muxCode=2403210,s.data=e,s}if((({sub:e},t)=>e!==t)(E,f)){let i=new t8(iw("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p}),m,!0,iw("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:p,playbackId:f,tokenPlaybackId:E.sub}));return i.errorCategory=t,i.muxCode=2403232,i.data=e,i}if((({aud:e},t)=>!e)(E,0)){let i=new t8(iw("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),m,!0,iw("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:g}));return i.errorCategory=t,i.muxCode=2403221,i.data=e,i}if((({aud:e},t)=>e!==t)(E,g)){let i=new t8(iw("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),m,!0,iw("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:g,aud:E.aud}));return i.errorCategory=t,i.muxCode=2403222,i.data=e,i}}else{let i=new t8(iw("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p,category:t}),m,null==a||a,iw("Specified playback ID: {playbackId}",r).format({playbackId:f}));return i.errorCategory=t,i.muxCode=2403201,i.data=e,i}if(412===c){let n=new t8(iw("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),m,null==a||a,iw("Specified playback ID: {playbackId}",r).format({playbackId:f}));return n.errorCategory=t,n.muxCode=2412e3,n.streamType=i.streamType===it?"live":i.streamType===ie?"on-demand":"unknown",n.data=e,n}if(404===c){let i=new t8(iw("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),m,null==a||a,iw("Specified playback ID: {playbackId}",r).format({playbackId:f}));return i.errorCategory=t,i.muxCode=2404e3,i.data=e,i}if(400===c){let i=new t8(iw("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),m,null==a||a,iw("Specified playback ID: {playbackId}",r).format({playbackId:f}));return i.errorCategory=t,i.muxCode=24e5,i.data=e,i}let y=new t8("",m,null==a||a);return y.errorCategory=t,y.muxCode=2e6,y.data=e,y},i2=t4.DefaultConfig.capLevelController;i2||console.error("MinCapLevelController - hls.js DefaultConfig.capLevelController is unavailable");var i3={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},i4=class e extends i2{constructor(e){super(e)}static setMaxAutoResolution(t,i){i?e.maxAutoResolution.set(t,i):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let i=this.hls;return null!=(t=e.maxAutoResolution.get(i))?t:void 0}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,i)=>this.isLevelAllowed(t)&&i<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),i=this.getMaxAutoResolution();if(!i)return super.getMaxLevel(e);let a=i3[i.toLowerCase().trim()];if(!a)return super.getMaxLevel(e);let r=t.filter(e=>e.width*e.height<=a),n=r.findIndex(e=>e.width*e.height===a);if(-1!==n){let e=r[n];return t.findIndex(t=>t===e)}if(0===r.length)return 0;let s=r[r.length-1];return t.findIndex(e=>e===s)}getMaxLevel(t){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(t);let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=e.minMaxResolution;return r>=n?i:i2.getMaxLevelByMediaSize(a,16/9*n,n)}};i4.minMaxResolution=720,i4.maxAutoResolution=new WeakMap;var i5,i9,i8,i6,i7,ae,at,ai,aa,ar,an=e=>new TextDecoder("utf-16le").decode(e).replace("skd://","").slice(1),as="fairplay",ao=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,al=async(e,t,i)=>{if(t===io.MP4)return{streamType:ie,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0,playlistUrl:void 0};if(t===io.M3U8){let t=await fetch(e,{signal:i});if(!t.ok)return Promise.reject(t);let a=await t.text(),r=t.url||e,n=await ((e,t,i)=>{let a,r=e.split(`
`).find((e,t,i)=>t>0&&i[t-1].startsWith("#EXT-X-STREAM-INF"));if(!r)return Promise.reject(Error("No media playlist URL found in multivariant playlist"));if(iy(r)&&!t)return Promise.reject(Error("masterPlaylistUrl is required to resolve relative media playlist URL"));try{a=i_(r,t)}catch(e){return Promise.reject(e)}return fetch(a,{signal:i}).then(e=>200!==e.status?Promise.reject(e):e.text())})(a,r,i);return{...(e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let e of t){let t=Object.fromEntries([...e.matchAll(ao)].map(([,e,t])=>[e,t])),a=t["DATA-ID"];a&&(i[a]={...t})}return{sessionData:i}})(a),...(e=>{var t,i,a;let r=e.split(`
`),n=null==(i=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),s=ib(n),o=ig(n),l;if(s===it){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(a=null==e?void 0:e.split(":"))?void 0:a[1];l=(null!=t?t:6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}})(n),playlistUrl:r}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0,playlistUrl:void 0}},ad=async(e,t,i=iv({src:e}),a=ac(t))=>{var r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u,playlistUrl:c}=await al(e,i,a);if(a.aborted)return;let h=au(null==u?void 0:u["com.apple.hls.chapters"],null!=c?c:e);h&&av(h,t,a),(null!=(r=aE.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=aE.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(s=aE.get(t))?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},au=(e,t)=>{var i;let a=(null==e?void 0:e.URI)||(null!=(i=null==e?void 0:e.VALUE)&&i.toLocaleLowerCase().startsWith("http")?e.VALUE:void 0);if(a)try{return i_(a,t).toString()}catch{return}},ac=e=>{let t=new AbortController;return e.addEventListener("teardown",()=>t.abort(),{once:!0}),t.signal},ah=async(e,t)=>{try{let i=await fetch(e,{signal:t});if(!i.ok)throw Error(`Failed to fetch ${e}: ${i.status} ${i.statusText}`);let a=await i.json();return t.aborted?void 0:a}catch(e){t.aborted||console.error(e);return}},am=(e,t)=>{var i,a;if(!Array.isArray(null==(i=null==e?void 0:e[0])?void 0:i.metadata))return;let r={};for(let t of e[0].metadata)null!=t&&t.key&&null!=t&&t.value&&(r[t.key]=t.value);(null!=(a=aE.get(t))?a:{}).metadata=r;let n=new CustomEvent("muxmetadata");t.dispatchEvent(n)},ap=async(e,t,i=ac(t))=>{let a=await ah(e,i);void 0!==a&&am(a,t)},av=async(e,t,i=ac(t))=>{var a,r,n;let s,o=await ah(e,i);void 0!==o&&(am(o,t),await iX(t,function(e,t=[]){return Array.isArray(e)?e.filter(e=>"number"==typeof(null==e?void 0:e["start-time"])).map((e,i,a)=>{var r;let n=e["start-time"],s=null==(r=a[i+1])?void 0:r["start-time"],o="number"==typeof e.duration?n+e.duration:"number"==typeof s?s:void 0;return{startTime:n,...null!=o?{endTime:o}:{},value:function(e,t){var i;let a=(Array.isArray(e)?e:[]).filter(e=>"string"==typeof(null==e?void 0:e.title)&&""!==e.title);if(!a.length)return"";for(let e of t){let t=function(e,t){var i,a;let r=t.toLowerCase(),n=iL(r);return null!=(a=null!=(i=e.find(e=>iM(e)===r))?i:e.find(e=>iM(e)===n))?a:e.find(e=>{let t=iM(e);return void 0!==t&&iL(t)===n})}(a,e);if(t)return t.title}return(null!=(i=a.find(e=>"und"===iM(e)))?i:a[0]).title}(e.titles,t)}}).filter(e=>""!==e.value):[]}(o,(s=null!=(n=null==(a=globalThis.navigator)?void 0:a.languages)?n:[null==(r=globalThis.navigator)?void 0:r.language],[(e=>{let t=e;for(;t;){if(t.hasAttribute("lang"))return t.getAttribute("lang")||void 0;let e=t.getRootNode();t=e instanceof ShadowRoot?e.host:void 0}})(t),...s].filter(e=>!!e))),i))},ab=null!=(ae=null==(i7=null==globalThis?void 0:globalThis.navigator)?void 0:i7.userAgent)?ae:"",ag=null!=(aa=null==(ai=null==(at=null==globalThis?void 0:globalThis.navigator)?void 0:at.userAgentData)?void 0:ai.platform)?aa:"",af=ab.toLowerCase().includes("android")||["x11","android"].some(e=>ag.toLowerCase().includes(e)),aE=new WeakMap,ay="mux.com",a_=null==(ar=t4.isSupported)?void 0:ar.call(t4),aT=()=>{if("undefined"!=typeof window)return t1.utils.now()},ak=t1.utils.generateUUID,aA=({playbackId:e,customDomain:t=ay,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=ip(e),p=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(i&&p.searchParams.set("max_resolution",i),a&&(p.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),s&&p.searchParams.set("program_end_time",`${s}`),o&&p.searchParams.set("asset_start_time",`${o}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},aw=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},aS=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},aI=e=>{var t;return null==(t=aE.get(e))?void 0:t.error},aC=e=>{var t,i;return null!=(i=null==(t=aE.get(e))?void 0:t.streamType)?i:ii},aR=e=>{var t,i;return null!=(i=null==(t=aE.get(e))?void 0:t.seekable)?i:e.seekable},aL=.034,aM=(e,t,i=aL)=>e>t||((e,t,i=aL)=>Math.abs(e-t)<=i)(e,t,i),ax=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},aD=(e,t)=>e.ended||e.loop?e.ended:!!(t&&ax(e,t))||((e,t=aL)=>e.paused&&aM(e.currentTime,e.duration,t))(e),aN=(e,t,i)=>{var a,r,n;aP(t,i,e);let{metadata:s={}}=e,{view_session_id:o=ak()}=s,l=null!=(a=null==e?void 0:e.metadata)&&a.video_id?e.metadata.video_id:aK(e)&&null!=(n=null!=(r=aw(e.playbackId))?r:aS(e.src))?n:e.src;s.view_session_id=o,s.video_id=l,e.metadata=s,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},e.fallbackToWebkitFairplay=async()=>{var i;let a=!t.paused,r=t.currentTime;e.useWebkitFairplay=!0;let n=e.muxDataKeepSession;e.muxDataKeepSession=!0;let s=null==(i=aE.get(t))?void 0:i.coreReference;aN(e,t,s),e.muxDataKeepSession=n,e.useWebkitFairplay=!1,a&&await t.play().then(()=>{t.currentTime=r}).catch(()=>{}),t.currentTime=r},aE.set(t,{retryCount:0});let d=aH(e,t),u=(({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return im(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d})(e,t,d);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?d&&t.mux.addHLSJS({hlsjs:d,Hls:d?t4:void 0}):aG(e,t,d),aY(e,t,d),iK(t),i0(t);let c=((e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=iC(a)?a:!!a,o=()=>{r||im(t,"playing",()=>{r=!0},{once:!0})};if(o(),im(t,"loadstart",()=>{r=!1,o(),iR(t,s)},{once:!0}),im(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==ii?e.streamType===it:!Number.isFinite(t.duration)),iR(t,s)},{once:!0}),i&&i.once(t4.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==ii?e.streamType===it:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&im(t,"play",()=>{"metadata"===t.preload?i.once(t4.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||iR(t,s=iC(e)?e:!!e)}})(e,t,d);((e,t,i)=>{let{minPreloadSegments:a}=e;if(null==a||a<=0||!i)return;let r=0,n=!1,s=t.playbackRate||1,o=()=>{0!==t.playbackRate&&(s=t.playbackRate,t.playbackRate=0)};t.playbackRate=0,im(t,"ratechange",o);let l=(e,{frag:i})=>{n||"main"!==i.type||++r>=a&&(n=!0,t.removeEventListener("ratechange",o),t.playbackRate=s)};i.on(t4.Events.FRAG_BUFFERED,l),t.addEventListener("teardown",()=>{n||(n=!0,i.off(t4.Events.FRAG_BUFFERED,l),t.playbackRate=s)},{once:!0})})(e,t,d),((e,t,i)=>{let{initialEstimateSegments:a}=e;if(null==a||a<=0||!i)return;let r=0;i.on(t4.Events.FRAG_BUFFERED,(e,{frag:t})=>{"main"===t.type&&++r<a&&i.abrController.resetEstimator(i.config.abrEwmaDefaultEstimate)})})(e,0,d);let h={engine:d,setAutoplay:c,setPreload:u},m=aE.get(t);return m&&(m.coreReference=h),h},aO=new WeakMap,aP=(e,t,i)=>{let a=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=i&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",aQ),e.removeEventListener("error",aX),e.removeEventListener("durationchange",az),aE.delete(e),e.dispatchEvent(new Event("teardown")))};function aU(e,t){var i;let a=iv(e);if(a!==io.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=a_&&("mse"===n||af||!(/^((?!chrome|android).)*safari/i.test(ab)&&t.canPlayType("application/vnd.apple.mpegurl")));return r&&(n===ia||!s)}var aH=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l,initialBandwidthEstimateKbps:d}=e,u=iv(e)===io.M3U8,c=aU(e,t);if(u&&!c&&a_){let u={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...null!=d?{abrEwmaDefaultEstimate:1e3*d}:{}},c=aW(a),h=aB(e),m=[ir.QUERY,ir.HEADER].includes(s)?{useHeaders:s===ir.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,p=aj(e,o),b=new t4({debug:i,startPosition:r,cmcd:m,xhrSetup:(e,t)=>{var i,a;if(s&&s!==ir.QUERY)return;let r=i_(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},...u,...p,...c,...h,...o});return p.capLevelController===i4&&void 0!==l&&i4.setMaxAutoResolution(b,l),b.on(t4.Events.MANIFEST_LOADED,async function(e,i){var a;let r=au(null==(a=i.sessionData)?void 0:a["com.apple.hls.chapters"],i.url);r&&av(r,t)}),b}},aW=e=>e===it?{backBufferLength:8}:{},aB=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=aw(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:aV(e,"fairplay"),serverCertificateUrl:aF(e,"fairplay")},"com.widevine.alpha":{licenseUrl:aV(e,"widevine")},"com.microsoft.playready":{licenseUrl:aV(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=e.includes("fps")?as:e.includes("playready")?"playready":e.includes("widevine")?"widevine":void 0;return null==a||a(i),t}))}:{}},a$=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},aq=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},aV=({playbackId:e,tokens:{drm:t}={},customDomain:i=ay},a)=>{let r=aw(e);return`https://license.${i.toLocaleLowerCase().endsWith(ay)?i:ay}/license/${a}/${r}?token=${t}`},aF=({playbackId:e,tokens:{drm:t}={},customDomain:i=ay},a)=>{let r=aw(e);return`https://license.${i.toLocaleLowerCase().endsWith(ay)?i:ay}/appcert/${a}/${r}?token=${t}`},aK=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(ay)||!!i&&a.includes(i.toLocaleLowerCase())},aj=(e,t)=>{let i={};return i.capLevelToPlayerSize=e.capRenditionToPlayerSize,null==i.capLevelToPlayerSize?(i.capLevelController=i4,i.capLevelToPlayerSize=!0):i.capLevelController=t3.CapLevelController,i},aG=(e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=t1,muxDataSDKOptions:o={}}=e,l=aK(e),d=aE.get(t);if(d&&(d.muxDataDisableCookies=!!e.disableCookies),!n&&(r||l)){let{playerInitTime:n,playerSoftwareName:l,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:c,disableCookies:h}=e,m={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};s.monitor(t,{debug:c,beaconCollectionDomain:u,hlsjs:i,Hls:i?t4:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:h,...o,data:{...r?{env_key:r}:{},player_software_name:l,player_software:l,player_software_version:d,player_init_time:n,...m}})}},aY=(e,t,i)=>{var a,r,n;let s=aU(e,t),{src:o,customDomain:l=ay}=e,d=()=>{t.ended||e.disablePseudoEnded||!aD(t,i)||(ax(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},u,c,h=()=>{let e=aR(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(c!==a||u!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),u=i,c=a};if(im(t,"durationchange",h),t&&s){let i=iv(e);if("string"==typeof o){if(o.endsWith(".mp4")&&o.includes(l)){let e=aS(o);ap(new URL(`https://stream.${l}/${e}/metadata.json`).toString(),t)}let n=async()=>{let a=ac(t);return ad(o,t,i,a).then(()=>{a.aborted||(()=>{if(aC(t)!==it||Number.isFinite(t.duration))return;let e=setInterval(h,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),im(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})})()}).catch(i=>{if(i instanceof Response){let a=i1(i,t5,e);if(a)return void aZ(t,a)}})};if("none"===t.preload){let e=()=>{n(),t.removeEventListener("loadedmetadata",i)},i=()=>{n(),t.removeEventListener("play",e)};im(t,"play",e,{once:!0}),im(t,"loadedmetadata",i,{once:!0})}else n();null!=(a=e.tokens)&&a.drm?((e,t)=>{let i={mediaEl:t,getAppCertificate:()=>a$(aF(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=i1(t,"drm",e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)}),getLicenseKey:t=>aq(t,aV(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=i1(t,"drm",e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)}),saveAndDispatchError:aZ,drmTypeCb:()=>{var t;null==(t=e.drmTypeCb)||t.call(e,as)}};if(e.useWebkitFairplay)(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in e)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let t=new t8(iw("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),t8.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000005,a(e,t),()=>{}}let n=t(),s=null,o=t=>{(async()=>{try{var i,r;let a,s,o,u,c,h,m,p;e.webkitKeys||l();let b=await n;if(null===t.initData||null==b)return;let g=(i=t.initData,r=b,a=function(e){let t=new ArrayBuffer(2*e.length),i=new DataView(t);for(let t=0;t<e.length;t++)i.setUint16(2*t,e.charCodeAt(t),!0);return t}(an(i)),s=new Uint8Array(i),o=new Uint8Array(a),u=new Uint8Array(r),c=new Uint8Array(s.byteLength+4+u.byteLength+4+o.byteLength),h=0,m=e=>{c.set(e,h),h+=e.byteLength},p=e=>{let t=new DataView(c.buffer),i=e.byteLength;t.setUint32(h,i,!0),h+=4,m(e)},m(s),p(o),p(u),c);d(g)}catch(t){console.error("Could not start encrypted playback due to exception",t),a(e,t)}})()},l=()=>{try{let t=new WebKitMediaKeys("com.apple.fps.1_0");e.webkitSetMediaKeys(t),r()}catch{let e=new t8("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",t8.MEDIA_ERR_ENCRYPTED,!0);throw e.errorCategory="drm",e.muxCode=5000001,e}},d=t=>{let r=e.webkitKeys.createSession("application/vnd.apple.mpegurl",t),n=async t=>{try{let e=t.message,a=await i(e);r.update(a)}catch(t){console.error("Error on FairPlay session message",t),a(e,t)}},o=t=>{let i=t.target.error;if(!i)return;console.error(`Internal Webkit Key Session Error - sysCode: ${i.systemCode} code: ${i.code}`);let r=new t8(iw("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),t8.MEDIA_ERR_ENCRYPTED,!0);r.errorCategory="drm",r.muxCode=5000005,a(e,r)},l=()=>{r.removeEventListener("webkitkeymessage",n),r.removeEventListener("webkitkeyerror",o),e.removeEventListener("teardown",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",l),s=null;try{r.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",l,{once:!0}),r.addEventListener("webkitkeymessage",n),r.addEventListener("webkitkeyerror",o),e.addEventListener("teardown",l),s=l},u=()=>{e.removeEventListener("webkitneedkey",o),e.removeEventListener("teardown",u),null==s||s();try{e.webkitSetMediaKeys(null)}catch{}};return e.addEventListener("webkitneedkey",o),e.addEventListener("teardown",u,{once:!0})})(i);else{let t=(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async t=>{try{let i=t.initDataType;if("skd"!==i)return void console.error(`Received unexpected initialization data type "${i}"`);e.mediaKeys||await l(i);let a=t.initData;if(null==a)return void console.error(`Could not start encrypted playback due to missing initData in ${t.type} event`);await d(i,a)}catch(t){a(e,t);return}},l=async i=>{let n=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[i],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(e=>(r(),e)).catch(()=>{let t=new t8(iw("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),t8.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000001,a(e,t)});if(!n)return;let s=await n.createMediaKeys();try{let e=await t();await s.setServerCertificate(e).catch(()=>{let e=iw("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new t8(e,t8.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000004,Promise.reject(t)})}catch(t){a(e,t);return}await e.setMediaKeys(s)},d=async(t,r)=>{let o=e.mediaKeys.createSession(),l=async t=>{let r=t.message,n=await i(r);try{await o.update(n)}catch{let t=new t8(iw("Failed to update DRM license. This may be an issue with the player or your protected content."),t8.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000003,a(e,t)}},d=()=>{o.keyStatuses.forEach(t=>{let i;"internal-error"===t?((i=new t8(iw("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),t8.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",i.muxCode=5000005):("output-restricted"===t||"output-downscaled"===t)&&((i=new t8(iw("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),t8.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",i.muxCode=5000006),i&&a(e,i)})};o.addEventListener("keystatuseschange",d),o.addEventListener("message",l);let u=async()=>{o.removeEventListener("keystatuseschange",d),o.removeEventListener("message",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",u),e.removeEventListener("teardown",u),await o.close().catch(e=>{console.warn("There was an error when closing EME session",e)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",u,{once:!0}),e.addEventListener("teardown",u,{once:!0}),s=u,await o.generateRequest(t,r).catch(async t=>{if("NotSupportedError"===t.name&&"webkitCurrentPlaybackTargetIsWireless"in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),null==n||n();else{let e=new t8(iw("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),t8.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory="drm",e.muxCode=5000002,console.error("Failed to generate license request",t),Promise.reject(e)}})},u=async()=>{e.removeEventListener("encrypted",o),e.removeEventListener("teardown",u),s&&await s(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener("encrypted",o),e.addEventListener("teardown",u,{once:!0}),u})({fallbackToWebkitFairplay:async()=>{var i;await t(),null==(i=e.fallbackToWebkitFairplay)||i.call(e)},...i})}})(e,t):im(t,"encrypted",()=>{let e=new t8(iw("Attempting to play DRM-protected content without providing a DRM token."),t8.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory="drm",e.muxCode=5000002,aZ(t,e)},{once:!0}),t.setAttribute("src",o),e.startTime&&((null!=(r=aE.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",az,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",aQ),t.addEventListener("error",aX),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),im(t,"pause",d),im(t,"seeked",d),im(t,"play",()=>{t.ended||aM(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else if(i&&o){let a,r;i.once(t4.Events.LEVEL_LOADED,(e,a)=>{((e,t,i)=>{var a,r,n,s,o,l,d,u,c;let h,m,p,b,g,{streamType:f,targetLiveWindow:E,liveEdgeStartOffset:y,lowLatency:_}=(m=ib(h=e.type),p=ig(h),g=!!(null!=(c=e.partList)&&c.length),m===it&&(b=g?2*e.partTarget:3*e.targetduration),{streamType:m,targetLiveWindow:p,liveEdgeStartOffset:b,lowLatency:g});if(f===it){_?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=aE.get(t))?o:{}).seekable=e}(null!=(l=aE.get(t))?l:{}).liveEdgeStartOffset=y,(null!=(d=aE.get(t))?d:{}).targetLiveWindow=E,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=aE.get(t))?u:{}).streamType=f,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(a.details,t,i),h(),aC(t)!==it||Number.isFinite(t.duration)||(i.on(t4.Events.LEVEL_UPDATED,h),im(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(t4.Events.LEVELS_UPDATED,h)}))});let s=null!=(n=e.maxReconnectRetries)?n:0,l=s>0?(({hls:e,mediaEl:t,src:i,muxMediaState:a,saveAndDispatchError:r,maxRetries:n})=>{var s;let o,l=0,d=!1,u=!1,c=!1,h=()=>{null!=o&&(clearTimeout(o),o=void 0)},m=e=>(null==e?void 0:e.muxCode)===2000003,p=()=>{!c&&i?e.loadSource(i):e.startLoad(t.currentTime)},b=()=>{let e=a.get(t);!(null!=e&&e.networkError)||u||!t.paused&&t.readyState<HTMLMediaElement.HAVE_FUTURE_DATA&&((()=>{let e=a.get(t);if(m(null==e?void 0:e.error))return;let i=new t8(iw("Attempting to reconnect..."),t8.MEDIA_ERR_NETWORK,!1);i.errorCategory=t5,i.muxCode=2000003,e&&(e.error=i),t.dispatchEvent(new CustomEvent("error",{detail:i}))})(),(()=>{if(null==o&&!d){if(l>=n){let e;return d=!1,u=!0,h(),(e=new t8(iw("Network error, try reloading."),t8.MEDIA_ERR_NETWORK,!0)).errorCategory=t5,e.reload=!0,r(t,e)}d=!0,o=setTimeout(()=>{o=void 0,l+=1,p()},Math.min(1e3*2**l,3e4))}})())},g=()=>{let e=a.get(t);null!=e&&e.networkError&&(l=0,u=!1,h(),d=!0,p())};return null==(s=globalThis.addEventListener)||s.call(globalThis,"online",g),e.on(t4.Events.FRAG_BUFFERED,()=>{let e=a.get(t);e&&(e.networkError||m(e.error))&&(e.networkError=!1,d=!1,l=0,u=!1,h(),e.error&&(e.error=null,t.dispatchEvent(new Event("emptied"))))}),im(t,"playing",()=>{let e=a.get(t);null!=e&&e.networkError&&(d=!1,l=0,u=!1,h(),e.error&&(e.error=null))}),im(t,"waiting",b),t.addEventListener("teardown",()=>{var e;null==(e=globalThis.removeEventListener)||e.call(globalThis,"online",g),h()},{once:!0}),{handleHlsError:(e,i)=>{var r,n;let s;if(e.type!==t4.ErrorTypes.NETWORK_ERROR)return!1;let o=null!=(n=null==(r=e.response)?void 0:r.code)?n:0;return(2000002===i.muxCode||0===o||o>=500)&&!!e.fatal&&((s=a.get(t))&&(s.networkError=!0),d=!1,b(),!0)},onManifestLoaded:()=>{c=!0,d=!1,h()}}})({hls:i,mediaEl:t,src:o,muxMediaState:aE,saveAndDispatchError:aZ,maxRetries:s}):void 0;i.on(t4.Events.ERROR,(a,r)=>{var n,s;let o=ra(r,e);if(2412e3===o.muxCode){let e=null!=(n=aE.get(t))?n:{},a=null!=(s=e.retryCount)?s:0;if(a<6){let n=0===a?5e3:6e4,s=new t8(`Retrying in ${n/1e3} seconds...`,o.code,o.fatal);Object.assign(s,o),aZ(t,s);let l=setTimeout(()=>{e.retryCount=a+1,"manifestLoadError"===r.details&&r.url&&i.loadSource(r.url)},n);t.addEventListener("teardown",()=>clearTimeout(l),{once:!0});return}{e.retryCount=0;let i=new t8("Network error, try reloading.",o.code,o.fatal);Object.assign(i,o),i.reload=!0,aZ(t,i);return}}null!=l&&l.handleHlsError(r,o)||aZ(t,o)}),i.on(t4.Events.MANIFEST_LOADED,()=>{null==l||l.onManifestLoaded();let e=aE.get(t);null!=e&&e.networkError||e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",aX),im(t,"waiting",d),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(t4.Events.MANIFEST_PARSED,function(t,i){o();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(t4.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(s(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}});let r=()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)};e.audioTracks.addEventListener("change",r),t.on(t4.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let n=e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&(t.nextLevel=i)};null==(i=e.videoRenditions)||i.addEventListener("change",n);let s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},o=()=>{(()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)})(),s()};t.once(t4.Events.DESTROYING,()=>{var t,i;o(),null==(t=e.audioTracks)||t.removeEventListener("change",r),null==(i=e.videoRenditions)||i.removeEventListener("change",n)})}(e,i),i.on(t4.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(e,{tracks:a})=>{a.forEach(e=>{var a,r;let n=null!=(a=e.subtitleTrack)?a:e.closedCaptions,s=i.subtitleTracks.findIndex(({lang:t,name:i,type:a})=>t==(null==n?void 0:n.lang)&&i===e.label&&a.toLowerCase()===e.kind),o=(null!=(r=e._id)?r:e.default)?"default":`${e.kind}${s}`;iN(t,e.kind,e.label,null==n?void 0:n.lang,o,e.default)})}),a=()=>{if(!i.subtitleTracks.length)return;let e=Array.from(t.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!e)return;let a=i.subtitleTracks[i.subtitleTrack],r=a?a.default?"default":`${i.subtitleTracks[i.subtitleTrack].type.toLowerCase()}${i.subtitleTrack}`:void 0;if(i.subtitleTrack<0||(null==e?void 0:e.id)!==r){let t=i.subtitleTracks.findIndex(({lang:t,name:i,type:a,default:r})=>"default"===e.id&&r||t==e.language&&i===e.label&&a.toLowerCase()===e.kind);i.subtitleTrack=t}(null==e?void 0:e.id)===r&&e.cues&&Array.from(e.cues).forEach(t=>{e.addCue(t)})},t.textTracks.addEventListener("change",a),i.on(t4.Events.CUES_PARSED,(e,{track:i,cues:a})=>{let r=t.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),i.once(t4.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",a),t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})}),r=()=>{Array.from(t.textTracks).forEach(e=>{var i;if(!["subtitles","caption"].includes(e.kind)&&("thumbnails"===e.label||"chapters"===e.kind)){if(!(null!=(i=e.cues)&&i.length)){let i="track";e.kind&&(i+=`[kind="${e.kind}"]`),e.label&&(i+=`[label="${e.label}"]`);let a=t.querySelector(i),r=null==a?void 0:a.getAttribute("src");a&&r&&(a.removeAttribute("src"),setTimeout(()=>{a.setAttribute("src",r)},0))}"hidden"!==e.mode&&(e.mode="hidden")}})},i.once(t4.Events.MANIFEST_LOADED,r),i.once(t4.Events.MEDIA_ATTACHED,r),i.attachMedia(t)}else console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function az(e){var t;let i=e.target,a=null==(t=aE.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function aQ(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new t8(i,a);if(t.src&&a===t8.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var e;let i=null!=(e=aI(t))?e:t.error;(null==i?void 0:i.code)===t8.MEDIA_ERR_SRC_NOT_SUPPORTED&&aZ(t,r)},500);if(t.src&&(a!==t8.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}aZ(t,r)}function aZ(e,t){var i;t.fatal&&((null!=(i=aE.get(e))?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function aX(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof t8))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=aE.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var aJ,a0,a1,a2,a3,a4,a5,a9,a8,a6,a7,re,rt,ri,ra=(e,t)=>{var i,a,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[t4.ErrorTypes.NETWORK_ERROR]:t8.MEDIA_ERR_NETWORK,[t4.ErrorTypes.MEDIA_ERROR]:t8.MEDIA_ERR_DECODE,[t4.ErrorTypes.KEY_SYSTEM_ERROR]:t8.MEDIA_ERR_ENCRYPTED},s,o=[t4.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,t4.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?t8.MEDIA_ERR_NETWORK:n[e.type];if(o===t8.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=e.type===t4.ErrorTypes.KEY_SYSTEM_ERROR?"drm":e.type===t4.ErrorTypes.NETWORK_ERROR?t5:void 0)?i:t5;s=null!=(a=i1(e.response,r,t,e.fatal))?a:new t8("",o,e.fatal)}else o===t8.MEDIA_ERR_ENCRYPTED?e.details===t4.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new t8(iw("Attempting to play DRM-protected content without providing a DRM token."),t8.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000002):e.details===t4.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new t8(iw("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),t8.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000001):e.details===t4.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new t8(iw("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),t8.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",s.muxCode=5000002):e.details===t4.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new t8(iw("Failed to update DRM license. This may be an issue with the player or your protected content."),t8.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000003):e.details===t4.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new t8(iw("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t8.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000004):e.details===t4.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new t8(iw("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),t8.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000005):e.details===t4.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new t8(iw("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),t8.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",s.muxCode=5000006):((s=new t8(e.error.message,t8.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5e6):s=new t8("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s},rr=e.i(528917),rn=e=>{throw TypeError(e)},rs=(e,t,i)=>t.has(e)||rn("Cannot "+i),ro=(e,t,i)=>(rs(e,t,"read from private field"),i?i.call(e):t.get(e)),rl=(e,t,i)=>t.has(e)?rn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),rd=(e,t,i,a)=>(rs(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ru=(e,t,i)=>(rs(e,t,"access private method"),i),rc=(()=>{try{return"0.31.6"}catch{}return"UNKNOWN"})(),rh=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,rm={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",MAX_RECONNECT_RETRIES:"max-reconnect-retries",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},rp=Object.values(rm),rv="mux-video",rb=class extends rr.CustomVideoElement{constructor(){super(),rl(this,a7),rl(this,aJ),rl(this,a0),rl(this,a1,{}),rl(this,a2,{}),rl(this,a3),rl(this,a4),rl(this,a5),rl(this,a9),rl(this,a8,""),rl(this,a6,e=>{var t,i,a;let r=(i=this.nativeEl,null==(a=aE.get(i))?void 0:a.metadata),n=null!=(t=this.metadata)?t:{};this.metadata={...r,...n},(null==r?void 0:r["com.mux.video.branding"])==="mux-free-plan"&&(rd(this,a8,"default"),this.updateLogo())}),rl(this,rt),rd(this,a0,aT())}static get NAME(){return rv}static get VERSION(){return rc}static get observedAttributes(){var e;return[...rp,...null!=(e=rr.CustomVideoElement.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?rh:`<img part="logo" src="${e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${rr.CustomVideoElement.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(t=e[rm.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(rm.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?is.includes(e)?this.setAttribute(rm.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${is.join()}`):this.removeAttribute(rm.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(rm.PLAYER_INIT_TIME)?+this.getAttribute(rm.PLAYER_INIT_TIME):ro(this,a0)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(rm.PLAYER_INIT_TIME):this.setAttribute(rm.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=ro(this,a5))?e:rv}set playerSoftwareName(e){rd(this,a5,e)}get playerSoftwareVersion(){var e;return null!=(e=ro(this,a4))?e:rc}set playerSoftwareVersion(e){rd(this,a4,e)}get _hls(){var e;return null==(e=ro(this,a7,re))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=aI(this.nativeEl))?e:null}get errorTranslator(){return ro(this,a9)}set errorTranslator(e){rd(this,a9,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(rm.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(rm.TYPE,e):this.removeAttribute(rm.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(rm.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(rm.DEBUG,""):this.removeAttribute(rm.DEBUG))}get disableTracking(){return this.hasAttribute(rm.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(rm.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(rm.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(rm.DISABLE_COOKIES,""):this.removeAttribute(rm.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(rm.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(rm.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(rm.DISABLE_PSEUDO_ENDED))}get maxReconnectRetries(){let e=this.getAttribute(rm.MAX_RECONNECT_RETRIES);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set maxReconnectRetries(e){e!==this.maxReconnectRetries&&(null==e?this.removeAttribute(rm.MAX_RECONNECT_RETRIES):this.setAttribute(rm.MAX_RECONNECT_RETRIES,`${e}`))}get startTime(){let e=this.getAttribute(rm.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(rm.START_TIME):this.setAttribute(rm.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(rm.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(null==e?this.removeAttribute(rm.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(rm.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(rm.INITIAL_ESTIMATE_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(null==e?this.removeAttribute(rm.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(rm.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(rm.MIN_PRELOAD_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set minPreloadSegments(e){e!==this.minPreloadSegments&&(null==e?this.removeAttribute(rm.MIN_PRELOAD_SEGMENTS):this.setAttribute(rm.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){var e;return this.hasAttribute(rm.PLAYBACK_ID)?this.getAttribute(rm.PLAYBACK_ID):null!=(e=aS(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(rm.PLAYBACK_ID,e):this.removeAttribute(rm.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(rm.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(rm.MAX_RESOLUTION,e):this.removeAttribute(rm.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(rm.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(rm.MIN_RESOLUTION,e):this.removeAttribute(rm.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(rm.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(rm.MAX_AUTO_RESOLUTION):this.setAttribute(rm.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(rm.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(rm.RENDITION_ORDER,e):this.removeAttribute(rm.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(rm.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(rm.PROGRAM_START_TIME):this.setAttribute(rm.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(rm.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(rm.PROGRAM_END_TIME):this.setAttribute(rm.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(rm.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(rm.ASSET_START_TIME):this.setAttribute(rm.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(rm.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(rm.ASSET_END_TIME):this.setAttribute(rm.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(rm.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(rm.CUSTOM_DOMAIN,e):this.removeAttribute(rm.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return(null==(e=this._hlsConfig)?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:ro(this,rt)}set capRenditionToPlayerSize(e){rd(this,rt,e)}get drmToken(){var e;return null!=(e=this.getAttribute(rm.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(rm.DRM_TOKEN,e):this.removeAttribute(rm.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(rm.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(rm.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(rm.PLAYBACK_ID)){let[,e]=ip(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(rm.PLAYBACK_TOKEN,e):this.removeAttribute(rm.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(rm.PLAYBACK_TOKEN),t=this.getAttribute(rm.DRM_TOKEN);return{...ro(this,a2),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){rd(this,a2,null!=e?e:{})}get ended(){return aD(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(rm.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(rm.ENV_KEY,e):this.removeAttribute(rm.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(rm.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(rm.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(rm.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(rm.STREAM_TYPE))?e:aC(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(rm.STREAM_TYPE,e):this.removeAttribute(rm.STREAM_TYPE))}get targetLiveWindow(){var e,t,i;return this.hasAttribute(rm.TARGET_LIVE_WINDOW)?+this.getAttribute(rm.TARGET_LIVE_WINDOW):(e=this.nativeEl,null!=(i=null==(t=aE.get(e))?void 0:t.targetLiveWindow)?i:NaN)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(rm.TARGET_LIVE_WINDOW):this.setAttribute(rm.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(rm.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return(e=>{var t;let i=null==(t=aE.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return NaN;let a=aR(e);return a.length?a.end(a.length-1)-i:NaN})(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(rm.LIVE_EDGE_OFFSET))return+this.getAttribute(rm.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(rm.LIVE_EDGE_OFFSET):this.setAttribute(rm.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return aR(this.nativeEl)}async addCuePoints(e){return this.nativeEl.currentSrc||console.warn("addCuePoints() was called before the media element has loaded. Wait for the loadstart event before calling addCuePoints()."),iq(this.nativeEl,e)}get activeCuePoint(){return iF(this.nativeEl)}get cuePoints(){return function(e,t={label:iB}){let i=iO(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>iV(e)):[]}(this.nativeEl)}async addChapters(e){return this.nativeEl.currentSrc||console.warn("addChapters() was called before the media element has loaded. Wait for the loadstart event before calling addChapters()."),iZ(this.nativeEl,e)}get activeChapter(){return iJ(this.nativeEl)}get chapters(){return function(e,t={label:ij}){var i;let a=iO(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,t=>iY(t,e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(rm.PREFER_PLAYBACK);if("mse"===e||e===ia)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===ia?this.setAttribute(rm.PREFER_PLAYBACK,e):this.removeAttribute(rm.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![rm.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...ro(this,a1)}}set metadata(e){rd(this,a1,null!=e?e:{}),this.mux&&this.mux.emit("hb",ro(this,a1))}get _hlsConfig(){return ro(this,a3)}set _hlsConfig(e){rd(this,a3,e)}get logo(){var e;return null!=(e=this.getAttribute(rm.LOGO))?e:ro(this,a8)}set logo(e){e?this.setAttribute(rm.LOGO,e):this.removeAttribute(rm.LOGO)}load(){aN(this,this.nativeEl,ro(this,a7,re))}unload(){aP(this.nativeEl,ro(this,a7,re),this)}attributeChangedCallback(e,t,i){var a,r;switch(rr.CustomVideoElement.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case rm.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case rm.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?ru(this,a7,ri).call(this):e&&!a?this.unload():e&&a&&(this.unload(),ru(this,a7,ri).call(this));break}case"autoplay":if(i===t)break;null==(a=ro(this,a7,re))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=ro(this,a7,re))||r.setPreload(i);break;case rm.PLAYBACK_ID:case rm.CUSTOM_DOMAIN:case rm.MAX_RESOLUTION:case rm.MIN_RESOLUTION:case rm.RENDITION_ORDER:case rm.PROGRAM_START_TIME:case rm.PROGRAM_END_TIME:case rm.ASSET_START_TIME:case rm.ASSET_END_TIME:case rm.PLAYBACK_TOKEN:this.hasAttribute(rm.PLAYBACK_ID)&&(this.src=aA(this));break;case rm.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case rm.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case rm.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case rm.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case rm.LOGO:(null==i||i!==t)&&this.updateLogo();break;case rm.DISABLE_TRACKING:if(null==i||i!==t){let e=this.currentTime,t=this.paused;this.unload(),ru(this,a7,ri).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case rm.DISABLE_COOKIES:(null==i||i!==t)&&((e,t,i)=>{if(!t)return;let a=!!e.disableCookies,r=aE.get(t);!r||r.muxDataDisableCookies===a||(t&&(t.mux&&(t.mux.deleted||t.mux.destroy(),delete t.mux),aO.has(t)||aO.set(t,Promise.resolve().then(()=>{var a,r;aO.delete(t);let n=aE.get(t);n&&(!t.mux||t.mux.deleted)&&aG(e,t,null==(r=null!=(a=n.coreReference)?a:i)?void 0:r.engine)}))),a&&Promise.resolve().then(()=>{let t,i;e.disableCookies&&(t=new Date(0).toUTCString(),i=new Set(["muxData"]),document.cookie.split(";").forEach(e=>{let t=e.split("=")[0].trim();t.startsWith("muxData")&&i.add(t)}),i.forEach(e=>{document.cookie=`${e}=;expires=${t};path=/`}))}))})(this,this.nativeEl,ro(this,a7,re));break;case rm.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');e&&(e.innerHTML=this.constructor.getLogoHTML(ro(this,a8)||this.logo))}connectedCallback(){var e,t;null==(e=super.connectedCallback)||e.call(this),null==(t=this.nativeEl)||t.addEventListener("muxmetadata",ro(this,a6)),this.nativeEl&&this.src&&!ro(this,a7,re)&&ru(this,a7,ri).call(this)}disconnectedCallback(){var e,t;null==(e=this.nativeEl)||e.removeEventListener("muxmetadata",ro(this,a6)),this.unload(),null==(t=super.disconnectedCallback)||t.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};aJ=new WeakMap,a0=new WeakMap,a1=new WeakMap,a2=new WeakMap,a3=new WeakMap,a4=new WeakMap,a5=new WeakMap,a9=new WeakMap,a8=new WeakMap,a6=new WeakMap,a7=new WeakSet,re=function(){var e,t;return e=this.nativeEl,null==(t=aE.get(e))?void 0:t.coreReference},rt=new WeakMap,ri=async function(){ro(this,aJ)||(await rd(this,aJ,Promise.resolve()),rd(this,aJ,null),this.load())};let rg=new WeakMap;class rf extends Error{}class rE extends Error{}let ry=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];function r_(){return globalThis.cast?.framework?.CastContext.getInstance()}function rT(){return r_()?.getCurrentSession()}function rk(){return rT()?.getSessionObj().media[0]}function rA(e){return r_().setOptions({...rw(),...e})}function rw(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function rS(e){if(!e)return;let t=e.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return t?t[1]:null}function rI(e){let t=e.split("\n").find(e=>!e.trim().startsWith("#")&&""!==e.trim());return t?.trim()}async function rC(e){if(!e)return!1;if(/\.m3u8?(\?.*)?$/i.test(e))return!0;if(e.startsWith("blob:"))return!1;try{let t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return ry.some(e=>t===e)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function rR(e){if(!e||e.startsWith("blob:"))return{videoFormat:void 0,audioFormat:void 0};try{let t=await (await fetch(e)).text(),i=t,a=function(e){let t=e.split("\n"),i=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith("#EXT-X-STREAM-INF")){let a=t[e+1]?t[e+1].trim():"";a&&!a.startsWith("#")&&i.push(a)}return i}(t);if(a.length>0){let t=new URL(a[0],e).toString();i=await (await fetch(t)).text()}let r=rI(i),n=rS(r),s=function(e){for(let t of e.split("\n")){let e=t.trim();if(e.startsWith("#EXT-X-MEDIA")&&/TYPE=AUDIO/i.test(e)){let t=e.match(/URI="([^"]+)"/i);if(t)return t[1]}}}(t),o=n;if(s)try{let t=new URL(s,e).toString(),i=await (await fetch(t)).text(),a=rI(i);o=rS(a)??n}catch(e){console.error("Error while trying to parse the audio rendition playlist",e)}return{videoFormat:n,audioFormat:o}}catch(e){return console.error("Error while trying to parse the manifest playlist",e),{videoFormat:void 0,audioFormat:void 0}}}let rL=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),rM=new WeakSet;rq=()=>{globalThis.chrome?.cast?.isAvailable?t||(t=cast.framework,r_().addEventListener(t.CastContextEventType.CAST_STATE_CHANGED,e=>{rL.forEach(t=>rg.get(t).onCastStateChanged?.(e))}),r_().addEventListener(t.CastContextEventType.SESSION_STATE_CHANGED,e=>{rL.forEach(t=>rg.get(t).onSessionStateChanged?.(e))}),rL.forEach(e=>rg.get(e).init?.())):console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable)},globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?rq():customElements.whenDefined("google-cast-button").then(rq):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(rq)};let rx=0;class rD extends EventTarget{#e;#t;#i;#a;#r="disconnected";#n=!1;#s=new Set;#o=new WeakMap;#l=()=>this.#d();constructor(e){super(),this.#e=e,rL.add(this),rg.set(this,{init:()=>this.#u(),onCastStateChanged:()=>this.#c(),onSessionStateChanged:()=>this.#h(),getCastPlayer:()=>this.#m}),this.#u()}destroy(){this.#e?.textTracks?.removeEventListener("change",this.#l),this.#a&&this.#i?.controller&&Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.removeEventListener(e,t)}),this.#e&&rM.delete(this.#e),this.#t=!1}get #m(){if(rM.has(this.#e))return this.#i}get state(){return this.#r}async watchAvailability(e){if(this.#e.disableRemotePlayback)throw new rf("disableRemotePlayback attribute is present.");return this.#o.set(e,++rx),this.#s.add(e),queueMicrotask(()=>e(this.#p())),rx}async cancelWatchAvailability(e){if(this.#e.disableRemotePlayback)throw new rf("disableRemotePlayback attribute is present.");e?this.#s.delete(e):this.#s.clear()}async prompt(){if(this.#e.disableRemotePlayback)throw new rf("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new rE("The RemotePlayback API is disabled on this platform.");let e=rM.has(this.#e);rM.add(this.#e),rA(this.#e.castOptions),Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.addEventListener(e,t)});try{await r_().requestSession()}catch(t){if(e||rM.delete(this.#e),"cancel"===t)return;throw Error(t)}rg.get(this.#e)?.loadOnPrompt?.()}#v(){rM.has(this.#e)&&(Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.removeEventListener(e,t)}),rM.delete(this.#e),this.#e.muted=this.#i.isMuted,this.#e.currentTime=this.#i.savedPlayerState.currentTime,!1===this.#i.savedPlayerState.isPaused&&this.#e.play())}#p(){let e=r_()?.getCastState();return e&&"NO_DEVICES_AVAILABLE"!==e}#c(){let e=r_().getCastState();if(rM.has(this.#e)&&"CONNECTING"===e&&(this.#r="connecting",this.dispatchEvent(new Event("connecting"))),!this.#n&&e?.includes("CONNECT"))for(let e of(this.#n=!0,this.#s))e(!0);else if(this.#n&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(this.#n=!1,this.#s))e(!1)}async #h(){let{SESSION_RESUMED:e}=t.SessionState;if(r_().getSessionState()===e&&this.#e.castSrc===rk()?.media.contentId){rM.add(this.#e),Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.addEventListener(e,t)});try{var i;await (i=new chrome.cast.media.GetStatusRequest,new Promise((e,t)=>{rk().getStatus(i,e,t)}))}catch(e){console.error(e)}this.#a[t.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#a[t.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#u(){t&&!this.#t&&(this.#t=!0,rA(this.#e.castOptions),this.#e.textTracks.addEventListener("change",this.#l),this.#c(),this.#i=new t.RemotePlayer,new t.RemotePlayerController(this.#i),this.#a={[t.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(this.#r="connected",this.dispatchEvent(new Event("connect"))):(this.#v(),this.#r="disconnected",this.dispatchEvent(new Event("disconnect")))},[t.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#e.dispatchEvent(new Event("durationchange"))},[t.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#e.dispatchEvent(new Event("volumechange"))},[t.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#e.dispatchEvent(new Event("volumechange"))},[t.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#m?.isMediaLoaded&&this.#e.dispatchEvent(new Event("timeupdate"))},[t.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#e.dispatchEvent(new Event("resize"))},[t.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#e.dispatchEvent(new Event(this.paused?"pause":"play"))},[t.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#m?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#e.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#m?.playerState]))},[t.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#m?.isMediaLoaded&&(await Promise.resolve(),this.#b())}})}#b(){this.#d()}async #d(){let e;if(!this.#m)return;let t=(this.#i.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),i=[...this.#e.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),a=t.map(({language:e,name:t,trackId:a})=>{let{mode:r}=i.find(i=>i.language===e&&i.label===t)??{};return!!r&&{mode:r,trackId:a}}).filter(Boolean),r=a.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),n=a.find(({mode:e})=>"showing"===e),s=rT()?.getSessionObj().media[0]?.activeTrackIds??[],o=s;if(s.length&&(o=o.filter(e=>!r.includes(e))),n?.trackId&&(o=[...o,n.trackId]),e=o=[...new Set(o)],!(s.length===e.length&&s.every(t=>e.includes(t))))try{let e=new chrome.cast.media.EditTracksInfoRequest(o);await new Promise((t,i)=>{rk().editTracksInfo(e,t,i)})}catch(e){console.error(e)}}}let rN=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#g={paused:!1};#f=rw();#E;#y;get remote(){if(this.#y)return this.#y;if(globalThis.chrome){if(!this.isConnected)return;return this.disableRemotePlayback||function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),rg.set(this,{loadOnPrompt:()=>this.#_()}),this.#y=new rD(this)}return super.remote}get #m(){return rg.get(this.#y)?.getCastPlayer?.()}disconnectedCallback(){this.#y?.destroy(),this.#y=null,rg.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){this.#f.receiverApplicationId=i;return}if(this.#m)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async #_(){this.#g.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#m)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),i=[],a=0;if(t.length&&(e.tracks=t.map(e=>{let t=++a;0===i.length&&"showing"===e.track.mode&&i.push(t);let r=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return r.trackContentId=e.src,r.trackContentType="text/vtt",r.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,r.name=e.label,r.language=e.srclang,r})),"live"===this.castStreamType?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],await rC(this.castSrc)){e.contentType||(e.contentType="application/x-mpegURL");let{videoFormat:t,audioFormat:i}=await rR(this.castSrc);t?.includes("m4s")||t?.includes("mp4")||t?.includes("m4a")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):i?.includes("aac")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.AAC,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS):(t?.includes("ts")||i?.includes("ts"))&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS)}let r=new chrome.cast.media.LoadRequest(e);r.currentTime=super.currentTime??0,r.autoplay=!this.#g.paused,r.activeTrackIds=i,await rT()?.loadMedia(r),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#m){this.#m.isPaused&&this.#m.controller?.playOrPause();return}return super.play()}pause(){if(this.#m){this.#m.isPaused||this.#m.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#f}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){let e=this.currentSrc,t=e?.startsWith("blob:")?void 0:e;return this.getAttribute("cast-src")??this.querySelector("source")?.src??t??this.getAttribute("src")??void 0}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return this.#E}set castCustomData(e){let t=typeof e;["object","undefined"].includes(t)?this.#E=e:console.error(`castCustomData must be nullish or an object but value was of type ${t}`)}get readyState(){if(this.#m)switch(this.#m.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#m?this.#m.isPaused:super.paused}get muted(){return this.#m?this.#m?.isMuted:super.muted}set muted(e){if(this.#m){(e&&!this.#m.isMuted||!e&&this.#m.isMuted)&&this.#m.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#m?this.#m?.volumeLevel??1:super.volume}set volume(e){if(this.#m){this.#m.volumeLevel=+e,this.#m.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#m&&this.#m?.isMediaLoaded?this.#m?.duration??NaN:super.duration}get currentTime(){return this.#m&&this.#m?.isMediaLoaded?this.#m?.currentTime??0:super.currentTime}set currentTime(e){if(this.#m){this.#m.currentTime=e,this.#m.controller?.seek();return}super.currentTime=e}};e.i(684300);var rO=e.i(40018),rP=e=>{throw TypeError(e)},rU=(e,t,i)=>t.has(e)||rP("Cannot "+i),rH=(e,t,i)=>(rU(e,t,"read from private field"),i?i.call(e):t.get(e)),rW=(e,t,i)=>t.has(e)?rP("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),rB=(e,t,i,a)=>(rU(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),r$=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"undefined"==typeof DocumentFragment&&(globalThis.DocumentFragment=class extends r${});var rq,rV,rF=class extends r${},rK=class{constructor(e,t={}){rW(this,rV),rB(this,rV,null==t?void 0:t.detail)}get detail(){return rH(this,rV)}initCustomEvent(){}};rV=new WeakMap;var rj={document:{createElement:function(e,t){return new rF}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(rF)},CustomEvent:rK,EventTarget:r$,HTMLElement:rF,HTMLVideoElement:class extends r${}},rG="undefined"==typeof window||void 0===globalThis.customElements,rY=rG?rj:globalThis;rG&&rj.document;var rz,rQ=class extends rN((0,rO.MediaTracksMixin)(rb)){constructor(){super(...arguments),rW(this,rz)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=rH(this,rz))?e:this.muxCastCustomData}set castCustomData(e){rB(this,rz,e)}};rz=new WeakMap,rY.customElements.get("mux-video")||(rY.customElements.define("mux-video",rQ),rY.MuxVideoElement=rQ);let rZ={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},rX={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},rJ={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},r0=Object.entries(rJ),r1=r0.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),r2=r0.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"}),r3=Object.entries(r2).reduce((e,[t,i])=>{let a=r1[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"}),r4=Object.entries(r1).reduce((e,[t,i])=>{let a=r2[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),r5={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},r9={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},r8={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},r6={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},r7={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},ne={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},nt={HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},ni={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function na(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function nr(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function nn(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function ns(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function no(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function nl(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}e.s(["AttributeToStateChangeEventMap",()=>r4,"AvailabilityStates",()=>r7,"MediaStateChangeEvents",()=>r2,"MediaStateReceiverAttributes",()=>rX,"MediaUIAttributes",()=>r1,"MediaUIEvents",()=>rZ,"MediaUIProps",()=>rJ,"PointerTypes",()=>r6,"ReadyStates",()=>r8,"StateChangeEventToAttributeMap",()=>r3,"StreamTypes",()=>ne,"TextTrackKinds",()=>r5,"TextTrackModes",()=>r9,"VolumeLevels",()=>nt,"WebkitPresentationModes",()=>ni],564784),e.i(564784);let nd=e=>new Promise(t=>setTimeout(t,e)),nu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function nc(e){return String(e).replace(/[&<>"']/g,e=>nu[e])}let nh={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."}},nm=(null==(cf=globalThis.navigator)?void 0:cf.language)||"en",np=(e,t={})=>(e=>{var t,i,a;let[r]=nm.split("-");return(null==(t=nh[nm])?void 0:t[e])||(null==(i=nh[r])?void 0:i[e])||(null==(a=nh.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`),nv=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],nb=(e,t)=>{let i=1===e?np(nv[t].singular):np(nv[t].plural);return`${e} ${i}`},ng=e=>{if(!no(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&nb(e,t)).filter(e=>e).join(", ");return i?np("{time} remaining",{time:r}):0===t?nb(0,2):r};function nf(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}let nE=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});function ny(e=nE){return Array.from(e).map((t,i)=>[Number(e.start(i).toFixed(3)),Number(e.end(i).toFixed(3))].join(":")).join(" ")}e.s(["emptyTimeRanges",()=>nE,"formatAsTimePhrase",()=>ng,"formatTime",()=>nf,"serializeTimeRanges",()=>ny],892098),e.i(892098);class n_{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class nT extends n_{}class nk extends nT{constructor(){super(...arguments),this.role=null}}let nA={createElement:function(){return new nw.HTMLElement},createElementNS:function(){return new nw.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},nw={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:nA,Node:nT,Element:nk,HTMLElement:class extends nk{constructor(){super(...arguments),this.innerHTML=""}get content(){return new nw.DocumentFragment}},DocumentFragment:class extends n_{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},nS="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"undefined"==typeof window||void 0===window.customElements,nI=Object.keys(nw).every(e=>e in globalThis),nC=nS&&!nI?nw:globalThis,nR=nS&&!nI?nA:globalThis.document,nL=new WeakMap,nM=e=>{let t=nL.get(e);return t||nL.set(e,t=new Set),t},nx=new nC.ResizeObserver(e=>{for(let t of e)for(let e of nM(t.target))e(t)});function nD(e,t){nM(e).add(t),nx.observe(e)}function nN(e,t){let i=nM(e);i.delete(t),i.size||nx.unobserve(e)}function nO(e){let t={};for(let i of e)t[i.name]=i.value;return t}function nP(e){var t;return null!=(t=nU(e))?t:n$(e,"media-controller")}function nU(e){var t;let{MEDIA_CONTROLLER:i}=rX,a=e.getAttribute(i);if(a)return null==(t=nV(e))?void 0:t.getElementById(a)}let nH=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},nW=(e,t)=>{let i,a;return(i=`slot[name="${t}"]`,!(a=e.shadowRoot.querySelector(i))?[]:a.children)[0]},nB=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||nB(e,t.getRootNode().host)),n$=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||n$(e.getRootNode().host,t)};function nq(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=nq(i.shadowRoot))?t:i:null}function nV(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function nF(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function nK(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||nj(e,t)}function nj(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];if(!(null==n?void 0:n.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let s=null==n?void 0:n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length);return null==(a=n.sheet.cssRules)?void 0:a[s]}function nG(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function nY(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}nG(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function nz(e,t){return e.hasAttribute(t)}function nQ(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}nz(e,t)!=i&&e.toggleAttribute(t,i)}function nZ(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function nX(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;nZ(e,t,void 0)!==a&&e.setAttribute(t,a)}var nJ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},n0=(e,t,i)=>(nJ(e,t,"read from private field"),i?i.call(e):t.get(e)),n1=(e,t,i,a)=>(nJ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class n2 extends nC.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cE,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rX.MEDIA_CONTROLLER,r1.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rX.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=n0(this,cE))?void 0:a.unassociateElement)||r.call(a,this),n1(this,cE,null)),i&&this.isConnected&&(n1(this,cE,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=n0(this,cE))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i,a;let r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),n1(this,cE,(i=this,(r=i.getAttribute(rX.MEDIA_CONTROLLER))?null==(a=i.getRootNode())?void 0:a.getElementById(r):n$(i,"media-controller"))),this.getAttribute(rX.MEDIA_CONTROLLER)&&(null==(t=null==(e=n0(this,cE))?void 0:e.associateElement)||t.call(e,this)),n0(this,cE)&&(n0(this,cE).addEventListener("pointerdown",this),n0(this,cE).addEventListener("click",this),n0(this,cE).hasAttribute("tabindex")||(n0(this,cE).tabIndex=0))}disconnectedCallback(){var e,t,i,a;this.getAttribute(rX.MEDIA_CONTROLLER)&&(null==(t=null==(e=n0(this,cE))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=n0(this,cE))||i.removeEventListener("pointerdown",this),null==(a=n0(this,cE))||a.removeEventListener("click",this),n1(this,cE,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,d===r6.TOUCH)return void this.handleTap(e);if(d===r6.MOUSE||d===r6.PEN)return void this.handleMouseClick(e)}}}get mediaPaused(){return nz(this,r1.MEDIA_PAUSED)}set mediaPaused(e){nQ(this,r1.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?rZ.MEDIA_PLAY_REQUEST:rZ.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new nC.CustomEvent(t,{composed:!0,bubbles:!0}))}}cE=new WeakMap,n2.shadowRootOptions={mode:"open"},n2.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},nC.customElements.get("media-gesture-receiver")||nC.customElements.define("media-gesture-receiver",n2);var n3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},n4=(e,t,i)=>(n3(e,t,"read from private field"),i?i.call(e):t.get(e)),n5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},n9=(e,t,i,a)=>(n3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),n8=(e,t,i)=>(n3(e,t,"access private method"),i);let n6="audio",n7="autohide",se="breakpoints",st="gesturesdisabled",si="keyboardcontrol",sa="noautohide",sr="userinactive",sn="autohideovercontrols",ss=Object.values(r1);function so(e,t){var i,a,r;if(!e.isConnected)return;let n=Object.fromEntries((null!=(i=e.getAttribute(se))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),s=(a=n,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(n).forEach(t=>{if(s.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(r2.BREAKPOINTS_CHANGE,{detail:s});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(r2.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class sl extends nC.HTMLElement{constructor(){if(super(),n5(this,cC),n5(this,cL),n5(this,cx),n5(this,cN),n5(this,cP),n5(this,cy,void 0),n5(this,c_,0),n5(this,cT,null),n5(this,ck,null),n5(this,cA,void 0),this.breakpointsComputed=!1,n5(this,cw,e=>{let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}}),n5(this,cS,!1),n5(this,cI,e=>{n4(this,cS)||(setTimeout(()=>{so(e.target,e.contentRect.width),n9(this,cS,!1)},0),n9(this,cS,!0))}),n5(this,cH,void 0),n5(this,cW,()=>{if(!n4(this,cH).assignedElements({flatten:!0}).length){n4(this,cT)&&this.mediaUnsetCallback(n4(this,cT));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nO(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}n9(this,cy,new MutationObserver(n4(this,cw)))}static get observedAttributes(){return[n7,st].concat(ss).filter(e=>![r1.MEDIA_RENDITION_LIST,r1.MEDIA_AUDIO_TRACK_LIST,r1.MEDIA_CHAPTERS_CUES,r1.MEDIA_WIDTH,r1.MEDIA_HEIGHT,r1.MEDIA_ERROR,r1.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==n7&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(n9(this,cT,e),e.localName.includes("-")&&await nC.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;n4(this,cy).observe(this,{childList:!0,subtree:!0}),nD(this,n4(this,cI));let t=null!=this.getAttribute(n6)?np("audio player"):np("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(sr,""),so(this,this.getBoundingClientRect().width);let i=this.querySelector(":scope > slot[slot=media]");i&&(n9(this,cH,i),n4(this,cH).addEventListener("slotchange",n4(this,cW))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=nC.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;nN(this,n4(this,cI)),clearTimeout(n4(this,ck)),n4(this,cy).disconnect(),this.media&&this.mediaUnsetCallback(this.media),null==(e=nC.window)||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),n4(this,cH)&&(n4(this,cH).removeEventListener("slotchange",n4(this,cW)),n9(this,cH,null)),n9(this,cS,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){n9(this,cT,null)}handleEvent(e){switch(e.type){case"pointerdown":n9(this,c_,e.timeStamp);break;case"pointermove":n8(this,cC,cR).call(this,e);break;case"pointerup":n8(this,cL,cM).call(this,e);break;case"mouseleave":n8(this,cx,cD).call(this);break;case"mouseup":this.removeAttribute(si);break;case"keyup":n8(this,cP,cU).call(this),this.setAttribute(si,"")}}set autohide(e){let t=Number(e);n9(this,cA,isNaN(t)?0:t)}get autohide(){return(void 0===n4(this,cA)?2:n4(this,cA)).toString()}get breakpoints(){return nZ(this,se)}set breakpoints(e){nX(this,se,e)}get audio(){return nz(this,n6)}set audio(e){nQ(this,n6,e)}get gesturesDisabled(){return nz(this,st)}set gesturesDisabled(e){nQ(this,st,e)}get keyboardControl(){return nz(this,si)}set keyboardControl(e){nQ(this,si,e)}get noAutohide(){return nz(this,sa)}set noAutohide(e){nQ(this,sa,e)}get autohideOverControls(){return nz(this,sn)}set autohideOverControls(e){nQ(this,sn,e)}get userInteractive(){return nz(this,sr)}set userInteractive(e){nQ(this,sr,e)}}cy=new WeakMap,c_=new WeakMap,cT=new WeakMap,ck=new WeakMap,cA=new WeakMap,cw=new WeakMap,cS=new WeakMap,cI=new WeakMap,cC=new WeakSet,cR=function(e){if("mouse"!==e.pointerType&&e.timeStamp-n4(this,c_)<250)return;n8(this,cN,cO).call(this),clearTimeout(n4(this,ck));let t=this.hasAttribute(sn);([this,this.media].includes(e.target)||t)&&n8(this,cP,cU).call(this)},cL=new WeakSet,cM=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(sr);[this,this.media].includes(e.target)&&t?n8(this,cx,cD).call(this):n8(this,cP,cU).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&n8(this,cP,cU).call(this)},cx=new WeakSet,cD=function(){if(0>n4(this,cA)||this.hasAttribute(sr))return;this.setAttribute(sr,"");let e=new nC.CustomEvent(r2.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},cN=new WeakSet,cO=function(){if(!this.hasAttribute(sr))return;this.removeAttribute(sr);let e=new nC.CustomEvent(r2.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},cP=new WeakSet,cU=function(){n8(this,cN,cO).call(this),clearTimeout(n4(this,ck));let e=parseInt(this.autohide);e<0||n9(this,ck,setTimeout(()=>{n8(this,cx,cD).call(this)},1e3*e))},cH=new WeakMap,cW=new WeakMap,sl.shadowRootOptions={mode:"open"},sl.getTemplateHTML=function(e){return`
    <style>
      
      :host([${r1.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${n6}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${n6}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${n6}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${n6}])[${st}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${n6}])[${st}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${n6}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${n6}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${n6}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${n6}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${sa}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${sr}]:not([${r1.MEDIA_PAUSED}]):not([${r1.MEDIA_IS_AIRPLAYING}]):not([${r1.MEDIA_IS_CASTING}]):not([${n6}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${sa}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${sr}]:not([${sa}]):not([${r1.MEDIA_PAUSED}]):not([${r1.MEDIA_IS_CASTING}]):not([${n6}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${sr}][${sn}]:not([${sa}]):not([${r1.MEDIA_PAUSED}]):not([${r1.MEDIA_IS_CASTING}]):not([${n6}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      
      :host(:not([${n6}])[${r1.MEDIA_HAS_PLAYED}]) slot[name=poster],
      :host(:not([${n6}])[${r1.MEDIA_STREAM_TYPE}="${ne.ON_DEMAND}"][${r1.MEDIA_CURRENT_TIME}]:not([${r1.MEDIA_CURRENT_TIME}="0"])) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${n2.shadowRootOptions.mode}">
          ${n2.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},nC.customElements.get("media-container")||nC.customElements.define("media-container",sl);var sd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},su=(e,t,i)=>(sd(e,t,"read from private field"),i?i.call(e):t.get(e)),sc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sh=(e,t,i,a)=>(sd(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sm=(e,t,i)=>(sd(e,t,"access private method"),i);let sp="open";class sv extends nC.HTMLElement{constructor(){super(),sc(this,cV),sc(this,cK),sc(this,cG),sc(this,cz),sc(this,cZ),sc(this,cJ),sc(this,cB,!1),sc(this,c$,null),sc(this,cq,null)}static get observedAttributes(){return[sp,"anchor"]}get open(){return nz(this,sp)}set open(e){nQ(this,sp,e)}handleEvent(e){switch(e.type){case"invoke":sm(this,cz,cQ).call(this,e);break;case"focusout":sm(this,cZ,cX).call(this,e);break;case"keydown":sm(this,cJ,c0).call(this,e)}}connectedCallback(){sm(this,cV,cF).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,t,i){sm(this,cV,cF).call(this),e===sp&&i!==t&&(this.open?sm(this,cK,cj).call(this):sm(this,cG,cY).call(this))}focus(){sh(this,c$,nq());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}cB=new WeakMap,c$=new WeakMap,cq=new WeakMap,cV=new WeakSet,cF=function(){if(!su(this,cB)&&(sh(this,cB,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=nO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=nK(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},cK=new WeakSet,cj=function(){var e;null==(e=su(this,cq))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},cG=new WeakSet,cY=function(){var e;null==(e=su(this,cq))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},cz=new WeakSet,cQ=function(e){sh(this,cq,e.relatedTarget),nB(this,e.relatedTarget)||(this.open=!this.open)},cZ=new WeakSet,cX=function(e){var t;!nB(this,e.relatedTarget)&&(null==(t=su(this,c$))||t.focus(),su(this,cq)&&su(this,cq)!==e.relatedTarget&&this.open&&(this.open=!1))},cJ=new WeakSet,c0=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=su(this,c$))||n.focus(),this.open=!1))},sv.shadowRootOptions={mode:"open"},sv.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},sv.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},nC.customElements.get("media-chrome-dialog")||nC.customElements.define("media-chrome-dialog",sv);var sb=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)},sg=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let sf="hotkeys",sE=[{keys:[{key:" ",label:"Space"},{key:"k"}],description:"Toggle Playback"},{keys:[{key:"m"}],description:"Toggle mute"},{keys:[{key:"f"}],description:"Toggle fullscreen"},{keys:[{key:"c"}],description:"Toggle captions or subtitles, if available"},{keys:[{key:"p"}],description:"Toggle Picture in Picture"},{keys:[{key:"ArrowLeft",label:"←"},{key:"j"}],description:"Seek back 10s"},{keys:[{key:"ArrowRight",label:"→"},{key:"l"}],description:"Seek forward 10s"},{keys:[{key:"ArrowUp",label:"↑"}],description:"Turn volume up"},{keys:[{key:"ArrowDown",label:"↓"}],description:"Turn volume down"},{keys:[{key:"<",label:"< (SHIFT+,)"}],description:"Decrease playback rate"},{keys:[{key:">",label:"> (SHIFT+.)"}],description:"Increase playback rate"},{keys:[{key:"shift+/",label:"SHIFT+/"}],description:"Show keyboard shortcuts"}];function sy(e){return" "===e?"nospace":`no${e.toLowerCase()}`}function s_(e){let t,i=(t=new Set(null==e?void 0:e.split(/\s+/)),sE.map(({keys:e,description:i})=>({keys:e.filter(({key:e})=>!t.has(sy(e))),description:i})).filter(({keys:e})=>e.length)).map(({keys:e,description:t})=>{let i=e.map(({key:e,label:t=e},i)=>i>0?`<span class="key-separator">or</span><span class="key">${t}</span>`:`<span class="key">${t}</span>`).join("");return`
        <tr>
          <td>
            <div class="key-combo">${i}</div>
          </td>
          <td class="description">${t}</td>
        </tr>
      `}).join("");return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${i}</table>
  `}class sT extends sv{constructor(){super(...arguments),sg(this,c1,e=>{var t;if(!this.open)return;let i=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!i)return;let a=e.composedPath(),r=a[0]===this||a.includes(this),n=a.includes(i);r&&!n&&(this.open=!1)}),sg(this,c2,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}static get observedAttributes(){return[...super.observedAttributes,sf]}get hotkeys(){var e;return null!=(e=nZ(this,sf))?e:void 0}set hotkeys(e){nX(this,sf,e)}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",sb(this,c1)),document.addEventListener("keydown",sb(this,c2)))}disconnectedCallback(){this.removeEventListener("click",sb(this,c1)),document.removeEventListener("keydown",sb(this,c2))}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),"open"===e)this.open?(this.addEventListener("click",sb(this,c1)),document.addEventListener("keydown",sb(this,c2))):(this.removeEventListener("click",sb(this,c1)),document.removeEventListener("keydown",sb(this,c2)));else if(e===sf&&i!==t){let e=null==(a=this.shadowRoot)?void 0:a.querySelector("#content");e&&(e.innerHTML=s_(i))}}}c1=new WeakMap,c2=new WeakMap,sT.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${s_(e[sf])}
    </slot>
  `},nC.customElements.get("media-keyboard-shortcuts-dialog")||nC.customElements.define("media-keyboard-shortcuts-dialog",sT);var sk=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sA=(e,t,i)=>(sk(e,t,"read from private field"),i?i.call(e):t.get(e)),sw=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sS=(e,t,i,a)=>(sk(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class sI{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){sw(this,c8),sw(this,c3,void 0),sw(this,c4,void 0),sw(this,c5,void 0),sw(this,c9,new Set),sS(this,c3,e),sS(this,c4,t),sS(this,c5,new Set(i))}[Symbol.iterator](){return sA(this,c8,c6).values()}get length(){return sA(this,c8,c6).size}get value(){var e;return null!=(e=[...sA(this,c8,c6)].join(" "))?e:""}set value(e){var t;e!==this.value&&(sS(this,c9,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...sA(this,c8,c6)][e]}values(){return sA(this,c8,c6).values()}forEach(e,t){sA(this,c8,c6).forEach(e,t)}add(...e){var t,i;e.forEach(e=>sA(this,c9).add(e)),(""!==this.value||(null==(t=sA(this,c3))?void 0:t.hasAttribute(`${sA(this,c4)}`)))&&(null==(i=sA(this,c3))||i.setAttribute(`${sA(this,c4)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>sA(this,c9).delete(e)),null==(t=sA(this,c3))||t.setAttribute(`${sA(this,c4)}`,`${this.value}`)}contains(e){return sA(this,c8,c6).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}c3=new WeakMap,c4=new WeakMap,c5=new WeakMap,c9=new WeakMap,c8=new WeakSet,c6=function(){return sA(this,c9).size?sA(this,c9):sA(this,c5)};let sC=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?r5.CAPTIONS:r5.SUBTITLES,language:i,label:r}},sR=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=sC(e);return{...t,...i}}),sL=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?sC(e):e):"string"==typeof e?sR(e):[e]:[],sM=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,sx=(e=[])=>Array.prototype.map.call(e,sM).join(" "),sD=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},sN=(e,t=[],i=[])=>{let a=sL(i).map(sD);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},sO=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:sD(t);return Array.from(e.textTracks).filter(i)},sP=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(r1.MEDIA_SUBTITLES_SHOWING)},sU="exitFullscreen"in nR?"exitFullscreen":"webkitExitFullscreen"in nR?"webkitExitFullscreen":"webkitCancelFullScreen"in nR?"webkitCancelFullScreen":void 0,sH="fullscreenElement"in nR?"fullscreenElement":"webkitFullscreenElement"in nR?"webkitFullscreenElement":void 0,sW="fullscreenEnabled"in nR?"fullscreenEnabled":"webkitFullscreenEnabled"in nR?"webkitFullscreenEnabled":void 0,sB=()=>{var e;return i||(i=null==(e=null==nR?void 0:nR.createElement)?void 0:e.call(nR,"video"))},s$=async(e=sB())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([sq(e,i.signal),sV(e,t)]);return i.abort(),a},sq=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),sV=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await nd(10)}return e.volume!==t},sF=/.*Version\/.*Safari\/.*/.test(nC.navigator.userAgent),sK=(e=sB())=>(!nC.matchMedia("(display-mode: standalone)").matches||!sF)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),sj=(e=sB())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[sW])||i&&"webkitSupportsFullscreen"in i})({documentElement:nR,media:e}),sG=sj(),sY=sK(),sz=!!nC.WebKitPlaybackTargetAvailabilityEvent,sQ=!!nC.chrome,sZ=e=>sO(e.media,e=>[r5.SUBTITLES,r5.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),sX=e=>sO(e.media,e=>e.mode===r9.SHOWING&&[r5.SUBTITLES,r5.CAPTIONS].includes(e.kind)),sJ=(e,t)=>{let i=sZ(e),a=sX(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)sN(r9.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=nC.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...nC.navigator.languages]:nC.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;sN(r9.DISABLED,i,a),sN(r9.SHOWING,i,[{language:n,label:s,kind:o}])}}},s0=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?s1(e,t):Object.entries(e).every(([e,i])=>e in t&&s0(i,t[e])))),s1=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>s0(e,t[i])))},s2=Object.values(ne),s3=s$().then(e=>a=e),s4=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof nC.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=nC.customElements.get(t);i&&e instanceof i||(await nC.customElements.whenDefined(t),nC.customElements.upgrade(e))}))},s5=new nC.DOMParser,s9={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;!i||Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{let t=null!==nC.localStorage.getItem("media-chrome-pref-muted"),r=i.hasAttribute("muted");if(a){t&&nC.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!t)return;nC.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===nC.localStorage.getItem("media-chrome-pref-muted");s9.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?nC.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||nC.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=nC.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;s9.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&no(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata","seeking"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[ne.LIVE,ne.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(s2.includes(r))return r===ne.UNKNOWN?a:r;let n=t.duration;return n===1/0?ne.LIVE:Number.isFinite(n)?ne.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=s9.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===ne.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(s9.mediaStreamType.get(e)!==ne.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>sZ(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>sX(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![r5.CAPTIONS,r5.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||sJ(t,!0))};return r.addEventListener("loadstart",s),null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=sO(i,{kind:r5.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&s5.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&nB(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!nR.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else nR.pictureInPictureElement&&nR.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[sH];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===ni.FULLSCREEN?i:a})(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(sH in e))return nB(n,r);for(;null==e?void 0:e[sH];){if(e[sH]===r)return!0;e=null==(t=e[sH])?void 0:t.shadowRoot}}return!1})(e),set(e,t,i){var a,r;e?((e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t),!i.detail||(null==(a=t.media)?void 0:a.inert)||null==(r=t.media)||r.focus()):(e=>{var t;let{documentElement:i}=e;if(sU){let e=null==(t=null==i?void 0:i[sU])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&"connected"===i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&nC.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!sG||!sj(t))return r7.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;return sY&&sK(t)?(null==t?void 0:t.disablePictureInPicture)?r7.UNAVAILABLE:void 0:r7.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===a||(null==t?void 0:t.volume)==void 0)return r7.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==a&&s3.then(t=>e(t?void 0:r7.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return sQ&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?r7.UNAVAILABLE:void 0:r7.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>sz?(null==t?void 0:t.availability)==="not-available"?r7.UNAVAILABLE:void 0:r7.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:r7.UNAVAILABLE:r7.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?r7.UNAVAILABLE:void 0:r7.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},s8={[rZ.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=sO(l,{kind:r5.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[rZ.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[rZ.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let s=e.mediaStreamType.get(t)===ne.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[rZ.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[rZ.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[rZ.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[rZ.MEDIA_LOOP_REQUEST](e,t,{detail:i}){let a=!!i;return e.mediaLoop.set(a,t),{mediaLoop:a}},[rZ.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[rZ.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[rZ.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[rZ.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=sZ(t),s=sL(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&nC.localStorage.setItem("media-chrome-pref-subtitles-lang",o),sN(r9.SHOWING,n,s)},[rZ.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=sZ(t);sN(r9.DISABLED,a,null!=i?i:[])},[rZ.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){sJ(t,i)},[rZ.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[rZ.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[rZ.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[rZ.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[rZ.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,i)},[rZ.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[rZ.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[rZ.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[rZ.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var s6=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s7=(e,t,i)=>(s6(e,t,"read from private field"),i?i.call(e):t.get(e)),oe=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ot=(e,t,i,a)=>(s6(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oi=(e,t,i)=>(s6(e,t,"access private method"),i);let oa=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],or="defaultsubtitles",on="defaultstreamtype",os="defaultduration",oo="fullscreenelement",ol="hotkeys",od="keyboardbackwardseekoffset",ou="keyboardforwardseekoffset",oc="keyboarddownvolumestep",oh="keyboardupvolumestep",om="keysused",op="lang",ov="loop",ob="liveedgeoffset",og="noautoseektolive",of="nodefaultstore",oE="nohotkeys",oy="nomutedpref",o_="nosubtitleslangpref",oT="novolumepref",ok="seektoliveoffset";class oA extends sl{constructor(){super(),oe(this,ho),oe(this,hu),oe(this,hh),oe(this,hp),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,oe(this,c7,new sI(this,ol)),oe(this,he,void 0),oe(this,ht,void 0),oe(this,hi,null),oe(this,ha,void 0),oe(this,hr,void 0),oe(this,hn,e=>{var t;null==(t=s7(this,ht))||t.dispatch(e)}),oe(this,hs,void 0),oe(this,hd,e=>{let{key:t,shiftKey:i}=e;i&&("/"===t||"?"===t)||oa.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",s7(this,hd))}),this.associateElement(this);let e={};ot(this,ha,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new nC.CustomEvent(r4[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(oE,ol,on,or,os,oy,oT,op,ov,ob,ok,og)}get mediaStore(){return s7(this,ht)}set mediaStore(e){var t,i;(s7(this,ht)&&(null==(t=s7(this,hr))||t.call(this),ot(this,hr,void 0)),ot(this,ht,e),s7(this,ht)||this.hasAttribute(of))?ot(this,hr,null==(i=s7(this,ht))?void 0:i.subscribe(s7(this,ha))):oi(this,ho,hl).call(this)}get fullscreenElement(){var e;return null!=(e=s7(this,he))?e:this}set fullscreenElement(e){var t;this.hasAttribute(oo)&&this.removeAttribute(oo),ot(this,he,e),null==(t=s7(this,ht))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return nz(this,or)}set defaultSubtitles(e){nQ(this,or,e)}get defaultStreamType(){return nZ(this,on)}set defaultStreamType(e){nX(this,on,e)}get defaultDuration(){return nG(this,os)}set defaultDuration(e){nY(this,os,e)}get noHotkeys(){return nz(this,oE)}set noHotkeys(e){nQ(this,oE,e)}get keysUsed(){return nZ(this,om)}set keysUsed(e){nX(this,om,e)}get liveEdgeOffset(){return nG(this,ob)}set liveEdgeOffset(e){nY(this,ob,e)}get noAutoSeekToLive(){return nz(this,og)}set noAutoSeekToLive(e){nQ(this,og,e)}get noVolumePref(){return nz(this,oT)}set noVolumePref(e){nQ(this,oT,e)}get noMutedPref(){return nz(this,oy)}set noMutedPref(e){nQ(this,oy,e)}get noSubtitlesLangPref(){return nz(this,o_)}set noSubtitlesLangPref(e){nQ(this,o_,e)}get noDefaultStore(){return nz(this,of)}set noDefaultStore(e){nQ(this,of,e)}get resolvedLang(){return(()=>{let[e]=nm.split("-");return nh[nm]?nm:nh[e]?e:"en"})()}attributeChangedCallback(e,t,i){var a,r,n,s,o,l,d,u,c,h,m,p;if(super.attributeChangedCallback(e,t,i),e===oE)i!==t&&""===i?(this.hasAttribute(ol)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys(),oi(this,hh,hm).call(this);else if(e===ol)s7(this,c7).value=i,oi(this,hh,hm).call(this);else if(e===or&&i!==t)null==(a=s7(this,ht))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(or)}});else if(e===on)null==(n=s7(this,ht))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(on))?r:void 0}});else if(e===ob&&i!==t)null==(s=s7(this,ht))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(ob)?+this.getAttribute(ob):void 0,seekToLiveOffset:this.hasAttribute(ok)?+this.getAttribute(ok):this.hasAttribute(ob)?+this.getAttribute(ob):void 0}});else if(e===ok&&i!==t)null==(o=s7(this,ht))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(ok)?+this.getAttribute(ok):this.hasAttribute(ob)?+this.getAttribute(ob):void 0}});else if(e===og)null==(l=s7(this,ht))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(og)}});else if(e===oo){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;ot(this,he,e),null==(u=s7(this,ht))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===op&&i!==t?(nm=i,null==(c=s7(this,ht))||c.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===ov&&i!==t?null==(h=s7(this,ht))||h.dispatch({type:rZ.MEDIA_LOOP_REQUEST,detail:null!=i}):e===oT&&i!==t?null==(m=s7(this,ht))||m.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(oT)}}):e===oy&&i!==t&&(null==(p=s7(this,ht))||p.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(oy)}}))}connectedCallback(){var e,t,i;this.associateElement(this),s7(this,ht)||this.hasAttribute(of)||oi(this,ho,hl).call(this),null==(e=s7(this,ht))||e.dispatch({type:"documentelementchangerequest",detail:nR}),null==(t=s7(this,ht))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),s7(this,ht)&&!s7(this,hr)&&ot(this,hr,null==(i=s7(this,ht))?void 0:i.subscribe(s7(this,ha))),void 0!==s7(this,hs)&&s7(this,ht)&&this.media&&setTimeout(()=>{var e,t,i;(null==(t=null==(e=this.media)?void 0:e.textTracks)?void 0:t.length)&&(null==(i=s7(this,ht))||i.dispatch({type:rZ.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:s7(this,hs)}))},0),this.hasAttribute(oE)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,r,n;if(null==(e=super.disconnectedCallback)||e.call(this),this.disableHotkeys(),s7(this,ht)){let e=s7(this,ht).getState();ot(this,hs,!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)),null==(i=s7(this,ht))||i.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),null==(a=s7(this,ht))||a.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(r=s7(this,ht))||r.dispatch({type:rZ.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}s7(this,hr)&&(null==(n=s7(this,hr))||n.call(this),ot(this,hr,void 0)),this.unassociateElement(this),s7(this,hi)&&(s7(this,hi).remove(),ot(this,hi,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=s7(this,ht))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=s7(this,ht))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){oD(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=oN(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(rZ).forEach(t=>{e.addEventListener(t,s7(this,hn))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(rZ).forEach(t=>{e.removeEventListener(t,s7(this,hn))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),s7(this,ht)&&Object.entries(s7(this,ht).getState()).forEach(([t,i])=>{oD([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",oi(this,hu,hc))}disableHotkeys(){this.removeEventListener("keydown",oi(this,hu,hc)),this.removeEventListener("keyup",s7(this,hd))}get hotkeys(){return s7(this,c7)}set hotkeys(e){nX(this,ol,e)}keyboardShortcutHandler(e){var t,i,a,r,n,s,o,l,d;let u,c,h,m=e.target;if(!((null!=(a=null!=(i=null==(t=m.getAttribute(om))?void 0:t.split(" "))?i:null==m?void 0:m.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||s7(this,c7).contains(sy(e.key)))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&s7(this,c7).contains("noshift+/")))switch(e.key){case" ":case"k":u=s7(this,ht).getState().mediaPaused?rZ.MEDIA_PLAY_REQUEST:rZ.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new nC.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"m":u="off"===this.mediaStore.getState().mediaVolumeLevel?rZ.MEDIA_UNMUTE_REQUEST:rZ.MEDIA_MUTE_REQUEST,this.dispatchEvent(new nC.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"f":u=this.mediaStore.getState().mediaIsFullscreen?rZ.MEDIA_EXIT_FULLSCREEN_REQUEST:rZ.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new nC.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new nC.CustomEvent(rZ.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(od)?+this.getAttribute(od):10;c=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),h=new nC.CustomEvent(rZ.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowRight":case"l":{let e=this.hasAttribute(ou)?+this.getAttribute(ou):10;c=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),h=new nC.CustomEvent(rZ.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowUp":{let e=this.hasAttribute(oh)?+this.getAttribute(oh):.025;c=Math.min((null!=(s=this.mediaStore.getState().mediaVolume)?s:1)+e,1),h=new nC.CustomEvent(rZ.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowDown":{let e=this.hasAttribute(oc)?+this.getAttribute(oc):.025;c=Math.max((null!=(o=this.mediaStore.getState().mediaVolume)?o:1)-e,0),h=new nC.CustomEvent(rZ.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"<":c=Math.max((null!=(l=this.mediaStore.getState().mediaPlaybackRate)?l:1)-.25,.25).toFixed(2),h=new nC.CustomEvent(rZ.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case">":c=Math.min((null!=(d=this.mediaStore.getState().mediaPlaybackRate)?d:1)+.25,2).toFixed(2),h=new nC.CustomEvent(rZ.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case"/":case"?":e.shiftKey&&oi(this,hp,hv).call(this);break;case"p":u=this.mediaStore.getState().mediaIsPip?rZ.MEDIA_EXIT_PIP_REQUEST:rZ.MEDIA_ENTER_PIP_REQUEST,h=new nC.CustomEvent(u,{composed:!0,bubbles:!0}),this.dispatchEvent(h)}}}c7=new WeakMap,he=new WeakMap,ht=new WeakMap,hi=new WeakMap,ha=new WeakMap,hr=new WeakMap,hn=new WeakMap,hs=new WeakMap,ho=new WeakSet,hl=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=s9,requestMap:r=s8,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o,l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||s0(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,b,g,f,E,y,_,T,k,A,w,S;let I=!!o;if(o={...d,...null!=o?o:{},...e},I)return;await s4(...Object.values(e));let C=l.length>0&&0===t&&s,R=d.media!==o.media,L=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),M=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),x=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(b=o.media)?void 0:b.audioTracks),D=(null==(g=d.media)?void 0:g.remote)!==(null==(f=o.media)?void 0:f.remote),N=d.documentElement!==o.documentElement,O=!!d.media&&(R||C),P=!!(null==(E=d.media)?void 0:E.textTracks)&&(L||C),U=!!(null==(y=d.media)?void 0:y.videoRenditions)&&(M||C),H=!!(null==(_=d.media)?void 0:_.audioTracks)&&(x||C),W=!!(null==(T=d.media)?void 0:T.remote)&&(D||C),B=!!d.documentElement&&(N||C),$=O||P||U||H||W||B,q=0===l.length&&1===t&&s,V=!!o.media&&(R||q),F=!!(null==(k=o.media)?void 0:k.textTracks)&&(L||q),K=!!(null==(A=o.media)?void 0:A.videoRenditions)&&(M||q),j=!!(null==(w=o.media)?void 0:w.audioTracks)&&(x||q),G=!!(null==(S=o.media)?void 0:S.remote)&&(D||q),Y=!!o.documentElement&&(N||q),z=V||F||K||j||G||Y;if(!($||z)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&O&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),V&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),F&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),K&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&H&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),j&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&W&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),G&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&B&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),Y&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let b=m[e].stateOwnersUpdateHandlers;if(b&&$&&(Array.isArray(b)?b:[b]).forEach(e=>{"function"==typeof e&&e()}),z){let t=u.map(e=>e(p,o)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else $&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;r[t]&&null==u.mediaErrorCode?c(r[t](a,d,e)):"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),h())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(or),defaultDuration:this.hasAttribute(os)?+this.getAttribute(os):void 0,defaultStreamType:null!=(e=this.getAttribute(on))?e:void 0,liveEdgeOffset:this.hasAttribute(ob)?+this.getAttribute(ob):void 0,seekToLiveOffset:this.hasAttribute(ok)?+this.getAttribute(ok):this.hasAttribute(ob)?+this.getAttribute(ob):void 0,noAutoSeekToLive:this.hasAttribute(og),noVolumePref:this.hasAttribute(oT),noMutedPref:this.hasAttribute(oy),noSubtitlesLangPref:this.hasAttribute(o_)}})},hd=new WeakMap,hu=new WeakSet,hc=function(e){var t;let{metaKey:i,altKey:a,key:r,shiftKey:n}=e,s=n&&("/"===r||"?"===r);if(s&&(null==(t=s7(this,hi))?void 0:t.open)||i||a||!s&&!oa.includes(r))return void this.removeEventListener("keyup",s7(this,hd));let o=e.target,l=o instanceof HTMLElement&&("media-volume-range"===o.tagName.toLowerCase()||"media-time-range"===o.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)||s7(this,c7).contains(sy(r))||l||e.preventDefault(),this.addEventListener("keyup",s7(this,hd),{once:!0})},hh=new WeakSet,hm=function(){s7(this,hi)&&(s7(this,hi).hotkeys=s7(this,c7).value||void 0,(this.noHotkeys||s7(this,c7).contains("noshift+/"))&&(s7(this,hi).open=!1))},hp=new WeakSet,hv=function(){s7(this,hi)||(ot(this,hi,nR.createElement("media-keyboard-shortcuts-dialog")),oi(this,hh,hm).call(this),this.appendChild(s7(this,hi))),s7(this,hi).open=!0};let ow=Object.values(r1),oS=Object.values(rJ),oI=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(nC.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,rX.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>ow.includes(e)):[]},oC=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&nC.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof nC.customElements.get(e.nodeName.toLowerCase()))&&nC.customElements.upgrade(e),oS.some(t=>t in e)||!!oI(e).length},oR=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},oL={[r1.MEDIA_SUBTITLES_LIST]:sx,[r1.MEDIA_SUBTITLES_SHOWING]:sx,[r1.MEDIA_SEEKABLE]:oR,[r1.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(oR).join(" "),[r1.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[r1.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(na).join(" ")},[r1.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(nn).join(" ")}},oM=async(e,t,i)=>{var a,r;if(e.isConnected||await nd(0),"boolean"==typeof i||null==i)return nQ(e,t,i);if("number"==typeof i)return nY(e,t,i);if("string"==typeof i)return nX(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=oL[t])?void 0:a.call(oL,i))?r:i;return e.setAttribute(t,n)},ox=(e,t)=>{var i;if(null==(i=e.closest)?void 0:i.call(e,'*[slot="media"]'))return;let a=(e,t)=>{var i,a;oC(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>ox(e,t))},r=null==e?void 0:e.nodeName.toLowerCase();r.includes("-")&&!oC(e)?nC.customElements.whenDefined(r).then(()=>{a(e,t)}):a(e,t)},oD=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=oI(e),r=t.toLowerCase();a.includes(r)&&oM(e,r,i)})},oN=(e,t,i)=>{ox(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(rZ.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(rZ.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>ox(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>ox(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>ox(e,t)),Array.prototype.forEach.call(r,e=>ox(e,i))):"attributes"===n&&o===rX.MEDIA_CHROME_ATTRIBUTES&&(oC(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{ox(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(rZ.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(rZ.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};nC.customElements.get("media-controller")||nC.customElements.define("media-controller",oA);let oO="placement",oP="bounds";class oU extends nC.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!nF(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=n$(this,"#"+this.bounds))?e:nP(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;h<0?this.style.setProperty("--media-tooltip-offset-x",`${h}px`):m>0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[oO,oP]}get placement(){return nZ(this,oO)}set placement(e){nX(this,oO,e)}get bounds(){return nZ(this,oP)}set bounds(e){nX(this,oP,e)}}oU.shadowRootOptions={mode:"open"},oU.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},nC.customElements.get("media-tooltip")||nC.customElements.define("media-tooltip",oU);var oH=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oW=(e,t,i)=>(oH(e,t,"read from private field"),i?i.call(e):t.get(e)),oB=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o$=(e,t,i,a)=>(oH(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oq=(e,t,i)=>(oH(e,t,"access private method"),i);let oV="tooltipplacement",oF="disabled",oK="notooltip";class oj extends nC.HTMLElement{constructor(){if(super(),oB(this,hf),oB(this,hk),oB(this,hb,void 0),this.preventClick=!1,this.tooltipEl=null,oB(this,hg,e=>{this.preventClick||this.handleClick(e),setTimeout(oW(this,hy),0)}),oB(this,hy,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),oB(this,h_,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",oW(this,h_))}),oB(this,hT,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",oW(this,h_)):this.addEventListener("keyup",oW(this,h_),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nO(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",oV,rX.MEDIA_CONTROLLER,r1.MEDIA_LANG]}enable(){this.addEventListener("click",oW(this,hg)),this.addEventListener("keydown",oW(this,hT)),this.tabIndex=0}disable(){this.removeEventListener("click",oW(this,hg)),this.removeEventListener("keydown",oW(this,hT)),this.removeEventListener("keyup",oW(this,h_)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rX.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=oW(this,hb))?void 0:a.unassociateElement)||r.call(a,this),o$(this,hb,null)),i&&this.isConnected&&(o$(this,hb,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=oW(this,hb))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===oV&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===r1.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),oq(this,hf,hE).call(this)&&oW(this,hy).call(this)}connectedCallback(){var e,t,i;let{style:a}=nK(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(rX.MEDIA_CONTROLLER);r&&(o$(this,hb,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=oW(this,hb))?void 0:t.associateElement)||i.call(t,this)),nC.customElements.whenDefined("media-tooltip").then(()=>oq(this,hk,hA).call(this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=oW(this,hb))?void 0:e.unassociateElement)||t.call(e,this),o$(this,hb,null),this.removeEventListener("mouseenter",oW(this,hy)),this.removeEventListener("focus",oW(this,hy)),this.removeEventListener("click",oW(this,hg))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return nZ(this,oV)}set tooltipPlacement(e){nX(this,oV,e)}get mediaController(){return nZ(this,rX.MEDIA_CONTROLLER)}set mediaController(e){nX(this,rX.MEDIA_CONTROLLER,e)}get disabled(){return nz(this,oF)}set disabled(e){nQ(this,oF,e)}get noTooltip(){return nz(this,oK)}set noTooltip(e){nQ(this,oK,e)}handleClick(e){}}hb=new WeakMap,hg=new WeakMap,hf=new WeakSet,hE=function(){try{return this.matches(":hover, :focus-visible")}catch{return this.matches(":hover, :focus")}},hy=new WeakMap,h_=new WeakMap,hT=new WeakMap,hk=new WeakSet,hA=function(){this.addEventListener("mouseenter",oW(this,hy)),this.addEventListener("focus",oW(this,hy)),this.addEventListener("click",oW(this,hg));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},oj.shadowRootOptions={mode:"open"},oj.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${oU.shadowRootOptions.mode}">
          ${oU.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},oj.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},oj.getTooltipContentHTML=function(){return""},nC.customElements.get("media-chrome-button")||nC.customElements.define("media-chrome-button",oj);let oG=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,oY=e=>{let t=e.mediaIsAirplaying?np("stop airplay"):np("start airplay");e.setAttribute("aria-label",t)};class oz extends oj{static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_IS_AIRPLAYING,r1.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),oY(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r1.MEDIA_IS_AIRPLAYING&&oY(this)}get mediaIsAirplaying(){return nz(this,r1.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){nQ(this,r1.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return nZ(this,r1.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){nX(this,r1.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new nC.CustomEvent(rZ.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}oz.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${r1.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${r1.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${r1.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${r1.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${oG}</slot>
      <slot name="exit">${oG}</slot>
    </slot>
  `},oz.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${np("start airplay")}</slot>
    <slot name="tooltip-exit">${np("stop airplay")}</slot>
  `},nC.customElements.get("media-airplay-button")||nC.customElements.define("media-airplay-button",oz);let oQ=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,oZ=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,oX=e=>{e.setAttribute("aria-checked",sP(e).toString())};class oJ extends oj{static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_SUBTITLES_LIST,r1.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",np("closed captions")),oX(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r1.MEDIA_SUBTITLES_SHOWING&&oX(this)}get mediaSubtitlesList(){return o0(this,r1.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){o1(this,r1.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return o0(this,r1.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){o1(this,r1.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new nC.CustomEvent(rZ.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}oJ.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${oQ}</slot>
      <slot name="off">${oZ}</slot>
    </slot>
  `},oJ.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${np("Enable captions")}</slot>
    <slot name="tooltip-disable">${np("Disable captions")}</slot>
  `};let o0=(e,t)=>{let i=e.getAttribute(t);return i?sR(i):[]},o1=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=sx(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};nC.customElements.get("media-captions-button")||nC.customElements.define("media-captions-button",oJ);let o2=e=>{let t=e.mediaIsCasting?np("stop casting"):np("start casting");e.setAttribute("aria-label",t)};class o3 extends oj{static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_IS_CASTING,r1.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),o2(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r1.MEDIA_IS_CASTING&&o2(this)}get mediaIsCasting(){return nz(this,r1.MEDIA_IS_CASTING)}set mediaIsCasting(e){nQ(this,r1.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return nZ(this,r1.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){nX(this,r1.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?rZ.MEDIA_EXIT_CAST_REQUEST:rZ.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new nC.CustomEvent(e,{composed:!0,bubbles:!0}))}}o3.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${r1.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${r1.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${r1.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${r1.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},o3.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${np("Start casting")}</slot>
    <slot name="tooltip-exit">${np("Stop casting")}</slot>
  `},nC.customElements.get("media-cast-button")||nC.customElements.define("media-cast-button",o3);var o4=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o5=(e,t,i)=>(o4(e,t,"read from private field"),i?i.call(e):t.get(e)),o9=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o8=(e,t,i,a)=>(o4(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),o6=(e,t,i)=>(o4(e,t,"access private method"),i);class o7 extends nC.HTMLElement{constructor(){if(super(),o9(this,hN),o9(this,hP),o9(this,hH),o9(this,hB),o9(this,hq),o9(this,hF),o9(this,hj),o9(this,hY),o9(this,hw,void 0),o9(this,hS,void 0),o9(this,hI,void 0),o9(this,hC,void 0),o9(this,hR,{}),o9(this,hL,[]),o9(this,hM,()=>{if(this.range.matches(":focus-visible")){let{style:e}=nK(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),o9(this,hx,()=>{let{style:e}=nK(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),o9(this,hD,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nO(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),o8(this,hI,this.shadowRoot.querySelector("#startpoint")),o8(this,hC,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",rX.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rX.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=o5(this,hw))?void 0:a.unassociateElement)||r.call(a,this),o8(this,hw,null)),i&&this.isConnected&&(o8(this,hw,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=o5(this,hw))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),o6(this,hP,hU).call(this)):(this.range.setAttribute(e,i),o6(this,hH,hW).call(this)))}connectedCallback(){var e,t,i;let{style:a}=nK(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),o5(this,hR).pointer=nK(this.shadowRoot,"#pointer"),o5(this,hR).progress=nK(this.shadowRoot,"#progress"),o5(this,hR).thumb=nK(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),o5(this,hR).activeSegment=nK(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(rX.MEDIA_CONTROLLER);r&&(o8(this,hw,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=o5(this,hw))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",o5(this,hM)),this.shadowRoot.addEventListener("focusout",o5(this,hx)),o6(this,hP,hU).call(this),nD(this.container,o5(this,hD))}disconnectedCallback(){var e,t;o6(this,hH,hW).call(this),null==(t=null==(e=o5(this,hw))?void 0:e.unassociateElement)||t.call(e,this),o8(this,hw,null),this.shadowRoot.removeEventListener("focusin",o5(this,hM)),this.shadowRoot.removeEventListener("focusout",o5(this,hx)),nN(this.container,o5(this,hD))}updatePointerBar(e){var t;null==(t=o5(this,hR).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=o5(this,hR).progress)||e.style.setProperty("width",`${i}%`),null==(t=o5(this,hR).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];o8(this,hL,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=nR.createElementNS("http://www.w3.org/2000/svg","rect"),c=nj(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){var t,i,a,r;let n,s,o;return t=e.clientX,i=e.clientY,a=o5(this,hI).getBoundingClientRect(),n=(r=o5(this,hC).getBoundingClientRect()).x-a.x,0==(o=n*n+(s=r.y-a.y)*s)?0:Math.max(0,Math.min(1,((t-a.x)*n+(i-a.y)*s)/o))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":o6(this,hY,hz).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":o6(this,hq,hV).call(this,e);break;case"pointerdown":o6(this,hB,h$).call(this,e);break;case"pointerup":o6(this,hF,hK).call(this);break;case"pointerleave":o6(this,hj,hG).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}hw=new WeakMap,hS=new WeakMap,hI=new WeakMap,hC=new WeakMap,hR=new WeakMap,hL=new WeakMap,hM=new WeakMap,hx=new WeakMap,hD=new WeakMap,hN=new WeakSet,hO=function(e){let t=o5(this,hR).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=o5(this,hL).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},hP=new WeakSet,hU=function(){!this.hasAttribute("disabled")&&this.isConnected&&(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},hH=new WeakSet,hW=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),null==(e=nC.window)||e.removeEventListener("pointerup",this),null==(t=nC.window)||t.removeEventListener("pointermove",this)},hB=new WeakSet,h$=function(e){var t;o8(this,hS,e.composedPath().includes(this.range)),null==(t=nC.window)||t.addEventListener("pointerup",this,{once:!0})},hq=new WeakSet,hV=function(e){var t;"mouse"!==e.pointerType&&o6(this,hB,h$).call(this,e),this.addEventListener("pointerleave",this,{once:!0}),null==(t=nC.window)||t.addEventListener("pointermove",this)},hF=new WeakSet,hK=function(){var e;null==(e=nC.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},hj=new WeakSet,hG=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=nC.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=o5(this,hR).activeSegment)||t.style.removeProperty("transform")},hY=new WeakSet,hz=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),o6(this,hN,hO).call(this,e),this.dragging&&("mouse"!==e.pointerType||!o5(this,hS))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},o7.shadowRootOptions={mode:"open"},o7.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `},o7.getContainerTemplateHTML=function(e){return""},nC.customElements.get("media-chrome-range")||nC.customElements.define("media-chrome-range",o7);var le=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lt=(e,t,i)=>(le(e,t,"read from private field"),i?i.call(e):t.get(e)),li=(e,t,i,a)=>(le(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class la extends nC.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,hQ,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rX.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rX.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=lt(this,hQ))?void 0:a.unassociateElement)||r.call(a,this),li(this,hQ,null)),i&&this.isConnected&&(li(this,hQ,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=lt(this,hQ))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(rX.MEDIA_CONTROLLER);a&&(li(this,hQ,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=lt(this,hQ))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=lt(this,hQ))?void 0:e.unassociateElement)||t.call(e,this),li(this,hQ,null)}}hQ=new WeakMap,la.shadowRootOptions={mode:"open"},la.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},nC.customElements.get("media-control-bar")||nC.customElements.define("media-control-bar",la);var lr=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ln=(e,t,i)=>(lr(e,t,"read from private field"),i?i.call(e):t.get(e)),ls=(e,t,i,a)=>(lr(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class lo extends nC.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,hZ,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rX.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rX.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ln(this,hZ))?void 0:a.unassociateElement)||r.call(a,this),ls(this,hZ,null)),i&&this.isConnected&&(ls(this,hZ,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=ln(this,hZ))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=nK(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(rX.MEDIA_CONTROLLER);r&&(ls(this,hZ,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ln(this,hZ))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ln(this,hZ))?void 0:e.unassociateElement)||t.call(e,this),ls(this,hZ,null)}}hZ=new WeakMap,lo.shadowRootOptions={mode:"open"},lo.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},lo.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},nC.customElements.get("media-text-display")||nC.customElements.define("media-text-display",lo);var ll=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ld=(e,t,i)=>(ll(e,t,"read from private field"),i?i.call(e):t.get(e));class lu extends lo{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,hX,void 0),((e,t,i,a)=>(ll(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,hX,this.shadowRoot.querySelector("slot")),ld(this,hX).textContent=nf(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===r1.MEDIA_DURATION&&(ld(this,hX).textContent=nf(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return nG(this,r1.MEDIA_DURATION)}set mediaDuration(e){nY(this,r1.MEDIA_DURATION,e)}}hX=new WeakMap,lu.getSlotTemplateHTML=function(e,t){return`
    <slot>${nf(t.mediaDuration)}</slot>
  `},nC.customElements.get("media-duration-display")||nC.customElements.define("media-duration-display",lu);let lc={2:np("Network Error"),3:np("Decode Error"),4:np("Source Not Supported"),5:np("Encryption Error")},lh={2:np("A network error caused the media download to fail."),3:np("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:np("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:np("The media is encrypted and there are no keys to decrypt it.")},lm=e=>{var t,i;return 1===e.code?null:{title:null!=(t=lc[e.code])?t:`Error ${e.code}`,message:null!=(i=lh[e.code])?i:e.message}};var lp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function lv(e){var t;let{title:i,message:a}=null!=(t=lm(e))?t:{},r=nc(e.code),n="";return i&&(n+=`<slot name="error-${r}-title"><h3>${nc(i)}</h3></slot>`),a&&(n+=`<slot name="error-${r}-message"><p>${nc(a)}</p></slot>`),n}let lb=[r1.MEDIA_ERROR_CODE,r1.MEDIA_ERROR_MESSAGE];class lg extends sv{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,hJ,null)}static get observedAttributes(){return[...super.observedAttributes,...lb]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!lb.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=r.code&&null!==lm(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r),!this.hasAttribute("aria-label"))){let{title:e}=lm(r);e&&this.setAttribute("aria-label",e)}}get mediaError(){var e,t;return lp(this,e=hJ,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;lp(this,t=hJ,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return nG(this,"mediaerrorcode")}set mediaErrorCode(e){nY(this,"mediaerrorcode",e)}get mediaErrorMessage(){return nZ(this,"mediaerrormessage")}set mediaErrorMessage(e){nX(this,"mediaerrormessage",e)}}hJ=new WeakMap,lg.getSlotTemplateHTML=function(e){let t=+e.mediaerrorcode;return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${t}" id="content">
      ${lv({code:t,message:e.mediaerrormessage})}
    </slot>
  `},lg.formatErrorMessage=lv,nC.customElements.get("media-error-dialog")||nC.customElements.define("media-error-dialog",lg);var lf=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};let lE=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,ly=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,l_=e=>{let t=e.mediaIsFullscreen?np("exit fullscreen mode"):np("enter fullscreen mode");e.setAttribute("aria-label",t)};class lT extends oj{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,h0,null)}static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_IS_FULLSCREEN,r1.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),l_(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r1.MEDIA_IS_FULLSCREEN&&l_(this)}get mediaFullscreenUnavailable(){return nZ(this,r1.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){nX(this,r1.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return nz(this,r1.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){nQ(this,r1.MEDIA_IS_FULLSCREEN,e)}handleClick(e){var t,i,a,r;lf(this,t=h0,"write to private field"),i?i.call(this,e):t.set(this,e);let n=(lf(this,a=h0,"read from private field"),(r?r.call(this):a.get(this))instanceof PointerEvent),s=this.mediaIsFullscreen?new nC.CustomEvent(rZ.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new nC.CustomEvent(rZ.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:n});this.dispatchEvent(s)}}h0=new WeakMap,lT.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${r1.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${r1.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${r1.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${r1.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${lE}</slot>
      <slot name="exit">${ly}</slot>
    </slot>
  `},lT.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${np("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${np("Exit fullscreen mode")}</slot>
  `},nC.customElements.get("media-fullscreen-button")||nC.customElements.define("media-fullscreen-button",lT);let{MEDIA_TIME_IS_LIVE:lk,MEDIA_PAUSED:lA}=r1,{MEDIA_SEEK_TO_LIVE_REQUEST:lw,MEDIA_PLAY_REQUEST:lS}=rZ,lI=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?np("seek to live"):np("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=np("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class lC extends oj{static get observedAttributes(){return[...super.observedAttributes,lk,lA]}connectedCallback(){super.connectedCallback(),lI(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),lI(this)}get mediaPaused(){return nz(this,r1.MEDIA_PAUSED)}set mediaPaused(e){nQ(this,r1.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return nz(this,r1.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){nQ(this,r1.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new nC.CustomEvent(lw,{composed:!0,bubbles:!0})),this.hasAttribute(lA)&&this.dispatchEvent(new nC.CustomEvent(lS,{composed:!0,bubbles:!0})))}}lC.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${lk}]:not([${lA}])) slot[name=indicator] > *,
      :host([${lk}]:not([${lA}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${lk}]:not([${lA}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${np("live")}</slot>
  `},nC.customElements.get("media-live-button")||nC.customElements.define("media-live-button",lC);var lR=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lL=(e,t,i)=>(lR(e,t,"read from private field"),i?i.call(e):t.get(e)),lM=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lx=(e,t,i,a)=>(lR(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let lD="loadingdelay",lN="noautohide",lO=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class lP extends nC.HTMLElement{constructor(){if(super(),lM(this,h1,void 0),lM(this,h2,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rX.MEDIA_CONTROLLER,r1.MEDIA_PAUSED,r1.MEDIA_LOADING,lD]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===lD&&t!==i?this.loadingDelay=Number(i):e===rX.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=lL(this,h1))?void 0:a.unassociateElement)||r.call(a,this),lx(this,h1,null)),i&&this.isConnected&&(lx(this,h1,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=lL(this,h1))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(rX.MEDIA_CONTROLLER);a&&(lx(this,h1,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=lL(this,h1))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=lL(this,h1))?void 0:e.unassociateElement)||t.call(e,this),lx(this,h1,null)}get loadingDelay(){return lL(this,h2)}set loadingDelay(e){lx(this,h2,e);let{style:t}=nK(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return nz(this,r1.MEDIA_PAUSED)}set mediaPaused(e){nQ(this,r1.MEDIA_PAUSED,e)}get mediaLoading(){return nz(this,r1.MEDIA_LOADING)}set mediaLoading(e){nQ(this,r1.MEDIA_LOADING,e)}get mediaController(){return nZ(this,rX.MEDIA_CONTROLLER)}set mediaController(e){nX(this,rX.MEDIA_CONTROLLER,e)}get noAutohide(){return nz(this,lN)}set noAutohide(e){nQ(this,lN,e)}}h1=new WeakMap,h2=new WeakMap,lP.shadowRootOptions={mode:"open"},lP.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${r1.MEDIA_LOADING}]:not([${r1.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${r1.MEDIA_LOADING}]:not([${r1.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${r1.MEDIA_LOADING}]:not([${r1.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${lO}</slot>
    <div id="status" role="status" aria-live="polite">${np("media loading")}</div>
  `},nC.customElements.get("media-loading-indicator")||nC.customElements.define("media-loading-indicator",lP);let lU=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,lH=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,lW=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,lB=e=>{let t="off"===e.mediaVolumeLevel?np("unmute"):np("mute");e.setAttribute("aria-label",t)};class l$ extends oj{static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),lB(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r1.MEDIA_VOLUME_LEVEL&&lB(this)}get mediaVolumeLevel(){return nZ(this,r1.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){nX(this,r1.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?rZ.MEDIA_UNMUTE_REQUEST:rZ.MEDIA_MUTE_REQUEST;this.dispatchEvent(new nC.CustomEvent(e,{composed:!0,bubbles:!0}))}}l$.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${r1.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${r1.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${r1.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${r1.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${r1.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${r1.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${r1.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${lU}</slot>
      <slot name="low">${lH}</slot>
      <slot name="medium">${lH}</slot>
      <slot name="high">${lW}</slot>
    </slot>
  `},l$.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${np("Mute")}</slot>
    <slot name="tooltip-unmute">${np("Unmute")}</slot>
  `},nC.customElements.get("media-mute-button")||nC.customElements.define("media-mute-button",l$);let lq=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,lV=e=>{let t=e.mediaIsPip?np("exit picture in picture mode"):np("enter picture in picture mode");e.setAttribute("aria-label",t)};class lF extends oj{static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_IS_PIP,r1.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),lV(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r1.MEDIA_IS_PIP&&lV(this)}get mediaPipUnavailable(){return nZ(this,r1.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){nX(this,r1.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return nz(this,r1.MEDIA_IS_PIP)}set mediaIsPip(e){nQ(this,r1.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?rZ.MEDIA_EXIT_PIP_REQUEST:rZ.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new nC.CustomEvent(e,{composed:!0,bubbles:!0}))}}lF.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${r1.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${r1.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${r1.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${r1.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${lq}</slot>
      <slot name="exit">${lq}</slot>
    </slot>
  `},lF.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${np("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${np("Exit picture in picture mode")}</slot>
  `},nC.customElements.get("media-pip-button")||nC.customElements.define("media-pip-button",lF);var lK=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let lj="rates",lG=[1,1.2,1.5,1.7,2];function lY(e){return Math.round(100*e)/100}class lz extends oj{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,h3,new sI(this,lj,{defaultValue:lG})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${lY(null!=(e=this.mediaPlaybackRate)?e:1)}x`}static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_PLAYBACK_RATE,lj]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===lj&&(lK(this,h3).value=i),e===r1.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=lY(Number.isNaN(e)?1:e);this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",np("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return lK(this,h3)}set rates(e){e?Array.isArray(e)?lK(this,h3).value=e.join(" "):"string"==typeof e&&(lK(this,h3).value=e):lK(this,h3).value=""}get mediaPlaybackRate(){return nG(this,r1.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){nY(this,r1.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(lK(this,h3).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new nC.CustomEvent(rZ.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}h3=new WeakMap,lz.getSlotTemplateHTML=function(e){let t=e.mediaplaybackrate?lY(+e.mediaplaybackrate):1;return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t}x</slot>
  `},lz.getTooltipContentHTML=function(){return np("Playback rate")},nC.customElements.get("media-playback-rate-button")||nC.customElements.define("media-playback-rate-button",lz);let lQ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,lZ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,lX=e=>{let t=e.mediaPaused?np("play"):np("pause");e.setAttribute("aria-label",t)};class lJ extends oj{static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_PAUSED,r1.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),lX(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===r1.MEDIA_PAUSED||e===r1.MEDIA_LANG)&&lX(this)}get mediaPaused(){return nz(this,r1.MEDIA_PAUSED)}set mediaPaused(e){nQ(this,r1.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?rZ.MEDIA_PLAY_REQUEST:rZ.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new nC.CustomEvent(e,{composed:!0,bubbles:!0}))}}lJ.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${r1.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${r1.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${r1.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${r1.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${lQ}</slot>
      <slot name="pause">${lZ}</slot>
    </slot>
  `},lJ.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${np("Play")}</slot>
    <slot name="tooltip-pause">${np("Pause")}</slot>
  `},nC.customElements.get("media-play-button")||nC.customElements.define("media-play-button",lJ);let l0="placeholdersrc";class l1 extends nC.HTMLElement{static get observedAttributes(){return[l0,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if("src"===e&&(null==i?this.image.removeAttribute("src"):this.image.setAttribute("src",i)),e===l0)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return nZ(this,l0)}set placeholderSrc(e){nX(this,"src",e)}get src(){return nZ(this,"src")}set src(e){nX(this,"src",e)}}l1.shadowRootOptions={mode:"open"},l1.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},nC.customElements.get("media-poster-image")||nC.customElements.define("media-poster-image",l1);var l2=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};h4=new WeakMap,nC.customElements.get("media-preview-chapter-display")||nC.customElements.define("media-preview-chapter-display",class extends lo{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,h4,void 0),((e,t,i,a)=>(l2(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,h4,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_PREVIEW_CHAPTER,r1.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===r1.MEDIA_PREVIEW_CHAPTER||e===r1.MEDIA_LANG)&&i!==t&&null!=i){var a;if((l2(this,h4,"read from private field"),a?a.call(this):h4.get(this)).textContent=i,""!==i){let e=np("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return nZ(this,r1.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){nX(this,r1.MEDIA_PREVIEW_CHAPTER,e)}});var l3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l4=(e,t,i)=>(l3(e,t,"read from private field"),i?i.call(e):t.get(e)),l5=(e,t,i,a)=>(l3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class l9 extends nC.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,h5,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rX.MEDIA_CONTROLLER,r1.MEDIA_PREVIEW_IMAGE,r1.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(rX.MEDIA_CONTROLLER);a&&(l5(this,h5,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=l4(this,h5))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=l4(this,h5))?void 0:e.unassociateElement)||t.call(e,this),l5(this,h5,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[r1.MEDIA_PREVIEW_IMAGE,r1.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===rX.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=l4(this,h5))?void 0:a.unassociateElement)||r.call(a,this),l5(this,h5,null)),i&&this.isConnected&&(l5(this,h5,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=l4(this,h5))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return nZ(this,r1.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){nX(this,r1.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(r1.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(r1.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(r1.MEDIA_PREVIEW_COORDS)}update(){let e,t,i=this.mediaPreviewCoords,a=this.mediaPreviewImage;if(!(i&&a))return;let[r,n,s,o]=i,l=a.split("#")[0],d=getComputedStyle(this),{maxWidth:u,maxHeight:c,minWidth:h,minHeight:m}=d;if("fill"===(d.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain")){let i=parseInt(u)/s,a=parseInt(c)/o,r=parseInt(h)/s,n=parseInt(m)/o;e=i<1?i:Math.max(i,r),t=a<1?a:Math.max(a,n)}else{let i=Math.min(parseInt(u)/s,parseInt(c)/o),a=Math.max(parseInt(h)/s,parseInt(m)/o),r=i<1?i:a>1?a:1;e=r,t=r}let{style:p}=nK(this.shadowRoot,":host"),b=nK(this.shadowRoot,"img").style,g=this.shadowRoot.querySelector("img"),f=1>Math.min(e,t)?"min":"max";p.setProperty(`${f}-width`,"initial","important"),p.setProperty(`${f}-height`,"initial","important"),p.width=`${s*e}px`,p.height=`${o*t}px`;let E=()=>{b.width=`${this.imgWidth*e}px`,b.height=`${this.imgHeight*t}px`,b.display="block"};g.src!==l&&(g.onload=()=>{this.imgWidth=g.naturalWidth,this.imgHeight=g.naturalHeight,E(),g.onload=null},g.src=l,E()),E(),b.transform=`translate(-${r*e}px, -${n*t}px)`}}h5=new WeakMap,l9.shadowRootOptions={mode:"open"},l9.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},nC.customElements.get("media-preview-thumbnail")||nC.customElements.define("media-preview-thumbnail",l9);var l8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l6=(e,t,i)=>(l8(e,t,"read from private field"),i?i.call(e):t.get(e));h9=new WeakMap,nC.customElements.get("media-preview-time-display")||nC.customElements.define("media-preview-time-display",class extends lo{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,h9,void 0),((e,t,i,a)=>(l8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,h9,this.shadowRoot.querySelector("slot")),l6(this,h9).textContent=nf(0)}static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r1.MEDIA_PREVIEW_TIME&&null!=i&&(l6(this,h9).textContent=nf(parseFloat(i)))}get mediaPreviewTime(){return nG(this,r1.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){nY(this,r1.MEDIA_PREVIEW_TIME,e)}});let l7="seekoffset";class de extends oj{static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_CURRENT_TIME,l7]}connectedCallback(){super.connectedCallback(),this.seekOffset=nG(this,l7,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",np("seek back {seekOffset} seconds",{seekOffset:a})),e===l7&&(this.seekOffset=nG(this,l7,30))}get seekOffset(){return nG(this,l7,30)}set seekOffset(e){nY(this,l7,e),this.setAttribute("aria-label",np("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),nH(nW(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return nG(this,r1.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){nY(this,r1.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new nC.CustomEvent(rZ.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}de.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},de.getTooltipContentHTML=function(){return np("Seek backward")},nC.customElements.get("media-seek-backward-button")||nC.customElements.define("media-seek-backward-button",de);let dt="seekoffset";class di extends oj{static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_CURRENT_TIME,dt]}connectedCallback(){super.connectedCallback(),this.seekOffset=nG(this,dt,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",np("seek forward {seekOffset} seconds",{seekOffset:a})),e===dt&&(this.seekOffset=nG(this,dt,30))}get seekOffset(){return nG(this,dt,30)}set seekOffset(e){nY(this,dt,e),this.setAttribute("aria-label",np("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),nH(nW(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return nG(this,r1.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){nY(this,r1.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new nC.CustomEvent(rZ.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}di.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},di.getTooltipContentHTML=function(){return np("Seek forward")},nC.customElements.get("media-seek-forward-button")||nC.customElements.define("media-seek-forward-button",di);var da=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dr=(e,t,i)=>(da(e,t,"read from private field"),i?i.call(e):t.get(e)),dn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ds=(e,t,i,a)=>(da(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dl=(e,t,i)=>(da(e,t,"access private method"),i);let dd={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},du=[...Object.values(dd),r1.MEDIA_CURRENT_TIME,r1.MEDIA_DURATION,r1.MEDIA_SEEKABLE],dc=["Enter"," "],dh="&nbsp;/&nbsp;",dm=(e,{timesSep:t=dh}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?nf(0-(s-r)):nf(r);return e.showDuration?`${o}${t}${nf(s)}`:o};class dp extends lo{constructor(){super(),dn(this,me),dn(this,mi),dn(this,mr),dn(this,ms),dn(this,h8,void 0),dn(this,h6,null),dn(this,h7,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!dc.includes(a)?this.removeEventListener("keyup",dr(this,h6)):this.addEventListener("keyup",dr(this,h6))}),ds(this,h8,this.shadowRoot.querySelector("slot")),dr(this,h8).innerHTML=`${dm(this)}`}static get observedAttributes(){return[...super.observedAttributes,...du,"disabled"]}connectedCallback(){let{style:e}=nK(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",np("playback time")),dl(this,mr,mn).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),dl(this,mi,ma).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,i){this.setAttribute("aria-label",np("playback time")),du.includes(e)?this.update():"disabled"===e&&i!==t?null==i?dl(this,mr,mn).call(this):dl(this,ms,mo).call(this):e===dd.NO_TOGGLE&&i!==t&&(this.noToggle?dl(this,ms,mo).call(this):dl(this,mr,mn).call(this)),super.attributeChangedCallback(e,t,i)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return nz(this,dd.REMAINING)}set remaining(e){nQ(this,dd.REMAINING,e)}get showDuration(){return nz(this,dd.SHOW_DURATION)}set showDuration(e){nQ(this,dd.SHOW_DURATION,e)}get noToggle(){return nz(this,dd.NO_TOGGLE)}set noToggle(e){nQ(this,dd.NO_TOGGLE,e)}get mediaDuration(){return nG(this,r1.MEDIA_DURATION)}set mediaDuration(e){nY(this,r1.MEDIA_DURATION,e)}get mediaCurrentTime(){return nG(this,r1.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){nY(this,r1.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(r1.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(r1.MEDIA_SEEKABLE):this.setAttribute(r1.MEDIA_SEEKABLE,e.join(":"))}update(){let e=dm(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-description",np("video not loaded, unknown time."));let n=e.remaining?ng(0-(r-i)):ng(i);if(!e.showDuration)return e.setAttribute("aria-description",n);let s=np("{currentTime} of {totalTime}",{currentTime:n,totalTime:ng(r)});e.setAttribute("aria-description",s)})(this),e!==dr(this,h8).innerHTML&&(dr(this,h8).innerHTML=e)}}h8=new WeakMap,h6=new WeakMap,h7=new WeakMap,me=new WeakSet,mt=function(){dr(this,h6)||(ds(this,h6,e=>{let{key:t}=e;dc.includes(t)?this.toggleTimeDisplay():this.removeEventListener("keyup",dr(this,h6))}),this.addEventListener("keydown",dr(this,h7)),this.addEventListener("click",this.toggleTimeDisplay))},mi=new WeakSet,ma=function(){dr(this,h6)&&(this.removeEventListener("keyup",dr(this,h6)),this.removeEventListener("keydown",dr(this,h7)),this.removeEventListener("click",this.toggleTimeDisplay),ds(this,h6,null))},mr=new WeakSet,mn=function(){this.noToggle||this.hasAttribute("disabled")||(this.setAttribute("role","button"),this.enable(),dl(this,me,mt).call(this))},ms=new WeakSet,mo=function(){this.removeAttribute("role"),this.disable(),dl(this,mi,ma).call(this)},dp.getSlotTemplateHTML=function(e,t){return`
    <slot>${dm(t)}</slot>
  `},nC.customElements.get("media-time-display")||nC.customElements.define("media-time-display",dp);var dv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},db=(e,t,i)=>(dv(e,t,"read from private field"),i?i.call(e):t.get(e)),dg=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},df=(e,t,i,a)=>(dv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class dE{constructor(e,t,i){dg(this,ml,void 0),dg(this,md,void 0),dg(this,mu,void 0),dg(this,mc,void 0),dg(this,mh,void 0),dg(this,mm,void 0),dg(this,mp,void 0),dg(this,mv,void 0),dg(this,mb,0),dg(this,mg,(e=performance.now())=>{df(this,mb,requestAnimationFrame(db(this,mg))),df(this,mc,performance.now()-db(this,mu));let t=1e3/this.fps;if(db(this,mc)>t){let i,a,r,n;df(this,mu,e-db(this,mc)%t);let s=1e3/((e-db(this,md))/++(i=this,a=mh,{set _(value){df(i,a,value,r)},get _(){return db(i,a,n)}})._),o=(e-db(this,mm))/1e3/this.duration,l=db(this,mp)+o*this.playbackRate;l-db(this,ml).valueAsNumber>0?df(this,mv,this.playbackRate/this.duration/s):(df(this,mv,.995*db(this,mv)),l=db(this,ml).valueAsNumber+db(this,mv)),this.callback(l)}}),df(this,ml,e),this.callback=t,this.fps=i}start(){0===db(this,mb)&&(df(this,mu,performance.now()),df(this,md,db(this,mu)),df(this,mh,0),db(this,mg).call(this))}stop(){0!==db(this,mb)&&(cancelAnimationFrame(db(this,mb)),df(this,mb,0))}update({start:e,duration:t,playbackRate:i}){let a=e-db(this,ml).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.5/t||r>=.5)&&this.callback(e),df(this,mp,e),df(this,mm,performance.now()),this.duration=t,this.playbackRate=i}}ml=new WeakMap,md=new WeakMap,mu=new WeakMap,mc=new WeakMap,mh=new WeakMap,mm=new WeakMap,mp=new WeakMap,mv=new WeakMap,mb=new WeakMap,mg=new WeakMap;var dy=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},d_=(e,t,i)=>(dy(e,t,"read from private field"),i?i.call(e):t.get(e)),dT=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dk=(e,t,i,a)=>(dy(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dA=(e,t,i)=>(dy(e,t,"access private method"),i);let dw=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},dS=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class dI extends o7{constructor(){super(),dT(this,mR),dT(this,mx),dT(this,mN),dT(this,mP),dT(this,mH),dT(this,mB),dT(this,mq),dT(this,mf,null),dT(this,mE,void 0),dT(this,my,void 0),dT(this,m_,void 0),dT(this,mT,void 0),dT(this,mk,void 0),dT(this,mA,void 0),dT(this,mw,void 0),dT(this,mS,void 0),dT(this,mI,void 0),dT(this,mC,()=>{dA(this,mR,mL).call(this)?d_(this,mE).start():d_(this,mE).stop()}),dT(this,mM,e=>{!this.dragging&&(no(e)&&(this.range.valueAsNumber=e),d_(this,mI)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),dk(this,my,this.shadowRoot.querySelectorAll('[part~="box"]')),dk(this,mT,this.shadowRoot.querySelector('[part~="preview-box"]')),dk(this,mk,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);dk(this,mA,parseInt(e.getPropertyValue("--media-box-padding-left"))),dk(this,mw,parseInt(e.getPropertyValue("--media-box-padding-right"))),dk(this,mE,new dE(this.range,d_(this,mM),60))}static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_PAUSED,r1.MEDIA_DURATION,r1.MEDIA_SEEKABLE,r1.MEDIA_CURRENT_TIME,r1.MEDIA_PREVIEW_IMAGE,r1.MEDIA_PREVIEW_TIME,r1.MEDIA_PREVIEW_CHAPTER,r1.MEDIA_BUFFERED,r1.MEDIA_PLAYBACK_RATE,r1.MEDIA_LOADING,r1.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",np("seek")),d_(this,mC).call(this),dk(this,mf,this.getRootNode()),null==(e=d_(this,mf))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),d_(this,mE).stop(),null==(e=d_(this,mf))||e.removeEventListener("transitionstart",this),dk(this,mf,null)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!=i){if(e===r1.MEDIA_CURRENT_TIME||e===r1.MEDIA_PAUSED||e===r1.MEDIA_ENDED||e===r1.MEDIA_LOADING||e===r1.MEDIA_DURATION||e===r1.MEDIA_SEEKABLE){let e,t,i,a;d_(this,mE).update({start:dw(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),d_(this,mC).call(this),e=this.range,t=ng(+dS(this)),i=ng(+this.mediaSeekableEnd),a=t&&i?np("{currentTime} of {totalTime}",{currentTime:t,totalTime:i}):np("video not loaded, unknown time."),e.setAttribute("aria-valuetext",a)}else e===r1.MEDIA_BUFFERED&&this.updateBufferedBar();(e===r1.MEDIA_DURATION||e===r1.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=d_(this,mS),this.updateBar())}}get mediaChaptersCues(){return d_(this,mS)}set mediaChaptersCues(e){var t;dk(this,mS,e),this.updateSegments(null==(t=d_(this,mS))?void 0:t.map(e=>({start:dw(this,e.startTime),end:dw(this,e.endTime)})))}get mediaPaused(){return nz(this,r1.MEDIA_PAUSED)}set mediaPaused(e){nQ(this,r1.MEDIA_PAUSED,e)}get mediaLoading(){return nz(this,r1.MEDIA_LOADING)}set mediaLoading(e){nQ(this,r1.MEDIA_LOADING,e)}get mediaDuration(){return nG(this,r1.MEDIA_DURATION)}set mediaDuration(e){nY(this,r1.MEDIA_DURATION,e)}get mediaCurrentTime(){return nG(this,r1.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){nY(this,r1.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return nG(this,r1.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){nY(this,r1.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(r1.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(r1.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(r1.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(r1.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(r1.MEDIA_SEEKABLE):this.setAttribute(r1.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return nZ(this,r1.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){nX(this,r1.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return nG(this,r1.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){nY(this,r1.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return nz(this,r1.MEDIA_ENDED)}set mediaEnded(e){nQ(this,r1.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=dw(this,r)}let{style:a}=nK(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=nK(this.shadowRoot,"#current-rail"),t=nK(this.shadowRoot,'[part~="current-box"]'),i=dA(this,mx,mD).call(this,d_(this,mk)),a=dA(this,mN,mO).call(this,i,this.range.valueAsNumber),r=dA(this,mP,mU).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":dA(this,mq,mV).call(this);break;case"pointermove":dA(this,mH,mW).call(this,e);break;case"pointerup":d_(this,mI)&&dk(this,mI,!1);break;case"pointerdown":dk(this,mI,!0);break;case"pointerleave":dA(this,mB,m$).call(this,null);break;case"transitionstart":nB(e.target,this)&&setTimeout(()=>d_(this,mC).call(this),0)}}}mf=new WeakMap,mE=new WeakMap,my=new WeakMap,m_=new WeakMap,mT=new WeakMap,mk=new WeakMap,mA=new WeakMap,mw=new WeakMap,mS=new WeakMap,mI=new WeakMap,mC=new WeakMap,mR=new WeakSet,mL=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&nF(this)},mM=new WeakMap,mx=new WeakSet,mD=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?n$(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},mN=new WeakSet,mO=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},mP=new WeakSet,mU=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+d_(this,mA)){let t=e.range.left-e.bounds.left-d_(this,mA);return`${n-i/2+t}px`}if(n>r-d_(this,mw)){let t=e.bounds.right-e.range.right-d_(this,mw);return`${n+i/2-t-e.range.width}px`}return 0},mH=new WeakSet,mW=function(e){let t=[...d_(this,my)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void dA(this,mB,m$).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=nK(this.shadowRoot,"#preview-rail"),r=nK(this.shadowRoot,'[part~="preview-box"]'),n=dA(this,mx,mD).call(this,d_(this,mT)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=dA(this,mN,mO).call(this,n,s),l=dA(this,mP,mU).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(d_(this,m_))-Math.round(s*i))&&s>.01&&s<.99||(dk(this,m_,s*i),dA(this,mB,m$).call(this,d_(this,m_)))},mB=new WeakSet,m$=function(e){this.dispatchEvent(new nC.CustomEvent(rZ.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},mq=new WeakSet,mV=function(){d_(this,mE).stop();let e=dS(this);this.dispatchEvent(new nC.CustomEvent(rZ.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},dI.shadowRootOptions={mode:"open"},dI.getContainerTemplateHTML=function(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${r1.MEDIA_PREVIEW_IMAGE}], [${r1.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${r1.MEDIA_PREVIEW_IMAGE}], [${r1.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${r1.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${r1.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${r1.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${r1.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${r1.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${r1.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${r1.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${r1.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${r1.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${r1.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${r1.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${r1.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${l9.shadowRootOptions.mode}">
            ${l9.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},nC.customElements.get("media-time-range")||nC.customElements.define("media-time-range",dI);var dC=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};mF=new WeakMap,nC.customElements.get("media-volume-range")||nC.customElements.define("media-volume-range",class extends o7{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,mF,()=>{let e=this.range.value,t=new nC.CustomEvent(rZ.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_VOLUME,r1.MEDIA_MUTED,r1.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",np("volume")),this.range.addEventListener("input",dC(this,mF))}disconnectedCallback(){this.range.removeEventListener("input",dC(this,mF)),super.disconnectedCallback()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===r1.MEDIA_VOLUME||e===r1.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return nG(this,r1.MEDIA_VOLUME,1)}set mediaVolume(e){nY(this,r1.MEDIA_VOLUME,e)}get mediaMuted(){return nz(this,r1.MEDIA_MUTED)}set mediaMuted(e){nQ(this,r1.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return nZ(this,r1.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){nX(this,r1.MEDIA_VOLUME_UNAVAILABLE,e)}});class dR extends oj{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=np("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r1.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return nz(this,r1.MEDIA_LOOP)}set mediaLoop(e){nQ(this,r1.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new nC.CustomEvent(rZ.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}dR.getSlotTemplateHTML=function(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${r1.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},dR.getTooltipContentHTML=function(){return np("Loop")},nC.customElements.get("media-loop-button")||nC.customElements.define("media-loop-button",dR);var dL=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dM=(e,t,i)=>(dL(e,t,"read from private field"),i?i.call(e):t.get(e)),dx=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dD=(e,t,i,a)=>(dL(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let dN={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof dq&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof dq?a.element[a.attributeName]=t:a.value=t}}}};class dO extends nC.DocumentFragment{constructor(e,t,i=dN){var a;super(),dx(this,mK,void 0),dx(this,mj,void 0),this.append(e.content.cloneNode(!0)),dD(this,mK,dP(this)),dD(this,mj,i),null==(a=i.createCallback)||a.call(i,this,dM(this,mK),t),i.processCallback(this,dM(this,mK),t)}update(e){dM(this,mj).processCallback(this,dM(this,mK),e)}}mK=new WeakMap,mj=new WeakMap;let dP=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new d$;for([i,a]of dH(r.value))if(i){let i=new dq(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of dH(n))if(i){let i=new dV(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new dF(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else dP(r,t);return t},dU={},dH=e=>{let t="",i=0,a=dU[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),dU[e]=a};class dW{get value(){return""}set value(e){}toString(){return this.value}}let dB=new WeakMap;class d${constructor(){dx(this,mG,[])}[Symbol.iterator](){return dM(this,mG).values()}get length(){return dM(this,mG).length}item(e){return dM(this,mG)[e]}append(...e){for(let t of e)t instanceof dq&&dB.set(t,this),dM(this,mG).push(t)}toString(){return dM(this,mG).join("")}}mG=new WeakMap;class dq extends dW{constructor(e,t,i){super(),dx(this,mX),dx(this,mY,""),dx(this,mz,void 0),dx(this,mQ,void 0),dx(this,mZ,void 0),dD(this,mz,e),dD(this,mQ,t),dD(this,mZ,i)}get attributeName(){return dM(this,mQ)}get attributeNamespace(){return dM(this,mZ)}get element(){return dM(this,mz)}get value(){return dM(this,mY)}set value(e){dM(this,mY)!==e&&(dD(this,mY,e),dM(this,mX,mJ)&&1!==dM(this,mX,mJ).length?dM(this,mz).setAttributeNS(dM(this,mZ),dM(this,mQ),dM(this,mX,mJ).toString()):null==e?dM(this,mz).removeAttributeNS(dM(this,mZ),dM(this,mQ)):dM(this,mz).setAttributeNS(dM(this,mZ),dM(this,mQ),e))}get booleanValue(){return dM(this,mz).hasAttributeNS(dM(this,mZ),dM(this,mQ))}set booleanValue(e){if(dM(this,mX,mJ)&&1!==dM(this,mX,mJ).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}mY=new WeakMap,mz=new WeakMap,mQ=new WeakMap,mZ=new WeakMap,mX=new WeakSet,mJ=function(){return dB.get(this)};class dV extends dW{constructor(e,t){super(),dx(this,m0,void 0),dx(this,m1,void 0),dD(this,m0,e),dD(this,m1,t?[...t]:[new Text])}get replacementNodes(){return dM(this,m1)}get parentNode(){return dM(this,m0)}get nextSibling(){return dM(this,m1)[dM(this,m1).length-1].nextSibling}get previousSibling(){return dM(this,m1)[0].previousSibling}get value(){return dM(this,m1).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),dD(this,m1,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(dM(this,m1)[0].parentNode,dM(this,m1),t,this.nextSibling))}}m0=new WeakMap,m1=new WeakMap;class dF extends dV{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let dK={string:e=>String(e)};class dj{constructor(e){this.template=e,this.state=void 0}}let dG=new WeakMap,dY=new WeakMap,dz={partial:(e,t)=>{t[e.expression]=new dj(e.template)},if:(e,t)=>{var i;if(dJ(e.expression,t))if(dG.get(e)!==e.template){dG.set(e,e.template);let i=new dO(e.template,t,dZ);e.replace(i),dY.set(e,i)}else null==(i=dY.get(e))||i.update(t);else e.replace(""),dG.delete(e),dY.delete(e)}},dQ=Object.keys(dz),dZ={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof dF){if(!n.directive){let e=dQ.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=dz[n.directive])||a.call(dz,n,i);continue}let t=dJ(e,i);if(t instanceof dj){dG.get(n)!==t.template?(dG.set(n,t.template),n.value=t=new dO(t.template,t.state,dZ),dY.set(n,t)):null==(r=dY.get(n))||r.update(t.state);continue}t?(n instanceof dq&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof dq?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,dG.delete(n),dY.delete(n))):n instanceof dq?n.value=void 0:(n.value=void 0,dG.delete(n),dY.delete(n))}}},dX={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=dK[t])?void 0:i.call(dK,e)}};function dJ(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return d0(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return d0(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=d2(d,t))}return i}if(1===d.length)return d1(d[0])?d2(d[0].token,t):d0(e);if(2===d.length){let i=dX[null==(o=d[0])?void 0:o.token];return i&&d1(d[1])?i(d2(d[1].token,t)):d0(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=dX[i];if(!a||!d1(d[0])||!d1(d[2]))return d0(e);let r=d2(d[0].token,t);return a(r,"|"===i?d[2].token:d2(d[2].token,t))}}function d0(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function d1({type:e}){return["number","boolean","string","param"].includes(e)}function d2(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):nl(e)?parseFloat(e):t[e]}var d3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},d4=(e,t,i)=>(d3(e,t,"read from private field"),i?i.call(e):t.get(e)),d5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},d9=(e,t,i,a)=>(d3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),d8=(e,t,i)=>(d3(e,t,"access private method"),i);let d6={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},d7=nR.createElement("template");d7.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class ue extends nC.HTMLElement{constructor(){super(),d5(this,m9),d5(this,m6),d5(this,m2,void 0),d5(this,m3,void 0),d5(this,m4,void 0),d5(this,m5,void 0),d5(this,pe,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),d9(this,m5,new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(d6[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()})),d9(this,pe,this.render.bind(this)),d8(this,m9,m8).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=d4(this,m2))?e:this.constructor.template}set template(e){null===e?this.removeAttribute("template"):"string"==typeof e?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(d9(this,m2,e),d9(this,m4,null),this.createRenderer())}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>d6[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=d6[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(nl(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&d8(this,m6,m7).call(this)}connectedCallback(){this.addEventListener(r2.BREAKPOINTS_COMPUTED,d4(this,pe)),d4(this,m5).observe(this,{attributes:!0}),d4(this,m5).observe(this.renderRoot,{attributes:!0,subtree:!0}),d8(this,m6,m7).call(this)}disconnectedCallback(){this.removeEventListener(r2.BREAKPOINTS_COMPUTED,d4(this,pe)),d4(this,m5).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==d4(this,m3)&&(d9(this,m3,this.template),this.renderer=new dO(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(d7.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function ut(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function ui(e){return e.split("-")[0]}m2=new WeakMap,m3=new WeakMap,m4=new WeakMap,m5=new WeakMap,m9=new WeakSet,m8=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},m6=new WeakSet,m7=function(){var e;let t=this.getAttribute("template");if(!t||t===d4(this,m4))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){d9(this,m4,t),d9(this,m2,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(d9(this,m4,t),ut(t).then(e=>{let t=nR.createElement("template");t.innerHTML=e,d9(this,m2,t),this.createRenderer()}).catch(console.error))},pe=new WeakMap,ue.observedAttributes=["template"],ue.processor=dZ,nC.customElements.get("media-theme")||nC.customElements.define("media-theme",ue);class ua extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class ur extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var un=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},us=(e,t,i)=>(un(e,t,"read from private field"),i?i.call(e):t.get(e)),uo=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ul=(e,t,i,a)=>(un(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ud=(e,t,i)=>(un(e,t,"access private method"),i);function uu({type:e,text:t,value:i,checked:a}){let r=nR.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=nR.createElement("span");return n.textContent=t,r.append(n),r}function uc(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let uh="style",um="hidden",up="disabled";class uv extends nC.HTMLElement{constructor(){if(super(),uo(this,pl),uo(this,pu),uo(this,pm),uo(this,pv),uo(this,pg),uo(this,pE),uo(this,pk),uo(this,pw),uo(this,pI),uo(this,pR),uo(this,pM),uo(this,pD),uo(this,pO),uo(this,pU),uo(this,pW),uo(this,p$),uo(this,pV),uo(this,pK),uo(this,pt,null),uo(this,pi,null),uo(this,pa,null),uo(this,pr,new Set),uo(this,pn,void 0),uo(this,ps,!1),uo(this,po,null),uo(this,ph,()=>{let e=us(this,pr),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));ul(this,pr,t)}),uo(this,p_,()=>{ud(this,pk,pA).call(this),ud(this,pw,pS).call(this,!1)}),uo(this,pT,()=>{ud(this,pk,pA).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),ul(this,pn,new MutationObserver(us(this,ph)))}static get observedAttributes(){return[up,um,uh,"anchor",rX.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":ud(this,pl,pd).call(this,e);break;case"invoke":ud(this,pv,pb).call(this,e);break;case"click":ud(this,pI,pC).call(this,e);break;case"toggle":ud(this,pM,px).call(this,e);break;case"focusout":ud(this,pO,pP).call(this,e);break;case"keydown":ud(this,pU,pH).call(this,e)}}connectedCallback(){var e,t;us(this,pn).observe(this.defaultSlot,{childList:!0}),ul(this,po,nj(this.shadowRoot,":host")),ud(this,pm,pp).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),ul(this,pt,nU(this)),null==(t=null==(e=us(this,pt))?void 0:e.associateElement)||t.call(e,this),this.hidden||(nD(ug(this),us(this,p_)),nD(this,us(this,pT))),ud(this,pu,pc).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,t;us(this,pn).disconnect(),nN(ug(this),us(this,p_)),nN(this,us(this,pT)),this.disable(),null==(t=null==(e=us(this,pt))?void 0:e.unassociateElement)||t.call(e,this),ul(this,pt,null),ul(this,pi,null),ul(this,pa,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,t,i){var a,r,n,s;e===um&&i!==t?(us(this,ps)||ul(this,ps,!0),this.hidden?ud(this,pE,py).call(this):ud(this,pg,pf).call(this),this.dispatchEvent(new ur({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===rX.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=us(this,pt))?void 0:a.unassociateElement)||r.call(a,this),ul(this,pt,null)),i&&this.isConnected&&(ul(this,pt,nU(this)),null==(s=null==(n=us(this,pt))?void 0:n.associateElement)||s.call(n,this))):e===up&&i!==t?null==i?this.enable():this.disable():e===uh&&i!==t&&ud(this,pm,pp).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=nV(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(ub)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&ud(this,pK,pj).call(this,t)}focus(){if(ul(this,pi,nq()),this.items.length){ud(this,pV,pF).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=ud(this,pW,pB).call(this,e);i&&(ud(this,pK,pj).call(this,i,"checkbox"===i.type),us(this,pa)&&!this.hidden&&(null==(t=us(this,pi))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=ud(this,pW,pB).call(this,e))?t:ud(this,p$,pq).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),ud(this,pV,pF).call(this,r[s]),r[s].focus()}}function ub(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function ug(e){var t;return null!=(t=e.getAttribute("bounds")?n$(e,`#${e.getAttribute("bounds")}`):nP(e)||e.parentElement)?t:e}pt=new WeakMap,pi=new WeakMap,pa=new WeakMap,pr=new WeakMap,pn=new WeakMap,ps=new WeakMap,po=new WeakMap,pl=new WeakSet,pd=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&ud(this,pu,pc).call(this),t.name||us(this,ph).call(this)},pu=new WeakSet,pc=function(){let e=this.shadowRoot.querySelector('slot[name="header"]');e.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===e.assignedNodes().length},ph=new WeakMap,pm=new WeakSet,pp=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},pv=new WeakSet,pb=function(e){ul(this,pa,e.relatedTarget),nB(this,e.relatedTarget)||(this.hidden=!this.hidden)},pg=new WeakSet,pf=function(){var e;null==(e=us(this,pa))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),nD(ug(this),us(this,p_)),nD(this,us(this,pT))},pE=new WeakSet,py=function(){var e;null==(e=us(this,pa))||e.setAttribute("aria-expanded","false"),nN(ug(this),us(this,p_)),nN(this,us(this,pT))},p_=new WeakMap,pT=new WeakMap,pk=new WeakSet,pA=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(ui(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=ui(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){var i,a,r;let n,s;return{anchor:(i=e,a=t.offsetParent,n=i.getBoundingClientRect(),s=null!=(r=null==a?void 0:a.getBoundingClientRect())?r:{x:0,y:0},{x:n.x-s.x,y:n.y-s.y,width:n.width,height:n.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=ug(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=us(this,po);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},pw=new WeakSet,pS=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=us(this,po);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),ud(this,pk,pA).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),ud(this,pk,pA).call(this);a.removeProperty("--media-menu-transition-in")},pI=new WeakSet,pC=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(us(this,pR,pL))){null==(t=us(this,pi))||t.focus(),this.hidden=!0;return}let i=ud(this,pW,pB).call(this,e);!i||i.hasAttribute("disabled")||(ud(this,pV,pF).call(this,i),this.handleSelect(e))},pR=new WeakSet,pL=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},pM=new WeakSet,px=function(e){if(e.target===this)return;ud(this,pD,pN).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new ua({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);ud(this,pw,pS).call(this,!0)},pD=new WeakSet,pN=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},pO=new WeakSet,pP=function(e){var t;nB(this,e.relatedTarget)||(us(this,ps)&&(null==(t=us(this,pi))||t.focus()),us(this,pa)&&us(this,pa)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},pU=new WeakSet,pH=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(us(this,ps)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=us(this,pi))||n.focus(),us(this,ps)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)},pW=new WeakSet,pB=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},p$=new WeakSet,pq=function(){return this.items.find(e=>0===e.tabIndex)},pV=new WeakSet,pF=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},pK=new WeakSet,pj=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},uv.shadowRootOptions={mode:"open"},uv.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},nC.customElements.get("media-chrome-menu")||nC.customElements.define("media-chrome-menu",uv);var uf=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uE=(e,t,i)=>(uf(e,t,"read from private field"),i?i.call(e):t.get(e)),uy=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},u_=(e,t,i,a)=>(uf(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uT=(e,t,i)=>(uf(e,t,"access private method"),i);let uk="type",uA="value",uw="checked",uS="disabled";class uI extends nC.HTMLElement{constructor(){if(super(),uy(this,pz),uy(this,pZ),uy(this,pJ),uy(this,p4),uy(this,pG,!1),uy(this,pY,void 0),uy(this,p1,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=nR.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),uy(this,p2,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.handleClick(e):this.removeEventListener("keyup",uE(this,p2))}),uy(this,p3,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",uE(this,p2)):this.addEventListener("keyup",uE(this,p2),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[uk,uS,uw,uA]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),uC(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":uT(this,pz,pQ).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":uE(this,p3).call(this,e);break;case"keyup":uE(this,p2).call(this,e)}}attributeChangedCallback(e,t,i){e===uw&&uC(this)&&!uE(this,pG)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===uk&&i!==t?this.role="menuitem"+i:e===uS&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(uS)||this.enable(),this.role="menuitem"+this.type,u_(this,pY,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),uT(this,p4,p5).call(this),this.submenuElement&&uT(this,pZ,pX).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),uT(this,p4,p5).call(this),u_(this,pY,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=nV(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(uk))?e:""}set type(e){this.setAttribute(uk,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(uA))?e:this.text}set value(e){this.setAttribute(uA,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(uC(this))return"true"===this.getAttribute("aria-checked")}set checked(e){uC(this)&&(u_(this,pG,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!uC(this)&&this.invokeTargetElement&&nB(this,e.target)&&this.invokeTargetElement.dispatchEvent(new ua({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function uC(e){return"radio"===e.type||"checkbox"===e.type}pG=new WeakMap,pY=new WeakMap,pz=new WeakSet,pQ=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?uT(this,pZ,pX).call(this):uT(this,pJ,p0).call(this))},pZ=new WeakSet,pX=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",uE(this,p1)),this.submenuElement.addEventListener("addmenuitem",uE(this,p1)),this.submenuElement.addEventListener("removemenuitem",uE(this,p1)),uE(this,p1).call(this)},pJ=new WeakSet,p0=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",uE(this,p1)),this.submenuElement.removeEventListener("addmenuitem",uE(this,p1)),this.submenuElement.removeEventListener("removemenuitem",uE(this,p1)),uE(this,p1).call(this)},p1=new WeakMap,p2=new WeakMap,p3=new WeakMap,p4=new WeakSet,p5=function(){var e;let t=null==(e=uE(this,pY))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},uI.shadowRootOptions={mode:"open"},uI.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},uI.getSuffixSlotInnerHTML=function(e){return""},nC.customElements.get("media-chrome-menu-item")||nC.customElements.define("media-chrome-menu-item",uI);class uR extends uv{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nP(this).querySelector("media-settings-menu-button")}}uR.getTemplateHTML=function(e){return`
    ${uv.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},nC.customElements.get("media-settings-menu")||nC.customElements.define("media-settings-menu",uR);class uL extends uI{}uL.shadowRootOptions={mode:"open"},uL.getTemplateHTML=function(e){return`
    ${uI.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},uL.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},nC.customElements.get("media-settings-menu-item")||nC.customElements.define("media-settings-menu-item",uL);class uM extends oj{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=nV(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new ua({relatedTarget:this}))}}nC.customElements.get("media-chrome-menu-button")||nC.customElements.define("media-chrome-menu-button",uM);class ux extends uM{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",np("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nP(this).querySelector("media-settings-menu")}}ux.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},ux.getTooltipContentHTML=function(){return np("Settings")},nC.customElements.get("media-settings-menu-button")||nC.customElements.define("media-settings-menu-button",ux);var uD=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uN=(e,t,i)=>(uD(e,t,"read from private field"),i?i.call(e):t.get(e)),uO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uP=(e,t,i,a)=>(uD(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uU=(e,t,i)=>(uD(e,t,"access private method"),i);p9=new WeakMap,p8=new WeakMap,p6=new WeakSet,p7=function(){if(uN(this,p8)===JSON.stringify(this.mediaAudioTrackList))return;uP(this,p8,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0})),e)){let e=uu({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(uc(this,"checked-indicator")),this.defaultSlot.append(e)}},ve=new WeakSet,vt=function(){if(null==this.value)return;let e=new nC.CustomEvent(rZ.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},nC.customElements.get("media-audio-track-menu")||nC.customElements.define("media-audio-track-menu",class extends uv{constructor(){super(...arguments),uO(this,p6),uO(this,ve),uO(this,p9,[]),uO(this,p8,void 0)}static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_AUDIO_TRACK_LIST,r1.MEDIA_AUDIO_TRACK_ENABLED,r1.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===r1.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===r1.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;uP(this,p9,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(ns)),uU(this,p6,p7).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",uU(this,ve,vt))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",uU(this,ve,vt))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=nP(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return uN(this,p9)}set mediaAudioTrackList(e){uP(this,p9,e),uU(this,p6,p7).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=nZ(this,r1.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){nX(this,r1.MEDIA_AUDIO_TRACK_ENABLED,e)}});let uH=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,uW=e=>{let t=np("Audio");e.setAttribute("aria-label",t)};class uB extends uM{static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_AUDIO_TRACK_ENABLED,r1.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),uW(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r1.MEDIA_LANG&&uW(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=nP(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=nZ(this,r1.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){nX(this,r1.MEDIA_AUDIO_TRACK_ENABLED,e)}}uB.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${uH}</slot>
  `},uB.getTooltipContentHTML=function(){return np("Audio")},nC.customElements.get("media-audio-track-menu-button")||nC.customElements.define("media-audio-track-menu-button",uB);var u$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uq=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uV=(e,t,i)=>(u$(e,t,"access private method"),i);let uF=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class uK extends uv{constructor(){super(...arguments),uq(this,va),uq(this,vn),uq(this,vi,void 0)}static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_SUBTITLES_LIST,r1.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r1.MEDIA_SUBTITLES_LIST&&t!==i?uV(this,va,vr).call(this):e===r1.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",uV(this,va,vr).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",uV(this,vn,vs))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",uV(this,vn,vs))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nP(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return uj(this,r1.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){uG(this,r1.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return uj(this,r1.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){uG(this,r1.MEDIA_SUBTITLES_SHOWING,e)}}vi=new WeakMap,va=new WeakSet,vr=function(){var e,t,i,a,r,n;let s=(u$(this,t=vi,"read from private field"),(i?i.call(this):t.get(this))!==JSON.stringify(this.mediaSubtitlesList)),o=this.value!==this.getAttribute(r1.MEDIA_SUBTITLES_SHOWING);if(!s&&!o)return;a=vi,r=JSON.stringify(this.mediaSubtitlesList),u$(this,a,"write to private field"),n?n.call(this,r):a.set(this,r),this.defaultSlot.textContent="";let l=!this.value,d=uu({type:"radio",text:this.formatMenuItemText(np("Off")),value:"off",checked:l});for(let t of(d.prepend(uc(this,"checked-indicator")),this.defaultSlot.append(d),this.mediaSubtitlesList)){let i=uu({type:"radio",text:this.formatMenuItemText(t.label,t),value:sM(t),checked:this.value==sM(t)});i.prepend(uc(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(uc(this,"captions-indicator")),this.defaultSlot.append(i)}},vn=new WeakSet,vs=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(r1.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new nC.CustomEvent(rZ.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new nC.CustomEvent(rZ.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},uK.getTemplateHTML=function(e){return`
    ${uv.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${uF}</slot>
  `};let uj=(e,t)=>{let i=e.getAttribute(t);return i?sR(i):[]},uG=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=sx(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};nC.customElements.get("media-captions-menu")||nC.customElements.define("media-captions-menu",uK);let uY=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,uz=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,uQ=e=>{e.setAttribute("data-captions-enabled",sP(e).toString())},uZ=e=>{e.setAttribute("aria-label",np("closed captions"))};class uX extends uM{static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_SUBTITLES_LIST,r1.MEDIA_SUBTITLES_SHOWING,r1.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),uZ(this),uQ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r1.MEDIA_SUBTITLES_SHOWING?uQ(this):e===r1.MEDIA_LANG&&uZ(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=nP(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return uJ(this,r1.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){u0(this,r1.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return uJ(this,r1.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){u0(this,r1.MEDIA_SUBTITLES_SHOWING,e)}}uX.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${uY}</slot>
      <slot name="off">${uz}</slot>
    </slot>
  `},uX.getTooltipContentHTML=function(){return np("Captions")};let uJ=(e,t)=>{let i=e.getAttribute(t);return i?sR(i):[]},u0=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=sx(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};nC.customElements.get("media-captions-menu-button")||nC.customElements.define("media-captions-menu-button",uX);var u1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},u2=(e,t,i)=>(u1(e,t,"read from private field"),i?i.call(e):t.get(e)),u3=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},u4=(e,t,i)=>(u1(e,t,"access private method"),i);let u5="rates";vo=new WeakMap,vl=new WeakSet,vd=function(){this.defaultSlot.textContent="";let e=lY(this.mediaPlaybackRate),t=new Set(Array.from(u2(this,vo)).map(e=>lY(Number(e))));for(let i of(e>0&&!t.has(e)&&t.add(e),Array.from(t).sort((e,t)=>e-t))){let t=uu({type:"radio",text:this.formatMenuItemText(`${i}x`,i),value:i.toString(),checked:e===i});t.prepend(uc(this,"checked-indicator")),this.defaultSlot.append(t)}},vu=new WeakSet,vc=function(){if(!this.value)return;let e=new nC.CustomEvent(rZ.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},nC.customElements.get("media-playback-rate-menu")||nC.customElements.define("media-playback-rate-menu",class extends uv{constructor(){super(),u3(this,vl),u3(this,vu),u3(this,vo,new sI(this,u5,{defaultValue:lG})),u4(this,vl,vd).call(this)}static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_PLAYBACK_RATE,u5]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r1.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,u4(this,vl,vd).call(this)):e===u5&&t!=i&&(u2(this,vo).value=i,u4(this,vl,vd).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",u4(this,vu,vc))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",u4(this,vu,vc))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nP(this).querySelector("media-playback-rate-menu-button")}get rates(){return u2(this,vo)}set rates(e){e?Array.isArray(e)?u2(this,vo).value=e.join(" "):"string"==typeof e&&(u2(this,vo).value=e):u2(this,vo).value="",u4(this,vl,vd).call(this)}get mediaPlaybackRate(){return nG(this,r1.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){nY(this,r1.MEDIA_PLAYBACK_RATE,e)}});class u9 extends uM{static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${lY(null!=(e=this.mediaPlaybackRate)?e:1)}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===r1.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=lY(Number.isNaN(e)?1:e);this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",np("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nP(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return nG(this,r1.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){nY(this,r1.MEDIA_PLAYBACK_RATE,e)}}u9.getSlotTemplateHTML=function(e){let t=e.mediaplaybackrate?lY(+e.mediaplaybackrate):1;return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }

      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t}x</slot>
  `},u9.getTooltipContentHTML=function(){return np("Playback rate")},nC.customElements.get("media-playback-rate-menu-button")||nC.customElements.define("media-playback-rate-menu-button",u9);var u8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},u6=(e,t,i)=>(u8(e,t,"read from private field"),i?i.call(e):t.get(e)),u7=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ce=(e,t,i,a)=>(u8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ct=(e,t,i)=>(u8(e,t,"access private method"),i);vh=new WeakMap,vm=new WeakMap,vp=new WeakSet,vv=function(){let e,t=!this.mediaRenditionSelected;if(u6(this,vm).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&u6(this,vm).mediaHeight===this.mediaHeight&&u6(this,vm).mediaWidth===this.mediaWidth&&u6(this,vm).isAuto===t)return;u6(this,vm).mediaRenditionList=JSON.stringify(this.mediaRenditionList),u6(this,vm).mediaHeight=this.mediaHeight,u6(this,vm).mediaWidth=this.mediaWidth,u6(this,vm).isAuto=t;let i=this.mediaRenditionList.sort(this.compareRendition.bind(this)),a=i.find(e=>e.id===this.mediaRenditionSelected);for(let e of i)e.selected=e===a;for(let e of(this.defaultSlot.textContent="",i)){let i=uu({type:"radio",text:this.formatRendition(e,{showBitrate:this.showRenditionBitrate(e)}),value:`${e.id}`,checked:e.selected&&!t});i.prepend(uc(this,"checked-indicator")),this.defaultSlot.append(i)}let r=a&&this.showRenditionBitrate(a);t&&(a?e=this.formatMenuItemText(`${np("Auto")} \u2022 ${this.formatRendition(a,{showBitrate:r})}`,a):this.mediaHeight>0&&this.mediaWidth>0&&(e=this.formatMenuItemText(`${np("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),e||(e=this.formatMenuItemText(np("Auto")));let n=uu({type:"radio",text:e,value:"auto",checked:t});n.dataset.description=e,n.prepend(uc(this,"checked-indicator")),this.defaultSlot.append(n)},vb=new WeakSet,vg=function(){if(null==this.value)return;let e=new nC.CustomEvent(rZ.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},nC.customElements.get("media-rendition-menu")||nC.customElements.define("media-rendition-menu",class extends uv{constructor(){super(...arguments),u7(this,vp),u7(this,vb),u7(this,vh,[]),u7(this,vm,{})}static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_RENDITION_LIST,r1.MEDIA_RENDITION_SELECTED,r1.MEDIA_RENDITION_UNAVAILABLE,r1.MEDIA_HEIGHT,r1.MEDIA_WIDTH]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,a=`${t.toFixed(+(t<1))} Mbps`;return`${i} (${a})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?(null!=(i=t.bitrate)?i:0)-(null!=(a=e.bitrate)?a:0):t.height-e.height}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!==i)switch(e){case r1.MEDIA_RENDITION_SELECTED:this.value=null!=i?i:"auto",ct(this,vp,vv).call(this);break;case r1.MEDIA_RENDITION_LIST:ce(this,vh,null==i?void 0:i.split(/\s+/).map(nr)),ct(this,vp,vv).call(this);break;case r1.MEDIA_HEIGHT:case r1.MEDIA_WIDTH:ct(this,vp,vv).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ct(this,vb,vg))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ct(this,vb,vg))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nP(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return u6(this,vh)}set mediaRenditionList(e){ce(this,vh,e),ct(this,vp,vv).call(this)}get mediaRenditionSelected(){return nZ(this,r1.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){nX(this,r1.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return nG(this,r1.MEDIA_HEIGHT)}set mediaHeight(e){nY(this,r1.MEDIA_HEIGHT,e)}get mediaWidth(){return nG(this,r1.MEDIA_WIDTH)}set mediaWidth(e){nY(this,r1.MEDIA_WIDTH,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}});let ci=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class ca extends uM{static get observedAttributes(){return[...super.observedAttributes,r1.MEDIA_RENDITION_SELECTED,r1.MEDIA_RENDITION_UNAVAILABLE,r1.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",np("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nP(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return nZ(this,r1.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){nX(this,r1.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return nG(this,r1.MEDIA_HEIGHT)}set mediaHeight(e){nY(this,r1.MEDIA_HEIGHT,e)}}ca.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${ci}</slot>
  `},ca.getTooltipContentHTML=function(){return np("Quality")},nC.customElements.get("media-rendition-menu-button")||nC.customElements.define("media-rendition-menu-button",ca);var cr=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},cn=(e,t,i)=>(cr(e,t,"read from private field"),i?i.call(e):t.get(e)),cs=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},co=(e,t,i,a)=>(cr(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),cl=(e,t,i)=>(cr(e,t,"access private method"),i);class cd extends uv{constructor(){super(),cs(this,vE),cs(this,v_),cs(this,vk),cs(this,vw),cs(this,vC),cs(this,vf,!1),cs(this,vI,e=>{let t=e.target,i=(null==t?void 0:t.nodeName)==="VIDEO",a=cl(this,vw,vS).call(this,t);(i||a)&&(cn(this,vf)?cl(this,v_,vT).call(this):cl(this,vC,vR).call(this,e))}),cs(this,vL,e=>{let t=e.target,i=this.contains(t),a=2===e.button,r=(null==t?void 0:t.nodeName)==="VIDEO",n=cl(this,vw,vS).call(this,t);i||a&&(r||n)||cl(this,v_,vT).call(this)}),cs(this,vM,e=>{"Escape"===e.key&&cl(this,v_,vT).call(this)}),cs(this,vx,e=>{var t,i;let a=e.target;if(null==(t=a.matches)?void 0:t.call(a,'button[invoke="copy"]')){let e=null==(i=a.closest("media-context-menu-item"))?void 0:i.querySelector('input[slot="copy"]');e&&navigator.clipboard.writeText(e.value)}cl(this,v_,vT).call(this)}),this.setAttribute("noautohide",""),cl(this,vE,vy).call(this)}connectedCallback(){super.connectedCallback(),nP(this).addEventListener("contextmenu",cn(this,vI)),this.addEventListener("click",cn(this,vx))}disconnectedCallback(){super.disconnectedCallback(),nP(this).removeEventListener("contextmenu",cn(this,vI)),this.removeEventListener("click",cn(this,vx)),document.removeEventListener("mousedown",cn(this,vL)),document.removeEventListener("keydown",cn(this,vM))}}vf=new WeakMap,vE=new WeakSet,vy=function(){this.hidden=!cn(this,vf)},v_=new WeakSet,vT=function(){co(this,vf,!1),cl(this,vE,vy).call(this)},vk=new WeakSet,vA=function(){document.querySelectorAll("media-context-menu").forEach(e=>{e!==this&&cl(e,v_,vT).call(e)})},vw=new WeakSet,vS=function(e){return!!e&&(!!e.hasAttribute("slot")&&"media"===e.getAttribute("slot")||!!(e.nodeName.includes("-")&&e.tagName.includes("-"))&&(e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline")))},vI=new WeakMap,vC=new WeakSet,vR=function(e){e.preventDefault(),cl(this,vk,vA).call(this),co(this,vf,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,cl(this,vE,vy).call(this),document.addEventListener("mousedown",cn(this,vL),{once:!0}),document.addEventListener("keydown",cn(this,vM),{once:!0})},vL=new WeakMap,vM=new WeakMap,vx=new WeakMap,cd.getTemplateHTML=function(e){return`
      ${uv.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `},nC.customElements.get("media-context-menu")||nC.customElements.define("media-context-menu",cd);class cu extends uI{}cu.shadowRootOptions={mode:"open"},cu.getTemplateHTML=function(e){return`
    ${uI.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `},nC.customElements.get("media-context-menu-item")||nC.customElements.define("media-context-menu-item",cu);var cc=e=>{throw TypeError(e)},ch=(e,t,i)=>t.has(e)||cc("Cannot "+i),cm=(e,t,i)=>(ch(e,t,"read from private field"),i?i.call(e):t.get(e)),cp=(e,t,i)=>t.has(e)?cc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),cv=(e,t,i,a)=>(ch(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),cb=(e,t,i)=>(ch(e,t,"access private method"),i),cg=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"undefined"==typeof DocumentFragment&&(globalThis.DocumentFragment=class extends cg{});var cf,cE,cy,c_,cT,ck,cA,cw,cS,cI,cC,cR,cL,cM,cx,cD,cN,cO,cP,cU,cH,cW,cB,c$,cq,cV,cF,cK,cj,cG,cY,cz,cQ,cZ,cX,cJ,c0,c1,c2,c3,c4,c5,c9,c8,c6,c7,he,ht,hi,ha,hr,hn,hs,ho,hl,hd,hu,hc,hh,hm,hp,hv,hb,hg,hf,hE,hy,h_,hT,hk,hA,hw,hS,hI,hC,hR,hL,hM,hx,hD,hN,hO,hP,hU,hH,hW,hB,h$,hq,hV,hF,hK,hj,hG,hY,hz,hQ,hZ,hX,hJ,h0,h1,h2,h3,h4,h5,h9,h8,h6,h7,me,mt,mi,ma,mr,mn,ms,mo,ml,md,mu,mc,mh,mm,mp,mv,mb,mg,mf,mE,my,m_,mT,mk,mA,mw,mS,mI,mC,mR,mL,mM,mx,mD,mN,mO,mP,mU,mH,mW,mB,m$,mq,mV,mF,mK,mj,mG,mY,mz,mQ,mZ,mX,mJ,m0,m1,m2,m3,m4,m5,m9,m8,m6,m7,pe,pt,pi,pa,pr,pn,ps,po,pl,pd,pu,pc,ph,pm,pp,pv,pb,pg,pf,pE,py,p_,pT,pk,pA,pw,pS,pI,pC,pR,pL,pM,px,pD,pN,pO,pP,pU,pH,pW,pB,p$,pq,pV,pF,pK,pj,pG,pY,pz,pQ,pZ,pX,pJ,p0,p1,p2,p3,p4,p5,p9,p8,p6,p7,ve,vt,vi,va,vr,vn,vs,vo,vl,vd,vu,vc,vh,vm,vp,vv,vb,vg,vf,vE,vy,v_,vT,vk,vA,vw,vS,vI,vC,vR,vL,vM,vx,vD,vN=class extends cg{},vO=class{constructor(e,t={}){cp(this,vD),cv(this,vD,null==t?void 0:t.detail)}get detail(){return cm(this,vD)}initCustomEvent(){}};vD=new WeakMap;var vP={document:{createElement:function(e,t){return new vN}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(vN)},CustomEvent:vO,EventTarget:cg,HTMLElement:vN,HTMLVideoElement:class extends cg{}},vU="undefined"==typeof window||void 0===globalThis.customElements,vH=vU?vP:globalThis,vW=vU?vP.document:globalThis.document;function vB(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function v$(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function vq(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function vV(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function vF(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var vK,vj,vG,vY=(e,t)=>!!e&&!!t&&(!!e.contains(t)||vY(e,t.getRootNode().host)),vz="mux.com",vQ=(()=>{try{return"3.14.1"}catch{}return"UNKNOWN"})(),vZ=e=>{if(e){if([it,ie].includes(e))return e;if(null!=e&&e.includes("live"))return it}},vX={crossorigin:"crossOrigin",playsinline:"playsInline"},vJ=class{constructor(e,t){cp(this,vK),cp(this,vj),cp(this,vG,[]),cv(this,vK,e),cv(this,vj,t)}[Symbol.iterator](){return cm(this,vG).values()}get length(){return cm(this,vG).length}get value(){var e;return null!=(e=cm(this,vG).join(" "))?e:""}set value(e){var t;e!==this.value&&(cv(this,vG,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return cm(this,vG)[e]}values(){return cm(this,vG).values()}keys(){return cm(this,vG).keys()}forEach(e){cm(this,vG).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||cm(this,vG).push(e)}),(""!==this.value||null!=(t=cm(this,vK))&&t.hasAttribute(`${cm(this,vj)}`))&&null!=(i=cm(this,vK))&&i.setAttribute(`${cm(this,vj)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{cm(this,vG).splice(cm(this,vG).indexOf(e),1)}),null==(t=cm(this,vK))||t.setAttribute(`${cm(this,vj)}`,`${this.value}`)}contains(e){return cm(this,vG).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};vK=new WeakMap,vj=new WeakMap,vG=new WeakMap;var v0=`[mux-player ${vQ}]`;function v1(...e){console.warn(v0,...e)}function v2(...e){console.error(v0,...e)}function v3(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${iw("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),v1(i)}var v4={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},v5={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},v9=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),v8=[...Object.values(v4).filter(e=>v4.PLAYSINLINE!==e),...Object.values(v5)];function v6(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var v7=class extends vH.HTMLElement{static get observedAttributes(){return v8}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case v5.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case v5.VOLUME:{let e=null!=(a=vV(i))?a:1;this.media&&(this.media.volume=e);return}case v5.PLAYBACKRATE:{let e=null!=(r=vV(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:v9}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:v9}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=vV(this.getAttribute(v5.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(v5.PLAYBACKRATE,`${e}`):this.removeAttribute(v5.PLAYBACKRATE)}get crossOrigin(){return v6(this,v4.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(v4.CROSSORIGIN,`${e}`)}get autoplay(){return null!=v6(this,v4.AUTOPLAY)}set autoplay(e){e?this.setAttribute(v4.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(v4.AUTOPLAY)}get loop(){return null!=v6(this,v4.LOOP)}set loop(e){e?this.setAttribute(v4.LOOP,""):this.removeAttribute(v4.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=v6(this,v4.MUTED)}set defaultMuted(e){e?this.setAttribute(v4.MUTED,""):this.removeAttribute(v4.MUTED)}get playsInline(){return null!=v6(this,v4.PLAYSINLINE)}set playsInline(e){v2("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(v4.PRELOAD,e):this.removeAttribute(v4.PRELOAD)}},be=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,bt=new WeakMap,bi=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=bt.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=bt.get(this.element);e&&e.delete(this.type)}}static for(t){bt.has(t.element)||bt.set(t.element,new Map);let i=t.attributeName.slice(2),a=bt.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},ba=new Map,br=new WeakMap,bn=new WeakMap,bs=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(ba.has(this.stringsKey))return ba.get(this.stringsKey);{let e=vW.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),ba.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(br.get(e)!==i){br.set(e,i);let t=new dO(i,this.values,this.processor);bn.set(e,t),e instanceof dV?e.replace(...t.children):e.appendChild(t);return}let a=bn.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},bo={processCallback(e,t,i){var a;if(i)for(let[e,r]of t)e in i&&function(e,t){(function(e,t){if(e instanceof dq&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1})(e,t)||function(e,t){if("boolean"==typeof t&&e instanceof dq){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(e,t)||e instanceof dq&&e.attributeName.startsWith("on")&&(bi.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),1)||!1===t&&e instanceof dV&&(e.replace(""),1)||t instanceof bs&&e instanceof dV&&(t.renderInto(e),1)||t instanceof DocumentFragment&&e instanceof dV&&(t.childNodes.length&&e.replace(...t.childNodes),1)||function(e,t){if(e instanceof dq){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(e,t)}(r,null!=(a=i[e])?a:"")}};function bl(e,...t){return new bs(e,t,bo)}var bd=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),bu=e=>e.charAt(0).toUpperCase()+e.slice(1),bc=(e,t)=>{let i=(e=>{if(e.muxCode){if(2403210===e.muxCode)return"403-expired-token.md";if(2412202===e.muxCode)return"403-malformatted-token.md";if([2403222,2403221].includes(e.muxCode))return"403-incorrect-aud-value.md";if(2403232===e.muxCode)return"403-playback-id-mismatch.md";if(2403201===e.muxCode)return"missing-signed-tokens.md";if(2404e3===e.muxCode)return"404-not-found.md";if(2412e3===e.muxCode)return"412-not-playable.md"}if(e.code){if(e.code===t8.MEDIA_ERR_NETWORK)return"";if(e.code===t8.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===t8.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(e);return{message:e.message,context:e.context,file:i}},bh=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,bm=vW.createElement("template");"innerHTML"in bm&&(bm.innerHTML=bh);var bp,bv,bb=class extends ue{};bb.template=null==(bv=null==(bp=bm.content)?void 0:bp.children)?void 0:bv[0],vH.customElements.get("media-theme-gerwig")||vH.customElements.define("media-theme-gerwig",bb);var bg={SRC:"src",POSTER:"poster"},bf={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},bE=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],by=lg.formatErrorMessage;function b_(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}lg.formatErrorMessage=e=>{var t,i,a;if(e instanceof t8){let r=((e,t=!1)=>({title:((e,t=!1)=>{var i,a;if(e.muxCode){let r=bu(null!=(i=e.errorCategory)?i:"video"),n=t9(null!=(a=e.errorCategory)?a:t5);if(2000002===e.muxCode)return iw("Your device appears to be offline",t);if(2000003===e.muxCode)return iw("Reconnecting...",t);if(2403210===e.muxCode)return iw("{category} URL has expired",t).format({category:r});if([2403232,2403222,2403221,2412202].includes(e.muxCode))return iw("{category} URL is formatted incorrectly",t).format({category:r});if(2403201===e.muxCode)return iw("Invalid {categoryName} URL",t).format({categoryName:n});if(2404e3===e.muxCode)return iw("{category} does not exist",t).format({category:r});if(2412e3===e.muxCode){let i="live"===e.streamType?"Live stream":"Video";return iw("{mediaType} is not currently available",t).format({mediaType:i})}}if(e.code){if(e.code===t8.MEDIA_ERR_NETWORK)return iw("Network Error",t);if(e.code===t8.MEDIA_ERR_DECODE)return iw("Media Error",t);if(e.code===t8.MEDIA_ERR_SRC_NOT_SUPPORTED)return iw("Source Not Supported",t)}return iw("Error",t)})(e,t).toString(),message:((e,t=!1)=>{var i,a;if(e.reload)return"";if(e.muxCode){let r=bu(null!=(i=e.errorCategory)?i:"video"),n=t9(null!=(a=e.errorCategory)?a:t5);return 2000002===e.muxCode?iw("Check your internet connection and try reloading this video.",t):2000003===e.muxCode?iw("Your connection was interrupted. Attempting to resume playback...",t):2403210===e.muxCode?iw("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):2403232===e.muxCode?iw("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):2412202===e.muxCode?iw("{category} URL is formatted incorrectly",t).format({category:r}):[2403222,2403221].includes(e.muxCode)?iw("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[2403201,24e5].includes(e.muxCode)?iw("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):2404e3===e.muxCode?"":e.message}return e.code&&(e.code===t8.MEDIA_ERR_NETWORK||e.code===t8.MEDIA_ERR_DECODE||e.code===t8.MEDIA_ERR_SRC_NOT_SUPPORTED),e.message})(e,t).toString(),reload:!!e.reload}))(e,!1);return null!=r&&r.reload?`
      ${null!=r&&r.title?`<h3>${vB(r.title)}</h3>`:""}
      <p>Try again later or <a href="#" data-mux-reload style="color: #4a90e2;">click here to retry</a></p>
    `:`
      ${null!=r&&r.title?`<h3>${vB(r.title)}</h3>`:""}
      ${null!=r&&r.message||null!=r&&r.linkUrl?`<p>
        ${vB(null!=(t=null==r?void 0:r.message)?t:"")}
        ${null!=r&&r.linkUrl?`<a
              href="${vB(r.linkUrl)}"
              target="_blank"
              rel="external noopener"
              aria-label="${vB(null!=(i=r.linkText)?i:"")} ${iw("(opens in a new window)")}"
              >${vB(null!=(a=r.linkText)?a:r.linkUrl)}</a
            >`:""}
      </p>`:""}
    `}return by(e)};var bT,bk,bA,bw,bS,bI,bC,bR,bL,bM,bx,bD,bN,bO,bP,bU,bH,bW,bB,b$,bq,bV,bF,bK,bj=Object.values(rm),bG=Object.values(bg),bY=Object.values(bf),bz="mux-player",bQ={isDialogOpen:!1},bZ={redundant_streams:!0},bX=class extends v7{constructor(){super(),cp(this,bU),cp(this,bT),cp(this,bk,!1),cp(this,bA,{}),cp(this,bw,!0),cp(this,bS,new vJ(this,"hotkeys")),cp(this,bI),cp(this,bC,()=>cb(this,bU,b$).call(this)),cp(this,bR,()=>cb(this,bU,b$).call(this)),cp(this,bL,()=>cb(this,bU,b$).call(this)),cp(this,bM,e=>{e.composedPath().find(e=>{var t;return null==(t=null==e?void 0:e.hasAttribute)?void 0:t.call(e,"data-mux-reload")})&&(e.preventDefault(),window.location.reload())}),cp(this,bx,e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&cb(this,bU,bB).call(this,{isDialogOpen:!1})}),cp(this,bD,e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(vY(this,vW.activeElement)||e.preventDefault())}),cp(this,bN),cp(this,bO,{...bQ}),cp(this,bP,e=>{var t;let i=null==(t=this.media)?void 0:t.error;if(!(i instanceof t8)){let{message:e,code:t}=null!=i?i:{};i=new t8(e,t)}if(!(null!=i&&i.fatal)){v1(i),i.data&&v1(`${i.name} data:`,i.data);return}let a=bc(i,!1);a.message&&v3(a),v2(i),i.data&&v2(`${i.name} data:`,i.data),cb(this,bU,bB).call(this,{isDialogOpen:!0})}),cv(this,bT,aT()),this.attachShadow({mode:"open"}),cb(this,bU,bW).call(this),this.isConnected&&cb(this,bU,bH).call(this)}static get NAME(){return bz}static get VERSION(){return vQ}static get observedAttributes(){var e;return[...null!=(e=v7.observedAttributes)?e:[],...bG,...bj,...bY]}setAttribute(e,t){super.setAttribute(e,t),e.startsWith("metadata-")&&this.media&&(this.media.metadata=b_(this))}removeAttribute(e){super.removeAttribute(e),e.startsWith("metadata-")&&this.media&&(this.media.metadata=b_(this))}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){cb(this,bU,bH).call(this);let e=this.media;e&&(e.metadata=b_(this))}disconnectedCallback(){var e,t,i,a,r,n,s,o,l,d;null==(e=cm(this,bI))||e.disconnect(),null==(t=this.media)||t.removeEventListener("streamtypechange",cm(this,bC)),null==(i=this.media)||i.removeEventListener("loadstart",cm(this,bR)),this.removeEventListener("error",cm(this,bP)),this.removeEventListener("click",cm(this,bM)),null==(a=this.mediaTheme)||a.removeEventListener("close",cm(this,bx)),null==(r=this.mediaTheme)||r.removeEventListener("focusin",cm(this,bD)),this.media&&(this.media.errorTranslator=void 0),null==(s=null==(n=this.media)?void 0:n.textTracks)||s.removeEventListener("addtrack",cm(this,bL)),null==(l=null==(o=this.media)?void 0:o.textTracks)||l.removeEventListener("removetrack",cm(this,bL)),null==(d=cm(this,bN))||d.call(this),cv(this,bN,void 0),cv(this,bk,!1)}attributeChangedCallback(e,t,i){var a;switch(cb(this,bU,bH).call(this),super.attributeChangedCallback(e,t,i),e){case bf.HOTKEYS:cm(this,bS).value=i;break;case bf.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&v1(iw("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case bf.THUMBNAIL_TOKEN:if(i){let e=iA(i);if(e){let{aud:t}=e;"t"!==t&&v1(iw("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"t",tokenNamePrefix:"thumbnail"}))}}break;case bf.STORYBOARD_TOKEN:if(i){let e=iA(i);if(e){let{aud:t}=e;"s"!==t&&v1(iw("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"s",tokenNamePrefix:"storyboard"}))}}break;case bf.DRM_TOKEN:if(i){let e=iA(i);if(e){let{aud:t}=e;"d"!==t&&v1(iw("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"d",tokenNamePrefix:"drm"}))}}break;case rm.PLAYBACK_ID:null!=i&&i.includes("?token")&&v2(iw("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case rm.STREAM_TYPE:i&&![it,ie,ii].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?1/0:0:v3({file:"invalid-stream-type.md",message:iw("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===it?null==this.getAttribute(bf.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case bf.FULLSCREEN_ELEMENT:if(null!=i||i!==t){let e=vW.getElementById(i),t=null==e?void 0:e.querySelector("mux-player");this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}break;case rm.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0);break;case rm.MAX_RECONNECT_RETRIES:(null==i||i!==t)&&(this.maxReconnectRetries=Number(i))}[rm.PLAYBACK_ID,bg.SRC,bf.PLAYBACK_TOKEN].includes(e)&&t!==i&&cv(this,bO,{...cm(this,bO),...bQ}),cb(this,bU,b$).call(this,{[null!=(a=vX[e])?a:vq(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(r1.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new vH.CustomEvent(rZ.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(r2.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(r1.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new vH.CustomEvent(rZ.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(r2.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(rm.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?is.includes(e)?this.setAttribute(rm.PREFER_CMCD,e):v1(`Invalid value for preferCmcd. Must be one of ${is.join()}`):this.removeAttribute(rm.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(r1.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(r1.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(bf.THEME))?e:"gerwig"}set theme(e){this.setAttribute(bf.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(bE.includes(i))continue;let a=e.getAttribute(i);t[vq(i)]=""===a||a}return t}set themeProps(e){var t,i;cb(this,bU,bH).call(this);let a={...this.themeProps,...e};for(let r in a){if(bE.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(v$(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(v$(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(rm.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(rm.PLAYBACK_ID,e):this.removeAttribute(rm.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=bJ(this,bg.SRC))?e:void 0:null!=(t=this.getAttribute(bg.SRC))?t:void 0}set src(e){e?this.setAttribute(bg.SRC,e):this.removeAttribute(bg.SRC)}get poster(){var e;let t=this.getAttribute(bg.POSTER);if(null!=t)return t;let{tokens:i}=this;return i.playback&&!i.thumbnail?void v1("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((e,{token:t,customDomain:i=vz,thumbnailTime:a,programTime:r}={})=>{var n;let s=null==t?a:void 0,{aud:o}=null!=(n=iA(t))?n:{};if(!(t&&"t"!==o))return`https://image.${i}/${e}/thumbnail.webp${vF({token:t,time:s,program_time:r})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(bg.POSTER,e):this.removeAttribute(bg.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(bf.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(bf.STORYBOARD_SRC,e):this.removeAttribute(bf.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[it,ii].includes(this.streamType)||e.playback&&!e.storyboard?void 0:((e,{token:t,customDomain:i=vz,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=null!=(n=iA(t))?n:{};if(!(t&&"s"!==s))return`https://image.${i}/${e}/storyboard.vtt${vF({token:t,format:"webp",program_start_time:a,program_end_time:r})}`})(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(bf.AUDIO)}set audio(e){e?this.setAttribute(bf.AUDIO,""):this.removeAttribute(bf.AUDIO)}get hotkeys(){return cm(this,bS)}get nohotkeys(){return this.hasAttribute(bf.NOHOTKEYS)}set nohotkeys(e){e?this.setAttribute(bf.NOHOTKEYS,""):this.removeAttribute(bf.NOHOTKEYS)}get thumbnailTime(){return vV(this.getAttribute(bf.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(bf.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(bf.VIDEO_TITLE))?e:this.getAttribute(bf.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(bf.VIDEO_TITLE,e):this.removeAttribute(bf.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=bJ(this,bf.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(bf.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(bf.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vH.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(bf.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(bf.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vH.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(bf.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(bf.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vH.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(bf.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(bf.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(bf.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(bf.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(bf.PLAYBACK_RATES))return this.getAttribute(bf.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){e?this.setAttribute(bf.PLAYBACK_RATES,e.join(" ")):this.removeAttribute(bf.PLAYBACK_RATES)}get forwardSeekOffset(){var e;return null!=(e=vV(this.getAttribute(bf.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(bf.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=vV(this.getAttribute(bf.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(bf.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(bf.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(bf.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(bf.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return vV(this.getAttribute(bf.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(bf.DEFAULT_DURATION):this.setAttribute(bf.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(rm.PLAYER_INIT_TIME)?vV(this.getAttribute(rm.PLAYER_INIT_TIME)):cm(this,bT)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(rm.PLAYER_INIT_TIME):this.setAttribute(rm.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(rm.PLAYER_SOFTWARE_NAME))?e:bz}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(rm.PLAYER_SOFTWARE_VERSION))?e:vQ}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(rm.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(rm.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(rm.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(rm.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(rm.MAX_RESOLUTION,e):this.removeAttribute(rm.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(rm.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(rm.MIN_RESOLUTION,e):this.removeAttribute(rm.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(rm.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(rm.MAX_AUTO_RESOLUTION):this.setAttribute(rm.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(rm.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(rm.RENDITION_ORDER,e):this.removeAttribute(rm.RENDITION_ORDER))}get programStartTime(){return vV(this.getAttribute(rm.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(rm.PROGRAM_START_TIME):this.setAttribute(rm.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return vV(this.getAttribute(rm.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(rm.PROGRAM_END_TIME):this.setAttribute(rm.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return vV(this.getAttribute(rm.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(rm.ASSET_START_TIME):this.setAttribute(rm.ASSET_START_TIME,`${e}`)}get assetEndTime(){return vV(this.getAttribute(rm.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(rm.ASSET_END_TIME):this.setAttribute(rm.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(bf.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(bf.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):bZ}set extraSourceParams(e){null==e?this.removeAttribute(bf.EXTRA_SOURCE_PARAMS):this.setAttribute(bf.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(rm.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(rm.CUSTOM_DOMAIN,e):this.removeAttribute(rm.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=bJ(this,rm.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(rm.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(bf.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(bf.NO_VOLUME_PREF,""):this.removeAttribute(bf.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(bf.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(bf.NO_MUTED_PREF,""):this.removeAttribute(bf.NO_MUTED_PREF)}get debug(){return null!=bJ(this,rm.DEBUG)}set debug(e){e?this.setAttribute(rm.DEBUG,""):this.removeAttribute(rm.DEBUG)}get disableTracking(){return null!=bJ(this,rm.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(rm.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=bJ(this,rm.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(rm.DISABLE_COOKIES,""):this.removeAttribute(rm.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(rm.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:ii}set streamType(e){this.setAttribute(rm.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(bf.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(bf.DEFAULT_STREAM_TYPE))?i:ie}set defaultStreamType(e){e?this.setAttribute(bf.DEFAULT_STREAM_TYPE,e):this.removeAttribute(bf.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(bf.TARGET_LIVE_WINDOW)?+this.getAttribute(bf.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(bf.TARGET_LIVE_WINDOW):this.setAttribute(bf.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return vV(bJ(this,rm.START_TIME))}set startTime(e){this.setAttribute(rm.START_TIME,`${e}`)}get initialBandwidthEstimateKbps(){return vV(bJ(this,rm.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(e){null==e?this.removeAttribute(rm.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(rm.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`)}get initialEstimateSegments(){return vV(bJ(this,rm.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(e){null==e?this.removeAttribute(rm.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(rm.INITIAL_ESTIMATE_SEGMENTS,`${e}`)}get minPreloadSegments(){return vV(bJ(this,rm.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(e){null==e?this.removeAttribute(rm.MIN_PRELOAD_SEGMENTS):this.setAttribute(rm.MIN_PRELOAD_SEGMENTS,`${e}`)}get preferPlayback(){let e=this.getAttribute(rm.PREFER_PLAYBACK);if("mse"===e||e===ia)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===ia?this.setAttribute(rm.PREFER_PLAYBACK,e):this.removeAttribute(rm.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){(cb(this,bU,bH).call(this),this.media)?this.media.metadata={...b_(this),...e}:v2("underlying media element missing when trying to set metadata. metadata will not be set.")}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){(cb(this,bU,bH).call(this),this.media)?this.media._hlsConfig=e:v2("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.")}async addCuePoints(e){var t;return(cb(this,bU,bH).call(this),this.media)?null==(t=this.media)?void 0:t.addCuePoints(e):void v2("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;return(cb(this,bU,bH).call(this),this.media)?null==(t=this.media)?void 0:t.addChapters(e):void v2("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(bf.PLAYBACK_TOKEN),t=this.getAttribute(bf.DRM_TOKEN),i=this.getAttribute(bf.THUMBNAIL_TOKEN),a=this.getAttribute(bf.STORYBOARD_TOKEN);return{...cm(this,bA),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){cv(this,bA,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(bf.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(bf.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(bf.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(bf.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(bf.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(bf.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(bf.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(bf.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return iN(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(bf.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(bf.CAST_RECEIVER,e):this.removeAttribute(bf.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){this.media?this.media.castCustomData=e:v2("underlying media element missing when trying to set castCustomData. castCustomData will not be set.")}get noTooltips(){return this.hasAttribute(bf.NO_TOOLTIPS)}set noTooltips(e){e?this.setAttribute(bf.NO_TOOLTIPS,""):this.removeAttribute(bf.NO_TOOLTIPS)}get proudlyDisplayMuxBadge(){return this.hasAttribute(bf.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(bf.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(bf.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return null==(e=this.media)?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){this.media?this.media.capRenditionToPlayerSize=e:v2("underlying media element missing when trying to set capRenditionToPlayerSize")}get maxReconnectRetries(){var e;return null==(e=this.media)?void 0:e.maxReconnectRetries}set maxReconnectRetries(e){this.media?this.media.maxReconnectRetries=e:v2("underlying media element missing when trying to set maxReconnectRetries")}};function bJ(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}bT=new WeakMap,bk=new WeakMap,bA=new WeakMap,bw=new WeakMap,bS=new WeakMap,bI=new WeakMap,bC=new WeakMap,bR=new WeakMap,bL=new WeakMap,bM=new WeakMap,bx=new WeakMap,bD=new WeakMap,bN=new WeakMap,bO=new WeakMap,bP=new WeakMap,bU=new WeakSet,bH=function(){var e,t,i,a;if(!cm(this,bk)){cv(this,bk,!0),cb(this,bU,b$).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof vH.HTMLElement))throw""}catch{v2("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{v2("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof oA))throw""}catch{v2("<media-controller> failed to upgrade!")}cb(this,bU,bq).call(this),cb(this,bU,bV).call(this),cb(this,bU,bF).call(this),cv(this,bw,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(sr))||t),cb(this,bU,bK).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",cm(this,bC)),null==(a=this.media)||a.addEventListener("loadstart",cm(this,bR)),this.media&&(this.media.metadata=b_(this))}},bW=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},bB=function(e){Object.assign(cm(this,bO),e),cb(this,bU,b$).call(this)},b$=function(e={}){var t,i,a,r,n,s,o,l,d,u,c,h,m,p,b,g,f,E,y,_,T,k,A,w,S,I,C,R,L,M,x,D,N,O,P,U,H,W,B,$,q,V,F,K,j,G,Y,z,Q,Z,X;let J,ee,et,ei;t={...cm(this,bO),...e},J={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(i=this.media)?void 0:i.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(bf.STORYBOARD_SRC),fullscreenElement:this.getAttribute(bf.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=vH.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(bf.NOHOTKEYS),hotKeys:this.getAttribute(bf.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,initialBandwidthEstimateKbps:this.initialBandwidthEstimateKbps,initialEstimateSegments:this.initialEstimateSegments,minPreloadSegments:this.minPreloadSegments,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(rm.TARGET_LIVE_WINDOW),streamType:vZ(this.getAttribute(rm.STREAM_TYPE)),primaryColor:this.getAttribute(bf.PRIMARY_COLOR),secondaryColor:this.getAttribute(bf.SECONDARY_COLOR),accentColor:this.getAttribute(bf.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(ee=null==(n=this.mediaController)?void 0:n.querySelector("media-time-display"))&&"none"===getComputedStyle(ee).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(bf.PLAYBACK_RATES),customDomain:null!=(a=this.getAttribute(rm.CUSTOM_DOMAIN))?a:void 0,title:this.getAttribute(bf.TITLE),videoTitle:null!=(r=this.getAttribute(bf.VIDEO_TITLE))?r:this.getAttribute(bf.TITLE),novolumepref:this.hasAttribute(bf.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(bf.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(bf.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(bf.DISABLE_PSEUDO_ENDED),maxReconnectRetries:this.maxReconnectRetries,capRenditionToPlayerSize:this.capRenditionToPlayerSize,...t,extraSourceParams:this.extraSourceParams},s=bl`
  <style>
    ${(e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(J)}
    ${be}
  </style>
  ${l=J,bl`
  <media-theme
    template="${l.themeTemplate||!1}"
    defaultstreamtype="${null!=(d=l.defaultStreamType)&&d}"
    hotkeys="${et=l.hotKeys?`${l.hotKeys}`:"","live"===vZ(l.streamType)&&(et+=" noarrowleft noarrowright"),et||!1}"
    nohotkeys="${l.noHotKeys||!l.hasSrc||!1}"
    noautoseektolive="${!!(null!=(u=l.streamType)&&u.includes(it))&&0!==l.targetLiveWindow}"
    novolumepref="${l.novolumepref||!1}"
    nomutedpref="${l.nomutedpref||!1}"
    disabled="${!l.hasSrc||l.isDialogOpen}"
    audio="${null!=(c=l.audio)&&c}"
    style="${null!=(X={"--media-primary-color":l.primaryColor,"--media-secondary-color":l.secondaryColor,"--media-accent-color":l.accentColor},ei="",Object.entries(X).forEach(([e,t])=>{null!=t&&(ei+=`${v$(e)}: ${t}; `)}),h=ei?ei.trim():void 0)&&h}"
    defaultsubtitles="${!l.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(m=l.forwardSeekOffset)&&m}"
    backwardseekoffset="${null!=(p=l.backwardSeekOffset)&&p}"
    playbackrates="${null!=(b=l.playbackRates)&&b}"
    defaultshowremainingtime="${null!=(g=l.defaultShowRemainingTime)&&g}"
    defaultduration="${null!=(f=l.defaultDuration)&&f}"
    hideduration="${null!=(E=l.hideDuration)&&E}"
    title="${null!=(y=l.title)&&y}"
    videotitle="${null!=(_=l.videoTitle)&&_}"
    proudlydisplaymuxbadge="${null!=(T=l.proudlyDisplayMuxBadge)&&T}"
    exportparts="${bd}"
  >
    <mux-video
      slot="media"
      inert="${null!=(k=l.noHotKeys)&&k}"
      target-live-window="${null!=(A=l.targetLiveWindow)&&A}"
      stream-type="${null!=(w=vZ(l.streamType))&&w}"
      crossorigin="${null!=(S=l.crossOrigin)?S:""}"
      playsinline
      autoplay="${null!=(I=l.autoplay)&&I}"
      muted="${null!=(C=l.muted)&&C}"
      loop="${null!=(R=l.loop)&&R}"
      preload="${null!=(L=l.preload)&&L}"
      debug="${null!=(M=l.debug)&&M}"
      prefer-cmcd="${null!=(x=l.preferCmcd)&&x}"
      disable-tracking="${null!=(D=l.disableTracking)&&D}"
      disable-cookies="${null!=(N=l.disableCookies)&&N}"
      prefer-playback="${null!=(O=l.preferPlayback)&&O}"
      start-time="${null!=l.startTime&&l.startTime}"
      initial-bandwidth-estimate-kbps="${null!=l.initialBandwidthEstimateKbps&&l.initialBandwidthEstimateKbps}"
      initial-estimate-segments="${null!=l.initialEstimateSegments&&l.initialEstimateSegments}"
      min-preload-segments="${null!=l.minPreloadSegments&&l.minPreloadSegments}"
      beacon-collection-domain="${null!=(P=l.beaconCollectionDomain)&&P}"
      player-init-time="${null!=(U=l.playerInitTime)&&U}"
      player-software-name="${null!=(H=l.playerSoftwareName)&&H}"
      player-software-version="${null!=(W=l.playerSoftwareVersion)&&W}"
      env-key="${null!=(B=l.envKey)&&B}"
      custom-domain="${null!=($=l.customDomain)&&$}"
      src="${l.src?l.src:!!l.playbackId&&aA(l)}"
      cast-src="${l.src?l.src:!!l.playbackId&&aA(l)}"
      cast-receiver="${null!=(q=l.castReceiver)&&q}"
      drm-token="${null!=(F=null==(V=l.tokens)?void 0:V.drm)&&F}"
      playback-token="${null!=(j=null==(K=l.tokens)?void 0:K.playback)&&j}"
      exportparts="video"
      disable-pseudo-ended="${null!=(G=l.disablePseudoEnded)&&G}"
      max-reconnect-retries="${null!=(Y=l.maxReconnectRetries)&&Y}"
      max-auto-resolution="${null!=(z=l.maxAutoResolution)&&z}"
      cap-rendition-to-player-size="${null!=(Q=l.capRenditionToPlayerSize)&&Q}"
    >
      ${l.storyboard?bl`<track label="thumbnails" default kind="metadata" src="${l.storyboard}" />`:bl``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!l.poster&&l.poster}"
        placeholdersrc="${null!=(Z=l.placeholder)&&Z}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,o=this.shadowRoot,s.renderInto(o)},bq=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(bE.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};cv(this,bI,new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)})),cm(this,bI).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},bV=function(){var e,t;this.addEventListener("error",cm(this,bP)),this.addEventListener("click",cm(this,bM)),null==(e=this.mediaTheme)||e.addEventListener("close",cm(this,bx)),null==(t=this.mediaTheme)||t.addEventListener("focusin",cm(this,bD)),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof t8))return e;let r=bc(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},bF=function(){var e,t,i,a;null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",cm(this,bL)),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",cm(this,bL))},bK=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===it&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===it&&(r=-2);let n=r-t;if(e.line===n&&!i)return;a.has(e)||a.set(e,e.line),e.line=n}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(sr))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,cm(this,bw))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o);let l=()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(sr))||t;cm(this,bw)!==a&&(cv(this,bw,a),n(i,cm(this,bw)))};this.addEventListener("userinactivechange",l),cv(this,bN,()=>{var e,t;null==i||i.removeEventListener("cuechange",s),null==(e=this.textTracks)||e.removeEventListener("change",o),null==(t=this.textTracks)||t.removeEventListener("addtrack",o),this.removeEventListener("userinactivechange",l)})},e.s(["default",()=>bX,"getVideoAttribute",()=>bJ,"playerSoftwareName",()=>bz,"playerSoftwareVersion",()=>vQ],773445);var b0=e=>{throw TypeError(e)},b1=(e,t,i)=>t.has(e)||b0("Cannot "+i),b2=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"undefined"==typeof DocumentFragment&&(globalThis.DocumentFragment=class extends b2{});var b3,b4=class extends b2{},b5=class{constructor(e,t={}){((e,t,i)=>t.has(e)?b0("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i))(this,b3),((e,t,i,a)=>(b1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,b3,null==t?void 0:t.detail)}get detail(){let e,t;return b1(this,e=b3,"read from private field"),t?t.call(this):e.get(this)}initCustomEvent(){}};b3=new WeakMap;var b9={document:{createElement:function(e,t){return new b4}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(b4)},CustomEvent:b5,EventTarget:b2,HTMLElement:b4,HTMLVideoElement:class extends b2{}},b8="undefined"==typeof window||void 0===globalThis.customElements,b6=b8?b9:globalThis;b8&&b9.document,b6.customElements.get("mux-player")||(b6.customElements.define("mux-player",bX),b6.MuxPlayerElement=bX),e.i(773445);var b7=parseInt(r.default.version)>=19,ge={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"};function gt(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var gi=Object.prototype.hasOwnProperty,ga=(e,t,i)=>!((e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!gi.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0})(t,e[i]),gr=(e,t,i)=>{e[i]=t},gn=(e,t,i,a=gr,n=ga)=>(0,r.useEffect)(()=>{let r=null==i?void 0:i.current;r&&n(r,t,e)&&a(r,t,e)},[null==i?void 0:i.current,t]),gs=(()=>{try{return"3.14.1"}catch{}return"UNKNOWN"})(),go=(e,t,i)=>(0,r.useEffect)(()=>{let a=null==t?void 0:t.current;if(a&&i)return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i,e]),gl=r.default.forwardRef(({children:e,...t},i)=>r.default.createElement("mux-player",{suppressHydrationWarning:!0,...((e={})=>{let{ref:t,...i}=e;return Object.entries(i).reduce((e,[t,i])=>{let a=((e,t)=>{if(!(!b7&&"boolean"==typeof t&&!t)){let i,a;if(i=e,null!=(a=ge)&&i in a)return ge[e];if(void 0!==t)return/[A-Z]/.test(e)?e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`):e}})(t,i);if(!a)return e;let r=b7||"boolean"!=typeof i?i:"";return e[a]=r,e},{})})(t),ref:i},e)),gd="mux-player-react",gu=r.default.forwardRef((e,t)=>{var i;let a=(0,r.useRef)(null),n=function(...e){return r.useCallback(function(...e){return t=>{let i=!1,a=e.map(e=>{let a=gt(e,t);return i||"function"!=typeof a||(i=!0),a});if(i)return()=>{for(let t=0;t<a.length;t++){let i=a[t];"function"==typeof i?i():gt(e[t],null)}}}}(...e),e)}(a,t),[s]=((e,t)=>{var i;let{onAbort:a,onCanPlay:r,onCanPlayThrough:n,onEmptied:s,onLoadStart:o,onLoadedData:l,onLoadedMetadata:d,onProgress:u,onDurationChange:c,onVolumeChange:h,onRateChange:m,onResize:p,onWaiting:b,onPlay:g,onPlaying:f,onTimeUpdate:E,onPause:y,onSeeking:_,onSeeked:T,onStalled:k,onSuspend:A,onEnded:w,onError:S,onCuePointChange:I,onChapterChange:C,metadata:R,tokens:L,paused:M,playbackId:x,playbackRates:D,currentTime:N,themeProps:O,extraSourceParams:P,castCustomData:U,_hlsConfig:H,...W}=t;return gn("tokens",L,e),gn("playbackId",x,e),gn("playbackRates",D,e),gn("metadata",R,e),gn("disableCookies",null!=(i=t.disableCookies)&&i,e),gn("extraSourceParams",P,e),gn("_hlsConfig",H,e),gn("themeProps",O,e),gn("castCustomData",U,e),gn("paused",M,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&ga(e,t,i)),gn("currentTime",N,e,(e,t)=>{null!=t&&(e.currentTime=t)}),go("abort",e,a),go("canplay",e,r),go("canplaythrough",e,n),go("emptied",e,s),go("loadstart",e,o),go("loadeddata",e,l),go("loadedmetadata",e,d),go("progress",e,u),go("durationchange",e,c),go("volumechange",e,h),go("ratechange",e,m),go("resize",e,p),go("waiting",e,b),go("play",e,g),go("playing",e,f),go("timeupdate",e,E),go("pause",e,y),go("seeking",e,_),go("seeked",e,T),go("stalled",e,k),go("suspend",e,A),go("ended",e,w),go("error",e,S),go("cuepointchange",e,I),go("chapterchange",e,C),[W]})(a,e),[o]=(0,r.useState)(null!=(i=e.playerInitTime)?i:aT());return r.default.createElement(gl,{ref:n,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:gd,playerSoftwareVersion:gs,playerInitTime:o,...s})});e.s(["default",()=>gu,"playerSoftwareName",()=>gd,"playerSoftwareVersion",()=>gs],785589),e.i(785589),e.s(["MaxResolution",()=>id,"MediaError",()=>t8,"MinResolution",()=>iu,"RenditionOrder",()=>ic,"default",()=>gu,"generatePlayerInitTime",()=>aT,"playerSoftwareName",()=>gd,"playerSoftwareVersion",()=>gs],445481)}]);