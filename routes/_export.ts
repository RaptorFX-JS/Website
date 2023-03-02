// Exports router modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.
// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
var G=Object.defineProperty;var o=(s,e)=>{for(var X in e)G(s,X,{get:e[X],enumerable:!0})};import*as We from"./_404.tsx";import*as Ee from"./_app.tsx";import*as Te from"./about.tsx";import*as Ie from"./blog.tsx";import*as Pe from"./docs.tsx";import*as $e from"./index.tsx";var g={};o(g,{default:()=>Q});import{Fragment as U,jsx as h,jsxs as V}from"https://esm.sh/react@18.2.0/jsx-runtime";import{useMDXComponents as v}from"https://esm.sh/@mdx-js/react@2.1.3";import J from"OpenGraphEmbed";function D(s){let e=Object.assign({h1:"h1",hr:"hr",p:"p"},v(),s.components);return V(U,{children:[h(J,{title:"RaptorFX | Hello Denosaurs!",description:"Welcome to the blog for RaptorFX!"}),`
`,h(e.h1,{id:"greetings",children:"Greetings!"}),`
`,h(e.hr,{}),`
`,h(e.p,{children:"Heya, we have a blog now! We will post updates related to RaptorFX again and take community feedback via here! We will also post some very cool stuff here until RaptorFX releases, so stay tuned!"})]})}function K(s={}){let{wrapper:e}=Object.assign({},v(),s.components);return e?h(e,Object.assign({},s,{children:h(D,s)})):D(s)}var Q=K;var u={};o(u,{default:()=>te});import{Fragment as Y,jsx as d,jsxs as Z}from"https://esm.sh/react@18.2.0/jsx-runtime";import{useMDXComponents as k}from"https://esm.sh/@mdx-js/react@2.1.3";import ee from"OpenGraphEmbed";import ne from"BlogIndex";function M(s){let e=Object.assign({h1:"h1",hr:"hr"},k(),s.components);return Z(Y,{children:[d(ee,{title:"RaptorFX | Blog!",description:"Welcome to the blog for RaptorFX!"}),`
`,d(e.h1,{id:"blog-index",children:"Blog Index"}),`
`,d(e.hr,{}),`
`,d(ne,{})]})}function se(s={}){let{wrapper:e}=Object.assign({},k(),s.components);return e?d(e,Object.assign({},s,{children:d(M,s)})):M(s)}var te=se;var N={};o(N,{default:()=>oe});import{Fragment as ae,jsx as m,jsxs as re}from"https://esm.sh/react@18.2.0/jsx-runtime";import{useMDXComponents as R}from"https://esm.sh/@mdx-js/react@2.1.3";import ie from"OpenGraphEmbed";function C(s){let e=Object.assign({h1:"h1",hr:"hr",p:"p"},R(),s.components);return re(ae,{children:[m(ie,{title:"RaptorFX | Roadmap!",description:"Welcome to the blog for RaptorFX!"}),`
`,m(e.h1,{id:"roadmap",children:"Roadmap"}),`
`,m(e.hr,{}),`
`,m(e.p,{children:"Gaming"})]})}function le(s={}){let{wrapper:e}=Object.assign({},R(),s.components);return e?m(e,Object.assign({},s,{children:m(C,s)})):C(s)}var oe=le;var w={};o(w,{default:()=>me});import{Fragment as ce,jsx as c,jsxs as O}from"https://esm.sh/react@18.2.0/jsx-runtime";import{useMDXComponents as E}from"https://esm.sh/@mdx-js/react@2.1.3";import he from"OpenGraphEmbed";function W(s){let e=Object.assign({h1:"h1",hr:"hr",p:"p",pre:"pre",code:"code",span:"span"},E(),s.components);return O(ce,{children:[c(he,{title:"RaptorFX | Getting Started!",description:"Welcome to the documentation for RaptorFX!"}),`
`,c(e.h1,{id:"get-started",children:"Get Started"}),`
`,c(e.hr,{}),`
`,c(e.p,{children:"Unfortunately, you cannot use RaptorFX at this point in time, however, we are working hard to deliver and make it usable by Summer of 2023!"}),`
`,c(e.pre,{children:O(e.code,{className:"hljs language-shell",children:[c(e.span,{className:"hljs-meta prompt_",children:"$ "}),c(e.span,{className:"bash",children:"  deno run -A https://deno.land/x/raptorfx/get-raptor.ts"}),`
`]})})]})}function de(s={}){let{wrapper:e}=Object.assign({},E(),s.components);return e?c(e,Object.assign({},s,{children:c(W,s)})):W(s)}var me=de;var b={};o(b,{default:()=>ge});import{Fragment as pe,jsx as n,jsxs as r}from"https://esm.sh/react@18.2.0/jsx-runtime";import{useMDXComponents as I}from"https://esm.sh/@mdx-js/react@2.1.3";import je from"OpenGraphEmbed";function T(s){let e=Object.assign({h1:"h1",hr:"hr",p:"p",strong:"strong",a:"a",blockquote:"blockquote",h3:"h3",ul:"ul",li:"li",pre:"pre",code:"code",span:"span"},I(),s.components);return r(pe,{children:[n(je,{title:"RaptorFX | Documentation!",description:"Welcome to the documentation for RaptorFX!"}),`
`,n(e.h1,{id:"about",children:"About"}),`
`,n(e.hr,{}),`
`,r(e.p,{children:[n(e.strong,{children:"RaptorFX"})," is a ",n(e.strong,{children:"Deno-based framework"})," for building native apps using ",n(e.a,{href:"https://deno.land",children:"Deno"})," and System WebViews. It is inspired by Electron, NW.js, Tauri, and the many more that came before it."]}),`
`,r(e.blockquote,{children:[`
`,r(e.p,{children:["The name is taken a combination of ",n(e.strong,{children:"Raptor + Effects"})," (shortened to ",n(e.strong,{children:'"FX"'}),", coming from ",n(e.strong,{children:"JavaFX"})," as an inspiration)."]}),`
`]}),`
`,r(e.p,{children:[n(e.strong,{children:"RaptorFX"}),` is a modern, web-standards compliant effort at building a native app framework.\r
It is built on top of `,n(e.a,{href:"https://deno.land",children:"Deno"}),`, and uses the System WebView API to render web content in a native window.\r
Best of all, it allows you to use the `,n(e.strong,{children:"Deno"}),` namespace directly in the DOM and allows you to use\r
TypeScript directly and natively, transpiling it quickly on the fly using `,n(e.a,{href:"https://swc.rs",children:"swc"}),"."]}),`
`,n(e.h3,{id:"examples",children:"Examples!"}),`
`,n(e.p,{children:"A Few examples of what you can do with RaptorFX (using different frameworks!):"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:["Pushing an User Notification (along ",n(e.a,{href:"https://preactjs.com/",children:"Preact"}),"):"]}),`
`]}),`
`,n(e.pre,{children:r(e.code,{className:"hljs language-tsx",children:[n(e.span,{className:"hljs-keyword",children:"import"})," { h, render } ",n(e.span,{className:"hljs-keyword",children:"from"})," ",n(e.span,{className:"hljs-string",children:'"https://esm.sh/preact@10.11.3"'}),`\r
\r
`,n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title function_",children:"notify"}),"(",n(e.span,{className:"hljs-params"}),`) {\r
    `,n(e.span,{className:"hljs-title class_",children:"Notification"}),".",n(e.span,{className:"hljs-title function_",children:"requestPermission"}),"().",n(e.span,{className:"hljs-title function_",children:"then"}),"(",r(e.span,{className:"hljs-function",children:["(",n(e.span,{className:"hljs-params",children:"permission"}),") =>"]}),` {\r
        `,n(e.span,{className:"hljs-keyword",children:"if"})," (permission === ",n(e.span,{className:"hljs-string",children:'"granted"'}),`) {\r
            `,n(e.span,{className:"hljs-keyword",children:"const"})," myNotif = ",n(e.span,{className:"hljs-keyword",children:"new"})," ",n(e.span,{className:"hljs-title class_",children:"Notification"}),"(",n(e.span,{className:"hljs-string",children:'"Hello World"'}),`)\r
            `,n(e.span,{className:"hljs-built_in",children:"setTimeout"}),"(",n(e.span,{className:"hljs-function",children:"() =>"})," myNotif.",n(e.span,{className:"hljs-title function_",children:"close"}),"(), ",n(e.span,{className:"hljs-number",children:"2500"}),`)\r
        }\r
    })\r
}\r
\r
`,n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title function_",children:"App"}),"(",n(e.span,{className:"hljs-params"}),`) {\r
    `,n(e.span,{className:"hljs-keyword",children:"return"})," ",r(e.span,{className:"xml",children:[r(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"button"})," ",n(e.span,{className:"hljs-attr",children:"onClick"}),"=",n(e.span,{className:"hljs-string",children:"{notify}"}),">"]}),"Click Me!",r(e.span,{className:"hljs-tag",children:["</",n(e.span,{className:"hljs-name",children:"button"}),">"]})]}),`\r
}\r
\r
`,n(e.span,{className:"hljs-title function_",children:"render"}),"(",n(e.span,{className:"xml",children:r(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"App"})," />"]})}),", ",n(e.span,{className:"hljs-variable language_",children:"document"}),".",n(e.span,{className:"hljs-property",children:"body"}),`)
`]})}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:["Writing a File to disk (along ",n(e.a,{href:"https://vuejs.org/",children:"Vue"}),"):"]}),`
`]}),`
`,n(e.pre,{children:r(e.code,{className:"hljs language-html",children:[r(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"script"}),">"]}),r(e.span,{className:"javascript",children:[`\r
`,n(e.span,{className:"hljs-keyword",children:"let"})," msg = ",n(e.span,{className:"hljs-string",children:'""'}),`\r
\r
`,n(e.span,{className:"hljs-keyword",children:"export"})," ",n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title function_",children:"writeFile"}),"(",n(e.span,{className:"hljs-params",children:"name"}),`) {\r
	`,n(e.span,{className:"hljs-title class_",children:"Deno"}),".",n(e.span,{className:"hljs-title function_",children:"writeFile"}),"(",n(e.span,{className:"hljs-string",children:'"hello.txt"'}),", ",r(e.span,{className:"hljs-string",children:["`Hello, ",n(e.span,{className:"hljs-subst",children:"${name}"}),"!`"]}),`)\r
}\r
`]}),r(e.span,{className:"hljs-tag",children:["</",n(e.span,{className:"hljs-name",children:"script"}),">"]}),`\r
\r
`,r(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"template"}),">"]}),`\r
	`,r(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"input"})," ",n(e.span,{className:"hljs-attr",children:"v-model"}),"=",n(e.span,{className:"hljs-string",children:'"msg"'})," ",n(e.span,{className:"hljs-attr",children:"placeholder"}),"=",n(e.span,{className:"hljs-string",children:'"Enter your name!"'})," />"]}),`\r
	`,r(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"button"})," @",n(e.span,{className:"hljs-attr",children:"click"}),"=",n(e.span,{className:"hljs-string",children:'"writeFile(msg)"'}),">"]}),"Click Me!",r(e.span,{className:"hljs-tag",children:["</",n(e.span,{className:"hljs-name",children:"button"}),">"]}),`\r
`,r(e.span,{className:"hljs-tag",children:["</",n(e.span,{className:"hljs-name",children:"template"}),">"]}),`
`]})}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:["Displaying User's Device Information (along ",n(e.a,{href:"https://svelte.dev/",children:"Svelte"}),"):"]}),`
`]}),`
`,n(e.pre,{children:r(e.code,{className:"hljs language-xml",children:[r(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"script"})," ",n(e.span,{className:"hljs-attr",children:"lang"}),"=",n(e.span,{className:"hljs-string",children:'"ts"'}),">"]}),r(e.span,{className:"javascript",children:[`\r
    `,n(e.span,{className:"hljs-comment",children:'// @ts-ignore "Deno Environment"'}),`\r
    `,n(e.span,{className:"hljs-keyword",children:"let"})," info = ",n(e.span,{className:"hljs-title class_",children:"Deno"}),".",n(e.span,{className:"hljs-property",children:"build"}),`\r
`]}),r(e.span,{className:"hljs-tag",children:["</",n(e.span,{className:"hljs-name",children:"script"}),">"]}),`\r
\r
`,r(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"p"}),">"]}),`\r
    The Device is a {info.os}-{info.vendor} device, \r
    running on {info.arch} architecture with the \r
    LLVM triplet of {info.target} and using the Linker {info.env}.\r
`,r(e.span,{className:"hljs-tag",children:["</",n(e.span,{className:"hljs-name",children:"p"}),">"]}),`
`]})})]})}function fe(s={}){let{wrapper:e}=Object.assign({},I(),s.components);return e?n(e,Object.assign({},s,{children:n(T,s)})):T(s)}var ge=fe;var y={};o(y,{default:()=>be});import{Fragment as ue,jsx as a,jsxs as j}from"https://esm.sh/react@18.2.0/jsx-runtime";import{useMDXComponents as $}from"https://esm.sh/@mdx-js/react@2.1.3";import Ne from"OpenGraphEmbed";function P(s){let e=Object.assign({h1:"h1",hr:"hr",p:"p",a:"a",pre:"pre",code:"code",span:"span"},$(),s.components);return j(ue,{children:[a(Ne,{title:"RaptorFX | Integration - File System!",description:"Welcome to the documentation for RaptorFX!"}),`
`,a(e.h1,{id:"file-system",children:"File System"}),`
`,a(e.hr,{}),`
`,j(e.p,{children:["The File System in a RaptorFX application can be managed by two ways; the first one is by using the ",a(e.a,{href:"https://wicg.github.io/file-system-access/",children:"File System Access API"})," or via how ",a(e.a,{href:"https://deno.land/manual@v1.12.2/examples/read_write_files",children:"Deno handles files"}),"."]}),`
`,a(e.pre,{children:j(e.code,{className:"hljs language-js",children:[a(e.span,{className:"hljs-comment",children:"// Using Deno API"}),`\r
`,a(e.span,{className:"hljs-keyword",children:"await"})," ",a(e.span,{className:"hljs-title class_",children:"Deno"}),".",a(e.span,{className:"hljs-property",children:"permissions"}),".",a(e.span,{className:"hljs-title function_",children:"request"}),"({ ",a(e.span,{className:"hljs-attr",children:"name"}),": ",a(e.span,{className:"hljs-string",children:'"write"'})," }).",a(e.span,{className:"hljs-title function_",children:"then"}),"(",j(e.span,{className:"hljs-function",children:[a(e.span,{className:"hljs-params",children:"x"})," =>"]}),` {\r
    `,a(e.span,{className:"hljs-keyword",children:"if"}),"(x.",a(e.span,{className:"hljs-property",children:"state"})," === ",a(e.span,{className:"hljs-string",children:'"granted"'}),") ",a(e.span,{className:"hljs-title class_",children:"Deno"}),".",a(e.span,{className:"hljs-title function_",children:"writeTextFileSync"}),"(",a(e.span,{className:"hljs-string",children:'"hello.txt"'}),", ",a(e.span,{className:"hljs-string",children:'"Hello world!"'}),`)\r
})\r
\r
`,a(e.span,{className:"hljs-comment",children:"// Using File System Access API"}),`\r
`,a(e.span,{className:"hljs-keyword",children:"const"})," handle = ",a(e.span,{className:"hljs-keyword",children:"await"})," ",a(e.span,{className:"hljs-variable language_",children:"window"}),".",a(e.span,{className:"hljs-title function_",children:"showSaveFilePicker"}),`()\r
`,a(e.span,{className:"hljs-keyword",children:"const"})," file = ",a(e.span,{className:"hljs-keyword",children:"await"})," handle.",a(e.span,{className:"hljs-title function_",children:"createWritable"}),`()\r
`,a(e.span,{className:"hljs-keyword",children:"await"})," file.",a(e.span,{className:"hljs-title function_",children:"write"}),"(",a(e.span,{className:"hljs-string",children:'"Hello world!"'}),`)\r
`,a(e.span,{className:"hljs-keyword",children:"await"})," file.",a(e.span,{className:"hljs-title function_",children:"close"}),`()
`]})})]})}function we(s={}){let{wrapper:e}=Object.assign({},$(),s.components);return e?a(e,Object.assign({},s,{children:a(P,s)})):P(s)}var be=we;var _={};o(_,{default:()=>Fe});import{Fragment as ye,jsx as p,jsxs as A}from"https://esm.sh/react@18.2.0/jsx-runtime";import{useMDXComponents as S}from"https://esm.sh/@mdx-js/react@2.1.3";import _e from"OpenGraphEmbed";function L(s){let e=Object.assign({h1:"h1",hr:"hr",p:"p",strong:"strong"},S(),s.components);return A(ye,{children:[p(_e,{title:"RaptorFX | Integration!",description:"Welcome to the documentation for RaptorFX!"}),`
`,p(e.h1,{id:"integration",children:"Integration"}),`
`,p(e.hr,{}),`
`,A(e.p,{children:["This section of document details how to leverage existing Web APIs and how ",p(e.strong,{children:"RaptorFX"})," adapts them to function better natively on each platform."]})]})}function xe(s={}){let{wrapper:e}=Object.assign({},S(),s.components);return e?p(e,Object.assign({},s,{children:p(L,s)})):L(s)}var Fe=xe;var x={};o(x,{default:()=>Me});import{Fragment as Xe,jsx as i,jsxs as f}from"https://esm.sh/react@18.2.0/jsx-runtime";import{useMDXComponents as q}from"https://esm.sh/@mdx-js/react@2.1.3";import De from"OpenGraphEmbed";function H(s){let e=Object.assign({h1:"h1",hr:"hr",p:"p",a:"a",pre:"pre",code:"code",span:"span"},q(),s.components);return f(Xe,{children:[i(De,{title:"RaptorFX | Integration - Notifications!",description:"Welcome to the documentation for RaptorFX!"}),`
`,i(e.h1,{id:"notifications",children:"Notifications"}),`
`,i(e.hr,{}),`
`,f(e.p,{children:["In RaptorFX, you can send notifications to the user. This can be achieved quite easily by using the ",i(e.a,{href:"https://notifications.spec.whatwg.org/#api",children:"Web Notifications API"}),"."]}),`
`,i(e.pre,{children:f(e.code,{className:"hljs language-js",children:[i(e.span,{className:"hljs-comment",children:"// Example Code on how to send a Notification!"}),`\r
`,i(e.span,{className:"hljs-title class_",children:"Notification"}),".",i(e.span,{className:"hljs-title function_",children:"requestPermission"}),"().",i(e.span,{className:"hljs-title function_",children:"then"}),"(",f(e.span,{className:"hljs-function",children:["(",i(e.span,{className:"hljs-params",children:"permission"}),") =>"]}),` {\r
	`,i(e.span,{className:"hljs-keyword",children:"if"})," (permission === ",i(e.span,{className:"hljs-string",children:'"granted"'}),`) {\r
		`,i(e.span,{className:"hljs-keyword",children:"const"})," notification = ",i(e.span,{className:"hljs-keyword",children:"new"})," ",i(e.span,{className:"hljs-title class_",children:"Notification"}),"(",i(e.span,{className:"hljs-string",children:'"Hello World!"'}),`, {\r
			`,i(e.span,{className:"hljs-attr",children:"body"}),": ",i(e.span,{className:"hljs-string",children:'"This is a notification!"'}),`\r
		})\r
\r
		`,i(e.span,{className:"hljs-built_in",children:"setTimeout"}),"(",i(e.span,{className:"hljs-function",children:"() =>"}),` {\r
			notification.`,i(e.span,{className:"hljs-title function_",children:"close"}),`()\r
		}, `,i(e.span,{className:"hljs-number",children:"5000"}),`);\r
	}\r
})
`]})})]})}function ve(s={}){let{wrapper:e}=Object.assign({},q(),s.components);return e?i(e,Object.assign({},s,{children:i(H,s)})):H(s)}var Me=ve;var F={};o(F,{default:()=>Oe});import{Fragment as ke,jsx as t,jsxs as l}from"https://esm.sh/react@18.2.0/jsx-runtime";import{useMDXComponents as z}from"https://esm.sh/@mdx-js/react@2.1.3";import Ce from"OpenGraphEmbed";function B(s){let e=Object.assign({h1:"h1",hr:"hr",p:"p",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},z(),s.components);return l(ke,{children:[t(Ce,{title:"RaptorFX | Integration - Window!",description:"Welcome to the documentation for RaptorFX!"}),`
`,t(e.h1,{id:"window",children:"Window"}),`
`,t(e.hr,{}),`
`,l(e.p,{children:["Windows in RaptorFX are managed by the already existing ",t(e.code,{children:"window"})," object in JavaScript. That being said, here is a short list of methods and properties which can help you."]}),`
`,t(e.h2,{id:"methods",children:"Methods"}),`
`,t("br",{}),`
`,l(e.table,{children:[t(e.thead,{children:l(e.tr,{children:[t(e.th,{children:"Methods"}),t(e.th,{children:"Description"})]})}),l(e.tbody,{children:[l(e.tr,{children:[t(e.td,{children:t(e.code,{children:"window.close()"})}),t(e.td,{children:"Closes the window."})]}),l(e.tr,{children:[t(e.td,{children:t(e.code,{children:"window.focus()"})}),t(e.td,{children:"Brings the window to foreground."})]}),l(e.tr,{children:[t(e.td,{children:t(e.code,{children:"window.blur()"})}),t(e.td,{children:"Minimizes the window."})]}),l(e.tr,{children:[t(e.td,{children:t(e.code,{children:"window.resizeTo(width, height)"})}),t(e.td,{children:"Resizes the window to the specified width and height."})]}),l(e.tr,{children:[t(e.td,{children:t(e.code,{children:"window.resizeBy(width, height)"})}),t(e.td,{children:"Resizes the window by the specified width and height."})]}),l(e.tr,{children:[t(e.td,{children:t(e.code,{children:"window.moveTo(x, y)"})}),t(e.td,{children:"Moves the window to the specified x and y coordinates."})]}),l(e.tr,{children:[t(e.td,{children:t(e.code,{children:"window.moveBy(x, y)"})}),t(e.td,{children:"Moves the window by the specified x and y coordinates."})]})]})]}),`
`,t("br",{}),`
`,t(e.h2,{id:"properties",children:"Properties"}),`
`,t("br",{}),`
`,l(e.table,{children:[t(e.thead,{children:l(e.tr,{children:[t(e.th,{children:"Properties"}),t(e.th,{children:"Description"})]})}),l(e.tbody,{children:[l(e.tr,{children:[t(e.td,{children:t(e.code,{children:"window.innerHeight"})}),t(e.td,{children:"The height of the window."})]}),l(e.tr,{children:[t(e.td,{children:t(e.code,{children:"window.innerWidth"})}),t(e.td,{children:"The width of the window."})]}),l(e.tr,{children:[t(e.td,{children:t(e.code,{children:"window.outerHeight"})}),t(e.td,{children:"The height of the display."})]}),l(e.tr,{children:[t(e.td,{children:t(e.code,{children:"window.outerWidth"})}),t(e.td,{children:"The width of the display."})]})]})]}),`
`,t("br",{})]})}function Re(s={}){let{wrapper:e}=Object.assign({},z(),s.components);return e?t(e,Object.assign({},s,{children:t(B,s)})):B(s)}var Oe=Re;var fn={"/_404":We,"/_app":Ee,"/about":Te,"/blog":Ie,"/docs":Pe,"/":$e,"/blog/hello-denosaurs":g,"/blog/index":u,"/blog/roadmap":N,"/docs/get-started":w,"/docs/index":b,"/docs/integration/filesystem":y,"/docs/integration/index":_,"/docs/integration/notifications":x,"/docs/integration/window":F,depGraph:{"modules":[{"specifier":"./routes\\blog\\hello-denosaurs.mdx"},{"specifier":"./routes\\blog\\index.mdx"},{"specifier":"./routes\\blog\\roadmap.mdx"},{"specifier":"./routes\\docs\\get-started.mdx"},{"specifier":"./routes\\docs\\index.mdx"},{"specifier":"./routes\\docs\\integration\\filesystem.mdx"},{"specifier":"./routes\\docs\\integration\\index.mdx"},{"specifier":"./routes\\docs\\integration\\notifications.mdx"},{"specifier":"./routes\\docs\\integration\\window.mdx"}]}};export{fn as default};
