define("appmsg/pay_read_utils.js",["biz_wap/ui/weui.js","biz_wap/jsapi/core.js","biz_common/dom/event.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js","appmsg/pay_report_utils.js","common/utils.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js");
var i=e("biz_wap/jsapi/core.js"),n=e("biz_common/dom/event.js"),r=e("biz_wap/utils/mmversion.js"),a=e("biz_wap/utils/device.js"),t=e("appmsg/pay_report_utils.js"),o=e("common/utils.js"),s=function(e){
var i=arguments.length<=1||void 0===arguments[1]?document:arguments[1];
return i.querySelector(e);
},d=window.payFreeGift,w=document.documentElement&&document.documentElement.clientWidth||window.innerWidth;
try{
var u=s("#img-content");
if(u){
var _=u.getBoundingClientRect();
_.width&&(w=_.width);
}
}catch(p){
console.error(p);
}
var c=32,l=8,m='<div class="pay__tag-reward js_reward"></div>',f={
dom:{
payFee:[s("#js_pay_panel .js_pay_fee"),s("#js_pay_panel_bottom .js_pay_fee")],
wrap:s("#js_pay_wall_wrap"),
payNum:s("#js_pay_num"),
rewardNumWrap:s("#js_pay_reward_num_wrap"),
rewardNum:s("#js_pay_reward_num"),
wall:s("#js_pay_wall"),
giftBar:s("#js_pay_gift_bar"),
sendGift:s("#js_send_pay_gift")
},
perLine:null,
data:{}
},y=function(e){
e&&(/^http/.test(e)||(e=location.protocol+"//"+location.host+e),e.indexOf("#")<0&&(e+="#wechat_redirect"),
-1!==navigator.userAgent.indexOf("MicroMessenger")&&(r.isIOS||r.isAndroid||r.isWp)?i.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(i){
-1===i.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e);
},g=function(){
var e=f.dom,i=f.data,n=parseInt(i.pay_cnt,10);
e.payNum.innerHTML=n>=1e4||i.is_pay_cnt_cut?"en"===window.LANG?"10k+":"1万+":n+"",
i.rewardTotal?(e.rewardNum.innerHTML=i.rewardTotal+(i.rewardTotalCut?"+":""),e.rewardNumWrap.style.display=""):e.rewardNumWrap.style.display="none";
for(var r=3*f.perLine,a="",t=0,o=i.pay_head_imgs.length;o>t;t++){
var s=i.reward_status_list?i.reward_status_list[t]:0;
if(a+='<div class="pay__avatar-wrp"><img src="'+i.pay_head_imgs[t]+'">'+(s?m:"")+"</div>",
t>=r-1)break;
}
e.wall.innerHTML=a;
},h=function(){
var e=f.dom;
n.tap(e.payNum,function(){
y("/mp/paysub?action=evaluate_show_page&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&link="+encodeURIComponent(window.msg_link)+"&from_scene="+window.source+"&from_subscene="+window.subscene+"&is_fans="+window.isFans);
}),n.tap(e.rewardNum,function(){
var e=(Math.ceil((o.getInnerHeight()-188)/42)+1)*Math.floor((w-15)/42);
y("/mp/reward?act=getrewardheads&__biz="+window.biz+"&appmsgid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&offset=0&count="+e+"&source=1");
}),n.tap(e.sendGift,function(){
if(a.os.iphone||a.os.ipad||a.os.android){
var e=f.data.gift_url.html(),i="",n=e.indexOf("#");
-1!==n&&(i=e.substring(n),e=e.substring(0,n)),y(e+"&sessionid="+window.sessionid+"&enterid="+window.enterid+"&scene="+window.source+"&subscene="+window.subscene+i);
}else window.weui.alert("请使用移动端微信打开");
});
},v=function(e,i,n){
if(window.isPaySubscribe){
var a=f.dom;
if(e=JSON.parse(JSON.stringify(e)),!e.fee||window.isPaid||window.IAPProductInfo||!function(){
var i=Math.floor(e.fee/100);
a.payFee.forEach(function(e){
!window.iapPriceInfo.currency_symbol&&(e.innerHTML="￥"+i+".00"),e.parentNode.dataset.ready=1;
});
}(),r.isIOS&&e.fee&&(window.IAPProductInfo?("CNY"!==window.IAPProductInfo.currencyCode&&t.report110809(40),
t.reportOverseaPay(window.IAPProductInfo.currencyCode,100*window.IAPProductInfo.price.toFixed(2),1,window.IAPProductInfo.invokeTime,window.IAPProductInfo.countryCode,0,window.IAPProductInfo.err_msg+(window.IAPProductInfo.err_desc?"__"+window.IAPProductInfo.err_desc:""))):window.oriProductFee=Math.floor(e.fee/100)),
e.pay_cnt){
if(e.is_paid&&!d){
e.pay_head_imgs.unshift(e.my_head_img),e.reward_status_list instanceof Array?e.reward_status_list.unshift(e.my_reward_status):e.reward_status_list=[e.my_reward_status];
var o=3*f.perLine;
e.pay_head_imgs.length>o&&(e.pay_head_imgs=e.pay_head_imgs.slice(0,o));
}
e.rewardTotal=i.rewardTotal,e.rewardTotalCut=i.rewardTotalCut,f.data=e,a.wrap.style.height="",
a.wrap.style.marginTop="",a.wrap.style.visibility="visible",g(),!n&&h();
}else a.wrap.style.display="none";
a.giftBar&&(a.giftBar.style.display=window.payGiftsCount-e.gifted_count>0&&!d?"":"none");
}
},b=function(){
if(!window.isPaySubscribe)return 0;
if(null===f.perLine){
var e=c+l;
f.perLine=Math.floor(.8*w/e),f.dom.wall.parentNode.style.width=f.perLine*e-l+"px";
}
return f.perLine;
};
return{
init:v,
getCountPerLine:b
};
});define("appmsg/reward_utils.js",["biz_wap/ui/weui.js","appmsg/reward_entry.js","biz_wap/utils/mmversion.js","biz_common/dom/class.js","biz_common/dom/event.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js");
var r=e("appmsg/reward_entry.js"),n=e("biz_wap/utils/mmversion.js"),i=e("biz_common/dom/class.js"),a=e("biz_common/dom/event.js"),t=window.navigator.userAgent,d={
perLine:0,
hasBindResize:!1,
hasInit:!1,
pageContainerId:"img-content",
rewardInnerId:"js_reward_inner"
},s=function(e){
return document.getElementById(e);
},o=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=e.pageContainerId||d.pageContainerId,n=e.rewardInnerId||d.rewardInnerId,i=window.innerWidth||document.documentElement.clientWidth;
try{
var a=s(r).getBoundingClientRect();
a.width&&(i=a.width);
}catch(t){}
var o=36;
d.perLine=Math.floor(.8*i/o);
var w=s(n);
return w&&(w.style.width=d.perLine*o+"px"),d.perLine;
},w=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=e.pageContainerId||d.pageContainerId,i=e.rewardInnerId||d.rewardInnerId;
return e.can_reward&&s(n)&&s(i)?(d.hasBindResize||!function(){
d.hasBindResize=!0;
var n=window.innerWidth;
a.on(window,"resize",function(){
window.innerWidth!==n&&(n=window.innerWidth,o(e),d.hasInit&&r.render(d.perLine));
});
}(),d.perLine||o(e),d.perLine):0;
},_=function(e,o){
d.hasInit=!0;
var _=e.author_id||window.author_id;
e.reward_head_imgs=e.reward_head_imgs||[];
var m=s("js_author_name");
if(o.reward_entrance_enable_for_preview)if(n.isInMiniProgram)n.isInMiniProgram&&m&&i.removeClass(m,"rich_media_meta_link");else{
if(_||n.isAndroid){
var u=s("js_preview_reward_author");
u&&(u.style.display="block");
var p=s("js_preview_reward_author_wording");
o.reward_wording&&p&&(p.innerText=o.reward_wording,p.style.display="block");
var h=s("js_preview_reward_author_link");
h&&(window.item_show_type&&1*window.item_show_type===5||a.on(h,"tap",function(e){
e.preventDefault(),window.weui.alert("预览状态下无法操作");
}));
}
if(_){
var l=s("js_preview_reward_author_avatar"),c=s("js_preview_reward_author_head");
o.reward_author_head&&l&&c&&(c.setAttribute("src",o.reward_author_head),l.style.display="block");
var v=s("js_preview_reward_link_text");
v&&(v.innerText="喜欢作者");
}else n.isAndroid&&(s("js_preview_reward_author_name").style.display="none");
}else!n.isInMiniProgram&&(t.indexOf("WindowsWechat")>-1||n.isIOS||n.isAndroid)?(r.handle(e,w({
pageContainerId:o.pageContainerId,
rewardInnerId:o.rewardInnerId,
can_reward:1==e.can_reward?!0:!1
})),m&&e.rewardsn&&e.timestamp&&(m.setAttribute("data-rewardsn",e.rewardsn),m.setAttribute("data-timestamp",e.timestamp),
m.setAttribute("data-canreward",e.can_reward)),m&&!e.can_reward&&i.removeClass(m,"rich_media_meta_link")):m&&i.removeClass(m,"rich_media_meta_link");
};
return{
init:_,
getCountPerLine:w
};
});define("biz_common/ui/imgonepx.js",[],function(){
"use strict";
return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDQzA1MTVGNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDQzA1MTYwNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkNDMDUxNUQ2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkNDMDUxNUU2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6p+a6fAAAAD0lEQVR42mJ89/Y1QIABAAWXAsgVS/hWAAAAAElFTkSuQmCC";
});define("appmsg/malicious_wording.js",[],function(){
"use strict";
var i={
0:{
90041:"此标题包含夸大误导信息",
20012:"此标题包含低俗恶俗内容"
},
1:{
90041:"",
20012:""
},
2:{
90041:"此文章包含夸大误导信息",
20012:"此文章包含低俗恶俗内容"
}
},s={
0:{
90041:"标题使用夸大、煽动、低俗等词语造成误导或引人不适",
20012:"标题使用低俗或恶俗词语造成不正当影响或引人不适"
},
1:{
90041:"摘要包含误导、煽动的信息引人不适或造成微信用户混淆",
20012:"摘要包含低俗或恶俗内容造成不正当影响或引人不适"
},
2:{
90041:"文章包含误导、煽动的信息引人不适或造成微信用户混淆",
20012:"文章包含低俗或恶俗内容造成不正当影响或引人不适"
}
};
return{
maliciousTitleMap:i,
maliciousDescMap:s
};
});!function(n){
"use strict";
function t(n,t){
var r=(65535&n)+(65535&t),u=(n>>16)+(t>>16)+(r>>16);
return u<<16|65535&r;
}
function r(n,t){
return n<<t|n>>>32-t;
}
function u(n,u,e,o,c,f){
return t(r(t(t(u,n),t(o,f)),c),e);
}
function e(n,t,r,e,o,c,f){
return u(t&r|~t&e,n,t,o,c,f);
}
function o(n,t,r,e,o,c,f){
return u(t&e|r&~e,n,t,o,c,f);
}
function c(n,t,r,e,o,c,f){
return u(t^r^e,n,t,o,c,f);
}
function f(n,t,r,e,o,c,f){
return u(r^(t|~e),n,t,o,c,f);
}
function i(n,r){
n[r>>5]|=128<<r%32,n[(r+64>>>9<<4)+14]=r;
var u,i,h,a,g,l=1732584193,d=-271733879,v=-1732584194,C=271733878;
for(u=0;u<n.length;u+=16)i=l,h=d,a=v,g=C,l=e(l,d,v,C,n[u],7,-680876936),C=e(C,l,d,v,n[u+1],12,-389564586),
v=e(v,C,l,d,n[u+2],17,606105819),d=e(d,v,C,l,n[u+3],22,-1044525330),l=e(l,d,v,C,n[u+4],7,-176418897),
C=e(C,l,d,v,n[u+5],12,1200080426),v=e(v,C,l,d,n[u+6],17,-1473231341),d=e(d,v,C,l,n[u+7],22,-45705983),
l=e(l,d,v,C,n[u+8],7,1770035416),C=e(C,l,d,v,n[u+9],12,-1958414417),v=e(v,C,l,d,n[u+10],17,-42063),
d=e(d,v,C,l,n[u+11],22,-1990404162),l=e(l,d,v,C,n[u+12],7,1804603682),C=e(C,l,d,v,n[u+13],12,-40341101),
v=e(v,C,l,d,n[u+14],17,-1502002290),d=e(d,v,C,l,n[u+15],22,1236535329),l=o(l,d,v,C,n[u+1],5,-165796510),
C=o(C,l,d,v,n[u+6],9,-1069501632),v=o(v,C,l,d,n[u+11],14,643717713),d=o(d,v,C,l,n[u],20,-373897302),
l=o(l,d,v,C,n[u+5],5,-701558691),C=o(C,l,d,v,n[u+10],9,38016083),v=o(v,C,l,d,n[u+15],14,-660478335),
d=o(d,v,C,l,n[u+4],20,-405537848),l=o(l,d,v,C,n[u+9],5,568446438),C=o(C,l,d,v,n[u+14],9,-1019803690),
v=o(v,C,l,d,n[u+3],14,-187363961),d=o(d,v,C,l,n[u+8],20,1163531501),l=o(l,d,v,C,n[u+13],5,-1444681467),
C=o(C,l,d,v,n[u+2],9,-51403784),v=o(v,C,l,d,n[u+7],14,1735328473),d=o(d,v,C,l,n[u+12],20,-1926607734),
l=c(l,d,v,C,n[u+5],4,-378558),C=c(C,l,d,v,n[u+8],11,-2022574463),v=c(v,C,l,d,n[u+11],16,1839030562),
d=c(d,v,C,l,n[u+14],23,-35309556),l=c(l,d,v,C,n[u+1],4,-1530992060),C=c(C,l,d,v,n[u+4],11,1272893353),
v=c(v,C,l,d,n[u+7],16,-155497632),d=c(d,v,C,l,n[u+10],23,-1094730640),l=c(l,d,v,C,n[u+13],4,681279174),
C=c(C,l,d,v,n[u],11,-358537222),v=c(v,C,l,d,n[u+3],16,-722521979),d=c(d,v,C,l,n[u+6],23,76029189),
l=c(l,d,v,C,n[u+9],4,-640364487),C=c(C,l,d,v,n[u+12],11,-421815835),v=c(v,C,l,d,n[u+15],16,530742520),
d=c(d,v,C,l,n[u+2],23,-995338651),l=f(l,d,v,C,n[u],6,-198630844),C=f(C,l,d,v,n[u+7],10,1126891415),
v=f(v,C,l,d,n[u+14],15,-1416354905),d=f(d,v,C,l,n[u+5],21,-57434055),l=f(l,d,v,C,n[u+12],6,1700485571),
C=f(C,l,d,v,n[u+3],10,-1894986606),v=f(v,C,l,d,n[u+10],15,-1051523),d=f(d,v,C,l,n[u+1],21,-2054922799),
l=f(l,d,v,C,n[u+8],6,1873313359),C=f(C,l,d,v,n[u+15],10,-30611744),v=f(v,C,l,d,n[u+6],15,-1560198380),
d=f(d,v,C,l,n[u+13],21,1309151649),l=f(l,d,v,C,n[u+4],6,-145523070),C=f(C,l,d,v,n[u+11],10,-1120210379),
v=f(v,C,l,d,n[u+2],15,718787259),d=f(d,v,C,l,n[u+9],21,-343485551),l=t(l,i),d=t(d,h),
v=t(v,a),C=t(C,g);
return[l,d,v,C];
}
function h(n){
var t,r="";
for(t=0;t<32*n.length;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);
return r;
}
function a(n){
var t,r=[];
for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;
for(t=0;t<8*n.length;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;
return r;
}
function g(n){
return h(i(a(n),8*n.length));
}
function l(n,t){
var r,u,e=a(n),o=[],c=[];
for(o[15]=c[15]=void 0,e.length>16&&(e=i(e,8*n.length)),r=0;16>r;r+=1)o[r]=909522486^e[r],
c[r]=1549556828^e[r];
return u=i(o.concat(a(t)),512+8*t.length),h(i(c.concat(u),640));
}
function d(n){
var t,r,u="0123456789abcdef",e="";
for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+=u.charAt(t>>>4&15)+u.charAt(15&t);
return e;
}
function v(n){
return unescape(encodeURIComponent(n));
}
function C(n){
return g(v(n));
}
function s(n){
return d(C(n));
}
function A(n,t){
return l(v(n),v(t));
}
function m(n,t){
return d(A(n,t));
}
n.md5=function(n,t,r){
return t?r?A(t,n):m(t,n):r?C(n):s(n);
};
}("function"==typeof jQuery?jQuery:this);define("complain/utils/const.js",[],function(A,i,g){
"use strict";
g.exports={
WRAP_TAG:"span",
IMG_TAG:"IMG",
HIGHLIGHT_ID:"highlight-id",
IMG_ID:"img-id",
CAMEL_HIGHLIGHT_ID:"highlightId",
CAMEL_IMG_ID:"imgId",
NODE_TYPE:{
text:1,
img:2
},
placeHolder:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="
};
});define("complain/utils/dom.js",["complain/utils/utils.js","complain/utils/const.js"],function(e,t,n){
"use strict";
function r(e){
for(var t=arguments.length<=1||void 0===arguments[1]?"className":arguments[1],n=arguments.length<=2||void 0===arguments[2]?y:arguments[2],r=0;r<n.length;r++)if(e[t]&&"string"==typeof e[t]&&e[t].indexOf(n[r])>-1)return!0;
return!1;
}
function o(e){
var t=e.$blockNode,n=e.$node;
if(null===t)return null;
var r=[],o=[],a=0;
for(r.push(t);r.length>0;){
var i=r.pop();
if(3===i.nodeType&&i.nodeValue!==n.nodeValue)o.push(i),a+=i.textContent.length;else if(1===i.nodeType){
if(a+=1,i===n)break;
}else if(i.nodeValue===n.nodeValue){
a+=i.textContent.length;
break;
}
for(var d=i.childNodes,u=d.length-1;u>=0;u--)r.push(d[u]);
}
return a;
}
function a(e){
var t=_(e),n=+t.dataset.index,r=0,o={
$blockNode:t,
$node:e,
paraIndex:n,
offset:r
},a=g();
return{
start:o,
end:o,
id:a
};
}
function i(e){
return e.tagName===v||3===e.nodeType?e:e.childNodes[0];
}
function d(e,t,n,r){
e.style.setProperty?(r=r||null,e.style.setProperty(t,n,r)):"undefined"!=typeof e.style.cssText&&(r=r?"!"+r:"",
e.style.cssText+=";"+t+":"+n+r+";");
}
function u(e){
if(!e)return!1;
var t=e.nodeType,n=e.tagName;
return 3===t?!1:n===v?!0:!1;
}
function s(e){
return e.reduce(function(t,n,r){
if(0===r)return n.type===m.text?t.text.push(n.data):n.type===m.img&&t.pic.push(n.data),
t;
if(n.type===m.text){
if(e[r-1].type===m.text){
var o=t.text.pop();
o+=n.data,t.text.push(o);
}else t.text.push(n.data);
return t;
}
return n.type===m.img&&t.pic.push(n.data),t;
},{
audio:[],
pic:[],
video:[],
text:[]
});
}
function l(e,t){
b[t]=e;
}
function f(e){
var t=a(e),n=Q([{
$node:e,
type:m.img,
idx:t.start.paraIndex
}]),r=w(t),o=s(n);
return{
meta:{
anchorTree:n,
anchorMeta:r,
anchorBrief:o
},
range:t
};
}
function p(e,t){
var n=e.childNodes,r=t,o=null,a=0;
for(a=0;a<n.length;a++)if(o=n[a],3===o.nodeType){
var i=o.length;
if(i>r)break;
r-=i;
}
return{
$node:o,
cursor:r
};
}
var c=e("complain/utils/utils.js"),g=c.uuid,h=e("complain/utils/const.js"),x=h.WRAP_TAG,v=h.IMG_TAG,m=h.NODE_TYPE,N=["P","DIV","SECTION","LI","H1","H2","H3","H4","H5","H6","TABLE","PRE","BLOCKQUOTE"],y=["js_product_container","js_blockquote_wrap"],T=["IFRAME","VIDEO","MPVOICE","MPGONGYI","QQMUSIC","MPSHOP","MP-WEAPP","MP-MINIPROGRAM","MPPRODUCT","MPCPS"],$=["js_mpvideo"],I=["js_product_container"],b={},P=function(e){
var t=arguments.length<=1||void 0===arguments[1]?N:arguments[1];
if(!e||1!==e.nodeType)return!1;
for(var n=0;n<e.children.length;n++)if(-1!==t.indexOf(e.children[n].tagName))return!0;
return!1;
},C=function(e){
var t=e.parentNode;
return e.parentNode.removeChild(e),t.children&&t.children.length?!1:!0;
},S=function(e,t){
var n=t.getNestedStructure,o=void 0===n?!0:n,a=t.removeIgoreEle,i=void 0===a?!1:a,d=function u(e,t){
var n=e.children;
if(!n)return[];
if(!n.length)return n;
for(var o=void 0,a=[],d=0;d<n.length;d++)o=n[d],r(o,"id",$)||r(o,"className",I)?i&&(o.parentNode.removeChild(o),
d-=1):P(o,T)?i&&(C(o),d-=1):P(o,N)&&!r(o)?(a=a.concat(u(o,t)),t&&(o.getAttribute("data-index")||a.push(o))):o.getAttribute("data-index")||a.push(o);
return a;
}(e,o);
return[].slice.call(d);
};
S.paragraphStartIdx=1e6;
var O=function(e,t,n,r){
e.splitText(t);
var o=e.nextSibling;
return o.splitText(n-t),[{
$node:o,
type:m.text,
idx:r
}];
},_=function U(e){
return-1!==N.indexOf(e.tagName)&&"undefined"!=typeof e.dataset.index?e:U(e.parentNode);
},E=function(e){
var t=e.start,n=e.end,r=e.$container,o=t.$node,a=t.offset,i=n.$node,d=n.offset,u=[],s=[],l=!1,f=0;
for(u.push(r);u.length>0;){
var p=u.pop(),c=p.nodeType,g=p.tagName;
if(p.dataset&&p.dataset.index&&(f=+p.dataset.index),l&&(3===c&&s.push({
$node:p,
type:m.text,
idx:f
}),g===v&&s.push({
$node:p,
type:m.img,
idx:f
})),p===o){
if(3===c){
p.splitText(a);
var h=p.nextSibling;
s.push({
$node:h,
type:m.text,
idx:f
});
}else s.push(g===v?{
$node:p,
type:m.img,
idx:f
}:{
$node:p,
type:m.text,
idx:f
});
l=!0;
}
if(p===i){
s.pop(),3===c?(p.splitText(d),s.push({
$node:p,
type:m.text,
idx:f
})):s.push(g===v?{
$node:p,
type:m.img,
idx:f
}:{
$node:p,
type:m.text,
idx:f
});
break;
}
for(var x=p.childNodes,N=x.length-1;N>=0;N--)u.push(x[N]);
}
return s;
},k=function(e){
var t=e.start,n=e.end,r=t.$node,o=t.offset,a=n.$node,i=n.offset;
return r===a&&r instanceof Text?O(r,o,i,t.paraIndex):E(e);
},A=function(e){
return e&&(e.nodeValue||e.innerText);
},M=function(e,t,n){
var r=n===e?t:e;
if(!A(e)||!A(t))return r;
var o=(e.nodeValue||e.innerText)+(t.nodeValue||t.innerText);
return n.nodeValue=o,n.parentNode.removeChild(r),n;
},R=function(e,t){
var n=[],r=0,o=0,a=void 0;
for(n.push(e);n.length>0&&(a=n.pop(),!(3===a.nodeType&&(o=t-r,r+=a.textContent.length,
r>=t)));)for(var i=a.childNodes,d=i.length-1;d>=0;d--)n.push(i[d]);
return{
$parentNode:e,
$node:a,
offset:o
};
},V=function(e){
var t=e.$node,n=e.$parentNode,r=Number(n.dataset.index),a=o(n,t);
return{
parentIndex:r,
fromParentoffset:a
};
},j=function(){
var e=window.getSelection();
if(null===e.anchorNode)return null;
var t=e.getRangeAt(0);
if(!t||!e.toString())return null;
var n=t.startContainer,r=t.endContainer,o=t.commonAncestorContainer,a=t.startOffset,i=t.endOffset,d=_(n),u=_(r),s=d&&d.dataset.index,l=u&&u.dataset.index,f={
$blockNode:d,
$node:n,
offset:a,
paraIndex:Number(s)
},p={
$blockNode:u,
$node:r,
offset:i,
paraIndex:Number(l)
},c="string"==typeof o?o.parentNode:o,h=g();
return{
start:f,
end:p,
$container:c,
id:h
};
},B=function(e,t){
if(!e)return null;
if(3===e.nodeType){
var n=document.createElement(x);
return n.setAttribute("data-splitid",t),n.appendChild(e.cloneNode(!1)),e.parentNode.replaceChild(n,e),
n;
}
return e;
},w=function(e){
var t=e.start,n=e.end,r=e.id,a=o(t),i=t.$node===n.$node?n.offset-t.offset+a:o(n),d={
id:r,
start:{
para_offset:a,
para_index:t.paraIndex
},
end:{
para_offset:i,
para_index:n.paraIndex
}
};
return d;
},H=function(e){
return function(t){
var n=t.para_offset,r=t.para_index,o=e[r],a=[],i=0,d=0,u=void 0;
for(a.push(o);a.length>0&&(u=a.pop(),!(3===u.nodeType&&(d=n-i,i+=u.textContent.length,
i>=n)))&&!(1===u.nodeType&&(d=n-i,i+=1,i>=n));)for(var s=u.childNodes,l=s.length-1;l>=0;l--)a.push(s[l]);
return{
$blockNode:o,
$node:u,
offset:d,
paraIndex:r
};
};
},G=function(e,t,n){
var r=H(t);
return{
start:r(e.start),
end:r(e.end),
id:e.id,
$container:n
};
},D=function(e){
window.getSelection().removeAllRanges();
var t=window.getSelection(),n=document.createRange(),r=i(b.start),o=i(b.end);
n.setStart(r,e.start.offset),n.setEnd(o,e.end.offset),t.addRange(n);
},z=function(e,t){
var n=[],r=0;
for(n.push(e);n.length>0;){
var o=n.pop();
if(o===t)break;
r++;
for(var a=o.children,i=0;i<a.length;i++)n.push(a[i]);
}
return r;
},L=function(e,t){
var n=[],r=0,o=null;
for(n.push(e);n.length>0;){
var a=n.pop();
if(r===t){
o=a;
break;
}
r++;
for(var i=a.children,d=0;d<i.length;d++)n.push(i[d]);
}
return o;
},Q=function(e){
return e.map(function(e){
var t=e.$node,n=e.type,r=e.idx,o=0,a=null,i="",d=_(t);
if(n===m.text){
var u=z(d,t.parentNode);
t&&t.data&&(o=u,a=t.data,i=t.previousSibling&&t.previousSibling.data);
}else if(n===m.img){
var s=d.getElementsByTagName("img");
a=t.src,o=Array.prototype.slice.call(s).slice(0).indexOf(t);
}
return{
data:a,
index:o,
idx:r,
type:n,
meta:i
};
}).filter(function(e){
return e.index>-1&&!!e.data;
});
};
n.exports={
getDomMeta:V,
getContent:s,
getParaList:S,
getBlockNode:_,
getSelectedNodes:k,
connectSiblingText:M,
getTextNodeByOffset:R,
getBlockOffset:o,
getSelection:j,
transferTextToElement:B,
serialize:w,
deSerialize:G,
resetRange:D,
serializeToC:Q,
setProperty:d,
hasImgNode:u,
nodeToSelection:a,
saveNode:l,
serializeNode:f,
getNodeByIndex:L,
findChildIndex:p
};
});define("album/utils/report.js",["common/comm_report.js"],function(e){
"use strict";
var r=e("common/comm_report.js"),o=window.WX_BJ_REPORT||{},n=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n={
BizUin:window.biz,
MsgId:1*window.mid,
ItemIdx:1*window.idx,
ItemShowType:1*window.item_show_type||0,
SessionId:window.sessionid+"",
EnterId:1*window.enterid,
Scene:1*window.source,
SubScene:1*window.subscene,
AlbumId:e.albumId+"",
AlbumType:1*e.albumType,
EventType:1*e.eventType,
Vid:e.vid,
Audioid:e.audioid||"",
Title:e.title||""
};
r.report(19647,n,{
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 19647",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:n,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
});
},i=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n={
BizUin:window.biz,
Scene:1*window.source,
SubScene:1*window.subscene,
EnterId:1*window.enterid,
SceneNote:e.sceneNote+"",
AlbumId:e.albumId+"",
AlbumType:1*e.albumType,
EventType:1*e.eventType
};
r.report(19648,n,{
async:e.async||!0,
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 19648",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:n,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
});
},d=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n={
BizUin:window.biz,
MsgId:1*e.msgid,
ItemIdx:1*e.itemidx,
Pos:1*e.pos,
Scene:1*window.source,
SubScene:1*window.subscene,
EnterId:1*window.enterid,
SceneNote:e.sceneNote+"",
AlbumId:e.albumId+"",
AlbumType:1*e.albumType,
EventType:1*e.eventType,
Vid:e.vid
};
r.report(19649,n,{
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 19649",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:n,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
}),1*e.eventType===1&&!function(){
var n={
BizUin:window.biz,
MsgId:1*e.msgid,
ItemIdx:1*e.itemidx,
AppMsgUrl:e.url,
Title:e.title,
IsReaded:1*e.isRead,
Scene:1*window.source,
SubScene:1*window.subscene
};
r.report(20805,n,{
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 20805",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:n,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
});
}();
},t=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n={
bizuin:window.biz,
url:e.url+"",
ActionType:1*e.actionType,
Scene:1*window.source,
Network:window.__networkType+"",
AlbumId:e.albumId+"",
AlbumType:1*e.albumType
};
r.report(10380,n,{
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 10380",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:n,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
});
},s=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n={
BizUin:window.biz,
Action:1*e.action,
AppMsgLikeType:window.appmsg_like_type,
Scene:1*window.source,
SubScene:1*window.subscene,
AlbumId:e.albumId+"",
AlbumType:1*e.albumType
};
r.report(14299,n,{
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 14299",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:n,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
});
};
return{
cardReport:n,
albumActionReport:i,
articleActionReport:d,
shareReport:t,
likeReport:s
};
});define("common/color/light.js",[],function(){
"use strict";
return{
"BG-0":"#ededed",
"BG-1":"#f7f7f7",
"BG-2":"#ffffff",
"BG-3":"#f7f7f7",
"BG-4":"#4c4c4c",
"BG-5":"#ffffff",
"FG-0":"rgba(0, 0, 0, 0.9)",
"FG-HALF":"rgba(0, 0, 0, 0.9)",
"FG-1":"rgba(0, 0, 0, 0.5)",
"FG-2":"rgba(0, 0, 0, 0.3)",
"FG-3":"rgba(0, 0, 0, 0.1)",
RED:"#fa5151",
ORANGE:"#fa9d3b",
YELLOW:"#ffc300",
GREEN:"#91d300",
LIGHTGREEN:"#95ec69",
BRAND:"#07c160",
BLUE:"#10aeff",
INDIGO:"#1485ee",
PURPLE:"#6467f0",
WHITE:"#fff",
LINK:"#576b95",
TEXTGREEN:"#06ae56",
FG:"black",
BG:"white",
"TAG-TEXT-ORANGE":"#fa9d3b",
"TAG-BACKGROUND-ORANGE":"rgba(250, 157, 59, 0.1)",
"TAG-TEXT-GREEN":"#06ae56",
"TAG-BACKGROUND-GREEN":"rgba(6, 174, 86, 0.1)",
"TAG-TEXT-BLUE":"#10aeff",
"TAG-BACKGROUND-BLUE":"rgba(16, 174, 255, 0.1)",
"TAG-TEXT-BLACK":"rgba(0, 0, 0, 0.5)",
"TAG-BACKGROUND-BLACK":"rgba(0, 0, 0, 0.05)"
};
});define("biz_common/utils/monitor.js",[],function(){
"use strict";
function t(t,r){
if(null===t)return{};
for(var o={},e=Object.keys(t),n=0;n<e.length;n++){
var i=e[n];
r.indexOf(i)>=0||(o[i]=t[i]);
}
return o;
}
function r(t){
var r=[],o=null;
for(o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.push(o+"="+encodeURIComponent(t[o]));
return r.join("&");
}
var o=[],e="/mp/jsmonitor?#wechat_redirect",n={};
return window.__monitor?window.__monitor:(n._reportOptions={
idkey:{}
},n.getReportData=function(t){
t=t||{};
var r,e,i=n._reportOptions.idkey||{},p=null;
try{
for(p in i)Object.prototype.hasOwnProperty.call(i,p)&&i[p]&&o.push(p+"_"+i[p]);
}catch(a){
return!1;
}
if(0===o.length)return!1;
try{
var c=n._reportOptions;
if(null!==c&&void 0!==c)for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(r[e]=c[e]);
}catch(a){
r={};
}
return r.idkey=o.join(";"),r.t=Math.random(),t.remove!==!1&&(o=[],n._reportOptions={
idkey:{}
}),r;
},n.setLogs=function(r){
var o=r.id,e=r.key,i=r.value,p=t(r,["id","key","value"]),a=n._reportOptions.idkey||{},c=o+"_"+e;
a[c]?a[c]+=i:a[c]=i,n._reportOptions.idkey=a;
try{
if(null!==p&&void 0!==p)for(var s in p)Object.prototype.hasOwnProperty.call(p,s)&&(n._reportOptions[s]=p[s]);
}catch(u){
console.log(u);
}
return n;
},n.setAvg=function(t,r,o){
var e=n._reportOptions.idkey||{},i=t+"_"+r,p=t+"_"+(r-1);
return e[i]?e[i]+=o:e[i]=o,e[p]?e[p]+=1:e[p]=1,n._reportOptions.idkey=e,n;
},n.setSum=function(t,r,o){
var e=n._reportOptions.idkey,i=t+"_"+r;
return e[i]?e[i]+=o:e[i]=o,n._reportOptions.idkey=e,n;
},n.send=function(t,o){
t!==!1&&(t=!0);
var i=n.getReportData();
i&&(o&&o instanceof Function?o({
url:e,
type:"POST",
mayAbort:!0,
data:i,
async:t,
timeout:2e3
}):(new Image).src=location.origin+"/mp/jsmonitor?"+r(i)+"#wechat_redirect");
},window.__monitor=n,n);
});define("biz_wap/utils/setMpInfo.js",["biz_wap/jsapi/core.js"],function(n,r,t){
"use strict";
function e(n,r){
a(i,n),o.invoke("currentMpInfo",i,r);
}
var o=n("biz_wap/jsapi/core.js"),i={},a=null;
a="function"==typeof Object.assign?Object.assign:function(){
var n=Array.prototype.slice.call(arguments);
if(null==n[0])throw new TypeError("Cannot convert undefined or null to object");
for(var r=Object(n[0]),t=1;t<n.length;t++){
var e=n[t];
if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);
}
return r;
},t.exports={
currentMpInfo:e
};
});var _extends=Object.assign||function(e){
for(var n=1;n<arguments.length;n++){
var t=arguments[n];
for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);
}
return e;
};
define("pages/utils.js",["appmsg/appmsg_report.js","biz_common/utils/emoji_data.js","pages/version4video.js","biz_wap/utils/mmversion.js","biz_wap/jsapi/core.js","biz_common/dom/event.js","album/utils/report.js","common/utils.js","biz_common/utils/url/parse.js","appmsg/i18n.js"],function(require,exports,module,alert){
"use strict";
function getParam(e){
if(!e)return null;
var n=location.href.match(new RegExp("(\\?|&)"+e+"=([^&]+)"));
return n?n[2].split("#")[0]:null;
}
function setTwoTabHeight(e){
if(window.hasChannelTwoTab&&commonUtils.isNewNativePage()){
var n=void 0;
n=document.getElementById("tab").offsetTop-window.minHeight;
var t=document.body.offsetHeight,o=commonUtils.getInnerHeight()+n;
if(o>t){
var i=n+commonUtils.getInnerHeight()-document.body.offsetHeight,r=document.createElement("div");
r.setAttribute("class","empty_comment_element"),r.style.cssText="height: "+i+"px;",
document.getElementById(e).appendChild(r);
}
window.minMountHeight=o;
}
}
function getNetWorkType(){
DomEvent.on(window,"load",function(){
!window.__networkType&&g.inWechat&&!function(){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
JSAPI.invoke("getNetworkType",{},function(n){
window.__networkType=e[n.err_msg];
});
}();
},!1);
}
function shareMessage(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n={
appId:e.appId,
img_url:e.img_url,
img_width:e.img_width,
img_height:e.img_height,
link:e.link.replace(/<br\/>/g,"\n"),
desc:e.desc.replace(/<br\/>/g,"\n"),
title:e.title
};
getNetWorkType(),/#wechat_redirect/.test(n.link)||(n.link+="#wechat_redirect");
var t="",o={
url:n.link,
actionType:0
};
e.isAlbum&&(t="album",n=_extends({
album_id:e.album_id,
album_type:e.album_type
},n),o=_extends({
albumId:e.album_id,
albumType:e.album_type
},o)),JSAPI.on("menu:share:appmessage",function(e){
var i=void 0;
e&&"favorite"===e.scene?(i=24,n.link=changeURLArg(n.link,"scene",sceneType[1])):(i=1,
n.link=changeURLArg(n.link,"scene",sceneType[0])),o.url=n.link,o.actionType=i,shareReport(t,o),
JSAPI.invoke("sendAppMessage",n);
}),JSAPI.on("menu:share:timeline",function(){
n.link=changeURLArg(n.link,"scene",sceneType[2]),o.url=n.link,o.actionType=2,shareReport(t,o),
JSAPI.invoke("shareTimeline",n);
}),JSAPI.on("menu:share:weiboApp",function(){
n.link=changeURLArg(n.link,"scene",sceneType[3]),o.url=n.link,o.actionType=3,shareReport(t,o),
JSAPI.invoke("shareWeiboApp",{
img_url:n.img_url,
link:n.link,
title:n.title
});
}),JSAPI.on("menu:share:facebook",function(){
n.link=changeURLArg(n.link,"scene",sceneType[4]),o.url=n.link,o.actionType=7,shareReport(t,o),
JSAPI.invoke("shareFB",n);
}),JSAPI.on("menu:share:QZone",function(){
n.link=changeURLArg(n.link,"scene",sceneType[5]),o.url=n.link,o.actionType=5,shareReport(t,o),
JSAPI.invoke("shareQZone",n);
}),JSAPI.on("menu:share:qq",function(){
n.link=changeURLArg(n.link,"scene",sceneType[6]),o.url=n.link,o.actionType=5,shareReport(t,o),
JSAPI.invoke("shareQQ",n);
}),JSAPI.on("menu:share:email",function(){
n.link=changeURLArg(n.link,"scene",sceneType[7]),o.url=n.link,o.actionType=5,shareReport(t,o),
JSAPI.invoke("sendEmail",{
content:n.link,
title:n.title
});
});
}
function getQuery(e){
for(var n=window.location.href,t=n.indexOf("?"),o=n.substr(t+1),i=o.split("&"),r=0;r<i.length;r++){
var a=i[r].split("=");
if(a[0].toUpperCase()==e.toUpperCase())return a[1];
}
return"";
}
function prepareNativePage(e,n){
JSAPI.invoke("createWebViewForFastLoad",{
scene:1
},function(){
e.forEach(function(e){
JSAPI.invoke("downloadPageDataForFastLoad",{
itemList:[{
item_show_type:5,
url:e[n]
}]
},function(e){
console.log(e);
});
});
});
}
function debounce(e,n,t){
var o=void 0;
return function(){
var i=this,r=arguments,a=function(){
o=null,t||e.apply(i,r);
},s=t&&!o;
clearTimeout(o),o=setTimeout(a,n),s&&e.apply(i,r);
};
}
function formatSeconds(e){
var n=parseInt(e,10),t=0,o=0;
n>60&&(t=parseInt(n/60,10),n=parseInt(n%60,10),t>60&&(o=parseInt(t/60,10),t=parseInt(t%60,10))),
10>n&&(n="0"+n);
var i=":"+n;
return t>0?(10>t&&(t="0"+t),i=t+i):i="00"+i,o>0&&(0===parseInt(o,10)?o="":10>o&&(o="0"+o),
i=""+o+":"+i),i;
}
function formatReadNum(e){
if("en"===window.LANG)return i18n.dealLikeReadShow_en(e);
var n="";
if(parseInt(e,10)>1e5)n="10万+";else if(parseInt(e,10)>1e4&&parseInt(e,10)<=1e5){
var t=""+parseInt(e,10)/1e4,o=t.indexOf(".");
n=-1===o?t+"万":t.substr(0,o)+"."+t.charAt(o+1)+"万";
}else n=0===parseInt(e,10)?"":e||"";
return n;
}
function throttle(e,n){
var t=void 0,o=void 0;
return function(){
var i=this,r=arguments,a=+new Date;
t&&t+n>a?(clearTimeout(o),o=setTimeout(function(){
t=a,e.apply(i,r);
},n)):(t=a,e.apply(i,r));
};
}
function getScrollTop(){
var e=0,n=0,t=0;
return document.body&&(n=document.body.scrollTop),document.documentElement&&(t=document.documentElement.scrollTop),
e=n-t>0?n:t;
}
function getScrollHeight(){
var e=0,n=void 0,t=void 0;
return document.body&&(n=document.body.scrollHeight),document.documentElement&&(t=document.documentElement.scrollHeight),
e=n-t>0?n:t;
}
function getWindowHeight(){
var e=0;
return e="CSS1Compat"===document.compatMode?document.documentElement.clientHeight:document.body.clientHeight;
}
function openAllVideoPage(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=location.origin+"/mp/videochannel_profile_page?biz_username="+encodeURIComponent(e.userName)+"&sessionid="+e.sessionId+"&__biz="+e.biz+"&scene="+e.scene+"&subscene="+e.subscene+"&channel_session_id="+e.channelSessionId+"#wechat_redirect";
jumpUrl(n,!0);
}
function openAlbumPage(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=e.albumLink.replace("#wechat_redirect","")+("&scene="+e.scene+"&is_first_screen=1&subscene="+e.subscene+"&vid="+e.vid+"&scenenote="+e.scenenote+"#wechat_redirect");
jumpUrl(n,!0);
}
function getElementTop(e){
return e.getBoundingClientRect().top;
}
function getElementHeight(e){
return e.getBoundingClientRect().height;
}
function isPageEnd(){
return getScrollTop()+getWindowHeight()+30>=getScrollHeight();
}
function getMoreVideoInfo(e,n){
return Url.getQuery("__biz",e)+"_"+Url.getQuery("mid",e)+"_"+Url.getQuery("idx",e)+"_"+n;
}
function formatAlbumnReadNum(e,n){
var t="en"===window.LANG,o=t?"k":"万",i="",r=1e4*n,a=t?10*n:n;
if(e=parseInt(e,10),e>r)i=a+o+"+";else if(e>=1e4&&r>=e){
var s=""+(t?e/1e3:e/1e4),l=s.indexOf(".");
i=-1===l?s+o:s.substr(0,l)+"."+s.charAt(l+1)+o;
}else i=e;
return i||0;
}
function switchVideo(e,n){
if(n.useSwitchVideo||commonUtils.isNativePage())JSAPI.invoke("handleMPPageAction",_extends({
action:"switchVideo",
scene:n.clickScene,
channelSessionId:window.channel_session_id,
landingType:window.isFromVideoChannel?1:2,
subscene:n.clickSubScene
},e),function(e){
console.log(JSON.stringify(e));
});else if(n.isWcSlPlayerTailIframe&&window.top!==window)window.parent.postMessage({
__wcSlPlayerLoadTailRelateVideo__:e.url
},document.location.protocol+"//mp.weixin.qq.com");else if(!window.__failConfigWxOpen&&commonUtils.isWcSlPage())n.leaveReport(),
commonUtils.loadNewPageKeepingHistoryStackIfSecOpen(e.url);else{
console.log("==================JSAPI.invoke openWebViewUseFastLoad",window.__failConfigWxOpen,commonUtils.isWcSlPage());
var t=n.target.getElementsByClassName("js_relate_cover_img")[0],o=window.getComputedStyle(t),i=t.getBoundingClientRect(),r=document.createElement("canvas");
r.style.width=o.width,r.style.height=o.height,r.width=parseFloat(o.width),r.height=parseFloat(o.height);
var a=r.getContext("2d"),s="";
try{
a.drawImage(t,0,0,i.width,i.height),s=r.toDataURL();
}catch(l){
console.error(l);
}
mmversion.isAndroid&&(s=""),JSAPI.invoke("openWebViewUseFastLoad",_extends({
scene:n.clickScene,
item_show_type:5,
openType:0,
subscene:n.clickSubScene,
channelSessionId:window.channel_session_id,
currentInfo:{
url:e.cover,
data:s,
pos:{
x:i.left-parseFloat(o.paddingLeft)-parseFloat(o.borderLeftWidth),
y:i.top-parseFloat(o.paddingTop)-parseFloat(o.borderTopWidth),
width:i.width-parseFloat(o.paddingLeft)-parseFloat(o.paddingRight)-parseFloat(o.borderLeftWidth)-parseFloat(o.borderRightWidth),
height:i.height-parseFloat(o.paddingTop)-parseFloat(o.paddingBottom)-parseFloat(o.borderTopWidth)-parseFloat(o.borderBottomWidth)
}
}
},e),function(t){
console.log(t),t&&t.err_msg&&-1===t.err_msg.indexOf("ok")&&JSAPI.invoke("openUrlWithExtraWebview",{
url:e.url,
openType:1
},function(t){
t&&t.err_msg&&-1===t.err_msg.indexOf("ok")&&(n.leaveReport(),window.location.href=e.url);
});
});
}
}
var AppmsgReport=require("appmsg/appmsg_report.js"),EmojiData=require("biz_common/utils/emoji_data.js"),Version4video=require("pages/version4video.js"),mmversion=require("biz_wap/utils/mmversion.js"),JSAPI=require("biz_wap/jsapi/core.js"),DomEvent=require("biz_common/dom/event.js"),AlbumReport=require("album/utils/report.js"),commonUtils=require("common/utils.js"),Url=require("biz_common/utils/url/parse.js"),i18n=require("appmsg/i18n.js"),g={
inWechat:Version4video.device.inWechat,
windowWechat:/WindowsWechat/i.test(navigator.userAgent),
macWechat:/wechat.*mac os/i.test(navigator.userAgent),
emojiImg:'<img src="https://res.wx.qq.com/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif" class="icon_emotion_single #style#" alt="#name#">',
emojiDataMap:{}
};
!function(){
for(var e=0,n=EmojiData.length;n>e;e++){
var t=EmojiData[e];
t.cn&&!g.emojiDataMap[t.cn]&&(g.emojiDataMap[t.cn]={
index:e
}),t.hk&&!g.emojiDataMap[t.hk]&&(g.emojiDataMap[t.hk]={
index:e
}),t.us&&!g.emojiDataMap[t.us]&&(g.emojiDataMap[t.us]={
index:e
});
}
}();
var emojiFormat=function(e){
return/\[[^\[\]]+\]/.test(e)?e.replace(/\[[^\[\]]+\]/g,function(e){
if(g.emojiDataMap[e]&&EmojiData[g.emojiDataMap[e].index]){
var n=EmojiData[g.emojiDataMap[e].index];
return g.emojiImg.replace("#name#",e).replace("#style#",n.style);
}
return e;
}):e;
},jumpUrl=function(e,n){
g.inWechat?g.windowWechat||g.macWechat?n===!0?window.parent.open(e):window.parent.location.href=e:JSAPI.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
-1==t.err_msg.indexOf("ok")&&(n===!0?window.parent.open(e):window.parent.location.href=e);
}):n===!0?window.open(e):location.href=e;
},closeWin=function(){
!g.inWechat||g.windowWechat||g.macWechat?window.close():JSAPI.invoke("closeWindow",function(e){
-1==e.err_msg.indexOf("ok")&&window.close();
});
},getId=function(e){
return document.getElementById(e);
},shareReport=function(e){
var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
"album"===e&&AlbumReport.shareReport(n);
},getByClass=function(e){
return document.getElementsByClassName(e);
},trim=function(e){
return e.replace(/^\s+|\s+$/g,"");
},qs=function(e,n){
return(n||document).querySelector(e);
},qsAll=function(e,n){
return(n||document).querySelectorAll(e);
},changeURLArg=function changeURLArg(url,arg,argVal){
var pattern=arg+"=([^&]*)",replaceText=arg+"="+argVal;
if(url.match(pattern)){
var tmp="/("+arg+"=)([^&]*)/gi";
return tmp=url.replace(eval(tmp),replaceText);
}
return url.match("[?]")?url+"&"+replaceText:url+"?"+replaceText;
},sceneType=[1,24,2,3,43,22,23,5],go2ProfileEvent=function(e){
var n=e.$container;
n&&!mmversion.isInMiniProgram&&DomEvent.on(n,"tap",".js_go_profile",function(n){
var t=n.delegatedTarget;
t&&!function(){
var n=t.getAttribute("data-biz")||e.biz||window.biz||"";
if("function"==typeof e.beforeGo2Profile&&e.beforeGo2Profile(t),1==window.isprofileblock)JSAPI.invoke("openUrlWithExtraWebview",{
url:"https://mp.weixin.qq.com/mp/profileblock?__biz="+n+"#wechat_redirect",
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href="https://mp.weixin.qq.com/mp/profileblock?__biz="+n+"#wechat_redirect");
});else{
var o=t.getAttribute("data-scene")||e.profile_scene||"";
AppmsgReport.profileReport({
isnew:0,
title:e.title||"",
item_show_type:e.item_show_type||""
}),console.log("channelSessionId"+getParam("channel_session_id")),JSAPI.invoke("profile",{
username:e.user_name,
profileReportInfo:"",
scene:o+"",
channelSessionId:getParam("channel_session_id"),
subscene:e.subscene
},function(){});
}
}();
});
},isTimeExpired=function(e,n,t){
var o=!1;
return e&&n&&t&&(n-e)/1e3/3600>t&&(o=!0),o;
};
return{
jumpUrl:jumpUrl,
closeWin:closeWin,
trim:trim,
getId:getId,
qs:qs,
qsAll:qsAll,
inWechat:g.inWechat,
windowWechat:g.windowWechat,
macWechat:g.macWechat,
emojiFormat:emojiFormat,
getParam:getParam,
go2ProfileEvent:go2ProfileEvent,
prepareNativePage:prepareNativePage,
debounce:debounce,
throttle:throttle,
formatReadNum:formatReadNum,
formatSeconds:formatSeconds,
setTwoTabHeight:setTwoTabHeight,
getByClass:getByClass,
getScrollTop:getScrollTop,
getScrollHeight:getScrollHeight,
getWindowHeight:getWindowHeight,
shareMessage:shareMessage,
getElementTop:getElementTop,
formatAlbumnReadNum:formatAlbumnReadNum,
getElementHeight:getElementHeight,
getQuery:getQuery,
openAllVideoPage:openAllVideoPage,
getNetWorkType:getNetWorkType,
getMoreVideoInfo:getMoreVideoInfo,
isPageEnd:isPageEnd,
openAlbumPage:openAlbumPage,
switchVideo:switchVideo
};
});define("tpl/appmsg/loading.html.js",[],function(){
return'<div style="display: none;">\n  <div class="weui-mask_transparent"></div>\n  <div class="weui-toast">\n    <i class="weui-loading weui-icon_toast"></i>\n    <p class="weui-toast__content js_loading_content"></p>\n  </div>\n</div>';
});define("biz_common/base64.js",[],function(r,t,n){
"use strict";
var e,c="2.1.9";
if("undefined"!=typeof n&&n.exports)try{}catch(o){}
var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=function(r){
for(var t={},n=0,e=r.length;e>n;n++)t[r.charAt(n)]=n;
return t;
}(u),h=String.fromCharCode,i=function(r){
if(r.length<2){
var t=r.charCodeAt(0);
return 128>t?r:2048>t?h(192|t>>>6)+h(128|63&t):h(224|t>>>12&15)+h(128|t>>>6&63)+h(128|63&t);
}
var t=65536+1024*(r.charCodeAt(0)-55296)+(r.charCodeAt(1)-56320);
return h(240|t>>>18&7)+h(128|t>>>12&63)+h(128|t>>>6&63)+h(128|63&t);
},f=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,A=function(r){
return r.replace(f,i);
},d=function(r){
var t=[0,2,1][r.length%3],n=r.charCodeAt(0)<<16|(r.length>1?r.charCodeAt(1):0)<<8|(r.length>2?r.charCodeAt(2):0),e=[u.charAt(n>>>18),u.charAt(n>>>12&63),t>=2?"=":u.charAt(n>>>6&63),t>=1?"=":u.charAt(63&n)];
return e.join("");
},g=function(r){
return r.replace(/[\s\S]{1,3}/g,d);
},s=e?function(r){
return(r.constructor===e.constructor?r:new e(r)).toString("base64");
}:function(r){
return g(A(r));
},C=function(r,t){
return t?s(String(r)).replace(/[+\/]/g,function(r){
return"+"==r?"-":"_";
}).replace(/=/g,""):s(String(r));
},l=function(r){
return C(r,!0);
},p=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),S=function(r){
switch(r.length){
case 4:
var t=(7&r.charCodeAt(0))<<18|(63&r.charCodeAt(1))<<12|(63&r.charCodeAt(2))<<6|63&r.charCodeAt(3),n=t-65536;
return h((n>>>10)+55296)+h((1023&n)+56320);

case 3:
return h((15&r.charCodeAt(0))<<12|(63&r.charCodeAt(1))<<6|63&r.charCodeAt(2));

default:
return h((31&r.charCodeAt(0))<<6|63&r.charCodeAt(1));
}
},b=function(r){
return r.replace(p,S);
},v=function(r){
var t=r.length,n=t%4,e=(t>0?a[r.charAt(0)]<<18:0)|(t>1?a[r.charAt(1)]<<12:0)|(t>2?a[r.charAt(2)]<<6:0)|(t>3?a[r.charAt(3)]:0),c=[h(e>>>16),h(e>>>8&255),h(255&e)];
return c.length-=[0,0,2,1][n],c.join("");
},F=function(r){
return r.replace(/[\s\S]{1,4}/g,v);
},j=e?function(r){
return(r.constructor===e.constructor?r:new e(r,"base64")).toString();
}:function(r){
return b(F(r));
},m=function(r){
return j(String(r).replace(/[-_]/g,function(r){
return"-"==r?"+":"/";
}).replace(/[^A-Za-z0-9\+\/]/g,""));
};
return{
VERSION:c,
atob:F,
btoa:g,
fromBase64:m,
toBase64:C,
utob:A,
encode:C,
encodeURI:l,
btou:b,
decode:m
};
});define("biz_wap/jsapi/log.js",["biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js"],function(i){
"use strict";
function o(i,o){
o=e+" "+o+" location:["+location.href+"]",n.isWechat&&n.isAndroid?r.invoke("log",{
level:i,
msg:o
}):n.isWechat&&(n.isIOS||n.isMac)&&r.invoke("writeLog",{
level:i,
msg:o
});
}
var r=i("biz_wap/jsapi/core.js"),n=i("biz_wap/utils/mmversion.js"),e="__wap__",a={
info:function(){
o("info",Array.prototype.join.apply(arguments));
},
warn:function(){
o("warn",Array.prototype.join.apply(arguments));
},
error:function(){
o("error",Array.prototype.join.apply(arguments));
},
debug:function(){
o("debug",Array.prototype.join.apply(arguments));
}
};
return a.log=a.info,a;
});define("biz_wap/utils/storage.js",[],function(){
"use strict";
function t(t){
if(!t)throw"require function name.";
this.key=t,this.init();
}
var e="__WXLS__",n=window.localStorage||{
getItem:function(){},
setItem:function(){},
removeItem:function(){},
key:function(){},
length:0
};
return t.getItem=function(t){
return t=e+t,n.getItem(t);
},t.setItem=function(i,r){
i=e+i;
for(var a=3;a--;)try{
n.setItem(i,r);
break;
}catch(o){
t.clear();
}
},t.clear=function(){
var t,i;
for(t=n.length-1;t>=0;t--)i=n.key(t),0==i.indexOf(e)&&n.removeItem(i);
},t.prototype={
constructor:t,
init:function(){
this.check();
},
getData:function(){
var e=t.getItem(this.key)||"{}";
try{
e=JSON.parse(e);
}catch(n){
e={};
}
return e;
},
check:function(){
var e,n,i=this.getData(),r={},a=+new Date;
for(e in i)n=i[e],+n.exp>a&&(r[e]=n);
t.setItem(this.key,JSON.stringify(r));
},
set:function(e,n,i){
var r=this.getData();
r[e]={
val:n,
exp:i||+new Date
},t.setItem(this.key,JSON.stringify(r));
},
get:function(t){
var e=this.getData();
return e=e[t],e?e.val||null:null;
},
remove:function(e){
var n=this.getData();
n[e]&&delete n[e],t.setItem(this.key,JSON.stringify(n));
}
},t;
});