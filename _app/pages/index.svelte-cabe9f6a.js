var Ze=Object.defineProperty,Je=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var ze=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var Ce=(l,e,t)=>e in l?Ze(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,_e=(l,e)=>{for(var t in e||(e={}))ze.call(e,t)&&Ce(l,t,e[t]);if(oe)for(var t of oe(e))Me.call(e,t)&&Ce(l,t,e[t]);return l},Le=(l,e)=>Je(l,xe(e));var Re=(l,e)=>{var t={};for(var n in l)ze.call(l,n)&&e.indexOf(n)<0&&(t[n]=l[n]);if(l!=null&&oe)for(var n of oe(l))e.indexOf(n)<0&&Me.call(l,n)&&(t[n]=l[n]);return t};import{S as D,i as H,s as T,e as L,c as R,a as M,d as g,b as v,N as W,g as I,M as P,O as ie,E as z,v as ae,P as Ae,Q as ne,w as U,x as V,y as A,q as y,o as S,B as F,R as Q,T as $e,t as Z,k as G,h as J,m as q,j as le,n as X,p as K,U as $,V as ce,W as fe,X as me,I as et,l as ee,J as tt,K as nt,L as lt,C as x,z as ke,A as Se,Y as ue,Z as Ne,f as te,_ as st}from"../chunks/index-9b356903.js";import{d as Ie,w as de}from"../chunks/index-cb10eac7.js";function it(l){let e,t,n,s,i,r,o;return{c(){e=L("div"),t=L("img"),this.h()},l(u){e=R(u,"DIV",{style:!0,class:!0});var c=M(e);t=R(c,"IMG",{alt:!0,src:!0,style:!0,class:!0}),c.forEach(g),this.h()},h(){v(t,"alt","Vulva"),W(t.src,n=l[0])||v(t,"src",n),v(t,"style",s=l[5]+"; "+l[2]),v(t,"class","svelte-1d73yvl"),v(e,"style",i="width: "+l[3]+"px; height: "+l[3]+"px; "+l[1]),v(e,"class","svelte-1d73yvl")},m(u,c){I(u,e,c),P(e,t),l[13](t),r||(o=ie(e,"click",l[12]),r=!0)},p(u,[c]){c&1&&!W(t.src,n=u[0])&&v(t,"src",n),c&36&&s!==(s=u[5]+"; "+u[2])&&v(t,"style",s),c&10&&i!==(i="width: "+u[3]+"px; height: "+u[3]+"px; "+u[1])&&v(e,"style",i)},i:z,o:z,d(u){u&&g(e),l[13](null),r=!1,o()}}}function rt(l,e,t){let n,{xSlices:s=1}=e,{ySlices:i=1}=e,{src:r=""}=e,{x:o=0}=e,{y:u=0}=e,{style:c=""}=e,{innerStyle:_=""}=e,{size:h=1}=e,a,m,p;ae(()=>{if(a.width&&a.height){t(10,m=a.width),t(11,p=a.height);return}const d=()=>{t(10,m=a.width),t(11,p=a.height),a.removeEventListener("load",d)};a.addEventListener("load",d)});function j(d){Ae.call(this,l,d)}function N(d){ne[d?"unshift":"push"](()=>{a=d,t(4,a)})}return l.$$set=d=>{"xSlices"in d&&t(6,s=d.xSlices),"ySlices"in d&&t(7,i=d.ySlices),"src"in d&&t(0,r=d.src),"x"in d&&t(8,o=d.x),"y"in d&&t(9,u=d.y),"style"in d&&t(1,c=d.style),"innerStyle"in d&&t(2,_=d.innerStyle),"size"in d&&t(3,h=d.size)},l.$$.update=()=>{var d;l.$$.dirty&1088,l.$$.dirty&2176,l.$$.dirty&968&&t(5,n=(d=`left: -${o*h}px; top: -${u*h}px; width: ${s*h}px; height: ${i*h}px`)!=null?d:"display: none")},[r,c,_,h,a,n,s,i,o,u,m,p,j,N]}class ot extends D{constructor(e){super(),H(this,e,rt,it,T,{xSlices:6,ySlices:7,src:0,x:8,y:9,style:1,innerStyle:2,size:3})}}function he(l){let e=l.length,t;for(;e!=0;)t=Math.floor(Math.random()*e),e--,[l[e],l[t]]=[l[t],l[e]];return l}const O={music:"audio/background-music.mp3",vulvaFoundSound:"audio/vulva-found.wav",levelCompletedSound:"audio/new-level.wav",vulvaSpriteSheet:"images/vulva-sprite-sheet.png",gameEndImage:"images/game-end-background.jpg",levels:[{backgroundImage:"images/background-1.jpg",vulvaPositions:he([[38.46153846153847,83.78378378378379],[92.3076923076923,29.440154440154444],[75.84427767354597,52.02702702702703],[9.00562851782364,43.91891891891892],[38.930581613508444,59.55598455598455],[57.78611632270169,29.150579150579148],[84.3558282208589,88.53838065194533],[56.39059304703476,42.16614090431125],[18.865030674846626,41.6403785488959],[14.263803680981596,94.42691903259727]])},{backgroundImage:"images/background-2.jpg",vulvaPositions:he([[13.847780126849896,13.361611876988336],[58.972198820556024,44.435075885328835],[70.29598308668076,22.375397667020145],[37.52642706131078,24.814422057264053],[5.9196617336152215,29.16224814422057],[74.4186046511628,97.03075291622481],[12.050739957716702,79.00318133616119],[85.41226215644821,58.21845174973489],[38.16067653276956,35.949098621421],[37.315010570824526,49.840933191940614]])},{backgroundImage:"images/background-3.jpg",vulvaPositions:he([[63.45454545454545,10.550458715596331],[84.95454545454545,36.972477064220186],[73.36363636363636,49.357798165137616],[51.81818181818182,61.92660550458715],[28.363636363636363,90.36697247706422],[25.90909090909091,74.40366972477064],[6.409090909090908,20.18348623853211],[74.45454545454545,18.34862385321101],[56.63636363636364,3.9449541284403673],[51.227272727272734,5.871559633027523]])},{backgroundImage:"images/background-4.jpg",vulvaPositions:[...new Array(10)].map(()=>[Math.random()*90+5,Math.random()*85+10])}]};function ut(l,e){const t=e.x/e.y,n=l.x/l.y,s=t>=n?l.x/e.x:l.y/e.y,i=e.x*s,r=e.y*s;return{x:i,y:r}}const ye=de(0),be=de(0),Fe=Ie([ye,be],([l,e])=>({x:l,y:e})),We=de({x:0,y:0}),at=Ie(Fe,l=>(e,t)=>{const n=ut(l,{x:e,y:t});return We.set(n),n}),ct=800,ft=Ie(Fe,l=>l.x<=ct),Ee=de({});function mt(l){let e,t,n;return t=new ot({props:{src:l[3][O.vulvaSpriteSheet],x:(l[0]+Math.random())/2*ge|0,y:(l[0]+Math.random())/2*ve|0,xSlices:ge,ySlices:ve,style:"position: relative; transform: translate(-50%, -50%);",size:l[2]}}),t.$on("click",l[5]),{c(){e=L("div"),U(t.$$.fragment),this.h()},l(s){e=R(s,"DIV",{style:!0});var i=M(e);V(t.$$.fragment,i),i.forEach(g),this.h()},h(){v(e,"style",l[1])},m(s,i){I(s,e,i),A(t,e,null),n=!0},p(s,[i]){const r={};i&8&&(r.src=s[3][O.vulvaSpriteSheet]),i&1&&(r.x=(s[0]+Math.random())/2*ge|0),i&1&&(r.y=(s[0]+Math.random())/2*ve|0),i&4&&(r.size=s[2]),t.$set(r),(!n||i&2)&&v(e,"style",s[1])},i(s){n||(y(t.$$.fragment,s),n=!0)},o(s){S(t.$$.fragment,s),n=!1},d(s){s&&g(e),F(t)}}}const ge=6,ve=6;function dt(l,e,t){let n,s;Q(l,Ee,c=>t(3,s=c));let{randomNumber:i}=e,{style:r=""}=e,{playgroundSize:o}=e;function u(c){Ae.call(this,l,c)}return l.$$set=c=>{"randomNumber"in c&&t(0,i=c.randomNumber),"style"in c&&t(1,r=c.style),"playgroundSize"in c&&t(4,o=c.playgroundSize)},l.$$.update=()=>{l.$$.dirty&16&&t(2,n=(o.x+o.y)*.0175)},[i,r,n,s,o,u]}class _t extends D{constructor(e){super(),H(this,e,dt,mt,T,{randomNumber:0,style:1,playgroundSize:4})}}function ht(l){const e=l-1;return e*e*e+1}function se(l,{delay:e=0,duration:t=400,easing:n=$e}={}){const s=+getComputedStyle(l).opacity;return{delay:e,duration:t,easing:n,css:i=>`opacity: ${i*s}`}}function gt(l,{delay:e=0,duration:t=400,easing:n=ht,x:s=0,y:i=0,opacity:r=0}={}){const o=getComputedStyle(l),u=+o.opacity,c=o.transform==="none"?"":o.transform,_=u*(1-r);return{delay:e,duration:t,easing:n,css:(h,a)=>`
			transform: ${c} translate(${(1-h)*s}px, ${(1-h)*i}px);
			opacity: ${u-_*a}`}}function Pe(l){let e,t,n;return{c(){e=L("img"),this.h()},l(s){e=R(s,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){v(e,"alt","favicon"),W(e.src,t="favicon.png")||v(e,"src",t),v(e,"class","svelte-1a4joif")},m(s,i){I(s,e,i)},p:z,i(s){n||$(()=>{n=ce(e,gt,{y:-50}),n.start()})},o:z,d(s){s&&g(e)}}}function vt(l){let e,t,n,s,i,r,o=l[0],u,c=Pe();return{c(){e=L("div"),t=L("span"),n=Z(l[0]),s=Z(" / "),i=Z(l[1]),r=G(),c.c(),this.h()},l(_){e=R(_,"DIV",{class:!0});var h=M(e);t=R(h,"SPAN",{class:!0});var a=M(t);n=J(a,l[0]),s=J(a," / "),i=J(a,l[1]),a.forEach(g),r=q(h),c.l(h),h.forEach(g),this.h()},h(){v(t,"class","svelte-1a4joif"),v(e,"class","svelte-1a4joif")},m(_,h){I(_,e,h),P(e,t),P(t,n),P(t,s),P(t,i),P(e,r),c.m(e,null)},p(_,[h]){h&1&&le(n,_[0]),h&2&&le(i,_[1]),h&1&&T(o,o=_[0])?(X(),S(c,1,1,z),K(),c=Pe(),c.c(),y(c,1),c.m(e,null)):c.p(_,h)},i(_){y(c),u||$(()=>{u=ce(e,se,{}),u.start()})},o(_){S(c)},d(_){_&&g(e),c.d(_)}}}function pt(l,e,t){let{found:n=0}=e,{of:s=0}=e;return l.$$set=i=>{"found"in i&&t(0,n=i.found),"of"in i&&t(1,s=i.of)},[n,s]}class yt extends D{constructor(e){super(),H(this,e,pt,vt,T,{found:0,of:1})}}function Te(l){let e,t;return{c(){e=fe("title"),t=Z(l[0])},l(n){e=me(n,"title",{});var s=M(e);t=J(s,l[0]),s.forEach(g)},m(n,s){I(n,e,s),P(e,t)},p(n,s){s&1&&le(t,n[0])},d(n){n&&g(e)}}}function bt(l){let e,t,n,s=l[0]&&Te(l);const i=l[3].default,r=et(i,l,l[2],null);return{c(){e=fe("svg"),s&&s.c(),t=ee(),r&&r.c(),this.h()},l(o){e=me(o,"svg",{xmlns:!0,viewBox:!0,class:!0});var u=M(e);s&&s.l(u),t=ee(),r&&r.l(u),u.forEach(g),this.h()},h(){v(e,"xmlns","http://www.w3.org/2000/svg"),v(e,"viewBox",l[1]),v(e,"class","svelte-c8tyih")},m(o,u){I(o,e,u),s&&s.m(e,null),P(e,t),r&&r.m(e,null),n=!0},p(o,[u]){o[0]?s?s.p(o,u):(s=Te(o),s.c(),s.m(e,t)):s&&(s.d(1),s=null),r&&r.p&&(!n||u&4)&&tt(r,i,o,o[2],n?lt(i,o[2],u,null):nt(o[2]),null),(!n||u&2)&&v(e,"viewBox",o[1])},i(o){n||(y(r,o),n=!0)},o(o){S(r,o),n=!1},d(o){o&&g(e),s&&s.d(),r&&r.d(o)}}}function wt(l,e,t){let{$$slots:n={},$$scope:s}=e,{title:i=null}=e,{viewBox:r}=e;return l.$$set=o=>{"title"in o&&t(0,i=o.title),"viewBox"in o&&t(1,r=o.viewBox),"$$scope"in o&&t(2,s=o.$$scope)},[i,r,s,n]}class Oe extends D{constructor(e){super(),H(this,e,wt,bt,T,{title:0,viewBox:1})}}function kt(l){let e;return{c(){e=fe("path"),this.h()},l(t){e=me(t,"path",{d:!0}),M(e).forEach(g),this.h()},h(){v(e,"d","M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z")},m(t,n){I(t,e,n)},p:z,d(t){t&&g(e)}}}function St(l){let e,t;const n=[{viewBox:"0 0 512 512"},l[0]];let s={$$slots:{default:[kt]},$$scope:{ctx:l}};for(let i=0;i<n.length;i+=1)s=x(s,n[i]);return e=new Oe({props:s}),{c(){U(e.$$.fragment)},l(i){V(e.$$.fragment,i)},m(i,r){A(e,i,r),t=!0},p(i,[r]){const o=r&1?ke(n,[n[0],Se(i[0])]):{};r&2&&(o.$$scope={dirty:r,ctx:i}),e.$set(o)},i(i){t||(y(e.$$.fragment,i),t=!0)},o(i){S(e.$$.fragment,i),t=!1},d(i){F(e,i)}}}function It(l,e,t){return l.$$set=n=>{t(0,e=x(x({},e),ue(n)))},e=ue(e),[e]}class Et extends D{constructor(e){super(),H(this,e,It,St,T,{})}}function Ct(l){let e;return{c(){e=fe("path"),this.h()},l(t){e=me(t,"path",{d:!0}),M(e).forEach(g),this.h()},h(){v(e,"d","M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z")},m(t,n){I(t,e,n)},p:z,d(t){t&&g(e)}}}function zt(l){let e,t;const n=[{viewBox:"0 0 576 512"},l[0]];let s={$$slots:{default:[Ct]},$$scope:{ctx:l}};for(let i=0;i<n.length;i+=1)s=x(s,n[i]);return e=new Oe({props:s}),{c(){U(e.$$.fragment)},l(i){V(e.$$.fragment,i)},m(i,r){A(e,i,r),t=!0},p(i,[r]){const o=r&1?ke(n,[n[0],Se(i[0])]):{};r&2&&(o.$$scope={dirty:r,ctx:i}),e.$set(o)},i(i){t||(y(e.$$.fragment,i),t=!0)},o(i){S(e.$$.fragment,i),t=!1},d(i){F(e,i)}}}function Mt(l,e,t){return l.$$set=n=>{t(0,e=x(x({},e),ue(n)))},e=ue(e),[e]}class Lt extends D{constructor(e){super(),H(this,e,Mt,zt,T,{})}}function Rt(l){let e,t;return e=new Et({}),{c(){U(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,s){A(e,n,s),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function Nt(l){let e,t;return e=new Lt({}),{c(){U(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,s){A(e,n,s),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function je(l){let e,t,n,s,i,r,o,u;const c=[Nt,Rt],_=[];function h(a,m){return a[0]?0:1}return n=h(l),s=_[n]=c[n](l),{c(){e=L("div"),t=L("div"),s.c(),this.h()},l(a){e=R(a,"DIV",{class:!0});var m=M(e);t=R(m,"DIV",{class:!0});var p=M(t);s.l(p),p.forEach(g),m.forEach(g),this.h()},h(){v(t,"class","inner svelte-1d4tbh5"),v(e,"class","container svelte-1d4tbh5")},m(a,m){I(a,e,m),P(e,t),_[n].m(t,null),r=!0,o||(u=ie(e,"click",l[1]),o=!0)},p(a,m){let p=n;n=h(a),n!==p&&(X(),S(_[p],1,1,()=>{_[p]=null}),K(),s=_[n],s||(s=_[n]=c[n](a),s.c()),y(s,1),s.m(t,null))},i(a){r||(y(s),$(()=>{i||(i=Ne(e,se,{duration:200},!0)),i.run(1)}),r=!0)},o(a){S(s),i||(i=Ne(e,se,{duration:200},!1)),i.run(0),r=!1},d(a){a&&g(e),_[n].d(),a&&i&&i.end(),o=!1,u()}}}function Pt(l){let e=l[0],t,n,s=je(l);return{c(){s.c(),t=ee()},l(i){s.l(i),t=ee()},m(i,r){s.m(i,r),I(i,t,r),n=!0},p(i,[r]){r&1&&T(e,e=i[0])?(X(),S(s,1,1,z),K(),s=je(i),s.c(),y(s,1),s.m(t.parentNode,t)):s.p(i,r)},i(i){n||(y(s),n=!0)},o(i){S(s),n=!1},d(i){i&&g(t),s.d(i)}}}const pe="muted";function Tt(l,e,t){let{audioRefs:n=[]}=e,s=!localStorage.getItem(pe);function i(){s?localStorage.setItem(pe,"1"):localStorage.removeItem(pe);for(const r of n)r.muted=s;t(0,s=!s)}return l.$$set=r=>{"audioRefs"in r&&t(2,n=r.audioRefs)},[s,i,n]}class jt extends D{constructor(e){super(),H(this,e,Tt,Pt,T,{audioRefs:2})}}const{window:we}=st;function Be(l){let e,t;return e=new jt({props:{audioRefs:[l[10],l[11],l[12]]}}),{c(){U(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,s){A(e,n,s),t=!0},p(n,s){const i={};s&7168&&(i.audioRefs=[n[10],n[11],n[12]]),e.$set(i)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function De(l){let e,t,n;return{c(){e=L("img"),this.h()},l(s){e=R(s,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){v(e,"alt","background Image"),W(e.src,t=l[17][l[1]])||v(e,"src",t),v(e,"class","svelte-1uzjeh0")},m(s,i){I(s,e,i),l[24](e)},p(s,i){i&131074&&!W(e.src,t=s[17][s[1]])&&v(e,"src",t)},i(s){n||$(()=>{n=ce(e,se,{}),n.start()})},o:z,d(s){s&&g(e),l[24](null)}}}function He(l){let e=l[6],t,n,s=Ue(l);return{c(){s.c(),t=ee()},l(i){s.l(i),t=ee()},m(i,r){s.m(i,r),I(i,t,r),n=!0},p(i,r){r&64&&T(e,e=i[6])?(X(),S(s,1,1,z),K(),s=Ue(i),s.c(),y(s,1),s.m(t.parentNode,t)):s.p(i,r)},i(i){n||(y(s),n=!0)},o(i){S(s),n=!1},d(i){i&&g(t),s.d(i)}}}function Ue(l){let e,t,n,s;return t=new _t({props:{randomNumber:l[13],playgroundSize:l[7]}}),t.$on("click",l[18]),{c(){e=L("div"),U(t.$$.fragment),this.h()},l(i){e=R(i,"DIV",{style:!0});var r=M(e);V(t.$$.fragment,r),r.forEach(g),this.h()},h(){te(e,"position","absolute"),te(e,"left",l[16]+"%"),te(e,"top",l[15]+"%")},m(i,r){I(i,e,r),A(t,e,null),s=!0},p(i,r){const o={};r&8192&&(o.randomNumber=i[13]),r&128&&(o.playgroundSize=i[7]),t.$set(o),(!s||r&65536)&&te(e,"left",i[16]+"%"),(!s||r&32768)&&te(e,"top",i[15]+"%")},i(i){s||(y(t.$$.fragment,i),n||$(()=>{n=ce(e,se,{}),n.start()}),s=!0)},o(i){S(t.$$.fragment,i),s=!1},d(i){i&&g(e),F(t)}}}function Bt(l){let e,t,n,s,i=l[1],r,o,u,c,_,h,a,m,p,j,N,d,B;$(l[23]),t=new yt({props:{found:l[6],of:l[0].length}});let b=l[10]&&l[11]&&l[12]&&Be(l),E=De(l),C=l[5]&&He(l);return{c(){e=L("div"),U(t.$$.fragment),n=G(),b&&b.c(),s=G(),E.c(),r=G(),C&&C.c(),o=G(),u=L("audio"),_=G(),h=L("audio"),m=G(),p=L("audio"),this.h()},l(f){e=R(f,"DIV",{style:!0});var k=M(e);V(t.$$.fragment,k),n=q(k),b&&b.l(k),s=q(k),E.l(k),r=q(k),C&&C.l(k),k.forEach(g),o=q(f),u=R(f,"AUDIO",{src:!0,class:!0}),M(u).forEach(g),_=q(f),h=R(f,"AUDIO",{src:!0,class:!0}),M(h).forEach(g),m=q(f),p=R(f,"AUDIO",{src:!0,class:!0}),M(p).forEach(g),this.h()},h(){v(e,"style",l[14]),W(u.src,c=l[17][l[2]])||v(u,"src",c),u.autoplay=!0,u.loop=!0,v(u,"class","svelte-1uzjeh0"),W(h.src,a=l[17][l[3]])||v(h,"src",a),v(h,"class","svelte-1uzjeh0"),W(p.src,j=l[17][l[4]])||v(p,"src",j),v(p,"class","svelte-1uzjeh0")},m(f,k){I(f,e,k),A(t,e,null),P(e,n),b&&b.m(e,null),P(e,s),E.m(e,null),P(e,r),C&&C.m(e,null),I(f,o,k),I(f,u,k),l[25](u),I(f,_,k),I(f,h,k),l[26](h),I(f,m,k),I(f,p,k),l[27](p),N=!0,d||(B=ie(we,"resize",l[23]),d=!0)},p(f,[k]){const Y={};k&64&&(Y.found=f[6]),k&1&&(Y.of=f[0].length),t.$set(Y),f[10]&&f[11]&&f[12]?b?(b.p(f,k),k&7168&&y(b,1)):(b=Be(f),b.c(),y(b,1),b.m(e,s)):b&&(X(),S(b,1,1,()=>{b=null}),K()),k&2&&T(i,i=f[1])?(X(),S(E,1,1,z),K(),E=De(f),E.c(),y(E,1),E.m(e,r)):E.p(f,k),f[5]?C?(C.p(f,k),k&32&&y(C,1)):(C=He(f),C.c(),y(C,1),C.m(e,null)):C&&(X(),S(C,1,1,()=>{C=null}),K()),(!N||k&16384)&&v(e,"style",f[14]),(!N||k&131076&&!W(u.src,c=f[17][f[2]]))&&v(u,"src",c),(!N||k&131080&&!W(h.src,a=f[17][f[3]]))&&v(h,"src",a),(!N||k&131088&&!W(p.src,j=f[17][f[4]]))&&v(p,"src",j)},i(f){N||(y(t.$$.fragment,f),y(b),y(E),y(C),N=!0)},o(f){S(t.$$.fragment,f),S(b),S(E),S(C),N=!1},d(f){f&&g(e),F(t),b&&b.d(),E.d(f),C&&C.d(),f&&g(o),f&&g(u),l[25](null),f&&g(_),f&&g(h),l[26](null),f&&g(m),f&&g(p),l[27](null),d=!1,B()}}}function Dt(l,e,t){let n,s,i,r,o,u;Q(l,We,w=>t(7,r=w)),Q(l,at,w=>t(22,o=w)),Q(l,Ee,w=>t(17,u=w));let{vulvaPositions:c=[]}=e,{backgroundImage:_=""}=e,{music:h=""}=e,{vulvaFoundSound:a=""}=e,{levelCompletedSound:m=""}=e,{levelCompletedCb:p=()=>0}=e,j,N,d,B,b,E,C=Math.random(),f=0;function k(){t(11,b.currentTime=0,b),b.play(),t(6,f++,f),t(13,C=Math.random()),f===c.length&&(t(6,f=0),t(12,E.currentTime=0,E),E.play(),p())}let Y,re;ae(()=>{B.paused&&window.addEventListener("pointerdown",()=>{B==null||B.play()}),t(10,B.volume=t(11,b.volume=t(12,E.volume=.1,E),b),B)});function qe(){t(8,j=we.innerWidth),t(9,N=we.innerHeight)}function Xe(w){ne[w?"unshift":"push"](()=>{d=w,t(5,d)})}function Ke(w){ne[w?"unshift":"push"](()=>{B=w,t(10,B)})}function Ye(w){ne[w?"unshift":"push"](()=>{b=w,t(11,b)})}function Qe(w){ne[w?"unshift":"push"](()=>{E=w,t(12,E)})}return l.$$set=w=>{"vulvaPositions"in w&&t(0,c=w.vulvaPositions),"backgroundImage"in w&&t(1,_=w.backgroundImage),"music"in w&&t(2,h=w.music),"vulvaFoundSound"in w&&t(3,a=w.vulvaFoundSound),"levelCompletedSound"in w&&t(4,m=w.levelCompletedSound),"levelCompletedCb"in w&&t(19,p=w.levelCompletedCb)},l.$$.update=()=>{var w;l.$$.dirty&65&&t(16,[n,s]=(w=c[f])!=null?w:[],n,(t(15,s),t(0,c),t(6,f))),l.$$.dirty&32&&d&&t(5,d.onload=()=>{t(20,Y=d.naturalWidth),t(21,re=d.naturalHeight)},d),l.$$.dirty&7340032&&!isNaN(Y)&&!isNaN(re)&&o(Y,re),l.$$.dirty&128&&t(14,i=`position: relative; width: ${r.x}px; height: ${r.y}px`)},[c,_,h,a,m,d,f,r,j,N,B,b,E,C,i,s,n,u,k,p,Y,re,o,qe,Xe,Ke,Ye,Qe]}class Ht extends D{constructor(e){super(),H(this,e,Dt,Bt,T,{vulvaPositions:0,backgroundImage:1,music:2,vulvaFoundSound:3,levelCompletedSound:4,levelCompletedCb:19})}}async function Ut(l){return new Promise(e=>setTimeout(e,l))}function Vt(l){return Ge([l]).then(e=>e[0])}function Ge(l){return Ft(l.map(At))}function At(l){return new Promise((e,t)=>{try{const n=new XMLHttpRequest;n.open("GET",l),n.responseType="blob",n.onerror=()=>t("Network error"),n.onload=()=>{if(n.status>=200&&n.status<300){const s=URL.createObjectURL(n.response);e(s),Ee.update(i=>(i[l]=s,i))}else t("Failed to load "+l+":"+n.statusText)},n.send()}catch(n){t(n.message)}})}async function Ft(l){const e=[];for(const t of l)e.push(await t),await Ut(1);return e}function Wt(l){let e,t;return $(l[2]),{c:z,l:z,m(n,s){e||(t=ie(window,"resize",l[2]),e=!0)},p:z,i:z,o:z,d(n){e=!1,t()}}}function Ot(l,e,t){let n,s;Q(l,ye,r=>t(0,n=r)),Q(l,be,r=>t(1,s=r));function i(){ye.set(n=window.innerWidth),be.set(s=window.innerHeight)}return[n,s,i]}class Gt extends D{constructor(e){super(),H(this,e,Ot,Wt,T,{})}}function qt(l){let e,t;return{c(){e=L("p"),t=Z(l[0])},l(n){e=R(n,"P",{});var s=M(e);t=J(s,l[0]),s.forEach(g)},m(n,s){I(n,e,s),P(e,t)},p(n,[s]){s&1&&le(t,n[0])},i:z,o:z,d(n){n&&g(e)}}}function Xt(l,e,t){let{url:n=""}=e,{seconds:s=0}=e,i=s;return ae(()=>{setTimeout(()=>window.location.href=n,s*1e3),setInterval(()=>i>0&&t(0,i--,i),1e3)}),l.$$set=r=>{"url"in r&&t(1,n=r.url),"seconds"in r&&t(2,s=r.seconds)},[i,n,s]}class Kt extends D{constructor(e){super(),H(this,e,Xt,qt,T,{url:1,seconds:2})}}function Yt(l){let e,t,n,s,i;return s=new Kt({props:{url:"https://open.spotify.com/show/6UUIXmp1V0fK4ZpK7vzAbQ",seconds:3}}),{c(){e=L("div"),t=L("h1"),n=Z(`Let's go der Hase
        `),U(s.$$.fragment),this.h()},l(r){e=R(r,"DIV",{class:!0});var o=M(e);t=R(o,"H1",{});var u=M(t);n=J(u,`Let's go der Hase
        `),V(s.$$.fragment,u),u.forEach(g),o.forEach(g),this.h()},h(){v(e,"class","svelte-12ivc9q")},m(r,o){I(r,e,o),P(e,t),P(t,n),A(s,t,null),i=!0},p:z,i(r){i||(y(s.$$.fragment,r),i=!0)},o(r){S(s.$$.fragment,r),i=!1},d(r){r&&g(e),F(s)}}}class Qt extends D{constructor(e){super(),H(this,e,null,Yt,T,{})}}function Zt(l){let e,t;const n=[l[3]];let s={};for(let i=0;i<n.length;i+=1)s=x(s,n[i]);return e=new Ht({props:s}),{c(){U(e.$$.fragment)},l(i){V(e.$$.fragment,i)},m(i,r){A(e,i,r),t=!0},p(i,r){const o=r&8?ke(n,[Se(i[3])]):{};e.$set(o)},i(i){t||(y(e.$$.fragment,i),t=!0)},o(i){S(e.$$.fragment,i),t=!1},d(i){F(e,i)}}}function Jt(l){let e,t;return{c(){e=L("h1"),t=Z(l[4]),this.h()},l(n){e=R(n,"H1",{class:!0});var s=M(e);t=J(s,l[4]),s.forEach(g),this.h()},h(){v(e,"class","svelte-160hh5a")},m(n,s){I(n,e,s),P(e,t)},p(n,s){s&16&&le(t,n[4])},i:z,o:z,d(n){n&&g(e)}}}function Ve(l){let e,t;return e=new Qt({}),{c(){U(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,s){A(e,n,s),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function xt(l){let e,t,n,s,i,r,o,u;const c=[Jt,Zt],_=[];function h(m,p){return m[1]<m[0]?0:1}e=h(l),t=_[e]=c[e](l);let a=l[2]&&Ve();return i=new Gt({}),{c(){t.c(),n=G(),a&&a.c(),s=G(),U(i.$$.fragment)},l(m){t.l(m),n=q(m),a&&a.l(m),s=q(m),V(i.$$.fragment,m)},m(m,p){_[e].m(m,p),I(m,n,p),a&&a.m(m,p),I(m,s,p),A(i,m,p),r=!0,o||(u=ie(window,"unhandledRejection",l[5]),o=!0)},p(m,[p]){let j=e;e=h(m),e===j?_[e].p(m,p):(X(),S(_[j],1,1,()=>{_[j]=null}),K(),t=_[e],t?t.p(m,p):(t=_[e]=c[e](m),t.c()),y(t,1),t.m(n.parentNode,n)),m[2]?a?p&4&&y(a,1):(a=Ve(),a.c(),y(a,1),a.m(s.parentNode,s)):a&&(X(),S(a,1,1,()=>{a=null}),K())},i(m){r||(y(t),y(a),y(i.$$.fragment,m),r=!0)},o(m){S(t),S(a),S(i.$$.fragment,m),r=!1},d(m){_[e].d(m),m&&g(n),a&&a.d(m),m&&g(s),F(i,m),o=!1,u()}}}function $t(l,e,t){let n,s,i;Q(l,ft,d=>t(7,i=d));let r=0,o=!1,u=0,c=-1;const _=d=>alert(`something went wrong:
${d.reason}`);ae(async()=>{setInterval(()=>t(6,u++,u),500),await Ge([O.music,O.levelCompletedSound,O.vulvaFoundSound,O.vulvaSpriteSheet]),i&&(onpointerdown=()=>document.body.requestFullscreen());for(const B of O.levels.map(b=>b.backgroundImage)){const b=await Vt(B);if(t(1,c++,c),c===0){const E=new Image;E.src=b}}const d=new Image;d.src=O.gameEndImage,"load"in d&&d.load()});function h(){if(r+1===O.levels.length)return t(2,o=!0);t(0,r++,r)}const N=O,{levels:a,vulvaSpriteSheet:m,gameEndImage:p}=N,j=Re(N,["levels","vulvaSpriteSheet","gameEndImage"]);return l.$$.update=()=>{l.$$.dirty&66&&t(4,n=(c===-1?"lade":"lade level "+(c+2))+".".repeat(u%4)),l.$$.dirty&1&&t(3,s=Le(_e(_e({},j),a[r]),{levelCompletedCb:h}))},[r,c,o,s,n,_,u]}class ln extends D{constructor(e){super(),H(this,e,$t,xt,T,{})}}export{ln as default};