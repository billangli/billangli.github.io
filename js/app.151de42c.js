(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],p=0,u=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);A&&A(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/billangli.github.io/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var A=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"18b3":function(t,e,a){t.exports=a.p+"img/cropped-headshot-small.d40900e2.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),t._m(1),t._m(2),a("div",{attrs:{id:"experience"}},[a("div",{staticClass:"container"},[a("h1",[t._v("Work Experience")]),t._l(t.jobs,(function(e){return a("div",{key:e.position},[a("h2",[t._v(t._s(e.position))]),a("div",{staticStyle:{clear:"both"}},[a("h3",{staticClass:"alignLeft"},[t._v(t._s(e.company))]),a("h3",{staticClass:"alignRight"},[t._v(t._s(e.date))])]),a("br"),a("ul",{attrs:{id:"job-description"}},t._l(e.descriptions,(function(e){return a("li",{key:e},[t._v(t._s(e))])})),0)])}))],2)]),a("div",{attrs:{id:"projects"}},[a("div",{staticClass:"container"},[a("h1",[t._v("Select Projects")]),t._l(t.projects,(function(e){return a("div",{key:e,staticStyle:{display:"flex","margin-bottom":"20px"}},[a("div",{staticClass:"project-img-container"},[a("div",{staticClass:"img-overlay"},[a("a",{attrs:{href:e.url,target:"_blank"}},[a("img",{staticClass:"project-img",attrs:{src:e.image,alt:e.alt}})])])]),a("div",{staticStyle:{margin:"20px"}},[a("h2",[t._v(t._s(e.title))]),a("h3",{staticStyle:{"padding-top":"10px"}},[t._v(t._s(e.description))])])])}))],2)]),t._m(3),t._m(4)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"navbar"}},[a("ul",[a("li",{staticStyle:{float:"left"}},[a("a",{attrs:{href:"#"}},[a("h5",[t._v("Bill Ang Li")])])]),a("li",[a("a",{attrs:{href:"#about"}},[a("h5",[t._v("About")])])]),a("li",[a("a",{attrs:{href:"#experience"}},[a("h5",[t._v("Experience")])])]),a("li",[a("a",{attrs:{href:"#projects"}},[a("h5",[t._v("Projects")])])]),a("li",[a("a",{attrs:{href:"#contact"}},[a("h5",[t._v("Contact")])])]),a("li",[a("a",{attrs:{href:"resume.pdf",target:"_blank"}},[a("h5",[t._v("Resume")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"banner"}},[r("img",{staticClass:"clip-circle",attrs:{src:a("18b3"),alt:"Bill's headshot"}}),r("br"),r("img",{staticStyle:{"padding-top":"20px"},attrs:{src:a("f0bc"),alt:"Bill Ang Li"}}),r("h6",[t._v("Computer Science student at the University of Toronto")]),r("h6",[t._v("Looking for 2021 New Grad jobs")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"about"}},[a("div",{staticClass:"container"},[a("h1",[t._v("About Me")]),a("p",[t._v(" I love programming, playing basketball, learning guitar melodies and reading books. I am finishing up my degree of a Specialist in Computer Science and a Minor in Economics. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"20px 0 30px 0"},attrs:{id:"contact"}},[a("div",{staticClass:"container"},[a("h1",[t._v("Contact Me")]),a("h2",[t._v("Email")]),a("a",{attrs:{href:"mailto:bill.ang.li@hotmail.com"}},[t._v("bill.ang.li@hotmail.com")]),a("h2",[t._v("GitHub")]),a("a",{attrs:{href:"github.com/billangli"}},[t._v("@billangli")]),a("h2",[t._v("LinkedIn")]),a("a",{attrs:{href:"linkedin.com/in/billangli"}},[t._v("Bill Ang Li")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"footer"}},[a("p",{staticStyle:{"text-align":"center"}},[t._v("Created by Bill Ang Li, 2020")])])}],o={name:"App",components:{},data:function(){return{jobs:[{position:"Data Engineer Work Study Student",company:"Toronto General Hospital",date:"2018-05 - 2020-04",descriptions:["Automated web traffic metric reporting using Python, including data collection, processing and analysis","Led team in the design and development of a provincial clinical tool that recruits potential organ donors","Managed over 20 Python scripts to ensure daily data delivery to the research team","Improved data scraping and processing by creating diagnostic tests","Automated the process for storing backups of WebEx meeting recordings on Vimeo using Python"]},{position:"Software Developer Intern",company:"Bank of Montreal",date:"2019-05 - 2019-08",descriptions:["Created a C# application for comparing GemFire clusters to ensure that all data was uploaded to the cloud","Laid groundwork for migration from Netezza to Greenplum databases to improve performance for the production support team","Debugged and expanded an F# build tool for packaging and deploying code used by the Middleware team"]}],projects:[{title:"ActivityWatch",description:"Contributor to Open-Source Project",image:"activitywatch.png",alt:"ActivityWatch Logo",url:"https://activitywatch.net/"},{title:"Restaurant Inventory and Staff Manager",description:"Class Project",image:"cropped-restaurant-system.png",alt:"Inventory App",url:"https://github.com/billangli/RestaurantSystem"},{title:"Gesture-based Musical Instrument",description:"1st Place Facebook Demo at Hack the North 2018",image:"synthly.png",alt:"Synthly App",url:"https://devpost.com/software/synthly"}]}}},s=o,l=(a("034f"),a("2877")),c=Object(l["a"])(s,n,i,!1,null,null,null),A=c.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(A)}}).$mount("#app")},"85ec":function(t,e,a){},f0bc:function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.151de42c.js.map