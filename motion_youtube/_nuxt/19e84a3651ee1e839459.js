(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{156:function(e,t,n){var content=n(164);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(28).default)("7aa83e73",content,!0,{sourceMap:!1})},158:function(e,t,n){var content=n(188);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(28).default)("54bf9b58",content,!0,{sourceMap:!1})},159:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0My40OSA0MS45MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyMzE4MTU7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSLjg6zjgqTjg6Tjg7xfMSIgZGF0YS1uYW1lPSLjg6zjgqTjg6Tjg7wgMSI+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjQzLjQ5IDIwLjk3IDAgNDEuOTMgMCAwIDQzLjQ5IDIwLjk3Ii8+PC9nPjwvZz48L3N2Zz4="},160:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNS45MSA0MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyMzE4MTU7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSLjg6zjgqTjg6Tjg7xfMSIgZGF0YS1uYW1lPSLjg6zjgqTjg6Tjg7wgMSI+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iMTIuNjEiIGhlaWdodD0iNDMiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjIzLjMxIiB5PSIwLjQiIHdpZHRoPSIxMi42MSIgaGVpZ2h0PSI0Mi42Ii8+PC9nPjwvZz48L3N2Zz4="},161:function(e,t,n){var r=n(6);r(r.P,"Array",{fill:n(162)}),n(76)("fill")},162:function(e,t,n){"use strict";var r=n(20),o=n(106),c=n(17);e.exports=function(e){for(var t=r(this),n=c(t.length),l=arguments.length,d=o(l>1?arguments[1]:void 0,n),f=l>2?arguments[2]:void 0,h=void 0===f?n:o(f,n);h>d;)t[d++]=e;return t}},163:function(e,t,n){"use strict";var r=n(156);n.n(r).a},164:function(e,t,n){(t=n(27)(!1)).push([e.i,".videocontent{width:100%;overflow:hidden;display:flex;margin:60px 20px}#main{width:30%;margin:0 50px;padding-top:30px}canvas{height:250px;margin-top:10px}.howto{margin:16px 50px;width:375px}.status{margin:150px}iframe{min-width:320px}#menu{position:absolute;text-align:center;bottom:3em;left:0;right:0}#menu ul{border-radius:2px;background-color:hsla(0,0%,100%,.3)}#menu li{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#menu .material-icons{font-size:30px}.explanebox{display:flex;margin:40px 0}.explanebox img{margin-right:20px}.explanebox p{margin:10px 0}.sk-spinner-pulse{width:60px;height:60px;margin:40px auto;float:left;background-color:#333;border-radius:100%;-webkit-animation:sk-pulseScaleOut 1s ease-in-out infinite;animation:sk-pulseScaleOut 1s ease-in-out infinite}@-webkit-keyframes sk-pulseScaleOut{0%{transform:scale(0)}to{transform:scale(1);opacity:0}}@keyframes sk-pulseScaleOut{0%{transform:scale(0)}to{transform:scale(1);opacity:0}}",""]),e.exports=t},165:function(e,t,n){var content=n(205);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(28).default)("48ad60a7",content,!0,{sourceMap:!1})},169:function(e,t,n){"use strict";var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"howto"},[t("div",{staticClass:"explanebox"},[t("img",{attrs:{src:n(159),width:"32",height:"32"}}),this._v(" "),t("p",[this._v("右手の動きを止める。")])]),this._v(" "),t("div",{staticClass:"explanebox"},[t("img",{attrs:{src:n(160),width:"32",height:"32"}}),this._v(" "),t("p",[this._v("右手を動かす。")])])])}],o=n(41),c=(n(161),n(14),n(30),n(5)),l=n(170),d=n(176),f=n(1),h=n(177),m=n.n(h);f.a.use(m.a);var v={name:"HumanPose",data:function(){return{net:{},video:{},cameras:[],cameraIndex:0,changingCamera:!1,loading:!0,windowHeight:0,framenum:0,lastPosition:[]}},props:{videoId:null},computed:{player:function(){return this.$refs.youtube.player}},methods:{changeCamera:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.changingCamera){t.next=2;break}return t.abrupt("return");case 2:return e.changingCamera=!0,e.cameraIndex++,e.cameraIndex>=e.cameras.length&&(e.cameraIndex=0),t.next=7,e.loadVideo();case 7:case"end":return t.stop()}}),t)})))()},loadNet:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.c();case 2:e.net=t.sent;case 3:case"end":return t.stop()}}),t)})))()},loadVideo:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setupCamera();case 2:e.video=t.sent,e.video.play();case 4:case"end":return t.stop()}}),t)})))()},setupCamera:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var video,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){t.next=2;break}throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");case 2:return(video=e.$refs.video).width=e.videoWidth,video.height=e.videoHeight,e.stopExistingVideoCapture(),t.next=8,navigator.mediaDevices.getUserMedia({audio:!1,video:{deviceId:e.cameras[e.cameraIndex].deviceId,width:e.videoWidth,height:e.videoHeight}});case 8:return n=t.sent,window.console.log("using camera: "+e.cameras[e.cameraIndex].label),video.srcObject=n,t.abrupt("return",new Promise((function(e){video.onloadedmetadata=function(){e(video)}})));case 12:case"end":return t.stop()}}),t)})))()},getVideoInputs:function(){return Object(c.a)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices){e.next=3;break}return window.console.log("enumerateDevices() not supported."),e.abrupt("return",[]);case 3:return e.next=5,navigator.mediaDevices.enumerateDevices();case 5:return t=e.sent,n=t.filter((function(e){return"videoinput"===e.kind})),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))()},stopExistingVideoCapture:function(){this.video&&this.video.srcObject&&(this.video.srcObject.getTracks().forEach((function(track){track.stop()})),this.video.srcObject=null)},isAndroid:function(){return/Android/i.test(navigator.userAgent)},isiOS:function(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)},isMobile:function(){return this.isAndroid()||this.isiOS()},detctPose:function(){var canvas=this.$refs.output;canvas.width=this.videoWidth,canvas.height=this.videoHeight;var e=this;function t(){return n.apply(this,arguments)}function n(){return(n=Object(c.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.estimateSegmentation();case 2:r=n.sent,e.drawMask(r,canvas,e.video,{r:0,g:0,b:0,a:0}),e.drawPose(r,canvas),requestAnimationFrame(t);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}t()},drawMask:function(e,canvas,video,t){var mask=d.d(e,t,{r:0,g:0,b:0,a:0},!1);d.a(canvas,video,mask,.3,0,!0)},drawPose:function(e,canvas){var t=this,n=canvas.getContext("2d");e.forEach((function(e){var r=e.pose;r=d.b(r,e.width),t.judgeMovement(r.keypoints,.1);for(var i=0;i<r.keypoints.length;i++){var o=r.keypoints[i];if(!(o.score<.1)){var c=o.position,f=c.y,h=c.x;t.drawPoint(n,1*f,1*h,5,"aqua")}}l.a(r.keypoints,.1).forEach((function(e){t.drawSegment(t.toTuple(e[0].position),t.toTuple(e[1].position),1,2.5,"aqua",n)}))}))},drawPoint:function(e,t,n,r,o){e.beginPath(),e.arc(n,t,r,0,2*Math.PI),e.fillStyle=o,e.fill()},drawSegment:function(e,t,n,r,c,l){var d=Object(o.a)(e,2),f=d[0],h=d[1],m=Object(o.a)(t,2),v=m[0],x=m[1];l.beginPath(),l.moveTo(h*n,f*n),l.lineTo(x*n,v*n),l.lineWidth=5,l.strokeStyle=c,l.stroke()},toTuple:function(e){return[e.y,e.x]},estimateSegmentation:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.net.segmentMultiPerson(e.video,{internalResolution:"medium",segmentationThreshold:.7,maxDetections:5,scoreThreshold:.2,nmsRadius:20,numKeypointForMatching:17,refineSteps:10});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},judgeMovement:function(e,t){if(this.framenum+=1,this.framenum>20&&(this.framenum=0),this.framenum%20==0){var n=e[10];if(n.score>t){var r=n.position.x,o=n.position.y;if(0!=this.lastPosition.length){var c=r-this.lastPosition[0],l=o-this.lastPosition[1];Math.sqrt(c*c+l*l)>5?this.playYoutubeVideo(!1):this.playYoutubeVideo(!0)}this.lastPosition[0]=r,this.lastPosition[1]=o}}},playYoutubeVideo:function(e){e?this.player.playVideo():this.player.pauseVideo()}},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.windowHeight=window.innerHeight,e.videoHeight=320,e.videoWidth=400,e.$refs.youtube.player.width=200,e.$refs.youtube.player.height=150,e.loading=!0,t.next=8,e.loadNet();case 8:return t.next=10,e.getVideoInputs();case 10:return e.cameras=t.sent,t.next=13,e.loadVideo();case 13:e.loading=!1,e.detctPose();case 15:case"end":return t.stop()}}),t)})))()}},x=(n(163),n(13)),component=Object(x.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"videocontent"},[n("youtube",{ref:"youtube",attrs:{"video-id":e.videoId,width:"640",height:"500",id:"youtube"}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"status"},[n("div",{ref:"loading",style:{height:e.windowHeight+"px"},attrs:{id:"loading"}},[n("div",{staticClass:"sk-spinner sk-spinner-pulse"})])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],ref:"pose",attrs:{id:"main"}},[e._m(0),e._v(" "),n("video",{ref:"video",staticStyle:{"-moz-transform":"scaleX(-1)","-o-transform":"scaleX(-1)","-webkit-transform":"scaleX(-1)",transform:"scaleX(-1)",display:"none"},attrs:{id:"video",playsinline:""}}),e._v(" "),n("canvas",{ref:"output",attrs:{id:"outut"}})])],1)}),r,!1,null,null,null);t.a=component.exports},172:function(e,t){},173:function(e,t){},174:function(e,t){},187:function(e,t,n){"use strict";var r=n(158);n.n(r).a},188:function(e,t,n){(t=n(27)(!1)).push([e.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),e.exports=t},204:function(e,t,n){"use strict";var r=n(165);n.n(r).a},205:function(e,t,n){(t=n(27)(!1)).push([e.i,".content{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""]),e.exports=t},231:function(e,t,n){"use strict";n.r(t);n(187);var r=n(13),o={components:{AppLogo:Object(r.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"VueToNuxtLogo"},[t("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),t("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),t("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),t("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports,HumanPose:n(169).a}},c=(n(204),Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"container"},[t("HumanPose")],1)}),[],!1,null,null,null));t.default=c.exports}}]);