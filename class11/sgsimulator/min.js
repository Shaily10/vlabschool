(function(e){e.fn.smartZoom=function(t){function i(e,t){var i=n.data("smartZoomData");if(i.currentWheelDelta*t<0)i.currentWheelDelta=0;i.currentWheelDelta+=t;r.zoom(i.mouseWheelDeltaFactor*i.currentWheelDelta,{x:e.pageX,y:e.pageY})}function s(e){e.preventDefault()}function o(){var e=n.data("smartZoomData");if(e.settings.mouseMoveEnabled!=true||e.settings.moveCursorEnabled!=true)return;var t=E();var r=t.width/e.originalSize.width;if(parseInt(r*100)>parseInt(e.adjustedPosInfos.scale*100))n.css({cursor:"move"});else n.css({cursor:"default"})}function u(e){v(e.pageX,e.pageY)}function a(t){t.preventDefault();e(document).bind("mousemove.smartZoom",f);e(document).bind("mouseup.smartZoom",l);var r=n.data("smartZoomData");r.moveCurrentPosition=new k(t.pageX,t.pageY);r.moveLastPosition=new k(t.pageX,t.pageY)}function f(e){d(e.pageX,e.pageY,0)}function l(t){var r=n.data("smartZoomData");if(r.moveLastPosition.distance(r.moveCurrentPosition)>4){var i=r.moveLastPosition.interpolate(r.moveCurrentPosition,-4);d(i.x,i.y,500)}e(document).unbind("mousemove.smartZoom");e(document).unbind("mouseup.smartZoom")}function c(t){t.preventDefault();e(document).unbind("touchmove.smartZoom");e(document).unbind("touchend.smartZoom");e(document).bind("touchmove.smartZoom",h);e(document).bind("touchend.smartZoom",p);var r=t.originalEvent.touches;var i=r[0];var s=n.data("smartZoomData");s.touch.touchMove=false;s.touch.touchPinch=false;s.moveCurrentPosition=new k(i.clientX,i.clientY);s.moveLastPosition=new k(i.clientX,i.clientY);s.touch.lastTouchPositionArr=new Array;var o;var u=r.length;for(var a=0;a<u;++a){o=r[a];s.touch.lastTouchPositionArr.push(new k(o.clientX,o.clientY))}}function h(e){e.preventDefault();var t=n.data("smartZoomData");var i=e.originalEvent.touches;var s=i.length;var o=i[0];if(s==1&&!t.touch.touchPinch&&t.settings.touchMoveEnabled==true){t.touch.touchMove=true;d(o.clientX,o.clientY,0)}else if(s==2&&!t.touch.touchMove&&t.settings.pinchEnabled==true){t.touch.touchPinch=true;var u=i[1];var a=t.touch.lastTouchPositionArr[0];var f=t.touch.lastTouchPositionArr[1];var l=new k(o.clientX,o.clientY);var c=new k(u.clientX,u.clientY);var h=l.distance(c);var p=a.distance(f);var v=h-p;if(Math.abs(v)<3)return;var m=new k((l.x+c.x)/2,(l.y+c.y)/2);var g=E();var y=t.originalSize;var b=g.width/y.width;var w=h/p;var S=g.width*w/y.width;r.zoom(S-b,m,0);t.touch.lastTouchPositionArr[0]=l;t.touch.lastTouchPositionArr[1]=c}}function p(t){t.preventDefault();var r=t.originalEvent.touches.length;if(r==0){e(document).unbind("touchmove.smartZoom");e(document).unbind("touchend.smartZoom")}var i=n.data("smartZoomData");if(i.touch.touchPinch)return;if(i.touch.touchMove){if(i.moveLastPosition.distance(i.moveCurrentPosition)>1){var s=i.moveLastPosition.interpolate(i.moveCurrentPosition,-4);d(s.x,s.y,500)}}else{if(i.settings.dblTapEnabled==true&&i.touch.lastTouchEndTime!=0&&(new Date).getTime()-i.touch.lastTouchEndTime<300){var o=i.touch.lastTouchPositionArr[0];v(o.x,o.y)}i.touch.lastTouchEndTime=(new Date).getTime()}}function d(e,t,r){m();var i=n.data("smartZoomData");i.moveLastPosition.x=i.moveCurrentPosition.x;i.moveLastPosition.y=i.moveCurrentPosition.y;var s=n.offset();var o=E();var u=s.left+(e-i.moveCurrentPosition.x);var a=s.top+(t-i.moveCurrentPosition.y);var f=g(u,a,o.width,o.height);w(n,f.x,f.y,o.width,o.height,r);i.moveCurrentPosition.x=e;i.moveCurrentPosition.y=t}function v(e,t){var i=n.data("smartZoomData");var s=i.originalSize;var o=E();var u=o.width/s.width;var a=i.adjustedPosInfos.scale;var l;if(u.toFixed(2)>f.toFixed(2)||Math.abs(f-u)>Math.abs(u-a)){l=f-u}else{l=a-u}r.zoom(l,{x:e,y:t})}function m(){var e=n.data("smartZoomData");if(e.transitionObject){if(e.transitionObject.cssAnimTimer)clearTimeout(e.transitionObject.cssAnimTimer);var t=e.originalSize;var r=E();var i=new Object;i[e.transitionObject.transition]="all 0s";if(e.transitionObject.css3dSupported){i[e.transitionObject.transform]="translate3d("+r.x+"px, "+r.y+"px, 0) scale3d("+r.width/t.width+","+r.height/t.height+", 1)"}else{i[e.transitionObject.transform]="translateX("+r.x+"px) translateY("+r.y+"px) scale("+r.width/t.width+","+r.height/t.height+")"}n.css(i)}else{n.stop()}o()}function g(e,t,r,i){var s=n.data("smartZoomData");var o=Math.min(s.adjustedPosInfos.top,t);o+=Math.max(0,s.adjustedPosInfos.top+s.adjustedPosInfos.height-(o+i));var u=Math.min(s.adjustedPosInfos.left,e);u+=Math.max(0,s.adjustedPosInfos.left+s.adjustedPosInfos.width-(u+r));return new k(u.toFixed(2),o.toFixed(2))}function y(e){n.unbind("load.smartZoom");r.init.apply(n,[e.data.arguments])}function b(){var e=n.data("smartZoomData");var t=e.containerDiv;var r=e.originalSize;var i=t.parent().offset();var s=T(e.settings.left,i.left,t.parent().width());var u=T(e.settings.top,i.top,t.parent().height());t.offset({left:s,top:u});t.width(x(e.settings.width,t.parent().width(),s-i.left));t.height(x(e.settings.height,t.parent().height(),u-i.top));var a=C(t);var f=Math.min(Math.min(a.width/r.width,a.height/r.height),1).toFixed(2);var l=r.width*f;var c=r.height*f;e.adjustedPosInfos={left:(a.width-l)/2+i.left,top:(a.height-c)/2+i.top,width:l,height:c,scale:f};m();w(n,e.adjustedPosInfos.left,e.adjustedPosInfos.top,l,c,0);o()}function w(e,t,r,i,s,o,u){var a=n.data("smartZoomData");var f=a.containerDiv.offset();var l=t-f.left;var c=r-f.top;if(a.transitionObject!=null){var h=a.originalSize;var p=new Object;p[a.transitionObject.transform+"-origin"]="0 0";p[a.transitionObject.transition]="all "+o/1e3+"s ease-out";if(a.transitionObject.css3dSupported)p[a.transitionObject.transform]="translate3d("+l+"px, "+c+"px, 0) scale3d("+i/h.width+","+s/h.height+", 1)";else p[a.transitionObject.transform]="translateX("+l+"px) translateY("+c+"px) scale("+i/h.width+","+s/h.height+")";e.css(p);if(u!=null)a.transitionObject.cssAnimTimer=setTimeout(u,o)}else{e.animate({"margin-left":l,"margin-top":c,width:i,height:s},{duration:o,easing:a.settings.easing,complete:function(){if(u!=null)u()}})}}function E(e){var t=n.data("smartZoomData");var r=n.width();var i=n.height();var s=n.offset();var o=parseInt(s.left);var u=parseInt(s.top);var a=t.containerDiv.offset();if(e!=true){o=parseInt(o)-a.left;u=parseInt(u)-a.top}if(t.transitionObject!=null){var f=n.css(t.transitionObject.transform);if(f&&f!=""&&f.search("matrix")!=-1){var l;var c;if(f.search("matrix3d")!=-1){c=f.replace("matrix3d(","").replace(")","").split(",");l=c[0]}else{c=f.replace("matrix(","").replace(")","").split(",");l=c[3];o=parseFloat(c[4]);u=parseFloat(c[5]);if(e){o=parseFloat(o)+a.left;u=parseFloat(u)+a.top}}r=l*r;i=l*i}}return{x:o,y:u,width:r,height:i}}function S(){if(jQuery.browser.opera)return null;var t=document.body||document.documentElement;var n=t.style;var r=["transition","WebkitTransition","MozTransition","MsTransition","OTransition"];var i=["transition","-webkit-transition","-moz-transition","-ms-transition","-o-transition"];var s=["transform","-webkit-transform","-moz-transform","-ms-transform","-o-transform"];var o=r.length;var u;for(var a=0;a<o;a++){if(n[r[a]]!=null){transformStr=s[a];var f=e('<div style="position:absolute;">Translate3d Test</div>');e("body").append(f);u=new Object;u[s[a]]="translate3d(20px,0,0)";f.css(u);css3dSupported=f.offset().left==20;f.empty().remove();if(css3dSupported){return{transition:i[a],transform:s[a],css3dSupported:css3dSupported}}}}return null}function x(e,t,n){if(e.search&&e.search("%")!=-1)return(t-n)*(parseInt(e)/100);else return parseInt(e)}function T(e,t,n){if(e.search&&e.search("%")!=-1)return t+n*(parseInt(e)/100);else return t+parseInt(e)}function N(){b()}function C(e){var t=e.offset();if(!t)return null;var n=t.left;var r=t.top;return{x:n,y:r,width:e.outerWidth(),height:e.outerHeight()}}function k(e,t){this.x=e;this.y=t;this.toString=function(){return"(x="+this.x+", y="+this.y+")"};this.interpolate=function(e,t){var n=t*this.x+(1-t)*e.x;var r=t*this.y+(1-t)*e.y;return new k(n,r)};this.distance=function(e){return Math.sqrt(Math.pow(e.y-this.y,2)+Math.pow(e.x-this.x,2))}}var n=this;var r={init:function(t){if(n.data("smartZoomData"))return;settings=e.extend({top:"0",left:"0",width:"100%",height:"100%",easing:"smartZoomEasing",maxScale:2.0,mouseEnabled:true,scrollEnabled:false,mouseMoveEnabled:false,moveCursorEnabled:false,touchEnabled:true,dblTapEnabled:true,pinchEnabled:true,touchMoveEnabled:true,containerBackground:"#FFFFFF",containerClass:""},t);var r="smartZoomContainer"+(new Date).getTime();var o=e('<div id="'+r+'" class="'+settings.containerClass+'"></div>"');n.before(o);n.remove();o=e("#"+r);if(settings.containerClass=="")o.css({"background-color":settings.containerBackground});o.append(n);var f=new Object;f.lastTouchEndTime=0;f.lastTouchPositionArr=null;f.touchMove=false;f.touchPinch=false;n.data("smartZoomData",{settings:settings,containerDiv:o,originalSize:{width:n.width(),height:n.height()},originalPosition:n.offset(),transitionObject:S(),touch:f,mouseWheelDeltaFactor:.15,currentWheelDelta:0,adjustedPosInfos:null,moveCurrentPosition:null,moveLastPosition:null});b();if(settings.touchEnabled==true)n.bind("touchstart.smartZoom",c);if(settings.mouseEnabled==true){if(settings.mouseMoveEnabled==true)n.bind("mousedown.smartZoom",a);if(settings.scrollEnabled==true){o.bind("mousewheel.smartZoom",i);o.bind("mousewheel.smartZoom DOMMouseScroll.smartZoom",s)}}document.ondragstart=function(){return false};e(window).bind("resize.smartZoom",N)},zoom:function(e,t,r){var i=n.data("smartZoomData");var s;var u;if(!t){var a=C(i.containerDiv);s=a.x+a.width/2;u=a.y+a.height/2}else{s=t.x;u=t.y}m();var f=E(true);var l=i.originalSize;var c=f.width/l.width+e;c=Math.max(i.adjustedPosInfos.scale,c);c=Math.min(i.settings.maxScale,c);var h=l.width*c;var p=l.height*c;var d=s-f.x;var v=u-f.y;var y=h/f.width;var b=f.x-(d*y-d);var S=f.y-(v*y-v);var x=g(b,S,h,p);if(r==null)r=700;w(n,x.x,x.y,h,p,r,function(){i.currentWheelDelta=0;o()})},pan:function(e,t,r){if(e==null||t==null)return;if(r==null)r=700;var i=n.offset();var s=E();var o=g(i.left+e,i.top+t,s.width,s.height);if(o.x!=i.left||o.y!=i.top){m();w(n,o.x,o.y,s.width,s.height,r)}},destroy:function(){var t=n.data("smartZoomData");if(!t)return;m();var r=t.containerDiv;n.unbind("mousedown.smartZoom");n.bind("touchstart.smartZoom");r.unbind("mousewheel.smartZoom");r.unbind("mousewheel.smartZoom DOMMouseScroll.smartZoom");e(window).unbind("resize.smartZoom");e(document).unbind("mousemove.smartZoom");e(document).unbind("mouseup.smartZoom");e(document).unbind("touchmove.smartZoom");e(document).unbind("touchend.smartZoom");n.css({cursor:"default"});r.before(n);w(n,t.originalPosition.left,t.originalPosition.top,t.originalSize.width,t.originalSize.height,5);n.removeData("smartZoomData");r.remove()},isPluginActive:function(){return n.data("smartZoomData")!=undefined}};if(r[t]){return r[t].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof t==="object"||!t){if(n[0].tagName.toLowerCase()=="img"&&!n[0].complete){n.bind("load.smartZoom",{arguments:arguments[0]},y)}else{r.init.apply(n,[arguments[0]])}}else{e.error("Method "+t+" does not exist on e-smartzoom jquery plugin")}}})(jQuery);$.extend($.easing,{smartZoomEasing:function(e,t,n,r,i){return $.easing["smartZoomOutQuad"](e,t,n,r,i)},smartZoomOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n}});(function(e){function t(t){var n=t||window.event,r=[].slice.call(arguments,1),i=0,s=true,o=0,u=0;t=e.event.fix(n);t.type="mousewheel";if(n.wheelDelta){i=n.wheelDelta/120}if(n.detail){i=-n.detail/3}u=i;if(n.axis!==undefined&&n.axis===n.HORIZONTAL_AXIS){u=0;o=-1*i}if(n.wheelDeltaY!==undefined){u=n.wheelDeltaY/120}if(n.wheelDeltaX!==undefined){o=-1*n.wheelDeltaX/120}r.unshift(t,i,o,u);return(e.event.dispatch||e.event.handle).apply(this,r)}var n=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks){for(var r=n.length;r;){e.event.fixHooks[n[--r]]=e.event.mouseHooks}}e.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var e=n.length;e;){this.addEventListener(n[--e],t,false)}}else{this.onmousewheel=t}},teardown:function(){if(this.removeEventListener){for(var e=n.length;e;){this.removeEventListener(n[--e],t,false)}}else{this.onmousewheel=null}}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})})(jQuery)