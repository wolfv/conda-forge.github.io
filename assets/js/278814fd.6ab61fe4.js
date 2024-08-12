"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[7278],{11535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(85893),o=n(11151);const r={},s="Packages for Qt/PyQt 5.15.2 are now available",i={permalink:"/news/2022/04/23/packages-for-qtpyqt-5152-are-now-available",source:"@site/news/2022-04-23-packages-for-qtpyqt-5152-are-now-available.md",title:"Packages for Qt/PyQt 5.15.2 are now available",description:"After more than six months, the conda-forge team and contributors have",date:"2022-04-23T00:00:00.000Z",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Azure OSX VM Image Bumped to Version 11",permalink:"/news/2022/07/22/azure-osx-vm-image-bumped-to-version-11"},nextItem:{title:"New Semi-automated PR Labeling in conda-forge/staged-recipes",permalink:"/news/2022/04/20/new-semi-automated-pr-labeling-in-conda-forgestaged-recipes"}},c={authorsImageUrls:[]},d=[];function l(e){const t={code:"code",p:"p",...(0,o.a)(),...e.components};return(0,a.jsxs)(t.p,{children:["After more than six months, the conda-forge team and contributors have\nmanaged to update the Qt5 packages to the latest LTS version, 5.15.2.\nMajor changes include separating the package for QtWebEngine\n(",(0,a.jsx)(t.code,{children:"qt-webengine"}),") from the rest of Qt (now in a new package called\n",(0,a.jsx)(t.code,{children:"qt-main"}),"). This allows recipes that do not use any of the WebEngine\ncomponents to depend only on ",(0,a.jsx)(t.code,{children:"qt-main"}),", reducing the total size of the\ndownloaded binaries. As a result of this, ",(0,a.jsx)(t.code,{children:"qt"})," will be a metapackage\nthat installs both ",(0,a.jsx)(t.code,{children:"qt-main"})," and ",(0,a.jsx)(t.code,{children:"qt-webengine"})," as dependencies.\nWith respect to PyQt, the new packages now are in sync with respect to\ntheir corresponding PyPI releases, which means that the ",(0,a.jsx)(t.code,{children:"pyqt"})," package\nwill only provide the core components of Qt, leaving ",(0,a.jsx)(t.code,{children:"pyqtwebengine"})," and\n",(0,a.jsx)(t.code,{children:"pyqtcharts"})," as optional packages that extend PyQt by providing the\nQtWebEngine and QtCharts components, respectively. A migrator will be\nput in place to help with the transition."]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var a=n(67294);const o={},r=a.createContext(o);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);