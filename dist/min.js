/*!
 * VERSION: 0.14.3
 * DATE: 2015-12-19
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("utils.Draggable",["events.EventDispatcher","TweenLite","plugins.CSSPlugin"],function(a,b,c){var d,e,f,g,h,i,j,k,l={css:{}},m={css:{}},n={css:{}},o={css:{}},p=_gsScope._gsDefine.globals,q={},r=document,s=r.documentElement||{},t=function(a){return r.createElementNS?r.createElementNS("http://www.w3.org/1999/xhtml",a):r.createElement(a)},u=t("div"),v=[],w=function(){return!1},x=180/Math.PI,y=999999999999999,z=Date.now||function(){return(new Date).getTime()},A=!(r.addEventListener||!r.all),B=r.createElement("div"),C=[],D={},E=0,F=/^(?:a|input|textarea|button|select)$/i,G=0,H=-1!==navigator.userAgent.toLowerCase().indexOf("android"),I=0,J={},K={},L=function(a){if("string"==typeof a&&(a=b.selector(a)),!a||a.nodeType)return[a];var c,d=[],e=a.length;for(c=0;c!==e;d.push(a[c++]));return d},M=function(a){var b,c={};for(b in a)c[b]=a[b];return c},N=function(){for(var a=C.length;--a>-1;)C[a]()},O=function(a){C.push(a),1===C.length&&b.ticker.addEventListener("tick",N,this,!1,1)},P=function(a){for(var c=C.length;--c>-1;)C[c]===a&&C.splice(c,1);b.to(Q,0,{overwrite:"all",delay:15,onComplete:Q})},Q=function(){C.length||b.ticker.removeEventListener("tick",N)},R=function(a,b){var c;for(c in b)void 0===a[c]&&(a[c]=b[c]);return a},S=function(){return null!=window.pageYOffset?window.pageYOffset:null!=r.scrollTop?r.scrollTop:s.scrollTop||r.body.scrollTop||0},T=function(){return null!=window.pageXOffset?window.pageXOffset:null!=r.scrollLeft?r.scrollLeft:s.scrollLeft||r.body.scrollLeft||0},U=function(a,b){Ha(a,"scroll",b),W(a.parentNode)||U(a.parentNode,b)},V=function(a,b){Ia(a,"scroll",b),W(a.parentNode)||V(a.parentNode,b)},W=function(a){return!(a&&a!==s&&a!==r&&a!==r.body&&a!==window&&a.nodeType&&a.parentNode)},X=function(a,b){var c="x"===b?"Width":"Height",d="scroll"+c,e="client"+c,f=r.body;return Math.max(0,W(a)?Math.max(s[d],f[d])-(window["inner"+c]||s[e]||f[e]):a[d]-a[e])},Y=function(a){var b=W(a),c=X(a,"x"),d=X(a,"y");b?a=K:Y(a.parentNode),a._gsMaxScrollX=c,a._gsMaxScrollY=d,a._gsScrollX=a.scrollLeft||0,a._gsScrollY=a.scrollTop||0},Z=function(a,b){return a=a||window.event,q.pageX=a.clientX+r.body.scrollLeft+s.scrollLeft,q.pageY=a.clientY+r.body.scrollTop+s.scrollTop,b&&(a.returnValue=!1),q},$=function(a){return a?("string"==typeof a&&(a=b.selector(a)),a.length&&a!==window&&a[0]&&a[0].style&&!a.nodeType&&(a=a[0]),a===window||a.nodeType&&a.style?a:null):a},_=function(a,b){var c,e,f,g=a.style;if(void 0===g[b]){for(f=["O","Moz","ms","Ms","Webkit"],e=5,c=b.charAt(0).toUpperCase()+b.substr(1);--e>-1&&void 0===g[f[e]+c];);if(0>e)return"";d=3===e?"ms":f[e],b=d+c}return b},aa=function(a,b,c){var d=a.style;d&&(void 0===d[b]&&(b=_(a,b)),null==c?d.removeProperty?d.removeProperty(b.replace(/([A-Z])/g,"-$1").toLowerCase()):d.removeAttribute(b):void 0!==d[b]&&(d[b]=c))},ba=r.defaultView?r.defaultView.getComputedStyle:w,ca=/(?:Left|Right|Width)/i,da=/(?:\d|\-|\+|=|#|\.)*/g,ea=function(a,b,c,d,e){if("px"===d||!d)return c;if("auto"===d||!c)return 0;var f,g=ca.test(b),h=a,i=u.style,j=0>c;return j&&(c=-c),"%"===d&&-1!==b.indexOf("border")?f=c/100*(g?a.clientWidth:a.clientHeight):(i.cssText="border:0 solid red;position:"+ga(a,"position",!0)+";line-height:0;","%"!==d&&h.appendChild?i[g?"borderLeftWidth":"borderTopWidth"]=c+d:(h=a.parentNode||r.body,i[g?"width":"height"]=c+d),h.appendChild(u),f=parseFloat(u[g?"offsetWidth":"offsetHeight"]),h.removeChild(u),0!==f||e||(f=ea(a,b,c,d,!0))),j?-f:f},fa=function(a,b){if("absolute"!==ga(a,"position",!0))return 0;var c="left"===b?"Left":"Top",d=ga(a,"margin"+c,!0);return a["offset"+c]-(ea(a,b,parseFloat(d),(d+"").replace(da,""))||0)},ga=function(a,b,c){var d,e=(a._gsTransform||{})[b];return e||0===e?e:(a.style[b]?e=a.style[b]:(d=ba(a))?(e=d.getPropertyValue(b.replace(/([A-Z])/g,"-$1").toLowerCase()),e=e||d.length?e:d[b]):a.currentStyle&&(e=a.currentStyle[b]),"auto"!==e||"top"!==b&&"left"!==b||(e=fa(a,b)),c?e:parseFloat(e)||0)},ha=function(a,b,c){var d=a.vars,e=d[c],f=a._listeners[b];"function"==typeof e&&e.apply(d[c+"Scope"]||d.callbackScope||a,d[c+"Params"]||[a.pointerEvent]),f&&a.dispatchEvent(b)},ia=function(a,b){var c,d,e,f=$(a);return f?Ca(f,b):void 0!==a.left?(e=wa(b),{left:a.left-e.x,top:a.top-e.y,width:a.width,height:a.height}):(d=a.min||a.minX||a.minRotation||0,c=a.min||a.minY||0,{left:d,top:c,width:(a.max||a.maxX||a.maxRotation||0)-d,height:(a.max||a.maxY||0)-c})},ja=function(){if(!r.createElementNS)return g=0,void(h=!1);var a,b,c,d,e=t("div"),f=r.createElementNS("http://www.w3.org/2000/svg","svg"),k=t("div"),l=e.style,m=r.body||s;r.body&&ma&&(l.position=k.style.position="absolute",m.appendChild(k),k.appendChild(e),l.height="10px",d=e.offsetTop,k.style.border="5px solid red",j=d!==e.offsetTop,m.removeChild(k)),l=f.style,f.setAttributeNS(null,"width","400px"),f.setAttributeNS(null,"height","400px"),f.setAttributeNS(null,"viewBox","0 0 400 400"),l.display="block",l.boxSizing="border-box",l.border="0px solid red",l.transform="none",e.style.cssText="width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;",m.appendChild(e),e.appendChild(f),c=f.createSVGPoint().matrixTransform(f.getScreenCTM()),b=c.y,e.scrollTop=100,c.x=c.y=0,c=c.matrixTransform(f.getScreenCTM()),i=b-c.y<100.1?0:b-c.y-150,e.removeChild(f),m.removeChild(e),m.appendChild(f),a=f.getScreenCTM(),b=a.e,l.border="50px solid red",a=f.getScreenCTM(),0===b&&0===a.e&&0===a.f&&1===a.a?(g=1,h=!0):(g=b!==a.e?1:0,h=1!==a.a),m.removeChild(f)},ka=""!==_(u,"perspective"),la=_(u,"transformOrigin").replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),ma=_(u,"transform"),na=ma.replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),oa={},pa={},qa=window.SVGElement,ra=function(a){return!!(qa&&"function"==typeof a.getBBox&&a.getCTM&&(!a.parentNode||a.parentNode.getBBox&&a.parentNode.getCTM))},sa=(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent))&&parseFloat(RegExp.$1)<11,ta=[],ua=[],va=function(a){if(!a.getBoundingClientRect||!a.parentNode||!ma)return{offsetTop:0,offsetLeft:0,scaleX:1,scaleY:1,offsetParent:s};if(Ra.cacheSVGData!==!1&&a._gsCache&&a._gsCache.lastUpdate===b.ticker.frame)return a._gsCache;var c,d,e,f,j,k,l,m,n,o,p,q,t=a,u=xa(a);if(u.lastUpdate=b.ticker.frame,a.getBBox&&!u.isSVGRoot){for(t=a.parentNode,c=a.getBBox();t&&"svg"!==(t.nodeName+"").toLowerCase();)t=t.parentNode;return f=va(t),u.offsetTop=c.y*f.scaleY,u.offsetLeft=c.x*f.scaleX,u.scaleX=f.scaleX,u.scaleY=f.scaleY,u.offsetParent=t||s,u}for(e=u.offsetParent,e===r.body&&(e=s),ua.length=ta.length=0;t&&(j=ga(t,ma,!0),"matrix(1, 0, 0, 1, 0, 0)"!==j&&"none"!==j&&"translate3d(0px, 0px, 0px)"!==j&&(ua.push(t),ta.push(t.style[ma]),t.style[ma]="none"),t!==e);)t=t.parentNode;for(d=e.getBoundingClientRect(),j=a.getScreenCTM(),m=a.createSVGPoint(),l=m.matrixTransform(j),m.x=m.y=10,m=m.matrixTransform(j),u.scaleX=(m.x-l.x)/10,u.scaleY=(m.y-l.y)/10,void 0===g&&ja(),u.borderBox&&!h&&a.getAttribute("width")&&(f=ba(a)||{},n=parseFloat(f.borderLeftWidth)+parseFloat(f.borderRightWidth)||0,o=parseFloat(f.borderTopWidth)+parseFloat(f.borderBottomWidth)||0,p=parseFloat(f.width)||0,q=parseFloat(f.height)||0,u.scaleX*=(p-n)/p,u.scaleY*=(q-o)/q),i?(c=a.getBoundingClientRect(),u.offsetLeft=c.left-d.left,u.offsetTop=c.top-d.top):(u.offsetLeft=l.x-d.left,u.offsetTop=l.y-d.top),u.offsetParent=e,k=ua.length;--k>-1;)ua[k].style[ma]=ta[k];return u},wa=function(a,c){if(c=c||{},!a||a===s||!a.parentNode||a===window)return{x:0,y:0};var d=ba(a),e=la&&d?d.getPropertyValue(la):"50% 50%",f=e.split(" "),g=-1!==e.indexOf("left")?"0%":-1!==e.indexOf("right")?"100%":f[0],h=-1!==e.indexOf("top")?"0%":-1!==e.indexOf("bottom")?"100%":f[1];return("center"===h||null==h)&&(h="50%"),("center"===g||isNaN(parseFloat(g)))&&(g="50%"),a.getBBox&&ra(a)?(a._gsTransform||(b.set(a,{x:"+=0",overwrite:!1}),void 0===a._gsTransform.xOrigin&&console.log("Draggable requires at least GSAP 1.17.0")),e=a.getBBox(),c.x=a._gsTransform.xOrigin-e.x,c.y=a._gsTransform.yOrigin-e.y):(a.getBBox&&!a.offsetWidth&&-1!==(g+h).indexOf("%")&&(a=a.getBBox(),a={offsetWidth:a.width,offsetHeight:a.height}),c.x=-1!==g.indexOf("%")?a.offsetWidth*parseFloat(g)/100:parseFloat(g),c.y=-1!==h.indexOf("%")?a.offsetHeight*parseFloat(h)/100:parseFloat(h)),c},xa=function(a){if(Ra.cacheSVGData!==!1&&a._gsCache&&a._gsCache.lastUpdate===b.ticker.frame)return a._gsCache;var c,d=a._gsCache=a._gsCache||{},e=ba(a),f=a.getBBox&&ra(a),g="svg"===(a.nodeName+"").toLowerCase();if(d.isSVG=f,d.isSVGRoot=g,d.borderBox="border-box"===e.boxSizing,d.computedStyle=e,g)(d.offsetParent=a.offsetParent)||(c=a.parentNode||s,c.insertBefore(u,a),d.offsetParent=u.offsetParent||s,c.removeChild(u));else if(f){for(c=a.parentNode;c&&"svg"!==(c.nodeName+"").toLowerCase();)c=c.parentNode;d.offsetParent=c}return d},ya=function(a,b,c,d){if(a===window||!a||!a.style||!a.parentNode)return[1,0,0,1,0,0];var e,f,h,i,k,l,m,n,o,p,q,t,u,v,w=a._gsCache||xa(a),x=a.parentNode,y=x._gsCache||xa(x),z=w.computedStyle,A=w.isSVG?y.offsetParent:x.offsetParent;return e=w.isSVG&&-1!==(a.style[ma]+"").indexOf("matrix")?a.style[ma]:z?z.getPropertyValue(na):a.currentStyle?a.currentStyle[ma]:"1,0,0,1,0,0",a.getBBox&&-1!==(a.getAttribute("transform")+"").indexOf("matrix")&&(e=a.getAttribute("transform")),e=(e+"").match(/(?:\-|\b)[\d\-\.e]+\b/g)||[1,0,0,1,0,0],e.length>6&&(e=[e[0],e[1],e[4],e[5],e[12],e[13]]),d?e[4]=e[5]=0:w.isSVG&&(k=a._gsTransform)&&(k.xOrigin||k.yOrigin)&&(e[0]=parseFloat(e[0]),e[1]=parseFloat(e[1]),e[2]=parseFloat(e[2]),e[3]=parseFloat(e[3]),e[4]=parseFloat(e[4])-(k.xOrigin-(k.xOrigin*e[0]+k.yOrigin*e[2])),e[5]=parseFloat(e[5])-(k.yOrigin-(k.xOrigin*e[1]+k.yOrigin*e[3]))),b&&(void 0===g&&ja(),h=w.isSVG||w.isSVGRoot?va(a):a,w.isSVG?(i=a.getBBox(),p=y.isSVGRoot?{x:0,y:0}:x.getBBox(),h={offsetLeft:i.x-p.x,offsetTop:i.y-p.y,offsetParent:w.offsetParent}):w.isSVGRoot?(q=parseInt(z.borderTopWidth,10)||0,t=parseInt(z.borderLeftWidth,10)||0,u=(e[0]-g)*t+e[2]*q,v=e[1]*t+(e[3]-g)*q,l=b.x,m=b.y,n=l-(l*e[0]+m*e[2]),o=m-(l*e[1]+m*e[3]),e[4]=parseFloat(e[4])+n,e[5]=parseFloat(e[5])+o,b.x-=n,b.y-=o,l=h.scaleX,m=h.scaleY,b.x*=l,b.y*=m,e[0]*=l,e[1]*=m,e[2]*=l,e[3]*=m,sa||(b.x+=u,b.y+=v)):!j&&a.offsetParent&&(b.x+=parseInt(ga(a.offsetParent,"borderLeftWidth"),10)||0,b.y+=parseInt(ga(a.offsetParent,"borderTopWidth"),10)||0),f=x===s||x===r.body,e[4]=Number(e[4])+b.x+(h.offsetLeft||0)-c.x-(f?0:x.scrollLeft||0),e[5]=Number(e[5])+b.y+(h.offsetTop||0)-c.y-(f?0:x.scrollTop||0),x&&"fixed"===ga(a,"position",z)&&(e[4]+=T(),e[5]+=S()),x&&x!==s&&A===h.offsetParent&&(e[4]-=x.offsetLeft||0,e[5]-=x.offsetTop||0,j||!x.offsetParent||w.isSVG||w.isSVGRoot||(e[4]-=parseInt(ga(x.offsetParent,"borderLeftWidth"),10)||0,e[5]-=parseInt(ga(x.offsetParent,"borderTopWidth"),10)||0))),e},za=function(a,b){if(!a||a===window||!a.parentNode)return[1,0,0,1,0,0];for(var c,d,e,f,g,h,i,j,k=wa(a,oa),l=wa(a.parentNode,pa),m=ya(a,k,l);(a=a.parentNode)&&a.parentNode&&a!==s;)k=l,l=wa(a.parentNode,k===oa?pa:oa),i=ya(a,k,l),c=m[0],d=m[1],e=m[2],f=m[3],g=m[4],h=m[5],m[0]=c*i[0]+d*i[2],m[1]=c*i[1]+d*i[3],m[2]=e*i[0]+f*i[2],m[3]=e*i[1]+f*i[3],m[4]=g*i[0]+h*i[2]+i[4],m[5]=g*i[1]+h*i[3]+i[5];return b&&(c=m[0],d=m[1],e=m[2],f=m[3],g=m[4],h=m[5],j=c*f-d*e,m[0]=f/j,m[1]=-d/j,m[2]=-e/j,m[3]=c/j,m[4]=(e*h-f*g)/j,m[5]=-(c*h-d*g)/j),m},Aa=function(a,b,c,d,e){a=$(a);var f=za(a,!1,e),g=b.x,h=b.y;return c&&(wa(a,b),g-=b.x,h-=b.y),d=d===!0?b:d||{},d.x=g*f[0]+h*f[2]+f[4],d.y=g*f[1]+h*f[3]+f[5],d},Ba=function(a,b,c){var d=a.x*b[0]+a.y*b[2]+b[4],e=a.x*b[1]+a.y*b[3]+b[5];return a.x=d*c[0]+e*c[2]+c[4],a.y=d*c[1]+e*c[3]+c[5],a},Ca=function(a,b,c){if(!(a=$(a)))return null;b=$(b);var d,e,f,g,h,i,j,k,l,m,n,o,p,q,t,u,v,w,x,y,z,B,C=a.getBBox&&ra(a);if(a===window)g=S(),e=T(),f=e+(s.clientWidth||a.innerWidth||r.body.clientWidth||0),h=g+((a.innerHeight||0)-20<s.clientHeight?s.clientHeight:a.innerHeight||r.body.clientHeight||0);else{if(void 0===b||b===window)return a.getBoundingClientRect();d=wa(a),e=-d.x,g=-d.y,C?(o=a.getBBox(),p=o.width,q=o.height):a.offsetWidth?(p=a.offsetWidth,q=a.offsetHeight):(z=ba(a),p=parseFloat(z.width),q=parseFloat(z.height)),f=e+p,h=g+q,"svg"!==a.nodeName.toLowerCase()||A||(t=va(a),B=t.computedStyle||{},w=(a.getAttribute("viewBox")||"0 0").split(" "),x=parseFloat(w[0]),y=parseFloat(w[1]),u=parseFloat(B.borderLeftWidth)||0,v=parseFloat(B.borderTopWidth)||0,f-=p-(p-u)/t.scaleX-x,h-=q-(q-v)/t.scaleY-y,e-=u/t.scaleX-x,g-=v/t.scaleY-y,z&&(f+=(parseFloat(B.borderRightWidth)+u)/t.scaleX,h+=(v+parseFloat(B.borderBottomWidth))/t.scaleY))}return a===b?{left:e,top:g,width:f-e,height:h-g}:(i=za(a),j=za(b,!0),k=Ba({x:e,y:g},i,j),l=Ba({x:f,y:g},i,j),m=Ba({x:f,y:h},i,j),n=Ba({x:e,y:h},i,j),e=Math.min(k.x,l.x,m.x,n.x),g=Math.min(k.y,l.y,m.y,n.y),J.x=J.y=0,c&&wa(b,J),{left:e+J.x,top:g+J.y,width:Math.max(k.x,l.x,m.x,n.x)-e,height:Math.max(k.y,l.y,m.y,n.y)-g})},Da=function(a){return a&&a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},Ea=function(a){var b,c,d,e=[],f=a.length;for(b=0;f>b;b++)if(c=a[b],Da(c))for(d=c.length,d=0;d<c.length;d++)e.push(c[d]);else c&&0!==c.length&&e.push(c);return e},Fa="ontouchstart"in s&&"orientation"in window,Ga=function(a){for(var b=a.split(","),c=(void 0!==u.onpointerdown?"pointerdown,pointermove,pointerup,pointercancel":void 0!==u.onmspointerdown?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":a).split(","),d={},e=8;--e>-1;)d[b[e]]=c[e],d[c[e]]=b[e];return d}("touchstart,touchmove,touchend,touchcancel"),Ha=function(a,b,c,d){a.addEventListener?a.addEventListener(Ga[b]||b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},Ia=function(a,b,c){a.removeEventListener?a.removeEventListener(Ga[b]||b,c):a.detachEvent&&a.detachEvent("on"+b,c)},Ja=function(a,b){for(var c=a.length;--c>-1;)if(a[c].identifier===b)return!0;return!1},Ka=function(a){e=a.touches&&G<a.touches.length,Ia(a.target,"touchend",Ka)},La=function(a){e=a.touches&&G<a.touches.length,Ha(a.target,"touchend",Ka)},Ma=function(a,b,c,d,e,f){var g,h,i,j={};if(b)if(1!==e&&b instanceof Array){for(j.end=g=[],i=b.length,h=0;i>h;h++)g[h]=b[h]*e;c+=1.1,d-=1.1}else"function"==typeof b?j.end=function(c){return b.call(a,c)*e}:j.end=b;return(c||0===c)&&(j.max=c),(d||0===d)&&(j.min=d),f&&(j.velocity=0),j},Na=function(a){var b;return a&&a.getAttribute&&"BODY"!==a.nodeName?"true"===(b=a.getAttribute("data-clickable"))||"false"!==b&&(a.onclick||F.test(a.nodeName+"")||"true"===a.getAttribute("contentEditable"))?!0:Na(a.parentNode):!1},Oa=function(a,b){for(var c,d=a.length;--d>-1;)c=a[d],c.ondragstart=c.onselectstart=b?null:w,aa(c,"userSelect",b?"text":"none")},Pa=function(){var a,b=r.createElement("div"),c=r.createElement("div"),d=c.style,e=r.body||u;return d.display="inline-block",d.position="relative",b.style.cssText=c.innerHTML="width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden",b.appendChild(c),e.appendChild(b),k=c.offsetHeight+18>b.scrollHeight,d.width="100%",ma||(d.paddingRight="500px",a=b.scrollLeft=b.scrollWidth-b.clientWidth,d.left="-90px",a=a!==b.scrollLeft),e.removeChild(b),a}(),Qa=function(a,c){a=$(a),c=c||{};var d,e,f,g,h,i,j=r.createElement("div"),l=j.style,m=a.firstChild,n=0,o=0,p=a.scrollTop,q=a.scrollLeft,s=a.scrollWidth,t=a.scrollHeight,u=0,v=0,w=0;ka&&c.force3D!==!1?(h="translate3d(",i="px,0px)"):ma&&(h="translate(",i="px)"),this.scrollTop=function(a,b){return arguments.length?void this.top(-a,b):-this.top()},this.scrollLeft=function(a,b){return arguments.length?void this.left(-a,b):-this.left()},this.left=function(d,e){if(!arguments.length)return-(a.scrollLeft+o);var f=a.scrollLeft-q,g=o;return(f>2||-2>f)&&!e?(q=a.scrollLeft,b.killTweensOf(this,!0,{left:1,scrollLeft:1}),this.left(-q),void(c.onKill&&c.onKill())):(d=-d,0>d?(o=d-.5|0,d=0):d>v?(o=d-v|0,d=v):o=0,(o||g)&&(h?this._suspendTransforms||(l[ma]=h+-o+"px,"+-n+i):l.left=-o+"px",Pa&&o+u>=0&&(l.paddingRight=o+u+"px")),a.scrollLeft=0|d,void(q=a.scrollLeft))},this.top=function(d,e){if(!arguments.length)return-(a.scrollTop+n);var f=a.scrollTop-p,g=n;return(f>2||-2>f)&&!e?(p=a.scrollTop,b.killTweensOf(this,!0,{top:1,scrollTop:1}),this.top(-p),void(c.onKill&&c.onKill())):(d=-d,0>d?(n=d-.5|0,d=0):d>w?(n=d-w|0,d=w):n=0,(n||g)&&(h?this._suspendTransforms||(l[ma]=h+-o+"px,"+-n+i):l.top=-n+"px"),a.scrollTop=0|d,void(p=a.scrollTop))},this.maxScrollTop=function(){return w},this.maxScrollLeft=function(){return v},this.disable=function(){for(m=j.firstChild;m;)g=m.nextSibling,a.appendChild(m),m=g;a===j.parentNode&&a.removeChild(j)},this.enable=function(){if(m=a.firstChild,m!==j){for(;m;)g=m.nextSibling,j.appendChild(m),m=g;a.appendChild(j),this.calibrate()}},this.calibrate=function(b){var c,g,h=a.clientWidth===d;p=a.scrollTop,q=a.scrollLeft,(!h||a.clientHeight!==e||j.offsetHeight!==f||s!==a.scrollWidth||t!==a.scrollHeight||b)&&((n||o)&&(c=this.left(),g=this.top(),this.left(-a.scrollLeft),this.top(-a.scrollTop)),(!h||b)&&(l.display="block",l.width="auto",l.paddingRight="0px",u=Math.max(0,a.scrollWidth-a.clientWidth),u&&(u+=ga(a,"paddingLeft")+(k?ga(a,"paddingRight"):0))),l.display="inline-block",l.position="relative",l.overflow="visible",l.verticalAlign="top",l.width="100%",l.paddingRight=u+"px",k&&(l.paddingBottom=ga(a,"paddingBottom",!0)),A&&(l.zoom="1"),d=a.clientWidth,e=a.clientHeight,s=a.scrollWidth,t=a.scrollHeight,v=a.scrollWidth-d,w=a.scrollHeight-e,f=j.offsetHeight,l.display="block",(c||g)&&(this.left(c),this.top(g)))},this.content=j,this.element=a,this._suspendTransforms=!1,this.enable()},Ra=function(d,g){a.call(this,d),d=$(d),f||(f=p.com.greensock.plugins.ThrowPropsPlugin),this.vars=g=M(g||{}),this.target=d,this.x=this.y=this.rotation=0,this.dragResistance=parseFloat(g.dragResistance)||0,this.edgeResistance=isNaN(g.edgeResistance)?1:parseFloat(g.edgeResistance)||0,this.lockAxis=g.lockAxis,this.autoScroll=g.autoScroll||0,this.lockedAxis=null,this.allowEventDefault=!!g.allowEventDefault;var h,i,j,k,q,t,u,w,C,F,J,N,Q,S,T,X,_,ba,ca,da,ea,fa,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua=(g.type||(A?"top,left":"x,y")).toLowerCase(),va=-1!==ua.indexOf("x")||-1!==ua.indexOf("y"),wa=-1!==ua.indexOf("rotation"),xa=wa?"rotation":va?"x":"left",ya=va?"y":"top",Ba=-1!==ua.indexOf("x")||-1!==ua.indexOf("left")||"scroll"===ua,Ca=-1!==ua.indexOf("y")||-1!==ua.indexOf("top")||"scroll"===ua,Da=g.minimumMovement||2,Ea=this,Ka=L(g.trigger||g.handle||d),Pa={},Sa=0,Ta=!1,Ua=g.clickableTest||Na,Wa=function(a){if(Ea.autoScroll&&(Ta||Ea.isDragging&&ba)){var b,c,e,f,g,h,j,k,l=d,m=15*Ea.autoScroll;for(Ta=!1,K.scrollTop=null!=window.pageYOffset?window.pageYOffset:null!=s.scrollTop?s.scrollTop:r.body.scrollTop,K.scrollLeft=null!=window.pageXOffset?window.pageXOffset:null!=s.scrollLeft?s.scrollLeft:r.body.scrollLeft,f=Ea.pointerX-K.scrollLeft,g=Ea.pointerY-K.scrollTop;l&&!c;)c=W(l.parentNode),b=c?K:l.parentNode,e=c?{bottom:Math.max(s.clientHeight,window.innerHeight||0),right:Math.max(s.clientWidth,window.innerWidth||0),left:0,top:0}:b.getBoundingClientRect(),h=j=0,Ca&&(k=b._gsMaxScrollY-b.scrollTop,0>k?j=k:g>e.bottom-40&&k?(Ta=!0,j=Math.min(k,m*(1-Math.max(0,e.bottom-g)/40)|0)):g<e.top+40&&b.scrollTop&&(Ta=!0,j=-Math.min(b.scrollTop,m*(1-Math.max(0,g-e.top)/40)|0)),j&&(b.scrollTop+=j)),Ba&&(k=b._gsMaxScrollX-b.scrollLeft,0>k?h=k:f>e.right-40&&k?(Ta=!0,h=Math.min(k,m*(1-Math.max(0,e.right-f)/40)|0)):f<e.left+40&&b.scrollLeft&&(Ta=!0,h=-Math.min(b.scrollLeft,m*(1-Math.max(0,f-e.left)/40)|0)),h&&(b.scrollLeft+=h)),c&&(h||j)&&(window.scrollTo(b.scrollLeft,b.scrollTop),gb(Ea.pointerX+h,Ea.pointerY+j)),l=b}if(ba){var n=Ea.x,o=Ea.y,p=1e-6;p>n&&n>-p&&(n=0),p>o&&o>-p&&(o=0),wa?(pa.data.rotation=Ea.rotation=n,pa.setRatio(1)):i?(Ca&&i.top(o),Ba&&i.left(n)):va?(Ca&&(pa.data.y=o),Ba&&(pa.data.x=n),pa.setRatio(1)):(Ca&&(d.style.top=o+"px"),Ba&&(d.style.left=n+"px")),!w||a||sa||(sa=!0,ha(Ea,"drag","onDrag"),sa=!1)}ba=!1},Xa=function(a,c){var e,f=Ea.x,g=Ea.y;d._gsTransform||!va&&!wa||b.set(d,{x:"+=0",overwrite:!1}),va?(Ea.y=d._gsTransform.y,Ea.x=d._gsTransform.x):wa?Ea.x=Ea.rotation=d._gsTransform.rotation:i?(Ea.y=i.top(),Ea.x=i.left()):(Ea.y=parseInt(d.style.top,10)||0,Ea.x=parseInt(d.style.left,10)||0),!da&&!ea||c||(da&&(e=da(Ea.x),e!==Ea.x&&(Ea.x=e,wa&&(Ea.rotation=e))),ea&&(e=ea(Ea.y),e!==Ea.y&&(Ea.y=e))),(f!==Ea.x||g!==Ea.y)&&Wa(!0),a||ha(Ea,"throwupdate","onThrowUpdate")},Ya=function(){var a,b,c,e;u=!1,i?(i.calibrate(),Ea.minX=F=-i.maxScrollLeft(),Ea.minY=N=-i.maxScrollTop(),Ea.maxX=C=Ea.maxY=J=0,u=!0):g.bounds&&(a=ia(g.bounds,d.parentNode),wa?(Ea.minX=F=a.left,Ea.maxX=C=a.left+a.width,Ea.minY=N=Ea.maxY=J=0):void 0!==g.bounds.maxX||void 0!==g.bounds.maxY?(a=g.bounds,Ea.minX=F=a.minX,Ea.minY=N=a.minY,Ea.maxX=C=a.maxX,Ea.maxY=J=a.maxY):(b=ia(d,d.parentNode),Ea.minX=F=ga(d,xa)+a.left-b.left,Ea.minY=N=ga(d,ya)+a.top-b.top,Ea.maxX=C=F+(a.width-b.width),Ea.maxY=J=N+(a.height-b.height)),F>C&&(Ea.minX=C,Ea.maxX=C=F,F=Ea.minX),N>J&&(Ea.minY=J,Ea.maxY=J=N,N=Ea.minY),wa&&(Ea.minRotation=F,Ea.maxRotation=C),u=!0),g.liveSnap&&(c=g.liveSnap===!0?g.snap||{}:g.liveSnap,e=c instanceof Array||"function"==typeof c,wa?(da=db(e?c:c.rotation,F,C,1),ea=null):(Ba&&(da=db(e?c:c.x||c.left||c.scrollLeft,F,C,i?-1:1)),Ca&&(ea=db(e?c:c.y||c.top||c.scrollTop,N,J,i?-1:1))))},Za=function(){Ea.isThrowing=!1,ha(Ea,"throwcomplete","onThrowComplete")},$a=function(){Ea.isThrowing=!1},_a=function(a,b){var c,e,h,j;a&&f?(a===!0&&(c=g.snap||{},e=c instanceof Array||"function"==typeof c,a={resistance:(g.throwResistance||g.resistance||1e3)/(wa?10:1)},wa?a.rotation=Ma(Ea,e?c:c.rotation,C,F,1,b):(Ba&&(a[xa]=Ma(Ea,e?c:c.x||c.left||c.scrollLeft,C,F,i?-1:1,b||"x"===Ea.lockedAxis)),Ca&&(a[ya]=Ma(Ea,e?c:c.y||c.top||c.scrollTop,J,N,i?-1:1,b||"y"===Ea.lockedAxis)))),Ea.isThrowing=!0,j=isNaN(g.overshootTolerance)?1===g.edgeResistance?0:1-Ea.edgeResistance+.2:g.overshootTolerance,Ea.tween=h=f.to(i||d,{throwProps:a,ease:g.ease||p.Power3.easeOut,onComplete:Za,onOverwrite:$a,onUpdate:g.fastMode?ha:Xa,onUpdateParams:g.fastMode?[Ea,"onthrowupdate","onThrowUpdate"]:v},isNaN(g.maxDuration)?2:g.maxDuration,isNaN(g.minDuration)?0===j?0:.5:g.minDuration,j),g.fastMode||(i&&(i._suspendTransforms=!0),h.render(h.duration(),!0,!0),Xa(!0,!0),Ea.endX=Ea.x,Ea.endY=Ea.y,wa&&(Ea.endRotation=Ea.x),h.play(0),Xa(!0,!0),i&&(i._suspendTransforms=!1))):u&&Ea.applyBounds()},ab=function(){var a,b,c,e,f,g,h,i,l,m=ka||[1,0,0,1,0,0];ka=za(d.parentNode,!0),Ea.isPressed&&m.join(",")!==ka.join(",")&&(a=m[0],b=m[1],c=m[2],e=m[3],f=m[4],g=m[5],h=a*e-b*c,i=j*(e/h)+k*(-c/h)+(c*g-e*f)/h,l=j*(-b/h)+k*(a/h)+-(a*g-b*f)/h,k=i*ka[1]+l*ka[3]+ka[5],j=i*ka[0]+l*ka[2]+ka[4]),ka[1]||ka[2]||1!=ka[0]||1!=ka[3]||0!=ka[4]||0!=ka[5]||(ka=null)},bb=function(){var a=1-Ea.edgeResistance;ab(),i?(Ya(),t=i.top(),q=i.left()):(cb()?(Xa(!0,!0),Ya()):Ea.applyBounds(),wa?(_=Aa(d,{x:0,y:0}),Xa(!0,!0),q=Ea.x,t=Ea.y=Math.atan2(_.y-k,j-_.x)*x):(na=d.parentNode?d.parentNode.scrollTop||0:0,oa=d.parentNode?d.parentNode.scrollLeft||0:0,t=ga(d,ya),q=ga(d,xa))),u&&a&&(q>C?q=C+(q-C)/a:F>q&&(q=F-(F-q)/a),wa||(t>J?t=J+(t-J)/a:N>t&&(t=N-(N-t)/a)))},cb=function(){return Ea.tween&&Ea.tween.isActive()},db=function(a,b,c,d){return"function"==typeof a?function(e){var f=Ea.isPressed?1-Ea.edgeResistance:1;return a.call(Ea,e>c?c+(e-c)*f:b>e?b+(e-b)*f:e)*d}:a instanceof Array?function(d){for(var e,f,g=a.length,h=0,i=y;--g>-1;)e=a[g],f=e-d,0>f&&(f=-f),i>f&&e>=b&&c>=e&&(h=g,i=f);return a[h]}:isNaN(a)?function(a){return a}:function(){return a*d}},eb=function(a){var c,e;if(h&&!Ea.isPressed&&a&&!("mousedown"===a.type&&z()-ma<30&&Ga[Ea.pointerEvent.type])){if(la=cb(),Ea.pointerEvent=a,Ga[a.type]?(ja=-1!==a.type.indexOf("touch")?a.currentTarget||a.target:r,Ha(ja,"touchend",hb),Ha(ja,"touchmove",fb),Ha(ja,"touchcancel",hb),Ha(r,"touchstart",La)):(ja=null,Ha(r,"mousemove",fb)),ra=null,Ha(r,"mouseup",hb),a&&a.target&&Ha(a.target,"mouseup",hb),fa=Ua.call(Ea,a.target)&&!g.dragClickables)return Ha(a.target,"change",hb),ha(Ea,"press","onPress"),void Oa(Ka,!0);if(qa=!ja||Ba===Ca||i||Ea.vars.allowNativeTouchScrolling===!1?!1:Ba?"y":"x",A?a=Z(a,!0):qa||Ea.allowEventDefault||(a.preventDefault(),a.preventManipulation&&a.preventManipulation()),a.changedTouches?(a=T=a.changedTouches[0],X=a.identifier):a.pointerId?X=a.pointerId:T=X=null,G++,O(Wa),k=Ea.pointerY=a.pageY,j=Ea.pointerX=a.pageX,(qa||Ea.autoScroll)&&Y(d.parentNode),!Ea.autoScroll||wa||i||!d.parentNode||d.getBBox||!d.parentNode._gsMaxScrollX||B.parentNode||(B.style.width=d.parentNode.scrollWidth+"px",d.parentNode.appendChild(B)),bb(),ka&&(c=j*ka[0]+k*ka[2]+ka[4],k=j*ka[1]+k*ka[3]+ka[5],j=c),Ea.tween&&Ea.tween.kill(),Ea.isThrowing=!1,b.killTweensOf(i||d,!0,Pa),i&&b.killTweensOf(d,!0,{scrollTo:1}),Ea.tween=Ea.lockedAxis=null,(g.zIndexBoost||!wa&&!i&&g.zIndexBoost!==!1)&&(d.style.zIndex=Ra.zIndex++),Ea.isPressed=!0,w=!(!g.onDrag&&!Ea._listeners.drag),!wa)for(e=Ka.length;--e>-1;)aa(Ka[e],"cursor",g.cursor||"move");ha(Ea,"press","onPress")}},fb=function(a){var b,c,d,f,g=a;if(h&&!e&&Ea.isPressed&&a){if(Ea.pointerEvent=a,b=a.changedTouches){if(a=b[0],a!==T&&a.identifier!==X){for(f=b.length;--f>-1&&(a=b[f]).identifier!==X;);if(0>f)return}}else if(a.pointerId&&X&&a.pointerId!==X)return;if(A)a=Z(a,!0);else{if(ja&&qa&&!ra&&(c=a.pageX,d=a.pageY,ka&&(f=c*ka[0]+d*ka[2]+ka[4],d=c*ka[1]+d*ka[3]+ka[5],c=f),ra=Math.abs(c-j)>Math.abs(d-k)&&Ba?"x":"y",Ea.vars.lockAxisOnTouchScroll!==!1&&(Ea.lockedAxis="x"===ra?"y":"x","function"==typeof Ea.vars.onLockAxis&&Ea.vars.onLockAxis.call(Ea,g)),H&&qa===ra))return void hb(g);Ea.allowEventDefault||qa&&(!ra||qa===ra)||g.cancelable===!1||(g.preventDefault(),g.preventManipulation&&g.preventManipulation())}Ea.autoScroll&&(Ta=!0),gb(a.pageX,a.pageY)}},gb=function(a,b){var c,d,e,f,g,h,i=1-Ea.dragResistance,l=1-Ea.edgeResistance;Ea.pointerX=a,Ea.pointerY=b,wa?(f=Math.atan2(_.y-b,a-_.x)*x,g=Ea.y-f,Ea.y=f,g>180?t-=360:-180>g&&(t+=360),e=q+(t-f)*i):(ka&&(h=a*ka[0]+b*ka[2]+ka[4],b=a*ka[1]+b*ka[3]+ka[5],a=h),d=b-k,c=a-j,Da>d&&d>-Da&&(d=0),Da>c&&c>-Da&&(c=0),(Ea.lockAxis||Ea.lockedAxis)&&(c||d)&&(h=Ea.lockedAxis,h||(Ea.lockedAxis=h=Ba&&Math.abs(c)>Math.abs(d)?"y":Ca?"x":null,h&&"function"==typeof Ea.vars.onLockAxis&&Ea.vars.onLockAxis.call(Ea,Ea.pointerEvent)),"y"===h?d=0:"x"===h&&(c=0)),e=q+c*i,f=t+d*i),da||ea?(da&&(e=da(e)),ea&&(f=ea(f))):u&&(e>C?e=C+(e-C)*l:F>e&&(e=F+(e-F)*l),wa||(f>J?f=J+(f-J)*l:N>f&&(f=N+(f-N)*l))),wa||(e=Math.round(e),f=Math.round(f)),(Ea.x!==e||Ea.y!==f&&!wa)&&(wa?Ea.endRotation=Ea.x=Ea.endX=e:(Ca&&(Ea.y=Ea.endY=f),Ba&&(Ea.x=Ea.endX=e)),ba=!0,!Ea.isDragging&&Ea.isPressed&&(Ea.isDragging=!0,ha(Ea,"dragstart","onDragStart")))},hb=function(a,c){if(h&&Ea.isPressed&&(!a||null==X||c||!(a.pointerId&&a.pointerId!==X||a.changedTouches&&!Ja(a.changedTouches,X)))){Ea.isPressed=!1;var e,f,i,j,k=a,l=Ea.isDragging;if(ja?(Ia(ja,"touchend",hb),Ia(ja,"touchmove",fb),Ia(ja,"touchcancel",hb),Ia(r,"touchstart",La)):Ia(r,"mousemove",fb),Ia(r,"mouseup",hb),a&&a.target&&Ia(a.target,"mouseup",hb),ba=!1,B.parentNode&&B.parentNode.removeChild(B),fa)return a&&Ia(a.target,"change",hb),Oa(Ka,!1),ha(Ea,"release","onRelease"),ha(Ea,"click","onClick"),void(fa=!1);if(P(Wa),!wa)for(f=Ka.length;--f>-1;)aa(Ka[f],"cursor",g.cursor||"move");if(l&&(Sa=I=z(),Ea.isDragging=!1),G--,a){if(A&&(a=Z(a,!1)),e=a.changedTouches,e&&(a=e[0],a!==T&&a.identifier!==X)){for(f=e.length;--f>-1&&(a=e[f]).identifier!==X;);if(0>f)return}Ea.pointerEvent=k,Ea.pointerX=a.pageX,Ea.pointerY=a.pageY}return k&&!l?(la&&(g.snap||g.bounds)&&_a(g.throwProps),ha(Ea,"release","onRelease"),H&&"touchmove"===k.type||(ha(Ea,"click","onClick"),j=k.target||k.srcElement||d,ma=z(),b.delayedCall(1e-5,function(){ma!==ta&&Ea.enabled()&&!Ea.isPressed&&(j.click?j.click():r.createEvent&&(i=r.createEvent("MouseEvents"),i.initMouseEvent("click",!0,!0,window,1,Ea.pointerEvent.screenX,Ea.pointerEvent.screenY,Ea.pointerX,Ea.pointerY,!1,!1,!1,!1,0,null),j.dispatchEvent(i)))}))):(_a(g.throwProps),A||Ea.allowEventDefault||!k||!g.dragClickables&&Ua.call(Ea,k.target)||!l||qa&&(!ra||qa!==ra)||k.cancelable===!1||(k.preventDefault(),k.preventManipulation&&k.preventManipulation()),ha(Ea,"release","onRelease")),l&&ha(Ea,"dragend","onDragEnd"),!0}},ib=function(a){if(a&&Ea.isDragging){var b=a.target||a.srcElement||d.parentNode,c=b.scrollLeft-b._gsScrollX,e=b.scrollTop-b._gsScrollY;(c||e)&&(j-=c,k-=e,b._gsScrollX+=c,b._gsScrollY+=e,gb(Ea.pointerX,Ea.pointerY))}},jb=function(a){var b=z(),c=40>b-ma,d=40>b-Sa;return c&&ta!==ma?void(ta=ma):void((Ea.isPressed||d||c)&&(a.preventDefault?(a.preventDefault(),(c||d&&Ea.vars.suppressClickOnDrag!==!1)&&a.stopImmediatePropagation()):a.returnValue=!1,a.preventManipulation&&a.preventManipulation()))};ca=Ra.get(this.target),ca&&ca.kill(),this.startDrag=function(a){eb(a),Ea.isDragging||(Ea.isDragging=!0,ha(Ea,"dragstart","onDragStart"))},this.drag=fb,this.endDrag=function(a){hb(a,!0)},this.timeSinceDrag=function(){return Ea.isDragging?0:(z()-Sa)/1e3},this.hitTest=function(a,b){return Ra.hitTest(Ea.target,a,b)},this.getDirection=function(a,b){var c,d,e,g,h,i,j="velocity"===a&&f?a:"object"!=typeof a||wa?"start":"element";return"element"===j&&(h=Va(Ea.target),i=Va(a)),c="start"===j?Ea.x-q:"velocity"===j?f.getVelocity(this.target,xa):h.left+h.width/2-(i.left+i.width/2),wa?0>c?"counter-clockwise":"clockwise":(b=b||2,d="start"===j?Ea.y-t:"velocity"===j?f.getVelocity(this.target,ya):h.top+h.height/2-(i.top+i.height/2),e=Math.abs(c/d),g=1/b>e?"":0>c?"left":"right",b>e&&(""!==g&&(g+="-"),g+=0>d?"up":"down"),g)},this.applyBounds=function(a){var b,c,d;return a&&g.bounds!==a?(g.bounds=a,Ea.update(!0)):(Xa(!0),Ya(),u&&(b=Ea.x,c=Ea.y,u&&(b>C?b=C:F>b&&(b=F),c>J?c=J:N>c&&(c=N)),(Ea.x!==b||Ea.y!==c)&&(d=!0,Ea.x=Ea.endX=b,wa?Ea.endRotation=b:Ea.y=Ea.endY=c,ba=!0,Wa()),Ea.isThrowing&&(d||Ea.endX>C||Ea.endX<F||Ea.endY>J||Ea.endY<N)&&_a(g.throwProps,d)),Ea)},this.update=function(a,b){var c=Ea.x,e=Ea.y;return ab(),a?Ea.applyBounds():(ba&&b&&Wa(),Xa(!0)),Ea.isPressed&&(Ba&&Math.abs(c-Ea.x)>.01||Ca&&Math.abs(e-Ea.y)>.01&&!wa)&&bb(),Ea.autoScroll&&(Y(d.parentNode),Ta=!0,Wa()),Ea},this.enable=function(a){var e,j,k;if("soft"!==a){for(j=Ka.length;--j>-1;)k=Ka[j],Ha(k,"mousedown",eb),Ha(k,"touchstart",eb),Ha(k,"click",jb,!0),wa||aa(k,"cursor",g.cursor||"move"),aa(k,"touchCallout","none"),aa(k,"touchAction",Ba===Ca||i?"none":Ba?"pan-y":"pan-x");Oa(Ka,!1)}return U(Ea.target,ib),h=!0,f&&"soft"!==a&&f.track(i||d,va?"x,y":wa?"rotation":"top,left"),i&&i.enable(),d._gsDragID=e="d"+E++,D[e]=this,i&&(i.element._gsDragID=e),b.set(d,{x:"+=0",overwrite:!1}),pa={t:d,data:A?S:d._gsTransform,tween:{},setRatio:A?function(){b.set(d,Q)}:c._internals.setTransformRatio||c._internals.set3DTransformRatio},Ea.update(!0),Ea},this.disable=function(a){var b,c,e=Ea.isDragging;if(!wa)for(b=Ka.length;--b>-1;)aa(Ka[b],"cursor",null);if("soft"!==a){for(b=Ka.length;--b>-1;)c=Ka[b],aa(c,"touchCallout",null),aa(c,"touchAction",null),Ia(c,"mousedown",eb),Ia(c,"touchstart",eb),Ia(c,"click",jb);Oa(Ka,!0),ja&&(Ia(ja,"touchcancel",hb),Ia(ja,"touchend",hb),Ia(ja,"touchmove",fb)),Ia(r,"mouseup",hb),Ia(r,"mousemove",fb)}return V(d,ib),h=!1,f&&"soft"!==a&&f.untrack(i||d,va?"x,y":wa?"rotation":"top,left"),i&&i.disable(),P(Wa),Ea.isDragging=Ea.isPressed=fa=!1,e&&ha(Ea,"dragend","onDragEnd"),Ea},this.enabled=function(a,b){return arguments.length?a?Ea.enable(b):Ea.disable(b):h},this.kill=function(){return Ea.isThrowing=!1,b.killTweensOf(i||d,!0,Pa),Ea.disable(),delete D[d._gsDragID],Ea},-1!==ua.indexOf("scroll")&&(i=this.scrollProxy=new Qa(d,R({onKill:function(){Ea.isPressed&&hb(null)}},g)),d.style.overflowY=Ca&&!Fa?"auto":"hidden",d.style.overflowX=Ba&&!Fa?"auto":"hidden",d=i.content),g.force3D!==!1&&b.set(d,{force3D:!0}),wa?Pa.rotation=1:(Ba&&(Pa[xa]=1),Ca&&(Pa[ya]=1)),wa?(Q=o,S=Q.css,Q.overwrite=!1):va&&(Q=Ba&&Ca?l:Ba?m:n,S=Q.css,Q.overwrite=!1),this.enable()},Sa=Ra.prototype=new a;Sa.constructor=Ra,Sa.pointerX=Sa.pointerY=0,Sa.isDragging=Sa.isPressed=!1,Ra.version="0.14.3",Ra.zIndex=1e3,Ha(r,"touchcancel",function(){}),Ha(r,"contextmenu",function(a){var b;for(b in D)D[b].isPressed&&D[b].endDrag();
}),Ra.create=function(a,c){"string"==typeof a&&(a=b.selector(a));for(var d=a&&0!==a.length?Da(a)?Ea(a):[a]:[],e=d.length;--e>-1;)d[e]=new Ra(d[e],c);return d},Ra.get=function(a){return D[($(a)||{})._gsDragID]},Ra.timeSinceDrag=function(){return(z()-I)/1e3};var Ta={},Ua=function(a){var b,c,d=0,e=0;for(a=$(a),b=a.offsetWidth,c=a.offsetHeight;a;)d+=a.offsetTop,e+=a.offsetLeft,a=a.offsetParent;return{top:d,left:e,width:b,height:c}},Va=function(a,b){if(a===window)return Ta.left=Ta.top=0,Ta.width=Ta.right=s.clientWidth||a.innerWidth||r.body.clientWidth||0,Ta.height=Ta.bottom=(a.innerHeight||0)-20<s.clientHeight?s.clientHeight:a.innerHeight||r.body.clientHeight||0,Ta;var c=a.pageX!==b?{left:a.pageX-T(),top:a.pageY-S(),right:a.pageX-T()+1,bottom:a.pageY-S()+1}:a.nodeType||a.left===b||a.top===b?A?Ua(a):$(a).getBoundingClientRect():a;return c.right===b&&c.width!==b?(c.right=c.left+c.width,c.bottom=c.top+c.height):c.width===b&&(c={width:c.right-c.left,height:c.bottom-c.top,right:c.right,left:c.left,bottom:c.bottom,top:c.top}),c};return Ra.hitTest=function(a,b,c){if(a===b)return!1;var d,e,f,g=Va(a),h=Va(b),i=h.left>g.right||h.right<g.left||h.top>g.bottom||h.bottom<g.top;return i||!c?!i:(f=-1!==(c+"").indexOf("%"),c=parseFloat(c)||0,d={left:Math.max(g.left,h.left),top:Math.max(g.top,h.top)},d.width=Math.min(g.right,h.right)-d.left,d.height=Math.min(g.bottom,h.bottom)-d.top,d.width<0||d.height<0?!1:f?(c*=.01,e=d.width*d.height,e>=g.width*g.height*c||e>=h.width*h.height*c):d.width>c&&d.height>c)},B.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;",Ra},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),require("../plugins/CSSPlugin.js"),module.exports=b())}("Draggable");


/*!
 * VERSION: 0.9.2
 * DATE: 2014-02-10
 * JavaScript
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * ThrowPropsPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue || (window._gsQueue = [])).push( function() {

	"use strict";

	window._gsDefine("plugins.ThrowPropsPlugin", ["plugins.TweenPlugin", "TweenLite", "easing.Ease", "utils.VelocityTracker"], function(TweenPlugin, TweenLite, Ease, VelocityTracker) {
		
		var ThrowPropsPlugin = function(props, priority) {
				TweenPlugin.call(this, "throwProps");
				this._overwriteProps.length = 0;
			},
			_max = 999999999999999,
			_min = 0.0000000001,
			_transforms = {x:1,y:1,z:2,scale:1,scaleX:1,scaleY:1,rotation:1,rotationZ:1,rotationX:2,rotationY:2,skewX:1,skewY:1},
			_getClosest = function(n, values, max, min) {
				var i = values.length,
					closest = 0,
					absDif = _max,
					val, dif;
				while (--i > -1) {
					val = values[i];
					dif = val - n;
					if (dif < 0) {
						dif = -dif;
					}
					if (dif < absDif && val >= min && val <= max) {
						closest = i;
						absDif = dif;
					}
				}
				return values[closest];
			},
			_parseEnd = function(curProp, end, max, min) {
				if (curProp.end === "auto") {
					return curProp;
				}
				max = isNaN(max) ? _max : max;
				min = isNaN(min) ? -_max : min;
				var adjustedEnd = (typeof(curProp.end) === "function") ? curProp.end(end) : (curProp.end instanceof Array) ? _getClosest(end, curProp.end, max, min) : Number(curProp.end);
				if (adjustedEnd > max) {
					adjustedEnd = max;
				} else if (adjustedEnd < min) {
					adjustedEnd = min;
				}
				return {max:adjustedEnd, min:adjustedEnd};
			},
			_calculateChange = ThrowPropsPlugin.calculateChange = function(velocity, ease, duration, checkpoint) {
				if (checkpoint == null) {
					checkpoint = 0.05;
				}
				var e = (ease instanceof Ease) ? ease : (!ease) ? TweenLite.defaultEase : new Ease(ease);
				return (duration * checkpoint * velocity) / e.getRatio(checkpoint);
			},
			_calculateDuration = ThrowPropsPlugin.calculateDuration = function(start, end, velocity, ease, checkpoint) {
				checkpoint = checkpoint || 0.05;
				var e = (ease instanceof Ease) ? ease : (!ease) ? TweenLite.defaultEase : new Ease(ease);
				return Math.abs( (end - start) * e.getRatio(checkpoint) / velocity / checkpoint );
			},
			_calculateTweenDuration = ThrowPropsPlugin.calculateTweenDuration = function(target, vars, maxDuration, minDuration, overshootTolerance) {
				if (typeof(target) === "string") {
					target = TweenLite.selector(target);
				}
				if (!target) {
					return 0;
				}
				if (maxDuration == null) {
					maxDuration = 10;
				}
				if (minDuration == null) {
					minDuration = 0.2;
				}
				if (overshootTolerance == null) {
					overshootTolerance = 1;
				}
				if (target.length) {
					target = target[0] || target;
				}
				var duration = 0,
					clippedDuration = 9999999999,
					throwPropsVars = vars.throwProps || vars,
					ease = (vars.ease instanceof Ease) ? vars.ease : (!vars.ease) ? TweenLite.defaultEase : new Ease(vars.ease),
					checkpoint = isNaN(throwPropsVars.checkpoint) ? 0.05 : Number(throwPropsVars.checkpoint),
					resistance = isNaN(throwPropsVars.resistance) ? ThrowPropsPlugin.defaultResistance : Number(throwPropsVars.resistance),
					p, curProp, curDuration, curVelocity, curResistance, curVal, end, curClippedDuration, tracker, unitFactor;

				for (p in throwPropsVars) {

					if (p !== "resistance" && p !== "checkpoint" && p !== "preventOvershoot") {
						curProp = throwPropsVars[p];
						if (typeof(curProp) !== "object") {
							tracker = tracker || VelocityTracker.getByTarget(target);
							if (tracker && tracker.isTrackingProp(p)) {
								curProp = (typeof(curProp) === "number") ? {velocity:curProp} : {velocity:tracker.getVelocity(p)}; //if we're tracking this property, we should use the tracking velocity and then use the numeric value that was passed in as the min and max so that it tweens exactly there.
							} else {
								curVelocity = Number(curProp) || 0;
								curDuration = (curVelocity * resistance > 0) ? curVelocity / resistance : curVelocity / -resistance;
							}
						}
						if (typeof(curProp) === "object") {
							if (curProp.velocity !== undefined && typeof(curProp.velocity) === "number") {
								curVelocity = Number(curProp.velocity) || 0;
							} else {
								tracker = tracker || VelocityTracker.getByTarget(target);
								curVelocity =  (tracker && tracker.isTrackingProp(p)) ? tracker.getVelocity(p) : 0;
							}
							curResistance = isNaN(curProp.resistance) ? resistance : Number(curProp.resistance);
							curDuration = (curVelocity * curResistance > 0) ? curVelocity / curResistance : curVelocity / -curResistance;
							curVal = (typeof(target[p]) === "function") ? target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]() : target[p] || 0;
							end = curVal + _calculateChange(curVelocity, ease, curDuration, checkpoint);
							if (curProp.end !== undefined) {
								curProp = _parseEnd(curProp, end, curProp.max, curProp.min);
							}
							if (curProp.max !== undefined && end > Number(curProp.max) + _min) {
								unitFactor = curProp.unitFactor || 1; //some values are measured in special units like radians in which case our thresholds need to be adjusted accordingly.
								//if the value is already exceeding the max or the velocity is too low, the duration can end up being uncomfortably long but in most situations, users want the snapping to occur relatively quickly (0.75 seconds), so we implement a cap here to make things more intuitive. If the max and min match, it means we're animating to a particular value and we don't want to shorten the time unless the velocity is really slow. Example: a rotation where the start and natural end value are less than the snapping spot, but the natural end is pretty close to the snap.
								curClippedDuration = ((curVal > curProp.max && curProp.min !== curProp.max) || (curVelocity * unitFactor > -15 && curVelocity * unitFactor < 45)) ? (minDuration + (maxDuration - minDuration) * 0.1) : _calculateDuration(curVal, curProp.max, curVelocity, ease, checkpoint);
								if (curClippedDuration + overshootTolerance < clippedDuration) {
									clippedDuration = curClippedDuration + overshootTolerance;
								}

							} else if (curProp.min !== undefined && end < Number(curProp.min) - _min) {
								unitFactor = curProp.unitFactor || 1; //some values are measured in special units like radians in which case our thresholds need to be adjusted accordingly.
								//if the value is already exceeding the min or if the velocity is too low, the duration can end up being uncomfortably long but in most situations, users want the snapping to occur relatively quickly (0.75 seconds), so we implement a cap here to make things more intuitive.
								curClippedDuration = ((curVal < curProp.min && curProp.min !== curProp.max) || (curVelocity * unitFactor > -45 && curVelocity * unitFactor < 15)) ? (minDuration + (maxDuration - minDuration) * 0.1) : _calculateDuration(curVal, curProp.min, curVelocity, ease, checkpoint);
								if (curClippedDuration + overshootTolerance < clippedDuration) {
									clippedDuration = curClippedDuration + overshootTolerance;
								}
							}

							if (curClippedDuration > duration) {
								duration = curClippedDuration;
							}
						}

						if (curDuration > duration) {
							duration = curDuration;
						}

					}
				}
				if (duration > clippedDuration) {
					duration = clippedDuration;
				}
				if (duration > maxDuration) {
					return maxDuration;
				} else if (duration < minDuration) {
					return minDuration;
				}
				return duration;
			},
			p = ThrowPropsPlugin.prototype = new TweenPlugin("throwProps"),
			_cssProxy, _cssVars, _last, _lastValue; //these serve as a cache of sorts, recording the last css-related proxy and the throwProps vars that get calculated in the _cssRegister() method. This allows us to grab them in the ThrowPropsPlugin.to() function and calculate the duration. Of course we could have structured things in a more "clean" fashion, but performance is of paramount importance.
			


		p.constructor = ThrowPropsPlugin;
		ThrowPropsPlugin.version = "0.9.2";
		ThrowPropsPlugin.API = 2;
		ThrowPropsPlugin._autoCSS = true; //indicates that this plugin can be inserted into the "css" object using the autoCSS feature of TweenLite
		ThrowPropsPlugin.defaultResistance = 100;

		ThrowPropsPlugin.track = function(target, props, types) {
			return VelocityTracker.track(target, props, types);
		};

		ThrowPropsPlugin.untrack = function(target, props) {
			VelocityTracker.untrack(target, props);
		};

		ThrowPropsPlugin.isTracking = function(target, prop) {
			return VelocityTracker.isTracking(target, prop);
		};

		ThrowPropsPlugin.getVelocity = function(target, prop) {
			var vt = VelocityTracker.getByTarget(target);
			return vt ? vt.getVelocity(prop) : NaN;
		};

		ThrowPropsPlugin._cssRegister = function() {
			var CSSPlugin = (window.GreenSockGlobals || window).com.greensock.plugins.CSSPlugin;
			if (!CSSPlugin) {
				return;
			}
			var _internals = CSSPlugin._internals,
				_parseToProxy = _internals._parseToProxy,
				_setPluginRatio = _internals._setPluginRatio,
				CSSPropTween = _internals.CSSPropTween;
			_internals._registerComplexSpecialProp("throwProps", {parser:function(t, e, prop, cssp, pt, plugin) {
				plugin = new ThrowPropsPlugin();
				var velocities = {},
					min = {},
					max = {},
					end = {},
					res = {},
					preventOvershoot = {},
					hasResistance, val, p, data, tracker;
				_cssVars = {};
				for (p in e) {
					if (p !== "resistance" && p !== "preventOvershoot") {
						val = e[p];
						if (typeof(val) === "object") {
							if (val.velocity !== undefined && typeof(val.velocity) === "number") {
								velocities[p] = Number(val.velocity) || 0;
							} else {
								tracker = tracker || VelocityTracker.getByTarget(t);
								velocities[p] = (tracker && tracker.isTrackingProp(p)) ? tracker.getVelocity(p) : 0; //rotational values are actually converted to radians in CSSPlugin, but our tracking velocity is in radians already, so make it into degrees to avoid a funky conversion
							}
							if (val.end !== undefined) {
								end[p] = val.end;
							}
							if (val.min !== undefined) {
								min[p] = val.min;
							}
							if (val.max !== undefined) {
								max[p] = val.max;
							}
							if (val.preventOvershoot) {
								preventOvershoot[p] = true;
							}
							if (val.resistance !== undefined) {
								hasResistance = true;
								res[p] = val.resistance;
							}
						} else if (typeof(val) === "number") {
							velocities[p] = val;
						} else {
							tracker = tracker || VelocityTracker.getByTarget(t);
							if (tracker && tracker.isTrackingProp(p)) {
								velocities[p] = tracker.getVelocity(p);
							} else {
								velocities[p] = val || 0;
							}
						}
						if (_transforms[p]) {
							cssp._enableTransforms((_transforms[p] === 2));
						}
					}
				}
				data = _parseToProxy(t, velocities, cssp, pt, plugin);
				_cssProxy = data.proxy;
				velocities = data.end;
				for (p in _cssProxy) {
					_cssVars[p] = {velocity:velocities[p], min:min[p], max:max[p], end:end[p], resistance:res[p], preventOvershoot:preventOvershoot[p]};
				}
				if (e.resistance != null) {
					_cssVars.resistance = e.resistance;
				}
				if (e.preventOvershoot) {
					_cssVars.preventOvershoot = true;
				}
				pt = new CSSPropTween(t, "throwProps", 0, 0, data.pt, 2);
				pt.plugin = plugin;
				pt.setRatio = _setPluginRatio;
				pt.data = data;
				plugin._onInitTween(_cssProxy, _cssVars, cssp._tween);
				return pt;
			}});
		};

		
		ThrowPropsPlugin.to = function(target, vars, maxDuration, minDuration, overshootTolerance) {
			if (!vars.throwProps) {
				vars = {throwProps:vars};
			}
			if (overshootTolerance === 0) {
				vars.throwProps.preventOvershoot = true;
			}
			var tween = new TweenLite(target, 1, vars);
			tween.render(0, true, true); //we force a render so that the CSSPlugin instantiates and populates the _cssProxy and _cssVars which we need in order to calculate the tween duration. Remember, we can't use the regular target for calculating the duration because the current values wouldn't be able to be grabbed like target["propertyName"], as css properties can be complex like boxShadow:"10px 10px 20px 30px red" or backgroundPosition:"25px 50px". The proxy is the result of breaking all that complex data down and finding just the numeric values and assigning them to a generic proxy object with unique names. THAT is what the _calculateTweenDuration() can look at. We also needed to do the same break down of any min or max or velocity data
			if (tween.vars.css) {
				tween.duration(_calculateTweenDuration(_cssProxy, {throwProps:_cssVars, ease:vars.ease}, maxDuration, minDuration, overshootTolerance));
				if (tween._delay && !tween.vars.immediateRender) {
					tween.invalidate(); //if there's a delay, the starting values could be off, so invalidate() to force reinstantiation when the tween actually starts.
				} else {
					_last._onInitTween(_cssProxy, _lastValue, tween);
				}
				return tween;
			} else {
				tween.kill();
				return new TweenLite(target, _calculateTweenDuration(target, vars, maxDuration, minDuration, overshootTolerance), vars);
			}
		};
		
		p._onInitTween = function(target, value, tween) {
			this.target = target;
			this._props = [];
			_last = this;
			_lastValue = value;
			var ease = tween._ease,
				checkpoint = isNaN(value.checkpoint) ? 0.05 : Number(value.checkpoint),
				duration = tween._duration,
				preventOvershoot = value.preventOvershoot,
				cnt = 0,
				p, curProp, curVal, isFunc, velocity, change1, end, change2, tracker;
			for (p in value) {
				if (p !== "resistance" && p !== "checkpoint" && p !== "preventOvershoot") {
					curProp = value[p];
					if (typeof(curProp) === "number") {
						velocity = Number(curProp) || 0;
					} else if (typeof(curProp) === "object" && !isNaN(curProp.velocity)) {
						velocity = Number(curProp.velocity);
					} else {
						tracker = tracker || VelocityTracker.getByTarget(target);
						if (tracker && tracker.isTrackingProp(p)) {
							velocity = tracker.getVelocity(p);
						} else {
							throw("ERROR: No velocity was defined in the throwProps tween of " + target + " property: " + p);
						}
					}
					change1 = _calculateChange(velocity, ease, duration, checkpoint);
					change2 = 0;
					isFunc = (typeof(target[p]) === "function");
					curVal = (isFunc) ? target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]() : target[p];
					if (typeof(curProp) === "object") {
						end = curVal + change1;
						if (curProp.end !== undefined) {
							curProp = _parseEnd(curProp, end, curProp.max, curProp.min);
						}
						if (curProp.max !== undefined && Number(curProp.max) < end) {
							if (preventOvershoot || curProp.preventOvershoot) {
								change1 = curProp.max - curVal;
							} else {
								change2 = (curProp.max - curVal) - change1;
							}
						} else if (curProp.min !== undefined && Number(curProp.min) > end) {
							if (preventOvershoot || curProp.preventOvershoot) {
								change1 = curProp.min - curVal;
							} else {
								change2 = (curProp.min - curVal) - change1;
							}
						}
					}
					this._props[cnt++] = {p:p, s:curVal, c1:change1, c2:change2, f:isFunc, r:false};
					this._overwriteProps[cnt] = p;
				}
			}
			return true;
		};
		
		p._kill = function(lookup) {
			var i = this._props.length;
			while (--i > -1) {
				if (lookup[this._props[i].p] != null) {
					this._props.splice(i, 1);
				}
			}
			return TweenPlugin.prototype._kill.call(this, lookup);
		};
		
		p._roundProps = function(lookup, value) {
			var p = this._props,
				i = p.length;
			while (--i > -1) {
				if (lookup[p[i]] || lookup.throwProps) {
					p[i].r = value;
				}
			}
		};
		
		p.setRatio = function(v) {
			var i = this._props.length, 
				cp, val;
			while (--i > -1) {
				cp = this._props[i];
				val = cp.s + cp.c1 * v + cp.c2 * v * v;
				if (cp.r) {
					val = (val + ((val > 0) ? 0.5 : -0.5)) | 0;
				}
				if (cp.f) {
					this.target[cp.p](val);
				} else {
					this.target[cp.p] = val;
				}
			}	
		};
		
		TweenPlugin.activate([ThrowPropsPlugin]);
		
		return ThrowPropsPlugin;
		
	}, true);


/*
 * ----------------------------------------------------------------
 * VelocityTracker
 * ----------------------------------------------------------------
 */
	window._gsDefine("utils.VelocityTracker", ["TweenLite"], function(TweenLite) {

		var _first,	_initted, _time1, _time2,
			_capsExp = /([A-Z])/g,
			_empty = {},
			_transforms = {x:1,y:1,z:2,scale:1,scaleX:1,scaleY:1,rotation:1,rotationZ:1,rotationX:2,rotationY:2,skewX:1,skewY:1},
			_getComputedStyle = document.defaultView ? document.defaultView.getComputedStyle : function() {},
			_getStyle = function(t, p, cs) {
				var rv = (t._gsTransform || _empty)[p];
				if (rv || rv === 0) {
					return rv;
				} else if (t.style[p]) {
					rv = t.style[p];
				} else if ((cs = cs || _getComputedStyle(t, null))) {
					t = cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
					rv = (t || cs.length) ? t : cs[p]; //Opera behaves VERY strangely - length is usually 0 and cs[p] is the only way to get accurate results EXCEPT when checking for -o-transform which only works with cs.getPropertyValue()!
				} else if (t.currentStyle) {
					cs = t.currentStyle;
					rv = cs[p];
				}
				return parseFloat(rv) || 0;
			},
			_ticker = TweenLite.ticker,
			VelocityProp = function(p, isFunc, next) {
				this.p = p;
				this.f = isFunc;
				this.v1 = this.v2 = 0;
				this.t1 = this.t2 = _ticker.time;
				this.css = false;
				this.type = "";
				this._prev = null;
				if (next) {
					this._next = next;
					next._prev = this;
				}
			},
			_update = function() {
				var vt = _first,
					t = _ticker.time,
					val, vp;
				//if the frame rate is too high, we won't be able to track the velocity as well, so only update the values about 33 times per second
				if (t - _time1 >= 0.03) {
					_time2 = _time1;
					_time1 = t;
					while (vt) {
						vp = vt._firstVP;
						while (vp) {
							val = vp.css ? _getStyle(vt.target, vp.p) : vp.f ? vt.target[vp.p]() : vt.target[vp.p];
							if (val !== vp.v1 || t - vp.t1 > 0.15) { //use a threshold of 0.15 seconds for zeroing-out velocity. If we only use 0.03 and things update slightly slower, like some Android devices dispatch "touchmove" events sluggishly so 2 or 3 ticks of the TweenLite.ticker may elapse inbetween, thus it may appear like the object is not moving but it actually is but it's not updating as frequently. A threshold of 0.15 seconds seems to be a good balance. We want to update things frequently (0.03 seconds) when they're moving so that we can respond to fast motions accurately, but we want to be more resistant to go back to a zero velocity.
								vp.v2 = vp.v1;
								vp.v1 = val;
								vp.t2 = vp.t1;
								vp.t1 = t;
							}
							vp = vp._next;
						}
						vt = vt._next;
					}
				}
			},
			VelocityTracker = function(target) {
				this._lookup = {};
				this.target = target;
				this.elem = (target.style && target.nodeType) ? true : false;
				if (!_initted) {
					_ticker.addEventListener("tick", _update, null, false, -100);
					_time1 = _time2 = _ticker.time;
					_initted = true;
				}
				if (_first) {
					this._next = _first;
					_first._prev = this;
				}
				_first = this;
			},
			getByTarget = VelocityTracker.getByTarget = function(target) {
				var vt = _first;
				while (vt) {
					if (vt.target === target) {
						return vt;
					}
					vt = vt._next;
				}
			},
			p = VelocityTracker.prototype;

		p.addProp = function(prop, type) {
			if (!this._lookup[prop]) {
				var t = this.target,
					isFunc = (typeof(t[prop]) === "function"),
					alt = isFunc ? this._altProp(prop) : prop,
					vp = this._firstVP;
				this._firstVP = this._lookup[prop] = this._lookup[alt] = vp = new VelocityProp((alt !== prop && prop.indexOf("set") === 0) ? alt : prop, isFunc, vp);
				vp.css = (this.elem && (this.target.style[vp.p] !== undefined || _transforms[vp.p]));
				if (vp.css && _transforms[vp.p] && !t._gsTransform) {
					TweenLite.set(t, {x:"+=0"}); //just forces CSSPlugin to create a _gsTransform for the element if it doesn't exist
				}
				vp.type = type || (vp.css && prop.indexOf("rotation") === 0) ? "deg" : "";
				vp.v1 = vp.v2 = vp.css ? _getStyle(t, vp.p) : isFunc ? t[vp.p]() : t[vp.p];
			}
		};

		p.removeProp = function(prop) {
			var vp = this._lookup[prop];
			if (vp) {
				if (vp._prev) {
					vp._prev._next = vp._next;
				} else if (vp === this._firstVP) {
					this._firstVP = vp._next;
				}
				if (vp._next) {
					vp._next._prev = vp._prev;
				}
				this._lookup[prop] = 0;
				if (vp.f) {
					this._lookup[this._altProp(prop)] = 0; //if it's a getter/setter, we should remove the matching counterpart (if one exists)
				}
			}
		};

		p.isTrackingProp = function(prop) {
			return (this._lookup[prop] instanceof VelocityProp);
		};

		p.getVelocity = function(prop) {
			var vp = this._lookup[prop],
				target = this.target,
				val, dif, rotationCap;
			if (!vp) {
				throw "The velocity of " + prop + " is not being tracked.";
			}
			val = vp.css ? _getStyle(target, vp.p) : vp.f ? target[vp.p]() : target[vp.p];
			dif = (val - vp.v2);
			if (vp.type === "rad" || vp.type === "deg") { //rotational values need special interpretation so that if, for example, they go from 179 to -178 degrees it is interpreted as a change of 3 instead of -357.
				rotationCap = (vp.type === "rad") ? Math.PI * 2 : 360;
				dif = dif % rotationCap;
				if (dif !== dif % (rotationCap / 2)) {
					dif = (dif < 0) ? dif + rotationCap : dif - rotationCap;
				}
			}
			return dif / (_ticker.time - vp.t2);
		};

		p._altProp = function(p) { //for getters/setters like getCustomProp() and setCustomProp() - we should accommodate both
			var pre = p.substr(0, 3),
				alt = ((pre === "get") ? "set" : (pre === "set") ? "get" : pre) + p.substr(3);
			return (typeof(this.target[alt]) === "function") ? alt : p;
		};

		VelocityTracker.getByTarget = function(target) {
			var vt = _first;
			if (typeof(target) === "string") {
				target = TweenLite.selector(target);
			}
			if (target.length && target !== window && target[0] && target[0].style && !target.nodeType) {
				target = target[0];
			}
			while (vt) {
				if (vt.target === target) {
					return vt;
				}
				vt = vt._next;
			}
		};

		VelocityTracker.track = function(target, props, types) {
			var vt = getByTarget(target),
				a = props.split(","),
				i = a.length;
			types = (types || "").split(",");
			if (!vt) {
				vt = new VelocityTracker(target);
			}
			while (--i > -1) {
				vt.addProp(a[i], types[i] || types[0]);
			}
			return vt;
		};

		VelocityTracker.untrack = function(target, props) {
			var vt = getByTarget(target),
				a = (props || "").split(","),
				i = a.length;
			if (!vt) {
				return;
			}
			while (--i > -1) {
				vt.removeProp(a[i]);
			}
			if (!vt._firstVP || !props) {
				if (vt._prev) {
					vt._prev._next = vt._next;
				} else if (vt === _first) {
					_first = vt._next;
				}
				if (vt._next) {
					vt._next._prev = vt._prev;
				}
			}
		};

		VelocityTracker.isTracking = function(target, prop) {
			var vt = getByTarget(target);
			return (!vt) ? false : (!prop && vt._firstVP) ? true : vt.isTrackingProp(prop);
		};

		return VelocityTracker;

	}, true);


}); if (window._gsDefine) { window._gsQueue.pop()(); }
