function _classCallCheck(t,e){
if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");
}
var _createClass=function(){
function t(t,e){
for(var i=0;i<e.length;i++){
var n=e[i];
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);
}
}
return function(e,i,n){
return i&&t(e.prototype,i),n&&t(e,n),e;
};
}();
define("appmsg/emotion/slide.js",["appmsg/emotion/nav.js"],function(t){
"use strict";
function e(t){
return t.touches&&t.touches.length>0?t.touches[0].clientX:t.clientX;
}
var i=t("appmsg/emotion/nav.js"),n=300,a=!1,r=void 0,s=!1,o=function(){
function t(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
_classCallCheck(this,t),this.currentPage=0,this.distX=0,this.opt=e,this.wrapper=e.emotionSlideWrapper,
this.commonWidth=e.commonWidth,r=-e.wrapperWidth+this.commonWidth,this.listenAndSlide();
var i="translate3d(0, 0, 0)";
this.wrapper.css({
webkitTransform:i,
transform:i
});
}
return _createClass(t,[{
key:"moveWrapper",
value:function(){
var t=this.commonWidth,e=t/4,i=-this.currentPage*t+this.distX;
i>e?i=e:r-e>i&&(i=r-e);
var n="translate3d("+i+"px, 0, 0)";
this.wrapper.css({
webkitTransform:n,
transform:n
});
}
},{
key:"addAnimation",
value:function(){
var t="all 0.3s ease";
this.wrapper.css({
transition:t,
webkitTransition:t
});
}
},{
key:"removeAnimation",
value:function(){
var t=this.wrapper.el[0].style;
t.transition="",t.webkitTransition="";
}
},{
key:"animateTo",
value:function(t){
var e=this;
a=!0,this.addAnimation(),this.moveWrapper(),setTimeout(function(){
a=!1,e.removeAnimation();
},n),i.activeNav(t,this.opt.navs);
}
},{
key:"slideToCertainPage",
value:function(){
var t=this.commonWidth,e=55,i=parseInt(this.distX/t,10),n=this.distX%t;
this.currentPage-=i,Math.abs(n)>e&&(this.currentPage-=Math.abs(n)/n*1),this.currentPage>this.opt.pageCount-1?this.currentPage=this.opt.pageCount-1:this.currentPage<0&&(this.currentPage=0),
this.distX=0,this.animateTo(this.currentPage);
}
},{
key:"listenAndSlide",
value:function(){
var t=this,i=void 0,n=void 0,r=function(n){
n.preventDefault(),n.stopPropagation(),a||(s=!0,i=e(n),t.isMoved=!1);
},o=function(){
a||(s=!1,t.slideToCertainPage());
},u=function(r){
r.preventDefault(),r.stopPropagation(),!a&&s&&(n=e(r),t.distX=n-i,t.moveWrapper(),
Math.abs(t.distX)>6&&(t.isMoved=!0));
};
this.wrapper.on("touchstart",r),this.wrapper.on("mousedown",r),this.wrapper.on("touchmove",u),
this.wrapper.on("mousemove",u),this.wrapper.on("touchend",o),this.wrapper.on("mouseup",o);
}
}]),t;
}();
return o;
});define("pages/mod/bottom_modal.html.js",[],function(){
return'<div class="wx_bottom_modal_wrp <#=extClass#>">\n  <div class="weui-half-screen-dialog wx_bottom_modal js_bottom_modal_content">\n    <div class="weui-half-screen-dialog__hd js_bottom_modal_hd">\n      <div class="weui-half-screen-dialog__hd__side">\n        <button class="weui-icon-btn js_close_bottom_modal">返回<i class="weui-icon-close-thin"></i></button>\n      </div>\n      <div class="weui-half-screen-dialog__hd__main">\n        <strong class="weui-half-screen-dialog__title js_bottom_modal_title">标题</strong>\n      </div>\n      <div class="weui-half-screen-dialog__hd__side">\n        <# if (hasBtn) { #>\n          <button class="weui-btn weui-btn_default weui-btn_mini js_submit_bottom_modal"><#=btnText#></button>\n        <# } #>\n        <button class="weui-icon-btn" style="display:none;">更多<i class="weui-icon-more"></i></button>\n        <# if (isTopic) { #>\n          <div id="js_topic_detail" class="weui-btn__word-wrp">\n            <span class="weui-btn__word">详情</span>\n            <i class="weui_right_arrow"></i>\n          </div>\n        <# } #>\n      </div>\n    </div>\n    <div class="weui-half-screen-dialog__bd js_bottom_modal_bd"></div>\n  </div>\n  <# if (hasMask) { #>\n    <div class="weui-mask wx_bottom_modal_mask js_bottom_modal_mask"></div>\n  <# } #>\n</div>';
});;define('widget/wx-widget/wx_bottom_modal.css', [], function(require, exports, module) {
	return ".weui-mask{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,0.6)}.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}body{--weui-BTN-DISABLED-FONT-COLOR:rgba(0,0,0,0.2)}body[data-weui-theme='dark']{--weui-BTN-DISABLED-FONT-COLOR:rgba(255,255,255,0.2)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BTN-DISABLED-FONT-COLOR:rgba(255,255,255,0.2)}}body{--weui-BTN-DEFAULT-BG:#f2f2f2}body[data-weui-theme='dark']{--weui-BTN-DEFAULT-BG:rgba(255,255,255,0.08)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BTN-DEFAULT-BG:rgba(255,255,255,0.08)}}body{--weui-BTN-DEFAULT-COLOR:#06ae56}body[data-weui-theme='dark']{--weui-BTN-DEFAULT-COLOR:rgba(255,255,255,0.8)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BTN-DEFAULT-COLOR:rgba(255,255,255,0.8)}}body{--weui-BTN-DEFAULT-ACTIVE-BG:#e6e6e6}body[data-weui-theme='dark']{--weui-BTN-DEFAULT-ACTIVE-BG:rgba(122,122,122,0.1536)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BTN-DEFAULT-ACTIVE-BG:rgba(122,122,122,0.1536)}}body{--weui-DIALOG-LINE-COLOR:rgba(0,0,0,0.1)}body[data-weui-theme='dark']{--weui-DIALOG-LINE-COLOR:rgba(255,255,255,0.1)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-DIALOG-LINE-COLOR:rgba(255,255,255,0.1)}}body{--weui-BG-0:#ededed;--weui-BG-1:#f7f7f7;--weui-BG-2:#fff;--weui-BG-3:#f7f7f7;--weui-BG-4:#4c4c4c;--weui-BG-5:#fff;--weui-FG-0:rgba(0,0,0,0.9);--weui-FG-HALF:rgba(0,0,0,0.9);--weui-FG-1:rgba(0,0,0,0.5);--weui-FG-2:rgba(0,0,0,0.3);--weui-FG-3:rgba(0,0,0,0.1);--weui-RED:#fa5151;--weui-ORANGE:#fa9d3b;--weui-YELLOW:#ffc300;--weui-GREEN:#91d300;--weui-LIGHTGREEN:#95ec69;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1485ee;--weui-PURPLE:#6467f0;--weui-WHITE:#fff;--weui-LINK:#576b95;--weui-TEXTGREEN:#06ae56;--weui-FG:black;--weui-BG:white;--weui-TAG-TEXT-ORANGE:#fa9d3b;--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-TEXT-GREEN:#06ae56;--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-BLUE:#10aeff;--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-BLACK:rgba(0,0,0,0.5);--weui-TAG-BACKGROUND-BLACK:rgba(0,0,0,0.05)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BG-0:#111;--weui-BG-1:#1e1e1e;--weui-BG-2:#191919;--weui-BG-3:#202020;--weui-BG-4:#404040;--weui-BG-5:#2c2c2c;--weui-FG-0:rgba(255,255,255,0.8);--weui-FG-HALF:rgba(255,255,255,0.6);--weui-FG-1:rgba(255,255,255,0.5);--weui-FG-2:rgba(255,255,255,0.3);--weui-FG-3:rgba(255,255,255,0.05);--weui-RED:#fa5151;--weui-ORANGE:#c87d2f;--weui-YELLOW:#cc9c00;--weui-GREEN:#74a800;--weui-LIGHTGREEN:#3eb575;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1196ff;--weui-PURPLE:#8183ff;--weui-WHITE:rgba(255,255,255,0.8);--weui-LINK:#7d90a9;--weui-TEXTGREEN:#259c5c;--weui-FG:white;--weui-BG:black;--weui-TAG-TEXT-ORANGE:rgba(250,157,59,0.6);--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-TEXT-GREEN:rgba(6,174,86,0.6);--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-BLUE:rgba(16,174,255,0.6);--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-BLACK:rgba(255,255,255,0.5);--weui-TAG-BACKGROUND-BLACK:rgba(255,255,255,0.05)}}body[data-weui-theme='dark']{--weui-BG-0:#111;--weui-BG-1:#1e1e1e;--weui-BG-2:#191919;--weui-BG-3:#202020;--weui-BG-4:#404040;--weui-BG-5:#2c2c2c;--weui-FG-0:rgba(255,255,255,0.8);--weui-FG-HALF:rgba(255,255,255,0.6);--weui-FG-1:rgba(255,255,255,0.5);--weui-FG-2:rgba(255,255,255,0.3);--weui-FG-3:rgba(255,255,255,0.05);--weui-RED:#fa5151;--weui-ORANGE:#c87d2f;--weui-YELLOW:#cc9c00;--weui-GREEN:#74a800;--weui-LIGHTGREEN:#3eb575;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1196ff;--weui-PURPLE:#8183ff;--weui-LINK:#7d90a9;--weui-TEXTGREEN:#259c5c;--weui-FG:white;--weui-BG:black;--weui-TAG-TEXT-ORANGE:rgba(250,157,59,0.6);--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-TEXT-GREEN:rgba(6,174,86,0.6);--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-BLUE:rgba(16,174,255,0.6);--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-BLACK:rgba(255,255,255,0.5);--weui-TAG-BACKGROUND-BLACK:rgba(255,255,255,0.05)}body{--weui-BG-COLOR-ACTIVE:#ececec}body[data-weui-theme='dark']{--weui-BG-COLOR-ACTIVE:#282828}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BG-COLOR-ACTIVE:#282828}}.weui-half-screen-dialog{position:fixed;left:0;right:0;bottom:0;max-height:75%;z-index:5000;line-height:1.4;background-color:#fff;background-color:var(--weui-BG-2);border-top-left-radius:12px;border-top-right-radius:12px;overflow:hidden;padding:0 24px;padding:0 calc(24px + constant(safe-area-inset-right)) constant(safe-area-inset-bottom) calc(24px + constant(safe-area-inset-left));padding:0 calc(24px + env(safe-area-inset-right)) env(safe-area-inset-bottom) calc(24px + env(safe-area-inset-left))}@media only screen and (max-height:558px){.weui-half-screen-dialog{max-height:none}}.weui-half-screen-dialog__hd{font-size:8px;height:8em;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.weui-half-screen-dialog__hd .weui-icon-btn{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.weui-half-screen-dialog__hd .weui-icon-btn:active{opacity:.5}.weui-half-screen-dialog__hd__side{position:relative;left:-8px}.weui-btn__word-wrp{font-size:15px;display:-webkit-box;display:-webkit-flex;display:flex;position:relative;right:2px}.weui-btn__word-wrp:active{opacity:.5}.weui-btn__word{color:rgba(0,0,0,0.5)}.weui_right_arrow{display:inline-block;vertical-align:middle;width:10px;height:20px;margin-left:4px;background-size:cover;background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='10' height='20' viewBox='0 0 10 20'%3E  %3Cpath fill-opacity='.5' fill-rule='evenodd' d='M2.045 5.484l.884-.884 4.816 4.816a.83.83 0 0 1 0 1.177l-4.816 4.816-.884-.884 4.52-4.52-4.52-4.521z'\/%3E%3C\/svg%3E\")}.weui-half-screen-dialog__hd__main{-webkit-box-flex:1;-webkit-flex:1;flex:1}.weui-half-screen-dialog__hd__side+.weui-half-screen-dialog__hd__main{text-align:center;padding:0 40px}.weui-half-screen-dialog__hd__main+.weui-half-screen-dialog__hd__side{right:-8px;left:auto}.weui-half-screen-dialog__hd__main+.weui-half-screen-dialog__hd__side .weui-icon-btn{right:0}.weui-half-screen-dialog__title{display:block;color:rgba(0,0,0,0.9);color:var(--weui-FG-0);font-weight:700;font-size:15px}.weui-half-screen-dialog__subtitle{display:block;color:rgba(0,0,0,0.5);color:var(--weui-FG-1);font-size:10px}.weui-half-screen-dialog__bd{word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow-y:auto;-webkit-overflow-scrolling:touch;padding-top:4px;padding-bottom:40px;font-size:14px;color:rgba(0,0,0,0.9);color:var(--weui-FG-0)}.weui-half-screen-dialog__desc{font-size:17px;font-weight:700;color:rgba(0,0,0,0.9);color:var(--weui-FG-0);line-height:1.4}.weui-half-screen-dialog__tips{padding-top:16px;font-size:14px;color:rgba(0,0,0,0.3);color:var(--weui-FG-2);line-height:1.4}.weui-half-screen-dialog__ft{padding:0 24px 32px;text-align:center}.weui-half-screen-dialog__ft .weui-btn:nth-last-child(n+2),.weui-half-screen-dialog__ft .weui-btn:nth-last-child(n+2)+.weui-btn{display:inline-block;vertical-align:top;margin:0 8px;width:120px}@media(prefers-color-scheme:dark){.weui-btn__word{color:rgba(255,255,255,0.5)}.weui_right_arrow{background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='10' height='20' viewBox='0 0 10 20'%3E  %3Cpath fill='%23FFFFFF' fill-opacity='.5' fill-rule='evenodd' d='M2.045 5.484l.884-.884 4.816 4.816a.83.83 0 0 1 0 1.177l-4.816 4.816-.884-.884 4.52-4.52-4.52-4.521z'\/%3E%3C\/svg%3E\")}}.wx_bottom_modal{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-transition:all .3s;transition:all .3s;top:100%}.wx_bottom_modal .weui-half-screen-dialog__hd__side{min-width:64px}.wx_bottom_modal .weui-half-screen-dialog__hd__side+.weui-half-screen-dialog__hd__main{padding:0}.wx_bottom_modal .weui-half-screen-dialog__hd__main+.weui-half-screen-dialog__hd__side{text-align:right}.wx_bottom_modal .weui-half-screen-dialog__hd .weui-icon-btn{position:static;-webkit-transform:unset;transform:unset;background:transparent}.wx_bottom_modal.weui-half-screen-dialog{max-height:none;overflow:initial}.wx_bottom_modal .weui-half-screen-dialog__title{font-weight:400}.wx_bottom_modal .weui-half-screen-dialog__bd{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow-y:auto;position:relative;-ms-scroll-chaining:none;overscroll-behavior:contain}.wx_bottom_modal .album_keep_read_item{pointer-events:auto!important}.wx_bottom_modal_wrp{visibility:hidden}.wx_bottom_modal_show{visibility:visible}.wx_bottom_modal_form .wx_bottom_modal{-webkit-transition:none;transition:none;opacity:0}";
});define("pages/audition_tpl.html.js",[],function(){
return'<div id="js_music_dialog">\n    <div class="weui-mask"></div>\n    <div class="weui-dialog">\n        <div class="weui-dialog__bd"><#=msg#></div>\n        <div class="weui-dialog__ft">\n            <a href="javascript:void(0);" class="weui-dialog__btn weui-dialog__btn_primary js_submit">我知道了</a>\n        </div>\n    </div>\n</div>';
});define("pages/musicUrlReport.js",["biz_wap/utils/ajax.js"],function(s){
"use strict";
var e=s("biz_wap/utils/ajax.js"),r=function(){
var s=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=[""];
r.push(1*s.type===1?1:2),r.push(s.songid||""),r.push(s.musicid||""),r.push(s.jumpurlkey||""),
r.push(""),r.push(s.kugouParams||"");
for(var t=encodeURIComponent(s.responseData||""),u=2e3,a=parseInt(t.length/u,10),p=0;a>=p;p++){
var n=t.substr(p*u,u);
n&&r.push(n);
}
e({
url:"/mp/webcommreport?action=report",
type:"POST",
data:{
logid:18027,
buffer:r.join(",")
}
});
};
return{
reportRespData:r
};
});define("pages/music_report_conf.js",[],function(){
"use strict";
return{
m_pv:"28306_0",
m_wx_pv:"28306_1",
m_h5_pv:"28306_2",
m_unload_wx_pv:"28306_3",
v_pv:"28306_4",
v_wx_pv:"28306_5",
v_h5_pv:"28306_6",
v_unload_wx_pv:"28306_7",
force_h5:"28306_30",
m_h5_err_total:"28306_31",
m_h5_err_1:"28306_32",
m_h5_err_2:"28306_33",
m_h5_err_3:"28306_34",
m_h5_err_4:"28306_35",
m_h5_err_5:"28306_36",
v_h5_err_total:"28306_37",
v_h5_err_1:"28306_38",
v_h5_err_2:"28306_39",
v_h5_err_3:"28306_40",
v_h5_err_4:"28306_41",
v_h5_err_5:"28306_42",
m_wx_pv_2:"28306_43",
v_wx_pv_2:"28306_44",
m_wx_pv_1:"28306_50",
v_wx_pv_1:"28306_55",
m_wx_err_1:"28306_58",
m_wx_err_2:"28306_59",
v_wx_err_1:"28306_60",
v_wx_err_2:"28306_61",
v_stoped_android:"59288_1",
v_stoped_ios:"59288_0",
v_paused_android:"59288_7",
v_paused_ios:"59288_6",
m_stoped_android:"59288_3",
m_stoped_ios:"59288_2",
m_paused_android:"59288_9",
m_paused_ios:"59288_8",
k_stoped_android:"59288_5",
k_stoped_ios:"59288_4",
k_paused_android:"59288_11",
k_paused_ios:"59288_10",
k_pv:"28306_66",
k_wx_pv:"28306_67",
k_h5_pv:"28306_69",
k_unload_wx_pv:"28306_71",
k_h5_err_total:"28306_72",
k_h5_err_1:"28306_74",
k_h5_err_2:"28306_75",
k_h5_err_3:"28306_76",
k_h5_err_4:"28306_77",
k_h5_err_5:"28306_78",
k_wx_pv_1:"28306_79",
k_wx_pv_2:"28306_81",
k_wx_err_1:"28306_83",
k_wx_err_2:"28306_85",
aac_pv:"28306_104",
ios_aac_err_1:"28306_106",
ios_aac_err_2:"28306_108",
android_aac_err_1:"28306_110",
android_aac_err_2:"28306_112",
v_seek_err:"28306_114",
android_aac_err_3:"28306_116",
ios_aac_err_3:"28306_118",
QMClient_pv:"62866_0",
QMClient_play:"62866_1",
QMClient_js_num:"62866_2",
QMClient_js_suc:"62866_3",
QMClient_js_err:"62866_5",
QMClient_js_timeout:"62866_7",
QMClient_js_network:"62866_9"
};
});define("pages/report.js",["biz_wap/utils/ajax.js","pages/version4video.js"],function(e){
"use strict";
function i(e){
var i=["/mp/pagereport?type=","undefined"==typeof e.type?1:e.type,"&comment_id=",e.comment_id||"","&voiceid=",e.voiceid||"","&action=",e.action,"&__biz=",parent.window.biz||"","&mid=",parent.window.mid||"","&idx=",parent.window.idx||"","&scene=",parent.window.scene||"","&t=",Math.random()].join("");
s({
type:"GET",
url:i,
timeout:2e4
});
}
function t(e){
s({
type:"POST",
url:"/mp/videoreport?#wechat_redirect",
timeout:5e3,
async:e.async===!0?!0:!1,
data:e.data
});
}
function o(e){
for(var i=JSON.parse(JSON.stringify(e.data)),t=[],o=0,n=i.seek_position.length;n>o;o++){
var a=i.seek_position[o];
if(a&&a.length>0){
var d=a.join("#");
t.push(d||"");
}else t.push("");
}
i.seek_position=t;
for(var r=[],o=0,n=i.seek_loaded.length;n>o;o++){
var a=i.seek_loaded[o];
if(a&&a.length>0){
var d=a.join(",");
r.push(d||"");
}else r.push("");
}
i.seek_loaded=r;
for(var p=[],c=30;i.musicid.length>0;){
var a={};
for(var o in i)i.hasOwnProperty(o)&&("[object Array]"==Object.prototype.toString.call(i[o])?(a[o]=i[o].splice(0,c),
a[o]=a[o].join("mtitle"==o?";#":";")):a[o]=i[o]);
p.push(a);
}
return p;
}
function n(e){
var i=window.cgiData&&window.cgiData.txvideo_openid?window.cgiData.txvideo_openid:"",t=encodeURIComponent(parent.window.location.href.replace(/(\?|&)(key|uin)=([\S\s]*?)(&|$)/g,"$1").replace(/&$/,"")),o=["http://btrace.qq.com/kvcollect?BossId=2973&Pwd=1557019983&step=1009&vid=","undefined"!=typeof e.vid?e.vid:"","&platform=",d(),"&val=","undefined"!=typeof e.val?e.val:"","&val1=","undefined"!=typeof e.val1?e.val1:"","&vurl=",encodeURIComponent(e.vurl),"&t=",Math.random(),"&url=",t,"&wx_openid=",i].join(""),n=new Image;
n.src=o.substr(0,1024);
}
function a(e){
if(3==e.step||6==e.step||1999==e.step){
var i=window.cgiData&&window.cgiData.txvideo_openid?window.cgiData.txvideo_openid:"",t=encodeURIComponent(parent.window.location.href.replace(/(\?|&)(key|uin)=([\S\s]*?)(&|$)/g,"$1").replace(/&$/,"")),o=["http://btrace.qq.com/kvcollect?BossId=2973&Pwd=1557019983&step=",e.step,"&vid=","undefined"!=typeof e.vid?e.vid:"","&platform=",d(),"&loadwait=","undefined"!=typeof e.loadwait?e.loadwait:"","&val=","undefined"!=typeof e.val?e.val:"","&t=",Math.random(),"&url=",t,"undefined"!=typeof e.vt&&""!==e.vt&&6==e.step?"&vt="+e.vt:"","&wx_openid=",i].join(""),n=new Image;
n.src=o.substr(0,1024);
}
}
function d(){
var e=_.device;
return e.ipad?60101:e.is_android_phone?60301:e.iphone?60401:e.is_android_tablet?60501:"";
}
function r(){
var e=_.device;
return e.ipad?"v4010":e.is_android_phone&&_.isUseProxy()?"v5060":e.is_android_phone?"v5060":e.iphone&&_.isUseProxy()?"v3060":e.iphone?"v3060":e.is_android_tablet?"v6010":"";
}
function p(e){
var i={
mid:window.mid||0,
__biz:window.biz||0,
idx:window.idx||0,
musicid:[],
hasended:[],
commentid:[],
scene_type:e.type||0,
mtitle:[],
detail_click:[],
app_btn_kv:0,
app_btn_click:0,
app_btn_type:0,
errorcode:[],
seek:[],
seek_position:[],
duration2:[],
play_duration2:[],
play_last_time:[],
local_time:[],
seek_loaded:[]
};
return i;
}
function c(){
var e={
videoerror:0,
like_kv_vid:"",
like_click_vid:"",
like_kv_alginfo:"",
like_click_alginfo:"",
tad:"",
page:0,
like_click_type:0,
iplat:2,
ptype:1,
rtype:"",
getvinfo_ret:-1,
getvinfo_time:0,
v_err_code:0,
loadwait:0,
hasended:0,
last_ms:0,
duration_ms:0,
app_btn_kv:0,
app_btn_click:0,
app_btn_type:0,
mid:"",
__biz:"",
idx:"",
detail_click:0,
vtitle:"",
vid:"",
commentid:"",
scene_type:0,
replay:0,
full_screen:0,
quick_play:0,
ad_play_time:-1,
video_play_time:-1,
click_play_button:0,
traceid:"",
webviewid:"",
orderid:0,
play_time:0,
client_time_when_play:Math.round(+new Date/1e3),
drag_times:"",
pause_num:0,
h5_profile:0,
to_article:0,
desc_more_click:0,
desc_more_show:0,
fromid:0,
openid:window.cgiData&&window.cgiData.txvideo_openid?window.cgiData.txvideo_openid:"",
file_size:0,
rate:0,
resolution:0,
format:"",
vt:"",
video_ext:"unknown",
content_url:parent.window.location.href,
auto_play:0,
ori_status:3,
hit_bizuin:"",
sessionid:window.sessionid||"",
hit_vid:""
};
return e;
}
function l(e,i,t){
var o=0,n=[],a={};
if(i&&"[object String]"==Object.prototype.toString.call(i))o=1,"img"==t&&(i=encodeURIComponent(i)),
n.push("log0="+i),a.log0=i;else if(i&&"[object Array]"==Object.prototype.toString.call(i)){
o=i.length;
for(var d=0;o>d;d++){
var r="img"==t?encodeURIComponent(i[d]):i[d];
n.push("log"+d+"="+r),a["log"+d]=r;
}
}
if("img"==t){
var p=new Image,c="//mp.weixin.qq.com/mp/jsmonitor?idkey="+e;
o>0&&(c+="&lc="+o+"&"+n.join("&")),c+="&t="+Math.random(),p.src=c;
}else{
var l={};
o>0&&(l=a),l.idkey=e,l.lc=o,s({
type:"POST",
url:"//mp.weixin.qq.com/mp/jsmonitor?",
timeout:1e4,
data:l,
dataType:"json"
});
}
}
var s=e("biz_wap/utils/ajax.js"),_=e("pages/version4video.js");
return{
report:i,
videoreport:t,
getPlatformType:d,
getsdtfrom:r,
getinfoReport:n,
qqvideo_common_report:a,
musicreport:o,
getMusicReportData:p,
getVideoReportData:c,
logReport:l
};
});define("pages/player_adaptor.js",["pages/music_player.js","biz_wap/utils/jsmonitor_report.js","pages/loadscript.js","pages/music_report_conf.js"],function(t){
"use strict";
function i(t,i){
0!=t.type&&1!=t.type||!p.inQMClient?"function"==typeof i.callback&&i.callback(new a.init(t)):(p.initPlayerQueue.push(e("QMClient",t,i)),
n("QMClient"));
}
function e(t,i,e){
var n=p.config[t].func;
return function(t,i,e,n){
return function(){
"function"==typeof window[i]?"function"==typeof n.callback&&n.callback(new o(e,{
type:t
})):"function"==typeof n.callback&&n.callback(new a.init(e));
};
}(t,n,i,e);
}
function n(t){
var i=p.config[t];
if(1!=i.jsLoadState){
if(2==i.jsLoadState||3==i.jsLoadState)return void r();
i.jsLoadState=1;
var e=+new Date,n=l[t+"_js_num"];
n&&(n=n.split("_"),u.setSum(n[0],n[1],1)),c({
url:i.jsLink,
timeout:1e4,
type:"JS",
callback:function(){
+new Date-e;
2==i.jsLoadState,r();
var n=l[t+"_js_suc"];
n&&(n=n.split("_"),u.setSum(n[0],n[1],1));
},
onerror:function(n){
+new Date-e;
i.jsLoadState=3,r();
var s=l[t+"_js_err"],o=l[t+"_js_timeout"],a=l[t+"_js_network"];
if(s&&o&&a)switch(s=s.split("_"),o=o.split("_"),a=a.split("_"),u.setSum(s[0],s[1],1),
1*n){
case 400:
u.setSum(a[0],a[1],1);
break;

case 500:
u.setSum(o[0],o[1],1);
}
}
});
}
}
function r(){
for(var t=0,i=p.initPlayerQueue.length;i>t;t++)"function"==typeof p.initPlayerQueue[t]&&p.initPlayerQueue[t]();
p.initPlayerQueue=[];
}
function s(){
for(var t in p.config)"function"==typeof p[t+"EvInit"]&&p[t+"EvInit"]();
}
function o(t,i){
if(this.opt=t,this.opt2=i,this._g={
_blockPlugin:{},
playType:"-1"
},"QMClient"==i.type&&p.inQMClient){
var e=p.config[i.type];
e.playerObj||(p.config[i.type].playerObj=new window[e.func]),this._g.playType=i.type,
this.player=e.playerObj,this._initPlugins(),this._bindQMEvent();
}
}
var a=t("pages/music_player.js"),u=t("biz_wap/utils/jsmonitor_report.js"),c=t("pages/loadscript.js"),l=t("pages/music_report_conf.js"),p={
debug:location.href.indexOf("_qqclient=1")>0?!0:!1,
config:{
QMClient:{
func:"Player",
playerObj:null,
jsLink:"https://imgcache.qq.com/music/h5/player/player.js?max_age=604800&v=1",
jsLoadState:-1
}
},
inQMClient:!1,
initPlayerQueue:[]
};
return p.QMClientEvInit=function(){
if(p.inQMClient=window.navigator.userAgent.indexOf("QQMusic/")>0||p.debug?!0:!1,
p.inQMClient&&window.msg_cdn_url&&window.msg_title){
var t=window.location.href,i=a.getQuery("scene",t);
i&&(t=t.replace("&scene="+i,"").replace("?scene="+i,"")),t=t.replace(/#rd$/,"").replace(/#wechat_redirect$/,""),
-1==t.indexOf("?")&&(t+="?"),t+="&scene=112#wechat_redirect";
var e=function(t){
window.WebViewJavascriptBridge?t():document.addEventListener("WebViewJavascriptBridgeReady",t);
},n=(window.msg_title||"").html(!1),r=(window.msg_desc||"").html(!1);
e(function(){
M.client.invoke("ui","setActionBtn",{
type:"icon",
content:"share"
},function(){
M.client.invoke("other","callShareWeb",{
imgUrl:window.msg_cdn_url,
link:t,
title:n,
desc:r
});
});
});
}
},s(),o.prototype={
_initPlugins:function(){
this.opt.plugins||(this.opt.plugins=[]);
for(var t=this.opt.plugins,i=0,e=t.length;e>i;++i){
var n=t[i];
n.setPlayer(this),!!n.init&&n.init();
}
},
_trigger:function(t,i){
var e=this.opt,n=this._g,r=e.plugins,s=n._blockPlugin[t]||n._blockPlugin.all,o=0;
if(s&&"function"==typeof s.recv&&(o|=s.recv(t,i),1&o))return!1;
for(var a=0,u=r.length;u>a&&(o|=r[a].recv(t,i),!(2&o));++a);
if(!(4&o)){
var c=this["__"+t+"Handler"];
c&&c.call(this,i);
}
8&o||this.__triggerOutside(t,i);
},
__triggerOutside:function(){
var t=arguments,i=t[0];
if(i){
i=i.substr(0,1).toUpperCase()+i.substr(1);
var e=this.opt["on"+i];
"function"==typeof e&&e.apply(this,t);
}
},
_setBlockPlugin:function(t,i){
this._g._blockPlugin[t]=i;
},
_bindQMEvent:function(){
var t=this;
this.player.on("play",function(i){
i&&i.song&&i.song.mid==t.opt.mid?(t._trigger("statusChange",1),t._trigger("QMClientPlay")):t._trigger("statusChange",3);
}),this.player.on("pause",function(i){
i&&i.song&&i.song.mid==t.opt.mid&&t._trigger("statusChange",2);
}),this.player.on("stop",function(i){
i&&i.song&&i.song.mid==t.opt.mid&&t._trigger("statusChange",3);
});
},
play:function(){
"QMClient"==this._g.playType&&this.player.play(this.opt.mid);
},
pause:function(){
this.player.pause();
},
stop:function(){
this.player.stop();
},
getDuration:function(){
return this.opt.duration?this.opt.duration:"QMClient"==this._g.playType?this.player.duration||0:0;
},
getCurTime:function(){
return"QMClient"==this._g.playType?this.player.currentTime||0:0;
},
surportSeekRange:function(){
return!1;
},
getSrc:function(){
return"";
},
destory:function(){},
seek:function(){},
setDuration:function(){},
setSrc:function(){}
},{
create:i,
inQMClient:p.inQMClient
};
});define("pages/music_player.js",["biz_wap/utils/mmversion.js","pages/report.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","pages/version4video.js","biz_wap/utils/jsmonitor_report.js","appmsg/log.js"],function(t){
"use strict";
function e(){
b.hasInit||(b.hasInit=!0,p(),c(),r());
}
function i(t){
var i=this;
e(),this._o={
plugins:[],
protocal:"",
wxIndex:0,
type:0,
src:"",
jsapi2Src:"",
mid:"",
autoPlay:!1,
duration:0,
needVioceMutex:!0,
title:"",
allowPause:!1,
singer:"",
epname:"",
coverImgUrl:"",
webUrl:"",
musicbar_url:"",
fileSize:0,
onStatusChange:function(){},
onTimeupdate:function(){},
onError:function(){},
onUpdateSeekRange:function(){},
albumId:"",
audioList:[],
playAudioId:""
},this._extend(t),this._o.audioList.length&&this._o.audioList.forEach(function(t){
t.srcId=b.wxtag+i._o.albumId+"_"+t.audioId;
}),this._status=-1,this._g={
mutexKey:"",
jsapiSrcId:"",
hasCheckPlay:!1,
playTimeoutId:null,
stateChangeCallback:{},
_blockPlugin:{},
hasInitH5Event:!1,
h5Event:{},
totalPlayTime:0
},this._initPlugins(),this._fixAndroidSizeLimit(),0!==b.surportType&&(this._initData(),
this._synPlayStatus());
}
function o(t){
T.invoke("musicPlay",{
app_id:"a",
title:"微信公众平台",
singer:"微信公众平台",
epname:"微信公众平台",
coverImgUrl:"http://res.wx.qq.com/mpres/htmledition/images/favicon.ico",
dataUrl:b.ev,
lowbandUrl:b.ev,
webUrl:"http://mp.weixin.qq.com/s?"
},function(e){
"function"==typeof t&&t(e);
});
}
function a(t){
n({
cur:t,
stopCur:!1
});
}
function n(t){
function e(){
if(b.mutexCount==s&&(s=0,b.mutexCount=0,"function"==typeof a)){
var t=0;
1==b.surportType?t=2e3:3==b.surportType&&(t=0),setTimeout(function(){
a();
},t);
}
}
if(0!=b.mutexCount)return void setTimeout(function(){
n(t);
},200);
var i=t.cur,o=t.stopCur===!0?!0:!1,a=t.callback,s=0;
for(var u in b.mutexPlayers)for(var r=0,p=b.mutexPlayers[u].length;p>r;r++)s++;
for(var u in b.mutexPlayers)for(var r=0,p=b.mutexPlayers[u].length;p>r;r++){
var d=b.mutexPlayers[u][r];
if(d&&d!==i){
var l=d.getSurportType(),c="";
2!=l||1!=d._status&&4!=d._status?1!=l&&3!=l||1!=d._status&&2!=d._status&&4!=d._status||(c="stop"):c=d._o.allowPause?"pause":"stop",
c&&"function"==typeof d[c]?d[c](o,function(){
b.mutexCount++,e();
}):(b.mutexCount++,e());
}else b.mutexCount++,e();
}
}
function s(){
return b.surportType;
}
function u(t,e){
return new i(t,e);
}
function r(){
b.surportType>0&&b.isAndroidLow&&window.addEventListener("canplay",function(t){
t.target&&"function"==typeof t.target.play&&t.target.play();
},!0);
}
function p(){
b.jsapiGlobalEvent={
error:_,
pause:y,
stop:h,
play:g,
preempted:h,
waiting:f
};
}
function d(t){
return"&"+b.wxtag+"="+t;
}
function l(t,e){
e=e||"info";
var i="[musicplay]"+t+"[location:"+location.href+"]";
I(i,e);
}
function c(){
T.on("onBackgroundAudioStateChange",function(t){
if(t.state){
var e;
t.albumId?(e=t.albumId,t.srcId=""):t.srcId&&t.audioId&&(e=t.srcId.match(new RegExp(b.wxtag+"(.*?)_"+t.audioId)))?(e=e[1],
t.srcId="",t.albumId=e):(e=P(b.wxtag,t.src)||"",e&&(e=d(e)));
var i=b.mutexPlayers[t.src]||b.mutexPlayers2[t.src]||b.mutexPlayers[e];
if(i){
var o;
if(t.srcId)for(var a=0,n=i.length;n>a;a++)i[a]._g.jsapiSrcId==t.srcId&&(o=i[a]);else if(1==i.length)o=i[0];else for(var a=0,n=i.length;n>a;a++)if(-1!=i[a]._status&&0!=i[a]._status&&3!=i[a]._status){
o=i[a];
break;
}
if(o&&o._g.stateChangeCallback){
t.albumId===o._o.albumId&&t.audioId!==o.getPlayAudioId()&&(o.setPlayAudioId(t.audioId),
o._initJsapiData());
var s=t.state;
"ended"==s&&(s="stop"),"wait"==s&&(s="waiting");
var u=!1,r=JSON.stringify(t||{});
if("error"==s){
o.jsapiLog("onBackgroundAudioStateChange error;res:"+r);
for(var p in o._g.stateChangeCallback)o._g.stateChangeCallback.hasOwnProperty(p)&&"function"==typeof o._g.stateChangeCallback[p]&&(u=!0,
o._g.stateChangeCallback[p](-1,t.errMsg||""),o._g.stateChangeCallback[p]=null);
}else"function"==typeof o._g.stateChangeCallback[s]&&(b.debug,o.jsapiLog("onBackgroundAudioStateChange "+s+";res:"+r),
u=!0,o._g.stateChangeCallback[s](0),o._g.stateChangeCallback[s]=null);
u||"function"!=typeof b.jsapiGlobalEvent[s]||(o.jsapiLog("onBackgroundAudioStateChange "+s+" unHandle;res:"+r),
b.jsapiGlobalEvent[s](t,o));
}
}
}
});
}
function _(t,e){
e.stop(!1),e._trigger("jsapi2PlayingErr");
}
function h(t,e){
e.stop(!1,null,t),e._trigger("jsapi2PlayingStop");
}
function y(t,e){
e.pause(!1,null,!0),e._trigger("jsapi2PlayingPause");
}
function g(t,e){
1!=e._status&&e.resume(!1,null,!0);
}
function f(t,e){
e.onload();
}
function m(){
for(var t in b.mutexPlayers)if(b.mutexPlayers.hasOwnProperty(t))for(var e=0,i=b.mutexPlayers[t].length;i>e;e++){
var o=b.mutexPlayers[t][e];
if(o&&1==o._status&&(1==o._surportType||3==o._surportType)){
o._trigger("unloadPlaying");
break;
}
}
}
function P(t){
var e=arguments[1]||window.location.search,i=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),o=e.substr(e.indexOf("?")+1).match(i);
return null!=o?o[2]:"";
}
function S(t,e,i){
function o(t,e){
for(;b.synPlayStatusArr.length>0;){
var i=b.synPlayStatusArr.shift();
i&&"function"==typeof i[t]&&i[t](e);
}
}
b.synPlayStatusArr.push({
_t:t,
onSuccess:e,
onError:i
}),b.synPlayStatusId&&clearTimeout(b.synPlayStatusId),b.synPlayStatusId=setTimeout(function(){
t._jsapi_getMusicPlayerState({
onSuccess:function(t){
o("onSuccess",t);
},
onError:function(t){
o("onError",t);
}
});
},0);
}
var v=t("biz_wap/utils/mmversion.js"),T=(t("pages/report.js"),t("biz_common/dom/event.js"),
t("biz_wap/jsapi/core.js")),A=t("pages/version4video.js"),I=(t("biz_wap/utils/jsmonitor_report.js"),
t("appmsg/log.js")),b={
hasInit:!1,
synPlayStatusId:null,
synPlayStatusArr:[],
inWechat:!A.device.inWechat||A.device.inWindowWechat||A.device.inMacWechat?!1:!0,
mutexCount:0,
ev:0!=window._empty_v.indexOf(window.location.protocol)?"http:"+window._empty_v:window._empty_v,
debug:location.href.indexOf("vconsole=1")>0||document.cookie&&document.cookie.indexOf("vconsole_open=1")>-1?!0:!1,
_playtype:1*P("_playtype")||0,
isAndroidLow:/android\s2\.3/i.test(navigator.userAgent),
isAndroid:v.isAndroid,
surportType:"addEventListener"in window?2:0,
mutexPlayers:{},
mutexPlayers2:{},
wxtag:"__wxtag__"
};
return i.prototype._initPlugins=function(){
for(var t=this._o.plugins,e=0,i=t.length;i>e;++e){
var o=t[e];
o.setPlayer(this),!!o.init&&o.init();
}
},i.prototype._trigger=function(t,e){
var i=this._o,o=this._g,a=i.plugins,n=o._blockPlugin[t]||o._blockPlugin.all,s=0;
if(n&&"function"==typeof n.recv&&(s|=n.recv(t,e),1&s))return!1;
for(var u=0,r=a.length;r>u&&(s|=a[u].recv(t,e),!(2&s));++u);
if(!(4&s)){
var p=this["__"+t+"Handler"];
p&&p.call(this,e);
}
8&s||this.__triggerOutside(t,e);
},i.prototype.__triggerOutside=function(){
var t=arguments,e=t[0];
if(e){
e=e.substr(0,1).toUpperCase()+e.substr(1);
var i=this._o["on"+e];
"function"==typeof i&&i.apply(this,t);
}
},i.prototype._setBlockPlugin=function(t,e){
this._g._blockPlugin[t]=e;
},i.prototype._synPlayStatus=function(){
function t(t){
if(s&&clearTimeout(s),n.hasCheckPlay===!0,n.hasCheckPlay=!0,o._surportType=3,b.surportType=3,
!!b.debug&&console.log("_synPlayStatus mutexKey:"+n.mutexKey),t&&t.audioListState)try{
t.audioListState=JSON.parse(t.audioListState),t.albumId=t.audioListState.albumId;
}catch(i){}
if(a.albumId){
if(t.albumId&&a.albumId===t.albumId){
var u="waiting"==t.playState||"seeked"==t.playState||"seeking"==t.playState||"play"==t.playState;
o._onAlbumSync({
action:"updatePlayStatus",
isPlay:u
});
}else o._onAlbumSync({
action:"updatePlayStatus",
isPlay:!1
});
e(t);
}else if(t.src&&(a.src==t.src||t.src.indexOf(n.mutexKey)>=0)){
if(t.srcId){
if(t.srcId!=n.jsapiSrcId)return;
}else if(b.mutexPlayers[n.mutexKey].length>1&&b.mutexPlayers[n.mutexKey][0]!==o)return;
e(t);
}
}
function e(t){
o._initJsapiData({
curTime:t.currentTime,
bufferedPercent:t.bufferedPercent,
starTime:+new Date-1e3*t.currentTime
}),o._trigger("jsapi2Begin2Play",t);
var e=o.jsApiData,i="waiting"==t.playState||"seeked"==t.playState||"seeking"==t.playState||"play"==t.playState;
!t.paused||i?(o._onPlay(),o._analogUpdateTime()):(o._onTimeupdate(null,e.curTime),
o._onPause()),o._getMusicPlayerState();
}
function i(){
s&&clearTimeout(s),n.hasCheckPlay!==!0&&(n.hasCheckPlay=!0,o._o.autoPlay&&o.play());
}
var o=this,a=this._o,n=this._g;
if(!b.inWechat||1*b._playtype>0)return n.hasCheckPlay=!0,void(o._o.autoPlay&&o.play());
var s;
S(o,t,i);
+new Date;
s=setTimeout(function(){
i();
},a.syncTimeout||1e4);
},i.prototype._fixAndroidSizeLimit=function(){
if(!(1*b._playtype>0)&&b.isAndroid){
var t=this._o;
!t.fileSize||t.fileSize>300||v.gtVersion("6.3.28",!0)||(this._trigger("androidForceH5"),
this._g._playtype=2);
}
},i.prototype._createAutoAndPlay=function(){
function t(){
function t(){
e._h5Audio.src=e._o.albumId&&e._o.playAudioId?e.getPlayAudioOpt().src:e._o.src;
}
e._trigger("h5Begin2Play"),e._h5Audio=document.createElement("audio"),e._initH5Data(!0),
e._H5bindEvent(!0),e._h5Audio.setAttribute("style","height:0;width:0;display:none"),
e._h5Audio.setAttribute("autoplay",""),e._status=0,e._onLoading(),b.isAndroidLow?(t(),
document.body.appendChild(e._h5Audio),e._h5Audio.load()):(document.body.appendChild(e._h5Audio),
setTimeout(function(){
t(),e._h5Audio.play();
},0)),e._surportType=2;
}
var e=this;
b.inWechat?this._stopJsapiPlay(!0,function(){
t();
}):t();
},i.prototype._destoryH5Audio=function(){
this._h5Audio&&(-1!=this._status&&"function"==typeof this._h5Audio.pause&&this._h5Audio.pause(),
document.body.removeChild(this._h5Audio),this._h5Audio=null,this._status=-1);
},i.prototype._onLoading=function(t){
this._status=4;
try{
a(this);
}catch(t){}
"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status),
this._endCountTime();
},i.prototype._onPlay=function(t){
this._status=1;
try{
a(this);
}catch(t){}
"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status),
this._startCountTime();
},i.prototype._onPause=function(t){
this._status=2,"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status),
this._endCountTime();
},i.prototype._onAlbumSync=function(t){
"function"==typeof this._o.onAlbumSync&&this._o.onAlbumSync.call(this,t||{});
},i.prototype.getAudioListState=function(t,e){
T.invoke("getBackgroundAudioState",{
albumId:t
},function(t){
if(t&&t.audioListState){
if("string"==typeof t.audioListState)try{
t.audioListState=JSON.parse(t.audioListState);
}catch(i){
t.audioListState={};
}
e(t.audioListState);
}
});
},i.prototype._onEnd=function(t){
this._status=3,"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status),
this._endCountTime();
},i.prototype._onLoadedmetadata=function(t){
"function"==typeof this._o.onLoadedmetadata&&this._o.onLoadedmetadata.call(this,t||{});
},i.prototype._onUpdateSeekRange=function(t){
this.surportSeekRange()&&(t=Math.max(t,0),t=Math.min(t,100),"function"==typeof this._o.onUpdateSeekRange&&this._o.onUpdateSeekRange.call(this,t));
},i.prototype._onTimeupdate=function(t,e){
"function"==typeof this._o.onTimeupdate&&this._o.onTimeupdate.call(this,t||{},e),
e>0&&this._startCountTime();
},i.prototype._onError=function(t,e){
this._status=-1,"function"==typeof this._o.onError&&this._o.onError.call(this,t||{},e);
},i.prototype._initH5Event=function(){
var t=this,e=this._o,i=this._g;
if(!t._g.hasInitH5Event){
t._g.hasInitH5Event=!0;
var o=i.h5Event;
o.canplaythrough=function(e){
t._h5Audio&&(!!b.debug&&console.log("h5 canplaythrough"),t._h5Data.firstCanplaythrough=!0,
t._onPlay(e),t._onUpdateSeekRange(t._h5Data.downloadDuration||0));
},o.play=function(e){
t._h5Audio&&(!!b.debug&&console.log("h5 "+e.type),t._h5Data.firstCanplaythrough===!0&&(t._onPlay(e),
t._onUpdateSeekRange(t._h5Data.downloadDuration||0)));
},o.ended=function(e){
t._h5Audio&&(!!b.debug&&console.log("h5 ended"),t._onUpdateSeekRange(t._h5Data.downloadDuration),
t._onEnd(e));
},o.pause=function(e){
t._h5Audio&&(!!b.debug&&console.log("h5 pause"),t._o.allowPause!==!0||0==t._h5Audio.currentTime?t._onEnd(e):t._onPause(e));
},o.waiting=function(e){
t._h5Audio&&(!!b.debug&&console.log("h5 "+e.type),(1==t._status||2==t._status||4==t._status)&&t._onLoading(e));
};
var a,n=100;
o.seeking=function(e){
t._h5Audio&&(!!b.debug&&console.log("h5 "+e.type),(1==t._status||2==t._status||4==t._status)&&t._onLoading(e),
a=setTimeout(function(){
!!b.debug&&console.log("seek loading Timeout excute"),a=null,t._trigger("seekNeed2Load");
},n));
},o.seeked=function(e){
t._h5Audio&&(!!b.debug&&console.log("h5 seeked"),(1==t._status||2==t._status||4==t._status)&&(t._onPlay(e),
t._h5Audio.play()),a&&(clearTimeout(a),a=null,t._trigger("seekNotNeed2Load")));
},o.error=function(e){
var i=1*e.target.error.code||5;
(1>i||i>5)&&(i=5),t._trigger("h5Error",{
code:i
}),t._onError(e,{
type:1,
code:i
}),t._destoryH5Audio();
},o.timeupdate=function(i){
t._h5Audio&&((1==t._status||4==t._status)&&t._onUpdateSeekRange(t._getH5DownloadDuration()),
1==t._status&&t._onTimeupdate(i,t._h5Audio.currentTime),"undefined"!=typeof e.duration&&1*e.duration>0&&t._h5Audio.currentTime>=e.duration&&t._h5Stop());
},o.loadedmetadata=function(e){
t._h5Audio&&t._onLoadedmetadata(e);
};
}
},i.prototype._H5bindEvent=function(t){
var e=(this._o,this._g),i={
canplaythrough:"canplaythrough",
play:"play",
playing:"play",
ended:"ended",
pause:"pause",
seeking:"seeking",
waiting:"waiting",
seeked:"seeked",
error:"error"
};
try{
for(var o in i)i.hasOwnProperty(o)&&this._h5Audio.removeEventListener(o,e.h5Event[i[o]]);
this._h5Audio.removeEventListener("timeupdate",e.h5Event.timeupdate),this._h5Audio.removeEventListener("loadedmetadata",e.h5Event.loadedmetadata);
}catch(a){}
if(t){
for(var o in i)i.hasOwnProperty(o)&&this._h5Audio.addEventListener(o,e.h5Event[i[o]],!1);
"function"==typeof this._o.onTimeupdate&&this._h5Audio.addEventListener("timeupdate",e.h5Event.timeupdate,!1),
"function"==typeof this._o.onLoadedmetadata&&this._h5Audio.addEventListener("loadedmetadata",e.h5Event.loadedmetadata,!1);
}
},i.prototype._initData=function(){
var t=this._o;
this._createMutexKey(),b.mutexPlayers[this._g.mutexKey]?b.mutexPlayers[this._g.mutexKey].push(this):b.mutexPlayers[this._g.mutexKey]=[this],
t.jsapi2Src&&t.jsapi2Src!=t.src&&(b.mutexPlayers2[t.jsapi2Src]?b.mutexPlayers2[t.jsapi2Src].push(this):b.mutexPlayers2[t.jsapi2Src]=[this]),
this._initH5Event();
},i.prototype._createMutexKey=function(){
if(this._o.albumId)this._g.mutexKey=this._o.albumId,this._g.jsapiSrcId=b.wxtag+"_"+this._o.wxIndex;else{
var t=this._o.mid||"";
this._o.src?(this._g.mutexKey=this._o.src,this._g.jsapiSrcId=b.wxtag+"_"+this._o.wxIndex):(this._g.mutexKey=d(t),
this._g.jsapiSrcId=this._g.mutexKey+"_"+this._o.wxIndex);
}
},i.prototype._extend=function(t){
for(var e in t)this._o[e]=t[e];
},i.prototype._initH5Data=function(t){
this._h5Data={
firstCanplaythrough:t===!0?!1:!0,
downloadDuration:0,
lastPlaytime:null
};
},i.prototype._initJsapiData=function(t){
t=t||{},this.jsApiData&&(this.jsApiData.updateTimeoutId&&clearTimeout(this.jsApiData.updateTimeoutId),
this.jsApiData.getStatusId&&clearTimeout(this.jsApiData.getStatusId)),this.jsApiData={
getStatusId:null,
getStatusTime:t.getStatusTime||2500,
updateTimeoutId:null,
seeking:!1,
starTime:t.starTime||+new Date,
curTime:t.curTime||0,
bufferedPercent:t.bufferedPercent||0,
duration:this._o.duration||t.duration||void 0,
lastPlaytime:null,
albumId:"",
audioId:""
};
},i.prototype._getMusicPlayerState=function(){
var t=this,e=t._o,i=t.jsApiData;
i&&i.getStatusId&&clearTimeout(i.getStatusId),t._jsapi_getMusicPlayerState({
onSuccess:function(o){
if(o&&o.audioListState&&"string"==typeof o.audioListState)try{
o.audioListState=JSON.parse(o.audioListState),o.albumId=o.audioListState.albumId;
}catch(a){
o.audioListState={};
}
(o.albumId&&o.albumId===e.albumId||o.src==e.jsapi2Src||o.src==e.src)&&(i.curTime=o.currentTime,
i.starTime=+new Date-1e3*o.currentTime,i.bufferedPercent=o.bufferedPercent,i.albumId=o.albumId||"",
i.audioId=o.audioId||"",(1==t._status||2==t._status||4==t._status)&&(i.getStatusId=setTimeout(function(){
t._getMusicPlayerState();
},i.getStatusTime)),t._onUpdateSeekRange(i.bufferedPercent),1==o.paused&&1==t._status?(b.debug&&console.log("_getMusicPlayerState force syn"),
t._pauseJsapiPlay(!1)):0==o.paused&&2==t._status&&(b.debug&&console.log("_getMusicPlayerState force syn"),
t._resumeJsapiPlay(!1))),t._o.onMusicPlayerInfo&&t._o.onMusicPlayerInfo(o);
},
onError:function(){
i.getStatusId=setTimeout(function(){
t._getMusicPlayerState();
},i.getStatusTime);
}
});
},i.prototype._analogUpdateTime=function(){
var t=this,e=t.jsApiData;
if(e){
if(e.updateTimeoutId&&clearTimeout(e.updateTimeoutId),1==t._status||2==t._status){
if(1==t._status&&(e.curTime=1*((+new Date-e.starTime)/1e3).toFixed(2)),e.curTime>=e.duration)return t._stopJsapiPlay(!1),
!0;
t._onTimeupdate(null,e.curTime);
}
return e.updateTimeoutId=setTimeout(function(){
t._analogUpdateTime();
},1e3),!1;
}
},i.prototype._jsapi_getMusicPlayerState=function(t){
var e=this._o,i={};
e.albumId&&(i.albumId=e.albumId),T.invoke("getBackgroundAudioState",{},function(i){
if(/:ok$/.test(i.err_msg)){
if(i.paused=1*i.paused,i.currentTime=i.currentTime?(1*i.currentTime).toFixed(2):0,
i.buffered){
var o=Math.floor(i.buffered/e.duration*100);
o=Math.max(o,0),o=Math.min(o,100),i.bufferedPercent=o;
}else i.bufferedPercent=0;
"function"==typeof t.onSuccess&&t.onSuccess(i);
}else"function"==typeof t.onError&&(console.log("get err invoke err",i),t.onError(i));
});
},i.prototype._jsapi_musicPlay=function(t){
if(this._h5Audio&&this._destoryH5Audio(),2==b._playtype)return void("function"==typeof t.onError&&t.onError({}));
var e=this,i=this._o;
this.jsapiLog("jsapi_musicPlay"),T.invoke("musicPlay",{
app_id:"a",
title:i.title,
singer:i.singer,
epname:i.epname,
coverImgUrl:i.coverImgUrl,
dataUrl:i.src,
lowbandUrl:i.src,
webUrl:i.webUrl
},function(o){
!!b.debug&&console.log("playlog:"+JSON.stringify(o||{})),o.err_msg.indexOf("ok")>=0?(e._trigger("jsapi1Begin2Play"),
e._surportType=1,b.surportType=1,e._initJsapiData(),e._onPlay(),"undefined"!=typeof i.duration&&1*i.duration>0&&e._analogUpdateTime(),
e._onUpdateSeekRange(0),"function"==typeof t.onSuccess&&t.onSuccess(o)):"function"==typeof t.onError&&t.onError(o);
});
},i.prototype._jsapi_setBackgroundAudioState=function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
this._h5Audio&&this._destoryH5Audio(),console.log("_playtype",b._playtype);
var e=t.onSuccess,i=t.onError,o=t.needStartMusicUI,a=t.playAudioId;
if("function"!=typeof e&&(e=function(){}),"function"!=typeof i&&(i=function(){}),
1*b._playtype>0){
var n={};
return n.err_code=1,void i(n);
}
var s=this,u=this._o,r=s._g;
console.log("invoke set setBackgroundAudioState with param",u),this.jsapiLog("jsapi_setBackgroundAudioState");
var p;
u.albumId?(s.setPlayAudioId(a),u.audioList.forEach(function(t){
t.audioId===a?(t.stopTime>=0&&t.stopTime<t.duration&&(t.startTime=t.stopTime),t.stopTime>=t.duration&&(t.startTime=0)):t.startTime=0;
}),p={
albumId:u.albumId,
playAudioId:a,
audioList:u.audioList
}):p={
protocol:u.protocal||"",
src:u.jsapi2Src||u.src,
lowbandUrl:u.jsapi2Src||u.src,
title:u.title,
epname:u.epname,
singer:u.singer,
srcId:r.jsapiSrcId,
coverImgUrl:u.coverImgUrl,
webUrl:u.webUrl,
musicbar_url:u.musicbar_url||"",
needStartMusicUI:1*o>0?1:0
},T.invoke("setBackgroundAudioState",p,function(t){
if(!!b.debug&&console.log("setBackgroundAudioState log:"+JSON.stringify(t||{})),
t.err_msg.indexOf("ok")>=0){
var a=1*s._status;
!o||1!==a&&2!==a&&4!==a?(e("waiting"),r.stateChangeCallback.play=function(t,o){
0==t?e("play"):0!=t&&i({
err_code:2,
err_msg:o||""
});
}):e();
}else t=t||{},t.err_code=1,i(t);
});
},i.prototype._jsapi_operateBackgroundAudio=function(t){
var e=this,i=(this._o,e._g),o=1*t.position||0,a=t.type;
this.jsapiLog("jsapi_operateBackgroundAudio;param:"+JSON.stringify(t||{})),T.invoke("operateBackgroundAudio",{
operationType:a,
currentTime:o
},function(e){
!!b.debug&&console.log("operateBackgroundAudio "+a+",position:"+o+", log:"+JSON.stringify(e||{})),
-1===e.err_msg.indexOf("ok")&&("function"==typeof t.onError&&t.onError(e),"seek"===a?(i.stateChangeCallback.seeking=null,
i.stateChangeCallback.seeked=null):i.stateChangeCallback[a]=null);
}),"seek"==a?(i.stateChangeCallback.seeking=function(e,i){
0==e&&"function"==typeof t.onSuccess?t.onSuccess("seeking",o):0!=e&&"function"==typeof t.onError&&t.onError({
err_msg:i||""
});
},i.stateChangeCallback.seeked=function(e,i){
0==e&&"function"==typeof t.onSuccess?t.onSuccess("seeked",o):0!=e&&"function"==typeof t.onError&&t.onError({
err_msg:i||""
});
}):i.stateChangeCallback[a]=function(e,i){
0==e&&"function"==typeof t.onSuccess?t.onSuccess():0!=e&&"function"==typeof t.onError&&t.onError({
err_msg:i||""
});
};
},i.prototype._jsapiPlay=function(){
{
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=this;
this._o;
}
console.log("supporttype",b.surportType);
var i=t.onError,o=t.onSuccess,a=t.needStartMusicUI,n=t.playAudioId;
"function"!=typeof i&&(i=function(){}),"function"!=typeof o&&(o=function(){}),1==b.surportType?a?i():this._jsapi_musicPlay({
onError:function(){
e._h5Play({
playAudioId:n
});
}
}):this._jsapi_setBackgroundAudioState({
playAudioId:n,
needStartMusicUI:a,
onSuccess:function(t){
"waiting"===t?(e._trigger("jsapi2Begin2Play",t),e._initJsapiData(),e._surportType=3,
b.surportType=3,e._onLoading()):"play"===t&&(e._initJsapiData(),e._onPlay(),e._analogUpdateTime(),
e._getMusicPlayerState(),e._trigger("jsapi2PlaySuccess")),"function"==typeof o&&(o(),
o=null,i=null);
},
onError:function(t){
t&&1==t.err_code&&!a?e._jsapi_musicPlay({
onError:function(){
e._h5Play({
playAudioId:n
});
}
}):(a||e._h5Play({
playAudioId:n
}),e._trigger("jsapi2Begin2PlayErr")),"function"==typeof i&&(i(),i=null,o=null);
}
});
},i.prototype._getJsapiDownloadSec=function(){
this._getMusicPlayerState();
var t=Math.floor(this._o.duration*this.jsApiData.bufferedPercent/100);
return!!b.debug&&console.log("downloadSec:"+t),t;
},i.prototype._jsapiSeek=function(t){
function e(){
a.seeking=!1,i._onPlay(),a.starTime=+new Date-1e3*b.seekingPosition,i._analogUpdateTime(),
i._getMusicPlayerState();
}
var i=this,o=this._g,a=(this._o,this.jsApiData),n=parseInt(t,10);
this._o.duration&&n>=this._o.duration&&(n=this._o.duration-1),a.getStatusId&&clearTimeout(a.getStatusId),
a.updateTimeoutId&&clearTimeout(a.updateTimeoutId),a.seekWaitId&&clearTimeout(a.seekWaitId),
a.seeking=!0;
var s,u,r=100;
b.seekingPosition=n,a.starTime=+new Date-1e3*b.seekingPosition,console.log("begin to seek to",n),
this._jsapi_operateBackgroundAudio({
type:"seek",
position:n,
onError:function(){
i._trigger("seekErr"),!!b.debug&&console.log("seek callback fail"),a.seeking=!1,
i._analogUpdateTime(),i._getMusicPlayerState();
},
onSuccess:function(t){
console.log("jsapi seek res is ",t),"seeking"==t?(!!b.debug&&console.log("seeking callback success"),
a.seeking=!0,o.stateChangeCallback.play=function(){
console.log("seeked to play"),s&&(clearTimeout(s),s=null),e();
},u=setTimeout(function(){
u=null,i._trigger("seekNeed2Load");
},r)):"seeked"==t&&((2==i._status||4==i._status)&&(s=setTimeout(function(){
!!b.debug&&console.log("setTimeout to play"),o.stateChangeCallback.play=null,a.seeking=!1,
a.curTime=n,i._resumeJsapiPlay(!0);
},1e3)),u&&(clearTimeout(u),u=null,i._trigger("seekNotNeed2Load")));
}
}),i._getMusicPlayerState();
},i.prototype._resumeJsapiPlay=function(t,e){
function i(t){
var e=o.jsApiData;
e.starTime=+new Date-1e3*e.curTime,o._onPlay(),o._analogUpdateTime(),o._getMusicPlayerState(),
"function"==typeof t&&t();
}
var o=this;
1==this._surportType?this._jsapiPlay():3==this._surportType&&(t?this._jsapi_operateBackgroundAudio({
type:"play",
onError:function(){
o._stopJsapiPlay(!1,function(){
o.play();
});
},
onSuccess:function(){
i(e);
}
}):i(e));
},i.prototype._pauseJsapiPlay=function(t,e,i){
function o(t){
var e=a.jsApiData;
a._analogUpdateTime(),a._getMusicPlayerState(),e.updateTimeoutId=null,t===!0&&e&&e.getStatusId&&clearTimeout(e.getStatusId),
1==a._status&&a._onPause();
}
var a=this;
return 2==a._status?(o(e),void("function"==typeof i&&i())):void(1==this._surportType?this._stopJsapiPlay(t,i):3==this._surportType&&(t?this._jsapi_operateBackgroundAudio({
type:"pause",
onSuccess:function(){
o(e),"function"==typeof i&&i();
},
onError:function(){
a._stopJsapiPlay(!0,i);
}
}):(o(e),"function"==typeof i&&i())));
},i.prototype._stopJsapiPlay=function(t,e,i){
function a(t,e){
n._onTimeupdate(null,0),n._onUpdateSeekRange(0),n._onEnd(null,e),n._initJsapiData(),
"function"==typeof t&&t();
}
{
var n=this;
n.jsApiData;
}
t?1==n._surportType?o(function(){
a(e);
}):n._jsapi_operateBackgroundAudio({
type:"stop",
onSuccess:function(){
a(e,i);
},
onError:function(){
a(e,i);
}
}):a(e,i);
},i.prototype._getH5DownloadSec=function(){
var t=Math.floor(this._o.duration*this._getH5DownloadDuration()/100);
return!!b.debug&&console.log("h5 downloadSec:"+t),t;
},i.prototype._getH5DownloadDuration=function(){
if(!this._h5Audio)return 0;
if(this._h5Data.downloadDuration>=100)return 100;
var t=this._h5Audio.buffered,e=t.end(t.length-1);
return this._h5Data.downloadDuration=this._o.albumId&&this._o.playAudioId?parseInt(e/this.getPlayAudioOpt().duration*100,10):parseInt(e/this._o.duration*100,10),
this._h5Data.downloadDuration;
},i.prototype._h5Play=function(t){
0!==b.surportType&&(this.jsapiLog("h5Play"),this.setPlayAudioId(t.playAudioId),this._h5Audio?(this._h5Audio.ended||this._h5Audio.paused)&&(this._trigger("h5Begin2Play"),
this._initH5Data(),this._onLoading(),this._H5bindEvent(!0),this._h5Audio.currentTime=0):this._createAutoAndPlay());
},i.prototype._h5Resume=function(){
this._h5Audio&&this._h5Audio.play();
},i.prototype._h5Stop=function(){
this._h5Audio&&(this._onUpdateSeekRange(0),this._onEnd(),this._H5bindEvent(!1),this._h5Audio.pause(),
this._h5Audio.currentTime=0,this._initH5Data());
},i.prototype._h5Seek=function(t){
if(this._h5Audio){
var e=(this._h5Data,parseInt(t,10));
e=Math.min(e,this._o.duration),!!b.debug&&console.log("h5 seek position:"+e),this._h5Audio.currentTime=e;
}
},i.prototype._startCountTime=function(){
1!=this._surportType&&3!=this._surportType||!this.jsApiData?this._h5Audio&&this._h5Data&&null===this._h5Data.lastPlaytime&&(this._h5Data.lastPlaytime=this._h5Audio.currentTime):null===this.jsApiData.lastPlaytime&&(this.jsApiData.lastPlaytime=this.jsApiData.curTime);
},i.prototype._endCountTime=function(){
if(1!=this._surportType&&3!=this._surportType||!this.jsApiData){
if(this._h5Audio&&this._h5Data){
var t=this._h5Audio,e=this._h5Data;
t.currentTime>0&&t.currentTime>e.lastPlaytime&&null!==e.lastPlaytime&&(this._g.totalPlayTime+=t.currentTime-e.lastPlaytime),
e.lastPlaytime=null;
}
}else{
var i=this.jsApiData;
i.curTime>0&&i.curTime>i.lastPlaytime&&null!==i.lastPlaytime&&(this._g.totalPlayTime+=i.curTime-i.lastPlaytime),
i.lastPlaytime=null;
}
},i.prototype._delMutexPlayers=function(){
var t=this._o,e=this._g.mutexKey,i=b.mutexPlayers[e];
if(i){
for(var o=0,a=i.length;a>o;o++)if(i[o]===this){
i.splice(o,1);
break;
}
if(0==i.length)try{
delete b.mutexPlayers[e];
}catch(n){}
}
if(t.jsapi2Src&&b.mutexPlayers2[t.jsapi2Src]){
for(var s=b.mutexPlayers2[t.jsapi2Src],o=0,a=s.length;a>o;o++)if(s[o]===this){
s.splice(o,1);
break;
}
if(0==s.length)try{
delete b.mutexPlayers2[t.jsapi2Src];
}catch(n){}
}
},i.prototype.resetPlayTotalTime=function(){
this._g.totalPlayTime=0;
},i.prototype.getPlayTotalTime=function(){
return this._endCountTime(),this._g.totalPlayTime;
},i.prototype.surportSeekRange=function(){
return 1==b._playtype?!1:2==this._surportType||3==this._surportType?!0:!1;
},i.prototype.setSrc=function(t){
-1==t.indexOf("?")&&(t+="?"),t+=d(this._o.mid),this._o.src=t,this._delMutexPlayers(),
this._g.mutexKey=this._o.src,b.mutexPlayers[this._g.mutexKey]?b.mutexPlayers[this._g.mutexKey].push(this):b.mutexPlayers[this._g.mutexKey]=[this];
},i.prototype.getSrc=function(){
return this._o.src||"";
},i.prototype.setDuration=function(t){
this._o.duration=t||0;
},i.prototype.getSurportType=function(){
return this._surportType||0;
},i.prototype.getPlayStatus=function(){
return this._status;
},i.prototype.getCurTime=function(){
return 1!=this._surportType&&3!=this._surportType||!this.jsApiData?this._h5Audio?this._h5Audio.currentTime:0:this.jsApiData.curTime||0;
},i.prototype.getDuration=function(){
return this._o.duration||void 0;
},i.prototype.pause=function(t,e,i){
return i===!0||this._o.allowPause?void(1==this._surportType||3==this._surportType?this._pauseJsapiPlay(t===!1?!1:!0,!1,function(){
"function"==typeof e&&e();
},function(){
"function"==typeof e&&e();
}):2==this._surportType&&this._h5Audio&&"function"==typeof this._h5Audio.pause&&(this._h5Audio.pause(),
"function"==typeof e&&e())):void this.stop(t,e);
},i.prototype.stop=function(t,e,i){
return 1==this._surportType||3==this._surportType?void this._stopJsapiPlay(t===!1?!1:!0,e,i):(2==this._surportType&&this._h5Audio&&this._h5Stop(),
void("function"==typeof e&&e()));
},i.prototype.destory=function(){
this.stop(),this._h5Audio&&(document.body.removeChild(this._h5Audio),this._h5Audio=null),
this._delMutexPlayers();
},i.prototype.resume=function(t,e,i){
(i===!0||2==this._status&&this._o.allowPause)&&(2==this._surportType&&this._h5Audio?this._h5Resume():b.inWechat&&this._resumeJsapiPlay(t===!1?!1:!0));
},i.prototype.onload=function(){
this._onLoading();
},i.prototype.jsapiLog=function(t,e){
try{
var i=this._o,o={
type:i.type,
src:i.src,
mid:i.mid,
protocal:i.protocal,
webUrl:i.webUrl,
musicbar_url:i.musicbar_url
},a="["+JSON.stringify(o)+"]"+t;
l(a,e);
}catch(n){}
},i.prototype.openStartMusicUI=function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=t.onError,i=t.onSuccess;
"function"!=typeof e&&(e=function(){}),"function"!=typeof i&&(i=function(){}),v.isWechat&&(v.isIOS||v.isAndroid)&&v.gtVersion("7.0.5",!0)?this._jsapiPlay({
needStartMusicUI:!0,
onError:function(){
e();
},
onSuccess:function(){
i();
}
}):e();
},i.prototype.play=function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=this,i=this._g;
if(e._o.src||e._o.albumId){
if(2==e._status&&e._o.allowPause){
if(e._o.src)return void e.resume();
if(e._o.playAudioId&&e._o.playAudioId===t.playAudioId)return void e.resume();
}
return i.playTimeoutId&&clearTimeout(i.playTimeoutId),i.hasCheckPlay?void(b.inWechat?this._jsapiPlay({
playAudioId:t.playAudioId
}):0!=b.surportType&&this._h5Play({
playAudioId:t.playAudioId
})):void(i.playTimeoutId=setTimeout(function(){
e.play();
},1e3));
}
},i.prototype.seek=function(t){
{
var e=this;
this._g;
}
if(1==e._status||2==e._status||4==e._status)return 3==this._surportType?(this._endCountTime(),
void this._jsapiSeek(t)):2==this._surportType&&this._h5Audio?(this._endCountTime(),
void this._h5Seek(t)):void 0;
},i.prototype.getBackgroundAudioState=function(t){
t||(t={}),T.invoke("getBackgroundAudioState",{},function(e){
/:ok$/.test(e.err_msg)?(e.paused=1*e.paused,t.success&&t.success(e)):t.error&&t.error(e);
});
},i.prototype.setOption=function(t){
this._extend(t),t.duration&&this.jsApiData&&(this.jsApiData.duration=t.duration);
},i.prototype.reverseList=function(t){
this._o.audioList.reverse(),this.update(t);
},i.prototype.update=function(t){
if(1===this._status||4===this._status){
var e=this._o.playAudioId;
this._o.audioList.forEach(function(i){
i.startTime=t&&e&&i.audioId===e?t:0;
}),T.invoke("setBackgroundAudioState",{
albumId:this._o.albumId,
playAudioId:this._o.playAudioId||this.jsApiData.audioId,
audioList:this._o.audioList
}),this._o.audioList.forEach(function(t){
console.log(t.audioId);
});
}
},i.prototype.getPlayAudioOpt=function(t){
if(t=t||this._o.playAudioId,!t)return null;
for(var e=0;e<this._o.audioList.length;e++)if(this._o.audioList[e].audioId===t)return this._o.audioList[e];
},i.prototype.getPlayAudioId=function(){
return this._o.playAudioId;
},i.prototype.setPlayAudioId=function(t){
this._o.playAudioId=t;
},{
init:u,
triggerUnloadPlaying:m,
isAndroid:b.isAndroid,
getSurportType:s,
getQuery:P
};
});define("appmsg/more_read_tpl.html.js",[],function(){
return'<p class="read-more__desc">你还可以看</p>\n<div class="read-more__article__area">\n  <# list.forEach(function (item) { #>\n    <div class="read-more__article__item">\n      <a href="javascript:;" class="more_read_link"><#=item.title#></a>\n      <# if (item.fans_read_cnt > 0) { #>\n        <p class="read-more__article__extra"><#=item.fans_read_cnt#>位好友读过</p>\n      <# } #>\n    </div>\n  <# }); #>\n</div>';
});define("appmsg/friend_comment_tpl.html.js",[],function(){
return'<#if(window.new_appmsg){#>\n    <div class="discuss_container" id="js_friend_cmt_main" style="display:none">\n        <div class="mod_title_context">\n            <strong class="mod_title">朋友留言</strong>\n            <!-- 没有付费才给写留言入口 -->\n            <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n            <p class="discuss_icon_tips tr" id="js_cmt_addbtn3" style="display:none">\n                <a href="javascript:;" id="js_cmt_write3">写留言</a> <!-- 有留言的时候的写留言入口 -->\n            </p>\n            <#}#>\n        </div>\n        <!-- <ul class="discuss_list" id="js_friend_cmt_list"></ul> -->\n        <!-- _js_friend_cmt放全部留言，用来计算总高度，展开的时候赋值给js_friend_cmt  -->\n        <!-- js_friend_cmt初始的时候放前三条留言，展开的时候把总高度加上  -->\n        <ul class="friend_cmt_area hide" id="js_friend_cmt_list_hide"></ul>\n        <ul class="friend_cmt_area" id="js_friend_cmt_list"></ul>\n        <p class="friend_cmt_readmore" style="display:none;" id="js_more_friend_cmt_area">\n            <a href="javascript:void(0);" id="js_more_friend_cmt">更多朋友留言</a>\n        </p>\n    </div>\n\n    <!-- 没有付费才给写留言入口 -->\n    <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n    <div class="discuss_container" id="js_cmt_addbtn4" style="display:none">\n      <div class="mod_title_context">\n        <p class="discuss_icon_tips tc">\n          <a href="javascript:;" id="js_cmt_write4">写留言</a> <!-- 没有留言的时候的写留言入口 -->\n        </p>\n      </div>\n    </div>\n    <#}#>\n\n<#}else{#>\n    <div class="discuss_container" id="js_friend_cmt_main" style="display:none">\n        <p class="discuss_icon_tips title_bottom_tips tr" id="js_cmt_addbtn3" style="display:none">\n            <!-- 没有付费才给写留言入口 -->\n            <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n            <a href="javascript:;" id="js_cmt_write3"><img class="icon_edit" src="<#=window.comment_edit_icon#>" alt="">留言</a>\n            <#}#>\n        </p>\n        <div class="rich_tips with_line title_tips discuss_title_line">\n            <span class="tips">朋友留言</span>\n        </div>\n        <!-- <ul class="discuss_list" id="js_friend_cmt_list"></ul> -->\n        <!-- _js_friend_cmt放全部留言，用来计算总高度，展开的时候赋值给js_friend_cmt  -->\n        <!-- js_friend_cmt初始的时候放前三条留言，展开的时候把总高度加上  -->\n        <ul class="friend_cmt_area hide" id="js_friend_cmt_list_hide"></ul>\n        <ul class="friend_cmt_area" id="js_friend_cmt_list"></ul>\n        <p class="friend_cmt_readmore" style="display:none;" id="js_more_friend_cmt_area">\n            <a href="javascript:void(0);" id="js_more_friend_cmt">更多朋友留言</a>\n        </p>\n    </div>\n\n    <p class="discuss_icon_tips rich_split_tips tc" id="js_cmt_addbtn4" style="display:none">\n        <!-- 没有付费才给写留言入口 -->\n        <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n        <a href="javascript:;" id="js_cmt_write4"><img class="icon_edit" src="<#=window.comment_edit_icon#>" alt="">留言</a>\n        <#}#>\n    </p>\n\n<#}#>\n';
});define("appmsg/comment_pc_tpl.html.js",[],function(){
return' <!-- pc端文章页留言 -->\n<#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n<div class="comment_primary_area" id="js_comment_pc" style="display:none">\n    <div class="comment_primary_form" id="js_cmt_addbtn_pc">\n        <div class="comment_primary_form_hd">  \n        <img src="http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0" alt="" class="comment_primary_avatar"\n        id="js_avatar_pc">\n        </div>\n        <div class="comment_primary_form_bd" id="js_cmt_panel_pc">\n            <div class="comment_primary_input_default" id="js_cmt_input_pc" style="display: none">写下你的留言</div>\n            <div class="comment_primary_input_wrp" id="js_cmt_container_pc" style="display: none">\n                <div class="comment_primary_input" id="js_cmt_input" contenteditable="true"></div>\n                <div class="comment_primary_input_placeholder" id="js_cmt_input_holder"> \n                    留言将由公众号筛选后显示，对所有人可见                </div>\n\n                <div class="comment_primary_tool" id="js_comment_tool_pc">\n                    <div class="comment_primary_emotion_wrp" id="js_emotion_wrp_pc">\n                    <span class="icon_comment_primary_emotion">\n                    </span>\n                    </div>               \n                    <button disabled="disabled" class="reset_btn comment_primary_btn" id="js_cmt_submit">留言</button>\n                    <!-- 超出字数往comment_primary_counter加comment_primary_counter_warn  -->\n                    <span class="comment_primary_counter" id="js_length_notice_pc" style="display: none">\n                    <em id="js_word_length_pc"></em>\n                    /\n                    <span>600</span>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="comment_primary_list_wrp" id="js_cmt_myarea_pc" style="display:none">\n        <ul class="comment_primary_list" id="js_cmt_mylist_pc">\n        </ul>\n        <!-- 展开的时候js_expand_and_fold_pc加comment_primary_more_access_unfold  -->\n        <p class="comment_primary_more_access" id="js_expand_and_fold_pc" style="display: none;"></p>\n        <div class="rich_split_tips tc discuss_end_tips" style="display:block">\n        <div class="weui-loadmore weui-loadmore_line">\n            <span class="weui-loadmore__tips">以上留言被公众号精选后，将对所有人可见</span>\n        </div>\n        </div>\n    </div>\n\n    <div class="weui-toast__wrp weui-transition_opacity-hide" id="js_success_panel_pc">\n    <div class="weui-mask_transparent"></div>\n    <div class="weui-toast">\n        <i class="weui-icon-success-no-circle weui-icon_toast"></i>\n        <p class="weui-toast__content">已留言</p>\n    </div>\n    </div>\n\n    <div class="weui-toast__wrp weui-transition_opacity-hide" id="js_reply_success_pc">\n    <div class="weui-mask_transparent"></div>\n    <div class="weui-toast">\n        <i class="weui-icon-success-no-circle weui-icon_toast"></i>\n        <p class="weui-toast__content" id="js_reply_success_pc_content">已回复</p>\n    </div>\n    </div>\n</div>\n<#}#>\n';
});define("appmsg/comment_tpl.html.js",[],function(){
return'<#if(window.new_appmsg){#>\n\n    <div class="discuss_container" id="js_cmt_main" style="display:none">\n        <div class="mod_title_context">\n            <strong class="mod_title">精选留言</strong>\n            <#if(!isWxWork){#>\n            <p class="tips_global tr title_bottom_tips" id="js_cmt_nofans1" style="display:none;">作者已设置关注后才可以留言</p>\n                <!-- 没有付费才给写留言入口 -->\n                <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n                <p class="discuss_icon_tips tr" id="js_cmt_addbtn1" style="display:none">\n                    <a href="javascript:;" class="discuss_access" id="js_cmt_write1">写留言</a>\n                </p>\n                <#}#>\n            <#}#>\n        </div>\n        <div class="discuss_list_wrp" id="js_cmt_list_container">\n          <ul class="discuss_list" id="js_cmt_list"></ul>\n        </div>\n    </div>\n\n\n    <!-- 没有付费才给写留言入口 -->\n    <#if(!isWxWork && (window._copyright_stat!=1 || window.need_pay!=1)){#>\n    <div class="discuss_container" id="js_cmt_addbtn2" style="display:none">\n      <div class="mod_title_context">\n        <p class="discuss_icon_tips tc">\n          <a href="javascript:;" class="discuss_access" id="js_cmt_write2">写留言</a>\n        </p>\n      </div>\n    </div>\n    <#}#>\n    <#if(!isWxWork){#>\n    <div class="discuss_container" id="js_cmt_nofans2" style="display:none">\n      <div class="tips_global rich_split_tips tc" id="js_cmt_nofans2_inner">\n          作者已设置关注后才可以留言      </div>\n    </div>\n    <#}#>\n    <p class="rich_split_tips tc tips_global" id="js_cmt_tips" style="display:none;"></p>\n\n\n    <div class="weui-loadmore" id="js_cmt_loading">\n        <i class="weui-loading"></i>\n        <span class="weui-loadmore__tips">正在加载</span>\n    </div>\n\n    <div class="rich_split_tips tc discuss_end_tips" id="js_cmt_statement" style="display:none">\n        <div class="weui-loadmore weui-loadmore_line weui-loadmore_dot">\n            <span class="weui-loadmore__tips"></span>\n        </div>\n        <!--\n        以上留言由公众号审核产生，        <a href="http://kf.qq.com/touch/sappfaq/150211YfyMVj150313qmMbyi.html?scene_id=kf264">\n            了解留言功能详情        </a>\n        -->\n    </div>\n\n    <div class="discuss_more_tips dropdown_tips tc" style="display:none;" id="js_cmt_show_all">\n      <a href="javascript:;" id="js_cmt_show_all_wording">查看更多留言</a>\n    </div>\n    <div class="weui-dialog__wrp weui-transition_opacity-hide" id="js_delete_panel">\n      <div class="weui-mask"></div>\n      <div class="weui-dialog">\n        <div class="weui-dialog__bd">确定删除留言吗？</div>\n        <div class="weui-dialog__ft">\n          <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" id="js_delete_cancel">取消</a>\n          <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" id="js_delete_confirm">删除</a>\n        </div>\n      </div>\n    </div>\n<#}else{#>\n    <div class="discuss_container" id="js_cmt_main" style="display:none">\n        <p class="discuss_icon_tips title_bottom_tips tr" id="js_cmt_addbtn1" style="display:none">\n            <!-- 没有付费才给写留言入口 -->\n            <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n            <a href="javascript:;" id="js_cmt_write1"><img class="icon_edit" src="<#=window.comment_edit_icon#>" alt="">留言</a>\n            <#}#>\n        </p>\n        <div class="rich_tips with_line title_tips discuss_title_line">\n            <span class="tips">精选留言</span>\n        </div>\n        <p class="tips_global tc title_bottom_tips" id="js_cmt_nofans1" style="display:none;">该文章作者已设置需关注才可以留言</p>\n        <ul class="discuss_list" id="js_cmt_list"></ul>\n    </div>\n\n\n    <p class="discuss_icon_tips rich_split_tips tc" id="js_cmt_addbtn2" style="display:none">\n        <!-- 没有付费才给写留言入口 -->\n        <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n        <a href="javascript:;" id="js_cmt_write2"><img class="icon_edit" src="<#=window.comment_edit_icon#>" alt="">留言</a>\n        <#}#>\n    </p>\n\n    <div class="tips_global rich_split_tips tc" id="js_cmt_nofans2" style="display:none;">\n        该文章作者已设置需关注才可以留言    </div>\n    <p class="rich_split_tips tc tips_global" id="js_cmt_tips" style="display:none;"></p>\n\n\n    <div class="rich_tips tips_global loading_tips" id="js_cmt_loading">\n        <img src="<#=window.comment_loading_img#>" class="rich_icon icon_loading_white" alt="">\n        <span class="tips">加载中</span>\n    </div>\n\n    <div class="rich_tips with_line tips_global" id="js_cmt_statement" style="display:none">\n        <span class="tips">以上留言由公众号筛选后显示</span>\n    </div>\n\n    <p class="rich_split_tips tc" id="js_cmt_qa" style="display:none;">\n        <a href="http://kf.qq.com/touch/sappfaq/150211YfyMVj150313qmMbyi.html?scene_id=kf264">\n            了解留言功能详情        </a>\n    </p>\n<#}#>\n\n';
});define("appmsg/emotion/emotion_pc.js",["biz_common/utils/emoji_data.js","biz_common/utils/emoji_panel_data.js","biz_common/dom/event.js","appmsg/emotion/emotion.js","common/utils.js","biz_wap/utils/mmversion.js"],function(e,t,o){
"use strict";
function n(){
for(var e=[],t=0;t<p.length;t++)for(var o=0;o<r.length;o++)if(r[o].id===p[t]){
e[t]=r[o];
break;
}
for(var t=0;j>t;t++)for(var o=0;f>o;o++){
var n=t*f+o;
e[n]&&v.push({
name:e[n].style,
title:e[n].emoji?e[n].emoji:e[n].cn,
bp:"background-position: 0 -"+n*w+"px;",
id:e[n].id
});
}
for(var t=0;t<e.length;t++)b[e[t].style]=e[t].emoji||e[t].cn;
}
function i(){
var e=document.createDocumentFragment();
v.forEach(function(t,o){
var n=document.createElement("li"),i=document.createElement("span");
n.className="comment_primary_emotion_item js_emotion_item",n.setAttribute("data-index",o),
i.className="comment_primary_emotion",i.setAttribute("style",t.bp),n.appendChild(i),
e.appendChild(n);
}),y.emotionList&&y.emotionList.appendChild(e);
}
function m(e){
window.scrollTo(0,window.scrollY+e.getBoundingClientRect().height);
}
function l(e){
return e.getBoundingClientRect().top+e.getBoundingClientRect().height>=g.getInnerHeight()?!0:!1;
}
function s(){
u.on(y.emotionSwitch,"click",function(){
var e=y.emotionPanel,t=e.style.display;
if("none"===t){
var o=window.getComputedStyle(document.getElementsByClassName("rich_media_tool")[0]).zoom,n=y.tool.getBoundingClientRect();
e.style.display="",e.style.left=n.left*o+"px",h.isWindows?e.style.top=window.scrollY+n.top*o+n.height*o+"px":h.isMac&&(e.style.top=(window.scrollY+n.top+n.height)*o+"px"),
l(e)&&m(e);
}else e.style.display="none";
});
}
function c(){
var e=y.emotionPanel;
if(""===e.style.display){
var t=window.getComputedStyle(document.getElementsByClassName("rich_media_tool")[0]).zoom,o=y.tool.getBoundingClientRect();
e.style.left=o.left*t+"px",h.isWindows?e.style.top=window.scrollY+o.top*t+o.height*t+"px":h.isMac&&(e.style.top=(window.scrollY+o.top+o.height)*t+"px");
}
}
function a(e){
var t=document.createElement("div"),o="",n="",i=[],m=void 0;
t.innerHTML=e;
for(var l=0;l<t.childNodes.length;l++){
var s=t.childNodes[l];
switch(s.nodeType){
case 1:
("IMG"===s.nodeName.toUpperCase()||"I"===s.nodeName.toUpperCase())&&(n=s.getAttribute("class"),
n&&(i=n.split(" "),i.length>1&&"icon_emotion_single"===i[0]&&(o=b[i[1]],m=document.createTextNode(o),
t.replaceChild(m,s))));
}
}
var c=t.innerHTML;
return c=c.replace(/<br.*?>/gi,"\n").replace(/<.*?>/g,"");
}
function d(){
y={
emotionSwitch:document.getElementById("js_emotion_wrp_pc"),
emotionPanel:document.getElementById("js_emotion_panel_pc"),
emotionList:document.getElementById("js_emotion_list_pc"),
input:document.getElementById("js_cmt_input"),
submit:document.getElementById("js_cmt_submit"),
tool:document.getElementById("js_comment_tool_pc")
},n(),i(),s(),window.onresize=function(){
c();
};
}
var r=e("biz_common/utils/emoji_data.js"),p=e("biz_common/utils/emoji_panel_data.js"),u=e("biz_common/dom/event.js"),_=e("appmsg/emotion/emotion.js").encode,g=e("common/utils.js"),h=e("biz_wap/utils/mmversion.js"),y={},f=16,j=7,w=24,v=[],b={};
o.exports={
init:d,
edata:v,
encode:_,
textFilter:a,
emotionPanelMove:c
};
});define("biz_wap/utils/fakehash.js",["biz_common/dom/event.js"],function(t){
"use strict";
function s(t){
t=t||location.hash.substr(1);
var s,o,e,i,r=!1,c=[];
for(s=0;s<h.length;s++)o=h[s],e=o[0],i=o[1],e!==a?("string"==typeof e&&e===t||e instanceof RegExp&&e.test(t))&&(i(n),
r=!0):c.push(i);
if(!r)for(s=0;s<c.length;s++)c[s](n,t);
n=t;
}
var o=t("biz_common/dom/event.js"),h=[],a="__default_hash__",n=location.hash.substr(1);
return o.on(window,"popstate",function(t){
var o=a;
t.state&&t.state.hash&&(o=t.state.hash),s(o);
}),o.on(window,"hashchange",s),o.on(window,"load",function(){
history.state&&history.state.hash&&s(history.state.hash);
}),{
val:function(){
return history.state&&history.state.hash||location.hash.substr(1);
},
push:function(t){
history.pushState?(history.pushState({
hash:t
},document.title,location.href),s(t)):location.hash=t;
},
replace:function(t){
history.replaceState?(history.replaceState({
hash:t
},document.title,location.href),s(t)):this.push(t);
},
on:function(t,s){
"function"==typeof t&&(s=t,t=a),h.push([t,s]);
}
};
});