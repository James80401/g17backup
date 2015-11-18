KAdefine("javascript/topic-package/mission-upsell.jsx", function(require, module, exports) {
var React=require("react")
var $_=require("../shared-package/i18n.js").$_
var CircularProgressIcon=require("../dashboard-package/circular-progress-icon.jsx")
var KA=require("../shared-package/ka.js")
var KUIButton=require("../react-package/kui/button.jsx")
var formatTitleForSentence=require("./formatting-utils.js").formatTitleForSentence
var i18n=require("../shared-package/i18n.js")
var launchSignupInModal=require("../shared-package/launch-signup-in-modal.js")
var PropTypes=React.PropTypes
var MissionUpsell=React.createClass({displayName:"MissionUpsell",propTypes:{progress:PropTypes.array,title:PropTypes.string.isRequired,url:PropTypes.string.isRequired,userType:PropTypes.oneOf(["phantom","started","unstarted"]).isRequired},getInitialState:function(){return{expanded:false}},toggleExpand:function(e){this.setState({expanded:!this.state.expanded})
e.stopPropagation()},redirect:function(e){e.preventDefault()
if(this.props.userType==="phantom"&&!KA.isMobileCapable){launchSignupInModal()}else{window.location=this.props.url}},render:function(){var e=this.state.expanded
var t=this.props
var a=t.progress
var r=t.title
var s=t.url
var i=t.userType
var n=formatTitleForSentence(r)
var o={phantom:$_({formattedTitle:n},"Want a personalized %(formattedTitle)s experience?"),unstarted:$_({formattedTitle:n},"Try out our %(formattedTitle)s mission!"),started:$_({formattedTitle:n},"Continue your %(formattedTitle)s mission")}[i]
var l={phantom:$_(null,"Sign up to get started"),unstarted:$_(null,"Get started"),started:$_(null,"Resume")}[i]
var c=learnMore.map(function(e,t){return React.createElement("li",{className:"mission-explanation-item",key:t},React.createElement("img",{className:"mission-explanation-icon",src:"/images/mission-explanation/"+e.imageName+"-icon.svg"}),React.createElement("div",{className:"item-text"},React.createElement("h3",{className:"topic-title"},e.title),React.createElement("p",{className:"topic-description-text"},e.content)))})
return React.createElement("div",{className:e?"expanded":""},React.createElement("div",{className:"mission-upsell-banner",onClick:this.redirect},i==="started"?React.createElement(CircularProgressIcon,{className:"icon-with-progress",dashboardOptions:{},fontSize:22,progress:a,radius:45}):"",React.createElement("div",{className:"topic-info"},React.createElement("h2",{className:"topic-title"},o,i==="started"?React.createElement("i",{className:"icon-chevron-right"}):""),i!=="started"?React.createElement(KUIButton,{type:"submit",href:s,label:l,width:"240px",use:i==="phantom"?"primary":"secondary",progress:"complete",borderless:true,shadow:false,transparent:false,disabled:false,size:"normal"}):"",React.createElement("button",{onClick:this.toggleExpand,className:"learn-more"},e?$_(null,"Show less"):$_(null,"What's a mission?")))),React.createElement("ul",{className:"mission-upsell-explanation"},c))}})
var learnMore=[{imageName:"list",title:i18n._("Get started with a mission warm-up"),content:i18n._("First you'll do a few math problems to help us"+" figure out where we should start. Don't worry if you"+" don't know something, we'll help you learn it later.")},{imageName:"graph",title:i18n._("Practice at your own pace"),content:i18n._("Your mission dashboard will give you tailored"+" recommendations on what to learn next. You can follow"+" these or choose different skills to practice. Either"+" way, we'll keep track of your progress.")},{imageName:"aqualine",title:i18n._("Retain knowledge with mastery challenges"),content:i18n._("Mastery challenges mix skills you've practiced"+" in the past to help you remember what you've already"+" learned. They're also a great way to earn more points,"+" badges, and avatars.")}]
module.exports=MissionUpsell
});
KAdefine("javascript/dashboard-package/segmented-progress-ring.jsx", function(require, module, exports) {
var React=require("react")
var ReactART=require("react-art")
var _=require("underscore")
var Group=ReactART.Group
var Path=ReactART.Path
var Shape=ReactART.Shape
var TAU=Math.PI*2
var maxLengthIncrease=.04*TAU
var skillColors={practiced:"#9cdceb",mastery1:"#58c4dd",mastery2:"#29abca",mastery3:"#1c758a"}
var skillLevels=["mastery3","mastery2","mastery1","practiced"]
var arcBetweenAngles=function(e,r,a){var t=1e-5
if(Math.abs(r-e-TAU)<t){return circlePath(a)}var s={x:a*Math.cos(e),y:a*Math.sin(e)}
var n={x:a*Math.cos(r),y:a*Math.sin(r)}
return(new Path).moveTo(s.x,s.y).arcTo(n.x,n.y,a,a,r-e>TAU/2)}
var circlePath=function(e){return(new Path).moveTo(0,-e).arcTo(0,e,e,e,true).arcTo(0,-e,e,e,true).close()}
var SegmentedProgressRing=React.createClass({displayName:"SegmentedProgressRing",propTypes:{percents:React.PropTypes.object,levelsToPulse:React.PropTypes.array,t:React.PropTypes.number,radius:React.PropTypes.number,arcWidth:React.PropTypes.number},getDefaultProps:function(){return{radius:70,arcWidth:10}},getInitialState:function(){return{maxArcWidth:2*this.props.arcWidth}},getArcDataPerLevel:function(){var e=this.props.percents
var r=this.props.levelsToPulse
var a=this.props.t
var t=this.props.arcWidth
var s=this.state.maxArcWidth
var n=-TAU/4
var i
var c={}
skillLevels.forEach(function(l){var o={}
var v=e[l]?TAU*e[l]:0
i=Math.min(3*TAU/4,n+v)
if(_.contains(r,l)){var p=1-2*Math.abs(a-.5)
o.width=t+(s-t)*p
o.angleStart=n-p*maxLengthIncrease
o.angleEnd=i+p*maxLengthIncrease}else{o.width=t
o.angleStart=n
o.angleEnd=i}c[l]=o
n=i})
if(this.props.levelsToPulse){this.adjustOverlappingArcs(c)}return c},adjustOverlappingArcs:function(e){var r=this.props.levelsToPulse
if(r.length===1){var a=r[0]
var t=e[a].angleStart
var s=e[a].angleEnd
if(s>t+TAU){e[a].angleEnd=t+TAU}return}for(var n=0;n<r.length;n++){var a=r[n]
var s=e[a].angleEnd
var i,c
if(n===r.length-1){i=r[0]
c=e[a].angleStart
if(c>=0){continue}c+=TAU}else{i=r[n+1]
c=e[i].angleStart}if(s>c){var l=(s-c)/2
e[a].angleEnd-=l
e[a].angleStart+=l}}return e},getArcs:function(){var e=this.getArcDataPerLevel()
var r=this.props.levelsToPulse
var a=this.props.radius
var t=this.props.arcWidth
var s=[]
skillLevels.forEach(function(n){var i=e[n]
var c=a-t
var l=arcBetweenAngles(i.angleStart,i.angleEnd,c)
var o=React.createElement(Shape,{stroke:skillColors[n],strokeWidth:i.width,strokeCap:"butt",d:l,key:n})
if(_.contains(r,n)){s.push(o)}else{s.unshift(o)}})
return s},render:function(){var e=null
if(this.props.percents){e=this.getArcs()}return React.createElement(Group,null,e)}})
module.exports=SegmentedProgressRing
});
KAdefine("javascript/dashboard-package/circular-progress-icon.jsx", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
var ReactART=require("react-art")
var _=require("underscore")
var i18n=require("../shared-package/i18n.js")
require("../shared-package/request-animation-frame.js")
var ExerciseProgressUtils=require("../mobile-shared-package/exercise-progress-utils.js")
var SegmentedProgressRing=require("./segmented-progress-ring.jsx")
var Group=ReactART.Group
var Path=ReactART.Path
var Shape=ReactART.Shape
var Surface=ReactART.Surface
var Text=ReactART.Text
var Pattern=ReactART.Pattern
var initialArcWidth=10
var maxRingLoadDuration=2500
var ringUpdateDuration=400
var pulseDuration=1e3
var skillColors={practiced:"#9cdceb",mastery1:"#58c4dd",mastery2:"#29abca",mastery3:"#1c758a"}
var skillLevels=["mastery3","mastery2","mastery1","practiced"]
var circlePath=function(e){return(new Path).moveTo(0,-e).arcTo(0,e,e,e,true).arcTo(0,-e,e,e,true).close()}
var sum=function(e){return _.reduce(e,function(e,t){return e+t},0)}
var PercentageText=React.createClass({displayName:"PercentageText",render:function(){var e=this.props.fontSize
return React.createElement(Text,babelHelpers._extends({},this.props,{font:"normal "+e+"px 'Proxima Nova', sans-serif",fill:skillColors["mastery3"],alignment:"center",y:this.props.y-e/2}))}})
var ProgressLabel=React.createClass({displayName:"ProgressLabel",render:function(){var e=this.props.fontSize
return React.createElement(Text,babelHelpers._extends({},this.props,{font:"normal "+e+"px 'Proxima Nova', sans-serif",fill:skillColors["mastery3"],alignment:"center",y:this.props.y-e/2}),i18n._("progress"))}})
var CircularProgressIcon=React.createClass({displayName:"CircularProgressIcon",propTypes:{className:React.PropTypes.string,fontSize:React.PropTypes.number,progress:React.PropTypes.array.isRequired,radius:React.PropTypes.number,style:React.PropTypes.object,iconUrl:React.PropTypes.string},getDefaultProps:function(){return{fontSize:32,radius:70,style:{}}},getInitialState:function(){return{t:0,startTime:0,duration:maxRingLoadDuration}},componentDidUpdate:function(e,t){if(this.state.isPulsing&&this.state.t>=1){this.setState({isPulsing:false})}},componentDidMount:function(){this.isUpdatingRing=true
var e=ExerciseProgressUtils.getCountPerLevel(this.props.progress)
var t=sum(_.values(e))
var r=(t-e["unstarted"])/t*maxRingLoadDuration
this.setState({startTime:Date.now(),duration:r},this.animateProgressRing)},componentWillReceiveProps:function(e){if(!this.finishedInitialAnimation){return}var t=this.drawnCountsPerLevel
var r=ExerciseProgressUtils.getCountPerLevel(e.progress)
var s=_.filter(skillLevels,function(e){return t[e]<r[e]})
if(s.length){this.isUpdatingRing=true
this.setState({startTime:Date.now(),t:0,duration:ringUpdateDuration},this.animateProgressRing)
this.setState({increasedLevels:s},this.pulseArcs)}},render:function(){var e=this.props.fontSize
var t=this.props.radius
var r=[]
if(this.state.isPulsing){r=this.state.increasedLevels}var s=null
if(this.props.iconUrl){var a=t*.7
s=React.createElement(Shape,{fill:new Pattern(this.props.iconUrl,a*2,a*2,-a,-a),d:circlePath(a)})}else{s=[React.createElement(PercentageText,{key:"text",x:0,y:-e/4,fontSize:e},ExerciseProgressUtils.getProgressPercentage(ExerciseProgressUtils.getCountPerLevel(this.props.progress))+"%"),React.createElement(ProgressLabel,{key:"label",x:0,y:e/2,fontSize:e/2})]}var i="mission-progress-icon"
if(this.props.className){i+=" "+this.props.className}return React.createElement("div",{className:i},React.createElement(Surface,{className:"icon-surface",style:this.props.style,width:2*t,height:2*t},React.createElement(Group,{x:t,y:t},React.createElement(Shape,{fill:"#fff",stroke:"#ddd",strokeWidth:initialArcWidth,d:circlePath(t-initialArcWidth)}),React.createElement(SegmentedProgressRing,{radius:t,arcWidth:initialArcWidth,percents:this.getLevelPercents(),levelsToPulse:r,t:this.state.t}),s)))},getLevelPercents:function(){var e=ExerciseProgressUtils.getCountPerLevel(this.props.progress)
var t=sum(_.values(e))
if(this.state.t>=1){this.drawnCountsPerLevel=e
this.isUpdatingRing=false
this.finishedInitialAnimation=true
var r={}
skillLevels.forEach(function(s){r[s]=e[s]/t})
return r}if(this.finishedInitialAnimation){return this.updateRingPercents(e,t)}else{return this.getInitialRingPercents(e,t)}},getInitialRingPercents:function(e,t){var r=t-e["unstarted"]
var s={}
var a=0
var i=this.state.t
for(var n=skillLevels.length-1;n>=0;n--){var o=skillLevels[n]
if(a+e[o]>i*r){s[o]=(i*r-a)/t
break}s[o]=e[o]/t
a+=e[o]}return s},updateRingPercents:function(e,t){var r=this.drawnCountsPerLevel
var s=_.max(skillLevels.map(function(t){return Math.abs(e[t]-r[t])}))
var a=s*this.state.t
var i={}
skillLevels.forEach(function(s){if(r[s]<e[s]){i[s]=Math.min(r[s]+a,e[s])}else if(r[s]>e[s]){i[s]=Math.max(r[s]-a,e[s])}else{i[s]=e[s]}i[s]=i[s]/t})
return i},pulseArcs:function(){if(this.isUpdatingRing){setTimeout(this.pulseArcs,500)
return}this.setState({isPulsing:true,startTime:Date.now(),t:0,duration:pulseDuration},this.animateProgressRing)},animateProgressRing:function(){if(this.state.t>=1){return}var e=this
window.requestAnimationFrame(function(){var t=(Date.now()-e.state.startTime)/e.state.duration
t=Math.min(Math.max(0,t),1)
if(e.isMounted()){e.setState({t:$.easing.swing(t)},e.animateProgressRing)}})}})
module.exports=CircularProgressIcon
});
KAdefine("javascript/topic-package/subject-page.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,e,a,i,l){a=a||n.helpers
var s="",o,t,r,c,f=this,p="function",h=a.helperMissing,u=void 0,d=this.escapeExpression,m=a.blockHelperMissing
function g(n,e){var i="",l,s
i+='\n        <div class="subject-container '
r=a.domainInfo
l=r||n.domainInfo
l=l===null||l===undefined||l===false?l:l.identifier
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"domainInfo.identifier",{hash:{}})}i+=d(l)+" "
r=a.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.slug
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topic.slug",{hash:{}})}i+=d(l)+'">\n            '
r=a.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.logoImageUrl
s=a["if"]
c=f.program(2,v,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=s.call(n,l,c)
if(l||l===0){i+=l}i+='\n            <div class="subject-container-inner">\n                <div class="subject-info">\n                    '
r=a.linkToDomain
l=r||n.linkToDomain
s=a["if"]
c=f.program(4,b,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=s.call(n,l,c)
if(l||l===0){i+=l}i+="\n                    "
r=a.topic
l=r||n.topic
s=a["with"]
c=f.program(6,y,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=s.call(n,l,c)
if(l||l===0){i+=l}i+="\n                    "
r=a.isComputerProgramming
l=r||n.isComputerProgramming
s=a["if"]
c=f.program(17,_,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=s.call(n,l,c)
if(l||l===0){i+=l}i+="\n                    "
r=a.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.backgroundImageUrl
s=a["if"]
c=f.program(28,D,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=s.call(n,l,c)
if(l||l===0){i+=l}i+="\n\n                    "
i+="\n                    "
r=a.hasUserAuthoredContentTypes
l=r||n.hasUserAuthoredContentTypes
s=a["if"]
c=f.program(32,R,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=s.call(n,l,c)
if(l||l===0){i+=l}i+="\n\n                    "
r=a.hasPeerReviewedProjects
l=r||n.hasPeerReviewedProjects
s=a["if"]
c=f.program(37,W,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=s.call(n,l,c)
if(l||l===0){i+=l}i+="\n\n                    "
r=a.isCoachResources
l=r||n.isCoachResources
s=a["if"]
c=f.program(40,M,e)
c.hash={}
c.fn=c
c.inverse=f.program(43,B,e)
l=s.call(n,l,c)
if(l||l===0){i+=l}i+="\n\n                    "
r=a.isComputerScience
l=r||n.isComputerScience
s=a["if"]
c=f.program(46,J,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=s.call(n,l,c)
if(l||l===0){i+=l}i+="\n\n                </div>\n            </div>\n        </div>\n        "
return i}function v(n,e){var i="",l
i+='\n                <div class="subject-logo">\n                    <h1>\n                        <img src="'
r=a.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.logoImageUrl
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topic.logoImageUrl",{hash:{}})}i+=d(l)+'" alt="'
r=a.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.translatedTitle
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topic.translatedTitle",{hash:{}})}i+=d(l)+'"/>\n                    </h1>\n                </div>\n            '
return i}function b(n,e){var i="",l
i+='\n                    <div class="subject-breadcrumb">\n                        <a href="/'
r=a.domainInfo
l=r||n.domainInfo
l=l===null||l===undefined||l===false?l:l.identifier
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"domainInfo.identifier",{hash:{}})}i+=d(l)+'">\n                            <i class="icon-caret-left"></i>'
r=a.domainInfo
l=r||n.domainInfo
l=l===null||l===undefined||l===false?l:l.translatedTitle
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"domainInfo.translatedTitle",{hash:{}})}i+=d(l)+"</a>\n                    </div>\n                    "
return i}function y(n,e){var i="",l,s
i+="\n                        "
r=a.logoImageUrl
l=r||n.logoImageUrl
s=a.unless
c=f.program(7,w,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=s.call(n,l,c)
if(l||l===0){i+=l}i+='\n                        <div class="subject-description">'
r=a.translatedDescription
l=r||n.translatedDescription
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"translatedDescription",{hash:{}})}i+=d(l)+'</div>\n\n                        <div class="subject-page-links">\n                            '
r=a.webUrl
l=r||n.webUrl
s=a["if"]
c=f.program(9,j,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=s.call(n,l,c)
if(l||l===0){i+=l}i+="\n                            "
r=a.facebookUrl
l=r||n.facebookUrl
s=a["if"]
c=f.program(11,k,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=s.call(n,l,c)
if(l||l===0){i+=l}i+="\n                            "
r=a.twitterUrl
l=r||n.twitterUrl
s=a["if"]
c=f.program(13,I,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=s.call(n,l,c)
if(l||l===0){i+=l}i+="\n                            "
r=a.gplusUrl
l=r||n.gplusUrl
s=a["if"]
c=f.program(15,U,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=s.call(n,l,c)
if(l||l===0){i+=l}i+="\n                        </div>\n                    "
return i}function w(n,e){var i="",l
i+='\n                            <h1 class="subject-title">'
r=a.translatedTitle
l=r||n.translatedTitle
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"translatedTitle",{hash:{}})}i+=d(l)+"</h1>\n                        "
return i}function j(n,e){var i="",l
i+='<a href="'
r=a.webUrl
l=r||n.webUrl
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"webUrl",{hash:{}})}i+=d(l)+'"><i class="icon-home icon-fixed-width"></i></a>'
return i}function k(n,e){var i="",l
i+='<a href="'
r=a.facebookUrl
l=r||n.facebookUrl
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"facebookUrl",{hash:{}})}i+=d(l)+'"><i class="icon-facebook icon-fixed-width"></i></a>'
return i}function I(n,e){var i="",l
i+='<a href="'
r=a.twitterUrl
l=r||n.twitterUrl
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"twitterUrl",{hash:{}})}i+=d(l)+'"><i class="icon-twitter icon-fixed-width"></i></a>'
return i}function U(n,e){var i="",l
i+='<a href="'
r=a.gplusUrl
l=r||n.gplusUrl
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"gplusUrl",{hash:{}})}i+=d(l)+'"><i class="icon-google-plus icon-fixed-width"></i></a>'
return i}function _(n,e){var i="",l
i+='\n                        <div class="cs-subject-custom-area-wrapper">\n                            <a class="subject-page-special-link" href="/computer-programming/new/pjs">\n                                <i class="icon-plus"></i>'
r=a["_"]
l=r||n["_"]
c=f.program(18,T,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){i+=l}i+='\n                            </a>\n                            <a class="new-program-subject-link subject-page-special-link" href="/computer-programming/new/pjs">\n                                '
r=a["_"]
l=r||n["_"]
c=f.program(20,S,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){i+=l}i+='\n                            </a>\n                            <a class="new-program-subject-link subject-page-special-link" href="/computer-programming/new/webpage">\n                                '
r=a["_"]
l=r||n["_"]
c=f.program(22,x,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){i+=l}i+='\n                            </a>\n                            <a class="new-program-subject-link subject-page-special-link" href="/computer-programming/new/sql">\n                                '
r=a["_"]
l=r||n["_"]
c=f.program(24,C,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){i+=l}i+='\n                            </a>\n\n                            <a class="browse-programs-subject-link subject-page-special-link" href="/'
r=a.extendedSlug
l=r||n.extendedSlug
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"extendedSlug",{hash:{}})}i+=d(l)+'/browse">\n                                <i class="icon-th"></i><span> '
r=a["_"]
l=r||n["_"]
c=f.program(26,P,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){i+=l}i+='</span>\n                                <div class="browse-programs-thumbs-outer-container">\n                                    <div class="browse-programs-thumbs"></div>\n                                </div>\n                            </a>\n                        </div>\n                    '
return i}function T(n,e){return"Create:"}function S(n,e){return"New Program (JS + ProcessingJS)"}function x(n,e){return"New Webpage"}function C(n,e){return"New SQL script"}function P(n,e){return"Browse Projects"}function D(n,e){var i="",l,s
i+="\n                        "
r=a.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.backgroundImageCaption
s=a["if"]
c=f.program(29,A,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=s.call(n,l,c)
if(l||l===0){i+=l}i+="\n                    "
return i}function A(n,e){var i="",l
i+='\n                            <a\n                                class="subject-image-caption subject-page-special-link"\n                                title="'
r=a.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.backgroundImageCaption
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topic.backgroundImageCaption",{hash:{}})}i+=d(l)+'"\n                                data-domain="'
r=a.domainInfo
l=r||n.domainInfo
l=l===null||l===undefined||l===false?l:l.identifier
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"domainInfo.identifier",{hash:{}})}i+=d(l)+'"\n                                href="javascript:void(0);">\n                                <i class="icon-picture"></i> <span>'
r=a["_"]
l=r||n["_"]
c=f.program(30,N,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){i+=l}i+="</span>\n                            </a>\n                        "
return i}function N(n,e){return"About Image"}function R(n,e){var i="",l
i+='\n                    <div class="user-authored-content-area-wrapper">\n                        <a class="my-programs-subject-link subject-page-special-link" href="javascript:void(0)" style="display:none;">\n                            <i class="icon-user"></i> '
r=a["_"]
l=r||n["_"]
c=f.program(33,q,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){i+=l}i+='\n                        </a>\n                        <a class="projectfeedback-link subject-page-special-link" href="/'
r=a.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.extendedSlug
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topic.extendedSlug",{hash:{}})}i+=d(l)+'/projectfeedback">\n                            <i class="icon-question"></i> '
r=a["_"]
l=r||n["_"]
c=f.program(35,L,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){i+=l}i+="\n                        </a>\n                    </div>\n                    "
return i}function q(n,e){return"My Projects"}function L(n,e){return"Help Requests"}function W(n,e){var i="",l
i+='\n                    <a class="projectfeedback-link subject-page-special-link" href="/'
r=a.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.extendedSlug
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topic.extendedSlug",{hash:{}})}i+=d(l)+'/projectfeedback?fromsubjectpage#projecteval">\n                        <i class="icon-list-alt"></i> '
r=a["_"]
l=r||n["_"]
c=f.program(38,H,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){i+=l}i+="\n                    </a>\n                    "
return i}function H(n,e){return"Project Evaluations"}function M(n,e){var i="",l
i+='\n                    <a class="subject-page-special-link" href="https://khanacademy.zendesk.com/hc/en-us/categories/200175820-For-Teachers">\n                        <i class="icon-comments"></i> '
r=a["_"]
l=r||n["_"]
c=f.program(41,Q,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){i+=l}i+="\n                    </a>\n                    "
return i}function Q(n,e){return"Community Questions"}function B(n,e){var i="",l
i+='\n                    <a class="community-questions-link subject-page-special-link" href="/'
r=a.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.extendedSlug
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topic.extendedSlug",{hash:{}})}i+=d(l)+'/d">\n                        <i class="icon-comments"></i> '
r=a["_"]
l=r||n["_"]
c=f.program(44,E,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){i+=l}i+="\n                    </a>\n                    "
return i}function E(n,e){return"Community Questions"}function J(n,e){var i="",l
i+='\n                    <br>\n                    <div class="subject-description">\n                        <img src="/images/domains/computer-programming.png"\n                             style="float: left;width: 80px;margin-right: 10px;">\n                        '
r=a["_"]
l=r||n["_"]
c=f.program(47,z,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){i+=l}i+="\n                    </div>\n                    "
return i}function z(n,e){return'Did you know? You can learn how to program\n                        on Khan Academy and create your own programs.\n                        Go to our\n                        <a href="/computer-programming">computer programming</a>\n                        subject to get started.'}function F(n,e){var i="",l
i+='\n            <div class="partnership-text content-page">\n                <span class="partnership-label">'
r=a["_"]
l=r||n["_"]
c=f.program(50,G,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){i+=l}i+='</span>\n                <img class="partnership-logo" src="/images/sat/cb-logo.svg" alt="'
r=a.i18nDoNotTranslate
l=r||n.i18nDoNotTranslate
c=f.program(52,K,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){i+=l}i+='">\n            </div>\n        '
return i}function G(n,e){return"In partnership with"}function K(n,e){return"CollegeBoard"}function Y(n,e,i){var l="",s,o
l+='\n            <div class="topic-list-separator"></div>\n            <a href="/'
r=a.extendedSlug
s=r||n.extendedSlug
if(typeof s===p){s=s.call(n,{hash:{}})}else if(s===u){s=h.call(n,"extendedSlug",{hash:{}})}l+=d(s)+'" class="topic-list-item">\n                '
r=a.showTopicIconAndProgress
s=r||n.showTopicIconAndProgress
o=a["if"]
c=f.program(55,O,e)
c.hash={}
c.fn=c
c.inverse=f.program(57,V,e)
s=o.call(n,s,c)
if(s||s===0){l+=s}l+='\n                <div class="topic-info">\n                    <h2 class="topic-title">'
r=a.translatedTitle
s=r||n.translatedTitle
if(typeof s===p){s=s.call(n,{hash:{}})}else if(s===u){s=h.call(n,"translatedTitle",{hash:{}})}l+=d(s)+'</h2>\n                    <div class="topic-description">\n                        '
r=a.compactIconSrc
s=r||n.compactIconSrc
o=a["if"]
c=f.program(60,Z,e)
c.hash={}
c.fn=c
c.inverse=f.noop
s=o.call(n,s,c)
if(s||s===0){l+=s}l+='\n                        <div class="topic-description-text">\n                            '
r=a.translatedDescription
s=r||n.translatedDescription
if(typeof s===p){s=s.call(n,{hash:{}})}else if(s===u){s=h.call(n,"translatedDescription",{hash:{}})}l+=d(s)+"\n                        </div>\n                    </div>\n                </div>\n            </a>\n            "
r=a.topicInfo
s=r||i.topicInfo
s=s===null||s===undefined||s===false?s:s.seoSubjectTutorialLinks
o=a["if"]
c=f.program(62,ne,e)
c.hash={}
c.fn=c
c.inverse=f.noop
s=o.call(n,s,c)
if(s||s===0){l+=s}l+="\n            "
return l}function O(n,e){var i="",l
i+='\n                <div class="icon-with-progress" data-domain-slug="'
r=a.domainInfo
l=r||n.domainInfo
l=l===null||l===undefined||l===false?l:l.identifier
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"domainInfo.identifier",{hash:{}})}i+=d(l)+'" data-slug="'
r=a.slug
l=r||n.slug
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"slug",{hash:{}})}i+=d(l)+'" data-icon-url="'
r=a.thumbnailUrl
l=r||n.thumbnailUrl
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"thumbnailUrl",{hash:{}})}i+=d(l)+'">\n                    '
i+="\n                </div>\n                "
return i}function V(n,e){var i="",l
i+='\n                <div class="thumb">\n                    '
i+='\n                    <img width="120" height="90" src="'
r=a.thumbnailUrl
l=r||n.thumbnailUrl
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"thumbnailUrl",{hash:{}})}i+=d(l)+'" alt="'
r=a["_"]
l=r||n["_"]
c=f.program(58,X,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){i+=l}i+='">\n                </div>\n                '
return i}function X(n,e){var i="",l
i+="A thumbnail for: "
r=a.translatedTitle
l=r||n.translatedTitle
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"translatedTitle",{hash:{}})}i+=d(l)
return i}function Z(n,e){var i="",l
i+='\n                            <img class="topic-icon" src="'
r=a.compactIconSrc
l=r||n.compactIconSrc
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"compactIconSrc",{hash:{}})}i+=d(l)+'" width="60" height="60">\n                        '
return i}function ne(n,e){var i="",l,s,o
i+="\n            <ul class='subject-tutorial-links'>\n            "
r=a.tutorials
l=r||n.tutorials
s=6
r=a.eachWithLimit
o=r||n.eachWithLimit
c=f.program(63,ee,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof o===p){l=o.call(n,s,l,c)}else{l=m.call(n,o,s,l,c)}if(l||l===0){i+=l}i+="\n            </ul>\n            "
return i}function ee(n,e){var i="",l
i+='\n                <li><a href="'
r=a.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.kaUrl
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topic.kaUrl",{hash:{}})}i+=d(l)+'" class="subject-tutorial-link">'
r=a.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.translatedTitle
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topic.translatedTitle",{hash:{}})}i+=d(l)+"</a></li>\n            "
return i}s+='<div class="row-fluid">\n    <div class="subject-outer-container">\n        '
r=a.topicInfo
o=r||e.topicInfo
t=a["with"]
c=f.program(1,g,l)
c.hash={}
c.fn=c
c.inverse=f.noop
o=t.call(e,o,c)
if(o||o===0){s+=o}s+='\n    </div>\n    <div class="subject-children-outer-container">\n        '
r=a.topicInfo
o=r||e.topicInfo
o=o===null||o===undefined||o===false?o:o.isNewSat
t=a["if"]
c=f.program(49,F,l)
c.hash={}
c.fn=c
c.inverse=f.noop
o=t.call(e,o,c)
if(o||o===0){s+=o}s+='\n        <div class="topic-list">\n            '
s+="\n            "
r=a.topicInfo
o=r||e.topicInfo
o=o===null||o===undefined||o===false?o:o.subtopics
t=a.each
c=f.programWithDepth(Y,l,e)
c.hash={}
c.fn=c
c.inverse=f.noop
o=t.call(e,o,c)
if(o||o===0){s+=o}s+="\n        </div>\n    </div>\n</div>\n"
return s})
module.exports=t
});
KAdefine("javascript/topic-package/content-topic-videos.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,e,i,l,a){i=i||n.helpers
l=l||n.partials
var o="",s,t,c,f,r=this,p="function",u=i.helperMissing,d=void 0,h=this.escapeExpression,v=i.blockHelperMissing
function g(n,e){var l="",a
l+='\n<div class="dashboard-tutorial-link-container-outer">\n    <div class="dashboard-tutorial-link-container-inner">\n        <a class="dashboard-tutorial-link" href='
c=i.topic
a=c||n.topic
a=a===null||a===undefined||a===false?a:a.missionUrl
if(typeof a===p){a=a.call(n,{hash:{}})}else if(a===d){a=u.call(n,"topic.missionUrl",{hash:{}})}l+=h(a)+">\n            "
c=i["_"]
a=c||n["_"]
f=r.program(2,m,e)
f.hash={}
f.fn=f
f.inverse=r.noop
if(c&&typeof a===p){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){l+=a}l+="\n            "
c=i.ifLoggedIn
a=c||n.ifLoggedIn
f=r.program(4,y,e)
f.hash={}
f.fn=f
f.inverse=r.program(7,b,e)
if(c&&typeof a===p){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){l+=a}l+='\n            <i class="icon-chevron-right"></i>\n        </a>\n    </div>\n</div>\n'
return l}function m(n,e){var l="",a
l+="Want a personalized path through "
c=i.topic
a=c||n.topic
a=a===null||a===undefined||a===false?a:a.translatedTitle
if(typeof a===p){a=a.call(n,{hash:{}})}else if(a===d){a=u.call(n,"topic.translatedTitle",{hash:{}})}l+=h(a)+"?"
return l}function y(n,e){var l="",a
l+="\n                "
c=i["_"]
a=c||n["_"]
f=r.program(5,I,e)
f.hash={}
f.fn=f
f.inverse=r.noop
if(c&&typeof a===p){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){l+=a}l+="\n            "
return l}function I(n,e){return"Start now"}function b(n,e){var l="",a
l+="\n                "
c=i["_"]
a=c||n["_"]
f=r.program(8,k,e)
f.hash={}
f.fn=f
f.inverse=r.noop
if(c&&typeof a===p){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){l+=a}l+="\n            "
return l}function k(n,e){return"Sign up to get started"}function j(n,e){var l="",a,o
l+='\n            <div class="cs-subject-custom-area-wrapper">\n                '
c=i.topicInfo
a=c||n.topicInfo
a=a===null||a===undefined||a===false?a:a.topic
a=a===null||a===undefined||a===false?a:a.userAuthoredContentTypesInfo
o=i.each
f=r.program(11,_,e)
f.hash={}
f.fn=f
f.inverse=r.noop
a=o.call(n,a,f)
if(a||a===0){l+=a}l+="\n                "
c=i.topicInfo
a=c||n.topicInfo
a=a===null||a===undefined||a===false?a:a.topic
a=a===null||a===undefined||a===false?a:a.userAuthoredContentTypesInfo
o=i.each
f=r.program(13,w,e)
f.hash={}
f.fn=f
f.inverse=r.noop
a=o.call(n,a,f)
if(a||a===0){l+=a}l+="\n            </div>\n            "
return l}function _(n,e){var i="",l
i+='\n                    <a class="new-program-subject-link subtopic-cs-special-link" href="/computer-programming/new/'
l=n.type
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===d){l=u.call(n,"this.type",{hash:{}})}i+=h(l)+'">\n                        <i class="icon-plus"></i> '
l=n["new"]
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===d){l=u.call(n,"this.new",{hash:{}})}i+=h(l)+"\n                    </a>\n                "
return i}function w(n,e){var l="",a
l+='\n                    <a class="new-program-subject-link subtopic-cs-special-link" href="/computing/computer-programming/docs/'
a=n.type
if(typeof a===p){a=a.call(n,{hash:{}})}else if(a===d){a=u.call(n,"this.type",{hash:{}})}l+=h(a)+'">\n                        <i class="icon-file-text-alt"></i> '
c=i["_"]
a=c||n["_"]
f=r.program(14,T,e)
f.hash={}
f.fn=f
f.inverse=r.noop
if(c&&typeof a===p){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){l+=a}l+="\n                    </a>\n                "
return l}function T(n,e){return"Documentation"}function x(n,e){var l="",a
l+='\n            <div class="user-authored-content-area-wrapper">\n                <a class="my-programs-subject-link subtopic-cs-special-link" href="javascript:void(0)" style="display:none;">\n                    <i class="icon-user"></i> '
c=i["_"]
a=c||n["_"]
f=r.program(17,S,e)
f.hash={}
f.fn=f
f.inverse=r.noop
if(c&&typeof a===p){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){l+=a}l+='\n                </a>\n                <a class="projectfeedback-link subtopic-cs-special-link" href="/'
c=i.topic
a=c||n.topic
a=a===null||a===undefined||a===false?a:a.extendedSlug
if(typeof a===p){a=a.call(n,{hash:{}})}else if(a===d){a=u.call(n,"topic.extendedSlug",{hash:{}})}l+=h(a)+'/projectfeedback">\n                    <i class="icon-question"></i> '
c=i["_"]
a=c||n["_"]
f=r.program(19,P,e)
f.hash={}
f.fn=f
f.inverse=r.noop
if(c&&typeof a===p){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){l+=a}l+="\n                </a>\n            </div>\n            "
return l}function S(n,e){return"My Projects"}function P(n,e){return"Help Requests"}function C(n,e){var l="",a
l+='\n            <a class="projectfeedback-link subtopic-cs-special-link" href="/'
c=i.topic
a=c||n.topic
a=a===null||a===undefined||a===false?a:a.extendedSlug
if(typeof a===p){a=a.call(n,{hash:{}})}else if(a===d){a=u.call(n,"topic.extendedSlug",{hash:{}})}l+=h(a)+'/projectfeedback?fromtopicpage#projecteval">\n                <i class="icon-list-alt"></i> '
c=i["_"]
a=c||n["_"]
f=r.program(22,U,e)
f.hash={}
f.fn=f
f.inverse=r.noop
if(c&&typeof a===p){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){l+=a}l+="\n            </a>\n            "
return l}function U(n,e){return"Project Evaluations"}function D(n,e){return"Community Questions"}function q(n,e){var l="",a
l+='\n        <div class="partnership-text content-page">\n            <span class="partnership-label">'
c=i["_"]
a=c||n["_"]
f=r.program(27,A,e)
f.hash={}
f.fn=f
f.inverse=r.noop
if(c&&typeof a===p){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){l+=a}l+='</span>\n            <img class="partnership-logo" src="/images/sat/cb-logo.svg" alt="'
c=i.i18nDoNotTranslate
a=c||n.i18nDoNotTranslate
f=r.program(29,H,e)
f.hash={}
f.fn=f
f.inverse=r.noop
if(c&&typeof a===p){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){l+=a}l+='">\n        </div>\n    '
return l}function A(n,e){return"In partnership with"}function H(n,e){return"CollegeBoard"}o+='\n<div class="content-pane-inner '
c=i.topicInfo
s=c||e.topicInfo
s=s===null||s===undefined||s===false?s:s.domainInfo
s=s===null||s===undefined||s===false?s:s.identifier
if(typeof s===p){s=s.call(e,{hash:{}})}else if(s===d){s=u.call(e,"topicInfo.domainInfo.identifier",{hash:{}})}o+=h(s)+' subject-color">\n\n'
c=i.topic
s=c||e.topic
s=s===null||s===undefined||s===false?s:s.missionUrl
t=i["if"]
f=r.program(1,g,a)
f.hash={}
f.fn=f
f.inverse=r.noop
s=t.call(e,s,f)
if(s||s===0){o+=s}o+='\n<div data-role="header" class="main-header">\n    <div class="topic-info">\n        <div class="topic-info-inner">\n            <div class=\'subject-breadcrumb\'><a href="'
c=i.topicInfo
s=c||e.topicInfo
s=s===null||s===undefined||s===false?s:s.subjectInfo
s=s===null||s===undefined||s===false?s:s.topicPageUrl
if(typeof s===p){s=s.call(e,{hash:{}})}else if(s===d){s=u.call(e,"topicInfo.subjectInfo.topicPageUrl",{hash:{}})}o+=h(s)+'" class="subject-link" data-id=""><i class="icon-caret-left"></i>'
c=i.topicInfo
s=c||e.topicInfo
s=s===null||s===undefined||s===false?s:s.subjectInfo
s=s===null||s===undefined||s===false?s:s.translatedTitle
if(typeof s===p){s=s.call(e,{hash:{}})}else if(s===d){s=u.call(e,"topicInfo.subjectInfo.translatedTitle",{hash:{}})}o+=h(s)+"</a></div>\n            <h1 class='topic-title'>"
c=i.topicInfo
s=c||e.topicInfo
s=s===null||s===undefined||s===false?s:s.topic
s=s===null||s===undefined||s===false?s:s.translatedTitle
if(typeof s===p){s=s.call(e,{hash:{}})}else if(s===d){s=u.call(e,"topicInfo.topic.translatedTitle",{hash:{}})}o+=h(s)+"</h1>\n            <div class='topic-desc'>"
c=i.topicInfo
s=c||e.topicInfo
s=s===null||s===undefined||s===false?s:s.topic
s=s===null||s===undefined||s===false?s:s.translatedDescription
if(typeof s===p){s=s.call(e,{hash:{}})}else if(s===d){s=u.call(e,"topicInfo.topic.translatedDescription",{hash:{}})}o+=h(s)+"</div>\n\n            "
o+="\n            "
c=i.topicInfo
s=c||e.topicInfo
s=s===null||s===undefined||s===false?s:s.isComputerProgramming
t=i["if"]
f=r.program(10,j,a)
f.hash={}
f.fn=f
f.inverse=r.noop
s=t.call(e,s,f)
if(s||s===0){o+=s}o+="\n\n            "
c=i.topicInfo
s=c||e.topicInfo
s=s===null||s===undefined||s===false?s:s.topic
s=s===null||s===undefined||s===false?s:s.hasUserAuthoredContentTypes
t=i["if"]
f=r.program(16,x,a)
f.hash={}
f.fn=f
f.inverse=r.noop
s=t.call(e,s,f)
if(s||s===0){o+=s}o+="\n\n            "
c=i.topicInfo
s=c||e.topicInfo
s=s===null||s===undefined||s===false?s:s.hasPeerReviewedProjects
t=i["if"]
f=r.program(21,C,a)
f.hash={}
f.fn=f
f.inverse=r.noop
s=t.call(e,s,f)
if(s||s===0){o+=s}o+='\n\n            <a class="community-questions-link subtopic-cs-special-link" href="/'
c=i.topic
s=c||e.topic
s=s===null||s===undefined||s===false?s:s.extendedSlug
if(typeof s===p){s=s.call(e,{hash:{}})}else if(s===d){s=u.call(e,"topic.extendedSlug",{hash:{}})}o+=h(s)+'/d">\n                <i class="icon-comments"></i> '
c=i["_"]
s=c||e["_"]
f=r.program(24,D,a)
f.hash={}
f.fn=f
f.inverse=r.noop
if(c&&typeof s===p){s=s.call(e,f)}else{s=v.call(e,s,f)}if(s||s===0){o+=s}o+='\n            </a>\n        </div>\n    </div>\n</div>\n<div class="videos-list">\n    '
c=i.topicInfo
s=c||e.topicInfo
s=s===null||s===undefined||s===false?s:s.isNewSat
t=i["if"]
f=r.program(26,q,a)
f.hash={}
f.fn=f
f.inverse=r.noop
s=t.call(e,s,f)
if(s||s===0){o+=s}o+='\n\n    <div class="videos-list-inner">\n        <div class="videos-list-inner-inner">\n            <div class="user-projects-notice-container"></div>\n            '
s=e
s=r.invokePartial(l["topic_tutorial-list"],"topic_tutorial-list",s,i,l)
if(s||s===0){o+=s}o+="\n        </div>\n    </div>\n</div>\n</div>\n"
o+='\n<div style="clear: both;"></div>\n'
return o})
module.exports=t
});
KAdefine("javascript/topic-package/topic-page-cs-custom-view.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
var KAConsole=require("../shared-package/console.js")
var ComputerScienceCustomSubjectView=Backbone.View.extend({initialize:function(e){this.topicId=e.topicId},render:function(){var e=this.$(".browse-programs-thumbs")
$.ajax({type:"GET",url:"/api/internal/scratchpads/top",data:{sort:3,limit:9,casing:"camel",topic_id:this.topicId},dataType:"json",success:function(r){var t=_.map(r.scratchpads,function(e){return $("<img>").attr("src",e.thumb)})
t.reverse()
e.html(t)},error:function(e,r,t){KAConsole.log("Error: Failed to load CS browse preview.")}})
return this}})
module.exports=ComputerScienceCustomSubjectView
});
KAdefine("javascript/topic-package/topic-progress-icon.jsx", function(require, module, exports) {
var React=require("react")
var ReactART=require("react-art")
var i18n=require("../shared-package/i18n.js")
var UserProgressCache=require("../shared-package/user-progress-cache.jsx")
var Group=ReactART.Group
var Path=ReactART.Path
var Pattern=ReactART.Pattern
var Shape=ReactART.Shape
var Surface=ReactART.Surface
var ICON_R=32
var INNER_RING_R=35
var RING_R=42
var TOTAL_R=45
function circlePath(e){return(new Path).moveTo(0,-e).arcTo(0,e,e,e,true).arcTo(0,-e,e,e,true).close()}var TOPIC_COLORS={science:"#c55f73",humanities:"#fc6255","economics-finance-domain":"#f0ac5f",cs:"#83c167","hour-of-code":"#83c167",computing:"#83c167","partner-content":"#5cd0b3",math:"#4fbad4","test-prep":"#9a72ac"}
var DEFAULT_TOPIC_COLOR="#6a8da6"
var TopicProgressIcon=React.createClass({displayName:"TopicProgressIcon",propTypes:{className:React.PropTypes.string,radius:React.PropTypes.number,domainSlug:React.PropTypes.string.isRequired,progressKeys:React.PropTypes.array,complete:React.PropTypes.number,total:React.PropTypes.number,iconUrl:React.PropTypes.string,iconAspectRatio:React.PropTypes.number},getDefaultProps:function(){return{radius:TOTAL_R}},render:function(){var e=this.props.complete
var r=this.props.total
if(this.props.progressKeys==null&&(e==null||r==null)){throw new Error("Expected progressKeys or complete/total to be specified")}if(this.props.progressKeys!=null&&(e!=null||r!=null)){throw new Error("Expected progressKeys or complete/total, not both")}if(this.props.progressKeys!=null){e=r=0
this.props.progressKeys.forEach(function(t){var a=UserProgressCache.getStatusForProgressKey(t)
r++
if(a==="complete"){e++}})}var t=TOPIC_COLORS[this.props.domainSlug]||DEFAULT_TOPIC_COLOR
var a=e/r
var s=-Math.PI/2+2*Math.PI*a
var o=this.props.radius
var c=RING_R/TOTAL_R*this.props.radius
var p=INNER_RING_R/TOTAL_R*this.props.radius
var i=ICON_R/TOTAL_R*this.props.radius
var n=this.props.iconAspectRatio||1
var l
if(this.props.outerRing){l=this.props.outerRing}else{l=React.createElement(Shape,{stroke:t,strokeWidth:5/TOTAL_R*this.props.radius,strokeCap:"butt",d:a>=1?circlePath(c):(new Path).moveTo(0,-c).arcTo(c*Math.cos(s),c*Math.sin(s),c,c,a>=.5)})}var R=React.createElement(Surface,{className:"icon-surface",width:2*o,height:2*o},React.createElement(Group,{x:o,y:o},React.createElement(Shape,{fill:"#fff",stroke:"#ddd",strokeWidth:5/TOTAL_R*this.props.radius,d:circlePath(c)}),React.createElement(Shape,{fill:t,d:circlePath(p)}),React.createElement(Shape,{fill:new Pattern(this.props.iconUrl,2*i*n,2*i,-i*n,-i),d:circlePath(i)}),l))
var h=i18n._("%(complete)s/%(total)s completed",{complete:e,total:r})
return React.createElement("div",{className:this.props.className,title:h},R)}})
module.exports=TopicProgressIcon
});
KAdefine("javascript/topic-package/topic-page-view.jsx", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var React=require("react")
var ReactDOM=require("react-dom")
var _=require("underscore")
var KA=require("../shared-package/ka.js")
var ComputerScienceCustomSubjectView=require("./topic-page-cs-custom-view.js")
var TopicProgressIcon=require("./topic-progress-icon.jsx")
var bindSignupLink=require("../shared-package/bind-signup-link.js")
var MissionUpsell=require("./mission-upsell.jsx")
var UserProjectsNotice=require("./user-projects-notice.jsx")
var _addMyProjectsLink=function(e,i){if(e.find(".user-authored-content-area-wrapper").length>0&&!_.isNull(KA.getUserProfile())){var t=KA.getUserProfile().get("profileRoot")+"projects"
i.attr("href",t).show()}}
var SubjectPageView=Backbone.View.extend({_rendered:false,events:{"click .topic-list-item":"_onTopicNavigationItemClick","click .community-questions-link":"_onTopicNavigationItemClick","click .browse-programs-subject-link":"_onTopicNavigationItemClick"},initialize:function(e){this.template=require("./subject-page.handlebars")
this.missionExists=e.missionExists
this.slug=e.slug
this.title=e.title
this.userType=e.userType},render:function(){var e=this
if(this._rendered){return}var i=$('.prerendered[data-id="'+this.model.topic.slug+'"]')
if(!i.length){this.$el.html(this.template({topicInfo:this.model}))}this._rendered=true
this._renderTopicProgress()
if(this.$el.find(".cs-subject-custom-area-wrapper").length>0){this.CSAreaCustomView=new ComputerScienceCustomSubjectView({el:this.$el.find(".cs-subject-custom-area-wrapper"),topicId:this.model.topic.id})
this.CSAreaCustomView.render()}_addMyProjectsLink(this.$el,this.$(".my-programs-subject-link"))
bindSignupLink(this.$(".dashboard-tutorial-link"))
if(this.missionExists){var t="/mission/"+this.slug
if(this.userType==="phantom"){this.renderUpsell("/signup?continue="+encodeURIComponent(t))}else{$.get("/api/internal/user"+t,function(i){return e.renderUpsell(t,i.progressInfo)})}}return this},renderUpsell:function(e,i){var t=document.createElement("div")
t.className="mission-progress-container "+this.userType+"-mission-upsell"
var r=$(".topic-list")
$(r).prepend(t)
ReactDOM.render(React.createElement(MissionUpsell,{title:this.title,userType:this.userType,url:e,progress:i}),t)},_onTopicNavigationItemClick:function(e){if(e.metaKey){return}if(window.history&&window.history.pushState){e.preventDefault()
var i=$(e.currentTarget).attr("href")
this.trigger("navigate-to-topic",i)}},_renderTopicProgress:function(){var e=this
var i=this.$(".icon-with-progress")
if(!i.length){return}_.defer(function(){var t={}
i.each(function(){t[$(this).data("slug")]=this})
e.model.subtopics.forEach(function(e,i){var r=t[e.slug]
if(!r){return}var s=$(r).data("domainSlug")
var n=$(r).data("iconUrl")
var o=1
if(n.indexOf("https://img.youtube.com")===0){o=4/3}var a=_.flatten(e.tutorials.map(function(e){return e.children.map(function(e){return e.progressKey})}))
ReactDOM.render(React.createElement(TopicProgressIcon,{domainSlug:s,progressKeys:a,iconUrl:n,iconAspectRatio:o}),r)},e)})}})
var TopicPageView=Backbone.View.extend({initialize:function(e){this.subjectInfo=e.subjectInfo},_rendered:false,render:function(){if(!this._rendered){var e=$('.prerendered[data-id="'+this.model.topic.slug+'"]')
if(e.length){this.setElement(e.get(0))}else{var i=require("./content-topic-videos.handlebars")
this.$el.html(i({topicInfo:this.model,topic:this.subjectInfo}))}this.$el.addClass("topic-content-view-root")
_addMyProjectsLink(this.$el,this.$(".my-programs-subject-link"))
this._rendered=true
bindSignupLink(this.$(".dashboard-tutorial-link"))
var t=KA.getUserProfile()
if(t){var r=t.get("profileRoot")+"projects"
ReactDOM.render(React.createElement(UserProjectsNotice,{topic:this.model.topic,userProfileProjectsUrl:r}),this.$(".user-projects-notice-container")[0])}}return this},onShown:function(){this.options.viewCount++}})
module.exports={SubjectPageView:SubjectPageView,TopicPageView:TopicPageView}
});
KAdefine("javascript/topic-package/topic-page.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
var $=require("jquery")
var Backbone=require("backbone")
var React=require("react")
var ReactDOM=require("react-dom")
var _=require("underscore")
var i18n=require("../shared-package/i18n.js")
var Analytics=require("../shared-package/analytics.js")
var KA=require("../shared-package/ka.js")
var KAConsole=require("../shared-package/console.js")
var NotificationsLoader=require("../shared-package/notifications-loader.js")
var SubjectPageView=require("./topic-page-view.jsx").SubjectPageView
var TopicPageView=require("./topic-page-view.jsx").TopicPageView
var updateDocumentTitle=require("../shared-package/update-document-title.js")
var liveContext={rootPageTopic:null,topicList:{},TopicPageView:TopicPageView,SubjectPageView:SubjectPageView,rootTopicView:null,rootViewSelector:".subject-page.live"}
var editContext=liveContext
var currentContext=liveContext
var selectedTopic=null
var rootTopicModel=null
var viewType=null
var discussionView=null
var browseScratchpadView=null
var docsScratchpadView=null
var guidelinesScratchpadView=null
var initOptions={}
var TopicPage={init:function(e,t,i){rootTopicModel=e
liveContext.rootPageTopic=t
TopicPage.finishInit()
TopicPage.growContent()
$(window).resize(function(){TopicPage.growContent()})
initOptions=i
this.inEditContext=false
this.showingTutorial=false
this.router=new this.SubTopicRouter
this.router.on("route",Analytics.handleRouterNavigation,Analytics)
this.topicRoot="/"+rootTopicModel["extendedSlug"]
Backbone.history.start({pushState:true,hashChange:false})
if(i.previewing){var o={class_:["UrgentNotification"],text:i18n._("You are previewing an unpublished subject.")}
NotificationsLoader.loadUrgent(o)}},finishInit:function(){_.each(liveContext.rootPageTopic.subtopics,function(e){liveContext.topicList[e.slug]=e})
var e="a.subject-link, "+"a.subtopic-link, "+"a.topic-heading-link, "+"a.discussion-link, "+"a.browse-programs-link,"+"a.program-docs-link"
$(".topic-page-content").on("click",e,_.bind(this._onNavigationElementClicked,this))
$(".topic-page-content").on("click",".topic-page-content a.subtopic-link-and-scroll",_.bind(function(e){if(e.metaKey){return}this._onNavigationElementClicked(e)
$("body").animate({scrollTop:0},200,"easeInOutCubic")},this))
if(!_.isNull(KA.getUserProfile())){var t=KA.getUserProfile().get("profileRoot")+"projects"
$(".my-programs").find("a.my-programs-link").attr("href",t)
$(".my-programs").show()}},setEditContext:function(e){editContext=e},setCurrentContext:function(e){var t=this.router.lastFragment
if(e===editContext){t+="/edit"}this.router.navigate(t)
this.router.showSubtopic(t)},getSelectedTopic:function(){return selectedTopic},_onNavigationElementClicked:function(e){if(e.metaKey){return}if(window.history&&window.history.pushState){var t=TopicPage.topicRoot
var i=$(e.currentTarget).data("id")
if(i){t=t+"/"+i}this.router.navigate(t,true)
e.preventDefault()}},growContent:_.debounce(function(){if(KA.isMobileCapable){return}this._growContent()},100),_growContent:function(){var e=$(".topic-page-content > .container:visible").find(".subject-children-outer-container, .videos-list-inner").css("min-height","").end()
var t=e.height()
var i=$(window).height(),o=e.offset().top,n=$("#end-of-page-spacer").outerHeight(true),c=i-o-n
var a=Math.max(t,c)
$(".topic-page-content > .container:visible").find(".subject-children-outer-container, .videos-list-inner").css("min-height",a+"px").end()},SubTopicRouter:Backbone.Router.extend({selectedSubTopicId:null,routes:{"*subtopicID":"showSubtopic"},normalizeSubtopicID:function(e){e=e.substring(TopicPage.topicRoot.length)
if(e.charAt(0)==="/"){e=e.substr(1)}if(e.slice(-1)==="/"){e=e.slice(0,-1)}return e},_showContentView:function(e){var t=e.render().el
$(".topic-page-content .content-pane").children().detach().end().append(t)
if(_.isFunction(e.onShown)){e.onShown()}},showBrowsePrograms:function(){require.async(["../cs-topic-package/scratchpad-browse-list-view.js"],function(e){if(!browseScratchpadView){var t=liveContext.rootPageTopic.topic
browseScratchpadView=new e({el:$(".topic-page-content .content-pane"),topic:t})}browseScratchpadView.render()})},showCommunityGuidelines:function(){require.async(["../cs-topic-package/scratchpad-guidelines-view.js"],function(e){if(!guidelinesScratchpadView){guidelinesScratchpadView=new e({el:$(".topic-page-content .content-pane"),userAuthoredContentType:initOptions.userAuthoredContentType,standAlone:true,topic:rootTopicModel})}guidelinesScratchpadView.render()})},showProgramDocumentation:function(){require.async(["../scratchpad-base-package/scratchpads.js"],function(e){docsScratchpadView=docsScratchpadView||new e.ScratchpadDocsView({el:$(".topic-page-content .content-pane"),userAuthoredContentType:initOptions.userAuthoredContentType,standAlone:true,topic:rootTopicModel})
docsScratchpadView.render()})},showDiscussion:function(){var e=this
var t=liveContext.rootPageTopic.subtopics!=null&&liveContext.rootPageTopic.subtopics.length>0
require.async(["../topic-discussion-package/discussion-view.js"],function(i){var o=liveContext.rootPageTopic.topic
discussionView=discussionView||new i({domainInfo:liveContext.rootPageTopic["domainInfo"],subject:{slug:o.slug,topicPageUrl:o.topicPageUrl,translatedTitle:o.translatedTitle},prefetchedDiscussion:initOptions.prefetchedDiscussion,hasChildTopics:t})
e._showContentView(discussionView)})},showProjectFeedback:function(){require.async(["../projectfeedback-package/projectfeedback-form.jsx"],function(e){var t=React.createFactory(e.ProjectFeedbackPage)
ReactDOM.render(t({topic:rootTopicModel}),$(".topic-page-content .content-pane")[0])})},showSubtopic:function(e){$("html, body").animate({scrollTop:0},0)
var t=""
if(e.substr(-5)==="/edit"){e=e.substr(0,e.length-5)
currentContext=editContext
TopicPage.inEditContext=true}else{currentContext=liveContext
TopicPage.inEditContext=false}this.lastFragment=e
e=this.normalizeSubtopicID(e)
KAConsole.log("Switching to subtopic: "+e)
if(e==="d"){viewType="discussion"
selectedTopic=null
this._highlightSelectedTab(e)
this.showDiscussion()
$(".topic-page-content .content-pane").addClass("discussion")
var i=i18n._("Discussion")+" | "+rootTopicModel["translatedStandaloneTitle"]
updateDocumentTitle({pageName:i})
return}else if(e==="browse"){viewType="browse"
selectedTopic=null
this._highlightSelectedTab(e)
this.showBrowsePrograms()
var i=i18n._("Browse Projects")+" | "+rootTopicModel["translatedStandaloneTitle"]
updateDocumentTitle({pageName:i})
return}else if(e.substring(0,4)==="docs"){viewType="docs"
selectedTopic=null
this._highlightSelectedTab(e)
this.showProgramDocumentation()
var i=i18n._("Documentation")+" | "+rootTopicModel["translatedStandaloneTitle"]
updateDocumentTitle({pageName:i})
return}else if(e.substring(0,10)==="guidelines"){viewType="guidelines"
selectedTopic=null
this.showCommunityGuidelines()
var i=i18n._("Community Guidelines")+" | "+rootTopicModel["translatedStandaloneTitle"]
updateDocumentTitle({pageName:i})
return}else if(e==="projectfeedback"){viewType="projectfeedback"
selectedTopic=null
this._highlightSelectedTab(e)
this.showProjectFeedback()
var i=i18n._("Project Feedback")+" | "+rootTopicModel["translatedStandaloneTitle"]
updateDocumentTitle({pageName:i})
return}else{viewType="videos"
if(e===""){selectedTopic=null}else{selectedTopic=currentContext.topicList[e]||null}}var o
var n=null
if(selectedTopic||e==="subtopics"){$(".subject-page").hide()
$(".subtopic-page").show()
var c=currentContext.rootPageTopic
var a={}
if(c instanceof Backbone.Model){a.translatedTitle=c.get("translatedTitle")
a.topicPageUrl=c.get("topicPageUrl")
a.extendedSlug=c.get("extendedSlug")}else{a.translatedTitle=c.topic.translatedTitle
a.topicPageUrl=c.topic.topicPageUrl
a.extendedSlug=c.topic.extendedSlug}selectedTopic.domainInfo=liveContext.rootPageTopic["domainInfo"]
selectedTopic.view=selectedTopic.view||new currentContext.TopicPageView({subjectInfo:a,model:selectedTopic,viewCount:0})
this._showContentView(selectedTopic.view)
if(selectedTopic.view.postRender){selectedTopic.view.postRender()}n=selectedTopic.getUIAttributes?selectedTopic.getUIAttributes():selectedTopic.topic
t=n.slug
o={"Topic Title":n.title,"Topic Type":"Subtopic","Topic View Count":selectedTopic.view.options.viewCount}
TopicPage.showingTutorial=n.renderType==="Tutorial"}else{$(".subject-page").hide()
$(".subtopic-page").hide()
var r=$(currentContext.rootViewSelector).show()
currentContext.rootTopicView=currentContext.rootTopicView||new currentContext.SubjectPageView({model:currentContext.rootPageTopic,el:r,missionExists:initOptions.missionExists,slug:initOptions.slug,title:initOptions.title,userType:initOptions.userType})
var s=currentContext.rootPageTopic.getUIAttributes?currentContext.rootPageTopic.getUIAttributes():currentContext.rootPageTopic
currentContext.rootTopicView.render()
if(currentContext.rootTopicView.postRender){currentContext.rootTopicView.postRender()}this._listenToSubjectPage(currentContext.rootTopicView)
this.selectedSubTopicId=null
TopicPage.showingTutorial=false
o={"Topic Title":s.title,"Topic Type":"Content topic","Topic View Count":currentContext.rootTopicView.options.viewCount}}_.extend(o,{"Page Type":"Topic page"})
Analytics.trackSingleEvent("Page View",o)
this._highlightSelectedTab(t)
var i=""
if(n){i+=n.translatedTitle+" | "}i+=rootTopicModel["translatedStandaloneTitle"]
updateDocumentTitle({pageName:i})
$(".topic-page-content .content-pane").removeClass("discussion")
var l=require.ifLoadedLegacy("../discussion-package/discussion-note.js")
if(l){l.closeAll()}TopicPage.growContent()},_listenToSubjectPage:_.once(function(e){e.on("navigate-to-topic",function(t){e.$el.hide().siblings().show()
this.navigate(t,true)},this)}),_highlightSelectedTab:function(e){this.selectedSubTopicId=e
$(".topic-page-content .nav-pane").find(".active").removeClass("active").end().find('li[data-id="'+e+'"] a').addClass("active")}})}
module.exports=TopicPage
});
KAdefine("javascript/topic-package/subject-page.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/qTip2/jquery.qtip.js")
var $=require("jquery")
var _=require("underscore")
var SubjectPage={init:function(){this._initCaptionQtip()},_initCaptionQtip:function(){var t=$(".subject-image-caption")
var e=_.reduce(t.children(),function(t,e){return t+$(e).width()},0)+4
t.qtip({content:{attr:"title"},style:{classes:"qtip-rounded subject-page-caption "+t.data("domain"),tip:{width:20,height:12}},position:{my:"left center",at:"right center",adjust:{x:-(t.width()-e)}},hide:{fixed:true,delay:300}})}}
module.exports=SubjectPage
});
KAdefine("javascript/topic-package/tutorial-list.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,e,l,i,a){l=l||n.helpers
var t="",s,r,o,f,c=this,h="function",p=l.helperMissing,d=void 0,u=this.escapeExpression,v=l.blockHelperMissing
function g(n,e){var i="",a
i+="All content in “"
o=l.topicInfo
a=o||n.topicInfo
a=a===null||a===undefined||a===false?a:a.topic
a=a===null||a===undefined||a===false?a:a.translatedTitle
if(typeof a===h){a=a.call(n,{hash:{}})}else if(a===d){a=p.call(n,"topicInfo.topic.translatedTitle",{hash:{}})}i+=u(a)+"”"
return i}function y(n,e,i){var a="",t,s
a+='\n  <div class="tutorial-container">\n    <div class="tutorial-overview" id="'
o=l.topic
t=o||n.topic
t=t===null||t===undefined||t===false?t:t.slug
if(typeof t===h){t=t.call(n,{hash:{}})}else if(t===d){t=p.call(n,"topic.slug",{hash:{}})}a+=u(t)+'">\n      '
o=l.children
t=o||n.children
s=l["if"]
f=c.programWithDepth(m,e,i)
f.hash={}
f.fn=f
f.inverse=c.programWithDepth(I,e,i)
t=s.call(n,t,f)
if(t||t===0){a+=t}a+="\n\n      "
o=l.topic
t=o||n.topic
t=t===null||t===undefined||t===false?t:t.brandingImageUrl
s=l["if"]
f=c.program(8,T,e)
f.hash={}
f.fn=f
f.inverse=c.noop
t=s.call(n,t,f)
if(t||t===0){a+=t}a+="\n\n      "
o=l.topic
t=o||n.topic
t=t===null||t===undefined||t===false?t:t.translatedDescription
s=l["if"]
f=c.program(13,D,e)
f.hash={}
f.fn=f
f.inverse=c.noop
t=s.call(n,t,f)
if(t||t===0){a+=t}a+='\n\n    </div>\n    <div class="tutorial-contents">\n      <div class="contents-box">\n        <ul class="progress-container">\n        '
o=l.children
t=o||n.children
s=l.each
f=c.program(15,P,e)
f.hash={}
f.fn=f
f.inverse=c.noop
t=s.call(n,t,f)
if(t||t===0){a+=t}a+="\n        </ul>\n      </div>\n    </div>\n  </div>\n  "
return a}function m(n,e,i){var a="",t
a+='\n      <h2><a class="tutorial-title '
o=l.topicInfo
t=o||i.topicInfo
t=t===null||t===undefined||t===false?t:t.domainInfo
t=t===null||t===undefined||t===false?t:t.identifier
if(typeof t===h){t=t.call(n,{hash:{}})}else if(t===d){t=p.call(n,"......topicInfo.domainInfo.identifier",{hash:{}})}a+=u(t)+'" href="'
o=l.children
t=o||n.children
t=t===null||t===undefined||t===false?t:t[0]
t=t===null||t===undefined||t===false?t:t.url
if(typeof t===h){t=t.call(n,{hash:{}})}else if(t===d){t=p.call(n,"children.0.url",{hash:{}})}a+=u(t)+'">'
o=l.topic
t=o||n.topic
t=t===null||t===undefined||t===false?t:t.translatedTitle
if(typeof t===h){t=t.call(n,{hash:{}})}else if(t===d){t=p.call(n,"topic.translatedTitle",{hash:{}})}a+=u(t)+"</a></h2>\n      "
return a}function I(n,e,i){var a="",t
a+='\n      <h2><a class="tutorial-title '
o=l.topicInfo
t=o||i.topicInfo
t=t===null||t===undefined||t===false?t:t.domainInfo
t=t===null||t===undefined||t===false?t:t.identifier
if(typeof t===h){t=t.call(n,{hash:{}})}else if(t===d){t=p.call(n,"......topicInfo.domainInfo.identifier",{hash:{}})}a+=u(t)+'" href="'
o=l.topic
t=o||n.topic
t=t===null||t===undefined||t===false?t:t.topicPageUrl
if(typeof t===h){t=t.call(n,{hash:{}})}else if(t===d){t=p.call(n,"topic.topicPageUrl",{hash:{}})}a+=u(t)+'">'
o=l.topic
t=o||n.topic
t=t===null||t===undefined||t===false?t:t.translatedTitle
if(typeof t===h){t=t.call(n,{hash:{}})}else if(t===d){t=p.call(n,"topic.translatedTitle",{hash:{}})}a+=u(t)+"</a></h2>\n      "
return a}function T(n,e){var i="",a,t
i+="\n      "
o=l.children
a=o||n.children
t=l["if"]
f=c.program(9,b,e)
f.hash={}
f.fn=f
f.inverse=c.program(11,U,e)
a=t.call(n,a,f)
if(a||a===0){i+=a}i+='\n          <img src="'
o=l.topic
a=o||n.topic
a=a===null||a===undefined||a===false?a:a.brandingImageUrl
if(typeof a===h){a=a.call(n,{hash:{}})}else if(a===d){a=p.call(n,"topic.brandingImageUrl",{hash:{}})}i+=u(a)+'">\n      </a>\n      '
return i}function b(n,e){var i="",a
i+='\n      <a class="tutorial-branding-image" href="'
o=l.children
a=o||n.children
a=a===null||a===undefined||a===false?a:a[0]
a=a===null||a===undefined||a===false?a:a.url
if(typeof a===h){a=a.call(n,{hash:{}})}else if(a===d){a=p.call(n,"children.0.url",{hash:{}})}i+=u(a)+'">\n      '
return i}function U(n,e){var i="",a
i+='\n      <a class="tutorial-branding-image" href="'
o=l.topic
a=o||n.topic
a=a===null||a===undefined||a===false?a:a.topicPageUrl
if(typeof a===h){a=a.call(n,{hash:{}})}else if(a===d){a=p.call(n,"topic.topicPageUrl",{hash:{}})}i+=u(a)+'">\n      '
return i}function D(n,e){var i="",a
i+='\n      <div class="tutorial-description">\n      '
o=l.topic
a=o||n.topic
a=a===null||a===undefined||a===false?a:a.translatedDescription
if(typeof a===h){a=a.call(n,{hash:{}})}else if(a===d){a=p.call(n,"topic.translatedDescription",{hash:{}})}i+=u(a)+"\n      </div>\n      "
return i}function P(n,e){var i="",a,t,s,r
i+='\n        <li class="progress-item">\n            <a href="'
o=l.url
a=o||n.url
if(typeof a===h){a=a.call(n,{hash:{}})}else if(a===d){a=p.call(n,"url",{hash:{}})}i+=u(a)+'">\n                '
a="progress-icon-subway"
t="shared"
s={}
o=l.type
r=o||n.type
s["type"]=r
o=l.progressKey
r=o||n.progressKey
s["key"]=r
r="small-icon"
s["extraClasses"]=r
o=l.invokePartial
r=o||n.invokePartial
f=c.program(16,k,e)
f.hash=s
f.fn=f
f.inverse=c.noop
if(o&&typeof r===h){a=r.call(n,t,a,f)}else{a=v.call(n,r,t,a,f)}if(a||a===0){i+=a}i+='\n                <span class="progress-title">'
o=l.translatedTitle
a=o||n.translatedTitle
if(typeof a===h){a=a.call(n,{hash:{}})}else if(a===d){a=p.call(n,"translatedTitle",{hash:{}})}i+=u(a)+"</span>\n                "
o=l.translatedType
a=o||n.translatedType
t=l["if"]
f=c.program(18,w,e)
f.hash={}
f.fn=f
f.inverse=c.noop
a=t.call(n,a,f)
if(a||a===0){i+=a}i+="\n            </a>\n        </li>\n        "
return i}function k(n,e){var l=""
return l}function w(n,e){var i="",a
i+='\n                    <span class="sr-only">('
o=l.translatedType
a=o||n.translatedType
if(typeof a===h){a=a.call(n,{hash:{}})}else if(a===d){a=p.call(n,"translatedType",{hash:{}})}i+=u(a)+")</span>\n                "
return i}t+='<div class="tutorial-overview-header">'
o=l["_"]
s=o||e["_"]
f=c.program(1,g,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(o&&typeof s===h){s=s.call(e,f)}else{s=v.call(e,s,f)}if(s||s===0){t+=s}t+='</div>\n\n<div class="tutorial-overview-block">\n\n  '
o=l.topicInfo
s=o||e.topicInfo
s=s===null||s===undefined||s===false?s:s.tutorials
r=l.each
f=c.programWithDepth(y,a,e)
f.hash={}
f.fn=f
f.inverse=c.noop
s=r.call(e,s,f)
if(s||s===0){t+=s}t+="\n\n</div>\n"
return t})
module.exports=t
});
KAdefine("javascript/topic-package/formatting-utils.js", function(require, module, exports) {
exports.formatTitleForSentence=function(t){var e=/[A-Z]/.test(t.substring(1))
return e?t:t.toLowerCase()}
});
KAdefine("javascript/topic-package/user-projects-notice.jsx", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
var TimeAgo=require("react-components/timeago.jsx")
var $_=require("../shared-package/i18n.js").$_
var i18n=require("../shared-package/i18n.js")
var UserProjectsNotice=React.createClass({displayName:"UserProjectsNotice",propTypes:{topic:React.PropTypes.object.isRequired,userProfileProjectsUrl:React.PropTypes.string.isRequired},getInitialState:function(){return{dataLoaded:false,projectsByStatus:null}},componentWillMount:function(){this.loadData()},loadData:function(){var e=this
$.getJSON("/api/internal/scratchpads/user-projects-by-status",{topic_id:this.props.topic.id},function(t){e.setState({projectsByStatus:t,dataLoaded:true})})},hasProjects:function(){return this.state.projectsByStatus[4].length>0||this.state.projectsByStatus[3].length>0||this.state.projectsByStatus[5].length>0},render:function(){if(!this.state.dataLoaded||!this.hasProjects()){return null}var e=i18n._('Your recent projects in "%(title)s"',{title:this.props.topic.translatedTitle})
var t=React.createElement(UserProjectsSublist,{projects:this.state.projectsByStatus[4],title:i18n._("Projects with feedback")})
var s=React.createElement(UserProjectsSublist,{projects:this.state.projectsByStatus[3],title:i18n._("Projects in progress")})
var r=React.createElement(UserProjectsSublist,{projects:this.state.projectsByStatus[5],title:i18n._("Projects completed")})
return React.createElement("div",null,React.createElement("div",{className:"tutorial-overview-header"},e,React.createElement("a",{href:this.props.userProfileProjectsUrl,className:"user-projects-view-all"},$_(null,"View all projects"))),React.createElement("div",{className:"tutorial-overview-block"},React.createElement("div",{className:"tutorial-container"},React.createElement("div",{className:"tutorial-overview user-projects-overview pure-g",style:{borderBottom:"none",paddingBottom:"10px"}},t,s,r))))}})
var UserProjectsSublist=React.createClass({displayName:"UserProjectsSublist",propTypes:{projects:React.PropTypes.array.isRequired,title:React.PropTypes.string.isRequired},getInitialState:function(){return{showAll:false}},clickToggle:function(){this.setState({showAll:!this.state.showAll})},render:function(){if(this.props.projects.length===0){return null}var e=[]
for(var t=0;t<this.props.projects.length;t++){if(!this.state.showAll&&t>=2){break}var s=this.props.projects[t]
e.push(this.createListItem(s,t))}var r=this.props.projects.length-e.length
var a=r>0?i18n.ngettext("show 1 more","show %(num)s more",r):e.length<=2?null:i18n._("hide older projects")
return React.createElement("div",{className:"user-projects-sublist pure-u-1-3"},React.createElement("div",{className:"user-projects-sublist-header"},this.props.title),e,React.createElement("div",{className:"user-projects-show-more",onClick:this.clickToggle},a))},createListItem:function(e,t){return React.createElement("div",{className:"user-projects-list-item",key:t},React.createElement("img",{src:e.screenshotPath,alt:e.projectTitle}),React.createElement("div",null,React.createElement("a",{className:"user-projects-sublist-link",href:e.projectLink},e.projectTitle),React.createElement("div",{className:"user-projects-sublist-link-info"},React.createElement(TimeAgo,{time:e.lastUpdated}))))}})
module.exports=UserProjectsNotice
});
KAdefine("third_party/javascript-khansrc/react-components/js/timeago.jsx", function(require, module, exports) {
var React=require("react")
var SetIntervalMixin=require("./set-interval-mixin.jsx")
var moment=require("moment")
var TimeAgo=React.createClass({displayName:"TimeAgo",mixins:[SetIntervalMixin],render:function(){return React.createElement("span",null,moment(this.props.time).fromNow())},componentDidMount:function(){var e=this.props.refreshMillis||6e4
this.setInterval(this.forceUpdate.bind(this),e)}})
module.exports=TimeAgo
});
; KAdefine.updatePathToPackageMap({"javascript/cs-topic-package/scratchpad-browse-list-view.js": "cs-topic.js", "javascript/cs-topic-package/scratchpad-guidelines-view.js": "cs-topic.js", "javascript/projectfeedback-package/projectfeedback-form.jsx": "projectfeedback.js", "javascript/scratchpad-base-package/scratchpads.js": "scratchpad-base.js", "javascript/topic-discussion-package/discussion-view.js": "topic-discussion.js"});
