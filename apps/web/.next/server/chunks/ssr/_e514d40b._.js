module.exports=[668301,a=>{"use strict";var b=a.i(924572);a.i(833920),a.i(915952);var c=a.i(126994);let d=async()=>{let a=await (0,b.cookies)(),d=c.default.settingsCookieName;return JSON.parse(a.get(d)?.value||"{}")},e=async()=>(await d()).mode||c.default.mode,f=async()=>{let a=await (0,b.cookies)(),c=await e(),d=a.get("colorPref")?.value||"light";return("system"===c?d:c)||"light"},g=async()=>{let a=await e(),b=await f();return"system"===a?b:a};a.s(["getMode",0,e,"getServerMode",0,g,"getSettingsFromCookie",0,d,"getSystemMode",0,f])},853089,a=>{"use strict";a.i(801283),a.s([])},12175,556676,79288,a=>{"use strict";var b=a.i(870834);function c(a){let{defaultMode:c="system",defaultLightColorScheme:d="light",defaultDarkColorScheme:e="dark",modeStorageKey:f="mode",colorSchemeStorageKey:g="color-scheme",attribute:h="data-color-scheme",colorSchemeNode:i="document.documentElement",nonce:j}=a||{},k="",l=h;if("class"===h&&(l=".%s"),"data"===h&&(l="[data-%s]"),l.startsWith(".")){let a=l.substring(1);k+=`${i}.classList.remove('${a}'.replace('%s', light), '${a}'.replace('%s', dark));
      ${i}.classList.add('${a}'.replace('%s', colorScheme));`}let m=l.match(/\[([^[\]]+)\]/);if(m){let[a,b]=m[1].split("=");b||(k+=`${i}.removeAttribute('${a}'.replace('%s', light));
      ${i}.removeAttribute('${a}'.replace('%s', dark));`),k+=`
      ${i}.setAttribute('${a}'.replace('%s', colorScheme), ${b?`${b}.replace('%s', colorScheme)`:'""'});`}else".%s"!==l&&(k+=`${i}.setAttribute('${l}', colorScheme);`);return(0,b.jsx)("script",{suppressHydrationWarning:!0,nonce:j,dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${f}') || '${c}';
  const dark = localStorage.getItem('${g}-dark') || '${e}';
  const light = localStorage.getItem('${g}-light') || '${d}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${k}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}a.s(["default",0,function(a){let{defaultMode:d="system",defaultLightColorScheme:e="light",defaultDarkColorScheme:f="dark",modeStorageKey:g="mui-mode",colorSchemeStorageKey:h="mui-color-scheme",attribute:i="data-mui-color-scheme",colorSchemeNode:j="document.documentElement",nonce:k}=a;return(0,b.jsx)(c,{defaultMode:d,defaultLightColorScheme:e,defaultDarkColorScheme:f,modeStorageKey:g,colorSchemeStorageKey:h,attribute:i,colorSchemeNode:j,nonce:k})}],12175);let d=Error("Cannot find module './app.js'");throw d.code="MODULE_NOT_FOUND",d},943287,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(854140).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/apps/web/src/components/LangRedirect.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/apps/web/src/components/LangRedirect.tsx <module evaluation>","default")},771119,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(854140).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/apps/web/src/components/LangRedirect.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/apps/web/src/components/LangRedirect.tsx","default")},263297,a=>{"use strict";a.i(943287);var b=a.i(771119);a.n(b)},94970,a=>{"use strict";var b=a.i(870834),c=a.i(924572),d=a.i(12175),e=a.i(263297);a.i(853089);var f=a.i(312330);let g=["_next"],h=a=>{let c=f.i18n.locales.includes(a.lang),d=g.includes(a.lang);return c||d?a.children:(0,b.jsx)(e.default,{})};a.i(556676);var i=a.i(79288),j=a.i(668301);let k=(0,i.getBranding)(),l={title:k.seo.defaultTitle,description:k.seo.defaultDescription,applicationName:k.appName},m=async a=>{let e=await a.params,{children:g}=a,i=(0,f.resolveLocale)(e.lang),k=await (0,c.headers)(),l=await (0,j.getSystemMode)(),m=f.i18n.langDirection[i];return(0,b.jsx)(h,{headersList:k,lang:i,children:(0,b.jsx)("html",{id:"__next",lang:i,dir:m,suppressHydrationWarning:!0,children:(0,b.jsxs)("body",{className:"flex is-full min-bs-full flex-auto flex-col",children:[(0,b.jsx)(d.default,{attribute:"data",defaultMode:l}),g]})})})};a.s(["default",0,m,"metadata",0,l],94970)}];

//# sourceMappingURL=_e514d40b._.js.map