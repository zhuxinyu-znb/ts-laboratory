define("biz_common/utils/wxgspeedsdk.js",[],function(){
"use strict";
function e(e){
if(!e.pid||!e.speeds)return-1;
if(!e.speeds.length>0){
var n=e.speeds;
e.speeds=[],e.speeds.push(n);
}
e.user_define&&(p=e.user_define);
for(var t=d(e),o=0;o<e.speeds.length;o++){
var r=e.speeds[o];
r.time=parseInt(r.time),r.sid>20&&r.time>=0&&i(t,r.sid,r.time);
}
}
function n(){
s(function(){
setTimeout(function(){
for(var e in u)r({
pid_uin_rid:e,
speeds:u[e],
user_define:p
},c);
u={};
},100);
});
}
function t(e){
s(function(){
if(!e.pid||!e.time)return-1;
var n=d(e);
i(n,9,e.time);
});
}
function o(e){
s(function(){
var n=d(e);
u[n]||(u[n]=[]);
var t=window.performance||window.msPerformance||window.webkitPerformance||{};
if(t&&t.timing){
var o=t.timing||{};
i(n,1,o.domainLookupEnd-o.domainLookupStart),i(n,2,"https:"==location.protocol&&0!=o.secureConnectionStart?o.connectEnd-o.secureConnectionStart:0),
i(n,3,o.connectEnd-o.connectStart),i(n,4,o.responseStart-o.requestStart),i(n,5,o.responseEnd-o.responseStart),
i(n,6,o.domContentLoadedEventStart-o.domLoading),i(n,7,0==o.domComplete?0:o.domComplete-o.domLoading),
i(n,8,0==o.loadEventEnd?0:o.loadEventEnd-o.loadEventStart),function(){
setTimeout(function(){
o.loadEventEnd&&(i(n,7,0==o.domComplete?0:o.domComplete-o.domLoading),i(n,8,0==o.loadEventEnd?0:o.loadEventEnd-o.loadEventStart));
},0);
}(u),u[n][9]||i(n,9,o.domContentLoadedEventStart-o.navigationStart),i(n,10,o.redirectEnd-o.redirectStart),
i(n,11,o.domainLookupStart-o.fetchStart),i(n,12,o.domLoading-o.responseStart);
}
});
}
function i(e,n,t){
u[e]=u[e]||[],u[e][n]=u[e][n]||[],0>t||(21>n?u[e][n][0]=t:u[e][n].push(t));
}
function d(e){
return e&&e.pid?e.pid+"_"+(e.uin||0)+"_"+(e.rid||0):void(console&&console.error("Must provide a pid"));
}
function r(e,n){
var t=e.pid_uin_rid.split("_");
if(3!=t.length)return void(console&&console.error("pid,uin,rid, invalid args"));
var o="pid="+t[0]+"&uin="+t[1]+"&rid="+t[2];
e.user_define&&(o+="&user_define="+e.user_define);
for(var i=n+o+"&speeds=",d="",r=[],s=1;s<e.speeds.length;s++)if(e.speeds[s]){
for(var a=0;a<e.speeds[s].length;a++){
var p=s+"_"+e.speeds[s][a];
i.length+d.length+p.length<1024?d=d+p+";":(d.length&&r.push(i+d.substring(0,d.length-1)),
d=p+";");
}
s==e.speeds.length-1&&r.push(i+d.substring(0,d.length-1));
}
for(var s=0;s<r.length;s++)(new Image).src=r[s];
}
function s(e){
"complete"==document.readyState?e():f.push(e);
}
function a(){
for(var e=0;e<f.length;e++)f[e]();
f=[];
}
var p,u={},c="https://badjs.weixinbridge.com/frontend/reportspeed?",f=[];
return window.addEventListener?window.addEventListener("load",a,!1):window.attachEvent&&window.attachEvent("onload",a),
{
saveSpeeds:e,
send:n,
setFirstViewTime:t,
setBasicTime:o
};
});define("pages/version4video.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_wap/utils/device.js","new_video/ctl.js","biz_wap/utils/mmversion.js"],function(e){
"use strict";
function i(e,i){
i=i||"",i=["uin:"+d.user_uin,"resp:"+i].join("|"),(new Image).src="/mp/jsreport?key="+e+"&content="+i+"&r="+Math.random();
}
function n(){
return window.__second_open__?!0:-1!=p.indexOf("&_newvideoplayer=0")?!1:-1!=p.indexOf("&_newvideoplayer=1")?!0:1!=d.is_login?!1:d.use_tx_video_player?!1:c.canSupportVideo&&m.inWechat?m.is_ios||m.is_android?!0:!1:(d._hasReportCanSupportVideo||c.canSupportVideo||!m.inWechat||(d._hasReportCanSupportVideo=!0,
i(44)),!1);
}
function s(){
{
var e=p,i=window.location.href;
d.sn||"";
}
return-1==e.indexOf("&_videoad=0")||"5a2492d450d45369cd66e9af8ee97dbd"!=d.sn&&"f62e1cb98630008303667f77c17c43d7"!=d.sn&&"30c609ee11a3a74a056e863f0e20cae2"!=d.sn?x.isInMiniProgram?!1:-1!=e.indexOf("&_videoad=1")?!0:-1===e.indexOf("mp.weixin.qq.com/s")&&-1===e.indexOf("mp.weixin.qq.com/mp/appmsg/show")&&-1===e.indexOf("mp.weixin.qq.com/mp/authreadtemplate")?!1:"54"==d.appmsg_type?!1:-1!=i.indexOf("&xd=1")?!1:d.__appmsgCgiData&&d.__appmsgCgiData.can_use_page&&(m.is_ios||m.is_android)?!0:u.showAd()?!0:!1:!1;
}
function o(){
var e=p,i=t(),n=(new Date).getHours(),s=!1;
return d.user_uin?-1!=e.indexOf("&_proxy=0")?!1:-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show")?!1:(-1!=e.indexOf("&_proxy=1")&&(s=!0),
n>=9&&14>=n?!1:(m.inWechat&&m.is_android&&m.is_x5&&m.wechatVer>="6.2.2"&&(s=!0),
m.inWechat&&m.is_android&&m.is_xweb&&m.xweb_version>=16&&(s=!0),m.inWechat&&m.is_ios&&(-1!=f.indexOf("MicroMessenger/6.2.4")||m.wechatVer>="6.2.4")&&(s=!0),
s&&i&&i.isUseProxy?!0:!1)):!1;
}
function r(){
return y.networkType;
}
function t(){
var e={
isUseProxy:0,
isUsePreload:0,
experSet:0
},i=!1;
if(parseInt(window.user_uin)==parseInt(2930301160)?(e.experSet=1,i=!0):parseInt(window.user_uin)==parseInt(3190019565)?(e.experSet=2,
i=!0):parseInt(window.user_uin)==parseInt(3193024205)||parseInt(window.user_uin)==parseInt(2092846410)?(e.experSet=3,
i=!0):(parseInt(window.user_uin)==parseInt(3194023964)||parseInt(window.user_uin)==parseInt(3193170635)||2756892560==parseInt(window.user_uin)||3193060470==parseInt(window.user_uin)||3495278585==parseInt(window.user_uin)||parseInt(window.user_uin)==parseInt(3190047886))&&(e.experSet=4,
i=!0),i||(e.experSet=window.user_uin&&window.user_uin%100<=4?window.user_uin%4+1:1),
e)switch(e.experSet){
case 1:
e.isUseProxy=0,e.isUsePreload=0;
break;

case 2:
e.isUseProxy=0,e.isUsePreload=1;
break;

case 3:
e.isUseProxy=1,e.isUsePreload=0;
break;

case 4:
e.isUseProxy=1,e.isUsePreload=1;
break;

default:
e=!1;
}
return 10>P&&a(l,!1),l||(e.isUseProxy=0),h||(e.isUsePreload=0),0==e.isUseProxy&&0==e.isUsePreload?e.experSet=1:0==e.isUseProxy&&1==e.isUsePreload?e.experSet=2:1==e.isUseProxy&&0==e.isUsePreload?e.experSet=3:1==e.isUseProxy&&1==e.isUsePreload&&(e.experSet=4),
g===!1&&(console.info("[视频代理实验]",e),g=!0),e;
}
function a(e,i){
l=e,h=i;
}
var d,p,w=e("biz_common/dom/event.js"),_=e("biz_wap/jsapi/core.js"),c=e("biz_wap/utils/device.js"),u=e("new_video/ctl.js"),x=e("biz_wap/utils/mmversion.js"),f=window.navigator.userAgent,y={
networkType:""
},m={},l=!0,h=!0,g=!1,v=function(){
var e=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);
return e&&e[1]&&parseInt(e[1].split("_")[0],10);
},P=v();
if(parent==window)d=window,p=window.location.href;else try{
p=parent.window.location.href,d=parent.window;
}catch(b){
p=window.location.href,d=window;
}
return function(e){
var i=c.os;
m.is_ios=/(iPhone|iPad|iPod|iOS)/i.test(e),m.is_android=!!i.android,m.is_wp=!!i.phone,
m.is_pc=!(i.phone||!i.Mac&&!i.windows),m.inWechat=/MicroMessenger/.test(e),m.inWindowWechat=/WindowsWechat/i.test(e),
m.inMacWechat=/wechat.*mac os/i.test(e),m.is_android_phone=m.is_android&&/Mobile/i.test(e),
m.is_android_tablet=m.is_android&&!/Mobile/i.test(e),m.ipad=/iPad/i.test(e),m.iphone=!m.ipad&&/(iphone)\sos\s([\d_]+)/i.test(e),
m.is_x5=/TBS\//.test(e)&&/MQQBrowser/i.test(e);
var n,s=/XWEB\/([\d\.]+)/i,o=e.match(s);
o&&o[1]&&(n=parseInt(o[1])),m.is_xweb=!!o,m.xweb_version=n;
var r=e.match(/MicroMessenger\/((\d+)(\.\d+)*)/);
m.wechatVer=r&&r[1]||0,w.on(window,"load",function(){
if(""==y.networkType&&m.inWechat){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
},i=["2g","3g","4g","2g/3g"];
_.invoke("getNetworkType",{},function(n){
y.networkType=e[n.err_msg]||"fail",window.networkType=y.networkType,("network_type:edge"==n.err_msg||"network_type:wwan"==n.err_msg)&&(n.detailtype&&i.indexOf(n.detailtype)>-1||n.subtype&&i.indexOf(n.subtype)>-1)&&(window.networkType=n.detailtype||n.subtype),
window.simType=n.simtype;
});
}
},!1);
}(window.navigator.userAgent),"undefined"==typeof d._hasReportCanSupportVideo&&(d._hasReportCanSupportVideo=!1),
{
device:m,
isShowMpVideo:n,
isUseProxy:o,
isUseAd:s,
getNetworkType:r,
proxyPreloadExper:t,
modifyExper:a
};
});define("a/a_config.js",[],function(){
"use strict";
var _={
ANDROID_APP_PRODUCT_TYPE:12,
IOS_APP_PRODUCT_TYPE:19,
ADD_CONTACT_PRODUCT_TYPE:23,
MINI_GAME_PRODUCT_TYPE:46,
CARD_PRODUCT_TYPE:36,
SHOP_PRODUCT_TYPE:30,
WECHATCARD_PRODUCT_TYPE:47,
BRAND_WECHAT_PRODUCT_TYPE:29,
BRAND_GDT_PRODUCT_TYPE:31
},e={
POS_BOTTOM:0,
POS_MID:4,
POS_SPONSOR:3,
POS_AD_BEFORE_VIDEO:7,
POS_AD_AFTER_VIDEO:9
},a={
AD_DEST_TYPE:0,
OUTER_DEST_TYPE:1,
APPDETAIL_DEST_TYPE:2,
BIZ_DEST_TYPE:3,
APPINFO_PAGE_DEST_TYPE:4,
WECHAT_SHOP_DEST_TYPE:5,
WECHAT_APPLET_DEST_TYPE:6,
LEAF_DEST_TYPE:7,
CANVAS_AD_DEST_TYPE:9
},t=function(){
var _=18e4;
return window.user_uin&&!isNaN(parseInt(window.user_uin,10))&&(parseInt(window.user_uin,10)%10===2||parseInt(window.user_uin,10)%10===3)&&(_=3e4),
console.info("[广告时间缓存实验]",_),_;
}(),o=["openUrlWithExtraWebview","openADCanvas","addContact","profile","getInstallState","installDownloadTask","addDownloadTask","pauseDownloadTask","resumeDownloadTask","queryDownloadTask","launchApplication","writeCommData","adDataReport","downloadAppInternal","wxdownload:progress_change","menu:share:appmessage","menu:share:timeline","menu:share:weibo","menu:share:facebook","menu:general:share","launch3rdApp","addDownloadTaskStraight","sendAppMessage","shareTimeline","getNetworkType","jumpToBizProfile","shareWeibo","shareFB","imagePreview","getBackgroundAudioState","openWeApp","preloadMiniProgramContacts","preloadMiniProgramEnv","calRqt","openCardDetail","batchAddCard","handleMPPageAction","makePhoneCall","getOAID","saveWaid","batchPreloadMiniProgram","onScreenShot","handleAdAction","activity:state_change","getAdIdInfo","onWebPageUrlExposed"],p=["/mp/advertisement_report","/mp/ad_report","/mp/ad_video_report","/mp/jsmonitor","/mp/ad_complaint","/mp/jsreport","/tp/datacenter/report","/mp/getappmsgad","/mp/ad_biz_info"],A=[/(https?:)?\/\/mp\.weixin\.qq\.com\/mp\/advertisement_report/,/(https?:)?\/\/mp\.weixin\.qq\.com\/mp\/ad_report/,/(https?:)?\/\/mp\.weixin\.qq\.com\/mp\/ad_video_report/,/(https?:)?\/\/mp\.weixin\.qq\.com\/mp\/jsmonitor/,/(https?:)?\/\/mp\.weixin\.qq\.com\/mp\/ad_complaint/,/(https?:)?\/\/mp\.weixin\.qq\.com\/mp\/jsreport/,/(https?:)?\/\/mp\.weixin\.qq\.com\/tp\/datacenter\/report/,/(https?:)?\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad/,/(https?:)?\/\/mp\.weixin\.qq\.com\/mp\/ad_biz_info/,/(https?:)?\/\/mp\.weixin\.qq\.com\/tp\/goods_info/,/(https?:)?\/\/mp\.weixin\.qq\.com\/tp\/app_mobile/,/(https?:)?\/\/mp\.weixin\.qq\.com\/tp\/datareport\/report/,/(https?:)?\/\/mp\.weixin\.qq\.com\/promotion\/wxalandpage\/getcanvasinfo/];
return{
AD_TYPE:_,
AD_POS:e,
AD_CACHE_TIME:t,
AD_DEST_TYPE:a,
AD_FRAME_DOMAIN:"https://wxa.wxs.qq.com",
INVALID_METHOD_NAME_MSG_PREFIX:"Invalid methodName",
INVALID_METHOD_TYPE_MSG_PREFIX:"Invalid methodType",
INVALID_ARGS_MSG_PREFIX:"Invalid args",
INVALID_REQ_PATH_MSG_PREFIX:"Invalid request path",
AD_IFRAME_HIDE_CLASS:"iframe_ad_dn",
AD_JSAPI_WHITE_LIST:o,
AD_REQ_PATH_WHITE_LIST:p,
AD_WEB_COMPT_REQ_PATH_WHITE_LIST:A,
ORIGIN_VIDEO_VID_PREFIX:"wxv",
AD_VIDEO_END_ACTION:"adVideoEnd",
AD_VIDEO_PLAY_ACTION:"onVideoPlayV2",
AD_PLAY_VIDEO_ACTION:"playVideoV2",
GET_APPMSGAD_READY_STATUS_ACTION:"getAppmsgadReadyStatus",
APPMSGAD_READY_ACTION:"appmsgadReady",
HAS_AD_DATA_QUERY_KEY:"has_ad_data",
GET_AD_DATA_AFTER_VIDEO_ACTION_NAME:"getAdDataAfterVideo",
SET_PAGE_DATA_ACTION_NAME:"setPageDataV2",
SEND_AD_VID_ACTION:"sendAdVid",
GET_AD_VID_ACTION:"getAdVid"
};
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
define("a/a_utils.js",["biz_wap/jsapi/core.js","biz_wap/utils/ajax.js","biz_wap/utils/mmversion.js","biz_common/utils/report.js","biz_common/dom/class.js","biz_common/utils/url/parse.js","biz_wap/utils/openUrl.js","biz_wap/utils/wapsdk.js","common/utils.js","a/a_config.js"],function(e){
"use strict";
function t(e,t){
w("/mp/ad_report?action=follow&type="+e+t);
}
function n(e,t){
h.jsmonitor({
id:115849,
key:e,
value:t
});
}
function r(e){
h.jsmonitor({
id:28307,
key:e
});
}
function i(e){
h.jsmonitor({
id:128729,
key:e
});
}
function o(e){
var t=j.AD_WEB_COMPT_REQ_PATH_WHITE_LIST.some(function(t){
return t.test(e);
});
return t;
}
function a(e){
if(!e)return"";
var t=document.createElement("a");
return t.href=e,t.hostname;
}
function s(e){
for(var t=[],n=0;n<e.length;++n){
var r=e[n],i="undefined"==typeof r?"undefined":_typeof(r);
r="string"===i?r.htmlDecode():r,"object"===i&&(r="[object Array]"===Object.prototype.toString.call(r)?s(r):p(r)),
t.push(r);
}
return t;
}
function p(e){
var t={};
for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){
var r=e[n],i="undefined"==typeof r?"undefined":_typeof(r);
r="string"===i?r.htmlDecode():r,"object"===i&&(r="[object Array]"===Object.prototype.toString.call(r)?s(r):p(r)),
t[n]=r;
}
return t;
}
function c(e,t){
var n=0;
g.isIOS?n=1:g.isAndroid&&(n=2);
var r={
creative_load_fail:[{
ts:parseInt(+new Date/1e3,10),
aid:parseInt(e.info.aid,10),
img_url:encodeURIComponent(t),
network_type:window.networkType,
errmsg:"",
os_type:n,
client_version:parseInt(window.clientversion,10),
traceid:e.info.traceid
}]
};
r=JSON.stringify(r),l({
url:"/mp/advertisement_report?action=extra_report&extra_data="+r+"&__biz="+window.biz,
timeout:2e3
});
}
function d(e,t){
var n={
ad_sign_data:t.adSignData,
ad_sign_k1:t.adSignK1,
ad_sign_k2:t.adSignK2,
ad_sign_md5:t.signMd5
};
return v.join(e,n,!0);
}
function u(e,t,n,r){
try{
e.postMessage(JSON.stringify({
action:t,
value:n
}),r||"*");
}catch(i){
console.log("postMessage error",i);
}
}
function _(e,t){
if(!e||!e.flow_exp_info)return"";
var n=e.flow_exp_info||"";
try{
n=JSON.parse(n.replace(/&quot;/g,'"'));
}catch(r){
return"";
}
if(!n.length)return"";
for(var i=0;i<n.length;i++)if(n[i].exp_para&&n[i].exp_para.length)for(var o=0;o<n[i].exp_para.length;o++)if(n[i].exp_para[o].name===t)return n[i].exp_para[o].value;
return null;
}
function f(e){
if(!e||!e.crt_exp_info)return{};
var t=e.crt_exp_info.htmlDecode(),n={};
try{
n=JSON.parse(t);
}catch(r){
n={},console.error("getCrtExpInfo fail: ",r);
}
return n;
}
var m=e("biz_wap/jsapi/core.js"),l=e("biz_wap/utils/ajax.js"),g=e("biz_wap/utils/mmversion.js"),w=e("biz_common/utils/report.js"),y=e("biz_common/dom/class.js"),v=e("biz_common/utils/url/parse.js"),b=e("biz_wap/utils/openUrl.js").openUrlWithExtraWebview,h=e("biz_wap/utils/wapsdk.js"),x=e("common/utils.js"),j=e("a/a_config.js"),z="pos_",S=[" ","-","(",":",'"',"'","：","（","—","－","“","‘"],O=["wximg.qq.com","wximg.gtimg.com","pgdt.gtimg.cn","mmsns.qpic.cn","mmbiz.qpic.cn","vweixinthumb.tc.qq.com","pp.myapp.com","wx.qlog.cn","mp.weixin.qq.com"],k=[350064395,3194181833,3191183081,3191008240,459315e3,2547206501,17516575,3194183798,3193008987,3191008237,3190008366,1314021127,3190008373,3192140177,3193183025,3191138746,3192008231,3191138747,3191138743,3193183023,3193183029,3192138635,3190138969,3192138631,3194182870,3192138630,3194182869,3192138629,3192138628,3193183024,3191138744,3192138627,3194182868,3193183031,3192138634,3190138972,3191138745,3192138633,3193183030,3190138971,3193183028,3193183027,3193183026,3190138970,3192138632,3192184240,3194248804,388382775,3193008989,3193008986,3194241008,3193240873,3193240874,3190179574],I={
report:t,
report115849:n,
report128729:i,
checkRequestUrlAllowed:o,
saveCopy:p,
joinSignParam:d,
postMessage:u,
getCrtExpInfo:f,
getExpParaVal:_,
checkShowCpc:function(e,t,n,r){
if(t)return!0;
if(!e)return!1;
var i=x.getInnerHeight(),o=i/2,a=e.offsetTop,s=n.offsetHeight,p=void 0;
if(o>a?p=1:i>a&&(p=2),p&&r){
var c=JSON.stringify({
biz_middle_not_exp:[{
scene:p,
traceid:r.traceid,
aid:+r.aid,
appmsg_id:+window.appmsgid,
item_idx:+window.idx
}]
});
l({
url:"/mp/advertisement_report?action=extra_report&extra_data="+c+"&__biz="+window.biz,
timeout:2e3
});
}
return o>a||o>s-a?!1:!0;
},
openWebAppStore:function(e,t){
return x.getIosMainVersion()>=12?void m.invoke("launchApplication",{
schemeUrl:e
},function(){}):void m.invoke("downloadAppInternal",{
appUrl:e
},function(n){
n.err_msg&&-1!==n.err_msg.indexOf("ok")||b("/mp/ad_redirect?url="+encodeURIComponent(e)+"&ticket="+t);
});
},
adOptReport:function(e,t,n,r){
var i=v.join("/mp/ad_complaint",{
action:"report",
type:e,
pos_type:t,
trace_id:n,
aid:r,
__biz:window.biz,
r:Math.random()
},!0);
w(i);
},
checkAdImg:function(e){
if(e){
var t=e.image_url||"",n=a(t);
n&&-1===O.indexOf(n)&&r(58);
}
},
formName:function(e){
for(var t=-1,n=0,r=S.length;r>n;++n){
var i=S[n],o=e.indexOf(i);
-1!==o&&(-1===t||t>o)&&(t=o);
}
return-1!==t&&(e=e.substring(0,t)),e;
},
formSize:function(e){
return"number"!=typeof e?e:(e>=1024?(e/=1024,e=e>=1024?(e/1024).toFixed(2)+"MB":e.toFixed(2)+"KB"):e=e.toFixed(2)+"B",
e);
},
isItunesLink:function(e){
return/^https?:\/\/(itunes|apps)\.apple\.com\//.test(e);
},
extend:function(e,t){
for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);
return e;
},
getPosKeyDesc:function(e,t){
var n=t?e+"_"+t:e;
return z+n;
},
openCanvasAd:function(e){
m.invoke("openADCanvas",{
canvasId:e.canvasId,
preLoad:0,
noStore:0,
extraData:JSON.stringify({
pos_type:e.pos_type
}),
adInfoXml:e.adInfoXml
},function(n){
0!==Number(n.ret)?(b(e.url),t(135,e.report_param)):t(134,e.report_param);
});
},
setBackgroundClass:function(){
window._has_comment||0!==window.adDatas.realNum||window._share_redirect_url||window.is_temp_url?y.removeClass(document.body,"rich_media_empty_extra"):y.addClass(document.body,"rich_media_empty_extra");
},
lazyLoadAdImg:function(e){
for(var t=document.getElementsByClassName("js_alazy_img"),n=function(n){
var i=t[n];
i.onload=function(){
r(54),i.src.indexOf("retry")>-1&&r(69);
},i.onerror=function(){
-1===i.src.indexOf("retry")?i.src=v.addParam(i.src,"retry",1):!function(){
r(98);
var t="other";
g.isIOS?t="iphone":g.isAndroid&&(t="android"),setTimeout(function(){
var n=window.networkType||"unknow",r=v.join("/tp/datacenter/report",{
cmd:"report",
id:900023,
uin:777,
os:t,
aid:e.aid,
image_url:encodeURIComponent(i.src),
type:e.type,
network:n
},!0);
l({
url:r,
async:!0
});
},500),c(e,i.src);
}(),r(57);
},i.src=i.dataset.src;
},i=0;i<t.length;i++)n(i);
},
reportUrlLength:function(e,t,r,i,o,a,s){
var p=d(s,{
adSignData:e,
adSignK1:t,
adSignK2:r,
signMd5:i,
viewidKeyObj:o
});
if(p.length>=4e3){
n(13);
var c=JSON.stringify({
biz_log_report:[{
pos_type:+a.pos_type,
traceid:a.tid,
aid:+a.aid,
log_type:1,
ext_info:"[url length:"+p.length+"]"+s.substring(0,2e3)
}]
});
l({
url:"/mp/advertisement_report?action=extra_report",
timeout:2e3,
data:{
extra_data:c,
__biz:window.biz
},
type:"post"
});
}
},
isVideoSharePageOnlyAd:function(){
return"5"===window.item_show_type&&"ad"===v.getQuery("render_type");
},
listenMessage:function(e,t,n){
arguments.length<3&&(n=t,t=null),e.addEventListener("message",function(e){
var r=void 0;
if(!t||e.origin===t){
if("object"!==_typeof(e.data))try{
r=JSON.parse(e.data);
}catch(i){
return;
}else r=e.data;
"function"==typeof n&&n(e,r);
}
});
},
isSample:function(e){
return k.indexOf(window.user_uin)>-1?!0:window.user_uin&&window.user_uin/100%1e3<=10*e?!0:!1;
},
broadcastFrame:function(e,t,n,r){
e=e||[];
for(var i=0;i<e.length;i++){
var o=e[i].src||e[i].getAttribute("data-realsrc");
(!r||r&&o.indexOf(r)>-1)&&u(e[i].contentWindow,t,n);
}
}
};
return I;
});define("a/a.js",["biz_wap/utils/mmversion.js","a/a_sign.js","biz_wap/utils/openUrl.js","biz_common/utils/get_para_list.js","biz_wap/utils/show_time.js","biz_common/utils/url/parse.js","biz_common/dom/event.js","a/a_report.js","biz_wap/utils/ajax.js","biz_wap/utils/position.js","a/card.js","a/wxopen_card.js","a/mpshop.js","biz_wap/jsapi/core.js","biz_common/tmpl.js","a/a_tpl.html.js","a/sponsor_a_tpl.html.js","a/cpc_a_tpl.html.js","biz_common/dom/class.js","biz_wap/utils/storage.js","appmsg/log.js","a/tpl/crt_tpl_manager.js","a/a_config.js","a/video.js","a/a_utils.js","common/utils.js","biz_common/dom/offset.js","a/appdialog_confirm.js","biz_common/utils/wxgspeedsdk.js","biz_wap/utils/jsmonitor_report.js","a/web_compt_ad.js","video/video_tail_utils.js","appmsg/cdn_img_lib.js","a/tpl/cpc_tpl.html.js","a/sponsor.js","a/app_card.js","a/profile.js","a/android.js","a/ios.js"],function(require,exports,module,alert){
"use strict";
function processAdEleByPos(e){
var t;
e===AD_POS.POS_MID&&(t=document.getElementsByTagName("mpcpc")),adElCountMapByPos[e]=t.length;
for(var a=0;a<t.length;a++)el_gdt_areas[utils.getPosKeyDesc(e,a)]=t[a],ping_cpm_apurl[utils.getPosKeyDesc(e,a)]={};
}
function initAdData(){
processAdEleByPos(AD_POS.POS_MID);
}
function checkNeedAds(){
var is_need_ad=1,_adInfo=null,screen_num=0;
if(!globalAdDebug){
var inwindowwx=-1!=navigator.userAgent.indexOf("WindowsWechat");
if(!document.getElementsByClassName||-1==navigator.userAgent.indexOf("MicroMessenger")||inwindowwx||mmversion.isInMiniProgram){
if(is_need_ad=0,js_sponsor_ad_area.style.display="none",js_bottom_ad_area.style.display="none",
adElCountMapByPos[AD_POS.POS_MID])for(var i=0;i<adElCountMapByPos[AD_POS.POS_MID];i++)el_gdt_areas[utils.getPosKeyDesc(AD_POS.POS_MID,i)].style.display="none";
}else if(window.localStorage&&-1===location.href.indexOf("mock"))try{
var _ad=adLS.get(lsKey);
_adInfo=_ad.info;
try{
_adInfo=eval("("+_adInfo+")");
}catch(e){
_adInfo=null;
}
var duration=Date.now()-_ad.time;
if(6e4>=duration?commonUtils.report120081(12):12e4>=duration?commonUtils.report120081(13):duration<AD_CONFIG.AD_CACHE_TIME&&commonUtils.report120081(14),
_adInfo&&duration<AD_CONFIG.AD_CACHE_TIME&&1*_adInfo.advertisement_num>0){
if(is_need_ad=0,window.user_uin&&!isNaN(parseInt(window.user_uin,10))&&parseInt(window.user_uin,10)%10!==2&&parseInt(window.user_uin,10)%10!==3){
var bizLogReport=[],sendData;
if(_adInfo.advertisement_info)for(var i in _adInfo.advertisement_info)bizLogReport.push({
pos_type:+_adInfo.advertisement_info[i].pos_type,
traceid:_adInfo.advertisement_info[i].traceid,
aid:+_adInfo.advertisement_info[i].aid,
log_type:9,
ext_info:JSON.stringify({
duplicate_time:duration
})
});
sendData=JSON.stringify({
biz_log_report:bizLogReport
}),ajax({
url:"/mp/advertisement_report?action=extra_report&extra_data="+sendData+"&__biz="+biz,
timeout:2e3
}),console.log("[广告命中缓存上报]",sendData);
}
}else adLS.remove(lsKey);
log("[Ad] is_need_ad: "+is_need_ad+" , adData:"+JSON.stringify(_ad));
}catch(e){
is_need_ad=1,_adInfo=null;
}
}
return{
is_need_ad:is_need_ad,
both_ad:0,
_adInfo:_adInfo
};
}
function insertAutoAdElement(e,t,a,i){
if(e.pos_type===AD_POS.POS_MID&&!adElCountMapByPos[AD_POS.POS_MID]){
if(!paragraphList){
var o=Date.now();
paragraphList=getParaList(contentWrp,{
getNestedStructure:e.position_index>=getParaList.paragraphStartIdx
}),Math.random()<.1&&(wxgSpeedSdk.saveSpeeds({
uin:window.user_uin,
pid:34,
speeds:[{
sid:37,
time:Date.now()-o
}]
}),wxgSpeedSdk.send());
}
var n=void 0!==e.position_index;
e.position_index=e.position_index>=getParaList.paragraphStartIdx?e.position_index-getParaList.paragraphStartIdx:e.position_index,
n=n&&e.position_index>=0&&e.position_index<paragraphList.length;
var _=i?(a+1)/(i+1)*paragraphList.length:paragraphList.length/2,p=n?e.position_index:Math.floor(_)-1;
p=0>p?0:p;
var r=paragraphList[p],s=r.parentNode,d=document.createElement("p");
s.appendChild(d);
var l=d.offsetWidth;
if(s.removeChild(d),l<.7*contentWrp.offsetWidth){
if(void 0!==e.position_index){
var c=JSON.stringify({
url:encodeURIComponent(location.href),
dataType:"mid_ad_width_url"
});
(new Image).src="/mp/jsmonitor?idkey=120081_23_1&lc=1&log0="+c+"&r="+Math.random();
}else commonUtils.report120081(15);
return;
}
var m=document.createElement("mpcpc");
el_gdt_areas[utils.getPosKeyDesc(AD_POS.POS_MID)]=m,commonUtils.insertAfter(m,r),
t&&utils.report115849(2);
}
}
function separateAdData(){
var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=0,a=0,i=0,o=[],n=[],_=[],p=commonUtils.getWebComptStatus();
for(var r in e){
var s=e[r],d=utils.getCrtExpInfo(s),l=110==d.exp_type,c=mmversion.isAndroid&&mmversion.gtVersion("7.0.15",!0),m=s.pos_type===AD_POS.POS_MID&&"1"===utils.getExpParaVal(s,100280),u=!!urlParser.getQuery("forcewebcompt"),f=s.pos_type===AD_POS.POS_MID,g=s.pos_type===AD_POS.POS_AD_BEFORE_VIDEO,A=s.pos_type===AD_POS.POS_BOTTOM&&"1"===utils.getExpParaVal(s,100316),y=s.pos_type===AD_POS.POS_BOTTOM;
f&&t++,m&&a++,y&&i++,c&&(p&&"error"===p.status&&utils.report128729(64),p&&"loading"===p.status&&utils.report128729(65)),
p&&"ready"===p.status&&c&&(m||A||l||u)?_.push(s):f||g&&0===s.is_mp_video||y||s.pos_type===AD_POS.POS_AD_AFTER_VIDEO||g&&1===s.is_mp_video||s.pos_type===AD_POS.POS_SPONSOR?n.push(s):o.push(s);
}
if(i>1){
for(var D=[],v={
aid:Date.now(),
pos_type:AD_POS.POS_BOTTOM
},r=n.length-1;r>=0;r--)n[r].pos_type===AD_POS.POS_BOTTOM&&D.push(n.splice(r,1)[0]);
v.children=D.reverse(),v.flow_exp_info=v.children[0].flow_exp_info,n.push(v);
}
return{
oldAdInfos:o,
newAdInfos:n,
webComponentAdInfos:_,
midAdDataCount:t,
webComptMidAdDataCount:a
};
}
function createAdFrame(e,t){
if(e){
var a=document.createElement("iframe"),i=utils.getExpParaVal(t,94574),o=urlParser.getQuery("forceframeversion");
i=o||i;
var n=i?i+"/":"",_=AD_CONFIG.AD_FRAME_DOMAIN+"/tmpl/"+n+"base_tmpl.html";
a.src=_,a.className="iframe_ad_container",a.scrolling="no",a.createIframeTime=Date.now(),
e.appendChild(a),mmversion.isIOS&&(a.style.width="1px",a.style.minWidth="100%");
var p=new Image;
p.onerror=function(){
utils.report115849(86);
},p.src="https://wxa.wxs.qq.com/images/icon/icon_video_go.png";
try{
localStorage.setItem("__WXLS_ad_iframe_url",_);
}catch(r){}
return a;
}
}
function postMessageToAdFrame(e,t,a){
utils.postMessage(e,t,a,AD_CONFIG.AD_FRAME_DOMAIN);
}
function invalidMsg(e,t){
return e+" | "+t;
}
function isVideoFrameHasVid(e,t){
var a=e.getAttribute("data-src"),i=e.src||a;
return/^http(s)*\:\/\/v\.qq\.com\/iframe\/(preview|player)\.html\?/.test(a)||/^http(s)*\:\/\/mp\.weixin\.qq\.com\/mp\/readtemplate\?t=pages\/video_player_tmpl/.test(a)?i&&i.indexOf("vid="+t)>-1:!1;
}
function proxyCallback(e,t,a){
postMessageToAdFrame(e,"proxyCallbackV2",{
proxyId:t.proxyId,
aid:t.aid,
proxyData:a
});
}
function androidAppDialogConfirm(e,t){
var a=t.proxyData||{};
appDialogConfirm({
app_name:a.args.app_name,
app_img_url:a.args.icon_url,
onOk:function(){
proxyCallback(e,t,{
err_msg:"appDialogConfirm:yes"
});
},
onCancel:function(){
proxyCallback(e,t,{
err_msg:"appDialogConfirm:cancel"
});
}
});
}
function AdFrame(){
this.aInfoMap={},this.iframes=document.getElementsByTagName("iframe");
}
function getClickEventPageOffset(e){
var t=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
return{
x:e.pageX?e.pageX:e.clientX,
y:e.pageY?e.pageY:e.clientY+t
};
}
function processAdAvatar(e){
var t=e.product_type;
return(t===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||t===AD_TYPE.IOS_APP_PRODUCT_TYPE)&&e.app_info&&e.app_info.icon_url?(e.avatar=e.app_info.icon_url,
void(e.avatarTitle=e.app_info.appname)):t===AD_TYPE.MINI_GAME_PRODUCT_TYPE&&e.game_info&&e.game_info.head_img?(e.avatar=e.game_info.head_img,
void(e.avatarTitle=e.game_info.nick_name)):void((e.pos_type===AD_POS.POS_MID&&(t===AD_TYPE.ADD_CONTACT_PRODUCT_TYPE||t===AD_TYPE.BRAND_GDT_PRODUCT_TYPE||t===AD_TYPE.BRAND_WECHAT_PRODUCT_TYPE)||e.pos_type!==AD_POS.POS_MID)&&e.biz_info&&e.biz_info.head_img&&(e.avatar=e.biz_info.head_img,
e.avatarTitle=e.biz_info.nick_name));
}
function handleVideoSharePage(e){
e=e||document.body.offsetHeight,JSAPI.invoke("configMpAdAttrs",{
viewHeight:e
},function(t){
console.log("debug for configMpAdAttrs height: ",e,", response:",t);
});
}
function setBottomSize(e){
if(e.material_height&&e.material_width){
var t=js_bottom_ad_area.getElementsByClassName("js_mpad_smallbanner_info_banner"),a=js_bottom_ad_area.getElementsByClassName("js_mpad_banner_img"),i=e.material_height/e.material_width;
t.length&&(t[0].style.minHeight=t[0].offsetWidth*i+"px"),a.length&&(a[0].style.minHeight=a[0].offsetWidth*i+"px");
}
}
function afterGetAdData(e,t){
function a(e){
var t=e;
if(t.dest_type==AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE&&(t.is_wx_app=!0),
e.product_type===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||e.product_type===AD_TYPE.IOS_APP_PRODUCT_TYPE){
var a=t.app_info.app_size||0,i=t.app_info.app_name||t.app_info.appname||"",o=t.app_info.apk_url||t.app_info.pkgurl||"",n=t.app_info.file_md5||t.app_info.pkgmd5||t.app_info.app_md5||"",_=t.app_info.apk_name||t.app_info.pkg_name||"";
a=utils.formSize(a),i=utils.formName(i),t.app_info.app_size=a,t.app_info.app_name=i,
t.app_info.apk_name=_,t.app_info.appname=t.app_info.app_name,t.app_info.app_rating=t.app_info.app_rating||0,
t.app_info.app_id=t.app_info.app_id,t.app_info.icon_url=t.app_info.icon_url,t.app_info.channel_id=t.app_info.channel_id,
t.app_info.md5sum=t.app_info.app_md5,t.app_info.rl=t.rl,t.app_info.pkgname=_,t.app_info.url_scheme=t.app_info.url_scheme,
t.app_info.androiddownurl=o,t.app_info.versioncode=t.app_info.version_code,t.app_info.appinfo_url=t.app_info.appinfo_url,
t.app_info.traceid=t.traceid,t.app_info.pt=t.pt,t.app_info.url=t.url,t.app_info.ticket=t.ticket,
t.app_info.type=t.type,t.app_info.adid=t.aid,t.app_info.file_md5=n;
var p=utils.extend({
appname:t.app_info.app_name,
app_rating:t.app_info.app_rating||0,
app_id:t.app_info.app_id,
icon_url:t.app_info.icon_url,
channel_id:t.app_info.channel_id,
md5sum:t.app_info.app_md5,
rl:t.rl,
pkgname:_,
url_scheme:t.app_info.url_scheme,
androiddownurl:o,
versioncode:t.app_info.version_code,
appinfo_url:t.app_info.appinfo_url,
traceid:t.traceid,
pt:t.pt,
url:t.url,
ticket:t.ticket,
type:t.type,
adid:t.aid,
source:source||"",
is_appmsg:!0,
file_md5:n
},t);
return p;
}
if(e.product_type==AD_TYPE.ADD_CONTACT_PRODUCT_TYPE){
for(var r=t.exp_info.exp_value||[],s=!1,d=0,l=0;l<r.length;++l){
var c=r[l]||{};
if(1==c.exp_type&&(d=c.comm_attention_num,s=d>0),2==c.exp_type){
s=!1,d=0;
break;
}
}
t.biz_info.show_comm_attention_num=s,t.biz_info.comm_attention_num=d;
var p=utils.extend({
usename:t.biz_info.user_name,
pt:t.pt,
url:t.url,
traceid:t.traceid,
adid:t.aid,
ticket:t.ticket,
is_appmsg:!0
},t);
return p;
}
return e;
}
function i(e){
var t,a=e;
if(e.product_type===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||e.product_type===AD_TYPE.IOS_APP_PRODUCT_TYPE){
var i=a.app_info.app_size||0,o=a.app_info.app_name||a.app_info.appname||"",n=a.app_info.apk_url||a.app_info.pkgurl||"",_=a.app_info.file_md5||a.app_info.pkgmd5||a.app_info.app_md5||"",p=a.app_info.apk_name||a.app_info.pkg_name||"",r=a.app_info.category,s=["万","百万","亿"],d=a.app_info.down_count||0;
if(d>=1e4){
d/=1e4;
for(var l=0;d>=10&&2>l;)d/=100,l++;
d=d.toFixed(1)+s[l]+"次";
}else d=d.toFixed(1)+"次";
return r=r?r[0]||"其他":"其他",i=utils.formSize(i),o=utils.formName(o),a.app_info._down_count=d,
a.app_info._category=r,a.app_info.app_size=i,a.app_info.app_name=o,a.app_info.apk_name=p,
a.app_info.appname=a.app_info.app_name,a.app_info.app_rating=a.app_info.app_rating||0,
a.app_info.app_id=a.app_info.app_id,a.app_info.icon_url=a.app_info.icon_url,a.app_info.channel_id=a.app_info.channel_id,
a.app_info.md5sum=a.app_info.app_md5,a.app_info.rl=a.rl,a.app_info.pkgname=p,a.app_info.url_scheme=a.app_info.url_scheme,
a.app_info.androiddownurl=n,a.app_info.versioncode=a.app_info.version_code,a.app_info.appinfo_url=a.app_info.appinfo_url,
a.app_info.traceid=a.traceid,a.app_info.pt=a.pt,a.app_info.url=a.url,a.app_info.ticket=a.ticket,
a.app_info.type=a.type,a.app_info.adid=a.aid,a.app_info.file_md5=_,t=utils.extend({
appname:a.app_info.app_name,
app_rating:a.app_info.app_rating||0,
app_id:a.app_info.app_id,
icon_url:a.app_info.icon_url,
channel_id:a.app_info.channel_id,
md5sum:a.app_info.app_md5,
rl:a.rl,
pkgname:p,
url_scheme:a.app_info.url_scheme,
androiddownurl:n,
versioncode:a.app_info.version_code,
appinfo_url:a.app_info.appinfo_url,
traceid:a.traceid,
pt:a.pt,
url:a.url,
ticket:a.ticket,
type:a.type,
adid:a.aid,
source:source||"",
is_appmsg:!0,
file_md5:_
},a);
}
if(e.product_type==AD_TYPE.ADD_CONTACT_PRODUCT_TYPE){
for(var c=a.exp_info.exp_value||[],m=!1,u=0,f=0;f<c.length;++f){
var g=c[f]||{};
if(1==g.exp_type&&(u=g.comm_attention_num,m=u>0),2==g.exp_type){
m=!1,u=0;
break;
}
}
return a.biz_info.show_comm_attention_num=m,a.biz_info.comm_attention_num=u,t=utils.extend({
usename:a.biz_info.user_name,
pt:a.pt,
url:a.url,
traceid:a.traceid,
adid:a.aid,
ticket:a.ticket,
is_appmsg:!0
},a);
}
if(e.product_type==AD_TYPE.CARD_PRODUCT_TYPE||e.product_type==AD_TYPE.COUPON_PRODUCT_TYPE){
var A=a.card_info.card_id||"",y=a.card_info.card_ext||"";
y=y.htmlDecode();
try{
y=JSON.parse(y),y.outer_str=a.card_info.card_outer_id||"",y=JSON.stringify(y);
}catch(D){
y="{}";
}
return t=utils.extend({
card_id:A,
card_ext:y,
pt:T,
ticket:a.ticket||"",
url:a.url,
rl:a.rl,
tid:a.traceid,
traceid:a.traceid,
type:a.type,
adid:a.aid,
is_appmsg:!0
},a);
}
if(e.product_type==AD_TYPE.SHOP_PRODUCT_TYPE){
if(a.mp_shop_info){
var v=a.mp_shop_info.pid||"",P=a.mp_shop_info.outer_id||"";
t=utils.extend({
pid:v,
outer_id:P,
pt:T,
url:a.url,
rl:a.rl,
tid:a.traceid,
traceid:a.traceid,
type:a.type,
adid:a.aid,
is_appmsg:!0
},a);
}else t=a;
return t;
}
return e;
}
isVideoSharePageOnlyAd&&urlParser.getQuery("adWidth")&&(document.documentElement.style.width=urlParser.getQuery("adWidth")+"px");
var o={},n={},_=e.is_need_ad,p=e._adInfo;
if(0==_)n=p,n||(n={
advertisement_num:0
});else{
if(t.advertisement_num>0&&t.advertisement_info){
var r=t.advertisement_info;
n.advertisement_info=utils.saveCopy(r);
}
if(n.advertisement_num=t.advertisement_num,n.appid=t.appid,window._adRenderData=n,
n){
var s=utils.saveCopy(n),d=s.advertisement_info;
if(d)for(var l in d)(d[l].pos_type===AD_POS.POS_AD_BEFORE_VIDEO||d[l].pos_type===AD_POS.POS_AD_AFTER_VIDEO)&&(delete d[l],
s.advertisement_num--);
s.advertisement_num&&adLS.set(lsKey,{
info:JSON.stringify(s),
time:Date.now()
},+new Date+24e4);
}
}
n=n||{
advertisement_num:0
};
var c=!1,m=separateAdData(n.advertisement_info),u=m.oldAdInfos,f=u.length,g=new WebComptAd;
if(g.config({
adElCountMapByPos:adElCountMapByPos,
insertAutoAdElement:insertAutoAdElement
}),g.handleAd(m.webComponentAdInfos,m.webComptMidAdDataCount),(new AdFrame).handleAdWithFrame(m.newAdInfos,m.midAdDataCount,n.appid),
!n.flag&&n.advertisement_num>0){
var A=n.advertisement_num,y=n.advertisement_info;
window.adDatas.realNum=A,y=u,A=f,window.adDatas.num=A;
for(var D=0;A>D;++D){
var v,P=null,h=y[D];
h.exp_info=h.exp_info||{},h.is_cpm=h.is_cpm||0,h.biz_info=h.biz_info||{},h.app_info=h.app_info||{},
h.pos_type=h.pos_type||0,h.logo=h.logo||"",h.use_new_protocol=h.use_new_protocol||0;
var T=h.pt,E=h.pos_type,O=h.product_type;
if(2==h.use_new_protocol&&h.pos_type==AD_POS.POS_BOTTOM){
var w=JSON.stringify({
biz_log_report:[{
pos_type:+h.pos_type,
traceid:h.traceid,
aid:+h.aid,
log_type:1,
ext_info:h.crt_size
}]
});
CrtManager.CRT_CONF[h.crt_size]||(h.use_new_protocol=h.product_type!=AD_TYPE.IOS_APP_PRODUCT_TYPE&&h.product_type!=AD_TYPE.ANDROID_APP_PRODUCT_TYPE||2!=h.material_type&&9!=h.material_type||h.dest_type!=AD_CONFIG.AD_DEST_TYPE.APPDETAIL_DEST_TYPE&&h.dest_type!=AD_CONFIG.AD_DEST_TYPE.APPINFO_PAGE_DEST_TYPE&&!AD_CONFIG.AD_DEST_TYPE.CANVAS_AD_DEST_TYPE?0:1,
console.info("[底部广告旧协议兼容] crt_size:",h.crt_size," 最终协议类型：",h.use_new_protocol),ajax({
url:"/mp/advertisement_report?action=extra_report&extra_data="+w+"&__biz="+biz,
timeout:2e3
}));
}
if(urlParser.getQuery("oldAd")&&(h.use_new_protocol=0),v=h.use_new_protocol,o[E]||(o[E]=0),
o[E]++,v)1==v?E===AD_POS.POS_MID?(c=!0,h=a(h),P=h):0===E?(h=i(h),(O===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||O===AD_TYPE.IOS_APP_PRODUCT_TYPE)&&(P=h)):3===E&&(P=h):2==v&&(E===AD_POS.POS_MID?(c=!0,
h=a(h)):0==E&&(h=i(h)),P=h);else if(100===T||115===T){
for(var b=h.exp_info.exp_value||[],I=!1,x=0,S=0;S<b.length;++S){
var C=b[S]||{};
if(1==C.exp_type&&(x=C.comm_attention_num,I=x>0),2==C.exp_type){
I=!1,x=0;
break;
}
}
h.biz_info.show_comm_attention_num=I,h.biz_info.comm_attention_num=x,P={
usename:h.biz_info.user_name,
pt:T,
url:h.url,
traceid:h.traceid,
adid:h.aid,
ticket:h.ticket,
is_appmsg:!0
};
}else if(102===T)P={
appname:h.app_info.app_name,
versioncode:h.app_info.version_code,
pkgname:h.app_info.apk_name,
androiddownurl:h.app_info.apk_url,
md5sum:h.app_info.app_md5,
signature:h.app_info.version_code,
rl:h.rl,
traceid:h.traceid,
pt:T,
ticket:h.ticket,
type:h.type,
adid:h.aid,
is_appmsg:!0
};else if(101===T)P={
appname:h.app_info.app_name,
app_id:h.app_info.app_id,
icon_url:h.app_info.icon_url,
appinfo_url:h.app_info.appinfo_url,
rl:h.rl,
traceid:h.traceid,
pt:T,
ticket:h.ticket,
type:h.type,
adid:h.aid,
is_appmsg:!0
};else if(103===T||104===T||2===T&&h.app_info){
var j=h.app_info.down_count||0,k=h.app_info.app_size||0,N=h.app_info.app_name||"",M=h.app_info.category,Y=["万","百万","亿"];
if(j>=1e4){
j/=1e4;
for(var R=0;j>=10&&2>R;)j/=100,R++;
j=j.toFixed(1)+Y[R]+"次";
}else j=j.toFixed(1)+"次";
k=utils.formSize(k),M=M?M[0]||"其他":"其他",N=utils.formName(N),h.app_info._down_count=j,
h.app_info._app_size=k,h.app_info._category=M,h.app_info.app_name=N,P={
appname:h.app_info.app_name,
app_rating:h.app_info.app_rating||0,
icon_url:h.app_info.icon_url,
app_id:h.app_info.app_id,
channel_id:h.app_info.channel_id,
md5sum:h.app_info.app_md5,
rl:h.rl,
pkgname:h.app_info.apk_name,
url_scheme:h.app_info.url_scheme,
androiddownurl:h.app_info.apk_url,
versioncode:h.app_info.version_code,
appinfo_url:h.app_info.appinfo_url,
traceid:h.traceid,
pt:T,
url:h.url,
ticket:h.ticket,
type:h.type,
adid:h.aid,
is_appmsg:!0,
app_info:h.app_info
};
}else if(105===T){
var U=h.card_info.card_id||"",F=h.card_info.card_ext||"";
F=F.htmlDecode();
try{
F=JSON.parse(F),F.outer_str=h.card_info.card_outer_id||"",F=JSON.stringify(F);
}catch(z){
F="{}";
}
P={
card_id:U,
card_ext:F,
pt:T,
ticket:h.ticket||"",
url:h.url,
rl:h.rl,
tid:h.traceid,
traceid:h.traceid,
type:h.type,
adid:h.aid,
is_appmsg:!0
};
}else if(106===T){
var W=h.mp_shop_info.pid||"",B=h.mp_shop_info.outer_id||"";
P={
pid:W,
outer_id:B,
pt:T,
url:h.url,
rl:h.rl,
tid:h.traceid,
traceid:h.traceid,
type:h.type,
adid:h.aid,
is_appmsg:!0
};
}else if(108===T||109===T||110===T||116===T||117===T)P={
pt:T,
ticket:h.ticket||"",
url:h.url,
traceid:h.traceid,
adid:h.aid,
is_appmsg:!0
},h.video_info&&(P.displayWidth=h.video_info.displayWidth,P.displayHeight=h.video_info.displayHeight,
P.thumbUrl=h.video_info.thumbUrl,P.videoUrl=h.video_info.videoUrl,P.rl=h.rl),h.dest_type==AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE&&Wxopen_card.startConnect(h);else if(111===T||113===T||114===T||112===T||121===T||122===T){
var k=h.app_info.app_size||0,N=h.app_info.app_name||"";
k=utils.formSize(k),N=utils.formName(N),h.app_info.app_size=k,h.app_info.app_name=N,
P={
appname:h.app_info.app_name,
app_rating:h.app_info.app_rating||0,
app_id:h.app_info.app_id,
icon_url:h.app_info.icon_url,
channel_id:h.app_info.channel_id,
md5sum:h.app_info.app_md5,
rl:h.rl,
pkgname:h.app_info.apk_name,
url_scheme:h.app_info.url_scheme,
androiddownurl:h.app_info.apk_url,
versioncode:h.app_info.version_code,
appinfo_url:h.app_info.appinfo_url,
traceid:h.traceid,
pt:T,
url:h.url,
ticket:h.ticket,
type:h.type,
adid:h.aid,
source:source||"",
is_appmsg:!0,
app_info:h.app_info
};
}else if(118===T)P=h,c=!0,Wxopen_card.startConnect(h);else if(119===T||120===T)P=h,
Wxopen_card.startConnect(h);else if(125===T)P=h,h.dest_type==AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE&&Wxopen_card.startConnect(h);else if(140===T){
P=h;
try{
P.shopImage=P.shop_image[0],P.shopImage.mp_tags=P.shopImage.mp_tags||[];
}catch(q){
P.shopImage={};
}
}
var V=h.image_url;
require("appmsg/cdn_img_lib.js"),V&&V.isCDN()&&(V=V.replace(/\/0$/,"/640"),V=V.replace(/\/0\?/,"/640?"),
h.image_url=urlParser.addParam(V,"wxfrom","50",!0)),adDatas.ads[utils.getPosKeyDesc(E,o[E]-1)]={
a_info:h,
adData:P
},localStorage&&localStorage.setItem&&h.app_info&&h.app_info.url_scheme&&localStorage.setItem("__WXLS__a_url_schema_"+h.traceid,h.app_info.url_scheme),
h.has_installed=!1,h.app_info&&!function(e){
JSAPI.invoke("getInstallState",{
packageName:e.app_info.apk_name
},function(t){
var a=t.err_msg;
a.indexOf("get_install_state:yes")>-1&&(e.has_installed=!0);
});
}(h),0===E&&9===h.material_type&&(O===AD_TYPE.MINI_GAME_PRODUCT_TYPE&&h.dest_type===AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE&&h.game_info&&(h.biz_info.head_img=h.game_info.head_img,
h.biz_info.nick_name=h.game_info.nick_name),O!==AD_TYPE.IOS_APP_PRODUCT_TYPE&&O!==AD_TYPE.ANDROID_APP_PRODUCT_TYPE||!h.app_info||(h.biz_info.head_img=h.app_info.icon_url,
h.biz_info.nick_name=h.app_info.app_name));
}
var H=function st(){
var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
if(js_sponsor_ad_area.offsetTop<e+commonUtils.getInnerHeight()){
var t=document.getElementById("js_ad_area");
t&&Class.addClass(t,"show"),DomEvent.off(window,"scroll",st);
}
},L=adDatas.ads;
for(var G in L)if(0===G.indexOf("pos_")){
var P=L[G],h=!!P&&P.a_info,O=h.product_type;
if(P&&h){
if(insertAutoAdElement(h),2!==h.use_new_protocol){
if(0==h.pos_type){
if(h.new_appmsg=window.new_appmsg,h.longAppBtnText=O===AD_TYPE.IOS_APP_PRODUCT_TYPE?"查看应用":"下载应用",
h.shortAppBtnText=O===AD_TYPE.IOS_APP_PRODUCT_TYPE?"查看":"下载",js_bottom_ad_area.innerHTML=TMPL.tmpl(a_tpl,h,!1),
111==h.pt||112==h.pt||113==h.pt||114==h.pt){
var K=document.getElementsByClassName("js_download_app_card")[0],J=K.offsetWidth,X=Math.floor(J/2.875);
X>0&&(K.style.height=X+"px");
}
}else if(3==h.pos_type){
var K=document.createElement("div");
K.appendChild(document.createTextNode(h.image_url)),h.image_url=K.innerHTML.replace(/&amp;/g,"&"),
h.new_appmsg=window.new_appmsg,js_sponsor_ad_area.innerHTML=TMPL.tmpl(sponsor_a_tpl,h,!1),
js_sponsor_ad_area.style.display="block";
var Q=js_sponsor_ad_area.clientWidth;
108!=h.pt&&109!=h.pt&&110!=h.pt||2==h.use_new_protocol?116==h.pt||117==h.pt:document.getElementById("js_main_img").style.height=Q/1.77+"px",
DomEvent.on(window,"scroll",H),H(0);
}else if(h.pos_type===AD_POS.POS_MID&&utils.checkShowCpc(el_gdt_areas[G],globalAdDebug,contentWrp,h)){
h=_parseExpCpc(h);
var Z=!1;
if(O===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||O===AD_TYPE.IOS_APP_PRODUCT_TYPE)js_cpc_area.innerHTML=TMPL.tmpl(cpc_a_tpl,h,!1),
Z=!0;else{
var $=require("a/tpl/cpc_tpl.html.js"),et=h.exp_obj.sale_text;
(O===AD_TYPE.ADD_CONTACT_PRODUCT_TYPE||O===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||O===AD_TYPE.IOS_APP_PRODUCT_TYPE||O===AD_TYPE.MINI_GAME_PRODUCT_TYPE)&&(et=h.avatarTitle),
js_cpc_area.innerHTML=TMPL.tmpl($,{
tag_pos:h.exp_obj.tag_pos,
type:h.tag_pos,
ticket:h.ticket,
url:h.url,
rl:h.rl,
aid:h.aid,
pt:h.pt,
traceid:h.traceid,
group_id:h.group_id,
apurl:h.apurl,
is_cpm:h.is_cpm,
can_see_complaint:window.can_see_complaint,
pos_type:h.pos_type,
banner:h.image_url,
price:h.exp_obj.price,
title:et,
is_wx_app:h.is_wx_app,
btn_text:h.exp_obj.btn_text,
avatar:h.avatar,
isDownload:Z
},!1);
}
}
mmversion.isIOS&&h.app_info&&h.app_info.url_scheme&&O===AD_TYPE.IOS_APP_PRODUCT_TYPE&&(document.getElementById("js_promotion_tag")&&(document.getElementById("js_promotion_tag").innerHTML="查看应用"),
document.getElementsByClassName("js_ad_btn")&&document.getElementsByClassName("js_ad_btn").length>0&&(document.getElementsByClassName("js_ad_btn")[0].innerHTML="查看"),
document.getElementById("js_ad_btn_"+h.pos_type)&&(document.getElementById("js_ad_btn_"+h.pos_type).innerHTML="查看应用"));
}else{
var tt,at={},Z=!1,it={};
if(h.button_action)try{
"string"==typeof h.button_action&&(h.button_action=JSON.parse(h.button_action.html())),
h.button_action.button_text&&""!=h.button_action.button_text||(h.button_action.button_text="去逛逛");
}catch(z){
h.button_action={
button_text:"decode error"
};
}else h.button_action={
button_text:"something wrong"
};
tt=h.crt_size,(O===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||O===AD_TYPE.IOS_APP_PRODUCT_TYPE)&&(Z=!0);
var et="",ot="";
if(processAdAvatar(h),h.dest_type==AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE&&Wxopen_card.startConnect(h),
h.pos_type===AD_POS.POS_MID)utils.checkShowCpc(el_gdt_areas[G],globalAdDebug,contentWrp,h)&&(h=_parseExpCpc(h),
(h.avatarTitle||h.exp_obj.sale_text)&&h.avatar&&(et=h.avatarTitle||h.exp_obj.sale_text,
ot=h.avatar),at={
tag_pos:h.exp_obj.tag_pos,
type:h.tag_pos,
ticket:h.ticket,
url:h.url,
rl:h.rl,
aid:h.aid,
pt:h.pt,
traceid:h.traceid,
group_id:h.group_id,
apurl:h.apurl,
is_cpm:h.is_cpm,
can_see_complaint:window.can_see_complaint,
pos_type:h.pos_type,
banner:h.image_url,
price:h.exp_obj.price,
title:et,
is_wx_app:h.is_wx_app,
is_ios:mmversion.isIOS,
isDownload:Z,
btn_text:h.exp_obj.btn_text,
avatar:ot
},Z&&(it.customUpdataFunc=function(e,t){
var a=e.querySelector(".js_download_percent"),i=e.querySelector(".js_download_outside"),o=e.querySelector(".js_download_inner");
a&&(a.style.width=t.percent+"%"),i.textContent=t.btn_text,o.textContent=t.btn_text;
}),ad_render_object[G]=new CrtManager.createCrtObject(tt,at,el_gdt_areas[G],it),
gdt_as[G]=el_gdt_areas[G].getElementsByClassName("js_ad_main_area"));else if(h.pos_type==AD_POS.POS_SPONSOR){
var K=document.createElement("div");
K.appendChild(document.createTextNode(h.image_url)),h.image_url=K.innerHTML.replace(/&amp;/g,"&"),
h.new_appmsg=window.new_appmsg;
var P={
pt:h.pt,
ticket:h.ticket||"",
url:h.url,
traceid:h.traceid,
adid:h.aid,
is_appmsg:!0
};
if(h.video_info&&(P.displayWidth=h.video_info.displayWidth,P.displayHeight=h.video_info.displayHeight,
P.thumbUrl=h.video_info.thumbUrl,P.videoUrl=h.video_info.videoUrl,P.rl=h.rl),at={
type:h.tag_pos,
ticket:h.ticket,
url:h.url,
rl:h.rl,
aid:h.aid,
pt:h.pt,
traceid:h.traceid,
group_id:h.group_id,
apurl:h.apurl,
is_cpm:h.is_cpm,
can_see_complaint:window.can_see_complaint,
pos_type:h.pos_type,
banner:h.image_url,
title:h.biz_info.nick_name,
is_wx_app:h.button_action.jump_type==AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE,
is_ios:mmversion.isIOS,
isDownload:Z,
btn_text:h.button_action.button_text,
avatar:h.biz_info.head_img,
isApp:!1
},ad_render_object[G]=new CrtManager.createCrtObject(tt,at,js_sponsor_ad_area,it),
js_sponsor_ad_area.style.display="block",gdt_as["pos_"+h.pos_type]=js_sponsor_ad_area.getElementsByClassName("js_ad_main_area"),
!ad_render_object[G].getCrtData().has_banner){
var nt="&tid="+h.traceid+"&uin="+uin+"&key="+l+"&ticket="+(h.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+h.adid+"&ad_engine=0&pos_type="+h.pos_type+"&exp_id="+h.exp_info.exp_id+"&exp_value="+h.exp_info.exp_value+"&r="+Math.random();
h.report_param=nt;
}
var _t=require("a/sponsor.js");
new _t({
adDetailBtn:document.getElementById("js_ad_detail"),
adMoreBtn:document.getElementById("js_ad_more"),
adAbout:document.getElementById("js_btn_about"),
adImg:document.getElementById("js_main_img"),
adMessage:document.getElementById("js_ad_message"),
adVideo:document.getElementById("js_video_container"),
adComplain:document.getElementById("js_btn_complain"),
adData:P,
a_info:h,
pos_type:h.pos_type,
report_param:nt
}),DomEvent.on(window,"scroll",H),H(0);
}else if(h.pos_type==AD_POS.POS_BOTTOM){
var it={};
if(h.video_info&&(P.displayWidth=h.video_info.displayWidth,P.displayHeight=h.video_info.displayHeight,
P.thumbUrl=h.video_info.thumbUrl,P.videoUrl=h.video_info.videoUrl,P.rl=h.rl),Z&&(it.customUpdataFunc=function(e,t){
var a=e.querySelector(".js_download_percent"),i=e.querySelector(".js_download_outside"),o=e.querySelector(".js_download_inner");
a&&(a.style.width=t.percent+"%"),i.textContent=t.btn_text,o.textContent=t.btn_text;
},it.afterRenderFunc=function(e,t){
JSAPI.invoke("getInstallState",{
packageName:h.app_info.apk_name
},function(a){
var i=a.err_msg,o=e.querySelector(".js_watermark_text");
i.indexOf("get_install_state:yes")>-1&&h.app_info.url_scheme&&(o.textContent=354==parseInt(t.crt_size)||117==parseInt(t.crt_size)||355==parseInt(t.crt_size)||568==parseInt(t.crt_size)?"进入":"进入应用");
});
}),h.avatarTitle&&h.avatar&&(et=h.avatarTitle||h.exp_obj.sale_text,ot=h.avatar),
at=utils.extend({
banner:h.image_url,
is_wx_app:h.button_action.jump_type==AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE,
btn_text:h.button_action.button_text,
avatar:h.avatar,
isApp:!1,
isDownload:Z,
title:et
},h),ad_render_object["pos_"+h.pos_type]=new CrtManager.createCrtObject(tt,at,js_bottom_ad_area,it),
!ad_render_object["pos_"+h.pos_type].getCrtData().has_banner){
var nt="&tid="+h.traceid+"&uin="+uin+"&key="+l+"&ticket="+(h.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+h.adid+"&ad_engine=0&pos_type="+pos_type+"&exp_id="+h.exp_info.exp_id+"&exp_value="+h.exp_info.exp_value+"&r="+Math.random();
h.report_param=nt;
var pt=ad_render_object["pos_"+h.pos_type].getWrapperElm().getElementsByClassName("js_video_container_new_protocol");
pt[0]&&(pt=pt[0],h.videoContainer=pt,videoAdMap[h.aid]=new VideoAd(h));
}
gdt_as["pos_"+h.pos_type]=js_bottom_ad_area.getElementsByClassName("js_ad_main_area"),
setBottomSize(h);
}
}
utils.lazyLoadAdImg({
aid:h.aid,
type:h.pt,
info:h
}),utils.checkAdImg(h);
}
}
isVideoSharePageOnlyAd&&js_bottom_ad_area.offsetHeight&&handleVideoSharePage(),bindAdOperation();
}
if(is_temp_url&&adElCountMapByPos[AD_POS.POS_MID]&&!c)for(var rt=0;rt<adElCountMapByPos[AD_POS.POS_MID];rt++){
if(!utils.checkShowCpc(el_gdt_areas[utils.getPosKeyDesc(AD_POS.POS_MID,rt)],globalAdDebug,contentWrp))return;
el_gdt_areas[utils.getPosKeyDesc(AD_POS.POS_MID,rt)].innerHTML=TMPL.tmpl(cpc_a_tpl,{
type:"",
ticket:"",
url:"",
rl:"",
aid:"",
pt:"",
traceid:"",
group_id:"",
apurl:"",
is_cpm:"",
pos_type:"",
dest_type:"",
exp_obj:{
btn_text:"按钮"
},
image_url:"https://mmbiz.qlogo.cn/mmbiz_png/cVgP5bCElFiaPhsbHe4ctnlUllMCDCEIJib69wX3BUX42XagNypd2JcgyEiaoFRu4KicKF3avfRgVnWPABVTjtPRwQ/0?wx_fmt=png"
},!1);
}
}
function _parseExpCpc(e){
var t=e.product_type,a={
icon_pos:"",
btn_text:"去逛逛",
price:"",
sale_text:""
};
if(5==e.watermark_type&&(a.btn_text="查看详情"),29===t||31===t?a.btn_text="查看详情":t===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||t===AD_TYPE.IOS_APP_PRODUCT_TYPE?a.btn_text=t===AD_TYPE.IOS_APP_PRODUCT_TYPE?"查看应用":"下载应用":30===t?a.btn_text="去逛逛":t===AD_TYPE.ADD_CONTACT_PRODUCT_TYPE?a.btn_text=e.biz_info.is_subscribed?"查看公众号":"关注公众号":t===AD_TYPE.MINI_GAME_PRODUCT_TYPE&&(a.btn_text="进入小游戏"),
e.dest_type===AD_CONFIG.AD_DEST_TYPE.CANVAS_AD_DEST_TYPE&&(a.btn_text="查看详情"),e.cpc_exp_info&&e.cpc_exp_info.exp_content){
var i=e.cpc_exp_info.exp_content;
try{
for(var o=JSON.parse(i.replace(/&quot;/g,'"')),n=-1,_=0;_<o.aid_list.length;_++)o.aid_list[_].aid==e.aid&&(n=_);
n>-1&&(a.icon_pos=o.icon_pos||"",a.btn_text=o.btn_text||a.btn_text,a.price=o.aid_list[n].price,
a.sale_text=o.aid_list[n].sale_text,window.__addIdKeyReport("68064",15));
}catch(p){
window.__addIdKeyReport("68064",16);
}
}
return e.exp_obj=a,e;
}
function seeAds(){
var adDatas=window.adDatas;
adDatas&&adDatas.num>0&&!function(){
var scrollFn=function scrollFn(event,adOffsetWebviewTopFromApp,scrollViewHeight){
var scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
scrollViewHeight=scrollViewHeight||commonUtils.getInnerHeight();
for(var i in adDatas.ads)!function(pos_key){
var gdt_a=gdt_as[pos_key];
if(gdt_a=!!gdt_a&&gdt_a[0],gdt_a&&gdt_a.dataset&&gdt_a.dataset.apurl){
var aInfo=adDatas.ads[pos_key].a_info,gid=gdt_a.dataset.gid,tid=gdt_a.dataset.tid,aid=gdt_a.dataset.aid,apurl=gdt_a.dataset.apurl,is_cpm=1*gdt_a.dataset.is_cpm,ads=adDatas.ads,a_info=ads[pos_key].a_info||{},exp_info=a_info.exp_info||{},exp_id=exp_info.exp_id||"",exp_value=exp_info.exp_value||[],pos_type=aInfo.pos_type,offsetTop=offset.getOffset(el_gdt_areas[pos_key]).offsetTop,adHeight=el_gdt_areas[pos_key].offsetHeight,adOffsetTop=offsetTop+gdt_a.offsetTop,gh_id="",pt=aInfo.pt,adOffsetWebviewTop=adOffsetWebviewTopFromApp?adOffsetWebviewTopFromApp+gdt_a.offsetTop:offsetTop-scrollTop,intoView=scrollViewHeight>adOffsetWebviewTop&&adOffsetWebviewTop>-adHeight,signData={
click_pos:"",
rl:encodeURIComponent(a_info.rl),
__biz:biz,
pos_x:"",
pos_y:"",
press_interval:""
};
adDatas.ads[pos_key]&&aInfo&&aInfo.weapp_info&&aInfo.weapp_info.original_id&&(gh_id=aInfo.weapp_info.original_id),
adDatas.ads[pos_key].ad_engine=0;
try{
exp_value=JSON.stringify(exp_value);
}catch(e){
exp_value="[]";
}
if(-1!=apurl.indexOf("ad.wx.com")&&(adDatas.ads[pos_key].ad_engine=1),intoView?showTime.startShow(aInfo):showTime.stopShow(aid),
!ping_apurl[pos_key]&&intoView){
ping_apurl[pos_key]=!0;
var report_arg="trace_id="+tid+"&product_type="+pt+"&logtype=2&url="+encodeURIComponent(location.href)+"&apurl="+encodeURIComponent(apurl);
tid&&mmversion.gtVersion("6.3.22",!0)&&JSAPI.invoke("adDataReport",{
ad_info:report_arg
},function(){}),log("[Ad] seeAd, tid="+tid+", aid="+aid+", pos_type="+pos_type),
Sign.createSign(signData,function(adSignData,adSignK1,adSignK2,signMd5,viewidKeyObj){
var reportOriginUrl=urlParser.join("/mp/advertisement_report",{
report_type:1,
tid:tid,
aid:aid,
gh_id:gh_id,
adver_group_id:gid,
apurl:encodeURIComponent(apurl),
__biz:biz,
ascene:encodeURIComponent(window.ascene||-1),
pos_type:pos_type,
exp_id:exp_id,
exp_value:exp_value,
r:Math.random()
},!0);
ajax({
url:utils.joinSignParam(reportOriginUrl,{
adSignData:adSignData,
adSignK1:adSignK1,
adSignK2:adSignK2,
signMd5:signMd5,
viewidKeyObj:viewidKeyObj
}),
success:function success(res){
log("[Ad] seeAd report success, tid="+tid+", aid="+aid+", pos_type="+pos_type);
try{
res=eval("("+res+")");
}catch(e){
res={};
}
res&&0!=res.ret?ping_apurl[pos_key]=!1:ping_apurl.pos_0&&ping_apurl.pos_1;
},
error:function(){
log("[Ad] seeAd report error, tid="+tid+", aid="+aid+", pos_type="+pos_type),jsmonitorReport.setSum(28307,27,1);
},
async:!0
}),utils.reportUrlLength(adSignData,adSignK1,adSignK2,signMd5,viewidKeyObj,{
pos_type:pos_type,
tid:tid,
aid:aid
},reportOriginUrl);
});
}
var ping_cpm_apurl_obj=ping_cpm_apurl[pos_key];
if(is_cpm&&!ping_cpm_apurl_obj.hasPing){
var rh=.5;
scrollViewHeight-adHeight*rh>adOffsetWebviewTop&&adOffsetWebviewTop>-adHeight*(1-rh)?3==pos_type?(ping_cpm_apurl_obj.hasPing=!0,
Sign.createSign(signData,function(adSignData,adSignK1,adSignK2,signMd5,viewidKeyObj){
var reportOriginUrl=urlParser.join("/mp/advertisement_report",{
report_type:1,
tid:tid,
aid:aid,
gh_id:gh_id,
adver_group_id:gid,
apurl:encodeURIComponent(apurl+"&viewable=true"),
__biz:biz,
ascene:encodeURIComponent(window.ascene||-1),
pos_type:pos_type,
r:Math.random()
},!0);
ajax({
url:utils.joinSignParam(reportOriginUrl,{
adSignData:adSignData,
adSignK1:adSignK1,
adSignK2:adSignK2,
signMd5:signMd5,
viewidKeyObj:viewidKeyObj
}),
mayAbort:!0,
success:function success(res){
try{
res=eval("("+res+")");
}catch(e){
res={};
}
res&&0!=res.ret&&(ping_cpm_apurl_obj.hasPing=!1);
},
async:!0
}),utils.reportUrlLength(adSignData,adSignK1,adSignK2,signMd5,viewidKeyObj,{
pos_type:pos_type,
tid:tid,
aid:aid
},reportOriginUrl);
})):ping_cpm_apurl_obj.clk||(ping_cpm_apurl_obj.clk=setTimeout(function(){
ping_cpm_apurl_obj.hasPing=!0,Sign.createSign(signData,function(adSignData,adSignK1,adSignK2,signMd5,viewidKeyObj){
var reportOriginUrl=urlParser.join("/mp/advertisement_report",{
report_type:1,
tid:tid,
aid:aid,
gh_id:gh_id,
adver_group_id:gid,
apurl:encodeURIComponent(apurl+"&viewable=true"),
__biz:biz,
ascene:encodeURIComponent(window.ascene||-1),
pos_type:pos_type,
exp_id:exp_id,
exp_value:exp_value,
r:Math.random()
},!0);
ajax({
url:utils.joinSignParam(reportOriginUrl,{
adSignData:adSignData,
adSignK1:adSignK1,
adSignK2:adSignK2,
signMd5:signMd5,
viewidKeyObj:viewidKeyObj
}),
mayAbort:!0,
success:function success(res){
try{
res=eval("("+res+")");
}catch(e){
res={};
}
res&&0!=res.ret&&(ping_cpm_apurl_obj.hasPing=!1);
},
async:!0
}),utils.reportUrlLength(adSignData,adSignK1,adSignK2,signMd5,viewidKeyObj,{
pos_type:pos_type,
tid:tid,
aid:aid
},reportOriginUrl);
});
},1001)):3!=pos_type&&ping_cpm_apurl_obj.clk&&(clearTimeout(ping_cpm_apurl_obj.clk),
ping_cpm_apurl_obj.clk=null);
}
var allReport=!0;
if(107==pt||108==pt||110==pt)for(var i=0;i<see_ad_detail_report.length;i++)if(see_ad_detail_report[i])allReport=!1;else{
var report_url=location.protocol+"//mp.weixin.qq.com/mp/ad_report?action=see_report&aid="+aid+"&tid="+tid;
if((0==i&&scrollTop+scrollViewHeight>adOffsetTop+1||1==i&&scrollTop+scrollViewHeight>adOffsetTop+.5*adHeight||2==i&&scrollTop+scrollViewHeight>adOffsetTop+adHeight)&&((new Image).src=report_url+"&seepos="+(i+1)+"&report_type=0",
see_ad_detail_report[i]=!0),i>=3)if(scrollTop+scrollViewHeight>adOffsetTop&&adOffsetTop+adHeight>scrollTop){
if(see_ad_detail_first_see_time>0){
var t=0;
3==i&&(t=500),4==i&&(t=1e3),5==i&&(t=2e3),+new Date-see_ad_detail_first_see_time>t?((new Image).src=report_url+"&seetime="+t+"&report_type=1",
see_ad_detail_report[i]=!0):window.setTimeout(function(){
seeAds();
},t);
}
0==see_ad_detail_first_see_time&&(see_ad_detail_first_see_time=+new Date);
}else see_ad_detail_first_see_time=0;
}
}
}(i);
};
commonUtils.bindDebounceScrollEvent(scrollFn),!isVideoSharePageOnlyAd&&scrollFn(),
isVideoSharePageOnlyAd&&JSAPI.on("onScrollViewDidScroll",function(e){
scrollFn(null,e.subViewOffsetTop,e.scrollViewHeight);
});
}();
}
function ad_click(e,t,a,i,o,n,_,p,r,s,d,l,c,m,u,f,g,A,y){
if(!has_click[o]){
has_click[o]=!0;
{
var D=document.getElementById("loading_"+o);
g.product_type;
}
D&&(D.style.display="inline");
var v=g.exp_info||{},P=v.exp_id||"",h=v.exp_value||[];
try{
h=JSON.stringify(h);
}catch(T){
h="[]";
}
var E="";
l&&l.weapp_info&&l.weapp_info.original_id&&(E=l.weapp_info.original_id),AdClickReport({
click_pos:1,
report_type:2,
type:e,
exp_id:P,
exp_value:h,
url:encodeURIComponent(t),
tid:o,
aid:p,
rl:encodeURIComponent(a),
__biz:biz,
pos_type:s,
pt:r,
pos_x:c,
pos_y:m,
ad_w:u,
ad_h:f,
gh_id:E,
press_interval:window.__a_press_interval||-1
},function(){
if(has_click[o]=!1,D&&(D.style.display="none"),g.app_info){
var a=handleApp(t,o,idx,mid,biz,r,p,d,s,l,g,n,A);
if(a)return;
}
if(isCanvasAd(g))return void utils.openCanvasAd({
canvasId:g.canvas_info.canvas_id,
adInfoXml:g.canvas_info.ad_info_xml,
pos_type:s,
report_param:A,
url:t
});
if(y)if(g.dest_type===AD_CONFIG.AD_DEST_TYPE.OUTER_DEST_TYPE)handleH5(t,o,idx,mid,biz,r,p,d,s,l,g);else if(g.dest_type===AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE)Wxopen_card.openWxopen(l);else if(g.dest_type===AD_CONFIG.AD_DEST_TYPE.AD_DEST_TYPE)openUrlWithExtraWebview(t);else{
if(g.dest_type===AD_CONFIG.AD_DEST_TYPE.WECHAT_SHOP_DEST_TYPE)return void openUrlWithExtraWebview(urlParser.join(t,{
outer_id:l.outer_id
}));
if(g.dest_type===AD_CONFIG.AD_DEST_TYPE.BIZ_DEST_TYPE&&g.product_type==AD_CONFIG.AD_TYPE.CARD_PRODUCT_TYPE)return void Card.openCardDetail(l.card_id,l.card_ext,l);
console.info("[广告新协议兜底跳转]",g),openUrlWithExtraWebview(t);
}else if("5"==e)openUrlWithExtraWebview("/mp/profile?source=from_ad&tousername="+t+"&ticket="+n+"&uin="+uin+"&key="+key+"&__biz="+biz+"&mid="+mid+"&idx="+idx+"&tid="+o);else{
if("105"==r&&l)return void Card.openCardDetail(l.card_id,l.card_ext,l);
if("106"==r&&l)return void openUrlWithExtraWebview(urlParser.join(t,{
outer_id:l.outer_id
}));
if("118"==r||"119"==r||"120"==r)return void Wxopen_card.openWxopen(l);
if(g.dest_type===AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE)return void Wxopen_card.openWxopen(l);
if(-1==t.indexOf("mp.weixin.qq.com"))t="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(t);else if(-1==t.indexOf("mp.weixin.qq.com/s")&&-1==t.indexOf("mp.weixin.qq.com/mp/appmsg/show")){
var i={
source:4,
tid:o,
idx:idx,
mid:mid,
appuin:biz,
pt:r,
aid:p,
ad_engine:d,
pos_type:s
},_=window.__report;
if(("104"==r||"113"==r||"114"==r||"122"==r)&&l||-1!=t.indexOf("mp.weixin.qq.com/mp/ad_app_info")){
var c="",m="";
l&&(c=l.pkgname&&l.pkgname.replace(/\./g,"_"),m=l.channel_id||""),i={
source:4,
tid:o,
traceid:o,
mid:mid,
idx:idx,
appuin:biz,
pt:r,
channel_id:m,
aid:p,
engine:d,
pos_type:s,
pkgname:c
};
}
t=urlParser.join(t,i),(0==t.indexOf("http://mp.weixin.qq.com/promotion/")||0==t.indexOf("https://mp.weixin.qq.com/promotion/"))&&(t=urlParser.join(t,{
traceid:o,
aid:p,
engine:d
})),!p&&_&&_(80,t);
}
openUrlWithExtraWebview(t);
}
});
}
}
function hideComplainBtns(){
for(var e=document.getElementsByClassName("js_ad_opt_list"),t=0;t<e.length;t++)e[t].style.display="none";
}
function bindAdOperation(){
seeAds();
for(var e in adDatas.ads)!function(e){
var t=el_gdt_areas[e];
if(!t)return!1;
if(!t.getElementsByClassName&&t.style)return t.style.display="none",!1;
var a=t.getElementsByClassName("js_ad_link")||[],i=adDatas.ads[e];
if(i){
var o,n,_=i.adData,p=i.a_info,r=p.pos_type,s=p.pos_type,d=i.ad_engine,l=t.getElementsByClassName("js_ad_opt_list_btn_"+r),c=t.getElementsByClassName("js_complain_btn_"+r);
if(2==p.use_new_protocol){
var m=t.getElementsByClassName("js_material_"+r),u=t.getElementsByClassName("js_ad_action_"+r);
if(_){
_.adid=window.adid||_.adid||_.aid;
var f="&tid="+_.traceid+"&uin="+uin+"&key="+key+"&ticket="+(_.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+_.adid+"&ad_engine="+d+"&pos_type="+s+"&r="+Math.random();
}
if(m.length>0&&(n=_.tid||p.traceid,o=p.aid,DomEvent.on(m[0],"click",function(e){
var t=p,a=!!e&&e.target;
if(p&&p.has_installed&&("104"==_.pt||"113"==_.pt||"114"==_.pt||"2"==_.pt)?utils.report(114,f):"103"==_.pt||"111"==_.pt||"112"==_.pt?utils.report(23,f):("104"==_.pt||"113"==_.pt||"114"==_.pt)&&utils.report(25,f),
!(!t||3===s||-1!==a.className.indexOf("js_muted_btn")||videoAdMap[t.aid]&&videoAdMap[t.aid].adPlayer&&"play"!==videoAdMap[t.aid].adPlayer.adVideoStatus)){
var i,r,l=t.type,c=t.url,u=t.rl,g=t.apurl,A=t.ticket,y=t.group_id,D=t.pt,v=p.use_new_protocol;
i=m[0].clientWidth,r=m[0].clientHeight;
var P=getClickEventPageOffset(e),h=offset.getOffset(m[0]),T=P.x-h.offsetLeft,E=P.y-h.offsetTop;
ad_click(l,c,u,g,n,A,y,o,D,s,d,_,T,E,i,r,p,f,v),log("[Ad] ad_click: type="+l+", url="+c+", rl="+u+", apurl="+g+", traceid="+n+", ticket="+A+", group_id="+y+", aid="+o+", pt="+D+", pos_type="+s+", ad_engine="+d);
}
})),u.length>0&&p.button_action&&3!=p.pos_type)if(p.product_type===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||p.product_type===AD_TYPE.IOS_APP_PRODUCT_TYPE){
var g=require("a/app_card.js"),A=15,y=_.pkgname&&_.pkgname.replace(/\./g,"_");
new g({
btn:u[0],
adData:_,
report_param:f,
pos_type:s,
url_scheme:_.url_scheme,
via:[_.traceid,_.adid,y,source,A,d].join("."),
ticket:_.ticket,
appdetail_params:["&aid="+_.adid,"traceid="+_.traceid,"pkgname="+y,"source="+source,"type="+A,"engine="+d,"appuin="+biz,"pos_type="+s,"ticket="+_.ticket,"scene="+scene].join("&"),
engine:d,
percentStatus:function(t,a){
var i=ad_render_object[e].getData();
i.percent=a,"downloading"==t?i.btn_text="暂停":"paused"==t?i.btn_text="继续":"installed"==t?(i.percent=0,
i.btn_text="已安装"):"downloaded"==t?(i.percent=0,i.btn_text="安装"):"gotodetail"==t?(i.percent=0,
i.btn_text=117==parseInt(p.crt_size)||354==parseInt(p.crt_size)||355==parseInt(p.crt_size)||568==parseInt(p.crt_size)?"进入":"进入应用"):(i.percent=0,
i.btn_text=117==parseInt(p.crt_size)||354==parseInt(p.crt_size)||355==parseInt(p.crt_size)||568==parseInt(p.crt_size)?"进入":"进入应用"),
ad_render_object[e].updateData(i);
}
});
}else if(p.product_type==AD_TYPE.ADD_CONTACT_PRODUCT_TYPE){
var D=require("a/profile.js");
_.adid=window.adid||_.adid||_.aid,new D({
btnProfile:u[0],
adData:_,
pos_type:s,
report_param:f,
aid:_.adid,
ad_engine:d
});
}else p.product_type==AD_TYPE.CARD_PRODUCT_TYPE?new Card({
btn:u[0],
adData:_,
report_param:f,
pos_type:s
}):p.product_type==AD_TYPE.WECHATCARD_PRODUCT_TYPE?new MpShop({
btn:u[0],
adData:_,
report_param:f,
pos_type:s
}):DomEvent.on(u[0],"click",function(e){
var t=_,a=!!e&&e.target,i=t.type,o=p.button_action.jump_url,n=t.rl,l=t.apurl,c=t.tid||p.traceid,m=t.ticket,f=t.group_id,g=t.aid,A=t.pt,y=p.use_new_protocol;
if(console.info("[广告新协议点击素材]",p.dest_type,p.product_type),_){
_.adid=window.adid||_.adid||_.aid;
var D="&tid="+_.traceid+"&uin="+uin+"&key="+key+"&ticket="+(_.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+_.adid+"&ad_engine="+d+"&pos_type="+s+"&r="+Math.random();
}
var v,P,h,T;
v=position.getX(a,"js_ad_action_"+r)+e.offsetX,P=position.getY(a,"js_ad_action_"+r)+e.offsetY,
h=u[0].clientWidth,T=u[0].clientHeight;
var E=getClickEventPageOffset(e),O=offset.getOffset(u[0]),w=E.x-O.offsetLeft,b=E.y-O.offsetTop;
return ad_click(i,o,n,l,c,m,f,g,A,s,d,_,w,b,h,T,p,D,y),log("[Ad] ad_click: type="+i+", url="+o+", rl="+n+", apurl="+l+", traceid="+c+", ticket="+m+", group_id="+f+", aid="+g+", pt="+A+", pos_type="+s+", ad_engine="+d),
hideComplainBtns(),!1;
});
}else for(var v=0,P=a.length;P>v;++v)!function(e,t){
var i=a[e],_=i.dataset;
if(_&&3!=p.pos_type){
var r=_.type,l=_.url,c=_.rl,m=_.apurl,u=_.ticket,f=_.group_id,g=_.pt,A=p.use_new_protocol,y=!0;
n=_.tid,o=_.aid,(A&&(p.product_type===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||p.product_type===AD_TYPE.IOS_APP_PRODUCT_TYPE)||115===g)&&(y=!1),
p.pos_type===AD_POS.POS_MID&&(y=!1),DomEvent.on(i,"click",function(e){
var a=!!e&&e.target,i=[AD_TYPE.ANDROID_APP_PRODUCT_TYPE,AD_TYPE.IOS_APP_PRODUCT_TYPE,AD_TYPE.ADD_CONTACT_PRODUCT_TYPE];
if(!a||!a.className||s==AD_POS.POS_MID&&t&&-1==i.toString().indexOf(t.product_type)||-1==a.className.indexOf("js_ad_btn")&&-1==a.className.indexOf("js_btn_process")&&-1==a.className.indexOf("js_muted_btn")&&-1==a.className.indexOf("js_poster_cover")&&-1==a.className.indexOf("js_ad_opt_list_btn")&&-1==a.className.indexOf("js_complain_btn")&&-1==a.className.indexOf("js_view_profile")&&-1==a.className.indexOf("js_add_contact")){
if(t){
t.adid=window.adid||t.adid||t.aid;
var _="&tid="+t.traceid+"&uin="+uin+"&key="+key+"&ticket="+(t.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+t.adid+"&ad_engine="+d+"&pos_type="+s+"&r="+Math.random();
p&&p.has_installed&&("104"==t.pt||"113"==t.pt||"114"==t.pt||"2"==t.pt)?utils.report(114,_):"103"==t.pt||"111"==t.pt||"112"==t.pt?utils.report(23,_):("104"==t.pt||"113"==t.pt||"114"==t.pt)&&utils.report(25,_);
}
var y,D,v,P;
return y=position.getX(a,"js_ad_link")+e.offsetX,D=position.getY(a,"js_ad_link")+e.offsetY,
v=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientWidth,
P=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientHeight,
ad_click(r,l,c,m,n,u,f,o,g,s,d,t,y,D,v,P,p,_,A),log("[Ad] ad_click: type="+r+", url="+l+", rl="+c+", apurl="+m+", traceid="+n+", ticket="+u+", group_id="+f+", aid="+o+", pt="+g+", pos_type="+s+", ad_engine="+d),
!1;
}
},y),DomEvent.on(i,"touchstart",function(){
window.__a_press_interval=+new Date;
}),DomEvent.on(i,"touchend",function(){
window.__a_press_interval=+new Date-window.__a_press_interval;
});
}
}(v,_);
if(l[0]&&DomEvent.on(l[0],"click",function(){
if(parseInt(window.can_see_complaint)){
var e=l[0].getElementsByClassName("js_ad_opt_list_"+p.pos_type);
utils.adOptReport(0,p.pos_type,n,o),e&&e[0]&&(e[0].style.display="none"==e[0].style.display?"block":"none");
}
return!1;
}),c[0]&&DomEvent.on(c[0],"click",function(){
var e="https://mp.weixin.qq.com/promotion/res/htmledition/mobile/html/feedback.html?aid="+o+"&traceid="+n+"&source="+p.pos_type+"&biz="+window.biz+"&material_id="+JSON.stringify(p.material_id_list);
return utils.adOptReport(1,p.pos_type,n,o),mmversion.isWp||mmversion.isIOS||mmversion.isAndroid?JSAPI.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
-1==t.err_msg.indexOf("ok")&&(location.href=e);
}):openUrlWithExtraWebview(e),hideComplainBtns(),!1;
}),_&&2!=p.use_new_protocol){
_.adid=window.adid||_.adid||_.aid;
var h=p.exp_info||{},T=h.exp_id||"",E=h.exp_value||[];
try{
E=JSON.stringify(E);
}catch(O){
E="[]";
}
var f="&tid="+_.traceid+"&uin="+uin+"&key="+key+"&ticket="+(_.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+_.adid+"&ad_engine="+d+"&pos_type="+s+"&exp_id="+T+"&exp_value="+E+"&r="+Math.random();
if(_.report_param=f,_.use_new_protocol){
if(p.product_type===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||p.product_type===AD_TYPE.IOS_APP_PRODUCT_TYPE){
var g=require("a/app_card.js"),A=15,y=_.pkgname&&_.pkgname.replace(/\./g,"_"),w=document.getElementById("js_ad_btn_"+s);
new g({
btn:w,
adData:_,
report_param:f,
pos_type:s,
url_scheme:_.url_scheme,
via:[_.traceid,_.adid,y,source,A,d].join("."),
ticket:_.ticket,
appdetail_params:["&aid="+_.adid,"traceid="+_.traceid,"pkgname="+y,"source="+source,"type="+A,"engine="+d,"appuin="+biz,"pos_type="+s,"ticket="+_.ticket,"scene="+scene].join("&"),
engine:d
});
}else if(p.product_type==AD_TYPE.ADD_CONTACT_PRODUCT_TYPE){
var D=require("a/profile.js");
new D({
btnProfile:document.getElementById("js_ad_btn_"+s),
btnViewProfile:document.getElementById("js_view_profile_"+s),
btnAddContact:document.getElementById("js_add_contact_"+s),
adData:_,
pos_type:s,
report_param:f,
aid:_.adid,
ad_engine:d,
a_info:p
});
}
9==p.material_type&&(p.report_param=f,videoAdMap[p.aid]=new VideoAd(p));
}else{
if("100"==_.pt||"115"==_.pt){
var D=require("a/profile.js");
return void new D({
btnViewProfile:document.getElementById("js_view_profile_"+s),
btnAddContact:document.getElementById("js_add_contact_"+s),
adData:_,
pos_type:s,
report_param:f,
aid:_.adid,
ad_engine:d,
a_info:p
});
}
if("102"==_.pt){
var b=require("a/android.js"),A=15,y=_.pkgname&&_.pkgname.replace(/\./g,"_");
return void new b({
btn:document.getElementById("js_app_action_"+s),
adData:_,
report_param:f,
task_ext_info:[_.adid,_.traceid,y,source,A,d].join("."),
via:[_.traceid,_.adid,y,source,A,d].join(".")
});
}
if("101"==_.pt){
var I=require("a/ios.js");
return void new I({
btn:document.getElementById("js_app_action_"+s),
adData:_,
ticket:_.ticket,
report_param:f
});
}
if("105"==_.pt)return void new Card({
btn:document.getElementById("js_card_action_"+s),
adData:_,
report_param:f,
pos_type:s
});
if("106"==_.pt)return void new MpShop({
btn:document.getElementById("js_shop_action_"+s),
adData:_,
report_param:f,
pos_type:s
});
if("103"==_.pt||"104"==_.pt||"111"==_.pt||"112"==_.pt||"113"==_.pt||"114"==_.pt||"121"==_.pt||"122"==_.pt){
var g=require("a/app_card.js"),A=15,y=_.pkgname&&_.pkgname.replace(/\./g,"_");
return void new g({
btn:document.getElementById("js_appdetail_action_"+s),
js_app_rating:document.getElementById("js_app_rating_"+s),
adData:_,
report_param:f,
pos_type:s,
url_scheme:_.url_scheme,
via:[_.traceid,_.adid,y,source,A,d].join("."),
ticket:_.ticket,
appdetail_params:["&aid="+_.adid,"traceid="+_.traceid,"pkgname="+y,"source="+source,"type="+A,"engine="+d,"appuin="+biz,"pos_type="+s,"ticket="+_.ticket,"scene="+scene].join("&"),
engine:d
});
}
if("108"==_.pt||"109"==_.pt||"110"==_.pt||"116"==_.pt||"117"==_.pt){
var x=require("a/sponsor.js");
new x({
adDetailBtn:document.getElementById("js_ad_detail"),
adMoreBtn:document.getElementById("js_ad_more"),
adAbout:document.getElementById("js_btn_about"),
adImg:document.getElementById("js_main_img"),
adMessage:document.getElementById("js_ad_message"),
adVideo:document.getElementById("js_video_container"),
adComplain:document.getElementById("js_btn_complain"),
adData:_,
a_info:p,
pos_type:s,
report_param:f
});
}
"118"==p.pt&&(_.report_param=f),"125"==p.pt&&(p.report_param=f,videoAdMap[p.aid]=new VideoAd(p));
}
}
}
}(e);
var t=document.getElementById("js_article");
t&&t.addEventListener("click",function(e){
if(e.target){
var t=e.target.className;
try{
-1===t.indexOf("js_ad_opt_list_btn")&&-1===t.indexOf("js_mpad_more")&&hideComplainBtns();
}catch(a){
log("[ad] js_article click");
}
}
});
}
function isCanvasAd(e){
return!!e.canvas_info&&e.dest_type===AD_CONFIG.AD_DEST_TYPE.CANVAS_AD_DEST_TYPE;
}
function launchIosAppBackup(e,t,a,i,o,n,_,p,r,s,d,l,c){
return isCanvasAd(d)?void utils.openCanvasAd({
canvasId:d.canvas_info.canvas_id,
adInfoXml:d.canvas_info.ad_info_xml,
pos_type:r,
report_param:c,
url:e
}):d.dest_type!==AD_CONFIG.AD_DEST_TYPE.OUTER_DEST_TYPE||utils.isItunesLink(e)?d.dest_type===AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE?void Wxopen_card.openWxopen(s):d.dest_type===AD_CONFIG.AD_DEST_TYPE.WECHAT_SHOP_DEST_TYPE?void openUrlWithExtraWebview(urlParser.join(e,{
outer_id:s.outer_id
})):void utils.openWebAppStore(d.app_info.appinfo_url,l):void handleH5(e,t,a,i,o,n,_,p,r,s,d);
}
function handleApp(e,t,a,i,o,n,_,p,r,s,d,l,c){
console.info("[广告处理下载事件]",d);
var m=arguments;
if(d.has_installed&&!utils.isItunesLink(d.app_info.appinfo_url)&&d.app_info.url_scheme)return JSAPI.invoke("launchApplication",{
schemeUrl:d.app_info.url_scheme
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=d.app_info.url_scheme);
}),!0;
if(utils.isItunesLink(d.app_info.appinfo_url)){
if(d.app_info.url_scheme&&mmversion.gtVersion("6.5.6",!0)){
var u=1,f=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);
f&&f[1]&&parseInt(f[1].split("_")[0],10)>=12&&(u=0);
var g={
schemeUrl:d.app_info.url_scheme,
messageExt:d.app_info.url_scheme,
appID:d.app_info.open_platform_appid
};
d.product_type===AD_TYPE.IOS_APP_PRODUCT_TYPE&&utils.extend(g,{
installSchemeUrl:d.app_info.appinfo_url,
installAction:u
}),JSAPI.invoke("launchApplication",g,function(e){
(-1===e.err_msg.indexOf("ok")||"fail"===e.launchInstallResult)&&launchIosAppBackup.apply(null,m);
});
}else launchIosAppBackup.apply(null,m);
return!0;
}
if(d.product_type!==AD_TYPE.ANDROID_APP_PRODUCT_TYPE&&d.product_type!==AD_TYPE.IOS_APP_PRODUCT_TYPE)return!1;
if(isCanvasAd(d))return utils.openCanvasAd({
canvasId:d.canvas_info.canvas_id,
adInfoXml:d.canvas_info.ad_info_xml,
pos_type:r,
report_param:c,
url:e
}),!0;
if(-1==e.indexOf("mp.weixin.qq.com"))e="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(e);else if(-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show")){
var A={
source:4,
tid:t,
idx:a,
mid:i,
appuin:o,
pt:n,
aid:_,
ad_engine:p,
pos_type:r
},y=window.__report;
if(s||-1!=e.indexOf("mp.weixin.qq.com/mp/ad_app_info")){
var D="",v="";
s&&(D=s.pkgname&&s.pkgname.replace(/\./g,"_"),v=s.channel_id||""),A={
source:4,
tid:t,
traceid:t,
mid:i,
idx:a,
appuin:o,
pt:n,
channel_id:v,
aid:_,
engine:p,
pos_type:r,
pkgname:D
};
}
e=urlParser.join(e,A),(0==e.indexOf("http://mp.weixin.qq.com/promotion/")||0==e.indexOf("https://mp.weixin.qq.com/promotion/"))&&(e=urlParser.join(e,{
traceid:t,
aid:_,
engine:p
})),!_&&y&&y(80,e);
}
return openUrlWithExtraWebview(e),!0;
}
function handleH5(e,t,a,i,o,n,_,p,r,s,d){
if(console.info("[广告处理H5事件]",d),-1==e.indexOf("mp.weixin.qq.com"))e="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(e);else if(-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show")){
var l={
source:4,
tid:t,
idx:a,
mid:i,
appuin:o,
pt:n,
aid:_,
ad_engine:p,
pos_type:r
},c=window.__report;
if(("104"==n||"113"==n||"114"==n||"122"==n)&&s||-1!=e.indexOf("mp.weixin.qq.com/mp/ad_app_info")){
var m="",u="";
s&&(m=s.pkgname&&s.pkgname.replace(/\./g,"_"),u=s.channel_id||""),l={
source:4,
tid:t,
traceid:t,
mid:i,
idx:a,
appuin:o,
pt:n,
channel_id:u,
aid:_,
engine:p,
pos_type:r,
pkgname:m
};
}
e=urlParser.join(e,l),(0==e.indexOf("http://mp.weixin.qq.com/promotion/")||0==e.indexOf("https://mp.weixin.qq.com/promotion/"))&&(e=urlParser.join(e,{
traceid:t,
aid:_,
engine:p
})),!_&&c&&c(80,e);
}
console.info("[广告H5落地页最终URL]",e),openUrlWithExtraWebview(e);
}
var mmversion=require("biz_wap/utils/mmversion.js"),Sign=require("a/a_sign.js"),openUrl=require("biz_wap/utils/openUrl.js"),getParaList=require("biz_common/utils/get_para_list.js"),showTime=require("biz_wap/utils/show_time.js"),urlParser=require("biz_common/utils/url/parse.js"),DomEvent=require("biz_common/dom/event.js"),AdClickReport=require("a/a_report.js").AdClickReport,ajax=require("biz_wap/utils/ajax.js"),position=require("biz_wap/utils/position.js"),Card=require("a/card.js"),Wxopen_card=require("a/wxopen_card.js"),MpShop=require("a/mpshop.js"),JSAPI=require("biz_wap/jsapi/core.js"),TMPL=require("biz_common/tmpl.js"),a_tpl=require("a/a_tpl.html.js"),sponsor_a_tpl=require("a/sponsor_a_tpl.html.js"),cpc_a_tpl=require("a/cpc_a_tpl.html.js"),Class=require("biz_common/dom/class.js"),LS=require("biz_wap/utils/storage.js"),log=require("appmsg/log.js"),CrtManager=require("a/tpl/crt_tpl_manager.js"),classList=require("biz_common/dom/class.js"),AD_CONFIG=require("a/a_config.js"),VideoAd=require("a/video.js"),utils=require("a/a_utils.js"),commonUtils=require("common/utils.js"),offset=require("biz_common/dom/offset.js"),appDialogConfirm=require("a/appdialog_confirm.js"),wxgSpeedSdk=require("biz_common/utils/wxgspeedsdk.js"),jsmonitorReport=require("biz_wap/utils/jsmonitor_report.js"),WebComptAd=require("a/web_compt_ad.js"),videoTailUtils=require("video/video_tail_utils.js"),adLS=new LS("ad"),lsKey=[window.biz,window.sn,window.mid,window.idx].join("_"),globalAdDebug=!!urlParser.getQuery("mock")||!!urlParser.getQuery("rtx"),AD_TYPE=AD_CONFIG.AD_TYPE,AD_POS=AD_CONFIG.AD_POS,pos_type=window.pos_type||0,__report=window.__report,js_bottom_ad_area=document.getElementById("js_bottom_ad_area"),js_sponsor_ad_area=document.getElementById("js_sponsor_ad_area"),el_gdt_areas={
pos_3:js_sponsor_ad_area,
pos_0:js_bottom_ad_area
},adElCountMapByPos={},contentWrp=document.getElementById("js_content"),msgPageWrp=document.getElementById("page-content"),ad_render_object={
pos_3:null,
pos_0:null
},gdt_as={
pos_3:js_sponsor_ad_area?js_sponsor_ad_area.getElementsByClassName("js_ad_link"):[],
pos_0:js_bottom_ad_area?js_bottom_ad_area.getElementsByClassName("js_ad_link"):[]
},ping_apurl={
pos_0:!1,
pos_1:!1,
pos_3:!1
},ping_cpm_apurl={
pos_0:{},
pos_1:{},
pos_3:{}
},isScroll=!1,isSee=!1,openUrlWithExtraWebview=openUrl.openUrlWithExtraWebview,see_ad_detail_report=[!1,!1,!1,!1,!1,!1],see_ad_detail_first_see_time=0,ad_engine=0;
window.adDatas={
ads:{},
num:0
};
var adDatas=window.adDatas,has_click={},videoAdMap={},isVideoSharePageOnlyAd=utils.isVideoSharePageOnlyAd(),paragraphList=void 0;
return AdFrame.prototype.initMidAd=function(e,t){
insertAutoAdElement(e,!0,t,this.midAdDataCount);
var a=document.getElementsByTagName("mpcpc")[t];
a&&(this.aInfoMap[e.aid].iframeEle=createAdFrame(a,e),__report&&__report(125),utils.report115849("0"));
},AdFrame.prototype.initAdBeforeVideo=function(e){
for(var t=[],a=[],i=0;i<this.iframes.length;i++){
var o=this.iframes[i];
if(t.push(o.getAttribute("data-src")),a.push(o.src),isVideoFrameHasVid(o,e.vid)){
var n=this.aInfoMap[e.aid],_=document.createElement("div");
_.className="mpad_relative";
var p=o.nextSibling;
commonUtils.insertAfter(_,o),_.appendChild(o);
var r=createAdFrame(_,e);
return classList.addClass(r,"mpad_absolute"),n.iframeEle=r,n.heightWidthRate=parseInt(o.style.height,10)/parseInt(o.style.width,10),
o.adVidFromAppmsg=e.vid,setTimeout(function(){
o.contentWindow?o.contentWindow.adVidFromAppmsg=e.vid:utils.report115849(51),utils.postMessage(o.contentWindow,AD_CONFIG.SEND_AD_VID_ACTION,{
adVidFromAppmsg:e.vid
});
},0),p&&_.appendChild(p),void(0===e.is_mp_video?utils.report115849(1):commonUtils.report120081(3));
}
}
},AdFrame.prototype.responseVideoGetAdVid=function(e){
for(var t=0;t<this.iframes.length;t++)if(e===this.iframes[t].contentWindow&&this.iframes[t].adVidFromAppmsg)return void utils.postMessage(e,AD_CONFIG.SEND_AD_VID_ACTION,{
adVidFromAppmsg:this.iframes[t].adVidFromAppmsg
});
utils.postMessage(e,AD_CONFIG.SEND_AD_VID_ACTION,{});
},AdFrame.prototype.initAdAfterVideo=function(e){
var t=document.getElementById("js_tail_video_ad_area"),a=createAdFrame(t,e);
this.aInfoMap[e.aid].heightWidthRate=t.offsetHeight/t.offsetWidth,this.aInfoMap[e.aid].iframeEle=a,
this.aInfoMap[e.aid].tailAdArea=t;
},AdFrame.prototype.initBottomAd=function(e){
this.aInfoMap[e.aid].iframeEle=createAdFrame(js_bottom_ad_area,e),utils.report115849(9);
},AdFrame.prototype.initSponsorAd=function(e){
this.aInfoMap[e.aid].iframeEle=createAdFrame(js_sponsor_ad_area,e),utils.report115849(63);
},AdFrame.prototype.onFrameReady=function(e){
var t,a="";
if(utils.report115849(99),(new Image).src="http://pingfore.qq.com/pingd?dm=wxa.wxs.qq.com&url=/tmpl/biz_frame_ready.html&rdm=-&rurl=-&rarg=-&pvid=NoCookie&scr=1080x1920&scl=24-bit&lang=zh-cn&java=0&pf=MacIntel&tz=-8&flash=-&ct=-&vs=tcss.3.1.5&ext=ls%3Dwxa.wxs.qq.com/tmpl/base_tmpl.html%3Btm%3D5&hurlcn=&reserved1=-1&tt=&rand="+Math.round(1e5*Math.random()),
this.mapInfoMap(function(a,i,o){
i.contentWindow===e&&(t=o);
}),t){
var i=t.iframeEle.parentNode,o="8"===window.item_show_type&&commonUtils.isNativePage();
t.aInfo.pos_type===AD_POS.POS_MID&&(a=i&&i.dataset&&i.dataset.category_id_list),
postMessageToAdFrame(e,AD_CONFIG.SET_PAGE_DATA_ACTION_NAME,{
biz:window.biz,
uin:window.uin,
scene:window.scene,
source:window.source,
idx:window.idx,
mid:window.mid,
isSg:window.isSg,
userUin:window.user_uin,
sn:window.sn,
appmsgid:window.appmsgid,
sendTime:window.send_time||"",
passTicket:decodeURIComponent(window.pass_ticket),
globalAdDebug:globalAdDebug,
bodyScrollTop:commonUtils.getScrollTop(),
contentOffsetHeight:msgPageWrp?msgPageWrp.offsetHeight:0,
adOffsetTop:offset.getOffset(t.iframeEle).offsetTop,
screenHeight:commonUtils.getInnerHeight(),
midCategoryIdList:a,
heightWidthRate:t.heightWidthRate,
createIframeTime:t.iframeEle.createIframeTime,
skin:o?"black":"white",
appid:this.appid,
pageUrl:location.href
}),postMessageToAdFrame(e,"setAdDataV2",t.aInfo);
}
},AdFrame.prototype.mapInfoMap=function(e,t){
for(var a in this.aInfoMap){
{
var i=this.aInfoMap[a],o=i.iframeEle;
i.aInfo.pos_type===AD_POS.POS_AD_AFTER_VIDEO;
}
this.aInfoMap.hasOwnProperty(a)&&o&&(!t||t&&t===a)&&e&&e(i.aInfo,o,i);
}
},AdFrame.prototype.broadcastAdFrame=function(e,t){
this.mapInfoMap(function(a,i){
postMessageToAdFrame(i.contentWindow,e,t);
});
},AdFrame.prototype.hasVideoPlayingInScreen=function(e,t){
try{
for(var a=e+t,i=0;i<this.iframes.length;i++){
var o=this.iframes[i],n=offset.getOffset(o).offsetTop;
if(("play"===o.contentWindow.videoStatus||"loading"===o.contentWindow.videoStatus)&&a>n&&e<n+o.offsetHeight)return!0;
}
}catch(_){
return!1;
}
},AdFrame.prototype.bindScrollEvent=function(){
var e=this;
commonUtils.bindDebounceScrollEvent(function(){
var t=commonUtils.getScrollTop(),a=commonUtils.getInnerHeight();
e.mapInfoMap(function(i,o){
var n=offset.getOffset(o).offsetTop;
postMessageToAdFrame(o.contentWindow,"pageScrollV2",{
bodyScrollTop:t,
adOffsetTop:n,
screenHeight:a,
hasVideoPlayingInScreen:e.hasVideoPlayingInScreen(t,a)
});
});
});
},AdFrame.prototype.checkApiInvokeValid=function(e){
if(!this.aInfoMap[e.aid])return"Invalid aid";
var t=e.proxyData||{},a=this.aInfoMap[e.aid].aInfo,i=t.methodName;
return-1===AD_CONFIG.AD_JSAPI_WHITE_LIST.indexOf(i)?invalidMsg(AD_CONFIG.INVALID_METHOD_NAME_MSG_PREFIX,i):"addContact"!==i&&"profile"!==i||a&&a.biz_info&&t.args.username===a.biz_info.user_name?!0:invalidMsg(AD_CONFIG.INVALID_ARGS_MSG_PREFIX,"Invalid biz username");
},AdFrame.prototype.changeFrameStyle=function(e){
if(this.aInfoMap[e.aid]){
var t=this.aInfoMap[e.aid].iframeEle;
if(e.display===!1?classList.addClass(t,AD_CONFIG.AD_IFRAME_HIDE_CLASS):e.display===!0&&classList.removeClass(t,AD_CONFIG.AD_IFRAME_HIDE_CLASS),
e.height&&(t.style.height=e.height),isVideoSharePageOnlyAd&&handleVideoSharePage(parseInt(e.height,10)),
this.aInfoMap[e.aid].aInfo.pos_type===AD_POS.POS_BOTTOM&&!this.hasReportBottomTime&&"5"===window.item_show_type){
var a=Date.now()-window.logs.pagetime.page_begin;
if(this.hasReportBottomTime=!0,Math.random()>.1)return;
wxgSpeedSdk.saveSpeeds({
uin:window.uin,
pid:675,
speeds:[{
sid:28,
time:a
}]
}),wxgSpeedSdk.send();
}
}
},AdFrame.prototype.commonRequest=function(e,t){
var a=t.proxyData||{},i=a.args||{};
return-1===AD_CONFIG.AD_REQ_PATH_WHITE_LIST.indexOf(i.path)?void proxyCallback(e,t,{
err_msg:invalidMsg(AD_CONFIG.INVALID_REQ_PATH_MSG_PREFIX,i.path)
}):(ajax({
type:i.requestType,
url:i.path+"?"+(i.requestQuery||""),
data:i.requestBody||{},
mayAbort:!0,
success:function(a){
proxyCallback(e,t,{
err_msg:"request:success",
response:a
});
},
error:function(a,i){
proxyCallback(e,t,{
err_msg:"request:error",
xhr:a,
err_info:i
});
}
}),void("/mp/advertisement_report"===i.path&&i.requestQuery.indexOf("report_type=2")>-1&&utils.report115849(38)));
},AdFrame.prototype.onJsapiProxy=function(e,t){
function a(a){
proxyCallback(e,t,a),"openUrlWithExtraWebview"===i.methodName&&-1===a.err_msg.indexOf("ok")&&(location.href=i.args.url);
}
var i=t.proxyData||{},o=this.checkApiInvokeValid(t);
if("string"==typeof o)return void proxyCallback(e,t,{
err_msg:o
});
if("handleMPPageAction"===i.methodName&&"closeAdWebview"===i.args.action)return void videoTailUtils.showTailPanel(!0);
try{
"on"===i.methodType?JSAPI[i.methodType](i.methodName,a):JSAPI[i.methodType](i.methodName,i.args,a);
}catch(n){
console.error(n),proxyCallback(e,t,{
err_msg:invalidMsg(AD_CONFIG.INVALID_METHOD_TYPE_MSG_PREFIX,i.methodType)
});
}
"adDataReport"===i.methodName&&1===i.args.need_record_page_operation&&utils.report115849(41);
},AdFrame.prototype.onProxy=function(e,t){
if("jsapi"===t.proxyType)return void this.onJsapiProxy.apply(this,arguments);
var a=t.proxyData||{};
if("bizapi"===t.proxyType){
if("appDialogConfirm"===a.methodName)return void androidAppDialogConfirm.apply(this,arguments);
if("request"===a.methodName)return void this.commonRequest.apply(this,arguments);
if("addIdKeyReport"===a.methodName)return void(window.__addIdKeyReport&&window.__addIdKeyReport(a.args.id,a.args.key,a.args.val));
"removeADCache"===a.methodName&&adLS.remove(lsKey);
}
},AdFrame.prototype.bindAppVideoEvent=function(){
var e=this;
"5"===window.item_show_type&&(commonUtils.isNativePage()||commonUtils.isWcSlPage())&&this.hasAdAfterVideo?videoTailUtils.onReceiveMPPageData(function(t){
t.data===AD_CONFIG.GET_AD_DATA_AFTER_VIDEO_ACTION_NAME&&e.newAdInfos.map(function(e){
e.pos_type===AD_POS.POS_AD_AFTER_VIDEO&&videoTailUtils.sendMPPageData(JSON.stringify({
aInfo:e,
dataType:"adData"
}),"adWeb");
});
}):location.href.indexOf("/mp/authreadtemplate")>-1&&videoTailUtils.setTailOpts({
hasAd:this.hasAdAfterVideo,
showAd:function(){
e.mapInfoMap(function(e,t,a){
e.pos_type===AD_POS.POS_AD_AFTER_VIDEO&&(postMessageToAdFrame(t.contentWindow,AD_CONFIG.SET_PAGE_DATA_ACTION_NAME,{
heightWidthRate:a.tailAdArea.offsetHeight/a.tailAdArea.offsetWidth
}),postMessageToAdFrame(t.contentWindow,AD_CONFIG.AD_PLAY_VIDEO_ACTION,""));
});
}
});
},AdFrame.prototype.bindAdEvent=function(){
var e=this,t=document.getElementById("js_article");
utils.listenMessage(window,function(t,a){
var i=a.action,o=a.value||{};
if(i===AD_CONFIG.AD_VIDEO_PLAY_ACTION&&o.playAd&&utils.report115849(35),i===AD_CONFIG.AD_VIDEO_PLAY_ACTION&&(o.vid||o.aid))return o.playAd&&utils.report115849(25),
e.mapInfoMap(function(e,t){
var a=e.vid&&e.vid===o.vid;
a||e.aid===o.aid?a&&(postMessageToAdFrame(t.contentWindow,AD_CONFIG.AD_PLAY_VIDEO_ACTION,""),
o.playAd&&utils.report115849(21)):postMessageToAdFrame(t.contentWindow,"pauseVideoV2","");
}),void(o.aid&&utils.broadcastFrame(e.iframes,AD_CONFIG.AD_VIDEO_PLAY_ACTION,"","vid="));
if("mpvideo_broadcast_statusChange"===a.type)return void(t.source.videoStatus=a.data.status);
if(a.action===AD_CONFIG.GET_AD_VID_ACTION&&e.responseVideoGetAdVid(t.source),t.origin!==AD_CONFIG.AD_FRAME_DOMAIN);else switch(i){
case"onFrameReadyV2":
e.onFrameReady(t.source);
break;

case"onProxyV2":
e.onProxy(t.source,o);
break;

case"changeFrameStyle":
e.changeFrameStyle(o);
break;

case"onVideoEndV2":
e.mapInfoMap(function(t){
utils.broadcastFrame(e.iframes,AD_CONFIG.AD_VIDEO_END_ACTION,"","vid="+t.vid);
},o.aid);
}
}),t&&t.addEventListener("click",function(){
e.broadcastAdFrame("clickOutsideV2","");
}),this.bindScrollEvent();
},AdFrame.prototype.handleAdWithFrame=function(){
var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=arguments.length<=1||void 0===arguments[1]?0:arguments[1],a=arguments[2],i=0,o=this;
this.midAdDataCount=t,this.newAdInfos=e,this.appid=a,e.forEach(function(e){
return o.aInfoMap[e.aid]={
aInfo:e
},e.pos_type===AD_POS.POS_MID?(o.initMidAd(e,i),void i++):e.pos_type===AD_POS.POS_AD_BEFORE_VIDEO?(0===e.is_mp_video?utils.report115849(18):commonUtils.report120081(2),
void o.initAdBeforeVideo(e)):e.pos_type===AD_POS.POS_BOTTOM?void o.initBottomAd(e):e.pos_type===AD_POS.POS_AD_AFTER_VIDEO?(o.hasAdAfterVideo=!0,
void(commonUtils.isWcSlPage()?videoTailUtils.setHasAdData4WcSlPlayer(!0):commonUtils.isNativePage()?videoTailUtils.createTailWebview(!0):(utils.report115849(33),
o.initAdAfterVideo(e)))):e.pos_type===AD_POS.POS_SPONSOR?void o.initSponsorAd(e):void 0;
}),videoTailUtils.setTailOpts({
canCreateTailWebview:!0
}),e.length&&(this.bindAppVideoEvent(),this.bindAdEvent());
},initAdData(),{
checkNeedAds:checkNeedAds,
afterGetAdData:afterGetAdData
};
});define("rt/appmsg/getappmsgext.rt.js",[],function(){
"use strict";
return{
base_resp:{
ret:"number",
errmsg:"string",
wxtoken:"number"
},
advertisement_num:"number",
advertisement_info:[{
hint_txt_R:"string",
url_R:"string",
type_R:"string",
rl_R:"string",
apurl_R:"string",
traceid_R:"string",
group_id_R:"string",
ticket:"string",
aid:"string",
pt:"number",
image_url:"string",
ad_desc:"string",
biz_appid:"string",
pos_type:"number",
watermark_type:"number",
logo:"string",
app_info:{},
biz_info:{},
card_info:{}
}],
comment_enabled:"number",
appmsgticket:{
ticket:"string"
},
self_head_imgs:"string",
appmsgstat:{
ret:"number",
show:"boolean",
is_login:"boolean",
like_num:"number",
liked:"boolean",
read_num:"number",
real_read_num:"number"
},
timestamp:"number",
reward_total_count:"number",
reward_head_imgs:["string"]
};
});define("pages/video_communicate_adaptor.js",["pages/player_tips.js"],function(t){
"use strict";
function e(){
window.addEventListener("message",i,!1),p();
}
function i(t){
var e;
if(t.origin?e=t.origin:t.originalEvent&&(e=t.originalEvent.origin),/^http(s)?\:\/\/mp\.weixin\.qq\.com$/.test(e)&&t.source){
var i=t.data;
if(i&&i.type){
if(!/^mpvideo_/.test(i.type))return;
var o=i.type.replace(/^mpvideo_/,"");
/^broadcast_/.test(o)?u.postMessageEvt.broadcast({
data:i.data,
type:o
}):u.postMessageEvt[o]&&u.postMessageEvt[o](i.data);
}
}
}
function o(t){
var e=t.type.replace(/^broadcast_/,""),i=d();
if(i.length>0)for(var o=0,a=i.length;a>o;o++){
var r=i[o];
n({
win:r.contentWindow,
type:e,
data:t.data
});
}
n({
win:window,
type:e,
data:t.data
});
}
function n(t){
var e=t.type;
/^mpvideo_/.test(e)||(e="mpvideo_"+e);
var i={
data:t.data,
type:e
};
t.win.postMessage(i,document.location.protocol+"//mp.weixin.qq.com");
}
function a(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
t.msg&&new f({
msg:t.msg
});
}
function r(t){
for(var e=d({
vid:t.vid
}),i=0,o=e.length;o>i;i++){
var a=e[i];
a.style.display="";
var r=a.parentNode,s=r.querySelectorAll('.js_img_loading[data-vid="'+t.vid+'"]');
if(s&&s.length>0)for(var i=0,o=s.length;o>i;i++)r.removeChild(s[i]);
n({
type:"afterRemoveLoading",
win:a.contentWindow
});
}
}
function d(t){
t=t||{};
for(var e=document.getElementsByTagName("iframe"),i=[],o=0,n=e.length;n>o;o++){
var a=e[o],r=a.getAttribute("src");
if(window.__second_open__&&(r=a.getAttribute("data-realsrc")),r&&-1!=r.indexOf("/mp/videoplayer")){
if("undefined"!=typeof t.vid){
var d=r.match(/[\?&]vid\=([^&]*)/);
if(!d||!d[1]||d[1]!=t.vid)continue;
}
i.push(a);
}
}
return i;
}
function s(t){
if(t.height){
var e=d({
vid:t.vid
});
if(0!=e.length){
var i=e[0],o=i.offsetHeight+1*t.height;
i.setAttribute("height",o),i.setAttribute("data-additionalheight",t.height),i.style.setProperty&&i.style.setProperty("height",o+"px","important");
}
}
}
function v(t){
u.videoInfo[t.vid]||(u.videoInfo[t.vid]={}),u.videoInfo[t.vid].ori_status=t.ori_status,
u.videoInfo[t.vid].hit_bizuin=t.hit_bizuin,u.videoInfo[t.vid].hit_vid=t.hit_vid;
}
function p(){
"function"==typeof window.__getVideoWh&&window.addEventListener("resize",function(){
for(var t=d(),e=0,i=t.length;i>e;e++){
var o=t[e];
setTimeout(function(t){
return function(){
var e=window.__getVideoWh(t),i=e.w,o=e.h,n=1*t.getAttribute("data-additionalheight");
n&&(o+=n),t.setAttribute("width",i),t.setAttribute("height",o),t.style.setProperty&&(t.style.setProperty("width",i+"px","important"),
t.style.setProperty("height",o+"px","important"));
};
}(o),50);
}
},!1);
}
function g(){
return u.videoInfo;
}
var f=t("pages/player_tips.js"),u={
videoInfo:{},
postMessageEvt:{
broadcast:o,
removeVideoLoading:r,
addVideoIframeHeight:s,
videoInited:v,
showTips:a
}
};
return e(),{
getVideoInfo:g
};
});define("biz_wap/utils/ajax_wx.js",["biz_common/utils/string/html.js","biz_common/utils/url/parse.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js"],function(e){
"use strict";
function t(e){
var t={};
return"undefined"!=typeof uin&&(t.uin=uin),"undefined"!=typeof key&&(t.key=key),
"undefined"!=typeof pass_ticket&&(t.pass_ticket=pass_ticket),"undefined"!=typeof wxtoken&&(t.wxtoken=wxtoken),
"undefined"!=typeof window.devicetype&&(t.devicetype=window.devicetype),"undefined"!=typeof window.clientversion&&(t.clientversion=window.clientversion),
window.biz&&(t.__biz=window.biz),r.getQuery("enterid")&&(t.enterid=r.getQuery("enterid")),
"undefined"!=typeof appmsg_token?t.appmsg_token=appmsg_token:e.indexOf("advertisement_report")>-1&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=68064_13_1&r="+Math.random()),
t.x5=p?"1":"0",t.f="json",r.join(e,t);
}
function n(e,t){
return e.url.indexOf(t)>-1&&-1===e.url.indexOf("action=")&&(!e.data||!e.data.action);
}
function o(e){
var t=a.isIOS&&a.gtVersion("7.0.10",!0)||a.isAndroid&&a.gtVersion("7.0.12",!0);
s.invoke("currentMpInfo",{
userName:window.user_name,
brandName:t&&""===window.nickname?"未命名公众号":window.title,
title:window.msg_title||"",
brandIcon:hd_head_img.replace(/\/0$/,"/132"),
itemShowType:window.item_show_type,
isPaySubscribe:window.isPaySubscribe,
topBarStyle:t?1:0,
topBarShowed:e
},function(){});
}
function i(e){
console.log(e),/^(http:\/\/|https:\/\/|\/\/)/.test(e.url)?/^\/\//.test(e.url)&&(e.url="https:"+e.url):e.url="https://mp.weixin.qq.com/"+e.url.replace(/^\//,""),
e.url+=-1==e.url.indexOf("?")?"?fasttmplajax=1":"&fasttmplajax=1","html"==e.f||-1!=e.url.indexOf("?f=json")&&-1!=e.url.indexOf("&f=json")||(e.url+="&f=json"),
e.notJoinUrl||"html"==e.f||(e.url=t(e.url));
var i=null;
if("object"==typeof e.data){
var p=e.data;
i=[];
for(var d in p)p.hasOwnProperty(d)&&i.push(d+"="+encodeURIComponent(p[d]));
i=i.join("&");
}else i="string"==typeof e.data?e.data:null;
console.log("before request");
var m=1,c=function(e,t){
return s.invoke("request",{
url:e.url,
method:e.type,
data:t,
header:{
Cookie:document.cookie
}
},function(i){
if(console.log("jsapiRequest",i.err_msg),i.err_msg.indexOf(":ok")>-1){
n(e,"/mp/getappmsgext")&&(window.receiveGetAppmsgExt=i.statusCode+"|"+Date.now()),
n(e,"/mp/getappmsgad")&&(window.receiveGetAppmsgAd=i.statusCode+"|"+Date.now());
var p={};
if(i.data){
console.log(e.dataType),console.log(e);
try{
if(p="json"==e.dataType?JSON.parse(i.data):i.data,p&&p.base_resp&&1*p.base_resp.ret!==0&&"undefined"!=typeof window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&Math.random()<.001){
var d=e.url;
-1!==url.indexOf("?")&&(d=url.substr(0,url.indexOf("?")),r.getQuery("action",url)&&(d=d+"?action="+r.getQuery("action",url))),
("/mp/getappmsgext"!==d&&"/mp/getappmsgad"!==d||"undefined"!=typeof p.base_resp.ret)&&window.WX_BJ_REPORT.BadJs.report(d,"ret="+p.base_resp.ret,{
mid:window.PAGE_MID,
view:"wap_retcode"
});
}
}catch(u){
return console.error(u),void(e.error&&e.error({},{
type:1,
error:u
}));
}
}
var l={};
try{
l=JSON.parse(i.data);
}catch(u){}
l.base_resp&&"-3"==l.base_resp.ret&&m>0&&(a.isIOS||a.isAndroid&&window.clientversion>27000600)?(m--,
s.invoke("updatePageAuth",{},function(n){
if(console.log("updatePageAuth",n),(new Image).src="https://mp.weixin.qq.com/mp/jsmonitor?idkey=112287_3_1",
n&&n.err_msg&&n.err_msg.indexOf(":ok")>-1){
window.top.pass_ticket=encodeURIComponent(r.getQuery("pass_ticket",n.fullUrl).html(!1).replace(/\s/g,"+")),
e.pass_ticket&&(e.pass_ticket=window.top.pass_ticket),console.warn("[skeleton] updatePageAuth resetTopbar");
var i=a.isIOS&&a.gtVersion("7.0.10",!0);
if("0"===window.item_show_type&&i){
var s=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop||0;
o(s>40?!0:!1);
}
c(e,t),(new Image).src="https://mp.weixin.qq.com/mp/jsmonitor?idkey=112287_4_1";
}else e.success&&e.success(p);
})):e.success&&e.success(p);
}else if(i.err_msg.indexOf("no permission")>-1)Ajax(e),(new Image).src="https://mp.weixin.qq.com/mp/jsmonitor?idkey=112287_31_1";else{
e.error&&e.error({},i),(new Image).src="https://mp.weixin.qq.com/mp/jsmonitor?idkey=112287_32_1";
var w=.001;
if(Math.random()<w){
var f="request: "+JSON.stringify(e.type)+" "+JSON.stringify(e.url)+" ;;;; cookie: "+JSON.stringify(document.cookie)+" ;;;; data: "+JSON.stringify(t)+" ;;;; resp: "+JSON.stringify(i);
(new Image).src="https://badjs.weixinbridge.com/badjs?id=226&level=4&msg="+encodeURIComponent(f)+"&uin="+encodeURIComponent(window.uin)+"&from="+encodeURIComponent(window.location.href);
}
}
e.complete&&e.complete();
});
};
return n(e,"/mp/getappmsgext")&&(window.startGetAppmsgExtTime=Date.now()),n(e,"/mp/getappmsgad")&&(window.startGetAppmsgAdTime=Date.now()),
c(e,i);
}
e("biz_common/utils/string/html.js");
var r=e("biz_common/utils/url/parse.js"),s=e("biz_wap/jsapi/core.js"),a=e("biz_wap/utils/mmversion.js"),p=-1!=navigator.userAgent.indexOf("TBS/");
return{
ajax:i,
joinUrl:t
};
});define("biz_common/utils/respTypes.js",[],function(require,exports,module,alert){
"use strict";
var logList=[],log=function(r){
logList.push(r);
},printLog=function(){
for(var r=0,e=logList.length;e>r;++r)console.log("[RespType]"+logList[r]);
},isArray=function(r){
return"[object Array]"==Object.prototype.toString.call(r);
},getValueType=function(r){
return isArray(r)?"array":typeof r;
},parseRtDesc=function(r,e){
var t="mix",o=!1,c=e;
if(e){
var n="_R",s=e.indexOf(n),i=e.length-n.length;
o=-1!=s&&s==i,c=o?e.substring(0,i):e;
}
return"string"==typeof r?t=r:isArray(r)?t="array":"object"==typeof r&&(t="object"),
{
key:c,
type:t,
isRequired:o
};
},checkForArrayRtDesc=function(r,e){
if(!isArray(r))return!1;
for(var t=0,o=r.length;o>t;++t){
for(var c,n=r[t],s=0,i=0===e.length;c=e[s++];)if(checkForRtDesc(n,c)){
i=!0;
break;
}
if(!i)return!1;
}
return!0;
},checkForStringRtDesc=function(r,e){
var t=getValueType(r),o=parseRtDesc(e),c=o.type==t;
return c||log("miss match type : "+t+" !== "+o.type),c;
},checkForObjectRtDesc=function(r,e){
if("object"!=typeof r||isArray(r))return log("must be object"),!1;
var t=r,o=r;
for(var c in e)if(e.hasOwnProperty(c)){
var n=e[c],s=parseRtDesc(n,c),i=s.key;
o=t[i];
var u=getValueType(o);
if(s.isRequired&&void 0===o)return log("is required @key="+i),!1;
if(void 0!==o){
if(u!=s.type&&"mix"!=s.type)return log("miss match type : "+u+" !== "+s.type+" @key="+i),
!1;
if(("array"==u||"object"==u)&&"mix"!=s.type&&!checkForRtDesc(o,n))return!1;
}
}
return!0;
},checkForRtDesc=function(r,e){
return isArray(e)?checkForArrayRtDesc(r,e):"object"==typeof e?checkForObjectRtDesc(r,e):"string"==typeof e?checkForStringRtDesc(r,e):!1;
},check=function(json,rtDescs){
if("string"==typeof json)try{
json=eval("("+json+")");
}catch(e){
return log("parse json error"),!1;
}
if("object"!=typeof json)return log("must be object"),!1;
isArray(rtDesc)||(rtDescs=[rtDescs]);
for(var rtDesc,i=0;rtDesc=rtDescs[i++];)if(checkForRtDesc(json,rtDesc))return!0;
return!1;
};
return{
check:function(r,e){
logList=[];
try{
var t=check(r,e);
return t||printLog(),t;
}catch(o){
return logList.push("[rtException]"+o.toString()),printLog(),!1;
}
},
getMsg:function(){
return logList.join(";");
}
};
});define("biz_wap/utils/log.js",["biz_wap/utils/mmversion.js","biz_wap/jsapi/core.js"],function(i){
"use strict";
var s=i("biz_wap/utils/mmversion.js"),e=i("biz_wap/jsapi/core.js");
return function(i,n,o){
"string"!=typeof i&&(i=JSON.stringify(i)),n=n||"info",o=o||function(){};
var t;
s.isIOS?t="writeLog":s.isAndroid&&(t="log"),t&&e.invoke(t,{
level:n,
msg:"[WechatFe]"+i
},o);
};
});define("biz_wap/utils/localstorage.js",[],function(){
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
for(var e,o=localStorage.length,n=0,t=t||function(){};o>n&&(e=localStorage.key(n),
t.call(this,e,this.get(e))!==!1);n++)localStorage.length<o&&(o--,n--);
}
}:{
set:function(){},
get:function(){},
remove:function(){},
clear:function(){},
each:function(){}
};
});define("common/comm_report.js",["biz_wap/utils/ajax.js","biz_wap/utils/ajax_wx.js","biz_common/utils/comm_report.js","biz_wap/jsapi/leaveReport.js"],function(t){
"use strict";
var o=t("biz_wap/utils/ajax.js"),r=t("biz_wap/utils/ajax_wx.js").joinUrl,e=t("biz_common/utils/comm_report.js"),a=t("biz_wap/jsapi/leaveReport.js");
return{
report:function(t,r,a){
e.report("wap",o,t,r,a);
},
leaveReport:function(t,o){
a.addReport(function(){
return"function"==typeof o&&(o=o()),o?{
reportUrl:r("https://mp.weixin.qq.com"+e.getUrl("wap","report")),
reportData:e.getData(t,o,!0),
method:"POST"
}:!1;
});
}
};
});define("sougou/index.js",["appmsg/emotion/emotion.js","biz_common/tmpl.js","appmsg/emotion/dom.js","biz_wap/utils/ajax.js","biz_common/dom/event.js","biz_common/utils/string/html.js","sougou/a_tpl.html.js","appmsg/cmt_tpl.html.js","appmsg/my_comment_tpl.html.js"],function(e){
"use strict";
function t(e){
var t=document.getElementById("js_cover"),o=[];
t&&o.push(t);
var n=document.getElementById("js_content");
if(n)for(var m=n.getElementsByTagName("img")||[],s=0,r=m.length;r>s;s++)o.push(m.item(s));
for(var a=[],s=0,r=o.length;r>s;s++){
var p=o[s],l=p.getAttribute("data-src")||p.getAttribute("src");
l&&(a.push(l),function(t){
i.on(p,"click",function(){
return"ios"==e?window.JSInvoker&&window.JSInvoker.openImageList&&window.JSInvoker.openImageList(JSON.stringify({
index:t,
array:a
})):window.JSInvoker&&JSInvoker.weixin_openImageList&&window.JSInvoker.weixin_openImageList(JSON.stringify({
index:t,
array:a
})),!1;
});
}(s));
}
}
var o=e("appmsg/emotion/emotion.js"),n=e("biz_common/tmpl.js"),m=e("appmsg/emotion/dom.js"),i=(e("biz_wap/utils/ajax.js"),
e("biz_common/dom/event.js"));
e("biz_common/utils/string/html.js");
e("sougou/a_tpl.html.js"),e("appmsg/cmt_tpl.html.js");
if(document.getElementById("js_report_article3")&&(document.getElementById("js_report_article3").style.display="none"),
document.getElementById("js_toobar3")&&(document.getElementById("js_toobar3").style.display="none"),
function(){
var t=e("appmsg/my_comment_tpl.html.js"),o=document.createElement("div");
o&&(o.innerHTML=n.tmpl(t,{}),document.body.appendChild(o));
}(),new o.Emotion({
emotionPanel:m("#js_emotion_panel"),
inputArea:m("#js_cmt_input"),
emotionPanelArrowWrp:m("#js_emotion_panel_arrow_wrp"),
emotionSwitcher:m("#js_emotion_switch"),
emotionSlideWrapper:m("#js_slide_wrapper"),
emotionNavBar:m("#js_navbar"),
submitBtn:m("#js_cmt_submit")
}),navigator.userAgent.toLowerCase().match(/ios/)){
var s=navigator.userAgent.toLowerCase().match(/(?:sogousearch\/ios\/)(.*)/);
if(s&&s[1]){
var r=s[1].replace(/\./g,"");
parseInt(r)>422&&t("ios");
}
}else t("android");
window.onerror=function(e){
var t=new Image;
t.src="/mp/jsreport?key=86&content="+e+"&r="+Math.random();
};
});define("biz_wap/safe/mutation_observer_report.js",[],function(){
"use strict";
window.addEventListener&&window.addEventListener("load",function(){
window.__moonsafe_mutation_report_keys||(window.__moonsafe_mutation_report_keys={});
var e=window.moon&&moon.moonsafe_id||29715,o=window.moon&&moon.moonsafe_key||0,t=[],n={},r=function(e){
return"[object Array]"==Object.prototype.toString.call(e);
},s=function(e,o,s){
s=s||1,n[e]||(n[e]=0),n[e]+=s,o&&(r(o)?t=t.concat(o):t.push(o)),setTimeout(function(){
a();
},1500);
},a=function(){
var r=[],s=t.length,i=["r="+Math.random()];
for(var c in n)n.hasOwnProperty(c)&&r.push(e+"_"+(1*c+1*o)+"_"+n[c]);
for(var c=0;s>c&&!(c>=10);++c)i.push("log"+c+"="+encodeURIComponent(t[c]));
if(!(0==r.length&&i.length<=1)){
var _,d="idkey="+r.join(";")+"&lc="+(i.length-1)+"&"+i.join("&");
if(window.ActiveXObject)try{
_=new ActiveXObject("Msxml2.XMLHTTP");
}catch(w){
try{
_=new ActiveXObject("Microsoft.XMLHTTP");
}catch(f){
_=!1;
}
}else window.XMLHttpRequest&&(_=new XMLHttpRequest);
_&&(_.open("POST",location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?",!0),_.setRequestHeader("cache-control","no-cache"),
_.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
_.setRequestHeader("X-Requested-With","XMLHttpRequest"),_.onreadystatechange=function(){
4===_.readyState&&(t.length>10?(t=t.slice(10),a()):(t=[],n={}));
},t=[],n={},_.send(d));
}
};
try{
if(!window.__observer)return;
var i=window.__observer_data;
if(window.__observer.takeRecords){
var c=window.__observer.takeRecords();
if(c&&c.length){
i.count++;
var _=new Date;
c.forEach(function(e){
for(var o=e.addedNodes,t=0;t<o.length;t++){
var n=o[t];
if("SCRIPT"===n.tagName){
var r=n.src;
!r||/qq\.com/.test(r)||/weishi\.com/.test(r)||i.list.push(r);
}
}
}),i.exec_time+=new Date-_;
}
}
window.__observer.disconnect();
for(var d=window.__moonsafe_mutation_report_keys.observer||2,w=window.__moonsafe_mutation_report_keys.script_src||8,f=window.__moonsafe_mutation_report_keys.setattribute||9,u=window.__moonsafe_mutation_report_keys.ajax||10,m=25,v=0;v<i.list.length;v++){
var l=i.list[v],h=["[moonsafe][observer][url]:"+location.href,"[moonsafe][observer][src]:"+l,"[moonsafe][observer][ua]:"+navigator.userAgent];
i.list.length==v+1&&(h.push("[moonsafe][observer][count]:"+i.count),h.push("[moonsafe][observer][exec_time]:"+i.exec_time+"ms")),
s(d,h),"inlinescript_without_nonce"==l&&s(m,h);
}
var p=window.__danger_src;
if(p)for(var y=[{
key:"xmlhttprequest",
idkey:u
},{
key:"script_src",
idkey:w
},{
key:"script_setAttribute",
idkey:f
}],v=0;v<y.length;v++){
var b=y[v].key,g=p[b];
if(g&&g.length)for(var k=0;k<g.length;k++){
var h=["[moonsafe]["+b+"][url]:"+location.href,"[moonsafe]["+b+"][src]:"+g[k],"[moonsafe]["+b+"][ua]:"+navigator.userAgent];
s(y[v].idkey,h);
}
}
}catch(q){
var R=3,h=["[moonsafe][observer][exception]:"+q];
s(R,h);
}
},!1);
});define("appmsg/fereport.js",["biz_wap/utils/wapsdk.js","biz_common/utils/http.js","appmsg/log.js","biz_common/base64.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
function i(){
var e=window.performance||window.msPerformance||window.webkitPerformance;
if(e&&e.timing){
var i,n=e.timing,o=0,r=0,u=window.location.protocol,p=Math.random(),_=1>2*p,c=1>25*p,l=1>100*p,g=1>250*p,f=1>1e3*p,v=1>1e4*p,S=!0;
"https:"==u?(o=18,r=27,S=!1):"http:"==u&&(o=9,r=19);
var B=window.__wxgspeeds||{};
if(B&&B.moonloadtime&&B.moonloadedtime){
var h=B.moonloadedtime-B.moonloadtime;
i=localStorage&&JSON.parse(localStorage.getItem("__WXLS__moonarg"))&&"fromls"==JSON.parse(localStorage.getItem("__WXLS__moonarg")).method?21:22,
s.saveSpeeds({
sample:21==i||22==i&&f?1:0,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:i,
time:h
},
user_define:m
});
}
B&&B.mod_downloadtime&&s.saveSpeeds({
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:24,
time:B.mod_downloadtime
},
user_define:m
});
var b=n.domContentLoadedEventStart-n.navigationStart;
if(b>3e3&&(s.setBasicTime({
sample:l&&S||c&&!S?1:0,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:r
}),w.setLogs({
id:28307,
key:28,
value:1,
lc:1,
log0:window.encodeURIComponent(location.href)
})),0==window.optimizing_flag?s.setBasicTime({
sample:f,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:467
}):1==window.optimizing_flag?s.setBasicTime({
sample:l,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:468
}):2==window.optimizing_flag&&s.setBasicTime({
sample:l,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:469
}),s.setBasicTime({
sample:g&&S||l&&!S?1:0,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o
}),t.htmlSize){
var I=t.htmlSize/(n.responseEnd-n.connectStart);
s.saveSpeeds({
sample:f,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:25,
time:Math.round(I)
},
user_define:m
});
}
if(B&&B.combo_times)for(var R=1;R<B.combo_times.length;R++)s.saveSpeeds({
sample:g,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:26,
time:B.combo_times[R]-B.combo_times[R-1]
},
user_define:m
});
if(B&&B.mod_num){
var C=B.hit_num/B.mod_num;
s.saveSpeeds({
sample:g,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:[{
sid:27,
time:Math.round(100*C)
},{
sid:28,
time:Math.round(1e3*C)
}],
user_define:m
});
}
var U=window.logs.pagetime.jsapi_ready_time-n.navigationStart;
s.saveSpeeds(156==o||155==o?{
sample:_,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:31,
time:U
},
user_define:m
}:{
sample:f,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:31,
time:U
},
user_define:m
}),s.send(),window.setTimeout(function(){
window.__moonclientlog&&d("[moon] "+window.__moonclientlog.join(" ^^^ "));
},250),window.setTimeout(function(){
window.onBridgeReadyTime&&(i=window.WeixinJSBridge&&window.WeixinJSBridge._createdByScriptTag?33:32,
s.saveSpeeds({
sample:v,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:i,
time:window.onBridgeReadyTime-n.navigationStart
},
user_define:m
}),s.send());
},5e3);
}
}
function n(e){
for(var i=[],n=new DataView(e),o=0;o<n.byteLength;o+=4){
var s=n.getUint32(o),t=s.toString(16),d="00000000",a=(d+t).slice(-d.length);
i.push(a);
}
return i.join("");
}
function o(e,i){
var o=new TextEncoder("utf-8").encode(e),s=crypto.subtle||crypto.webkitSubtle;
return s.digest(i,o).then(function(e){
return n(e);
});
}
var s=e("biz_wap/utils/wapsdk.js"),t=e("biz_common/utils/http.js"),d=e("appmsg/log.js"),a=e("biz_common/base64.js"),w=e("biz_wap/utils/jsmonitor_report.js"),m=a.toBase64(JSON.stringify({
scene:window.source,
sessionid:window.sessionid
}));
i(),function(){
try{
var e=Math.random(),i=window.localStorage,n=[],t=[];
for(var d in i)-1!=d.indexOf("__MOON__")&&window.moon_map[d.substr(8)]&&n.push(i[d]);
if(window.crypto){
var w="";
w=.5>e?"SHA-256":"SHA-1";
for(var r=(new Date).getTime(),u=0;u<n.length;u++)t.push(o(n[u],w));
Promise.all(t).then(function(){
var i=(new Date).getTime(),n=i-r;
s.saveSpeeds({
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:108,
speeds:{
sid:.5>e?21:23,
time:n
},
user_define:m
}),s.send();
});
}else s.saveSpeeds({
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:108,
speeds:{
sid:24,
time:1
},
user_define:m
}),s.send();
}catch(p){}
}();
});