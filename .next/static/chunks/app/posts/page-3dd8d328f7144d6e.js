(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[530],{2732:(e,s,r)=>{Promise.resolve().then(r.bind(r,5469))},5469:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>c});var t=r(5155),a=r(9749),o=r(2115),n=r(9108),l=r(2863),d=r(6326),i=r(9492);let c=()=>{let[e,s]=(0,o.useState)([]),r=async()=>{let e=localStorage.getItem("accessToken");e||(window.location.href="/login");let r=await fetch("https://instagram-backend-e3eq.onrender.com/post/getPosts",{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}}),t=await r.json();s(t),console.log(t)};return(0,o.useEffect)(()=>{r()},[]),(0,t.jsxs)("div",{className:"w-fit bg-black border-gray-700 border-r-0 border-l-0 rounded-none flex flex-col relative pb-8",children:[(0,t.jsx)("div",{className:"text-white w-full flex justify-center text-3xl p-4",children:"Instagram"}),(0,t.jsx)("div",{className:" bg-black ",children:null==e?void 0:e.map(e=>(0,t.jsxs)(a.Zp,{className:"w-fit bg-black border-gray-700 border-r-0 border-l-0 rounded-none",children:[(0,t.jsx)(n.I,{proImage:e.userId.proImg,username:e.userId.username,userId:e.userId._id}),(0,t.jsx)(l.I,{postImage:e.postImg,post:e}),(0,t.jsx)(d.o,{likedUsers:e.likes,postId:e._id,postComments:e.comments,postCaption:e.caption,username:e.userId.username})]},e._id))}),(0,t.jsx)(i.A,{})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[433,379,208,583,441,517,358],()=>s(2732)),_N_E=e.O()}]);