webpackJsonp([1,2],{Ju8T:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var g={components:{SwiperNext:t("ocRZ").default},data:function(){return{showSwiperNext:!1,pageSize:{width:0,height:0},longVideoArr0:[],longVideoArr1:[],longVideoArr2:[],longVideoArr3:[],shortVideoArr0:[],shortVideoArr1:[],shortVideoArr2:[],shortVideoArr3:[],shortVideoNumList:[29,29,29,29],shortCanvasDOM:null,longCanvasDOM:null,longCtx:null,shortCtx:[],touchStartPoint:{clientX:null,clientY:null},offsetY:0,index:0,isSwipering:!1,isCanvasShow:!1,intervalTimer:null,timeoutTimer:null,frameNum:15,upendSpeed:3,longVideoCount:0,isSatisfied:!1,picWordList:["冰面","星空","海洋","岩石"],swiperCardList:[{height:96.46,videoTop:15.3,borderTop:17.63,borderHeight:145.17,bgUrl:t("Nzh7"),postSrc:t("8evD"),borderImgSrc:t("O/0A"),longPressSrc:t("jRgP"),longVideoWordPicList:[t("K9gw"),t("gIpr"),t("DVkb"),t("ZmUK"),t("RiA5")],thirdPicSize:{width:595/12.42,height:304/12.42},fourthPicSize:{width:238/12.42,height:95/12.42,left:560/12.42,top:852/12.42}},{height:83.9,videoTop:18.52,borderTop:20.61,borderHeight:142.27,bgUrl:t("7Gu/"),postSrc:t("6yoN"),borderImgSrc:t("E1Sg"),longPressSrc:t("aPFU"),longVideoWordPicList:[t("Oo5d"),t("Dhe6"),t("gUsC"),t("XPvk"),t("RiA5")],thirdPicSize:{width:520/12.42,height:226/12.42},fourthPicSize:{width:539/12.42,height:107/12.42,left:321/12.42,top:889/12.42}},{height:57.97,videoTop:16.91,borderTop:35.43,borderHeight:127.456,bgUrl:t("Nzh7"),postSrc:t("jMBG"),borderImgSrc:t("ohzi"),longPressSrc:t("oj/A"),longVideoWordPicList:[t("fHjD"),t("cbbf"),t("FAIc"),t("RHtJ"),t("RiA5")],thirdPicSize:{width:503/12.42,height:311/12.42},fourthPicSize:{width:242/12.42,height:96/12.42,left:663/12.42,top:1024/12.42}},{height:93.24,videoTop:26.73,borderTop:6.68,borderHeight:156.12,bgUrl:t("7Gu/"),postSrc:t("ShZS"),borderImgSrc:t("igA9"),longPressSrc:t("EekA"),longVideoWordPicList:[t("Oydr"),t("vIme"),t("dh2t"),t("Q1Bi"),t("RiA5")],thirdPicSize:{width:595/12.42,height:304/12.42},fourthPicSize:{width:528/12.42,height:125/12.42,left:272/12.42,top:964/12.42}}],longTouchRange:{xRange:[16.2,67.6],yRange:[130.6,32.21]},leftArrowRange:{xRange:[1.6,12.32],yRange:[71.1,16.75]},rightArrowRange:{xRange:[86.07,12.32],yRange:[71.1,16.75]},downArrowRange:{xRange:[46.86,16.28],yRange:[171.18,13.06]},swiperDownRange:{xRange:[0,100],yRange:[129,39,60.95]}}},computed:{swiperStyle:function(){return{"-webkit-transform":"translate3d(-"+25*this.index+"%,0,0)"}}},watch:{index:function(e){this.$emit("play-audio",e+1)}},methods:{validate:function(e,i,t,g,p,o){var s=e/this.pageSize.width*100,n=(i-this.offsetY)/this.pageSize.width*100;return s>=t&&s<=g&&n>=p&&n<=o},tapArrow:function(e){if(!1===this.isCanvasShow){for(var i={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY},t=[this.leftArrowRange,this.rightArrowRange,this.downArrowRange],g=void 0,p=void 0,o=void 0,s=void 0,n=null,r=0;r<t.length;r++)if(g=t[r].xRange[0],p=t[r].xRange[0]+t[r].xRange[1],o=t[r].yRange[0],s=t[r].yRange[0]+t[r].yRange[1],this.validate(i.x,i.y,g,p,o,s)){n=r;break}switch(console.log(n),n){case 0:0!==this.index&&this.setIndex(this.index-1);break;case 1:3!==this.index&&this.setIndex(this.index+1);break;case 2:this.showNextPage()}}},showNextPage:function(){this.$emit("pause-audio"),this.showSwiperNext=!0,this.$refs.next.addText()},swiper:function(e){switch(e.direction){case"Left":3===this.index||this.isCanvasShow||this.setIndex(this.index+1);break;case"Right":0===this.index||this.isCanvasShow||this.setIndex(this.index-1);break;case"Up":this.isSatisfied&&!this.isCanvasShow&&this.showNextPage()}},shortVideoPlay:function(e){var i=this;this.intervalTimer&&clearInterval(this.intervalTimer);var t=0;this.intervalTimer=setInterval(function(){i.shortCtx[e].drawImage(i["shortVideoArr"+e][t],0,0,.58*i.pageSize.width,.01*i.swiperCardList[e].height*i.pageSize.height),++t>=i.shortVideoNumList[i.index]&&(t=0)},1e3/this.frameNum)},initCanvas:function(e){this.shortCtx[e].drawImage(this["shortVideoArr"+e][0],0,0,.58*this.pageSize.width,.01*this.swiperCardList[e].height*this.pageSize.height)},setIndex:function(e){var i=this;this.initCanvas(e),this.index=e,this.isSwipering=!0,this.timeoutTimer&&clearTimeout(this.timeoutTimer),this.timeoutTimer=setTimeout(function(){i.isSwipering=!1,clearTimeout(i.timeoutTimer),i.shortVideoPlay(i.index)},500)},longTap:function(e){var i=this;this.$emit("pause-audio"),console.log("longTap");var t={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY},g=this.longTouchRange.xRange[0],p=this.longTouchRange.xRange[0]+this.longTouchRange.xRange[1],o=this.longTouchRange.yRange[0],s=this.longTouchRange.yRange[0]+this.longTouchRange.yRange[1];this.validate(t.x,t.y,g,p,o,s)&&(this.longVideoCount=0,this.longCtx.drawImage(this["longVideoArr"+this.index][this.longVideoCount],0,0,this.pageSize.width,this.pageSize.height),this.isCanvasShow=!0,clearInterval(this.intervalTimer),this.intervalTimer=setInterval(function(){i.longVideoCount++,i.longVideoCount<=138?(i.longVideoCount>=i.frameNum&&(i.isSatisfied=!0),i.longVideoCount>=94?i.longCtx.drawImage(i["longVideoArr"+i.index][93],0,0,i.pageSize.width,i.pageSize.height):i.longCtx.drawImage(i["longVideoArr"+i.index][i.longVideoCount],0,0,i.pageSize.width,i.pageSize.height)):(i.longVideoCount--,clearInterval(i.intervalTimer))},1e3/this.frameNum))},touchend:function(){var e=this;this.isCanvasShow&&(clearInterval(this.intervalTimer),this.longVideoCount>10&&(this.longVideoCount=10),this.intervalTimer=setInterval(function(){console.log(e.isCanvasShow),e.longVideoCount>=0?(e.longCtx.drawImage(e["longVideoArr"+e.index][e.longVideoCount],0,0,e.pageSize.width,e.pageSize.height),e.longVideoCount--):(e.isCanvasShow=!1,e.longVideoCount=0,clearInterval(e.intervalTimer),e.shortVideoPlay(e.index),e.$emit("play-audio",e.index+1))},1e3/this.frameNum/this.upendSpeed))}},created:function(){for(var e=0;e<4;e++){for(var i=0;i<=this.shortVideoNumList[e];i++)this["shortVideoArr"+e][i]=new Image,this["shortVideoArr"+e][i].src=t("Pt5g")("./0"+(e+1)+"/0"+(e+1)+"_微动"+i.toString().padStart(2,"0")+".jpg");console.log(this["shortVideoArr"+e]);for(var g=0;g<=93;g++)this["longVideoArr"+e][g]=new Image,this["longVideoArr"+e][g].src=t("ymAB")("./0"+(e+1)+"/0"+(e+1)+"_"+(this.picWordList[e]+g.toString().padStart(3,"0"))+".jpg");console.log(this["longVideoArr"+e])}},mounted:function(){this.shortCanvasDOM=document.getElementsByClassName("shortCanvas"),this.longCanvasDOM=document.getElementsByClassName("longCanvas")[0];var e=document.getElementsByClassName("swiper-img")[0];this.pageSize.width=e.getBoundingClientRect().width,this.pageSize.height=e.getBoundingClientRect().height,this.offsetY=(this.pageSize.height-1.9034*this.pageSize.width)/2,this.downArrowRange.yRange[0]=this.offsetY<0?(2226/2364*this.pageSize.height-this.offsetY)/this.pageSize.width*100:2126/2364*this.pageSize.width*1.9/this.pageSize.width*100,console.log("this.downArrowRange.yRange[0]",this.downArrowRange.yRange[0]),this.longCtx=this.longCanvasDOM.getContext("2d");for(var i=0;i<4;i++)this.shortCtx[i]=this.shortCanvasDOM[i].getContext("2d");this.shortVideoPlay(this.index),document.oncontextmenu=function(e){e.preventDefault()},document.addEventListener("touchmove",function(e){e.preventDefault()},!1)}},p={render:function(){var e=this,i=e.$createElement,g=e._self._c||i;return g("div",{staticClass:"swiper-img"},[g("swiper-next",{ref:"next",style:{opacity:e.showSwiperNext?1:0}}),e._v(" "),g("div",{directives:[{name:"show",rawName:"v-show",value:!e.showSwiperNext,expression:"!showSwiperNext"}],staticClass:"swiper-fixed"},[g("div",{staticClass:"swiper-container",style:e.swiperStyle},e._l(e.swiperCardList,function(i,t){return g("div",{staticClass:"swiper-card",style:{backgroundImage:"url("+i.bgUrl+")"}},[g("div",{staticClass:"container",style:{height:i.borderHeight+"vw",top:i.borderTop+"vw",backgroundImage:"url("+i.borderImgSrc+")"}}),e._v(" "),g("canvas",{staticClass:"shortCanvas",style:{top:i.videoTop+i.borderTop+"vw",height:i.height+"vw"},attrs:{width:.58*e.pageSize.width,height:.01*i.height*e.pageSize.height}}),e._v(" "),g("img",{attrs:{src:i.longPressSrc,alt:"长按查看"}})])})),e._v(" "),0!==e.index?g("img",{class:["left","btn",{isTransparent:e.isSwipering}],attrs:{src:t("fLW0"),alt:"右滑"}}):e._e(),e._v(" "),3!==e.index?g("img",{class:["right","btn",{isTransparent:e.isSwipering}],attrs:{src:t("yHrG"),alt:"左滑"}}):e._e(),e._v(" "),g("img",{class:["click","btn",{isTransparent:e.isSwipering||!e.isSatisfied}],style:{bottom:e.offsetY<0?100/2364*e.pageSize.height-e.offsetY+"px":200/2364*e.pageSize.height+"px"},attrs:{src:t("hFx7"),alt:"查看详细"}}),e._v(" "),g("canvas",{directives:[{name:"finger",rawName:"v-finger:tap",value:e.tapArrow,expression:"tapArrow",arg:"tap"},{name:"finger",rawName:"v-finger:swipe",value:e.swiper,expression:"swiper",arg:"swipe"},{name:"finger",rawName:"v-finger:long-tap",value:e.longTap,expression:"longTap",arg:"long-tap"},{name:"finger",rawName:"v-finger:touch-end",value:e.touchend,expression:"touchend",arg:"touch-end"}],staticClass:"longCanvas",style:{opacity:e.isCanvasShow?1:0},attrs:{width:e.pageSize.width,height:e.pageSize.height}}),e._v(" "),g("img",{directives:[{name:"show",rawName:"v-show",value:e.longVideoCount>=88,expression:"longVideoCount >= 88"}],staticClass:"longVideoWordPic pic1",style:{top:e.offsetY<0?7.25-e.offsetY/e.pageSize.width*100+"vw":"7.25vw"},attrs:{src:e.swiperCardList[this.index].longVideoWordPicList[0],alt:""}}),e._v(" "),g("img",{directives:[{name:"show",rawName:"v-show",value:e.longVideoCount>=88,expression:"longVideoCount >= 88"}],staticClass:"longVideoWordPic pic2",style:{top:e.offsetY<0?7.25-e.offsetY/e.pageSize.width*100+"vw":"7.25vw"},attrs:{src:e.swiperCardList[this.index].longVideoWordPicList[1],alt:""}}),e._v(" "),g("img",{directives:[{name:"show",rawName:"v-show",value:e.longVideoCount>=109,expression:"longVideoCount >= 109"}],staticClass:"longVideoWordPic pic3",style:{opacity:e.longVideoCount>=127?1:(e.longVideoCount-109)/18,top:e.offsetY<0?28.5-e.offsetY/e.pageSize.width*100+"vw":"28.5vw",width:e.swiperCardList[e.index].thirdPicSize.width+"vw",height:e.swiperCardList[e.index].thirdPicSize.height+"vw"},attrs:{src:e.swiperCardList[this.index].longVideoWordPicList[2],alt:""}}),e._v(" "),g("img",{directives:[{name:"show",rawName:"v-show",value:e.longVideoCount>=129,expression:"longVideoCount >= 129"}],staticClass:"longVideoWordPic pic4",style:{opacity:e.longVideoCount>=139?1:(e.longVideoCount-129)/10,top:e.offsetY<0?e.swiperCardList[e.index].fourthPicSize.top-e.offsetY/e.pageSize.width*100+"vw":e.swiperCardList[e.index].fourthPicSize.top+"vw",left:e.swiperCardList[e.index].fourthPicSize.left+"vw",width:e.swiperCardList[e.index].fourthPicSize.width+"vw",height:e.swiperCardList[e.index].fourthPicSize.height+"vw"},attrs:{src:e.swiperCardList[this.index].longVideoWordPicList[3],alt:""}}),e._v(" "),g("img",{directives:[{name:"show",rawName:"v-show",value:e.longVideoCount>=69,expression:"longVideoCount >= 69"}],staticClass:"longVideoWordPic pic5",style:{opacity:e.longVideoCount>=81?1:(e.longVideoCount-69)/12,bottom:e.offsetY<0?12.88-e.offsetY/e.pageSize.width*100+"vw":"12.88vw"},attrs:{src:e.swiperCardList[this.index].longVideoWordPicList[4],alt:""}})])],1)},staticRenderFns:[]};var o=t("VU/8")(g,p,!1,function(e){t("Z/P7")},null,null);i.default=o.exports},OUIs:function(e,i){},PGcd:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var g={components:{SwiperImg:t("Ju8T").default},data:function(){return{showOne:!1,showTwo:!1,showSwiper:!1,loadSwiper:!1,showText:!0,audioIdx:0,isPlayAudio:!1,audioList:["turn_on_light","01_循环_冰面","02_循环_宇宙","03_循环_海浪","04_循环_岩石","long_tap"]}},methods:{getAudioPath:function(){return t("vgXv")("./"+this.audioList[this.audioIdx]+".mp3")},playAudio:function(e){this.isPlayAudio=!0,this.audioIdx=e,this.$refs.myAudio.loop=0!=e&&-1!=e,-1==e&&(this.audioIdx=this.audioList.length-1),console.log("idx=",e),this.$refs.myAudio.src=this.getAudioPath(),this.isIOS()&&(this.$refs.myAudio.load(),this.$refs.myAudio.pause(),this.$refs.myAudio.currentTime=0),this.$refs.myAudio.play()},pauseAudio:function(){this.isPlayAudio=!1,this.$refs.myAudio.pause()},jump2Next:function(){var e=this;setTimeout(function(){e.showText=!1,setTimeout(function(){e.showSwiper=!0,e.$refs.myAudio.play(),setTimeout(function(){e.playAudio(1)},3e3)},1e3)},4e3)},addText:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.loadSwiper=!0,setTimeout(function(){e.showOne?e.showTwo||(e.showTwo=!0,e.jump2Next()):(e.showOne=!0,e.addText(3e3))},i)},isIOS:function(){var e=navigator.userAgent;navigator.appVersion,e.indexOf("Android")>-1||e.indexOf("Linux");return!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}},mounted:function(){this.$nextTick(function(){document.addEventListener("touchmove",function(e){e.preventDefault()},!1);var e=this;this.$refs.myAudio.addEventListener("canplay",function(){e.isPlayAudio&&(e.isIOS()&&(this.pause(),this.currentTime=0),this.play())},!1),this.$refs.bcgAudio.addEventListener("canplay",function(){e.isIOS()&&(this.pause(),this.currentTime=0),this.play()},!1),this.$refs.myAudio.addEventListener("error",function(e){console.log("音频出错了--e=")},!1),this.$refs.myAudio.addEventListener("onload",function(e){console.log("音频 onload --e=")},!1),document.addEventListener("WeixinJSBridgeReady",function(){console.log("WeixinJSBridgeReady---"),e.isPlayAudio?(e.isIOS()&&(e.$refs.myAudio.pause(),e.$refs.myAudio.currentTime=0),e.$refs.myAudio.play()):e.isIOS()&&(e.$refs.myAudio.play(),e.$refs.myAudio.pause()),e.isIOS()?(e.$refs.bcgAudio.pause(),e.$refs.bcgAudio.currentTime=0,e.$refs.bcgAudio.play()):e.$refs.bcgAudio.play()},!1),document.addEventListener("YixinJSBridgeReady",function(){e.isPlayAudio?(e.isIOS()&&(e.$refs.myAudio.pause(),e.$refs.myAudio.currentTime=0),e.$refs.myAudio.play()):e.isIOS()&&(e.$refs.myAudio.play(),e.$refs.myAudio.pause()),e.isIOS()?(e.$refs.bcgAudio.pause(),e.$refs.bcgAudio.currentTime=0,e.$refs.bcgAudio.play()):e.$refs.bcgAudio.play()},!1)})},created:function(){window.onload=this.addText}},p={render:function(){var e=this,i=e.$createElement,g=e._self._c||i;return g("div",[g("audio",{ref:"bcgAudio",attrs:{controls:"",hidden:"",loop:""}},[g("source",{attrs:{src:t("aigB"),type:"audio/mpeg"}}),e._v("\n    您的浏览器不支持\n  ")]),e._v(" "),g("audio",{ref:"myAudio",attrs:{controls:"",hidden:""}},[g("source",{attrs:{src:e.getAudioPath(),type:"audio/mpeg"}}),e._v("\n    您的浏览器不支持\n  ")]),e._v(" "),g("swiper-img",{style:{opacity:e.showSwiper?1:0},on:{"play-audio":e.playAudio,"pause-audio":e.pauseAudio}}),e._v(" "),g("transition",{attrs:{name:"light"}},[g("div",{directives:[{name:"show",rawName:"v-show",value:!e.showSwiper,expression:"!showSwiper"}],staticClass:"loading"},[g("div",{directives:[{name:"show",rawName:"v-show",value:e.showText,expression:"showText"}],staticClass:"text"},[g("transition-group",{attrs:{name:"fade"}},[g("p",{directives:[{name:"show",rawName:"v-show",value:e.showOne,expression:"showOne"}],key:1},[e._v("你将看到一组特殊的影视作品")]),e._v(" "),g("p",{directives:[{name:"show",rawName:"v-show",value:e.showTwo,expression:"showTwo"}],key:2},[e._v("它们来自一群「特别」的作者")])])],1),e._v(" "),g("div",{directives:[{name:"show",rawName:"v-show",value:e.showText,expression:"showText"}],staticClass:"gif-img"})])])],1)},staticRenderFns:[]};var o=t("VU/8")(g,p,!1,function(e){t("OUIs")},null,null);i.default=o.exports},Pt5g:function(e,i,t){var g={"./01/01_微动00.jpg":"fVbW","./01/01_微动01.jpg":"TuPR","./01/01_微动02.jpg":"bEpp","./01/01_微动03.jpg":"VfaH","./01/01_微动04.jpg":"VTN0","./01/01_微动05.jpg":"KoBi","./01/01_微动06.jpg":"nftT","./01/01_微动07.jpg":"Mvuf","./01/01_微动08.jpg":"+WKw","./01/01_微动09.jpg":"NW1f","./01/01_微动10.jpg":"m48m","./01/01_微动11.jpg":"xOyO","./01/01_微动12.jpg":"sT7o","./01/01_微动13.jpg":"PQP0","./01/01_微动14.jpg":"ZMPg","./01/01_微动15.jpg":"OkLr","./01/01_微动16.jpg":"FV0K","./01/01_微动17.jpg":"xLnb","./01/01_微动18.jpg":"wfyx","./01/01_微动19.jpg":"Ucuj","./01/01_微动20.jpg":"Iodw","./01/01_微动21.jpg":"e1gh","./01/01_微动22.jpg":"828M","./01/01_微动23.jpg":"sudu","./01/01_微动24.jpg":"TuZF","./01/01_微动25.jpg":"tABZ","./01/01_微动26.jpg":"0zBs","./01/01_微动27.jpg":"JN53","./01/01_微动28.jpg":"1kOH","./01/01_微动29.jpg":"R2Cn","./02/02_微动00.jpg":"4B40","./02/02_微动01.jpg":"jkEx","./02/02_微动02.jpg":"QfgT","./02/02_微动03.jpg":"+2RM","./02/02_微动04.jpg":"RJhx","./02/02_微动05.jpg":"0dLM","./02/02_微动06.jpg":"Mioc","./02/02_微动07.jpg":"rF5N","./02/02_微动08.jpg":"NTBo","./02/02_微动09.jpg":"DTfF","./02/02_微动10.jpg":"ZDw0","./02/02_微动11.jpg":"Siv3","./02/02_微动12.jpg":"P+V0","./02/02_微动13.jpg":"Y/rL","./02/02_微动14.jpg":"aBQW","./02/02_微动15.jpg":"85+V","./02/02_微动16.jpg":"kC+L","./02/02_微动17.jpg":"8Fkp","./02/02_微动18.jpg":"pzua","./02/02_微动19.jpg":"4oY1","./02/02_微动20.jpg":"Gq+A","./02/02_微动21.jpg":"cFc1","./02/02_微动22.jpg":"GflV","./02/02_微动23.jpg":"WUuY","./02/02_微动24.jpg":"W86K","./02/02_微动25.jpg":"YY/u","./02/02_微动26.jpg":"QsDx","./02/02_微动27.jpg":"RQEK","./02/02_微动28.jpg":"NIvc","./02/02_微动29.jpg":"kgux","./03/03_微动00.jpg":"PTQK","./03/03_微动01.jpg":"xRlj","./03/03_微动02.jpg":"JqsG","./03/03_微动03.jpg":"cLiy","./03/03_微动04.jpg":"CBi4","./03/03_微动05.jpg":"jCqi","./03/03_微动06.jpg":"OBvT","./03/03_微动07.jpg":"Igs/","./03/03_微动08.jpg":"RVO6","./03/03_微动09.jpg":"eHgf","./03/03_微动10.jpg":"xShU","./03/03_微动11.jpg":"4FPx","./03/03_微动12.jpg":"Ubj5","./03/03_微动13.jpg":"ZzR+","./03/03_微动14.jpg":"kLJP","./03/03_微动15.jpg":"iUfL","./03/03_微动16.jpg":"AQxJ","./03/03_微动17.jpg":"8WCR","./03/03_微动18.jpg":"PlRO","./03/03_微动19.jpg":"nS28","./03/03_微动20.jpg":"jPlF","./03/03_微动21.jpg":"p/tQ","./03/03_微动22.jpg":"7DZO","./03/03_微动23.jpg":"Sojr","./03/03_微动24.jpg":"EEge","./03/03_微动25.jpg":"9G37","./03/03_微动26.jpg":"J7sT","./03/03_微动27.jpg":"AWaU","./03/03_微动28.jpg":"c2Jr","./03/03_微动29.jpg":"jSCW","./04/04_微动00.jpg":"qukE","./04/04_微动01.jpg":"3wwt","./04/04_微动02.jpg":"P243","./04/04_微动03.jpg":"BUCl","./04/04_微动04.jpg":"QYAl","./04/04_微动05.jpg":"0EYR","./04/04_微动06.jpg":"tj72","./04/04_微动07.jpg":"xpVd","./04/04_微动08.jpg":"lCGW","./04/04_微动09.jpg":"A67S","./04/04_微动10.jpg":"byPW","./04/04_微动11.jpg":"HgXB","./04/04_微动12.jpg":"ppRB","./04/04_微动13.jpg":"Q4rz","./04/04_微动14.jpg":"7Rl5","./04/04_微动15.jpg":"jZ0P","./04/04_微动16.jpg":"GYA/","./04/04_微动17.jpg":"qhH7","./04/04_微动18.jpg":"kB5+","./04/04_微动19.jpg":"aEqa","./04/04_微动20.jpg":"Bzop","./04/04_微动21.jpg":"6baY","./04/04_微动22.jpg":"ja76","./04/04_微动23.jpg":"LM1C","./04/04_微动24.jpg":"lNGC","./04/04_微动25.jpg":"o2H2","./04/04_微动26.jpg":"BHhR","./04/04_微动27.jpg":"79NE","./04/04_微动28.jpg":"6Sp+","./04/04_微动29.jpg":"de6m"};function p(e){return t(o(e))}function o(e){var i=g[e];if(!(i+1))throw new Error("Cannot find module '"+e+"'.");return i}p.keys=function(){return Object.keys(g)},p.resolve=o,e.exports=p,p.id="Pt5g"},"Z/P7":function(e,i){},vgXv:function(e,i,t){var g={"./01_循环_冰面.mp3":"we4u","./02_循环_宇宙.mp3":"8bH8","./03_循环_海浪.mp3":"xIjK","./04_循环_岩石.mp3":"+Yca","./bcg-music.mp3":"aigB","./long_tap.mp3":"aOwS","./turn_on_light.mp3":"1gFx"};function p(e){return t(o(e))}function o(e){var i=g[e];if(!(i+1))throw new Error("Cannot find module '"+e+"'.");return i}p.keys=function(){return Object.keys(g)},p.resolve=o,e.exports=p,p.id="vgXv"},ymAB:function(e,i,t){var g={"./01/01_冰面000.jpg":"hdvU","./01/01_冰面001.jpg":"2WdC","./01/01_冰面002.jpg":"Ib3L","./01/01_冰面003.jpg":"KMGa","./01/01_冰面004.jpg":"AjqJ","./01/01_冰面005.jpg":"YqfI","./01/01_冰面006.jpg":"XiAC","./01/01_冰面007.jpg":"YJOH","./01/01_冰面008.jpg":"lRtz","./01/01_冰面009.jpg":"bBN9","./01/01_冰面010.jpg":"xOak","./01/01_冰面011.jpg":"DA4G","./01/01_冰面012.jpg":"865U","./01/01_冰面013.jpg":"dvKq","./01/01_冰面014.jpg":"Y/L+","./01/01_冰面015.jpg":"Zr4q","./01/01_冰面016.jpg":"p7W6","./01/01_冰面017.jpg":"R7Sx","./01/01_冰面018.jpg":"RFqM","./01/01_冰面019.jpg":"kx5P","./01/01_冰面020.jpg":"6SVs","./01/01_冰面021.jpg":"qd3l","./01/01_冰面022.jpg":"chLh","./01/01_冰面023.jpg":"J5lD","./01/01_冰面024.jpg":"ca8Q","./01/01_冰面025.jpg":"c7Z2","./01/01_冰面026.jpg":"fIwc","./01/01_冰面027.jpg":"hGU4","./01/01_冰面028.jpg":"KJPH","./01/01_冰面029.jpg":"0Wx7","./01/01_冰面030.jpg":"56Ai","./01/01_冰面031.jpg":"kQit","./01/01_冰面032.jpg":"PCVJ","./01/01_冰面033.jpg":"+xPj","./01/01_冰面034.jpg":"fV7F","./01/01_冰面035.jpg":"PSIQ","./01/01_冰面036.jpg":"GJR7","./01/01_冰面037.jpg":"phQ9","./01/01_冰面038.jpg":"odcE","./01/01_冰面039.jpg":"Zb3C","./01/01_冰面040.jpg":"h6rN","./01/01_冰面041.jpg":"9QgF","./01/01_冰面042.jpg":"H8Pu","./01/01_冰面043.jpg":"RNsL","./01/01_冰面044.jpg":"B9iH","./01/01_冰面045.jpg":"P634","./01/01_冰面046.jpg":"QtjL","./01/01_冰面047.jpg":"22zB","./01/01_冰面048.jpg":"ReMG","./01/01_冰面049.jpg":"5hmm","./01/01_冰面050.jpg":"uMXm","./01/01_冰面051.jpg":"2SAW","./01/01_冰面052.jpg":"DJxE","./01/01_冰面053.jpg":"exzw","./01/01_冰面054.jpg":"ONKO","./01/01_冰面055.jpg":"UkDv","./01/01_冰面056.jpg":"8nv9","./01/01_冰面057.jpg":"nKwj","./01/01_冰面058.jpg":"0vNJ","./01/01_冰面059.jpg":"eXAx","./01/01_冰面060.jpg":"5dEU","./01/01_冰面061.jpg":"tr0H","./01/01_冰面062.jpg":"ZFXF","./01/01_冰面063.jpg":"/mNo","./01/01_冰面064.jpg":"vxZ4","./01/01_冰面065.jpg":"9Yxe","./01/01_冰面066.jpg":"G3zH","./01/01_冰面067.jpg":"6NTy","./01/01_冰面068.jpg":"0E7H","./01/01_冰面069.jpg":"VJMh","./01/01_冰面070.jpg":"sG8n","./01/01_冰面071.jpg":"bhCu","./01/01_冰面072.jpg":"Hgcw","./01/01_冰面073.jpg":"g4My","./01/01_冰面074.jpg":"XTP3","./01/01_冰面075.jpg":"ISxx","./01/01_冰面076.jpg":"jsdi","./01/01_冰面077.jpg":"ddqS","./01/01_冰面078.jpg":"d+pF","./01/01_冰面079.jpg":"2s8C","./01/01_冰面080.jpg":"4DnG","./01/01_冰面081.jpg":"eQ3q","./01/01_冰面082.jpg":"7E9O","./01/01_冰面083.jpg":"TkDl","./01/01_冰面084.jpg":"f8c8","./01/01_冰面085.jpg":"sfu1","./01/01_冰面086.jpg":"mi7H","./01/01_冰面087.jpg":"JA58","./01/01_冰面088.jpg":"KOeQ","./01/01_冰面089.jpg":"aJvP","./01/01_冰面090.jpg":"T9qT","./01/01_冰面091.jpg":"d+OZ","./01/01_冰面092.jpg":"+ve3","./01/01_冰面093.jpg":"FI+M","./02/02_星空000.jpg":"pD4C","./02/02_星空001.jpg":"UmPS","./02/02_星空002.jpg":"CPAT","./02/02_星空003.jpg":"f+Ad","./02/02_星空004.jpg":"BnTR","./02/02_星空005.jpg":"LcNh","./02/02_星空006.jpg":"ogVE","./02/02_星空007.jpg":"puuq","./02/02_星空008.jpg":"hfzk","./02/02_星空009.jpg":"/vZI","./02/02_星空010.jpg":"0SrU","./02/02_星空011.jpg":"QBwO","./02/02_星空012.jpg":"5Elm","./02/02_星空013.jpg":"tpRf","./02/02_星空014.jpg":"HdUW","./02/02_星空015.jpg":"VyB/","./02/02_星空016.jpg":"Czkl","./02/02_星空017.jpg":"NN07","./02/02_星空018.jpg":"fapr","./02/02_星空019.jpg":"QlXE","./02/02_星空020.jpg":"nFI/","./02/02_星空021.jpg":"tCF6","./02/02_星空022.jpg":"xpOw","./02/02_星空023.jpg":"lumY","./02/02_星空024.jpg":"GMe6","./02/02_星空025.jpg":"Uca/","./02/02_星空026.jpg":"xP4Y","./02/02_星空027.jpg":"kcBh","./02/02_星空028.jpg":"+W9A","./02/02_星空029.jpg":"uShD","./02/02_星空030.jpg":"tSCv","./02/02_星空031.jpg":"2klT","./02/02_星空032.jpg":"Yzup","./02/02_星空033.jpg":"yNBy","./02/02_星空034.jpg":"gF7r","./02/02_星空035.jpg":"uJ0r","./02/02_星空036.jpg":"vpla","./02/02_星空037.jpg":"VGhw","./02/02_星空038.jpg":"zPeV","./02/02_星空039.jpg":"oGIW","./02/02_星空040.jpg":"JENY","./02/02_星空041.jpg":"NB+0","./02/02_星空042.jpg":"rjGP","./02/02_星空043.jpg":"cUaP","./02/02_星空044.jpg":"P8a/","./02/02_星空045.jpg":"SsDG","./02/02_星空046.jpg":"39O6","./02/02_星空047.jpg":"j+hF","./02/02_星空048.jpg":"prBS","./02/02_星空049.jpg":"xSC0","./02/02_星空050.jpg":"QsoG","./02/02_星空051.jpg":"Wc61","./02/02_星空052.jpg":"DW08","./02/02_星空053.jpg":"GO7h","./02/02_星空054.jpg":"zJ43","./02/02_星空055.jpg":"Y423","./02/02_星空056.jpg":"lI3a","./02/02_星空057.jpg":"sqQS","./02/02_星空058.jpg":"0Cmz","./02/02_星空059.jpg":"PEKr","./02/02_星空060.jpg":"q44w","./02/02_星空061.jpg":"jeK5","./02/02_星空062.jpg":"dwTJ","./02/02_星空063.jpg":"qe/i","./02/02_星空064.jpg":"Yua3","./02/02_星空065.jpg":"Vzsa","./02/02_星空066.jpg":"ngUd","./02/02_星空067.jpg":"tIx7","./02/02_星空068.jpg":"ikmL","./02/02_星空069.jpg":"9qqg","./02/02_星空070.jpg":"hEJ3","./02/02_星空071.jpg":"cMHi","./02/02_星空072.jpg":"7YRL","./02/02_星空073.jpg":"enWp","./02/02_星空074.jpg":"cLoS","./02/02_星空075.jpg":"yKEK","./02/02_星空076.jpg":"T24T","./02/02_星空077.jpg":"TIpb","./02/02_星空078.jpg":"Dyh7","./02/02_星空079.jpg":"zw+Q","./02/02_星空080.jpg":"YbkY","./02/02_星空081.jpg":"2/CD","./02/02_星空082.jpg":"vEg3","./02/02_星空083.jpg":"F+zO","./02/02_星空084.jpg":"mObz","./02/02_星空085.jpg":"c1Qk","./02/02_星空086.jpg":"x855","./02/02_星空087.jpg":"6Kio","./02/02_星空088.jpg":"IOuZ","./02/02_星空089.jpg":"b1aB","./02/02_星空090.jpg":"a/oB","./02/02_星空091.jpg":"2BSm","./02/02_星空092.jpg":"eN7Z","./02/02_星空093.jpg":"mFDA","./03/03_海洋000.jpg":"+sC/","./03/03_海洋001.jpg":"6Kab","./03/03_海洋002.jpg":"UWd7","./03/03_海洋003.jpg":"RMva","./03/03_海洋004.jpg":"04od","./03/03_海洋005.jpg":"F4+r","./03/03_海洋006.jpg":"o/06","./03/03_海洋007.jpg":"eMqL","./03/03_海洋008.jpg":"33t6","./03/03_海洋009.jpg":"VOqu","./03/03_海洋010.jpg":"xr/u","./03/03_海洋011.jpg":"yGQP","./03/03_海洋012.jpg":"CwlZ","./03/03_海洋013.jpg":"mX30","./03/03_海洋014.jpg":"WSWi","./03/03_海洋015.jpg":"K8VL","./03/03_海洋016.jpg":"ftb1","./03/03_海洋017.jpg":"mnDe","./03/03_海洋018.jpg":"GILq","./03/03_海洋019.jpg":"qbtm","./03/03_海洋020.jpg":"R+Qq","./03/03_海洋021.jpg":"ZzE+","./03/03_海洋022.jpg":"jJ/p","./03/03_海洋023.jpg":"oWtM","./03/03_海洋024.jpg":"xrkf","./03/03_海洋025.jpg":"6YgD","./03/03_海洋026.jpg":"du26","./03/03_海洋027.jpg":"5Z1b","./03/03_海洋028.jpg":"qgK0","./03/03_海洋029.jpg":"D+Mx","./03/03_海洋030.jpg":"uuk1","./03/03_海洋031.jpg":"KgxU","./03/03_海洋032.jpg":"AD01","./03/03_海洋033.jpg":"5QKg","./03/03_海洋034.jpg":"Zbuw","./03/03_海洋035.jpg":"b/Cw","./03/03_海洋036.jpg":"3T0r","./03/03_海洋037.jpg":"bHtT","./03/03_海洋038.jpg":"6F+N","./03/03_海洋039.jpg":"V8HK","./03/03_海洋040.jpg":"vX9Y","./03/03_海洋041.jpg":"JcIn","./03/03_海洋042.jpg":"BqGE","./03/03_海洋043.jpg":"kiNu","./03/03_海洋044.jpg":"mcw5","./03/03_海洋045.jpg":"hffa","./03/03_海洋046.jpg":"FCGJ","./03/03_海洋047.jpg":"OXcy","./03/03_海洋048.jpg":"753g","./03/03_海洋049.jpg":"bq34","./03/03_海洋050.jpg":"dUyI","./03/03_海洋051.jpg":"qWf7","./03/03_海洋052.jpg":"CpFw","./03/03_海洋053.jpg":"Q3y5","./03/03_海洋054.jpg":"FZTr","./03/03_海洋055.jpg":"UVSD","./03/03_海洋056.jpg":"go+S","./03/03_海洋057.jpg":"Uzw6","./03/03_海洋058.jpg":"czo4","./03/03_海洋059.jpg":"YQwX","./03/03_海洋060.jpg":"hQrQ","./03/03_海洋061.jpg":"ef6o","./03/03_海洋062.jpg":"ynbk","./03/03_海洋063.jpg":"SdIw","./03/03_海洋064.jpg":"QnUv","./03/03_海洋065.jpg":"Nz9G","./03/03_海洋066.jpg":"G+QI","./03/03_海洋067.jpg":"DWKR","./03/03_海洋068.jpg":"qYgG","./03/03_海洋069.jpg":"qHo8","./03/03_海洋070.jpg":"n7Kp","./03/03_海洋071.jpg":"0XX0","./03/03_海洋072.jpg":"hgVG","./03/03_海洋073.jpg":"dTbr","./03/03_海洋074.jpg":"eSDe","./03/03_海洋075.jpg":"5DFm","./03/03_海洋076.jpg":"kQ1t","./03/03_海洋077.jpg":"+BhS","./03/03_海洋078.jpg":"WQR6","./03/03_海洋079.jpg":"QmY9","./03/03_海洋080.jpg":"90ft","./03/03_海洋081.jpg":"3n7f","./03/03_海洋082.jpg":"ZQZD","./03/03_海洋083.jpg":"MCjI","./03/03_海洋084.jpg":"O02U","./03/03_海洋085.jpg":"jp/B","./03/03_海洋086.jpg":"d2uG","./03/03_海洋087.jpg":"c2pp","./03/03_海洋088.jpg":"RX0z","./03/03_海洋089.jpg":"56PL","./03/03_海洋090.jpg":"stZB","./03/03_海洋091.jpg":"8eck","./03/03_海洋092.jpg":"EI0l","./03/03_海洋093.jpg":"t454","./04/04_岩石000.jpg":"R1u7","./04/04_岩石001.jpg":"y689","./04/04_岩石002.jpg":"tZ2v","./04/04_岩石003.jpg":"3igh","./04/04_岩石004.jpg":"UwJC","./04/04_岩石005.jpg":"hYYL","./04/04_岩石006.jpg":"Vust","./04/04_岩石007.jpg":"43lo","./04/04_岩石008.jpg":"O4P2","./04/04_岩石009.jpg":"2HsT","./04/04_岩石010.jpg":"1MYk","./04/04_岩石011.jpg":"ScPt","./04/04_岩石012.jpg":"VCfs","./04/04_岩石013.jpg":"oLKr","./04/04_岩石014.jpg":"ooEx","./04/04_岩石015.jpg":"FKCM","./04/04_岩石016.jpg":"c/TX","./04/04_岩石017.jpg":"yJMS","./04/04_岩石018.jpg":"Tq4b","./04/04_岩石019.jpg":"6m4I","./04/04_岩石020.jpg":"2P86","./04/04_岩石021.jpg":"HkDD","./04/04_岩石022.jpg":"HyyY","./04/04_岩石023.jpg":"Hz8A","./04/04_岩石024.jpg":"vkH6","./04/04_岩石025.jpg":"Ty6G","./04/04_岩石026.jpg":"IWdU","./04/04_岩石027.jpg":"75P1","./04/04_岩石028.jpg":"PBqk","./04/04_岩石029.jpg":"ALRC","./04/04_岩石030.jpg":"6/Q8","./04/04_岩石031.jpg":"FZOs","./04/04_岩石032.jpg":"hrjj","./04/04_岩石033.jpg":"Ipdq","./04/04_岩石034.jpg":"f6GY","./04/04_岩石035.jpg":"VTuR","./04/04_岩石036.jpg":"T1M7","./04/04_岩石037.jpg":"+pFK","./04/04_岩石038.jpg":"7z+i","./04/04_岩石039.jpg":"Z+x+","./04/04_岩石040.jpg":"C21r","./04/04_岩石041.jpg":"Js0y","./04/04_岩石042.jpg":"bsTw","./04/04_岩石043.jpg":"PQ7H","./04/04_岩石044.jpg":"oLMJ","./04/04_岩石045.jpg":"fieq","./04/04_岩石046.jpg":"BAkR","./04/04_岩石047.jpg":"1kzo","./04/04_岩石048.jpg":"ipMb","./04/04_岩石049.jpg":"Bong","./04/04_岩石050.jpg":"Yk36","./04/04_岩石051.jpg":"6GSv","./04/04_岩石052.jpg":"yleA","./04/04_岩石053.jpg":"IoTZ","./04/04_岩石054.jpg":"WRIf","./04/04_岩石055.jpg":"zpUB","./04/04_岩石056.jpg":"NapS","./04/04_岩石057.jpg":"zRXu","./04/04_岩石058.jpg":"LQTJ","./04/04_岩石059.jpg":"RVRB","./04/04_岩石060.jpg":"izCY","./04/04_岩石061.jpg":"Aw+e","./04/04_岩石062.jpg":"boC6","./04/04_岩石063.jpg":"rI24","./04/04_岩石064.jpg":"W2GT","./04/04_岩石065.jpg":"ajfy","./04/04_岩石066.jpg":"Orha","./04/04_岩石067.jpg":"UmIw","./04/04_岩石068.jpg":"p+18","./04/04_岩石069.jpg":"MkCv","./04/04_岩石070.jpg":"cBAJ","./04/04_岩石071.jpg":"DoeF","./04/04_岩石072.jpg":"fEUp","./04/04_岩石073.jpg":"MuoP","./04/04_岩石074.jpg":"tqdg","./04/04_岩石075.jpg":"N/mX","./04/04_岩石076.jpg":"eme/","./04/04_岩石077.jpg":"bXcP","./04/04_岩石078.jpg":"GA/t","./04/04_岩石079.jpg":"Pyoh","./04/04_岩石080.jpg":"YoN4","./04/04_岩石081.jpg":"dtue","./04/04_岩石082.jpg":"e2jJ","./04/04_岩石083.jpg":"TV1H","./04/04_岩石084.jpg":"Y3Xb","./04/04_岩石085.jpg":"sTwu","./04/04_岩石086.jpg":"+UUX","./04/04_岩石087.jpg":"Rxdm","./04/04_岩石088.jpg":"Zgn4","./04/04_岩石089.jpg":"w4DJ","./04/04_岩石090.jpg":"O1vq","./04/04_岩石091.jpg":"gdHJ","./04/04_岩石092.jpg":"dNnQ","./04/04_岩石093.jpg":"ACPU"};function p(e){return t(o(e))}function o(e){var i=g[e];if(!(i+1))throw new Error("Cannot find module '"+e+"'.");return i}p.keys=function(){return Object.keys(g)},p.resolve=o,e.exports=p,p.id="ymAB"}});
//# sourceMappingURL=1.136d7996477f733898b4.js.map