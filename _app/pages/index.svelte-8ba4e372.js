var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,s=(e,s)=>{for(var r in s||(s={}))n.call(s,r)&&a(e,r,s[r]);if(t)for(var r of t(s))i.call(s,r)&&a(e,r,s[r]);return e};import{S as r,i as l,s as o,e as h,c,a as g,d,b as u,I as m,J as $,f as p,K as f,H as y,L as x,t as v,k as w,g as H,n as W,F as b,j as D,m as I,o as M,x as k,u as z,v as E,M as L,C as X,N as Y,O as V,r as C,w as _,P,Q as O,R as U,h as j,T as R,l as S,E as A,U as N}from"../chunks/vendor-ff406e1e.js";function T(e){let t,n,i;return{c(){t=h("div"),this.h()},l(e){t=c(e,"DIV",{class:!0,style:!0}),g(t).forEach(d),this.h()},h(){u(t,"class","handle svelte-zwbyqo"),m(t,"transform","translate3d("+e[3]+"px, "+e[4]+"px, 0)"),m(t,"width",e[2]+"px"),m(t,"height",e[2]+"px"),$(t,"hovering",e[0]),$(t,"dragging",e[1])},m(a,s){p(a,t,s),n||(i=f(t,"mousedown",e[5]),n=!0)},p(e,[n]){24&n&&m(t,"transform","translate3d("+e[3]+"px, "+e[4]+"px, 0)"),4&n&&m(t,"width",e[2]+"px"),4&n&&m(t,"height",e[2]+"px"),1&n&&$(t,"hovering",e[0]),2&n&&$(t,"dragging",e[1])},i:y,o:y,d(e){e&&d(t),n=!1,i()}}}function q(e,t,n){let i,a,{xHandle:s}=t,{yHandle:r}=t,{handles:l}=t,{startDragging:o}=t,{hovering:h}=t,{dragging:c}=t,{size:g}=t;return e.$$set=e=>{"xHandle"in e&&n(6,s=e.xHandle),"yHandle"in e&&n(7,r=e.yHandle),"handles"in e&&n(8,l=e.handles),"startDragging"in e&&n(9,o=e.startDragging),"hovering"in e&&n(0,h=e.hovering),"dragging"in e&&n(1,c=e.dragging),"size"in e&&n(2,g=e.size)},e.$$.update=()=>{324&e.$$.dirty&&n(3,i=l[s]-g/2),388&e.$$.dirty&&n(4,a=l[r]-g/2)},[h,c,g,i,a,e=>{o(e,s,r)},s,r,l,o]}class B extends r{constructor(e){super(),l(this,e,q,T,o,{xHandle:6,yHandle:7,handles:8,startDragging:9,hovering:0,dragging:1,size:2})}}function F(e){let t,n,i;return{c(){t=h("div"),this.h()},l(e){t=c(e,"DIV",{class:!0,style:!0}),g(t).forEach(d),this.h()},h(){u(t,"class","side-handle svelte-3u81yk"),u(t,"style",e[4])},m(a,s){p(a,t,s),n||(i=[f(t,"mousedown",e[9]),f(t,"mouseenter",e[10]),f(t,"mouseleave",e[11])],n=!0)},p(e,[n]){16&n&&u(t,"style",e[4])},i:y,o:y,d(e){e&&d(t),n=!1,x(i)}}}function K(e,t,n){let i,{handle:a}=t,{handles:s}=t,{size:r}=t,{containerWidth:l}=t,{containerHeight:o}=t,{startDragging:h}=t,{hover:c}=t,{unhover:g}=t;return e.$$set=e=>{"handle"in e&&n(0,a=e.handle),"handles"in e&&n(5,s=e.handles),"size"in e&&n(6,r=e.size),"containerWidth"in e&&n(7,l=e.containerWidth),"containerHeight"in e&&n(8,o=e.containerHeight),"startDragging"in e&&n(1,h=e.startDragging),"hover"in e&&n(2,c=e.hover),"unhover"in e&&n(3,g=e.unhover)},e.$$.update=()=>{97&e.$$.dirty&&n(4,i=((e,t,n)=>{let i,a,s,r;switch(e){case"x1":i=n,a=t.y2-t.y1,s=t.x1-n/2,r=t.y1;break;case"x2":i=n,a=t.y2-t.y1,s=t.x2-n/2,r=t.y1;break;case"y1":i=t.x2-t.x1,a=n,s=t.x1,r=t.y1-n/2;break;case"y2":i=t.x2-t.x1,a=n,s=t.x1,r=t.y2-n/2;break;default:throw new Error(`Unknown handle ${e}`)}return`width: ${i}px; height: ${a}px; transform: translate3d(${s}px, ${r}px, 0);`})(a,s,r))},[a,h,c,g,i,s,r,l,o,e=>h(e,a),()=>c(a),()=>g(a)]}class J extends r{constructor(e){super(),l(this,e,K,F,o,{handle:0,handles:5,size:6,containerWidth:7,containerHeight:8,startDragging:1,hover:2,unhover:3})}}function Q(e){let t,n,i;return{c(){t=h("div"),this.h()},l(e){t=c(e,"DIV",{class:!0,style:!0}),g(t).forEach(d),this.h()},h(){u(t,"class","pan-handle svelte-1s7s7yu"),u(t,"style",e[3])},m(a,s){p(a,t,s),n||(i=[f(t,"mousedown",e[5]),f(t,"mouseenter",e[6]),f(t,"mouseleave",e[7])],n=!0)},p(e,[n]){8&n&&u(t,"style",e[3])},i:y,o:y,d(e){e&&d(t),n=!1,x(i)}}}function G(e,t,n){let i,{handles:a}=t,{startPanning:s}=t,{hover:r}=t,{unhover:l}=t;return e.$$set=e=>{"handles"in e&&n(4,a=e.handles),"startPanning"in e&&n(0,s=e.startPanning),"hover"in e&&n(1,r=e.hover),"unhover"in e&&n(2,l=e.unhover)},e.$$.update=()=>{var t;16&e.$$.dirty&&n(3,i=`width: ${(t=a).x2-t.x1}px; height: ${t.y2-t.y1}px; transform: translate3d(${t.x1}px, ${t.y1}px, 0);`)},[s,r,l,i,a,e=>s(e),()=>r(),()=>l()]}class Z extends r{constructor(e){super(),l(this,e,G,Q,o,{handles:4,startPanning:0,hover:1,unhover:2})}}function ee(e){let t,n,i,a,s,r,l,o,$,D,I,M,k,z;return{c(){t=h("div"),n=h("div"),i=v("↞"),a=w(),s=h("div"),r=v("←"),l=w(),o=h("div"),$=v("→"),D=w(),I=h("div"),M=v("↠"),this.h()},l(e){t=c(e,"DIV",{class:!0,style:!0});var h=g(t);n=c(h,"DIV",{class:!0});var u=g(n);i=H(u,"↞"),u.forEach(d),a=W(h),s=c(h,"DIV",{class:!0});var m=g(s);r=H(m,"←"),m.forEach(d),l=W(h),o=c(h,"DIV",{class:!0});var p=g(o);$=H(p,"→"),p.forEach(d),D=W(h),I=c(h,"DIV",{class:!0});var f=g(I);M=H(f,"↠"),f.forEach(d),h.forEach(d),this.h()},h(){u(n,"class","pan-button svelte-158tfeh"),u(s,"class","pan-button svelte-158tfeh"),u(o,"class","pan-button svelte-158tfeh"),u(I,"class","pan-button svelte-158tfeh"),u(t,"class","pan-buttons svelte-158tfeh"),m(t,"top","-60px")},m(h,c){p(h,t,c),b(t,n),b(n,i),b(t,a),b(t,s),b(s,r),b(t,l),b(t,o),b(o,$),b(t,D),b(t,I),b(I,M),k||(z=[f(window,"keydown",e[4]),f(n,"click",e[7]),f(s,"click",e[8]),f(o,"click",e[9]),f(I,"click",e[10])],k=!0)},p:y,i:y,o:y,d(e){e&&d(t),k=!1,x(z)}}}function te(e,t,n){let{panLeft:i}=t,{panRight:a}=t,{panUp:s}=t,{panDown:r}=t,{smallMovementDistance:l=1}=t,{largeMovementDistance:o=5}=t;const h=e=>{switch(e.key){case"ArrowLeft":return i;case"ArrowRight":return a;case"ArrowUp":return s;case"ArrowDown":return r}return null};return e.$$set=e=>{"panLeft"in e&&n(0,i=e.panLeft),"panRight"in e&&n(1,a=e.panRight),"panUp"in e&&n(5,s=e.panUp),"panDown"in e&&n(6,r=e.panDown),"smallMovementDistance"in e&&n(2,l=e.smallMovementDistance),"largeMovementDistance"in e&&n(3,o=e.largeMovementDistance)},[i,a,l,o,e=>{const t=h(e);if(t){t(e.ctrlKey?o:l),e.stopPropagation()}},s,r,()=>i(o),()=>i(l),()=>a(l),()=>a(o)]}class ne extends r{constructor(e){super(),l(this,e,te,ee,o,{panLeft:0,panRight:1,panUp:5,panDown:6,smallMovementDistance:2,largeMovementDistance:3})}}function ie(e){let t,n,i,a,s,r,l,o,m,$,y,v,H,L,X,Y,V,C,_,P,O,U,j;return n=new Z({props:{handles:e[0],startPanning:e[16],hover:e[22],unhover:e[23]}}),a=new ne({props:{panLeft:e[10],panRight:e[11],panUp:e[12],panDown:e[13]}}),r=new J({props:{handle:"x1",handles:e[0],size:e[3],containerWidth:e[1],containerHeight:e[2],startDragging:e[15],hover:e[19],unhover:e[20]}}),o=new J({props:{handle:"x2",handles:e[0],size:e[3],containerWidth:e[1],containerHeight:e[2],startDragging:e[15],hover:e[19],unhover:e[20]}}),$=new J({props:{handle:"y1",handles:e[0],size:e[3],containerWidth:e[1],containerHeight:e[2],startDragging:e[15],hover:e[19],unhover:e[20]}}),v=new J({props:{handle:"y2",handles:e[0],size:e[3],containerWidth:e[1],containerHeight:e[2],startDragging:e[15],hover:e[19],unhover:e[20]}}),L=new B({props:{xHandle:"x1",yHandle:"y1",handles:e[0],startDragging:e[14],size:e[3],dragging:e[4]||"x1"===e[5]&&"y1"===e[6]||"x1"===e[7]||"y1"===e[7],hovering:e[9]||"x1"===e[8]||"y1"===e[8]}}),Y=new B({props:{xHandle:"x2",yHandle:"y1",handles:e[0],startDragging:e[14],size:e[3],dragging:e[4]||"x2"===e[5]&&"y1"===e[6]||"x2"===e[7]||"y1"===e[7],hovering:e[9]||"x2"===e[8]||"y1"===e[8]}}),C=new B({props:{xHandle:"x1",yHandle:"y2",handles:e[0],startDragging:e[14],size:e[3],dragging:e[4]||"x1"===e[5]&&"y2"===e[6]||"x1"===e[7]||"y2"===e[7],hovering:e[9]||"x1"===e[8]||"y2"===e[8]}}),P=new B({props:{xHandle:"x2",yHandle:"y2",handles:e[0],startDragging:e[14],size:e[3],dragging:e[4]||"x2"===e[5]&&"y2"===e[6]||"x2"===e[7]||"y2"===e[7],hovering:e[9]||"x2"===e[8]||"y2"===e[8]}}),{c(){t=h("div"),D(n.$$.fragment),i=w(),D(a.$$.fragment),s=w(),D(r.$$.fragment),l=w(),D(o.$$.fragment),m=w(),D($.$$.fragment),y=w(),D(v.$$.fragment),H=w(),D(L.$$.fragment),X=w(),D(Y.$$.fragment),V=w(),D(C.$$.fragment),_=w(),D(P.$$.fragment),this.h()},l(e){t=c(e,"DIV",{class:!0});var h=g(t);I(n.$$.fragment,h),i=W(h),I(a.$$.fragment,h),s=W(h),I(r.$$.fragment,h),l=W(h),I(o.$$.fragment,h),m=W(h),I($.$$.fragment,h),y=W(h),I(v.$$.fragment,h),H=W(h),I(L.$$.fragment,h),X=W(h),I(Y.$$.fragment,h),V=W(h),I(C.$$.fragment,h),_=W(h),I(P.$$.fragment,h),h.forEach(d),this.h()},h(){u(t,"class","image-handles svelte-1f45cb4")},m(h,c){p(h,t,c),M(n,t,null),b(t,i),M(a,t,null),b(t,s),M(r,t,null),b(t,l),M(o,t,null),b(t,m),M($,t,null),b(t,y),M(v,t,null),b(t,H),M(L,t,null),b(t,X),M(Y,t,null),b(t,V),M(C,t,null),b(t,_),M(P,t,null),O=!0,U||(j=[f(window,"mouseup",e[17]),f(window,"mousemove",e[18]),f(window,"mouseleave",e[17])],U=!0)},p(e,[t]){const i={};1&t&&(i.handles=e[0]),512&t&&(i.hover=e[22]),512&t&&(i.unhover=e[23]),n.$set(i);const a={};1&t&&(a.handles=e[0]),8&t&&(a.size=e[3]),2&t&&(a.containerWidth=e[1]),4&t&&(a.containerHeight=e[2]),r.$set(a);const s={};1&t&&(s.handles=e[0]),8&t&&(s.size=e[3]),2&t&&(s.containerWidth=e[1]),4&t&&(s.containerHeight=e[2]),o.$set(s);const l={};1&t&&(l.handles=e[0]),8&t&&(l.size=e[3]),2&t&&(l.containerWidth=e[1]),4&t&&(l.containerHeight=e[2]),$.$set(l);const h={};1&t&&(h.handles=e[0]),8&t&&(h.size=e[3]),2&t&&(h.containerWidth=e[1]),4&t&&(h.containerHeight=e[2]),v.$set(h);const c={};1&t&&(c.handles=e[0]),8&t&&(c.size=e[3]),240&t&&(c.dragging=e[4]||"x1"===e[5]&&"y1"===e[6]||"x1"===e[7]||"y1"===e[7]),768&t&&(c.hovering=e[9]||"x1"===e[8]||"y1"===e[8]),L.$set(c);const g={};1&t&&(g.handles=e[0]),8&t&&(g.size=e[3]),240&t&&(g.dragging=e[4]||"x2"===e[5]&&"y1"===e[6]||"x2"===e[7]||"y1"===e[7]),768&t&&(g.hovering=e[9]||"x2"===e[8]||"y1"===e[8]),Y.$set(g);const d={};1&t&&(d.handles=e[0]),8&t&&(d.size=e[3]),240&t&&(d.dragging=e[4]||"x1"===e[5]&&"y2"===e[6]||"x1"===e[7]||"y2"===e[7]),768&t&&(d.hovering=e[9]||"x1"===e[8]||"y2"===e[8]),C.$set(d);const u={};1&t&&(u.handles=e[0]),8&t&&(u.size=e[3]),240&t&&(u.dragging=e[4]||"x2"===e[5]&&"y2"===e[6]||"x2"===e[7]||"y2"===e[7]),768&t&&(u.hovering=e[9]||"x2"===e[8]||"y2"===e[8]),P.$set(u)},i(e){O||(k(n.$$.fragment,e),k(a.$$.fragment,e),k(r.$$.fragment,e),k(o.$$.fragment,e),k($.$$.fragment,e),k(v.$$.fragment,e),k(L.$$.fragment,e),k(Y.$$.fragment,e),k(C.$$.fragment,e),k(P.$$.fragment,e),O=!0)},o(e){z(n.$$.fragment,e),z(a.$$.fragment,e),z(r.$$.fragment,e),z(o.$$.fragment,e),z($.$$.fragment,e),z(v.$$.fragment,e),z(L.$$.fragment,e),z(Y.$$.fragment,e),z(C.$$.fragment,e),z(P.$$.fragment,e),O=!1},d(e){e&&d(t),E(n),E(a),E(r),E(o),E($),E(v),E(L),E(Y),E(C),E(P),U=!1,x(j)}}}function ae(e,t,n){let{handles:i}=t,{moveHandles:a}=t,{containerWidth:s}=t,{containerHeight:r}=t,{size:l=40}=t,o=!1,h=!1,c=null,g=null,d=null,u=null,m=!1,$=null,p=null;const f=(e,t)=>{let n=null;e?n=t?[["x1",e],["x2",e],["y1",t],["y2",t]]:[["x1",e],["x2",e]]:t&&(n=[["y1",t],["y2",t]]),n&&a(n)};return e.$$set=e=>{"handles"in e&&n(0,i=e.handles),"moveHandles"in e&&n(21,a=e.moveHandles),"containerWidth"in e&&n(1,s=e.containerWidth),"containerHeight"in e&&n(2,r=e.containerHeight),"size"in e&&n(3,l=e.size)},[i,s,r,l,h,c,g,d,u,m,e=>f(-e,0),e=>f(e,0),e=>f(0,-e),e=>f(0,e),(e,t,i)=>{o=!0,n(5,c=t),n(6,g=i),$=e.clientX,p=e.clientY},(e,t)=>{o=!0,n(7,d=t),$=e.clientX,p=e.clientY},e=>{o=!0,n(4,h=!0),$=e.clientX,p=e.clientY},e=>{o&&(o=!1,n(4,h=!1),n(6,g=null),n(6,g=null),n(7,d=null),$=null,p=null)},e=>{if(o)if(h){const t=e.clientX-$,n=e.clientY-p;f(t,n),$=e.clientX,p=e.clientY}else if("x1"===d||"x2"===d){const t=e.clientX-$;a([[d,t]]),$=e.clientX}else if("y1"===d||"y2"===d){const t=e.clientY-p;a([[d,t]]),p=e.clientY}else{const t=e.clientX-$,n=e.clientY-p;a([[c,t],[g,n]]),$=e.clientX,p=e.clientY}},e=>{n(8,u=e)},e=>{n(8,u=null)},a,()=>n(9,m=!0),()=>n(9,m=!1)]}class se extends r{constructor(e){super(),l(this,e,ae,ie,o,{handles:0,moveHandles:21,containerWidth:1,containerHeight:2,size:3})}}function re(e,t,n){const i=e.slice();return i[9]=t[n],i}function le(e){let t;return{c(){t=h("div"),this.h()},l(e){t=c(e,"DIV",{class:!0,style:!0}),g(t).forEach(d),this.h()},h(){u(t,"class","bg-rect svelte-1q7iaud"),m(t,"left",e[9].left+"px"),m(t,"top",e[9].top+"px"),m(t,"width",e[9].width+"px"),m(t,"height",e[9].height+"px")},m(e,n){p(e,t,n)},p(e,n){256&n&&m(t,"left",e[9].left+"px"),256&n&&m(t,"top",e[9].top+"px"),256&n&&m(t,"width",e[9].width+"px"),256&n&&m(t,"height",e[9].height+"px")},d(e){e&&d(t)}}}function oe(e){let t,n,i,a,s,r,l=e[8],o=[];for(let h=0;h<l.length;h+=1)o[h]=le(re(e,l,h));return s=new se({props:{handles:e[6],moveHandles:e[7],containerWidth:e[1],containerHeight:e[2]}}),{c(){t=h("div"),n=h("div"),i=w();for(let e=0;e<o.length;e+=1)o[e].c();a=w(),D(s.$$.fragment),this.h()},l(e){t=c(e,"DIV",{class:!0,style:!0});var r=g(t);n=c(r,"DIV",{class:!0,style:!0}),g(n).forEach(d),i=W(r);for(let t=0;t<o.length;t+=1)o[t].l(r);a=W(r),I(s.$$.fragment,r),r.forEach(d),this.h()},h(){u(n,"class","image svelte-1q7iaud"),m(n,"width",e[0].width+"px"),m(n,"height",e[0].height+"px"),m(n,"background-image","url("+e[0].url+")"),m(n,"transform","scale3d("+e[3]+", "+e[3]+", 1)"),u(t,"class","source-image svelte-1q7iaud"),m(t,"width",e[1]+"px"),m(t,"height",e[2]+"px"),m(t,"left",e[4]+"px"),m(t,"top",e[5]+"px")},m(e,l){p(e,t,l),b(t,n),b(t,i);for(let n=0;n<o.length;n+=1)o[n].m(t,null);b(t,a),M(s,t,null),r=!0},p(e,[i]){if((!r||1&i)&&m(n,"width",e[0].width+"px"),(!r||1&i)&&m(n,"height",e[0].height+"px"),(!r||1&i)&&m(n,"background-image","url("+e[0].url+")"),(!r||8&i)&&m(n,"transform","scale3d("+e[3]+", "+e[3]+", 1)"),256&i){let n;for(l=e[8],n=0;n<l.length;n+=1){const s=re(e,l,n);o[n]?o[n].p(s,i):(o[n]=le(s),o[n].c(),o[n].m(t,a))}for(;n<o.length;n+=1)o[n].d(1);o.length=l.length}const h={};64&i&&(h.handles=e[6]),128&i&&(h.moveHandles=e[7]),2&i&&(h.containerWidth=e[1]),4&i&&(h.containerHeight=e[2]),s.$set(h),(!r||2&i)&&m(t,"width",e[1]+"px"),(!r||4&i)&&m(t,"height",e[2]+"px"),(!r||16&i)&&m(t,"left",e[4]+"px"),(!r||32&i)&&m(t,"top",e[5]+"px")},i(e){r||(k(s.$$.fragment,e),r=!0)},o(e){z(s.$$.fragment,e),r=!1},d(e){e&&d(t),L(o,e),E(s)}}}function he(e,t,n){let i,{image:a}=t,{width:s}=t,{height:r}=t,{scale:l}=t,{left:o}=t,{top:h}=t,{handles:c}=t,{moveHandles:g}=t;return e.$$set=e=>{"image"in e&&n(0,a=e.image),"width"in e&&n(1,s=e.width),"height"in e&&n(2,r=e.height),"scale"in e&&n(3,l=e.scale),"left"in e&&n(4,o=e.left),"top"in e&&n(5,h=e.top),"handles"in e&&n(6,c=e.handles),"moveHandles"in e&&n(7,g=e.moveHandles)},e.$$.update=()=>{70&e.$$.dirty&&n(8,i=[{left:0,top:0,width:c.x1,height:r},{left:c.x2,top:0,width:s-c.x2,height:r},{left:c.x1,top:0,width:c.x2-c.x1,height:c.y1},{left:c.x1,top:c.y2,width:c.x2-c.x1,height:r-c.y2}])},[a,s,r,l,o,h,c,g,i]}class ce extends r{constructor(e){super(),l(this,e,he,oe,o,{image:0,width:1,height:2,scale:3,left:4,top:5,handles:6,moveHandles:7})}}function ge(e){let t,n,i,a;return{c(){t=h("div"),n=h("div"),i=w(),a=h("div"),this.h()},l(e){t=c(e,"DIV",{class:!0,style:!0});var s=g(t);n=c(s,"DIV",{style:!0}),g(n).forEach(d),i=W(s),a=c(s,"DIV",{style:!0}),g(a).forEach(d),s.forEach(d),this.h()},h(){u(n,"style",e[1]),u(a,"style",e[2]),u(t,"class","mirror-image svelte-1xd7821"),u(t,"style",e[0])},m(e,s){p(e,t,s),b(t,n),b(t,i),b(t,a)},p(e,[i]){2&i&&u(n,"style",e[1]),4&i&&u(a,"style",e[2]),1&i&&u(t,"style",e[0])},i:y,o:y,d(e){e&&d(t)}}}function de(e,t,n){let i,a,s,{image:r}=t,{selectionX:l}=t,{selectionY:o}=t,{selectionWidth:h}=t,{selectionHeight:c}=t,{isLeft:g}=t;const d=(e,t,n,i,a,s,r)=>{let l,o;return e?(l=t?"":"transform: rotate3d(0, 1, 0, 180deg);",o=t?`background-position: ${n.width-i}px ${-a}px;`:`background-position: ${n.width-i-s/2}px ${-a}px;`):(l=t?"transform: rotate3d(0, 1, 0, 180deg);":"",o=t?`background-position: ${n.width-i}px ${-a}px;`:`background-position: ${n.width-i-s/2}px ${-a}px;`),`width: ${s/2}px; height: ${r}px; background-image: url(${n.url}); ${o} ${l}`};return e.$$set=e=>{"image"in e&&n(3,r=e.image),"selectionX"in e&&n(4,l=e.selectionX),"selectionY"in e&&n(5,o=e.selectionY),"selectionWidth"in e&&n(6,h=e.selectionWidth),"selectionHeight"in e&&n(7,c=e.selectionHeight),"isLeft"in e&&n(8,g=e.isLeft)},e.$$.update=()=>{192&e.$$.dirty&&n(0,i=`width: ${h}px; height: ${c}px;`),504&e.$$.dirty&&n(1,a=d(!0,g,r,l,o,h,c)),504&e.$$.dirty&&n(2,s=d(!1,g,r,l,o,h,c))},[i,a,s,r,l,o,h,c,g]}class ue extends r{constructor(e){super(),l(this,e,de,ge,o,{image:3,selectionX:4,selectionY:5,selectionWidth:6,selectionHeight:7,isLeft:8})}}function me(e){let t,n,i,a,s;return n=new ue({props:{image:e[0],selectionX:e[1],selectionY:e[2],selectionWidth:e[3],selectionHeight:e[4],isLeft:!0}}),a=new ue({props:{image:e[0],selectionX:e[1],selectionY:e[2],selectionWidth:e[3],selectionHeight:e[4],isLeft:!1}}),{c(){t=h("div"),D(n.$$.fragment),i=w(),D(a.$$.fragment),this.h()},l(e){t=c(e,"DIV",{class:!0,style:!0});var s=g(t);I(n.$$.fragment,s),i=W(s),I(a.$$.fragment,s),s.forEach(d),this.h()},h(){u(t,"class","mirror-images svelte-1p0b9ky"),u(t,"style",e[5])},m(e,r){p(e,t,r),M(n,t,null),b(t,i),M(a,t,null),s=!0},p(e,[i]){const r={};1&i&&(r.image=e[0]),2&i&&(r.selectionX=e[1]),4&i&&(r.selectionY=e[2]),8&i&&(r.selectionWidth=e[3]),16&i&&(r.selectionHeight=e[4]),n.$set(r);const l={};1&i&&(l.image=e[0]),2&i&&(l.selectionX=e[1]),4&i&&(l.selectionY=e[2]),8&i&&(l.selectionWidth=e[3]),16&i&&(l.selectionHeight=e[4]),a.$set(l),(!s||32&i)&&u(t,"style",e[5])},i(e){s||(k(n.$$.fragment,e),k(a.$$.fragment,e),s=!0)},o(e){z(n.$$.fragment,e),z(a.$$.fragment,e),s=!1},d(e){e&&d(t),E(n),E(a)}}}function $e(e,t,n){let i,{image:a}=t,{containerWidth:s}=t,{selectionX:r}=t,{selectionY:l}=t,{selectionWidth:o}=t,{selectionHeight:h}=t,{renderedWidth:c}=t,{renderedHeight:g}=t,{scale:d}=t;return e.$$set=e=>{"image"in e&&n(0,a=e.image),"containerWidth"in e&&n(6,s=e.containerWidth),"selectionX"in e&&n(1,r=e.selectionX),"selectionY"in e&&n(2,l=e.selectionY),"selectionWidth"in e&&n(3,o=e.selectionWidth),"selectionHeight"in e&&n(4,h=e.selectionHeight),"renderedWidth"in e&&n(7,c=e.renderedWidth),"renderedHeight"in e&&n(8,g=e.renderedHeight),"scale"in e&&n(9,d=e.scale)},e.$$.update=()=>{728&e.$$.dirty&&n(5,i=`left: ${Math.floor(s/2-c)}px; transform: scale3d(${d}, ${d}, 1); width: ${2*o}px; height: ${h}px;`)},[a,r,l,o,h,i,s,c,g,d]}class pe extends r{constructor(e){super(),l(this,e,$e,me,o,{image:0,containerWidth:6,selectionX:1,selectionY:2,selectionWidth:3,selectionHeight:4,renderedWidth:7,renderedHeight:8,scale:9})}}function fe(e){let t,n,i,a,s,r,l;return i=new ce({props:{image:e[5],handles:e[6],moveHandles:e[7],width:e[2].width,height:e[2].height,scale:e[2].scale,left:e[2].x1,top:e[2].y1}}),r=new pe({props:{image:e[5],containerWidth:e[1].mirrorContainerWidth,selectionX:e[3].x1,selectionY:e[3].y1,selectionWidth:e[3].width,selectionHeight:e[3].height,renderedWidth:e[4].imageWidth,renderedHeight:e[4].imageHeight,scale:e[4].scale}}),{c(){t=h("div"),n=h("div"),D(i.$$.fragment),a=w(),s=h("div"),D(r.$$.fragment),this.h()},l(e){t=c(e,"DIV",{class:!0,style:!0});var l=g(t);n=c(l,"DIV",{class:!0,style:!0});var o=g(n);I(i.$$.fragment,o),o.forEach(d),a=W(l),s=c(l,"DIV",{class:!0,style:!0});var h=g(s);I(r.$$.fragment,h),h.forEach(d),l.forEach(d),this.h()},h(){u(n,"class","source-image-wrapper svelte-1rnm3iy"),m(n,"height",e[1].sourceContainerHeight+"px"),u(s,"class","mirror-images-wrapper svelte-1rnm3iy"),m(s,"height",e[1].mirrorContainerHeight+"px"),u(t,"class","mirror-twin-images svelte-1rnm3iy"),m(t,"height",e[0]+"px")},m(e,o){p(e,t,o),b(t,n),M(i,n,null),b(t,a),b(t,s),M(r,s,null),l=!0},p(e,[a]){const o={};32&a&&(o.image=e[5]),64&a&&(o.handles=e[6]),128&a&&(o.moveHandles=e[7]),4&a&&(o.width=e[2].width),4&a&&(o.height=e[2].height),4&a&&(o.scale=e[2].scale),4&a&&(o.left=e[2].x1),4&a&&(o.top=e[2].y1),i.$set(o),(!l||2&a)&&m(n,"height",e[1].sourceContainerHeight+"px");const h={};32&a&&(h.image=e[5]),2&a&&(h.containerWidth=e[1].mirrorContainerWidth),8&a&&(h.selectionX=e[3].x1),8&a&&(h.selectionY=e[3].y1),8&a&&(h.selectionWidth=e[3].width),8&a&&(h.selectionHeight=e[3].height),16&a&&(h.renderedWidth=e[4].imageWidth),16&a&&(h.renderedHeight=e[4].imageHeight),16&a&&(h.scale=e[4].scale),r.$set(h),(!l||2&a)&&m(s,"height",e[1].mirrorContainerHeight+"px"),(!l||1&a)&&m(t,"height",e[0]+"px")},i(e){l||(k(i.$$.fragment,e),k(r.$$.fragment,e),l=!0)},o(e){z(i.$$.fragment,e),z(r.$$.fragment,e),l=!1},d(e){e&&d(t),E(i),E(r)}}}function ye(e,t,n){let{height:i}=t,{layout:a}=t,{sourceImageLayout:s}=t,{sourceImageSelection:r}=t,{mirrorImagesLayout:l}=t,{image:o}=t,{handles:h}=t,{moveHandles:c}=t;return e.$$set=e=>{"height"in e&&n(0,i=e.height),"layout"in e&&n(1,a=e.layout),"sourceImageLayout"in e&&n(2,s=e.sourceImageLayout),"sourceImageSelection"in e&&n(3,r=e.sourceImageSelection),"mirrorImagesLayout"in e&&n(4,l=e.mirrorImagesLayout),"image"in e&&n(5,o=e.image),"handles"in e&&n(6,h=e.handles),"moveHandles"in e&&n(7,c=e.moveHandles)},[i,a,s,r,l,o,h,c]}class xe extends r{constructor(e){super(),l(this,e,ye,fe,o,{height:0,layout:1,sourceImageLayout:2,sourceImageSelection:3,mirrorImagesLayout:4,image:5,handles:6,moveHandles:7})}}const ve=(e,t,n)=>{if(null===e.width)throw Error(`Cannot compute layout with unloaded image data: ${e.name}`);const i=e.width,a=e.height,s=t,r=Math.round(.5*n);return{width:t,height:n,imageWidth:i,imageHeight:a,sourceContainerWidth:s,sourceContainerHeight:r,mirrorContainerWidth:t,mirrorContainerHeight:n-r}},we=(e,t)=>({name:e,url:t,el:null,width:null,height:null}),He=[we("Ada Lovelace","images/ada_lovelace.png"),we("Alan Turing","images/alan_turing.jpg"),we("Frida Kahlo","images/frida_kahlo.jpg"),we("custom image url","")];function We(e,t,n){const i=e.slice();return i[6]=t[n],i}function be(e){let t,n=e[6].name+"";return{c(){t=v(n)},l(e){t=H(e,n)},m(e,n){p(e,t,n)},p(e,i){32&i&&n!==(n=e[6].name+"")&&j(t,n)},d(e){e&&d(t)}}}function De(e){let t,n,i,a;function s(...t){return e[24](e[6],...t)}return{c(){t=h("input"),this.h()},l(e){t=c(e,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){u(t,"class","url svelte-4hm7a9"),u(t,"type","text"),u(t,"placeholder",n=e[6].name)},m(n,r){p(n,t,r),i||(a=[f(t,"input",s),f(t,"focus",e[25])],i=!0)},p(i,a){e=i,32&a&&n!==(n=e[6].name)&&u(t,"placeholder",n)},d(e){e&&d(t),i=!1,x(a)}}}function Ie(e,t){let n,i,a,s,r;function l(e,t){return"custom image url"===e[6].name?De:be}let o=l(t),m=o(t);return{key:e,first:null,c(){n=h("label"),i=h("input"),m.c(),this.h()},l(e){n=c(e,"LABEL",{class:!0});var t=g(n);i=c(t,"INPUT",{type:!0}),m.l(t),t.forEach(d),this.h()},h(){u(i,"type","radio"),i.__value=a=t[6].name,i.value=i.__value,t[23][0].push(i),u(n,"class","control svelte-4hm7a9"),$(n,"selected",t[6].name===t[3]),this.first=n},m(e,a){p(e,n,a),b(n,i),i.checked=i.__value===t[3],m.m(n,null),s||(r=f(i,"change",t[22]),s=!0)},p(e,s){t=e,32&s&&a!==(a=t[6].name)&&(i.__value=a,i.value=i.__value),8&s&&(i.checked=i.__value===t[3]),o===(o=l(t))&&m?m.p(t,s):(m.d(1),m=o(t),m&&(m.c(),m.m(n,null))),40&s&&$(n,"selected",t[6].name===t[3])},d(e){e&&d(n),t[23][0].splice(t[23][0].indexOf(i),1),m.d(),s=!1,r()}}}function Me(e){let t,n;return t=new xe({props:{image:e[6],height:e[4],layout:e[7],handles:e[11],sourceImageLayout:e[8],sourceImageSelection:e[9],mirrorImagesLayout:e[10],moveHandles:e[14].move}}),{c(){D(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,i){M(t,e,i),n=!0},p(e,n){const i={};64&n&&(i.image=e[6]),16&n&&(i.height=e[4]),128&n&&(i.layout=e[7]),2048&n&&(i.handles=e[11]),256&n&&(i.sourceImageLayout=e[8]),512&n&&(i.sourceImageSelection=e[9]),1024&n&&(i.mirrorImagesLayout=e[10]),t.$set(i)},i(e){n||(k(t.$$.fragment,e),n=!0)},o(e){z(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function ke(e){let t,n,i,a,s,r=[],l=new Map,o=e[5];const $=e=>e[6].name;for(let h=0;h<o.length;h+=1){let t=We(e,o,h),n=$(t);l.set(n,r[h]=Ie(n,t))}let f=e[7]&&e[6]&&e[8]&&e[9]&&e[10]&&Me(e);return{c(){t=h("div"),n=h("div"),i=h("form");for(let e=0;e<r.length;e+=1)r[e].c();a=w(),f&&f.c(),this.h()},l(e){t=c(e,"DIV",{class:!0,style:!0});var s=g(t);n=c(s,"DIV",{class:!0,style:!0});var l=g(n);i=c(l,"FORM",{class:!0});var o=g(i);for(let t=0;t<r.length;t+=1)r[t].l(o);o.forEach(d),l.forEach(d),a=W(s),f&&f.l(s),s.forEach(d),this.h()},h(){u(i,"class","svelte-4hm7a9"),u(n,"class","controls svelte-4hm7a9"),m(n,"height",ze+"px"),u(t,"class","mirror-twins svelte-4hm7a9"),m(t,"height",e[1]+"px"),m(t,"width",e[0]+"px")},m(e,l){p(e,t,l),b(t,n),b(n,i);for(let t=0;t<r.length;t+=1)r[t].m(i,null);b(t,a),f&&f.m(t,null),s=!0},p(e,[n]){44&n&&(o=e[5],r=V(r,n,$,1,e,o,l,i,U,Ie,null,We)),e[7]&&e[6]&&e[8]&&e[9]&&e[10]?f?(f.p(e,n),1984&n&&k(f,1)):(f=Me(e),f.c(),k(f,1),f.m(t,null)):f&&(C(),z(f,1,1,(()=>{f=null})),_()),(!s||2&n)&&m(t,"height",e[1]+"px"),(!s||1&n)&&m(t,"width",e[0]+"px")},i(e){s||(k(f),s=!0)},o(e){z(f),s=!1},d(e){e&&d(t);for(let t=0;t<r.length;t+=1)r[t].d();f&&f.d()}}}const ze=130;function Ee(e,t,n){let i,a,r,l,o,h,c,g,d,u,m,$,p,f=y,x=()=>(f(),f=P(H,(e=>n(5,g=e))),H);e.$$.on_destroy.push((()=>f()));let{width:v}=t,{height:w}=t,{images:H}=t;x();let W=g[2].name;const b=(()=>{const{subscribe:e,set:t}=X(null);return{subscribe:e,compute:(e,n,i)=>{const a=ve(e,n,i);t(a)}}})();O(e,b,(e=>n(18,d=e)));const D=(e=>{const{subscribe:t}=Y(e,(e=>{if(!e)return null;const t=e.sourceContainerWidth-20-20,n=e.sourceContainerHeight-60-0,i=Math.min(1,t/e.imageWidth,n/e.imageHeight),a=Math.floor(e.imageWidth*i),s=Math.floor(e.imageHeight*i),r=Math.floor(e.sourceContainerWidth/2-a/2+0),l=r+a,o=e.sourceContainerHeight-s;return{scale:i,width:a,height:s,x1:r,x2:l,y1:o,y2:o+s}}));return{subscribe:t}})(b);O(e,D,(e=>n(19,u=e)));const I=(e=>{let t,n,i,a;const{subscribe:r}=Y(e,((e,s)=>{t=s,n=e.width,i=e.height,a={width:e.width,height:e.height,x1:0,x2:e.width,y1:0,y2:e.height},s(a)}),void 0);return{subscribe:r,move:e=>{const r=s({},a);for(const[t,a]of e)switch(t){case"x1":r.x1=Math.min(Math.max(r.x1+a,0),r.x2);break;case"x2":r.x2=Math.max(Math.min(r.x2+a,n),r.x1);break;case"y1":r.y1=Math.min(Math.max(r.y1+a,0),r.y2);break;case"y2":r.y2=Math.max(Math.min(r.y2+a,i),r.y1)}r.width=r.x2-r.x1,r.height=r.y2-r.y1,a=r,t(r)}}})(Y(D,(e=>({width:e&&e.width||0,height:e&&e.height||0}))));O(e,I,(e=>n(11,p=e)));const M=((e,t)=>{const{subscribe:n}=Y([e,t],(([e,t])=>{if(!e)return null;const{scale:n}=e,i=Math.round(t.x1/n),a=Math.round(t.x2/n),s=Math.round(t.y1/n),r=Math.round(t.y2/n);return{width:a-i,height:r-s,x1:i,x2:a,y1:s,y2:r}}));return{subscribe:n}})(D,I);O(e,M,(e=>n(20,m=e)));const k=((e,t,n)=>{const{subscribe:i}=Y([e,t,n],(([e,t,n])=>{if(!e||!t||!n)return null;const i=Math.min(1,e.mirrorContainerWidth/2/n.width,e.mirrorContainerHeight/n.height),a=Math.floor(n.width*i);return{scale:i,imageHeight:Math.floor(n.height*i),imageWidth:a}}));return{subscribe:i}})(b,D,M);O(e,k,(e=>n(21,$=e)));return e.$$set=e=>{"width"in e&&n(0,v=e.width),"height"in e&&n(1,w=e.height),"images"in e&&x(n(2,H=e.images))},e.$$.update=()=>{2&e.$$.dirty&&n(4,i=w-ze),44&e.$$.dirty&&n(6,a=g&&H.findByName(W)),12&e.$$.dirty&&H.load(W),64&e.$$.dirty&&n(17,r=!(!a||null===a.width)),131153&e.$$.dirty&&r&&b.compute(a,v,i),262144&e.$$.dirty&&n(7,l=d),524288&e.$$.dirty&&n(8,o=u),1048576&e.$$.dirty&&n(9,h=m),2097152&e.$$.dirty&&n(10,c=$)},[v,w,H,W,i,g,a,l,o,h,c,p,b,D,I,M,k,r,d,u,m,$,function(){W=this.__value,n(3,W)},[[]],(e,t)=>H.updateOne(e.name,{url:t.currentTarget.value}),()=>{"custom image url"!==W&&n(3,W="custom image url")}]}class Le extends r{constructor(e){super(),l(this,e,Ee,ke,o,{width:0,height:1,images:2})}}const{window:Xe}=N;function Ye(e){let t,n,i,a,s,r;R(e[4]),document.title=t=e[0];let l=function(e){let t,n;return t=new Le({props:{images:e[3],width:e[1],height:e[2]}}),{c(){D(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,i){M(t,e,i),n=!0},p(e,n){const i={};2&n&&(i.width=e[1]),4&n&&(i.height=e[2]),t.$set(i)},i(e){n||(k(t.$$.fragment,e),n=!0)},o(e){z(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}(e);return{c(){n=w(),l&&l.c(),i=S()},l(e){A('[data-svelte="svelte-1sv3h"]',document.head).forEach(d),n=W(e),l&&l.l(e),i=S()},m(t,o){p(t,n,o),l&&l.m(t,o),p(t,i,o),a=!0,s||(r=f(Xe,"resize",e[4]),s=!0)},p(e,[n]){(!a||1&n)&&t!==(t=e[0])&&(document.title=t),l.p(e,n)},i(e){a||(k(l),a=!0)},o(e){z(l),a=!1},d(e){e&&d(n),l&&l.d(e),e&&d(i),s=!1,r()}}}function Ve(e,t,n){let{name:i="mirror-twin-sveltekit-vite"}=t;const a=(e=>{const{subscribe:t,update:n}=X(e);let i;t((e=>{i=e}));const a=e=>i.find((t=>t.name===e)),r=(e,t)=>{n((n=>n.map((n=>n.name===e?s(s({},n),t):n))))};return{subscribe:t,updateOne:r,findByName:a,load:e=>{const t=a(e);if(!t)throw Error(`Cannot find image with name ${e}`);if(t.el)return t;const n="undefined"==typeof window?{}:new Image;return r(e,{el:n}),n.src=t.url,n.onload=()=>{r(e,{width:n.width,height:n.height})},t}}})(He);let r="undefined"==typeof window?0:window.innerWidth,l="undefined"==typeof window?0:window.innerHeight;return e.$$set=e=>{"name"in e&&n(0,i=e.name)},[i,r,l,a,function(){n(2,l=Xe.innerHeight),n(1,r=Xe.innerWidth)}]}export default class extends r{constructor(e){super(),l(this,e,Ve,Ye,o,{name:0})}}
