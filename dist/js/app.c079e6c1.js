(function(t){function e(e){for(var o,a,u=e[0],i=e[1],s=e[2],d=0,l=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);p&&p(e);while(l.length)l.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},c={app:0},r=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-22e9c9d7":"7cb7089e","chunk-3cdb93d0":"83305885","chunk-6b6e1dce":"1e0c4f1b","chunk-a4206284":"66bd897f","chunk-2a525242":"f1c50ae1","chunk-58578945":"5af71e29","chunk-5dde56fd":"72d9cab6","chunk-78620127":"62c54870","chunk-78ff6af9":"0ad56f49"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-3cdb93d0":1,"chunk-6b6e1dce":1,"chunk-a4206284":1,"chunk-2a525242":1,"chunk-58578945":1,"chunk-5dde56fd":1,"chunk-78620127":1,"chunk-78ff6af9":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-22e9c9d7":"31d6cfe0","chunk-3cdb93d0":"b8d4935f","chunk-6b6e1dce":"5ed035f6","chunk-a4206284":"344cc0ff","chunk-2a525242":"a0963886","chunk-58578945":"8c71258d","chunk-5dde56fd":"8db88bbd","chunk-78620127":"990e82ba","chunk-78ff6af9":"b7f14e18"}[t]+".css",c=i.p+o,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var s=r[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===c))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===o||d===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||c,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[t],p.parentNode.removeChild(p),n(r)},p.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var o=c[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=c[t]=[e,n]}));e.push(o[2]=r);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(t);var l=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}c[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/visual-drag-demo/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=d;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0d53":function(t,e,n){var o={"./":["9210"],"./Group":["736d","chunk-5dde56fd"],"./Group.vue":["736d","chunk-5dde56fd"],"./Picture":["ac55","chunk-78620127"],"./Picture.vue":["ac55","chunk-78620127"],"./RectShape":["43dc","chunk-78ff6af9"],"./RectShape.vue":["43dc","chunk-78ff6af9"],"./VButton":["dcb2","chunk-58578945"],"./VButton.vue":["dcb2","chunk-58578945"],"./VText":["d02c","chunk-2a525242"],"./VText.vue":["d02c","chunk-2a525242"],"./component-list":["4e67"],"./component-list.js":["4e67"],"./index":["9210"],"./index.js":["9210"]};function a(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],a=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id="0d53",t.exports=a},4360:function(t,e,n){"use strict";var o=n("5530"),a=(n("a434"),n("2b0e")),c=n("2f62"),r={mutations:{addAnimation:function(t,e){var n=t.curComponent;n.animations.push(e)},removeAnimation:function(t,e){var n=t.curComponent;n.animations.splice(e,1)}}},u=n("2909"),i=(n("159b"),n("ac24")),s=n("986e"),d=n("fa7d"),l=n("a2ba");function p(t,e,n){var o=Object(d["a"])("#component".concat(t.id)).getBoundingClientRect(),a={x:o.left-e.left+o.width/2,y:o.top-e.top+o.height/2};t.style.rotate=Object(l["d"])(t.style.rotate+n.rotate),t.style.width=parseFloat(t.groupStyle.width)/100*n.width,t.style.height=parseFloat(t.groupStyle.height)/100*n.height,t.style.left=a.x-t.style.width/2,t.style.top=a.y-t.style.height/2,t.groupStyle={}}var f=n("4e67"),h=(n("b64b"),n("a7f7"));function m(t){var e=t.style;t.propValue.forEach((function(t){if(!Object.keys(t.groupStyle).length){var n=Object(o["a"])({},t.style);t.groupStyle=Object(h["b"])(n),t.groupStyle.left=Object(l["f"])((n.left-e.left)/e.width),t.groupStyle.top=Object(l["f"])((n.top-e.top)/e.height),t.groupStyle.width=Object(l["f"])(n.width/e.width),t.groupStyle.height=Object(l["f"])(n.height/e.height)}}))}var b={state:{areaData:{style:{top:0,left:0,width:0,height:0},components:[]},editor:null},mutations:{getEditor:function(t){t.editor=Object(d["a"])("#editor")},setAreaData:function(t,e){t.areaData=e},compose:function(t){var e=t.componentData,n=t.areaData,a=t.editor,c=[];n.components.forEach((function(t){if("Group"!=t.component)c.push(t);else{var e=Object(o["a"])({},t.style),n=t.propValue,r=a.getBoundingClientRect();w.commit("deleteComponent"),n.forEach((function(t){p(t,r,e),w.commit("addComponent",{component:t})})),c.push.apply(c,Object(u["a"])(t.propValue)),w.commit("batchDeleteComponent",t.propValue)}}));var r=Object(o["a"])(Object(o["a"])({id:Object(i["a"])(),component:"Group"},f["commonAttr"]),{},{style:Object(o["a"])(Object(o["a"])({},f["commonStyle"]),n.style),propValue:c});m(r),w.commit("addComponent",{component:r}),s["a"].$emit("hideArea"),w.commit("batchDeleteComponent",n.components),w.commit("setCurComponent",{component:e[e.length-1],index:e.length-1}),n.components=[]},batchDeleteComponent:function(t,e){var n=t.componentData;e.forEach((function(t){for(var e=0,o=n.length;e<o;e++)if(t.id==n[e].id){n.splice(e,1);break}}))},decompose:function(t){var e=t.curComponent,n=t.editor,a=Object(o["a"])({},e.style),c=e.propValue,r=n.getBoundingClientRect();w.commit("deleteComponent"),c.forEach((function(t){p(t,r,a),w.commit("addComponent",{component:t})}))}}},g={state:{menuTop:0,menuLeft:0,menuShow:!1},mutations:{showContextMenu:function(t,e){var n=e.top,o=e.left;t.menuShow=!0,t.menuTop=n,t.menuLeft=o},hideContextMenu:function(t){t.menuShow=!1}}},v=n("eae4"),y={state:{copyData:null,isCut:!1},mutations:{copy:function(t){t.curComponent&&(t.copyData={data:Object(d["b"])(t.curComponent),index:t.curComponentIndex},t.isCut=!1)},paste:function(t,e){if(t.copyData){var n=t.copyData.data;e?(n.style.top=t.menuTop,n.style.left=t.menuLeft):(n.style.top+=10,n.style.left+=10),n.id=Object(i["a"])(),"Group"===n.component&&n.propValue.forEach((function(t){t.id=Object(i["a"])()})),w.commit("addComponent",{component:Object(d["b"])(n)}),t.isCut&&(t.copyData=null)}else Object(v["a"])("请选择组件")},cut:function(t){if(t.curComponent){if(t.copyData){var e=Object(d["b"])(t.copyData.data),n=t.copyData.index;e.id=Object(i["a"])(),w.commit("addComponent",{component:e,index:n}),t.curComponentIndex>=n&&t.curComponentIndex++}w.commit("copy"),w.commit("deleteComponent"),t.isCut=!0}else Object(v["a"])("请选择组件")}}},j={mutations:{addEvent:function(t,e){var n=t.curComponent,o=e.event,a=e.param;n.events[o]=a},removeEvent:function(t,e){var n=t.curComponent;a["default"].delete(n.events,e)}}},O={mutations:{upComponent:function(t){var e=t.componentData,n=t.curComponentIndex;n<e.length-1?Object(d["c"])(e,n,n+1):Object(v["a"])("已经到顶了")},downComponent:function(t){var e=t.componentData,n=t.curComponentIndex;n>0?Object(d["c"])(e,n,n-1):Object(v["a"])("已经到底了")},topComponent:function(t){var e=t.componentData,n=t.curComponentIndex,o=t.curComponent;n<e.length-1?(e.splice(n,1),e.push(o)):Object(v["a"])("已经到顶了")},bottomComponent:function(t){var e=t.componentData,n=t.curComponentIndex,o=t.curComponent;n>0?(e.splice(n,1),e.unshift(o)):Object(v["a"])("已经到底了")}}},C=(n("7db0"),n("fb6a"),{state:{snapshotData:[],snapshotIndex:-1},mutations:{undo:function(t){if(t.snapshotIndex>=0){t.snapshotIndex--;var e=Object(d["b"])(t.snapshotData[t.snapshotIndex])||[];if(t.curComponent){var n=!e.find((function(e){return t.curComponent.id===e.id}));n&&w.commit("setCurComponent",{component:null,index:null})}w.commit("setComponentData",e)}},redo:function(t){t.snapshotIndex<t.snapshotData.length-1&&(t.snapshotIndex++,w.commit("setComponentData",Object(d["b"])(t.snapshotData[t.snapshotIndex])))},recordSnapshot:function(t){t.snapshotData[++t.snapshotIndex]=Object(d["b"])(t.componentData),t.snapshotIndex<t.snapshotData.length-1&&(t.snapshotData=t.snapshotData.slice(0,t.snapshotIndex+1))}}}),k={mutations:{lock:function(t){var e=t.curComponent;e.isLock=!0},unlock:function(t){var e=t.curComponent;e.isLock=!1}}},x={state:{isLogin:!1,userInfo:{},sid:""},mutations:{initSid:function(t){var e=localStorage.getItem("sid");e&&(t.sid=e)},setSid:function(t,e){t.sid=e},initUserInfo:function(t){var e=localStorage.getItem("userInfo");e&&(t.userInfo=JSON.parse(e),t.isLogin=!0)},login:function(t,e){t.isLogin=!0,t.userInfo={data:e.data,token:e.token,refreshToken:e.refreshToken},localStorage.setItem("userInfo",JSON.stringify(t.userInfo))},logout:function(t){t.isLogin=!1,t.userInfo={},localStorage.removeItem("userInfo")}}};a["default"].use(c["a"]);var S={state:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},r.state),b.state),g.state),y.state),j.state),O.state),C.state),k.state),x.state),{},{editMode:"edit",canvasStyleData:{layoutMode:"1",width:1200,height:740,scale:100},componentData:[],curComponent:null,curComponentIndex:null,isClickComponent:!1}),mutations:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},r.mutations),b.mutations),g.mutations),y.mutations),j.mutations),O.mutations),C.mutations),k.mutations),x.mutations),{},{setClickComponentStatus:function(t,e){t.isClickComponent=e},setEditMode:function(t,e){t.editMode=e},setCanvasStyle:function(t,e){t.canvasStyleData=e},setCurComponent:function(t,e){var n=e.component,o=e.index;t.curComponent=n,t.curComponentIndex=o},setShapeStyle:function(t,e){var n=t.curComponent,o=e.top,a=e.left,c=e.width,r=e.height,u=e.rotate;o&&(n.style.top=o),a&&(n.style.left=a),c&&(n.style.width=c),r&&(n.style.height=r),u&&(n.style.rotate=u)},setShapeSingleStyle:function(t,e){var n=t.curComponent,o=e.key,a=e.value;n.style[o]=a},setComponentData:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];a["default"].set(t,"componentData",e)},addComponent:function(t,e){var n=e.component,o=e.index;void 0!==o?t.componentData.splice(o,0,n):t.componentData.push(n)},deleteComponent:function(t,e){void 0===e&&(e=t.curComponentIndex),e==t.curComponentIndex&&(t.curComponentIndex=null,t.curComponent=null),t.componentData.splice(e,1)}})},w=e["a"]=new c["a"].Store(S)},"4e67":function(t,e,n){"use strict";n.r(e),n.d(e,"commonStyle",(function(){return a})),n.d(e,"commonAttr",(function(){return c}));for(var o=n("5530"),a={rotate:0,opacity:1},c={animations:[],events:{},groupStyle:{},isLock:!1},r=[{component:"v-text",label:"文字",propValue:"双击编辑文字",icon:"wenben",style:{width:200,height:22,fontSize:14,fontWeight:500,lineHeight:"",letterSpacing:0,textAlign:"",color:""},expandStyle:""},{component:"v-button",label:"按钮",propValue:"按钮",icon:"button",style:{width:100,height:34,borderWidth:1,borderColor:"",borderRadius:"",fontSize:14,fontWeight:500,lineHeight:"",letterSpacing:0,textAlign:"",color:"",backgroundColor:""},expandStyle:""},{component:"Picture",label:"图片",icon:"tupian",propValue:n("b2e4"),style:{width:300,height:200,borderRadius:""},expandStyle:""},{component:"rect-shape",label:"矩形",propValue:"&nbsp;",icon:"juxing",style:{width:200,height:200,fontSize:14,fontWeight:500,lineHeight:"",letterSpacing:0,textAlign:"center",color:"",borderColor:"#000",borderWidth:1,backgroundColor:"",borderStyle:"solid",verticalAlign:"middle"},expandStyle:""}],u=0,i=r.length;u<i;u++){var s=r[u];s.style=Object(o["a"])(Object(o["a"])({},a),s.style),r[u]=Object(o["a"])(Object(o["a"])({},c),s)}e["default"]=r},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("5c96"),c=n.n(a),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},u=[],i=(n("034f"),n("2877")),s={},d=Object(i["a"])(s,r,u,!1,null,null,null),l=d.exports,p=n("4360"),f=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));o["default"].use(f["a"]);var h=[{path:"/",name:"PageList",component:function(){return Promise.all([n.e("chunk-22e9c9d7"),n.e("chunk-a4206284")]).then(n.bind(null,"ee3e"))}},{path:"/Home/:id",name:"Home",component:function(){return Promise.all([n.e("chunk-22e9c9d7"),n.e("chunk-6b6e1dce")]).then(n.bind(null,"bb51"))}},{path:"/Item/:id",name:"Item",component:function(){return Promise.all([n.e("chunk-22e9c9d7"),n.e("chunk-3cdb93d0")]).then(n.bind(null,"f0df"))}}],m=new f["a"]({routes:h});n("9210"),n("be35"),n("ab97"),n("0fae"),n("5a8b");o["default"].use(c.a,{size:"small"}),o["default"].config.productionTip=!1,new o["default"]({el:"#app",router:m,store:p["a"],render:function(t){return t(l)}})},"5a8b":function(t,e,n){},"85ec":function(t,e,n){},9210:function(t,e,n){"use strict";n.r(e);n("d3b7"),n("3ca3"),n("ddb0");var o=n("2b0e"),a=["Picture","VText","VButton","Group","RectShape"];a.forEach((function(t){o["default"].component(t,(function(){return n("0d53")("./".concat(t))}))}))},"986e":function(t,e,n){"use strict";var o=n("2b0e");e["a"]=new o["default"]},a2ba:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return i})),n.d(e,"f",(function(){return s}));n("4360");function o(t){return t*Math.PI/180}function a(t,e,n){return{x:(t.x-e.x)*Math.cos(o(n))-(t.y-e.y)*Math.sin(o(n))+e.x,y:(t.x-e.x)*Math.sin(o(n))+(t.y-e.y)*Math.cos(o(n))+e.y}}function c(t,e){return{x:t.x+(e.x-t.x)/2,y:t.y+(e.y-t.y)/2}}function r(t){return Math.abs(Math.sin(o(t)))}function u(t){return Math.abs(Math.cos(o(t)))}function i(t){return(t+360)%360}function s(t){return 100*t+"%"}},a7f7:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return r}));var o=n("5530"),a=(n("159b"),n("b64b"),n("caad"),n("2532"),n("a2ba"));function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=["fontSize","width","height","top","left","borderWidth","letterSpacing","borderRadius"],o={};return Object.keys(t).forEach((function(a){e.includes(a)||("rotate"!=a?(o[a]=t[a],n.includes(a)&&(o[a]+="px")):o.transform=a+"("+t[a]+"deg)")})),o}function r(t){if(t=Object(o["a"])({},t),0!=t.rotate){var e=t.width*Object(a["b"])(t.rotate)+t.height*Object(a["e"])(t.rotate),n=(t.width-e)/2;t.left+=n,t.right=t.left+e;var c=t.height*Object(a["b"])(t.rotate)+t.width*Object(a["e"])(t.rotate),r=(c-t.height)/2;t.top-=r,t.bottom=t.top+c,t.width=e,t.height=c}else t.bottom=t.top+t.height,t.right=t.left+t.width;return t}},ab97:function(t,e,n){},ac24:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=0;function a(){return o++}},b2e4:function(t,e,n){t.exports=n.p+"img/title.ac55a42f.jpg"},be35:function(t,e,n){},eae4:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("5c96");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500;Object(o["Message"])({message:t,type:e,duration:n})}},fa7d:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return u}));var o=n("53ca"),a=n("2b0e");function c(t){if("object"==Object(o["a"])(t)){var e=Array.isArray(t)?[]:{};for(var n in t)"object"==Object(o["a"])(t[n])?e[n]=c(t[n]):e[n]=t[n];return e}return t}function r(t,e,n){var o=t[e];t[e]=t[n],a["default"].set(t,e,t[n]),a["default"].set(t,n,o)}function u(t){return document.querySelector(t)}}});
//# sourceMappingURL=app.c079e6c1.js.map