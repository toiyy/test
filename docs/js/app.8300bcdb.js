(function(){"use strict";var t={538:function(t,s,i){var a=i(144),e=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("hero"),s("projects"),s("about"),s("competitions"),s("contact")],1)},n=[],r=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"hero"}},[s("nav",{staticClass:"navbar is-fixed-top is-transparent",staticStyle:{"box-shadow":"0 5px 20px 0 rgba(0,0,0,0.2)"}},[s("div",{staticClass:"navbar-brand"},[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:1e3},expression:"{duration: 1000}"}],staticClass:"navbar-item",attrs:{href:"#hero"}},[t._v(" Home ")]),t._m(0)]),s("div",{staticClass:"navbar-menu",attrs:{id:"navbarExampleTransparentExample"}},[s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:1e3},expression:"{duration: 1000}"}],staticClass:"navbar-item underline",attrs:{href:"#projects"}},[t._v("Projects")]),s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:1e3},expression:"{duration: 1000}"}],staticClass:"navbar-item underline",attrs:{href:"#about"}},[t._v("About")]),s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:1e3},expression:"{duration: 1000}"}],staticClass:"navbar-item underline",attrs:{href:"#contact"}},[t._v("Contact")])])])])]),t._m(1)])},o=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"navbar-burger burger",attrs:{onclick:"document.querySelector('.navbar-menu').classList.toggle('is-active');","data-target":"navbarExampleTransparentExample"}},[s("span"),s("span"),s("span")])},function(){var t=this,s=t._self._c;return s("section",{staticClass:"hero has-bg-img is-medium"},[s("div",{staticClass:"overlay hero-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-mobile"},[s("div",{staticClass:"column is-three-fifths is-offset-one-fifth"},[s("nav",{staticClass:"level"},[s("div",{staticClass:"level-item"},[s("div",[s("h1",{staticClass:"po"},[t._v("toi's Portfolio ")])])])])])])])])])}],c={methods:{}},l=c,u=i(1),d=(0,u.Z)(l,r,o,!1,null,"ffd4a688",null),v=d.exports,f=function(){var t=this;t._self._c;return t._m(0)},p=[function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"about"}},[s("section",{staticClass:"hero has-bg-img is-medium"},[s("div",{staticClass:"overlay hero-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-mobile"},[s("div",{staticClass:"column is-three-fifths is-offset-one-fifth"},[s("nav",{staticClass:"level"},[s("div",{staticClass:"level-item"},[s("div",[s("h1",{staticClass:"w300 is-size-3"},[t._v(" about me ")]),s("p",{staticClass:"pt-50"},[t._v(" Birthyear ： 2004")]),s("p",{staticClass:"lo"},[t._v(" Name : toi kawashima")]),s("p",{staticClass:"li"},[t._v(" Living ： kanagawa")]),s("p",{staticClass:"lp"},[t._v(" Likes ： manga, soccer")])])])])])])])])])])}],h={data(){return{}}},m=h,_=(0,u.Z)(m,f,p,!1,null,"4c64f29e",null),C=_.exports,b=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"competitions"}},[s("section",{staticClass:"section"},[t._m(0),s("div",[s("div",{staticClass:"timeline"},t._l(t.competitions,(function(i){return s("div",{key:i,staticClass:"timeline__group"},[s("span",{staticClass:"timeline__year"},[t._v(t._s(i.year))]),t._l(i.events,(function(i){return s("div",{key:i,staticClass:"timeline__box"},[s("div",{staticClass:"timeline__post"},[s("div",{staticClass:"timeline__content"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-two-thirds"},[s("span",{staticClass:"subtitle"},[t._v(t._s(i.name)+" "+t._s(i.award))]),s("p",{staticClass:"has-text-grey"},[t._v(t._s(i.desc))])])])])])])}))],2)})),0)])])])},g=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"has-text-centered"},[s("span",{staticClass:"underline heading is-size-2 w300"},[t._v("history")])])}],w=JSON.parse('[{"year":"2020~2022","events":[{"name":"私立湘南学院高校","desc":"テニス部に所属し、プログラミングとは無縁の学生生活を過ごす"}]},{"year":"2023~","events":[{"name":"國學院大学 経済学部","desc":"大学入学前の3月に友達の影響でweb開発の勉強をし始める"}]}]'),x={data(){return{competitions:w}}},y=x,k=(0,u.Z)(y,b,g,!1,null,"5f1035e6",null),j=k.exports,S=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"projects"}},[s("section",{staticClass:"section",staticStyle:{background:"#FAFAFA"}},[s("div",{staticStyle:{width:"100%"}},[t._m(0),s("div",{staticClass:"columns is-multiline",staticStyle:{"margin-top":"0px"}},t._l(t.projects,(function(i){return s("div",{key:i.id,class:t.width_class},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[s("span",{staticClass:"subtitle is-size-4"},[t._v(t._s(i.name))]),s("p",{staticClass:"has-text-grey"},[t._v(t._s(i.desc))]),s("div",{staticClass:"has-text-centered"},[s("a",{staticClass:"button is-outlined",attrs:{target:"_blank",href:i.link}},[t._v("View Project")])]),s("div",{staticClass:"tags",staticStyle:{"margin-top":"10px"}},t._l(i.tech,(function(i){return s("span",{key:i.id,staticClass:"tag is-light-blue-green bold-tag",staticStyle:{fontSize:"0.8rem"}},[t._v(t._s(i))])})),0)])])])])})),0)])])])},O=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"has-text-centered"},[s("span",{staticClass:"underline heading is-size-2 w300"},[t._v("Projects")])])}],P=JSON.parse('[{"name":"portfolio","desc":"自己紹介と今までの制作物を載せるために制作しました","link":"#"}]'),Z={data(){return{width_class:"column is-one-third",windowWidth:0,projects:P}},watch:{windowWidth(t){t<1151&&(this.width_class="column is-half"),t>1150&&(this.width_class="column is-one-third")}},mounted(){this.$nextTick((()=>{window.addEventListener("resize",(()=>{this.windowWidth=window.innerWidth}))}))}},z=Z,N=(0,u.Z)(z,S,O,!1,null,"f78763d6",null),A=N.exports,E=function(){var t=this;t._self._c;return t._m(0)},T=[function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"contact"}},[s("section",{staticClass:"section"},[s("div",{staticStyle:{width:"100%"}},[s("div",{staticClass:"has-text-centered"},[s("span",{staticClass:"underline heading is-size-2 w300",staticStyle:{"margin-bottom":"30px"}},[t._v("Contact")]),s("span",[t._v("Drop me an email at "),s("a",{attrs:{href:"mailto:toitoy329@outlook.jp"}},[t._v("toitoy329@outlook.jp")])])])])]),s("footer",{staticClass:"footer",staticStyle:{padding:"1px 0px 1px 0px",background:"rgba(0, 106, 255, 0.86)"}},[s("div",{staticClass:"content has-text-centered"},[s("p",{staticStyle:{"margin-top":"3px"}},[s("strong",{staticStyle:{color:"rgb(245, 245, 245)"}},[t._v("© 2023 toi kawashima")])])])])])}],F={data(){return{}}},L=F,W=(0,u.Z)(L,E,T,!1,null,"21760c0f",null),H=W.exports,J={name:"App",components:{Hero:v,About:C,Competitions:j,Projects:A,Contact:H}},$=J,q=(0,u.Z)($,e,n,!1,null,null,null),B=q.exports,D=i(548),I=i(317),M=i.n(I);a.ZP.use(M()),a.ZP.use(D.ZP,{defaultIconPack:"fas"}),a.ZP.config.productionTip=!1,new a.ZP({render:t=>t(B)}).$mount("#app")}},s={};function i(a){var e=s[a];if(void 0!==e)return e.exports;var n=s[a]={exports:{}};return t[a].call(n.exports,n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(s,a,e,n){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],e=t[u][1],n=t[u][2];for(var o=!0,c=0;c<a.length;c++)(!1&n||r>=n)&&Object.keys(i.O).every((function(t){return i.O[t](a[c])}))?a.splice(c--,1):(o=!1,n<r&&(r=n));if(o){t.splice(u--,1);var l=e();void 0!==l&&(s=l)}}return s}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[a,e,n]}}(),function(){i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,{a:s}),s}}(),function(){i.d=function(t,s){for(var a in s)i.o(s,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){var t={143:0};i.O.j=function(s){return 0===t[s]};var s=function(s,a){var e,n,r=a[0],o=a[1],c=a[2],l=0;if(r.some((function(s){return 0!==t[s]}))){for(e in o)i.o(o,e)&&(i.m[e]=o[e]);if(c)var u=c(i)}for(s&&s(a);l<r.length;l++)n=r[l],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(u)},a=self["webpackChunkvue25"]=self["webpackChunkvue25"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(538)}));a=i.O(a)})();
//# sourceMappingURL=app.8300bcdb.js.map