(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{216:function(t,s,a){t.exports=a.p+"assets/img/gitignore.5d97f945.png"},271:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"gitignore配置规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitignore配置规则"}},[t._v("#")]),t._v(" .gitignore配置规则")]),t._v(" "),e("h2",{attrs:{id:"_1、gitignore文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、gitignore文件"}},[t._v("#")]),t._v(" 1、gitignore文件")]),t._v(" "),e("h4",{attrs:{id:"在git中如果想忽略掉某个文件，不让这个文件提交到版本库中，可以使用修改-gitignore-文件的方法。这个文件每一行保存了一个匹配的规则例如："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在git中如果想忽略掉某个文件，不让这个文件提交到版本库中，可以使用修改-gitignore-文件的方法。这个文件每一行保存了一个匹配的规则例如："}},[t._v("#")]),t._v(" 在git中如果想忽略掉某个文件，不让这个文件提交到版本库中，可以使用修改 .gitignore 文件的方法。这个文件每一行保存了一个匹配的规则例如：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此为注释 – 将被 Git 忽略")]),t._v("\n*.a       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略所有 .a 结尾的文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("lib.a    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 但 lib.a 除外")]),t._v("\n/TODO     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO")]),t._v("\nbuild/    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略 build/ 目录下的所有文件")]),t._v("\ndoc/*.txt "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt")]),t._v("\n")])])]),e("h2",{attrs:{id:"_2、git-rm-r-cached解决已提交的文件在-gitignore中加入忽略后无效的问题。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、git-rm-r-cached解决已提交的文件在-gitignore中加入忽略后无效的问题。"}},[t._v("#")]),t._v(" 2、git rm -r --cached解决已提交的文件在.gitignore中加入忽略后无效的问题。")]),t._v(" "),e("h4",{attrs:{id:"有时候，发现有不该提交的文件已经提交后，仅仅在-gitignore中加入忽略是不行的。这个时候需要执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有时候，发现有不该提交的文件已经提交后，仅仅在-gitignore中加入忽略是不行的。这个时候需要执行"}},[t._v("#")]),t._v(" 有时候，发现有不该提交的文件已经提交后，仅仅在.gitignore中加入忽略是不行的。这个时候需要执行:")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r --cached 文件/文件夹名字\n")])])]),e("h4",{attrs:{id:"去掉已经托管的文件，然后重新提交："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#去掉已经托管的文件，然后重新提交："}},[t._v("#")]),t._v(" 去掉已经托管的文件，然后重新提交：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n")])])]),e("p",[e("img",{attrs:{src:a(216),alt:"gitignore"}})]),t._v(" "),e("h4",{attrs:{id:"当我们需要删除暂存区或分支上的文件-同时工作区也不需要这个文件了-可以使用："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#当我们需要删除暂存区或分支上的文件-同时工作区也不需要这个文件了-可以使用："}},[t._v("#")]),t._v(" 当我们需要删除暂存区或分支上的文件, 同时工作区也不需要这个文件了, 可以使用：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" file_path\n "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'delete somefile'")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);