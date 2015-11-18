KAdefine("third_party/javascript-khansrc/es5-shim/function-prototype-bind-polyfill.js", function(__KA_require, __KA_module, __KA_exports) {
(function(){var t=Array.prototype
var n=t.slice
function r(){}if(!Function.prototype.bind){Function.prototype.bind=function o(t){var o=this
if(typeof o!=="function"){throw new TypeError("Function.prototype.bind called on incompatible "+o)}var e=n.call(arguments,1)
var i=function(){if(this instanceof u){var r=o.apply(this,e.concat(n.call(arguments)))
if(Object(r)===r){return r}return this}else{return o.apply(t,e.concat(n.call(arguments)))}}
var a=Math.max(0,o.length-e.length)
var p=[]
for(var c=0;c<a;c++){p.push("$"+c)}var u=Function("binder","return function("+p.join(",")+"){return binder.apply(this,arguments)}")(i)
if(o.prototype){r.prototype=o.prototype
u.prototype=new r
r.prototype=null}return u}}})()
});
KAdefine("javascript/shared-package/ka.js", function(require, module, exports) {
var KA=window.KA=Object.assign(window.KA||{},{userProfileModel_:null,getUserProfile:function(){var e=require("./profile-model.js")
if(KA.userProfileData_&&!KA.userProfileModel_){KA.userProfileModel_=new e(KA.userProfileData_)}return KA.userProfileModel_},setUserProfile:function(e){var r=require("./profile-model.js")
if(!KA.userProfileModel_){KA.userProfileModel_=new r(e)}KA.userProfileModel_.set(e)
return KA.userProfileModel_},getGlobalPermissions:function(){var e=KA.getUserProfile()
return e&&e.get("globalPermissions")||[]},isPhantom:function(){var e=KA.getUserProfile()
return!e||e.get("isPhantom")},isDeveloper:function(){var e=KA.getUserProfile()
return e&&e.get("isDeveloper")}})
module.exports=KA
});
KAdefine("javascript/shared-package/console.js", function(require, module, exports) {
var KAConsole={_oldMessages:[],_flushOldMessages:function(){for(var s=0,o=this._oldMessages.length;s<o;s++){this.log.apply(this,this._oldMessages[s])}this._oldMessages=[]},_logToBuffer:function(){this._oldMessages.push(arguments)},_logOrPreserve:function(){if(window.console){this.enable()
this.log.apply(this,arguments)}else{this._logToBuffer.apply(this,arguments)}},_logCompatible:function(){if(!window.console){return}if(console.log.apply){console.log.apply(console,arguments)}else{Function.prototype.apply.call(console.log,null,arguments)}},enable:function(){if(window.console){if(console.log.bind){this.log=console.log.bind(console)}else{this.log=this._logCompatible}this._flushOldMessages()}else{this.log=this._logOrPreserve}},disable:function(){this.log=this._logToBuffer},init:function(s){if(s){this.enable()}else{this.disable()}}}
KAConsole.init(false)
module.exports=KAConsole
});
KAdefine("javascript/shared-package/i18n.js", function(require, module, exports) {
var icu=require("icu")
var createFragment=require("react-addons-create-fragment")
var likeEnglish=function(n){return n!=1}
var allPluralForms={accents:likeEnglish,af:likeEnglish,ar:function(n){return n==0?0:n==1?1:n==2?2:n%100>=3&&n%100<=10?3:n%100>=11&&n%100<=99?4:5},az:likeEnglish,bg:likeEnglish,bn:likeEnglish,boxes:likeEnglish,ca:likeEnglish,cs:function(n){return n==1?0:n>=2&&n<=4?1:2},da:likeEnglish,de:likeEnglish,el:likeEnglish,empty:likeEnglish,en:likeEnglish,"en-pt":likeEnglish,es:likeEnglish,fa:function(n){return 0},"fa-af":function(n){return 0},fi:likeEnglish,fr:function(n){return n>1},he:likeEnglish,hi:likeEnglish,hu:likeEnglish,hy:likeEnglish,id:function(n){return 0},it:likeEnglish,ja:function(n){return 0},ko:function(n){return 0},lol:likeEnglish,mn:likeEnglish,ms:function(n){return 0},nb:likeEnglish,nl:likeEnglish,pl:function(n){return n==1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2},pt:likeEnglish,"pt-pt":likeEnglish,ro:function(n){return n==1?0:n==0||n%100>0&&n%100<20?1:2},ru:function(n){return n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2},"si-LK":likeEnglish,sk:function(n){return n==1?0:n>=2&&n<=4?1:2},sr:function(n){return n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2},"sv-SE":likeEnglish,sw:likeEnglish,te:likeEnglish,th:function(n){return 0},tr:function(n){return 0},uk:function(n){return n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2},ur:likeEnglish,vi:function(n){return 0},xh:likeEnglish,"zh-hans":function(n){return 0},"zh-hant":function(n){return 0},zu:likeEnglish}
var interpolationMarker=/%\(([\w_]+)\)s/g
var interpolateStringToFragment=function(n,e){e=e||{}
var t=n.split(interpolationMarker)
var r={text_0:t[0]}
for(var i=1;i<t.length;i+=2){var l=t[i]
var a=e[l]
if(a===undefined){a="%("+l+")s"}var s=0
while(""+s+"_"+l in r){s++}r[""+s+"_"+l]=a
r["text_"+(i+1)]=t[i+1]}return createFragment(r)}
var _=function(n,e){if(typeof n==="object"&&n.messages){n=n.messages[0]}e=e||{}
return n.replace(interpolationMarker,function(n,t){var r=e[t]
return r===undefined?n:r})}
var $_=function(n,e){if(arguments.length!==2||typeof e!=="string"){return"<$_> must have exactly one child, which must be a string"}return interpolateStringToFragment(e,n)}
var $i18nDoNotTranslate=function(n,e){return e}
var ngettext=function(n,e,t,r){var i
var l
if(typeof n==="object"){i=n.lang
l=n.messages
r=t
t=e}else{i="en"
l=[n,e]}var a=ngetpos(t,i)
var s=""
if(a<l.length){s=l[a]}r=r||{}
r.num=r.num||t
return _(s,r)}
var ngetpos=function(n,e){var t=allPluralForms[e]||allPluralForms["en"]
var r=t(n)
return r===true?1:r?r:0}
var i18nDoNotTranslate=_
var handlebarsUnderscore=function(n){return n.fn(this)}
var handlebarsDoNotTranslate=function(n){return n.fn(this)}
var handlebarsNgettext=function(n,e,t,r){if(typeof e!=="string"){r=e
e="en"
t=0}this.num=this.num||n
return ngetpos(n)===t?r.fn(this):r.inverse(this)}
var localeToFixed=function(n,e){var t=icu.getDecimalFormatSymbols().decimal_separator
var r=n.toFixed(e).replace(".",t)
if(r==="-0"){r="0"}return r}
window.i18n={_:_,ngettext:ngettext,i18nDoNotTranslate:i18nDoNotTranslate,ngetpos:ngetpos}
window.$_=$_
window.$i18nDoNotTranslate=$i18nDoNotTranslate
module.exports={_:_,ngettext:ngettext,i18nDoNotTranslate:i18nDoNotTranslate,localeToFixed:localeToFixed,$_:$_,$i18nDoNotTranslate:$i18nDoNotTranslate,handlebarsUnderscore:handlebarsUnderscore,handlebarsNgettext:handlebarsNgettext,handlebarsDoNotTranslate:handlebarsDoNotTranslate}
});
KAdefine("javascript/shared-package/a11y.js", function(require, module, exports) {
var $=require("jquery")
var i18n=require("./i18n.js")
var KA=require("./ka.js")
var cookies=require("./cookies.js")
var parseQueryString=require("./parse-query-string.js")
module.exports={init:function(){this.externalLink()
this.srOnlyInputFocus()
var n=parseQueryString()["tota11yk"]
if(n){cookies.createCookie("enable_tota11y",n)}if(KA.isDeveloper()&&cookies.readCookie("enable_tota11y")!=="0"){require.async(["../../third_party/javascript-khansrc/tota11y/build/tota11y.min.js"])}},externalLink:function(){var n="a[target=_blank]:not(.external-link)"
var e=i18n._("(Opens in a new window)")
$(document).on("focusin",n,function(){$(this).addClass("external-link").attr("title",function(n){return n?n+" "+e:""}).append("<span class='sr-only'>"+e+"</span>")})},srOnlyInputFocus:function(){$(document).on("focusin",".sr-only input, .sr-only a",function(){$(this).closest(".sr-only").toggleClass("sr-only sr-only-visible")}).on("focusout",".sr-only-visible input, .sr-only-visible a",function(){$(this).closest(".sr-only-visible").toggleClass("sr-only sr-only-visible")})}}
});
KAdefine("javascript/shared-package/package-manager.js", function(require, module, exports) {
var $=require("jquery")
var _=require("../../third_party/javascript-khansrc/lodash/lodash.js")
var KA=require("./ka.js")
var staticUrl=function(e){return KA.staticUrl(e).replace(/^https?:/,window.location.protocol)}
var PACKAGE_STATE_DEFINED=1
var PACKAGE_STATE_LOADING=2
var PACKAGE_STATE_LOADED=3
var PACKAGE_STATE_EXECUTED=4
var PACKAGE_LEVEL_NOT_SET=-2
var PACKAGE_LEVEL_CALCULATING=-1
var _packagesByName={}
var manifestsRegistered=$.Deferred()
var _Package=function(){function e(t,a,n){babelHelpers.classCallCheck(this,e)
this._name=t
this._url=staticUrl(a)
this._dependencyNames=n
this._content=null
this._state=PACKAGE_STATE_DEFINED
this._fetchingPromise=null
this._level=PACKAGE_LEVEL_NOT_SET}e.prototype._getDependencies=function t(){return this._dependencyNames.map(function(t){return e.get(t)})}
e.prototype._getTransitiveDependencies=function a(){var e={}
var t=[this]
while(t.length>0){var a=t.shift()
if(e.hasOwnProperty(a._name)){continue}e[a._name]=a
a._getDependencies().forEach(function(e){return t.push(e)})}return Object.values(e)}
e.prototype._getLevel=function n(){if(this._level===PACKAGE_LEVEL_NOT_SET){this._level=PACKAGE_LEVEL_CALCULATING
var e=this._getDependencies()
if(e.length===0){this._level=0}else{var t=e.map(function(e){return e._getLevel()}).filter(function(e){return e!==PACKAGE_LEVEL_CALCULATING})
this._level=Math.max.apply(Math,t)+1}}return this._level}
e.prototype.markExecuted=function r(){this._state=PACKAGE_STATE_EXECUTED
var e=$.Deferred()
e.resolve()
this._fetchingPromise=e.promise()}
e.prototype._fetch=function i(){var e=this
if(this._state>=PACKAGE_STATE_LOADING){return this._fetchingPromise}var t=$.Deferred()
this._fetchingPromise=t.promise()
$(document).ready(function(){$.ajax({type:"GET",url:e._url,dataType:"html"}).then(function(a){e._content=a
e._state=PACKAGE_STATE_LOADED
t.resolve()})})
this._state=PACKAGE_STATE_LOADING
return this._fetchingPromise}
e.prototype.isExecuted=function c(){return this._state===PACKAGE_STATE_EXECUTED}
e.prototype._execute=function s(){if(this.isExecuted()){return}if(this._content===null){throw new Error("_Package "+name+" cannot be executed without content.")}var e=this._name.slice(this._name.lastIndexOf(".")+1)
if(e==="js"){this._executeJs()}else if(e==="css"){this._injectCss()}else{throw new Error("Unknown package extension "+e)}this._state=PACKAGE_STATE_EXECUTED}
e.prototype.fetchAndExecute=function o(){var e=this._getTransitiveDependencies().sort(function(e,t){return e._getLevel()-t._getLevel()})
return $.when.apply($.when,e.map(function(e){return e._fetch()})).then(function(){e.forEach(function(e){return e._execute()})})}
e.prototype._executeJs=function u(){var e=this._content
var t=this._url
$.globalEval(""+e+"\n//# sourceURL="+t+"\n")}
e.prototype._injectCss=function _(){var e=document.getElementsByTagName("head")[0]||document.documentElement
var t=document.createElement("style")
t.setAttribute("data-href",this._url)
t.setAttribute("data-package-name",this._name)
if(t.styleSheet){t.styleSheet.cssText=this._content}else{var a=document.createTextNode(this._content)
t.appendChild(a)}e.appendChild(t)}
e.get=function g(e){var t=_packagesByName[e]
if(!t){throw new Error("Could not find package with name "+e)}return t}
e.define=function f(t,a,n){if(!e.isDefined(t)){_packagesByName[t]=new e(t,a,n)}}
e.isDefined=function l(e){return _packagesByName.hasOwnProperty(e)}
return e}()
window.PackageManager=window.PackageManager||{}
PackageManager.init=function(){if(PackageManager._q){PackageManager.markExecuted.apply(PackageManager,PackageManager._q)
delete PackageManager._q}if(KA.IS_DEV_SERVER){$(document).ready(function(){var e=[]
var t=[]
for(var a=Object.entries(_packagesByName),n=Array.isArray(a),r=0,a=n?a:a[Symbol.iterator]();;){var i
if(n){if(r>=a.length)break
i=a[r++]}else{r=a.next()
if(r.done)break
i=r.value}var c=i[0]
var s=i[1]
if(s.isExecuted()){var o=c.split(".").pop()
if(o==="js"){e.push(c)}else{t.push(c)}}}console.info("[PackageManager] %d initial JS package(s): %s",e.length,e.join(", "))
console.info("[PackageManager] %d initial CSS package(s): %s",t.length,t.join(", "))})}}
var logDynamicRequire=function(){var e=[]
var t=_.debounce(function(){console.info("[PackageManager] dynamically loading %d package(s): %s",e.length,e.join(", "))
e=[]},100)
return function(a){e.push(a)
t()}}()
PackageManager.require=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++){t[a]=arguments[a]}return $.when.apply($.when,t.map(function(e){if(KA.IS_DEV_SERVER){logDynamicRequire(e)}if(_Package.isDefined(e)){return _Package.get(e).fetchAndExecute()}else{return manifestsRegistered.then(function(){return _Package.get(e).fetchAndExecute()})}}))}
var toBeMarkedExecuted={}
PackageManager.markExecuted=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++){t[a]=arguments[a]}t.forEach(function(e){if(_Package.isDefined(e)){_Package.get(e).markExecuted()}else{toBeMarkedExecuted[e]=true}})}
PackageManager.registerDynamic=function(e){var t=e.name
var a=e.url
var n=e.dependencies||[]
_Package.define(t,a,n)
if(toBeMarkedExecuted[t]){_Package.get(t).markExecuted()
delete toBeMarkedExecuted[t]}}
PackageManager.registerManifests=function(e){(e["javascript"]||[]).forEach(PackageManager.registerDynamic);(e["stylesheets"]||[]).forEach(PackageManager.registerDynamic)
manifestsRegistered.resolve()}
module.exports=PackageManager
});
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.touch-punch.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
__KA_require("./jquery.ui.mouse.js");
(function($){$.support.touch="ontouchend"in document
if(!$.support.touch){return}var e=$.ui.mouse.prototype,t=e._mouseInit,o
function u(e,t){if(e.originalEvent.touches.length>1){return}e.preventDefault()
var o=e.originalEvent.changedTouches[0],u=document.createEvent("MouseEvents")
u.initMouseEvent(t,true,true,window,1,o.screenX,o.screenY,o.clientX,o.clientY,false,false,false,false,0,null)
e.target.dispatchEvent(u)}e._touchStart=function(e){var t=this
if(o||!t._mouseCapture(e.originalEvent.changedTouches[0])){return}o=true
t._touchMoved=false
u(e,"mouseover")
u(e,"mousemove")
u(e,"mousedown")}
e._touchMove=function(e){if(!o){return}this._touchMoved=true
u(e,"mousemove")}
e._touchEnd=function(e){if(!o){return}u(e,"mouseup")
u(e,"mouseout")
if(!this._touchMoved){u(e,"click")}o=false}
e._mouseInit=function(){var e=this
e.element.bind("touchstart",$.proxy(e,"_touchStart")).bind("touchmove",$.proxy(e,"_touchMove")).bind("touchend",$.proxy(e,"_touchEnd"))
t.call(e)}})(jQuery)
});
KAdefine("third_party/javascript-khansrc/classnames/index.js", function(require, module, exports) {
function classNames(){var e=arguments
var o=[]
for(var r=0;r<e.length;r++){var n=e[r]
if(!n){continue}if("string"===typeof n||"number"===typeof n){o.push(n)}else if("object"===typeof n){for(var s in n){if(n.hasOwnProperty(s)&&n[s]){o.push(s)}}}}return o.join(" ")}if(typeof module!=="undefined"&&module.exports){module.exports=classNames}
});
KAdefine("third_party/javascript-khansrc/jquery-timeago/jquery.timeago.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
(function(t){if(typeof define==="function"&&define.amd){define(["jquery"],t)}else{t(jQuery)}})(function($){$.timeago=function(t){if(t instanceof Date){return r(t)}else if(typeof t==="string"){return r($.timeago.parse(t))}else if(typeof t==="number"){return r(new Date(t))}else{return r($.timeago.datetime(t))}}
var t=$.timeago
$.extend($.timeago,{settings:{refreshMillis:6e4,allowPast:true,allowFuture:false,localeTitle:false,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(t){if(!this.settings.allowPast&&!this.settings.allowFuture){throw"timeago allowPast and allowFuture settings can not both be set to false."}var e=this.settings.strings
var a=e.prefixAgo
var i=e.suffixAgo
if(this.settings.allowFuture){if(t<0){a=e.prefixFromNow
i=e.suffixFromNow}}if(!this.settings.allowPast&&t>=0){return this.settings.strings.inPast}var r=Math.abs(t)/1e3
var n=r/60
var o=n/60
var s=o/24
var u=s/365
function l(a,i){var r=$.isFunction(a)?a(i,t):a
var n=e.numbers&&e.numbers[i]||i
return r.replace(/%d/i,n)}var f=r<45&&l(e.seconds,Math.round(r))||r<90&&l(e.minute,1)||n<45&&l(e.minutes,Math.round(n))||n<90&&l(e.hour,1)||o<24&&l(e.hours,Math.round(o))||o<42&&l(e.day,1)||s<30&&l(e.days,Math.round(s))||s<45&&l(e.month,1)||s<365&&l(e.months,Math.round(s/30))||u<1.5&&l(e.year,1)||l(e.years,Math.round(u))
var m=e.wordSeparator||""
if(e.wordSeparator===undefined){m=" "}return $.trim([a,f,i].join(m))},parse:function(t){var e=$.trim(t)
e=e.replace(/\.\d+/,"")
e=e.replace(/-/,"/").replace(/-/,"/")
e=e.replace(/T/," ").replace(/Z/," UTC")
e=e.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2")
e=e.replace(/([\+\-]\d\d)$/," $100")
return new Date(e)},datetime:function(e){var a=t.isTime(e)?$(e).attr("datetime"):$(e).attr("title")
return t.parse(a)},isTime:function(t){return $(t).get(0).tagName.toLowerCase()==="time"}})
var e={init:function(){var e=$.proxy(a,this)
e()
var i=t.settings
if(i.refreshMillis>0){this._timeagoInterval=setInterval(e,i.refreshMillis)}},update:function(e){var i=t.parse(e)
$(this).data("timeago",{datetime:i})
if(t.settings.localeTitle)$(this).attr("title",i.toLocaleString())
a.apply(this)},updateFromDOM:function(){$(this).data("timeago",{datetime:t.parse(t.isTime(this)?$(this).attr("datetime"):$(this).attr("title"))})
a.apply(this)},dispose:function(){if(this._timeagoInterval){window.clearInterval(this._timeagoInterval)
this._timeagoInterval=null}}}
$.fn.timeago=function(t,a){var i=t?e[t]:e.init
if(!i){throw new Error("Unknown function name '"+t+"' for timeago")}this.each(function(){i.call(this,a)})
return this}
function a(){var e=i(this)
var a=t.settings
if(!isNaN(e.datetime)){if(a.cutoff==0||n(e.datetime)<a.cutoff){$(this).text(r(e.datetime))}}return this}function i(e){e=$(e)
if(!e.data("timeago")){e.data("timeago",{datetime:t.datetime(e)})
var a=$.trim(e.text())
if(t.settings.localeTitle){e.attr("title",e.data("timeago").datetime.toLocaleString())}else if(a.length>0&&!(t.isTime(e)&&e.attr("title"))){e.attr("title",a)}}return e.data("timeago")}function r(e){return t.inWords(n(e))}function n(t){return(new Date).getTime()-t.getTime()}document.createElement("abbr")
document.createElement("time")})
__KA_require("./locales/jquery.timeago.en.js");
});
KAdefine("third_party/javascript-khansrc/jquery-timeago/locales/jquery.timeago.en.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../../javascript/node_modules/jquery/index.js");
__KA_require("../jquery.timeago.js");
jQuery.timeago.settings.strings={prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}
});
KAdefine("third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-transition.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../../javascript/node_modules/jquery/index.js");
!function($){"use strict"
$(function(){$.support.transition=function(){var n=function(){var n=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},i
for(i in t){if(n.style[i]!==undefined){return t[i]}}}()
return n&&{end:n}}()})}(window.jQuery)
});
KAdefine("third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-modal.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../../javascript/node_modules/jquery/index.js");
__KA_require("./bootstrap-transition.js");
!function($){"use strict"
var t=function(t,e){this.options=e
this.$element=$(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",$.proxy(this.hide,this))
this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)}
t.prototype={constructor:t,toggle:function(){return this[!this.isShown?"show":"hide"]()},show:function(){var t=this,e=$.Event("show")
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.escape()
this.backdrop(function(){var e=$.support.transition&&t.$element.hasClass("fade")
if(!t.$element.parent().length){t.$element.appendTo(document.body)}t.$element.show()
if(e){t.$element[0].offsetWidth}t.$element.addClass("bootstrap-modal").addClass("in").attr("aria-hidden",false)
t.enforceFocus()
e?t.$element.one($.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault()
var e=this
t=$.Event("hide")
this.$element.trigger(t)
if(!this.isShown||t.isDefaultPrevented())return
this.isShown=false
this.escape()
$(document).off("focusin.modal")
this.$element.removeClass("in").removeClass("bootstrap-modal").attr("aria-hidden",true)
$.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this
$(document).off("focusin.bs.modal").on("focusin.bs.modal",function(e){if(t.$element[0]!==e.target&&!$(e.target).parents(".bootstrap-modal").length){t.$element.focus()}})},escape:function(){var t=this
if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.modal",function(e){e.which==27&&t.hide()})}else if(!this.isShown){this.$element.off("keyup.dismiss.modal")}},hideWithTransition:function(){var t=this,e=setTimeout(function(){t.$element.off($.support.transition.end)
t.hideModal()},500)
this.$element.one($.support.transition.end,function(){clearTimeout(e)
t.hideModal()})},hideModal:function(){var t=this
this.$element.hide()
this.backdrop(function(){t.removeBackdrop()
t.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null},backdrop:function(t){var e=this,i=this.$element.hasClass("fade")?"fade":""
if(this.isShown&&this.options.backdrop){var o=$.support.transition&&i
this.$backdrop=$('<div class="modal-backdrop '+i+'" />').appendTo(document.body)
this.$backdrop.click(this.options.backdrop=="static"?$.proxy(this.$element[0].focus,this.$element[0]):$.proxy(this.hide,this))
if(o)this.$backdrop[0].offsetWidth
this.$backdrop.addClass("in")
if(!t)return
o?this.$backdrop.one($.support.transition.end,t):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in")
$.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one($.support.transition.end,t):t()}else if(t){t()}}}
var e=$.fn.modal
$.fn.modal=function(e){return this.each(function(){var i=$(this),o=i.data("modal"),s=$.extend({},$.fn.modal.defaults,i.data(),typeof e=="object"&&e)
if(!o)i.data("modal",o=new t(this,s))
if(typeof e=="string")o[e]()
else if(s.show)o.show()})}
$.fn.modal.defaults={backdrop:true,keyboard:true,show:true}
$.fn.modal.Constructor=t
$.fn.modal.noConflict=function(){$.fn.modal=e
return this}
$(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var e=$(this),i=e.attr("href"),o=$(e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),s=o.data("modal")?"toggle":$.extend({remote:!/#/.test(i)&&i},o.data(),e.data())
t.preventDefault()
o.modal(s).one("hide",function(){e.focus()})})}(window.jQuery)
});
KAdefine("third_party/javascript-khansrc/Modernizr/modernizr.js", function(__KA_require, __KA_module, __KA_exports) {
(function(e,n,t){var r=[]
var i=[]
var o={_version:"v3.0.0pre",_config:{classPrefix:"modernizr-",enableClasses:true,usePrefixes:true},_q:[],on:function(e,n){setTimeout(function(){n(this[e])},0)},addTest:function(e,n,t){i.push({name:e,fn:n,options:t})},addAsyncTest:function(e){i.push({name:null,fn:e})}}
var s=function(){}
s.prototype=o
s=new s
function a(e,n){return typeof e===n}function f(){var e
var n
var t
var o
var f
var l
var u
for(var d in i){e=[]
n=i[d]
if(n.name){e.push(n.name.toLowerCase())
if(n.options&&n.options.aliases&&n.options.aliases.length){for(t=0;t<n.options.aliases.length;t++){e.push(n.options.aliases[t].toLowerCase())}}}o=a(n.fn,"function")?n.fn():n.fn
for(f=0;f<e.length;f++){l=e[f]
u=l.split(".")
if(u.length===1){s[u[0]]=o}else if(u.length===2){if(s[u[0]]&&!(s[u[0]]instanceof Boolean)){s[u[0]]=new Boolean(s[u[0]])}s[u[0]][u[1]]=o}r.push((o?"":"no-")+u.join("-"))}}}var l=n.documentElement
function u(e){var n=l.className
var t=s._config.classPrefix||""
var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)")
n=n.replace(r,"$1"+t+"js$2")
if(s._config.enableClasses){n+=" "+t+e.join(" "+t)
l.className=n}}var d=o._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[]
o._prefixes=d
var c=function(){return n.createElement.apply(n,arguments)}
function p(){var e=n.body
if(!e){e=c("body")
e.fake=true}return e}function v(e,n,t,r){var i="modernizr"
var o
var s
var a
var f
var u=c("div")
var d=p()
if(parseInt(t,10)){while(t--){a=c("div")
a.id=r?r[t]:i+(t+1)
u.appendChild(a)}}o=["­",'<style id="s',i,'">',e,"</style>"].join("")
u.id=i;(!d.fake?u:d).innerHTML+=o
d.appendChild(u)
if(d.fake){d.style.background=""
d.style.overflow="hidden"
f=l.style.overflow
l.style.overflow="hidden"
l.appendChild(d)}s=n(u,e)
if(d.fake){d.parentNode.removeChild(d)
l.style.overflow=f
l.offsetHeight}else{u.parentNode.removeChild(u)}return!!s}var m=o.testStyles=v
s.addTest("touchevents",function(){var t
if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch){t=true}else{var r=["@media (",d.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("")
m(r,function(e){t=e.offsetTop===9})}return t})
var h="Webkit Moz O ms"
var y=o._config.usePrefixes?h.split(" "):[]
o._cssomPrefixes=y
var g=o._config.usePrefixes?h.toLowerCase().split(" "):[]
o._domPrefixes=g
function x(e,n){return!!~(""+e).indexOf(n)}function C(e,n){return function(){return e.apply(n,arguments)}}function w(e,n,t){var r
for(var i in e){if(e[i]in n){if(t===false)return e[i]
r=n[e[i]]
if(a(r,"function")){return C(r,t||n)}return r}}return false}var _={elem:c("modernizr")}
s._q.push(function(){delete _.elem})
var b={style:_.elem.style}
s._q.unshift(function(){delete b.style})
function S(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function T(n,r){var i=n.length
if("CSS"in e&&"supports"in e.CSS){while(i--){if(e.CSS.supports(S(n[i]),r)){return true}}return false}else if("CSSSupportsRule"in e){var o=[]
while(i--){o.push("("+S(n[i])+":"+r+")")}o=o.join(" or ")
return v("@supports ("+o+") { #modernizr { position: absolute; } }",function(n){return(e.getComputedStyle?getComputedStyle(n,null):n.currentStyle)["position"]=="absolute"})}return t}function j(e,n,r,i){i=a(i,"undefined")?false:i
if(!a(r,"undefined")){var o=T(e,r)
if(!a(o,"undefined")){return o}}var s,f,l,u
if(!b.style){s=true
b.modElem=c("modernizr")
b.style=b.modElem.style}function d(){if(s){delete b.style
delete b.modElem}}for(f in e){l=e[f]
u=b.style[l]
if(!x(l,"-")&&b.style[l]!==t){if(!i&&!a(r,"undefined")){try{b.style[l]=r}catch(p){}if(b.style[l]!=u){d()
return n=="pfx"?l:true}}else{d()
return n=="pfx"?l:true}}}d()
return false}function z(e,n,t,r,i){var o=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+y.join(o+" ")+o).split(" ")
if(a(n,"string")||a(n,"undefined")){return j(s,n,r,i)}else{s=(e+" "+g.join(o+" ")+o).split(" ")
return w(s,n,t)}}o.testAllProps=z
function P(e,n,r){return z(e,t,t,n,r)}o.testAllProps=P
s.addTest("flexbox",P("flexBasis","1px",true))
s.addTest("flexboxtweener",P("flexAlign","end",true))
f()
u(r)
delete o.addTest
delete o.addAsyncTest
for(var k=0;k<s._q.length;k++){s._q[k]()}e.Modernizr=s})(this,document)
__KA_module.exports = Modernizr;
this.Modernizr = Modernizr;
});
KAdefine("javascript/shared-package/local-store.js", function(require, module, exports) {
window.LocalStore={version:4,keyPrefix:"ka",cacheKey:function(e){if(!e){throw new Error("Attempting to use LocalStore without a key")}return[this.keyPrefix,this.version,e].join(":")},get:function(e){if(!this.isEnabled()){return undefined}try{var t=window.localStorage[LocalStore.cacheKey(e)]
if(t){return JSON.parse(t)}}catch(r){}return null},set:function(e,t){if(!this.isEnabled()){throw new Error("LocalStore is not enabled")}var r=JSON.stringify(t),o=LocalStore.cacheKey(e)
try{window.localStorage[o]=r}catch(i){LocalStore.clearAll()}},del:function(e){if(!this.isEnabled()){return}var t=this.cacheKey(e)
if(t in window.localStorage){delete window.localStorage[t]}},isEnabled:function(){var e,t=String(+new Date)
try{window.sessionStorage[t]=t
e=window.sessionStorage[t]===t
window.sessionStorage.removeItem(t)
return e}catch(r){return false}},clearAll:function(){if(!this.isEnabled()){return}try{var e=0
while(e<localStorage.length){var t=localStorage.key(e)
if(t.indexOf(LocalStore.keyPrefix+":")===0){delete localStorage[t]}else{e++}}}catch(r){}}}
module.exports=LocalStore
});
KAdefine("javascript/shared-package/regex-util.js", function(require, module, exports) {
function escapeRegex(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function accentInsensitive(e){e=escapeRegex(e)
var r=function(e){return accentedAndNormalRegexChars[e.toUpperCase()]||e}
e=e.replace(/\S/g,r)
return e}var accentedChars={A:"àá",E:"èéÉ",I:"í",O:"ò-ö",U:"ùü"}
var accentedAndNormalRegexChars=Object.entries(accentedChars).reduce(function(e,r){var a=r[0]
var t=r[1]
e[a]="["+a+""+a.toLowerCase()+""+t+"]"
return e},{})
var accentedRegexChars=Object.entries(accentedChars).reduce(function(e,r){var a=r[0]
var t=r[1]
e[a]="["+t+"]"
return e},{})
var accentedCharRegexes={}
for(var _iterator=Object.entries(accentedRegexChars),_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref
if(_isArray){if(_i>=_iterator.length)break
_ref=_iterator[_i++]}else{_i=_iterator.next()
if(_i.done)break
_ref=_i.value}var c=_ref[0]
var needle=_ref[1]
accentedCharRegexes[c.toLowerCase()]=new RegExp(needle,"g")}var anyAccentNeedles=Object.values(accentedRegexChars).join("|")
var anyAccentedCharRegex=new RegExp(anyAccentNeedles)
module.exports={escapeRegex:escapeRegex,accentInsensitive:accentInsensitive,accentedCharRegexes:accentedCharRegexes,anyAccentedCharRegex:anyAccentedCharRegex}
});
KAdefine("javascript/shared-package/cookies.js", function(require, module, exports) {
var createCookie=function(e,o,r,a){var i
if(r){var t=new Date
t.setTime(t.getTime()+r*24*60*60*1e3)
i="; expires="+t.toGMTString()}else{i=""}if(a){a="; domain="+a}else{a=""}document.cookie=e+"="+o+i+a+"; path=/"}
var readCookie=function(e){var o=e+"="
var r=document.cookie.split(";")
for(var a=0;a<r.length;a++){var i=r[a]
while(i.charAt(0)===" "){i=i.substring(1,i.length)}if(i.indexOf(o)===0){return i.substring(o.length,i.length)}}return null}
var eraseCookie=function(e,o){createCookie(e,"",-1,o)}
var areCookiesEnabled=function(){createCookie("detectCookiesEnabled","KhanAcademy")
if(readCookie("detectCookiesEnabled")==null){return false}eraseCookie("detectCookiesEnabled")
return true}
module.exports={createCookie:createCookie,readCookie:readCookie,eraseCookie:eraseCookie,areCookiesEnabled:areCookiesEnabled}
});
KAdefine("javascript/shared-package/keyhandling.js", function(require, module, exports) {
var Keys={}
Keys.textChangeEvents="oninput"in document.createElement("input")?"input":"keyup paste cut drop"
module.exports=Keys
});
KAdefine("javascript/shared-package/underscore-extensions.js", function(require, module, exports) {
var _=require("underscore")
_.mixin({renameKeys:function(n,r){var e={}
_(n).each(function(n,t){var u=r[t]||t
e[u]=n})
return e},intersperse:function(n,r){if(n.length===0){return[]}return _.reduce(n.slice(1),function(n,e,t){var u=typeof r==="function"?r(t):r
return n.concat([u,e])},[n[0]])},indexBy:function(n,r){var e=null
if(typeof r==="string"){e=function(n){return n[r]}}else{e=r}return _.reduce(n,function(n,r){n[e(r)]=r
return n},{})},findIndex:function(n,r,e){var t
_.any(n,function(n,u,i){if(r.call(e,n,u,i)){t=u
return true}})
return t},matches:function(n){return function(r){if(r===n){return true}for(var e in n){if(n[e]!==r[e]){return false}}return true}},indexWhere:function(n,r){return _.findIndex(n,_.matches(r))}})
});
KAdefine("javascript/shared-package/autolink.js", function(require, module, exports) {
var regex=/\b(?:(?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>&]+|&amp;|\((?:[^\s()<>]|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’&]))/gi
var Autolink={autolink:function(t,e){return t.replace(regex,function(t){if(!/^https?:\/\//.test(t)){t="http://"+t}var r=e?'rel="nofollow"':""
return"<a "+r+' href="'+t+'">'+t+"</a>"})}}
module.exports=Autolink
});
KAdefine("third_party/javascript-khansrc/async/async.js", function(__KA_require, __KA_module, __KA_exports) {
(function(){var e={}
var t=this,n=t.async
if(typeof module!=="undefined"&&module.exports){module.exports=e}else{t.async=e}function i(e){var n=false
return function(){if(n)throw new Error("Callback was already called.")
n=true
e.apply(t,arguments)}}var a=function(e,t){if(e.forEach){return e.forEach(t)}for(var n=0;n<e.length;n+=1){t(e[n],n,e)}}
if(typeof process==="undefined"||!process.nextTick){if(typeof setImmediate==="function"){e.nextTick=function(e){setImmediate(e)}
e.setImmediate=e.nextTick}else{e.nextTick=function(e){setTimeout(e,0)}
e.setImmediate=e.nextTick}}else{e.nextTick=process.nextTick
if(typeof setImmediate!=="undefined"){e.setImmediate=setImmediate}else{e.setImmediate=e.nextTick}}e.until=function(t,n,i){if(!t()){n(function(a){if(a){return i(a)}e.until(t,n,i)})}else{i()}}
e.queue=function(t,n){if(n===undefined){n=1}function s(t,i,s,r){if(i.constructor!==Array){i=[i]}a(i,function(i){var a={data:i,callback:typeof r==="function"?r:null}
if(s){t.tasks.unshift(a)}else{t.tasks.push(a)}if(t.saturated&&t.tasks.length===n){t.saturated()}e.setImmediate(t.process)})}var r=0
var u={tasks:[],concurrency:n,saturated:null,empty:null,drain:null,push:function(e,t){s(u,e,false,t)},unshift:function(e,t){s(u,e,true,t)},process:function(){if(r<u.concurrency&&u.tasks.length){var e=u.tasks.shift()
if(u.empty&&u.tasks.length===0){u.empty()}r+=1
var n=function(){r-=1
if(e.callback){e.callback.apply(e,arguments)}if(u.drain&&u.tasks.length+r===0){u.drain()}u.process()}
var a=i(n)
t(e.data,a)}},length:function(){return u.tasks.length},running:function(){return r}}
return u}})()
__KA_module.exports = async;
this.async = async;
});
KAdefine("javascript/shared-package/analytics.js", function(require, module, exports) {
var $=require("jquery")
var BigBingo=require("./bigbingo.js")
var KA=require("./ka.js")
var VisitTracking=require("./visit-tracking.js")
var escapeRegex=require("./regex-util.js").escapeRegex
var getNow=Date.now||function(){return+new Date}
var currentPath=null
var graphiteTimingMetricsReported={}
var Analytics={init:function(){currentPath=window.location.pathname
BigBingo.markConversion("pageview",{path:currentPath,qs:window.location.search.slice(1),utc:-(new Date).getTimezoneOffset()})},handleRouterNavigation:function(){VisitTracking.trackVisit()
if(currentPath&&currentPath!==window.location.pathname){currentPath=window.location.pathname
BigBingo.markConversion("pageview",{path:currentPath,qs:window.location.search.slice(1),utc:-(new Date).getTimezoneOffset()})
ga("send","pageview",currentPath)}},trackInitialPageLoad:function(t){},trackPageView:function(t,e){},trackActivityBegin:function(t,e){},trackActivityEnd:function(t){},trackSingleEvent:function(t,e){return $.when()},timingStats:{REDIRECT_MS:"stats.time.client.redirect_ms",DNS_MS:"stats.time.client.dns_ms",CONNECT_MS:"stats.time.client.connect_ms",REQUEST_MS:"stats.time.client.request_ms",RESPONSE_MS:"stats.time.client.response_ms",DOCUMENT_MS:"stats.time.client.document_ms",CONTENT_LOADED_MS:"stats.time.client.content_loaded_ms",START_TO_CONTENT_LOADED_MS:"stats.time.client.start_to_content_loaded_ms",RESOURCE_NET_MS:"stats.time.client.resource_net_ms",RESOURCE_MS:"stats.time.client.resource_ms",CLOUDFLARE_JSCSS_NET_MS:"stats.time.client.cloudflare_jscss_net_ms",FASTLY_JSCSS_NET_MS:"stats.time.client.fastly_jscss_net_ms",MAXCDN_JSCSS_NET_MS:"stats.time.client.maxcdn_jscss_net_ms",KA_JSCSS_NET_MS:"stats.time.client.ka_jscss_net_ms",KASTATIC_JSCSS_NET_MS:"stats.time.client.kastatic_jscss_net_ms",MAIN_CONTENT_RENDERED_MS:"stats.time.client.main_content_rendered_ms"},reportTiming:function(){if(!window.performance||!window.performance.timing){return}var t=window.performance.timing
var e=t.navigationStart
var n=t.redirectEnd-t.redirectStart
var s=t.domainLookupEnd-t.domainLookupStart
var a=t.connectEnd-t.connectStart
var i=t.responseStart-t.requestStart
var r=t.responseEnd-t.responseStart
var c=t.domContentLoadedEventStart-t.responseEnd
var _=t.domContentLoadedEventEnd-t.domContentLoadedEventStart
var o=t.domContentLoadedEventEnd-e
var S=require("./ka-client-timing.js")
var m=t.domContentLoadedEventStart
var l={}
if(S.clientHasResourceTimingAPI()){var d=S.getResourceEntries(/\.js$|\.css$/)
l["net"]=S.wallTime(d,m)
if(typeof KA!=="undefined"){var E=new RegExp("^https?://"+escapeRegex(KA.staticHost)+"/.+\\.(?:css|js)$")
var u=S.getResourceEntries(E)
switch(KA.staticHost){case"cdn.kastatic.org":l["cloudflare_jscss_net"]=S.wallTime(u,m)
break
case"fastly.kastatic.org":l["fastly_jscss_net"]=S.wallTime(u,m)
break
case"maxcdn.kastatic.org":l["maxcdn_jscss_net"]=S.wallTime(u,m)
break
case"www.khanacademy.org":l["ka_jscss_net"]=S.wallTime(u,m)
break
default:l["kastatic_jscss_net"]=S.wallTime(u,m)
break}}}var T={}
var g={}
var v=Analytics.timingStats
g[v.REDIRECT_MS]=n
g[v.DNS_MS]=s
g[v.CONNECT_MS]=a
g[v.REQUEST_MS]=i
g[v.RESPONSE_MS]=r
g[v.DOCUMENT_MS]=c
g[v.CONTENT_LOADED_MS]=_
g[v.START_TO_CONTENT_LOADED_MS]=o
if(l){g[v.RESOURCE_NET_MS]=l["net"]
g[v.RESOURCE_MS]=l["total"]
if(l["cloudflare_jscss_net"]!=null){g[v.CLOUDFLARE_JSCSS_NET_MS]=l["cloudflare_jscss_net"]}if(l["fastly_jscss_net"]!=null){g[v.FASTLY_JSCSS_NET_MS]=l["fastly_jscss_net"]}if(l["maxcdn_jscss_net"]!=null){g[v.MAXCDN_JSCSS_NET_MS]=l["maxcdn_jscss_net"]}if(l["ka_jscss_net"]!=null){g[v.KA_JSCSS_NET_MS]=l["ka_jscss_net"]}if(l["kastatic_jscss_net"]!=null){g[v.KASTATIC_JSCSS_NET_MS]=l["kastatic_jscss_net"]}}this._postTimings(T,g)},reportTimingToGraphite:function(t){var e=window.performance
if(!(e&&(e.timing||e.now))){return}if(graphiteTimingMetricsReported[t]){return}graphiteTimingMetricsReported[t]=true
var n={}
n[t]=Math.round(e.now?e.now():getNow()-e.timing.navigationStart)
this._postTimings({},n)},_postTimings:function(t,e){$.post("/api/internal/_mt/elog",babelHelpers._extends({},t,e,{_request_id:KA.requestLogId,_graphite_key_prefix:KA.gaeStatsKeyPrefix,_graphite_keys:Object.keys(e).join()}))}}
module.exports=Analytics
});
KAdefine("javascript/shared-package/ka-client-timing.js", function(require, module, exports) {
var KAClientTiming={clientHasResourceTimingAPI:function(){return Boolean(window.performance&&typeof window.performance.getEntriesByType==="function")},getResourceEntries:function(e){if(!this.clientHasResourceTimingAPI()||!window.performance.timing){return[]}var n=window.performance.getEntriesByType("resource")
if(e){n=n.filter(function(n){return e.test(n.name)})}var r=window.performance.timing.navigationStart
return n.map(function(e){return{name:e.name,startTime:r+e.startTime,endTime:r+e.startTime+e.duration}})},wallTime:function(e,n){n=n||Number.MAX_VALUE
e=(e||[]).sort(function(e,n){return e.startTime-n.startTime})
var r=0
var t=0
var i=0
e.forEach(function(e){var a=e.startTime
var o=e.endTime
if(o>n){return}if(a<=i){i=Math.max(i,o)}else{r+=i-t
t=a
i=o}})
r+=i-t
return Math.round(r)}}
module.exports=KAClientTiming
});
KAdefine("javascript/shared-package/notifications-loader.js", function(require, module, exports) {
var $=require("jquery")
var updateDocumentTitle=require("./update-document-title.js")
var load=function(n){require.async(["../notifications-package/notifications.js","package!notifications.css"],n)}
var NotificationsLoader={_loaded:false,init:function(){$("#user-info").on("open","#user-notifications",function(n){NotificationsLoader.load()
NotificationsLoader.clearBrandNewCount()}).on("click",".user-notifications-toggle",function(n){return false})},load:function(){if(this._loaded){return}load(function(n){n.load()})
this._loaded=true},loadFromAPI:function(n){load(function(t){var e=n["readable"],o=n["urgent"],i=n["continueUrl"]
if(e.length){t.renderFromAPI(e)
NotificationsLoader.incrementBrandNewCount(e.length)}if(o.length){t.renderUrgent(o[0],i)}})},loadUrgent:function(n,t){load(function(e){e.renderUrgent(n,t)})},clearBrandNewCount:function(){var n=$(".notification-bubble")
if(parseInt(n.text())!==0){$(".notification-bubble").text("0").hide().parents(".icon").removeClass("brand-new")
updateDocumentTitle({noteCount:0})
load(function(n){n.clearBrandNewCount()})}},incrementBrandNewCount:function(n){var t=$(".notification-bubble")
var e=parseInt(t.text())+n
t.text(e).show().parents(".icon-bell-alt").addClass("brand-new")
updateDocumentTitle({noteCount:e})}}
module.exports=NotificationsLoader
});
KAdefine("javascript/shared-package/issue-loader.js", function(require, module, exports) {
var $=require("jquery")
var IssueLoader={init:function(){$(".issueLoader").on("mouseover",function(s){require.async(["../issues-package/issues.jsx","package!issues.css"])})
$(".report-issue").on("click",function(s){IssueLoader.load(s)
return false})},load:function(s){require.async(["../issues-package/issues.jsx","package!issues.css"],function(e){var a=e.toggleReportIssueModal
a($(s.target).data("report-type"))})}}
module.exports=IssueLoader
});
KAdefine("javascript/shared-package/typeahead-loader.js", function(require, module, exports) {
var $=require("jquery")
var KA=require("./ka.js")
var suggestionsDeferred=null
var requireSuggestions=function(){if(!suggestionsDeferred){var e="/api/internal/search/suggestions_index?v=1"
suggestionsDeferred=$.getJSON(e)}return suggestionsDeferred}
var loadJavaScript=function(){require.async(["../typeahead-package/search-box.jsx","../typeahead-package/build-mission-source.js","package!typeahead.css"],function(){})}
var init=function(){if(!KA.INITIALIZED){return}setTimeout(function(){loadJavaScript()
requireSuggestions()},2e3)}
module.exports={init:init}
});
KAdefine("javascript/shared-package/api-action-results.js", function(require, module, exports) {
var $=require("jquery")
var jQuery=require("jquery")
var KA=require("./ka.js")
var NotificationsLoader=require("./notifications-loader.js")
var Cookies=require("./cookies.js")
var APIActionResults={init:function(){this.hooks=[]
$(document).ajaxComplete(function(e,xhr,settings){if(xhr&&xhr.getResponseHeader("X-KA-API-Version-Mismatch")){apiVersionMismatch()}if(xhr&&xhr.getResponseHeader("X-KA-API-Response")&&xhr.responseText){if(xhr.responseText.indexOf("action_results")===-1&&xhr.responseText.indexOf("actionResults")===-1){return}var result
try{eval("result = "+xhr.responseText)}catch(err){return}if(result){var action=result["action_results"]||result["actionResults"]
if(action){APIActionResults.respondToAction(action)}}}})
jQuery.ajaxSetup({beforeSend:function(e,r){if(typeof KA!=="undefined"&&KA.language&&r&&r.url&&!/[?&]lang=/.test(r.url)&&(r.url.indexOf("/api/")>-1||r.url.indexOf("/profile/graph")>-1||r.url.indexOf("/goals/new")>-1||r.url.indexOf("/khan-exercises/exercises/")>-1)){r.url=r.url+(/\?/.test(r.url)?"&":"?")+"lang="+KA.language}if(r&&r.url&&r.url.indexOf("/api/")>-1){if(r.cache===undefined&&!/[\?&]v=/.test(r.url)){var t=jQuery.now(),i=r.url.replace(/([?&])_=[^&]*/,"$1_="+t)
r.url=i+(i===r.url?(/\?/.test(r.url)?"&":"?")+"_="+t:"")}var o=Cookies.readCookie("fkey")
if(o){e.setRequestHeader("X-KA-FKey",o)}else{apiVersionMismatch()
if(r.error){r.error()}return false}}}})},toCamelCase:function(e){return e.replace(/_([a-z])/g,function(e,r){return r.toUpperCase()})},respondToAction:function(e){$(APIActionResults.hooks).each(function(r,t){if(typeof e[t.prop]!=="undefined"){t.fxn(e[t.prop])}})},register:function(e,r){this.hooks[this.hooks.length]={prop:e,fxn:r}
this.hooks[this.hooks.length]={prop:APIActionResults.toCamelCase(e),fxn:r}}}
var apiVersionMismatch=function(){NotificationsLoader.loadUrgent({class_:["ApiVersionMismatchNotification"]})}
APIActionResults.addDefaultHooks=function(){if(window.ScratchpadUI&&ScratchpadUI.trusted&&window!==top){return}APIActionResults.register("notifications_added",NotificationsLoader.loadFromAPI.bind(NotificationsLoader))
APIActionResults.register("user_profile",function(e){var r={}
for(var t in e){if(e.hasOwnProperty(t)){r[APIActionResults.toCamelCase(t)]=e[t]}}e=r
KA.setUserProfile(e)
var i=require("../shared-package/nav-header.js")
i.renderUserDropdown()
i.renderNotificationsDropdown()})}
module.exports=APIActionResults
});
KAdefine("javascript/shared-package/facebookutil.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
var $=require("jquery")
var icu=require("icu")
var Analytics=require("../shared-package/analytics.js")
var Cookies=require("./cookies.js")
var KA=require("./ka.js")
var LocalStore=require("./local-store.js")
var FacebookUtil={init:function(){if(!KA.FB_APP_ID){return}window.fbAsyncInit=function(){FB.init({version:"v2.0",appId:KA.FB_APP_ID,status:false,cookie:true,xfbml:true,oauth:true})
if(FacebookUtil.isUsingFbLogin()){FB.getLoginStatus(function(e){if(e.authResponse){FacebookUtil.fixMissingCookie(e.authResponse)}else{Cookies.eraseCookie("fbl")}})}FB.Event.subscribe("auth.login",function(e){FacebookUtil.setFacebookID(e.authResponse.userID)})
FB.Event.subscribe("xfbml.render",function(e){var o=$("#facepile-holder")
var i=22
if(o.height()<=i*1.5){o.find("iframe").attr("tabindex",-1)
return}o.animate({opacity:1,duration:200,easing:"easeInOutCubic"})
Analytics.trackSingleEvent("Load Facepile")})
FacebookUtil.fbReadyDeferred_.resolve()}
$("#user-info").on("click","#page_logout",function(e){var o=window.location.hostname
if(o.indexOf("local.")===0){o=o.substring(6)}var i=FacebookUtil.isUsingFbLogin()
Cookies.eraseCookie("fbsr_"+KA.FB_APP_ID)
Cookies.eraseCookie("fbsr_"+KA.FB_APP_ID,"."+o)
Cookies.eraseCookie("fbm_"+KA.FB_APP_ID)
Cookies.eraseCookie("fbm_"+KA.FB_APP_ID,"."+o)
Cookies.eraseCookie("fbl")
if(i){try{FB.logout(function(){window.location=$("#page_logout").attr("href")})
return false}catch(t){window.location=$("#page_logout").attr("href")}}})
if(FacebookUtil.isUsingFbLogin()){FacebookUtil.loadFb()}},fbLoadStarted_:false,loadFb:function(){if(this.fbLoadStarted_){return}this.fbLoadStarted_=true
var e=document.createElement("script")
e.src=document.location.protocol+"//connect.facebook.net/"+icu.getLocale().replace(/-/g,"_")+"/sdk.js"
var o=document.getElementById("fb-root")
if(o){o.appendChild(e)}},fbReadyDeferred_:new $.Deferred,runOnFbReady:function(e){this.loadFb()
this.fbReadyDeferred_.done(e)},isUsingFbLoginCached_:undefined,facebookID:undefined,getFacebookID:function(){if(KA.getUserProfile()&&FacebookUtil.isUsingFbLogin()){return FacebookUtil.facebookID||LocalStore.get("facebookID")}return null},setFacebookID:function(e){FacebookUtil.facebookID=e
LocalStore.set("facebookID",e)},isUsingFbLogin:function(){if(FacebookUtil.isUsingFbLoginCached_===undefined){FacebookUtil.isUsingFbLoginCached_=!!Cookies.readCookie("fbl")}return FacebookUtil.isUsingFbLoginCached_},markUsingFbLogin:function(){Cookies.createCookie("fbl",true,30)},setPublishStreamPermission:function(e){var o=LocalStore.get("fbPublishStream")
if(!o){o={}}var i=FacebookUtil.getFacebookID()
if(i){if(e){o[i]=true}else{delete o[i]}LocalStore.set("fbPublishStream",o)}},hasPublishStreamPermission:function(){var e=LocalStore.get("fbPublishStream")
if(e&&e[FacebookUtil.getFacebookID()]){return true}return false},fixMissingCookie:function(e){if(Cookies.readCookie("fbsr_"+KA.FB_APP_ID)){return}if(e&&e.signedRequest){Cookies.createCookie("fbsr_"+KA.FB_APP_ID,e.signedRequest)}}}
module.exports=FacebookUtil
});
KAdefine("javascript/shared-package/social.js", function(require, module, exports) {
var $=require("jquery")
var i18n=require("./i18n.js")
var FacebookUtil=require("./facebookutil.js")
var Social={init:function(){$("body").on("click",".twitterShare",function(){Social.openTwitterPopup(this.href)
return false})},prepFacebook:function(){FacebookUtil.runOnFbReady(function(){})},facebookShare:function(e,t,a){FacebookUtil.runOnFbReady(function(){FB.ui({method:"feed",name:e,link:t,picture:a,caption:"www.khanacademy.org"})})
return false},facebookVideo:function(e,t,a){FacebookUtil.runOnFbReady(function(){FB.ui({method:"feed",name:e,link:"http://www.khanacademy.org/"+a,picture:"http://www.khanacademy.org/images/handtreehorizontal_facebook.png",caption:"www.khanacademy.org",description:t,message:i18n._("I just learned about %(title)s on Khan Academy",{title:e})})})
return false},formatMailtoUrl:function(e){var t=e.subject
var a=e.body
var n="mailto:"+"?Subject="+encodeURIComponent(t)+"&Body="+encodeURIComponent(a)
return n.replace(/\s/g,"+")},emailBadge:function(e,t){return Social.formatMailtoUrl({subject:i18n._("I just earned the %(badge)s badge on Khan Academy!",{badge:t}),body:i18n._("Check it out at %(url)s.",{url:e})})},openTwitterPopup:function(e){var t=550,a=370,n=($(window).width()-t)/2,o=($(window).height()-a)/2,r="status=1"+",width="+t+",height="+a+",top="+o+",left="+n
window.open(e,"twitter",r)},formatTwitterShareUrl:function(e){var t=e.url
var a=e.text
var n="http://twitter.com/intent/tweet?"+"url="+encodeURIComponent(t)+"&text="+encodeURIComponent(a)+"&related=khanacademy:Khan Academy"
return n.replace(/\s/g,"+")},twitterBadge:function(e,t){return Social.formatTwitterShareUrl({url:e,text:i18n._("I just earned the %(badge)s badge on @khanacademy! Check it out at",{badge:t})})}}
module.exports=Social
});
KAdefine("javascript/shared-package/promos.js", function(require, module, exports) {
var $=require("jquery")
var Promos={}
Promos.cache_={}
Promos.hasUserSeen=function(o,e,r){if(o in Promos.cache_){e.call(r,Promos.cache_[o])
return}$.ajax({type:"GET",url:"/api/internal/user/promo/"+encodeURIComponent(o),success:function(n){Promos.cache_[o]=n
e.call(r,n)},error:function(){e.call(r,true)}})}
Promos.markAsSeen=function(o){$.ajax({type:"POST",url:"/api/internal/user/promo/"+encodeURIComponent(o)})
Promos.cache_[o]=true}
module.exports=Promos
});
KAdefine("javascript/shared-package/bigbingo.js", function(require, module, exports) {
var $=require("jquery")
$.postJSON=function(n,i){return $.ajax({type:"POST",url:n,contentType:"application/json",data:JSON.stringify(i)})}
var BigBingo={markConversions:function(n){return $.post("/api/internal/_mt/bigbingo/mark_conversions",{conversion_ids:n.join(",")})},markConversionsWithExtras:function(n){return $.post("/api/internal/_mt/bigbingo/mark_conversions",{conversions:JSON.stringify(n)})},markConversionsWithProduct:function(n,i){var o="/api/internal/_mt/bigbingo/mark_conversions_with_product"+"?topic_slug="+encodeURIComponent(n)
return $.postJSON(o,{conversions:i})},markConversion:function(n,i){if(i){return this.markConversionsWithExtras([{id:n,extra:i}])}else{return this.markConversions([n])}},abTest:function(n){return $.post("/api/internal/bigbingo/ab_test",{experiment_id:n})}}
window.BigBingo=BigBingo
module.exports=BigBingo
});
KAdefine("javascript/shared-package/throbber-grid.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(b,r,l,o,c){l=l||b.helpers
var i="",s,d=this
i+='<div class="throbber-grid">\n    '
i+='\n    <!--[if lte IE 9]>\n    <img class="throbber-fallback" src="/images/throbber-full.gif" />\n    <![endif]-->\n    <div class="throbber-row clearfix">\n         <div class="block-0 throbber-block"></div>\n         <div class="block-1 throbber-block"></div>\n         <div class="block-2 throbber-block"></div>\n    </div>\n    <div class="throbber-row clearfix">\n         <div class="block-7 throbber-block"></div>\n         <div class="block-8 throbber-block"></div>\n         <div class="block-3 throbber-block"></div>\n    </div>\n    <div class="throbber-row clearfix">\n         <div class="block-6 throbber-block"></div>\n         <div class="block-5 throbber-block"></div>\n         <div class="block-4 throbber-block"></div>\n    </div>\n</div>'
return i})
module.exports=t
});
KAdefine("javascript/shared-package/user-dropdown.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,a,e,o,r){e=e||n.helpers
var i="",l,s,t,f,c=this,p="function",h=e.blockHelperMissing,u=e.helperMissing,d=void 0,m=this.escapeExpression
function g(n,a){var o="",r
o+='<a class="nav-link log-in-link" href="#">'
t=e["_"]
r=t||n["_"]
f=c.program(2,_,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(n,f)}else{r=h.call(n,r,f)}if(r||r===0){o+=r}o+="</a>"
return o}function _(n,a){return"Log in"}function v(n,a){return"with-coach-links"}function w(n,a){var o="",r
o+='\n        <li><a href="'
t=e.signUpUrl
r=t||n.signUpUrl
if(typeof r===p){r=r.call(n,{hash:{}})}else if(r===d){r=u.call(n,"signUpUrl",{hash:{}})}o+=m(r)+'" class="name-dropdown__link primary signup-to-claim">'
t=e["_"]
r=t||n["_"]
f=c.program(7,k,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(n,f)}else{r=h.call(n,r,f)}if(r||r===0){o+=r}o+="</a></li>\n        "
return o}function k(n,a){return"Sign up to claim your points"}function y(n,a){return"Profile"}function S(n,a){var o="",r
o+='\n            <li><a href="/?learn=1" class="name-dropdown__link dropdown-learning-home-link">\n                '
t=e["_"]
r=t||n["_"]
f=c.program(12,L,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(n,f)}else{r=h.call(n,r,f)}if(r||r===0){o+=r}o+="\n            </a></li>\n        "
return o}function L(n,a){return"Learning home"}function U(n,a){var o="",r,i
o+='\n            <li><a href="/coach/dashboard" class="name-dropdown__link your-students-link students-dropdown-link">\n                '
t=e.hasStudents
r=t||n.hasStudents
i=e["if"]
f=c.program(15,C,a)
f.hash={}
f.fn=f
f.inverse=c.program(18,H,a)
r=i.call(n,r,f)
if(r||r===0){o+=r}o+='\n            </a></li>\n\n            <li><a href="/parent" class="name-dropdown__link name-dropdown__separator">\n            '
t=e.hasChildren
r=t||n.hasChildren
i=e["if"]
f=c.program(21,R,a)
f.hash={}
f.fn=f
f.inverse=c.program(24,A,a)
r=i.call(n,r,f)
if(r||r===0){o+=r}o+="\n            </a></li>\n        "
return o}function C(n,a){var o="",r
o+="\n                    "
t=e["_"]
r=t||n["_"]
f=c.program(16,b,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(n,f)}else{r=h.call(n,r,f)}if(r||r===0){o+=r}o+="\n                "
return o}function b(n,a){return"Your students"}function H(n,a){var o="",r
o+="\n                    "
t=e["_"]
r=t||n["_"]
f=c.program(19,P,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(n,f)}else{r=h.call(n,r,f)}if(r||r===0){o+=r}o+="\n                "
return o}function P(n,a){return"Add students"}function R(n,a){var o="",r
o+="\n                "
t=e["_"]
r=t||n["_"]
f=c.program(22,x,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(n,f)}else{r=h.call(n,r,f)}if(r||r===0){o+=r}o+="\n            "
return o}function x(n,a){return"Your children"}function A(n,a){var o="",r
o+="\n                "
t=e["_"]
r=t||n["_"]
f=c.program(25,M,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(n,f)}else{r=h.call(n,r,f)}if(r||r===0){o+=r}o+="\n            "
return o}function M(n,a){return"Add children"}function T(n,a){var o="",r
o+='\n        <li><a href="/settings/account" class="name-dropdown__link">'
t=e["_"]
r=t||n["_"]
f=c.program(28,Y,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(n,f)}else{r=h.call(n,r,f)}if(r||r===0){o+=r}o+="</a></li>\n        "
return o}function Y(n,a){return"Settings"}function q(n,a){return"Help"}function z(n,a){return"Log out"}t=e.isPhantom
l=t||a.isPhantom
s=e["if"]
f=c.program(1,g,r)
f.hash={}
f.fn=f
f.inverse=c.noop
l=s.call(a,l,f)
if(l||l===0){i+=l}i+='<span\n    id="user-notifications">'
i+='</span>\n\n<span class="name-dropdown dropdown">\n    <a href="#" class="username_and_notification dropdown-toggle">\n        <img class="user-avatar" src="'
t=e.avatarSrc
l=t||a.avatarSrc
if(typeof l===p){l=l.call(a,{hash:{}})}else if(l===d){l=u.call(a,"avatarSrc",{hash:{}})}i+=m(l)+'" alt="">\n        <span class="user-name">'
t=e.nickname
l=t||a.nickname
if(typeof l===p){l=l.call(a,{hash:{}})}else if(l===d){l=u.call(a,"nickname",{hash:{}})}i+=m(l)+'</span>\n        <i class="icon-caret-down" aria-hidden="true"></i>\n    </a>\n\n    <ul class="dropdown-menu no-submenus username-dropdown '
t=e.showCoachingLinks
l=t||a.showCoachingLinks
s=e["if"]
f=c.program(4,v,r)
f.hash={}
f.fn=f
f.inverse=c.noop
l=s.call(a,l,f)
if(l||l===0){i+=l}i+='">\n\n        '
t=e.showSignUpToSave
l=t||a.showSignUpToSave
s=e["if"]
f=c.program(6,w,r)
f.hash={}
f.fn=f
f.inverse=c.noop
l=s.call(a,l,f)
if(l||l===0){i+=l}i+='\n\n        <li><a href="'
t=e.profileRoot
l=t||a.profileRoot
if(typeof l===p){l=l.call(a,{hash:{}})}else if(l===d){l=u.call(a,"profileRoot",{hash:{}})}i+=m(l)+'" class="name-dropdown__link name-dropdown__separator">'
t=e["_"]
l=t||a["_"]
f=c.program(9,y,r)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===p){l=l.call(a,f)}else{l=h.call(a,l,f)}if(l||l===0){i+=l}i+="</a></li>\n\n        "
t=e.showLearningHome
l=t||a.showLearningHome
s=e["if"]
f=c.program(11,S,r)
f.hash={}
f.fn=f
f.inverse=c.noop
l=s.call(a,l,f)
if(l||l===0){i+=l}i+="\n\n        "
t=e.showCoachingLinks
l=t||a.showCoachingLinks
s=e["if"]
f=c.program(14,U,r)
f.hash={}
f.fn=f
f.inverse=c.noop
l=s.call(a,l,f)
if(l||l===0){i+=l}i+="\n\n        "
t=e.showSettings
l=t||a.showSettings
s=e["if"]
f=c.program(27,T,r)
f.hash={}
f.fn=f
f.inverse=c.noop
l=s.call(a,l,f)
if(l||l===0){i+=l}i+='\n\n        <li><a href="https://khanacademy.zendesk.com" class="name-dropdown__link name-dropdown__separator">'
t=e["_"]
l=t||a["_"]
f=c.program(30,q,r)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===p){l=l.call(a,f)}else{l=h.call(a,l,f)}if(l||l===0){i+=l}i+='</a></li>\n\n        <!-- Facebook\'s JS logout requires the page_logout ID -->\n        <li><a id="page_logout" href="#" class="name-dropdown__link">'
t=e["_"]
l=t||a["_"]
f=c.program(32,z,r)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===p){l=l.call(a,f)}else{l=h.call(a,l,f)}if(l||l===0){i+=l}i+="</a></li>\n    </ul>\n</span>\n"
return i})
module.exports=t
});
KAdefine("javascript/shared-package/notifications-dropdown.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,o,i,e,l){i=i||n.helpers
var a="",s,r,t,c,f=this,u="function",p=i.helperMissing,h=void 0,d=this.escapeExpression,g=i.blockHelperMissing
function v(n,o){return"Notifications"}function m(n,o){var e="",l
e+=" ("
t=i["_"]
l=t||n["_"]
c=f.program(4,y,o)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof l===u){l=l.call(n,c)}else{l=g.call(n,l,c)}if(l||l===0){e+=l}e+=")"
return e}function y(n,o){var e="",l
t=i.count
l=t||n.count
if(typeof l===u){l=l.call(n,{hash:{}})}else if(l===h){l=p.call(n,"count",{hash:{}})}e+=d(l)+" new"
return e}function _(n,o){return"Notifications"}function b(n,o){var e="",l
e+=" ("
t=i["_"]
l=t||n["_"]
c=f.program(9,w,o)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof l===u){l=l.call(n,c)}else{l=g.call(n,l,c)}if(l||l===0){e+=l}e+=")"
return e}function w(n,o){var e="",l
t=i.count
l=t||n.count
if(typeof l===u){l=l.call(n,{hash:{}})}else if(l===h){l=p.call(n,"count",{hash:{}})}e+=d(l)+" new"
return e}function N(n,o){return"brand-new"}function k(n,o){return'style="display:none;"'}function x(n,o){return"Notifications"}function H(n,o){return"No notifications. You can get back to learning!"}a+='<span class="dropdown">\n    <a class="user-notifications-toggle dropdown-toggle nav-link user-notification" href="#" title="'
t=i["_"]
s=t||o["_"]
c=f.program(1,v,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof s===u){s=s.call(o,c)}else{s=g.call(o,s,c)}if(s||s===0){a+=s}t=i.count
s=t||o.count
r=i["if"]
c=f.program(3,m,l)
c.hash={}
c.fn=c
c.inverse=f.noop
s=r.call(o,s,c)
if(s||s===0){a+=s}a+='">\n\n        <div class="sr-only">\n            '
t=i["_"]
s=t||o["_"]
c=f.program(6,_,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof s===u){s=s.call(o,c)}else{s=g.call(o,s,c)}if(s||s===0){a+=s}a+="\n            "
t=i.count
s=t||o.count
r=i["if"]
c=f.program(8,b,l)
c.hash={}
c.fn=c
c.inverse=f.noop
s=r.call(o,s,c)
if(s||s===0){a+=s}a+='\n        </div>\n\n        <span aria-hidden="true">\n            <i class="icon-bell-alt icon-large '
t=i.count
s=t||o.count
r=i["if"]
c=f.program(11,N,l)
c.hash={}
c.fn=c
c.inverse=f.noop
s=r.call(o,s,c)
if(s||s===0){a+=s}a+='">\n                <span class="notification-bubble" '
t=i.count
s=t||o.count
r=i.unless
c=f.program(13,k,l)
c.hash={}
c.fn=c
c.inverse=f.noop
s=r.call(o,s,c)
if(s||s===0){a+=s}a+=">"
t=i.count
s=t||o.count
if(typeof s===u){s=s.call(o,{hash:{}})}else if(s===h){s=p.call(o,"count",{hash:{}})}a+=d(s)+'</span>\n            </i>\n            <i class="icon-caret-down"></i>\n        </span>\n    </a>\n    <ul class="outer-dropdown-menu dropdown-menu unloaded">\n        <li class="notifications-heading">'
t=i["_"]
s=t||o["_"]
c=f.program(15,x,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof s===u){s=s.call(o,c)}else{s=g.call(o,s,c)}if(s||s===0){a+=s}a+='</li>\n        <li class="antiscroll-wrap">\n            <ul class="inner-dropdown-menu antiscroll-inner dropdown-menu no-submenus">\n                <li class="loading"><img src="/images/throbber.gif"></li>\n                <li class="empty" style="display: none;"><div>'
t=i["_"]
s=t||o["_"]
c=f.program(17,H,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof s===u){s=s.call(o,c)}else{s=g.call(o,s,c)}if(s||s===0){a+=s}a+="</div></li>\n            </ul>\n        </li>\n    </ul>\n</span>\n"
return a})
module.exports=t
});
KAdefine("javascript/shared-package/share-links.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,a,i,n,l){i=i||e.helpers
var s="",t,r,o,c=this,f="function",h=i.helperMissing,p=void 0,m=this.escapeExpression,v=i.blockHelperMissing
function k(e,a){return"Email"}function d(e,a){return"Tweet"}function u(e,a){return"Share"}s+='<div class="share-links" data-badge-name="'
r=i.name
t=r||a.name
if(typeof t===f){t=t.call(a,{hash:{}})}else if(t===p){t=h.call(a,"name",{hash:{}})}s+=m(t)+'">\n    <a class="emailShare" href="'
r=i.emailLink
t=r||a.emailLink
if(typeof t===f){t=t.call(a,{hash:{}})}else if(t===p){t=h.call(a,"emailLink",{hash:{}})}s+=m(t)+'" target="_blank">\n        <i class="icon-envelope"></i>\n        '
r=i["_"]
t=r||a["_"]
o=c.program(1,k,l)
o.hash={}
o.fn=o
o.inverse=c.noop
if(r&&typeof t===f){t=t.call(a,o)}else{t=v.call(a,t,o)}if(t||t===0){s+=t}s+='\n    </a>\n    <a class="twitterShare" href="'
r=i.twitterLink
t=r||a.twitterLink
if(typeof t===f){t=t.call(a,{hash:{}})}else if(t===p){t=h.call(a,"twitterLink",{hash:{}})}s+=m(t)+'" target="_blank">\n        <i class="icon-twitter"></i>\n        '
r=i["_"]
t=r||a["_"]
o=c.program(3,d,l)
o.hash={}
o.fn=o
o.inverse=c.noop
if(r&&typeof t===f){t=t.call(a,o)}else{t=v.call(a,t,o)}if(t||t===0){s+=t}s+='\n    </a>\n    <a class="facebookShare" href="javascript:void 0">\n        <i class="icon-facebook"></i>\n        '
r=i["_"]
t=r||a["_"]
o=c.program(5,u,l)
o.hash={}
o.fn=o
o.inverse=c.noop
if(r&&typeof t===f){t=t.call(a,o)}else{t=v.call(a,t,o)}if(t||t===0){s+=t}s+='\n    </a>\n	<div class="clearFloat"></div>\n</div>\n'
return s})
module.exports=t
});
KAdefine("javascript/shared-package/badge.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,a,i,n,t){i=i||e.helpers
var s="",l,c,d,o,r=this,h="function",f=i.helperMissing,p=void 0,v=this.escapeExpression
function g(e,a){return"achievement-badge-owned"}function m(e,a){var n="",t
n+='<div class="energy-points-badge">'
d=i.points
t=d||e.points
if(typeof t===h){t=t.call(e,{hash:{}})}else if(t===p){t=f.call(e,"points",{hash:{}})}n+=v(t)+"</div>"
return n}s+='<div class="achievement-badge category-'
d=i.badgeCategory
l=d||a.badgeCategory
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===p){l=f.call(a,"badgeCategory",{hash:{}})}s+=v(l)+" "
d=i.isOwned
l=d||a.isOwned
c=i["if"]
o=r.program(1,g,t)
o.hash={}
o.fn=o
o.inverse=r.noop
l=c.call(a,l,o)
if(l||l===0){s+=l}s+='" title="'
d=i.translatedSafeExtendedDescription
l=d||a.translatedSafeExtendedDescription
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===p){l=f.call(a,"translatedSafeExtendedDescription",{hash:{}})}s+=v(l)+'">\n  <div id="outline-box">\n  <img src="'
d=i.iconSrc
l=d||a.iconSrc
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===p){l=f.call(a,"iconSrc",{hash:{}})}s+=v(l)+'" id="badge-icon"/>\n  <div class="achievement-text">\n  <div class="achievement-title">'
d=i.translatedDescription
l=d||a.translatedDescription
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===p){l=f.call(a,"translatedDescription",{hash:{}})}s+=v(l)+'</div>\n  <div class="achievement-desc achievement-desc-no-count">\n    '
d=i.translatedSafeExtendedDescription
l=d||a.translatedSafeExtendedDescription
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===p){l=f.call(a,"translatedSafeExtendedDescription",{hash:{}})}s+=v(l)+"\n  </div>\n  </div>\n  "
d=i.points
l=d||a.points
c=i["if"]
o=r.program(3,m,t)
o.hash={}
o.fn=o
o.inverse=r.noop
l=c.call(a,l,o)
if(l||l===0){s+=l}s+="\n  </div>\n</div>\n"
return s})
module.exports=t
});
KAdefine("javascript/shared-package/progress-icon.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,s,a,l,t){a=a||e.helpers
var h="",i,n,p=this,r="function",o=a.helperMissing,c=void 0,f=this.escapeExpression
h+='\n<span class="progress-icon icon-'
n=a.type
i=n||s.type
if(typeof i===r){i=i.call(s,{hash:{}})}else if(i===c){i=o.call(s,"type",{hash:{}})}h+=f(i)+"-node "
n=a.key
i=n||s.key
if(typeof i===r){i=i.call(s,{hash:{}})}else if(i===c){i=o.call(s,"key",{hash:{}})}h+=f(i)+" "
n=a.extraClasses
i=n||s.extraClasses
if(typeof i===r){i=i.call(s,{hash:{}})}else if(i===c){i=o.call(s,"extraClasses",{hash:{}})}h+=f(i)+'"></span>\n\n'
return h})
module.exports=t
});
KAdefine("javascript/shared-package/progress-icon-subway.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,s,i,l,a){i=i||e.helpers
var t="",p,h,n=this,c="function",d=i.helperMissing,y=void 0,o=this.escapeExpression
t+='<div class="subway-icon '
h=i.key
p=h||s.key
if(typeof p===c){p=p.call(s,{hash:{}})}else if(p===y){p=d.call(s,"key",{hash:{}})}t+=o(p)+'">\n    <div class="pipe"></div>\n    <div class="pipe completed"></div>\n    <div class="status '
h=i.key
p=h||s.key
if(typeof p===c){p=p.call(s,{hash:{}})}else if(p===y){p=d.call(s,"key",{hash:{}})}t+=o(p)+" "
h=i.type
p=h||s.type
if(typeof p===c){p=p.call(s,{hash:{}})}else if(p===y){p=d.call(s,"type",{hash:{}})}t+=o(p)+'-node">\n    </div>\n</div>\n'
return t})
module.exports=t
});
KAdefine("javascript/shared-package/navbar.js", function(require, module, exports) {
var $=require("jquery")
var init=function(){var e=$(".homepage-header-ycla")
if($(window).width()>480){e.find("#header-logo, .watch-link, #user-info").on("mouseenter focus",function(){e.removeClass("header-transparent")})
e.on("mouseleave blur",function(){var a=!e.is(".header-active")&&e.find(".open").length===0
if(a){setTimeout(function(){if(!e.is(":hover")){e.addClass("header-transparent")}},1e3)}}).click(function(){e.addClass("header-active")})
$(window).click(function(a){var n=$(a.target).parents(".homepage-header-ycla")
if(n.length===0){e.removeClass("header-active").addClass("header-transparent")}})}}
module.exports=init
});
KAdefine("javascript/shared-package/video-transcript.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(t,a,e,s,i){e=e||t.helpers
var l="",n,r,o,f,h=this,m="function",p=e.helperMissing,c=void 0,u=this.escapeExpression
function d(t,a){var s="",i,l
s+="\n            "
o=e.kaIsValid
i=o||t.kaIsValid
l=e["if"]
f=h.program(2,v,a)
f.hash={}
f.fn=f
f.inverse=h.noop
i=l.call(t,i,f)
if(i||i===0){s+=i}s+="\n        "
return s}function v(t,a){var s="",i,l
s+='\n            <li data-milliseconds="'
o=e.startTime
i=o||t.startTime
if(typeof i===m){i=i.call(t,{hash:{}})}else if(i===c){i=p.call(t,"startTime",{hash:{}})}s+=u(i)+'">\n                <a href="javascript:void(0)" data-fmttime="'
o=e.startTime
i=o||t.startTime
o=e.formatTimestamp
l=o||t.formatTimestamp
if(typeof l===m){i=l.call(t,i,{hash:{}})}else if(l===c){i=p.call(t,"formatTimestamp",i,{hash:{}})}else{i=l}s+=u(i)+'">'
o=e.text
i=o||t.text
if(typeof i===m){i=i.call(t,{hash:{}})}else if(i===c){i=p.call(t,"text",{hash:{}})}s+=u(i)+"</a>\n            </li>\n            "
return s}l+='<div class="subtitles-container desktop-only">\n    <ul itemprop="transcript" class="subtitles">\n        '
o=e.subtitles
n=o||a.subtitles
r=e.each
f=h.program(1,d,i)
f.hash={}
f.fn=f
f.inverse=h.noop
n=r.call(a,n,f)
if(n||n===0){l+=n}l+="\n    </ul>\n</div>\n"
return l})
module.exports=t
});
KAdefine("javascript/shared-package/handlebars-extras.js", function(require, module, exports) {
var $=require("jquery")
var Handlebars=require("handlebars")
var icu=require("icu")
var Autolink=require("./autolink.js")
var KA=require("./ka.js")
var i18n=require("./i18n.js")
Handlebars.registerHelper("opttr",function(e){var r=[]
for(var n=Object.entries(e.hash),t=Array.isArray(n),a=0,n=t?n:n[Symbol.iterator]();;){var i
if(t){if(a>=n.length)break
i=n[a++]}else{a=n.next()
if(a.done)break
i=a.value}var o=i[0]
var s=i[1]
if(s!==null&&s!==undefined){r.push(o+'="'+Handlebars.Utils.escapeExpression(s)+'"')}}return new Handlebars.SafeString(r.join(" "))})
Handlebars.registerHelper("debug",function(e,r){console.log("Handlebars debug: ",e)})
Handlebars.registerHelper("debugger",function(){debugger})
Handlebars.registerHelper("repeat",function(e,r){var n=r.fn
var t=""
for(var a=0;a<e;a++){t=t+n(this)}return t})
Handlebars.registerHelper("eachWithMidpoint",function(e,r){var n=[]
var t=r.fn
if(e){var a=Math.floor((e.length+1)/2)
for(var i=0;i<e.length;i++){e[i]["midpoint"]=i===a
n.push(t(e[i]))}}return n.join("")})
var serialCommafy=function(e,r){if(!Array.isArray(e)){return r}var n=e.length
if(n===0){return r}else if(n===1){return e[0].toString()}else if(n===2){return i18n._("%(item1)s and %(item2)s",{item1:e[0].toString(),item2:e[1].toString()})}else{return i18n._("%(items_with_commas)s, and %(last_item)s",{items_with_commas:e.slice(0,n-1).join(", "),last_item:e[n-1].toString()})}}
Handlebars.registerHelper("serialCommafy",serialCommafy)
Handlebars.registerHelper("_",i18n.handlebarsUnderscore)
Handlebars.registerHelper("i18nDoNotTranslate",i18n.handlebarsDoNotTranslate)
Handlebars.registerHelper("ngettext",i18n.handlebarsNgettext)
Handlebars.registerHelper("reverseEach",function(e,r){var n=""
for(var t=e.length-1;t>=0;t--){n+=r(e[t])}return n})
Handlebars.registerHelper("eachWithLimit",function(e,r,n){var t=""
for(var a=0;a<Math.min(r.length,e);a++){t+=n(r[a])}return t})
var getPartial=function(e,r){return KAdefine.require("./javascript/"+e+"-package/"+r+".handlebars")}
Handlebars.registerHelper("invokePartial",function(e,r,n){return getPartial(e,r)(n.hash)})
var origInvokePartial=Handlebars.VM.invokePartial
Handlebars.VM.invokePartial=function(e,r){var n=Array.prototype.slice.apply(arguments)
if(e===undefined){var t=r.split("_")
if(t.length>=2){var a=t[0]
var i=t.slice(1).join("_")
n[0]=getPartial(a,i)}}return origInvokePartial.apply(this,n)}
Handlebars.registerHelper("multiply",function(e,r){return e*r})
Handlebars.registerHelper("toLoginRedirectHref",function(e){return"/login?continue="+encodeURIComponent(e)})
Handlebars.registerHelper("commafy",function(e){return icu.getIntegerFormat().format(e)})
Handlebars.registerHelper("ellipsis",function(e,r){var n=e.replace(/<([^>]+)>/g,function(e,r){return r})
if(n.length>r){return n.substr(0,r-3)+"..."}else{return n}})
var formatTimestamp_=function(e,r,n){var t=60*parseInt(r,10)+parseInt(n,10)
return"<span class='youTube' data-seconds='"+t+"'>"+e+"</span>"}
var formatContent=function(e,r){e=Handlebars.Utils.escapeExpression(e)
var n=/(\d{1,3}):([0-5]\d)/g
e=e.replace(n,formatTimestamp_)
var t=/[\n]/g
e=e.replace(t,"<br>")
e=e.replace(/(\W|^)_(\S.*?\S)_(\W|$)/g,function(e,r,n,t){return r+"<em>"+n+"</em>"+t})
e=e.replace(/(\W|^)\*(\b.*?\b)\*(\W|$)/g,function(e,r,n,t){return r+"<b>"+n+"</b>"+t})
e=e.replace(/&#x60;&#x60;&#x60;(.*?)&#x60;&#x60;&#x60;/gm,function(e,r){r=r.replace(/^\s*(<br>)+/,"")
r=r.replace(/(<br>)+\s*$/,"")
return"<pre><code>"+r+"</code></pre>"})
e=e.replace(/&#x60;(.*?)&#x60;/g,function(e,r){return"<code>"+r+"</code>"})
e=Autolink.autolink(e,r)
return e}
Handlebars.registerHelper("formatContent",function(e,r){return new Handlebars.SafeString(formatContent(e,!!(r&&r.hash.nofollow)))})
Handlebars.registerHelper("formatEvalAnswer",function(e,r){var n=$($.parseHTML(e))
var t=$.makeArray(n.filter("li:not(.pass)"))
var a=$("<div class='eval-guideline'>")
$("<div class='eval-title'>").text(t.length===0?i18n._("This project has passed evaluation."):i18n._("This project needs more work.")).appendTo(a)
var i=n.filter(".overall-eval-info").text()
var o=formatContent(i,true)
if(i.length>0){var s=$("<div class='more-info'>")
s.append($("<strong>").text(i18n._("From the evaluator:"))).append($("<div>").html(o)).appendTo(a)}if(t.length>0){$("<div class='failed-objectives'>").append($("<strong>").text(i18n._("The following objectives need more work:"))).appendTo(a)
var l=$("<ul class='styled-list'>").appendTo(a)
t.map(function(e,r){var n=$(e).find("div")
var t=formatContent(n.text(),true)
var a=n.text().length>0?$("<div class='objective-more-info'>").html(t):[]
n.empty()
var i=$("<li></li>")
i.append($("<strong>").text($(e).text())).append(a)
i.appendTo(l)})}return new Handlebars.SafeString(a[0].outerHTML)})
Handlebars.registerHelper("arrayLength",function(e){return e.length})
Handlebars.registerHelper("ifLoggedIn",function(e){if(KA.getUserProfile()&&!KA.getUserProfile().isPhantom()){return e.fn(this)}else{return e.inverse(this)}})
Handlebars.registerHelper("ifPhantom",function(e){if(!KA.getUserProfile()||KA.getUserProfile().isPhantom()){return e.fn(this)}else{return e.inverse(this)}})
Handlebars.registerHelper("urlencode",function(e){return encodeURIComponent(e)})
Handlebars.registerHelper("formatTimestamp",function(e){var r=e/1e3
var n=parseInt(r)%60
if(n<10){n="0"+n}return parseInt(r/60)+":"+n})
Handlebars.registerHelper("videoOrigin",function(){return window.location.origin})
var shouldShowVideoAnnotations=function(e){return["S4iQ46ISqRQ","yC3vsJJIcE0","yIQUhXa-n-M","v_OfFmMRvOc","G7WyEp8gHs0","765X_PAxhAw","CDmJL-VNlaM","u7dhn-hBHzQ","AuX7nPBqDts","aNqG4ChKShI","b22tMEc6Kko","27Kp7HJYj2c","9Ek61w1LxSc","DqeMQHomwAU","VidnbCEOGdg","9DxrF6Ttws4","gM95HHI4gLk"].indexOf(e)===-1}
Handlebars.registerHelper("youtubeLoadPolicyParam",function(e){return shouldShowVideoAnnotations(e)?"":"&iv_load_policy=3"})
var stripProtocol=function(e){if(!e){return e}if(e.indexOf("http://")===0){return e.substring(5)}else if(e.indexOf("https://")===0){return e.substring(6)}return e}
Handlebars.registerHelper("stripProtocol",stripProtocol)
module.exports={formatContent:formatContent,serialCommafy:serialCommafy,stripProtocol:stripProtocol,shouldShowVideoAnnotations:shouldShowVideoAnnotations}
});
KAdefine("javascript/shared-package/location-model.js", function(require, module, exports) {
var Backbone=require("backbone")
var LocationModel=Backbone.Model.extend({defaults:function(){return{lastModified:"",displayText:"",city:"",state:"",country:"",googlePlacesId:"",postalCode:"",latLng:{lat:null,lng:null}}},setToDefault:function(){this.set(this.defaults())}})
module.exports=LocationModel
});
KAdefine("javascript/shared-package/eduorg-models.js", function(require, module, exports) {
var Backbone=require("backbone")
var AffiliationModel=Backbone.Model.extend({url:"/api/internal/user/profile/affiliations",defaults:{eduorgKeyId:"",eduorgName:"",eduorgPostalCode:"",eduorgLocationText:"",role:null}})
var Affiliations=Backbone.Collection.extend({model:AffiliationModel})
exports.AffiliationModel=AffiliationModel
exports.Affiliations=Affiliations
});
KAdefine("javascript/shared-package/profile-model.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var i18n=require("./i18n.js")
var KA=require("./ka.js")
var ProfileModel=Backbone.Model.extend({defaults:{affiliations:[],avatarName:"darth",avatarSrc:"/images/darth.png",backgroundName:"",backgroundSrc:"",bio:"",userLocation:null,countVideosCompleted:0,dateJoined:"",email:"",isCoachingLoggedInUser:false,isParentOfLoggedInUser:false,isActivityAccessible:false,nickname:"",points:0,username:"",isDataCollectible:false,isSelf:false,isPublic:false,isCreator:false,isCurator:false,isPublisher:false,followRequiresApproval:true,canModifyCoaches:true,hideVisual:false},url:"/api/internal/user/profile",isPhantom:function(){return this.get("isPhantom")},isCurrentUser:function(){return KA.getUserProfile()&&KA.getUserProfile().get("kaid")===this.get("kaid")},initialize:function(e,i){Backbone.Model.prototype.initialize.call(this,e,i)
this._ensureAttrsAreSubmodels()
var t=ProfileModel.SUBMODEL_ATTRS.map(function(e){return"change:"+e}).join(" ")
this.on(t,this._ensureAttrsAreSubmodels,this)},locationFormatted:function(){var e=this.get("userLocation")
return e&&e.get("displayText")||""},usernameFormatted:function(){var e=this.get("username")
return e?"@"+e:""},_ensureAttrsAreSubmodels:function(e){var i=require("../shared-package/eduorg-models.js").AffiliationModel
var t=require("../shared-package/eduorg-models.js").Affiliations
var a=require("../shared-package/location-model.js")
var s={}
var r=this.get("userLocation")
if(!(r instanceof a)){s["userLocation"]=new a(r)}var n=this.get("affiliations")
if(!n||!n.length){n=[new i]}if(!(n instanceof t)){s["affiliations"]=new t(n)}this.set(s,{silent:true})},isPrivate:function(){return this.get("isActivityAccessible")===false&&this.get("isPublic")===false},isActivityAccessible:function(){return this.get("isActivityAccessible")},getIdentifier:function(){return this.get("username")||this.get("email")},isEditable:function(){return this.get("isSelf")&&!this.isPhantom()},isFullyEditable:function(){return this.isEditable()&&this.get("isDataCollectible")},isSal:function(){return this.get("username")==="sal"},toJSON:function(){var e=this
var i=ProfileModel.__super__.toJSON.call(this)
ProfileModel.COMPUTED_ATTRS.forEach(function(t){i[t]=e[t].call(e)})
ProfileModel.SUBMODEL_ATTRS.forEach(function(t){i[t]=e.get(t).toJSON()})
return i},getIfUndefined:function(e,i){if(e&&e[i]!==undefined){return e[i]}return this.get(i)},save:function(e,i){i=i||{}
i.contentType="application/json"
i.data=JSON.stringify({kaid:this.getIfUndefined(e,"kaid"),userKey:this.getIfUndefined(e,"userKey"),avatarName:this.getIfUndefined(e,"avatarName"),bio:this.getIfUndefined(e,"bio"),backgroundName:this.getIfUndefined(e,"backgroundName"),nickname:$.trim(this.getIfUndefined(e,"nickname")),username:this.getIfUndefined(e,"username"),isPublic:this.getIfUndefined(e,"isPublic"),hideVisual:this.getIfUndefined(e,"hideVisual"),userLocation:this.getIfUndefined(e,"userLocation"),affiliations:this.getIfUndefined(e,"affiliations")})
var t=i.success
i.success=function(e,i){e.trigger("savesuccess")
if(t){t(e,i)}}
Backbone.Model.prototype.save.call(this,e,i)},storeState:function(){var e=this.toJSON()
this._storedAttrs=Object.keys(e).reduce(function(i,t){if(!ProfileModel.COMPUTED_ATTRS.includes(t)){i[t]=e[t]}return i},{})},restoreState:function(){var e=this
var i=Object.keys(this._storedAttrs).reduce(function(i,t){if(!ProfileModel.SUBMODEL_ATTRS.includes(t)){i[t]=e._storedAttrs[t]}return i},{})
this.set(i)
var t=Object.keys(this._storedAttrs).reduce(function(i,t){if(ProfileModel.SUBMODEL_ATTRS.includes(t)){i[t]=e._storedAttrs[t]}return i},{})
for(var a=Object.entries(t),s=Array.isArray(a),r=0,a=s?a:a[Symbol.iterator]();;){var n
if(s){if(r>=a.length)break
n=a[r++]}else{r=a.next()
if(r.done)break
n=r.value}var o=n[0]
var l=n[1]
this.get(o).set(l)}},fetchFull:function(){if(this.get("includesUserDataInfo")){var e=new $.Deferred
return e.resolve().promise()}return $.ajax({type:"GET",url:"/api/internal/user/profile",data:{casing:"camel",kaid:this.get("kaid")},dataType:"json",success:function(e){if(e){this.set(e)}}.bind(this)})},parse:function(e,i){if("apiActionResults"in e&&"payload"in e){e=e["payload"]}Backbone.Model.prototype.parse.call(this,e,i)},validateNickname:function(e){this.trigger("validate:nickname",$.trim(e).length>0)},validateUsername:function(e){if(e===this.get("username")){this.trigger("validate:username")
return}e=e.toLowerCase().replace(/\./g,"")
if(/^[a-z][a-z0-9]{2,}$/.test(e)){$.ajax({url:"/api/internal/user/username_available",type:"GET",data:{username:e},dataType:"json",success:this.onValidateUsernameResponse_.bind(this)})}else{var i=""
if(e.length<3){i=i18n._("Too short.")}else if(/^[^a-z]/.test(e)){i=i18n._("Start with a letter.")}else{i=i18n._("Letters and numbers only.")}this.trigger("validate:username",i,false)}},onValidateUsernameResponse_:function(e){var i=e?i18n._("Looks good!"):i18n._("Not available.")
this.trigger("validate:username",i,e)}},{COMPUTED_ATTRS:["isEditable","isFullyEditable","isSal","locationFormatted","usernameFormatted"],SUBMODEL_ATTRS:["userLocation","affiliations"]})
module.exports=ProfileModel
});
KAdefine("javascript/shared-package/youtube-iframe-player.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(a,e,t,l,n){t=t||a.helpers
var i="",o,r,s,u,h=this,d="function",f=t.helperMissing,c=void 0,p=this.escapeExpression,b=t.blockHelperMissing
function y(a,e){var l="",n
l+="\n    <div style=\"background-image: url('"
s=t.thumbnailUrl
n=s||a.thumbnailUrl
if(typeof n===d){n=n.call(a,{hash:{}})}else if(n===c){n=f.call(a,"thumbnailUrl",{hash:{}})}l+=p(n)+'\');"\n         class="poster-frame">\n    </div>\n    <button aria-label="'
s=t["_"]
n=s||a["_"]
u=h.program(2,m,e)
u.hash={}
u.fn=u
u.inverse=h.noop
if(s&&typeof n===d){n=n.call(a,u)}else{n=b.call(a,n,u)}if(n||n===0){l+=n}l+='" class="larger-play-button"></button>\n'
return l}function m(a,e){return"Play video"}function g(a,e){var l="",n
l+='\n    data-topicid="'
s=t.topicId
n=s||a.topicId
if(typeof n===d){n=n.call(a,{hash:{}})}else if(n===c){n=f.call(a,"topicId",{hash:{}})}l+=p(n)+'"\n    '
return l}function v(a,e){return"1"}function I(a,e){return"0"}function w(a,e){return"1"}function Y(a,e){return"0"}s=t.showLargerPlayButton
o=s||e.showLargerPlayButton
r=t["if"]
u=h.program(1,y,n)
u.hash={}
u.fn=u
u.inverse=h.noop
o=r.call(e,o,u)
if(o||o===0){i+=o}i+='\n\n<iframe\n    class="player"\n    type="text/html"\n    width="'
s=t.width
o=s||e.width
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===c){o=f.call(e,"width",{hash:{}})}i+=p(o)+'"\n    height="'
s=t.height
o=s||e.height
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===c){o=f.call(e,"height",{hash:{}})}i+=p(o)+'"\n    data-youtubeid="'
s=t.youtubeId
o=s||e.youtubeId
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===c){o=f.call(e,"youtubeId",{hash:{}})}i+=p(o)+'"\n    data-translatedyoutubeid="'
s=t.translatedYoutubeId
o=s||e.translatedYoutubeId
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===c){o=f.call(e,"translatedYoutubeId",{hash:{}})}i+=p(o)+'"\n    data-translatedyoutubelang="'
s=t.translatedYoutubeLang
o=s||e.translatedYoutubeLang
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===c){o=f.call(e,"translatedYoutubeLang",{hash:{}})}i+=p(o)+'"\n    '
s=t.topicId
o=s||e.topicId
r=t["if"]
u=h.program(4,g,n)
u.hash={}
u.fn=u
u.inverse=h.noop
o=r.call(e,o,u)
if(o||o===0){i+=o}i+='\n    src="https://www.youtube.com/embed/'
s=t.translatedYoutubeId
o=s||e.translatedYoutubeId
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===c){o=f.call(e,"translatedYoutubeId",{hash:{}})}i+=p(o)+"?enablejsapi=1&html5=1&wmode=transparent&modestbranding=1&rel=0&fs=1&showinfo="
s=t.isEmbedded
o=s||e.isEmbedded
r=t["if"]
u=h.program(6,v,n)
u.hash={}
u.fn=u
u.inverse=h.program(8,I,n)
o=r.call(e,o,u)
if(o||o===0){i+=o}i+="&autoplay="
s=t.videoAutoplay
o=s||e.videoAutoplay
r=t["if"]
u=h.program(10,w,n)
u.hash={}
u.fn=u
u.inverse=h.program(12,Y,n)
o=r.call(e,o,u)
if(o||o===0){i+=o}i+="&origin="
s=t.videoOrigin
o=s||e.videoOrigin
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===c){o=f.call(e,"videoOrigin",{hash:{}})}i+=p(o)
s=t.translatedYoutubeId
o=s||e.translatedYoutubeId
s=t.youtubeLoadPolicyParam
r=s||e.youtubeLoadPolicyParam
if(typeof r===d){o=r.call(e,o,{hash:{}})}else if(r===c){o=f.call(e,"youtubeLoadPolicyParam",o,{hash:{}})}else{o=r}i+=p(o)+'"\n    frameborder="0"\n    allowfullscreen\n    webkitallowfullscreen\n    mozallowfullscreen\n ></iframe>\n'
return i})
module.exports=t
});
KAdefine("javascript/shared-package/poppler.js", function(require, module, exports) {
var _=require("../../third_party/javascript-khansrc/lodash/lodash.js")
var KAConsole=require("./console.js")
var Poppler=function(){function e(){this.events=[]
this.duration=-1
this.eventIndex=0
this.indicesById={}
this.began=false
this.blocked=false}e.timeFn=function(e){return e.time}
e.nextPeriod=function(e,t){return Math.round(Math.floor(e/t+1))*t}
e.prototype.add=function(t,i,n){i.time=t
i.id=n
var s=_.sortedIndex(this.events,i,e.timeFn)
while(this.events[s]&&this.events[s].time===t){s++}this.events.splice(s,0,i)}
e.prototype.begin=function(){this.began=true
this.indicesById=this.events.reduce(function(e,t,i){e[t.id]=i
return e},{})}
e.prototype.trigger=function t(e){if(!this.began){this.begin()}if(this.blocked){return}if(this.duration!==-1){var t=e-this.duration
var i=.001
if(Math.abs(t)<i){return}var n=1
if(Math.abs(t)>n){return}}this.duration=e
this._triggerEvents()}
e.prototype._triggerEvents=function(){var e=this.eventIndex
while(this.events[this.eventIndex]&&this.events[this.eventIndex].time<=this.duration){var t=this.events[this.eventIndex]()
this.eventIndex++
if(t){this.blocked=true
break}}return e!==this.eventIndex}
e.prototype.resumeEvents=function(){this.blocked=false
return this._triggerEvents()}
e.prototype.seek=function(t){if(!this.began){this.begin()}this.duration=t
this.eventIndex=_.sortedIndex(this.events,{time:this.duration},e.timeFn)
KAConsole.log("Poppler.seek, duration:",this.duration,"eventIndex:",this.eventIndex)}
e.prototype.seekToId=function(e){if(!this.began){this.begin()}var t=this.indicesById[e]
if(t==null){throw new Error("No event found with id"+e)}var i=this.events[t]
this.duration=i.time
this.eventIndex=t
KAConsole.log("Poppler.seekToId, duration:",this.duration,"eventIndex:",this.eventIndex)}
return e}()
module.exports=Poppler
});
KAdefine("javascript/shared-package/jquery.delayload.js", function(require, module, exports) {
var $=require("jquery")
$.fn.inView=function(e){var t=$(this)
if(!t.is(":visible")){return false}var a=$(window).height()
var r=window.pageYOffset||document.documentElement.scrollTop
var n=t.offset().top
e=e||0
if(r+a+e>n){return true}return false}
$.fn.delayLoad=function(e,t){var a=$(this)
if(a.data("delayed-bgimage")&&a.css("background-image")==="none"&&a.inView(e)){setTimeout(function(){a.css("background-image","url("+a.data("delayed-bgimage")+")")},0)
return true}if(a.data("delayed-src")&&(!a.attr("src")||a.attr("src")==="about:blank")&&a.inView(e)){setTimeout(function(){a.attr("src",a.data("delayed-src"))},0)
return true}if(typeof t==="function"&&a.inView(e)&&!a.data("hasAppended")){a.data("hasAppended",true)
setTimeout(function(){t(a)},0)
return true}return false}
});
KAdefine("javascript/shared-package/background-video.js", function(require, module, exports) {
var $=require("jquery")
var resizeVideo=function(e,a){var r=a.height
var n=a.width
var d=n/r
var i=$(e)
var t=i.parent().innerHeight()+5
var s=i.parent().innerWidth()
var o=s/t
var v
var h
if(d<=o){v=s
h=s/d}else{h=t
v=t*d}i.css({height:h,left:s/2-v/2,top:t/2-h/2,width:v})
if(!i.data("isShown")){i.data("isShown",true)
i.css("z-index",0)
e.play()}}
var addBackgroundAndListeners=function(e,a){var r=$.parseHTML(a.element)[0]
var n=$(a.element)
var d=function(){if(r.readyState>=2){resizeVideo(r,a)}}
n.on("loadeddata",d)
e.append(r)
$(window).resize(d)}
module.exports={addBackgroundAndListeners:addBackgroundAndListeners}
});
KAdefine("javascript/shared-package/nav-header.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
var $=require("jquery")
var React=require("react")
var ReactDOM=require("react-dom")
var i18n=require("./i18n.js")
var HeaderTopicBrowser=require("../shared-package/header-topic-browser.js")
var KA=require("./ka.js")
var bindSignupLink=require("./bind-signup-link.js")
var ResponsiveNavMenu=React.createFactory(require("../shared-package/responsive-nav-menu.jsx"))
var SiteInfra=require("../shared-package/site-infra.js")
var updateDocumentTitle=require("./update-document-title.js")
var NavHeader={_renderedUserDropdown:false,_renderedNotificationsDropdown:false,searchBox:null,activeMission:null,searchBoxGuider:null,init:function(e){var r=this
this._userDropdownContext=babelHelpers._extends({showSignUpToSave:true,showSettings:false},e)
bindSignupLink($(".sign-up-link"))
updateDocumentTitle()
var n=$("#top-header-container .nav-search-box input")
n.one("mouseover focus keydown touchstart",function(){r.renderSearchBox()})
var i=$(".responsive-nav-menu")
if(i.length){ReactDOM.render(ResponsiveNavMenu({domains:e.domains||[],profileModel:KA.getUserProfile()}),i[0])
var o=$(".navbar-toggle-menu")
var a=function(){i.slideToggle({duration:300,easing:"easeOutCubic"})
o.toggleClass("navbar-menu-open")
o.attr("aria-expanded",function(){return $(this).hasClass("navbar-menu-open")})}
o.click(a)
o.on("keydown",function(e){if(e.keyCode===13||e.keyCode===32){e.preventDefault()
a()}})}},renderSearchBox:function(){var e=this
require.async(["../typeahead-package/render-nav-search-bar.js","package!typeahead.css"],function(r){e.searchBox=r({firstRender:!e.searchBox,searchBox:$("#top-header-container .nav-search-box")[0],activeMission:e.activeMission,guider:e.searchBoxGuider,onFocus:function(){return e.hideSearchGuider()},useGoogle:KA.GOOGLE_RESULTS_ONLY,extraFormArgs:{referer:window.location.pathname}})})},setActiveMission:function(e){this.activeMission=e
if(this.searchBox){this.renderSearchBox()}},showSearchGuider:function(){var e=this
$("html, body").animate({scrollTop:0},function(){require.async(["../react-guiders-package/guider.jsx"],function(r){r=React.createFactory(r)
var n
if(e.activeMission){var i=e.activeMission.get("translatedTitle")
n=i18n._("You can search all of Khan Academy here to "+"find what you want to learn. If you choose a "+"skill from %(missionTitle)s, it will be added "+"to your learning dashboard and opened here.",{missionTitle:i})}if(!n){n=i18n._("Remember you can always search all of "+"Khan Academy if what you're looking for "+"is elsewhere.")}var o=$("#top-header-container .nav-search-box")[0].getBoundingClientRect()
e.searchBoxGuider=r({boundingBox:o,position:6,content:React.DOM.div({className:"dashboard-search-callout"},n),onDismissed:function(){return e.hideSearchGuider()}})
e.renderSearchBox()})})},hideSearchGuider:function(){this.searchBoxGuider=null
this.renderSearchBox()},_userDropdownContext:null,renderNotificationsDropdown:function(){if(this._renderedNotificationsDropdown){return}var e=KA.getUserProfile(),r=e?e.get("countBrandNewNotifications"):0
$("#user-notifications").html(require("./notifications-dropdown.handlebars")({count:r}))
HeaderTopicBrowser.initDropdownBehavior($("#user-info").find(".dropdown-toggle"))
this._renderedNotificationsDropdown=true},renderUserDropdown:function(e){if(this._renderedUserDropdown){return}if(!this._userDropdownContext){return}var r=KA.getUserProfile()
if(!r){return}e=e||{}
var n=r.isPhantom()
if(n){r.set("nickname",i18n._("Unclaimed points"))}var i=require("./user-dropdown.handlebars"),o={isPhantom:n,avatarSrc:r.get("avatarSrc"),nickname:r.get("nickname")}
Object.assign(this._userDropdownContext,o,e)
if(!this._userDropdownContext["profileRoot"]){this._userDropdownContext["profileRoot"]=r.get("profileRoot")}$("#user-info").html(i(this._userDropdownContext))
HeaderTopicBrowser.initDropdownBehavior($("#user-info").find(".dropdown-toggle"))
bindSignupLink($("#user-info .signup-to-claim"),function(){HeaderTopicBrowser.closeTopLevelDropdown()})
$("#page_logout").click(function(){window.location.href=SiteInfra.getLogoutURL()}.bind(this))
$("#top-header").find(".log-in-link").click("click",function(){window.location.href=SiteInfra.getLoginURL()}.bind(this))
this._renderedUserDropdown=true}}
module.exports=NavHeader
});
KAdefine("javascript/shared-package/header-topic-browser.js", function(require, module, exports) {
var $=require("jquery")
require("../../third_party/javascript-khansrc/bootstrap-dropdown/dropdown.js")
require("../../third_party/javascript-khansrc/jQuery-menu-aim/jquery.menu-aim.js")
var KA=require("../shared-package/ka.js")
var ExerciseProgressUtils=require("../mobile-shared-package/exercise-progress-utils.js")
var dropExtraAjaxValues=function(e,r,a){return e}
var fetchMissionPercentages=function(){var e=$.when($.ajax({url:"/api/internal/user/missions/progress_info?casing=camel"}).then(dropExtraAjaxValues),$.ajax({url:"/api/internal/user/dashboard_options?casing=camel"}).then(dropExtraAjaxValues)).then(function(e,r){var a={}
e.forEach(function(e){var r=ExerciseProgressUtils.getCountPerLevel(e.progressInfo)
var n=ExerciseProgressUtils.getProgressPercentage(r)
a[e.slug]=n})
return a})
fetchMissionPercentages=function(){return e}
return e}
function fetchAndDisplayMissionPercentages(){var e=$(".topic-browser-menu")
var r=e.find("[data-mission-slug] .topic-browser-mission-percentage")
var a=KA.getUserProfile()
if(!a||a.get("isPhantom")){r.hide()
return}fetchMissionPercentages().then(function(e){r.each(function(){var r=$(this).closest("[data-mission-slug]").data("missionSlug")
if(e[r]!=null){$(this).text("("+e[r]+"%)")}})})}var HeaderTopicBrowser={init:function(){this.initDropdownBehavior($("#top-header").find(".dropdown-toggle"))
$(".nav-subheader .topic-browser-menu").menuAim({submenuSelector:".has-submenu",activate:function(e){var r=$(e)
var a=$(".hover-active")
if(r.hasClass("has-submenu")){a.removeClass("hover-active")
var n="wide-learn-menu-background-container"
var o=$("."+n)
if(o.hasClass("on-welcome")){n+=" on-welcome"}n+=" "+r.data("domainSlug")
$(".wide-learn-menu-background-container").removeClass().addClass(n)}else{a.filter(function(){return!$(this).hasClass("has-submenu")}).removeClass("hover-active")}r.addClass("hover-active")}})},_$activeDropdown:null,closeTopLevelDropdown:function(){if(this._$activeDropdown){this._$activeDropdown.dropdown("close")
this._$activeDropdown=null}},initDropdownBehavior:function(e){e=e.not("[data-hasDropdownBehavior]")
e.dropdown().on("close",function(e){var r=$(e.target).parents(".watch-link")
var a=r.length!==0
if(a){if(r.hasClass("on-welcome-and-close")||!r.hasClass("on-welcome")){$(".wide-learn-menu-background-container").hide().removeClass().addClass("wide-learn-menu-background-container")
r.find(".dropdown-menu").find(".hover-active").removeClass("hover-active")}}}).on("open",function(e){HeaderTopicBrowser.closeTopLevelDropdown()
HeaderTopicBrowser._$activeDropdown=$(e.target)
var r=$(e.target).parents(".watch-link")
var a=r.length!==0
if(a){$(".topic-browser-menu").find(".level0.math").addClass("hover-active")
var n="math"
if(r.hasClass("on-welcome")){n+=" on-welcome"}$(".wide-learn-menu-background-container").show().addClass(n)
fetchAndDisplayMissionPercentages()}}).end().siblings(".dropdown-menu").click(function(e){e.stopPropagation()}).end().attr("data-hasDropdownBehavior",true).attr("role","button").attr("aria-haspopup","true")}}
module.exports=HeaderTopicBrowser
});
KAdefine("javascript/shared-package/responsive-nav-menu.jsx", function(require, module, exports) {
var React=require("react")
var ReactCSSTransitionGroup=require("react-addons-css-transition-group")
var classNames=require("classnames")
var SiteInfra=require("../shared-package/site-infra.js")
var i18n=require("./i18n.js")
var $_=i18n.$_
var domainObjectPropType=React.PropTypes.shape({translatedTitle:React.PropTypes.string.isRequired,identifier:React.PropTypes.string.isRequired,href:React.PropTypes.string,children:React.PropTypes.arrayOf(React.PropTypes.shape({identifier:React.PropTypes.string.isRequired,translatedTitle:React.PropTypes.string.isRequired,href:React.PropTypes.string}))})
var transformDomainIntoSubgroups=function(e){var t=e.identifier
if(t==="math"){var n=e.childrenByGradeLevel
return["grades","secondary","foundations"].map(function(e){var t=n[e]
if(t){return{identifier:e,title:t.header,children:t.children}}}).filter(function(e){return e})}else if(t==="humanities"){return[{identifier:"other-humanities",title:i18n._("Humanities"),children:e.otherHumanitiesChildren},{identifier:"art-history",title:i18n._("Art history"),children:e.artHistoryChildren}]}else if(t==="partner-content"){return[{identifier:"museum",title:i18n._("Museums"),children:e.museumChildren},{identifier:"other-partner-content",title:i18n._("Partners"),children:e.otherPartnerContentChildren}]}else{return[{identifier:e.identifier,title:i18n._("Subjects"),children:e.children}]}}
var NavMenuSection=React.createClass({displayName:"NavMenuSection",propTypes:{domain:domainObjectPropType},getInitialState:function(){return{open:false}},handleSectionTitleClick:function(){this.setState({open:!this.state.open})},render:function(){var e=this.props.domain
var t=e&&!!e.children.length
var n=transformDomainIntoSubgroups(e)
var a=n.map(function(e){var t=e.children&&e.children.map(function(e){return React.createElement("li",{key:e.identifier},React.createElement("a",{href:e.href,className:"nav-section-content-text"},e.translatedTitle))})
return React.createElement("li",{key:e.identifier,className:"domain-subgroup"},React.createElement("div",{className:"domain-subgroup-title"},e.title),React.createElement("ul",null,t))})
var i=null
if(t){var r=classNames({"nav-section-icon":true,"icon-angle-right":true,"nav-section-opened":this.state.open})
i=React.createElement("i",{className:r})}return React.createElement("li",{className:"nav-menu-section"},React.createElement("a",{className:"nav-section-title "+e.identifier,href:t?null:e.href,onClick:this.handleSectionTitleClick},e.translatedTitle,i),React.createElement(ReactCSSTransitionGroup,{transitionName:"nav-section",transitionEnterTimeout:250,transitionLeaveTimeout:250},t&&this.state.open&&React.createElement("ul",{key:e.identifier,className:"nav-section-contents "+e.identifier},a)))}})
var ResponsiveNavMenu=React.createClass({displayName:"ResponsiveNavMenu",propTypes:{domains:React.PropTypes.arrayOf(domainObjectPropType),profileModel:React.PropTypes.object},handleLogin:function(e){e.preventDefault()
window.location.href=SiteInfra.getLoginURL()},handleLogout:function(e){e.preventDefault()
window.location.href=SiteInfra.getLogoutURL()},render:function(){var e=this.props.profileModel
var t=!!e&&!e.isPhantom()
var n=this.props.domains.map(function(e){return React.createElement(NavMenuSection,{key:e.identifier,domain:e})})
return React.createElement("div",null,React.createElement("ul",null,!t&&React.createElement("li",{className:"nav-menu-section"},React.createElement("a",{className:"nav-section-title login-link",href:"#",onClick:this.handleLogin},$_(null,"Log in / Sign up"))),n,!t&&React.createElement("li",{className:"nav-menu-section"},React.createElement("a",{className:"nav-section-title informational-link",href:"/about"},React.createElement("span",{"aria-hidden":"true"},$_(null,"About")),React.createElement("span",{className:"sr-only"},$_(null,"About Khan Academy")))),!t&&React.createElement("li",{className:"nav-menu-section"},React.createElement("a",{className:"nav-section-title informational-link",href:"/donate"},$_(null,"Donate"))),t&&React.createElement("li",{className:"nav-menu-section clearfix"},React.createElement("a",{className:"nav-section-title profile-link",href:e.get("profileRoot")},React.createElement("img",{className:"user-avatar",src:e.get("avatarSrc")}),e.get("nickname")),React.createElement("a",{className:"nav-section-title logout-link",href:"#",onClick:this.handleLogout},$_(null,"Log out")))))}})
module.exports=ResponsiveNavMenu
});
KAdefine("javascript/shared-package/nav-footer.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
var $=require("jquery")
var _=require("../../third_party/javascript-khansrc/lodash/lodash.js")
require("./jquery.delayload.js")
var KA=require("./ka.js")
var NavFooter={init:function(){if(!KA.isMobileCapable){var r=$("footer li.heading:first-child")
r.addClass("footer-scroll-cue")
r.on("click",function(){var r=$(document).height()-$(window).height()
$("html, body").animate({scrollTop:r},360,"easeInOutCubic")})}var e=function(r){$("#footer [data-delayed-src]").each(function(){if($(this).delayLoad(r)){$(window).off("scroll.load-footer-image")}})}
$(window).on("scroll.load-footer-image",_.throttle(function(){e(200)},300))
e()}}
module.exports=NavFooter
});
KAdefine("third_party/javascript-khansrc/Guiders-JS/guiders.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
window.guiders=function($){var e={}
e.ButtonAction={NEXT:0,CLOSE:1}
e._defaultSettings={attachTo:null,buttons:[{action:e.ButtonAction.CLOSE,text:"Close"}],buttonCustomHTML:"",classString:null,description:"",highlight:null,isHashable:true,offset:{top:null,left:null},onShow:null,overlay:false,position:0,title:"Sample title goes here",width:400,xButton:false}
e._htmlSkeleton=["<div class='guider' role='dialog' tabindex='-1' ","aria-labelledby='guider_title'>","  <div class='guider_content'>","    <div id='guider_title' class='guider_title'></div>","    <div class='guider_close'></div>","    <div class='guider_description'></div>","    <div class='guider_buttons'>","    </div>","  </div>","  <div class='guider_arrow'>","  </div>","</div>"].join("")
e._arrowSize=42
e._currentGuiderID=null
e._guiders={}
e._lastCreatedGuiderID=null
e._zIndexForHighlight=1031
e._addButtons=function(i){var t=i.elem.find(".guider_buttons")
if(i.buttons===null||i.buttons.length===0){t.remove()
return}for(var r=i.buttons.length-1;r>=0;r--){var o=i.buttons[r]
var n=$("<a></a>",{href:o.href||"#","class":"ka_guider_button",role:"button",text:o.text})
if(typeof o.classString!=="undefined"&&o.classString!==null){n.addClass(o.classString)}t.append(n)
if(o.onclick){n.bind("click",o.onclick)}else if(!o.onclick&&o.action===e.ButtonAction.CLOSE){n.bind("click",function(){e.hideAll()})}else if(!o.onclick&&o.action===e.ButtonAction.NEXT){n.bind("click",function(){e.next()})}}if(i.buttonCustomHTML!==""){var d=$(i.buttonCustomHTML)
i.elem.find(".guider_buttons").append(d)}if(i.buttons.length==0){t.remove()}}
e._addXButton=function(i){var t=i.elem.find(".guider_close")
var r=$("<div></div>",{href:"#","class":"x_button",role:"button"})
t.append(r)
r.click(function(){e.hideAll()})}
e._attach=function(i){if(i===null){return}var t=i.elem.innerHeight()
var r=i.elem.innerWidth()
if(i.position===0||i.attachTo===null){i.elem.css("position","absolute")
i.elem.css("top",($(window).height()-t)/3+$(window).scrollTop()+"px")
i.elem.css("left",($(window).width()-r)/2+$(window).scrollLeft()+"px")
return}i.attachTo=$(i.attachTo)
var o=i.attachTo.offset()
var n=i.attachTo.innerHeight()
var d=i.attachTo.innerWidth()
var l=o.top
var u=o.left
var a=.9*e._arrowSize
var s={1:[-a-t,d-r],2:[0,a+d],3:[n/2-t/2,a+d],4:[n-t,a+d],5:[a+n,d-r],6:[a+n,d/2-r/2],7:[a+n,0],8:[n-t,-r-a],9:[n/2-t/2,-r-a],10:[0,-r-a],11:[-a-t,0],12:[-a-t,d/2-r/2]}
offset=s[i.position]
l+=offset[0]
u+=offset[1]
if(i.offset.top!==null){l+=i.offset.top}if(i.offset.left!==null){u+=i.offset.left}i.elem.css({position:"absolute",top:l,left:u})}
e._guiderById=function(i){if(typeof e._guiders[i]==="undefined"){throw new Error("Cannot find guider with id "+i)}return e._guiders[i]}
e._showOverlay=function(){$("#guider_overlay").fadeIn("fast",function(){if(this.style.removeAttribute){this.style.removeAttribute("filter")}$("#guider_click_mask").show()})}
e._highlightElement=function(i){$(i).css({"z-index":e._zIndexForHighlight})}
e._dehighlightElement=function(e){$(e).css({"z-index":""})}
e._hideOverlay=function(){$("#guider_overlay").fadeOut("fast")
$("#guider_click_mask").hide()
$(document).off("focusin.guider.modal")}
e._initializeOverlay=function(){if($("#guider_overlay").length===0){$('<div id="guider_overlay"></div>').hide().appendTo("body")
$('<div id="guider_click_mask"></div>').hide().click(function(e){e.preventDefault()
e.stopPropagation()}).appendTo("body")}}
e._styleArrow=function(i){var t=i.position||0
if(!t){return}var r=$(i.elem.find(".guider_arrow"))
var o={1:"guider_arrow_down",2:"guider_arrow_left",3:"guider_arrow_left",4:"guider_arrow_left",5:"guider_arrow_up",6:"guider_arrow_up",7:"guider_arrow_up",8:"guider_arrow_right",9:"guider_arrow_right",10:"guider_arrow_right",11:"guider_arrow_down",12:"guider_arrow_down"}
r.addClass(o[t])
var n=i.elem.innerHeight()
var d=i.elem.innerWidth()
var l=e._arrowSize/2
var u={1:["right",l],2:["top",l],3:["top",n/2-l],4:["bottom",l],5:["right",l],6:["left",d/2-l],7:["left",l],8:["bottom",l],9:["top",n/2-l],10:["top",l],11:["left",l],12:["left",d/2-l]}
var t=u[i.position]
r.css(t[0],t[1]+"px")}
e._showIfHashed=function(i){var t="guider="
var r=window.location.hash.indexOf(t)
if(r!==-1){var o=window.location.hash.substr(r+t.length)
if(i.id.toLowerCase()===o.toLowerCase()){e.show(i.id)}}}
e.next=function(){var i=e._guiders[e._currentGuiderID]
if(typeof i==="undefined"){return}var t=i.next||null
if(t!==null&&t!==""){var r=e._guiderById(t)
var o=r.overlay?true:false
e.hideAll(o)
e.show(t)}}
e.createGuider=function(i){if(i===null||i===undefined){i={}}myGuider=$.extend({},e._defaultSettings,i)
myGuider.id=myGuider.id||String(Math.floor(Math.random()*1e3))
var t=$(e._htmlSkeleton)
myGuider.elem=t
if(typeof myGuider.classString!=="undefined"&&myGuider.classString!==null){myGuider.elem.addClass(myGuider.classString)}myGuider.elem.css("width",myGuider.width+"px")
var r=t.find(".guider_title")
r.html(myGuider.title)
t.find(".guider_description").html(myGuider.description)
e._addButtons(myGuider)
if(myGuider.xButton){e._addXButton(myGuider)}t.hide()
t.appendTo("body")
t.attr("id",myGuider.id)
if(typeof myGuider.attachTo!=="undefined"&&myGuider!==null){e._attach(myGuider)
e._styleArrow(myGuider)}e._initializeOverlay()
e._guiders[myGuider.id]=myGuider
e._lastCreatedGuiderID=myGuider.id
if(myGuider.isHashable){e._showIfHashed(myGuider)}return e}
e.hideAll=function(i){var t=e._guiders[e._currentGuiderID]
if(t&&t.highlight){e._dehighlightElement(t.highlight)}$(".guider").fadeOut("fast")
if(typeof i!=="undefined"&&i===true){}else{e._hideOverlay()}return e}
e.show=function(i){if(!i&&e._lastCreatedGuiderID){i=e._lastCreatedGuiderID}var t=e._guiderById(i)
if(t.overlay){e._showOverlay()
if(t.highlight){e._highlightElement(t.highlight)}}e._attach(t)
if(t.onShow){t.onShow(t)}t.elem.fadeIn("fast")
t.elem.focus()
if(t.overlay){$(document).off("focusin.guider.modal").on("focusin.guider.modal",function(e){if(t.elem[0]!==e.target&&!t.elem.has(e.target).length){t.elem.focus()}})}var r=$(window).height()
var o=$(window).scrollTop()
var n=t.elem.offset()
var d=t.elem.height()
if(n.top-o<0||n.top+d+40>o+r){window.scrollTo(0,Math.max(n.top+d/2-r/2,0))}e._currentGuiderID=i
return e}
return e}.call(this,jQuery)
__KA_module.exports = guiders;
this.guiders = guiders;
});
KAdefine("javascript/shared-package/hover-card.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/qTip2/jquery.qtip.js")
var $=require("jquery")
var HoverCardView=require("../shared-package/hover-card-view.js")
var ProfileModel=require("../shared-package/profile-model.js")
var HoverCard={_cache:{},_link:function(r,e){if(e!=null&&r.is("a")&&!r.attr("href")){var a="discussion"
if(r.hasClass("profile-programs")){a="projects"}r.attr("href",e+a)}},canFitToRight:function(r){var e=500
var a=$(window).width()-r.offset().left-r.width()
return a>e},createHoverCardQtip:function(r,e){var a=$(r)
var t=a.data("user-kaid"),i=a.data("user-id"),o=a.data("has-qtip")
if(o){return}var d,s
if(t){d=t
s="kaid"}else if(i){d=i
s="userId"}else{return}var l=HoverCard._cache[d],n
var v=false
var f=!HoverCard.canFitToRight(a)
if(l!=null){n=l.html
var h=l.model.get("profileRoot")
HoverCard._link(a,h)}else{var p=new HoverCardView
n=p.render().el.innerHTML
if(f){a.data("right-triangle",true)
v={my:"top right",at:"bottom right"}}var c={}
c[s]=d
$.ajax({type:"GET",url:"/api/internal/user/profile",data:c,dataType:"json",success:HoverCard._onHoverCardDataLoaded.bind(this,a)})}a.data("has-qtip",true)
a.qtip({content:{text:n},style:{classes:"custom-override"},hide:{delay:100,fixed:true},position:e||v||{my:"top left",at:"bottom left"}})
a.qtip("show")
if(f){$(".hover-card-triangle").addClass("right")}},_onHoverCardDataLoaded:function(r,e){var a=r.data("user-kaid")||r.data("user-id"),t=new ProfileModel(e)
if(r.attr("href")){t.set({href:r.attr("href")})}if(r.hasClass("profile-programs")){t.set({href:t.get("profileRoot")+"projects"})}var i=new HoverCardView({model:t}),o=i.render().el.innerHTML
HoverCard._cache[a]={model:t,html:o}
r.qtip("option","content.text",o)
var d=t.get("profileRoot")
HoverCard._link(r,d)
if(r.data("right-triangle")){$(".hover-card-triangle").addClass("right")}}}
module.exports=HoverCard
});
KAdefine("javascript/shared-package/hover-card-view.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var i18n=require("./i18n.js")
var HoverCardView=Backbone.View.extend({initialize:function(e){var i={hideStreak:true}
this._options=babelHelpers._extends({},i,e)
this.template=require("./hover-card.handlebars")
if(this.model){this.model.bind("change",this.render.bind(this))}this.render=this.render.bind(this)},render:function(){var e=this._options
if(this.model){Object.assign(e,this.model.toJSON())
if(this.model.isPhantom()){e["nickname"]=i18n._("Unclaimed points")}if(this.model.isPrivate()){e["isPrivate"]=this.model.isPrivate()}}else{e["messageOnly"]=true}this.$el.html(this.template(e))
if(this.model){this.model.fetchFull()}return this}})
module.exports=HoverCardView
});
KAdefine("javascript/shared-package/hover-card.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,a,e,i,s){e=e||n.helpers
var r="",l,o,c,t,f=this,h="function",p=e.blockHelperMissing,d=e.helperMissing,v=void 0,m=this.escapeExpression
function u(n,a){return'\n    <div class="hover-card-triangle"></div>\n    '}function g(n,a){return" vertical-shadow"}function y(n,a){var i="",s
i+='\n                <div class="hover-card-message">\n                    '
c=e["_"]
s=c||n["_"]
t=f.program(6,b,a)
t.hash={}
t.fn=t
t.inverse=f.noop
if(c&&typeof s===h){s=s.call(n,t)}else{s=p.call(n,s,t)}if(s||s===0){i+=s}i+="\n                </div>\n            "
return i}function b(n,a){return"Finding profile information..."}function k(n,a){var i="",s,r
i+='\n                <div class="user-stats '
c=e.isPrivate
s=c||n.isPrivate
r=e["if"]
t=f.program(9,S,a)
t.hash={}
t.fn=t
t.inverse=f.noop
s=r.call(n,s,t)
if(s||s===0){i+=s}i+='">\n                    <div class="badge-container">\n                        '
c=e.publicBadges
s=c||n.publicBadges
r=e.each
t=f.program(11,w,a)
t.hash={}
t.fn=t
t.inverse=f.noop
s=r.call(n,s,t)
if(s||s===0){i+=s}i+='\n                    </div>\n                    <div class="energy-points-badge">\n                        '
c=e.isSal
s=c||n.isSal
r=e["if"]
t=f.program(15,R,a)
t.hash={}
t.fn=t
t.inverse=f.program(17,B,a)
s=r.call(n,s,t)
if(s||s===0){i+=s}i+="\n                    </div>\n                    "
c=e.hideStreak
s=c||n.hideStreak
r=e.unless
t=f.program(19,H,a)
t.hash={}
t.fn=t
t.inverse=f.noop
s=r.call(n,s,t)
if(s||s===0){i+=s}i+="\n                </div>\n                "
i+='\n                <div class="user-actions"></div>\n                <div class="user-info">\n                    <a class="profile-link" href="'
c=e.href
s=c||n.href
r=e["if"]
t=f.program(21,L,a)
t.hash={}
t.fn=t
t.inverse=f.program(23,M,a)
s=r.call(n,s,t)
if(s||s===0){i+=s}i+='">\n                        <img src="'
c=e.avatarSrc
s=c||n.avatarSrc
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=d.call(n,"avatarSrc",{hash:{}})}i+=m(s)+'" class="avatar">\n                        <div class="nickname-container">\n                            <span class="nickname">\n                                '
c=e.nickname
s=c||n.nickname
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=d.call(n,"nickname",{hash:{}})}i+=m(s)+'\n                            </span>\n                            <span class="username">\n                                '
c=e.usernameFormatted
s=c||n.usernameFormatted
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=d.call(n,"usernameFormatted",{hash:{}})}i+=m(s)+'\n                            </span>\n                        </div>\n                    </a>\n                    <div class="bio">\n                        '
c=e.bio
s=c||n.bio
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=d.call(n,"bio",{hash:{}})}i+=m(s)+"\n                    </div>\n                </div>\n            "
return i}function S(n,a){return"private"}function w(n,a){var i="",s,r
i+="\n                            "
s=n
r=e["if"]
t=f.program(12,x,a)
t.hash={}
t.fn=t
t.inverse=f.noop
s=r.call(n,s,t)
if(s||s===0){i+=s}i+="\n                        "
return i}function x(n,a){var i="",s,r
i+="\n                                "
s=n
r=e["with"]
t=f.program(13,F,a)
t.hash={}
t.fn=t
t.inverse=f.noop
s=r.call(n,s,t)
if(s||s===0){i+=s}i+="\n                            "
return i}function F(n,a){var i="",s
i+='\n                                    <img class="badge-icon" src="'
c=e.icons
s=c||n.icons
s=s===null||s===undefined||s===false?s:s.small
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=d.call(n,"icons.small",{hash:{}})}i+=m(s)+'" alt="'
c=e.description
s=c||n.description
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=d.call(n,"description",{hash:{}})}i+=m(s)+'" title="'
c=e.description
s=c||n.description
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=d.call(n,"description",{hash:{}})}i+=m(s)+'">\n                                '
return i}function R(n,a){return'\n                            <span class="infinity-energy-points">\n                                &infin;\n                            </span>\n                        '}function B(n,a){var i="",s,r
i+="\n                            "
c=e.points
s=c||n.points
c=e.commafy
r=c||n.commafy
if(typeof r===h){s=r.call(n,s,{hash:{}})}else if(r===v){s=d.call(n,"commafy",s,{hash:{}})}else{s=r}i+=m(s)+"\n                        "
return i}function H(n,a){var i="",s,r
i+='\n                    <div class="energy-points-badge"\n                         style="background-color: #e57909; margin-right: 5px;">\n                         '
c=e.streakLength
s=c||n.streakLength
c=e.commafy
r=c||n.commafy
if(typeof r===h){s=r.call(n,s,{hash:{}})}else if(r===v){s=d.call(n,"commafy",s,{hash:{}})}else{s=r}i+=m(s)+"\n                    </div>\n                    "
return i}function L(n,a){var i
c=e.href
i=c||n.href
if(typeof i===h){i=i.call(n,{hash:{}})}else if(i===v){i=d.call(n,"href",{hash:{}})}return m(i)}function M(n,a){var i
c=e.profileRoot
i=c||n.profileRoot
if(typeof i===h){i=i.call(n,{hash:{}})}else if(i===v){i=d.call(n,"profileRoot",{hash:{}})}return m(i)}r+='<div class="hover-card-container">\n    '
c=e.hideTriangle
l=c||a.hideTriangle
o=e.unless
t=f.program(1,u,s)
t.hash={}
t.fn=t
t.inverse=f.noop
l=o.call(a,l,t)
if(l||l===0){r+=l}r+='\n    <div class="hover-card-content-container'
c=e.hideShadow
l=c||a.hideShadow
o=e.unless
t=f.program(3,g,s)
t.hash={}
t.fn=t
t.inverse=f.noop
l=o.call(a,l,t)
if(l||l===0){r+=l}r+='">\n        <div class="hover-card-content clearfix">\n            '
c=e.messageOnly
l=c||a.messageOnly
o=e["if"]
t=f.program(5,y,s)
t.hash={}
t.fn=t
t.inverse=f.program(8,k,s)
l=o.call(a,l,t)
if(l||l===0){r+=l}r+="\n        </div>\n    </div>\n</div>\n"
return r})
module.exports=t
});
KAdefine("javascript/shared-package/user-progress-cache.jsx", function(require, module, exports) {
var SELECTORS_PER_RULE=20
var progressByStatus
var statusByKey
function insertCSSIntoHead(e){if(!e.length){return}var t=document.createElement("style")
t.type="text/css"
if(t.styleSheet){t.styleSheet.cssText=e}else{t.appendChild(document.createTextNode(e))}var r=document.getElementsByTagName("head")[0]
r.appendChild(t)}function cssWithProgress(e){var t=[]
var r=e.started
for(var s=0;s<r.length;s+=SELECTORS_PER_RULE){var o=r.slice(s,s+SELECTORS_PER_RULE)
t.push(o.map(function(e){return"."+e}).join(","))
t.push("{background-position:center;}")
t.push(o.map(function(e){return"."+e+" .pipe.completed"}).join(","))
t.push("{display:block;}")}var n=e.complete
for(var s=0;s<n.length;s+=SELECTORS_PER_RULE){var o=n.slice(s,s+SELECTORS_PER_RULE)
t.push(o.map(function(e){return"."+e}).join(","))
t.push("{background-position:bottom;}")
t.push(o.map(function(e){return"."+e+" .pipe.completed"}).join(","))
t.push("{display:block;}")}return t.join("")}var UserProgressCache={init:function(e){if(progressByStatus){throw new Error("Double-initialization of UserProgressCache")}progressByStatus=e
statusByKey={}
e.started.forEach(function(e){statusByKey[e]="started"})
e.complete.forEach(function(e){statusByKey[e]="complete"})
var t=cssWithProgress(e)
insertCSSIntoHead(t)},getStatusForProgressKey:function(e){if(!progressByStatus){throw new Error("UserProgressCache not yet initialized")}return e in statusByKey?statusByKey[e]:"unstarted"}}
module.exports=UserProgressCache
});
KAdefine("javascript/shared-package/exercise-progress-constants.js", function(require, module, exports) {
"use strict"
var i18n=require("./i18n.js")
var ExerciseProgressConstants={LEVEL_NAMES:["unstarted","practiced","mastery1","mastery2","mastery3"],LEVEL_SLUGS:{unstarted:i18n._("Needs Practice"),practiced:i18n._("Practiced"),mastery1:i18n._("Level One"),mastery2:i18n._("Level Two"),mastery3:i18n._("Mastered")},LEVEL_VALUES:{unstarted:0,practiced:1,mastery1:2,mastery2:3,mastery3:4}}
module.exports=ExerciseProgressConstants
});
KAdefine("javascript/mobile-shared-package/exercise-progress-constants.js", function(require, module, exports) {
"use strict"
var ExerciseProgressConstants={LEVEL_NAMES:["unstarted","practiced","mastery1","mastery2","mastery3"],LEVEL_VALUES:{unstarted:0,practiced:1,mastery1:2,mastery2:3,mastery3:4}}
module.exports=ExerciseProgressConstants
});
KAdefine("javascript/mobile-shared-package/exercise-progress-utils.js", function(require, module, exports) {
"use strict"
var ExerciseProgressConstants=require("./exercise-progress-constants.js")
function getCountPerLevel(e){var r={}
ExerciseProgressConstants.LEVEL_NAMES.forEach(function(e){r[e]=0});(e||[]).forEach(function(e){r[e.state]++})
return r}function getProgressPercentage(e){var r=e["mastery3"]*4+e["mastery2"]*3+e["mastery1"]*2+e["practiced"]*1+e["unstarted"]*0
var s=e["mastery3"]*4+e["mastery2"]*4+e["mastery1"]*4+e["practiced"]*4+e["unstarted"]*4
return Math.floor(100*r/s)}var progressCompare=function(e,r){return ExerciseProgressConstants.LEVEL_VALUES[e]-ExerciseProgressConstants.LEVEL_VALUES[r]}
var ExerciseProgressUtils={getCountPerLevel:getCountPerLevel,getProgressPercentage:getProgressPercentage,progressCompare:progressCompare}
module.exports=ExerciseProgressUtils
});
KAdefine("javascript/shared-package/visit-tracking.js", function(require, module, exports) {
var $=require("jquery")
var BigBingo=require("./bigbingo.js")
var Cookies=require("./cookies.js")
var KA=require("./ka.js")
var getSeconds=function(e){var i=new Date
if(e){i=new Date(e)}return Math.floor(+i/1e3)}
var returnVisitTime=60*60*3
var keepCookieFor=365*2
var frequency=60*30
var VisitTracking={_serverPageLoadTime:null,_browserPageLoadTime:null,_init:function(){if(this._initDone){return}this._initDone=true
VisitTracking._serverPageLoadTime=KA.currentServerTime()
VisitTracking._browserPageLoadTime=getSeconds()},trackVisit:function(){if(!KA.INITIALIZED||!Cookies.areCookiesEnabled()){return}VisitTracking._init()
var e=KA.getUserID()
var i=encodeURIComponent(e)
var r=getSeconds()
var t=r-VisitTracking._browserPageLoadTime
var o=VisitTracking._serverPageLoadTime+t
function n(){Cookies.createCookie("return_visits_"+i,o,keepCookieFor)}function a(){var i=""
if(!e){i="pre_phantom"}else if(KA.getUserProfile().isPhantom()){i="phantom"}else{i="logged_in"}var t=["return_visit",i+"_return_visit"]
var o=KA.getUserProfile()
if(o&&!o.attributes.isPhantom){var a=getSeconds(o.attributes.dateJoined)
if(r-a<60*60*24*7){t.push("logged_in_return_visit_7_day")}}if(o&&o.attributes.isChildAccount){$.post("/api/internal/user/mark_bingo_conversion_for_parent",{conversion_id:"child_return_visit"})}BigBingo.markConversions(t)
n()}var s=+Cookies.readCookie("return_visits_"+i)
if(!s){n()
return}var u=o-s
if(u>returnVisitTime){setTimeout(a,3e4)}else if(u>frequency){n()}}}
module.exports=VisitTracking
});
KAdefine("third_party/javascript-khansrc/seedrandom/seedrandom.js", function(__KA_require, __KA_module, __KA_exports) {
(function(n,t,e,r,i,o,u,a,f){var c=e.pow(r,i),l=e.pow(2,o),h=l*2,p=r-1,s=e["seed"+f]=function(n,o,u){var a=[]
o=o==true?{entropy:true}:o||{}
var p=v(d(o.entropy?[n,y(t)]:n==null?w():n,3),a)
var s=new g(a)
v(y(s.S),t)
return(o.pass||u||function(n,t,r){if(r){e[f]=n
return t}else return n})(function(){var n=s.g(i),t=c,e=0
while(n<l){n=(n+e)*r
t*=r
e=s.g(1)}while(n>=h){n/=2
t/=2
e>>>=1}return(n+e)/t},p,"global"in o?o.global:this==e)}
function g(n){var t,e=n.length,i=this,o=0,u=i.i=i.j=0,a=i.S=[]
if(!e){n=[e++]}while(o<r){a[o]=o++}for(o=0;o<r;o++){a[o]=a[u=p&u+n[o%e]+(t=a[o])]
a[u]=t}(i.g=function(n){var t,e=0,o=i.i,u=i.j,a=i.S
while(n--){t=a[o=p&o+1]
e=e*r+a[p&(a[o]=a[u=p&u+t])+(a[u]=t)]}i.i=o
i.j=u
return e})(r)}function d(n,t){var e=[],r=typeof n,i
if(t&&r=="object"){for(i in n){try{e.push(d(n[i],t-1))}catch(o){}}}return e.length?e:r=="string"?n:n+"\x00"}function v(n,t){var e=n+"",r,i=0
while(i<e.length){t[p&i]=p&(r^=t[p&i]*19)+e.charCodeAt(i++)}return y(t)}function w(e){try{n.crypto.getRandomValues(e=new Uint8Array(r))
return y(e)}catch(i){return[+new Date,n,(e=n.navigator)&&e.plugins,n.screen,y(t)]}}function y(n){return String.fromCharCode.apply(0,n)}v(e[f](),t)
if(u&&u.exports){u.exports=s}else if(a&&a.amd){a(function(){return s})}})(this,[],Math,256,6,52,typeof module=="object"&&module,typeof define=="function"&&define,"random")
});
KAdefine("javascript/react-package/kui/survey.jsx", function(require, module, exports) {
var $=require("jquery")
var classNames=require("classnames")
var React=require("react")
var ReactDOM=require("react-dom")
var $_=require("../../shared-package/i18n.js").$_
require("../../../third_party/javascript-khansrc/seedrandom/seedrandom.js")
var shuffleArrayWithSeed=function(e,t){var s=e.slice()
var r=new Math.seedrandom(t!=null?t:Date.now()/1e3)
for(var i=s.length;i>0;i--){var a=Math.floor(r()*i)
var n=s[a]
s[a]=s[i-1]
s[i-1]=n}return s}
var KUISurvey=React.createClass({displayName:"KUISurvey",propTypes:{className:React.PropTypes.string,triggered:React.PropTypes.bool,completed:React.PropTypes.bool,onComplete:React.PropTypes.func.isRequired,currentQuestion:React.PropTypes.number,onNextQuestion:React.PropTypes.func.isRequired,minimized:React.PropTypes.bool,onMinimize:React.PropTypes.func.isRequired,messageDelay:React.PropTypes.number,randomSeed:React.PropTypes.number,questions:React.PropTypes.arrayOf(React.PropTypes.shape({prompt:React.PropTypes.node.isRequired,answers:React.PropTypes.arrayOf(React.PropTypes.shape({text:React.PropTypes.node.isRequired,onAnswer:React.PropTypes.func,nextQuestion:React.PropTypes.number})).isRequired})).isRequired},getDefaultProps:function(){return{triggered:false,completed:false,currentQuestion:0,minimized:false,messageDelay:2}},getInitialState:function(){return{height:0,showMessage:false}},componentDidMount:function(){if(!this.props.minimized){this.setState({height:this.calculateHeight()})}},componentDidUpdate:function(e,t){if(!e.minimized&&this.props.minimized){this.setState({height:0})}else if(e.triggered!==this.props.triggered||e.currentQuestion!==this.props.currentQuestion||e.minimized!==this.props.minimized||t.showMessage!==this.state.showMessage){this.setState({height:this.calculateHeight()})}},calculateHeight:function(){return $(ReactDOM.findDOMNode(this.refs.question)).outerHeight(true)},render:function(){var e=this
if(!this.props.triggered||this.props.completed&&!this.state.showMessage){return null}var t
if(this.state.showMessage){t=React.createElement("div",{className:"kui-survey__question kui-survey__message",ref:"question"},$_(null,"Thank you!"))}else{var s=this.props.questions[this.props.currentQuestion]
t=React.createElement("div",{className:"kui-survey__question",ref:"question"},React.createElement("div",{className:"kui-survey__prompt"},s.prompt),React.createElement("div",null,shuffleArrayWithSeed(s.answers.map(function(t,s){return React.createElement("div",{className:"kui-survey__answer",key:s,onClick:function(){return e.onAnswer(t)}},t.text)}),this.props.randomSeed)))}var r=classNames("kui-survey",this.props.className)
return React.createElement("div",{className:r,style:{height:this.state.height}},React.createElement("div",{className:"kui-survey__handle",onClick:function(){return e.props.onMinimize(!e.props.minimized)}},this.props.minimized?React.createElement("i",{className:"icon-plus",style:{fontSize:14}}):React.createElement("span",{style:{fontSize:20}},"—")),React.createElement("div",{className:"kui-survey__body"},t))},onAnswer:function(e){var t=this
e.onAnswer&&e.onAnswer()
if(e.nextQuestion!=null){this.props.onNextQuestion(e.nextQuestion)}else{this.setState({showMessage:true},function(){t.props.onComplete(true)
setTimeout(function(){return t.setState({showMessage:false})},1e3*t.props.messageDelay)})}}})
module.exports=KUISurvey
});
KAdefine("javascript/shared-package/session-survey.jsx", function(require, module, exports) {
var React=require("react")
var ReactDOM=require("react-dom")
var $=require("jquery")
var $_=require("../shared-package/i18n.js").$_
var BigBingo=require("../shared-package/bigbingo.js")
var Cookies=require("../shared-package/cookies.js")
var LocalStore=require("../shared-package/local-store.js")
var Survey=require("../react-package/kui/survey.jsx")
var ga=window.ga||function(){}
var QUESTIONS=[{prompt:$_(null,"Was Khan Academy helpful to you today?"),answers:[{text:$_(null,"Yes"),onAnswer:function(){BigBingo.markConversion("session_helpful_yes")
ga("send","event","Session","Helpful","Yes")},nextQuestion:1},{text:$_(null,"No"),onAnswer:function(){BigBingo.markConversion("session_helpful_no")
ga("send","event","Session","Helpful","No")},nextQuestion:1}]},{prompt:$_(null,"Did you find what you came here for today?"),answers:[{text:$_(null,"Yes, easily"),onAnswer:function(){BigBingo.markConversion("session_findable_yes_easily")
ga("send","event","Session","Findable","Yes, easily")}},{text:$_(null,"Yes, eventually"),onAnswer:function(){BigBingo.markConversion("session_findable_yes_eventually")
ga("send","event","Session","Findable","Yes, eventually")}},{text:$_(null,"No"),onAnswer:function(){BigBingo.markConversion("session_findable_no")
ga("send","event","Session","Findable","No")}},{text:$_(null,"I wasn't looking for anything in particular"),onAnswer:function(){BigBingo.markConversion("session_findable_not_applicable")
ga("send","event","Session","Findable","Not Applicable")}}]}]
var SESSION_COOKIE_NAME="ka_session"
var SESSION_SURVEY_STORE_KEY="session_survey"
var SESSION_TIMEOUT_LENGTH_IN_SECONDS=30*60
var SESSION_VALIDATION_LOOP_LENGTH_IN_SECONDS=5*60
var SessionSurvey=React.createClass({displayName:"SessionSurvey",getInitialState:function(){return LocalStore.get(SESSION_SURVEY_STORE_KEY)||{}},setStateAndStore:function(e,t){var n=LocalStore.get(SESSION_SURVEY_STORE_KEY)||{}
var i=babelHelpers._extends({},n,e)
LocalStore.set(SESSION_SURVEY_STORE_KEY,i)
this.setState(i,t)},render:function(){var e=this
return React.createElement(Survey,{className:"session-survey",triggered:this.state.triggered,completed:this.state.completed,onComplete:function(t){e.setStateAndStore({completed:t})},currentQuestion:this.state.currentQuestion,onNextQuestion:function(t){e.setStateAndStore({currentQuestion:t})},minimized:this.state.minimized,onMinimize:function(t){e.setStateAndStore({minimized:t})},randomSeed:this.state.randomSeed,questions:this.props.questions})},componentWillMount:function(){this.checkForNewSession()},componentDidMount:function(){if(!this.state.triggered){this.startSessionTriggerTimer()}else{this.startSessionValidationLoop()}window.addEventListener("storage",this.onStorage)
window.addEventListener("focus",this.onFocus)},componentDidUpdate:function(e,t){if(this.state.triggered&&!t.triggered){this.startSessionValidationLoop()}},componentWillUnmount:function(){window.removeEventListener("storage",this.onStorage)
window.removeEventListener("focus",this.onFocus)},checkForNewSession:function(){var e=Cookies.readCookie(SESSION_COOKIE_NAME)
var t=e&&e.split(":")[0]
if(!t){return}if(t!==this.state.sessionId){var n=Date.now()/1e3
var i=n+10+(30*60-10)*Math.sqrt(Math.random())
this.setStateAndStore({triggered:false,completed:false,currentQuestion:0,minimized:false,randomSeed:n,sessionId:t,surveyTime:i})}},startSessionTriggerTimer:function(){var e=this
var t=Date.now()/1e3
var n=this.state.surveyTime-t+Math.random()
setTimeout(function(){var t=LocalStore.get(SESSION_SURVEY_STORE_KEY)||{}
if(!t.triggered){e.setStateAndStore({triggered:true})
BigBingo.markConversion("session_survey_shown")
ga("send","event","Session","Survey","Shown")}},1e3*Math.max(n,0))},startSessionValidationLoop:function(){var e=this
var t=function(){return e.setStateAndStore({completed:true})}
var n=function(){if(e.state.completed){return}var i=Date.now()/1e3
var s=Cookies.readCookie(SESSION_COOKIE_NAME)
var o=s&&s.split(":")[2]
var r=o&&Number(o)
if(!r){t()}else if(i-r>SESSION_TIMEOUT_LENGTH_IN_SECONDS){t()}else{setTimeout(n,SESSION_VALIDATION_LOOP_LENGTH_IN_SECONDS*1e3)}}
n()},onStorage:function(e){if(e.key===LocalStore.cacheKey(SESSION_SURVEY_STORE_KEY)){this.setState(LocalStore.get(SESSION_SURVEY_STORE_KEY)||{})}},onFocus:function(){if(this.state.triggered&&!this.state.completed){$.get("/api/internal/ping")}}})
var initializeSessionSurvey=function(){if(!LocalStore.isEnabled()){return}var e=document.createElement("div")
document.body.appendChild(e)
ReactDOM.render(React.createElement(SessionSurvey,{questions:QUESTIONS}),e)}
module.exports=initializeSessionSurvey
});
KAdefine("javascript/shared-package/generic-dialog.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(t,a,l,e,i){l=l||t.helpers
var s="",n,o,r,h,f=this,c="function",d=l.helperMissing,p=void 0,u=this.escapeExpression
function v(t,a){var e="",i,s
e+='\n    <div class="modal-footer">\n        '
r=l.buttons
i=r||t.buttons
s=l.each
h=f.program(2,m,a)
h.hash={}
h.fn=h
h.inverse=f.noop
i=s.call(t,i,h)
if(i||i===0){e+=i}e+="\n    </div>\n    "
return e}function m(t,a){var e="",i,s
e+="\n            "
r=l.buttonColor
i=r||t.buttonColor
s=l["if"]
h=f.program(3,b,a)
h.hash={}
h.fn=h
h.inverse=f.program(5,g,a)
i=s.call(t,i,h)
if(i||i===0){e+=i}e+="\n        "
return e}function b(t,a){var e="",i
e+='\n                <a class="generic-button simple-button '
r=l.buttonColor
i=r||t.buttonColor
if(typeof i===c){i=i.call(t,{hash:{}})}else if(i===p){i=d.call(t,"buttonColor",{hash:{}})}e+=u(i)+'" href="javascript:void(0)" data-id="'
r=l.title
i=r||t.title
if(typeof i===c){i=i.call(t,{hash:{}})}else if(i===p){i=d.call(t,"title",{hash:{}})}e+=u(i)+'">'
r=l.title
i=r||t.title
if(typeof i===c){i=i.call(t,{hash:{}})}else if(i===p){i=d.call(t,"title",{hash:{}})}e+=u(i)+"</a>\n            "
return e}function g(t,a){var e="",i
e+='\n                <a class="generic-button simple-button" href="javascript:void(0)" data-id="'
r=l.title
i=r||t.title
if(typeof i===c){i=i.call(t,{hash:{}})}else if(i===p){i=d.call(t,"title",{hash:{}})}e+=u(i)+'">'
r=l.title
i=r||t.title
if(typeof i===c){i=i.call(t,{hash:{}})}else if(i===p){i=d.call(t,"title",{hash:{}})}e+=u(i)+"</a>\n            "
return e}s+='<div class="generic-dialog modal hide">\n    <div class="modal-header">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <h2>'
r=l.title
n=r||a.title
if(typeof n===c){n=n.call(a,{hash:{}})}else if(n===p){n=d.call(a,"title",{hash:{}})}s+=u(n)+'</h2>\n    </div>\n    <div class="modal-body">\n        <p>'
r=l.message
n=r||a.message
if(typeof n===c){n=n.call(a,{hash:{}})}else if(n===p){n=d.call(a,"message",{hash:{}})}if(n||n===0){s+=n}s+="</p>\n    </div>\n    "
r=l.buttons
n=r||a.buttons
o=l["if"]
h=f.program(1,v,i)
h.hash={}
h.fn=h
h.inverse=f.noop
n=o.call(a,n,h)
if(n||n===0){s+=n}s+="\n</div>\n"
return s})
module.exports=t
});
KAdefine("javascript/shared-package/pageutil.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-modal.js")
var $=require("jquery")
var Backbone=require("backbone")
var moment=require("moment")
var i18n=require("./i18n.js")
var BigBingo=require("./bigbingo.js")
var NotificationsLoader=require("./notifications-loader.js")
var DemoNotifications={show:function(){NotificationsLoader.loadUrgent({class_:["DemoNotification"]})
$(".show-demo-dialog").click(function(e){e.preventDefault()
var o=e.target.href||"/"
o="/logout?continue="+encodeURIComponent(o)
popupGenericMessageBox({title:"Leaving Demo",message:i18n._("The Demo allows you to view coach and student reports for a demo account. Navigating out of the demo area will log you out of the demo account."),buttons:[{title:"Cancel",action:hideGenericMessageBox},{title:"Leave demo",action:function(){hideGenericMessageBox
window.location=o},buttonColor:"green"}]})})}}
var parseISO8601=function(e){var o=e.split("T"),r=o[0].split("-"),i=o[1].split("Z"),t=i[0].split(":"),s=t[2].split("."),n=Number(t[0]),a=new Date
a.setUTCFullYear(Number(r[0]))
a.setUTCMonth(Number(r[1])-1)
a.setUTCDate(Number(r[2]))
a.setUTCHours(Number(n))
a.setUTCMinutes(Number(t[1]))
a.setUTCSeconds(Number(s[0]))
if(s[1]){a.setUTCMilliseconds(Number(s[1]))}return a}
var toISO8601=function(e){return moment(e).utc().format().replace("+00:00","Z")}
var CSSMenus={active_menu:null,init:function(){$(".noscript").removeClass("noscript")
$(document).delegate(".css-menu > ul > li","click",function(){if(CSSMenus.active_menu){CSSMenus.active_menu.removeClass("css-menu-js-hover")}if(CSSMenus.active_menu&&this===CSSMenus.active_menu[0]){CSSMenus.active_menu=null}else{CSSMenus.active_menu=$(this).addClass("css-menu-js-hover")}})
$(document).bind("click focusin",function(e){if(CSSMenus.active_menu&&$(e.target).closest(".css-menu").length===0){CSSMenus.active_menu.removeClass("css-menu-js-hover")
CSSMenus.active_menu=null}})
$(document).delegate(".css-menu a",{focus:function(e){$(e.target).addClass("css-menu-js-hover").closest(".css-menu > ul > li").addClass("css-menu-js-hover")},blur:function(e){$(e.target).removeClass("css-menu-js-hover").closest(".css-menu > ul > li").removeClass("css-menu-js-hover")}})}}
var Throbber={jElement:null,show:function(e,o){if(!Throbber.jElement){Throbber.jElement=$("<img style='display:none;' src='/images/throbber.gif' class='throbber'/>")
$(document.body).append(Throbber.jElement)}if(!e.length){return}var r=e.offset()
var i=r.top+e.height()/2-8
var t=o?r.left-16-4:r.left+e.width()+4
Throbber.jElement.css("top",i).css("left",t).css("z-index",2e3).css("display","")},hide:function(){if(Throbber.jElement){Throbber.jElement.css("display","none")}}}
var ProgressLoadingView=Backbone.View.extend({initialize:function(){this.render()},render:function(){this.$el.html('<div class="loading-progress-bar ui-progressbar ui-widget ui-widget-content ui-corner-all"><div class="ui-progressbar-value ui-widget-header ui-corner-left ui-corner-right"></div></div>')}})
var temporaryDetachElement=function(e,o,r){var i,t
i=e.next()
if(i.length>0){t=function(){e.insertBefore(i)}}else{i=e.parent()
t=function(){e.appendTo(i)}}e.detach()
var s=o.call(r||this,e)
t()
return s}
var messageBox=null
var popupGenericMessageBox=function(e){if(messageBox){$(messageBox).modal("hide").remove()}e=babelHelpers._extends({buttons:[{title:"OK",action:hideGenericMessageBox}]},e)
var o=require("./generic-dialog.handlebars")
messageBox=$(o(e)).appendTo(document.body).modal({keyboard:true,backdrop:true,show:true}).get(0)
if(e.width){$(messageBox).css({width:e.width+"px","margin-left":-.5*e.width+"px"})}e.buttons.forEach(function(e){$('.generic-button[data-id="'+e.title+'"]',$(messageBox)).click(e.action)})}
var hideGenericMessageBox=function(){if(messageBox){$(messageBox).modal("hide")}messageBox=null}
var isLoadedFromBrowserCache=function(){if(isLoadedFromBrowserCache.memoized==null){isLoadedFromBrowserCache.memoized=$("#page_loaded_from_browser_cache").val()==="1"
$("#page_loaded_from_browser_cache").val("1")}return isLoadedFromBrowserCache.memoized}
var bookmarkMe=function(e,o){if(window.sidebar&&window.sidebar.addPanel){window.sidebar.addPanel(document.title,window.location.href,"")}else if(window.external&&window.external.AddFavorite){window.external.AddFavorite(location.href,document.title)}else if(window.opera&&window.print){this.title=document.title
return true}else{var r=e||i18n._("Press Command + D to bookmark this page.")
var i=o||i18n._("Press CTRL + D to bookmark this page.")
if(navigator.userAgent.toLowerCase().indexOf("mac")!==-1){alert(r)}else{alert(i)}}}
module.exports={BigBingo:BigBingo,CSSMenus:CSSMenus,DemoNotifications:DemoNotifications,ProgressLoadingView:ProgressLoadingView,Throbber:Throbber,bookmarkMe:bookmarkMe,hideGenericMessageBox:hideGenericMessageBox,isLoadedFromBrowserCache:isLoadedFromBrowserCache,parseISO8601:parseISO8601,toISO8601:toISO8601,popupGenericMessageBox:popupGenericMessageBox,temporaryDetachElement:temporaryDetachElement}
});
KAdefine("javascript/shared-package/parse-query-string.js", function(require, module, exports) {
var parseQueryString=function(e){e=e!=null?e:window.location.search.substring(1)
var r={},n,o=/\+/g,t=/([^&=]+)=?([^&]*)/g,u=function(e){return decodeURIComponent(e.replace(o," "))}
while(n=t.exec(e)){r[u(n[1])]=u(n[2])}return r}
module.exports=parseQueryString
});
KAdefine("javascript/shared-package/timezone.js", function(require, module, exports) {
var Timezone={append_tz_offset_query_param:function(e,t){if(e.indexOf("?")>-1){e+="&"}else{e+="?"}return e+"tz_offset="+Timezone.get_tz_offset(t)},get_tz_offset:function(e){e=e||new Date
return-1*e.getTimezoneOffset()}}
module.exports=Timezone
});
KAdefine("javascript/shared-package/update-document-title.js", function(require, module, exports) {
var i18n=require("./i18n.js")
var KA=require("./ka.js")
var updateDocumentTitle=function(e){var t=KA.getUserProfile()
if(e&&typeof e.pageName!=="undefined"){KA.currentPageName=e.pageName+" | "+i18n._("Khan Academy")}if(e&&t&&typeof e.noteCount!=="undefined"){t.set("countBrandNewNotifications",e.noteCount)}var n=t?t.get("countBrandNewNotifications"):0,a=KA.currentPageName
document.title=n>0?"("+n+") "+a:a}
module.exports=updateDocumentTitle
});
KAdefine("javascript/shared-package/validate-email.js", function(require, module, exports) {
var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var validateEmail=function(a){return a.match(re)}
module.exports=validateEmail
});
KAdefine("javascript/shared-package/badges.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/qTip2/jquery.qtip.js")
var $=require("jquery")
var Backbone=require("backbone")
var i18n=require("./i18n.js")
var Analytics=require("./analytics.js")
var FacebookUtil=require("./facebookutil.js")
var KA=require("./ka.js")
var KAConsole=require("./console.js")
var Social=require("./social.js")
var Badges={showMoreContext:function(e){var a=$(e).parents(".badge-context-hidden-link")
var t=a.parents(".achievement-badge")
var i=$(".badge-context-hidden",t)
if(a.length&&t.length&&i.length){$(".ellipsis",a).remove()
a.html(a.text())
i.css("display","")
t.find(".achievement-desc").addClass("expanded")
t.css("min-height",t.css("height")).css("height","auto")}},renderShareLinks:function(e,a){var t=Badges.ShareLinksView.addShareLinksContext(a)
var i=new Badges.ShareLinksView({el:e,model:new Backbone.Model(t)})
i.render()}}
Badges.ContextType={NONE:0,EXERCISE:1,PLAYLIST:2}
Badges.Category={BRONZE:0,SILVER:1,GOLD:2,PLATINUM:3,DIAMOND:4,MASTER:5}
Badges.Badge=Backbone.Model.extend({defaults:{badgeCategory:Badges.Category.BRONZE,name:"__empty__",description:"",icons:{},isOwned:false,points:0,safeExtendedDescription:""},isEmpty:function(){return this.get("name")==="__empty__"},toJSON:function(){var e=Badges.Badge.__super__.toJSON.call(this)
e["isEmpty"]=this.isEmpty()
return e}})
Badges.Badge.EMPTY_BADGE=new Badges.Badge({})
Badges.UserBadge=Backbone.Model.extend({defaults:{badge:null,count:1,lastEarnedDate:"2011-11-22T00:00:00Z",targetContextNames:[],isOwned:true},initialize:function(e,a){if(!this.get("badge")){throw new Error("A UserBadge object needs a reference badge object")}var t=new Badges.Badge(this.get("badge"))
this.set({badge:t},{silent:true})
t.bind("change",function(e){this.trigger("change:badge")},this)}})
Badges.addUserBadgeContext=function(e){var a=e["translatedTargetContextNames"]
var t=a.length-1
e["visibleContextName"]=a[0]||""
e["listContextNamesHidden"]=$.map(a.slice(1),function(e,a){return{name:e,isLast:a===t-1}})
e["hasMultiple"]=e["count"]>1
return e}
Badges.BadgeList=Backbone.Collection.extend({model:Badges.Badge,saveUrl:null,dirty_:false,setSaveUrl:function(e){this.saveUrl=e},toJSON:function(){return this.map(function(e){return e.get("name")})},add:function(e,a){Badges.BadgeList.__super__.add.apply(this,arguments)
this.dirty_=true},remove:function(e,a){Badges.BadgeList.__super__.remove.apply(this,arguments)
this.dirty_=true},save:function(e){if(!this.dirty_){return}e=e||{}
e["url"]=this.saveUrl
e["contentType"]="application/json"
e["data"]=JSON.stringify(this.map(function(e){return e.get("name")}))
Backbone.sync.call(this,"update",this,e)
this.dirty_=false},parse:function(e,a){if("apiActionResults"in e&&"payload"in e){e=e["payload"]}Backbone.Model.prototype.parse.call(this,e,a)}})
Badges.UserBadgeList=Backbone.Collection.extend({model:Badges.UserBadge})
Badges.ShareLinksView=Backbone.View.extend({template:require("./share-links.handlebars"),events:{"click .emailShare":"shareEmail","click .twitterShare":"shareTwitter","click .facebookShare":"shareFacebook"},render:function(){this.$el.html(this.template(this.model.attributes))},trackShare:function(e){var a=this.model.get("description")
var t=this.model.get("badgeCategory")
if(window.ga){ga("send","event","Badges",e,a,t)}var i={}
i["Description"]=a
i["Badge Category"]=t
i["Name"]=this.model.get("name")
i["Points"]=this.model.get("points")
Analytics.trackSingleEvent("Badges "+e,i)},shareEmail:function(e){this.trackShare("Share Email")},shareTwitter:function(e){this.trackShare("Share Twitter")},shareFacebook:function(e){if(this.alreadySharedOnFacebook){KAConsole.log("Ignored duplicate share attempt.")
return}if(!KA.getUserProfile()){this.showQTip(i18n._("<a href='/login?continue=/profile' class='simple-button qtip-button green'>Log in</a> to claim your badge on Facebook."))
return}var a=this.model
var t=a.get("slug")
var i=KA.getUserProfile()&&FacebookUtil.isUsingFbLogin()
if(i&&FacebookUtil.hasPublishStreamPermission()){this.openGraphShare(t)}else{var r=this
FacebookUtil.runOnFbReady(function(){FB.login(function(e){if(!e||e.error||!e.authResponse){var a=e&&e.error?e.error.code:null
r.handleFacebookErrors(a)}else if(e){FB.api("/me/permissions","get",function(e){if(!e||e.error){var a=e&&e.error?e.error.code:null
r.handleFacebookErrors(a)}else{var i=e.data&&e.data[0]&&e.data[0].publish_stream===1
if(i){FacebookUtil.setPublishStreamPermission(true)
r.openGraphShare(t)}else{FacebookUtil.setPublishStreamPermission(false)
r.showQTip(i18n._("Sorry, you must grant access in order to share this on Facebook. Try again."))
KAConsole.log("FB OpenGraph badge share failed - permission denied.")}}})}},{scope:"email,publish_stream"})})}},handleFacebookErrors:function(e){if(e===200){FacebookUtil.setPublishStreamPermission(false)
this.showQTip(i18n._("Sorry, you must grant access in order to share this on Facebook. Try again."))}else if(e===3501){this.setShared(i18n._("This badge has already been posted to your timeline."))}else{this.showQTip(i18n._("Sorry, we weren't able to share this. Please try again later."))}},handleErrors:function(e){var a=e.responseText
var t=e.status
KAConsole.log(a)
if(t===401){this.showQTip(i18n._("Sorry, our records don't show that you've earned this badge."))
return}else if(t===400){var i=/(#)(\d+)/
var r=i.exec(a)
if(r){var s=r[2]
this.handleFacebookErrors(parseInt(s))
return}}this.showQTip(i18n._("Sorry, we weren't able to share this. Please try again."))},openGraphShare:function(e){this.showQTip("<img src='/images/spinner-arrows-bg-1c1c1c.gif' style='margin-right: 5px; position: relative; top: 1px'> "+i18n._("Sharing on Facebook..."),true)
$.ajax({type:"POST",url:"/api/internal/user/badges/"+e+"/opengraph-earn",success:this.finishShare.bind(this),error:this.handleErrors.bind(this)})},setShared:function(e){this.alreadySharedOnFacebook=true
this.$(".facebookShare").contents().last().replaceWith("Shared")
this.showQTip(e)},finishShare:function(){this.setShared(i18n._("This badge will now appear in your timeline!"))
this.trackShare("Share Facebook Open Graph")
KAConsole.log("OG post succeeded!")},showQTip:function(e,a){var t=this
var i={content:e,position:{my:"top right",at:"bottom left"},show:{ready:true},style:"qtip-shadow qtip-rounded qtip-youtube",hide:{delay:5e3},events:{hidden:this.removeHideDelay.bind(this)}}
if(a){i.hide=false
delete i.events}else{setTimeout(function(){t.hide()
t.removeHideDelay()},5e3)}this.$(".facebookShare").qtip(i)},removeHideDelay:function(){this.$(".facebookShare").qtip("api").set("hide.delay",0)},hide:function(){var e=this.$(".facebookShare").qtip("api")
if(e){e.hide()}}},{addShareLinksContext:function(e){var a=e.absoluteUrl
var t=e.translatedDescription
e.emailLink=Social.emailBadge(a,t)
e.twitterLink=Social.twitterBadge(a,t)
return e}})
module.exports=Badges
});
KAdefine("javascript/shared-package/request-animation-frame.js", function(require, module, exports) {
var vendors=["ms","moz","webkit","o"]
for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+"RequestAnimationFrame"]}var lastTime=0
if(!window.requestAnimationFrame){window.requestAnimationFrame=function(e,n){var i=Date.now()
var a=Math.max(0,16-(i-lastTime))
var t=window.setTimeout(function(){e(Date.now())},a)
lastTime=i+a
return t}}
});
KAdefine("javascript/shared-package/bind-signup-link.js", function(require, module, exports) {
var Cookies=require("./cookies.js")
var KA=require("./ka.js")
var launchSignupInModal=require("./launch-signup-in-modal.js")
var bindSignupLink=function(n,i,e,o){if(!KA.isPhantom()){return}if(Cookies.readCookie("u13")){return}if(window.location.pathname==="/signup"){return}if(KA.isMobileCapable){return}if(!n||n.length===0){return}n.on("click",function(n){if(i){i()}launchSignupInModal(e,o)
n.preventDefault()}).one("mouseenter",function(n){require.async(["../login-package/login.js","../login-package/signup-modal.jsx","package!login.css"],function(){})})}
module.exports=bindSignupLink
});
KAdefine("javascript/shared-package/launch-signup-in-modal.js", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
var ReactDOM=require("react-dom")
var launchSignupInModal=function(e,n){require.async(["../login-package/login.js","../login-package/signup.js","../login-package/signup-modal.jsx","package!login.css"],function(a,o,i){i=React.createFactory(i)
var c=$("#modal-signup-container")
if(c.length===0){c=$('<div id="modal-signup-container">').appendTo("body")}ReactDOM.unmountComponentAtNode(c[0])
ReactDOM.render(i({onFacebookClick:o._signupFacebook,onGoogleClick:o._signupGoogle,initialRole:e,signupSource:n}),c[0])})}
module.exports=launchSignupInModal
});
KAdefine("third_party/javascript-khansrc/babeljs/babel-external-helpers.js", function(__KA_require, __KA_module, __KA_exports) {
(function(e){var r=e.babelHelpers={}
r.inherits=function(e,r){if(typeof r!=="function"&&r!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof r)}e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
if(r)e.__proto__=r}
r.defaults=function(e,r){var t=Object.getOwnPropertyNames(r)
for(var n=0;n<t.length;n++){var o=t[n]
var i=Object.getOwnPropertyDescriptor(r,o)
if(i&&i.configurable&&e[o]===undefined){Object.defineProperty(e,o,i)}}return e}
r.createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}return function(r,t,n){if(t)e(r.prototype,t)
if(n)e(r,n)
return r}}()
r.taggedTemplateLiteral=function(e,r){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}
r.taggedTemplateLiteralLoose=function(e,r){e.raw=r
return e}
r.toArray=function(e){return Array.isArray(e)?e:Array.from(e)}
r.toConsumableArray=function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r]
return t}else{return Array.from(e)}}
r.slicedToArray=function(e,r){if(Array.isArray(e)){return e}else if(Symbol.iterator in Object(e)){var t=[]
var n=true
var o=false
var i=undefined
try{for(var a=e[Symbol.iterator](),u;!(n=(u=a.next()).done);n=true){t.push(u.value)
if(r&&t.length===r)break}}catch(f){o=true
i=f}finally{try{if(!n&&a["return"])a["return"]()}finally{if(o)throw i}}return t}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}
r.slicedToArrayLoose=function(e,r){if(Array.isArray(e)){return e}else if(Symbol.iterator in Object(e)){var t=[]
for(var n=e[Symbol.iterator](),o;!(o=n.next()).done;){t.push(o.value)
if(r&&t.length===r)break}return t}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}
r.objectWithoutProperties=function(e,r){var t={}
for(var n in e){if(r.indexOf(n)>=0)continue
if(!Object.prototype.hasOwnProperty.call(e,n))continue
t[n]=e[n]}return t}
r.hasOwn=Object.prototype.hasOwnProperty
r.slice=Array.prototype.slice
r.bind=Function.prototype.bind
r.defineProperty=function(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}
r.interopRequireWildcard=function(e){if(e&&e.__esModule){return e}else{var r={}
if(e!=null){for(var t in e){if(Object.prototype.hasOwnProperty.call(e,t))r[t]=e[t]}}r["default"]=e
return r}}
r.interopRequireDefault=function(e){return e&&e.__esModule?e:{"default":e}}
r._typeof=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}
r._extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]
for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n)){e[n]=t[n]}}}return e}
r.get=function t(e,r,n){var o=Object.getOwnPropertyDescriptor(e,r)
if(o===undefined){var i=Object.getPrototypeOf(e)
if(i===null){return undefined}else{return t(i,r,n)}}else if("value"in o){return o.value}else{var a=o.get
if(a===undefined){return undefined}return a.call(n)}}
r.set=function n(e,r,t,o){var i=Object.getOwnPropertyDescriptor(e,r)
if(i===undefined){var a=Object.getPrototypeOf(e)
if(a!==null){n(a,r,t,o)}}else if("value"in i&&i.writable){i.value=t}else{var u=i.set
if(u!==undefined){u.call(o,t)}}return t}
r.classCallCheck=function(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}
r.objectDestructuringEmpty=function(e){if(e==null)throw new TypeError("Cannot destructure undefined")}
r.temporalUndefined={}
r.temporalAssertDefined=function(e,r,t){if(e===t){throw new ReferenceError(r+" is not defined - temporal dead zone")}return true}
r.selfGlobal=typeof e==="undefined"?self:e
r.defaultProps=function(e,r){if(e){for(var t in e){if(typeof r[t]==="undefined"){r[t]=e[t]}}}return r}
r._instanceof=function(e,r){if(r!=null&&r[Symbol.hasInstance]){return r[Symbol.hasInstance](e)}else{return e instanceof r}}
r.interopRequire=function(e){return e&&e.__esModule?e["default"]:e}})(typeof global==="undefined"?self:global)
this.babelHelpers = babelHelpers;
});
KAdefine("javascript/shared-package/site-infra.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/core-js/shim.min.js")
require("../../third_party/javascript-khansrc/babeljs/babel-external-helpers.js")
require("../../third_party/javascript-khansrc/raven-js/raven.js")
var $=require("jquery")
require("../../third_party/javascript-khansrc/raven-js/jquery.js")
require("../../third_party/javascript-khansrc/jquery-migrate/jquery-migrate-1.1.1.js")
require("../../third_party/javascript-khansrc/Modernizr/modernizr.js")
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.touch-punch.js")
var KA=require("./ka.js")
$.migrateMute=!KA.IS_DEV_SERVER
require("../../third_party/javascript-khansrc/es5-shim/function-prototype-bind-polyfill.js")
require("./request-animation-frame.js")
require("./handlebars-extras.js")
require("../../third_party/javascript-khansrc/jquery-placeholder/jquery.placeholder.js")
require("../../third_party/javascript-khansrc/bootstrap-dropdown/dropdown.js")
require("../../third_party/javascript-khansrc/jQuery-ajaxTransport-XDomainRequest/jQuery.XDomainRequest.js")
require("./ka.js")
var APIActionResults=require("./api-action-results.js")
var CSSMenus=require("./pageutil.js").CSSMenus
var FacebookUtil=require("./facebookutil.js")
var KAConsole=require("./console.js")
var NotificationsLoader=require("./notifications-loader.js")
var PackageManager=require("./package-manager.js")
var Social=require("./social.js")
var TypeaheadLoader=require("./typeahead-loader.js")
var VisitTracking=require("./visit-tracking.js")
var A11y=require("./a11y.js")
var SiteInfra={_initSearch:function(){$(".search-form .search-input").placeholder()
$(".search-input").closest("form").submit(function(r){return!!$.trim($(this).find(".search-input").val())})},_initUserDropdown:function(){$("#user-info").on("userUpdate",function(){$(this).find(".dropdown-toggle").dropdown("ontouchstart"in window?null:"hover")}).trigger("userUpdate")},_onDomReady:function(){if(window._qf){$.each(window._qf,function(r,i){$(i)})}NotificationsLoader.init()
APIActionResults.addDefaultHooks()
Social.init()
CSSMenus.init()
TypeaheadLoader.init()
this._initSearch()
this._initUserDropdown()
VisitTracking.trackVisit()},_setBlurOnEsc:function(){$(document).delegate("input.blur-on-esc","keyup",function(r,i){if(i&&i.silent){return}if(r.which===27){$(r.target).blur()}})},_setupLoginLinkRedirect:function(){$(".log-in-link").click(function(r){location.href=this.getLoginURL()
r.preventDefault()}.bind(this))},getLoginURL:function(){var r=location.pathname+location.hash
if(r&&r!=="/"){if(r==="/sat"){r="/mission/sat"}else if(r==="/signup"){var i=/continue=([^&]+)/.exec(location.search)
if(i){return"/login?continue="+i[1]}}return"/login?continue="+encodeURIComponent(r)}else{return"/login"}},getLogoutURL:function(){var r=location.pathname+location.hash
return"/logout?continue="+encodeURIComponent(r)},init:function(){if(this._initDone){return}this._initDone=true
this._setBlurOnEsc()
this._setupLoginLinkRedirect()
KAConsole.init(KA.IS_DEV_SERVER)
PackageManager.init()
APIActionResults.init()
FacebookUtil.init()
A11y.init()
$(this._onDomReady.bind(this))}}
module.exports=SiteInfra
});
; KAdefine.updatePathToPackageMap({"javascript/issues-package/issues.jsx": "issues.js", "javascript/login-package/login.js": "login.js", "javascript/login-package/signup-modal.jsx": "login.js", "javascript/login-package/signup.js": "login.js", "javascript/notifications-package/notifications.js": "notifications.js", "javascript/react-guiders-package/guider.jsx": "react-guiders.js", "javascript/typeahead-package/build-mission-source.js": "typeahead.js", "javascript/typeahead-package/render-nav-search-bar.js": "typeahead.js", "javascript/typeahead-package/search-box.jsx": "typeahead.js", "third_party/javascript-khansrc/tota11y/build/tota11y.min.js": "tota11y.js"});
