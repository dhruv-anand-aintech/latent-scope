const F="-",L=/^xn--/,M=/[^\0-\x7F]/,P=/[\x2E\u3002\uFF0E\uFF61]/g,U={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},C=35,f=Math.floor,w=String.fromCharCode;function p(o){throw new RangeError(U[o])}function B(o,n){const t=[];let e=o.length;for(;e--;)t[e]=n(o[e]);return t}function S(o,n){const t=o.split("@");let e="";t.length>1&&(e=t[0]+"@",o=t[1]),o=o.replace(P,".");const r=o.split("."),c=B(r,n).join(".");return e+c}function x(o){const n=[];let t=0;const e=o.length;for(;t<e;){const r=o.charCodeAt(t++);if(r>=55296&&r<=56319&&t<e){const c=o.charCodeAt(t++);(c&64512)==56320?n.push(((r&1023)<<10)+(c&1023)+65536):(n.push(r),t--)}else n.push(r)}return n}const m=o=>String.fromCodePoint(...o),D=function(o){return o>=48&&o<58?26+(o-48):o>=65&&o<91?o-65:o>=97&&o<123?o-97:36},E=function(o,n){return o+22+75*(o<26)-((n!=0)<<5)},j=function(o,n,t){let e=0;for(o=t?f(o/700):o>>1,o+=f(o/n);o>C*26>>1;e+=36)o=f(o/C);return f(e+(C+1)*o/(o+38))},A=function(o){const n=[],t=o.length;let e=0,r=128,c=72,l=o.lastIndexOf(F);l<0&&(l=0);for(let s=0;s<l;++s)o.charCodeAt(s)>=128&&p("not-basic"),n.push(o.charCodeAt(s));for(let s=l>0?l+1:0;s<t;){const i=e;for(let u=1,a=36;;a+=36){s>=t&&p("invalid-input");const d=D(o.charCodeAt(s++));d>=36&&p("invalid-input"),d>f((2147483647-e)/u)&&p("overflow"),e+=d*u;const g=a<=c?1:a>=c+26?26:a-c;if(d<g)break;const v=36-g;u>f(2147483647/v)&&p("overflow"),u*=v}const h=n.length+1;c=j(e-i,h,i==0),f(e/h)>2147483647-r&&p("overflow"),r+=f(e/h),e%=h,n.splice(e++,0,r)}return String.fromCodePoint(...n)},I=function(o){const n=[];o=x(o);const t=o.length;let e=128,r=0,c=72;for(const i of o)i<128&&n.push(w(i));const l=n.length;let s=l;for(l&&n.push(F);s<t;){let i=2147483647;for(const u of o)u>=e&&u<i&&(i=u);const h=s+1;i-e>f((2147483647-r)/h)&&p("overflow"),r+=(i-e)*h,e=i;for(const u of o)if(u<e&&++r>2147483647&&p("overflow"),u===e){let a=r;for(let d=36;;d+=36){const g=d<=c?1:d>=c+26?26:d-c;if(a<g)break;const v=a-g,b=36-g;n.push(w(E(g+v%b,0))),a=f(v/b)}n.push(w(E(a,0))),c=j(r,h,s===l),r=0,++s}++r,++e}return n.join("")},k=function(o){return S(o,function(n){return L.test(n)?A(n.slice(4).toLowerCase()):n})},O=function(o){return S(o,function(n){return M.test(n)?"xn--"+I(n):n})},K={version:"2.3.1",ucs2:{decode:x,encode:m},decode:A,encode:I,toASCII:O,toUnicode:k};var N=K;export{A as decode,N as default,I as encode,O as toASCII,k as toUnicode,x as ucs2decode,m as ucs2encode};