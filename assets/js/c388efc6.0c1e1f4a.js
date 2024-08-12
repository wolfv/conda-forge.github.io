"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[3714],{99486:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var a=t(85893),o=t(11151);const s={authors:["isuruf"],tags:["infrastructure"]},r="PyPy builds on conda-forge",i={permalink:"/blog/2020/03/10/pypy",editUrl:"https://github.com/wolfv/conda-forge.github.io/tree/refs/heads/main/blog/2020-03-10-pypy.md",source:"@site/blog/2020-03-10-pypy.md",title:"PyPy builds on conda-forge",description:"conda-forge now supports PyPy3.6 as the python interpreter in a conda",date:"2020-03-10T00:00:00.000Z",tags:[{inline:!0,label:"infrastructure",permalink:"/blog/tags/infrastructure"}],readingTime:2.335,hasTruncateMarker:!0,authors:[{name:"Isuru Fernando",title:"Member of conda-forge/core",url:"https://github.com/isuruf",imageURL:"https://github.com/isuruf.png",key:"isuruf"}],frontMatter:{authors:["isuruf"],tags:["infrastructure"]},unlisted:!1,prevItem:{title:"Conda-Forge Operational Risk",permalink:"/blog/2020/07/02/op-risk"},nextItem:{title:"By the power of Grayskull... I have the Conda recipe!",permalink:"/blog/2020/03/05/grayskull"}},c={authorsImageUrls:[void 0]},h=[{value:"How to use PyPy",id:"how-to-use-pypy",level:2},{value:"python_abi Package",id:"python_abi-package",level:2}];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"conda-forge now supports PyPy3.6 as the python interpreter in a conda\nenvironment"}),"\n",(0,a.jsx)(e.p,{children:"Supported platforms are,"}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Linux-x86_64 (glibc 2.12 or newer)"}),"\n",(0,a.jsx)(e.li,{children:"OSX-x86_64 (OSX 10.9 or newer)"}),"\n",(0,a.jsx)(e.li,{children:"Linux-aarch64 (glibc 2.17 or newer)"}),"\n",(0,a.jsx)(e.li,{children:"Linux-ppc64le (glibc 2.17 or newer)"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"how-to-use-pypy",children:"How to use PyPy"}),"\n",(0,a.jsx)(e.p,{children:"To use the PyPy builds you can do the following,"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"conda config --set channel_priority strict\nconda create -n pypy pypy\nconda activate pypy\n"})}),"\n",(0,a.jsxs)(e.p,{children:["If you don't have a conda installation already, you can use\n",(0,a.jsx)(e.a,{href:"https://github.com/conda-forge/miniforge#miniforge-pypy3",children:"miniforge-pypy3"}),"\nwhich gives you a conda installation powered by pypy itself."]}),"\n",(0,a.jsx)(e.p,{children:"However as of the writing of this post, not many conda packages can be\ninstalled into this environment, but noarch packages which do not depend\non the python version nor the interpreter can be installed. For eg,\nmpmath is a noarch package without any dependencies."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"conda install mpmath    # succeeds\nconda install numpy     # fails as of March 10, 2020\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"UPDATE"}),": numpy and scipy builds are working as of April 10, 2020."]}),"\n",(0,a.jsxs)(e.p,{children:["All python C extensions needs to be rebuilt for the PyPy ABI. This is\ncurrently on the way and can be tracked at the ",(0,a.jsx)(e.a,{href:"https://conda-forge.org/status",children:"status\npage"}),"."]}),"\n",(0,a.jsx)(e.h2,{id:"python_abi-package",children:"python_abi Package"}),"\n",(0,a.jsx)(e.p,{children:"As part of adding support for PyPy and to keep the older python builds\nworking, a python_abi package was added. This defines the abi for the\npython package and any non-noarch python packages will have a dependency\non this package. Older python downstream packages like numpy had their\nmetadata patched to add a CPython ABI. You can ask for a specific python\nABI."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'conda install "python_abi=*=*_cp27mu"\n'})}),"\n",(0,a.jsx)(e.p,{children:"If you are using python packages from packages other than defaults, you\nwill be able to install python extensions built with CPython ABI into\nPyPy builds as their metadata have not been patched. Solution in this\ncase is to hotfix the metadata which is available to only high volume\nconda channel or to rebuild those packages with the new python packages\nand mark the older ones as broken."}),"\n",(0,a.jsx)(e.p,{children:"Using the newer packages will rerender the following requirement to add\na dependency on python_abi. For eg,"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-yaml",children:"requirements:\n  host:\n    - python 3.6\n  run:\n    - python\n"})}),"\n",(0,a.jsx)(e.p,{children:"is rendered as,"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-yaml",children:"requirements:\n  host:\n    - python 3.6.10 h9d8adfe_1009_cpython\n  run:\n    - python >=3.6,<3.7.0a0\n    - python_abi 3.6 *_cp36m\n"})}),"\n",(0,a.jsx)(e.p,{children:"whereas,"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-yaml",children:"requirements:\n  host:\n    - python 3.6 *_73_pypy\n  run:\n    - python\n"})}),"\n",(0,a.jsx)(e.p,{children:"is rendered as,"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-yaml",children:"requirements:\n  host:\n    - python 3.6.9 0_73_pypy\n  run:\n    - python >=3.6,<3.7.0a0\n    - python_abi 3.6 *_pypy36_pp73\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Note that the PyPy ABI tag has ",(0,a.jsx)(e.code,{children:"pp73"})," at the end which\nindicates that the ABI is stable only for PyPy3.6 7.3.x series."]}),"\n",(0,a.jsx)(e.p,{children:"This opens up the possibility of adding debug builds of python and\nbuilding extension packages using the Python Debug ABI."}),"\n",(0,a.jsxs)(e.p,{children:["Discussion on the PyPy builds can be found in the issue\n",(0,a.jsx)(e.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/867",children:"conda-forge/conda-forge.github.io#867"}),"."]})]})}function p(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>r});var a=t(67294);const o={},s=a.createContext(o);function r(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);