"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[1707],{44869:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var r=n(74848),s=n(28453),i=n(3514);const c={title:"\u57fa\u7840\u77e5\u8bc6",slug:"/basic",sidebar_position:1},o="\u57fa\u7840\u77e5\u8bc6",a={id:"start/basic/basic",title:"\u57fa\u7840\u77e5\u8bc6",description:"\u8003\u8651\u5230\u7b28\u86cb\u6559\u7a0b\u4e3b\u8981\u9762\u5411\u65b0\u624b\uff0c\u6211\u4eec\u65e0\u6cd5\u4e86\u89e3\u4f60\u4e86\u89e3\u4ec0\u4e48\u4e0d\u4e86\u89e3\u4ec0\u4e48\u3002",source:"@site/docs-java/start/basic/basic.md",sourceDirName:"start/basic",slug:"/basic",permalink:"/NitWikit/Java/basic",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/start/basic/basic.md",tags:[],version:"current",lastUpdatedBy:"imgbot[bot]",lastUpdatedAt:1723099721e3,sidebarPosition:1,frontMatter:{title:"\u57fa\u7840\u77e5\u8bc6",slug:"/basic",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u59cb\u9636\u6bb5",permalink:"/NitWikit/Java/start"},next:{title:"\u4ec0\u4e48\u662f\u670d\u52a1\u7aef\uff1f",permalink:"/NitWikit/Java/start/basic/what-is-server"}},l={},u=[];function d(t){const e={h1:"h1",p:"p",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u57fa\u7840\u77e5\u8bc6",children:"\u57fa\u7840\u77e5\u8bc6"}),"\n",(0,r.jsx)(e.p,{children:"\u8003\u8651\u5230\u7b28\u86cb\u6559\u7a0b\u4e3b\u8981\u9762\u5411\u65b0\u624b\uff0c\u6211\u4eec\u65e0\u6cd5\u4e86\u89e3\u4f60\u4e86\u89e3\u4ec0\u4e48\u4e0d\u4e86\u89e3\u4ec0\u4e48\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u6587\u6863\u6682\u65f6\u5c31\u5f00\u670d\u6700\u91cd\u8981\u7684\u57fa\u7840\u6982\u5ff5\u8fdb\u884c\u4ecb\u7ecd\uff0c\u5982\u679c\u6709\u4f60\u81ea\u8ba4\u4e3a\u975e\u5e38\u4e86\u89e3\u6216\u8005\u4e0d\u91cd\u8981\u7684\u90e8\u5206\uff0c"}),"\n",(0,r.jsx)(e.p,{children:"\u8df3\u8fc7\u4ed6\u5427\uff0c\u56e0\u4e3a\u6211\u4eec\u5728\u540e\u9762\u518d\u6b21\u63d0\u5230\u8fd9\u4e9b\u6982\u5ff5\u7684\u65f6\u5019\u4f1a\u91cd\u65b0\u8df3\u8f6c\u5230\u5bf9\u5e94\u94fe\u63a5\u3002"}),"\n","\n",(0,r.jsx)(i.A,{})]})}function m(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},3514:(t,e,n)=>{n.d(e,{A:()=>b});n(96540);var r=n(34164),s=n(84142),i=n(28774),c=n(53465),o=n(16654),a=n(21312),l=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function m(t){let{href:e,children:n}=t;return(0,d.jsx)(i.A,{href:e,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(t){let{href:e,icon:n,title:s,description:i}=t;return(0,d.jsxs)(m,{href:e,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),i&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function h(t){let{item:e}=t;const n=(0,s.Nr)(e),r=function(){const{selectMessage:t}=(0,c.W)();return e=>t(e,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??r(e.items.length)}):null}function f(t){let{item:e}=t;const n=(0,o.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(e.docId??void 0);return(0,d.jsx)(p,{href:e.href,icon:n,title:e.label,description:e.description??r?.description})}function x(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(f,{item:e});case"category":return(0,d.jsx)(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function g(t){let{className:e}=t;const n=(0,s.$S)();return(0,d.jsx)(b,{items:n.items,className:e})}function b(t){const{items:e,className:n}=t;if(!e)return(0,d.jsx)(g,{...t});const i=(0,s.d1)(e);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:t})},e)))})}},53465:(t,e,n)=>{n.d(e,{W:()=>l});var r=n(96540),s=n(44586);const i=["zero","one","two","few","many","other"];function c(t){return i.filter((e=>t.includes(e)))}const o={locale:"en",pluralForms:c(["one","other"]),select:t=>1===t?"one":"other"};function a(){const{i18n:{currentLocale:t}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(t){const e=new Intl.PluralRules(t);return{locale:t,pluralForms:c(e.resolvedOptions().pluralCategories),select:t=>e.select(t)}}(t)}catch(e){return console.error(`Failed to use Intl.PluralRules for locale "${t}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${e.message}\n`),o}}),[t])}function l(){const t=a();return{selectMessage:(e,n)=>function(t,e,n){const r=t.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${t}`);const s=n.select(e),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,e,t)}}},28453:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function c(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:c(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);