(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cdb93d0"],{"25f0":function(t,e,n){"use strict";var a=n("6eeb"),r=n("825a"),c=n("d039"),i=n("ad6d"),o="toString",s=RegExp.prototype,u=s[o],l=c((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=o;(l||f)&&a(RegExp.prototype,o,(function(){var t=r(this),e=String(t.source),n=t.flags,a=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?i.call(t):n);return"/"+e+"/"+a}),{unsafe:!0})},"597b":function(t,e,n){},"998a":function(t,e,n){"use strict";n("597b")},ad6d:function(t,e,n){"use strict";var a=n("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b4d8:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c}));n("d3b7"),n("25f0");var a={redirect:function(t){t&&(window.location.href=t)},alert:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){t&&alert(t)}))},r={methods:a},c=[{key:"redirect",label:"跳转事件",event:a.redirect,param:""},{key:"alert",label:"alert 事件",event:a.alert,param:""}]},c5c4:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("1da1");n("96cf"),n("d3b7");function r(t){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n,a,r,c,i=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=i.length>1&&void 0!==i[1]?i[1]:[],a=function(t){return new Promise((function(n){e.classList.add(t.value,"animated");var a=function a(){e.removeEventListener("animationend",a),e.removeEventListener("animationcancel",a),e.classList.remove(t.value,"animated"),n()};e.addEventListener("animationend",a),e.addEventListener("animationcancel",a)}))},r=0,c=n.length;case 3:if(!(r<c)){t.next=9;break}return t.next=6,a(n[r]);case 6:r++,t.next=3;break;case 9:case"end":return t.stop()}}),t)}))),c.apply(this,arguments)}},df6e:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:t.handleClick}},[n(t.config.component,{tag:"component",staticClass:"component",style:t.getComponentStyle(t.config.style,t.config.expandStyle),attrs:{propValue:t.config.propValue,element:t.config}})],1)},r=[],c=n("5530"),i=n("53ca"),o=(n("498a"),n("159b"),n("b64b"),n("a7f7")),s=n("c5c4"),u=n("b4d8"),l={props:{config:{type:Object,require:!0}},mounted:function(){Object(s["a"])(this.$el,this.config.animations)},mixins:[u["b"]],methods:{getComponentStyle:function(t,e){var n=Object(o["b"])(t);if(!e||!e.trim())return n;try{var a=JSON.parse(e);return"object"===Object(i["a"])(a)?Object(c["a"])(Object(c["a"])({},n),a):n}catch(r){return console.log(r),n}},handleClick:function(){var t=this,e=this.config.events;Object.keys(e).forEach((function(n){t[n](e[n])}))}}},f=l,d=(n("998a"),n("2877")),p=Object(d["a"])(f,a,r,!1,null,"c83453c4",null);e["a"]=p.exports},f0df:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"canvas-container"},[n("div",{staticClass:"canvas",style:"1"===t.canvasStyleData.layoutMode?{width:t.canvasStyleData.width+"px",height:t.canvasStyleData.height+"px"}:{width:"100%",height:"auto"}},t._l(t.componentData,(function(t,e){return n("ComponentWrapper",{key:e,attrs:{config:t}})})),1)])},r=[],c=n("1da1"),i=(n("159b"),n("96cf"),n("df6e")),o=n("ac24"),s=n("365c"),u={components:{ComponentWrapper:i["a"]},data:function(){return{canvasStyleData:{},componentData:[]}},created:function(){this.initPage()},methods:{initPage:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,a,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.$router.history.current.params.id,!n){e.next=7;break}return e.next=4,Object(s["d"])(n);case 4:a=e.sent,r=a.data,200===r.code&&r.data.content&&(c=JSON.parse(r.data.content),t.canvasStyleData=c.canvasStyle,t.componentData=t.resetID(c.canvasData));case 7:case"end":return e.stop()}}),e)})))()},resetID:function(t){return t.forEach((function(t){t.id=Object(o["a"])()})),t}}},l=u,f=n("2877"),d=Object(f["a"])(l,a,r,!1,null,"dc535142",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-3cdb93d0.83305885.js.map