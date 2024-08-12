"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[7517],{5627:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var i=a(85893),o=a(11151);const t={title:"FAQ"},s="FAQ",r={id:"maintainer/maintainer_faq",title:"FAQ",description:"Why does conda-build ignore the py37 selector in meta.yaml?",source:"@site/docs/maintainer/maintainer_faq.md",sourceDirName:"maintainer",slug:"/maintainer/maintainer_faq",permalink:"/docs/maintainer/maintainer_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wolfv/conda-forge.github.io/tree/refs/heads/main/docs/maintainer/maintainer_faq.md",tags:[],version:"current",lastUpdatedAt:1723478615e3,frontMatter:{title:"FAQ"},sidebar:"docs",previous:{title:"Knowledge Base",permalink:"/docs/maintainer/knowledge_base"},next:{title:"Glossary",permalink:"/docs/glossary"}},d={},c=[{value:"Why does conda-build ignore the <code>py37</code> selector in meta.yaml?",id:"why-does-conda-build-ignore-the-py37-selector-in-metayaml",level:2},{value:"What do build numbers above 1000 signify? How do I treat them?",id:"what-do-build-numbers-above-1000-signify-how-do-i-treat-them",level:2},{value:"How to fix CMake not finding MSBuild.exe on Azure Windows builds?",id:"how-to-fix-cmake-not-finding-msbuildexe-on-azure-windows-builds",level:2},{value:"Why does my new version appear on Anaconda Cloud, but is not installable with conda?",id:"why-does-my-new-version-appear-on-anaconda-cloud-but-is-not-installable-with-conda",level:2},{value:"How can I make local debugging faster?",id:"how-can-i-make-local-debugging-faster",level:2},{value:"I am seeing <code>Importing conda-verify failed.</code> error message during build. What do I do?",id:"i-am-seeing-importing-conda-verify-failed-error-message-during-build-what-do-i-do",level:2},{value:"When the bot creates a pull request to a feedstock to update the version, should I approve the pull request and wait with merging until everybody else that is a code owner has approved the PR?",id:"when-the-bot-creates-a-pull-request-to-a-feedstock-to-update-the-version-should-i-approve-the-pull-request-and-wait-with-merging-until-everybody-else-that-is-a-code-owner-has-approved-the-pr",level:2},{value:"How to fix &quot;build-locally.py fails with exit code 139&quot;?",id:"how-to-fix-build-locallypy-fails-with-exit-code-139",level:2},{value:"Is it necessary for me to be an upstream maintainer of the package I submit to conda-forge?",id:"is-it-necessary-for-me-to-be-an-upstream-maintainer-of-the-package-i-submit-to-conda-forge",level:2},{value:"How do I fix the <code>libGL.so.1</code> import error?",id:"how-do-i-fix-the-libglso1-import-error",level:2},{value:"How can I fix the <code>The Qt platform plugin &quot;xcb&quot; could not be loaded</code> error during testing?",id:"how-can-i-fix-the-the-qt-platform-plugin-xcb-could-not-be-loaded-error-during-testing",level:2},{value:"How can I contact conda-forge/core?",id:"how-can-i-contact-conda-forgecore",level:2},{value:"A feedstock has been abandoned and I would like to take over maintenance.",id:"a-feedstock-has-been-abandoned-and-i-would-like-to-take-over-maintenance",level:2},{value:"Does conda-forge ever make significant changes or apply code patches to significant upstream packages?",id:"does-conda-forge-ever-make-significant-changes-or-apply-code-patches-to-significant-upstream-packages",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"faq"})}),"\n",(0,i.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"mfaq-py37-selector"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"why-does-conda-build-ignore-the-py37-selector-in-meta-yaml"})}),"\n",(0,i.jsxs)(n.h2,{id:"why-does-conda-build-ignore-the-py37-selector-in-metayaml",children:["Why does conda-build ignore the ",(0,i.jsx)(n.code,{children:"py37"})," selector in meta.yaml?"]}),"\n",(0,i.jsxs)(n.p,{children:["TL;DR: replace ",(0,i.jsx)(n.code,{children:"py37"})," with ",(0,i.jsx)(n.code,{children:"py==37"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["conda-build has changed the selector syntax.\nYou are now encouraged to use ",(0,i.jsx)(n.code,{children:"py==<version>"}),", instead of ",(0,i.jsx)(n.code,{children:"py<version>"}),".\nWhile the legacy selectors ",(0,i.jsx)(n.code,{children:"py27"})," and ",(0,i.jsx)(n.code,{children:"py36"})," are still valid, selectors ",(0,i.jsx)(n.code,{children:"py37"})," and higher are no longer valid."]}),"\n",(0,i.jsxs)(n.p,{children:["Please use the new syntax ",(0,i.jsx)(n.code,{children:"py==27"}),", ",(0,i.jsx)(n.code,{children:"py==36"})," and ",(0,i.jsx)(n.code,{children:"py==37"})," to avoid confusion."]}),"\n",(0,i.jsx)(n.admonition,{title:"Related links",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Selectors in conda-build documentation"})," (",(0,i.jsx)(n.a,{href:"https://docs.conda.io/projects/conda-build/en/stable/resources/define-metadata.html#preprocessing-selectors",children:"Preprocessing selectors"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Linter: deprecate the use of py27, py36"})," (",(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/conda-smithy/issues/1026",children:"conda-smithy/#1026"}),")"]}),"\n"]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"mfaq-build-number-1000"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"what-do-build-numbers-above-1000-signify-how-do-i-treat-them"})}),"\n",(0,i.jsx)(n.h2,{id:"what-do-build-numbers-above-1000-signify-how-do-i-treat-them",children:"What do build numbers above 1000 signify? How do I treat them?"}),"\n",(0,i.jsx)(n.p,{children:"TL;DR: there is no need for build numbers larger than 1000 anymore."}),"\n",(0,i.jsx)(n.p,{children:"When you update a feedstock that still uses build numbers > 1000, the following rules apply:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When you increase the version, reset the build number back to 0 (e.g. ",(0,i.jsx)(n.code,{children:"1005 -> 0"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["When the version stays the same and you need to upload a new package, increase the build number by 1 (e.g. ",(0,i.jsx)(n.code,{children:"1005 -> 1006"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Backstory:"})," Build numbers of 1000 and larger are a relic from the compiler migration, where a build number offset of 1000 signified that a package was migrated to the new compilers.\nSince the completion of the compiler migration, this offsetting is not needed anymore.\nHowever, we cannot simply subtract the offset without updating the version, due to higher build numbers being preferred by the solver.\nTherefore build numbers above 1000 will gradually vanish as packages get updated to newer versions."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"mfaq-windows-cmake"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"how-to-fix-cmake-not-finding-msbuild-exe-on-azure-windows-builds"})}),"\n",(0,i.jsx)(n.h2,{id:"how-to-fix-cmake-not-finding-msbuildexe-on-azure-windows-builds",children:"How to fix CMake not finding MSBuild.exe on Azure Windows builds?"}),"\n",(0,i.jsxs)(n.p,{children:["TL;DR: Use ",(0,i.jsx)(n.code,{children:"Ninja"})," or ",(0,i.jsx)(n.code,{children:"NMake Makefiles JOM"})," as the CMake generator (",(0,i.jsx)(n.code,{children:'cmake -G"Ninja"'}),"), and add ",(0,i.jsx)(n.code,{children:"build"})," requirements for ",(0,i.jsx)(n.code,{children:"ninja"})," or ",(0,i.jsx)(n.code,{children:"jom"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Sadly in the Azure Windows images, MSBuild.exe is not correctly setup for CMake builds with the ",(0,i.jsx)(n.code,{children:"Visual Studio"})," generators. To work around this, you can use a different CMake generator, e.g. ",(0,i.jsx)(n.code,{children:"cmake -GNinja"})," or ",(0,i.jsx)(n.code,{children:'cmake -G"NMake Makefiles JOM"'}),". These two are preferred because they allow for concurrent builds in contrast to e.g. only using ",(0,i.jsx)(n.code,{children:'cmake -G"NMake Makefiles"'})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"mfaq-anaconda-delay"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"why-does-my-new-version-appear-on-anaconda-cloud-but-is-not-installable-with-conda"})}),"\n",(0,i.jsx)(n.h2,{id:"why-does-my-new-version-appear-on-anaconda-cloud-but-is-not-installable-with-conda",children:"Why does my new version appear on Anaconda Cloud, but is not installable with conda?"}),"\n",(0,i.jsxs)(n.p,{children:["For certain, high-traffic channels (main & conda-forge), Anaconda uses a ",(0,i.jsx)(n.a,{href:"https://cloudflare.com/learning/cdn/what-is-a-cdn/",children:"CDN"})," to decrease costs. Therefore, packages will show up on the ",(0,i.jsx)(n.a,{href:"https://anaconda.org",children:"Anaconda Cloud"})," about 10 minutes before they are downloadable via conda. You can use ",(0,i.jsx)(n.code,{children:"conda search <pkg>"})," to see if the package is installable, because this command reads from the CDN."]}),"\n",(0,i.jsxs)(n.p,{children:["If the CDN sync is not happening timely, please check the ",(0,i.jsx)(n.a,{href:"https://conda-forge.org/status/",children:"status page"})," for the CDN cloning status and see if any problem occurs. If the clone is not sync'ing, you can open a CDN Issue in the ",(0,i.jsx)(n.a,{href:"https://github.com/ContinuumIO/anaconda-issues",children:"Anaconda Issues repo"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"mfaq-mamba-local"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"how-can-i-make-local-debugging-faster"})}),"\n",(0,i.jsx)(n.h2,{id:"how-can-i-make-local-debugging-faster",children:"How can I make local debugging faster?"}),"\n",(0,i.jsxs)(n.p,{children:["If you prefer to debug your recipes locally and not use the provided ",(0,i.jsx)(n.a,{href:"/docs/maintainer/updating_pkgs#testing-changes-locally",children:"scripts"})," but instead your own setup, you may also use the mamba solver through ",(0,i.jsx)(n.code,{children:"mambabuild"}),". It not only has a faster solve speed but also prints better error messages that make debugging simpler."]}),"\n",(0,i.jsx)(n.p,{children:"To do this, first install the solver and then build the recipe like you normally would"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"conda install boa -c conda-forge"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"conda mambabuild myrecipe"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more details visit ",(0,i.jsx)(n.a,{href:"https://boa-build.readthedocs.io/en/stable/mambabuild.html",children:"this"})," page."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"mfaq-conda-verify"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"i-am-seeing-importing-conda-verify-failed-error-message-during-build-what-do-i-do"})}),"\n",(0,i.jsxs)(n.h2,{id:"i-am-seeing-importing-conda-verify-failed-error-message-during-build-what-do-i-do",children:["I am seeing ",(0,i.jsx)(n.code,{children:"Importing conda-verify failed."})," error message during build. What do I do?"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"Importing conda-verify failed. Please be sure to test your packages. conda install conda-verify to make this message go away.\n"})}),"\n",(0,i.jsx)(n.p,{children:"You are seeing this error message because by default, conda-build uses conda-verify to ensure that your recipe and package meet some minimum sanity checks.\nThis message can be safely ignored as conda-forge doesn't use conda-verify."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"mfaq-version-update"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"when-the-bot-creates-a-pull-request-to-a-feedstock-to-update-the-version-should-i-approve-the-pull-request-and-wait-with-merging-until-everybody-else-that-is-a-code-owner-has-approved-the-pr"})}),"\n",(0,i.jsx)(n.h2,{id:"when-the-bot-creates-a-pull-request-to-a-feedstock-to-update-the-version-should-i-approve-the-pull-request-and-wait-with-merging-until-everybody-else-that-is-a-code-owner-has-approved-the-pr",children:"When the bot creates a pull request to a feedstock to update the version, should I approve the pull request and wait with merging until everybody else that is a code owner has approved the PR?"}),"\n",(0,i.jsx)(n.p,{children:"There is no need to approve the PR. Every maintainer can verify and merge the bot PR without waiting on the approval of the other maintainers."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"mfaq-docker-139"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"how-to-fix-build-locally-py-fails-with-exit-code-139"})}),"\n",(0,i.jsx)(n.h2,{id:"how-to-fix-build-locallypy-fails-with-exit-code-139",children:'How to fix "build-locally.py fails with exit code 139"?'}),"\n",(0,i.jsxs)(n.p,{children:["With Linux Kernel 4.11 there were some changes in the ",(0,i.jsx)(n.code,{children:"vsyscall"})," linking. Depending on your distribution this may cause the above error. You can fix that on Debian by editing ",(0,i.jsx)(n.code,{children:"/etc/default/grub"})," and specifiy ",(0,i.jsx)(n.code,{children:'GRUB_CMDLINE_LINUX_DEFAULT="vsyscall=emulate"'})," in this file. Afterwards, you need to run ",(0,i.jsx)(n.code,{children:"update-grub"})," and reboot your system. On other Linux distributions the fix is similar but you need to edit a different configuration file to change the Linux kernel cmdline. This workaround is only needed for images based on CentOS 6 (",(0,i.jsx)(n.code,{children:"cos6"}),"). You could also workaround this by forcing the CentOS 7 based images using ",(0,i.jsx)(n.code,{children:"DOCKER_IMAGE=quay.io/condaforge/linux-anvil-cos7-x86_64 ./build-locally.py"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The exit code 139 itself actually is the general exit code for a segmentation fault. This could also mean that you have run into a different issue but the above issue is the most likely one with our CentOS 6-based images."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"mfaq-package-submit"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"is-it-necessary-for-me-to-be-an-upstream-maintainer-of-the-package-i-submit-to-conda-forge"})}),"\n",(0,i.jsx)(n.h2,{id:"is-it-necessary-for-me-to-be-an-upstream-maintainer-of-the-package-i-submit-to-conda-forge",children:"Is it necessary for me to be an upstream maintainer of the package I submit to conda-forge?"}),"\n",(0,i.jsx)(n.p,{children:"Everybody can submit a package to conda-forge, irrespective of whether they maintain the upstream version or not. Additionally, it's not required but considered good practice to inform the upstream of a new package and invite them to be maintainers as well."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"mfaq-libgl-so-1"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"how-do-i-fix-the-libgl-so-1-import-error"})}),"\n",(0,i.jsxs)(n.h2,{id:"how-do-i-fix-the-libglso1-import-error",children:["How do I fix the ",(0,i.jsx)(n.code,{children:"libGL.so.1"})," import error?"]}),"\n",(0,i.jsx)(n.p,{children:"Error:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"ImportError: libGL.so.1: cannot open shared object file: No such file or directory\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you saw this error while building a package in your feedstock, create a ",(0,i.jsx)(n.a,{href:"/docs/maintainer/knowledge_base#yum-deps",children:"yum_requirements.txt"})," file and add ",(0,i.jsx)(n.code,{children:"mesa-libGL"}),". See also ",(0,i.jsxs)(n.a,{href:"/docs/maintainer/knowledge_base#libgl",children:["CDTs: ",(0,i.jsx)(n.code,{children:"libgl"})]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you are seeing this error after installing a package locally, then you are missing an ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/OpenGL",children:"OpenGL"})," provider in your system dependencies. This is more likely to happen in headless systems with no graphics (servers, Docker images, etc). To fix it, you must install a provider like ",(0,i.jsx)(n.a,{href:"https://www.mesa3d.org/",children:"Mesa"})," with your system package manager."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"mfaq-qt-load-xcb"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"how-can-i-fix-the-the-qt-platform-plugin-xcb-could-not-be-loaded-error-during-testing"})}),"\n",(0,i.jsxs)(n.h2,{id:"how-can-i-fix-the-the-qt-platform-plugin-xcb-could-not-be-loaded-error-during-testing",children:["How can I fix the ",(0,i.jsx)(n.code,{children:'The Qt platform plugin "xcb" could not be loaded'})," error during testing?"]}),"\n",(0,i.jsxs)(n.p,{children:["When testing packages that have a dependency on ",(0,i.jsx)(n.code,{children:"pyqt"}),", the following error might occur under linux:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'qt.qpa.plugin: Could not load the Qt platform plugin "xcb" in "" even though it was found.\nThis application failed to start because no Qt platform plugin could be initialized. Reinstalling the application may fix this problem.\n\nAvailable platform plugins are: eglfs, minimal, minimalegl, offscreen, vnc, webgl, xcb.\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This comes from the CI environment being headless and can be fixed by adding the ",(0,i.jsx)(n.code,{children:"QT_QPA_PLATFORM=offscreen"})," ",(0,i.jsx)(n.a,{href:"https://docs.conda.io/projects/conda-build/en/stable/user-guide/environment-variables.html#inherited-environment-variables",children:"environment variable"}),".\nThe variable can either be added directly to the test command or provided in the ",(0,i.jsx)(n.a,{href:"/docs/maintainer/adding_pkgs#id4",children:"meta.yaml"})," like so:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"build:\n  script_env:\n    - QT_QPA_PLATFORM=offscreen\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"mfaq-contact-core"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"how-can-i-contact-conda-forge-core"})}),"\n",(0,i.jsx)(n.h2,{id:"how-can-i-contact-conda-forgecore",children:"How can I contact conda-forge/core?"}),"\n",(0,i.jsxs)(n.p,{children:["When in an issue or PR, you can contact ",(0,i.jsx)(n.a,{href:"/community/governance/#teams-roles",children:"conda-forge/core"})," by simply mentioning ",(0,i.jsx)(n.code,{children:"@conda-forge/core"})," in a comment.\nIf you don't receive an an answer after a couple of days, feel free to reach out to us via the public ",(0,i.jsx)(n.a,{href:"https://app.element.io/#/room/#conda-forge:matrix.org",children:"Element"})," chatroom."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Due to a GitHub limitation, this is disabled for new members.\nIn that case, you can ping core using the bot command ",(0,i.jsx)(n.a,{href:"/docs/maintainer/infrastructure#conda-forge-admin-please-ping-conda-forge",children:"@conda-forge-admin, please ping conda-forge/core"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["In case your issue is longer or you would like to contact us privately, feel free to reach out to us via the options listed at ",(0,i.jsx)(n.a,{href:"/community/getting-in-touch/",children:"Getting in Touch"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"mfaq-abandoned-feedstock"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"a-feedstock-has-been-abandoned-and-i-would-like-to-take-over-maintenance"})}),"\n",(0,i.jsx)(n.h2,{id:"a-feedstock-has-been-abandoned-and-i-would-like-to-take-over-maintenance",children:"A feedstock has been abandoned and I would like to take over maintenance."}),"\n",(0,i.jsxs)(n.p,{children:["A feedstock is generally considered abandoned when the maintainer isn't around anymore and doesn't merge new PRs or answer any issues.\nIf that is the case, you can add yourself to the team by using the ",(0,i.jsx)(n.a,{href:"/docs/maintainer/infrastructure#conda-forge-admin-please-add-user-username",children:"@conda-forge-admin, please add user @username"})," command.\nIf the maintainer doesn't merge it after roughly a week, ",(0,i.jsx)(n.a,{href:"#mfaq-contact-core",children:"contact conda-forge/core"})," to have it merged.\nOnce added, you have full rights to the feedstock and can continue its maintenance."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Even if the maintainer isn't active anymore, we generally like to keep them in the list of maintainers and not remove them, in case they want to take up maintenance at a later date."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"mfaq-changes-to-major-projects"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{id:"does-conda-forge-ever-make-significant-changes-or-apply-code-patches-to-significant-upstream-packages"})}),"\n",(0,i.jsx)(n.h2,{id:"does-conda-forge-ever-make-significant-changes-or-apply-code-patches-to-significant-upstream-packages",children:"Does conda-forge ever make significant changes or apply code patches to significant upstream packages?"}),"\n",(0,i.jsx)(n.p,{children:"We generally try to avoid changes, but there are many notable exceptions and we have no set policy. These changes currently fall into\na few categories. Upstream projects that violate our community norms or pose significant security risks through their policies may\nbe changed so that they can be distributed on conda-forge. In many cases though, these projects are not distributed at all. We\ndo employ extensive changes to project build scripts in order to properly build and install projects into conda environments.\nFinally, in some cases we add, enable, or disable features in specific projects to ensure they are broadly compatible with the\nconda-forge package set. The set of patches/changes we apply is always located in the feedstock that built the package. We\nalso maintain a list of important packages with changes in our documentation."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>s});var i=a(67294);const o={},t=i.createContext(o);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);