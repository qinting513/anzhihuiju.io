webpackJsonp([6],{UA9h:function(e,t){},ocRZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={components:{PopularScience:function(e){return n.e(4).then(function(){return e(n("o1mC"))}.bind(null,n)).catch(n.oe)}},data:function(){return{showNextPage:!1,showIndex:!1,text:["看似美好的事物背后都隐藏着风险","我国是乳腺癌发病率","增长最快的国家之一","每10000人里面","就有4人确诊患乳腺癌","危险逼近","但你也许还对乳腺癌一无所知"]}},methods:{jump2Next:function(){this.showNextPage=!0},swiper:function(e){switch(e.direction){case"Up":this.jump2Next(),this.$emit("change-bgm",2);break;case"Down":this.$emit("back")}},backThisPage:function(){this.showNextPage=!1,this.$emit("change-bgm",1)},addText:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;setTimeout(function(){e.showIndex=!0},t)},changeBgm:function(e){this.$emit("change-bgm",e)},toggleBgnIcon:function(e){this.$emit("toggle-bgm-icon",e)}},mounted:function(){this.$nextTick(function(){document.addEventListener("touchmove",function(e){e.preventDefault()},!1)})}},s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.showNextPage?i("popular-science",{on:{back:e.backThisPage,"toggle-bgm-icon":e.toggleBgnIcon}}):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.showNextPage,expression:"!showNextPage"},{name:"finger",rawName:"v-finger:swipe",value:e.swiper,expression:"swiper",arg:"swipe"}],staticClass:"swiper-next"},[i("div",{staticClass:"text"},[i("transition",{staticClass:"group-text",attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showIndex,expression:"showIndex"}]},[e._l(e.text,function(t,n){return i("p",{key:n+1,staticClass:"text-lh"},[e._v(e._s(t))])}),e._v(" "),i("img",{staticClass:"bottom-btn",attrs:{src:n("keJJ")}})],2)])],1)])],1)},staticRenderFns:[]};var o=n("VU/8")(i,s,!1,function(e){n("UA9h")},null,null);t.default=o.exports}});