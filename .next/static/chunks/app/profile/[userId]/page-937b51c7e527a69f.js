(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{6409:(e,t,r)=>{Promise.resolve().then(r.bind(r,5862))},5862:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(5155),a=r(5055),l=r(9749),n=r(9492),o=r(5565),i=r(7396),c=r(2115);let d=e=>{let{params:t}=e,{userId:r}=(0,c.use)(t),[d,u]=(0,c.useState)(),f=(0,c.useCallback)(async()=>{let e=localStorage.getItem("accessToken"),t=await fetch("https://instagram-backend-e3eq.onrender.com/user/oneUser/".concat(r),{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}}),s=await t.json();console.log(s),u(s)},[r]);(0,c.useEffect)(()=>{f()},[f]);let m=null==d?void 0:d.posts.length;return(0,s.jsxs)(l.Zp,{className:"w-screen h-screen bg-black border-none rounded-none relative",children:[(0,s.jsxs)(l.aR,{className:"flex justify-center pt-5 pb-0 gap-5",children:[(0,s.jsx)("div",{className:"w-1/3  h-[100px] flex justify-center items-center",children:(null==d?void 0:d.proImg)==null?(0,s.jsx)(a.eu,{className:"w-3/4 h-3/4",children:(0,s.jsx)(a.BK,{src:"https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"})}):(0,s.jsx)(a.eu,{className:"w-[77px] h-[77px]",children:(0,s.jsx)(a.BK,{src:d.proImg})})}),(0,s.jsxs)("div",{className:"w-2/3 flex flex-col justify-center space-y-3",children:[(0,s.jsx)("div",{className:"h-1/3 font-extrabold text-xl flex justify-start items-center text-white",children:null==d?void 0:d.username}),(0,s.jsx)("button",{className:"h-1/3 text-white w-2/4 bg-neutral-600 font-sans font-bold text-base rounded-lg",children:"Edit profile"})]})]}),(0,s.jsxs)(l.BT,{className:"w-screen flex flex-col items-center pt-5 ",children:[(0,s.jsx)("div",{className:"text-white font-sans font-bold w-5/6 ",children:null==d?void 0:d.fullname}),(0,s.jsx)("div",{className:"text-gray-400 w-5/6 font-sans font-medium ",children:null==d?void 0:d.bio})]}),(0,s.jsxs)(l.Wu,{className:"flex w-screen border border-gray-500 border-r-0 border-l-0 justify-center pt-3 pb-3 mt-5",children:[(0,s.jsxs)("div",{className:"text-gray-400 w-1/3 flex flex-col items-center",children:[(0,s.jsx)("p",{className:"text-white font-bold",children:null==d?void 0:d.posts.length})," posts"]}),(0,s.jsxs)("div",{className:"text-gray-400 w-1/3 flex flex-col items-center",children:[(0,s.jsx)("p",{className:"text-white font-bold",children:null==d?void 0:d.followers.length})," ","followers"]}),(0,s.jsxs)("div",{className:"text-gray-400 w-1/3 flex flex-col items-center",children:[(0,s.jsx)("p",{className:"text-white font-bold",children:null==d?void 0:d.following.length})," ","following"]})]}),0==m?(0,s.jsxs)("div",{className:"text-white flex gap-3 border border-gray-600 border-r-0 border-l-0 border-t-0 p-4 items-center",children:[(0,s.jsxs)("svg",{"aria-label":"Camera",className:"x1lliihq x1n2onr6 x5n08af w-1/3",fill:"currentColor",height:"62",role:"img",viewBox:"0 0 96 96",width:"62",children:[(0,s.jsx)("title",{children:"Camera"}),(0,s.jsx)("circle",{cx:"48",cy:"48",fill:"none",r:"47",stroke:"currentColor",strokeMiterlimit:"10",strokeWidth:"2"}),(0,s.jsx)("ellipse",{cx:"48.002",cy:"49.524",fill:"none",rx:"10.444",ry:"10.476",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2.095"}),(0,s.jsx)("path",{d:"M63.994 69A8.02 8.02 0 0 0 72 60.968V39.456a8.023 8.023 0 0 0-8.01-8.035h-1.749a4.953 4.953 0 0 1-4.591-3.242C56.61 25.696 54.859 25 52.469 25h-8.983c-2.39 0-4.141.695-5.181 3.178a4.954 4.954 0 0 1-4.592 3.242H32.01a8.024 8.024 0 0 0-8.012 8.035v21.512A8.02 8.02 0 0 0 32.007 69Z",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2"})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)("div",{className:"font-bold font-sans text-lg",children:"No post yet"}),(0,s.jsxs)("div",{className:"text-neutral-400 font-sans text-sm",children:["when ",null==d?void 0:d.username," posts, you'll see their photos and videos here."," "]})]})]}):(0,s.jsx)(l.wL,{className:"p-0 flex flex-wrap gap-[1.5px]",children:null==d?void 0:d.posts.map(e=>(0,s.jsx)(i.default,{className:"p-0 w-[33%] mt-1",href:"/posts/onePost/".concat(e._id),children:(0,s.jsx)(o.default,{src:e.postImg,className:"aspect-square",alt:"Post",width:500,height:500})},e._id))}),(0,s.jsx)("div",{className:"w-screen fixed bottom-0 left-0 bg-black",children:(0,s.jsx)(n.A,{})})]})}},5055:(e,t,r)=>{"use strict";r.d(t,{BK:()=>i,eu:()=>o});var s=r(5155),a=r(2115),l=r(4920),n=r(1567);let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(l.bL,{ref:t,className:(0,n.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",r),...a})});o.displayName=l.bL.displayName;let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(l._V,{ref:t,className:(0,n.cn)("aspect-square h-full w-full",r),...a})});i.displayName=l._V.displayName,a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(l.H4,{ref:t,className:(0,n.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",r),...a})}).displayName=l.H4.displayName},3312:(e,t,r)=>{"use strict";r.d(t,{$:()=>c});var s=r(5155),a=r(2115),l=r(2317),n=r(1027),o=r(1567);let i=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,t)=>{let{className:r,variant:a,size:n,asChild:c=!1,...d}=e,u=c?l.DX:"button";return(0,s.jsx)(u,{className:(0,o.cn)(i({variant:a,size:n,className:r})),ref:t,...d})});c.displayName="Button"},9749:(e,t,r)=>{"use strict";r.d(t,{BT:()=>i,Wu:()=>c,Zp:()=>n,aR:()=>o,wL:()=>d});var s=r(5155),a=r(2115),l=r(1567);let n=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...a})});n.displayName="Card";let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("flex space-y-1.5 p-6",r),...a})});o.displayName="CardHeader",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("font-semibold leading-none tracking-tight",r),...a})}).displayName="CardTitle";let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",r),...a})});i.displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("p-6 pt-0",r),...a})});c.displayName="CardContent";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center p-6 pt-0",r),...a})});d.displayName="CardFooter"},9492:(e,t,r)=>{"use strict";r.d(t,{A:()=>f});var s=r(5155),a=r(3312),l=r(7684),n=r(6507),o=r(853),i=r(3250),c=r(7396),d=r(2115),u=r(9009);let f=()=>{let[e,t]=(0,d.useState)(null);return(0,d.useEffect)(()=>{let e=localStorage.getItem("accessToken");e&&t((0,l.s)(e).userId)},[]),(0,s.jsxs)("div",{className:"w-screen fixed bottom-0 left-0 bg-black",children:[(0,s.jsx)(c.default,{className:"w-1/4 bg-black",href:"/posts",children:(0,s.jsx)(a.$,{className:"w-1/4 bg-black text-xl",children:(0,s.jsx)(n.A,{})})}),(0,s.jsx)(c.default,{className:"w-1/4 bg-black",href:"/search",children:(0,s.jsx)(a.$,{className:"w-1/4 bg-black",children:(0,s.jsx)(o.A,{})})}),(0,s.jsx)(c.default,{href:"/uploadPost",className:"w-1/4 bg-black",children:(0,s.jsx)(a.$,{className:"w-1/4 bg-black text-xl",children:(0,s.jsx)(u.A,{})})}),e&&(0,s.jsx)(c.default,{className:"w-1/4 bg-black",href:"/profile/".concat(e),children:(0,s.jsx)(a.$,{className:"w-1/4 bg-black text-xl",children:(0,s.jsx)(i.A,{})})})]})}},1567:(e,t,r)=>{"use strict";r.d(t,{cn:()=>l});var s=r(3463),a=r(9795);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.QP)((0,s.$)(t))}},4920:(e,t,r)=>{"use strict";r.d(t,{H4:()=>j,_V:()=>w,bL:()=>b,eu:()=>x});var s=r(2115),a=r(8166),l=r(1524),n=r(6611),o=r(3360),i=r(5155),c="Avatar",[d,u]=(0,a.A)(c),[f,m]=d(c),x=s.forwardRef((e,t)=>{let{__scopeAvatar:r,...a}=e,[l,n]=s.useState("idle");return(0,i.jsx)(f,{scope:r,imageLoadingStatus:l,onImageLoadingStatusChange:n,children:(0,i.jsx)(o.sG.span,{...a,ref:t})})});x.displayName=c;var h="AvatarImage",p=s.forwardRef((e,t)=>{let{__scopeAvatar:r,src:a,onLoadingStatusChange:c=()=>{},...d}=e,u=m(h,r),f=function(e,t){let[r,a]=s.useState("idle");return(0,n.N)(()=>{if(!e){a("error");return}let r=!0,s=new window.Image,l=e=>()=>{r&&a(e)};return a("loading"),s.onload=l("loaded"),s.onerror=l("error"),s.src=e,t&&(s.referrerPolicy=t),()=>{r=!1}},[e,t]),r}(a,d.referrerPolicy),x=(0,l.c)(e=>{c(e),u.onImageLoadingStatusChange(e)});return(0,n.N)(()=>{"idle"!==f&&x(f)},[f,x]),"loaded"===f?(0,i.jsx)(o.sG.img,{...d,ref:t,src:a}):null});p.displayName=h;var v="AvatarFallback",g=s.forwardRef((e,t)=>{let{__scopeAvatar:r,delayMs:a,...l}=e,n=m(v,r),[c,d]=s.useState(void 0===a);return s.useEffect(()=>{if(void 0!==a){let e=window.setTimeout(()=>d(!0),a);return()=>window.clearTimeout(e)}},[a]),c&&"loaded"!==n.imageLoadingStatus?(0,i.jsx)(o.sG.span,{...l,ref:t}):null});g.displayName=v;var b=x,w=p,j=g},8166:(e,t,r)=>{"use strict";r.d(t,{A:()=>n,q:()=>l});var s=r(2115),a=r(5155);function l(e,t){let r=s.createContext(t),l=e=>{let{children:t,...l}=e,n=s.useMemo(()=>l,Object.values(l));return(0,a.jsx)(r.Provider,{value:n,children:t})};return l.displayName=e+"Provider",[l,function(a){let l=s.useContext(r);if(l)return l;if(void 0!==t)return t;throw Error(`\`${a}\` must be used within \`${e}\``)}]}function n(e,t=[]){let r=[],l=()=>{let t=r.map(e=>s.createContext(e));return function(r){let a=r?.[e]||t;return s.useMemo(()=>({[`__scope${e}`]:{...r,[e]:a}}),[r,a])}};return l.scopeName=e,[function(t,l){let n=s.createContext(l),o=r.length;r=[...r,l];let i=t=>{let{scope:r,children:l,...i}=t,c=r?.[e]?.[o]||n,d=s.useMemo(()=>i,Object.values(i));return(0,a.jsx)(c.Provider,{value:d,children:l})};return i.displayName=t+"Provider",[i,function(r,a){let i=a?.[e]?.[o]||n,c=s.useContext(i);if(c)return c;if(void 0!==l)return l;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let a=r.reduce((t,{useScope:r,scopeName:s})=>{let a=r(e)[`__scope${s}`];return{...t,...a}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return r.scopeName=t.scopeName,r}(l,...t)]}},3360:(e,t,r)=>{"use strict";r.d(t,{hO:()=>i,sG:()=>o});var s=r(2115),a=r(7650),l=r(2317),n=r(5155),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=s.forwardRef((e,r)=>{let{asChild:s,...a}=e,o=s?l.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,n.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function i(e,t){e&&a.flushSync(()=>e.dispatchEvent(t))}},1524:(e,t,r)=>{"use strict";r.d(t,{c:()=>a});var s=r(2115);function a(e){let t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...e)=>t.current?.(...e),[])}},6611:(e,t,r)=>{"use strict";r.d(t,{N:()=>a});var s=r(2115),a=globalThis?.document?s.useLayoutEffect:()=>{}}},e=>{var t=t=>e(e.s=t);e.O(0,[433,379,441,517,358],()=>t(6409)),_N_E=e.O()}]);