(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{157:function(e,t,n){var content=n(166);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(28).default)("7aa83e73",content,!0,{sourceMap:!1})},159:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0My40OSA0MS45MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyMzE4MTU7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSLjg6zjgqTjg6Tjg7xfMSIgZGF0YS1uYW1lPSLjg6zjgqTjg6Tjg7wgMSI+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjQzLjQ5IDIwLjk3IDAgNDEuOTMgMCAwIDQzLjQ5IDIwLjk3Ii8+PC9nPjwvZz48L3N2Zz4="},160:function(e,t,n){e.exports=n.p+"img/ac23273.jpg"},161:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNS45MSA0MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyMzE4MTU7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSLjg6zjgqTjg6Tjg7xfMSIgZGF0YS1uYW1lPSLjg6zjgqTjg6Tjg7wgMSI+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iMTIuNjEiIGhlaWdodD0iNDMiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjIzLjMxIiB5PSIwLjQiIHdpZHRoPSIxMi42MSIgaGVpZ2h0PSI0Mi42Ii8+PC9nPjwvZz48L3N2Zz4="},162:function(e,t,n){e.exports=n.p+"img/a7ba48c.jpg"},163:function(e,t,n){var r=n(6);r(r.P,"Array",{fill:n(164)}),n(76)("fill")},164:function(e,t,n){"use strict";var r=n(20),o=n(106),c=n(17);e.exports=function(e){for(var t=r(this),n=c(t.length),d=arguments.length,l=o(d>1?arguments[1]:void 0,n),m=d>2?arguments[2]:void 0,f=void 0===m?n:o(m,n);f>l;)t[l++]=e;return t}},165:function(e,t,n){"use strict";var r=n(157);n.n(r).a},166:function(e,t,n){(t=n(27)(!1)).push([e.i,".videocontent{width:100%;overflow:hidden;display:flex;margin:80px 20px 20px}#main{width:30%;margin:0 50px;padding-top:2px}canvas{height:250px;margin-top:10px}.howto{margin:10px 50px;width:375px}.status{margin:150px}iframe{min-width:320px}#menu{position:absolute;text-align:center;bottom:3em;left:0;right:0}#menu ul{border-radius:2px;background-color:hsla(0,0%,100%,.3)}#menu li{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#menu .material-icons{font-size:30px}.explanebox{display:flex;margin:40px 0}.scaledplay{transform:scaleY(.6);padding-left:28px;text-align:left}.scaledstop{transform:scaleY(.5);padding-left:30px;text-align:left}.sk-spinner-pulse{width:60px;height:60px;margin:40px auto;float:left;background-color:#333;border-radius:100%;-webkit-animation:sk-pulseScaleOut 1s ease-in-out infinite;animation:sk-pulseScaleOut 1s ease-in-out infinite}@-webkit-keyframes sk-pulseScaleOut{0%{transform:scale(0)}to{transform:scale(1);opacity:0}}@keyframes sk-pulseScaleOut{0%{transform:scale(0)}to{transform:scale(1);opacity:0}}",""]),e.exports=t},167:function(e,t,n){var content=n(205);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(28).default)("94b72c6a",content,!0,{sourceMap:!1})},171:function(e,t,n){"use strict";var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"howto"},[t("div",{staticClass:"explanebox"},[t("img",{attrs:{src:n(159),width:"32",height:"32"}}),this._v(" "),t("img",{staticClass:"scaledplay",attrs:{src:n(160)}})]),this._v(" "),t("div",{staticClass:"explanebox"},[t("img",{attrs:{src:n(161),width:"32",height:"32"}}),this._v(" "),t("img",{staticClass:"scaledstop",attrs:{src:n(162)}})])])}],o=n(41),c=(n(163),n(13),n(30),n(5)),d=n(172),l=n(178),m=n(1),f=n(179),h=n.n(f);m.a.use(h.a);var v={name:"HumanPose",data:function(){return{net:{},video:{},cameras:[],cameraIndex:0,changingCamera:!1,loading:!0,windowHeight:0,framenum:0,lastPosition:[]}},props:{videoId:null},computed:{player:function(){return this.$refs.youtube.player}},methods:{changeCamera:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.changingCamera){t.next=2;break}return t.abrupt("return");case 2:return e.changingCamera=!0,e.cameraIndex++,e.cameraIndex>=e.cameras.length&&(e.cameraIndex=0),t.next=7,e.loadVideo();case 7:case"end":return t.stop()}}),t)})))()},loadNet:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.c();case 2:e.net=t.sent;case 3:case"end":return t.stop()}}),t)})))()},loadVideo:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setupCamera();case 2:e.video=t.sent,e.video.play();case 4:case"end":return t.stop()}}),t)})))()},setupCamera:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var video,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){t.next=2;break}throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");case 2:return(video=e.$refs.video).width=e.videoWidth,video.height=e.videoHeight,e.stopExistingVideoCapture(),t.next=8,navigator.mediaDevices.getUserMedia({audio:!1,video:{deviceId:e.cameras[e.cameraIndex].deviceId,width:e.videoWidth,height:e.videoHeight}});case 8:return n=t.sent,window.console.log("using camera: "+e.cameras[e.cameraIndex].label),video.srcObject=n,t.abrupt("return",new Promise((function(e){video.onloadedmetadata=function(){e(video)}})));case 12:case"end":return t.stop()}}),t)})))()},getVideoInputs:function(){return Object(c.a)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices){e.next=3;break}return window.console.log("enumerateDevices() not supported."),e.abrupt("return",[]);case 3:return e.next=5,navigator.mediaDevices.enumerateDevices();case 5:return t=e.sent,n=t.filter((function(e){return"videoinput"===e.kind})),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))()},stopExistingVideoCapture:function(){this.video&&this.video.srcObject&&(this.video.srcObject.getTracks().forEach((function(track){track.stop()})),this.video.srcObject=null)},isAndroid:function(){return/Android/i.test(navigator.userAgent)},isiOS:function(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)},isMobile:function(){return this.isAndroid()||this.isiOS()},detctPose:function(){var canvas=this.$refs.output;canvas.width=this.videoWidth,canvas.height=this.videoHeight;var e=this;function t(){return n.apply(this,arguments)}function n(){return(n=Object(c.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.estimateSegmentation();case 2:r=n.sent,e.drawMask(r,canvas,e.video,{r:0,g:0,b:0,a:0}),e.drawPose(r,canvas),requestAnimationFrame(t);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}t()},drawMask:function(e,canvas,video,t){var mask=l.d(e,t,{r:0,g:0,b:0,a:0},!1);l.a(canvas,video,mask,.3,0,!0)},drawPose:function(e,canvas){var t=this,n=canvas.getContext("2d");e.forEach((function(e){var r=e.pose;r=l.b(r,e.width),t.judgeMovement(r.keypoints,.1);for(var i=0;i<r.keypoints.length;i++){var o=r.keypoints[i];if(!(o.score<.1)){var c=o.position,m=c.y,f=c.x;t.drawPoint(n,1*m,1*f,5,"aqua")}}d.a(r.keypoints,.1).forEach((function(e){t.drawSegment(t.toTuple(e[0].position),t.toTuple(e[1].position),1,2.5,"aqua",n)}))}))},drawPoint:function(e,t,n,r,o){e.beginPath(),e.arc(n,t,r,0,2*Math.PI),e.fillStyle=o,e.fill()},drawSegment:function(e,t,n,r,c,d){var l=Object(o.a)(e,2),m=l[0],f=l[1],h=Object(o.a)(t,2),v=h[0],x=h[1];d.beginPath(),d.moveTo(f*n,m*n),d.lineTo(x*n,v*n),d.lineWidth=5,d.strokeStyle=c,d.stroke()},toTuple:function(e){return[e.y,e.x]},estimateSegmentation:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.net.segmentMultiPerson(e.video,{internalResolution:"medium",segmentationThreshold:.7,maxDetections:5,scoreThreshold:.2,nmsRadius:20,numKeypointForMatching:17,refineSteps:10});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},judgeMovement:function(e,t){if(this.framenum+=1,this.framenum>20&&(this.framenum=0),this.framenum%20==0){var n=e[10];if(n.score>t){var r=n.position.x,o=n.position.y;if(0!=this.lastPosition.length){var c=r-this.lastPosition[0],d=o-this.lastPosition[1];Math.sqrt(c*c+d*d)>5?this.playYoutubeVideo(!1):this.playYoutubeVideo(!0)}this.lastPosition[0]=r,this.lastPosition[1]=o}}},playYoutubeVideo:function(e){e?this.player.playVideo():this.player.pauseVideo()}},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.windowHeight=window.innerHeight,e.videoHeight=320,e.videoWidth=400,e.$refs.youtube.player.width=200,e.$refs.youtube.player.height=150,e.loading=!0,t.next=8,e.loadNet();case 8:return t.next=10,e.getVideoInputs();case 10:return e.cameras=t.sent,t.next=13,e.loadVideo();case 13:e.loading=!1,e.detctPose();case 15:case"end":return t.stop()}}),t)})))()}},x=(n(165),n(14)),component=Object(x.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"videocontent"},[n("youtube",{ref:"youtube",attrs:{"video-id":e.videoId,width:"640",height:"450",id:"youtube"}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"status"},[n("div",{ref:"loading",style:{height:e.windowHeight+"px"},attrs:{id:"loading"}},[n("div",{staticClass:"sk-spinner sk-spinner-pulse"})])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],ref:"pose",attrs:{id:"main"}},[e._m(0),e._v(" "),n("video",{ref:"video",staticStyle:{"-moz-transform":"scaleX(-1)","-o-transform":"scaleX(-1)","-webkit-transform":"scaleX(-1)",transform:"scaleX(-1)",display:"none"},attrs:{id:"video",playsinline:""}}),e._v(" "),n("canvas",{ref:"output",attrs:{id:"outut"}})])],1)}),r,!1,null,null,null);t.a=component.exports},174:function(e,t){},175:function(e,t){},176:function(e,t){},204:function(e,t,n){"use strict";var r=n(167);n.n(r).a},205:function(e,t,n){(t=n(27)(!1)).push([e.i,".centering{margin:auto 10px}.indexcontainer{margin-bottom:140px}",""]),e.exports=t},232:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{videoId:"wgZcoo-eQO0"}},components:{HumanPose:n(171).a}},o=(n(204),n(14)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"container indexcontainer"},[t("HumanPose",{attrs:{videoId:this.videoId}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);