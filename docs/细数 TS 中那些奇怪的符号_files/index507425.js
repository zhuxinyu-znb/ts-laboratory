define("biz_common/tmpl.js",[],function(){
"use strict";
function n(n,e){
("undefined"==typeof e||null===e)&&(e=!0);
var t="";
return t=n.replace(/[\r\t\n]/g," ").split("<#").join("	").replace(/((^|#>)[^\t]*)'/g,"$1\r"),
t=e?t.replace(/\t==(.*?)#>/g,"',$1,'").replace(/\t=(.*?)#>/g,"', String($1).replace(/&/g,'&amp;').replace(/\"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;') ,'"):t.replace(/\t=(.*?)#>/g,"',$1,'"),
t=t.split("	").join("');").split("#>").join("p.push('").split("\r").join("\\'");
}
var e=function(e,t,r){
var p=n(e,r),i=function(){};
try{
i=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+p+"');}return p.join('');");
}catch(u){
e=e.replace(/\'/g,"&#39;").replace(/'/g,"&#39;"),p=n(e,r),i=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+p+"');}return p.join('');");
}
return i(t);
},t=function(n,t,r){
var p=document.getElementById(n);
return p?e(p.innerHTML,t,r):"";
};
return{
render:t,
tmpl:e
};
});define("appmsg/set_font_size.js",["biz_wap/utils/mmversion.js","biz_wap/jsapi/core.js","biz_wap/utils/device.js","biz_wap/utils/localstorage.js"],function(t){
"use strict";
function e(t,e){
for(var o=[],i=document.createTreeWalker(t,4);i.nextNode();){
var n=i.currentNode.parentNode,s=n.getAttribute("mp-original-font-size");
s||(s=getComputedStyle(n).fontSize,n.setAttribute("mp-original-font-size",s));
var a=n.getAttribute("mp-original-line-height");
a||(a=getComputedStyle(n).lineHeight,n.setAttribute("mp-original-line-height",a)),
o.push([n,s,a]);
}
o.forEach(function(t){
t[0].style.fontSize=parseFloat(t[1])*e+"px",t[0].style.lineHeight=parseFloat(t[2])*e+"px";
});
}
function o(t){
p||"function"!=typeof t||window.top.__fontScaleChangeCbList__.push(t);
}
function i(t){
a.os.android&&!function(){
var i={
1:.8,
2:1,
3:1.1,
4:1.12,
5:1.125,
6:1.4,
7:1.55,
8:1.65
},n=_.get("__font_scale_back_for_android__")||1;
e(t,n),!p&&(window.top.__fontScaleBackForAndroid__=n),o(function(o){
var s=i[o.fontSize]||1;
e(t,n/s),!p&&(window.top.__fontScaleBackForAndroid__=1/s),_.set("__font_scale_back_for_android__",1/s);
});
}();
}
var n=t("biz_wap/utils/mmversion.js"),s=t("biz_wap/jsapi/core.js"),a=t("biz_wap/utils/device.js"),_=t("biz_wap/utils/localstorage.js"),p=!1;
try{
p=!window.top.document;
}catch(l){
p=!0;
}
return p||window.top.__fontScaleChangeCbList__||(window.top.__fontScaleChangeCbList__=[]),
window.top===window&&s.on("menu:setfont",function(t){
if(n.isIOS&&location.href.match(/fontScale=\d+/))parseFloat(t.fontScale)<=0&&(t.fontScale=100),
a.os.ipad&&a.os.getNumVersion()>=13?(e(document.getElementsByTagName("html").item(0),t.fontScale/100),
window.ipados13_font_scale=t.fontScale):document.getElementsByTagName("html").item(0).style.webkitTextSizeAdjust=t.fontScale+"%";else if(n.isAndroid)s.invoke("setFontSizeCallback",{
fontSize:t.fontSize
});else if(n.isWindows){
var o,i=t.fontGear||2,_=["appmsg_desktop_fontsize_1","appmsg_desktop_fontsize_2","appmsg_desktop_fontsize_3","appmsg_desktop_fontsize_4","appmsg_desktop_fontsize_5","appmsg_desktop_fontsize_6"];
(o=document.body.classList).remove.apply(o,_),document.body.classList.add("appmsg_desktop_fontsize_"+i);
}
window.__fontScaleChangeCbList__.forEach(function(e){
return e(t);
});
}),{
setFontSize:e,
onFontScaleChange:o,
keepNormalFontSizeForAndroid:i
};
});define("appmsg/sec_load_fail_report.js",["common/comm_report.js"],function(o){
"use strict";
var i=o("common/comm_report.js");
if(window.localStorage&&window.localStorage.getItem){
var e=4500,w="loadSec-"+window.biz+"-"+window.mid+"-"+window.idx,t=window.localStorage.getItem(w);
t&&window.write_sceen_time-parseInt(t,10)>e&&(i.report(20801,{
Bizuin:window.biz,
MsgId:1*window.mid,
ItemIdx:1*window.idx,
Url:window.msg_source_url||"",
Title:window.msg_title||""
}),window.localStorage.removeItem(w));
}
});define("biz_wap/ui/weui.js",[],function(){
"use strict";
function e(){
for(var e=document.getElementsByTagName("link"),i=/^http(s)?:\/\/res\.wx\.qq\.com\/open\/libs\/weui\/([^\/]*)\/weui(\.min)?\.css$/,n=0;n<e.length;n++){
var t=(e[n].href.match(i)||[])[2];
if(t){
if("1"===t[0])return!0;
console.warn("Weui.css("+t+") in page is deprecated. Weui.css(1.0+) will be insert in page automatically.");
}
}
return!1;
}
function i(){
var e=["actionSheet","alert","confirm","dialog","validate","checkIfBlur","gallery","loading","picker","datePicker","searchBar","slider","tab","toast","topTips","uploader"];
window.weui={};
for(var i=0;i<e.length;i++)!function(i){
window.weui[e[i]]=function(){
a.push({
name:e[i],
args:arguments
}),console.info(e[i]+" will be executed after weui.js loaded.");
};
}(i);
}
function n(){
var e=document.createElement("script");
e.onload=function(){
for(var e=0;e<a.length;e++)window.weui[a[e].name].apply(window,a[e].args);
},e.onerror=function(){
throw new Error("weui.js loaded fail.");
},e.src=r,document.body.appendChild(e);
}
var t="https://res.wx.qq.com/open/libs/weui/2.4.0/weui.min.css",r="https://res.wx.qq.com/open/libs/weuijs/1.2.1/weui.min.js",a=[];
if(!e()){
var o=document.createElement("link");
o.href=t,o.rel="stylesheet",document.head.appendChild(o);
}
i(),n();
});var _slicedToArray=function(){
function t(t,e){
var n=[],r=!0,o=!1,i=void 0;
try{
for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);
}catch(d){
o=!0,i=d;
}finally{
try{
!r&&u["return"]&&u["return"]();
}finally{
if(o)throw i;
}
}
return n;
}
return function(e,n){
if(Array.isArray(e))return e;
if(Symbol.iterator in Object(e))return t(e,n);
throw new TypeError("Invalid attempt to destructure non-iterable instance");
};
}();
define("appmsg/search_image.js",[],function(){
"use strict";
function t(){
var t=window.location.href.split("?")[1];
if(t){
for(var e=t.split("&"),n=0;n<e.length;n++){
var r=e[n].split("="),o=_slicedToArray(r,2),i=o[0],a=o[1];
if("imageIndex"===i)return parseInt(a,10);
}
return"";
}
return"";
}
function e(){
var t=0;
return"undefined"!=typeof window.pageXOffset?t=window.pageXOffset:"undefined"!=typeof document.compatMode&&"BackCompat"!==document.compatMode?t=document.documentElement.scrollTop:"undefined"!=typeof document.body&&(t=document.body.scrollTop),
t;
}
function n(t){
return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+e():0;
}
function r(){
for(var t=[],e=document.getElementsByTagName("img"),n=0,r=e.length;r>n;n++){
var o=e.item(n),i=o.getAttribute("data-src");
i&&t.push(o);
}
return t;
}
function o(){
if(""!==i){
var t=r();
if(!(i>t.length)){
var e=n(t[i]);
window.scroll(0,e);
}
}
}
var i=t();
""!==i&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),"loading"!==document.readyState?o():window.addEventListener("DOMContentLoaded",function(){
o();
});
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
define("appmsg/index.js",["appmsg/search_image.js","biz_wap/ui/weui.js","appmsg/sec_load_fail_report.js","appmsg/set_font_size.js","biz_common/tmpl.js","cps/tpl/banner_tpl.html.js","cps/tpl/card_tpl.html.js","cps/tpl/list_tpl.html.js","biz_common/utils/string/html.js","appmsg/weapp_common.js","biz_wap/utils/device.js","biz_common/dom/class.js","appmsg/log.js","biz_wap/utils/ajax.js","biz_common/dom/attr.js","appmsg/max_age.js","biz_wap/utils/mmversion.js","appmsg/test.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/moment.js","appmsg/appmsg_report.js","biz_common/utils/url/parse.js","a/mpAdAsync.js","biz_wap/utils/wapsdk.js","common/utils.js","complain/localstorage.js","appmsg/popup_report.js","appmsg/pay_report_utils.js","appmsg/loading.js","appmsg/finance_communicate.js","appmsg/topbar.js","biz_wap/utils/jsmonitor_report.js","appmsg/getForbidConfig.js","appmsg/wxwork_hidden.js","common/color/background_color.js","common/color/dark.js","appmsg/tags_utils.js","page/appmsg_new/combo.css","page/appmsg_new/not_in_mm.css","complain/utils/userpainter.js","appmsg/cdn_img_lib.js","appmsg/share.js","biz_common/log/jserr.js","biz_wap/ui/lazyload_img.js","appmsg/async.js","appmsg/copyright_report.js","appmsg/outer_link.js","appmsg/review_image.js","appmsg/product.js","appmsg/page_pos.js","appmsg/iframe.js","appmsg/qqmusic.js","appmsg/voice.js","redpackage/redpacketcover.js","appmsg/search/search.js","appmsg/poi/poi.js","appmsg/autoread.js","appmsg/voicemsg.js","appmsg/weproduct.js","appmsg/weapp.js","question_answer/appmsg.js","appmsg/live.js","appmsg/wxtopic.js","appmsg/cdn_speed_report.js","appmsg/appmsg_copy_report.js","appmsg/report_and_source.js","appmsg/report.js","appmsg/fereport_without_localstorage.js","appmsg/fereport.js","biz_wap/safe/mutation_observer_report.js","sougou/index.js"],function(e){
"use strict";
function t(e){
for(var t=window.location.search,o=t.substring(1,t.length).split("&"),i=0;i<o.length;i++){
var n=o[i].split("=");
if(n[0].toUpperCase()===e.toUpperCase())return n[1];
}
return"";
}
function o(){
function o(e){
if(e&&0!=e.length){
for(var t={
batch_no:A.getQuery("batch_no")||"",
bizuin:window.biz||"",
biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
total:e.length
},o=0;o<e.length;o++){
var i=e[o],n=o+1;
for(var r in i)i.hasOwnProperty(r)&&(t[r+""+n]=i[r]);
}
l({
url:"/mp/productreport?",
type:"POST",
data:t,
dataType:"json",
async:!0
});
}
}
function T(){
Y&&clearTimeout(Y),Y=setTimeout(function(){
try{
Y=null;
for(var e=0;e<V.length;e++){
var t=V[e],i=w.attr(t,"data-showed");
if("no"==i){
var n=t.getElementsByClassName("js_product_loop_content");
if(n.length>0){
n=n[0];
var r=n.getBoundingClientRect(),a=r.height||r.bottom-r.top;
if(a>0&&r.top<x.getInnerHeight()&&r.bottom>0){
t.setAttribute("data-showed","yes");
var s=n.getAttribute("data-pid");
s&&o([{
wxa_appid:n.getAttribute("data-wxaappid"),
pid:s,
type:3,
absolute_order:e+1,
appid:n.getAttribute("data-appid")||"",
templateid:n.getAttribute("data-templateid")||"",
relative_order:1*n.getAttribute("data-order"),
packid:n.getAttribute("data-packid")||""
}]);
}
}
}
}
}catch(d){}
},100);
}
function C(e){
try{
for(var c=window.pageYOffset||document.documentElement.scrollTop,m=0;m<V.length;m+=W){
var g=V[m];
if(!(g.offsetTop>c+x.getInnerHeight()+100)){
var u=w.attr(g,"data-cpsstatus");
if("hide"==u){
g.setAttribute("data-cpsstatus","loading");
for(var f=""+m,y=1,v=m+1;v<V.length&&m+W>v;v++)f=f+"%2c"+v,y++;
var b=Math.ceil(1e7*Math.random());
if(""!==t("mockcps"))var A="/mp/cps_product_info?biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&cpslist="+f+"&sn="+window.sn+"&mockcps="+t("mockcps");else var A="/mp/cps_product_info?biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&cpslist="+f+"&sn="+window.sn+"&istempurl="+(window.is_temp_url||0)+"&random="+b;
!function(e,t,c){
l({
url:t,
type:"GET",
dataType:"json",
async:!0,
error:function(){
try{
window.__addIdKeyReport("64469","18",c);
}catch(e){}
},
success:function(e){
try{
window.__addIdKeyReport("64469","16",e.product_list.length),e.product_list.length<c&&window.__addIdKeyReport("64469","18",c-e.product_list.length);
for(var t=0;t<e.product_list.length;t++){
e.product_list[t].data.cps_isready=!0,e.product_list[t].data.pid_type=e.product_list[t].data.pid_type||e.product_list[t].attr.pid_type;
var m=V[e.product_list[t].index],l=e.product_list[t].template_id;
"list"==l?m.innerHTML=n.tmpl(s,e.product_list[t].data):"banner"==l?m.innerHTML=n.tmpl(r,e.product_list[t].data):"card"==l&&(m.innerHTML=n.tmpl(a,e.product_list[t].data)),
e.product_list[t].weapp_username&&(e.product_list[t].attr.weapp_username=e.product_list[t].weapp_username),
e.product_list[t].weapp_version&&(e.product_list[t].attr.weapp_version=e.product_list[t].weapp_version),
m.setAttribute("data-cpsstatus","complete");
for(var g=m.getElementsByClassName("js_product_loop_content"),u=0;u<g.length;u++)for(var f in e.product_list[t].attr)g[u].setAttribute("data-"+f,e.product_list[t].attr[f]);
for(var y=m.getElementsByTagName("img"),u=0;u<y.length;u++)y[u].src=w.attr(y[u],"data-src");
!function(e,t){
if(h.on(e,"tap",".js_product_loop_content",function(e){
try{
var i=e.delegatedTarget,n=i.getAttribute("data-wxaappid"),r=i.getAttribute("data-wxapath"),a=i.getAttribute("data-pid"),s=i.getAttribute("data-appid"),p=i.getAttribute("data-cpspackage"),c=Math.floor((new Date).getTime()/1e3)+5184e3,m=i.getAttribute("data-weapp_username"),l=i.getAttribute("data-weapp_version");
d.jumpUrl({
cps_weapp_username:m,
cps_weapp_version:l,
privateExtraData:{
cookies:"cps_package="+encodeURIComponent(p)+"; expires="+c+"; busid=mmbiz_ad_cps; domain=*; spread=*"
},
sourceAppId:s,
appid:n,
path:r,
scene:1091,
sceneNote:encodeURIComponent(location.href)+":"+encodeURIComponent(a),
beforeNonWechatWarn:function(){},
beforeJumpBackupPage:function(){},
onJsapiCallback:function(e){
"openWeApp:ok"===e.err_msg&&a&&o([{
wxa_appid:n,
pid:a,
type:4,
absolute_order:t+1,
appid:i.getAttribute("data-appid")||"",
templateid:i.getAttribute("data-templateid")||"",
relative_order:1*i.getAttribute("data-order"),
packid:i.getAttribute("data-packid")||""
}]);
}
});
}catch(e){}
return!1;
}),_.isIOS&&location.href.match(/fontScale=\d+/)&&p.os.ipad&&p.os.getNumVersion()>=13){
var n=location.href.match(/fontScale=(\d+)/);
i(e,parseFloat(n[1])/100);
}
}(m,e.product_list[t].index);
}
T();
}catch(v){
window.__addIdKeyReport("64469","18",e.product_list.length);
}
}
});
}(f,A,y);
}
}
}
}catch(e){
console.log(e);
}
}
function O(e){
try{
Q&&clearTimeout(Q),Q=setTimeout(function(){
C(e);
},300);
}catch(e){}
}
function N(e,t){
var o={
lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
},i=new Image;
i.onload=function(){
var o=i.width>0&&i.height>0;
t(e,o);
},i.onerror=function(){
t(e,!1);
},i.src="data:image/webp;base64,"+o[e];
}
function D(){
var e=window.performance||window.msPerformance||window.webkitPerformance;
if(e.timing){
var t=e.timing;
m("[Appmsg] dns:"+(t.domainLookupEnd-t.domainLookupStart)+"^^^ ssl:"+(0==t.secureConnectionStart?0:t.connectEnd-t.secureConnectionStart)+"^^^ tcp:"+(t.connectEnd-t.connectStart)+"^^^ request:"+(t.responseStart-t.requestStart)+"^^^ getPackageTime:"+(t.responseEnd-t.responseStart)+"^^^ domCententLoaded:"+(t.domContentLoadedEventStart-t.domLoading)+"^^^ domComplete:"+(t.domComplete-t.domLoading)+"^^^ firstViewTime:"+(real_show_page_time-t.navigationStart)+"^^^ interactiveTime:"+(page_endtime-t.navigationStart))+"^^^ ua:"+window.navigator.userAgent,
setTimeout(function(){
t.loadEventEnd&&m("[Appmsg] onload:"+(t.loadEventEnd-t.loadEventStart));
},100);
}
"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){
return this.replace(/^\s+|\s+$/g,"");
}),""==document.getElementById("js_content").innerHTML.trim()&&R.setSum(24729,94,1);
var o=Math.random();
.001>o&&document.getElementById("js_read_area3")&&document.getElementById("js_read_area3").innerText&&document.getElementById("js_read_area3").innerText.indexOf("Pageview")>-1&&R.setSum(24729,95,1),
window.__wxjs_is_wkwebview&&R.setSum(28307,67,1);
}
try{
var V=document.getElementsByTagName("mpcps");
window.__addIdKeyReport("64469","15",V.length);
for(var U=0;U<V.length;U++){
V[U].setAttribute("data-cpsstatus","hide"),V[U].setAttribute("data-showed","no");
var F={
cps_isready:!1,
cps_state:"",
pid_type:"",
img_url:"",
title:"",
desc:"",
source_name:"",
source_logo_url:"",
is_ad:1
},J=w.attr(V[U],"data-templateid");
"list"==J?V[U].innerHTML=n.tmpl(s,F,!1):"banner"==J?V[U].innerHTML=n.tmpl(r,F,!1):"card"==J&&(V[U].innerHTML=n.tmpl(a,F,!1));
}
}catch(G){
console.log(G);
}
setTimeout(function(){
var e=document.getElementsByClassName("wx-edui-video_source_link");
e=Array.prototype.slice.call(e),e.forEach(function(e){
e&&e.addEventListener("click",function(){
var t=e.dataset.hitUsername;
y.invoke("profile",{
username:t
});
});
});
},500);
try{
q.init(document.getElementById("js_tags"));
}catch(G){
console.log(G);
}
var Q,Y=null;
T(),h.on(window,"scroll",T),C(),h.on(window,"scroll",O),window.is_new_msg&&-1!=navigator.userAgent.indexOf("MicroMessenger")&&(window.title&&(window.title=window.title.replace(/&#39;/g,"'").replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&")),
window.msg_title&&(window.msg_title=window.msg_title.replace(/&#39;/g,"'").replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&")),
hd_head_img||I.jsmonitor({
id:115849,
key:26,
value:1
}),S.init({
userName:window.user_name,
bizNickName:window.nickname,
bizNickNameBackup:window.title,
title:window.msg_title,
headImg:window.hd_head_img,
cover:window.cdn_url_1_1,
digest:window.msg_desc,
reportData:{
BizUin:window.biz,
AppMsgID:1*window.mid,
ItemIndex:1*window.idx,
Scene:1*window.source,
SubScene:1*window.subscene,
EnterId:1*window.enterid,
SessionId:window.sessionid,
ItemShowType:1*window.item_show_type
}
}),y.invoke("createWebViewForFastLoad",{
scene:1
},function(e){
console.log(e);
}));
var $=document.getElementsByTagName("body");
if(!$||!$[0])return!1;
$=$[0],function(){
function e(){
if(i.length)for(var e=document.documentElement.scrollTop||document.body.scrollTop,t=0;t<i.length;t++)if(1!=i[t].getAttribute("hasload")){
var o=i[t].getBoundingClientRect();
(o.top<d+e&&o.top>e||o.top+o.height>e&&o.top+o.height<d+e)&&i[t].getAttribute("href").length>0&&(i[t].setAttribute("hasload",1),
y.invoke("downloadPageDataForFastLoad",{
itemList:[{
item_show_type:i[t].getAttribute("data-itemshowtype"),
url:i[t].getAttribute("href")
}]
},function(e){
console.log(e);
}),i.splice(t,1),t--);
}
}
function t(){
for(var e=0;e<a.length;e++){
var t=a[e],o=t.getBoundingClientRect();
(o.top<=0&&o.top+o.height>=0||o.top>0&&o.top<d)&&(a.splice(e,1),e--,E.report([1,E.getRedirectType(t.parentNode.getAttribute("href")),"",img_popup?1:0,window.source,E.getUrlData(t.parentNode.getAttribute("href"))]));
}
for(var e=0;e<s.length;e++){
var t=s[e],o=t.getBoundingClientRect();
(o.top<=0&&o.top+o.height>=0||o.top>0&&o.top<d)&&(s.splice(e,1),e--,E.report([1,1,"",img_popup?1:0,window.source,t.getAttribute("data-miniprogram-appid")]));
}
}
function o(){
e(),t();
}
for(var i=[],n=document.getElementById("js_content").getElementsByTagName("a"),r=0;r<n.length;r++)null!==n[r].getAttribute("data-itemshowtype")&&i.push(n[r]);
var a=[];
Array.prototype.map.call(document.getElementById("js_content").getElementsByClassName("h5_image_link"),function(e){
e.parentNode.getAttribute("href")&&e.parentNode.getAttribute("href").length>0&&a.push(e);
});
var s=[];
Array.prototype.map.call(document.getElementById("js_content").getElementsByClassName("weapp_image_link"),function(e){
s.push(e);
});
var d=window.innerHeight||document.documentElement.clientHeight;
h.on(window,"scroll",o),o();
}(),function(){
y.on("onScreenShot",function(){
R.setSum(114217,15,1);
}),window.isPaySubscribe&&!function(){
y.on("onScreenShot",function(){
k.reportPayAppmsg(6);
});
var e=_.isWindows||_.isMac&&!_.isIOS,t=document.getElementById("js_content"),o=function(e){
"IMG"===e.target.tagName&&e.preventDefault();
};
e&&(t.addEventListener("dragstart",o),_.isWechat||t.addEventListener("contextmenu",o)),
window.isPaid||!function(){
var t="isPaid-"+window.biz+"-"+window.mid+"-"+window.idx,o=document.getElementById("js_pay_panel"),i=o.getElementsByClassName("js_pay_btn")[0],n=document.getElementById("js_pay_panel_bottom"),r=window.getComputedStyle(n),a=40+parseInt(r.paddingTop,10)+parseInt(r.paddingBottom,10),s=_.isGooglePlay;
if(_.isAndroid&&(y.invoke("handleMPPageAction",{
action:"isGPVersion"
},function(e){
console.log("GPVersion",e),e.err_msg.indexOf("ok")>-1&&(s=1*e.GPVersion);
}),"1"===window.localStorage.getItem(t)&&k.report110809(30)),e)for(var d=document.getElementsByClassName("js_pay_qrcode"),p="/mp/paysubqrcode?action=get_article_qrcode&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"#wechat_redirect",m=0,w=d.length;w>m;m++)d[m].src=p;
_.isInMiniProgram&&(c.addClass(i,"btn_disabled"),c.addClass(n.getElementsByClassName("js_pay_btn")[0],"btn_disabled")),
_.isIOS&&window.payShowIAPPrice&&!function(){
var e=setTimeout(function(){
e=null,console.log("getIAPProductInfo timeout"),k.reportOverseaPay("",0,1,0,"",2,"");
},3e3),t=Date.now();
y.invoke("handleMPPageAction",{
action:"getIAPProductInfo",
productId:window.payProductId
},function(i){
if("number"==typeof e){
clearTimeout(e);
var r=Date.now()-t;
if(console.log("getIAPProductInfo",i,r+"ms"),-1!==i.err_msg.indexOf(":ok")){
var a=function(){
if(k.report110809(38),window.payProductId!==i.productId)return k.report110809(44),
{
v:void 0
};
var e={
USD:"$",
HKD:"HK$",
CAD:"C$",
AUD:"A$",
TWD:"NT$",
JPY:"JPY￥",
EUR:"€",
SGD:"S$",
GBP:"£",
NZD:"NZ$",
MYR:"RM",
KZT:"〒",
KRW:"₩",
THB:"฿",
PHP:"₱",
TRY:"₺",
MXN:"Mex$",
CNY:"￥"
},t=[o.getElementsByClassName("js_pay_fee")[0],n.getElementsByClassName("js_pay_fee")[0]];
t.forEach(function(t){
var o=e[i.currencyCode]?e[i.currencyCode]:i.currencySymbol;
t.innerHTML=o+i.price.toFixed(2),t.parentNode.dataset.ready=1;
}),window.iapPriceInfo&&window.iapPriceInfo.currency_code!==i.currencyCode&&l({
url:"/mp/useriapinfo?action=update",
type:"POST",
dataType:"json",
async:!0,
data:{
country_code:i.countryCode,
currency_code:i.currencyCode,
currency_symbol:i.currencySymbol,
price:i.price,
price_format_string:i.priceFormatString,
iap_product_id:i.productId
}
}),window.oriProductFee?("CNY"!==i.currencyCode&&k.report110809(40),k.reportOverseaPay(i.currencyCode,100*i.price.toFixed(2),1,r,i.countryCode,0,i.err_msg+(i.err_desc?"__"+i.err_desc:""))):(window.IAPProductInfo=i,
window.IAPProductInfo.invokeTime=r);
}();
if("object"===("undefined"==typeof a?"undefined":_typeof(a)))return a.v;
}else k.report110809(39),k.reportOverseaPay("",0,1,0,"",1,i.err_msg+(i.err_desc?"__"+i.err_desc:""));
}
});
}(),window.jump2pay&&h.on(window,"load",function(){
window.scrollTo(0,o.getBoundingClientRect().top-x.getInnerHeight()/3);
});
var g=function(){
var e=i.getBoundingClientRect().top;
if(e+a>window.innerHeight){
if(1*window.previewPercent===0)return;
n.className="pay pay__notice pay__notice_show";
}else n.className="pay pay__notice",window.is_finished_preview=1;
};
g(),h.on(window,"scroll",g);
var u=!1,f=0,v=function b(o,i){
if(k.report110809ForDevice(32),!_.isInMiniProgram){
if(s)return void window.weui.alert("暂不支持Google Play支付，将微信更新为中国版微信后，可正常付费");
if(!i){
if(!e&&u)return;
if(!_.isWechat&&!e)return void window.weui.alert("请在微信内进行付费");
u=!0,f=new Date;
}
var n=o.currentTarget;
if(!e&&1*n.dataset.ready===0)return!i&&P.show("生成订单中"),new Date-f>6e4?(P.hide(),
window.weui.alert("支付超时，请稍后重试"),void(u=!1)):setTimeout(b,100,{
currentTarget:n
},!0);
if(k.reportPayAppmsg(9),1===window.is_transfer_msg)return window.weui.confirm("此内容来自于迁移前的帐号，不支持付费",{
buttons:[{
type:"default",
label:"确定"
}]
}),void(u=!1);
if(window.is_temp_url)window.weui.alert("临时链接无需付费，请谨慎分享，避免内容泄露",function(){
u=!1,location.replace(""+location.origin+location.pathname+location.search+"&temp_is_paid=1"+location.hash);
});else if(e){
var r=function(){
var e="js_pay_qrcode_wrap",t=n.parentNode.getElementsByClassName("js_pay_fee_display")[0];
if("block"===t.style.display)return{
v:void 0
};
n.classList.contains("js_article_bottom")&&t.classList[n.getBoundingClientRect().top<300?"add":"remove"]("pay__notice-qrcode_bottom");
var o=function i(o){
if("none"!==t.style.display){
for(var r=o.target;!(null===r||r.classList&&r.classList.contains(e)||r===n);)r=r.parentNode;
r!==n&&(null!==r&&r.classList.contains(e)||(t.style.display="none",h.off(window,"click",i)));
}
};
h.on(window,"click",o),t.style.display="block";
}();
if("object"===("undefined"==typeof r?"undefined":_typeof(r)))return r.v;
}else{
var a=function(){
if(_.isIOS&&_.ltVersion("7.0.10")||_.isAndroid&&_.ltVersion("7.0.10"))return location.replace("https://support.weixin.qq.com/update/"),
{
v:void 0
};
_.isAndroid&&"1"===window.localStorage.getItem(t)&&k.report110809(31),k.report110809ForDevice(34);
var e=function(){
k.reportPayAppmsg(1),y.invoke("handleMPPageAction",{
action:"paySuccess",
fullUrl:window.location.href,
itemShowType:item_show_type
},function(e){
u=!1,k.report110809(e.err_msg.indexOf("ok")>-1?19:20),window.localStorage&&window.localStorage.setItem&&window.localStorage.setItem(t,"1"),
window.__second_open__?window.location.href=window.location.href+"&r="+Math.random()+"#wechat_redirect":window.location.reload();
});
};
P.show("生成订单中"),l({
url:"/mp/paysub?action=create_order",
type:"POST",
dataType:"json",
data:{
__biz:window.biz,
mid:window.mid,
idx:window.idx,
sn:window.sn,
version:window.clientversion.htmlDecode(),
is_from_pc:window.jump2pay
},
async:!0,
success:function(t){
if(t&&t.base_resp&&0===t.base_resp.ret)!function(){
k.report110809(13),k.report110809ForDevice(36);
var o=Math.round(new Date/1e3);
if(_.isIOS){
var i=t.iap_info;
y.invoke("requestVirtualPayment",{
appID:i.appid,
priceLevel:i.price_level,
busiType:23,
busiId:i.busi_id,
productDesc:i.desc,
sign:i.sign,
extInfo:i.ext_info
},function(i){
console.log("requestVirtualPayment res: ",i),i.err_msg.indexOf("ok")>-1?(k.report110809(15),
k.reportPay(o,1,t.order_id),e()):i.err_msg.indexOf("cancel")>-1?(u=!1,k.report110809(28),
k.reportPay(o,2,t.order_id),console.log("pay cancel")):i.err_msg.indexOf("fail")>-1?(u=!1,
k.report110809(16),k.reportPay(o,3,t.order_id,i.err_msg,i.err_code,i.err_domain),
window.weui.alert(i.err_msg.slice(i.err_msg.indexOf("fail")+4))):(u=!1,window.weui.alert(i.err_msg));
}),window.payShowIAPPrice&&!function(){
var e=setTimeout(function(){
e=null,console.log("getIAPProductInfo timeout"),k.reportOverseaPay("",0,2,0,"",2,"");
},3e3),t=Date.now();
y.invoke("handleMPPageAction",{
action:"getIAPProductInfo",
productId:window.payProductId
},function(o){
if("number"==typeof e){
clearTimeout(e);
var i=Date.now()-t;
if(console.log("getIAPProductInfo",o,i+"ms"),-1!==o.err_msg.indexOf(":ok")){
if(k.report110809(41),window.payProductId!==o.productId)return void k.report110809(44);
window.IAPProductInfo?window.IAPProductInfo.currencyCode!==o.currencyCode&&k.report110809(43):window.oriProductFee&&"CNY"!==o.currencyCode&&k.report110809(43),
k.reportOverseaPay(o.currencyCode,100*o.price.toFixed(2),2,i,o.countryCode,0,o.err_msg+(o.err_desc?"__"+o.err_desc:""));
}else k.report110809(42),k.reportOverseaPay("",0,2,0,"",1,o.err_msg+(o.err_desc?"__"+o.err_desc:""));
}
});
}();
}else{
var n=t.midas_info;
window.h5sdk.directPay({
sandbox:!!n.sandbox,
ontimeout:function(){
u=!1,window.weui.alert("支付超时，请稍后重试");
},
methods:{
onPayEnd:function(i,n){
console.log("directPay res: ",i,n),1===i?(k.report110809(17),k.reportPay(o,1,t.order_id,n,i),
e()):-1===i&&/:cancel$/.test(n)?(u=!1,k.report110809(29),k.reportPay(o,2,t.order_id,n,i),
console.log("pay cancel")):(u=!1,k.report110809(18),k.reportPay(o,3,t.order_id,n,i),
window.weui.alert("支付失败，请稍后重试"));
}
}
},{
pf:n.pf,
appid:n.appid,
type:"goods",
openid:n.openid,
extend:{
hideOfferName:1
},
goodstokenurl:n.url_params,
usewxappid:"1",
wx_h5pay:0,
direct_pay_channel:"wechat"
});
}
}();else switch(u=!1,t&&t.base_resp&&t.base_resp.ret){
case 202600:
window.weui.alert("文章已被删除");
break;

case 202601:
window.weui.alert("由于文章被取消原创，不可付费阅读");
break;

case 202602:
window.weui.alert("你已购买过该文章，无需重复购买",e);
break;

case 202604:
window.weui.alert(t.appmsg_ban_reason_desc?"此内容因"+t.appmsg_ban_reason_desc+"已被封禁，不支持付费":"此内容因违规已被封禁，不支持付费");
break;

case 202607:
window.weui.alert("暂不支持Google Play支付，将微信更新为中国版微信后，可正常付费");
break;

case 202608:
location.replace("https://support.weixin.qq.com/update/");
break;

case 202609:
window.weui.alert("你已成为该公众号的黑名单用户，暂时无法付费");
break;

case 202612:
window.weui.alert("此帐号付费功能已被封禁，不支持付费");
break;

default:
k.report110809(14),window.weui.alert("订单创建失败，请稍后重试");
}
},
error:function(){
u=!1,window.weui.alert("系统错误，请稍后重试");
},
complete:function(){
P.hide();
}
});
}();
if("object"===("undefined"==typeof a?"undefined":_typeof(a)))return a.v;
}
}
};
h.tap(i,v),h.tap(n.getElementsByClassName("js_pay_btn")[0],v);
}();
}();
}();
var X=e("complain/utils/userpainter.js");
!function(){
try{
if(anchor_tree_msg){
var e=Date.now(),t=document.getElementById("js_content"),o=anchor_tree_msg?JSON.parse(anchor_tree_msg).anchor_tree:[];
X.init(t,o),I.saveSpeeds({
sample:1,
uin:uin,
pid:"https:"==H?462:417,
speeds:{
sid:38,
time:Date.now()-e
}
}),I.send();
}
}catch(i){
"undefined"!=typeof WX_BJ_REPORT&&WX_BJ_REPORT.BadJs&&WX_BJ_REPORT.BadJs.onError(i,{
anchor_tree_msg:anchor_tree_msg
});
}
}();
var Z=/^http(s)?:\/\/mp\.weixin\.qq\.com\//g;
try{
if(top!=window&&(!top||top&&location.href&&Z.test(location.href))&&!window.isSg)throw new Error("in iframe");
}catch(G){
var et="",tt=new Image;
tt.src=("http://mp.weixin.qq.com/mp/jsreport?key=4&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key4]"+et+"&r="+Math.random()).substr(0,1024);
}
if(window.isInWeixinApp()&&/#rd$/.test(location.href)&&!window.isWeixinCached&&!window.__second_open__){
var ot=-1!=location.href.indexOf("?")?"&":"?";
location.replace(location.href.replace(/#rd$/,ot+"rd2werd=1#wechat_redirect"));
}
var it=e("biz_common/utils/url/parse.js");
e("appmsg/cdn_img_lib.js"),window.page_endtime=+new Date;
{
var nt=!_.isWp&&-1==navigator.userAgent.indexOf("MicroMessenger");
-1!=navigator.userAgent.indexOf("WindowsWechat");
}
e("appmsg/share.js");
var rt=v(1e3*parseInt(window.modify_time)),at=rt.format("YYYY-MM-DD"),st=document.getElementById("js_modify_time");
if(st&&(st.innerHTML=at),window.isSg||"mp.weixin.qq.com"==location.host){
var dt=e("biz_common/log/jserr.js");
dt({
key:0,
reporturl:"http://mp.weixin.qq.com/mp/jsreport?1=1",
replaceStr:/http(s)?:(.*?)js\//g
});
}
window.logs.webplog={
lossy:0,
lossless:0,
alpha:0,
animation:0,
total:0
};
var pt=-1!=navigator.userAgent.indexOf("TBS/"),ct=function(e,t){
N(e,function(e,o){
if(window.logs.webplog[e]=o?1:0,window.logs.webplog.total++,4==window.logs.webplog.total){
var i=window.logs.webplog,n=Math.random();
pt&&1>=n&&(i.lossy=i.lossless=i.alpha=1,window.logs.webplog=i);
var r=i.lossy&i.lossless&i.alpha;
t(!!r);
}
});
},mt=function(e){
for(var t=document.getElementsByTagName("img"),o=!1,i=!1,n=0,r=t.length;r>n;n++){
var a=t[n].getAttribute("data-src");
a&&a.canHevc()&&(o=!0),a&&a.isGif()&&(i=!0);
}
var s=_.gtVersion("6.5.13",!0)&&i,d=_.gtVersion("6.8.0",!0)&&o,p=!1;
try{
{
top.window.document;
}
}catch(c){
p=!0;
}
(L||navigator.userAgent.indexOf("Br_trunk")>-1)&&_.isIOS&&(s||d)&&!p?(console.info("[HEVC代理] 当前版本可以启用HEVC代理"),
y.invoke("imageProxyInit",{},function(t){
t.err_msg.indexOf(":ok")>-1?(K=t.serverUrl,window.__addIdKeyReport("28307",117)):t.err_msg.indexOf(":fail")>-1&&window.__addIdKeyReport("28307",118),
e();
})):e();
},lt=function(e){
ct("lossy",e),ct("lossless",e),ct("alpha",e),ct("animation",e);
};
window.webp=!1,mt(function(){
lt(function(t){
function o(e){
e.width<40||e.height<40||-1==e.className.indexOf("img_loading")&&(e.className+=" img_loading");
}
function i(e){
if(!(e.width<40||e.height<40)){
var t=e.src;
if(e.className=e.className.replace("img_loading",""),-1==e.className.indexOf("img_loadederror")){
e.className+=" img_loadederror",e.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
window.__addIdKeyReport("28307",51);
var i=function(){
window.__addIdKeyReport("28307",66),n(e),o(e);
var i=e.__retryload;
return i=0,t=t.https2http(),e.__retryload=i,e.src=it.addParam(t,"retryload",i,!0),
!1;
};
h.on(e,"click",i);
}
}
}
function n(e){
e.className=e.className.replace("img_loading",""),e.className=e.className.replace("img_loadederror","");
}
window.webp=t,t&&window.localStorage&&window.localStorage.setItem&&window.localStorage.setItem("webp","1"),
window.logs.img={
download:{},
read:{},
load:{}
};
var r=document.getElementById("js_cover");
if(r){
var a=r.getAttribute("data-src");
a&&(a.isCDN()&&(a=a.imgChange640(),t&&(a=it.addParam(a,"tp","webp",!0)),a=it.addParam(a,"wxfrom","5",!0),
is_https_res||M?a=a.http2https():("http:"==location.protocol||-1!=navigator.userAgent.indexOf("MicroMessenger"))&&(a=a.https2http())),
setTimeout(function(){
r.onload=function(){
g(r,"height","auto","important"),g(r,"visibility","visible","important");
},r.setAttribute("src",a);
},0),window.logs.img.read[a]=!0,window.logs.img.load[a]=!0,r.removeAttribute("data-src"));
}
var s=e("biz_wap/ui/lazyload_img.js"),d=2;
window.logs.outer_pic=0;
for(var p=document.getElementsByTagName("img"),l=0,w=p.length;w>l;l++){
{
var u=p[l].getAttribute("data-src");
p[l].getAttribute("src");
}
u&&u.isGif()&&p[l].className.indexOf("__bg_gif")<0&&(p[l].className+=" __bg_gif");
}
for(var f=document.getElementsByClassName("__bg_gif"),l=0,w=f.length;w>l;++l)f[l].setAttribute("data-order",l);
var y=function(e){
try{
var t=e,o=t.getAttribute("data-src");
if(!/^https?\:\/\/mmbiz\.qpic\.cn/.test(o))return;
var i=t.parentNode,n=!1;
c.hasClass(i,"js_jump_icon")&&(n=!0);
for(var r=!1;i.tagName&&"body"!=i.tagName.toLowerCase();){
if("a"==i.tagName.toLowerCase()){
var a=i.getAttribute("href")||"";
null!=a.match(/^http/)&&(r=!0);
break;
}
i=i.parentNode;
}
if(n&&!r){
var s=t.parentNode,d=s.parentNode;
if(d){
for(var p=document.createDocumentFragment();s.firstChild;)p.appendChild(s.firstChild);
d.insertBefore(p,s),d.removeChild(s);
}
}else if(!n&&r){
var m=document.createElement("span"),l=getComputedStyle(t);
"static"!=l.positon&&(m.style.position=l.positon),m.style.left=l.left,m.style.top=l.top,
m.style.right=l.right,m.style.bottom=l.bottom,m.style.margin=l.margin,c.addClass(m,"js_jump_icon"),
c.addClass(m,"h5_image_link"),t.style.position="static",t.style.margin="0px",t.parentNode.insertBefore(m,t),
m.appendChild(t),window.__addIdKeyReport("111535",0);
}
}catch(w){}
},v=function P(e){
try{
var t=e.childNodes,o=getComputedStyle(e);
(o.backgroundImage.match(/https\:\/\/mmbiz\.qpic\.cn/)||o.backgroundImage.match(/http\:\/\/mmbiz\.qpic\.cn/))&&window.__addIdKeyReport("111535",2);
for(var i=0;i<t.length;i++)"a"!=t[i].tagName.toLowerCase()&&P(t[i]);
}catch(n){}
};
try{
for(var b=document.getElementsByTagName("a"),A=0;A<b.length;A++){
var j=b.item(A),x=j.getAttribute("href")||"";
null!=x.match(/^http/)&&v(j);
}
}catch(E){}
var k=!1;
window.isCartoonCopyright||new s({
attrKey:"data-src",
imgOccupied:!0,
crossOrigin:!0,
lazyloadHeightWhenWifi:function(){
var e,t=1,o=1;
e=window.svr_time?new Date(1e3*window.svr_time):new Date;
var i=e.getHours();
return i>=20&&23>i&&(t=.5,o=0),{
bottom:t,
top:o
};
},
inImgRead:function(e){
e&&(window.logs.img.read[e]=!0);
},
changeSrc:function(e,t){
if(!t)return"";
var o=t;
if(t.isCDN()){
o=o.imgChange640();
var i,n=window.navigator.userAgent,r=/TBS\/([\d\.]+)/i,a=n.match(r);
a&&a[1]&&(i=parseInt(a[1]));
var s,d=/XWEB\/([\d\.]+)/i,p=n.match(d);
p&&p[1]&&(s=parseInt(p[1]));
var c=1e3,l=window.user_uin||0,w=0!==l&&Math.floor(l/100)%1e3<c,g=(i>=43305&&44206!=i||s>=16)&&o.isGif(),u=0!==l&&Math.floor(l/100)%1e3<=500,f=s>=564&&o.canHevc()&&_.gtVersion("6.8.0",!0)&&u;
w&&(g||f)?(o=it.addParam(o,"tp","wxpic",!0),window.__addIdKeyReport("28307",91)):window.webp&&(o=it.addParam(o,"tp","webp",!0),
window.__addIdKeyReport("28307",84)),o=it.addParam(o,"wxfrom","5",!0),is_https_res||M?(o=o.http2https(),
window.__addIdKeyReport("28307",77)):("http:"==location.protocol||-1!=navigator.userAgent.indexOf("MicroMessenger"))&&(o=o.https2http(),
window.__addIdKeyReport("28307",70));
}else try{
var r=new RegExp("^http(s)?://((mmbiz.qpic.cn/.*)|(m.qpic.cn/.*)|(mmsns.qpic.cn/.*)|(shp.qpic.cn/.*)|(wx.qlogo.cn/.*)|(mmbiz.qlogo.cn/.*)|((a|b)[0-9]*.photo.store.qq.com/.*)|(mp.weixin.qq.com/.*)|(res.wx.qq.com/.*))");
r.test(t)||(window.__addIdKeyReport("28307",9),window.logs.outer_pic++);
}catch(h){}
var y=/^http\:\/\/(a|b)(\d)+\.photo\.store\.qq\.com/g;
o=o.replace(y,"http://m.qpic.cn"),/^http(s)?:\/\/m\.qpic\.cn([\/?].*)*$/i.test(o)&&!window.webp&&(o=it.addParam(o,"t","",!0)),
o=it.addParam(o,"wx_lazy","1",!0);
var v=_.gtVersion("6.5.13",!0)&&!_.eqVersion("7.0.9")&&o.isGif(),b=_.gtVersion("6.8.0",!0)&&o.canHevc()&&!(_.eqVersion("7.0.9")&&o.isGif());
return K&&(v||b)&&(window.__addIdKeyReport("28307",106),o=it.addParam(o,"tp","wxpic",!0),
o=K+"hevc?url="+encodeURIComponent(o)+"&type="+o.getOriginImgType()),"anonymous"==e.crossOrigin&&(o=it.addParam(o,"wx_co","1",!0)),
window.logs.img.load[o]=!0,m("[Appmsg] image_load_event_change_src. originsrc:"+t+"  ^^^ newsrc : "+o),
e.start_load_time=+new Date,o;
},
onerror:function(e,t){
var o=t?t.__retryload||0:0;
if(2==o&&i(t),e&&!(o>d)){
if(!e.isCDN()){
if(!K)return;
if(-1==e.indexOf(K))return;
}
var n=0==e.indexOf("https://")?7:0;
if(window.__addIdKeyReport("28307",72+n),1>=o&&window.__addIdKeyReport("28307",75+1*o+n),
e.isWxpic()?(window.__addIdKeyReport("28307",93),WX_BJ_REPORT.BadJs.report("imgError:hevc",e,{
mid:"mmbizwap:imgMonitor",
view:"wap_appmsg"
}),1>=o&&window.__addIdKeyReport("28307",96+1*o)):e.isWebp()?(window.__addIdKeyReport("28307",86),
WX_BJ_REPORT.BadJs.report("imgError:webp",e,{
mid:"mmbizwap:imgMonitor",
view:"wap_appmsg"
}),1>=o&&window.__addIdKeyReport("28307",89+1*o)):WX_BJ_REPORT.BadJs.report("imgError",e,{
mid:"mmbizwap:imgMonitor",
view:"wap_appmsg"
}),K&&e.indexOf(K)>-1&&window.__addIdKeyReport("28307",108),d>o){
if(o++,t.__retryload=o,1==o&&e.indexOf("http://")>-1?(e=e.http2https(),window.__addIdKeyReport("28307",60),
window.__addIdKeyReport("28307",77)):1==o&&e.indexOf("https://")>-1?(window.__addIdKeyReport("28307",61),
window.__addIdKeyReport("28307",77)):2==o&&e.indexOf("mmbiz.qpic.cn")>-1&&(e=e.replace("mmbiz.qpic.cn","mmbiz.qlogo.cn"),
e.indexOf(!1)&&(e=e.http2https())),K&&e.indexOf(K)>-1){
var r=e.split("hevc?url=")[1];
r=r.split("&type")[0],r=decodeURIComponent(r),r=r.replace("tp=wxpic",""),e=r.https2http();
}
t.start_load_time=+new Date,t.src=it.addParam(e,"retryload",o,!0);
}
window.__has_imgfailed||(window.__has_imgfailed=!0,window.__addIdKeyReport("28307",65)),
m("[Appmsg] image_load_event_on_error. src:"+e),t.setAttribute("data-fail",1);
try{
if("[object Array]"==Object.prototype.toString.call(t.lazyLoadOnerror))for(var a=0,s=t.lazyLoadOnerror.length;s>a;a++)"function"==typeof t.lazyLoadOnerror[a]&&t.lazyLoadOnerror[a].call(t);
}catch(p){}
var c=10;
/tp\=webp/.test(e)&&(c=11);
var l=new Image;
l.src="http://mp.weixin.qq.com/mp/jsreport?key="+c+"&content="+(encodeURIComponent(e)+"["+uin+"]")+"&r="+Math.random();
}
},
onload:function(e,t){
if(!window.__second_open__&&!k){
var o=window.performance||window.msPerformance||window.webkitPerformance;
if(!o||!o.timing)return;
var i=window.location.protocol;
I.saveSpeeds({
uin:uin,
pid:"https:"==i?462:417,
speeds:{
sid:35,
time:Date.now()-window.performance.timing.navigationStart
}
}),I.send(),k=!0;
}
n(t),t.gray&&!t.loadGif&&((t.width||t.naturalWidth)<120||(t.height||t.naturalHeight)<120?t.autoTap&&t.autoTap():t.span&&t.span.children&&t.span.children.item(0)&&(t.span.children.item(0).style.display=""));
var r=t?t.__retryload||0:0;
if(!(r>d)){
m("[Appmsg] image_load_event_onload_image. src:"+e+"  ^^^  retryloadtimes: "+r),
t.setAttribute("data-fail",0),y(t);
try{
if("[object Array]"==Object.prototype.toString.call(t.lazyLoadOnload))for(var a=0,s=t.lazyLoadOnload.length;s>a;a++)"function"==typeof t.lazyLoadOnload[a]&&t.lazyLoadOnload[a].call(t);
}catch(p){}
var c=0==e.indexOf("https://")?7:0;
window.__addIdKeyReport("28307",71+c),1>=r&&window.__addIdKeyReport("28307",73+1*r+c),
e.isWxpic()?(window.__addIdKeyReport("28307",92),1>=r&&window.__addIdKeyReport("28307",94+1*r)):e.isWebp()&&(window.__addIdKeyReport("28307",85),
1>=r&&window.__addIdKeyReport("28307",87+1*r)),K&&e.indexOf(K)>-1&&window.__addIdKeyReport("28307",107),
window.__has_imgsucceed||(window.__has_imgsucceed=!0,window.__addIdKeyReport("28307",64)),
1==r&&e.indexOf("http://")>-1&&window.__addIdKeyReport("28307",50),1==r&&e.indexOf("https://")>-1&&window.__addIdKeyReport("28307",52);
var l=Math.random(),w=+new Date-t.start_load_time;
w&&0==e.indexOf("https://")&&.5>l?(window.__addIdKeyReport("27822",121,w),window.__addIdKeyReport("27822",122)):w&&5e-4>l&&(window.__addIdKeyReport("27822",124,w),
window.__addIdKeyReport("27822",125)),""===t.style.filter||"none"===t.style.filter||/translate(Z|3d)\(/.test(t.style.transform)||(t.style.transform+=" translateZ(0)",
t.style.webkitTransform+=" translateZ(0)");
}
},
detect:function(e){
if(e&&e.time&&e.loadList){
var t=e.time,o=e.loadList;
window.logs.img.download[t]=o;
}
},
container:document.getElementById("page-content")
});
});
}),e("appmsg/async.js"),!window.isSg;
var wt=e("appmsg/copyright_report.js");
!function(){
var e=document.getElementById("profileBt"),t=document.getElementById("copyright_info"),o=[];
if(e){
var i="57";
"28"==window.source&&(i="96"),"31"===window.source&&(i="103"),"30"===window.source&&(i="102"),
"29"==window.source&&(i="39"),"15"==window.source&&(i="121"),o.push({
dom:e,
username:user_name,
profileReportInfo:window.profileReportInfo||"",
scene:i
});
}
t&&source_encode_biz&&o.push({
dom:t,
source_encode_biz:source_encode_biz,
scene:"161"
});
var n=document.getElementById("js_share_headimg");
n&&o.push({
dom:n,
username:source_username,
scene:"172"
});
var r=document.getElementById("js_share_author");
r&&o.push({
dom:r,
username:source_username,
scene:"172"
});
for(var a=0,s=o.length;s>a;a++)!function(e){
h.on(e.dom,"click",function(){
if("copyright_info"==e.dom.id&&source_encode_biz){
wt.card_click_report({
scene:"0"
});
var t="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz="+e.source_encode_biz+"&scene="+e.scene+"#wechat_redirect";
-1!=navigator.userAgent.indexOf("WindowsWechat")?location.href=t:y.invoke("profile",{
username:source_username,
scene:e.scene+""
});
}else{
if(m("[Appmsg] profile_click_before_loadprofile: username:"+e.username+", scene:"+e.scene),
b.profileReport({
hotspotjson:JSON.stringify({
hotspotinfolist:window.hotspotInfoList
})
}),profileReportInfo){
var o=String(profileReportInfo).split("_");
3==o.length&&l({
url:"/mp/ad_biz_info?action=report&__biz="+window.biz+"&report_type=2&aid="+o[1]+"&tid="+o[2],
type:"GET",
dataType:"json",
async:!0,
success:function(){}
});
}
1==isprofileblock?y.invoke("openUrlWithExtraWebview",{
url:"https://mp.weixin.qq.com/mp/profileblock?__biz="+window.biz+"#wechat_redirect",
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href="https://mp.weixin.qq.com/mp/profileblock?__biz="+window.biz+"#wechat_redirect");
}):y.invoke("profile",{
username:e.username,
profileReportInfo:e.profileReportInfo||"",
scene:e.scene+""
},function(t){
window.__addIdKeyReport("28307","1"),m("[Appmsg] profile_click_after_loadprofile: username:"+e.username+", scene:"+e.scene+", profileReportInfo:"+e.profileReportInfo+", res.err_msg:"+t.err_msg);
});
}
return!1;
}),_.isWp&&e.dom.setAttribute("href","weixin://profile/"+e.username);
}(o[a]);
}(),function(){
function e(){
if("hidden"in document)return"hidden";
for(var e=["webkit","moz","ms","o"],t=0;t<e.length;t++)return e[t]+"Hidden"in document,
e[t]+"Hidden";
return null;
}
function t(){
var t=e();
return t?document[t]:!1;
}
function o(){
if(t())for(var e=0;e<window.parent.originalVideoAdFrames.length;e++)window.parent.originalVideoAdFrames[e].contentWindow.postMessage({
action:"pauseAd",
value:""
},"*");else window.originalVideoAdCurrentFrame&&window.originalVideoAdCurrentFrame.contentWindow.postMessage({
action:"playAd"
},"*");
}
document.webkitVisibilityState?document.addEventListener("webkitvisibilitychange",o,!1):document.msVisibilityState?document.addEventListener("msvisibilitychange",o,!1):document.visibilityState&&document.addEventListener("visibilitychange",o,!1);
}();
try{
var gt=document.getElementById("js_author_name");
if(gt){
var ut="";
h.on(gt,"click",function(){
return c.hasClass(gt,"rich_media_meta_link")?window.is_temp_url?(window.weui.alert("预览状态下不能操作"),
!1):gt.getAttribute("data-rewardsn")?1!=gt.getAttribute("data-canreward")?!1:(ut="https://mp.weixin.qq.com/mp/author?action=show&author_id="+author_id+"&rewardsn="+gt.getAttribute("data-rewardsn")+"&timestamp="+gt.getAttribute("data-timestamp")+"&__biz="+window.biz+"&appmsgid="+window.appmsgid+"&idx="+window.idx+"&scene=142&rscene=129&from_scene="+window.source+"&from_subscene="+window.subscene+"&from_enterid="+window.enterid+"&from_sessionid="+window.sessionid+"&is_fans="+window.isFans+"#wechat_redirect",
_.isInMiniProgram?!1:(-1!=navigator.userAgent.indexOf("MicroMessenger")&&(_.isIOS||_.isAndroid||_.isWp)?(window.__addIdKeyReport("110809","1"),
y.invoke("openUrlWithExtraWebview",{
url:ut,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=ut);
})):location.href=ut,!1)):!1:!1;
});
}
}catch(G){}
var _t=e("appmsg/outer_link.js");
if(new _t({
container:document.getElementById("js_content"),
changeHref:function(e,t){
if(!e||0!=e.indexOf("http://mp.weixin.qq.com/")&&0!=e.indexOf("https://mp.weixin.qq.com/")){
if(18==ban_scene)return"/mp/ban?action=check&__biz="+biz+"&mid="+mid+"&idx="+idx+"&scene="+ban_scene+"#wechat_redirect";
if(0!=e.indexOf("http://mp.weixinbridge.com/mp/wapredirect"))return"http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(e)+"&action=appmsg_redirect&uin="+uin+"&biz="+biz+"&mid="+mid+"&idx="+idx+"&type="+t+"&scene=0";
}else{
e=e.replace(/#rd\s*$/,""),e=e.replace(/#wechat_redirect\s*$/,""),e=e.replace(/[\?&]scene=21/,"");
var o="&";
-1==e.indexOf("?")&&(o="?"),e+=o+"scene=21#wechat_redirect";
}
return e;
}
}),!nt){
var ft=e("appmsg/review_image.js"),ht=document.getElementById("js_cover"),yt=[];
ht&&yt.push(ht),new ft({
container:document.getElementById("js_content"),
is_https_res:is_https_res,
imgs:yt
});
}
e("appmsg/product.js");
var vt=e("appmsg/page_pos.js");
vt.init({
hasSpAd:!0,
disableScroll:window.isPaySubscribe&&!window.isPaid&&window.jump2pay
}),function(){
try{
var e=document.getElementById("js_content");
if(!e||!e.querySelectorAll)return;
var t=function(e){
var t=e.getAttribute("class");
if(t){
for(var o=t.split(/\s+/),i=[],n=0,r=o.length;r>n;++n){
var a=o[n];
if(a&&-1!=window.whiteList.indexOf(a))i.push(a);else for(var s=0,d=window.whiteListReg.length;d>s;s++)if(window.whiteListReg[s].test(a)){
i.push(a);
break;
}
}
e.setAttribute("class",i.join(" "));
}
};
e.querySelectorAll("*").forEach(function(e){
if(e&&e.tagName){
var o=e.tagName.toLowerCase();
"iframe"!==o?t(e):"video_ad_iframe"===e.getAttribute("class")&&e.setAttribute("class","");
}
});
}catch(o){
console.error(o);
}
}(),function(){
window.originalVideoAdFrames=[],window.originalVideoAdCurrentFrame=null,window.originalVideoAdFramesUnsetList=[],
window.addEventListener("message",function(e){
var t="",o=document.getElementsByTagName("iframe");
if(e.data&&"originalVideoAdNeedData"==e.data.action&&e.data.vid)if(window.originalVideoAdFramesAdData){
window.originalVideoAdFramesAdData&&window.originalVideoAdFramesAdData[e.data.vid]&&(t=window.originalVideoAdFramesAdData[e.data.vid]);
for(var i=0;i<o.length;i++)o[i].dataset&&o[i].dataset.mpvid==e.data.vid&&o[i].contentWindow.postMessage({
action:"receiveOriginalVideoData",
vid:e.data.vid,
adData:t
},"*");
}else console.log(e.data.vid," has no ad data yet"),window.originalVideoAdFramesUnsetList.push(e.data.vid);
});
}(),window.fromWeixinCached||e("appmsg/iframe.js"),j.getAdData(window.reportVid),
e("appmsg/qqmusic.js");
var bt=e("appmsg/voice.js"),At=[];
if(voiceList&&voiceList.voice_in_appmsg&&voiceList.voice_in_appmsg.length>0&&(At=voiceList.voice_in_appmsg),
bt.init(At),e("redpackage/redpacketcover.js"),e("appmsg/search/search.js"),e("appmsg/poi/poi.js"),
window.__appmsgCgiData&&1==window.__appmsgCgiData.show_msg_voice&&e("appmsg/autoread.js"),
1===window.show_msg_voice&&(console.log("load voicemsg"),e("appmsg/voicemsg.js")),
!window.__appmsgCgiData||1!=window.__appmsgCgiData.wxa_product&&1!=window.__appmsgCgiData.wxa_cps||e("appmsg/weproduct.js"),
e("appmsg/weapp.js"),document.getElementsByTagName("mp-qa").length){
var jt=e("question_answer/appmsg.js");
jt.renderQaCard&&jt.renderQaCard({
mid:window.mid,
idx:window.idx,
isLogin:!!window.is_login,
userUin:window.user_uin,
biz:window.biz,
itemShowType:window.item_show_type,
sessionId:window.sessionid,
enterId:window.enterid,
scene:window.source,
subScene:window.subscene
});
}
if(document.getElementsByTagName("mplive").length){
var It=e("appmsg/live.js");
It.init({
biz:window.biz,
mid:window.mid,
idx:window.idx,
scene:window.source,
svrTime:window.svr_time
});
}
e("appmsg/wxtopic.js"),e("appmsg/cdn_speed_report.js");
var xt=e("appmsg/appmsg_copy_report.js");
new xt({
biz:window.biz,
isPaySubscribe:window.isPaySubscribe,
container:document.getElementById("js_content"),
logid:18504,
baseData:["",window.biz,window.mid,window.idx,window.location.href,window.msg_title]
}),setTimeout(function(){
window.article_improve_combo_css;
},0),setTimeout(function(){
h.tap(document.getElementById("copyright_logo"),function(){
var e="http://kf.qq.com/touch/sappfaq/150211YfyMVj150326iquI3e.html";
window.__second_open__?y.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
-1==t.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e;
}),u(),f(),h.tap(document.getElementById("js_hotspot_area"),function(e){
if(c.hasClass(e.target,"js_hotspot")){
var t=e.target.dataset.id;
if(!t)return;
t="https://search.weixin.qq.com/cgi-bin/searchweb/clientjump?scene=306&tag=mp_topic&topic_id="+t+"#wechat_redirect",
-1!=navigator.userAgent.indexOf("MicroMessenger")&&(_.isIOS||_.isAndroid||_.isWp)?y.invoke("openUrlWithExtraWebview",{
url:t,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=t);
}):location.href=t;
}
}),e("appmsg/report_and_source.js"),function(){
if(nt){
document.title=window.msg_title.htmlDecode(),c.addClass($,"not_in_mm");
var e=document.getElementById("js_pc_qr_code_img");
if(e){
var t=10000004,o=document.referrer;
if(0==o.indexOf("http://weixin.sogou.com")?t=10000001:0==o.indexOf("https://wx.qq.com")&&(t=10000003),
window.isSg)e.setAttribute("src",sg_qr_code.htmlDecode());else{
e.setAttribute("src","/mp/qrcode?scene="+t+"&size=102&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&send_time="+send_time);
var i=new Image;
i.src="/mp/report?action=pcclick&__biz="+biz+"&uin="+uin+"&scene="+t+"&r="+Math.random();
}
document.getElementById("js_pc_qr_code").style.display="block";
}
var n=document.getElementById("js_profile_qrcode"),r=document.getElementById("js_profile_arrow_wrp"),a=document.getElementById("profileBt");
if(n&&a&&r){
var s=function(){
var e=10000005,t=document.referrer;
0==t.indexOf("http://weixin.sogou.com")?e=10000006:0==t.indexOf("https://wx.qq.com")&&(e=10000007);
var o=document.getElementById("js_profile_qrcode_img");
if(o)if(window.isSg)o.setAttribute("src",sg_qr_code.htmlDecode());else{
o.setAttribute("src","/mp/qrcode?scene="+e+"&size=102&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&send_time="+send_time);
var i=new Image;
i.src="/mp/report?action=pcclick&__biz="+biz+"&uin="+uin+"&scene="+e+"&r="+Math.random();
}
return n.style.display="block",r.style.left=a.offsetWidth/2-8+"px",!1;
};
h.on(a,"click",s),h.on(n,"click",s),h.on(document,"click",function(e){
var t=e.target||e.srcElement;
t!=a&&t!=n&&(n.style.display="none");
});
}
}else{
var d=document.getElementById("js_report_article3");
!!d&&(d.style.display="");
}
}(),function(){
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=document.getElementById("img-content");
if(e&&t&&t.getBoundingClientRect){
var o=t.getBoundingClientRect().height;
window.scrollTo(0,o);
}
}(),e("appmsg/report.js");
for(var t=document.getElementsByTagName("map"),o=0,i=t.length;i>o;++o)t[o].parentNode.removeChild(t[o]);
if(wt.card_pv_report(),Math.random()<.01)try{
var n="https://js.aq.qq.com/js/aq_common.js",r=document.createElement("script");
r.src=n;
var a=document.getElementsByTagName("head")[0];
a.appendChild(r);
}catch(s){}
var d=document.getElementById("js_close_temp");
h.on(d,"click",function(){
d.parentNode.parentNode.removeChild(d.parentNode),c.removeClass(document.getElementById("js_article"),"preview_appmsg");
});
},1e3),function(){
if(p.os.ios&&"onorientationchange"in window){
var e=[],t="onorientationchange"in window?"orientationchange":"resize",o=function(){
return 90===Math.abs(window.orientation)?1:2;
};
e.push({
ori:o(),
scroll:window.pageYOffset||document.documentElement.scrollTop,
istouchmove:!1
});
var i=(new Date).getHours();
h.on(window,t,function(){
var t=e.length-2,n=o();
if(z=+new Date,t>=0){
{
var r=e[t];
r.ori;
}
e[e.length-1].istouchmove||(i>=11&&17>=i&&window.__report(63),setTimeout(function(){
window.scrollTo(0,r.scroll);
},100));
}
e.push({
ori:n,
scroll:window.pageYOffset||document.documentElement.scrollTop,
istouchmove:!1
});
});
var n=document.getElementById("js_hotspot_area"),r=0===n.children.length;
h.on(window,"scroll",function(){
var t=e.length-1,i=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,a=+new Date;
if(-1!=z){
if(console.log("[横屏滚动检测]",a-z),500>a-z)return void(z=-1);
}else z=-1;
if(e[t].ori==o()&&(e[t].scroll=i,e[t].istouchmove=!0,!r)){
var s=x.getInnerHeight()+i;
n.offsetTop<s&&(r=!0,R.setSum(59977,15,1));
}
});
}
}(),m("[Appmsg] href:"+location.href+"^^^ ua:"+window.navigator.userAgent),window.addEventListener?window.addEventListener("load",D,!1):window.attachEvent&&window.attachEvent("onload",D),
e(window.moon&&moon.clearSample?"appmsg/fereport_without_localstorage.js":"appmsg/fereport.js"),
function(){
window.addEventListener&&document.getElementsByTagName("body")[0].addEventListener("copy",function(){
R.setSum(28307,18,1),_.isIOS&&R.setSum(28307,19,1),_.isAndroid&&R.setSum(28307,20,1);
},!1);
}(),function(){
window.__observer&&window.__observer_data&&e("biz_wap/safe/mutation_observer_report.js");
}(),"undefined"!=typeof isSg&&e("sougou/index.js"),setTimeout(function(){
for(var e=function(){
R.setLogs({
id:28307,
key:49,
value:1,
lc:1,
log0:"[28307_49_appmsg_fe_filter]"+encodeURIComponent(location.href)
});
},t=(window.appmsg_fe_filter||"").split(","),o=function(t,o){
try{
if(!t)return;
if(t.querySelectorAll){
var i=t.querySelectorAll("*["+o+"]");
if(i&&i.length>0){
e();
for(var n=0;n<i.length;++n)i[n]&&i[n].removeAttribute&&i[n].removeAttribute(o);
}
return;
}
var r=t.childNodes;
if(t.hasAttribute&&t.hasAttribute(o)&&e(),t.removeAttribute&&t.removeAttribute(o),
r&&r.length)for(var n=0;n<r.length;++n)filterContenteditable(r[n]);
}catch(a){}
},i=document.getElementById("js_content"),n=0;n<t.length;++n)t[n]&&o(i,t[n]);
},0),setTimeout(function(){
var e=999,t=636,o="http://mmbiz.qpic.cn/mmbiz_png/7lG1x2vpicdic0p5bBthpD9lsJcINicsSzd6uKQQJyoj5oTl8lFIs9K0fIibgxCzms0enDLTRxTHLpDPCLpSvIExiag/0",i=(new Date).getHours();
if(!(11>i||i>16||Math.random()<.99)){
var n=new Image;
n.onload=function(){
var o=n.naturalWidth||n.width,i=n.naturalHeight||n.height;
(o!=e||i!=t)&&window.__addIdKeyReport("28307","wifi"===window.networkType?120:123),
window.__addIdKeyReport("28307","wifi"===window.networkType?121:124);
},n.src=o;
var r=new Image;
r.onload=function(){
var o=r.naturalWidth||r.width,i=r.naturalHeight||r.height;
(o!=e||i!=t)&&window.__addIdKeyReport("28307",126),window.__addIdKeyReport("28307",127);
},r.src="https://mmbiz.qpic.cn/mmbiz_png/7lG1x2vpicdic0p5bBthpD9lsJcINicsSzd6uKQQJyoj5oTl8lFIs9K0fIibgxCzms0enDLTRxTHLpDPCLpSvIExiag/0";
}
},3e3);
var Et=Math.random();
if(2e-4>Et)try{
for(var kt=document.getElementsByTagName("img"),Pt=window.screen.height,zt=window.screen.width,Bt=0,St=window.devicePixelRatio,Bt="",U=0,Rt=kt.length;Rt>U;U++){
var Tt=kt[U].getAttribute("data-src");
if(Tt){
var Ct=kt[U].getBoundingClientRect();
Bt+=zt+"|"+Pt+"|"+Ct.left.toFixed(2)+"|"+(zt-Ct.right).toFixed(2)+"|"+Ct.width.toFixed(2)+"|"+St.toFixed(2)+"|"+Tt+";";
}
}
l({
url:"/mp/wapreport?action=img_display_report",
data:{
key:Bt
},
type:"POST",
dataType:"json",
async:!0
});
}catch(G){}
setTimeout(function(){
B&&B.postPageHeightMessage&&B.postPageHeightMessage("updatePageHeight");
},2e3),_.isIOS&&location.href.match(/fontScale=\d+/)&&p.os.ipad&&p.os.getNumVersion()>=13&&setTimeout(function(){
if(!window.ipados13_font_scale){
var e=location.href.match(/fontScale=(\d+)/);
window.ipados13_font_scale=parseFloat(e[1]),i(document.getElementsByTagName("html").item(0),window.ipados13_font_scale/100);
}
},500);
}
e("appmsg/search_image.js"),e("biz_wap/ui/weui.js"),e("appmsg/sec_load_fail_report.js");
var i=e("appmsg/set_font_size.js").setFontSize,n=e("biz_common/tmpl.js"),r=e("cps/tpl/banner_tpl.html.js"),a=e("cps/tpl/card_tpl.html.js"),s=e("cps/tpl/list_tpl.html.js");
e("biz_common/utils/string/html.js");
var d=e("appmsg/weapp_common.js"),p=e("biz_wap/utils/device.js"),c=e("biz_common/dom/class.js"),m=e("appmsg/log.js"),l=e("biz_wap/utils/ajax.js"),w=e("biz_common/dom/attr.js"),g=w.setProperty,u=e("appmsg/max_age.js"),_=e("biz_wap/utils/mmversion.js"),f=e("appmsg/test.js"),h=e("biz_common/dom/event.js"),y=e("biz_wap/jsapi/core.js"),v=e("biz_common/moment.js"),b=e("appmsg/appmsg_report.js"),A=e("biz_common/utils/url/parse.js"),j=e("a/mpAdAsync.js"),I=e("biz_wap/utils/wapsdk.js"),x=e("common/utils.js"),E=(e("complain/localstorage.js"),
e("appmsg/popup_report.js")),k=e("appmsg/pay_report_utils.js"),P=e("appmsg/loading.js"),z=-1,B=e("appmsg/finance_communicate.js"),S=e("appmsg/topbar.js"),R=e("biz_wap/utils/jsmonitor_report.js"),T=e("appmsg/getForbidConfig.js");
e("appmsg/wxwork_hidden.js");
var C=e("common/color/background_color.js"),O=e("common/color/dark.js"),q=e("appmsg/tags_utils.js");
C.set({
bottom:["#f2f2f2",O["BG-0"]]
}),window.new_appmsg&&(e("page/appmsg_new/combo.css"),e("page/appmsg_new/not_in_mm.css")),
e("appmsg/finance_communicate.js");
var N=window.user_uin||0,D=Math.floor(N/100)%1e3,M=0!==N&&1001>D,L=!0,K="",W=5;
if(window.logs.pagetime.jsapi_ready_time=+new Date,window.logs.idkeys={},console.info("[图文信息] 三元组:",window.biz,window.mid,window.idx),
console.info("[用户信息] 设备信息: 是否安卓",p.os.android,"是否IOS",p.os.ios,"是否秒开场景",window.__second_open__,"系统版本",p.os.version,"用户uin",window.user_uin,"是否小程序内打开",_.isInMiniProgram),
m("[Appmsg] start run index.js init"),function(){
var e=(new Date).getHours(),t=function(e,t){
t=t||"",window.isSg?(t=["uin:sougou","resp:"+t].join("|"),(new Image).src="/mp/jsreport?key="+e+"&content="+t+"&r="+Math.random()+"&from=sougou"):(t=["uin:"+window.user_uin,"resp:"+t].join("|"),
(new Image).src="/mp/jsreport?key="+e+"&content="+t+"&r="+Math.random());
},o=function(e,t,o){
var i=e+"_"+t;
o=o||1,window.logs.idkeys[i]||(window.logs.idkeys[i]={
val:0
}),window.logs.idkeys[i].val+=o;
},i=e>=11&&17>=e&&Math.random()<1,n=function(e,o){
i&&t(e,o);
};
window.__report=t,window.__commonVideoReport=n,window.__addIdKeyReport=o;
}(),_.isAndroid&&_.gtVersion("7.0.15",1)&&x.initWebCompt(["wxAd"]),o(),!window.__second_open__){
var V=window.performance||window.msPerformance||window.webkitPerformance;
if(!V||!V.timing)return;
var H=window.location.protocol;
I.saveSpeeds({
uin:uin,
pid:"https:"==H?462:417,
speeds:{
sid:34,
time:Date.now()-window.performance.timing.navigationStart
}
}),I.send(),T({
isPaySubscribe:window.isPaySubscribe
});
}
});