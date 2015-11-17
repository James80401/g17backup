KAdefine("third_party/javascript-khansrc/react-compiled/react-art.prod.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("./react.prod.js");
reactWebpackJsonp([1],{0:function(t,i,e){window.ReactART=e(107)},4:function(t,i,e){t.exports=function(t){for(var i={},e=0,n=arguments.length;n>e;e++){var r=arguments[e]
"function"==typeof r&&(r=r.prototype)
for(var s in r)i[s]=r[s]}return i.initialize||(i.initialize=function(){}),i.constructor=function(t,e,n,r,s,o,h,a){return new i.initialize(t,e,n,r,s,o,h,a)},i.constructor.prototype=i.initialize.prototype=i,i.constructor}},15:function(t,i,e){function n(t,i,e,n,r,s){return t&&"object"==typeof t&&(i=t.yx,n=t.yy,s=t.y,e=t.xy,r=t.x,t=t.xx),this.xx=null==t?1:t,this.yx=i||0,this.xy=e||0,this.yy=null==n?1:n,this.x=(null==r?this.x:r)||0,this.y=(null==s?this.y:s)||0,this._transform(),this}var r=e(4)
t.exports=r({initialize:n,_transform:function(){},xx:1,yx:0,x:0,xy:0,yy:1,y:0,transform:function(t,i,e,n,r,s){var o=this
return t&&"object"==typeof t&&(i=t.yx,n=t.yy,s=t.y,e=t.xy,r=t.x,t=t.xx),r||(r=0),s||(s=0),this.transformTo(o.xx*t+o.xy*i,o.yx*t+o.yy*i,o.xx*e+o.xy*n,o.yx*e+o.yy*n,o.xx*r+o.xy*s+o.x,o.yx*r+o.yy*s+o.y)},transformTo:n,translate:function(t,i){return this.transform(1,0,0,1,t,i)},move:function(t,i){return this.x+=t||0,this.y+=i||0,this._transform(),this},scale:function(t,i){return null==i&&(i=t),this.transform(t,0,0,i,0,0)},rotate:function(t,i,e){(null==i||null==e)&&(i=(this.left||0)+(this.width||0)/2,e=(this.top||0)+(this.height||0)/2)
var n=t*Math.PI/180,r=Math.sin(n),s=Math.cos(n)
this.transform(1,0,0,1,i,e)
var o=this
return this.transformTo(s*o.xx-r*o.yx,r*o.xx+s*o.yx,s*o.xy-r*o.yy,r*o.xy+s*o.yy,o.x,o.y).transform(1,0,0,1,-i,-e)},moveTo:function(t,i){var e=this
return this.transformTo(e.xx,e.yx,e.xy,e.yy,t,i)},rotateTo:function(t,i,e){var n=this,r=n.yx/n.xx>n.yy/n.xy?-1:1
return(n.xx<0?n.xy>=0:n.xy<0)&&(r=-r),this.rotate(t-180*Math.atan2(r*n.yx,r*n.xx)/Math.PI,i,e)},scaleTo:function(t,i){var e=this,n=Math.sqrt(e.xx*e.xx+e.yx*e.yx)
return e.xx/=n,e.yx/=n,n=Math.sqrt(e.yy*e.yy+e.xy*e.xy),e.yy/=n,e.xy/=n,this.scale(t,i)},resizeTo:function(t,i){var e=this.width,n=this.height
return e&&n?this.scaleTo(t/e,i/n):this},inversePoint:function(t,i){var e=this.xx,n=this.yx,r=this.xy,s=this.yy,o=this.x,h=this.y,a=n*r-e*s
return 0==a?null:{x:(s*(o-t)+r*(i-h))/a,y:(e*(h-i)+n*(t-o))/a}},point:function(t,i){var e=this
return{x:e.xx*t+e.xy*i+e.x,y:e.yx*t+e.yy*i+e.y}}})},18:function(t,i,e){var n=e(4)
t.exports=n({grab:function(){for(var t=0;t<arguments.length;t++)arguments[t].inject(this)
return this},empty:function(){for(var t;t=this.firstChild;)t.eject()
return this}})},19:function(t,i,e){var n,r="behavior:url(#default#VML);display:inline-block;position:absolute;left:0px;top:0px;",s={},o=function(t){n&&(s[t]=n.addRule("av\\:"+t,r))}
i.init=function(t){var i
try{i=t.namespaces}catch(e){}return i?(i.add("av","urn:schemas-microsoft-com:vml"),i.add("ao","urn:schemas-microsoft-com:office:office"),n=t.createStyleSheet(),n.addRule("vml","display:inline-block;position:relative;overflow:hidden;"),o("vml"),!0):!1},i.createElement=function(t){return t in s||o(t),document.createElement("av:"+t)}},36:function(t,i,e){function n(t){return t.toElement?t.toElement():t.getDOMNode?t.getDOMNode():t.getNode?t.getNode():t}var r=e(4)
t.exports=r({toElement:function(){return this.element},getDOMNode:function(){return this.toElement()},getNode:function(){return this.toElement()},inject:function(t){return(t.containerElement||n(t)).appendChild(this.element),this},injectBefore:function(t){var i=n(t)
return i.parentNode.insertBefore(this.element,i),this},eject:function(){var t=this.element,i=t.parentNode
return i&&i.removeChild(t),this},subscribe:function(t,i,e){if("string"!=typeof t){var n=[]
for(var r in t)n.push(this.subscribe(r,t[r]))
return function(){for(var t=0,i=n.length;i>t;t++)n[t]()
return this}}e||(e=this)
var s
s="function"==typeof i?i.bind?i.bind(e):function(){return i.apply(e,arguments)}:i
var o=this.element
return o.addEventListener?(o.addEventListener(t,s,!1),function(){return o.removeEventListener(t,s,!1),this}):(o.attachEvent("on"+t,s),function(){return o.detachEvent("on"+t,s),this})}})},37:function(t,i,e){var n=e(4),r=e(15),s=e(65),o=n(r,s,{invalidate:function(){return this.parentNode&&this.parentNode.invalidate(),this._layer&&(this._layerCache=null),this},_place:function(){this.invalidate()},_transform:function(){this.invalidate()},blend:function(t){return t>=1&&this._layer&&(this._layer=null),this._opacity=t,this.parentNode&&this.parentNode.invalidate(),this},hide:function(){return this._invisible=!0,this.parentNode&&this.parentNode.invalidate(),this},show:function(){return this._invisible=!1,this.parentNode&&this.parentNode.invalidate(),this},indicate:function(t,i){return this._cursor=t,this._tooltip=i,this.invalidate()},hitTest:function(t,i){if(this._invisible)return null
var e=this.inversePoint(t,i)
return e?this.localHitTest(e.x,e.y):null},renderTo:function(t,i,e,n,r,s,o){var h=this._opacity
if(null==h||h>=1)return this.renderLayerTo(t,i,e,n,r,s,o)
var a,l=this._layer,u=!0,c=t.canvas.width,p=t.canvas.height
if(l)if(l.setTransform(1,0,0,1,0,0),a=l.canvas,a.width<c||a.height<p)a.width=c,a.height=p
else{var f=this._layerCache
f&&f.xx===i&&f.yx===e&&f.xy===n&&f.yy===r&&f.x===s&&f.y===o?u=!1:l.clearRect(0,0,c,p)}else a=document.createElement("canvas"),a.width=c,a.height=p,this._layer=l=a.getContext("2d")
u&&(this.renderLayerTo(l,i,e,n,r,s,o),this._layerCache={xx:i,yx:e,xy:n,yy:r,x:s,y:o}),t.globalAlpha=h,t.setTransform(1,0,0,1,0,0),t.drawImage(a,0,0,c,p,0,0,c,p),t.globalAlpha=1}})
t.exports=o},38:function(t,i,e){function n(){throw new Error("You must require a mode before requiring anything else.")}i.Surface=n,i.Path=n,i.Shape=n,i.Group=n,i.ClippingRectangle=n,i.Text=n,i.setCurrent=function(t){for(var e in t)i[e]=t[e]}},39:function(t,i,e){var n=e(4),r=e(15),s=e(108),o=e(19)
t.exports=n(s,r,{initialize:function(t){this.element=o.createElement(t)},_place:function(){this.parentNode&&this._transform()},hide:function(){return this.element.style.display="none",this},show:function(){return this.element.style.display="",this},indicate:function(t,i){return t&&(this.element.style.cursor=t),i&&(this.element.title=i),this}})},40:function(t,i,e){var n=e(4),r=e(64),s=100,o=Math.round,h=n(r,{initialize:function(t){this.reset(),t instanceof h?this.path=[Array.prototype.join.call(t.path," ")]:t&&(t.applyToPath?t.applyToPath(this):this.push(t))},onReset:function(){this.path=[]},onMove:function(t,i,e,n){this.path.push("m",o(e*s),o(n*s))},onLine:function(t,i,e,n){this.path.push("l",o(e*s),o(n*s))},onBezierCurve:function(t,i,e,n,r,h,a,l){this.path.push("c",o(e*s),o(n*s),o(r*s),o(h*s),o(a*s),o(l*s))},_arcToBezier:r.prototype.onArc,onArc:function(t,i,e,n,r,h,a,l,u,c,p,f){return a!=l||f?this._arcToBezier(t,i,e,n,r,h,a,l,u,c,p,f):(r*=s,h*=s,a*=s,void this.path.push(p?"at":"wa",o(r-a),o(h-a),o(r+a),o(h+a),o(t*s),o(i*s),o(e*s),o(n*s)))},onClose:function(){this.path.push("x")},toVML:function(){return this.path.join(" ")}})
h.prototype.toString=h.prototype.toVML,t.exports=h},63:function(t,i,e){var n={maroon:"#800000",red:"#ff0000",orange:"#ffA500",yellow:"#ffff00",olive:"#808000",purple:"#800080",fuchsia:"#ff00ff",white:"#ffffff",lime:"#00ff00",green:"#008000",navy:"#000080",blue:"#0000ff",aqua:"#00ffff",teal:"#008080",black:"#000000",silver:"#c0c0c0",gray:"#808080"},r=function(t,i){for(var e=[],n=0,r=t.length;r>n;n++)e[n]=i(t[n],n)
return e},s=function(t,i){if(t.isColor)this.red=t.red,this.green=t.green,this.blue=t.blue,this.alpha=t.alpha
else{var e=n[t]
switch(e&&(t=e,i="hex"),typeof t){case"string":i||(i=(i=t.match(/^rgb|^hsb|^hsl/))?i[0]:"hex")
break
case"object":i=i||"rgb",t=t.toString()
break
case"number":i="hex",t=t.toString(16)}t=s["parse"+i.toUpperCase()](t),this.red=t[0],this.green=t[1],this.blue=t[2],this.alpha=t[3]}this.isColor=!0},o=function(t,i,e){return Math.min(e,Math.max(i,t))},h=/([-.\d]+\%?)\s*,\s*([-.\d]+\%?)\s*,\s*([-.\d]+\%?)\s*,?\s*([-.\d]*\%?)/,a=/^#?([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{0,2})$/i
s.parseRGB=function(t){return r(t.match(h).slice(1),function(t,i){return t&&(t=parseFloat(t)*("%"==t[t.length-1]?2.55:1)),3>i?Math.round((t%=256)<0?t+256:t):o(""===t?1:Number(t),0,1)})},s.parseHEX=function(t){return 1==t.length&&(t=t+t+t),r(t.match(a).slice(1),function(t,i){return 3==i?t?parseInt(t,16)/255:1:parseInt(1==t.length?t+t:t,16)})},s.parseHSB=function(t){var i=r(t.match(h).slice(1),function(t,i){return t&&(t=parseFloat(t)),0===i?Math.round((t%=360)<0?t+360:t):3>i?o(Math.round(t),0,100):o(""===t?1:Number(t),0,1)}),e=i[3],n=Math.round(i[2]/100*255)
if(0==i[1])return[n,n,n,e]
var s=i[0],a=s%60,l=Math.round(i[2]*(100-i[1])/1e4*255),u=Math.round(i[2]*(6e3-i[1]*a)/6e5*255),c=Math.round(i[2]*(6e3-i[1]*(60-a))/6e5*255)
switch(Math.floor(s/60)){case 0:return[n,c,l,e]
case 1:return[u,n,l,e]
case 2:return[l,n,c,e]
case 3:return[l,u,n,e]
case 4:return[c,l,n,e]
default:return[n,l,u,e]}},s.parseHSL=function(t){var i=r(t.match(h).slice(1),function(t,i){return t&&(t=parseFloat(t)),0===i?Math.round((t%=360)<0?t+360:t):3>i?o(Math.round(t),0,100):o(""===t?1:Number(t),0,1)}),e=i[0]/60,n=i[1]/100,s=i[2]/100,a=i[3],l=(1-Math.abs(2*s-1))*n,u=l*(1-Math.abs(e%2-1)),c=s-l/2,p=Math.round(255*(l+c)),f=Math.round(255*(u+c)),d=Math.round(255*c)
switch(Math.floor(e)){case 0:return[p,f,d,a]
case 1:return[f,p,d,a]
case 2:return[d,p,f,a]
case 3:return[d,f,p,a]
case 4:return[f,d,p,a]
default:return[p,d,f,a]}}
var l=function(t,i){return 1!=i[3]?t+="a":i.pop(),t+"("+i.join(", ")+")"}
s.prototype={toHSB:function(t){var i=this.red,e=this.green,n=this.blue,r=this.alpha,s=Math.max(i,e,n),o=Math.min(i,e,n),h=s-o,a=0,u=0!=h?h/s:0,c=s/255
if(u){var p=(s-i)/h,f=(s-e)/h,d=(s-n)/h
a=i==s?d-f:e==s?2+p-d:4+f-p,(a/=6)<0&&a++}var m=[Math.round(360*a),Math.round(100*u),Math.round(100*c),r]
return t?m:l("hsb",m)},toHSL:function(t){var i=this.red,e=this.green,n=this.blue,r=this.alpha,s=Math.max(i,e,n),o=Math.min(i,e,n),h=s-o,a=0,u=0!=h?h/(255-Math.abs(s+o-255)):0,c=(s+o)/512
if(u){var p=(s-i)/h,f=(s-e)/h,d=(s-n)/h
a=i==s?d-f:e==s?2+p-d:4+f-p,(a/=6)<0&&a++}var m=[Math.round(360*a),Math.round(100*u),Math.round(100*c),r]
return t?m:l("hsl",m)},toHEX:function(t){var i=this.alpha,e=1==(i=Math.round(255*i).toString(16)).length?i+i:i,n=r([this.red,this.green,this.blue],function(t){return t=t.toString(16),1==t.length?"0"+t:t})
return t?n.concat(e):"#"+n.join("")+("ff"==e?"":e)},toRGB:function(t){var i=[this.red,this.green,this.blue,this.alpha]
return t?i:l("rgb",i)}},s.prototype.toString=s.prototype.toRGB,s.hex=function(t){return new s(t,"hex")},null==this.hex&&(this.hex=s.hex),s.hsb=function(t,i,e,n){return new s([t||0,i||0,e||0,null==n?1:n],"hsb")},null==this.hsb&&(this.hsb=s.hsb),s.hsl=function(t,i,e,n){return new s([t||0,i||0,e||0,null==n?1:n],"hsl")},null==this.hsl&&(this.hsl=s.hsl),s.rgb=function(t,i,e,n){return new s([t||0,i||0,e||0,null==n?1:n],"rgb")},null==this.rgb&&(this.rgb=s.rgb),s.detach=function(t){return t=new s(t),[s.rgb(t.red,t.green,t.blue).toString(),t.alpha]},t.exports=s},64:function(t,i,e){var n=e(4)
t.exports=n({initialize:function(t){this.reset().push(t)},push:function(){var t=Array.prototype.join.call(arguments," ").match(/[a-df-z]|[\-+]?(?:[\d\.]e[\-+]?|[^\s\-+,a-z])+/gi)
if(!t)return this
for(var i,e=t[0],n=1;e;){switch(e){case"m":this.move(t[n++],t[n++])
break
case"l":this.line(t[n++],t[n++])
break
case"c":this.curve(t[n++],t[n++],t[n++],t[n++],t[n++],t[n++])
break
case"s":this.curve(t[n++],t[n++],null,null,t[n++],t[n++])
break
case"q":this.curve(t[n++],t[n++],t[n++],t[n++])
break
case"t":this.curve(t[n++],t[n++])
break
case"a":this.arc(t[n+5],t[n+6],t[n],t[n+1],t[n+3],!+t[n+4],t[n+2]),n+=7
break
case"h":this.line(t[n++],0)
break
case"v":this.line(0,t[n++])
break
case"M":this.moveTo(t[n++],t[n++])
break
case"L":this.lineTo(t[n++],t[n++])
break
case"C":this.curveTo(t[n++],t[n++],t[n++],t[n++],t[n++],t[n++])
break
case"S":this.curveTo(t[n++],t[n++],null,null,t[n++],t[n++])
break
case"Q":this.curveTo(t[n++],t[n++],t[n++],t[n++])
break
case"T":this.curveTo(t[n++],t[n++])
break
case"A":this.arcTo(t[n+5],t[n+6],t[n],t[n+1],t[n+3],!+t[n+4],t[n+2]),n+=7
break
case"H":this.lineTo(t[n++],this.penY)
break
case"V":this.lineTo(this.penX,t[n++])
break
case"Z":case"z":this.close()
break
default:e=i,n--
continue}i=e,"m"==i?i="l":"M"==i&&(i="L"),e=t[n++]}return this},reset:function(){return this.penX=this.penY=0,this.penDownX=this.penDownY=null,this._pivotX=this._pivotY=0,this.onReset(),this},move:function(t,i){return this.onMove(this.penX,this.penY,this._pivotX=this.penX+=+t,this._pivotY=this.penY+=+i),this},moveTo:function(t,i){return this.onMove(this.penX,this.penY,this._pivotX=this.penX=+t,this._pivotY=this.penY=+i),this},line:function(t,i){return this.lineTo(this.penX+ +t,this.penY+ +i)},lineTo:function(t,i){return null==this.penDownX&&(this.penDownX=this.penX,this.penDownY=this.penY),this.onLine(this.penX,this.penY,this._pivotX=this.penX=+t,this._pivotY=this.penY=+i),this},curve:function(t,i,e,n,r,s){var o=this.penX,h=this.penY
return this.curveTo(o+ +t,h+ +i,null==e?null:o+ +e,null==n?null:h+ +n,null==r?null:o+ +r,null==s?null:h+ +s)},curveTo:function(t,i,e,n,r,s){var o=this.penX,h=this.penY
return null==e&&(e=+t,n=+i,t=2*o-(this._pivotX||0),i=2*h-(this._pivotY||0)),null==r?(this._pivotX=+t,this._pivotY=+i,r=+e,s=+n,e=(r+2*+t)/3,n=(s+2*+i)/3,t=(o+2*+t)/3,i=(h+2*+i)/3):(this._pivotX=+e,this._pivotY=+n),null==this.penDownX&&(this.penDownX=o,this.penDownY=h),this.onBezierCurve(o,h,+t,+i,+e,+n,this.penX=+r,this.penY=+s),this},arc:function(t,i,e,n,r,s,o){return this.arcTo(this.penX+ +t,this.penY+ +i,e,n,r,s,o)},arcTo:function(t,i,e,n,r,s,o){if(n=Math.abs(+n||+e||+i-this.penY),e=Math.abs(+e||+t-this.penX),!e||!n||t==this.penX&&i==this.penY)return this.lineTo(t,i)
var h=this.penX,a=this.penY,l=!+s,u=!!+r,c=o?o*Math.PI/180:0,p=Math.cos(c),f=Math.sin(c)
t-=h,i-=a
var d=p*t/2+f*i/2,m=-f*t/2+p*i/2,v=e*e*n*n,y=n*n*d*d,g=e*e*m*m,x=v-g-y
if(0>x)x=Math.sqrt(1-x/v),e*=x,n*=x,d=t/2,m=i/2
else{x=Math.sqrt(x/(g+y)),u==l&&(x=-x)
var _=-x*m*e/n,b=x*d*n/e
d=p*_-f*b+t/2,m=f*_+p*b+i/2}var w=p/e,C=f/e,T=-f/n,M=p/n,S=Math.atan2(T*-d+M*-m,w*-d+C*-m),E=Math.atan2(T*(t-d)+M*(i-m),w*(t-d)+C*(i-m))
return d+=h,m+=a,t+=h,i+=a,null==this.penDownX&&(this.penDownX=this.penX,this.penDownY=this.penY),this.onArc(h,a,this._pivotX=this.penX=t,this._pivotY=this.penY=i,d,m,e,n,S,E,!l,o),this},counterArc:function(t,i,e,n,r){return this.arc(t,i,e,n,r,!0)},counterArcTo:function(t,i,e,n,r){return this.arcTo(t,i,e,n,r,!0)},close:function(){return null!=this.penDownX&&(this.onClose(this.penX,this.penY,this.penX=this.penDownX,this.penY=this.penDownY),this.penDownX=null),this},onReset:function(){},onMove:function(t,i,e,n){},onLine:function(t,i,e,n){this.onBezierCurve(t,i,t,i,e,n,e,n)},onBezierCurve:function(t,i,e,n,r,s,o,h){var a,l,u,c,p,f=o-t,d=h-i,m=f*f+d*d
if(u=e-t,c=n-i,p=u*f+c*d,p>m?(u-=f,c-=d):p>0&&0!=m&&(u-=p/m*f,c-=p/m*d),a=u*u+c*c,u=r-t,c=s-i,p=u*f+c*d,p>m?(u-=f,c-=d):p>0&&0!=m&&(u-=p/m*f,c-=p/m*d),l=u*u+c*c,.01>a&&.01>l)return void this.onLine(t,i,o,h)
if(isNaN(a)||isNaN(l))throw new Error("Bad input")
var v=.5*(e+r),y=.5*(n+s),g=.5*(e+t),x=.5*(n+i),_=.5*(g+v),b=.5*(x+y),w=.5*(o+r),C=.5*(h+s),T=.5*(w+v),M=.5*(C+y),S=.5*(_+T),E=.5*(b+M)
this.onBezierCurve(t,i,g,x,_,b,S,E),this.onBezierCurve(S,E,T,M,w,C,o,h)},onArc:function(t,i,e,n,r,s,o,h,a,l,u,c){var p=c?c*Math.PI/180:0,f=Math.cos(p),d=Math.sin(p),m=f*o,v=-d*h,y=d*o,g=f*h,x=l-a
0>x&&!u?x+=2*Math.PI:x>0&&u&&(x-=2*Math.PI)
for(var _=Math.ceil(Math.abs(x/(Math.PI/2))),b=x/_,w=4/3*Math.tan(b/4),C=Math.cos(a),T=Math.sin(a),M=0;_>M;M++){var S=C-w*T,E=T+w*C
a+=b,C=Math.cos(a),T=Math.sin(a)
var k=C+w*T,z=T-w*C
this.onBezierCurve(t,i,r+m*S+v*E,s+y*S+g*E,r+m*k+v*z,s+y*k+g*z,t=r+m*C+v*T,i=s+y*C+g*T)}},onClose:function(t,i,e,n){this.onLine(t,i,e,n)}})},65:function(t,i,e){var n=e(4)
t.exports=n({_resetPlacement:function(){var t=this.parentNode
if(t){var i=this.previousSibling,e=this.nextSibling
i?i.nextSibling=e:t.firstChild=e,e?e.previousSibling=i:t.lastChild=this.previousSibling}return this.previousSibling=null,this.nextSibling=null,this.parentNode=null,this},inject:function(t){this._resetPlacement()
var i=t.lastChild
return i?(i.nextSibling=this,this.previousSibling=i):t.firstChild=this,t.lastChild=this,this.parentNode=t,this._place(),this},injectBefore:function(t){this._resetPlacement()
var i=t.parentNode
if(!i)return this
var e=t.previousSibling
return e?(e.nextSibling=this,this.previousSibling=e):i.firstChild=this,t.previousSibling=this,this.nextSibling=t,this.parentNode=i,this._place(),this},eject:function(){return this._resetPlacement(),this._place(),this},_place:function(){},dispatch:function(t){var i=this._events,e=i&&i[t.type]
if(e){e=e.slice(0)
for(var n=0,r=e.length;r>n;n++){var s,o=e[n]
s="function"==typeof o?o.call(this,t):o.handleEvent(t),s===!1&&t.preventDefault()}}this.parentNode&&this.parentNode.dispatch&&this.parentNode.dispatch(t)},subscribe:function(t,i,e){if("string"!=typeof t){var n=[]
for(var r in t)n.push(this.subscribe(r,t[r]))
return function(){for(var t=0,i=n.length;i>t;t++)n[t]()
return this}}var s="function"==typeof i?i.bind(e||this):i,o=this._events||(this._events={}),h=o[t]||(o[t]=[])
return h.push(s),function(){for(var t=0,i=h.length;i>t;t++)if(h[t]===s){h.splice(t,1)
break}}}})},66:function(t,i,e){function n(t,i,e){i=s.detach(i),e=s.detach(e)
var n=document.createElement("canvas"),r=n.getContext("2d")
return n.width=t.width,n.height=t.height,r.fillStyle=e[0],r.fillRect(0,0,t.width,t.height),r.globalCompositeOperation="lighter",r.drawImage(t,0,0),n}var r=e(4),s=e(63),o=e(15),h=e(37),a="undefined"!=typeof document&&document.createElement("canvas"),l=a&&a.getContext&&a.getContext("2d"),u=r(h,{initialize:function(){this._fill=null,this._pendingFill=null,this._fillTransform=null,this._stroke=null,this._strokeCap=null,this._strokeDash=null,this._strokeJoin=null,this._strokeWidth=null},_addColors:function(t,i){if("length"in i)for(var e=0,n=i.length-1;n>=e;e++)t.addColorStop(e/n,new s(i[e]).toString())
else for(var r in i)t.addColorStop(r,new s(i[r]).toString())
return t},fill:function(t){return arguments.length>1?this.fillLinear(arguments):(this._pendingFill&&this._pendingFill(),this._fill=t?new s(t).toString():null,this.invalidate())},fillRadial:function(t,i,e,n,r,h,a){if(null==i&&(i=(this.left||0)+.5*(this.width||0)),null==e&&(e=(this.top||0)+.5*(this.height||0)),null==r&&(r=n||.5*this.height||0),null==n&&(n=.5*(this.width||0)),null==h&&(h=i),null==a&&(a=e),h+=h-i,a+=a-e,0===n||"0"===n)return this.fillLinear(t)
var u=r/n
this._pendingFill&&this._pendingFill()
var c=l.createRadialGradient(i,e/u,0,h,a/u,2*n)
if("length"in t)for(var p=0,f=t.length-1;f>=p;p++)c.addColorStop(p/f/2,new s(t[p]).toString()),c.addColorStop(1-p/f/2,new s(t[p]).toString())
else for(var d in t)c.addColorStop(d/2,new s(t[d]).toString()),c.addColorStop(1-d/2,new s(t[d]).toString())
return this._fill=c,this._fillTransform=new o(1,0,0,u),this.invalidate()},fillLinear:function(t,i,e,n,r){if(arguments.length<5){var s=(null==i?270:i)*Math.PI/180,h=Math.cos(s),a=-Math.sin(s),u=(Math.abs(h)+Math.abs(a))/2,c=this.width||1,p=this.height||1
h*=u,a*=u,i=.5-h,n=.5+h,e=.5-a,r=.5+a,this._fillTransform=new o(c,0,0,p)}else this._fillTransform=null
this._pendingFill&&this._pendingFill()
var f=l.createLinearGradient(i,e,n,r)
return this._addColors(f,t),this._fill=f,this.invalidate()},fillImage:function(t,i,e,n,r,s,o){this._pendingFill&&this._pendingFill()
var h=t
if(h instanceof Image||(h=new Image,h.src=t),h.width&&h.height)return this._fillImage(h,i,e,n||0,r||0,s,o)
this._fill=null
var a=this,l=function(){u(),a._fillImage(h,i,e,n||0,r||0,s,o)},u=function(){h.removeEventListener("load",l,!1),a._pendingFill=null}
return this._pendingFill=u,h.addEventListener("load",l,!1),this},_fillImage:function(t,i,e,r,s,h,a){var u=i?i/t.width:1,c=e?e/t.height:1
return null!=h&&(t=n(t,h,a)),this._fill=l.createPattern(t,"repeat"),this._fillTransform=new o(u,0,0,c,r||0,s||0),this.invalidate()},stroke:function(t,i,e,n,r){return this._stroke=t?new s(t).toString():null,this._strokeWidth=null!=i?i:1,this._strokeCap=null!=e?e:"round",this._strokeJoin=null!=n?n:"round",this._strokeDash=r,this.invalidate()},element_renderTo:h.prototype.renderTo,renderTo:function(t,i,e,n,r,s,o){var h=this._opacity
if(null==h||h>=1)return this.renderLayerTo(t,i,e,n,r,s,o)
if(this._fill&&this._stroke)return this.element_renderTo(t,i,e,n,r,s,o)
t.globalAlpha=h
var a=this.renderLayerTo(t,i,e,n,r,s,o)
return t.globalAlpha=1,a},renderLayerTo:function(t,i,e,n,r,s,o){t.setTransform(i,e,n,r,s,o),this.renderShapeTo(t)}})
u._genericContext=l,t.exports=u},67:function(t,i,e){var n=e(4),r=e(64),s=n(r,{initialize:function(t){this.reset(),t instanceof s?this.path=t.path.slice(0):t&&(t.applyToPath?t.applyToPath(this):this.push(t))},onReset:function(){this.path=[]},onMove:function(t,i,e,n){this.path.push(function(t){t.moveTo(e,n)})},onLine:function(t,i,e,n){this.path.push(function(t){t.lineTo(e,n)})},onBezierCurve:function(t,i,e,n,r,s,o,h){this.path.push(function(t){t.bezierCurveTo(e,n,r,s,o,h)})},_arcToBezier:r.prototype.onArc,onArc:function(t,i,e,n,r,s,o,h,a,l,u,c){return o!=h||c?this._arcToBezier(t,i,e,n,r,s,o,h,a,l,u,c):void this.path.push(function(t){t.arc(r,s,o,a,l,u)})},onClose:function(){this.path.push(function(t){t.closePath()})},toCommands:function(){return this.path.slice(0)}})
t.exports=s},68:function(t,i,e){var n=e(4),r=e(15),s=e(63),o=e(39),h=e(19),a=100,l={left:0,top:0,width:500,height:500}
t.exports=n(o,{element_initialize:o.prototype.initialize,initialize:function(t){this.element_initialize(t)
var i=this.element,e=this.skewElement=h.createElement("skew")
e.on=!0,i.appendChild(e)
var n=this.fillElement=h.createElement("fill")
n.on=!1,i.appendChild(n)
var r=this.strokeElement=h.createElement("stroke")
r.on=!1,i.appendChild(r)},_transform:function(){var t=this.parentNode,i=t?new r(t._activeTransform).transform(this):this,e=this._boxCoords||this._size||l,n=e.left||0,s=e.top||0,o=e.width||1,h=e.height||1,u=i.yx/i.xx>i.yy/i.xy;(i.xx<0?i.xy>=0:i.xy<0)&&(u=!u),u=u?-1:1,i=(new r).scale(u,1).transform(i)
var c=180*Math.atan2(-i.xy,i.yy)/Math.PI,p=c*Math.PI/180,f=Math.sin(p),d=Math.cos(p),m=new r(i.xx*d-i.xy*f,(i.yx*d-i.yy*f)*u,(i.xy*d+i.xx*f)*u,i.yy*d+i.yx*f),v=(new r).rotate(c,0,0),y=(new r).rotate(-c,0,0).transform(i).moveTo(0,0)
o*=Math.abs(y.xx),h*=Math.abs(y.yy)
var g=i.x,x=i.y,_=-o/2,b=-h/2,w=v.point(_,b)
g-=w.x-_,x-=w.y-b
var C=new r(i).moveTo(0,0)
w=C.point(n,s),g+=w.x,x+=w.y,0>u&&(g=-g-o)
var T=C.point(-n,-s),M=v.point(o,h),S=v.point(o,0),E=v.point(0,h),k=Math.min(0,M.x,S.x,E.x),z=Math.max(0,M.x,S.x,E.x),P=Math.min(0,M.y,S.y,E.y),j=Math.max(0,M.y,S.y,E.y),L=(T.x-M.x/2)/(z-k)*u,R=(T.y-M.y/2)/(j-P)
w=y.point(n,s),n=w.x,s=w.y
var N=this._strokeWidth
if(N){var _=i.xx+i.xy,b=i.yy+i.yx
N*=Math.sqrt(_*_+b*b)/Math.sqrt(2)}n*=a,s*=a,g*=a,x*=a,o*=a,h*=a
var X=this.element
X.coordorigin=n+","+s,X.coordsize=o+","+h,X.style.left=g+"px",X.style.top=x+"px",X.style.width=o,X.style.height=h,X.style.rotation=c.toFixed(8),X.style.flip=0>u?"x":""
var D=this.skewElement
D.matrix=[m.xx.toFixed(4),m.xy.toFixed(4),m.yx.toFixed(4),m.yy.toFixed(4),0,0],D.origin=L+","+R,this.strokeElement.weight=N+"px"},_createGradient:function(t,i){var e=this.fillElement
this.element.removeChild(e),e.type=t,e.method="none",e.rotate=!0
var n,r,o=[],h=function(t,i){i=s.detach(i),null==n?n=r=i:r=i,o.push(t+" "+i[0])}
if("length"in i)for(var a=0,l=i.length-1;l>=a;a++)h(a/l,i[a])
else for(var u in i)h(u,i[u])
return e.color=n[0],e.color2=r[0],e.colors=o,e.opacity=r[1],e["ao:opacity2"]=n[1],e.on=!0,this.element.appendChild(e),e},_setColor:function(t,i){var e="fill"==t?this.fillElement:this.strokeElement
null==i?e.on=!1:(i=s.detach(i),e.color=i[0],e.opacity=i[1],e.on=!0)},fill:function(t){if(arguments.length>1)this.fillLinear(arguments)
else{this._boxCoords=l
var i=this.fillElement
i.type="solid",i.color2="",i["ao:opacity2"]="",i.colors&&(i.colors.value=""),this._setColor("fill",t)}return this},fillRadial:function(t,i,e,n,r,s,o){var h=this._createGradient("gradientradial",t)
null==i&&(i=this.left+.5*this.width),null==e&&(e=this.top+.5*this.height),null==r&&(r=n||.5*this.height),null==n&&(n=.5*this.width),null==s&&(s=i),null==o&&(o=e),s+=s-i,o+=o-e
var a=this._boxCoords={left:s-2*n,top:o-2*r,width:4*n,height:4*r}
return i-=a.left,e-=a.top,i/=a.width,e/=a.height,h.focussize="0 0",h.focusposition=i+","+e,h.focus="50%",this._transform(),this},fillLinear:function(t,i,e,n,r){var s=this._createGradient("gradient",t)
if(s.focus="100%",5==arguments.length){var o=Math.abs(n-i),h=Math.abs(r-e)
this._boxCoords={left:Math.min(i,n),top:Math.min(e,r),width:1>o?h:o,height:1>h?o:h},s.angle=(360+180*Math.atan2((n-i)/h,(r-e)/o)/Math.PI)%360}else this._boxCoords=null,s.angle=null==i?0:(90+i)%360
return this._transform(),this},fillImage:function(t,i,e,n,r,o,h){var a=this.fillElement
return null!=o?(o=s.detach(o),null!=h&&(h=s.detach(h)),a.type="pattern",a.color=o[0],a.color2=null==h?o[0]:h[0],a.opacity=null==h?0:h[1],a["ao:opacity2"]=o[1]):(a.type="tile",a.color="",a.color2="",a.opacity=1,a["ao:opacity2"]=1),a.colors&&(a.colors.value=""),a.rotate=!0,a.src=t,a.size="1,1",a.position="0,0",a.origin="0,0",a.aspect="ignore",a.on=!0,n||(n=0),r||(r=0),this._boxCoords=i?{left:n+.5,top:r+.5,width:i,height:e}:null,this._transform(),this},stroke:function(t,i,e,n){var r=this.strokeElement
return this._strokeWidth=null!=i?i:1,r.weight=null!=i?i+"px":1,r.endcap=null!=e?"butt"==e?"flat":e:"round",r.joinstyle=null!=n?n:"round",this._setColor("stroke",t),this}})},69:function(t,i,e){var n=e(4),r=e(15),s=e(18),o=e(39)
t.exports=n(o,s,{element_initialize:o.prototype.initialize,initialize:function(t,i){this.element_initialize("group"),this.width=t,this.height=i},_transform:function(){var t=this.element
t.coordorigin="0,0",t.coordsize="1000,1000",t.style.left=0,t.style.top=0,t.style.width=1e3,t.style.height=1e3,t.style.rotation=0
var i=this.parentNode
this._activeTransform=i?new r(i._activeTransform).transform(this):this
for(var e=this.firstChild;e;)e._transform(),e=e.nextSibling}})},70:function(t,i,e){var n=e(4),r=e(18),s=e(36),o=e(19),h=100,a=n(s,r,{initialize:function(t,i,e){this.element=e||document.createElement("vml"),this.containerElement=o.createElement("group"),this.element.appendChild(this.containerElement),null!=t&&null!=i&&this.resize(t,i)},resize:function(t,i){this.width=t,this.height=i
var e=this.element.style
e.pixelWidth=t,e.pixelHeight=i,e=this.containerElement.style,e.width=t,e.height=i
var n=.5*h
return this.containerElement.coordorigin=n+","+n,this.containerElement.coordsize=t*h+","+i*h,this}})
a.tagName="av:vml",t.exports=a},107:function(t,i,e){"use strict"
function n(t){return t?"string"==typeof t?t:t.length?t.join("\n"):"":""}function r(t){var i=function(t){this.node=null,this.subscriptions=null,this.listeners=null,this._mountImage=null,this._renderedChildren=null,this._mostRecentlyPlacedChild=null}
i.displayName=t
for(var e=1,n=arguments.length;n>e;e++)d(i.prototype,arguments[e])
return i}function s(t,i,e,n,r){this.args=S.call(arguments)}function o(t,i,e,n,r,s,o){this.args=S.call(arguments)}function h(t,i,e,n,r){this.args=S.call(arguments)}e(115)
var a=e(15),l=e(38),u=e(201),c=e(23),p=e(87),f=e(8),d=e(2),m=e(120),v=new a,y=d({},p.Mixin,{moveChild:function(t,i){var e=t._mountImage,n=this._mostRecentlyPlacedChild
null==n?e.previousSibling&&(this.node.firstChild?e.injectBefore(this.node.firstChild):e.inject(this.node)):n.nextSibling!==e&&(n.nextSibling?e.injectBefore(n.nextSibling):e.inject(this.node)),this._mostRecentlyPlacedChild=e},createChild:function(t,i){t._mountImage=i
var e=this._mostRecentlyPlacedChild
null==e?this.node.firstChild?i.injectBefore(this.node.firstChild):i.inject(this.node):e.nextSibling?i.injectBefore(e.nextSibling):i.inject(this.node),this._mostRecentlyPlacedChild=i},removeChild:function(t){t._mountImage.eject(),t._mountImage=null},updateChildrenAtRoot:function(t,i){this.updateChildren(t,i,m)},mountAndInjectChildrenAtRoot:function(t,i){this.mountAndInjectChildren(t,i,m)},updateChildren:function(t,i,e){this._mostRecentlyPlacedChild=null,this._updateChildren(t,i,e)},mountAndInjectChildren:function(t,i,e){var n=this.mountChildren(t,i,e),r=0
for(var s in this._renderedChildren)if(this._renderedChildren.hasOwnProperty(s)){var o=this._renderedChildren[s]
o._mountImage=n[r],n[r].inject(this.node),r++}}}),g=u.createClass({displayName:"Surface",mixins:[y],componentDidMount:function(){this.node=l.Surface(+this.props.width,+this.props.height,this.domNode)
var t=f.ReactReconcileTransaction.getPooled()
t.perform(this.mountAndInjectChildren,this,this.props.children,t,c.get(this)._context),f.ReactReconcileTransaction.release(t)},componentDidUpdate:function(t){var i=this.node;(this.props.width!=t.width||this.props.height!=t.height)&&i.resize(+this.props.width,+this.props.height)
var e=f.ReactReconcileTransaction.getPooled()
e.perform(this.updateChildren,this,this.props.children,e,c.get(this)._context),f.ReactReconcileTransaction.release(e),i.render&&i.render()},componentWillUnmount:function(){this.unmountChildren()},render:function(){var t=this.props
return u.createElement(l.Surface.tagName,{ref:function(t){return this.domNode=t}.bind(this),accesskey:t.accesskey,className:t.className,draggable:t.draggable,role:t.role,style:t.style,tabindex:t.tabindex,title:t.title})}}),x={onMouseMove:"mousemove",onMouseOver:"mouseover",onMouseOut:"mouseout",onMouseUp:"mouseup",onMouseDown:"mousedown",onClick:"click"},_={construct:function(t){this._currentElement=t},getPublicInstance:function(){return this.node},putEventListener:function(t,i){var e=this.subscriptions||(this.subscriptions={}),n=this.listeners||(this.listeners={})
n[t]=i,i?e[t]||(e[t]=this.node.subscribe(t,i,this)):e[t]&&(e[t](),delete e[t])},handleEvent:function(t){var i=this.listeners[t.type]
i&&("function"==typeof i?i.call(this,t):i.handleEvent&&i.handleEvent(t))},destroyEventListeners:function(){var t=this.subscriptions
if(t)for(var i in t)t[i]()
this.subscriptions=null,this.listeners=null},applyNodeProps:function(t,i){var e=this.node,n=null!=i.scaleX?i.scaleX:null!=i.scale?i.scale:1,r=null!=i.scaleY?i.scaleY:null!=i.scale?i.scale:1
v.transformTo(1,0,0,1,0,0).move(i.x||0,i.y||0).rotate(i.rotation||0,i.originX,i.originY).scale(n,r,i.originX,i.originY),null!=i.transform&&v.transform(i.transform),(e.xx!==v.xx||e.yx!==v.yx||e.xy!==v.xy||e.yy!==v.yy||e.x!==v.x||e.y!==v.y)&&e.transformTo(v),(i.cursor!==t.cursor||i.title!==t.title)&&e.indicate(i.cursor,i.title),e.blend&&i.opacity!==t.opacity&&e.blend(null==i.opacity?1:i.opacity),i.visible!==t.visible&&(null==i.visible||i.visible?e.show():e.hide())
for(var s in x)this.putEventListener(x[s],i[s])},mountComponentIntoNode:function(t,i){throw new Error("You cannot render an ART component standalone. You need to wrap it in a Surface.")}},b=r("Group",_,y,{mountComponent:function(t,i,e){this.node=l.Group()
var n=this._currentElement.props
return this.applyGroupProps(m,n),this.mountAndInjectChildren(n.children,i,e),this.node},receiveComponent:function(t,i,e){var n=t.props,r=this._currentElement.props
this.applyGroupProps(r,n),this.updateChildren(n.children,i,e),this._currentElement=t},applyGroupProps:function(t,i){this.node.width=i.width,this.node.height=i.height,this.applyNodeProps(t,i)},unmountComponent:function(){this.destroyEventListeners(),this.unmountChildren()}}),w=r("ClippingRectangle",_,y,{mountComponent:function(t,i,e){this.node=l.ClippingRectangle()
var n=this._currentElement.props
return this.applyClippingProps(m,n),this.mountAndInjectChildren(n.children,i,e),this.node},receiveComponent:function(t,i,e){var n=t.props,r=this._currentElement.props
this.applyClippingProps(r,n),this.updateChildren(n.children,i,e),this._currentElement=t},applyClippingProps:function(t,i){this.node.width=i.width,this.node.height=i.height,this.node.x=i.x,this.node.y=i.y,this.applyNodeProps(t,i)},unmountComponent:function(){this.destroyEventListeners(),this.unmountChildren()}}),C=d({},_,{applyRenderableProps:function(t,i){t.fill!==i.fill&&(i.fill&&i.fill.applyFill?i.fill.applyFill(this.node):this.node.fill(i.fill)),(t.stroke!==i.stroke||t.strokeWidth!==i.strokeWidth||t.strokeCap!==i.strokeCap||t.strokeJoin!==i.strokeJoin||t.strokeDash!==i.strokeDash)&&this.node.stroke(i.stroke,i.strokeWidth,i.strokeCap,i.strokeJoin,i.strokeDash),this.applyNodeProps(t,i)},unmountComponent:function(){this.destroyEventListeners()}}),T=r("Shape",C,{construct:function(t){this._currentElement=t,this._oldPath=null},mountComponent:function(t,i,e){this.node=l.Shape()
var n=this._currentElement.props
return this.applyShapeProps(m,n),this.node},receiveComponent:function(t,i,e){var n=t.props,r=this._currentElement.props
this.applyShapeProps(r,n),this._currentElement=t},applyShapeProps:function(t,i){var e=this._oldPath,r=i.d||n(i.children);(r!==e||t.width!==i.width||t.height!==i.height)&&(this.node.draw(r,i.width,i.height),this._oldPath=r),this.applyRenderableProps(t,i)}}),M=r("Text",C,{construct:function(t){this._currentElement=t,this._oldString=null},mountComponent:function(t,i,e){var r=this._currentElement.props,s=n(r.children)
return this.node=l.Text(s,r.font,r.alignment,r.path),this._oldString=s,this.applyRenderableProps(m,r),this.node},isSameFont:function(t,i){return t===i?!0:"string"==typeof i||"string"==typeof t?!1:i.fontSize===t.fontSize&&i.fontStyle===t.fontStyle&&i.fontVariant===t.fontVariant&&i.fontWeight===t.fontWeight&&i.fontFamily===t.fontFamily},receiveComponent:function(t,i,e){var r=t.props,s=this._currentElement.props,o=this._oldString,h=n(r.children)
o===h&&this.isSameFont(s.font,r.font)&&s.alignment===r.alignment&&s.path===r.path||(this.node.draw(h,r.font,r.alignment,r.path),this._oldString=h),this.applyRenderableProps(s,r),this._currentElement=t}}),S=Array.prototype.slice
s.prototype.applyFill=function(t){t.fillLinear.apply(t,this.args)},o.prototype.applyFill=function(t){t.fillRadial.apply(t,this.args)},h.prototype.applyFill=function(t){t.fillImage.apply(t,this.args)}
var E={LinearGradient:s,RadialGradient:o,Pattern:h,Transform:a,Path:l.Path,Surface:g,Group:b,ClippingRectangle:w,Shape:T,Text:M}
t.exports=E},108:function(t,i,e){var n=e(4),r=e(65),s=e(36)
t.exports=n(r,s,{dummy_inject:r.prototype.inject,dummy_injectBefore:r.prototype.injectBefore,dummy_eject:r.prototype.eject,native_inject:s.prototype.inject,native_injectBefore:s.prototype.injectBefore,native_eject:s.prototype.eject,inject:function(t){return this.dummy_inject(t),this.native_inject(t),this},injectBefore:function(t){return this.dummy_injectBefore(t),this.native_injectBefore(t),this},eject:function(){return this.dummy_eject(),this.native_eject(),this}})},109:function(t,i,e){i.Surface=e(113),i.Path=e(67),i.Shape=e(112),i.Group=e(111),i.ClippingRectangle=e(110),i.Text=e(114)},110:function(t,i,e){var n=e(4),r=e(18),s=e(37)
t.exports=n(s,r,{initialize:function(t,i){this.width=t,this.height=i},localHitTest:function(t,i){for(var e=this.lastChild;e;){var n=e.hitTest(t,i)
if(n)return n
e=e.previousSibling}return null},renderLayerTo:function(t,i,e,n,r,s,o){t.setTransform(i,e,n,r,s,o),t.save(),t.beginPath(),t.rect(this.x,this.y,this.width,this.height),t.clip()
for(var h=this.firstChild;h;)h.renderTo(t,i,e,n,r,s,o),h=h.nextSibling
t.restore()}})},111:function(t,i,e){var n=e(4),r=e(18),s=e(37)
t.exports=n(s,r,{initialize:function(t,i){this.width=t,this.height=i},localHitTest:function(t,i){for(var e=this.lastChild;e;){var n=e.hitTest(t,i)
if(n)return n
e=e.previousSibling}return null},renderLayerTo:function(t,i,e,n,r,s,o){if(!this._invisible){s=i*this.x+n*this.y+s,o=e*this.x+r*this.y+o
var h=i
i=h*this.xx+n*this.yx,n=h*this.xy+n*this.yy,h=e,e=h*this.xx+r*this.yx,r=h*this.xy+r*this.yy
for(var a=this.firstChild;a;)a.renderTo(t,i,e,n,r,s,o),a=a.nextSibling}}})},112:function(t,i,e){var n=e(4),r=e(66),s=e(67)
t.exports=n(r,{base_initialize:r.prototype.initialize,initialize:function(t,i,e){this.base_initialize(),this.width=i,this.height=e,null!=t&&this.draw(t)},draw:function(t,i,e){return t instanceof s||(t=new s(t)),this.path=t,this._commands=t.toCommands(),null!=i&&(this.width=i),null!=e&&(this.height=e),this.invalidate()},localHitTest:function(t,i){if(!this._fill)return null
if(null==this.width||null==this.height){var e=r._genericContext,n=this._commands
if(!n)return null
e.beginPath()
for(var s=0,o=n.length;o>s;s++)n[s](e)
return e.isPointInPath(t,i)?this:null}return t>0&&i>0&&t<this.width&&i<this.height?this:null},renderShapeTo:function(t){if(this._invisible||!this._commands||!this._fill&&!this._stroke)return null
t.transform(this.xx,this.yx,this.xy,this.yy,this.x,this.y)
var i=this._commands,e=this._fill,n=this._stroke,r=this._strokeDash
t.beginPath(),r?t.setLineDash?t.setLineDash(r):t.mozDash=r:t.setLineDash?t.setLineDash([]):t.mozDash=null
for(var s=0,o=i.length;o>s;s++)i[s](t)
if(e){var h=this._fillTransform
h?(t.save(),t.transform(h.xx,h.yx,h.xy,h.yy,h.x,h.y),t.fillStyle=e,t.fill(),t.restore()):(t.fillStyle=e,t.fill())}n&&(t.strokeStyle=n,t.lineWidth=this._strokeWidth,t.lineCap=this._strokeCap,t.lineJoin=this._strokeJoin,t.stroke())}})},113:function(t,i,e){var n,r=e(4),s=e(18),o=e(36),h=1e3/60,a=[],l=function(){clearTimeout(n),n=null
var t=a
a=[]
for(var i=0,e=t.length;e>i;i++){var r=t[i]
r._valid=!0,r.render()}},u="undefined"!=typeof window&&window.devicePixelRatio||1,c=null,p=null,f=r(o,s,{initialize:function(t,i,e){var n=this.element=e||document.createElement("canvas")
this.context=n.getContext("2d")
this._valid=!0,null!=t&&null!=i&&this.resize(t,i),n.addEventListener("mousemove",this,!1),n.addEventListener("mouseout",this,!1),n.addEventListener("mouseover",this,!1),n.addEventListener("mouseup",this,!1),n.addEventListener("mousedown",this,!1),n.addEventListener("click",this,!1)},handleEvent:function(t){if(null!=t.clientX){var i=this.element,e=i.getBoundingClientRect(),n=t.clientX-e.left-i.clientLeft,r=t.clientY-e.top-i.clientTop,s=this.hitTest(n,r)
s!==c&&(c&&c.dispatch({type:"mouseout",target:c,relatedTarget:s,sourceEvent:t}),s&&s.dispatch({type:"mouseover",target:s,relatedTarget:c,sourceEvent:t}),c=s,p=this,this.refreshCursor()),s&&s.dispatch(t)}},refreshCursor:function(){if(p===this){for(var t=c,i="",e="";t&&(i||!t._cursor||(i=t._cursor,!e))&&(e||!t._tooltip||(e=t._tooltip,!i));)t=t.parentNode
this.element.style.cursor=i,this.element.title=e}},resize:function(t,i){var e=this.element
return e.setAttribute("width",t*u),e.setAttribute("height",i*u),e.style.width=t+"px",e.style.height=i+"px",this.width=t,this.height=i,this},invalidate:function(t,i,e,r){return this._valid&&(this._valid=!1,a.push(this),n||(window.mozRequestAnimationFrame?(n=!0,window.mozRequestAnimationFrame(l)):n=setTimeout(l,h))),this},hitTest:function(t,i){if(0>t||0>i||t>this.width||i>this.height)return null
for(var e=this.lastChild;e;){var n=e.hitTest(t,i)
if(n)return n
e=e.previousSibling}return null},render:function(){var t=this.firstChild,i=this.context
for(i.setTransform(u,0,0,u,0,0),i.clearRect(0,0,this.width,this.height);t;)t.renderTo(i,u,0,0,u,0,0),t=t.nextSibling
this.refreshCursor()}})
f.tagName="canvas",t.exports=f},114:function(t,i,e){var n=e(4),r=e(66),s={middle:"center"}
t.exports=n(r,{base_initialize:r.prototype.initialize,initialize:function(t,i,e,n){this.base_initialize(),this.draw.apply(this,arguments)},draw:function(t,i,e,n){var o
"string"==typeof i?o=Number(/(\d+)/.exec(i)[0]):i?(o=parseFloat(i.fontSize||i["font-size"]||"12"),i=(i.fontStyle||i["font-style"]||"")+" "+(i.fontVariant||i["font-variant"]||"")+" "+(i.fontWeight||i["font-weight"]||"")+" "+o+"px "+(i.fontFamily||i["font-family"]||"Arial")):i=this._font
var h=t&&t.split(/\r?\n/)
this._font=i,this._fontSize=o,this._text=h,this._alignment=s[e]||e||"left"
var a=r._genericContext
a.font=this._font,a.textAlign=this._alignment,a.textBaseline="middle",h=this._text
for(var l=h.length,u=0,c=0;l>c;c++){var p=a.measureText(h[c]).width
p>u&&(u=p)}return this.width=u,this.height=l?1.1*l*o:0,this.invalidate()},localHitTest:function(t,i){return this._fill&&t>0&&i>0&&t<this.width&&i<this.height?this:null},renderShapeTo:function(t){if(this._invisible||!this._text||!this._fill&&!this._stroke)return null
t.transform(this.xx,this.yx,this.xy,this.yy,this.x,this.y)
var i=this._fill,e=this._stroke,n=this._text,r=this._strokeDash
t.font=this._font,t.textAlign=this._alignment,t.textBaseline="middle"
var s=this._fontSize,o=s/2,h=1.1*s,a=n,l=a.length
if(i){t.fillStyle=i
for(var u=0;l>u;u++)t.fillText(a[u],0,o+u*h)}if(e)for(r?t.setLineDash?t.setLineDash(r):t.mozDash=r:t.setLineDash?t.setLineDash([]):t.mozDash=null,t.strokeStyle=e,t.lineWidth=this._strokeWidth,t.lineCap=this._strokeCap,t.lineJoin=this._strokeJoin,u=0;l>u;u++)t.strokeText(a[u],0,o+u*h)}})},115:function(t,i,e){var n=e(116),r=e(109),s=function(){var t=document.createElement("canvas")
return t&&!!t.getContext},o=s()?r:n
i.Surface=o.Surface,i.Path=o.Path,i.Shape=o.Shape,i.Group=o.Group,i.ClippingRectangle=o.ClippingRectangle,i.Text=o.Text,e(38).setCurrent(i)},116:function(t,i,e){i.Surface=e(70),i.Path=e(40),i.Shape=e(118),i.Group=e(69),i.ClippingRectangle=e(117),i.Text=e(119)
var n=e(19)
"undefined"!=typeof document&&n.init(document),e(38).setCurrent(i)},117:function(t,i,e){var n=e(4),r=e(15),s=e(18),o=e(39)
t.exports=n(o,s,{element_initialize:o.prototype.initialize,initialize:function(t,i){this.element_initialize("clippingrectangle"),this.width=t,this.height=i},_transform:function(){var t=this.element
t.clip=!0,t.coordorigin=-this.x+","+-1*this.y,t.coordsize=this.width+","+this.height,t.style.clipLeft=this.x,t.style.clipRight=this.width+this.x,t.style.clipTop=this.y,t.style.left=-this.x,t.style.top=-this.y,t.style.width=this.width+this.x,t.style.height=this.height+this.y,t.style.rotation=0
var i=this.parentNode
this._activeTransform=i?new r(i._activeTransform).transform(this):this
for(var e=this.firstChild;e;)e._transform(),e=e.nextSibling}})},118:function(t,i,e){var n=e(4),r=e(68),s=e(40),o=e(19),h=100
t.exports=n(r,{base_initialize:r.prototype.initialize,initialize:function(t,i,e){this.base_initialize("shape")
var n=this.pathElement=o.createElement("path")
n.gradientshapeok=!0,this.element.appendChild(n),this.width=i,this.height=e,null!=t&&this.draw(t)},draw:function(t,i,e){return t instanceof s||(t=new s(t)),this._vml=t.toVML(),null!=i&&(this.width=i),null!=e&&(this.height=e),this._boxCoords||this._transform(),this._redraw(this._prefix,this._suffix),this},_redraw:function(t,i){var e=this._vml||""
this._prefix=t,this._suffix=i,t&&(e=[t,e,i,"ns e",e,"nf"].join(" ")),this.element.path=e+"e"},fillRadial:function(t,i,e,n,r,s,o){var a=this._createGradient("gradientradial",t)
null==i&&(i=(this.left||0)+.5*(this.width||0)),null==e&&(e=(this.top||0)+.5*(this.height||0)),null==r&&(r=n||.5*this.height||0),null==n&&(n=.5*(this.width||0)),null==s&&(s=i),null==o&&(o=e),s+=s-i,o+=o-e
var l=Math.round(s*h),u=Math.round(o*h),c=Math.round(2*n*h),p=Math.round(2*r*h),f=["wa",l-c,u-p,l+c,u+p].join(" ")
return this._redraw(["m",l,u-p,"l",l,u-p].join(" "),["m",l,u-p,f,l,u-p,l,u+p,f,l,u+p,l,u-p,f,l,u-p,l,u+p,f,l,u+p,l,u-p].join(" ")),this._boxCoords={left:i-2,top:e-2,width:4,height:4},a.focusposition="0.5,0.5",a.focussize="0 0",a.focus="50%",this._transform(),this}})},119:function(t,i,e){var n=e(4),r=e(68),s=e(40),o=e(70),h=e(69),a=e(19),l={start:"left",middle:"center",end:"right"}
t.exports=n(r,{base_initialize:r.prototype.initialize,initialize:function(t,i,e,n){this.base_initialize("shape")
var r=this.pathElement=a.createElement("path")
r.textpathok=!0,this.element.appendChild(r),r=this.textPathElement=a.createElement("textpath"),r.on=!0,r.style["v-text-align"]="left",this.element.appendChild(r),this.draw.apply(this,arguments)},draw:function(t,i,e,n){var r=this.element,a=this.textPathElement,u=a.style
if(a.string=t,i)if("string"==typeof i)u.font=i
else for(var c in i){var p=c.camelCase?c.camelCase():c
"fontFamily"==p?u[p]="'"+i[c]+"'":u[p]=i[c]}if(e&&(u["v-text-align"]=l[e]||e),n)this.currentPath=n=new s(n),this.element.path=n.toVML()
else if(!this.currentPath){for(var f=-1,d="\n";(f=t.indexOf("\n",f+1))>-1;)d+="\n"
a.string=d+a.string,this.element.path="m0,0l1,0"}r=r.cloneNode(!0),u=r.style,r.coordorigin="0,0",r.coordsize="10000,10000",u.left="0px",u.top="0px",u.width="10000px",u.height="10000px",u.rotation=0,r.removeChild(r.firstChild)
var m=new o(1,1),v=new h,y=r.ownerDocument.body
m.inject(y),v.element.appendChild(r),v.inject(m)
var g=r.getBoundingClientRect(),x=m.toElement().getBoundingClientRect()
return m.eject(),this.left=g.left-x.left,this.top=g.top-x.top,this.width=g.right-g.left,this.height=g.bottom-g.top,this.right=g.right-x.left,this.bottom=g.bottom-x.top,this._transform(),this}})},120:function(t,i,e){"use strict"
var n={}
t.exports=n},201:function(t,i,e){"use strict"
t.exports=e(21)}})
__KA_module.exports = ReactART;
this.ReactART = ReactART;
});
KAdefine("javascript/node_modules/react-art/index.js", function(require, module, exports) {
module.exports=require.withVars("../../../third_party/javascript-khansrc/react-compiled/react-art.{{dev_or_prod}}.js")
});
; KAdefine.updateFilenameRewriteMap({"third_party/javascript-khansrc/react-compiled/react-art.{{dev_or_prod}}.js": "react-art.prod.js"});
