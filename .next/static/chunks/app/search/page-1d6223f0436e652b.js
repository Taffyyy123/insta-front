(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[959],{4343:(e,t,r)=>{Promise.resolve().then(r.bind(r,7446))},7401:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var s=r(2115);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,s.forwardRef)((e,t)=>{let{color:r="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:c="",children:u,iconNode:d,...f}=e;return(0,s.createElement)("svg",{ref:t,...n,width:a,height:a,stroke:r,strokeWidth:o?24*Number(i)/Number(a):i,className:l("lucide",c),...f},[...d.map(e=>{let[t,r]=e;return(0,s.createElement)(t,r)}),...Array.isArray(u)?u:[u]])}),o=(e,t)=>{let r=(0,s.forwardRef)((r,n)=>{let{className:o,...c}=r;return(0,s.createElement)(i,{ref:n,iconNode:t,className:l("lucide-".concat(a(e)),o),...c})});return r.displayName="".concat(e),r}},3250:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(7401).A)("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])},6507:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(7401).A)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]])},853:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(7401).A)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},9009:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(7401).A)("SquarePlus",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]])},7446:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(5155),a=r(5055),l=r(3900),n=r(9492),i=r(2115);let o=()=>{let[e,t]=(0,i.useState)([]),r=(0,i.useCallback)(async()=>{let e=localStorage.getItem("accessToken"),r=await fetch("https://instagram-backend-e3eq.onrender.com/user/users",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});t(await r.json())},[]);return(0,i.useEffect)(()=>{r()},[r]),(0,i.useEffect)(()=>{console.log(e)},[e]),(0,s.jsxs)("div",{className:"w-screen h-full bg-black flex flex-col items-center",children:[(0,s.jsx)("div",{className:"text-white font-sans font-bold flex justify-center text-2xl p-3",children:"Search"}),(0,s.jsx)(l.p,{placeholder:"Search",className:"font-sans font-bold text-lg bg-neutral-800 w-11/12 text-white mb-4"}),(0,s.jsx)("div",{className:"flex flex-col gap-4 overflow-scroll h-fit pb-9",children:e.map(e=>(0,s.jsxs)("div",{className:"text-white flex justify-start items-center gap-3",children:[(0,s.jsx)("div",{className:"flex justify-start items-center",children:(null==e?void 0:e.proImg)==null?(0,s.jsx)(a.eu,{className:"w-[40px] h-[40px]",children:(0,s.jsx)(a.BK,{src:"https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"})}):(0,s.jsx)(a.eu,{className:"w-[40px] h-[40px]",children:(0,s.jsx)(a.BK,{src:e.proImg})})}),(0,s.jsx)("div",{className:"font-bold font-sans text-lg",children:e.username})]},e._id))}),(0,s.jsx)(n.A,{})]})}},5055:(e,t,r)=>{"use strict";r.d(t,{BK:()=>o,eu:()=>i});var s=r(5155),a=r(2115),l=r(4920),n=r(1567);let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(l.bL,{ref:t,className:(0,n.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",r),...a})});i.displayName=l.bL.displayName;let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(l._V,{ref:t,className:(0,n.cn)("aspect-square h-full w-full",r),...a})});o.displayName=l._V.displayName,a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(l.H4,{ref:t,className:(0,n.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",r),...a})}).displayName=l.H4.displayName},3312:(e,t,r)=>{"use strict";r.d(t,{$:()=>c});var s=r(5155),a=r(2115),l=r(2317),n=r(1027),i=r(1567);let o=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,t)=>{let{className:r,variant:a,size:n,asChild:c=!1,...u}=e,d=c?l.DX:"button";return(0,s.jsx)(d,{className:(0,i.cn)(o({variant:a,size:n,className:r})),ref:t,...u})});c.displayName="Button"},3900:(e,t,r)=>{"use strict";r.d(t,{p:()=>n});var s=r(5155),a=r(2115),l=r(1567);let n=a.forwardRef((e,t)=>{let{className:r,type:a,...n}=e;return(0,s.jsx)("input",{type:a,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:t,...n})});n.displayName="Input"},9492:(e,t,r)=>{"use strict";r.d(t,{A:()=>f});var s=r(5155),a=r(3312),l=r(7684),n=r(6507),i=r(853),o=r(3250),c=r(7396),u=r(2115),d=r(9009);let f=()=>{let[e,t]=(0,u.useState)(null);return(0,u.useEffect)(()=>{let e=localStorage.getItem("accessToken");e&&t((0,l.s)(e).userId)},[]),(0,s.jsxs)("div",{className:"w-screen fixed bottom-0 left-0 bg-black",children:[(0,s.jsx)(c.default,{className:"w-1/4 bg-black",href:"/posts",children:(0,s.jsx)(a.$,{className:"w-1/4 bg-black text-xl",children:(0,s.jsx)(n.A,{})})}),(0,s.jsx)(c.default,{className:"w-1/4 bg-black",href:"/search",children:(0,s.jsx)(a.$,{className:"w-1/4 bg-black",children:(0,s.jsx)(i.A,{})})}),(0,s.jsx)(c.default,{href:"/uploadPost",className:"w-1/4 bg-black",children:(0,s.jsx)(a.$,{className:"w-1/4 bg-black text-xl",children:(0,s.jsx)(d.A,{})})}),e&&(0,s.jsx)(c.default,{className:"w-1/4 bg-black",href:"/profile/".concat(e),children:(0,s.jsx)(a.$,{className:"w-1/4 bg-black text-xl",children:(0,s.jsx)(o.A,{})})})]})}},1567:(e,t,r)=>{"use strict";r.d(t,{cn:()=>l});var s=r(3463),a=r(9795);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.QP)((0,s.$)(t))}},4920:(e,t,r)=>{"use strict";r.d(t,{H4:()=>y,_V:()=>w,bL:()=>b,eu:()=>h});var s=r(2115),a=r(8166),l=r(1524),n=r(6611),i=r(3360),o=r(5155),c="Avatar",[u,d]=(0,a.A)(c),[f,m]=u(c),h=s.forwardRef((e,t)=>{let{__scopeAvatar:r,...a}=e,[l,n]=s.useState("idle");return(0,o.jsx)(f,{scope:r,imageLoadingStatus:l,onImageLoadingStatusChange:n,children:(0,o.jsx)(i.sG.span,{...a,ref:t})})});h.displayName=c;var p="AvatarImage",v=s.forwardRef((e,t)=>{let{__scopeAvatar:r,src:a,onLoadingStatusChange:c=()=>{},...u}=e,d=m(p,r),f=function(e,t){let[r,a]=s.useState("idle");return(0,n.N)(()=>{if(!e){a("error");return}let r=!0,s=new window.Image,l=e=>()=>{r&&a(e)};return a("loading"),s.onload=l("loaded"),s.onerror=l("error"),s.src=e,t&&(s.referrerPolicy=t),()=>{r=!1}},[e,t]),r}(a,u.referrerPolicy),h=(0,l.c)(e=>{c(e),d.onImageLoadingStatusChange(e)});return(0,n.N)(()=>{"idle"!==f&&h(f)},[f,h]),"loaded"===f?(0,o.jsx)(i.sG.img,{...u,ref:t,src:a}):null});v.displayName=p;var x="AvatarFallback",g=s.forwardRef((e,t)=>{let{__scopeAvatar:r,delayMs:a,...l}=e,n=m(x,r),[c,u]=s.useState(void 0===a);return s.useEffect(()=>{if(void 0!==a){let e=window.setTimeout(()=>u(!0),a);return()=>window.clearTimeout(e)}},[a]),c&&"loaded"!==n.imageLoadingStatus?(0,o.jsx)(i.sG.span,{...l,ref:t}):null});g.displayName=x;var b=h,w=v,y=g},8166:(e,t,r)=>{"use strict";r.d(t,{A:()=>n,q:()=>l});var s=r(2115),a=r(5155);function l(e,t){let r=s.createContext(t),l=e=>{let{children:t,...l}=e,n=s.useMemo(()=>l,Object.values(l));return(0,a.jsx)(r.Provider,{value:n,children:t})};return l.displayName=e+"Provider",[l,function(a){let l=s.useContext(r);if(l)return l;if(void 0!==t)return t;throw Error(`\`${a}\` must be used within \`${e}\``)}]}function n(e,t=[]){let r=[],l=()=>{let t=r.map(e=>s.createContext(e));return function(r){let a=r?.[e]||t;return s.useMemo(()=>({[`__scope${e}`]:{...r,[e]:a}}),[r,a])}};return l.scopeName=e,[function(t,l){let n=s.createContext(l),i=r.length;r=[...r,l];let o=t=>{let{scope:r,children:l,...o}=t,c=r?.[e]?.[i]||n,u=s.useMemo(()=>o,Object.values(o));return(0,a.jsx)(c.Provider,{value:u,children:l})};return o.displayName=t+"Provider",[o,function(r,a){let o=a?.[e]?.[i]||n,c=s.useContext(o);if(c)return c;if(void 0!==l)return l;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let a=r.reduce((t,{useScope:r,scopeName:s})=>{let a=r(e)[`__scope${s}`];return{...t,...a}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return r.scopeName=t.scopeName,r}(l,...t)]}},3360:(e,t,r)=>{"use strict";r.d(t,{hO:()=>o,sG:()=>i});var s=r(2115),a=r(7650),l=r(2317),n=r(5155),i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=s.forwardRef((e,r)=>{let{asChild:s,...a}=e,i=s?l.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,n.jsx)(i,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function o(e,t){e&&a.flushSync(()=>e.dispatchEvent(t))}},1524:(e,t,r)=>{"use strict";r.d(t,{c:()=>a});var s=r(2115);function a(e){let t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...e)=>t.current?.(...e),[])}},6611:(e,t,r)=>{"use strict";r.d(t,{N:()=>a});var s=r(2115),a=globalThis?.document?s.useLayoutEffect:()=>{}},1027:(e,t,r)=>{"use strict";r.d(t,{F:()=>n});var s=r(3463);let a=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=s.$,n=(e,t)=>r=>{var s;if((null==t?void 0:t.variants)==null)return l(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:n,defaultVariants:i}=t,o=Object.keys(n).map(e=>{let t=null==r?void 0:r[e],s=null==i?void 0:i[e];if(null===t)return null;let l=a(t)||a(s);return n[e][l]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,s]=t;return void 0===s||(e[r]=s),e},{});return l(e,o,null==t?void 0:null===(s=t.compoundVariants)||void 0===s?void 0:s.reduce((e,t)=>{let{class:r,className:s,...a}=t;return Object.entries(a).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...i,...c}[t]):({...i,...c})[t]===r})?[...e,r,s]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}},7684:(e,t,r)=>{"use strict";r.d(t,{s:()=>a});class s extends Error{}function a(e,t){let r;if("string"!=typeof e)throw new s("Invalid token specified: must be a string");t||(t={});let a=!0===t.header?0:1,l=e.split(".")[a];if("string"!=typeof l)throw new s(`Invalid token specified: missing part #${a+1}`);try{r=function(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw Error("base64 string is not of the correct length")}try{var r;return r=t,decodeURIComponent(atob(r).replace(/(.)/g,(e,t)=>{let r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r}))}catch(e){return atob(t)}}(l)}catch(e){throw new s(`Invalid token specified: invalid base64 for part #${a+1} (${e.message})`)}try{return JSON.parse(r)}catch(e){throw new s(`Invalid token specified: invalid json for part #${a+1} (${e.message})`)}}s.prototype.name="InvalidTokenError"}},e=>{var t=t=>e(e.s=t);e.O(0,[433,441,517,358],()=>t(4343)),_N_E=e.O()}]);