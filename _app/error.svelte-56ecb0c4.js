import{S as s,i as r,s as a,e as t,t as e,c as o,a as c,g as n,d as u,f as p,F as f,h as l,k as d,l as i,n as m,H as h}from"./chunks/vendor-1afcd17a.js";function k(s){let r,a,d=s[1].stack+"";return{c(){r=t("pre"),a=e(d)},l(s){r=o(s,"PRE",{});var t=c(r);a=n(t,d),t.forEach(u)},m(s,t){p(s,r,t),f(r,a)},p(s,r){2&r&&d!==(d=s[1].stack+"")&&l(a,d)},d(s){s&&u(r)}}}function v(s){let r,a,v,E,g,x,H,P=s[1].message+"",$=s[1].stack&&k(s);return{c(){r=t("h1"),a=e(s[0]),v=d(),E=t("p"),g=e(P),x=d(),$&&$.c(),H=i()},l(t){r=o(t,"H1",{});var e=c(r);a=n(e,s[0]),e.forEach(u),v=m(t),E=o(t,"P",{});var p=c(E);g=n(p,P),p.forEach(u),x=m(t),$&&$.l(t),H=i()},m(s,t){p(s,r,t),f(r,a),p(s,v,t),p(s,E,t),f(E,g),p(s,x,t),$&&$.m(s,t),p(s,H,t)},p(s,[r]){1&r&&l(a,s[0]),2&r&&P!==(P=s[1].message+"")&&l(g,P),s[1].stack?$?$.p(s,r):($=k(s),$.c(),$.m(H.parentNode,H)):$&&($.d(1),$=null)},i:h,o:h,d(s){s&&u(r),s&&u(v),s&&u(E),s&&u(x),$&&$.d(s),s&&u(H)}}}function E({error:s,status:r}){return{props:{error:s,status:r}}}function g(s,r,a){let{status:t}=r,{error:e}=r;return s.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),r(this,s,g,v,a,{status:0,error:1})}}export{E as load};
