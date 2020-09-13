define("common/color/dark.js",[],function(){
"use strict";
return{
"BG-0":"#111111",
"BG-1":"#1e1e1e",
"BG-2":"#191919",
"BG-3":"#202020",
"BG-4":"#404040",
"BG-5":"#2c2c2c",
"FG-0":"rgba(255, 255, 255, 0.8)",
"FG-HALF":"rgba(255, 255, 255, 0.6)",
"FG-1":"rgba(255, 255, 255, 0.5)",
"FG-2":"rgba(255, 255, 255, 0.3)",
"FG-3":"rgba(255, 255, 255, 0.05)",
RED:"#fa5151",
ORANGE:"#c87d2f",
YELLOW:"#cc9c00",
GREEN:"#74a800",
LIGHTGREEN:"#3eb575",
BRAND:"#07c160",
BLUE:"#10aeff",
INDIGO:"#1196ff",
PURPLE:"#8183ff",
WHITE:"rgba(255, 255, 255, 0.8)",
LINK:"#7d90a9",
TEXTGREEN:"#259c5c",
FG:"white",
BG:"black",
"TAG-TEXT-ORANGE":"rgba(250, 157, 59, 0.6)",
"TAG-BACKGROUND-ORANGE":"rgba(250, 157, 59, 0.1)",
"TAG-TEXT-GREEN":"rgba(6, 174, 86, 0.6)",
"TAG-BACKGROUND-GREEN":"rgba(6, 174, 86, 0.1)",
"TAG-TEXT-BLUE":"rgba(16, 174, 255, 0.6)",
"TAG-BACKGROUND-BLUE":"rgba(16, 174, 255, 0.1)",
"TAG-TEXT-BLACK":"rgba(255, 255, 255, 0.5)",
"TAG-BACKGROUND-BLACK":"rgba(255, 255, 255, 0.05)"
};
});define("common/color/background_color.js",["biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","common/color/light.js","common/color/dark.js"],function(o){
"use strict";
var t=o("biz_wap/jsapi/core.js"),n=o("biz_wap/utils/mmversion.js"),a=o("common/color/light.js"),r=o("common/color/dark.js"),c="BG-2",e=n.gtVersion("7.0.12",!0),l={
nav:[],
top:[],
bottom:[],
callback:null
},i=function(o){
var n=o.matches,a=n?1:0;
t.invoke("setNavigationBarColor",{
color:l.nav[a]
},function(o){
"function"==typeof l.callback&&l.callback(o);
}),t.invoke("setBounceBackground",{
backgroundColor:l.top[a],
footerBounceColor:l.bottom[a]
});
},s=null,u=function(o){
return"string"!=typeof o?!1:/(^#[0-9a-fA-F]{6}$)/.test(o);
},m={
set:function(){
var o=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n="",m="",b="",k="",v="",f="";
o.nav&&o.nav instanceof Array&&(u(o.nav[0])&&(n=o.nav[0]),u(o.nav[1])&&(m=o.nav[1])),
o.top&&o.top instanceof Array&&(u(o.top[0])&&(b=o.top[0]),u(o.top[1])&&(k=o.top[1])),
o.bottom&&o.bottom instanceof Array&&(u(o.bottom[0])&&(v=o.bottom[0]),u(o.bottom[1])&&(f=o.bottom[1])),
!n&&(n=a[c]),!m&&(m=r[c]),!b&&(b=a[c]),!k&&(k=r[c]),!v&&(v=a[c]),!f&&(f=r[c]),e?(t.invoke("setNavigationBarColor",{
color:n,
wxcolor:{
light:n,
dark:m
}
},function(t){
"function"==typeof o.callback&&o.callback(t);
}),t.invoke("setBounceBackground",{
backgroundColor:b,
footerBounceColor:v,
wxbackgroundColor:{
light:b,
dark:k
},
wxfooterBounceColor:{
light:v,
dark:f
}
})):(l.nav=[n,m],l.top=[b,k],l.bottom=[v,f],l.callback=o.callback,null===s&&(s=window.matchMedia("(prefers-color-scheme: dark)"),
s.addListener(i)),i(s));
}
};
return m;
});define("appmsg/wxwork_hidden.js",["biz_wap/utils/mmversion.js","biz_common/dom/class.js"],function(e){
"use strict";
function a(e){
e&&(e.style.display="none");
}
var t=e("biz_wap/utils/mmversion.js"),o=e("biz_common/dom/class.js"),r=t.is_wxwork,s={
profileBt:document.getElementById("profileBt"),
profileName:document.getElementById("js_name"),
shareAuthor:document.getElementById("js_share_author"),
accoutNameInner:document.getElementsByClassName("account_nickname_inner"),
reportArticle:document.getElementById("js_report_article3"),
goProfile:document.getElementsByClassName("js_go_profile"),
authorName:document.getElementById("js_author_name")
};
r&&(s.profileName&&o.addClass(s.profileName,"tips_global_primary"),s.shareAuthor&&o.addClass(s.shareAuthor,"tips_global_primary"),
s.authorName&&o.addClass(s.authorName,"tips_global_primary"),a(s.reportArticle),
"5"!==window.item_show_type&&(s.goProfile.length&&o.addClass(s.goProfile[0],"tips_global_primary"),
s.accoutNameInner.length&&o.addClass(s.accoutNameInner[0],"tips_global_primary")));
});define("appmsg/getForbidConfig.js",[],function(){
"use strict";
return function(n){
window.getWXLongPressImageEventConfig=function(){
return n.isPaySubscribe?{
forbidForward:1
}:{
forbidForward:0
};
};
};
});define("biz_wap/utils/jsmonitor_report.js",["biz_common/utils/monitor.js","biz_wap/utils/ajax.js","biz_wap/utils/log.js"],function(o){
"use strict";
function n(o,t){
r=window.setTimeout(function(){
o(),n(o,t);
},t);
}
var t=o("biz_common/utils/monitor.js"),i=o("biz_wap/utils/ajax.js"),e=o("biz_wap/utils/log.js"),r=null,s={};
return window.__jsmonitorReport?window.__jsmonitorReport:(window.__monitor_unload_has_done__=!1,
s.setSum=function(o,n,i){
return t.setSum(o,n,i),s;
},s.setAvg=function(o,n,i){
return t.setAvg(o,n,i),s;
},s.setLogs=function(o){
return t.setLogs(o),s;
},s.send=function(o){
return o!==!1&&(o=!0),t.send(o,i),s;
},n(function(){
s.send();
},1e3),window.addEventListener("unload",function(){
e("[leaveReport in jsmonitor_report 4]"),console.log("[leaveReport in jsmonitor_report 4]"),
window.__monitor_report_has_done__||(e("[leaveReport in jsmonitor_report 5]"),console.log("[leaveReport in jsmonitor_report 5]"),
window.__ajaxtest="2",r&&(window.clearTimeout(r),r=null),s.send(!1),window.__monitor_unload_has_done__=!0);
},!1),window.__jsmonitorReport=s,s);
});var _extends=Object.assign||function(e){
for(var i=1;i<arguments.length;i++){
var t=arguments[i];
for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);
}
return e;
};
define("appmsg/topbar.js",["biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","common/comm_report.js","pages/utils.js","biz_common/dom/event.js","common/utils.js","biz_wap/utils/setMpInfo.js"],function(e){
"use strict";
function i(e){
e="undefined"!=typeof e?e:!1;
var i={
userName:f.userName,
brandName:f.bizNickName,
title:f.title,
brandIcon:f.headImg,
topBarStyle:b?1:0,
topBarShowed:e,
isMenuShowBrandInfo:1,
cover:f.cover,
digest:f.digest
};
if(""!==f.itemShowType&&null!==f.itemShowType&&void 0!==f.itemShowType&&_extends(i,{
itemShowType:f.itemShowType
}),""!==f.showSourceInfo&&_extends(i,{
showSourceInfo:f.showSourceInfo
}),"0"===f.itemShowType)_extends(i,{
isPaySubscribe:window.isPaySubscribe,
forbidForward:window.isPaySubscribe?1:0
});else if("5"===window.item_show_type)_extends(i,{
vid:f.vid,
duration:f.videoDuration,
videoWidth:f.videoWidth,
videoHeight:f.videoHeight
});else{
var t=f.voiceid||0,o=f.duration||0;
_extends(i,{
audioUrl:location.protocol+"//res.wx.qq.com/voice/getvoice?mediaid="+t,
audioLen:o
});
}
v.currentMpInfo(i);
}
function t(){
b&&u.invoke("currentMpInfoShow",{
userName:f.userName,
brandName:f.bizNickName
});
}
function o(){
b&&u.invoke("currentMpInfoHide");
}
function n(){
b&&(i(),g.getScrollTop()>f.showTitleHeight&&t());
}
function r(){
b&&(g.getScrollTop()>f.showTitleHeight?t():o());
}
function a(e){
var i=parseInt(Date.now()/1e3,10);
f.reportData.EnterId=f.reportData.EnterId&&10===f.reportData.EnterId.toString().length?f.reportData.EnterId:i;
var t=1*(g.getScrollTop()+g.getInnerHeight()),o=_extends(f.reportData,{
Event:e,
CurrScreen:3===e?Math.ceil(g.getScrollTop()/g.getInnerHeight()):0,
ExitHeight:3===e?Math.ceil(t):0
});
l.report(17335,o);
}
function s(){
u.on("topbar:click",function(){
a(3);
});
}
function c(){
var e=g.getScrollTop();
e>=f.showTitleHeight&&!N?(N=!0,b?(u.invoke("currentMpInfoShow",{
userName:f.userName,
brandName:f.bizNickName
}),S||(a(1),S=!0)):document.title=f.bizNickName):e<f.showTitleHeight&&N&&(N=!1,b?u.invoke("currentMpInfoHide"):document.title="");
}
function d(){
w.bindVisibilityChangeEvt(function(e){
!e&&g.getScrollTop()>=f.showTitleHeight&&(i(),t());
});
}
function m(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
e.bizNickName||(e.bizNickName=b?"未命名公众号":e.bizNickNameBackup);
for(var t in e)e[t]&&(f[t]=e[t]);
f.bizNickName=f.bizNickName.htmlDecode(),f.title=f.title.htmlDecode(),f.headImg=f.headImg.replace(/\/0$/,"/132"),
i(),s(),d(),w.on(window,"load",function(){
document.title="",c();
}),w.on(window,"scroll",I),window.addEventListener("pageshow",function(e){
e.persisted&&n();
});
}
var u=e("biz_wap/jsapi/core.js"),p=e("biz_wap/utils/mmversion.js"),l=e("common/comm_report.js"),h=e("pages/utils.js"),w=e("biz_common/dom/event.js"),g=e("common/utils.js"),v=e("biz_wap/utils/setMpInfo.js"),f={
showTitleHeight:40,
userName:"",
bizNickName:"",
bizNickNameBackup:"",
title:"",
headImg:"",
voiceid:"",
duration:"",
vid:"",
videoDuration:0,
videoWidth:0,
videoHeight:0,
itemShowType:window.item_show_type,
showSourceInfo:"",
reportData:{},
cover:"",
digest:""
},b=!1,N=!1,S=!1;
b="5"===f.itemShowType?p.isIOS&&p.gtVersion("7.0.12",!0)||p.isAndroid&&p.gtVersion("7.0.12",!0):p.isIOS&&p.gtVersion("7.0.10",!0)||p.isAndroid&&p.gtVersion("7.0.12",!0);
var I=h.throttle(c,50);
return{
setCurrentMpInfo:i,
showCurrentMpInfo:t,
hideCurrentMpInfo:o,
resetTopBar:n,
setTopBar:r,
init:m
};
});define("appmsg/finance_communicate.js",[],function(){
"use strict";
function e(e){
console.info("postPageHeightMessage");
var t=getComputedStyle(n);
window.parent.postMessage({
name:e,
data:parseFloat(t.height)
},"http://finance.qq.com"),window.parent.postMessage({
name:e,
data:parseFloat(t.height)
},"http://gu.qq.com"),window.parent.postMessage({
name:e,
data:parseFloat(t.height)
},"https://gu.qq.com"),window.parent.postMessage({
name:e,
data:parseFloat(t.height)
},"https://wzq.tenpay.com");
}
function t(e){
console.log("[IFRAME RECEIVE MESSAGE]: ",e);
var t;
if(e.origin?t=e.origin:e.originalEvent&&(t=e.originalEvent.origin),/^http(s)?\:\/\/finance\.qq\.com$/.test(t)&&/^http(s)?\:\/\/gu\.qq\.com$/.test(t)&&/^http(s)?\:\/\/wzq\.tenpay\.com$/.test(t)&&e.source){
e.data,document.getElementsByTagName("body")[0],document.getElementById("activity-name"),
document.getElementById("meta_content"),document.getElementById("page-content");
}
}
if(window.parent===window)return!1;
document.getElementsByTagName("html")[0].style.width="1px",document.getElementsByTagName("html")[0].style.minWidth="100%";
var n=(document.getElementById("js_content"),document.getElementById("img-content"),
document.getElementById("page-content")),a=document.getElementsByClassName("rich_media_area_extra")[0];
return a.style.display="none",e("pageHeight"),window.addEventListener("message",t,!1),
{
postPageHeightMessage:e
};
});define("appmsg/loading.js",["tpl/appmsg/loading.html.js"],function(e){
"use strict";
var n=e("tpl/appmsg/loading.html.js"),t=document.createElement("div");
t.innerHTML=n,t=t.children[0];
var a=t.querySelector(".js_loading_content");
return document.querySelector("body").appendChild(t),t.addEventListener("touchstart",function(e){
e.preventDefault();
},!1),{
show:function(){
var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];
a.innerHTML=e,t.style.display="";
},
hide:function(){
t.style.display="none";
}
};
});define("appmsg/pay_report_utils.js",["biz_wap/jsapi/core.js","common/comm_report.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js"],function(e){
"use strict";
function n(e){
var n=arguments.length<=1||void 0===arguments[1]?1:arguments[1];
(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=110809_"+e+"_"+n+"&r="+Math.random();
}
function i(e){
var n=arguments.length<=1||void 0===arguments[1]?1:arguments[1];
r.isIOS?(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=110809_"+e+"_"+n+"&r="+Math.random():r.isAndroid&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=110809_"+(1*e+1)+"_"+n+"&r="+Math.random());
}
var t=e("biz_wap/jsapi/core.js"),o=e("common/comm_report.js"),r=e("biz_wap/utils/mmversion.js"),s=e("biz_wap/utils/device.js"),d={
netType:null
},w=function(e){
t.invoke("getNetworkType",{},function(n){
switch(n.err_msg){
case"network_type:edge":
case"network_type:wwan":
switch(n.detailtype){
case"2g":
d.netType=2;
break;

case"3g":
d.netType=3;
break;

case"4g":
d.netType=4;
break;

default:
d.netType=0;
}
break;

case"network_type:wifi":
d.netType=1;
break;

case"network_type:fail":
d.netType=-1;
break;

default:
d.netType=0;
}
"function"==typeof e&&e();
});
},a=function(e,n,i){
var t=arguments.length<=3||void 0===arguments[3]?"":arguments[3],r=arguments.length<=4||void 0===arguments[4]?"":arguments[4],s=arguments.length<=5||void 0===arguments[5]?"":arguments[5];
o.report(18485,{
bizuin:window.biz,
msgid:1*window.mid,
itemidx:1*window.idx,
price:1*window.paySubscribeInfo.fee,
Preview:1*window.previewPercent,
worthycnt:1*window.paySubscribeInfo.like_cnt,
paidcnt:1*window.paySubscribeInfo.pay_cnt,
is_finished:1*window.is_finished_preview,
PayTime:1*e,
PayResult:1*n,
ErrMsg:t+"",
ErrCodeInt:1*r,
ErrDomain:s+"",
Order_Id:i+"",
EnterId:1*window.enterid
});
},p=function l(e){
if(window.isPaySubscribe)if(null===d.netType)w(function(){
return l(e);
});else{
var n=Math.round(new Date/1e3);
o.report(18488,{
NetType:d.netType,
Bizuin:window.biz,
MsgId:1*window.mid,
itemIdx:1*window.idx,
Url:window.msg_link+"",
Title:window.msg_title+"",
EventTime:n,
EventType:e,
Scene:1*window.source,
Subscene:1*window.subscene,
IsFans:1*window.isFans,
SessionId:window.sessionid+"",
EnterId:1*window.enterid
});
}
},c=function g(e,n){
if(null===d.netType)w(function(){
return g(e,n);
});else{
var i=Math.round(new Date/1e3),t={
NetType:d.netType,
Bizuin:window.biz,
MsgId:1*window.mid,
itemIdx:1*window.idx,
Url:window.msg_link+"",
Title:window.msg_title+"",
EventTime:i,
EventType:e,
Scene:1*window.source,
Subscene:1*window.subscene,
IsFans:1*window.isFans,
SessionId:window.sessionid+"",
EnterId:1*window.enterid
};
void 0!==n&&(t.ActionType=n),o.report(18488,t);
}
},u=function I(e,n){
if(null===d.netType)w(function(){
return I(e,n);
});else{
var i=Math.round(new Date/1e3),t={
NetType:d.netType,
EventTime:i,
EventType:e,
SessionId:window.sessionid+"",
EnterId:1*window.enterid
};
void 0!==n&&(t.ActionType=n),o.report(18488,t);
}
},m=function(e,n,i,t,r,d,w){
o.report(19158,{
BizUin:window.biz,
MsgId:1*window.mid,
ItemIdx:1*window.idx,
OriPrice:window.paySubscribeInfo?1*window.paySubscribeInfo.fee:0,
IAPCurrency:e,
IAPPrice:n,
GetIAPType:i,
GetIAPTime:t,
ProductId:window.payProductId,
EnterId:1*window.enterid,
CountryCode:r,
SystemVer:s.os.version,
GetIAPResult:d,
GetIAPErrMsg:w
});
},y={
report110809:n,
reportPay:a,
reportPayAppmsg:p,
reportPayWall:c,
reportProfile:u,
report110809ForDevice:i,
reportOverseaPay:m
};
return y;
});define("appmsg/popup_report.js",["biz_wap/utils/ajax.js","biz_common/base64.js","biz_common/utils/url/parse.js"],function(e){
"use strict";
function i(e){
r({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+window.biz,
type:"POST",
data:{
logid:17988,
buffer:a.concat(e).join(",")
},
async:!1,
timeout:2e3
});
}
function t(e){
var i=2,t=u.getQuery("__biz",e)||"",n=u.getQuery("mid",e)||"",r=u.getQuery("idx",e)||"";
return t.length&&n.length&&r.length?i=3:-1!==e.indexOf("mp.weixin.qq.com")&&(i=4),
i;
}
function n(e){
var i="",t=u.getQuery("__biz",e)||"",n=u.getQuery("mid",e)||"",r=u.getQuery("idx",e)||"";
return i=-1===e.indexOf("mp.weixin.qq.com")?e:t.length&&n.length&&r.length?t+"_"+n+"_"+r:e;
}
var r=e("biz_wap/utils/ajax.js"),o=e("biz_common/base64.js"),u=e("biz_common/utils/url/parse.js"),a=["",""+o.decode(window.biz),""+window.mid,""+window.idx,""+window.enterid];
return{
report:i,
getRedirectType:t,
getUrlData:n
};
});define("complain/localstorage.js",[],function(){
"use strict";
var t={};
return t=window.localStorage?{
set:function(t,e){
null!==this.get(t)&&this.remove(t),localStorage.setItem(t,e);
},
get:function(t){
var e=localStorage.getItem(t);
return void 0===e?null:e;
},
remove:function(t){
localStorage.removeItem(t);
},
clear:function(){
localStorage.clear();
},
each:function(t){
for(var e,o=localStorage.length,l=0,t=t||function(){};o>l&&(e=localStorage.key(l),
t.call(this,e,this.get(e))!==!1);l++)localStorage.length<o&&(o--,l--);
}
}:{
set:function(){},
get:function(){}
};
});define("common/utils.js",["biz_common/utils/url/parse.js","biz_wap/jsapi/core.js","biz_wap/utils/wapsdk.js","biz_wap/utils/storage.js","biz_wap/utils/device.js","biz_wap/utils/mmversion.js","biz_wap/jsapi/log.js","biz_wap/utils/jsmonitor_report.js","biz_common/dom/event.js"],function(e){
"use strict";
function t(){
return"1"===i.getQuery("isNativePage")||"2"===i.getQuery("isNativePage");
}
function n(e){
var t=arguments.length<=1||void 0===arguments[1]?50:arguments[1],n=void 0;
return function(){
for(var i=arguments.length,o=Array(i),r=0;i>r;r++)o[r]=arguments[r];
var a=this,s=function(){
n=null,e.apply(a,o);
};
n||(n=setTimeout(s,t));
};
}
var i=e("biz_common/utils/url/parse.js"),o=e("biz_wap/jsapi/core.js"),r=e("biz_wap/utils/wapsdk.js"),a=e("biz_wap/utils/storage.js"),s=e("biz_wap/utils/device.js"),c=e("biz_wap/utils/mmversion.js"),u=e("biz_wap/jsapi/log.js"),g=e("biz_wap/utils/jsmonitor_report.js"),p=e("biz_common/dom/event.js");
try{
"undefined"==typeof parent.window.hasListenMpPageAction&&(parent.window.hasListenMpPageAction=!1),
"undefined"==typeof parent.window.hasListenStateChange&&(parent.window.hasListenStateChange=!1);
}catch(l){}
var d=[],f=[],h=new a("history4secondopen"),w="from",m=!1,_={
status:"loading"
},v=[],y={
isNativePage:t,
isNewNativePage:function(){
return"2"===i.getQuery("isNativePage");
},
isOldNativePage:function(){
return"1"===i.getQuery("isNativePage");
},
__useWcSlPlayer:!1,
isWcSlPage:function(){
return y.__useWcSlPlayer;
},
getPlayerType:function(){
return y.isWcSlPage()?3:t()?2:1;
},
getParam:function(e){
if(!e)return null;
var t=location.href.match(new RegExp("(\\?|&)"+e+"=([^&]+)"));
return t?t[2]:null;
},
insertAfter:function(e,t){
var n=t.parentNode;
n.lastChild===t?n.appendChild(e):n.insertBefore(e,t.nextSibling);
},
getInnerHeight:function(){
var e=window.getInnerHeight&&window.getInnerHeight();
return e||window.innerHeight||document.documentElement.clientHeight;
},
getScrollTop:function(){
return document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
},
getDocumentHeight:function(){
return document.body.scrollHeight;
},
getElementActualTop:function(e){
var t=e.getBoundingClientRect(),n=t.top-this.getScrollTop();
return n;
},
getElementTop:function(e){
return e.getBoundingClientRect().top;
},
getElementHeight:function(e){
return e.getBoundingClientRect().height;
},
isScrollEnd:function(e){
return this.getScrollTop()+this.getInnerHeight()+e>=this.getDocumentHeight();
},
listenStateChange:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
f.push(e.cb);
try{
if(parent.window.hasListenStateChange)return;
}catch(t){}
o.on("activity:state_change",function(e){
f.forEach(function(t){
t(e);
});
});
try{
parent.window.hasListenStateChange=!0;
}catch(t){}
},
listenMpPageAction:function(e){
d.push(e);
try{
if(parent.window.hasListenMpPageAction)return;
}catch(t){}
o.on("onMPPageAction",function(e){
d.forEach(function(t){
t(e);
});
});
try{
parent.window.hasListenMpPageAction=!0;
}catch(t){}
},
getIosMainVersion:function(){
var e=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);
return e&&e[1]&&parseInt(e[1].split("_")[0],10);
},
report120081:function(e,t){
r.jsmonitor({
id:120081,
key:e,
value:t
});
},
loadNewPageKeepingHistoryStackIfSecOpen:function(e){
window.__second_open__&&"string"==typeof e&&/^https?:\/\/mp.weixin.qq.com\//.test(e)&&h.set(w,location.href,Date.now()+1e4),
location.href=e.replace(/#.*$/,"")+"#wechat_redirect";
},
initNewPageHistoryStackFromSecOpen:function(){
var e=h.get(w);
if(e&&"string"==typeof e&&/^https?:\/\/mp.weixin.qq.com\//.test(e)&&(h.remove(w),
history&&history.replaceState&&history.pushState)){
var t=location.href;
try{
history.replaceState({
__mock_secopen_history_stack_reload__:1
},"",e),history.pushState({
__mock_secopen_history_stack_reload__:1
},"",t);
}catch(n){
console.error("[initNewPageHistoryStackFromSecOpen]",n);
}
}
m||(m=!0,window.addEventListener("popstate",function(e){
e.state&&1===e.state.__mock_secopen_history_stack_reload__&&location.reload();
}));
},
initWebCompt:function(e,t){
(s.os.iphone&&c.isWechat&&c.gtVersion("7.0.14",1)||s.os.android&&c.isWechat&&c.gtVersion("7.0.15",1))&&!function(){
var n=function(){
for(;v.length;){
var e=v.shift();
e(_);
}
};
document.addEventListener("WeixinOpenTagsReady",function(){
_={
status:"ready"
},n();
}),document.addEventListener("WeixinOpenTagsError",function(e){
_={
status:"error",
error:e&&e.detail&&e.detail.errMsg
},n();
}),o.invoke("handleMPPageAction",{
action:"wxConfig",
appid:"wxmpfakeid",
webComptList:e
},function(i){
console.log("wx config web compt result",e,i),u.info("wx config web compt result",e,i),
i&&i.err_msg&&-1===i.err_msg.indexOf(":ok")&&(_={
status:"error",
error:i.err_msg
},n()),"function"==typeof t&&t(i);
});
}();
},
initWebComptForWcSlVideoSharePage:function(){
o.invoke("handleDeviceInfo",{
action:"setOrientation",
orientation:0,
lock:!0
});
var e=function(e){
-1!==e.err_msg.indexOf(":ok")?y.initNewPageHistoryStackFromSecOpen():(window.__failConfigWxOpen=!0,
u.info("failed to config wxopen: res not ok"),g.setSum(221515,s.os.iphone?7:8,1));
};
if(c.isAndroid){
var t=c.getInner();
t>"27001037"&&"27001060">t||t>="27001100"?y.initWebCompt(["wxOpen","wxAd"],e):c.gtVersion("7.0.15",1)?(y.initWebCompt(["wxAd"]),
window.__failConfigWxOpen=!0,u.info("failed to config wxopen: android version check failed (gt 7.0.15)")):(window.__failConfigWxOpen=!0,
u.info("failed to config wxopen: android version check failed"));
}else c.gtVersion("7.0.15",1)?y.initWebCompt(["wxOpen","wxAd"],e):(window.__failConfigWxOpen=!0,
u.info("failed to config wxopen: ios version check failed"));
},
getWebComptStatus:function(e){
return"function"!=typeof e?_:("loading"===_.status?v.push(e):e(_),!0);
},
debounce:n,
bindDebounceScrollEvent:function(e){
var t=arguments.length<=1||void 0===arguments[1]?window:arguments[1],i=arguments.length<=2||void 0===arguments[2]?50:arguments[2],o=n(e,i);
p.on(t,"scroll",o);
}
};
return y;
});define("biz_wap/utils/wapsdk.js",["biz_common/utils/wxgspeedsdk.js","biz_wap/utils/jsmonitor_report.js"],function(s){
"use strict";
function e(s){
var e=.001;
"number"==typeof s.sample&&(e=s.sample);
var i=Math.random();
e>i&&n.saveSpeeds(s);
}
function i(s){
var e=s.sample||.001,i=Math.random();
e>i&&n.setBasicTime(s);
}
function t(){
n.send();
}
function a(s){
var s=s||[];
if(!s.length){
var e=s;
s=[],s.push(e);
}
for(var i=0;i<s.length;i++){
var e=s[i],t=e.id,a=e.key,n=e.value||1;
void 0!==t&&void 0!==a&&o.setSum(t,a,n);
}
}
var n=s("biz_common/utils/wxgspeedsdk.js"),o=s("biz_wap/utils/jsmonitor_report.js");
return{
saveSpeeds:e,
setBasicTime:i,
send:t,
jsmonitor:a
};
});define("a/mpAdAsync.js",["appmsg/log.js","biz_wap/utils/ajax.js","rt/appmsg/getappmsgext.rt.js","a/a.js","a/a_utils.js","biz_common/utils/url/parse.js","a/a_config.js","pages/version4video.js","common/utils.js"],function(e){
"use strict";
function i(e,i){
var t=document.getElementsByTagName("iframe");
if(window.originalVideoAdFramesAdData=window.originalVideoAdFramesAdData||{},window.originalVideoAdFramesUnsetList)for(var a=0;a<window.originalVideoAdFramesUnsetList.length;a++)for(var s=0;s<t.length;s++)if(t[s].dataset&&t[s].dataset.mpvid===window.originalVideoAdFramesUnsetList[a]){
window.originalVideoAdFramesAdData[t[s].dataset.mpvid]||(window.originalVideoAdFramesAdData[t[s].dataset.mpvid]={}),
i=window.originalVideoAdFramesAdData[t[s].dataset.mpvid],t[s].contentWindow.postMessage({
action:"receiveOriginalVideoData",
vid:window.originalVideoAdFramesUnsetList[a],
adData:i
},"*");
break;
}
e[0]&&window.postMessage({
action:"receiveOriginalVideoData",
vid:e[0],
adData:i||{}
},"*");
}
function t(e){
var i=document.getElementsByTagName("iframe");
m.broadcastFrame(i,p.APPMSGAD_READY_ACTION,e),m.listenMessage(window,function(i,t){
t.action===p.GET_APPMSGAD_READY_STATUS_ACTION&&m.postMessage(i.source,p.APPMSGAD_READY_ACTION,e);
});
}
function a(e){
o("[Appmsg] error get async ad data or false no ad, biz="+window.biz+", mid="+window.mid),
i(e),t();
}
function s(e){
var s=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],g=arguments[2],l=[],v=r.checkNeedAds();
v.is_need_ad=s.forceGetAd?1:v.is_need_ad;
var f=window.isPaySubscribe?0:v.is_need_ad,y=window.isPaySubscribe?1:0,u=c.getQuery("mock"),A=c.getQuery("rtx"),D="/mockserver/mockservercgi-bin/offerTestCase/mmbizwap/mp/getappmsgad",j="/mp/getappmsgad",b="5"===window.item_show_type,h=b&&!_.isNativePage()&&!c.getQuery("get_ad_after_video"),k=w.isUseAd()&&!h,V=window.pos_type_list?JSON.stringify(window.pos_type_list.split("|").map(function(e){
return Number(e);
})):"";
e=e||[];
for(var x=0;x<e.length;x++)0===e[x].indexOf(p.ORIGIN_VIDEO_VID_PREFIX)&&l.push(e[x]);
(u&&"-1"!==u||A)&&(console.info("[广告走mock系统] mockId",u,"rtx",A),j=D),console.info("[广告发送请求] 是否拉取广告",f),
console.info("[强制广告] 是否强制去掉广告",y),y?a(l):n({
url:j+"?f=json&mockid="+u+"&rtx="+A,
data:{
r:Math.random(),
appmsg_type:window.appmsg_type||"",
mid:window.mid,
sn:window.sn,
idx:window.idx,
scene:s.scene||window.scene,
title:s.title||encodeURIComponent(window.msg_title.htmlDecode()),
ct:s.ct||window.ct,
abtest_cookie:s.abtest_cookie||window.abtest_cookie||"",
devicetype:"string"==typeof s.devicetype?s.devicetype:window.devicetype.htmlDecode(),
version:"string"==typeof s.version?s.devicetype:window.clientversion.htmlDecode(),
is_need_ad:f,
both_ad:v.both_ad,
send_time:s.send_time||window.send_time||"",
msg_daily_idx:s.msg_daily_idx||window.msg_daily_idx,
pass_ticket:window.pass_ticket,
is_temp_url:window.is_temp_url||0,
item_show_type:window.item_show_type,
tmp_version:1,
pos_type_list:V,
vid_list:JSON.stringify(k?e:[]),
exportkey:c.getQuery("exportkey"),
waid:c.getQuery("waid")
},
type:"POST",
dataType:"json",
rtId:27613,
rtKey:50,
rtDesc:d,
async:!0,
success:function(e){
o("[Appmsg] success get async ad data"),console.info("[广告响应请求]",e),window.can_see_complaint=e.can_see_complaint,
r.afterGetAdData(v,e),m.setBackgroundClass();
var a=e;
if(a.advertisement_info&&0!==a.advertisement_info.length)try{
if(o("[Appmsg] success get async ad data, async data is: "+JSON.stringify(a)),window.originalVideoAdFramesAdData={},
a.advertisement_info)for(var s=0;s<a.advertisement_info.length;s++){
a.advertisement_info[s].cdg_appid=a.appid;
var n=a.advertisement_info[s].vid;
n&&"string"==typeof n&&1===a.advertisement_info[s].is_mp_video&&(window.originalVideoAdFramesAdData[n]=m.saveCopy(a.advertisement_info[s]),
_.report120081("0"));
}
i(l,window.originalVideoAdFramesAdData[l[0]]);
}catch(d){
console.error(d);
}else o("[Appmsg] success get async ad data, async data is empty"),i(l);
g&&g(),t(e);
},
error:function(){
a(l);
}
});
}
var o=e("appmsg/log.js"),n=e("biz_wap/utils/ajax.js"),d=e("rt/appmsg/getappmsgext.rt.js"),r=e("a/a.js"),m=e("a/a_utils.js"),c=e("biz_common/utils/url/parse.js"),p=e("a/a_config.js"),w=e("pages/version4video.js"),_=e("common/utils.js");
return{
getAdData:s
};
});define("biz_common/utils/url/parse.js",[],function(){
"use strict";
function r(r){
var e=r.length,n=r.indexOf("?"),t=r.indexOf("#");
t=-1==t?e:t,n=-1==n?t:n;
var a=r.substr(0,n),i=r.substr(n+1,t-n-1),s=r.substr(t+1);
return{
host:a,
query_str:i,
hash:s
};
}
function e(e,n,t){
var a=r(e),i=a.query_str,s=[];
for(var o in n)n.hasOwnProperty(o)&&s.push(o+"="+(t?n[o]:encodeURIComponent(n[o])));
return s.length>0&&(i+=(""!=i?"&":"")+s.join("&")),a.host+(""!=i?"?"+i:"")+(""!=a.hash?"#"+a.hash:"");
}
function n(r,e,n,t){
r=r||location.href;
var a=r.indexOf("&"),i=r.length,s=r.replace(/^[\w\d]+:[\/\\]+/g,"").split("").reverse();
Array.prototype.indexOf||(Array.prototype.indexOf=function(r,e){
var n;
if(null==this)throw new TypeError('"this" is null or not defined');
var t=Object(this),a=t.length>>>0;
if(0===a)return-1;
var i=+e||0;
if(1/0===Math.abs(i)&&(i=0),i>=a)return-1;
for(n=Math.max(i>=0?i:a-Math.abs(i),0);a>n;){
if(n in t&&t[n]===r)return n;
n++;
}
return-1;
});
var o=i-1-s.indexOf("/");
-1!=a&&-1==r.indexOf("?")&&a>o&&(r=r.replace("&","?"));
var u=new RegExp("([\\?&]"+e+"=)[^&#]*");
if(!r.match(u)){
var h=r.indexOf("?");
return-1==h?r+"?"+e+"="+n:h==r.length-1?r+e+"="+n:r+"&"+e+"="+n;
}
return t===!0?r.replace(u,"$1"+n):r;
}
function t(r){
var e=arguments[1]||window.location.search,n=new RegExp("(^|&)"+r+"=([^&]*)(&|$)"),t=e.substr(e.indexOf("?")+1).match(n);
return null!=t?t[2]:"";
}
return{
parseUrl:r,
join:e,
addParam:n,
getQuery:t
};
});define("appmsg/appmsg_report.js",["biz_wap/utils/ajax.js","pages/video_communicate_adaptor.js"],function(i){
"use strict";
function e(i){
if(!i)return null;
var e=location.href.match(new RegExp("(\\?|&)"+i+"=([^&]+)"));
return e?e[2]:null;
}
function o(i){
var o=i.link,t=i.action_type,n=o.split("?").pop();
if(n=n.split("#").shift(),""!=n){
var p=i.reportVid||window.reportVid,a=i.reportMid||window.reportMid,d=i.reportVoiceid||window.reportVoiceid,w=i.reportWeappid||window.reportWeappid,_=[],u=[],c=[];
if("undefined"==typeof i.ori_status_arr||"undefined"==typeof i.hit_bizuin_arr)for(var h=r.getVideoInfo(),f=0;f<p.length;f++){
var m=p[f];
_.push(h[m]&&"undefined"!=typeof h[m].ori_status?h[m].ori_status:0),u.push(h[m]&&"undefined"!=typeof h[m].hit_bizuin?h[m].hit_bizuin:""),
c.push(h[m]&&"undefined"!=typeof h[m].hit_vid?h[m].hit_vid:"");
}else _=i.ori_status_arr,u=i.hit_bizuin_arr,c=i.hit_vid_arr;
var y=[n,"action=share","action_type="+t,"scene="+(i.source||window.source||e("scene")),"subscene="+e("subscene"),"ascene="+(i.ascene||window.ascene||-1),"req_id="+(i.req_id||window.req_id||""),"vid="+("undefined"!=typeof p?p.join(";"):""),"musicid="+("undefined"!=typeof a?a.join(";"):""),"voiceid="+("undefined"!=typeof d?d.join(";"):""),"weappid="+("undefined"!=typeof w?w.join(";"):""),"item_show_type="+(i.item_show_type||window.item_show_type||0),"ori_status_arr="+_.join(";"),"hit_bizuin="+u.join(";"),"hit_vid_arr="+c.join(";"),"top_stories="+(i.top_stories||0),"content_url="+encodeURIComponent(window.location.href),"channel_session_id="+e("channel_session_id"),"is_pay_subscribe="+window.isPaySubscribe,"is_paid="+window.isPaid,"preview_percent="+window.previewPercent,"fee="+(window.paySubscribeInfo?window.paySubscribeInfo.fee:""),"worthy_cnt="+(window.paySubscribeInfo?window.paySubscribeInfo.like_cnt:""),"pay_cnt="+(window.paySubscribeInfo?window.paySubscribeInfo.pay_cnt:""),"album_id="+(window.appmsg_album_info?window.appmsg_album_info.id:""),"album_type="+(window.appmsg_album_info?0:""),"is_cartoon_copyright="+(window.isCartoonCopyright?1:2),"share_source="+i.share_source];
i.hotspotjson?y.push("hotspotjson="+i.hotspotjson):window.hotspotInfoList&&y.push("hotspotjson="+JSON.stringify({
hotspotinfolist:window.hotspotInfoList
})),i.sharer_shareid&&y.push("sharer_shareid="+i.sharer_shareid),i.sharer_sharetime&&y.push("sharer_sharetime="+i.sharer_sharetime),
y=y.join("&"),s({
url:"/mp/appmsgreport",
type:"POST",
data:y,
async:!1,
timeout:2e3
});
}
}
function t(i){
s({
url:"/mp/appmsgreport?action=name_click",
data:{
url:location.href,
title:i.title||window.msg_title||"",
msgid:window.mid||"",
itemidx:window.idx||"",
__biz:window.biz||"",
ascene:window.ascene||-1,
isnew:i.isnew||0,
item_show_type:i.item_show_type||window.item_show_type||0,
hotspotjson:i.hotspotjson||""
},
type:"POST",
dataType:"json",
async:!0,
success:function(){}
});
}
function n(i){
s({
url:"/mp/appmsgreport?action=hotspotreport",
data:{
title:i.title||window.msg_title||"",
__biz:window.biz||"",
appmsgid:window.mid||"",
itemidx:window.idx||"",
scene:window.source||"",
hotspotjson:i.hotspotjson||""
},
type:"POST",
dataType:"json",
async:!0,
success:function(){}
});
}
var s=i("biz_wap/utils/ajax.js"),r=i("pages/video_communicate_adaptor.js");
return{
shareReport:o,
profileReport:t,
hotspotReport:n
};
});