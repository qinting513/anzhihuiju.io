webpackJsonp([5],{IABy:function(t,e){},bd1L:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{iconList:[n("fFsq"),n("l118")],wordList:["早筛，给生命以时光","腾讯觅影将AI技术应用于医学影像","助力医生进行癌症早筛","科技向善，愿人生的每一支舞","都不被打断"]}},methods:{browse:function(){window.location.href="http://bcra.appclaw.com/"},initVideo:function(){var t=new tvp.VideoInfo;t.setVid("j0740fnf1ei");var e=new tvp.Player;e.create({width:"100%",height:"100%",video:t,modId:"mod_player",autoplay:!1,pic:n("/m5l")}),e.onplaying=function(t){console.log(t)},e.onallended=function(t){console.log(t)}},swiper:function(t){switch(t.direction){case"Down":this.$emit("back");break;case"Up":this.browse()}}},mounted:function(){this.$nextTick(function(){document.addEventListener("touchmove",function(t){t.preventDefault()},!1)})}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"finger",rawName:"v-finger:swipe",value:t.swiper,expression:"swiper",arg:"swipe"}],staticClass:"end"},[i("iframe",{staticClass:"vif",attrs:{frameborder:"0",src:"https://v.qq.com/iframe/player.html?vid=q07434otbls&tiny=0&auto=0",allowfullscreen:""}}),t._v(" "),i("div",{staticClass:"bottom"},[t._l(t.wordList,function(e){return i("span",[t._v(t._s(e))])}),t._v(" "),i("img",{staticClass:"browse",attrs:{src:n("IohL")},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.browse(e)}}}),t._v(" "),i("img",{staticClass:"ending",attrs:{src:n("/bD5"),alt:""}}),t._v(" "),i("div",{staticClass:"iconList"},t._l(t.iconList,function(t){return i("img",{attrs:{src:t,alt:""}})}))],2)])},staticRenderFns:[]};var o=n("VU/8")(i,s,!1,function(t){n("IABy")},null,null);e.default=o.exports}});