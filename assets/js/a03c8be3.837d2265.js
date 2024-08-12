"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[8702],{22406:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(85893),r=t(11151);const i={authors:["beckermr"],tags:["security"]},s="Travis CI Security Incident",a={permalink:"/blog/2021/09/24/travis-security",editUrl:"https://github.com/wolfv/conda-forge.github.io/tree/refs/heads/main/blog/2021-09-24-travis-security.md",source:"@site/blog/2021-09-24-travis-security.md",title:"Travis CI Security Incident",description:"On September 9, 2021 one of our core devs discovered that artifacts",date:"2021-09-24T00:00:00.000Z",tags:[{inline:!0,label:"security",permalink:"/blog/tags/security"}],readingTime:1.82,hasTruncateMarker:!0,authors:[{name:"Matthew R. Becker",title:"Member of conda-forge/core",url:"https://github.com/beckermr",imageURL:"https://github.com/beckermr.png",key:"beckermr"}],frontMatter:{authors:["beckermr"],tags:["security"]},unlisted:!1,prevItem:{title:"GPU enabled TensorFlow builds on conda-forge",permalink:"/blog/2021/11/03/tensorflow-gpu"},nextItem:{title:"Contributing Packages To conda-forge Using Grayskull",permalink:"/blog/2021/06/16/graykull-step-by-step"}},c={authorsImageUrls:[void 0]},d=[{value:"Our Response",id:"our-response",level:2},{value:"Closing Thoughts &amp; What can you do?",id:"closing-thoughts--what-can-you-do",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["On September 9, 2021 one of our core devs discovered that artifacts\nbuilding on Travis CI were being uploaded to our conda channel from PRs\nrunning on forked repositories. A quick investigation revealed that\nTravis CI was passing encrypted secrets to PR builds on forks. Further\nexamination of our logs and artifacts indicated that this had been\nhappening since about September 3, 2021. This security bug was\nsubsequently confirmed by Travis CI. See this\n",(0,o.jsx)(n.a,{href:"https://nvd.nist.gov/vuln/detail/CVE-2021-41077",children:"CVE"})," for more details\non this incident. ",(0,o.jsx)(n.strong,{children:"As far as we know, there were no actual exploits\nagainst conda-forge which used this vulnerability."})]}),"\n",(0,o.jsx)(n.h2,{id:"our-response",children:"Our Response"}),"\n",(0,o.jsx)(n.p,{children:"We took the following steps to respond to this incident."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"We immediately turned off all builds on Travis CI by suspending the\nTravis CI GitHub App."}),"\n",(0,o.jsx)(n.li,{children:"We immediately disclosed the bug to Travis CI through our contacts\nthere."}),"\n",(0,o.jsxs)(n.li,{children:["Once Travis CI indicated to us that they were ready, we rotated all\nfeedstock tokens and later our anaconda.org token for our staging\nchannel. The anaconda.org token for the main ",(0,o.jsx)(n.code,{children:"conda-forge"})," channel\nwas never disclosed in this incident. Further, only ~70 feedstocks\nhad their tokens exposed in this incident."]}),"\n",(0,o.jsx)(n.li,{children:"We examined our artifacts and marked as broken any artifacts that\nwere uploaded from PRs. We think we found everything, but we are not\ncompletely sure. Our criterion for marking things broken was more\ngenerous than it needed to be."}),"\n",(0,o.jsx)(n.li,{children:"We issued PRs to rebuild any broken artifacts via our bots."}),"\n",(0,o.jsxs)(n.li,{children:["We put in changes to ",(0,o.jsx)(n.code,{children:"conda-smithy"})," to help prevent inadvertent\nuploads of artifacts from PRs in the future."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"closing-thoughts--what-can-you-do",children:"Closing Thoughts & What can you do?"}),"\n",(0,o.jsxs)(n.p,{children:["I (MRB) want to recognize the quick work of our core dev team in\nhandling this incident. It goes without saying that the public nature of\n",(0,o.jsx)(n.code,{children:"conda-forge"}),"'s infrastructure carries risks. On the other hand, by\nbeing public, anyone can look and verify our artifact builds. Security\nfor ",(0,o.jsx)(n.code,{children:"conda-forge"})," is about reducing risk and we will continue to do our\nbest."]}),"\n",(0,o.jsxs)(n.p,{children:["Our best defense against security incidents in ",(0,o.jsx)(n.code,{children:"conda-forge"})," is ",(0,o.jsx)(n.em,{children:"you"}),"!\nOur feedstock maintainers are in the best position to notice incidents\nand issues. Please responsibly report anything you find to us at\n",(0,o.jsx)(n.code,{children:"condaforge+security@gmail.com"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(67294);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);