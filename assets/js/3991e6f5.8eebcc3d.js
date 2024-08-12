"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[4966],{14655:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=o(85893),s=o(11151);const r={authors:["ocefpaf"],tags:["autotick-bot","gsoc"]},i="Google Summer of Code 2020 improved automatic maintenance of conda-forge",a={permalink:"/blog/2020/02/04/gsoc",editUrl:"https://github.com/wolfv/conda-forge.github.io/tree/refs/heads/main/blog/2020-02-04-gsoc.md",source:"@site/blog/2020-02-04-gsoc.md",title:"Google Summer of Code 2020 improved automatic maintenance of conda-forge",description:'The conda-forge "autotick" bot is a crucial part of conda-forge\'s',date:"2020-02-04T00:00:00.000Z",tags:[{inline:!0,label:"autotick-bot",permalink:"/blog/tags/autotick-bot"},{inline:!0,label:"gsoc",permalink:"/blog/tags/gsoc"}],readingTime:2.98,hasTruncateMarker:!0,authors:[{name:"Filipe Pires Alvarenga Fernandes",title:"Member of conda-forge/core",url:"https://github.com/ocefpaf",imageURL:"https://github.com/ocefpaf.png",key:"ocefpaf"}],frontMatter:{authors:["ocefpaf"],tags:["autotick-bot","gsoc"]},unlisted:!1,prevItem:{title:"By the power of Grayskull... I have the Conda recipe!",permalink:"/blog/2020/03/05/grayskull"},nextItem:{title:"Automatically Deployed ABI Migrations",permalink:"/blog/2019/12/06/cfep09"}},c={authorsImageUrls:[void 0]},d=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"conda-forge"}),' "autotick" bot is a crucial part of ',(0,t.jsx)(n.code,{children:"conda-forge"}),"'s\ninfrastructure. It enables automatic maintenance of ",(0,t.jsx)(n.code,{children:"conda-forge"}),"\npackages by pushing version updates to the underlying software and\nenabling large migrations of packages from one dependency to another\n(e.g., Python 3.7 to Python 3.8). As ",(0,t.jsx)(n.code,{children:"conda-forge"})," grows in size, with\nover 9,000 packages to date, automatic maintenance of the ",(0,t.jsx)(n.code,{children:"conda-forge"}),"\necosystem will become even more important."]}),"\n",(0,t.jsxs)(n.p,{children:["We here at ",(0,t.jsx)(n.code,{children:"conda-forge"})," have a large number of potential Google Sumer\nof Code projects around maintenance and development of the autotick bot\ninfrastructure. These projects are high-impact, affecting the entire\n",(0,t.jsx)(n.code,{children:"conda-forge"})," ecosystem. They also cover multiple systems including\ndatabases, ",(0,t.jsx)(n.code,{children:"conda"}),"'s CDN provider, continuous integration providers,\nand user interactions on GitHub."]}),"\n",(0,t.jsxs)(n.p,{children:["Want to be a part of the team? Great! Take a look at the projects below\nand get in touch with us on GitHub! You can check the ",(0,t.jsx)(n.a,{href:"https://github.com/regro/cf-scripts/labels/GSOC",children:"GSoC\nlabel"})," for a\ndetailed listing of the issues that need work."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Maintenance and Refactoring"}),"\n",(0,t.jsx)(n.p,{children:"We have a large backlog of maintenance and refactoring issues that\nare great for people with a range of experience from beginners to\ntrue code ninjas."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Integration Testing for the Autotick Bot"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Run true integration testing on a copy of the graph to better\ntest code changes and improve our CI process."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Issue"}),": ",(0,t.jsx)(n.a,{href:"https://github.com/regro/cf-scripts/issues/261",children:"regro/cf-scripts261"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Experience Level"}),": advanced"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['Work on the "code hardening"\n',(0,t.jsx)(n.a,{href:"https://github.com/regro/cf-scripts/milestone/4",children:"Milestone"})]}),"\n",(0,t.jsx)(n.p,{children:"Address any of the issues in the milestone above related to code\nrefactoring and cleanup."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Issues"}),": ",(0,t.jsx)(n.a,{href:"https://github.com/regro/cf-scripts/milestone/4",children:"regro/cf-scripts milestone #4"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Experience Level"}),": beginner to advanced"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Automated PRs for Globally Pinned Packages"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"conda-forge"})," maintains a list of globally pinned packages. These\nare typically dependencies whose version needs to be the same across\nall of ",(0,t.jsx)(n.code,{children:"conda-forge"})," (e.g., the compiler versions or packages like\n",(0,t.jsx)(n.code,{children:"HDF5"}),"). While we have infrastructure to run a migration of the\ndownstream packages from a given pinned package, we do not have\nautomated infrastructure to propose the migration of the pin itself.\nThe project here is to add this functionality to our infrastructure."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Issue"}),": ",(0,t.jsx)(n.a,{href:"https://github.com/regro/cf-scripts/issues/665",children:"regro/cf-scripts#665"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Experience Level"}),": advanced"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Check the ",(0,t.jsx)(n.code,{children:"conda"})," CDN for Updated Packages before Issuing PRs in a\nMigration"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"conda"})," relies on a CDN provider to serve the index of available\npackages. There is a moderate ~30 minute delay between when a\npackage is uploaded to ",(0,t.jsx)(n.code,{children:"anaconda.org"})," and when it will appear in the\n",(0,t.jsx)(n.code,{children:"conda"})," index. We currently do not take this delay into account when\nissuing PRs in a migration."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Issue"}),": ",(0,t.jsx)(n.a,{href:"https://github.com/regro/cf-scripts/issues/595",children:"regro/cf-scripts#595"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Experience Level"}),": beginner"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Finish Migrations with PR into the ",(0,t.jsx)(n.code,{children:"conda-forge"})," Pinnings File"]}),"\n",(0,t.jsxs)(n.p,{children:["Right now, when the migration of say package ",(0,t.jsx)(n.code,{children:"ABC"})," to version ",(0,t.jsx)(n.code,{children:"X"}),"\nfrom version ",(0,t.jsx)(n.code,{children:"Y"})," is done, we do not automatically merge the change\nin the globally pinned value of ",(0,t.jsx)(n.code,{children:"ABC"})," into our listing of global\npinnings. We should be issuing a PR to the pinnings file once we\nhave determined that a suitable fraction of the packages effected by\na migration have been properly rebuilt."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Issue"}),": ",(0,t.jsx)(n.a,{href:"https://github.com/regro/cf-scripts/issues/595",children:"regro/cf-scripts#595"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Experience Level"}),": moderate"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Fully Render ",(0,t.jsx)(n.code,{children:"conda"})," Packages in order to Determine Migration\nDependencies"]}),"\n",(0,t.jsxs)(n.p,{children:["Determining the dependencies of a given package is actually a\ncomputation expensive task due to the way ",(0,t.jsx)(n.code,{children:"conda"})," recipes are\nstructured and parametrized through the use of ",(0,t.jsx)(n.code,{children:"Jinja2"})," and\n",(0,t.jsx)(n.code,{children:"conda-build-config.yaml"})," files. Currently, the autotick bot\nexamines the static metadata in the ",(0,t.jsx)(n.code,{children:"meta.yaml"})," file and not the\nfully rendered metadata. For this reason, we sometimes miss\ndependencies of a given package that need to be migrated first.\nAddressing this issue involves both calling the rendering process\nand also scaling that process to the entire set of ",(0,t.jsx)(n.code,{children:"conda-forge"}),"\npackages."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Issue"}),": ",(0,t.jsx)(n.a,{href:"https://github.com/regro/cf-scripts/issues/664",children:"regro/cf-scripts#664"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Experience Level"}),": moderate"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>i});var t=o(67294);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);