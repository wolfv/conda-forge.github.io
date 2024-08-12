"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[7311],{64723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var i=n(85893),o=n(11151);const a={authors:["cj-wright","beckermr"],tags:["scipy"]},r="R 4.0 Migration Retrospective",s={permalink:"/blog/2020/07/11/r-4",editUrl:"https://github.com/wolfv/conda-forge.github.io/tree/refs/heads/main/blog/2020-07-11-r-4.md",source:"@site/blog/2020-07-11-r-4.md",title:"R 4.0 Migration Retrospective",description:"While the R 4.0 migration has been functionally complete for quite a",date:"2020-07-11T00:00:00.000Z",tags:[{inline:!0,label:"scipy",permalink:"/blog/tags/scipy"}],readingTime:5.15,hasTruncateMarker:!0,authors:[{name:"Christopher J. 'CJ' Wright",title:"Member of conda-forge/core",url:"https://github.com/cj-wright",imageURL:"https://github.com/cj-wright.png",key:"cj-wright"},{name:"Matthew R. Becker",title:"Member of conda-forge/core",url:"https://github.com/beckermr",imageURL:"https://github.com/beckermr.png",key:"beckermr"}],frontMatter:{authors:["cj-wright","beckermr"],tags:["scipy"]},unlisted:!1,prevItem:{title:"The API Territory and Version Number Map",permalink:"/blog/2020/10/02/versions"},nextItem:{title:"Scipy 2020 Packaging BOF",permalink:"/blog/2020/07/06/scipy-bof"}},c={authorsImageUrls:[void 0,void 0]},h=[{value:"Automerging conda-forge PRs",id:"automerging-conda-forge-prs",level:2},{value:"Checking Solvability with mamba",id:"checking-solvability-with-mamba",level:2},{value:"Improving the Autotick Bot&#39;s Efficiency",id:"improving-the-autotick-bots-efficiency",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["While the R 4.0 migration has been functionally complete for quite a\nwhile, the recent migration of ",(0,i.jsx)(t.code,{children:"r-java"})," and its dependents gives a good\nopportunity to write a retrospective on the technical issues with\nlarge-scale migrations in ",(0,i.jsx)(t.code,{children:"conda-forge"})," and how we solved them."]}),"\n",(0,i.jsxs)(t.p,{children:["The R 4.0 migration rebuilt every package in ",(0,i.jsx)(t.code,{children:"conda-forge"})," that had\n",(0,i.jsx)(t.code,{children:"r-base"})," as a requirement, including more than 2200 feedstocks. A\nmigration of this size in ",(0,i.jsx)(t.code,{children:"conda-forge"})," faces several hurdles. First,\nsince every feedstock is a separate GitHub repository, one needs to\nmerge more 2200 pull requests (PRs). Second, ",(0,i.jsx)(t.code,{children:"conda-forge"}),"'s packages\non ",(0,i.jsx)(t.code,{children:"anaconda.org"})," are behind a CDN (content delivery network). This\nservice reduces web hosting costs for Anaconda Inc. but introduces an\napproximately 30 minute delay from when a package is uploaded to\n",(0,i.jsx)(t.code,{children:"anaconda.org"})," and when it will appear as available using ",(0,i.jsx)(t.code,{children:"conda"})," from\nthe command line. Thus, even if the dependencies of a package have been\nbuilt, we have to wait until they appear on the CDN before we can\nsuccessfully issue the next PR and have it build correctly. Finally, the\nexisting bot and ",(0,i.jsx)(t.code,{children:"conda"})," infrastructure limited the throughput of the\nmigrations, due in part to the speed of the ",(0,i.jsx)(t.code,{children:"conda"})," solver."]}),"\n",(0,i.jsxs)(t.p,{children:["Given the size of the R 4.0 migration, we took this opportunity to try\nout a bunch of new technology to speed up large-scale migrations. The\nmain enhancements were using GitHub Actions to automerge PRs, using\n",(0,i.jsx)(t.code,{children:"mamba"})," to quickly check for solvability of package environments, and\nenabling long-running migration jobs for the autotick bot. All told, the\nbulk of the feedstocks for R 4.0 were rebuilt in less than a week, with\nmany PRs being merged in 30 minutes or less from when they were issued.\nThese enhancements to the autotick bot and ",(0,i.jsx)(t.code,{children:"conda-forge"})," infrastructure\ncan be used to enhance future migrations (e.g., Python 3.9) and reduce\nmaintenance burdens for feedstocks."]}),"\n",(0,i.jsx)(t.h2,{id:"automerging-conda-forge-prs",children:"Automerging conda-forge PRs"}),"\n",(0,i.jsxs)(t.p,{children:["In a typical migration on ",(0,i.jsx)(t.code,{children:"conda-forge"}),", we issue a PR to a feedstock\nand then ask the feedstock maintainers to make sure it passes and merge\nit. In the case of the R 4.0 migration, the maintainers of R packages on\n",(0,i.jsx)(t.code,{children:"conda-forge"})," use a maintenance team (i.e., ",(0,i.jsx)(t.code,{children:"@conda-forge/r"}),") on the\nvast majority of feedstocks. This team is small and so merging over 2000\nPRs by hand is a big undertaking. Thus, with their permission, we added\nthe ",(0,i.jsx)(t.code,{children:"conda-forge"})," automerge functionality to all R feedstocks that they\nmaintain. The automerge bot, which relies on GitHub Actions, is able to\nautomatically merge any PR from the autotick bot that passes the recipe\nlinter, the continuous integration services, and has the special\n",(0,i.jsx)(t.code,{children:"[bot automerge]"})," slug in the PR title. This feature removed the\nbottleneck of waiting for maintainers to merge PRs and reduced the\nmaintenance burden on the R maintenance team."]}),"\n",(0,i.jsx)(t.h2,{id:"checking-solvability-with-mamba",children:"Checking Solvability with mamba"}),"\n",(0,i.jsx)(t.p,{children:"While being able to automatically merge PRs removed much of the work of\nperforming the R 4.0 migration, it relied on the PR building correctly\nthe first time it was issued. Due to the CDN delays and the build times\nof a package's dependencies, the dependencies of a package may not be\nimmediately available after all of their migration PRs are merged. If\nthe bot issued the packages migration PR before the dependents are\navailable, the PR would fail with an unsolvable environment and have to\nbe restarted manually. This failure would negate any of the benefits of\nusing automerge in the first place."}),"\n",(0,i.jsxs)(t.p,{children:["To control for this edge case, we employed the ",(0,i.jsx)(t.code,{children:"mamba"})," package to check\nfor the solvability of a PR's environments before the PR was issued.\n",(0,i.jsx)(t.code,{children:"mamba"})," is a fast alternative to ",(0,i.jsx)(t.code,{children:"conda"})," that produces solutions for\nenvironments orders of magnitude more quickly. Since, we have to perform\nour checks of PR environments many times, an extremely fast solver was\nessential for making the code efficient enough to run as part of the\nautotick bot. We ended up using mamba to try to install the dependencies\nfor every variant produced by the feedstock to be migrated. With this\ncheck in place, the autotick bot was able to issue migration PRs that\npassed on the first try and were thus automatically merged, many within\n30 minutes or less."]}),"\n",(0,i.jsx)(t.h2,{id:"improving-the-autotick-bots-efficiency",children:"Improving the Autotick Bot's Efficiency"}),"\n",(0,i.jsx)(t.p,{children:"Finally, we made several upgrades to the autotick bot infrastructure to\nincrease the uptime of the bot and its efficiency. First, we moved from\nan hourly cron job to a set of chained CI jobs. This change eliminated\ndowntime between the runs of the bot. Second, we started to refactor the\nautotick bot from one monolithic piece of code into a distributed set of\nmicroservices which perform various independent tasks in parallel. These\nindependent tasks, used for things like checking the statuses of\npreviously issued PRs, are run separately allowing the bot to spend more\ntime issuing PRs. Finally, we optimized the internal prioritization of\nthe PRs to make sure the bot was spending more time on larger migrations\nwhere there is more work to do. More work on the autotick bot\ninfrastructure, including work done by Vinicius Cerutti as part of the\nGoogle Summer of Code program, will further streamline the bot's\noperation."}),"\n",(0,i.jsxs)(t.p,{children:["Despite some initial hiccups with the bot infrastructure, the migration\nran quite smoothly for an endeavor of its size. The vast majority of\nmigration PRs were completed within a week from when we started, which\nis a first for a migration of this size on ",(0,i.jsx)(t.code,{children:"conda-forge"}),". The largest\nissue was solved recently, with the fixing of the ",(0,i.jsx)(t.code,{children:"openjdk"})," recipe and\nthe removal of ",(0,i.jsx)(t.code,{children:"aarch64"})," and ",(0,i.jsx)(t.code,{children:"ppc64le"})," builds from ",(0,i.jsx)(t.code,{children:"r-java"}),", enabling\nthe last large piece of the R ecosystem to be updated."]}),"\n",(0,i.jsxs)(t.p,{children:["Looking forward, the improvements we made for the R 4.0 migration seem\nbroadly applicable to other migration tasks, including the yearly python\nminor version bump. These kinds of large-scale migrations are\nparticularly suitable, since they usually involve few changes to the\nfeedstock itself and usually fail on CI when a broken package would be\nproduced. Faster migrations will help to provide the latest features to\ndownstream users and keep transition times to a minimum, helping to\nfoster greater stability of the ecosystem and the seamless experience\nusers have come to expect from ",(0,i.jsx)(t.code,{children:"conda-forge"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var i=n(67294);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);