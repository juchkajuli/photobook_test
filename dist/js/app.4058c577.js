(function(t){function e(e){for(var a,i,c=e[0],o=e[1],l=e[2],u=0,f=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);m&&m(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={app:0},r=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"51d3fe3d"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=a);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=i(t);var l=new Error;r=function(e){o.onerror=o.onload=null,clearTimeout(u);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}s[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var m=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"005c":function(t,e,n){"use strict";var a=n("e069"),s=n.n(a);s.a},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"0813":function(t,e,n){},"261f":function(t,e,n){"use strict";var a=n("0813"),s=n.n(a);s.a},"377a":function(t,e,n){},"37df":function(t,e,n){t.exports=n.p+"img/like.02dde723.svg"},"3a52":function(t,e,n){},"3b7c":function(t,e,n){t.exports=n.p+"img/cat.fa6114b9.svg"},"3de0":function(t,e,n){},"4bae":function(t,e,n){"use strict";var a=n("3a52"),s=n.n(a);s.a},"503f":function(t,e,n){t.exports=n.p+"img/home.0ee6bf01.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},r=[],i=(n("034f"),n("2877")),c={},o=Object(i["a"])(c,s,r,!1,null,null,null),l=o.exports,u=(n("d3b7"),n("8c4f")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HeaderComponent"),n("ContentComponent"),n("CommentComponent"),n("AddComment"),n("FriendLink"),n("RecommendLink"),n("ButtonLink")],1)},f=[],p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head_container"},[a("div",{staticClass:"head"},[a("img",{staticClass:"logo",attrs:{src:n("3b7c"),alt:"Логотип"}}),a("span",{staticClass:"name-logo"},[t._v("Photobook")]),a("input",{staticClass:"search",attrs:{type:"text",autocapitalize:"none",placeholder:"Поиск",value:""}}),a("nav",{staticClass:"menu-list"},[a("a",{staticClass:"menu-icon",attrs:{href:"#"}},[a("img",{staticClass:"img-menu-head",attrs:{src:n("503f"),alt:"home"}})]),a("a",{staticClass:"menu-icon",attrs:{href:"#"}},[a("img",{staticClass:"img-menu-head",attrs:{src:n("fec2"),alt:"message"}})]),a("a",{staticClass:"menu-icon",attrs:{href:"#"}},[a("img",{staticClass:"img-menu-head",attrs:{src:n("b074"),alt:"interes"}})]),a("a",{staticClass:"menu-icon",attrs:{href:"#"}},[a("img",{staticClass:"img-menu-head",attrs:{src:n("a770"),alt:"avatar"}})])])])])}],v={name:"HeaderComponent"},b=v,C=(n("4bae"),Object(i["a"])(b,p,d,!1,null,"447ae85e",null)),g=C.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head-public"},[a("div",{staticClass:"head_p"},[a("a",{staticClass:"user-link",attrs:{href:"#"}},[a("img",{staticClass:"user-avatar",attrs:{src:n("a770"),alt:"Аватар"}})]),a("div",{staticClass:"signature"},[a("span",{staticClass:"log-signa"},[t._v("Имя пользователя")])])]),a("div",{staticClass:"public-button"},[a("button",{staticClass:"public-button-circle",attrs:{type:"button"}},[a("img",{attrs:{src:n("e50c")}})])])])}],y={name:"ContentComponent"},k=y,x=(n("261f"),Object(i["a"])(k,h,_,!1,null,null,null)),j=x.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment"},[a("div",{staticClass:"like"},[a("img",{staticClass:"like-img",attrs:{src:n("37df")}}),a("img",{staticClass:"comment-img",attrs:{src:n("8f34")}})]),a("div",{staticClass:"user-signa"},[a("span",{staticClass:"signa-log"},[t._v(" Имя пользователя ")]),a("span",{staticClass:"signa"},[t._v(" Подпись к публикации ")])]),a("div",{staticClass:"comment-user"},[a("span",{staticClass:"signa-log"},[t._v(" Имя пользователя ")]),a("span",{staticClass:"signa"},[t._v(" Комментарий ")]),a("p",{staticClass:"signat"},[a("span",{staticClass:"signa-log"},[t._v(" Имя пользователя ")]),a("span",{staticClass:"signa"},[t._v(" Комментарий ")])]),a("p",{staticClass:"signat"},[a("span",{staticClass:"signa-log"},[t._v(" Имя пользователя ")]),a("span",{staticClass:"signa"},[t._v(" Комментарий ")])])])])}],$={name:"CommentComponent"},w=$,L=(n("714a"),Object(i["a"])(w,O,E,!1,null,null,null)),P=L.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-box"},[n("span",{staticClass:"add-comment"},[t._v(" Добавьте комментарий... ")]),n("div",{staticClass:"button-public-comm"},[n("button",{staticClass:"button-public-comment",attrs:{type:"button"}},[t._v("Опубликовать")])])])}],S={name:"AddComment"},T=S,M=(n("d9b1"),Object(i["a"])(T,A,H,!1,null,null,null)),B=M.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"friends-link"},[a("a",{staticClass:"user-link",attrs:{href:"#"}},[a("img",{staticClass:"user-avatar",attrs:{src:n("a770"),alt:"Аватар"}})]),a("a",{staticClass:"name-friends",attrs:{href:"#"}},[t._v(" Имя пользователя ")])])}],J={name:"FriendLink"},q=J,z=(n("005c"),Object(i["a"])(q,F,R,!1,null,null,null)),D=z.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recommend-link"},[a("a",{staticClass:"user-link",attrs:{href:"#"}},[a("img",{staticClass:"user-avatar",attrs:{src:n("a770"),alt:"Аватар"}})]),a("a",{staticClass:"name-recommend",attrs:{href:"#"}},[t._v(" Имя пользователя ")]),a("button",{staticClass:"recommend-button",attrs:{type:"button"}},[t._v("Подписаться")])])}],K={name:"RecommendLink"},N=K,Q=(n("5e63"),Object(i["a"])(N,G,I,!1,null,null,null)),U=Q.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button-recommend"},[n("button",{staticClass:"recommend-button",attrs:{type:"button"}},[t._v("Подписаться")])])}],X={name:"ButtonLink"},Y=X,Z=(n("f11f"),Object(i["a"])(Y,V,W,!1,null,null,null)),tt=Z.exports,et={name:"Home",components:{HeaderComponent:g,ContentComponent:j,CommentComponent:P,AddComment:B,FriendLink:D,RecommendLink:U,ButtonLink:tt}},nt=et,at=Object(i["a"])(nt,m,f,!1,null,null,null),st=at.exports;a["a"].use(u["a"]);var rt=[{path:"/",name:"Home",component:st},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],it=new u["a"]({routes:rt}),ct=it;a["a"].config.productionTip=!1,new a["a"]({router:ct,render:function(t){return t(l)}}).$mount("#app")},"5e63":function(t,e,n){"use strict";var a=n("377a"),s=n.n(a);s.a},"714a":function(t,e,n){"use strict";var a=n("3de0"),s=n.n(a);s.a},"85ec":function(t,e,n){},"8f34":function(t,e,n){t.exports=n.p+"img/comment.27032140.svg"},"8fb3":function(t,e,n){},a4d8:function(t,e,n){},a770:function(t,e,n){t.exports=n.p+"img/avatar1.eb40ecbc.svg"},b074:function(t,e,n){t.exports=n.p+"img/heart.2ed45acc.svg"},d9b1:function(t,e,n){"use strict";var a=n("a4d8"),s=n.n(a);s.a},e069:function(t,e,n){},e50c:function(t,e,n){t.exports=n.p+"img/menu.cb3c2eba.svg"},f11f:function(t,e,n){"use strict";var a=n("8fb3"),s=n.n(a);s.a},fec2:function(t,e,n){t.exports=n.p+"img/message.34cf7c7e.svg"}});
//# sourceMappingURL=app.4058c577.js.map