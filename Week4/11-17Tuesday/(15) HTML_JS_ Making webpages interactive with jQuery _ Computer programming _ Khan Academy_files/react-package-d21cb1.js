KAdefine("javascript/react-package/userhoverable.jsx", function(require, module, exports) {
var React=require("react")
var ReactDOM=require("react-dom")
var i18n=require("../shared-package/i18n.js")
var HoverCard=require("../shared-package/hover-card.js")
var UserHoverable=React.createClass({displayName:"UserHoverable",propTypes:{user:React.PropTypes.shape({kaid:React.PropTypes.string.isRequired,nickname:React.PropTypes.string,avatarSrc:React.PropTypes.string.isRequired}).isRequired},handleMouseEnter:function(){HoverCard.createHoverCardQtip(ReactDOM.findDOMNode(this))},render:function(){var e=this.props.user
if(!e.nickname){return React.createElement("span",null,i18n._("Anonymous"))}return React.createElement("a",{className:"discussion-author",onMouseEnter:this.handleMouseEnter,"data-user-kaid":e.kaid},e.avatarSrc&&React.createElement("img",{className:"discussion-author-avatar",src:e.avatarSrc}),React.createElement("span",{className:"sr-only"},i18n._("View profile for:")," "),e.nickname)}})
module.exports=UserHoverable
});
KAdefine("javascript/react-package/throbber-grid.jsx", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
var ThrobberGrid=React.createClass({displayName:"ThrobberGrid",propTypes:{className:React.PropTypes.string},render:function(){var e="throbber-grid "+(this.props.className||"")
if($("body").is(".ie.lte9")){return React.createElement("div",{className:e},React.createElement("img",{className:"throbber-fallback",src:"/images/throbber-full.gif"}))}return React.createElement("div",{className:e},React.createElement("div",{className:"throbber-row clearfix"},React.createElement("div",{className:"block-0 throbber-block"}),React.createElement("div",{className:"block-1 throbber-block"}),React.createElement("div",{className:"block-2 throbber-block"})),React.createElement("div",{className:"throbber-row clearfix"},React.createElement("div",{className:"block-7 throbber-block"}),React.createElement("div",{className:"block-8 throbber-block"}),React.createElement("div",{className:"block-3 throbber-block"})),React.createElement("div",{className:"throbber-row clearfix"},React.createElement("div",{className:"block-6 throbber-block"}),React.createElement("div",{className:"block-5 throbber-block"}),React.createElement("div",{className:"block-4 throbber-block"})))}})
module.exports=ThrobberGrid
});
KAdefine("javascript/react-package/countdown-view.jsx", function(require, module, exports) {
var React=require("react")
var CountdownView=React.createClass({displayName:"CountdownView",propTypes:{targetDate:React.PropTypes.instanceOf(Date).isRequired,onFinished:React.PropTypes.func},getTotalMs:function(){var e=new Date
return Math.max(this.props.targetDate-e,0)},componentDidMount:function(){this.update(true)},componentWillUnmount:function(){clearTimeout(this.timeout)},update:function(e){if(!e){this.forceUpdate()}var t=this.getTotalMs()
if(t===0){this.props.onFinished&&this.props.onFinished()}else{var a=t%1e3
if(a===0){a=1e3}this.timeout=setTimeout(this.update,Math.max(a,16))}},render:function(){var e=Math.ceil(this.getTotalMs()/1e3)
var t=e%60
var a=Math.floor(e/60)%60
var i=Math.floor(e/60/60)
var o=("0"+i).slice(-2)+":"+("0"+a).slice(-2)+":"+("0"+t).slice(-2)
return React.createElement("div",{className:"countdown"},o)}})
module.exports=CountdownView
});
KAdefine("javascript/react-package/modal.jsx", function(require, module, exports) {
require("../../third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-modal.js")
var $=require("jquery")
var classNames=require("classnames")
var React=require("react")
var ReactDOM=require("react-dom")
var Modal=React.createClass({displayName:"Modal",propTypes:{className:React.PropTypes.string,keyboard:React.PropTypes.bool,onClose:React.PropTypes.func,backdrop:React.PropTypes.oneOfType([React.PropTypes.bool,React.PropTypes.string]),forceTop:React.PropTypes.bool,preventScrollOnShow:React.PropTypes.bool},render:function(){var e=classNames({modal:true,"modal-force-top":this.props.forceTop})
e+=" "+this.props.className
return React.createElement("div",babelHelpers._extends({},this.props,{tabIndex:this.props.tabIndex,className:e}))},getDefaultProps:function(){return{className:"",onClose:function(){},keyboard:true,backdrop:true,tabIndex:"-1",preventScrollOnShow:false}},handleClose:function(){this.props.onClose()
if(this.state.activeElement){this.state.activeElement.focus()}},componentWillMount:function(){this.setState({activeElement:document.activeElement})},componentDidMount:function(){var e=$(ReactDOM.findDOMNode(this))
if(this.props.preventScrollOnShow){e.css({top:$(window).scrollTop()})}e.on("hidden.bs.modal",this.handleClose).modal({keyboard:this.props.keyboard,backdrop:this.props.backdrop})
if(this.props.forceTop){$(".modal-backdrop").addClass("modal-force-top")}},componentWillUnmount:function(){$(".modal-backdrop").removeClass("modal-force-top")
$(ReactDOM.findDOMNode(this)).modal("hide").off("hidden.bs.modal",this.handleClose)}})
module.exports=Modal
});
KAdefine("javascript/react-package/maybe-link.jsx", function(require, module, exports) {
var React=require("react")
var MaybeLink=React.createClass({displayName:"MaybeLink",propTypes:{href:React.PropTypes.string},render:function(){if(this.props.href!=null){return React.createElement("a",this.props)}else{return React.createElement("span",babelHelpers._extends({},this.props,{className:"maybe-link-loading "+(this.props.className||"")}),React.createElement("i",{className:"icon-spinner icon-spin"})," ",this.props.children)}}})
module.exports=MaybeLink
});
KAdefine("javascript/react-package/age-selector.jsx", function(require, module, exports) {
var React=require("react")
var _=require("underscore")
var i18n=require("../shared-package/i18n.js")
var Select=require("./select.jsx")
var AgeSelector=React.createClass({displayName:"AgeSelector",render:function(){var e=1
var r=140
var t=_.times(r-e+1,function(r){return[r+e,r+e]})
return React.createElement(Select,babelHelpers._extends({},this.props,{options:t,blankText:i18n._("Age")}))}})
module.exports=AgeSelector
});
KAdefine("javascript/react-package/select.jsx", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jquery-migrate/jquery-migrate-1.1.1.js")
var $=require("jquery")
var classNames=require("classnames")
var React=require("react")
var _=require("underscore")
var $_=require("../shared-package/i18n.js").$_
var Select=React.createClass({displayName:"Select",propTypes:{options:React.PropTypes.array.isRequired,onChange:React.PropTypes.func.isRequired,value:React.PropTypes.string,hideBlank:React.PropTypes.bool,classes:React.PropTypes.string},getDefaultProps:function(){return{blankText:$_(null,"Unspecified"),blankValue:"unspecified"}},onChange:function(e){this.props.onChange(e.target.value)},render:function(){var e={}
if($.browser.webkit){e={paddingTop:0,paddingBottom:0}}var a=this.props.options
if(!this.props.hideBlank){a=[[this.props.blankValue,this.props.blankText]].concat(a)}var r=!this.props.value||this.props.value===this.props.blankValue
var s=classNames({"simple-input ui-corner-all":true,"select-default":r})
s+=" "+this.props.classes
return React.createElement("select",babelHelpers._extends({},this.props,{style:e,onChange:this.onChange,className:s+" "+(this.props.className||"")}),_.map(a,function(e){return React.createElement("option",{value:e[0],key:e[0]},e[1])}))}})
module.exports=Select
});
KAdefine("javascript/react-package/backbone-state-mixin.jsx", function(require, module, exports) {
var _=require("underscore")
var BackboneStateMixin=function(t){var e=_.uniqueId("backboneStateMixin")
function n(n){var i=n[e]
var r=t.getModel(n.props)
if(i.model===r){return}o(n)
r.on("change",a)
i.model=r
i.listener=a
function a(){n.setState(t.getState(r))}}function o(t){var n=t[e]
var o=n.model
if(o){o.off("change",n.listener)}}return{getInitialState:function(){var e=t.getModel(this.props)
return t.getState(e)},componentDidMount:function(){this[e]={}
n(this)},componentWillReceiveProps:function(e){n(this)
var o=t.getModel(e)
this.setState(t.getState(o))},componentWillUnmount:function(){o(this)}}}
module.exports=BackboneStateMixin
});
KAdefine("javascript/react-package/state-from-store-mixin.jsx", function(require, module, exports) {
var _=require("underscore")
var StateFromStore=function(t){var e=_.uniqueId("StateFromStoreMixin")
var a=function(t,e,a){var n={}
n[e]=a
if(t.isMounted()){t.setState(n)}}
var n=function(a,n,r,i){i=i||a.props
var o=a[e].fetchParamsCache
var c=t[n]
var s=null
if(c.getFetchParams){s=c.getFetchParams(i)}if(r&&_.isEqual(o[n],s)){return{stateData:null,didFetch:false}}o[n]=s
var u=c.fetch(c.store,s)
return{stateData:u,didFetch:true}}
var r=function(t,e){var r=n(t,e,false).stateData
a(t,e,r)}
var i=function(t,e,r){var i=n(t,e,true,r)
if(i.didFetch){var o=i.stateData
a(t,e,o)}}
var o=function(a){var n=a[e].changeListeners
_.each(t,function(t,e){var i=function(){return r(a,e)}
n[e]=i
t.store.addChangeListener(i)})}
var c=function(a){var n=a[e].changeListeners
_.each(t,function(t,e){t.store.removeChangeListener(n[e])
delete n[e]})}
var s=function(e,a){Object.keys(t).forEach(function(t){i(e,t,a)})}
return{getInitialState:function(){this[e]={fetchParamsCache:{},changeListeners:{}}
var a={}
Object.keys(t).forEach(function(t){var e=n(this,t,false).stateData
a[t]=e},this)
return a},componentDidMount:function(){o(this)},componentWillUnmount:function(){c(this)},componentWillReceiveProps:function(t){s(this,t)}}}
module.exports=StateFromStore
});
KAdefine("javascript/react-package/task-preview.jsx", function(require, module, exports) {
var React=require("react")
var TaskPreview=React.createClass({displayName:"TaskPreview",propTypes:{taskType:React.PropTypes.string.isRequired,thumbnailUrl:React.PropTypes.string},render:function(){if(this.props.taskType==="practice"||this.props.taskType==="program"||this.props.taskType==="article"){return React.createElement("div",{className:"task-preview"},React.createElement("img",{src:this.props.thumbnailUrl}))}else if(this.props.taskType==="video"){var e={backgroundImage:"url("+this.props.thumbnailUrl+")"}
return React.createElement("div",{className:"task-preview video-task"},React.createElement("div",{className:"video-thumbnail-container",style:e},React.createElement("div",{className:"thumbnail-transparent-black"}),React.createElement("div",{className:"play-icon-container"},React.createElement("i",{className:"icon-play"}))))}else{return React.createElement("div",{className:"task-preview"})}}})
module.exports=TaskPreview
});
KAdefine("javascript/react-package/kui/button.jsx", function(require, module, exports) {
var $=require("jquery")
var classNames=require("classnames")
var React=require("react")
var i18n=require("../../shared-package/i18n.js")
var KUIButton=React.createClass({displayName:"KUIButton",propTypes:{onClick:React.PropTypes.func,href:React.PropTypes.string,type:React.PropTypes.oneOf(["button","submit"]).isRequired,typeStyle:React.PropTypes.oneOf(["button","submit"]),label:React.PropTypes.node,use:React.PropTypes.oneOf(["primary","secondary","gray","white"]),domainSlug:React.PropTypes.string,progress:React.PropTypes.oneOf(["complete","started","unstarted"]),disabled:React.PropTypes.bool,width:React.PropTypes.string,borderless:React.PropTypes.bool,shadow:React.PropTypes.bool,transparent:React.PropTypes.bool,size:React.PropTypes.oneOf(["normal","small"])},getDefaultProps:function(){return{use:"primary",width:"auto",progress:"complete",borderless:false,shadow:false,transparent:false,disabled:false,size:"normal"}},getLabel:function(){return this.props.label!=null?this.props.label:this.props.type==="submit"?i18n._("Submit"):""},handleLinkClick:function(e){if(this.props.disabled){e.preventDefault()
return}var t
if(this.props.onClick){t=this.props.onClick(e)}if(this.props.type==="submit"&&t!==false&&!e.defaultPrevented){var s=$("<button type='submit' style='display:none'/>")
s.insertAfter(e.target)
s.click()
s.remove()}if(!this.props.href){e.preventDefault()}return t},render:function(){var e=this.props.domainSlug
var t=this.props.progress
var s=this.props.typeStyle||this.props.type
var r=classNames({"kui-button":true,"kui-button-submit":s==="submit","kui-button-plain":s==="button","kui-button-borderless":this.props.borderless,"kui-button-shadow":this.props.shadow,"kui-button-disabled":this.props.disabled,"kui-button-small":this.props.size==="small","kui-button-primary":!e&&this.props.use==="primary","kui-button-secondary":!e&&this.props.use==="secondary","kui-button-gray":!e&&this.props.use==="gray","kui-button-white":this.props.use==="white","kui-button-domain":!!e,"kui-button-complete":e&&t==="complete","kui-button-transparent":this.props.transparent})+(e?" kui-button-domain-"+e:"")
return React.createElement("a",{role:"button","aria-disabled":this.props.disabled?"true":"false",onClick:this.handleLinkClick,href:this.props.href||"javascript:void(0)",className:r,style:{width:this.props.width}},this.getLabel())}})
module.exports=KUIButton
});
KAdefine("javascript/react-package/kui/checkbox.jsx", function(require, module, exports) {
var classNames=require("classnames")
var React=require("react")
var KUICheckbox=React.createClass({displayName:"KUICheckbox",propTypes:{checked:React.PropTypes.bool,disabled:React.PropTypes.bool,onChange:React.PropTypes.func,onFocus:React.PropTypes.func,onBlur:React.PropTypes.func,name:React.PropTypes.string},getInitialState:function(){return{focused:false}},handleFocus:function(e){this.setState({focused:true})
if(this.props.onFocus){return this.props.onFocus(e)}},handleBlur:function(e){this.setState({focused:false})
if(this.props.onBlur){return this.props.onBlur(e)}},render:function(){return React.createElement("div",{className:classNames({"kui-checkbox":true,"kui-checkbox-checked":this.props.checked,"kui-checkbox-disabled":this.props.disabled,"kui-checkbox-focused":this.state.focused})},this.props.checked&&React.createElement("i",{className:"kui-checkbox__check icon-ok","aria-hidden":"true"}),React.createElement("input",{type:"checkbox",className:"kui-checkbox__input",name:this.props.name,checked:this.props.checked,disabled:this.props.disabled,onChange:this.props.onChange,onFocus:this.handleFocus,onBlur:this.handleBlur}))}})
module.exports=KUICheckbox
});
KAdefine("javascript/react-package/kui/labeled-field.jsx", function(require, module, exports) {
var React=require("react")
var ReactDOM=require("react-dom")
var classNames=require("classnames")
var _=require("underscore")
var KUILabeledField=React.createClass({displayName:"KUILabeledField",propTypes:{autoFocus:React.PropTypes.bool,caption:React.PropTypes.node,defaultValue:React.PropTypes.string,disabled:React.PropTypes.bool,error:React.PropTypes.string,hasError:React.PropTypes.any,name:React.PropTypes.string,placeholder:React.PropTypes.string,pattern:React.PropTypes.string,showTitle:React.PropTypes.bool,title:React.PropTypes.string.isRequired,type:React.PropTypes.oneOf(["text","password","email"]).isRequired,value:React.PropTypes.string,onChange:React.PropTypes.func,onClick:React.PropTypes.func,onKeyPress:React.PropTypes.func},getDefaultProps:function(){return{type:"text",showTitle:true}},getInitialState:function(){return{id:_.uniqueId("kui_labeled_field_")}},getInputElem:function(){return ReactDOM.findDOMNode(this.refs.input)},handleTitleClick:function(){this.getInputElem().focus()},render:function(){var e=this.props.hasError===undefined?this.props.error:this.props.hasError
var t=null
if(e){t=React.createElement("div",{id:this.state.id+"-error",className:"kui-labeledfield__error"},this.props.error)}else if(!this.props.showTitle){t=React.createElement("div",{id:this.state.id,className:"sr-only"},this.props.placeholder)}return React.createElement("div",{className:"kui-labeledfield"},this.props.showTitle&&React.createElement("div",{className:"kui-labeledfield__title",onClick:this.handleTitleClick,id:this.state.id},this.props.title),t,React.createElement("input",{ref:"input","aria-invalid":!!this.props.error,"aria-labelledby":this.state.id+(!!this.props.error?"-error":""),autoFocus:this.props.autoFocus,className:classNames({"kui-labeledfield__input":true,"kui-labeledfield__input-has-error":e}),defaultValue:this.props.defaultValue,disabled:this.props.disabled,name:this.props.name,placeholder:this.props.placeholder,pattern:this.props.pattern,type:this.props.type,value:this.props.value,onChange:this.props.onChange,onClick:this.props.onClick,onKeyPress:this.props.onKeyPress}),this.props.caption&&React.createElement("div",{className:"kui-labeledfield__caption"},this.props.caption))}})
module.exports=KUILabeledField
});
KAdefine("javascript/react-package/kui/labeled-textarea.jsx", function(require, module, exports) {
var classNames=require("classnames")
var React=require("react")
var ReactDOM=require("react-dom")
var KUITextArea=React.createClass({displayName:"KUITextArea",propTypes:{autoFocus:React.PropTypes.bool,caption:React.PropTypes.node,defaultValue:React.PropTypes.string,disabled:React.PropTypes.bool,error:React.PropTypes.string,height:React.PropTypes.string,onChange:React.PropTypes.func,placeholder:React.PropTypes.string,title:React.PropTypes.string.isRequired,value:React.PropTypes.string,rows:React.PropTypes.number,onClick:React.PropTypes.func},handleTitleClick:function(){ReactDOM.findDOMNode(this.refs.input).focus()},render:function(){return React.createElement("div",{className:"kui-labeledtextarea"},React.createElement("div",{className:"kui-labeledtextarea__title",onClick:this.handleTitleClick},this.props.title),this.props.error&&React.createElement("div",{className:"kui-labeledtextarea__error"},this.props.error),React.createElement("textarea",{ref:"input",autoFocus:this.props.autoFocus,className:classNames({"kui-labeledtextarea__input":true,"kui-labeledtextarea__input-has-error":!!this.props.error}),disabled:this.props.disabled,defaultValue:this.props.defaultValue,placeholder:this.props.placeholder,value:this.props.value,rows:this.props.rows,onChange:this.props.onChange,onClick:this.props.onClick,style:{height:this.props.height}}),this.props.caption&&React.createElement("div",{className:"kui-labeledtextarea__caption"},this.props.caption))}})
module.exports=KUITextArea
});
KAdefine("javascript/react-package/style-constants.js", function(require, module, exports) {
module.exports={black:"#000000",grayDarker:"#333333",grayDark:"#555555",gray:"#999999",grayLight:"#AAAAAA",grayLighter:"#DDDDDD",white:"#FFFFFF",blue:"#005A88",blueDark:"#2C3747",green:"#76A005",red:"#CF5044",yellow:"#FFC40D",orange:"#BF4F04",pink:"#C3325F",purple:"#7A43B6",bodyBackground:"#FFFFFF",textColor:"#444444",linkColor:"#005987",linkColorHover:"#678D00",sansFontFamily:"'Helvetica Neue',Helvetica,Arial,sans-serif",serifFontFamily:"Georgia,'Times New Roman',Times,serif",monoFontFamily:"Monaco,Menlo,Consolas,'Courier New',monospace",baseFontSize:"14px",baseFontFamily:"'Proxima Nova',sans-serif",baseLineHeight:"20px",altFontFamily:"Georgia,'Times New Roman',Times,serif",headingsFontFamily:"inherit",headingsFontWeight:"bold",headingsColor:"inherit",fontSizeLarge:"18px",fontSizeSmall:"12px",fontSizeMini:"10.5px",paddingLarge:"11px 19px",paddingSmall:"2px 10px",paddingMini:"0 6px",baseBorderRadius:"4px",borderRadiusLarge:"6px",borderRadiusSmall:"3px",tableBackground:"#000000",tableBackgroundAccent:"#F9F9F9",tableBackgroundHover:"#F5F5F5",tableBorder:"#DDDDDD",btnBackground:"#FFFFFF",btnBackgroundHighlight:"rgb(230, 230, 230)",btnBorder:"#CCCCCC",btnPrimaryBackground:"#0088CC",btnPrimaryBackgroundHighlight:"rgb(0, 68, 204)",btnInfoBackground:"#5BC0DE",btnInfoBackgroundHighlight:"#2F96B4",btnSuccessBackground:"#62C462",btnSuccessBackgroundHighlight:"#51A351",btnWarningBackground:"rgb(250, 165, 46)",btnWarningBackgroundHighlight:"#F89406",btnDangerBackground:"#EE5F5B",btnDangerBackgroundHighlight:"#BD362F",btnInverseBackground:"#444444",btnInverseBackgroundHighlight:"#222222",inputBackground:"#FFFFFF",inputBorder:"#CCCCCC",inputBorderRadius:"4px",inputDisabledBackground:"#EEEEEE",formActionsBackground:"#F5F5F5",inputHeight:"30px",dropdownBackground:"#FFFFFF",dropdownBorder:"rgba(0, 0, 0, 0.2)",dropdownDividerTop:"#E5E5E5",dropdownDividerBottom:"#FFFFFF",dropdownLinkColor:"#333333",dropdownLinkColorHover:"#FFFFFF",dropdownLinkColorActive:"#FFFFFF",dropdownLinkBackgroundActive:"#0088CC",dropdownLinkBackgroundHover:"#0088CC",zindexDropdown:"1000",zindexPopover:"1010",zindexTooltip:"1030",zindexFixedNavbar:"1030",zindexModalBackdrop:"1040",zindexModal:"1050",iconSpritePath:"../img/glyphicons-halflings.png",iconWhiteSpritePath:"../img/glyphicons-halflings-white.png",placeholderText:"#999999",hrBorder:"#EEEEEE",horizontalComponentOffset:"180px",wellBackground:"#F5F5F5",navbarCollapseWidth:"979px",navbarCollapseDesktopWidth:"980px",navbarHeight:"40px",navbarBackgroundHighlight:"#FFFFFF",navbarBackground:"rgb(242, 242, 242)",navbarBorder:"rgb(214, 214, 214)",navbarText:"#777777",navbarLinkColor:"#777777",navbarLinkColorHover:"#333333",navbarLinkColorActive:"#555555",navbarLinkBackgroundHover:"#000000",navbarLinkBackgroundActive:"rgb(230, 230, 230)",navbarBrandColor:"#777777",navbarInverseBackground:"#111111",navbarInverseBackgroundHighlight:"#222222",navbarInverseBorder:"#252525",navbarInverseText:"#999999",navbarInverseLinkColor:"#999999",navbarInverseLinkColorHover:"#FFFFFF",navbarInverseLinkColorActive:"#FFFFFF",navbarInverseLinkBackgroundHover:"#000000",navbarInverseLinkBackgroundActive:"#111111",navbarInverseSearchBackground:"rgb(23, 23, 23)",navbarInverseSearchBackgroundFocus:"#FFFFFF",navbarInverseSearchBorder:"#111111",navbarInverseSearchPlaceholderColor:"#CCCCCC",navbarInverseBrandColor:"#999999",paginationBackground:"#FFFFFF",paginationBorder:"#DDDDDD",paginationActiveBackground:"#F5F5F5",heroUnitBackground:"#EEEEEE",heroUnitHeadingColor:"inherit",heroUnitLeadColor:"inherit",warningText:"#C09853",warningBackground:"#FCF8E3",warningBorder:"rgb(251, 239, 213)",errorText:"#B94A48",errorBackground:"#F2DEDE",errorBorder:"rgb(238, 211, 215)",successText:"#468847",successBackground:"#DFF0D8",successBorder:"rgb(215, 233, 200)",infoText:"#4A7C17",infoBackground:"#EDF2DF",infoBorder:"rgb(230, 233, 200)",tooltipColor:"#FFFFFF",tooltipBackground:"#000000",tooltipArrowWidth:"5px",tooltipArrowColor:"#000000",popoverBackground:"#FFFFFF",popoverArrowWidth:"10px",popoverArrowColor:"#FFFFFF",popoverTitleBackground:"rgb(247, 247, 247)",popoverArrowOuterWidth:"11px",popoverArrowOuterColor:"rgba(0, 0, 0, 0.25)",gridColumns:"12",gridColumnWidth:"60px",gridGutterWidth:"20px",gridRowWidth:"940px",gridColumnWidth1200:"70px",gridGutterWidth1200:"30px",gridRowWidth1200:"1170px",gridColumnWidth768:"42px",gridGutterWidth768:"20px",gridRowWidth768:"724px",fluidGridColumnWidth:"6.382978723404255%",fluidGridGutterWidth:"2.127659574468085%",fluidGridColumnWidth1200:"5.982905982905983%",fluidGridGutterWidth1200:"2.564102564102564%",fluidGridColumnWidth768:"5.801104972375691%",fluidGridGutterWidth768:"2.7624309392265194%",kaGreen:"#639B24",kaGreenLight:"#BED47A",kaBlue:"#314453",kaBlueLight:"#4D6779",grayExtraDark:"#111111",grayExtraLight:"#EEEEEE",graySuperLight:"#F7F7F7",whiteDark:"#FDFDFD",blueDarkUnsaturated:"#3B414E",blueDarkSaturated:"#1F3043",blueLight:"#A9C0D1",greenLight:"#C6D1AD",greenDark:"#356700",yellowGreen:"#9DB63B",okGreen:"#A7CF5B",coral:"#EE6666",grayBlue:"#9AB3B9",lightPageBackground:"#FDFDFD",yclaBlue:"#49BAD5",yclaTeal:"#56D0B3",yclaTealDark:"#50C1A7",yclaGreenDark:"#3D9A82",yclaGreen:"#81C262",homepageBlue:"#46A8BF",homepageGreen:"#2B8E7B",streakColor:"#F79734",facebookColor:"#1A60A2",blueGoogleColor:"#2CAFE2",redGoogleColor:"#BF4434",homepageColor:"#2D585E",lightTextColor:"#898989",fontSizeTiny:"11px",fontSizeNormal:"14px",fontSizeMedium:"16px",fontSizeExtraLarge:"24px",fontSizeHuge:"36px",fontSizeBakana:"48px",fontSizeBananas:"60px",headerFontFamily:"'Proxima Nova Semibold',sans-serif",headerLightFontFamily:"'Proxima Nova',sans-serif",fixedWidthFontFamily:"'Helvetica Neue',Helvetica,Arial,sans-serif",contentPadding:"20px",primaryButtonBackground:"#89B908",primaryButtonBorder:"#76A005",buttonTextColor:"rgb(97, 97, 97)",buttonBorderRadius:"3px",basicBorderColor:"#CCCCCC",minContainerWidth:"1000px",maxContainerWidth:"1200px",formHintColor:"#999999",guidelineExampleText:"#606060",hoverCardWidth:"450px",menuHighlightColor:"#96AB4F",menuHighlightBorderColor:"#76A005",menuActiveTextColor:"#FFFFFF",menuInactiveTextColor:"#444444",menuSubheaderTextColor:"rgb(82, 82, 82)",menuBorderColor:"#94A170",unreadBackgroundColor:"#ECEEF4",menuLineHeight:"18px",menuSubheaderLineHeight:"17px",menuSubheaderFontSize:"9px",notificationBarColor:"#4858A4",modalBodyTopPadding:"20px",modalDialogPadding:"15px",modalSectionPadding:"9px",defaultDomainColor:"#314453",defaultSubjectColor:"#4D6779",defaultTopicColor:"#6A8DA6",defaultHoverColor:"#314453",defaultLinkColor:"#314453",defaultLinkHoverColor:"#6A8DA6",scienceDomainColor:"#94424F",scienceSubjectColor:"#9D4A5A",scienceTopicColor:"#C55F73",scienceHoverColor:"#94424F",scienceLinkColor:"#94424F",scienceLinkHoverColor:"#C55F73",humanitiesDomainColor:"#AD3434",humanitiesSubjectColor:"#C13B31",humanitiesTopicColor:"#D24A45",humanitiesHoverColor:"#AD3434",humanitiesLinkColor:"#AD3434",humanitiesLinkHoverColor:"#D24A45",economicsDomainColor:"#B77033",economicsSubjectColor:"#BF7B34",economicsTopicColor:"#D1933B",economicsHoverColor:"#B77033",economicsLinkColor:"#B77033",economicsLinkHoverColor:"#D1933B",csDomainColor:"#437A39",csSubjectColor:"#53893E",csTopicColor:"#689B51",csHoverColor:"#437A39",csLinkColor:"#437A39",csLinkHoverColor:"#689B51",partnerContentDomainColor:"#218270",partnerContentSubjectColor:"#2C8D7B",partnerContentTopicColor:"#329A86",partnerContentHoverColor:"#218270",partnerContentLinkColor:"#218270",partnerContentLinkHoverColor:"#329A86",mathDomainColor:"#1C758A",mathSubjectColor:"#46A8BF",mathTopicColor:"#4FBAD4",mathHoverColor:"#1C758A",mathLinkColor:"#1C758A",mathLinkHoverColor:"#4FBAD4",testPrepDomainColor:"#644172",testPrepSubjectColor:"#7E5F8E",testPrepTopicColor:"#9A72AC",testPrepHoverColor:"#644172",testPrepLinkColor:"#644172",testPrepLinkHoverColor:"#9A72AC",satDomainColor:"#0084CE",satSubjectColor:"#0084CE",satTopicColor:"#0084CE",satHoverColor:"#0084CE",satLinkColor:"#0084CE",satLinkHoverColor:"#0084CE",colorProficient:"#1C758A",colorPracticed:"rgb(42, 174, 203)",colorMastery1:"rgb(36, 152, 178)",colorMastery2:"rgb(33, 137, 161)",colorMastery3:"#1C758A",colorSuggested:"#73982C",colorReview:"#E35D04",colorNotStarted:"#CCCCCC",colorStarted:"#C7E5F7",colorStruggling:"#C30202",colorCoachRec:"#4C7E99",colorPersonal:"#00809C",colorPractice:"#96D9FF",colorEnergyPoints:"#005987",pureSmMin:"568px",pureMdMin:"768px",pureLgMin:"1024px",pureXlMin:"1280px",pureXsMax:"567px",pureSmMax:"767px",pureMdMax:"1023px",pureLgMax:"1279px"}
});
KAdefine("third_party/javascript-khansrc/aphrodite/dist/aphrodite.js", function(require, module, exports) {
module.exports=function(e){var r={}
function t(n){if(r[n])return r[n].exports
var u=r[n]={exports:{},id:n,loaded:false}
e[n].call(u.exports,u,u.exports,t)
u.loaded=true
return u.exports}t.m=e
t.c=r
t.p=""
return t(0)}([function(e,r,t){e.exports=t(1)},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var n=function(){function e(e,r){var t=[]
var n=true
var u=false
var a=undefined
try{for(var i=e[Symbol.iterator](),o;!(n=(o=i.next()).done);n=true){t.push(o.value)
if(r&&t.length===r)break}}catch(f){u=true
a=f}finally{try{if(!n&&i["return"])i["return"]()}finally{if(u)throw a}}return t}return function(r,t){if(Array.isArray(r)){return r}else if(Symbol.iterator in Object(r)){return e(r,t)}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}()
var u=t(2)
var a=t(3)
var i=function c(e){var r=document.head||document.getElementsByTagName("head")[0]
var t=document.createElement("style")
t.type="text/css"
if(t.styleSheet){t.styleSheet.cssText=e}else{t.appendChild(document.createTextNode(e))}r.appendChild(t)}
var o={create:function l(e){return(0,a.mapObj)(e,function(e){var r=n(e,2)
var t=r[0]
var u=r[1]
return[t,{_name:t+"_"+(0,a.nextID)(),_definition:u}]})}}
var f=function(){var e={}
return function(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++){t[n]=arguments[n]}var a=t.filter(function(e){return e})
if(a.length===0){return""}var o=a.map(function(e){return e._name}).join("-o_O-")
if(!e[o]){var f=(0,u.generateCSS)("."+o,a.map(function(e){return e._definition}))
i(f)
e[o]=true}return o}}()
r["default"]={StyleSheet:o,css:f}
e.exports=r["default"]},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var n=function(){function e(e,r){var t=[]
var n=true
var u=false
var a=undefined
try{for(var i=e[Symbol.iterator](),o;!(n=(o=i.next()).done);n=true){t.push(o.value)
if(r&&t.length===r)break}}catch(f){u=true
a=f}finally{try{if(!n&&i["return"])i["return"]()}finally{if(u)throw a}}return t}return function(r,t){if(Array.isArray(r)){return r}else if(Symbol.iterator in Object(r)){return e(r,t)}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}()
var u=t(3)
var a=function o(e,r){var t=r.reduce(u.recursiveMerge)
var n={}
var a={}
var f={}
Object.keys(t).forEach(function(e){if(e[0]===":"){f[e]=t[e]}else if(e[0]==="@"){a[e]=t[e]}else{n[e]=t[e]}})
return i(e,n)+Object.keys(f).map(function(r){return i(e+r,f[r])}).join("")+Object.keys(a).map(function(r){var t=o(e,[a[r]])
return r+"{"+t+"}"}).join("")}
r.generateCSS=a
var i=function f(e,r){var t=(0,u.objectToPairs)(r).map(function(e){var r=n(e,2)
var t=r[0]
var a=r[1]
return(0,u.kebabifyStyleName)(t)+":"+(0,u.stringifyValue)(t,a)+" !important;"}).join("")
if(t){return e+"{"+t+"}"}else{return""}}
r.generateCSSRuleset=i},function(e,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var t=function(){function e(e,r){var t=[]
var n=true
var u=false
var a=undefined
try{for(var i=e[Symbol.iterator](),o;!(n=(o=i.next()).done);n=true){t.push(o.value)
if(r&&t.length===r)break}}catch(f){u=true
a=f}finally{try{if(!n&&i["return"])i["return"]()}finally{if(u)throw a}}return t}return function(r,t){if(Array.isArray(r)){return r}else if(Symbol.iterator in Object(r)){return e(r,t)}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}()
var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]
for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n)){e[n]=t[n]}}}return e}
var u=function d(e){return Object.keys(e).map(function(r){return[r,e[r]]})}
r.objectToPairs=u
var a=function m(e){var r={}
e.forEach(function(e){var n=t(e,2)
var u=n[0]
var a=n[1]
r[u]=a})
return r}
var i=function b(e,r){return a(u(e).map(r))}
r.mapObj=i
var o=/([A-Z])/g
var f=/^ms-/
var c=function h(e){return e.replace(o,"-$1").toLowerCase()}
var l=function x(e){return c(e).replace(f,"-ms-")}
r.kebabifyStyleName=l
var s=function(){var e=0
return function(){e+=1
return e}}()
r.nextID=s
var v=function g(e,r){if(typeof e!=="object"){return r}var t=n({},e)
Object.keys(r).forEach(function(n){if(t.hasOwnProperty(n)){t[n]=g(e[n],r[n])}else{t[n]=r[n]}})
return t}
r.recursiveMerge=v
var y={animationIterationCount:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridRow:true,gridColumn:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,fillOpacity:true,stopOpacity:true,strokeDashoffset:true,strokeOpacity:true,strokeWidth:true}
var p=function O(e,r){if(typeof r==="number"){if(y[e]){return""+r}else{return r+"px"}}else{return r}}
r.stringifyValue=p}])
});
KAdefine("javascript/node_modules/aphrodite/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/aphrodite/dist/aphrodite.js")
});
