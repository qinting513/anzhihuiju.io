webpackJsonp([6],{"7ror":function(e,t){},ocRZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={components:{ending:function(e){return n.e(5).then(function(){return e(n("bd1L"))}.bind(null,n)).catch(n.oe)}},data:function(){return{showNextPage:!1,showIndex:!1,text:["看似美好的事物背后都隐藏着风险","我国是乳腺癌发病率","增长最快的国家之一","每10000人里面","就有4人确诊患乳腺癌","危险逼近","但你也许还对乳腺癌一无所知"]}},methods:{jump2Next:function(){this.toggleBgnIcon(!1),this.showNextPage=!0},swiper:function(e){switch(e.direction){case"Up":this.jump2Next();break;case"Down":this.$emit("back")}},backThisPage:function(){this.showNextPage=!1,this.$emit("change-bgm",1)},addText:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;setTimeout(function(){e.showIndex=!0},t)},changeBgm:function(e){this.$emit("change-bgm",e)},toggleBgnIcon:function(e){this.$emit("toggle-bgm-icon",e)}},mounted:function(){this.$nextTick(function(){document.addEventListener("touchmove",function(e){e.preventDefault()},!1)})}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.showNextPage?n("ending",{on:{back:e.backThisPage,"toggle-bgm-icon":e.toggleBgnIcon,"change-bgm":e.changeBgm}}):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.showNextPage,expression:"!showNextPage"},{name:"finger",rawName:"v-finger:swipe",value:e.swiper,expression:"swiper",arg:"swipe"}],staticClass:"swiper-next"},[n("div",{staticClass:"text"},[n("transition",{staticClass:"group-text",attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showIndex,expression:"showIndex"}]},[e._l(e.text,function(t,s){return n("p",{key:s+1,staticClass:"text-lh"},[e._v(e._s(t))])}),e._v(" "),n("div",{staticClass:"btn-more",on:{click:e.jump2Next}},[e._v("查看真实故事")])],2)])],1),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showIndex,expression:"showIndex"}],staticClass:"tips"},[e._v("数据来源：中国乳腺现状综述")])])],1)],1)},staticRenderFns:[]};var o=n("VU/8")(s,i,!1,function(e){n("7ror")},null,null);t.default=o.exports}});