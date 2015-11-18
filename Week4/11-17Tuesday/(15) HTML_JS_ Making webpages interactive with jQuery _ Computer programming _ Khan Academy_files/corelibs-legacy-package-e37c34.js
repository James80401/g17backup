KAdefine("third_party/javascript-khansrc/jquery/jquery.js", function(__KA_require, __KA_module, __KA_exports) {
(function(e,t){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=e.document?t(e,true):function(e){if(!e.document){throw new Error("jQuery requires a window with a document")}return t(e)}}else{t(e)}})(typeof window!=="undefined"?window:this,function(e,t){var n=[]
var i=n.slice
var r=n.concat
var o=n.push
var s=n.indexOf
var a={}
var u=a.toString
var f=a.hasOwnProperty
var l={}
var c=e.document,p="2.1.1",d=function(e,t){return new d.fn.init(e,t)},h=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,g=/^-ms-/,m=/-([\da-z])/gi,y=function(e,t){return t.toUpperCase()}
d.fn=d.prototype={jquery:p,constructor:d,selector:"",length:0,toArray:function(){return i.call(this)},get:function(e){return e!=null?e<0?this[e+this.length]:this[e]:i.call(this)},pushStack:function(e){var t=d.merge(this.constructor(),e)
t.prevObject=this
t.context=this.context
return t},each:function(e,t){return d.each(this,e,t)},map:function(e){return this.pushStack(d.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:o,sort:n.sort,splice:n.splice}
d.extend=d.fn.extend=function(){var e,t,n,i,r,o,s=arguments[0]||{},a=1,u=arguments.length,f=false
if(typeof s==="boolean"){f=s
s=arguments[a]||{}
a++}if(typeof s!=="object"&&!d.isFunction(s)){s={}}if(a===u){s=this
a--}for(;a<u;a++){if((e=arguments[a])!=null){for(t in e){n=s[t]
i=e[t]
if(s===i){continue}if(f&&i&&(d.isPlainObject(i)||(r=d.isArray(i)))){if(r){r=false
o=n&&d.isArray(n)?n:[]}else{o=n&&d.isPlainObject(n)?n:{}}s[t]=d.extend(f,o,i)}else if(i!==undefined){s[t]=i}}}}return s}
d.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),isReady:true,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return d.type(e)==="function"},isArray:Array.isArray,isWindow:function(e){return e!=null&&e===e.window},isNumeric:function(e){return!d.isArray(e)&&e-parseFloat(e)>=0},isPlainObject:function(e){if(d.type(e)!=="object"||e.nodeType||d.isWindow(e)){return false}if(e.constructor&&!f.call(e.constructor.prototype,"isPrototypeOf")){return false}return true},isEmptyObject:function(e){var t
for(t in e){return false}return true},type:function(e){if(e==null){return e+""}return typeof e==="object"||typeof e==="function"?a[u.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval
e=d.trim(e)
if(e){if(e.indexOf("use strict")===1){t=c.createElement("script")
t.text=e
c.head.appendChild(t).parentNode.removeChild(t)}else{n(e)}}},camelCase:function(e){return e.replace(g,"ms-").replace(m,y)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var i,r=0,o=e.length,s=v(e)
if(n){if(s){for(;r<o;r++){i=t.apply(e[r],n)
if(i===false){break}}}else{for(r in e){i=t.apply(e[r],n)
if(i===false){break}}}}else{if(s){for(;r<o;r++){i=t.call(e[r],r,e[r])
if(i===false){break}}}else{for(r in e){i=t.call(e[r],r,e[r])
if(i===false){break}}}}return e},trim:function(e){return e==null?"":(e+"").replace(h,"")},makeArray:function(e,t){var n=t||[]
if(e!=null){if(v(Object(e))){d.merge(n,typeof e==="string"?[e]:e)}else{o.call(n,e)}}return n},inArray:function(e,t,n){return t==null?-1:s.call(t,e,n)},merge:function(e,t){var n=+t.length,i=0,r=e.length
for(;i<n;i++){e[r++]=t[i]}e.length=r
return e},grep:function(e,t,n){var i,r=[],o=0,s=e.length,a=!n
for(;o<s;o++){i=!t(e[o],o)
if(i!==a){r.push(e[o])}}return r},map:function(e,t,n){var i,o=0,s=e.length,a=v(e),u=[]
if(a){for(;o<s;o++){i=t(e[o],o,n)
if(i!=null){u.push(i)}}}else{for(o in e){i=t(e[o],o,n)
if(i!=null){u.push(i)}}}return r.apply([],u)},guid:1,proxy:function(e,t){var n,r,o
if(typeof t==="string"){n=e[t]
t=e
e=n}if(!d.isFunction(e)){return undefined}r=i.call(arguments,2)
o=function(){return e.apply(t||this,r.concat(i.call(arguments)))}
o.guid=e.guid=e.guid||d.guid++
return o},now:Date.now,support:l})
d.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){a["[object "+t+"]"]=t.toLowerCase()})
function v(e){var t=e.length,n=d.type(e)
if(n==="function"||d.isWindow(e)){return false}if(e.nodeType===1&&t){return true}return n==="array"||t===0||typeof t==="number"&&t>0&&t-1 in e}var x=function(e){var t,n,i,r,o,s,a,u,f,l,c,p,d,h,g,m,y,v,x,w="sizzle"+-new Date,b=e.document,T=0,C=0,k=at(),N=at(),E=at(),S=function(e,t){if(e===t){c=true}return 0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length
for(;t<n;t++){if(this[t]===e){return t}}return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",B=W.replace("w","w#"),I="\\["+R+"*("+W+")(?:"+R+"*([*^$|!~]?=)"+R+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+B+"))|)"+R+"*\\]",_=":("+W+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|"+".*"+")\\)|)",z=new RegExp("^"+R+"+|((?:^|[^\\\\])(?:\\\\.)*)"+R+"+$","g"),X=new RegExp("^"+R+"*,"+R+"*"),U=new RegExp("^"+R+"*([>+~]|"+R+")"+R+"*"),V=new RegExp("="+R+"*([^\\]'\"]*?)"+R+"*\\]","g"),Y=new RegExp(_),G=new RegExp("^"+B+"$"),Q={ID:new RegExp("^#("+W+")"),CLASS:new RegExp("^\\.("+W+")"),TAG:new RegExp("^("+W.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+_),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+R+"*(even|odd|(([+-]|)(\\d*)n|)"+R+"*(?:([+-]|)"+R+"*(\\d+)|))"+R+"*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^"+R+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+R+"*((?:-\\d)?\\d*)"+R+"*\\)|)(?=[^-]|$)","i")},J=/^(?:input|select|textarea|button)$/i,K=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,et=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tt=/[+~]/,nt=/'|\\/g,it=new RegExp("\\\\([\\da-f]{1,6}"+R+"?|("+R+")|.)","ig"),rt=function(e,t,n){var i="0x"+t-65536
return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,i&1023|56320)}
try{O.apply(L=F.call(b.childNodes),b.childNodes)
L[b.childNodes.length].nodeType}catch(ot){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,i=0
while(e[n++]=t[i++]){}e.length=n-1}}}function st(e,t,i,r){var o,a,f,l,c,h,y,v,T,C
if((t?t.ownerDocument||t:b)!==d){p(t)}t=t||d
i=i||[]
if(!e||typeof e!=="string"){return i}if((l=t.nodeType)!==1&&l!==9){return[]}if(g&&!r){if(o=et.exec(e)){if(f=o[1]){if(l===9){a=t.getElementById(f)
if(a&&a.parentNode){if(a.id===f){i.push(a)
return i}}else{return i}}else{if(t.ownerDocument&&(a=t.ownerDocument.getElementById(f))&&x(t,a)&&a.id===f){i.push(a)
return i}}}else if(o[2]){O.apply(i,t.getElementsByTagName(e))
return i}else if((f=o[3])&&n.getElementsByClassName&&t.getElementsByClassName){O.apply(i,t.getElementsByClassName(f))
return i}}if(n.qsa&&(!m||!m.test(e))){v=y=w
T=t
C=l===9&&e
if(l===1&&t.nodeName.toLowerCase()!=="object"){h=s(e)
if(y=t.getAttribute("id")){v=y.replace(nt,"\\$&")}else{t.setAttribute("id",v)}v="[id='"+v+"'] "
c=h.length
while(c--){h[c]=v+yt(h[c])}T=tt.test(e)&&gt(t.parentNode)||t
C=h.join(",")}if(C){try{O.apply(i,T.querySelectorAll(C))
return i}catch(k){}finally{if(!y){t.removeAttribute("id")}}}}}return u(e.replace(z,"$1"),t,i,r)}function at(){var e=[]
function t(n,r){if(e.push(n+" ")>i.cacheLength){delete t[e.shift()]}return t[n+" "]=r}return t}function ut(e){e[w]=true
return e}function ft(e){var t=d.createElement("div")
try{return!!e(t)}catch(n){return false}finally{if(t.parentNode){t.parentNode.removeChild(t)}t=null}}function lt(e,t){var n=e.split("|"),r=e.length
while(r--){i.attrHandle[n[r]]=t}}function ct(e,t){var n=t&&e,i=n&&e.nodeType===1&&t.nodeType===1&&(~t.sourceIndex||D)-(~e.sourceIndex||D)
if(i){return i}if(n){while(n=n.nextSibling){if(n===t){return-1}}}return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase()
return n==="input"&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase()
return(n==="input"||n==="button")&&t.type===e}}function ht(e){return ut(function(t){t=+t
return ut(function(n,i){var r,o=e([],n.length,t),s=o.length
while(s--){if(n[r=o[s]]){n[r]=!(i[r]=n[r])}}})})}function gt(e){return e&&typeof e.getElementsByTagName!==j&&e}n=st.support={}
o=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return t?t.nodeName!=="HTML":false}
p=st.setDocument=function(e){var t,r=e?e.ownerDocument||e:b,s=r.defaultView
if(r===d||r.nodeType!==9||!r.documentElement){return d}d=r
h=r.documentElement
g=!o(r)
if(s&&s!==s.top){if(s.addEventListener){s.addEventListener("unload",function(){p()},false)}else if(s.attachEvent){s.attachEvent("onunload",function(){p()})}}n.attributes=ft(function(e){e.className="i"
return!e.getAttribute("className")})
n.getElementsByTagName=ft(function(e){e.appendChild(r.createComment(""))
return!e.getElementsByTagName("*").length})
n.getElementsByClassName=Z.test(r.getElementsByClassName)&&ft(function(e){e.innerHTML="<div class='a'></div><div class='a i'></div>"
e.firstChild.className="i"
return e.getElementsByClassName("i").length===2})
n.getById=ft(function(e){h.appendChild(e).id=w
return!r.getElementsByName||!r.getElementsByName(w).length})
if(n.getById){i.find["ID"]=function(e,t){if(typeof t.getElementById!==j&&g){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}}
i.filter["ID"]=function(e){var t=e.replace(it,rt)
return function(e){return e.getAttribute("id")===t}}}else{delete i.find["ID"]
i.filter["ID"]=function(e){var t=e.replace(it,rt)
return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id")
return n&&n.value===t}}}i.find["TAG"]=n.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==j){return t.getElementsByTagName(e)}}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e)
if(e==="*"){while(n=o[r++]){if(n.nodeType===1){i.push(n)}}return i}return o}
i.find["CLASS"]=n.getElementsByClassName&&function(e,t){if(typeof t.getElementsByClassName!==j&&g){return t.getElementsByClassName(e)}}
y=[]
m=[]
if(n.qsa=Z.test(r.querySelectorAll)){ft(function(e){e.innerHTML="<select msallowclip=''><option selected=''></option></select>"
if(e.querySelectorAll("[msallowclip^='']").length){m.push("[*^$]="+R+"*(?:''|\"\")")}if(!e.querySelectorAll("[selected]").length){m.push("\\["+R+"*(?:value|"+M+")")}if(!e.querySelectorAll(":checked").length){m.push(":checked")}})
ft(function(e){var t=r.createElement("input")
t.setAttribute("type","hidden")
e.appendChild(t).setAttribute("name","D")
if(e.querySelectorAll("[name=d]").length){m.push("name"+R+"*[*^$|!~]?=")}if(!e.querySelectorAll(":enabled").length){m.push(":enabled",":disabled")}e.querySelectorAll("*,:x")
m.push(",.*:")})}if(n.matchesSelector=Z.test(v=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector)){ft(function(e){n.disconnectedMatch=v.call(e,"div")
v.call(e,"[s!='']:x")
y.push("!=",_)})}m=m.length&&new RegExp(m.join("|"))
y=y.length&&new RegExp(y.join("|"))
t=Z.test(h.compareDocumentPosition)
x=t||Z.test(h.contains)?function(e,t){var n=e.nodeType===9?e.documentElement:e,i=t&&t.parentNode
return e===i||!!(i&&i.nodeType===1&&(n.contains?n.contains(i):e.compareDocumentPosition&&e.compareDocumentPosition(i)&16))}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return true}}}return false}
S=t?function(e,t){if(e===t){c=true
return 0}var i=!e.compareDocumentPosition-!t.compareDocumentPosition
if(i){return i}i=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1
if(i&1||!n.sortDetached&&t.compareDocumentPosition(e)===i){if(e===r||e.ownerDocument===b&&x(b,e)){return-1}if(t===r||t.ownerDocument===b&&x(b,t)){return 1}return l?P.call(l,e)-P.call(l,t):0}return i&4?-1:1}:function(e,t){if(e===t){c=true
return 0}var n,i=0,o=e.parentNode,s=t.parentNode,a=[e],u=[t]
if(!o||!s){return e===r?-1:t===r?1:o?-1:s?1:l?P.call(l,e)-P.call(l,t):0}else if(o===s){return ct(e,t)}n=e
while(n=n.parentNode){a.unshift(n)}n=t
while(n=n.parentNode){u.unshift(n)}while(a[i]===u[i]){i++}return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0}
return r}
st.matches=function(e,t){return st(e,null,null,t)}
st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d){p(e)}t=t.replace(V,"='$1']")
if(n.matchesSelector&&g&&(!y||!y.test(t))&&(!m||!m.test(t))){try{var i=v.call(e,t)
if(i||n.disconnectedMatch||e.document&&e.document.nodeType!==11){return i}}catch(r){}}return st(t,d,null,[e]).length>0}
st.contains=function(e,t){if((e.ownerDocument||e)!==d){p(e)}return x(e,t)}
st.attr=function(e,t){if((e.ownerDocument||e)!==d){p(e)}var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!g):undefined
return o!==undefined?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null}
st.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)}
st.uniqueSort=function(e){var t,i=[],r=0,o=0
c=!n.detectDuplicates
l=!n.sortStable&&e.slice(0)
e.sort(S)
if(c){while(t=e[o++]){if(t===e[o]){r=i.push(o)}}while(r--){e.splice(i[r],1)}}l=null
return e}
r=st.getText=function(e){var t,n="",i=0,o=e.nodeType
if(!o){while(t=e[i++]){n+=r(t)}}else if(o===1||o===9||o===11){if(typeof e.textContent==="string"){return e.textContent}else{for(e=e.firstChild;e;e=e.nextSibling){n+=r(e)}}}else if(o===3||o===4){return e.nodeValue}return n}
i=st.selectors={cacheLength:50,createPseudo:ut,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(it,rt)
e[3]=(e[3]||e[4]||e[5]||"").replace(it,rt)
if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase()
if(e[1].slice(0,3)==="nth"){if(!e[3]){st.error(e[0])}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"))
e[5]=+(e[7]+e[8]||e[3]==="odd")}else if(e[3]){st.error(e[0])}return e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
if(Q["CHILD"].test(e[0])){return null}if(e[3]){e[2]=e[4]||e[5]||""}else if(n&&Y.test(n)&&(t=s(n,true))&&(t=n.indexOf(")",n.length-t)-n.length)){e[0]=e[0].slice(0,t)
e[2]=n.slice(0,t)}return e.slice(0,3)}},filter:{TAG:function(e){var t=e.replace(it,rt).toLowerCase()
return e==="*"?function(){return true}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=k[e+" "]
return t||(t=new RegExp("(^|"+R+")"+e+"("+R+"|$)"))&&k(e,function(e){return t.test(typeof e.className==="string"&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(i){var r=st.attr(i,e)
if(r==null){return t==="!="}if(!t){return true}r+=""
return t==="="?r===n:t==="!="?r!==n:t==="^="?n&&r.indexOf(n)===0:t==="*="?n&&r.indexOf(n)>-1:t==="$="?n&&r.slice(-n.length)===n:t==="~="?(" "+r+" ").indexOf(n)>-1:t==="|="?r===n||r.slice(0,n.length+1)===n+"-":false}},CHILD:function(e,t,n,i,r){var o=e.slice(0,3)!=="nth",s=e.slice(-4)!=="last",a=t==="of-type"
return i===1&&r===0?function(e){return!!e.parentNode}:function(t,n,u){var f,l,c,p,d,h,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),v=!u&&!a
if(m){if(o){while(g){c=t
while(c=c[g]){if(a?c.nodeName.toLowerCase()===y:c.nodeType===1){return false}}h=g=e==="only"&&!h&&"nextSibling"}return true}h=[s?m.firstChild:m.lastChild]
if(s&&v){l=m[w]||(m[w]={})
f=l[e]||[]
d=f[0]===T&&f[1]
p=f[0]===T&&f[2]
c=d&&m.childNodes[d]
while(c=++d&&c&&c[g]||(p=d=0)||h.pop()){if(c.nodeType===1&&++p&&c===t){l[e]=[T,d,p]
break}}}else if(v&&(f=(t[w]||(t[w]={}))[e])&&f[0]===T){p=f[1]}else{while(c=++d&&c&&c[g]||(p=d=0)||h.pop()){if((a?c.nodeName.toLowerCase()===y:c.nodeType===1)&&++p){if(v){(c[w]||(c[w]={}))[e]=[T,p]}if(c===t){break}}}}p-=r
return p===i||p%i===0&&p/i>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e)
if(r[w]){return r(t)}if(r.length>1){n=[e,e,"",t]
return i.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),s=o.length
while(s--){i=P.call(e,o[s])
e[i]=!(n[i]=o[s])}}):function(e){return r(e,0,n)}}return r}},pseudos:{not:ut(function(e){var t=[],n=[],i=a(e.replace(z,"$1"))
return i[w]?ut(function(e,t,n,r){var o,s=i(e,null,r,[]),a=e.length
while(a--){if(o=s[a]){e[a]=!(t[a]=o)}}}):function(e,r,o){t[0]=e
i(t,null,o,n)
return!n.pop()}}),has:ut(function(e){return function(t){return st(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||r(t)).indexOf(e)>-1}}),lang:ut(function(e){if(!G.test(e||"")){st.error("unsupported lang: "+e)}e=e.replace(it,rt).toLowerCase()
return function(t){var n
do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang")){n=n.toLowerCase()
return n===e||n.indexOf(e+"-")===0}}while((t=t.parentNode)&&t.nodeType===1)
return false}}),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===false},disabled:function(e){return e.disabled===true},checked:function(e){var t=e.nodeName.toLowerCase()
return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeType<6){return false}}return true},parent:function(e){return!i.pseudos["empty"](e)},header:function(e){return K.test(e.nodeName)},input:function(e){return J.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return t==="input"&&e.type==="button"||t==="button"},text:function(e){var t
return e.nodeName.toLowerCase()==="input"&&e.type==="text"&&((t=e.getAttribute("type"))==null||t.toLowerCase()==="text")},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[n<0?n+t:n]}),even:ht(function(e,t){var n=0
for(;n<t;n+=2){e.push(n)}return e}),odd:ht(function(e,t){var n=1
for(;n<t;n+=2){e.push(n)}return e}),lt:ht(function(e,t,n){var i=n<0?n+t:n
for(;--i>=0;){e.push(i)}return e}),gt:ht(function(e,t,n){var i=n<0?n+t:n
for(;++i<t;){e.push(i)}return e})}}
i.pseudos["nth"]=i.pseudos["eq"]
for(t in{radio:true,checkbox:true,file:true,password:true,image:true}){i.pseudos[t]=pt(t)}for(t in{submit:true,reset:true}){i.pseudos[t]=dt(t)}function mt(){}mt.prototype=i.filters=i.pseudos
i.setFilters=new mt
s=st.tokenize=function(e,t){var n,r,o,s,a,u,f,l=N[e+" "]
if(l){return t?0:l.slice(0)}a=e
u=[]
f=i.preFilter
while(a){if(!n||(r=X.exec(a))){if(r){a=a.slice(r[0].length)||a}u.push(o=[])}n=false
if(r=U.exec(a)){n=r.shift()
o.push({value:n,type:r[0].replace(z," ")})
a=a.slice(n.length)}for(s in i.filter){if((r=Q[s].exec(a))&&(!f[s]||(r=f[s](r)))){n=r.shift()
o.push({value:n,type:s,matches:r})
a=a.slice(n.length)}}if(!n){break}}return t?a.length:a?st.error(e):N(e,u).slice(0)}
function yt(e){var t=0,n=e.length,i=""
for(;t<n;t++){i+=e[t].value}return i}function vt(e,t,n){var i=t.dir,r=n&&i==="parentNode",o=C++
return t.first?function(t,n,o){while(t=t[i]){if(t.nodeType===1||r){return e(t,n,o)}}}:function(t,n,s){var a,u,f=[T,o]
if(s){while(t=t[i]){if(t.nodeType===1||r){if(e(t,n,s)){return true}}}}else{while(t=t[i]){if(t.nodeType===1||r){u=t[w]||(t[w]={})
if((a=u[i])&&a[0]===T&&a[1]===o){return f[2]=a[2]}else{u[i]=f
if(f[2]=e(t,n,s)){return true}}}}}}}function xt(e){return e.length>1?function(t,n,i){var r=e.length
while(r--){if(!e[r](t,n,i)){return false}}return true}:e[0]}function wt(e,t,n){var i=0,r=t.length
for(;i<r;i++){st(e,t[i],n)}return n}function bt(e,t,n,i,r){var o,s=[],a=0,u=e.length,f=t!=null
for(;a<u;a++){if(o=e[a]){if(!n||n(o,i,r)){s.push(o)
if(f){t.push(a)}}}}return s}function Tt(e,t,n,i,r,o){if(i&&!i[w]){i=Tt(i)}if(r&&!r[w]){r=Tt(r,o)}return ut(function(o,s,a,u){var f,l,c,p=[],d=[],h=s.length,g=o||wt(t||"*",a.nodeType?[a]:a,[]),m=e&&(o||!t)?bt(g,p,e,a,u):g,y=n?r||(o?e:h||i)?[]:s:m
if(n){n(m,y,a,u)}if(i){f=bt(y,d)
i(f,[],a,u)
l=f.length
while(l--){if(c=f[l]){y[d[l]]=!(m[d[l]]=c)}}}if(o){if(r||e){if(r){f=[]
l=y.length
while(l--){if(c=y[l]){f.push(m[l]=c)}}r(null,y=[],f,u)}l=y.length
while(l--){if((c=y[l])&&(f=r?P.call(o,c):p[l])>-1){o[f]=!(s[f]=c)}}}}else{y=bt(y===s?y.splice(h,y.length):y)
if(r){r(null,s,y,u)}else{O.apply(s,y)}}})}function Ct(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],u=s?1:0,l=vt(function(e){return e===t},a,true),c=vt(function(e){return P.call(t,e)>-1},a,true),p=[function(e,n,i){return!s&&(i||n!==f)||((t=n).nodeType?l(e,n,i):c(e,n,i))}]
for(;u<o;u++){if(n=i.relative[e[u].type]){p=[vt(xt(p),n)]}else{n=i.filter[e[u].type].apply(null,e[u].matches)
if(n[w]){r=++u
for(;r<o;r++){if(i.relative[e[r].type]){break}}return Tt(u>1&&xt(p),u>1&&yt(e.slice(0,u-1).concat({value:e[u-2].type===" "?"*":""})).replace(z,"$1"),n,u<r&&Ct(e.slice(u,r)),r<o&&Ct(e=e.slice(r)),r<o&&yt(e))}p.push(n)}}return xt(p)}function kt(e,t){var n=t.length>0,r=e.length>0,o=function(o,s,a,u,l){var c,p,h,g=0,m="0",y=o&&[],v=[],x=f,w=o||r&&i.find["TAG"]("*",l),b=T+=x==null?1:Math.random()||.1,C=w.length
if(l){f=s!==d&&s}for(;m!==C&&(c=w[m])!=null;m++){if(r&&c){p=0
while(h=e[p++]){if(h(c,s,a)){u.push(c)
break}}if(l){T=b}}if(n){if(c=!h&&c){g--}if(o){y.push(c)}}}g+=m
if(n&&m!==g){p=0
while(h=t[p++]){h(y,v,s,a)}if(o){if(g>0){while(m--){if(!(y[m]||v[m])){v[m]=q.call(u)}}}v=bt(v)}O.apply(u,v)
if(l&&!o&&v.length>0&&g+t.length>1){st.uniqueSort(u)}}if(l){T=b
f=x}return y}
return n?ut(o):o}a=st.compile=function(e,t){var n,i=[],r=[],o=E[e+" "]
if(!o){if(!t){t=s(e)}n=t.length
while(n--){o=Ct(t[n])
if(o[w]){i.push(o)}else{r.push(o)}}o=E(e,kt(r,i))
o.selector=e}return o}
u=st.select=function(e,t,r,o){var u,f,l,c,p,d=typeof e==="function"&&e,h=!o&&s(e=d.selector||e)
r=r||[]
if(h.length===1){f=h[0]=h[0].slice(0)
if(f.length>2&&(l=f[0]).type==="ID"&&n.getById&&t.nodeType===9&&g&&i.relative[f[1].type]){t=(i.find["ID"](l.matches[0].replace(it,rt),t)||[])[0]
if(!t){return r}else if(d){t=t.parentNode}e=e.slice(f.shift().value.length)}u=Q["needsContext"].test(e)?0:f.length
while(u--){l=f[u]
if(i.relative[c=l.type]){break}if(p=i.find[c]){if(o=p(l.matches[0].replace(it,rt),tt.test(f[0].type)&&gt(t.parentNode)||t)){f.splice(u,1)
e=o.length&&yt(f)
if(!e){O.apply(r,o)
return r}break}}}}(d||a(e,h))(o,t,!g,r,tt.test(e)&&gt(t.parentNode)||t)
return r}
n.sortStable=w.split("").sort(S).join("")===w
n.detectDuplicates=!!c
p()
n.sortDetached=ft(function(e){return e.compareDocumentPosition(d.createElement("div"))&1})
if(!ft(function(e){e.innerHTML="<a href='#'></a>"
return e.firstChild.getAttribute("href")==="#"})){lt("type|href|height|width",function(e,t,n){if(!n){return e.getAttribute(t,t.toLowerCase()==="type"?1:2)}})}if(!n.attributes||!ft(function(e){e.innerHTML="<input/>"
e.firstChild.setAttribute("value","")
return e.firstChild.getAttribute("value")===""})){lt("value",function(e,t,n){if(!n&&e.nodeName.toLowerCase()==="input"){return e.defaultValue}})}if(!ft(function(e){return e.getAttribute("disabled")==null})){lt(M,function(e,t,n){var i
if(!n){return e[t]===true?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}})}return st}(e)
d.find=x
d.expr=x.selectors
d.expr[":"]=d.expr.pseudos
d.unique=x.uniqueSort
d.text=x.getText
d.isXMLDoc=x.isXML
d.contains=x.contains
var w=d.expr.match.needsContext
var b=/^<(\w+)\s*\/?>(?:<\/\1>|)$/
var T=/^.[^:#\[\.,]*$/
function C(e,t,n){if(d.isFunction(t)){return d.grep(e,function(e,i){return!!t.call(e,i,e)!==n})}if(t.nodeType){return d.grep(e,function(e){return e===t!==n})}if(typeof t==="string"){if(T.test(t)){return d.filter(t,e,n)}t=d.filter(t,e)}return d.grep(e,function(e){return s.call(t,e)>=0!==n})}d.filter=function(e,t,n){var i=t[0]
if(n){e=":not("+e+")"}return t.length===1&&i.nodeType===1?d.find.matchesSelector(i,e)?[i]:[]:d.find.matches(e,d.grep(t,function(e){return e.nodeType===1}))}
d.fn.extend({find:function(e){var t,n=this.length,i=[],r=this
if(typeof e!=="string"){return this.pushStack(d(e).filter(function(){for(t=0;t<n;t++){if(d.contains(r[t],this)){return true}}}))}for(t=0;t<n;t++){d.find(e,r[t],i)}i=this.pushStack(n>1?d.unique(i):i)
i.selector=this.selector?this.selector+" "+e:e
return i},filter:function(e){return this.pushStack(C(this,e||[],false))},not:function(e){return this.pushStack(C(this,e||[],true))},is:function(e){return!!C(this,typeof e==="string"&&w.test(e)?d(e):e||[],false).length}})
var k,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,E=d.fn.init=function(e,t){var n,i
if(!e){return this}if(typeof e==="string"){if(e[0]==="<"&&e[e.length-1]===">"&&e.length>=3){n=[null,e,null]}else{n=N.exec(e)}if(n&&(n[1]||!t)){if(n[1]){t=t instanceof d?t[0]:t
d.merge(this,d.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:c,true))
if(b.test(n[1])&&d.isPlainObject(t)){for(n in t){if(d.isFunction(this[n])){this[n](t[n])}else{this.attr(n,t[n])}}}return this}else{i=c.getElementById(n[2])
if(i&&i.parentNode){this.length=1
this[0]=i}this.context=c
this.selector=e
return this}}else if(!t||t.jquery){return(t||k).find(e)}else{return this.constructor(t).find(e)}}else if(e.nodeType){this.context=this[0]=e
this.length=1
return this}else if(d.isFunction(e)){return typeof k.ready!=="undefined"?k.ready(e):e(d)}if(e.selector!==undefined){this.selector=e.selector
this.context=e.context}return d.makeArray(e,this)}
E.prototype=d.fn
k=d(c)
var S=/^(?:parents|prev(?:Until|All))/,j={children:true,contents:true,next:true,prev:true}
d.extend({dir:function(e,t,n){var i=[],r=n!==undefined
while((e=e[t])&&e.nodeType!==9){if(e.nodeType===1){if(r&&d(e).is(n)){break}i.push(e)}}return i},sibling:function(e,t){var n=[]
for(;e;e=e.nextSibling){if(e.nodeType===1&&e!==t){n.push(e)}}return n}})
d.fn.extend({has:function(e){var t=d(e,this),n=t.length
return this.filter(function(){var e=0
for(;e<n;e++){if(d.contains(this,t[e])){return true}}})},closest:function(e,t){var n,i=0,r=this.length,o=[],s=w.test(e)||typeof e!=="string"?d(e,t||this.context):0
for(;i<r;i++){for(n=this[i];n&&n!==t;n=n.parentNode){if(n.nodeType<11&&(s?s.index(n)>-1:n.nodeType===1&&d.find.matchesSelector(n,e))){o.push(n)
break}}}return this.pushStack(o.length>1?d.unique(o):o)},index:function(e){if(!e){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1}if(typeof e==="string"){return s.call(d(e),this[0])}return s.call(this,e.jquery?e[0]:e)},add:function(e,t){return this.pushStack(d.unique(d.merge(this.get(),d(e,t))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}})
function D(e,t){while((e=e[t])&&e.nodeType!==1){}return e}d.each({parent:function(e){var t=e.parentNode
return t&&t.nodeType!==11?t:null},parents:function(e){return d.dir(e,"parentNode")},parentsUntil:function(e,t,n){return d.dir(e,"parentNode",n)},next:function(e){return D(e,"nextSibling")},prev:function(e){return D(e,"previousSibling")},nextAll:function(e){return d.dir(e,"nextSibling")},prevAll:function(e){return d.dir(e,"previousSibling")},nextUntil:function(e,t,n){return d.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return d.dir(e,"previousSibling",n)},siblings:function(e){return d.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return d.sibling(e.firstChild)},contents:function(e){return e.contentDocument||d.merge([],e.childNodes)}},function(e,t){d.fn[e]=function(n,i){var r=d.map(this,t,n)
if(e.slice(-5)!=="Until"){i=n}if(i&&typeof i==="string"){r=d.filter(i,r)}if(this.length>1){if(!j[e]){d.unique(r)}if(S.test(e)){r.reverse()}}return this.pushStack(r)}})
var A=/\S+/g
var L={}
function q(e){var t=L[e]={}
d.each(e.match(A)||[],function(e,n){t[n]=true})
return t}d.Callbacks=function(e){e=typeof e==="string"?L[e]||q(e):d.extend({},e)
var t,n,i,r,o,s,a=[],u=!e.once&&[],f=function(c){t=e.memory&&c
n=true
s=r||0
r=0
o=a.length
i=true
for(;a&&s<o;s++){if(a[s].apply(c[0],c[1])===false&&e.stopOnFalse){t=false
break}}i=false
if(a){if(u){if(u.length){f(u.shift())}}else if(t){a=[]}else{l.disable()}}},l={add:function(){if(a){var n=a.length;(function s(t){d.each(t,function(t,n){var i=d.type(n)
if(i==="function"){if(!e.unique||!l.has(n)){a.push(n)}}else if(n&&n.length&&i!=="string"){s(n)}})})(arguments)
if(i){o=a.length}else if(t){r=n
f(t)}}return this},remove:function(){if(a){d.each(arguments,function(e,t){var n
while((n=d.inArray(t,a,n))>-1){a.splice(n,1)
if(i){if(n<=o){o--}if(n<=s){s--}}}})}return this},has:function(e){return e?d.inArray(e,a)>-1:!!(a&&a.length)},empty:function(){a=[]
o=0
return this},disable:function(){a=u=t=undefined
return this},disabled:function(){return!a},lock:function(){u=undefined
if(!t){l.disable()}return this},locked:function(){return!u},fireWith:function(e,t){if(a&&(!n||u)){t=t||[]
t=[e,t.slice?t.slice():t]
if(i){u.push(t)}else{f(t)}}return this},fire:function(){l.fireWith(this,arguments)
return this},fired:function(){return!!n}}
return l}
d.extend({Deferred:function(e){var t=[["resolve","done",d.Callbacks("once memory"),"resolved"],["reject","fail",d.Callbacks("once memory"),"rejected"],["notify","progress",d.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){r.done(arguments).fail(arguments)
return this},then:function(){var e=arguments
return d.Deferred(function(n){d.each(t,function(t,o){var s=d.isFunction(e[t])&&e[t]
r[o[1]](function(){var e=s&&s.apply(this,arguments)
if(e&&d.isFunction(e.promise)){e.promise().done(n.resolve).fail(n.reject).progress(n.notify)}else{n[o[0]+"With"](this===i?n.promise():this,s?[e]:arguments)}})})
e=null}).promise()},promise:function(e){return e!=null?d.extend(e,i):i}},r={}
i.pipe=i.then
d.each(t,function(e,o){var s=o[2],a=o[3]
i[o[1]]=s.add
if(a){s.add(function(){n=a},t[e^1][2].disable,t[2][2].lock)}r[o[0]]=function(){r[o[0]+"With"](this===r?i:this,arguments)
return this}
r[o[0]+"With"]=s.fireWith})
i.promise(r)
if(e){e.call(r,r)}return r},when:function(e){var t=0,n=i.call(arguments),r=n.length,o=r!==1||e&&d.isFunction(e.promise)?r:0,s=o===1?e:d.Deferred(),a=function(e,t,n){return function(r){t[e]=this
n[e]=arguments.length>1?i.call(arguments):r
if(n===u){s.notifyWith(t,n)}else if(!--o){s.resolveWith(t,n)}}},u,f,l
if(r>1){u=new Array(r)
f=new Array(r)
l=new Array(r)
for(;t<r;t++){if(n[t]&&d.isFunction(n[t].promise)){n[t].promise().done(a(t,l,n)).fail(s.reject).progress(a(t,f,u))}else{--o}}}if(!o){s.resolveWith(l,n)}return s.promise()}})
var H
d.fn.ready=function(e){d.ready.promise().done(e)
return this}
d.extend({isReady:false,readyWait:1,holdReady:function(e){if(e){d.readyWait++}else{d.ready(true)}},ready:function(e){if(e===true?--d.readyWait:d.isReady){return}d.isReady=true
if(e!==true&&--d.readyWait>0){return}H.resolveWith(c,[d])
if(d.fn.triggerHandler){d(c).triggerHandler("ready")
d(c).off("ready")}}})
function O(){c.removeEventListener("DOMContentLoaded",O,false)
e.removeEventListener("load",O,false)
d.ready()}d.ready.promise=function(t){if(!H){H=d.Deferred()
if(c.readyState==="complete"){setTimeout(d.ready)}else{c.addEventListener("DOMContentLoaded",O,false)
e.addEventListener("load",O,false)}}return H.promise(t)}
d.ready.promise()
var F=d.access=function(e,t,n,i,r,o,s){var a=0,u=e.length,f=n==null
if(d.type(n)==="object"){r=true
for(a in n){d.access(e,t,a,n[a],true,o,s)}}else if(i!==undefined){r=true
if(!d.isFunction(i)){s=true}if(f){if(s){t.call(e,i)
t=null}else{f=t
t=function(e,t,n){return f.call(d(e),n)}}}if(t){for(;a<u;a++){t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)))}}}return r?e:f?t.call(e):u?t(e[0],n):o}
d.acceptData=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType}
function P(){Object.defineProperty(this.cache={},0,{get:function(){return{}}})
this.expando=d.expando+Math.random()}P.uid=1
P.accepts=d.acceptData
P.prototype={key:function(e){if(!P.accepts(e)){return 0}var t={},n=e[this.expando]
if(!n){n=P.uid++
try{t[this.expando]={value:n}
Object.defineProperties(e,t)}catch(i){t[this.expando]=n
d.extend(e,t)}}if(!this.cache[n]){this.cache[n]={}}return n},set:function(e,t,n){var i,r=this.key(e),o=this.cache[r]
if(typeof t==="string"){o[t]=n}else{if(d.isEmptyObject(o)){d.extend(this.cache[r],t)}else{for(i in t){o[i]=t[i]}}}return o},get:function(e,t){var n=this.cache[this.key(e)]
return t===undefined?n:n[t]},access:function(e,t,n){var i
if(t===undefined||t&&typeof t==="string"&&n===undefined){i=this.get(e,t)
return i!==undefined?i:this.get(e,d.camelCase(t))}this.set(e,t,n)
return n!==undefined?n:t},remove:function(e,t){var n,i,r,o=this.key(e),s=this.cache[o]
if(t===undefined){this.cache[o]={}}else{if(d.isArray(t)){i=t.concat(t.map(d.camelCase))}else{r=d.camelCase(t)
if(t in s){i=[t,r]}else{i=r
i=i in s?[i]:i.match(A)||[]}}n=i.length
while(n--){delete s[i[n]]}}},hasData:function(e){return!d.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){if(e[this.expando]){delete this.cache[e[this.expando]]}}}
var M=new P
var R=new P
var W=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,B=/([A-Z])/g
function I(e,t,n){var i
if(n===undefined&&e.nodeType===1){i="data-"+t.replace(B,"-$1").toLowerCase()
n=e.getAttribute(i)
if(typeof n==="string"){try{n=n==="true"?true:n==="false"?false:n==="null"?null:+n+""===n?+n:W.test(n)?d.parseJSON(n):n}catch(r){}R.set(e,t,n)}else{n=undefined}}return n}d.extend({hasData:function(e){return R.hasData(e)||M.hasData(e)},data:function(e,t,n){return R.access(e,t,n)},removeData:function(e,t){R.remove(e,t)},_data:function(e,t,n){return M.access(e,t,n)},_removeData:function(e,t){M.remove(e,t)}})
d.fn.extend({data:function(e,t){var n,i,r,o=this[0],s=o&&o.attributes
if(e===undefined){if(this.length){r=R.get(o)
if(o.nodeType===1&&!M.get(o,"hasDataAttrs")){n=s.length
while(n--){if(s[n]){i=s[n].name
if(i.indexOf("data-")===0){i=d.camelCase(i.slice(5))
I(o,i,r[i])}}}M.set(o,"hasDataAttrs",true)}}return r}if(typeof e==="object"){return this.each(function(){R.set(this,e)})}return F(this,function(t){var n,i=d.camelCase(e)
if(o&&t===undefined){n=R.get(o,e)
if(n!==undefined){return n}n=R.get(o,i)
if(n!==undefined){return n}n=I(o,i,undefined)
if(n!==undefined){return n}return}this.each(function(){var n=R.get(this,i)
R.set(this,i,t)
if(e.indexOf("-")!==-1&&n!==undefined){R.set(this,e,t)}})},null,t,arguments.length>1,null,true)},removeData:function(e){return this.each(function(){R.remove(this,e)})}})
d.extend({queue:function(e,t,n){var i
if(e){t=(t||"fx")+"queue"
i=M.get(e,t)
if(n){if(!i||d.isArray(n)){i=M.access(e,t,d.makeArray(n))}else{i.push(n)}}return i||[]}},dequeue:function(e,t){t=t||"fx"
var n=d.queue(e,t),i=n.length,r=n.shift(),o=d._queueHooks(e,t),s=function(){d.dequeue(e,t)}
if(r==="inprogress"){r=n.shift()
i--}if(r){if(t==="fx"){n.unshift("inprogress")}delete o.stop
r.call(e,s,o)}if(!i&&o){o.empty.fire()}},_queueHooks:function(e,t){var n=t+"queueHooks"
return M.get(e,n)||M.access(e,n,{empty:d.Callbacks("once memory").add(function(){M.remove(e,[t+"queue",n])})})}})
d.fn.extend({queue:function(e,t){var n=2
if(typeof e!=="string"){t=e
e="fx"
n--}if(arguments.length<n){return d.queue(this[0],e)}return t===undefined?this:this.each(function(){var n=d.queue(this,e,t)
d._queueHooks(this,e)
if(e==="fx"&&n[0]!=="inprogress"){d.dequeue(this,e)}})},dequeue:function(e){return this.each(function(){d.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=d.Deferred(),o=this,s=this.length,a=function(){if(!--i){r.resolveWith(o,[o])}}
if(typeof e!=="string"){t=e
e=undefined}e=e||"fx"
while(s--){n=M.get(o[s],e+"queueHooks")
if(n&&n.empty){i++
n.empty.add(a)}}a()
return r.promise(t)}})
var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
var z=["Top","Right","Bottom","Left"]
var X=function(e,t){e=t||e
return d.css(e,"display")==="none"||!d.contains(e.ownerDocument,e)}
var U=/^(?:checkbox|radio)$/i;(function(){var e=c.createDocumentFragment(),t=e.appendChild(c.createElement("div")),n=c.createElement("input")
n.setAttribute("type","radio")
n.setAttribute("checked","checked")
n.setAttribute("name","t")
t.appendChild(n)
l.checkClone=t.cloneNode(true).cloneNode(true).lastChild.checked
t.innerHTML="<textarea>x</textarea>"
l.noCloneChecked=!!t.cloneNode(true).lastChild.defaultValue})()
var V=typeof undefined
l.focusinBubbles="onfocusin"in e
var Y=/^key/,G=/^(?:mouse|pointer|contextmenu)|click/,Q=/^(?:focusinfocus|focusoutblur)$/,J=/^([^.]*)(?:\.(.+)|)$/
function K(){return true}function Z(){return false}function et(){try{return c.activeElement}catch(e){}}d.event={global:{},add:function(e,t,n,i,r){var o,s,a,u,f,l,c,p,h,g,m,y=M.get(e)
if(!y){return}if(n.handler){o=n
n=o.handler
r=o.selector}if(!n.guid){n.guid=d.guid++}if(!(u=y.events)){u=y.events={}}if(!(s=y.handle)){s=y.handle=function(t){return typeof d!==V&&d.event.triggered!==t.type?d.event.dispatch.apply(e,arguments):undefined}}t=(t||"").match(A)||[""]
f=t.length
while(f--){a=J.exec(t[f])||[]
h=m=a[1]
g=(a[2]||"").split(".").sort()
if(!h){continue}c=d.event.special[h]||{}
h=(r?c.delegateType:c.bindType)||h
c=d.event.special[h]||{}
l=d.extend({type:h,origType:m,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&d.expr.match.needsContext.test(r),namespace:g.join(".")},o)
if(!(p=u[h])){p=u[h]=[]
p.delegateCount=0
if(!c.setup||c.setup.call(e,i,g,s)===false){if(e.addEventListener){e.addEventListener(h,s,false)}}}if(c.add){c.add.call(e,l)
if(!l.handler.guid){l.handler.guid=n.guid}}if(r){p.splice(p.delegateCount++,0,l)}else{p.push(l)}d.event.global[h]=true}},remove:function(e,t,n,i,r){var o,s,a,u,f,l,c,p,h,g,m,y=M.hasData(e)&&M.get(e)
if(!y||!(u=y.events)){return}t=(t||"").match(A)||[""]
f=t.length
while(f--){a=J.exec(t[f])||[]
h=m=a[1]
g=(a[2]||"").split(".").sort()
if(!h){for(h in u){d.event.remove(e,h+t[f],n,i,true)}continue}c=d.event.special[h]||{}
h=(i?c.delegateType:c.bindType)||h
p=u[h]||[]
a=a[2]&&new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)")
s=o=p.length
while(o--){l=p[o]
if((r||m===l.origType)&&(!n||n.guid===l.guid)&&(!a||a.test(l.namespace))&&(!i||i===l.selector||i==="**"&&l.selector)){p.splice(o,1)
if(l.selector){p.delegateCount--}if(c.remove){c.remove.call(e,l)}}}if(s&&!p.length){if(!c.teardown||c.teardown.call(e,g,y.handle)===false){d.removeEvent(e,h,y.handle)}delete u[h]}}if(d.isEmptyObject(u)){delete y.handle
M.remove(e,"events")}},trigger:function(t,n,i,r){var o,s,a,u,l,p,h,g=[i||c],m=f.call(t,"type")?t.type:t,y=f.call(t,"namespace")?t.namespace.split("."):[]
s=a=i=i||c
if(i.nodeType===3||i.nodeType===8){return}if(Q.test(m+d.event.triggered)){return}if(m.indexOf(".")>=0){y=m.split(".")
m=y.shift()
y.sort()}l=m.indexOf(":")<0&&"on"+m
t=t[d.expando]?t:new d.Event(m,typeof t==="object"&&t)
t.isTrigger=r?2:3
t.namespace=y.join(".")
t.namespace_re=t.namespace?new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"):null
t.result=undefined
if(!t.target){t.target=i}n=n==null?[t]:d.makeArray(n,[t])
h=d.event.special[m]||{}
if(!r&&h.trigger&&h.trigger.apply(i,n)===false){return}if(!r&&!h.noBubble&&!d.isWindow(i)){u=h.delegateType||m
if(!Q.test(u+m)){s=s.parentNode}for(;s;s=s.parentNode){g.push(s)
a=s}if(a===(i.ownerDocument||c)){g.push(a.defaultView||a.parentWindow||e)}}o=0
while((s=g[o++])&&!t.isPropagationStopped()){t.type=o>1?u:h.bindType||m
p=(M.get(s,"events")||{})[t.type]&&M.get(s,"handle")
if(p){p.apply(s,n)}p=l&&s[l]
if(p&&p.apply&&d.acceptData(s)){t.result=p.apply(s,n)
if(t.result===false){t.preventDefault()}}}t.type=m
if(!r&&!t.isDefaultPrevented()){if((!h._default||h._default.apply(g.pop(),n)===false)&&d.acceptData(i)){if(l&&d.isFunction(i[m])&&!d.isWindow(i)){a=i[l]
if(a){i[l]=null}d.event.triggered=m
i[m]()
d.event.triggered=undefined
if(a){i[l]=a}}}}return t.result},dispatch:function(e){e=d.event.fix(e)
var t,n,r,o,s,a=[],u=i.call(arguments),f=(M.get(this,"events")||{})[e.type]||[],l=d.event.special[e.type]||{}
u[0]=e
e.delegateTarget=this
if(l.preDispatch&&l.preDispatch.call(this,e)===false){return}a=d.event.handlers.call(this,e,f)
t=0
while((o=a[t++])&&!e.isPropagationStopped()){e.currentTarget=o.elem
n=0
while((s=o.handlers[n++])&&!e.isImmediatePropagationStopped()){if(!e.namespace_re||e.namespace_re.test(s.namespace)){e.handleObj=s
e.data=s.data
r=((d.event.special[s.origType]||{}).handle||s.handler).apply(o.elem,u)
if(r!==undefined){if((e.result=r)===false){e.preventDefault()
e.stopPropagation()}}}}}if(l.postDispatch){l.postDispatch.call(this,e)}return e.result},handlers:function(e,t){var n,i,r,o,s=[],a=t.delegateCount,u=e.target
if(a&&u.nodeType&&(!e.button||e.type!=="click")){for(;u!==this;u=u.parentNode||this){if(u.disabled!==true||e.type!=="click"){i=[]
for(n=0;n<a;n++){o=t[n]
r=o.selector+" "
if(i[r]===undefined){i[r]=o.needsContext?d(r,this).index(u)>=0:d.find(r,this,null,[u]).length}if(i[r]){i.push(o)}}if(i.length){s.push({elem:u,handlers:i})}}}}if(a<t.length){s.push({elem:this,handlers:t.slice(a)})}return s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){if(e.which==null){e.which=t.charCode!=null?t.charCode:t.keyCode}return e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,o=t.button
if(e.pageX==null&&t.clientX!=null){n=e.target.ownerDocument||c
i=n.documentElement
r=n.body
e.pageX=t.clientX+(i&&i.scrollLeft||r&&r.scrollLeft||0)-(i&&i.clientLeft||r&&r.clientLeft||0)
e.pageY=t.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i&&i.clientTop||r&&r.clientTop||0)}if(!e.which&&o!==undefined){e.which=o&1?1:o&2?3:o&4?2:0}return e}},fix:function(e){if(e[d.expando]){return e}var t,n,i,r=e.type,o=e,s=this.fixHooks[r]
if(!s){this.fixHooks[r]=s=G.test(r)?this.mouseHooks:Y.test(r)?this.keyHooks:{}}i=s.props?this.props.concat(s.props):this.props
e=new d.Event(o)
t=i.length
while(t--){n=i[t]
e[n]=o[n]}if(!e.target){e.target=c}if(e.target.nodeType===3){e.target=e.target.parentNode}return s.filter?s.filter(e,o):e},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==et()&&this.focus){this.focus()
return false}},delegateType:"focusin"},blur:{trigger:function(){if(this===et()&&this.blur){this.blur()
return false}},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&d.nodeName(this,"input")){this.click()
return false}},_default:function(e){return d.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){if(e.result!==undefined&&e.originalEvent){e.originalEvent.returnValue=e.result}}}},simulate:function(e,t,n,i){var r=d.extend(new d.Event,n,{type:e,isSimulated:true,originalEvent:{}})
if(i){d.event.trigger(r,null,t)}else{d.event.dispatch.call(t,r)}if(r.isDefaultPrevented()){n.preventDefault()}}}
d.removeEvent=function(e,t,n){if(e.removeEventListener){e.removeEventListener(t,n,false)}}
d.Event=function(e,t){if(!(this instanceof d.Event)){return new d.Event(e,t)}if(e&&e.type){this.originalEvent=e
this.type=e.type
this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===undefined&&e.returnValue===false?K:Z}else{this.type=e}if(t){d.extend(this,t)}this.timeStamp=e&&e.timeStamp||d.now()
this[d.expando]=true}
d.Event.prototype={isDefaultPrevented:Z,isPropagationStopped:Z,isImmediatePropagationStopped:Z,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=K
if(e&&e.preventDefault){e.preventDefault()}},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=K
if(e&&e.stopPropagation){e.stopPropagation()}},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=K
if(e&&e.stopImmediatePropagation){e.stopImmediatePropagation()}this.stopPropagation()}}
d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){d.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,o=e.handleObj
if(!r||r!==i&&!d.contains(i,r)){e.type=o.origType
n=o.handler.apply(this,arguments)
e.type=t}return n}}})
if(!l.focusinBubbles){d.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){d.event.simulate(t,e.target,d.event.fix(e),true)}
d.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=M.access(i,t)
if(!r){i.addEventListener(e,n,true)}M.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=M.access(i,t)-1
if(!r){i.removeEventListener(e,n,true)
M.remove(i,t)}else{M.access(i,t,r)}}}})}d.fn.extend({on:function(e,t,n,i,r){var o,s
if(typeof e==="object"){if(typeof t!=="string"){n=n||t
t=undefined}for(s in e){this.on(s,t,n,e[s],r)}return this}if(n==null&&i==null){i=t
n=t=undefined}else if(i==null){if(typeof t==="string"){i=n
n=undefined}else{i=n
n=t
t=undefined}}if(i===false){i=Z}else if(!i){return this}if(r===1){o=i
i=function(e){d().off(e)
return o.apply(this,arguments)}
i.guid=o.guid||(o.guid=d.guid++)}return this.each(function(){d.event.add(this,e,i,n,t)})},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,t,n){var i,r
if(e&&e.preventDefault&&e.handleObj){i=e.handleObj
d(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler)
return this}if(typeof e==="object"){for(r in e){this.off(r,t,e[r])}return this}if(t===false||typeof t==="function"){n=t
t=undefined}if(n===false){n=Z}return this.each(function(){d.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){d.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0]
if(n){return d.event.trigger(e,t,n,true)}}})
var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,it=/<|&#?\w+;/,rt=/<(?:script|style|link)/i,ot=/checked\s*(?:[^=]|=\s*.checked.)/i,st=/^$|\/(?:java|ecma)script/i,at=/^true\/(.*)/,ut=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ft={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
ft.optgroup=ft.option
ft.tbody=ft.tfoot=ft.colgroup=ft.caption=ft.thead
ft.th=ft.td
function lt(e,t){return d.nodeName(e,"table")&&d.nodeName(t.nodeType!==11?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ct(e){e.type=(e.getAttribute("type")!==null)+"/"+e.type
return e}function pt(e){var t=at.exec(e.type)
if(t){e.type=t[1]}else{e.removeAttribute("type")}return e}function dt(e,t){var n=0,i=e.length
for(;n<i;n++){M.set(e[n],"globalEval",!t||M.get(t[n],"globalEval"))}}function ht(e,t){var n,i,r,o,s,a,u,f
if(t.nodeType!==1){return}if(M.hasData(e)){o=M.access(e)
s=M.set(t,o)
f=o.events
if(f){delete s.handle
s.events={}
for(r in f){for(n=0,i=f[r].length;n<i;n++){d.event.add(t,r,f[r][n])}}}}if(R.hasData(e)){a=R.access(e)
u=d.extend({},a)
R.set(t,u)}}function gt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[]
return t===undefined||t&&d.nodeName(e,t)?d.merge([e],n):n}function mt(e,t){var n=t.nodeName.toLowerCase()
if(n==="input"&&U.test(e.type)){t.checked=e.checked}else if(n==="input"||n==="textarea"){t.defaultValue=e.defaultValue}}d.extend({clone:function(e,t,n){var i,r,o,s,a=e.cloneNode(true),u=d.contains(e.ownerDocument,e)
if(!l.noCloneChecked&&(e.nodeType===1||e.nodeType===11)&&!d.isXMLDoc(e)){s=gt(a)
o=gt(e)
for(i=0,r=o.length;i<r;i++){mt(o[i],s[i])}}if(t){if(n){o=o||gt(e)
s=s||gt(a)
for(i=0,r=o.length;i<r;i++){ht(o[i],s[i])}}else{ht(e,a)}}s=gt(a,"script")
if(s.length>0){dt(s,!u&&gt(e,"script"))}return a},buildFragment:function(e,t,n,i){var r,o,s,a,u,f,l=t.createDocumentFragment(),c=[],p=0,h=e.length
for(;p<h;p++){r=e[p]
if(r||r===0){if(d.type(r)==="object"){d.merge(c,r.nodeType?[r]:r)}else if(!it.test(r)){c.push(t.createTextNode(r))}else{o=o||l.appendChild(t.createElement("div"))
s=(nt.exec(r)||["",""])[1].toLowerCase()
a=ft[s]||ft._default
o.innerHTML=a[1]+r.replace(tt,"<$1></$2>")+a[2]
f=a[0]
while(f--){o=o.lastChild}d.merge(c,o.childNodes)
o=l.firstChild
o.textContent=""}}}l.textContent=""
p=0
while(r=c[p++]){if(i&&d.inArray(r,i)!==-1){continue}u=d.contains(r.ownerDocument,r)
o=gt(l.appendChild(r),"script")
if(u){dt(o)}if(n){f=0
while(r=o[f++]){if(st.test(r.type||"")){n.push(r)}}}}return l},cleanData:function(e){var t,n,i,r,o=d.event.special,s=0
for(;(n=e[s])!==undefined;s++){if(d.acceptData(n)){r=n[M.expando]
if(r&&(t=M.cache[r])){if(t.events){for(i in t.events){if(o[i]){d.event.remove(n,i)}else{d.removeEvent(n,i,t.handle)}}}if(M.cache[r]){delete M.cache[r]}}}delete R.cache[n[R.expando]]}}})
d.fn.extend({text:function(e){return F(this,function(e){return e===undefined?d.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=e}})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=lt(this,e)
t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=lt(this,e)
t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this)}})},after:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this.nextSibling)}})},remove:function(e,t){var n,i=e?d.filter(e,this):this,r=0
for(;(n=i[r])!=null;r++){if(!t&&n.nodeType===1){d.cleanData(gt(n))}if(n.parentNode){if(t&&d.contains(n.ownerDocument,n)){dt(gt(n,"script"))}n.parentNode.removeChild(n)}}return this},empty:function(){var e,t=0
for(;(e=this[t])!=null;t++){if(e.nodeType===1){d.cleanData(gt(e,false))
e.textContent=""}}return this},clone:function(e,t){e=e==null?false:e
t=t==null?e:t
return this.map(function(){return d.clone(this,e,t)})},html:function(e){return F(this,function(e){var t=this[0]||{},n=0,i=this.length
if(e===undefined&&t.nodeType===1){return t.innerHTML}if(typeof e==="string"&&!rt.test(e)&&!ft[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>")
try{for(;n<i;n++){t=this[n]||{}
if(t.nodeType===1){d.cleanData(gt(t,false))
t.innerHTML=e}}t=0}catch(r){}}if(t){this.empty().append(e)}},null,e,arguments.length)},replaceWith:function(){var e=arguments[0]
this.domManip(arguments,function(t){e=this.parentNode
d.cleanData(gt(this))
if(e){e.replaceChild(t,this)}})
return e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,true)},domManip:function(e,t){e=r.apply([],e)
var n,i,o,s,a,u,f=0,c=this.length,p=this,h=c-1,g=e[0],m=d.isFunction(g)
if(m||c>1&&typeof g==="string"&&!l.checkClone&&ot.test(g)){return this.each(function(n){var i=p.eq(n)
if(m){e[0]=g.call(this,n,i.html())}i.domManip(e,t)})}if(c){n=d.buildFragment(e,this[0].ownerDocument,false,this)
i=n.firstChild
if(n.childNodes.length===1){n=i}if(i){o=d.map(gt(n,"script"),ct)
s=o.length
for(;f<c;f++){a=n
if(f!==h){a=d.clone(a,true,true)
if(s){d.merge(o,gt(a,"script"))}}t.call(this[f],a,f)}if(s){u=o[o.length-1].ownerDocument
d.map(o,pt)
for(f=0;f<s;f++){a=o[f]
if(st.test(a.type||"")&&!M.access(a,"globalEval")&&d.contains(u,a)){if(a.src){if(d._evalUrl){d._evalUrl(a.src)}}else{d.globalEval(a.textContent.replace(ut,""))}}}}}}return this}})
d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){d.fn[e]=function(e){var n,i=[],r=d(e),s=r.length-1,a=0
for(;a<=s;a++){n=a===s?this:this.clone(true)
d(r[a])[t](n)
o.apply(i,n.get())}return this.pushStack(i)}})
var yt,vt={}
function xt(t,n){var i,r=d(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(i=e.getDefaultComputedStyle(r[0]))?i.display:d.css(r[0],"display")
r.detach()
return o}function wt(e){var t=c,n=vt[e]
if(!n){n=xt(e,t)
if(n==="none"||!n){yt=(yt||d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement)
t=yt[0].contentDocument
t.write()
t.close()
n=xt(e,t)
yt.detach()}vt[e]=n}return n}var bt=/^margin/
var Tt=new RegExp("^("+_+")(?!px)[a-z%]+$","i")
var Ct=function(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)}
function kt(e,t,n){var i,r,o,s,a=e.style
n=n||Ct(e)
if(n){s=n.getPropertyValue(t)||n[t]}if(n){if(s===""&&!d.contains(e.ownerDocument,e)){s=d.style(e,t)}if(Tt.test(s)&&bt.test(t)){i=a.width
r=a.minWidth
o=a.maxWidth
a.minWidth=a.maxWidth=a.width=s
s=n.width
a.width=i
a.minWidth=r
a.maxWidth=o}}return s!==undefined?s+"":s}function Nt(e,t){return{get:function(){if(e()){delete this.get
return}return(this.get=t).apply(this,arguments)}}}(function(){var t,n,i=c.documentElement,r=c.createElement("div"),o=c.createElement("div")
if(!o.style){return}o.style.backgroundClip="content-box"
o.cloneNode(true).style.backgroundClip=""
l.clearCloneStyle=o.style.backgroundClip==="content-box"
r.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;"+"position:absolute"
r.appendChild(o)
function s(){o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;"+"box-sizing:border-box;display:block;margin-top:1%;top:1%;"+"border:1px;padding:1px;width:4px;position:absolute"
o.innerHTML=""
i.appendChild(r)
var s=e.getComputedStyle(o,null)
t=s.top!=="1%"
n=s.width==="4px"
i.removeChild(r)}if(e.getComputedStyle){d.extend(l,{pixelPosition:function(){s()
return t},boxSizingReliable:function(){if(n==null){s()}return n},reliableMarginRight:function(){var t,n=o.appendChild(c.createElement("div"))
n.style.cssText=o.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;padding:0"
n.style.marginRight=n.style.width="0"
o.style.width="1px"
i.appendChild(r)
t=!parseFloat(e.getComputedStyle(n,null).marginRight)
i.removeChild(r)
return t}})}})()
d.swap=function(e,t,n,i){var r,o,s={}
for(o in t){s[o]=e.style[o]
e.style[o]=t[o]}r=n.apply(e,i||[])
for(o in t){e.style[o]=s[o]}return r}
var Et=/^(none|table(?!-c[ea]).+)/,St=new RegExp("^("+_+")(.*)$","i"),jt=new RegExp("^([+-])=("+_+")","i"),Dt={position:"absolute",visibility:"hidden",display:"block"},At={letterSpacing:"0",fontWeight:"400"},Lt=["Webkit","O","Moz","ms"]
function qt(e,t){if(t in e){return t}var n=t[0].toUpperCase()+t.slice(1),i=t,r=Lt.length
while(r--){t=Lt[r]+n
if(t in e){return t}}return i}function Ht(e,t,n){var i=St.exec(t)
return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function Ot(e,t,n,i,r){var o=n===(i?"border":"content")?4:t==="width"?1:0,s=0
for(;o<4;o+=2){if(n==="margin"){s+=d.css(e,n+z[o],true,r)}if(i){if(n==="content"){s-=d.css(e,"padding"+z[o],true,r)}if(n!=="margin"){s-=d.css(e,"border"+z[o]+"Width",true,r)}}else{s+=d.css(e,"padding"+z[o],true,r)
if(n!=="padding"){s+=d.css(e,"border"+z[o]+"Width",true,r)}}}return s}function Ft(e,t,n){var i=true,r=t==="width"?e.offsetWidth:e.offsetHeight,o=Ct(e),s=d.css(e,"boxSizing",false,o)==="border-box"
if(r<=0||r==null){r=kt(e,t,o)
if(r<0||r==null){r=e.style[t]}if(Tt.test(r)){return r}i=s&&(l.boxSizingReliable()||r===e.style[t])
r=parseFloat(r)||0}return r+Ot(e,t,n||(s?"border":"content"),i,o)+"px"}function Pt(e,t){var n,i,r,o=[],s=0,a=e.length
for(;s<a;s++){i=e[s]
if(!i.style){continue}o[s]=M.get(i,"olddisplay")
n=i.style.display
if(t){if(!o[s]&&n==="none"){i.style.display=""}if(i.style.display===""&&X(i)){o[s]=M.access(i,"olddisplay",wt(i.nodeName))}}else{r=X(i)
if(n!=="none"||!r){M.set(i,"olddisplay",r?n:d.css(i,"display"))}}}for(s=0;s<a;s++){i=e[s]
if(!i.style){continue}if(!t||i.style.display==="none"||i.style.display===""){i.style.display=t?o[s]||"":"none"}}return e}d.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=kt(e,"opacity")
return n===""?"1":n}}}},cssNumber:{columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":"cssFloat"},style:function(e,t,n,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style){return}var r,o,s,a=d.camelCase(t),u=e.style
t=d.cssProps[a]||(d.cssProps[a]=qt(u,a))
s=d.cssHooks[t]||d.cssHooks[a]
if(n!==undefined){o=typeof n
if(o==="string"&&(r=jt.exec(n))){n=(r[1]+1)*r[2]+parseFloat(d.css(e,t))
o="number"}if(n==null||n!==n){return}if(o==="number"&&!d.cssNumber[a]){n+="px"}if(!l.clearCloneStyle&&n===""&&t.indexOf("background")===0){u[t]="inherit"}if(!s||!("set"in s)||(n=s.set(e,n,i))!==undefined){u[t]=n}}else{if(s&&"get"in s&&(r=s.get(e,false,i))!==undefined){return r}return u[t]}},css:function(e,t,n,i){var r,o,s,a=d.camelCase(t)
t=d.cssProps[a]||(d.cssProps[a]=qt(e.style,a))
s=d.cssHooks[t]||d.cssHooks[a]
if(s&&"get"in s){r=s.get(e,true,n)}if(r===undefined){r=kt(e,t,i)}if(r==="normal"&&t in At){r=At[t]}if(n===""||n){o=parseFloat(r)
return n===true||d.isNumeric(o)?o||0:r}return r}})
d.each(["height","width"],function(e,t){d.cssHooks[t]={get:function(e,n,i){if(n){return Et.test(d.css(e,"display"))&&e.offsetWidth===0?d.swap(e,Dt,function(){return Ft(e,t,i)}):Ft(e,t,i)}},set:function(e,n,i){var r=i&&Ct(e)
return Ht(e,n,i?Ot(e,t,i,d.css(e,"boxSizing",false,r)==="border-box",r):0)}}})
d.cssHooks.marginRight=Nt(l.reliableMarginRight,function(e,t){if(t){return d.swap(e,{display:"inline-block"},kt,[e,"marginRight"])}})
d.each({margin:"",padding:"",border:"Width"},function(e,t){d.cssHooks[e+t]={expand:function(n){var i=0,r={},o=typeof n==="string"?n.split(" "):[n]
for(;i<4;i++){r[e+z[i]+t]=o[i]||o[i-2]||o[0]}return r}}
if(!bt.test(e)){d.cssHooks[e+t].set=Ht}})
d.fn.extend({css:function(e,t){return F(this,function(e,t,n){var i,r,o={},s=0
if(d.isArray(t)){i=Ct(e)
r=t.length
for(;s<r;s++){o[t[s]]=d.css(e,t[s],false,i)}return o}return n!==undefined?d.style(e,t,n):d.css(e,t)},e,t,arguments.length>1)},show:function(){return Pt(this,true)},hide:function(){return Pt(this)},toggle:function(e){if(typeof e==="boolean"){return e?this.show():this.hide()}return this.each(function(){if(X(this)){d(this).show()}else{d(this).hide()}})}})
function Mt(e,t,n,i,r){return new Mt.prototype.init(e,t,n,i,r)}d.Tween=Mt
Mt.prototype={constructor:Mt,init:function(e,t,n,i,r,o){this.elem=e
this.prop=n
this.easing=r||"swing"
this.options=t
this.start=this.now=this.cur()
this.end=i
this.unit=o||(d.cssNumber[n]?"":"px")},cur:function(){var e=Mt.propHooks[this.prop]
return e&&e.get?e.get(this):Mt.propHooks._default.get(this)},run:function(e){var t,n=Mt.propHooks[this.prop]
if(this.options.duration){this.pos=t=d.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration)}else{this.pos=t=e}this.now=(this.end-this.start)*t+this.start
if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(n&&n.set){n.set(this)}else{Mt.propHooks._default.set(this)}return this}}
Mt.prototype.init.prototype=Mt.prototype
Mt.propHooks={_default:{get:function(e){var t
if(e.elem[e.prop]!=null&&(!e.elem.style||e.elem.style[e.prop]==null)){return e.elem[e.prop]}t=d.css(e.elem,e.prop,"")
return!t||t==="auto"?0:t},set:function(e){if(d.fx.step[e.prop]){d.fx.step[e.prop](e)}else if(e.elem.style&&(e.elem.style[d.cssProps[e.prop]]!=null||d.cssHooks[e.prop])){d.style(e.elem,e.prop,e.now+e.unit)}else{e.elem[e.prop]=e.now}}}}
Mt.propHooks.scrollTop=Mt.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now}}}
d.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}}
d.fx=Mt.prototype.init
d.fx.step={}
var Rt,Wt,$t=/^(?:toggle|show|hide)$/,Bt=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),It=/queueHooks$/,_t=[Yt],zt={"*":[function(e,t){var n=this.createTween(e,t),i=n.cur(),r=Bt.exec(t),o=r&&r[3]||(d.cssNumber[e]?"":"px"),s=(d.cssNumber[e]||o!=="px"&&+i)&&Bt.exec(d.css(n.elem,e)),a=1,u=20
if(s&&s[3]!==o){o=o||s[3]
r=r||[]
s=+i||1
do{a=a||".5"
s=s/a
d.style(n.elem,e,s+o)}while(a!==(a=n.cur()/i)&&a!==1&&--u)}if(r){s=n.start=+s||+i||0
n.unit=o
n.end=r[1]?s+(r[1]+1)*r[2]:+r[2]}return n}]}
function Xt(){setTimeout(function(){Rt=undefined})
return Rt=d.now()}function Ut(e,t){var n,i=0,r={height:e}
t=t?1:0
for(;i<4;i+=2-t){n=z[i]
r["margin"+n]=r["padding"+n]=e}if(t){r.opacity=r.width=e}return r}function Vt(e,t,n){var i,r=(zt[t]||[]).concat(zt["*"]),o=0,s=r.length
for(;o<s;o++){if(i=r[o].call(n,t,e)){return i}}}function Yt(e,t,n){var i,r,o,s,a,u,f,l,c=this,p={},h=e.style,g=e.nodeType&&X(e),m=M.get(e,"fxshow")
if(!n.queue){a=d._queueHooks(e,"fx")
if(a.unqueued==null){a.unqueued=0
u=a.empty.fire
a.empty.fire=function(){if(!a.unqueued){u()}}}a.unqueued++
c.always(function(){c.always(function(){a.unqueued--
if(!d.queue(e,"fx").length){a.empty.fire()}})})}if(e.nodeType===1&&("height"in t||"width"in t)){n.overflow=[h.overflow,h.overflowX,h.overflowY]
f=d.css(e,"display")
l=f==="none"?M.get(e,"olddisplay")||wt(e.nodeName):f
if(l==="inline"&&d.css(e,"float")==="none"){h.display="inline-block"}}if(n.overflow){h.overflow="hidden"
c.always(function(){h.overflow=n.overflow[0]
h.overflowX=n.overflow[1]
h.overflowY=n.overflow[2]})}for(i in t){r=t[i]
if($t.exec(r)){delete t[i]
o=o||r==="toggle"
if(r===(g?"hide":"show")){if(r==="show"&&m&&m[i]!==undefined){g=true}else{continue}}p[i]=m&&m[i]||d.style(e,i)}else{f=undefined}}if(!d.isEmptyObject(p)){if(m){if("hidden"in m){g=m.hidden}}else{m=M.access(e,"fxshow",{})}if(o){m.hidden=!g}if(g){d(e).show()}else{c.done(function(){d(e).hide()})}c.done(function(){var t
M.remove(e,"fxshow")
for(t in p){d.style(e,t,p[t])}})
for(i in p){s=Vt(g?m[i]:0,i,c)
if(!(i in m)){m[i]=s.start
if(g){s.end=s.start
s.start=i==="width"||i==="height"?1:0}}}}else if((f==="none"?wt(e.nodeName):f)==="inline"){h.display=f}}function Gt(e,t){var n,i,r,o,s
for(n in e){i=d.camelCase(n)
r=t[i]
o=e[n]
if(d.isArray(o)){r=o[1]
o=e[n]=o[0]}if(n!==i){e[i]=o
delete e[n]}s=d.cssHooks[i]
if(s&&"expand"in s){o=s.expand(o)
delete e[i]
for(n in o){if(!(n in e)){e[n]=o[n]
t[n]=r}}}else{t[i]=r}}}function Qt(e,t,n){var i,r,o=0,s=_t.length,a=d.Deferred().always(function(){delete u.elem}),u=function(){if(r){return false}var t=Rt||Xt(),n=Math.max(0,f.startTime+f.duration-t),i=n/f.duration||0,o=1-i,s=0,u=f.tweens.length
for(;s<u;s++){f.tweens[s].run(o)}a.notifyWith(e,[f,o,n])
if(o<1&&u){return n}else{a.resolveWith(e,[f])
return false}},f=a.promise({elem:e,props:d.extend({},t),opts:d.extend(true,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Rt||Xt(),duration:n.duration,tweens:[],createTween:function(t,n){var i=d.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing)
f.tweens.push(i)
return i},stop:function(t){var n=0,i=t?f.tweens.length:0
if(r){return this}r=true
for(;n<i;n++){f.tweens[n].run(1)}if(t){a.resolveWith(e,[f,t])}else{a.rejectWith(e,[f,t])}return this}}),l=f.props
Gt(l,f.opts.specialEasing)
for(;o<s;o++){i=_t[o].call(f,e,l,f.opts)
if(i){return i}}d.map(l,Vt,f)
if(d.isFunction(f.opts.start)){f.opts.start.call(e,f)}d.fx.timer(d.extend(u,{elem:e,anim:f,queue:f.opts.queue}))
return f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}d.Animation=d.extend(Qt,{tweener:function(e,t){if(d.isFunction(e)){t=e
e=["*"]}else{e=e.split(" ")}var n,i=0,r=e.length
for(;i<r;i++){n=e[i]
zt[n]=zt[n]||[]
zt[n].unshift(t)}},prefilter:function(e,t){if(t){_t.unshift(e)}else{_t.push(e)}}})
d.speed=function(e,t,n){var i=e&&typeof e==="object"?d.extend({},e):{complete:n||!n&&t||d.isFunction(e)&&e,duration:e,easing:n&&t||t&&!d.isFunction(t)&&t}
i.duration=d.fx.off?0:typeof i.duration==="number"?i.duration:i.duration in d.fx.speeds?d.fx.speeds[i.duration]:d.fx.speeds._default
if(i.queue==null||i.queue===true){i.queue="fx"}i.old=i.complete
i.complete=function(){if(d.isFunction(i.old)){i.old.call(this)}if(i.queue){d.dequeue(this,i.queue)}}
return i}
d.fn.extend({fadeTo:function(e,t,n,i){return this.filter(X).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=d.isEmptyObject(e),o=d.speed(t,n,i),s=function(){var t=Qt(this,d.extend({},e),o)
if(r||M.get(this,"finish")){t.stop(true)}}
s.finish=s
return r||o.queue===false?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop
delete e.stop
t(n)}
if(typeof e!=="string"){n=t
t=e
e=undefined}if(t&&e!==false){this.queue(e||"fx",[])}return this.each(function(){var t=true,r=e!=null&&e+"queueHooks",o=d.timers,s=M.get(this)
if(r){if(s[r]&&s[r].stop){i(s[r])}}else{for(r in s){if(s[r]&&s[r].stop&&It.test(r)){i(s[r])}}}for(r=o.length;r--;){if(o[r].elem===this&&(e==null||o[r].queue===e)){o[r].anim.stop(n)
t=false
o.splice(r,1)}}if(t||!n){d.dequeue(this,e)}})},finish:function(e){if(e!==false){e=e||"fx"}return this.each(function(){var t,n=M.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=d.timers,s=i?i.length:0
n.finish=true
d.queue(this,e,[])
if(r&&r.stop){r.stop.call(this,true)}for(t=o.length;t--;){if(o[t].elem===this&&o[t].queue===e){o[t].anim.stop(true)
o.splice(t,1)}}for(t=0;t<s;t++){if(i[t]&&i[t].finish){i[t].finish.call(this)}}delete n.finish})}})
d.each(["toggle","show","hide"],function(e,t){var n=d.fn[t]
d.fn[t]=function(e,i,r){return e==null||typeof e==="boolean"?n.apply(this,arguments):this.animate(Ut(t,true),e,i,r)}})
d.each({slideDown:Ut("show"),slideUp:Ut("hide"),slideToggle:Ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){d.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}})
d.timers=[]
d.fx.tick=function(){var e,t=0,n=d.timers
Rt=d.now()
for(;t<n.length;t++){e=n[t]
if(!e()&&n[t]===e){n.splice(t--,1)}}if(!n.length){d.fx.stop()}Rt=undefined}
d.fx.timer=function(e){d.timers.push(e)
if(e()){d.fx.start()}else{d.timers.pop()}}
d.fx.interval=13
d.fx.start=function(){if(!Wt){Wt=setInterval(d.fx.tick,d.fx.interval)}}
d.fx.stop=function(){clearInterval(Wt)
Wt=null}
d.fx.speeds={slow:600,fast:200,_default:400}
d.fn.delay=function(e,t){e=d.fx?d.fx.speeds[e]||e:e
t=t||"fx"
return this.queue(t,function(t,n){var i=setTimeout(t,e)
n.stop=function(){clearTimeout(i)}})};(function(){var e=c.createElement("input"),t=c.createElement("select"),n=t.appendChild(c.createElement("option"))
e.type="checkbox"
l.checkOn=e.value!==""
l.optSelected=n.selected
t.disabled=true
l.optDisabled=!n.disabled
e=c.createElement("input")
e.value="t"
e.type="radio"
l.radioValue=e.value==="t"})()
var Jt,Kt,Zt=d.expr.attrHandle
d.fn.extend({attr:function(e,t){return F(this,d.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){d.removeAttr(this,e)})}})
d.extend({attr:function(e,t,n){var i,r,o=e.nodeType
if(!e||o===3||o===8||o===2){return}if(typeof e.getAttribute===V){return d.prop(e,t,n)}if(o!==1||!d.isXMLDoc(e)){t=t.toLowerCase()
i=d.attrHooks[t]||(d.expr.match.bool.test(t)?Kt:Jt)}if(n!==undefined){if(n===null){d.removeAttr(e,t)}else if(i&&"set"in i&&(r=i.set(e,n,t))!==undefined){return r}else{e.setAttribute(t,n+"")
return n}}else if(i&&"get"in i&&(r=i.get(e,t))!==null){return r}else{r=d.find.attr(e,t)
return r==null?undefined:r}},removeAttr:function(e,t){var n,i,r=0,o=t&&t.match(A)
if(o&&e.nodeType===1){while(n=o[r++]){i=d.propFix[n]||n
if(d.expr.match.bool.test(n)){e[i]=false}e.removeAttribute(n)}}},attrHooks:{type:{set:function(e,t){if(!l.radioValue&&t==="radio"&&d.nodeName(e,"input")){var n=e.value
e.setAttribute("type",t)
if(n){e.value=n}return t}}}}})
Kt={set:function(e,t,n){if(t===false){d.removeAttr(e,n)}else{e.setAttribute(n,n)}return n}}
d.each(d.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Zt[t]||d.find.attr
Zt[t]=function(e,t,i){var r,o
if(!i){o=Zt[t]
Zt[t]=r
r=n(e,t,i)!=null?t.toLowerCase():null
Zt[t]=o}return r}})
var en=/^(?:input|select|textarea|button)$/i
d.fn.extend({prop:function(e,t){return F(this,d.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[d.propFix[e]||e]})}})
d.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var i,r,o,s=e.nodeType
if(!e||s===3||s===8||s===2){return}o=s!==1||!d.isXMLDoc(e)
if(o){t=d.propFix[t]||t
r=d.propHooks[t]}if(n!==undefined){return r&&"set"in r&&(i=r.set(e,n,t))!==undefined?i:e[t]=n}else{return r&&"get"in r&&(i=r.get(e,t))!==null?i:e[t]}},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||en.test(e.nodeName)||e.href?e.tabIndex:-1}}}})
if(!l.optSelected){d.propHooks.selected={get:function(e){var t=e.parentNode
if(t&&t.parentNode){t.parentNode.selectedIndex}return null}}}d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this})
var tn=/[\t\r\n\f]/g
d.fn.extend({addClass:function(e){var t,n,i,r,o,s,a=typeof e==="string"&&e,u=0,f=this.length
if(d.isFunction(e)){return this.each(function(t){d(this).addClass(e.call(this,t,this.className))})}if(a){t=(e||"").match(A)||[]
for(;u<f;u++){n=this[u]
i=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(tn," "):" ")
if(i){o=0
while(r=t[o++]){if(i.indexOf(" "+r+" ")<0){i+=r+" "}}s=d.trim(i)
if(n.className!==s){n.className=s}}}}return this},removeClass:function(e){var t,n,i,r,o,s,a=arguments.length===0||typeof e==="string"&&e,u=0,f=this.length
if(d.isFunction(e)){return this.each(function(t){d(this).removeClass(e.call(this,t,this.className))})}if(a){t=(e||"").match(A)||[]
for(;u<f;u++){n=this[u]
i=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(tn," "):"")
if(i){o=0
while(r=t[o++]){while(i.indexOf(" "+r+" ")>=0){i=i.replace(" "+r+" "," ")}}s=e?d.trim(i):""
if(n.className!==s){n.className=s}}}}return this},toggleClass:function(e,t){var n=typeof e
if(typeof t==="boolean"&&n==="string"){return t?this.addClass(e):this.removeClass(e)}if(d.isFunction(e)){return this.each(function(n){d(this).toggleClass(e.call(this,n,this.className,t),t)})}return this.each(function(){if(n==="string"){var t,i=0,r=d(this),o=e.match(A)||[]
while(t=o[i++]){if(r.hasClass(t)){r.removeClass(t)}else{r.addClass(t)}}}else if(n===V||n==="boolean"){if(this.className){M.set(this,"__className__",this.className)}this.className=this.className||e===false?"":M.get(this,"__className__")||""}})},hasClass:function(e){var t=" "+e+" ",n=0,i=this.length
for(;n<i;n++){if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(tn," ").indexOf(t)>=0){return true}}return false}})
var nn=/\r/g
d.fn.extend({val:function(e){var t,n,i,r=this[0]
if(!arguments.length){if(r){t=d.valHooks[r.type]||d.valHooks[r.nodeName.toLowerCase()]
if(t&&"get"in t&&(n=t.get(r,"value"))!==undefined){return n}n=r.value
return typeof n==="string"?n.replace(nn,""):n==null?"":n}return}i=d.isFunction(e)
return this.each(function(n){var r
if(this.nodeType!==1){return}if(i){r=e.call(this,n,d(this).val())}else{r=e}if(r==null){r=""}else if(typeof r==="number"){r+=""}else if(d.isArray(r)){r=d.map(r,function(e){return e==null?"":e+""})}t=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()]
if(!t||!("set"in t)||t.set(this,r,"value")===undefined){this.value=r}})}})
d.extend({valHooks:{option:{get:function(e){var t=d.find.attr(e,"value")
return t!=null?t:d.trim(d.text(e))}},select:{get:function(e){var t,n,i=e.options,r=e.selectedIndex,o=e.type==="select-one"||r<0,s=o?null:[],a=o?r+1:i.length,u=r<0?a:o?r:0
for(;u<a;u++){n=i[u]
if((n.selected||u===r)&&(l.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!d.nodeName(n.parentNode,"optgroup"))){t=d(n).val()
if(o){return t}s.push(t)}}return s},set:function(e,t){var n,i,r=e.options,o=d.makeArray(t),s=r.length
while(s--){i=r[s]
if(i.selected=d.inArray(i.value,o)>=0){n=true}}if(!n){e.selectedIndex=-1}return o}}}})
d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(e,t){if(d.isArray(t)){return e.checked=d.inArray(d(e).val(),t)>=0}}}
if(!l.checkOn){d.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value}}})
d.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(e,t){d.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}})
d.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)}})
var rn=d.now()
var on=/\?/
d.parseJSON=function(e){return JSON.parse(e+"")}
d.parseXML=function(e){var t,n
if(!e||typeof e!=="string"){return null}try{n=new DOMParser
t=n.parseFromString(e,"text/xml")}catch(i){t=undefined}if(!t||t.getElementsByTagName("parsererror").length){d.error("Invalid XML: "+e)}return t}
var sn,an,un=/#.*$/,fn=/([?&])_=[^&]*/,ln=/^(.*?):[ \t]*([^\r\n]*)$/gm,cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pn=/^(?:GET|HEAD)$/,dn=/^\/\//,hn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,gn={},mn={},yn="*/".concat("*")
try{an=location.href}catch(vn){an=c.createElement("a")
an.href=""
an=an.href}sn=hn.exec(an.toLowerCase())||[]
function xn(e){return function(t,n){if(typeof t!=="string"){n=t
t="*"}var i,r=0,o=t.toLowerCase().match(A)||[]
if(d.isFunction(n)){while(i=o[r++]){if(i[0]==="+"){i=i.slice(1)||"*";(e[i]=e[i]||[]).unshift(n)}else{(e[i]=e[i]||[]).push(n)}}}}}function wn(e,t,n,i){var r={},o=e===mn
function s(a){var u
r[a]=true
d.each(e[a]||[],function(e,a){var f=a(t,n,i)
if(typeof f==="string"&&!o&&!r[f]){t.dataTypes.unshift(f)
s(f)
return false}else if(o){return!(u=f)}})
return u}return s(t.dataTypes[0])||!r["*"]&&s("*")}function bn(e,t){var n,i,r=d.ajaxSettings.flatOptions||{}
for(n in t){if(t[n]!==undefined){(r[n]?e:i||(i={}))[n]=t[n]}}if(i){d.extend(true,e,i)}return e}function Tn(e,t,n){var i,r,o,s,a=e.contents,u=e.dataTypes
while(u[0]==="*"){u.shift()
if(i===undefined){i=e.mimeType||t.getResponseHeader("Content-Type")}}if(i){for(r in a){if(a[r]&&a[r].test(i)){u.unshift(r)
break}}}if(u[0]in n){o=u[0]}else{for(r in n){if(!u[0]||e.converters[r+" "+u[0]]){o=r
break}if(!s){s=r}}o=o||s}if(o){if(o!==u[0]){u.unshift(o)}return n[o]}}function Cn(e,t,n,i){var r,o,s,a,u,f={},l=e.dataTypes.slice()
if(l[1]){for(s in e.converters){f[s.toLowerCase()]=e.converters[s]}}o=l.shift()
while(o){if(e.responseFields[o]){n[e.responseFields[o]]=t}if(!u&&i&&e.dataFilter){t=e.dataFilter(t,e.dataType)}u=o
o=l.shift()
if(o){if(o==="*"){o=u}else if(u!=="*"&&u!==o){s=f[u+" "+o]||f["* "+o]
if(!s){for(r in f){a=r.split(" ")
if(a[1]===o){s=f[u+" "+a[0]]||f["* "+a[0]]
if(s){if(s===true){s=f[r]}else if(f[r]!==true){o=a[0]
l.unshift(a[1])}break}}}}if(s!==true){if(s&&e["throws"]){t=s(t)}else{try{t=s(t)}catch(c){return{state:"parsererror",error:s?c:"No conversion from "+u+" to "+o}}}}}}}return{state:"success",data:t}}d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:an,type:"GET",isLocal:cn.test(sn[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":yn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":d.parseJSON,"text xml":d.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(e,t){return t?bn(bn(e,d.ajaxSettings),t):bn(d.ajaxSettings,e)},ajaxPrefilter:xn(gn),ajaxTransport:xn(mn),ajax:function(e,t){if(typeof e==="object"){t=e
e=undefined}t=t||{}
var n,i,r,o,s,a,u,f,l=d.ajaxSetup({},t),c=l.context||l,p=l.context&&(c.nodeType||c.jquery)?d(c):d.event,h=d.Deferred(),g=d.Callbacks("once memory"),m=l.statusCode||{},y={},v={},x=0,w="canceled",b={readyState:0,getResponseHeader:function(e){var t
if(x===2){if(!o){o={}
while(t=ln.exec(r)){o[t[1].toLowerCase()]=t[2]}}t=o[e.toLowerCase()]}return t==null?null:t},getAllResponseHeaders:function(){return x===2?r:null},setRequestHeader:function(e,t){var n=e.toLowerCase()
if(!x){e=v[n]=v[n]||e
y[e]=t}return this},overrideMimeType:function(e){if(!x){l.mimeType=e}return this},statusCode:function(e){var t
if(e){if(x<2){for(t in e){m[t]=[m[t],e[t]]}}else{b.always(e[b.status])}}return this},abort:function(e){var t=e||w
if(n){n.abort(t)}C(0,t)
return this}}
h.promise(b).complete=g.add
b.success=b.done
b.error=b.fail
l.url=((e||l.url||an)+"").replace(un,"").replace(dn,sn[1]+"//")
l.type=t.method||t.type||l.method||l.type
l.dataTypes=d.trim(l.dataType||"*").toLowerCase().match(A)||[""]
if(l.crossDomain==null){a=hn.exec(l.url.toLowerCase())
l.crossDomain=!!(a&&(a[1]!==sn[1]||a[2]!==sn[2]||(a[3]||(a[1]==="http:"?"80":"443"))!==(sn[3]||(sn[1]==="http:"?"80":"443"))))}if(l.data&&l.processData&&typeof l.data!=="string"){l.data=d.param(l.data,l.traditional)}wn(gn,l,t,b)
if(x===2){return b}u=l.global
if(u&&d.active++===0){d.event.trigger("ajaxStart")}l.type=l.type.toUpperCase()
l.hasContent=!pn.test(l.type)
i=l.url
if(!l.hasContent){if(l.data){i=l.url+=(on.test(i)?"&":"?")+l.data
delete l.data}if(l.cache===false){l.url=fn.test(i)?i.replace(fn,"$1_="+rn++):i+(on.test(i)?"&":"?")+"_="+rn++}}if(l.ifModified){if(d.lastModified[i]){b.setRequestHeader("If-Modified-Since",d.lastModified[i])}if(d.etag[i]){b.setRequestHeader("If-None-Match",d.etag[i])}}if(l.data&&l.hasContent&&l.contentType!==false||t.contentType){b.setRequestHeader("Content-Type",l.contentType)}b.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+yn+"; q=0.01":""):l.accepts["*"])
for(f in l.headers){b.setRequestHeader(f,l.headers[f])}if(l.beforeSend&&(l.beforeSend.call(c,b,l)===false||x===2)){return b.abort()}w="abort"
for(f in{success:1,error:1,complete:1}){b[f](l[f])}n=wn(mn,l,t,b)
if(!n){C(-1,"No Transport")}else{b.readyState=1
if(u){p.trigger("ajaxSend",[b,l])}if(l.async&&l.timeout>0){s=setTimeout(function(){b.abort("timeout")},l.timeout)}try{x=1
n.send(y,C)}catch(T){if(x<2){C(-1,T)}else{throw T}}}function C(e,t,o,a){var f,y,v,w,T,C=t
if(x===2){return}x=2
if(s){clearTimeout(s)}n=undefined
r=a||""
b.readyState=e>0?4:0
f=e>=200&&e<300||e===304
if(o){w=Tn(l,b,o)}w=Cn(l,w,b,f)
if(f){if(l.ifModified){T=b.getResponseHeader("Last-Modified")
if(T){d.lastModified[i]=T}T=b.getResponseHeader("etag")
if(T){d.etag[i]=T}}if(e===204||l.type==="HEAD"){C="nocontent"}else if(e===304){C="notmodified"}else{C=w.state
y=w.data
v=w.error
f=!v}}else{v=C
if(e||!C){C="error"
if(e<0){e=0}}}b.status=e
b.statusText=(t||C)+""
if(f){h.resolveWith(c,[y,C,b])}else{h.rejectWith(c,[b,C,v])}b.statusCode(m)
m=undefined
if(u){p.trigger(f?"ajaxSuccess":"ajaxError",[b,l,f?y:v])}g.fireWith(c,[b,C])
if(u){p.trigger("ajaxComplete",[b,l])
if(!--d.active){d.event.trigger("ajaxStop")}}}return b},getJSON:function(e,t,n){return d.get(e,t,n,"json")},getScript:function(e,t){return d.get(e,undefined,t,"script")}})
d.each(["get","post"],function(e,t){d[t]=function(e,n,i,r){if(d.isFunction(n)){r=r||i
i=n
n=undefined}return d.ajax({url:e,type:t,dataType:r,data:n,success:i})}})
d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){d.fn[t]=function(e){return this.on(t,e)}})
d._evalUrl=function(e){return d.ajax({url:e,type:"GET",dataType:"script",async:false,global:false,"throws":true})}
d.fn.extend({wrapAll:function(e){var t
if(d.isFunction(e)){return this.each(function(t){d(this).wrapAll(e.call(this,t))})}if(this[0]){t=d(e,this[0].ownerDocument).eq(0).clone(true)
if(this[0].parentNode){t.insertBefore(this[0])}t.map(function(){var e=this
while(e.firstElementChild){e=e.firstElementChild}return e}).append(this)}return this},wrapInner:function(e){if(d.isFunction(e)){return this.each(function(t){d(this).wrapInner(e.call(this,t))})}return this.each(function(){var t=d(this),n=t.contents()
if(n.length){n.wrapAll(e)}else{t.append(e)}})},wrap:function(e){var t=d.isFunction(e)
return this.each(function(n){d(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){if(!d.nodeName(this,"body")){d(this).replaceWith(this.childNodes)}}).end()}})
d.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0}
d.expr.filters.visible=function(e){return!d.expr.filters.hidden(e)}
var kn=/%20/g,Nn=/\[\]$/,En=/\r?\n/g,Sn=/^(?:submit|button|image|reset|file)$/i,jn=/^(?:input|select|textarea|keygen)/i
function Dn(e,t,n,i){var r
if(d.isArray(t)){d.each(t,function(t,r){if(n||Nn.test(e)){i(e,r)}else{Dn(e+"["+(typeof r==="object"?t:"")+"]",r,n,i)}})}else if(!n&&d.type(t)==="object"){for(r in t){Dn(e+"["+r+"]",t[r],n,i)}}else{i(e,t)}}d.param=function(e,t){var n,i=[],r=function(e,t){t=d.isFunction(t)?t():t==null?"":t
i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}
if(t===undefined){t=d.ajaxSettings&&d.ajaxSettings.traditional}if(d.isArray(e)||e.jquery&&!d.isPlainObject(e)){d.each(e,function(){r(this.name,this.value)})}else{for(n in e){Dn(n,e[n],t,r)}}return i.join("&").replace(kn,"+")}
d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=d.prop(this,"elements")
return e?d.makeArray(e):this}).filter(function(){var e=this.type
return this.name&&!d(this).is(":disabled")&&jn.test(this.nodeName)&&!Sn.test(e)&&(this.checked||!U.test(e))}).map(function(e,t){var n=d(this).val()
return n==null?null:d.isArray(n)?d.map(n,function(e){return{name:t.name,value:e.replace(En,"\r\n")}}):{name:t.name,value:n.replace(En,"\r\n")}}).get()}})
d.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}}
var An=0,Ln={},qn={0:200,1223:204},Hn=d.ajaxSettings.xhr()
if(e.ActiveXObject){d(e).on("unload",function(){for(var e in Ln){Ln[e]()}})}l.cors=!!Hn&&"withCredentials"in Hn
l.ajax=Hn=!!Hn
d.ajaxTransport(function(e){var t
if(l.cors||Hn&&!e.crossDomain){return{send:function(n,i){var r,o=e.xhr(),s=++An
o.open(e.type,e.url,e.async,e.username,e.password)
if(e.xhrFields){for(r in e.xhrFields){o[r]=e.xhrFields[r]}}if(e.mimeType&&o.overrideMimeType){o.overrideMimeType(e.mimeType)}if(!e.crossDomain&&!n["X-Requested-With"]){n["X-Requested-With"]="XMLHttpRequest"}for(r in n){o.setRequestHeader(r,n[r])}t=function(e){return function(){if(t){delete Ln[s]
t=o.onload=o.onerror=null
if(e==="abort"){o.abort()}else if(e==="error"){i(o.status,o.statusText)}else{i(qn[o.status]||o.status,o.statusText,typeof o.responseText==="string"?{text:o.responseText}:undefined,o.getAllResponseHeaders())}}}}
o.onload=t()
o.onerror=t("error")
t=Ln[s]=t("abort")
try{o.send(e.hasContent&&e.data||null)}catch(a){if(t){throw a}}},abort:function(){if(t){t()}}}}})
d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){d.globalEval(e)
return e}}})
d.ajaxPrefilter("script",function(e){if(e.cache===undefined){e.cache=false}if(e.crossDomain){e.type="GET"}})
d.ajaxTransport("script",function(e){if(e.crossDomain){var t,n
return{send:function(i,r){t=d("<script>").prop({async:true,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove()
n=null
if(e){r(e.type==="error"?404:200,e.type)}})
c.head.appendChild(t[0])},abort:function(){if(n){n()}}}}})
var On=[],Fn=/(=)\?(?=&|$)|\?\?/
d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||d.expando+"_"+rn++
this[e]=true
return e}})
d.ajaxPrefilter("json jsonp",function(t,n,i){var r,o,s,a=t.jsonp!==false&&(Fn.test(t.url)?"url":typeof t.data==="string"&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Fn.test(t.data)&&"data")
if(a||t.dataTypes[0]==="jsonp"){r=t.jsonpCallback=d.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback
if(a){t[a]=t[a].replace(Fn,"$1"+r)}else if(t.jsonp!==false){t.url+=(on.test(t.url)?"&":"?")+t.jsonp+"="+r}t.converters["script json"]=function(){if(!s){d.error(r+" was not called")}return s[0]}
t.dataTypes[0]="json"
o=e[r]
e[r]=function(){s=arguments}
i.always(function(){e[r]=o
if(t[r]){t.jsonpCallback=n.jsonpCallback
On.push(r)}if(s&&d.isFunction(o)){o(s[0])}s=o=undefined})
return"script"}})
d.parseHTML=function(e,t,n){if(!e||typeof e!=="string"){return null}if(typeof t==="boolean"){n=t
t=false}t=t||c
var i=b.exec(e),r=!n&&[]
if(i){return[t.createElement(i[1])]}i=d.buildFragment([e],t,r)
if(r&&r.length){d(r).remove()}return d.merge([],i.childNodes)}
var Pn=d.fn.load
d.fn.load=function(e,t,n){if(typeof e!=="string"&&Pn){return Pn.apply(this,arguments)}var i,r,o,s=this,a=e.indexOf(" ")
if(a>=0){i=d.trim(e.slice(a))
e=e.slice(0,a)}if(d.isFunction(t)){n=t
t=undefined}else if(t&&typeof t==="object"){r="POST"}if(s.length>0){d.ajax({url:e,type:r,dataType:"html",data:t}).done(function(e){o=arguments
s.html(i?d("<div>").append(d.parseHTML(e)).find(i):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])})}return this}
d.expr.filters.animated=function(e){return d.grep(d.timers,function(t){return e===t.elem}).length}
var Mn=e.document.documentElement
function Rn(e){return d.isWindow(e)?e:e.nodeType===9&&e.defaultView}d.offset={setOffset:function(e,t,n){var i,r,o,s,a,u,f,l=d.css(e,"position"),c=d(e),p={}
if(l==="static"){e.style.position="relative"}a=c.offset()
o=d.css(e,"top")
u=d.css(e,"left")
f=(l==="absolute"||l==="fixed")&&(o+u).indexOf("auto")>-1
if(f){i=c.position()
s=i.top
r=i.left}else{s=parseFloat(o)||0
r=parseFloat(u)||0}if(d.isFunction(t)){t=t.call(e,n,a)}if(t.top!=null){p.top=t.top-a.top+s}if(t.left!=null){p.left=t.left-a.left+r}if("using"in t){t.using.call(e,p)}else{c.css(p)}}}
d.fn.extend({offset:function(e){if(arguments.length){return e===undefined?this:this.each(function(t){d.offset.setOffset(this,e,t)})}var t,n,i=this[0],r={top:0,left:0},o=i&&i.ownerDocument
if(!o){return}t=o.documentElement
if(!d.contains(t,i)){return r}if(typeof i.getBoundingClientRect!==V){r=i.getBoundingClientRect()}n=Rn(o)
return{top:r.top+n.pageYOffset-t.clientTop,left:r.left+n.pageXOffset-t.clientLeft}},position:function(){if(!this[0]){return}var e,t,n=this[0],i={top:0,left:0}
if(d.css(n,"position")==="fixed"){t=n.getBoundingClientRect()}else{e=this.offsetParent()
t=this.offset()
if(!d.nodeName(e[0],"html")){i=e.offset()}i.top+=d.css(e[0],"borderTopWidth",true)
i.left+=d.css(e[0],"borderLeftWidth",true)}return{top:t.top-i.top-d.css(n,"marginTop",true),left:t.left-i.left-d.css(n,"marginLeft",true)}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||Mn
while(e&&(!d.nodeName(e,"html")&&d.css(e,"position")==="static")){e=e.offsetParent}return e||Mn})}})
d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var i="pageYOffset"===n
d.fn[t]=function(r){return F(this,function(t,r,o){var s=Rn(t)
if(o===undefined){return s?s[n]:t[r]}if(s){s.scrollTo(!i?o:e.pageXOffset,i?o:e.pageYOffset)}else{t[r]=o}},t,r,arguments.length,null)}})
d.each(["top","left"],function(e,t){d.cssHooks[t]=Nt(l.pixelPosition,function(e,n){if(n){n=kt(e,t)
return Tt.test(n)?d(e).position()[t]+"px":n}})})
d.each({Height:"height",Width:"width"},function(e,t){d.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){d.fn[i]=function(i,r){var o=arguments.length&&(n||typeof i!=="boolean"),s=n||(i===true||r===true?"margin":"border")
return F(this,function(t,n,i){var r
if(d.isWindow(t)){return t.document.documentElement["client"+e]}if(t.nodeType===9){r=t.documentElement
return Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])}return i===undefined?d.css(t,n,s):d.style(t,n,i,s)},t,o?i:undefined,o,null)}})})
d.fn.size=function(){return this.length}
d.fn.andSelf=d.fn.addBack
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return d})}var Wn=e.jQuery,$n=e.$
d.noConflict=function(t){if(e.$===d){e.$=$n}if(t&&e.jQuery===d){e.jQuery=Wn}return d}
if(typeof t===V){e.jQuery=e.$=d}return d})
__KA_module.exports = jQuery;
this.jQuery = jQuery;
this.$ = $;
});
KAdefine("javascript/node_modules/jquery/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/jquery/jquery.js")
});
KAdefine("third_party/javascript-khansrc/raven-js/jquery.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
(function(e){"use strict"
if(e.Raven)Raven.addPlugin(function n(){var $=e.jQuery
if(!$)return
var n=$.event.add
$.event.add=function t(e,r,i,a,u){var c
if(i&&i.handler){c=i.handler
i.handler=Raven.wrap(i.handler)}else{c=i
i=Raven.wrap(i)}if(c.guid){i.guid=c.guid}else{i.guid=c.guid=$.guid++}return n.call(this,e,r,i,a,u)}
var r=$.fn.ready
$.fn.ready=function u(e){return r.call(this,Raven.wrap(e))}
var i=$.ajax
$.ajax=function c(e,n){var r=["complete","error","success"],a
if(typeof e==="object"){n=e
e=undefined}n=n||{}
while(a=r.pop()){if($.isFunction(n[a])){n[a]=Raven.wrap(n[a])}}try{var t=i.call(this,e,n)
if($.isFunction(t.complete))t.complete=Raven.wrap(t.complete)
return t}catch(u){Raven.captureException(u)
throw u}}
var a=$.Deferred
$.Deferred=function o(e){return!a?null:a(function n(r){var i=["resolve","reject","notify","resolveWith","rejectWith","notifyWith"],a
while(a=i.pop()){if($.isFunction(r[a])){r[a]=Raven.wrap(r[a])}}if(e){e.call(r,r)}})}})})(typeof window!=="undefined"?window:this)
});
KAdefine("third_party/javascript-khansrc/underscore/underscore.js", function(__KA_require, __KA_module, __KA_exports) {
(function(){var n=this
var r=n._
var t={}
var e=Array.prototype,i=Object.prototype,u=Function.prototype
var a=e.push,f=e.slice,l=e.concat,c=i.toString,o=i.hasOwnProperty
var s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,g=e.filter,y=e.every,m=e.some,d=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,w=u.bind
var j=function(n){if(n instanceof j)return n
if(!(this instanceof j))return new j(n)
this._wrapped=n}
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=j}exports._=j}else{n._=j}j.VERSION="1.4.4"
var A=j.each=j.forEach=function(n,r,e){if(n==null)return
if(s&&n.forEach===s){n.forEach(r,e)}else if(n.length===+n.length){for(var i=0,u=n.length;i<u;i++){if(r.call(e,n[i],i,n)===t)return}}else{for(var a in n){if(j.has(n,a)){if(r.call(e,n[a],a,n)===t)return}}}}
j.map=j.collect=function(n,r,t){var e=[]
if(n==null)return e
if(p&&n.map===p)return n.map(r,t)
A(n,function(n,i,u){e[e.length]=r.call(t,n,i,u)})
return e}
var O="Reduce of empty array with no initial value"
j.reduce=j.foldl=j.inject=function(n,r,t,e){var i=arguments.length>2
if(n==null)n=[]
if(v&&n.reduce===v){if(e)r=j.bind(r,e)
return i?n.reduce(r,t):n.reduce(r)}A(n,function(n,u,a){if(!i){t=n
i=true}else{t=r.call(e,t,n,u,a)}})
if(!i)throw new TypeError(O)
return t}
j.reduceRight=j.foldr=function(n,r,t,e){var i=arguments.length>2
if(n==null)n=[]
if(h&&n.reduceRight===h){if(e)r=j.bind(r,e)
return i?n.reduceRight(r,t):n.reduceRight(r)}var u=n.length
if(u!==+u){var a=j.keys(n)
u=a.length}A(n,function(f,l,c){l=a?a[--u]:--u
if(!i){t=n[l]
i=true}else{t=r.call(e,t,n[l],l,c)}})
if(!i)throw new TypeError(O)
return t}
j.find=j.detect=function(n,r,t){var e
E(n,function(n,i,u){if(r.call(t,n,i,u)){e=n
return true}})
return e}
j.filter=j.select=function(n,r,t){var e=[]
if(n==null)return e
if(g&&n.filter===g)return n.filter(r,t)
A(n,function(n,i,u){if(r.call(t,n,i,u))e[e.length]=n})
return e}
j.reject=function(n,r,t){return j.filter(n,function(n,e,i){return!r.call(t,n,e,i)},t)}
j.every=j.all=function(n,r,e){r||(r=j.identity)
var i=true
if(n==null)return i
if(y&&n.every===y)return n.every(r,e)
A(n,function(n,u,a){if(!(i=i&&r.call(e,n,u,a)))return t})
return!!i}
var E=j.some=j.any=function(n,r,e){r||(r=j.identity)
var i=false
if(n==null)return i
if(m&&n.some===m)return n.some(r,e)
A(n,function(n,u,a){if(i||(i=r.call(e,n,u,a)))return t})
return!!i}
j.contains=j.include=function(n,r){if(n==null)return false
if(d&&n.indexOf===d)return n.indexOf(r)!=-1
return E(n,function(n){return n===r})}
j.invoke=function(n,r){var t=f.call(arguments,2)
var e=j.isFunction(r)
return j.map(n,function(n){return(e?r:n[r]).apply(n,t)})}
j.pluck=function(n,r){return j.map(n,function(n){return n[r]})}
j.where=function(n,r,t){if(j.isEmpty(r))return t?null:[]
return j[t?"find":"filter"](n,function(n){for(var t in r){if(r[t]!==n[t])return false}return true})}
j.findWhere=function(n,r){return j.where(n,r,true)}
j.max=function(n,r,t){if(!r&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535){return Math.max.apply(Math,n)}if(!r&&j.isEmpty(n))return-Infinity
var e={computed:-Infinity,value:-Infinity}
A(n,function(n,i,u){var a=r?r.call(t,n,i,u):n
a>=e.computed&&(e={value:n,computed:a})})
return e.value}
j.min=function(n,r,t){if(!r&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535){return Math.min.apply(Math,n)}if(!r&&j.isEmpty(n))return Infinity
var e={computed:Infinity,value:Infinity}
A(n,function(n,i,u){var a=r?r.call(t,n,i,u):n
a<e.computed&&(e={value:n,computed:a})})
return e.value}
j.shuffle=function(n){var r
var t=0
var e=[]
A(n,function(n){r=j.random(t++)
e[t-1]=e[r]
e[r]=n})
return e}
var k=function(n){return j.isFunction(n)?n:function(r){return r[n]}}
j.sortBy=function(n,r,t){var e=k(r)
return j.pluck(j.map(n,function(n,r,i){return{value:n,index:r,criteria:e.call(t,n,r,i)}}).sort(function(n,r){var t=n.criteria
var e=r.criteria
if(t!==e){if(t>e||t===void 0)return 1
if(t<e||e===void 0)return-1}return n.index<r.index?-1:1}),"value")}
var I=function(n,r,t,e){var i={}
var u=k(r||j.identity)
A(n,function(r,a){var f=u.call(t,r,a,n)
e(i,f,r)})
return i}
j.groupBy=function(n,r,t){return I(n,r,t,function(n,r,t){(j.has(n,r)?n[r]:n[r]=[]).push(t)})}
j.countBy=function(n,r,t){return I(n,r,t,function(n,r){if(!j.has(n,r))n[r]=0
n[r]++})}
j.sortedIndex=function(n,r,t,e){t=t==null?j.identity:k(t)
var i=t.call(e,r)
var u=0,a=n.length
while(u<a){var f=u+a>>>1
t.call(e,n[f])<i?u=f+1:a=f}return u}
j.toArray=function(n){if(!n)return[]
if(j.isArray(n))return f.call(n)
if(n.length===+n.length)return j.map(n,j.identity)
return j.values(n)}
j.size=function(n){if(n==null)return 0
return n.length===+n.length?n.length:j.keys(n).length}
j.first=j.head=j.take=function(n,r,t){if(n==null)return void 0
return r!=null&&!t?f.call(n,0,r):n[0]}
j.initial=function(n,r,t){return f.call(n,0,n.length-(r==null||t?1:r))}
j.last=function(n,r,t){if(n==null)return void 0
if(r!=null&&!t){return f.call(n,Math.max(n.length-r,0))}else{return n[n.length-1]}}
j.rest=j.tail=j.drop=function(n,r,t){return f.call(n,r==null||t?1:r)}
j.compact=function(n){return j.filter(n,j.identity)}
var F=function(n,r,t){A(n,function(n){if(j.isArray(n)){r?a.apply(t,n):F(n,r,t)}else{t.push(n)}})
return t}
j.flatten=function(n,r){return F(n,r,[])}
j.without=function(n){return j.difference(n,f.call(arguments,1))}
j.uniq=j.unique=function(n,r,t,e){if(j.isFunction(r)){e=t
t=r
r=false}var i=t?j.map(n,t,e):n
var u=[]
var a=[]
A(i,function(t,e){if(r?!e||a[a.length-1]!==t:!j.contains(a,t)){a.push(t)
u.push(n[e])}})
return u}
j.union=function(){return j.uniq(l.apply(e,arguments))}
j.intersection=function(n){var r=f.call(arguments,1)
return j.filter(j.uniq(n),function(n){return j.every(r,function(r){return j.indexOf(r,n)>=0})})}
j.difference=function(n){var r=l.apply(e,f.call(arguments,1))
return j.filter(n,function(n){return!j.contains(r,n)})}
j.zip=function(){var n=f.call(arguments)
var r=j.max(j.pluck(n,"length"))
var t=new Array(r)
for(var e=0;e<r;e++){t[e]=j.pluck(n,""+e)}return t}
j.object=function(n,r){if(n==null)return{}
var t={}
for(var e=0,i=n.length;e<i;e++){if(r){t[n[e]]=r[e]}else{t[n[e][0]]=n[e][1]}}return t}
j.indexOf=function(n,r,t){if(n==null)return-1
var e=0,i=n.length
if(t){if(typeof t=="number"){e=t<0?Math.max(0,i+t):t}else{e=j.sortedIndex(n,r)
return n[e]===r?e:-1}}if(d&&n.indexOf===d)return n.indexOf(r,t)
for(;e<i;e++)if(n[e]===r)return e
return-1}
j.lastIndexOf=function(n,r,t){if(n==null)return-1
var e=t!=null
if(b&&n.lastIndexOf===b){return e?n.lastIndexOf(r,t):n.lastIndexOf(r)}var i=e?t:n.length
while(i--)if(n[i]===r)return i
return-1}
j.range=function(n,r,t){if(arguments.length<=1){r=n||0
n=0}t=arguments[2]||1
var e=Math.max(Math.ceil((r-n)/t),0)
var i=0
var u=new Array(e)
while(i<e){u[i++]=n
n+=t}return u}
j.bind=function(n,r){if(n.bind===w&&w)return w.apply(n,f.call(arguments,1))
var t=f.call(arguments,2)
return function(){return n.apply(r,t.concat(f.call(arguments)))}}
j.partial=function(n){var r=f.call(arguments,1)
return function(){return n.apply(this,r.concat(f.call(arguments)))}}
j.bindAll=function(n){var r=f.call(arguments,1)
if(r.length===0)r=j.functions(n)
A(r,function(r){n[r]=j.bind(n[r],n)})
return n}
j.memoize=function(n,r){var t={}
r||(r=j.identity)
return function(){var e=r.apply(this,arguments)
return j.has(t,e)?t[e]:t[e]=n.apply(this,arguments)}}
j.delay=function(n,r){var t=f.call(arguments,2)
return setTimeout(function(){return n.apply(null,t)},r)}
j.defer=function(n){return j.delay.apply(j,[n,1].concat(f.call(arguments,1)))}
j.throttle=function(n,r){var t,e,i,u
var a=0
var f=function(){a=new Date
i=null
u=n.apply(t,e)}
return function(){var l=new Date
var c=r-(l-a)
t=this
e=arguments
if(c<=0){clearTimeout(i)
i=null
a=l
u=n.apply(t,e)}else if(!i){i=setTimeout(f,c)}return u}}
j.debounce=function(n,r,t){var e,i
return function(){var u=this,a=arguments
var f=function(){e=null
if(!t)i=n.apply(u,a)}
var l=t&&!e
clearTimeout(e)
e=setTimeout(f,r)
if(l)i=n.apply(u,a)
return i}}
j.once=function(n){var r=false,t
return function(){if(r)return t
r=true
t=n.apply(this,arguments)
n=null
return t}}
j.wrap=function(n,r){return function(){var t=[n]
a.apply(t,arguments)
return r.apply(this,t)}}
j.compose=function(){var n=arguments
return function(){var r=arguments
for(var t=n.length-1;t>=0;t--){r=[n[t].apply(this,r)]}return r[0]}}
j.after=function(n,r){if(n<=0)return r()
return function(){if(--n<1){return r.apply(this,arguments)}}}
j.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object")
var r=[]
for(var t in n)if(j.has(n,t))r[r.length]=t
return r}
j.values=function(n){var r=[]
for(var t in n)if(j.has(n,t))r.push(n[t])
return r}
j.pairs=function(n){var r=[]
for(var t in n)if(j.has(n,t))r.push([t,n[t]])
return r}
j.invert=function(n){var r={}
for(var t in n)if(j.has(n,t))r[n[t]]=t
return r}
j.functions=j.methods=function(n){var r=[]
for(var t in n){if(j.isFunction(n[t]))r.push(t)}return r.sort()}
j.extend=function(n){A(f.call(arguments,1),function(r){if(r){for(var t in r){n[t]=r[t]}}})
return n}
j.pick=function(n){var r={}
var t=l.apply(e,f.call(arguments,1))
A(t,function(t){if(t in n)r[t]=n[t]})
return r}
j.omit=function(n){var r={}
var t=l.apply(e,f.call(arguments,1))
for(var i in n){if(!j.contains(t,i))r[i]=n[i]}return r}
j.defaults=function(n){A(f.call(arguments,1),function(r){if(r){for(var t in r){if(n[t]==null)n[t]=r[t]}}})
return n}
j.clone=function(n){if(!j.isObject(n))return n
return j.isArray(n)?n.slice():j.extend({},n)}
j.tap=function(n,r){r(n)
return n}
var R=function(n,r,t,e){if(n===r)return n!==0||1/n==1/r
if(n==null||r==null)return n===r
if(n instanceof j)n=n._wrapped
if(r instanceof j)r=r._wrapped
var i=c.call(n)
if(i!=c.call(r))return false
switch(i){case"[object String]":return n==String(r)
case"[object Number]":return n!=+n?r!=+r:n==0?1/n==1/r:n==+r
case"[object Date]":case"[object Boolean]":return+n==+r
case"[object RegExp]":return n.source==r.source&&n.global==r.global&&n.multiline==r.multiline&&n.ignoreCase==r.ignoreCase}if(typeof n!="object"||typeof r!="object")return false
var u=t.length
while(u--){if(t[u]==n)return e[u]==r}t.push(n)
e.push(r)
var a=0,f=true
if(i=="[object Array]"){a=n.length
f=a==r.length
if(f){while(a--){if(!(f=R(n[a],r[a],t,e)))break}}}else{var l=n.constructor,o=r.constructor
if(l!==o&&!(j.isFunction(l)&&l instanceof l&&j.isFunction(o)&&o instanceof o)){return false}for(var s in n){if(j.has(n,s)){a++
if(!(f=j.has(r,s)&&R(n[s],r[s],t,e)))break}}if(f){for(s in r){if(j.has(r,s)&&!a--)break}f=!a}}t.pop()
e.pop()
return f}
j.isEqual=function(n,r){return R(n,r,[],[])}
j.isEmpty=function(n){if(n==null)return true
if(j.isArray(n)||j.isString(n))return n.length===0
for(var r in n)if(j.has(n,r))return false
return true}
j.isElement=function(n){return!!(n&&n.nodeType===1)}
j.isArray=x||function(n){return c.call(n)=="[object Array]"}
j.isObject=function(n){return n===Object(n)}
A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(r){return c.call(r)=="[object "+n+"]"}})
if(!j.isArguments(arguments)){j.isArguments=function(n){return!!(n&&j.has(n,"callee"))}}if(typeof/./!=="function"){j.isFunction=function(n){return typeof n==="function"}}j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))}
j.isNaN=function(n){return j.isNumber(n)&&n!=+n}
j.isBoolean=function(n){return n===true||n===false||c.call(n)=="[object Boolean]"}
j.isNull=function(n){return n===null}
j.isUndefined=function(n){return n===void 0}
j.has=function(n,r){return o.call(n,r)}
j.noConflict=function(){n._=r
return this}
j.identity=function(n){return n}
j.times=function(n,r,t){var e=Array(n)
for(var i=0;i<n;i++)e[i]=r.call(t,i)
return e}
j.random=function(n,r){if(r==null){r=n
n=0}return n+Math.floor(Math.random()*(r-n+1))}
var S={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}}
S.unescape=j.invert(S.escape)
var M={escape:new RegExp("["+j.keys(S.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(S.unescape).join("|")+")","g")}
j.each(["escape","unescape"],function(n){j[n]=function(r){if(r==null)return""
return(""+r).replace(M[n],function(r){return S[n][r]})}})
j.result=function(n,r){if(n==null)return null
var t=n[r]
return j.isFunction(t)?t.call(n):t}
j.mixin=function(n){A(j.functions(n),function(r){var t=j[r]=n[r]
j.prototype[r]=function(){var n=[this._wrapped]
a.apply(n,arguments)
return D.call(this,t.apply(j,n))}})}
var N=0
j.uniqueId=function(n){var r=++N+""
return n?n+r:r}
j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g}
var T=/(.)^/
var q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"}
var B=/\\|'|\r|\n|\t|\u2028|\u2029/g
j.template=function(n,r,t){var e
t=j.defaults({},t,j.templateSettings)
var i=new RegExp([(t.escape||T).source,(t.interpolate||T).source,(t.evaluate||T).source].join("|")+"|$","g")
var u=0
var a="__p+='"
n.replace(i,function(r,t,e,i,f){a+=n.slice(u,f).replace(B,function(n){return"\\"+q[n]})
if(t){a+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'"}if(e){a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"}if(i){a+="';\n"+i+"\n__p+='"}u=f+r.length
return r})
a+="';\n"
if(!t.variable)a="with(obj||{}){\n"+a+"}\n"
a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n"
try{e=new Function(t.variable||"obj","_",a)}catch(f){f.source=a
throw f}if(r)return e(r,j)
var l=function(n){return e.call(this,n,j)}
l.source="function("+(t.variable||"obj")+"){\n"+a+"}"
return l}
j.chain=function(n){return j(n).chain()}
var D=function(n){return this._chain?j(n).chain():n}
j.mixin(j)
A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=e[n]
j.prototype[n]=function(){var t=this._wrapped
r.apply(t,arguments)
if((n=="shift"||n=="splice")&&t.length===0)delete t[0]
return D.call(this,t)}})
A(["concat","join","slice"],function(n){var r=e[n]
j.prototype[n]=function(){return D.call(this,r.apply(this._wrapped,arguments))}})
j.extend(j.prototype,{chain:function(){this._chain=true
return this},value:function(){return this._wrapped}})}).call(this)
__KA_module.exports = _;
this._ = _;
});
KAdefine("javascript/node_modules/underscore/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/underscore/underscore.js")
});
KAdefine("third_party/javascript-khansrc/backbone-src/backbone.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
__KA_require("../../../javascript/node_modules/underscore/index.js");
(function(){var t=this
var e=t.Backbone
var i=[]
var r=i.push
var s=i.slice
var n=i.splice
var a
if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.0.0"
var h=t._
if(!h&&typeof require!=="undefined")h=require("underscore")
a.$=t.jQuery||t.Zepto||t.ender||t.$
a.noConflict=function(){t.Backbone=e
return this}
a.emulateHTTP=false
a.emulateJSON=false
var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this
this._events||(this._events={})
var r=this._events[t]||(this._events[t]=[])
r.push({callback:e,context:i,ctx:i||this})
return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this
var r=this
var s=h.once(function(){r.off(t,s)
e.apply(this,arguments)})
s._callback=e
return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f
if(!this._events||!l(this,"off",t,[e,i]))return this
if(!t&&!e&&!i){this._events={}
return this}a=t?[t]:h.keys(this._events)
for(o=0,u=a.length;o<u;o++){t=a[o]
if(n=this._events[t]){this._events[t]=r=[]
if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c]
if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this
var e=s.call(arguments,1)
if(!l(this,"trigger",t,e))return this
var i=this._events[t]
var r=this._events.all
if(i)c(i,e)
if(r)c(r,arguments)
return this},stopListening:function(t,e,i){var r=this._listeners
if(!r)return this
var s=!e&&!i
if(typeof e==="object")i=this
if(t)(r={})[t._listenerId]=t
for(var n in r){r[n].off(e,i,this)
if(s)delete this._listeners[n]}return this}}
var u=/\s+/
var l=function(t,e,i,r){if(!i)return true
if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u)
for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true}
var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2]
switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx)
return
case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n)
return
case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a)
return
case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h)
return
default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}}
var f={listenTo:"on",listenToOnce:"once"}
h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeners||(this._listeners={})
var n=e._listenerId||(e._listenerId=h.uniqueId("l"))
s[n]=e
if(typeof i==="object")r=this
e[t](i,r,this)
return this}})
o.bind=o.on
o.unbind=o.off
h.extend(a,o)
var d=a.Model=function(t,e){var i
var r=t||{}
e||(e={})
this.cid=h.uniqueId("c")
this.attributes={}
h.extend(this,h.pick(e,p))
if(e.parse)r=this.parse(r,e)||{}
if(i=h.result(this,"defaults")){r=h.defaults({},r,i)}this.set(r,e)
this.changed={}
this.initialize.apply(this,arguments)}
var p=["url","urlRoot","collection"]
h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c
if(t==null)return this
if(typeof t==="object"){s=t
i=e}else{(s={})[t]=e}i||(i={})
if(!this._validate(s,i))return false
n=i.unset
o=i.silent
a=[]
u=this._changing
this._changing=true
if(!u){this._previousAttributes=h.clone(this.attributes)
this.changed={}}c=this.attributes,l=this._previousAttributes
if(this.idAttribute in s)this.id=s[this.idAttribute]
for(r in s){e=s[r]
if(!h.isEqual(c[r],e))a.push(r)
if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true
for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this
if(!o){while(this._pending){this._pending=false
this.trigger("change",this,i)}}this._pending=false
this._changing=false
return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={}
for(var i in this.attributes)e[i]=void 0
return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed)
return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false
var e,i=false
var r=this._changing?this._previousAttributes:this.attributes
for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null
return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{}
if(t.parse===void 0)t.parse=true
var e=this
var i=t.success
t.success=function(r){if(!e.set(e.parse(r,t),t))return false
if(i)i(e,r,t)
e.trigger("sync",e,r,t)}
M(this,t)
return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes
if(t==null||typeof t==="object"){r=t
i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false
i=h.extend({validate:true},i)
if(!this._validate(r,i))return false
if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true
var o=this
var u=i.success
i.success=function(t){o.attributes=a
var e=o.parse(t,i)
if(i.wait)e=h.extend(r||{},e)
if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i)
o.trigger("sync",o,t,i)}
M(this,i)
s=this.isNew()?"create":i.patch?"patch":"update"
if(s==="patch")i.attrs=r
n=this.sync(s,this,i)
if(r&&i.wait)this.attributes=a
return n},destroy:function(t){t=t?h.clone(t):{}
var e=this
var i=t.success
var r=function(){e.trigger("destroy",e,e.collection,t)}
t.success=function(s){if(t.wait||e.isNew())r()
if(i)i(e,s,t)
if(!e.isNew())e.trigger("sync",e,s,t)}
if(this.isNew()){t.success()
return false}M(this,t)
var s=this.sync("delete",this,t)
if(!t.wait)r()
return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||R()
if(this.isNew())return t
return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true
t=h.extend({},this.attributes,t)
var i=this.validationError=this.validate(t,e)||null
if(!i)return true
this.trigger("invalid",this,i,h.extend(e||{},{validationError:i}))
return false}})
var v=["keys","values","pairs","invert","pick","omit"]
h.each(v,function(t){d.prototype[t]=function(){var e=s.call(arguments)
e.unshift(this.attributes)
return h[t].apply(h,e)}})
var g=a.Collection=function(t,e){e||(e={})
if(e.url)this.url=e.url
if(e.model)this.model=e.model
if(e.comparator!==void 0)this.comparator=e.comparator
this._reset()
this.initialize.apply(this,arguments)
if(t)this.reset(t,h.extend({silent:true},e))}
var m={add:true,remove:true,merge:true}
var y={add:true,merge:false,remove:false}
h.extend(g.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.defaults(e||{},y))},remove:function(t,e){t=h.isArray(t)?t.slice():[t]
e||(e={})
var i,r,s,n
for(i=0,r=t.length;i<r;i++){n=this.get(t[i])
if(!n)continue
delete this._byId[n.id]
delete this._byId[n.cid]
s=this.indexOf(n)
this.models.splice(s,1)
this.length--
if(!e.silent){e.index=s
n.trigger("remove",n,this,e)}this._removeReference(n)}return this},set:function(t,e){e=h.defaults(e||{},m)
if(e.parse)t=this.parse(t,e)
if(!h.isArray(t))t=t?[t]:[]
var i,s,a,o,u,l
var c=e.at
var f=this.comparator&&c==null&&e.sort!==false
var d=h.isString(this.comparator)?this.comparator:null
var p=[],v=[],g={}
for(i=0,s=t.length;i<s;i++){if(!(a=this._prepareModel(t[i],e)))continue
if(u=this.get(a)){if(e.remove)g[u.cid]=true
if(e.merge){u.set(a.attributes,e)
if(f&&!l&&u.hasChanged(d))l=true}}else if(e.add){p.push(a)
a.on("all",this._onModelEvent,this)
this._byId[a.cid]=a
if(a.id!=null)this._byId[a.id]=a}}if(e.remove){for(i=0,s=this.length;i<s;++i){if(!g[(a=this.models[i]).cid])v.push(a)}if(v.length)this.remove(v,e)}if(p.length){if(f)l=true
this.length+=p.length
if(c!=null){n.apply(this.models,[c,0].concat(p))}else{r.apply(this.models,p)}}if(l)this.sort({silent:true})
if(e.silent)return this
for(i=0,s=p.length;i<s;i++){(a=p[i]).trigger("add",a,this,e)}if(l)this.trigger("sort",this,e)
return this},reset:function(t,e){e||(e={})
for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models
this._reset()
this.add(t,h.extend({silent:true},e))
if(!e.silent)this.trigger("reset",this,e)
return this},push:function(t,e){t=this._prepareModel(t,e)
this.add(t,h.extend({at:this.length},e))
return t},pop:function(t){var e=this.at(this.length-1)
this.remove(e,t)
return e},unshift:function(t,e){t=this._prepareModel(t,e)
this.add(t,h.extend({at:0},e))
return t},shift:function(t){var e=this.at(0)
this.remove(e,t)
return e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){if(t==null)return void 0
return this._byId[t.id!=null?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[]
return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator")
t||(t={})
if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t)
return this},sortedIndex:function(t,e,i){e||(e=this.comparator)
var r=h.isFunction(e)?e:function(t){return t.get(e)}
return h.sortedIndex(this.models,t,r,i)},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{}
if(t.parse===void 0)t.parse=true
var e=t.success
var i=this
t.success=function(r){var s=t.reset?"reset":"set"
i[s](r,t)
if(e)e(i,r,t)
i.trigger("sync",i,r,t)}
M(this,t)
return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{}
if(!(t=this._prepareModel(t,e)))return false
if(!e.wait)this.add(t,e)
var i=this
var r=e.success
e.success=function(s){if(e.wait)i.add(t,e)
if(r)r(t,s,e)}
t.save(null,e)
return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0
this.models=[]
this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this
return t}e||(e={})
e.collection=this
var i=new this.model(t,e)
if(!i._validate(t,e)){this.trigger("invalid",this,t,e)
return false}return i},_removeReference:function(t){if(this===t.collection)delete t.collection
t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return
if(t==="destroy")this.remove(e,r)
if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)]
if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}})
var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"]
h.each(_,function(t){g.prototype[t]=function(){var e=s.call(arguments)
e.unshift(this.models)
return h[t].apply(h,e)}})
var w=["groupBy","countBy","sortBy"]
h.each(w,function(t){g.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)}
return h[t](this.models,r,i)}})
var b=a.View=function(t){this.cid=h.uniqueId("view")
this._configure(t||{})
this._ensureElement()
this.initialize.apply(this,arguments)
this.delegateEvents()}
var x=/^(\S+)\s*(.*)$/
var E=["model","collection","el","id","attributes","className","tagName","events"]
h.extend(b.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove()
this.stopListening()
return this},setElement:function(t,e){if(this.$el)this.undelegateEvents()
this.$el=t instanceof a.$?t:a.$(t)
this.el=this.$el[0]
if(e!==false)this.delegateEvents()
return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this
this.undelegateEvents()
for(var e in t){var i=t[e]
if(!h.isFunction(i))i=this[t[e]]
if(!i)continue
var r=e.match(x)
var s=r[1],n=r[2]
i=h.bind(i,this)
s+=".delegateEvents"+this.cid
if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid)
return this},_configure:function(t){if(this.options)t=h.extend({},h.result(this,"options"),t)
h.extend(this,h.pick(t,E))
this.options=t},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"))
if(this.id)t.id=h.result(this,"id")
if(this.className)t["class"]=h.result(this,"className")
var e=a.$("<"+h.result(this,"tagName")+">").attr(t)
this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}})
a.sync=function(t,e,i){var r=k[t]
h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON})
var s={type:r,dataType:"json"}
if(!i.url){s.url=h.result(e,"url")||R()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json"
s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded"
s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST"
if(i.emulateJSON)s.data._method=r
var n=i.beforeSend
i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r)
if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i))
e.trigger("request",e,o,i)
return o}
var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"}
a.ajax=function(){return a.$.ajax.apply(a.$,arguments)}
var S=a.Router=function(t){t||(t={})
if(t.routes)this.routes=t.routes
this._bindRoutes()
this.initialize.apply(this,arguments)}
var T=/\((.*?)\)/g
var H=/(\(\?)?:\w+/g
var A=/\*\w+/g
var I=/[\-{}\[\]+?.,\\\^$|#\s]/g
h.extend(S.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t)
if(h.isFunction(e)){i=e
e=""}if(!i)i=this[e]
var r=this
a.history.route(t,function(s){var n=r._extractParameters(t,s)
r.execute(i,n)
r.trigger.apply(r,["route:"+e].concat(n))
r.trigger("route",e,n)
a.history.trigger("route",r,e,n)})
return this},execute:function(t,e){if(t)t.apply(this,e)},navigate:function(t,e){a.history.navigate(t,e)
return this},_bindRoutes:function(){if(!this.routes)return
this.routes=h.result(this,"routes")
var t,e=h.keys(this.routes)
while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(I,"\\$&").replace(T,"(?:$1)?").replace(H,function(t,e){return e?t:"([^/]+)"}).replace(A,"(.*?)")
return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1)
return h.map(i,function(t){return t?decodeURIComponent(t):null})}})
var N=a.History=function(){this.handlers=[]
h.bindAll(this,"checkUrl")
if(typeof window!=="undefined"){this.location=window.location
this.history=window.history}}
var P=/^[#\/]|\s+$/g
var O=/^\/+|\/+$/g
var C=/msie [\w.]+/
var j=/\/$/
N.started=false
h.extend(N.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/)
return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname
var i=this.root.replace(j,"")
if(!t.indexOf(i))t=t.substr(i.length)}else{t=this.getHash()}}return t.replace(P,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started")
N.started=true
this.options=h.extend({},{root:"/"},this.options,t)
this.root=this.options.root
this._wantsHashChange=this.options.hashChange!==false
this._wantsPushState=!!this.options.pushState
this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState)
var e=this.getFragment()
var i=document.documentMode
var r=C.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7)
this.root=("/"+this.root+"/").replace(O,"/")
if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow
this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e
var s=this.location
var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root
if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!n){this.fragment=this.getFragment(null,true)
this.location.replace(this.root+this.location.search+"#"+this.fragment)
return true}else if(this._wantsPushState&&this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(P,"")
this.history.replaceState({},document.title,this.root+this.fragment+s.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl)
clearInterval(this._checkUrlInterval)
N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment()
if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false
if(this.iframe)this.navigate(e)
this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t)
var i=h.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e)
return true}})
return i},navigate:function(t,e){if(!N.started)return false
if(!e||e===true)e={trigger:e}
t=this.getFragment(t||"")
if(this.fragment===t)return
this.fragment=t
var i=this.root+t
if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace)
if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close()
this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"")
t.replace(r+"#"+e)}else{t.hash="#"+e}}})
a.history=new N
var U=function(t,e){var i=this
var r
if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e)
var s=function(){this.constructor=r}
s.prototype=i.prototype
r.prototype=new s
if(t)h.extend(r.prototype,t)
r.__super__=i.prototype
return r}
d.extend=g.extend=S.extend=b.extend=N.extend=U
var R=function(){throw new Error('A "url" property or function must be specified')}
var M=function(t,e){var i=e.error
e.error=function(r){if(i)i(t,r,e)
t.trigger("error",t,r,e)}}}).call(this)
__KA_module.exports = Backbone;
this.Backbone = Backbone;
});
KAdefine("javascript/node_modules/backbone/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/backbone-src/backbone.js")
});
KAdefine("third_party/javascript-khansrc/handlebars/handlebars.runtime.js", function(require, module, exports) {
var Handlebars={}
Handlebars.VERSION="1.0.beta.5"
Handlebars.helpers={}
Handlebars.partials={}
Handlebars.registerHelper=function(e,r,n){if(n){r.not=n}this.helpers[e]=r}
Handlebars.registerPartial=function(e,r){this.partials[e]=r}
Handlebars.registerHelper("helperMissing",function(e){if(arguments.length===2){return undefined}else{throw new Error("Could not find property '"+e+"'")}})
var toString=Object.prototype.toString,functionType="[object Function]"
Handlebars.registerHelper("blockHelperMissing",function(e,r){var n=r.inverse||function(){},t=r.fn
var a=""
var i=toString.call(e)
if(i===functionType){e=e.call(this)}if(e===true){return t(this)}else if(e===false||e==null){return n(this)}else if(i==="[object Array]"){if(e.length>0){for(var s=0,l=e.length;s<l;s++){a=a+t(e[s])}}else{a=n(this)}return a}else{return t(e)}})
Handlebars.registerHelper("each",function(e,r){var n=r.fn,t=r.inverse
var a=""
if(e&&e.length>0){for(var i=0,s=e.length;i<s;i++){a=a+n(e[i])}}else{a=t(this)}return a})
Handlebars.registerHelper("if",function(e,r){var n=toString.call(e)
if(n===functionType){e=e.call(this)}if(!e||Handlebars.Utils.isEmpty(e)){return r.inverse(this)}else{return r.fn(this)}})
Handlebars.registerHelper("unless",function(e,r){var n=r.fn,t=r.inverse
r.fn=t
r.inverse=n
return Handlebars.helpers["if"].call(this,e,r)})
Handlebars.registerHelper("with",function(e,r){return r.fn(e)})
Handlebars.registerHelper("log",function(e){Handlebars.log(e)})
Handlebars.Exception=function(e){var r=Error.prototype.constructor.apply(this,arguments)
for(var n in r){if(r.hasOwnProperty(n)){this[n]=r[n]}}this.message=r.message}
Handlebars.Exception.prototype=new Error
Handlebars.SafeString=function(e){this.string=e}
Handlebars.SafeString.prototype.toString=function(){return this.string.toString()};(function(){var e={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"}
var r=/&(?!\w+;)|[<>"'`]/g
var n=/[&<>"'`]/
var t=function(r){return e[r]||"&amp;"}
Handlebars.Utils={escapeExpression:function(e){if(e instanceof Handlebars.SafeString){return e.toString()}else if(e==null||e===false){return""}if(!n.test(e)){return e}return e.replace(r,t)},isEmpty:function(e){if(typeof e==="undefined"){return true}else if(e===null){return true}else if(e===false){return true}else if(Object.prototype.toString.call(e)==="[object Array]"&&e.length===0){return true}else{return false}}}})()
Handlebars.VM={template:function(e){var r={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(e,r,n){var t=this.programs[e]
if(n){return Handlebars.VM.program(r,n)}else if(t){return t}else{t=this.programs[e]=Handlebars.VM.program(r)
return t}},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop}
return function(n,t){t=t||{}
return e.call(r,Handlebars,n,t.helpers,t.partials,t.data)}},programWithDepth:function(e,r,n){var t=Array.prototype.slice.call(arguments,2)
return function(n,a){a=a||{}
return e.apply(this,[n,a.data||r].concat(t))}},program:function(e,r){return function(n,t){t=t||{}
return e(n,t.data||r)}},noop:function(){return""},invokePartial:function(e,r,n,t,a,i){var s={helpers:t,partials:a,data:i}
if(e===undefined){throw new Handlebars.Exception("The partial "+r+" could not be found")}else if(e instanceof Function){return e(n,s)}else if(!Handlebars.compile){throw new Handlebars.Exception("The partial "+r+" could not be compiled when running in runtime-only mode")}else{a[r]=Handlebars.compile(e)
return a[r](n,s)}}}
Handlebars.template=Handlebars.VM.template
if(typeof module!=="undefined"){module.exports=Handlebars}
this.Handlebars = Handlebars;
});
KAdefine("third_party/javascript-khansrc/jQuery-ajaxTransport-XDomainRequest/jQuery.XDomainRequest.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e(require("jquery"))}else{e(jQuery)}})(function($){if($.support.cors||!$.ajaxTransport||!window.XDomainRequest){return}var e=/^https?:\/\//i
var t=/^get|post$/i
var n=new RegExp("^"+location.protocol,"i")
$.ajaxTransport("* text html xml json",function(o,r,s){if(!o.crossDomain||!o.async||!t.test(o.type)||!e.test(o.url)||!n.test(o.url)){return}var a=null
return{send:function(e,t){var n=""
var s=(r.dataType||"").toLowerCase()
a=new XDomainRequest
if(/^\d+$/.test(r.timeout)){a.timeout=r.timeout}a.ontimeout=function(){t(500,"timeout")}
a.onload=function(){var e="Content-Length: "+a.responseText.length+"\r\nContent-Type: "+a.contentType
var n={code:200,message:"success"}
var o={text:a.responseText}
try{if(s==="html"||/text\/html/i.test(a.contentType)){o.html=a.responseText}else if(s==="json"||s!=="text"&&/\/json/i.test(a.contentType)){try{o.json=$.parseJSON(a.responseText)}catch(r){n.code=500
n.message="parseerror"}}else if(s==="xml"||s!=="text"&&/\/xml/i.test(a.contentType)){var i=new ActiveXObject("Microsoft.XMLDOM")
i.async=false
try{i.loadXML(a.responseText)}catch(r){i=undefined}if(!i||!i.documentElement||i.getElementsByTagName("parsererror").length){n.code=500
n.message="parseerror"
throw"Invalid XML: "+a.responseText}o.xml=i}}catch(c){throw c}finally{t(n.code,n.message,o,e)}}
a.onprogress=function(){}
a.onerror=function(){t(500,"error",{text:a.responseText})}
if(r.data){n=$.type(r.data)==="string"?r.data:$.param(r.data)}a.open(o.type,o.url)
a.send(n)},abort:function(){if(a){a.abort()}}}})})
});
KAdefine("third_party/javascript-khansrc/jquery-migrate/jquery-migrate-1.1.1.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
(function(e,t,n){var r={}
e.migrateWarnings=[]
if(!e.migrateMute&&t.console&&console.log){console.log("JQMIGRATE: Logging is active")}if(e.migrateTrace===n){e.migrateTrace=true}e.migrateReset=function(){r={}
e.migrateWarnings.length=0}
function a(n){if(!r[n]){r[n]=true
e.migrateWarnings.push(n)
if(t.console&&console.warn&&!e.migrateMute){console.warn("JQMIGRATE: "+n)
if(e.migrateTrace&&console.trace){console.trace()}}}}function i(t,n,r,i){if(Object.defineProperty){try{Object.defineProperty(t,n,{configurable:true,enumerable:true,get:function(){a(i)
return r},set:function(e){a(i)
r=e}})
return}catch(o){}}e._definePropertyBroken=true
t[n]=r}if(document.compatMode==="BackCompat"){a("jQuery is not compatible with Quirks Mode")}var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},f=/^(?:input|button)$/i,l=/^[238]$/,d=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,p=/^(?:checked|selected)$/i
i(e,"attrFn",o||{},"jQuery.attrFn is deprecated")
e.attr=function(t,r,i,u){var c=r.toLowerCase(),g=t&&t.nodeType
if(u){if(s.length<4){a("jQuery.fn.attr( props, pass ) is deprecated")}if(t&&!l.test(g)&&(o?r in o:e.isFunction(e.fn[r]))){return e(t)[r](i)}}if(r==="type"&&i!==n&&f.test(t.nodeName)&&t.parentNode){a("Can't change the 'type' of an input or button in IE 6/7/8")}if(!e.attrHooks[c]&&d.test(c)){e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r)
return i===true||typeof i!=="boolean"&&(a=t.getAttributeNode(r))&&a.nodeValue!==false?r.toLowerCase():n},set:function(t,n,r){var a
if(n===false){e.removeAttr(t,r)}else{a=e.propFix[r]||r
if(a in t){t[a]=true}t.setAttribute(r,r.toLowerCase())}return r}}
if(p.test(c)){a("jQuery.fn.attr('"+c+"') may use property instead of attribute")}}return s.call(e,t,r,i)}
e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase()
if(n==="button"){return u.apply(this,arguments)}if(n!=="input"&&n!=="option"){a("jQuery.fn.attr('value') no longer gets properties")}return t in e?e.value:null},set:function(e,t){var n=(e.nodeName||"").toLowerCase()
if(n==="button"){return c.apply(this,arguments)}if(n!=="input"&&n!=="option"){a("jQuery.fn.attr('value', val) no longer sets properties")}e.value=t}}
var g,h,v=e.fn.init,m=e.parseJSON,y=/^(?:[^<]*(<[\w\W]+>)[^>]*|#([\w\-]*))$/
e.fn.init=function(t,n,r){var i
if(t&&typeof t==="string"&&!e.isPlainObject(n)&&(i=y.exec(t))&&i[1]){if(t.charAt(0)!=="<"){a("$(html) HTML strings must start with '<' character")}if(n&&n.context){n=n.context}if(e.parseHTML){return v.call(this,e.parseHTML(e.trim(t),n,true),n,r)}}return v.apply(this,arguments)}
e.fn.init.prototype=e.fn
e.parseJSON=function(e){if(!e&&e!==null){a("jQuery.parseJSON requires a valid JSON string")
return null}return m.apply(this,arguments)}
e.uaMatch=function(e){e=e.toLowerCase()
var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[]
return{browser:t[1]||"",version:t[2]||"0"}}
if(!e.browser){g=e.uaMatch(navigator.userAgent)
h={}
if(g.browser){h[g.browser]=true
h.version=g.version}if(h.chrome){h.webkit=true}else if(h.webkit){h.safari=true}e.browser=h}i(e,"browser",e.browser,"jQuery.browser is deprecated")
e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(true,t,this)
t.superclass=this
t.fn=t.prototype=this()
t.fn.constructor=t
t.sub=this.sub
t.fn.init=function r(a,i){if(i&&i instanceof e&&!(i instanceof t)){i=t(i)}return e.fn.init.call(this,a,i,n)}
t.fn.init.prototype=t.fn
var n=t(document)
a("jQuery.sub() is deprecated")
return t}
e.ajaxSetup({converters:{"text json":e.parseJSON}})
var b=e.fn.data
e.fn.data=function(t){var r,i,o=this[0]
if(o&&t==="events"&&arguments.length===1){r=e.data(o,t)
i=e._data(o,t)
if((r===n||r===i)&&i!==n){a("Use of jQuery.fn.data('events') is deprecated")
return i}}return b.apply(this,arguments)}
var w=/\/(java|ecma)script/i,j=e.fn.andSelf||e.fn.addBack
e.fn.andSelf=function(){a("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()")
return j.apply(this,arguments)}
if(!e.clean){e.clean=function(t,n,r,i){n=n||document
n=!n.nodeType&&n[0]||n
n=n.ownerDocument||n
a("jQuery.clean() is deprecated")
var o,s,u,c,f=[]
e.merge(f,e.buildFragment(t,n).childNodes)
if(r){u=function(e){if(!e.type||w.test(e.type)){return i?i.push(e.parentNode?e.parentNode.removeChild(e):e):r.appendChild(e)}}
for(o=0;(s=f[o])!=null;o++){if(!(e.nodeName(s,"script")&&u(s))){r.appendChild(s)
if(typeof s.getElementsByTagName!=="undefined"){c=e.grep(e.merge([],s.getElementsByTagName("script")),u)
f.splice.apply(f,[o+1,0].concat(c))
o+=c.length}}}}return f}}var x=e.event.add,Q=e.event.remove,k=e.event.trigger,N=e.fn.toggle,C=e.fn.live,S=e.fn.die,T="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",H=new RegExp("\\b(?:"+T+")\\b"),M=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){if(typeof t!=="string"||e.event.special.hover){return t}if(M.test(t)){a("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'")}return t&&t.replace(M,"mouseenter$1 mouseleave$1")}
if(e.event.props&&e.event.props[0]!=="attrChange"){e.event.props.unshift("attrChange","attrName","relatedNode","srcElement")}if(e.event.dispatch){i(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated")}e.event.add=function(e,t,n,r,i){if(e!==document&&H.test(t)){a("AJAX events should be attached to document: "+t)}x.call(this,e,A(t||""),n,r,i)}
e.event.remove=function(e,t,n,r,a){Q.call(this,e,A(t)||"",n,r,a)}
e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0)
a("jQuery.fn.error() is deprecated")
e.splice(0,0,"error")
if(arguments.length){return this.bind.apply(this,e)}this.triggerHandler.apply(this,e)
return this}
e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n)){return N.apply(this,arguments)}a("jQuery.fn.toggle(handler, handler...) is deprecated")
var r=arguments,i=t.guid||e.guid++,o=0,s=function(n){var a=(e._data(this,"lastToggle"+t.guid)||0)%o
e._data(this,"lastToggle"+t.guid,a+1)
n.preventDefault()
return r[a].apply(this,arguments)||false}
s.guid=i
while(o<r.length){r[o++].guid=i}return this.click(s)}
e.fn.live=function(t,n,r){a("jQuery.fn.live() is deprecated")
if(C){return C.apply(this,arguments)}e(this.context).on(t,this.selector,n,r)
return this}
e.fn.die=function(t,n){a("jQuery.fn.die() is deprecated")
if(S){return S.apply(this,arguments)}e(this.context).off(t,this.selector||"**",n)
return this}
e.event.trigger=function(e,t,n,r){if(!n&&!H.test(e)){a("Global events are undocumented and deprecated")}return k.call(this,e,t,n||document,r)}
e.each(T.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this
if(t!==document){e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,true)})
e._data(this,n,e.guid++)}return false},teardown:function(){if(this!==document){e.event.remove(document,n+"."+e._data(this,n))}return false}}})})(jQuery,window)
});
KAdefine("third_party/javascript-khansrc/jquery-placeholder/jquery.placeholder.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
new function($){var t=!!("placeholder"in document.createElement("input"))
$.fn.placeholder=function(a){if(t){return this}a=a||{}
var i=a.dataKey||"placeholderValue"
var e=a.attr||"placeholder"
var r=a.className||"placeholder"
var n=a.values||[]
var s=a.blockSubmit||false
var l=a.blankSubmit||false
var o=a.onSubmit||false
var u=a.value||""
var f=a.cursor_position||0
return this.filter(":input").each(function(t){$.data(this,i,n[t]||$(this).attr(e))}).each(function(){if($.trim($(this).val())==="")$(this).addClass(r).val($.data(this,i))}).focus(function(){if($.trim($(this).val())===$.data(this,i))$(this).removeClass(r).val(u)
if($.fn.setCursorPosition){$(this).setCursorPosition(f)}}).blur(function(){if($.trim($(this).val())===u)$(this).addClass(r).val($.data(this,i))}).each(function(t,a){if(s)new function(t){$(t.form).submit(function(){return $.trim($(t).val())!=$.data(t,i)})}(a)
else if(l)new function(t){$(t.form).submit(function(){if($.trim($(t).val())==$.data(t,i))$(t).removeClass(r).val("")
return true})}(a)
else if(o)new function(t){$(t.form).submit(o)}(a)})}}(jQuery)
});
KAdefine("third_party/javascript-khansrc/jQuery-menu-aim/jquery.menu-aim.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
(function($){$.fn.menuAim=function(t){this.each(function(){e.call(this,t)})
return this}
function e(e){var t=$(this),n=null,i=[],r=null,u=null,o=$.extend({rowSelector:"> li",submenuSelector:"*",submenuDirection:"right",tolerance:75,enter:$.noop,exit:$.noop,activate:$.noop,deactivate:$.noop,exitMenu:$.noop},e)
var f=3,l=300
var a=function(e){i.push({x:e.pageX,y:e.pageY})
if(i.length>f){i.shift()}}
var c=function(){if(u){clearTimeout(u)}if(o.exitMenu(this)){if(n){o.deactivate(n)}n=null}}
var s=function(){if(u){clearTimeout(u)}o.enter(this)
x(this)},v=function(){o.exit(this)}
var h=function(e){if(e.target.getAttribute("href")==="#"){e.preventDefault()}m(this)}
var m=function(e){if(e===n){return}if(n){o.deactivate(n)}o.activate(e)
n=e}
var x=function(e){var t=y()
if(t){u=setTimeout(function(){x(e)},t)}else{m(e)}}
var y=function(){if(!n||!$(n).is(o.submenuSelector)){return 0}var e=t.offset(),u={x:e.left,y:e.top-o.tolerance},f={x:e.left+t.outerWidth(),y:u.y},a={x:e.left,y:e.top+t.outerHeight()+o.tolerance},c={x:e.left+t.outerWidth(),y:a.y},s=i[i.length-1],v=i[0]
if(!s){return 0}if(!v){v=s}if(v.x<e.left||v.x>c.x||v.y<e.top||v.y>c.y){return 0}if(r&&s.x===r.x&&s.y===r.y){return 0}function h(e,t){return(t.y-e.y)/(t.x-e.x)}var m=f,x=c
if(o.submenuDirection==="left"){m=a
x=u}else if(o.submenuDirection==="below"){m=c
x=a}else if(o.submenuDirection==="above"){m=u
x=f}var y=h(s,m),p=h(s,x),b=h(v,m),d=h(v,x)
if(y<b&&p>d){r=s
return l}r=null
return 0}
t.mouseleave(c).find(o.rowSelector).mouseenter(s).mouseleave(v).click(h)
$(document).mousemove(a)}})(jQuery)
});
KAdefine("third_party/javascript-khansrc/bootstrap-dropdown/dropdown.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
!function($){"use strict"
var t=".dropdown-toggle",n=function(t,n){$(t).attr("aria-haspopup",true)
var o=$(t).parent().find(".dropdown-menu")
o.attr("role","menu")
o.attr("aria-expanded",false)
if(n==="hover"&&!Modernizr.touch){$(t).on("mouseenter",function(){$(this).dropdown("open")}).parent().on("mouseleave",function(){$(this).find(".dropdown-toggle").dropdown("close")}).find(".caret").on("click",function(){$(this).parent().dropdown("toggle")
return false})}else{$(t).on("click.dropdown.data-api",this.toggle)}}
n.prototype={constructor:n,toggle:function(t){var o=$(this),e=o.attr("data-target"),r,a
if(!e){e=o.attr("href")
e=e&&e.replace(/.*(?=#[^\s]*$)/,"")}r=$(e)
r.length||(r=o.parent())
a=r.hasClass("open")
if(a){n.prototype.close.call(this)}else{n.prototype.open.call(this)}return false},open:function(){var t=$(this)
if(t.hasClass("caret")){t=t.parent()}t.parent().find(".dropdown-menu").attr("aria-expanded",true)
t.trigger("open").parent().addClass("open")},close:function(){var t=$(this)
t.parent().find(".dropdown-menu").attr("aria-expanded",false)
t.trigger("close").parent().removeClass("open")}}
function o(n){$(t).each(function(t,o){if($(o).hasClass("no-auto-close")||$(n.target).closest($(o).parent()).length>0){return}$(o).trigger("close").parent().removeClass("open")})}$.fn.dropdown=function(t){return this.each(function(){var o=$(this),e=o.data("dropdown")
if(!e){o.data("dropdown",e=new n(this,t))}if(typeof t=="string"){var r=e[t]
if(r){r.call(this)}}})}
$.fn.dropdown.Constructor=n
$(function(){$("html").on("click.dropdown.data-api",o).on("focusin.dropdown.data-api",o)})}(window.jQuery)
});
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.core.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
(function($,t){var e=0,i=/^ui-id-\d+$/
$.ui=$.ui||{}
if($.ui.version){return}$.extend($.ui,{version:"1.10.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}})
$.fn.extend({_focus:$.fn.focus,focus:function(t,e){return typeof t==="number"?this.each(function(){var i=this
setTimeout(function(){$(i).focus()
if(e){e.call(i)}},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t
if($.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))){t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test($.css(this,"position"))&&/(auto|scroll)/.test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"))}).eq(0)}else{t=this.parents().filter(function(){return/(auto|scroll)/.test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"))}).eq(0)}return/fixed/.test(this.css("position"))||!t.length?$(document):t},zIndex:function(e){if(e!==t){return this.css("zIndex",e)}if(this.length){var i=$(this[0]),n,r
while(i.length&&i[0]!==document){n=i.css("position")
if(n==="absolute"||n==="relative"||n==="fixed"){r=parseInt(i.css("zIndex"),10)
if(!isNaN(r)&&r!==0){return r}}i=i.parent()}}return 0},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+ ++e}})},removeUniqueId:function(){return this.each(function(){if(i.test(this.id)){$(this).removeAttr("id")}})}})
function n(t,e){var i,n,s,o=t.nodeName.toLowerCase()
if("area"===o){i=t.parentNode
n=i.name
if(!t.href||!n||i.nodeName.toLowerCase()!=="map"){return false}s=$("img[usemap=#"+n+"]")[0]
return!!s&&r(s)}return(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||e:e)&&r(t)}function r(t){return $.expr.filters.visible(t)&&!$(t).parents().addBack().filter(function(){return $.css(this,"visibility")==="hidden"}).length}$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(t){return function(e){return!!$.data(e,t)}}):function(t,e,i){return!!$.data(t,i[3])},focusable:function(t){return n(t,!isNaN($.attr(t,"tabindex")))},tabbable:function(t){var e=$.attr(t,"tabindex"),i=isNaN(e)
return(i||e>=0)&&n(t,!i)}})
if(!$("<a>").outerWidth(1).jquery){$.each(["Width","Height"],function(e,i){var n=i==="Width"?["Left","Right"]:["Top","Bottom"],r=i.toLowerCase(),s={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight}
function o(t,e,i,r){$.each(n,function(){e-=parseFloat($.css(t,"padding"+this))||0
if(i){e-=parseFloat($.css(t,"border"+this+"Width"))||0}if(r){e-=parseFloat($.css(t,"margin"+this))||0}})
return e}$.fn["inner"+i]=function(e){if(e===t){return s["inner"+i].call(this)}return this.each(function(){$(this).css(r,o(this,e)+"px")})}
$.fn["outer"+i]=function(t,e){if(typeof t!=="number"){return s["outer"+i].call(this,t)}return this.each(function(){$(this).css(r,o(this,t,true,e)+"px")})}})}if(!$.fn.addBack){$.fn.addBack=function(t){return this.add(t==null?this.prevObject:this.prevObject.filter(t))}}if($("<a>").data("a-b","a").removeData("a-b").data("a-b")){$.fn.removeData=function(t){return function(e){if(arguments.length){return t.call(this,$.camelCase(e))}else{return t.call(this)}}}($.fn.removeData)}$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
$.support.selectstart="onselectstart"in document.createElement("div")
$.fn.extend({disableSelection:function(){return this.bind(($.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}})
$.extend($.ui,{plugin:{add:function(t,e,i){var n,r=$.ui[t].prototype
for(n in i){r.plugins[n]=r.plugins[n]||[]
r.plugins[n].push([e,i[n]])}},call:function(t,e,i){var n,r=t.plugins[e]
if(!r||!t.element[0].parentNode||t.element[0].parentNode.nodeType===11){return}for(n=0;n<r.length;n++){if(t.options[r[n][0]]){r[n][1].apply(t.element,i)}}}},hasScroll:function(t,e){if($(t).css("overflow")==="hidden"){return false}var i=e&&e==="left"?"scrollLeft":"scrollTop",n=false
if(t[i]>0){return true}t[i]=1
n=t[i]>0
t[i]=0
return n}})})(jQuery)
});
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.widget.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
(function($,t){var e=0,i=Array.prototype.slice,n=$.cleanData
$.cleanData=function(t){for(var e=0,i;(i=t[e])!=null;e++){try{$(i).triggerHandler("remove")}catch(s){}}n(t)}
$.widget=function(t,e,i){var n,s,o,r,a={},u=t.split(".")[0]
t=t.split(".")[1]
n=u+"-"+t
if(!i){i=e
e=$.Widget}$.expr[":"][n.toLowerCase()]=function(t){return!!$.data(t,n)}
$[u]=$[u]||{}
s=$[u][t]
o=$[u][t]=function(t,e){if(!this._createWidget){return new o(t,e)}if(arguments.length){this._createWidget(t,e)}}
$.extend(o,s,{version:i.version,_proto:$.extend({},i),_childConstructors:[]})
r=new e
r.options=$.widget.extend({},r.options)
$.each(i,function(t,i){if(!$.isFunction(i)){a[t]=i
return}a[t]=function(){var n=function(){return e.prototype[t].apply(this,arguments)},s=function(i){return e.prototype[t].apply(this,i)}
return function(){var t=this._super,e=this._superApply,o
this._super=n
this._superApply=s
o=i.apply(this,arguments)
this._super=t
this._superApply=e
return o}}()})
o.prototype=$.widget.extend(r,{widgetEventPrefix:s?r.widgetEventPrefix:t},a,{constructor:o,namespace:u,widgetName:t,widgetFullName:n})
if(s){$.each(s._childConstructors,function(t,e){var i=e.prototype
$.widget(i.namespace+"."+i.widgetName,o,e._proto)})
delete s._childConstructors}else{e._childConstructors.push(o)}$.widget.bridge(t,o)}
$.widget.extend=function(e){var n=i.call(arguments,1),s=0,o=n.length,r,a
for(;s<o;s++){for(r in n[s]){a=n[s][r]
if(n[s].hasOwnProperty(r)&&a!==t){if($.isPlainObject(a)){e[r]=$.isPlainObject(e[r])?$.widget.extend({},e[r],a):$.widget.extend({},a)}else{e[r]=a}}}}return e}
$.widget.bridge=function(e,n){var s=n.prototype.widgetFullName||e
$.fn[e]=function(o){var r=typeof o==="string",a=i.call(arguments,1),u=this
o=!r&&a.length?$.widget.extend.apply(null,[o].concat(a)):o
if(r){this.each(function(){var i,n=$.data(this,s)
if(!n){return $.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}if(!$.isFunction(n[o])||o.charAt(0)==="_"){return $.error("no such method '"+o+"' for "+e+" widget instance")}i=n[o].apply(n,a)
if(i!==n&&i!==t){u=i&&i.jquery?u.pushStack(i.get()):i
return false}})}else{this.each(function(){var t=$.data(this,s)
if(t){t.option(o||{})._init()}else{$.data(this,s,new n(o,this))}})}return u}}
$.Widget=function(){}
$.Widget._childConstructors=[]
$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(t,i){i=$(i||this.defaultElement||this)[0]
this.element=$(i)
this.uuid=e++
this.eventNamespace="."+this.widgetName+this.uuid
this.options=$.widget.extend({},this.options,this._getCreateOptions(),t)
this.bindings=$()
this.hoverable=$()
this.focusable=$()
if(i!==this){$.data(i,this.widgetFullName,this)
this._on(true,this.element,{remove:function(t){if(t.target===i){this.destroy()}}})
this.document=$(i.style?i.ownerDocument:i.document||i)
this.window=$(this.document[0].defaultView||this.document[0].parentWindow)}this._create()
this._trigger("create",null,this._getCreateEventData())
this._init()},_getCreateOptions:$.noop,_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function(){this._destroy()
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName))
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled")
this.bindings.unbind(this.eventNamespace)
this.hoverable.removeClass("ui-state-hover")
this.focusable.removeClass("ui-state-focus")},_destroy:$.noop,widget:function(){return this.element},option:function(e,i){var n=e,s,o,r
if(arguments.length===0){return $.widget.extend({},this.options)}if(typeof e==="string"){n={}
s=e.split(".")
e=s.shift()
if(s.length){o=n[e]=$.widget.extend({},this.options[e])
for(r=0;r<s.length-1;r++){o[s[r]]=o[s[r]]||{}
o=o[s[r]]}e=s.pop()
if(i===t){return o[e]===t?null:o[e]}o[e]=i}else{if(i===t){return this.options[e]===t?null:this.options[e]}n[e]=i}}this._setOptions(n)
return this},_setOptions:function(t){var e
for(e in t){this._setOption(e,t[e])}return this},_setOption:function(t,e){this.options[t]=e
if(t==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e)
this.hoverable.removeClass("ui-state-hover")
this.focusable.removeClass("ui-state-focus")}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_on:function(t,e,i){var n,s=this
if(typeof t!=="boolean"){i=e
e=t
t=false}if(!i){i=e
e=this.element
n=this.widget()}else{e=n=$(e)
this.bindings=this.bindings.add(e)}$.each(i,function(i,o){function r(){if(!t&&(s.options.disabled===true||$(this).hasClass("ui-state-disabled"))){return}return(typeof o==="string"?s[o]:o).apply(s,arguments)}if(typeof o!=="string"){r.guid=o.guid=o.guid||r.guid||$.guid++}var a=i.match(/^(\w+)\s*(.*)$/),u=a[1]+s.eventNamespace,d=a[2]
if(d){n.delegate(d,u,r)}else{e.bind(u,r)}})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace
t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return(typeof t==="string"?n[t]:t).apply(n,arguments)}var n=this
return setTimeout(i,e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t)
this._on(t,{mouseenter:function(t){$(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){$(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t)
this._on(t,{focusin:function(t){$(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){$(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,i){var n,s,o=this.options[t]
i=i||{}
e=$.Event(e)
e.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase()
e.target=this.element[0]
s=e.originalEvent
if(s){for(n in s){if(!(n in e)){e[n]=s[n]}}}this.element.trigger(e,i)
return!($.isFunction(o)&&o.apply(this.element[0],[e].concat(i))===false||e.isDefaultPrevented())}}
$.each({show:"fadeIn",hide:"fadeOut"},function(t,e){$.Widget.prototype["_"+t]=function(i,n,s){if(typeof n==="string"){n={effect:n}}var o,r=!n?t:n===true||typeof n==="number"?e:n.effect||e
n=n||{}
if(typeof n==="number"){n={duration:n}}o=!$.isEmptyObject(n)
n.complete=s
if(n.delay){i.delay(n.delay)}if(o&&$.effects&&$.effects.effect[r]){i[t](n)}else if(r!==t&&i[r]){i[r](n.duration,n.easing,s)}else{i.queue(function(e){$(this)[t]()
if(s){s.call(i[0])}e()})}}})})(jQuery)
});
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.mouse.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
__KA_require("./jquery.ui.widget.js");
(function($,e){var t=false
$(document).mouseup(function(){t=false})
$.widget("ui.mouse",{version:"1.10.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this
this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(t){if(true===$.data(t.target,e.widgetName+".preventClickEvent")){$.removeData(t.target,e.widgetName+".preventClickEvent")
t.stopImmediatePropagation()
return false}})
this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)
if(this._mouseMoveDelegate){$(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function(e){if(t){return}this._mouseStarted&&this._mouseUp(e)
this._mouseDownEvent=e
var s=this,i=e.which===1,o=typeof this.options.cancel==="string"&&e.target.nodeName?$(e.target).closest(this.options.cancel).length:false
if(!i||o||!this._mouseCapture(e)){return true}this.mouseDelayMet=!this.options.delay
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)){this._mouseStarted=this._mouseStart(e)!==false
if(!this._mouseStarted){e.preventDefault()
return true}}if(true===$.data(e.target,this.widgetName+".preventClickEvent")){$.removeData(e.target,this.widgetName+".preventClickEvent")}this._mouseMoveDelegate=function(e){return s._mouseMove(e)}
this._mouseUpDelegate=function(e){return s._mouseUp(e)}
$(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate)
e.preventDefault()
t=true
return true},_mouseMove:function(e){if($.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button){return this._mouseUp(e)}if(this._mouseStarted){this._mouseDrag(e)
return e.preventDefault()}if(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)){this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==false
this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)}return!this._mouseStarted},_mouseUp:function(e){$(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
if(this._mouseStarted){this._mouseStarted=false
if(e.target===this._mouseDownEvent.target){$.data(e.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(e)}return false},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery)
});
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.position.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
(function($,t){$.ui=$.ui||{}
var i,e=Math.max,o=Math.abs,l=Math.round,n=/left|center|right/,f=/top|center|bottom/,s=/[\+\-]\d+(\.[\d]+)?%?/,r=/^\w+/,h=/%$/,p=$.fn.position
function c(t,i,e){return[parseFloat(t[0])*(h.test(t[0])?i/100:1),parseFloat(t[1])*(h.test(t[1])?e/100:1)]}function a(t,i){return parseInt($.css(t,i),10)||0}function d(t){var i=t[0]
if(i.nodeType===9){return{width:t.width(),height:t.height(),offset:{top:0,left:0}}}if($.isWindow(i)){return{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}}if(i.preventDefault){return{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}}return{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}$.position={scrollbarWidth:function(){if(i!==t){return i}var e,o,l=$("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),n=l.children()[0]
$("body").append(l)
e=n.offsetWidth
l.css("overflow","scroll")
o=n.offsetWidth
if(e===o){o=l[0].clientWidth}l.remove()
return i=e-o},getScrollInfo:function(t){var i=t.isWindow?"":t.element.css("overflow-x"),e=t.isWindow?"":t.element.css("overflow-y"),o=i==="scroll"||i==="auto"&&t.width<t.element[0].scrollWidth,l=e==="scroll"||e==="auto"&&t.height<t.element[0].scrollHeight
return{width:o?$.position.scrollbarWidth():0,height:l?$.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=$(t||window),e=$.isWindow(i[0])
return{element:i,isWindow:e,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:e?i.width():i.outerWidth(),height:e?i.height():i.outerHeight()}}}
$.fn.position=function(t){if(!t||!t.of){return p.apply(this,arguments)}t=$.extend({},t)
var i,h,g,u,m,w,W=$(t.of),v=$.position.getWithinInfo(t.within),y=$.position.getScrollInfo(v),b=(t.collision||"flip").split(" "),H={}
w=d(W)
if(W[0].preventDefault){t.at="left top"}h=w.width
g=w.height
u=w.offset
m=$.extend({},u)
$.each(["my","at"],function(){var i=(t[this]||"").split(" "),e,o
if(i.length===1){i=n.test(i[0])?i.concat(["center"]):f.test(i[0])?["center"].concat(i):["center","center"]}i[0]=n.test(i[0])?i[0]:"center"
i[1]=f.test(i[1])?i[1]:"center"
e=s.exec(i[0])
o=s.exec(i[1])
H[this]=[e?e[0]:0,o?o[0]:0]
t[this]=[r.exec(i[0])[0],r.exec(i[1])[0]]})
if(b.length===1){b[1]=b[0]}if(t.at[0]==="right"){m.left+=h}else if(t.at[0]==="center"){m.left+=h/2}if(t.at[1]==="bottom"){m.top+=g}else if(t.at[1]==="center"){m.top+=g/2}i=c(H.at,h,g)
m.left+=i[0]
m.top+=i[1]
return this.each(function(){var n,f,s=$(this),r=s.outerWidth(),p=s.outerHeight(),d=a(this,"marginLeft"),w=a(this,"marginTop"),x=r+d+a(this,"marginRight")+y.width,T=p+w+a(this,"marginBottom")+y.height,L=$.extend({},m),P=c(H.my,s.outerWidth(),s.outerHeight())
if(t.my[0]==="right"){L.left-=r}else if(t.my[0]==="center"){L.left-=r/2}if(t.my[1]==="bottom"){L.top-=p}else if(t.my[1]==="center"){L.top-=p/2}L.left+=P[0]
L.top+=P[1]
if(!$.support.offsetFractions){L.left=l(L.left)
L.top=l(L.top)}n={marginLeft:d,marginTop:w}
$.each(["left","top"],function(e,o){if($.ui.position[b[e]]){$.ui.position[b[e]][o](L,{targetWidth:h,targetHeight:g,elemWidth:r,elemHeight:p,collisionPosition:n,collisionWidth:x,collisionHeight:T,offset:[i[0]+P[0],i[1]+P[1]],my:t.my,at:t.at,within:v,elem:s})}})
if(t.using){f=function(i){var l=u.left-L.left,n=l+h-r,f=u.top-L.top,c=f+g-p,a={target:{element:W,left:u.left,top:u.top,width:h,height:g},element:{element:s,left:L.left,top:L.top,width:r,height:p},horizontal:n<0?"left":l>0?"right":"center",vertical:c<0?"top":f>0?"bottom":"middle"}
if(h<r&&o(l+n)<h){a.horizontal="center"}if(g<p&&o(f+c)<g){a.vertical="middle"}if(e(o(l),o(n))>e(o(f),o(c))){a.important="horizontal"}else{a.important="vertical"}t.using.call(this,i,a)}}s.offset($.extend(L,{using:f}))})}
$.ui.position={fit:{left:function(t,i){var o=i.within,l=o.isWindow?o.scrollLeft:o.offset.left,n=o.width,f=t.left-i.collisionPosition.marginLeft,s=l-f,r=f+i.collisionWidth-n-l,h
if(i.collisionWidth>n){if(s>0&&r<=0){h=t.left+s+i.collisionWidth-n-l
t.left+=s-h}else if(r>0&&s<=0){t.left=l}else{if(s>r){t.left=l+n-i.collisionWidth}else{t.left=l}}}else if(s>0){t.left+=s}else if(r>0){t.left-=r}else{t.left=e(t.left-f,t.left)}},top:function(t,i){var o=i.within,l=o.isWindow?o.scrollTop:o.offset.top,n=i.within.height,f=t.top-i.collisionPosition.marginTop,s=l-f,r=f+i.collisionHeight-n-l,h
if(i.collisionHeight>n){if(s>0&&r<=0){h=t.top+s+i.collisionHeight-n-l
t.top+=s-h}else if(r>0&&s<=0){t.top=l}else{if(s>r){t.top=l+n-i.collisionHeight}else{t.top=l}}}else if(s>0){t.top+=s}else if(r>0){t.top-=r}else{t.top=e(t.top-f,t.top)}}},flip:{left:function(t,i){var e=i.within,l=e.offset.left+e.scrollLeft,n=e.width,f=e.isWindow?e.scrollLeft:e.offset.left,s=t.left-i.collisionPosition.marginLeft,r=s-f,h=s+i.collisionWidth-n-f,p=i.my[0]==="left"?-i.elemWidth:i.my[0]==="right"?i.elemWidth:0,c=i.at[0]==="left"?i.targetWidth:i.at[0]==="right"?-i.targetWidth:0,a=-2*i.offset[0],d,g
if(r<0){d=t.left+p+c+a+i.collisionWidth-n-l
if(d<0||d<o(r)){t.left+=p+c+a}}else if(h>0){g=t.left-i.collisionPosition.marginLeft+p+c+a-f
if(g>0||o(g)<h){t.left+=p+c+a}}},top:function(t,i){var e=i.within,l=e.offset.top+e.scrollTop,n=e.height,f=e.isWindow?e.scrollTop:e.offset.top,s=t.top-i.collisionPosition.marginTop,r=s-f,h=s+i.collisionHeight-n-f,p=i.my[1]==="top",c=p?-i.elemHeight:i.my[1]==="bottom"?i.elemHeight:0,a=i.at[1]==="top"?i.targetHeight:i.at[1]==="bottom"?-i.targetHeight:0,d=-2*i.offset[1],g,u
if(r<0){u=t.top+c+a+d+i.collisionHeight-n-l
if(t.top+c+a+d>r&&(u<0||u<o(r))){t.top+=c+a+d}}else if(h>0){g=t.top-i.collisionPosition.marginTop+c+a+d-f
if(t.top+c+a+d>h&&(g>0||o(g)<h)){t.top+=c+a+d}}}},flipfit:{left:function(){$.ui.position.flip.left.apply(this,arguments)
$.ui.position.fit.left.apply(this,arguments)},top:function(){$.ui.position.flip.top.apply(this,arguments)
$.ui.position.fit.top.apply(this,arguments)}}};(function(){var t,i,e,o,l,n=document.getElementsByTagName("body")[0],f=document.createElement("div")
t=document.createElement(n?"div":"body")
e={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"}
if(n){$.extend(e,{position:"absolute",left:"-1000px",top:"-1000px"})}for(l in e){t.style[l]=e[l]}t.appendChild(f)
i=n||document.documentElement
i.insertBefore(t,i.firstChild)
f.style.cssText="position: absolute; left: 10.7432222px;"
o=$(f).offset().left
$.support.offsetFractions=o>10&&o<11
t.innerHTML=""
i.removeChild(t)})()})(jQuery)
});
KAdefine("third_party/javascript-khansrc/qTip2/jquery.qtip.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
(function(t,e,i){(function(t){"use strict"
if(typeof define==="function"&&define.amd){define(["jquery"],t)}else if(jQuery&&!jQuery.fn.qtip){t(jQuery)}})(function($){"use strict"
var s=true,o=false,n=null,r="x",a="y",h="width",l="height",c="top",d="left",f="bottom",p="right",u="center",g="flip",m="flipinvert",v="shift",y,b,w,_,x={},q="qtip",C="data-hasqtip",T="data-qtip-id",j=["ui-widget","ui-tooltip"],z="."+q,M="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),k=q+"-fixed",I=q+"-default",W=q+"-focus",E=q+"-hover",S=q+"-disabled",L="_replacedByqTip",A="oldtitle",B,D={ie:function(){var t=3,i=e.createElement("div")
while(i.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->"){if(!i.getElementsByTagName("i")[0]){break}}return t>4?t:NaN}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||o}
function F(t,e,i,s){this.id=i
this.target=t
this.tooltip=n
this.elements={target:t}
this._id=q+"-"+i
this.timers={img:{}}
this.options=e
this.plugins={}
this.cache={event:{},target:$(),disabled:o,attr:s,onTooltip:o,lastClass:""}
this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=o}b=F.prototype
b._when=function(t){return $.when.apply($,t)}
b.render=function(t){if(this.rendered||this.destroyed){return this}var e=this,i=this.options,n=this.cache,r=this.elements,a=i.content.text,h=i.content.title,l=i.content.button,c=i.position,d="."+this._id+" ",f=[],p
$.attr(this.target[0],"aria-describedby",this._id)
this.tooltip=r.tooltip=p=$("<div/>",{id:this._id,"class":[q,I,i.style.classes,q+"-pos-"+i.position.my.abbrev()].join(" "),width:i.style.width||"",height:i.style.height||"",tracking:c.target==="mouse"&&c.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":o,"aria-describedby":this._id+"-content","aria-hidden":s}).toggleClass(S,this.disabled).attr(T,this.id).data(q,this).appendTo(c.container).append(r.content=$("<div />",{"class":q+"-content",id:this._id+"-content","aria-atomic":s}))
this.rendered=-1
this.positioning=s
if(h){this._createTitle()
if(!$.isFunction(h)){f.push(this._updateTitle(h,o))}}if(l){this._createButton()}if(!$.isFunction(a)){f.push(this._updateContent(a,o))}this.rendered=s
this._setWidget()
$.each(x,function(t){var i
if(this.initialize==="render"&&(i=this(e))){e.plugins[t]=i}})
this._unassignEvents()
this._assignEvents()
this._when(f).then(function(){e._trigger("render")
e.positioning=o
if(!e.hiddenDuringWait&&(i.show.ready||t)){e.toggle(s,n.event,o)}e.hiddenDuringWait=o})
y.api[this.id]=this
return this}
b.destroy=function(t){if(this.destroyed){return this.target}function e(){if(this.destroyed){return}this.destroyed=s
var t=this.target,e=t.attr(A)
if(this.rendered){this.tooltip.stop(1,0).find("*").remove().end().remove()}$.each(this.plugins,function(t){this.destroy&&this.destroy()})
clearTimeout(this.timers.show)
clearTimeout(this.timers.hide)
this._unassignEvents()
t.removeData(q).removeAttr(T).removeAttr(C).removeAttr("aria-describedby")
if(this.options.suppress&&e){t.attr("title",e).removeAttr(A)}this._unbind(t)
this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=n
delete y.api[this.id]}if((t!==s||this.triggering==="hide")&&this.rendered){this.tooltip.one("tooltiphidden",$.proxy(e,this))
!this.triggering&&this.hide()}else{e.call(this)}return this.target}
function O(t){return t===n||$.type(t)!=="object"}function P(t){return!($.isFunction(t)||t&&t.attr||t.length||$.type(t)==="object"&&(t.jquery||t.then))}function N(t){var e,i,r,a
if(O(t)){return o}if(O(t.metadata)){t.metadata={type:t.metadata}}if("content"in t){e=t.content
if(O(e)||e.jquery||e.done){e=t.content={text:i=P(e)?o:e}}else{i=e.text}if("ajax"in e){r=e.ajax
a=r&&r.once!==o
delete e.ajax
e.text=function(t,e){var s=i||$(this).attr(e.options.content.attr)||"Loading...",o=$.ajax($.extend({},r,{context:e})).then(r.success,n,r.error).then(function(t){if(t&&a){e.set("content.text",t)}return t},function(t,i,s){if(e.destroyed||t.status===0){return}e.set("content.text",i+": "+s)})
return!a?(e.set("content.text",s),o):s}}if("title"in e){if(!O(e.title)){e.button=e.title.button
e.title=e.title.text}if(P(e.title||o)){e.title=o}}}if("position"in t&&O(t.position)){t.position={my:t.position,at:t.position}}if("show"in t&&O(t.show)){t.show=t.show.jquery?{target:t.show}:t.show===s?{ready:s}:{event:t.show}}if("hide"in t&&O(t.hide)){t.hide=t.hide.jquery?{target:t.hide}:{event:t.hide}}if("style"in t&&O(t.style)){t.style={classes:t.style}}$.each(x,function(){this.sanitize&&this.sanitize(t)})
return t}_=b.checks={builtin:{"^id$":function(t,e,i,n){var r=i===s?y.nextid:i,a=q+"-"+r
if(r!==o&&r.length>0&&!$("#"+a).length){this._id=a
if(this.rendered){this.tooltip[0].id=this._id
this.elements.content[0].id=this._id+"-content"
this.elements.title[0].id=this._id+"-title"}}else{t[e]=n}},"^prerender":function(t,e,i){i&&!this.rendered&&this.render(this.options.show.ready)},"^content.text$":function(t,e,i){this._updateContent(i)},"^content.attr$":function(t,e,i,s){if(this.options.content.text===this.target.attr(s)){this._updateContent(this.target.attr(i))}},"^content.title$":function(t,e,i){if(!i){return this._removeTitle()}i&&!this.elements.title&&this._createTitle()
this._updateTitle(i)},"^content.button$":function(t,e,i){this._updateButton(i)},"^content.title.(text|button)$":function(t,e,i){this.set("content."+e,i)},"^position.(my|at)$":function(t,e,i){"string"===typeof i&&(t[e]=new w(i,e==="at"))},"^position.container$":function(t,e,i){this.rendered&&this.tooltip.appendTo(i)},"^show.ready$":function(t,e,i){i&&(!this.rendered&&this.render(s)||this.toggle(s))},"^style.classes$":function(t,e,i,s){this.rendered&&this.tooltip.removeClass(s).addClass(i)},"^style.(width|height)":function(t,e,i){this.rendered&&this.tooltip.css(e,i)},"^style.widget|content.title":function(){this.rendered&&this._setWidget()},"^style.def":function(t,e,i){this.rendered&&this.tooltip.toggleClass(I,!!i)},"^events.(render|show|move|hide|focus|blur)$":function(t,e,i){this.rendered&&this.tooltip[($.isFunction(i)?"":"un")+"bind"]("tooltip"+e,i)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){if(!this.rendered){return}var t=this.options.position
this.tooltip.attr("tracking",t.target==="mouse"&&t.adjust.mouse)
this._unassignEvents()
this._assignEvents()}}}
function V(t,e){var i=0,s,o=t,n=e.split(".")
while(o=o[n[i++]]){if(i<n.length){s=o}}return[s||t,n.pop()]}b.get=function(t){if(this.destroyed){return this}var e=V(this.options,t.toLowerCase()),i=e[0][e[1]]
return i.precedance?i.string():i}
function X(t,e){var i,s,o
for(i in this.checks){for(s in this.checks[i]){if(o=new RegExp(s,"i").exec(t)){e.push(o)
if(i==="builtin"||this.plugins[i]){this.checks[i][s].apply(this.plugins[i]||this,e)}}}}}var R=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,Y=/^prerender|show\.ready/i
b.set=function(t,e){if(this.destroyed){return this}var i=this.rendered,r=o,a=this.options,h=this.checks,l
if("string"===typeof t){l=t
t={}
t[l]=e}else{t=$.extend({},t)}$.each(t,function(e,s){if(i&&Y.test(e)){delete t[e]
return}var o=V(a,e.toLowerCase()),n
n=o[0][o[1]]
o[0][o[1]]=s&&s.nodeType?$(s):s
r=R.test(e)||r
t[e]=[o[0],o[1],s,n]})
N(a)
this.positioning=s
$.each(t,$.proxy(X,this))
this.positioning=o
if(this.rendered&&this.tooltip[0].offsetWidth>0&&r){this.reposition(a.position.target==="mouse"?n:this.cache.event)}return this}
b._update=function(t,e,i){var r=this,a=this.cache
if(!this.rendered||!t){return o}if($.isFunction(t)){t=t.call(this.elements.target,a.event,this)||""}if($.isFunction(t.then)){a.waiting=s
return t.then(function(t){a.waiting=o
return r._update(t,e)},n,function(t){return r._update(t,e)})}if(t===o||!t&&t!==""){return o}if(t.jquery&&t.length>0){e.empty().append(t.css({display:"block",visibility:"visible"}))}else{e.html(t)}return this._waitForContent(e).then(function(t){if(t.images&&t.images.length&&r.rendered&&r.tooltip[0].offsetWidth>0){r.reposition(a.event,!t.length)}})}
b._waitForContent=function(t){var e=this.cache
e.waiting=s
return($.fn.imagesLoaded?t.imagesLoaded():$.Deferred().resolve([])).done(function(){e.waiting=o}).promise()}
b._updateContent=function(t,e){this._update(t,this.elements.content,e)}
b._updateTitle=function(t,e){if(this._update(t,this.elements.title,e)===o){this._removeTitle(o)}}
b._createTitle=function(){var t=this.elements,e=this._id+"-title"
if(t.titlebar){this._removeTitle()}t.titlebar=$("<div />",{"class":q+"-titlebar "+(this.options.style.widget?G("header"):"")}).append(t.title=$("<div />",{id:e,"class":q+"-title","aria-atomic":s})).insertBefore(t.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(t){$(this).toggleClass("ui-state-active ui-state-focus",t.type.substr(-4)==="down")}).delegate(".qtip-close","mouseover mouseout",function(t){$(this).toggleClass("ui-state-hover",t.type==="mouseover")})
if(this.options.content.button){this._createButton()}}
b._removeTitle=function(t){var e=this.elements
if(e.title){e.titlebar.remove()
e.titlebar=e.title=e.button=n
if(t!==o){this.reposition()}}}
b.reposition=function(i,n){if(!this.rendered||this.positioning||this.destroyed){return this}this.positioning=s
var r=this.cache,a=this.tooltip,h=this.options.position,l=h.target,g=h.my,m=h.at,v=h.viewport,y=h.container,b=h.adjust,w=b.method.split(" "),_=a.outerWidth(o),q=a.outerHeight(o),C=0,T=0,j=a.css("position"),z={left:0,top:0},M=a[0].offsetWidth>0,k=i&&i.type==="scroll",I=$(t),W=y[0].ownerDocument,E=this.mouse,S,L
if($.isArray(l)&&l.length===2){m={x:d,y:c}
z={left:l[0],top:l[1]}}else if(l==="mouse"){m={x:d,y:c}
if(E&&E.pageX&&(b.mouse||!i||!i.pageX)){i=E}else if(!i||!i.pageX){if((!b.mouse||this.options.show.distance)&&r.origin&&r.origin.pageX){i=r.origin}else if(!i||i&&(i.type==="resize"||i.type==="scroll")){i=r.event}}if(j!=="static"){z=y.offset()}if(W.body.offsetWidth!==(t.innerWidth||W.documentElement.clientWidth)){L=$(e.body).offset()}z={left:i.pageX-z.left+(L&&L.left||0),top:i.pageY-z.top+(L&&L.top||0)}
if(b.mouse&&k&&E){z.left-=(E.scrollX||0)-I.scrollLeft()
z.top-=(E.scrollY||0)-I.scrollTop()}}else{if(l==="event"){if(i&&i.target&&i.type!=="scroll"&&i.type!=="resize"){r.target=$(i.target)}else if(!i.target){r.target=this.elements.target}}else if(l!=="event"){r.target=$(l.jquery?l:this.elements.target)}l=r.target
l=$(l).eq(0)
if(l.length===0){return this}else if(l[0]===e||l[0]===t){C=D.iOS?t.innerWidth:l.width()
T=D.iOS?t.innerHeight:l.height()
if(l[0]===t){z={top:(v||l).scrollTop(),left:(v||l).scrollLeft()}}}else if(x.imagemap&&l.is("area")){S=x.imagemap(this,l,m,x.viewport?w:o)}else if(x.svg&&l&&l[0].ownerSVGElement){S=x.svg(this,l,m,x.viewport?w:o)}else{C=l.outerWidth(o)
T=l.outerHeight(o)
z=l.offset()}if(S){C=S.width
T=S.height
L=S.offset
z=S.position}z=this.reposition.offset(l,z,y)
if(D.iOS>3.1&&D.iOS<4.1||D.iOS>=4.3&&D.iOS<4.33||!D.iOS&&j==="fixed"){z.left-=I.scrollLeft()
z.top-=I.scrollTop()}if(!S||S&&S.adjustable!==o){z.left+=m.x===p?C:m.x===u?C/2:0
z.top+=m.y===f?T:m.y===u?T/2:0}}z.left+=b.x+(g.x===p?-_:g.x===u?-_/2:0)
z.top+=b.y+(g.y===f?-q:g.y===u?-q/2:0)
if(x.viewport){z.adjusted=x.viewport(this,z,h,C,T,_,q)
if(L&&z.adjusted.left){z.left+=L.left}if(L&&z.adjusted.top){z.top+=L.top}}else{z.adjusted={left:0,top:0}}if(!this._trigger("move",[z,v.elem||v],i)){return this}delete z.adjusted
if(n===o||!M||isNaN(z.left)||isNaN(z.top)||l==="mouse"||!$.isFunction(h.effect)){a.css(z)}else if($.isFunction(h.effect)){h.effect.call(a,this,$.extend({},z))
a.queue(function(t){$(this).css({opacity:"",height:""})
if(D.ie){this.style.removeAttribute("filter")}t()})}this.positioning=o
return this}
b.reposition.offset=function(t,i,s){if(!s[0]){return i}var o=$(t[0].ownerDocument),n=!!D.ie&&e.compatMode!=="CSS1Compat",r=s[0],a,h,l,c
function d(t,e){i.left+=e*t.scrollLeft()
i.top+=e*t.scrollTop()}do{if((h=$.css(r,"position"))!=="static"){if(h==="fixed"){l=r.getBoundingClientRect()
d(o,-1)}else{l=$(r).position()
l.left+=parseFloat($.css(r,"borderLeftWidth"))||0
l.top+=parseFloat($.css(r,"borderTopWidth"))||0}i.left-=l.left+(parseFloat($.css(r,"marginLeft"))||0)
i.top-=l.top+(parseFloat($.css(r,"marginTop"))||0)
if(!a&&(c=$.css(r,"overflow"))!=="hidden"&&c!=="visible"){a=$(r)}}}while(r=r.offsetParent)
if(a&&(a[0]!==o[0]||n)){d(a,1)}return i}
var H=(w=b.reposition.Corner=function(t,e){t=(""+t).replace(/([A-Z])/," $1").replace(/middle/gi,u).toLowerCase()
this.x=(t.match(/left|right/i)||t.match(/center/)||["inherit"])[0].toLowerCase()
this.y=(t.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase()
this.forceY=!!e
var i=t.charAt(0)
this.precedance=i==="t"||i==="b"?a:r}).prototype
H.invert=function(t,e){this[t]=this[t]===d?p:this[t]===p?d:e||this[t]}
H.string=function(){var t=this.x,e=this.y
return t===e?t:this.precedance===a||this.forceY&&e!=="center"?e+" "+t:t+" "+e}
H.abbrev=function(){var t=this.string().split(" ")
return t[0].charAt(0)+(t[1]&&t[1].charAt(0)||"")}
H.clone=function(){return new w(this.string(),this.forceY)}
b.toggle=function(t,i){var r=this.cache,a=this.options,h=this.tooltip
if(i){if(/over|enter/.test(i.type)&&/out|leave/.test(r.event.type)&&a.show.target.add(i.target).length===a.show.target.length&&h.has(i.relatedTarget).length){return this}r.event=U(i)}this.waiting&&!t&&(this.hiddenDuringWait=s)
if(!this.rendered){return t?this.render(1):this}else if(this.destroyed||this.disabled){return this}var l=t?"show":"hide",c=this.options[l],d=this.options[!t?"show":"hide"],f=this.options.position,p=this.options.content,u=this.tooltip.css("width"),g=this.tooltip.is(":visible"),m=t||c.target.length===1,v=!i||c.target.length<2||r.target[0]===i.target,y,b,w,_,x
if((typeof t).search("boolean|number")){t=!g}y=!h.is(":animated")&&g===t&&v
b=!y?!!this._trigger(l,[90]):n
if(this.destroyed){return this}if(b!==o&&t){this.focus(i)}if(!b||y){return this}$.attr(h[0],"aria-hidden",!!!t)
if(t){r.origin=U(this.mouse)
if($.isFunction(p.text)){this._updateContent(p.text,o)}if($.isFunction(p.title)){this._updateTitle(p.title,o)}if(!B&&f.target==="mouse"&&f.adjust.mouse){$(e).bind("mousemove."+q,this._storeMouse)
B=s}if(!u){h.css("width",h.outerWidth(o))}this.reposition(i,arguments[2])
if(!u){h.css("width","")}if(!!c.solo){(typeof c.solo==="string"?$(c.solo):$(z,c.solo)).not(h).not(c.target).qtip("hide",$.Event("tooltipsolo"))}}else{clearTimeout(this.timers.show)
delete r.origin
if(B&&!$(z+'[tracking="true"]:visible',c.solo).not(h).length){$(e).unbind("mousemove."+q)
B=o}this.blur(i)}x=$.proxy(function(){if(t){if(D.ie){h[0].style.removeAttribute("filter")}h.css("overflow","")
if("string"===typeof c.autofocus){$(this.options.show.autofocus,h).focus()}this.options.show.target.trigger("qtip-"+this.id+"-inactive")}else{h.css({display:"",visibility:"",opacity:"",left:"",top:""})}this._trigger(t?"visible":"hidden")},this)
if(c.effect===o||m===o){h[l]()
x()}else if($.isFunction(c.effect)){h.stop(1,1)
c.effect.call(h,this)
h.queue("fx",function(t){x()
t()})}else{h.fadeTo(90,t?1:0,x)}if(t){c.target.trigger("qtip-"+this.id+"-inactive")}return this}
b.show=function(t){return this.toggle(s,t)}
b.hide=function(t){return this.toggle(o,t)}
b.focus=function(t){if(!this.rendered||this.destroyed){return this}var e=$(z),i=this.tooltip,s=parseInt(i[0].style.zIndex,10),o=y.zindex+e.length,n
if(!i.hasClass(W)){if(this._trigger("focus",[o],t)){if(s!==o){e.each(function(){if(this.style.zIndex>s){this.style.zIndex=this.style.zIndex-1}})
e.filter("."+W).qtip("blur",t)}i.addClass(W)[0].style.zIndex=o}}return this}
b.blur=function(t){if(!this.rendered||this.destroyed){return this}this.tooltip.removeClass(W)
this._trigger("blur",[this.tooltip.css("zIndex")],t)
return this}
b.disable=function(t){if(this.destroyed){return this}if(t==="toggle"){t=!(this.rendered?this.tooltip.hasClass(S):this.disabled)}else if("boolean"!==typeof t){t=s}if(this.rendered){this.tooltip.toggleClass(S,t).attr("aria-disabled",t)}this.disabled=!!t
return this}
b.enable=function(){return this.disable(o)}
b._createButton=function(){var t=this,e=this.elements,i=e.tooltip,s=this.options.content.button,n=typeof s==="string",r=n?s:"Close tooltip"
if(e.button){e.button.remove()}if(s.jquery){e.button=s}else{e.button=$("<a />",{"class":"qtip-close "+(this.options.style.widget?"":q+"-icon"),title:r,"aria-label":r}).prepend($("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"}))}e.button.appendTo(e.titlebar||i).attr("role","button").click(function(e){if(!i.hasClass(S)){t.hide(e)}return o})}
b._updateButton=function(t){if(!this.rendered){return o}var e=this.elements.button
if(t){this._createButton()}else{e.remove()}}
function G(t){return j.concat("").join(t?"-"+t+" ":" ")}b._setWidget=function(){var t=this.options.style.widget,e=this.elements,i=e.tooltip,s=i.hasClass(S)
i.removeClass(S)
S=t?"ui-state-disabled":"qtip-disabled"
i.toggleClass(S,s)
i.toggleClass("ui-helper-reset "+G(),t).toggleClass(I,this.options.style.def&&!t)
if(e.content){e.content.toggleClass(G("content"),t)}if(e.titlebar){e.titlebar.toggleClass(G("header"),t)}if(e.button){e.button.toggleClass(q+"-icon",!t)}}
function U(i){return i&&{type:i.type,pageX:i.pageX,pageY:i.pageY,target:i.target,relatedTarget:i.relatedTarget,scrollX:i.scrollX||t.pageXOffset||e.body.scrollLeft||e.documentElement.scrollLeft,scrollY:i.scrollY||t.pageYOffset||e.body.scrollTop||e.documentElement.scrollTop}||{}}function Q(t,e){if(e>0){return setTimeout($.proxy(t,this),e)}else{t.call(this)}}function J(t){if(this.tooltip.hasClass(S)){return o}clearTimeout(this.timers.show)
clearTimeout(this.timers.hide)
this.timers.show=Q.call(this,function(){this.toggle(s,t)},this.options.show.delay)}function K(t){if(this.tooltip.hasClass(S)){return o}var e=$(t.relatedTarget),i=e.closest(z)[0]===this.tooltip[0],s=e[0]===this.options.show.target[0]
clearTimeout(this.timers.show)
clearTimeout(this.timers.hide)
if(this!==e[0]&&(this.options.position.target==="mouse"&&i)||this.options.hide.fixed&&(/mouse(out|leave|move)/.test(t.type)&&(i||s))){try{t.preventDefault()
t.stopImmediatePropagation()}catch(n){}return}this.timers.hide=Q.call(this,function(){this.toggle(o,t)},this.options.hide.delay,this)}function Z(t){if(this.tooltip.hasClass(S)||!this.options.hide.inactive){return o}clearTimeout(this.timers.inactive)
this.timers.inactive=Q.call(this,function(){this.hide(t)},this.options.hide.inactive)}function te(t){if(this.rendered&&this.tooltip[0].offsetWidth>0){this.reposition(t)}}b._storeMouse=function(t){(this.mouse=U(t)).type="mousemove"}
b._bind=function(t,e,i,s,o){var n="."+this._id+(s?"-"+s:"")
e.length&&$(t).bind((e.split?e:e.join(n+" "))+n,$.proxy(i,o||this))}
b._unbind=function(t,e){$(t).unbind("."+this._id+(e?"-"+e:""))}
var ee="."+q
function ie(t,i,s){$(e.body).delegate(t,(i.split?i:i.join(ee+" "))+ee,function(){var t=y.api[$.attr(this,T)]
t&&!t.disabled&&s.apply(t,arguments)})}$(function(){ie(z,["mouseenter","mouseleave"],function(t){var e=t.type==="mouseenter",i=$(t.currentTarget),s=$(t.relatedTarget||t.target),o=this.options
if(e){this.focus(t)
i.hasClass(k)&&!i.hasClass(S)&&clearTimeout(this.timers.hide)}else{if(o.position.target==="mouse"&&o.hide.event&&o.show.target&&!s.closest(o.show.target[0]).length){this.hide(t)}}i.toggleClass(E,e)})
ie("["+T+"]",M,Z)})
b._trigger=function(t,e,i){var s=$.Event("tooltip"+t)
s.originalEvent=i&&$.extend({},i)||this.cache.event||n
this.triggering=t
this.tooltip.trigger(s,[this].concat(e||[]))
this.triggering=o
return!s.isDefaultPrevented()}
b._bindEvents=function(t,e,i,s,o,n){if(s.add(i).length===s.length){var r=[]
e=$.map(e,function(e){var i=$.inArray(e,t)
if(i>-1){r.push(t.splice(i,1)[0])
return}return e})
r.length&&this._bind(i,r,function(t){var e=this.rendered?this.tooltip[0].offsetWidth>0:false;(e?n:o).call(this,t)})}this._bind(i,t,o)
this._bind(s,e,n)}
b._assignInitialEvents=function(t){var e=this.options,n=e.show.target,r=e.hide.target,a=e.show.event?$.trim(""+e.show.event).split(" "):[],h=e.hide.event?$.trim(""+e.hide.event).split(" "):[]
if(/mouse(over|enter)/i.test(e.show.event)&&!/mouse(out|leave)/i.test(e.hide.event)){h.push("mouseleave")}this._bind(n,"mousemove",function(t){this._storeMouse(t)
this.cache.onTarget=s})
function l(t){if(this.disabled||this.destroyed){return o}this.cache.event=U(t)
this.cache.target=t?$(t.target):[i]
clearTimeout(this.timers.show)
this.timers.show=Q.call(this,function(){this.render(typeof t==="object"||e.show.ready)},e.show.delay)}this._bindEvents(a,h,n,r,l,function(){clearTimeout(this.timers.show)})
if(e.show.ready||e.prerender){l.call(this,t)}}
b._assignEvents=function(){var i=this,s=this.options,o=s.position,n=this.tooltip,r=s.show.target,a=s.hide.target,h=o.container,l=o.viewport,c=$(e),d=$(e.body),f=$(t),p=s.show.event?$.trim(""+s.show.event).split(" "):[],u=s.hide.event?$.trim(""+s.hide.event).split(" "):[]
$.each(s.events,function(t,e){i._bind(n,t==="toggle"?["tooltipshow","tooltiphide"]:["tooltip"+t],e,null,n)})
if(/mouse(out|leave)/i.test(s.hide.event)&&s.hide.leave==="window"){this._bind(c,["mouseout","blur"],function(t){if(!/select|option/.test(t.target.nodeName)&&!t.relatedTarget){this.hide(t)}})}if(s.hide.fixed){a=a.add(n.addClass(k))}else if(/mouse(over|enter)/i.test(s.show.event)){this._bind(a,"mouseleave",function(){clearTimeout(this.timers.show)})}if((""+s.hide.event).indexOf("unfocus")>-1){this._bind(h.closest("html"),["mousedown","touchstart"],function(t){var e=$(t.target),i=this.rendered&&!this.tooltip.hasClass(S)&&this.tooltip[0].offsetWidth>0,s=e.parents(z).filter(this.tooltip[0]).length>0
if(e[0]!==this.target[0]&&e[0]!==this.tooltip[0]&&!s&&!this.target.has(e[0]).length&&i){this.hide(t)}})}if("number"===typeof s.hide.inactive){this._bind(r,"qtip-"+this.id+"-inactive",Z)
this._bind(a.add(n),y.inactiveEvents,Z,"-inactive")}this._bindEvents(p,u,r,a,J,K)
this._bind(r.add(n),"mousemove",function(t){if("number"===typeof s.hide.distance){var e=this.cache.origin||{},i=this.options.hide.distance,o=Math.abs
if(o(t.pageX-e.pageX)>=i||o(t.pageY-e.pageY)>=i){this.hide(t)}}this._storeMouse(t)})
if(o.target==="mouse"){if(o.adjust.mouse){if(s.hide.event){this._bind(r,["mouseenter","mouseleave"],function(t){this.cache.onTarget=t.type==="mouseenter"})}this._bind(c,"mousemove",function(t){if(this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(S)&&this.tooltip[0].offsetWidth>0){this.reposition(t)}})}}if(o.adjust.resize||l.length){this._bind($.event.special.resize?l:f,"resize",te)}if(o.adjust.scroll){this._bind(f.add(o.container),"scroll",te)}}
b._unassignEvents=function(){var i=[this.options.show.target[0],this.options.hide.target[0],this.rendered&&this.tooltip[0],this.options.position.container[0],this.options.position.viewport[0],this.options.position.container.closest("html")[0],t,e]
this._unbind($([]).pushStack($.grep(i,function(t){return typeof t==="object"})))}
function se(t,i,r){var a,h,l,c,d,f=$(e.body),p=t[0]===e?f:t,u=t.metadata?t.metadata(r.metadata):n,g=r.metadata.type==="html5"&&u?u[r.metadata.name]:n,m=t.data(r.metadata.name||"qtipopts")
try{m=typeof m==="string"?$.parseJSON(m):m}catch(v){}c=$.extend(s,{},y.defaults,r,typeof m==="object"?N(m):n,N(g||u))
h=c.position
c.id=i
if("boolean"===typeof c.content.text){l=t.attr(c.content.attr)
if(c.content.attr!==o&&l){c.content.text=l}else{return o}}if(!h.container.length){h.container=f}if(h.target===o){h.target=p}if(c.show.target===o){c.show.target=p}if(c.show.solo===s){c.show.solo=h.container.closest("body")}if(c.hide.target===o){c.hide.target=p}if(c.position.viewport===s){c.position.viewport=h.container}h.container=h.container.eq(0)
h.at=new w(h.at,s)
h.my=new w(h.my)
if(t.data(q)){if(c.overwrite){t.qtip("destroy",true)}else if(c.overwrite===o){return o}}t.attr(C,i)
if(c.suppress&&(d=t.attr("title"))){t.removeAttr("title").attr(A,d).attr("title","")}a=new F(t,c,i,!!l)
t.data(q,a)
t.one("remove.qtip-"+i+" removeqtip.qtip-"+i,function(){var t
if(t=$(this).data(q)){t.destroy(true)}})
return a}y=$.fn.qtip=function(t,e,r){var a=(""+t).toLowerCase(),h=n,l=$.makeArray(arguments).slice(1),c=l[l.length-1],d=this[0]?$.data(this[0],q):n
if(!arguments.length&&d||a==="api"){return d}else if("string"===typeof t){this.each(function(){var t=$.data(this,q)
if(!t){return s}if(c&&c.timeStamp){t.cache.event=c}if(e&&(a==="option"||a==="options")){if(r!==i||$.isPlainObject(e)){t.set(e,r)}else{h=t.get(e)
return o}}else if(t[a]){t[a].apply(t,l)}})
return h!==n?h:this}else if("object"===typeof t||!arguments.length){d=N($.extend(s,{},t))
return this.each(function(t){var e,i
i=$.isArray(d.id)?d.id[t]:d.id
i=!i||i===o||i.length<1||y.api[i]?y.nextid++:i
e=se($(this),i,d)
if(e===o){return s}else{y.api[i]=e}$.each(x,function(){if(this.initialize==="initialize"){this(e)}})
e._assignInitialEvents(c)})}}
$.qtip=F
y.api={}
$.each({attr:function(t,e){if(this.length){var i=this[0],s="title",o=$.data(i,"qtip")
if(t===s&&o&&"object"===typeof o&&o.options.suppress){if(arguments.length<2){return $.attr(i,A)}if(o&&o.options.content.attr===s&&o.cache.attr){o.set("content.text",e)}return this.attr(A,e)}}return $.fn["attr"+L].apply(this,arguments)},clone:function(t){var e=$([]),i="title",s=$.fn["clone"+L].apply(this,arguments)
if(!t){s.filter("["+A+"]").attr("title",function(){return $.attr(this,A)}).removeAttr(A)}return s}},function(t,e){if(!e||$.fn[t+L]){return s}var i=$.fn[t+L]=$.fn[t]
$.fn[t]=function(){return e.apply(this,arguments)||i.apply(this,arguments)}})
if(!$.ui){$["cleanData"+L]=$.cleanData
$.cleanData=function(t){for(var e=0,i;(i=$(t[e])).length;e++){if(i.attr(C)){try{i.triggerHandler("removeqtip")}catch(s){}}}$["cleanData"+L].apply(this,arguments)}}y.version="2.2.0"
y.nextid=0
y.inactiveEvents=M
y.zindex=15e3
y.defaults={prerender:o,id:o,overwrite:s,suppress:s,content:{text:s,attr:"title",title:o,button:o},position:{my:"top left",at:"bottom right",target:o,container:o,viewport:o,adjust:{x:0,y:0,mouse:s,scroll:s,resize:s,method:"flipinvert flipinvert"},effect:function(t,e,i){$(this).animate(e,{duration:200,queue:o})}},show:{target:o,event:"mouseenter",effect:s,delay:90,solo:o,ready:o,autofocus:o},hide:{target:o,event:"mouseleave",effect:s,delay:0,fixed:o,inactive:o,leave:"window",distance:o},style:{classes:"",widget:o,width:o,height:o,def:s},events:{render:n,move:n,show:n,hide:n,toggle:n,visible:n,hidden:n,focus:n,blur:n}}
var oe,ne=".qtip-tip",re="margin",ae="border",he="color",le="background-color",ce="transparent",de=" !important",fe=!!e.createElement("canvas").getContext,pe=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i
function ue(t){return t.charAt(0).toUpperCase()+t.slice(1)}var ge={},me=["Webkit","O","Moz","ms"]
function ve(t,e){var s=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+me.join(s+" ")+s).split(" "),n,r,a=0
if(ge[e]){return t.css(ge[e])}while(n=o[a++]){if((r=t.css(n))!==i){return ge[e]=n,r}}}function ye(t,e){return Math.ceil(parseFloat(ve(t,e)))}if(!fe){var be=function(t,e,i){return"<qtipvml:"+t+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(e||"")+' style="behavior: url(#default#VML); '+(i||"")+'" />'}}else{var we=t.devicePixelRatio||1,_e=function(){var t=e.createElement("canvas").getContext("2d")
return t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||1}(),xe=we/_e}function qe(t,e){this._ns="tip"
this.options=e
this.offset=e.offset
this.size=[e.width,e.height]
this.init(this.qtip=t)}$.extend(qe.prototype,{init:function(t){var e,i
i=this.element=t.elements.tip=$("<div />",{"class":q+"-tip"}).prependTo(t.tooltip)
if(fe){e=$("<canvas />").appendTo(this.element)[0].getContext("2d")
e.lineJoin="miter"
e.miterLimit=1e5
e.save()}else{e=be("shape",'coordorigin="0,0"',"position:absolute;")
this.element.html(e+e)
t._bind($("*",i).add(i),["click","mousedown"],function(t){t.stopPropagation()},this._ns)}t._bind(t.tooltip,"tooltipmove",this.reposition,this._ns,this)
this.create()},_swapDimensions:function(){this.size[0]=this.options.height
this.size[1]=this.options.width},_resetDimensions:function(){this.size[0]=this.options.width
this.size[1]=this.options.height},_useTitle:function(t){var e=this.qtip.elements.titlebar
return e&&(t.y===c||t.y===u&&this.element.position().top+this.size[1]/2+this.options.offset<e.outerHeight(s))},_parseCorner:function(t){var e=this.qtip.options.position.my
if(t===o||e===o){t=o}else if(t===s){t=new w(e.string())}else if(!t.string){t=new w(t)
t.fixed=s}return t},_parseWidth:function(t,e,i){var s=this.qtip.elements,o=ae+ue(e)+"Width"
return(i?ye(i,o):ye(s.content,o)||ye(this._useTitle(t)&&s.titlebar||s.content,o)||ye(s.tooltip,o))||0},_parseRadius:function(t){var e=this.qtip.elements,i=ae+ue(t.y)+ue(t.x)+"Radius"
return D.ie<9?0:ye(this._useTitle(t)&&e.titlebar||e.content,i)||ye(e.tooltip,i)||0},_invalidColour:function(t,e,i){var s=t.css(e)
return!s||i&&s===t.css(i)||pe.test(s)?o:s},_parseColours:function(t){var e=this.qtip.elements,i=this.element.css("cssText",""),s=ae+ue(t[t.precedance])+ue(he),o=this._useTitle(t)&&e.titlebar||e.content,n=this._invalidColour,r=[]
r[0]=n(i,le)||n(o,le)||n(e.content,le)||n(e.tooltip,le)||i.css(le)
r[1]=n(i,s,he)||n(o,s,he)||n(e.content,s,he)||n(e.tooltip,s,he)||e.tooltip.css(s)
$("*",i).add(i).css("cssText",le+":"+ce+de+";"+ae+":0"+de+";")
return r},_calculateSize:function(t){var e=t.precedance===a,i=this.options["width"],s=this.options["height"],o=t.abbrev()==="c",n=(e?i:s)*(o?.5:1),r=Math.pow,h=Math.round,l,c,d,f=Math.sqrt(r(n,2)+r(s,2)),p=[this.border/n*f,this.border/s*f]
p[2]=Math.sqrt(r(p[0],2)-r(this.border,2))
p[3]=Math.sqrt(r(p[1],2)-r(this.border,2))
l=f+p[2]+p[3]+(o?0:p[0])
c=l/f
d=[h(c*i),h(c*s)]
return e?d:d.reverse()},_calculateTip:function(t,e,i){i=i||1
e=e||this.size
var s=e[0]*i,o=e[1]*i,n=Math.ceil(s/2),r=Math.ceil(o/2),a={br:[0,0,s,o,s,0],bl:[0,0,s,0,0,o],tr:[0,o,s,0,s,o],tl:[0,0,0,o,s,o],tc:[0,o,n,0,s,o],bc:[0,0,s,0,n,o],rc:[0,0,s,r,0,o],lc:[s,0,s,o,0,r]}
a.lt=a.br
a.rt=a.bl
a.lb=a.tr
a.rb=a.tl
return a[t.abbrev()]},_drawCoords:function(t,e){t.beginPath()
t.moveTo(e[0],e[1])
t.lineTo(e[2],e[3])
t.lineTo(e[4],e[5])
t.closePath()},create:function(){var t=this.corner=(fe||D.ie)&&this._parseCorner(this.options.corner)
if(this.enabled=!!this.corner&&this.corner.abbrev()!=="c"){this.qtip.cache.corner=t.clone()
this.update()}this.element.toggle(this.enabled)
return this.corner},update:function(e,i){if(!this.enabled){return this}var n=this.qtip.elements,g=this.element,m=g.children(),v=this.options,y=this.size,b=v.mimic,_=Math.round,x,q,C,T,j,z,M,k,I
if(!e){e=this.qtip.cache.corner||this.corner}if(b===o){b=e}else{b=new w(b)
b.precedance=e.precedance
if(b.x==="inherit"){b.x=e.x}else if(b.y==="inherit"){b.y=e.y}else if(b.x===b.y){b[e.precedance]=e[e.precedance]}}q=b.precedance
if(e.precedance===r){this._swapDimensions()}else{this._resetDimensions()}x=this.color=this._parseColours(e)
if(x[1]!==ce){k=this.border=this._parseWidth(e,e[e.precedance])
if(v.border&&k<1&&!pe.test(x[1])){x[0]=x[1]}this.border=k=v.border!==s?v.border:k}else{this.border=k=0}M=this.size=this._calculateSize(e)
g.css({width:M[0],height:M[1],lineHeight:M[1]+"px"})
if(e.precedance===a){z=[_(b.x===d?k:b.x===p?M[0]-y[0]-k:(M[0]-y[0])/2),_(b.y===c?M[1]-y[1]:0)]}else{z=[_(b.x===d?M[0]-y[0]:0),_(b.y===c?k:b.y===f?M[1]-y[1]-k:(M[1]-y[1])/2)]}if(fe){C=m[0].getContext("2d")
C.restore()
C.save()
C.clearRect(0,0,6e3,6e3)
T=this._calculateTip(b,y,xe)
j=this._calculateTip(b,this.size,xe)
m.attr(h,M[0]*xe).attr(l,M[1]*xe)
m.css(h,M[0]).css(l,M[1])
this._drawCoords(C,j)
C.fillStyle=x[1]
C.fill()
C.translate(z[0]*xe,z[1]*xe)
this._drawCoords(C,T)
C.fillStyle=x[0]
C.fill()}else{T=this._calculateTip(b)
T="m"+T[0]+","+T[1]+" l"+T[2]+","+T[3]+" "+T[4]+","+T[5]+" xe"
z[2]=k&&/^(r|b)/i.test(e.string())?D.ie===8?2:1:0
m.css({coordsize:M[0]+k+" "+(M[1]+k),antialias:""+(b.string().indexOf(u)>-1),left:z[0]-z[2]*Number(q===r),top:z[1]-z[2]*Number(q===a),width:M[0]+k,height:M[1]+k}).each(function(t){var e=$(this)
e[e.prop?"prop":"attr"]({coordsize:M[0]+k+" "+(M[1]+k),path:T,fillcolor:x[0],filled:!!t,stroked:!t}).toggle(!!(k||t))
!t&&e.html(be("stroke",'weight="'+k*2+'px" color="'+x[1]+'" miterlimit="1000" joinstyle="miter"'))})}t.opera&&setTimeout(function(){n.tip.css({display:"inline-block",visibility:"visible"})},1)
if(i!==o){this.calculate(e,M)}},calculate:function(t,e){if(!this.enabled){return o}var i=this,s=this.qtip.elements,n=this.element,h=this.options.offset,l=s.tooltip.hasClass("ui-widget"),f={},p,g
t=t||this.corner
p=t.precedance
e=e||this._calculateSize(t)
g=[t.x,t.y]
if(p===r){g.reverse()}$.each(g,function(o,n){var r,l,g
if(n===u){r=p===a?d:c
f[r]="50%"
f[re+"-"+r]=-Math.round(e[p===a?0:1]/2)+h}else{r=i._parseWidth(t,n,s.tooltip)
l=i._parseWidth(t,n,s.content)
g=i._parseRadius(t)
f[n]=Math.max(-i.border,o?l:h+(g>r?g:-r))}})
f[t[p]]-=e[p===r?0:1]
n.css({margin:"",top:"",bottom:"",left:"",right:""}).css(f)
return f},reposition:function(t,e,n,h){if(!this.enabled){return}var l=e.cache,g=this.corner.clone(),m=n.adjusted,y=e.options.position.adjust.method.split(" "),b=y[0],w=y[1]||y[0],_={left:o,top:o,x:0,y:0},x,q={},C
function T(t,e,i,s,o){if(t===v&&g.precedance===e&&m[s]&&g[i]!==u){g.precedance=g.precedance===r?a:r}else if(t!==v&&m[s]){g[e]=g[e]===u?m[s]>0?s:o:g[e]===s?o:s}}function j(t,e,s){if(g[t]===u){q[re+"-"+e]=_[t]=x[re+"-"+e]-m[e]}else{C=x[s]!==i?[m[e],-x[e]]:[-m[e],x[e]]
if((_[t]=Math.max(C[0],C[1]))>C[0]){n[e]-=m[e]
_[e]=o}q[x[s]!==i?s:e]=_[t]}}if(this.corner.fixed!==s){T(b,r,a,d,p)
T(w,a,r,c,f)
if(g.string()!==l.corner.string()&&(l.cornerTop!==m.top||l.cornerLeft!==m.left)){this.update(g,o)}}x=this.calculate(g)
if(x.right!==i){x.left=-x.right}if(x.bottom!==i){x.top=-x.bottom}x.user=this.offset
if(_.left=b===v&&!!m.left){j(r,d,p)}if(_.top=w===v&&!!m.top){j(a,c,f)}this.element.css(q).toggle(!(_.x&&_.y||g.x===u&&_.y||g.y===u&&_.x))
n.left-=x.left.charAt?x.user:b!==v||_.top||!_.left&&!_.top?x.left+this.border:0
n.top-=x.top.charAt?x.user:w!==v||_.left||!_.left&&!_.top?x.top+this.border:0
l.cornerLeft=m.left
l.cornerTop=m.top
l.corner=g.clone()},destroy:function(){this.qtip._unbind(this.qtip.tooltip,this._ns)
if(this.qtip.elements.tip){this.qtip.elements.tip.find("*").remove().end().remove()}}})
oe=x.tip=function(t){return new qe(t,t.options.style.tip)}
oe.initialize="render"
oe.sanitize=function(t){if(t.style&&"tip"in t.style){var e=t.style.tip
if(typeof e!=="object"){e=t.style.tip={corner:e}}if(!/string|boolean/i.test(typeof e.corner)){e.corner=s}}}
_.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){this.create()
this.qtip.reposition()},"^style.tip.(height|width)$":function(t){this.size=[t.width,t.height]
this.update()
this.qtip.reposition()},"^content.title|style.(classes|widget)$":function(){this.update()}}
$.extend(s,y.defaults,{style:{tip:{corner:s,mimic:o,width:6,height:6,border:s,offset:0}}})
var Ce,Te,je="qtip-modal",ze="."+je
Te=function(){var t=this,i={},r,a,h,l
function c(t){if($.expr[":"].focusable){return $.expr[":"].focusable}var e=!isNaN($.attr(t,"tabindex")),i=t.nodeName&&t.nodeName.toLowerCase(),s,o,n
if("area"===i){s=t.parentNode
o=s.name
if(!t.href||!o||s.nodeName.toLowerCase()!=="map"){return false}n=$("img[usemap=#"+o+"]")[0]
return!!n&&n.is(":visible")}return/input|select|textarea|button|object/.test(i)?!t.disabled:"a"===i?t.href||e:e}function d(t){if(i.length<1&&t.length){t.not("body").blur()}else{i.first().focus()}}function f(t){if(!l.is(":visible")){return}var e=$(t.target),s=r.tooltip,n=e.closest(z),h
h=n.length<1?o:parseInt(n[0].style.zIndex,10)>parseInt(s[0].style.zIndex,10)
if(!h&&e.closest(z)[0]!==s[0]){d(e)}a=t.target===i[i.length-1]}$.extend(t,{init:function(){l=t.elem=$("<div />",{id:"qtip-overlay",html:"<div></div>",mousedown:function(){return o}}).hide()
$(e.body).bind("focusin"+ze,f)
$(e).bind("keydown"+ze,function(t){if(r&&r.options.show.modal.escape&&t.keyCode===27){r.hide(t)}})
l.bind("click"+ze,function(t){if(r&&r.options.show.modal.blur){r.hide(t)}})
return t},update:function(t){r=t
if(t.options.show.modal.stealfocus!==o){i=t.tooltip.find("*").filter(function(){return c(this)})}else{i=[]}},toggle:function(i,a,c){var f=$(e.body),p=i.tooltip,u=i.options.show.modal,g=u.effect,m=a?"show":"hide",v=l.is(":visible"),y=$(ze).filter(":visible:not(:animated)").not(p),b
t.update(i)
if(a&&u.stealfocus!==o){d($(":focus"))}l.toggleClass("blurs",u.blur)
if(a){l.appendTo(e.body)}if(l.is(":animated")&&v===a&&h!==o||!a&&y.length){return t}l.stop(s,o)
if($.isFunction(g)){g.call(l,a)}else if(g===o){l[m]()}else{l.fadeTo(parseInt(c,10)||90,a?1:0,function(){if(!a){l.hide()}})}if(!a){l.queue(function(t){l.css({left:"",top:""})
if(!$(ze).length){l.detach()}t()})}h=a
if(r.destroyed){r=n}return t}})
t.init()}
Te=new Te
function Me(t,e){this.options=e
this._ns="-modal"
this.init(this.qtip=t)}$.extend(Me.prototype,{init:function(t){var e=t.tooltip
if(!this.options.on){return this}t.elements.overlay=Te.elem
e.addClass(je).css("z-index",y.modal_zindex+$(ze).length)
t._bind(e,["tooltipshow","tooltiphide"],function(t,i,s){var o=t.originalEvent
if(t.target===e[0]){if(o&&t.type==="tooltiphide"&&/mouse(leave|enter)/.test(o.type)&&$(o.relatedTarget).closest(Te.elem[0]).length){try{t.preventDefault()}catch(n){}}else if(!o||o&&o.type!=="tooltipsolo"){this.toggle(t,t.type==="tooltipshow",s)}}},this._ns,this)
t._bind(e,"tooltipfocus",function(t,i){if(t.isDefaultPrevented()||t.target!==e[0]){return}var s=$(ze),o=y.modal_zindex+s.length,n=parseInt(e[0].style.zIndex,10)
Te.elem[0].style.zIndex=o-1
s.each(function(){if(this.style.zIndex>n){this.style.zIndex-=1}})
s.filter("."+W).qtip("blur",t.originalEvent)
e.addClass(W)[0].style.zIndex=o
Te.update(i)
try{t.preventDefault()}catch(r){}},this._ns,this)
t._bind(e,"tooltiphide",function(t){if(t.target===e[0]){$(ze).filter(":visible").not(e).last().qtip("focus",t)}},this._ns,this)},toggle:function(t,e,i){if(t&&t.isDefaultPrevented()){return this}Te.toggle(this.qtip,!!e,i)},destroy:function(){this.qtip.tooltip.removeClass(je)
this.qtip._unbind(this.qtip.tooltip,this._ns)
Te.toggle(this.qtip,o)
delete this.qtip.elements.overlay}})
Ce=x.modal=function(t){return new Me(t,t.options.show.modal)}
Ce.sanitize=function(t){if(t.show){if(typeof t.show.modal!=="object"){t.show.modal={on:!!t.show.modal}}else if(typeof t.show.modal.on==="undefined"){t.show.modal.on=s}}}
y.modal_zindex=y.zindex-200
Ce.initialize="render"
_.modal={"^show.modal.(on|blur)$":function(){this.destroy()
this.init()
this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth>0)}}
$.extend(s,y.defaults,{show:{modal:{on:o,effect:s,blur:s,stealfocus:s,escape:s}}})
x.viewport=function(i,s,n,g,y,b,w){var _=n.target,x=i.elements.tooltip,C=n.my,T=n.at,j=n.adjust,z=j.method.split(" "),M=z[0],k=z[1]||z[0],I=n.viewport,W=n.container,E=i.cache,S={left:0,top:0},L,A,B,D,F,O,P,N,V
if(!I.jquery||_[0]===t||_[0]===e.body||j.method==="none"){return S}D=W.offset()||S
F=W.css("position")==="static"
L=x.css("position")==="fixed"
O=I[0]===t?I.width():I.outerWidth(o)
P=I[0]===t?I.height():I.outerHeight(o)
N={left:L?0:I.scrollLeft(),top:L?0:I.scrollTop()}
V=I.offset()||S
function X(t,e,i,o,n,r,a,l,c){var d=s[n],f=C[t],p=T[t],g=i===v,y=f===n?c:f===r?-c:-c/2,b=p===n?l:p===r?-l:-l/2,w=N[n]+V[n]-(F?0:D[n]),_=w-d,x=d+c-(a===h?O:P)-w,q=y-(C.precedance===t||f===C[e]?b:0)-(p===u?l/2:0)
if(g){q=(f===n?1:-1)*y
s[n]+=_>0?_:x>0?-x:0
s[n]=Math.max(-D[n]+V[n],d-q,Math.min(Math.max(-D[n]+V[n]+(a===h?O:P),d+q),s[n],f==="center"?d-y:1e9))}else{o*=i===m?2:0
if(_>0&&(f!==n||x>0)){s[n]-=q+o
A.invert(t,n)}else if(x>0&&(f!==r||_>0)){s[n]-=(f===u?-q:q)+o
A.invert(t,r)}if(s[n]<N&&-s[n]>x){s[n]=d
A=C.clone()}}return s[n]-d}if(M!=="shift"||k!=="shift"){A=C.clone()}S={left:M!=="none"?X(r,a,M,j.x,d,p,h,g,b):0,top:k!=="none"?X(a,r,k,j.y,c,f,l,y,w):0}
if(A&&E.lastClass!==(B=q+"-pos-"+A.abbrev())){x.removeClass(i.cache.lastClass).addClass(i.cache.lastClass=B)}return S}
x.polys={polygon:function(t,e){var i={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10},adjustable:o},s=0,n,r=[],a=1,h=1,l=0,g=0,m,v
s=t.length
while(s--){n=[parseInt(t[--s],10),parseInt(t[s+1],10)]
if(n[0]>i.position.right){i.position.right=n[0]}if(n[0]<i.position.left){i.position.left=n[0]}if(n[1]>i.position.bottom){i.position.bottom=n[1]}if(n[1]<i.position.top){i.position.top=n[1]}r.push(n)}m=i.width=Math.abs(i.position.right-i.position.left)
v=i.height=Math.abs(i.position.bottom-i.position.top)
if(e.abbrev()==="c"){i.position={left:i.position.left+i.width/2,top:i.position.top+i.height/2}}else{while(m>0&&v>0&&a>0&&h>0){m=Math.floor(m/2)
v=Math.floor(v/2)
if(e.x===d){a=m}else if(e.x===p){a=i.width-m}else{a+=Math.floor(m/2)}if(e.y===c){h=v}else if(e.y===f){h=i.height-v}else{h+=Math.floor(v/2)}s=r.length
while(s--){if(r.length<2){break}l=r[s][0]-i.position.left
g=r[s][1]-i.position.top
if(e.x===d&&l>=a||e.x===p&&l<=a||e.x===u&&(l<a||l>i.width-a)||e.y===c&&g>=h||e.y===f&&g<=h||e.y===u&&(g<h||g>i.height-h)){r.splice(s,1)}}}i.position={left:r[0][0],top:r[0][1]}}return i},rect:function(t,e,i,s){return{width:Math.abs(i-t),height:Math.abs(s-e),position:{left:Math.min(t,i),top:Math.min(e,s)}}},_angles:{tc:3/2,tr:7/4,tl:5/4,bc:1/2,br:1/4,bl:3/4,rc:2,lc:1,c:0},ellipse:function(t,e,i,s,n){var r=x.polys._angles[n.abbrev()],a=r===0?0:i*Math.cos(r*Math.PI),h=s*Math.sin(r*Math.PI)
return{width:i*2-Math.abs(a),height:s*2-Math.abs(h),position:{left:t+a,top:e+h},adjustable:o}},circle:function(t,e,i,s){return x.polys.ellipse(t,e,i,i,s)}}
x.svg=function(t,i,s){var n=$(e),r=i[0],a=$(r.ownerSVGElement),h=1,l=1,c=true,d,f,p,u,g,m,v,y,b,w,_,q
while(!r.getBBox){r=r.parentNode}if(!r.getBBox||!r.parentNode){return o}d=a.attr("width")||a.width()||parseInt(a.css("width"),10)
f=a.attr("height")||a.height()||parseInt(a.css("height"),10)
var C=(parseInt(i.css("stroke-width"),10)||0)/2
if(C){h+=C/d
l+=C/f}switch(r.nodeName){case"ellipse":case"circle":w=x.polys.ellipse(r.cx.baseVal.value,r.cy.baseVal.value,(r.rx||r.r).baseVal.value+C,(r.ry||r.r).baseVal.value+C,s)
break
case"line":case"polygon":case"polyline":b=r.points||[{x:r.x1.baseVal.value,y:r.y1.baseVal.value},{x:r.x2.baseVal.value,y:r.y2.baseVal.value}]
for(w=[],y=-1,m=b.numberOfItems||b.length;++y<m;){v=b.getItem?b.getItem(y):b[y]
w.push.apply(w,[v.x,v.y])}w=x.polys.polygon(w,s)
break
default:w=r.getBoundingClientRect()
w={width:w.width,height:w.height,position:{left:w.left,top:w.top}}
c=false
break}_=w.position
a=a[0]
if(c){if(a.createSVGPoint){p=r.getScreenCTM()
b=a.createSVGPoint()
b.x=_.left
b.y=_.top
u=b.matrixTransform(p)
_.left=u.x
_.top=u.y}if(a.viewBox&&(g=a.viewBox.baseVal)&&g.width&&g.height){h*=d/g.width
l*=f/g.height}}_.left+=n.scrollLeft()
_.top+=n.scrollTop()
return w}
x.imagemap=function(t,e,i,s){if(!e.jquery){e=$(e)}var n=e.attr("shape").toLowerCase().replace("poly","polygon"),r=$('img[usemap="#'+e.parent("map").attr("name")+'"]'),a=$.trim(e.attr("coords")),h=a.replace(/,$/,"").split(","),l,c,d,f,p,u
if(!r.length){return o}if(n==="polygon"){p=x.polys.polygon(h,i)}else if(x.polys[n]){for(d=-1,u=h.length,c=[];++d<u;){c.push(parseInt(h[d],10))}p=x.polys[n].apply(this,c.concat(i))}else{return o}l=r.offset()
l.left+=Math.ceil((r.outerWidth(o)-r.width())/2)
l.top+=Math.ceil((r.outerHeight(o)-r.height())/2)
p.position.left+=l.left
p.position.top+=l.top
return p}
var ke,Ie='<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';" '+' style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); '+'-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>'
function We(t,e){this._ns="ie6"
this.init(this.qtip=t)}$.extend(We.prototype,{_scroll:function(){var e=this.qtip.elements.overlay
e&&(e[0].style.top=$(t).scrollTop()+"px")},init:function(i){var s=i.tooltip,o
if($("select, object").length<1){this.bgiframe=i.elements.bgiframe=$(Ie).appendTo(s)
i._bind(s,"tooltipmove",this.adjustBGIFrame,this._ns,this)}this.redrawContainer=$("<div/>",{id:q+"-rcontainer"}).appendTo(e.body)
if(i.elements.overlay&&i.elements.overlay.addClass("qtipmodal-ie6fix")){i._bind(t,["scroll","resize"],this._scroll,this._ns,this)
i._bind(s,["tooltipshow"],this._scroll,this._ns,this)}this.redraw()},adjustBGIFrame:function(){var t=this.qtip.tooltip,e={height:t.outerHeight(o),width:t.outerWidth(o)},i=this.qtip.plugins.tip,s=this.qtip.elements.tip,n,r
r=parseInt(t.css("borderLeftWidth"),10)||0
r={left:-r,top:-r}
if(i&&s){n=i.corner.precedance==="x"?[h,d]:[l,c]
r[n[1]]-=s[n[0]]()}this.bgiframe.css(r).css(e)},redraw:function(){if(this.qtip.rendered<1||this.drawing){return this}var t=this.qtip.tooltip,e=this.qtip.options.style,i=this.qtip.options.position.container,s,o,n,r
this.qtip.drawing=1
if(e.height){t.css(l,e.height)}if(e.width){t.css(h,e.width)}else{t.css(h,"").appendTo(this.redrawContainer)
o=t.width()
if(o%2<1){o+=1}n=t.css("maxWidth")||""
r=t.css("minWidth")||""
s=(n+r).indexOf("%")>-1?i.width()/100:0
n=(n.indexOf("%")>-1?s:1)*parseInt(n,10)||o
r=(r.indexOf("%")>-1?s:1)*parseInt(r,10)||0
o=n+r?Math.min(Math.max(o,r),n):o
t.css(h,Math.round(o)).appendTo(i)}this.drawing=0
return this},destroy:function(){this.bgiframe&&this.bgiframe.remove()
this.qtip._unbind([t,this.qtip.tooltip],this._ns)}})
ke=x.ie6=function(t){return D.ie===6?new We(t):o}
ke.initialize="render"
_.ie6={"^content|style$":function(){this.redraw()}}})})(window,document)
});
KAdefine("third_party/javascript-khansrc/moment-khansrc/moment.js", function(require, module, exports) {
(function(t){var e,n="2.0.0",i=Math.round,s,r={},a=typeof module!=="undefined"&&module.exports,u=/^\/?Date\((\-?\d+)/i,o=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,f=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,d=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,h=/\d\d?/,c=/\d{1,3}/,l=/\d{3}/,_=/\d{1,4}/,m=/[+\-]?\d{1,6}/,y=/[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,M=/Z|[\+\-]\d\d:?\d\d/i,D=/T/i,p=/[\+\-]?\d+(\.\d{1,3})?/,Y=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,g="YYYY-MM-DDTHH:mm:ssZ",w=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],T=/([\+\-]|\d\d)/gi,v="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),k={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},S={},F="DDD w W M D d".split(" "),b="M D H h m s w W".split(" "),H={M:function(){return this.month()+1},MMM:function(t){return this.lang().monthsShort(this,t)},MMMM:function(t){return this.lang().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.lang().weekdaysMin(this,t)},ddd:function(t){return this.lang().weekdaysShort(this,t)},dddd:function(t){return this.lang().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return x(this.year()%100,2)},YYYY:function(){return x(this.year(),4)},YYYYY:function(){return x(this.year(),5)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),true)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),false)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return x(~~(this.milliseconds()/10),2)},SSS:function(){return x(this.milliseconds(),3)},Z:function(){var t=-this.zone(),e="+"
if(t<0){t=-t
e="-"}return e+x(~~(t/60),2)+":"+x(~~t%60,2)},ZZ:function(){var t=-this.zone(),e="+"
if(t<0){t=-t
e="-"}return e+x(~~(10*t/6),4)},X:function(){return this.unix()}}
function L(t,e){return function(n){return x(t.call(this,n),e)}}function O(t){return function(e){return this.lang().ordinal(t.call(this,e))}}while(F.length){s=F.pop()
H[s+"o"]=O(H[s])}while(b.length){s=b.pop()
H[s+s]=L(H[s],2)}H.DDDD=L(H.DDD,3)
function z(){}function C(t){U(this,t)}function A(t){var e=this._data={},n=t.years||t.year||t.y||0,i=t.months||t.month||t.M||0,s=t.weeks||t.week||t.w||0,r=t.days||t.day||t.d||0,a=t.hours||t.hour||t.h||0,u=t.minutes||t.minute||t.m||0,o=t.seconds||t.second||t.s||0,f=t.milliseconds||t.millisecond||t.ms||0
this._milliseconds=f+o*1e3+u*6e4+a*36e5
this._days=r+s*7
this._months=i+n*12
e.milliseconds=f%1e3
o+=Z(f/1e3)
e.seconds=o%60
u+=Z(o/60)
e.minutes=u%60
a+=Z(u/60)
e.hours=a%24
r+=Z(a/24)
r+=s*7
e.days=r%30
i+=Z(r/30)
e.months=i%12
n+=Z(i/12)
e.years=n}function U(t,e){for(var n in e){if(e.hasOwnProperty(n)){t[n]=e[n]}}return t}function Z(t){if(t<0){return Math.ceil(t)}else{return Math.floor(t)}}function x(t,e){var n=t+""
while(n.length<e){n="0"+n}return n}function W(t,e,n){var i=e._milliseconds,s=e._days,r=e._months,a
if(i){t._d.setTime(+t+i*n)}if(s){t.date(t.date()+s*n)}if(r){a=t.date()
t.date(1).month(t.month()+r*n).date(Math.min(a,t.daysInMonth()))}}function P(t){return Object.prototype.toString.call(t)==="[object Array]"}function V(t,e){var n=Math.min(t.length,e.length),i=Math.abs(t.length-e.length),s=0,r
for(r=0;r<n;r++){if(~~t[r]!==~~e[r]){s++}}return s+i}z.prototype={set:function(t){var e,n
for(n in t){e=t[n]
if(typeof e==="function"){this[n]=e}else{this["_"+n]=e}}},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(t){return this._months[t.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t){var n,i,s,r
if(!this._monthsParse){this._monthsParse=[]}for(n=0;n<12;n++){if(!this._monthsParse[n]){i=e([2e3,n])
s="^"+this.months(i,"")+"|^"+this.monthsShort(i,"")
this._monthsParse[n]=new RegExp(s.replace(".",""),"i")}if(this._monthsParse[n].test(t)){return n}}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(t){var e=this._longDateFormat[t]
if(!e&&this._longDateFormat[t.toUpperCase()]){e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)})
this._longDateFormat[t]=e}return e},meridiem:function(t,e,n){if(t>11){return n?"pm":"PM"}else{return n?"am":"AM"}},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},calendar:function(t,e){var n=this._calendar[t]
return typeof n==="function"?n.apply(e):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,e,n,i){var s=this._relativeTime[n]
return typeof s==="function"?s(t,e,n,i):s.replace(/%d/i,t)},pastFuture:function(t,e){var n=this._relativeTime[t>0?"future":"past"]
return typeof n==="function"?n(e):n.replace(/%s/i,e)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",preparse:function(t){return t},postformat:function(t){return t},week:function(t){return ne(t,this._week.dow,this._week.doy)},_week:{dow:0,doy:6}}
function E(t,e){e.abbr=t
if(!r[t]){r[t]=new z}r[t].set(e)
return r[t]}function J(t){if(!t){return e.fn._lang}if(!r[t]&&a){require("./lang/"+t)}return r[t]}function N(t){if(t.match(/\[.*\]/)){return t.replace(/^\[|\]$/g,"")}return t.replace(/\\/g,"")}function I(t){var e=t.match(o),n,i
for(n=0,i=e.length;n<i;n++){if(H[e[n]]){e[n]=H[e[n]]}else{e[n]=N(e[n])}}return function(s){var r=""
for(n=0;n<i;n++){r+=typeof e[n].call==="function"?e[n].call(s,t):e[n]}return r}}function X(t,e){var n=5
function i(e){return t.lang().longDateFormat(e)||e}while(n--&&f.test(e)){e=e.replace(f,i)}if(!S[e]){S[e]=I(e)}return S[e](t)}function j(t){switch(t){case"DDDD":return l
case"YYYY":return _
case"YYYYY":return m
case"S":case"SS":case"SSS":case"DDD":return c
case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return y
case"X":return p
case"Z":case"ZZ":return M
case"T":return D
case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return h
default:return new RegExp(t.replace("\\",""))}}function R(t,e,n){var i,s,r=n._a
switch(t){case"M":case"MM":r[1]=e==null?0:~~e-1
break
case"MMM":case"MMMM":i=J(n._l).monthsParse(e)
if(i!=null){r[1]=i}else{n._isValid=false}break
case"D":case"DD":case"DDD":case"DDDD":if(e!=null){r[2]=~~e}break
case"YY":r[0]=~~e+(~~e>68?1900:2e3)
break
case"YYYY":case"YYYYY":r[0]=~~e
break
case"a":case"A":n._isPm=(e+"").toLowerCase()==="pm"
break
case"H":case"HH":case"h":case"hh":r[3]=~~e
break
case"m":case"mm":r[4]=~~e
break
case"s":case"ss":r[5]=~~e
break
case"S":case"SS":case"SSS":r[6]=~~(("0."+e)*1e3)
break
case"X":n._d=new Date(parseFloat(e)*1e3)
break
case"Z":case"ZZ":n._useUTC=true
i=(e+"").match(T)
if(i&&i[1]){n._tzh=~~i[1]}if(i&&i[2]){n._tzm=~~i[2]}if(i&&i[0]==="+"){n._tzh=-n._tzh
n._tzm=-n._tzm}break}if(e==null){n._isValid=false}}function q(t){var e,n,i=[]
if(t._d){return}for(e=0;e<7;e++){t._a[e]=i[e]=t._a[e]==null?e===2?1:0:t._a[e]}i[3]+=t._tzh||0
i[4]+=t._tzm||0
n=new Date(0)
if(t._useUTC){n.setUTCFullYear(i[0],i[1],i[2])
n.setUTCHours(i[3],i[4],i[5],i[6])}else{n.setFullYear(i[0],i[1],i[2])
n.setHours(i[3],i[4],i[5],i[6])}t._d=n}function B(t){var e=t._f.match(o),n=t._i,i,s
t._a=[]
for(i=0;i<e.length;i++){s=(j(e[i]).exec(n)||[])[0]
if(s){n=n.slice(n.indexOf(s)+s.length)}if(H[e[i]]){R(e[i],s,t)}}if(t._isPm&&t._a[3]<12){t._a[3]+=12}if(t._isPm===false&&t._a[3]===12){t._a[3]=0}q(t)}function G(t){var e,n,i,s=99,r,a,u
while(t._f.length){e=U({},t)
e._f=t._f.pop()
B(e)
n=new C(e)
if(n.isValid()){i=n
break}u=V(e._a,n.toArray())
if(u<s){s=u
i=n}}U(t,i)}function K(t){var e,n=t._i
if(Y.exec(n)){t._f="YYYY-MM-DDT"
for(e=0;e<4;e++){if(w[e][1].exec(n)){t._f+=w[e][0]
break}}if(M.exec(n)){t._f+=" Z"}B(t)}else{t._d=new Date(n)}}function Q(e){var n=e._i,i=u.exec(n)
if(n===t){e._d=new Date}else if(i){e._d=new Date(+i[1])}else if(typeof n==="string"){K(e)}else if(P(n)){e._a=n.slice(0)
q(e)}else{e._d=n instanceof Date?new Date(+n):new Date(n)}}function te(t,e,n,i,s){return s.relativeTime(e||1,!!n,t,i)}function ee(t,e,n){var s=i(Math.abs(t)/1e3),r=i(s/60),a=i(r/60),u=i(a/24),o=i(u/365),f=s<45&&["s",s]||r===1&&["m"]||r<45&&["mm",r]||a===1&&["h"]||a<22&&["hh",a]||u===1&&["d"]||u<=25&&["dd",u]||u<=45&&["M"]||u<345&&["MM",i(u/30)]||o===1&&["y"]||["yy",o]
f[2]=e
f[3]=t>0
f[4]=n
return te.apply({},f)}function ne(t,n,i){var s=i-n,r=i-t.day()
if(r>s){r-=7}if(r<s-7){r+=7}return Math.ceil(e(t).add("d",r).dayOfYear()/7)}function ie(t){var n=t._i,i=t._f
if(n===null||n===""){return null}if(typeof n==="string"){t._i=n=J().preparse(n)}if(e.isMoment(n)){t=U({},n)
t._d=new Date(+n._d)}else if(i){if(P(i)){G(t)}else{B(t)}}else{Q(t)}return new C(t)}e=function(t,e,n){return ie({_i:t,_f:e,_l:n,_isUTC:false})}
e.utc=function(t,e,n){return ie({_useUTC:true,_isUTC:true,_l:n,_i:t,_f:e})}
e.unix=function(t){return e(t*1e3)}
e.duration=function(t,n){var i=e.isDuration(t),s=typeof t==="number",r=i?t._data:s?{}:t,a
if(s){if(n){r[n]=t}else{r.milliseconds=t}}a=new A(r)
if(i&&t.hasOwnProperty("_lang")){a._lang=t._lang}return a}
e.version=n
e.defaultFormat=g
e.lang=function(t,n){var i
if(!t){return e.fn._lang._abbr}if(n){E(t,n)}else if(!r[t]){J(t)}e.duration.fn._lang=e.fn._lang=J(t)}
e.langData=function(t){if(t&&t._lang&&t._lang._abbr){t=t._lang._abbr}return J(t)}
e.isMoment=function(t){return t instanceof C}
e.isDuration=function(t){return t instanceof A}
e.fn=C.prototype={clone:function(){return e(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._d},toJSON:function(){return e.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var t=this
return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()]},isValid:function(){if(this._isValid==null){if(this._a){this._isValid=!V(this._a,(this._isUTC?e.utc(this._a):e(this._a)).toArray())}else{this._isValid=!isNaN(this._d.getTime())}}return!!this._isValid},utc:function(){this._isUTC=true
return this},local:function(){this._isUTC=false
return this},format:function(t){var n=X(this,t||e.defaultFormat)
return this.lang().postformat(n)},add:function(t,n){var i
if(typeof t==="string"){i=e.duration(+n,t)}else{i=e.duration(t,n)}W(this,i,1)
return this},subtract:function(t,n){var i
if(typeof t==="string"){i=e.duration(+n,t)}else{i=e.duration(t,n)}W(this,i,-1)
return this},diff:function(t,n,i){var s=this._isUTC?e(t).utc():e(t).local(),r=(this.zone()-s.zone())*6e4,a,u
if(n){n=n.replace(/s$/,"")}if(n==="year"||n==="month"){a=(this.daysInMonth()+s.daysInMonth())*432e5
u=(this.year()-s.year())*12+(this.month()-s.month())
u+=(this-e(this).startOf("month")-(s-e(s).startOf("month")))/a
if(n==="year"){u=u/12}}else{a=this-s-r
u=n==="second"?a/1e3:n==="minute"?a/6e4:n==="hour"?a/36e5:n==="day"?a/864e5:n==="week"?a/6048e5:a}return i?u:Z(u)},from:function(t,n){return e.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!n)},fromNow:function(t){return this.from(e(),t)},calendar:function(){var t=this.diff(e().startOf("day"),"days",true),n=t<-6?"sameElse":t<-1?"lastWeek":t<0?"lastDay":t<1?"sameDay":t<2?"nextDay":t<7?"nextWeek":"sameElse"
return this.format(this.lang().calendar(n,this))},isLeapYear:function(){var t=this.year()
return t%4===0&&t%100!==0||t%400===0},isDST:function(){return this.zone()<e([this.year()]).zone()||this.zone()<e([this.year(),5]).zone()},day:function(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay()
return t==null?e:this.add({d:t-e})},startOf:function(t){t=t.replace(/s$/,"")
switch(t){case"year":this.month(0)
case"month":this.date(1)
case"week":case"day":this.hours(0)
case"hour":this.minutes(0)
case"minute":this.seconds(0)
case"second":this.milliseconds(0)}if(t==="week"){this.day(0)}return this},endOf:function(t){return this.startOf(t).add(t.replace(/s?$/,"s"),1).subtract("ms",1)},isAfter:function(t,n){n=typeof n!=="undefined"?n:"millisecond"
return+this.clone().startOf(n)>+e(t).startOf(n)},isBefore:function(t,n){n=typeof n!=="undefined"?n:"millisecond"
return+this.clone().startOf(n)<+e(t).startOf(n)},isSame:function(t,n){n=typeof n!=="undefined"?n:"millisecond"
return+this.clone().startOf(n)===+e(t).startOf(n)},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return e.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(t){var n=i((e(this).startOf("day")-e(this).startOf("year"))/864e5)+1
return t==null?n:this.add("d",t-n)},isoWeek:function(t){var e=ne(this,1,4)
return t==null?e:this.add("d",(t-e)*7)},week:function(t){var e=this.lang().week(this)
return t==null?e:this.add("d",(t-e)*7)},lang:function(e){if(e===t){return this._lang}else{this._lang=J(e)
return this}}}
function se(t,n){e.fn[t]=e.fn[t+"s"]=function(t){var e=this._isUTC?"UTC":""
if(t!=null){this._d["set"+e+n](t)
return this}else{return this._d["get"+e+n]()}}}for(s=0;s<v.length;s++){se(v[s].toLowerCase().replace(/s$/,""),v[s])}se("year","FullYear")
e.fn.days=e.fn.day
e.fn.weeks=e.fn.week
e.fn.isoWeeks=e.fn.isoWeek
e.duration.fn=A.prototype={weeks:function(){return Z(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months*2592e6},humanize:function(t){var e=+this,n=ee(e,!t,this.lang())
if(t){n=this.lang().pastFuture(e,n)}return this.lang().postformat(n)},lang:e.fn.lang}
function re(t){e.duration.fn[t]=function(){return this._data[t]}}function ae(t,n){e.duration.fn["as"+t]=function(){return+this/n}}for(s in k){if(k.hasOwnProperty(s)){ae(s,k[s])
re(s.toLowerCase())}}ae("Weeks",6048e5)
e.lang("en",{ordinal:function(t){var e=t%10,n=~~(t%100/10)===1?"th":e===1?"st":e===2?"nd":e===3?"rd":"th"
return t+n}})
if(a){module.exports=e}if(typeof ender==="undefined"){this["moment"]=e}if(typeof define==="function"&&define.amd){define("moment",[],function(){return e})}}).call(this)
this.moment = moment;
require("./min/lang/en.js");
});
KAdefine("third_party/javascript-khansrc/moment-khansrc/min/lang/en.js", function(require, module, exports) {
require("../../moment.js");
});
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../javascript/node_modules/jquery/index.js");
jQuery.effects||function($,e){var t="ui-effects-"
$.effects={effect:{}};(function(e,t){var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],s=e.Color=function(t,n,r,i){return new e.Color.fn.parse(t,n,r,i)},a={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},o={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},f=s.support={},u=e("<p>")[0],l,c=e.each
u.style.cssText="background-color:rgba(1,1,1,.5)"
f.rgba=u.style.backgroundColor.indexOf("rgba")>-1
c(a,function(e,t){t.cache="_"+e
t.props.alpha={idx:3,type:"percent",def:1}})
function d(e,t,n){var r=o[t.type]||{}
if(e==null){return n||!t.def?null:t.def}e=r.floor?~~e:parseFloat(e)
if(isNaN(e)){return t.def}if(r.mod){return(e+r.mod)%r.mod}return 0>e?0:r.max<e?r.max:e}function h(t){var n=s(),r=n._rgba=[]
t=t.toLowerCase()
c(i,function(e,i){var s,o=i.re.exec(t),f=o&&i.parse(o),u=i.space||"rgba"
if(f){s=n[u](f)
n[a[u].cache]=s[a[u].cache]
r=n._rgba=s._rgba
return false}})
if(r.length){if(r.join()==="0,0,0,0"){e.extend(r,l.transparent)}return n}return l[t]}s.fn=e.extend(s.prototype,{parse:function(n,r,i,o){if(n===t){this._rgba=[null,null,null,null]
return this}if(n.jquery||n.nodeType){n=e(n).css(r)
r=t}var f=this,u=e.type(n),p=this._rgba=[]
if(r!==t){n=[n,r,i,o]
u="array"}if(u==="string"){return this.parse(h(n)||l._default)}if(u==="array"){c(a.rgba.props,function(e,t){p[t.idx]=d(n[t.idx],t)})
return this}if(u==="object"){if(n instanceof s){c(a,function(e,t){if(n[t.cache]){f[t.cache]=n[t.cache].slice()}})}else{c(a,function(t,r){var i=r.cache
c(r.props,function(e,t){if(!f[i]&&r.to){if(e==="alpha"||n[e]==null){return}f[i]=r.to(f._rgba)}f[i][t.idx]=d(n[e],t,true)})
if(f[i]&&e.inArray(null,f[i].slice(0,3))<0){f[i][3]=1
if(r.from){f._rgba=r.from(f[i])}}})}return this}},is:function(e){var t=s(e),n=true,r=this
c(a,function(e,i){var s,a=t[i.cache]
if(a){s=r[i.cache]||i.to&&i.to(r._rgba)||[]
c(i.props,function(e,t){if(a[t.idx]!=null){n=a[t.idx]===s[t.idx]
return n}})}return n})
return n},_space:function(){var e=[],t=this
c(a,function(n,r){if(t[r.cache]){e.push(n)}})
return e.pop()},transition:function(e,t){var n=s(e),r=n._space(),i=a[r],f=this.alpha()===0?s("transparent"):this,u=f[i.cache]||i.to(f._rgba),l=u.slice()
n=n[i.cache]
c(i.props,function(e,r){var i=r.idx,s=u[i],a=n[i],f=o[r.type]||{}
if(a===null){return}if(s===null){l[i]=a}else{if(f.mod){if(a-s>f.mod/2){s+=f.mod}else if(s-a>f.mod/2){s-=f.mod}}l[i]=d((a-s)*t+s,r)}})
return this[r](l)},blend:function(t){if(this._rgba[3]===1){return this}var n=this._rgba.slice(),r=n.pop(),i=s(t)._rgba
return s(e.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return e==null?t>2?1:0:e})
if(n[3]===1){n.pop()
t="rgb("}return t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){if(e==null){e=t>2?1:0}if(t&&t<3){e=Math.round(e*100)+"%"}return e})
if(n[3]===1){n.pop()
t="hsl("}return t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),r=n.pop()
if(t){n.push(~~(r*255))}return"#"+e.map(n,function(e){e=(e||0).toString(16)
return e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}})
s.fn.parse.prototype=s.fn
function p(e,t,n){n=(n+1)%1
if(n*6<1){return e+(t-e)*n*6}if(n*2<1){return t}if(n*3<2){return e+(t-e)*(2/3-n)*6}return e}a.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null){return[null,null,null,e[3]]}var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),a=Math.min(t,n,r),o=s-a,f=s+a,u=f*.5,l,c
if(a===s){l=0}else if(t===s){l=60*(n-r)/o+360}else if(n===s){l=60*(r-t)/o+120}else{l=60*(t-n)/o+240}if(o===0){c=0}else if(u<=.5){c=o/f}else{c=o/(2-f)}return[Math.round(l)%360,c,u,i==null?1:i]}
a.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null){return[null,null,null,e[3]]}var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,a=2*r-s
return[Math.round(p(a,s,t+1/3)*255),Math.round(p(a,s,t)*255),Math.round(p(a,s,t-1/3)*255),i]}
c(a,function(n,i){var a=i.props,o=i.cache,f=i.to,u=i.from
s.fn[n]=function(n){if(f&&!this[o]){this[o]=f(this._rgba)}if(n===t){return this[o].slice()}var r,i=e.type(n),l=i==="array"||i==="object"?n:arguments,h=this[o].slice()
c(a,function(e,t){var n=l[i==="object"?e:t.idx]
if(n==null){n=h[t.idx]}h[t.idx]=d(n,t)})
if(u){r=s(u(h))
r[o]=h
return r}else{return s(h)}}
c(a,function(t,i){if(s.fn[t]){return}s.fn[t]=function(s){var a=e.type(s),o=t==="alpha"?this._hsla?"hsla":"rgba":n,f=this[o](),u=f[i.idx],l
if(a==="undefined"){return u}if(a==="function"){s=s.call(this,u)
a=e.type(s)}if(s==null&&i.empty){return this}if(a==="string"){l=r.exec(s)
if(l){s=u+parseFloat(l[2])*(l[1]==="+"?1:-1)}}f[i.idx]=s
return this[o](f)}})})
s.hook=function(t){var n=t.split(" ")
c(n,function(t,n){e.cssHooks[n]={set:function(t,r){var i,a,o=""
if(r!=="transparent"&&(e.type(r)!=="string"||(i=h(r)))){r=s(i||r)
if(!f.rgba&&r._rgba[3]!==1){a=n==="backgroundColor"?t.parentNode:t
while((o===""||o==="transparent")&&a&&a.style){try{o=e.css(a,"backgroundColor")
a=a.parentNode}catch(u){}}r=r.blend(o&&o!=="transparent"?o:"_default")}r=r.toRgbaString()}try{t.style[n]=r}catch(u){}}}
e.fx.step[n]=function(t){if(!t.colorInit){t.start=s(t.elem,n)
t.end=s(t.end)
t.colorInit=true}e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})}
s.hook(n)
e.cssHooks.borderColor={expand:function(e){var t={}
c(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e})
return t}}
l=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);(function(){var t=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1}
$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,t){$.fx.step[t]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr){jQuery.style(e.elem,t,e.end)
e.setAttr=true}}})
function r(e){var t,n,r=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,i={}
if(r&&r.length&&r[0]&&r[r[0]]){n=r.length
while(n--){t=r[n]
if(typeof r[t]==="string"){i[$.camelCase(t)]=r[t]}}}else{for(t in r){if(typeof r[t]==="string"){i[t]=r[t]}}}return i}function i(e,t){var r={},i,s
for(i in t){s=t[i]
if(e[i]!==s){if(!n[i]){if($.fx.step[i]||!isNaN(parseFloat(s))){r[i]=s}}}}return r}if(!$.fn.addBack){$.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}$.effects.animateClass=function(e,n,s,a){var o=$.speed(n,s,a)
return this.queue(function(){var n=$(this),s=n.attr("class")||"",a,f=o.children?n.find("*").addBack():n
f=f.map(function(){var e=$(this)
return{el:e,start:r(this)}})
a=function(){$.each(t,function(t,r){if(e[r]){n[r+"Class"](e[r])}})}
a()
f=f.map(function(){this.end=r(this.el[0])
this.diff=i(this.start,this.end)
return this})
n.attr("class",s)
f=f.map(function(){var e=this,t=$.Deferred(),n=$.extend({},o,{queue:false,complete:function(){t.resolve(e)}})
this.el.animate(this.diff,n)
return t.promise()})
$.when.apply($,f.get()).done(function(){a()
$.each(arguments,function(){var e=this.el
$.each(this.diff,function(t){e.css(t,"")})})
o.complete.call(n[0])})})}
$.fn.extend({_addClass:$.fn.addClass,addClass:function(e,t,n,r){return t?$.effects.animateClass.call(this,{add:e},t,n,r):this._addClass(e)},_removeClass:$.fn.removeClass,removeClass:function(e,t,n,r){return arguments.length>1?$.effects.animateClass.call(this,{remove:e},t,n,r):this._removeClass.apply(this,arguments)},_toggleClass:$.fn.toggleClass,toggleClass:function(t,n,r,i,s){if(typeof n==="boolean"||n===e){if(!r){return this._toggleClass(t,n)}else{return $.effects.animateClass.call(this,n?{add:t}:{remove:t},r,i,s)}}else{return $.effects.animateClass.call(this,{toggle:t},n,r,i)}},switchClass:function(e,t,n,r,i){return $.effects.animateClass.call(this,{add:t,remove:e},n,r,i)}})})();(function(){$.extend($.effects,{version:"1.10.1",save:function(e,n){for(var r=0;r<n.length;r++){if(n[r]!==null){e.data(t+n[r],e[0].style[n[r]])}}},restore:function(n,r){var i,s
for(s=0;s<r.length;s++){if(r[s]!==null){i=n.data(t+r[s])
if(i===e){i=""}n.css(r[s],i)}}},setMode:function(e,t){if(t==="toggle"){t=e.is(":hidden")?"show":"hide"}return t},getBaseline:function(e,t){var n,r
switch(e[0]){case"top":n=0
break
case"middle":n=.5
break
case"bottom":n=1
break
default:n=e[0]/t.height}switch(e[1]){case"left":r=0
break
case"center":r=.5
break
case"right":r=1
break
default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper")){return e.parent()}var t={width:e.outerWidth(true),height:e.outerHeight(true),"float":e.css("float")},n=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),r={width:e.width(),height:e.height()},i=document.activeElement
try{i.id}catch(s){i=document.body}e.wrap(n)
if(e[0]===i||$.contains(e[0],i)){$(i).focus()}n=e.parent()
if(e.css("position")==="static"){n.css({position:"relative"})
e.css({position:"relative"})}else{$.extend(t,{position:e.css("position"),zIndex:e.css("z-index")})
$.each(["top","left","bottom","right"],function(n,r){t[r]=e.css(r)
if(isNaN(parseInt(t[r],10))){t[r]="auto"}})
e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}e.css(r)
return n.css(t).show()},removeWrapper:function(e){var t=document.activeElement
if(e.parent().is(".ui-effects-wrapper")){e.parent().replaceWith(e)
if(e[0]===t||$.contains(e[0],t)){$(t).focus()}}return e},setTransition:function(e,t,n,r){r=r||{}
$.each(t,function(t,i){var s=e.cssUnit(i)
if(s[0]>0){r[i]=s[0]*n+s[1]}})
return r}})
function n(e,t,n,r){if($.isPlainObject(e)){t=e
e=e.effect}e={effect:e}
if(t==null){t={}}if($.isFunction(t)){r=t
n=null
t={}}if(typeof t==="number"||$.fx.speeds[t]){r=n
n=t
t={}}if($.isFunction(n)){r=n
n=null}if(t){$.extend(e,t)}n=n||t.duration
e.duration=$.fx.off?0:typeof n==="number"?n:n in $.fx.speeds?$.fx.speeds[n]:$.fx.speeds._default
e.complete=r||t.complete
return e}function r(e){if(!e||typeof e==="number"||$.fx.speeds[e]){return true}return typeof e==="string"&&!$.effects.effect[e]}$.fn.extend({effect:function(){var e=n.apply(this,arguments),t=e.mode,r=e.queue,i=$.effects.effect[e.effect]
if($.fx.off||!i){if(t){return this[t](e.duration,e.complete)}else{return this.each(function(){if(e.complete){e.complete.call(this)}})}}function s(t){var n=$(this),r=e.complete,s=e.mode
function a(){if($.isFunction(r)){r.call(n[0])}if($.isFunction(t)){t()}}if(n.is(":hidden")?s==="hide":s==="show"){a()}else{i.call(n[0],e,a)}}return r===false?this.each(s):this.queue(r||"fx",s)},_show:$.fn.show,show:function(e){if(r(e)){return this._show.apply(this,arguments)}else{var t=n.apply(this,arguments)
t.mode="show"
return this.effect.call(this,t)}},_hide:$.fn.hide,hide:function(e){if(r(e)){return this._hide.apply(this,arguments)}else{var t=n.apply(this,arguments)
t.mode="hide"
return this.effect.call(this,t)}},__toggle:$.fn.toggle,toggle:function(e){if(r(e)||typeof e==="boolean"||$.isFunction(e)){return this.__toggle.apply(this,arguments)}else{var t=n.apply(this,arguments)
t.mode="toggle"
return this.effect.call(this,t)}},cssUnit:function(e){var t=this.css(e),n=[]
$.each(["em","px","%","pt"],function(e,r){if(t.indexOf(r)>0){n=[parseFloat(t),r]}})
return n}})})();(function(){var e={}
$.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,n){e[n]=function(e){return Math.pow(e,t+2)}})
$.extend(e,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4
while(e<((t=Math.pow(2,--n))-1)/11){}return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}})
$.each(e,function(e,t){$.easing["easeIn"+e]=t
$.easing["easeOut"+e]=function(e){return 1-t(1-e)}
$.easing["easeInOut"+e]=function(e){return e<.5?t(e*2)/2:1-t(e*-2+2)/2}})})()}(jQuery)
});
