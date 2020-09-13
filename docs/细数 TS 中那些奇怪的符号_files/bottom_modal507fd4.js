define("biz_common/utils/get_para_list.js",[],function(){
"use strict";
function e(t,r){
if(!t||1!==t.nodeType)return!1;
for(var i=0;i<t.children.length;i++)if(-1!==n.indexOf(t.children[i].tagName)||r.getSpan&&"SPAN"===t.children[i].tagName&&e(t.children[i],r))return!0;
}
function t(e,t){
for(var r=0;r<i.length;r++)if(e.className.indexOf(i[r])>-1)return!0;
return t.ignoreFlexChildren&&"flex"===e.style.display||t.ignoreNotWriteableChildren&&("false"===e.getAttribute("contenteditable")||1===e.childNodes.length&&"false"===e.childNodes[0].getAttribute("contenteditable"))?!0:a.indexOf(e.tagName)>-1;
}
function r(n,i){
var a=n.children;
if(!a.length)return a;
for(var l,d=[],o=0;o<a.length;o++)l=a[o],l.isWrapper=void 0,i&&i.isMarkNode&&i.isMarkNode(l)||(e(l,i)&&!t(l,i)?(d=d.concat(r(l,i)),
i.getNestedStructure&&(l.isWrapper=!0,d.push(l))):d.push(l));
return d;
}
var n=["P","DIV","SECTION","LI","H1","H2","H3","H4","H5","H6","TABLE","WX-VIEW"],i=["js_product_container","js_blockquote_wrap"],a=["BLOCKQUOTE"];
return r.paragraphStartIdx=1e6,r;
});define("biz_wap/utils/openUrl.js",["biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js"],function(e){
"use strict";
function r(e){
var r=document.createElement("a");
return r.href=e,{
source:e,
protocol:r.protocol.replace(":",""),
host:r.hostname,
port:r.port,
query:r.search,
params:function(){
for(var e,t={},i=r.search.replace(/^\?/,"").split("&"),a=i.length,o=0;a>o;o++)i[o]&&(e=i[o].split("="),
t[e[0]]=e[1]);
return t;
}(),
file:(r.pathname.match(/([^\/?#]+)$/i)||[,""])[1],
hash:r.hash.replace("#",""),
path:r.pathname.replace(/^([^\/])/,"/$1"),
relative:(r.href.match(/tps?:\/\/[^\/]+(.+)/)||[,""])[1],
segments:r.pathname.replace(/^\//,"").split("/")
};
}
function t(e,t){
var o;
t=t||1,0==e.indexOf("/")&&(o=r(location.href),e=o.protocol+"://"+o.host+e,console.log("openUrlWithExtraWebview with relative path:",e)),
e=e.replace(/(#[^#]*)+/,function(e,r){
return r;
}),-1!==navigator.userAgent.indexOf("MicroMessenger")&&(a.isIOS||a.isAndroid||a.isWp)?i.invoke("openUrlWithExtraWebview",{
url:e,
openType:t
},function(r){
-1==r.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e;
}
var i=e("biz_wap/jsapi/core.js"),a=e("biz_wap/utils/mmversion.js");
return{
openUrlWithExtraWebview:t
};
});define("a/a_sign.js",["biz_wap/jsapi/core.js","biz_common/jquery.md5.js"],function(e){
"use strict";
function n(e,n){
var o="";
if(e.beforeSign)o=e.beforeSign;else{
return n(0,0,0,0,{});
var t,r,a;
}
r=window.md5(o),i.invoke("calRqt",{
rqt:r
},function(e){
var i,o,c;
e.data&&e.k1&&e.k2?(i=encodeURIComponent(e.data),o=e.k1,c=e.k2,!t&&n(i,o,c,r,a)):!t&&n(0,0,0,r,a),
t=!0;
}),setTimeout(function(){
!t&&n(0,0,0,r,a),t=!0;
},e.timeout||500);
}
var i=e("biz_wap/jsapi/core.js");
return e("biz_common/jquery.md5.js"),{
createSign:n
};
});define("biz_common/utils/comm_report.js",[],function(){
"use strict";
var r={
web:{
report:"/cgi-bin/webreport"
},
wap:{
report:"/mp/wapcommreport"
}
},e=function(r,e){
return e=JSON.parse(JSON.stringify(e)),e.log_id=r,console.log("[comm_report] reportjson: ",e),
JSON.stringify(e);
},o=!1,t=[],n={
web:{
report:function(o,t,n,s){
s=s||{},o.post({
url:r.web.report,
data:{
reportjson:e(t,n)
},
async:s.async,
success:s.success,
error:s.error
});
},
leaveReport:function(r,e,s){
if(t.push([r,e,s]),!o){
o=!0;
var c=!1,p=function(){
c||(c=!0,t.forEach(function(r){
n.web.report(r[0],r[1],r[2]);
}));
};
window.addEventListener("beforeunload",p,!1),window.addEventListener("unload",p,!1);
}
}
},
wap:{
report:function(o,t,n,s){
s=s||{},o({
type:"POST",
dataType:"json",
url:r.wap.report,
data:{
reportjson:e(t,n)
},
async:s.async,
success:s.success,
error:s.error
});
}
}
};
return{
report:function(r,e,o,t,s){
n[r].report(e,o,t,s);
},
leaveReport:function(r,e,o,t){
n[r].leaveReport(e,o,t);
},
getUrl:function(e,o){
return r[e][o];
},
getData:function(r,o,t){
var n=e(r,o);
return t&&(n=encodeURIComponent(n)),"reportjson="+n;
}
};
});define("appmsg/my_comment_tpl.html.js",[],function(){
return'<!-- 发表留言 -->\n<#if(window.new_appmsg){#>\n  <div id="js_cmt_mine" class="discuss_container_wrp" style="display:none;">\n    <div class="discuss_container editing access">\n        <div class="discuss_container_inner">\n          <div class="discuss_container_hd">\n            <h2 class="rich_media_title">\n                <#if(window.item_show_type == 10){#>\n                    <#=textPageTitle#>\n                <#}else{#>\n                    <#=window.msg_title.html(1)#>\n                <#}#>\n            </h2><!-- 标题要转义 -->\n            <span id="log"></span>\n            <div class="frm_textarea_box_wrp">\n                <span class="frm_textarea_box">\n                    <#if(window.friend_comment_enabled == 1){#>\n                    <!-- <textarea id="js_cmt_input" class="frm_textarea" placeholder="留言对朋友可见，被公众号筛选后，将对所有人可见。"></textarea> -->\n                    <textarea id="js_cmt_input" class="frm_textarea" placeholder="留言将由公众号筛选后显示，对所有人可见。"></textarea>\n                    <#}else{#>\n                    <textarea id="js_cmt_input" class="frm_textarea" placeholder="留言将由公众号筛选后显示，对所有人可见。"></textarea>\n                    <#}#>\n                    <div class="emotion_tool">\n                        <span class="emotion_switch" style="display:none;"></span>\n                        <span id="js_emotion_switch" class="pic_emotion_switch_wrp">\n                            <img class="pic_default" src="<#=window.icon_emotion_switch#>" alt="">\n                            <img class="pic_active" src="<#=window.icon_emotion_switch_active#>" alt="">\n                            <img class="pic_default_primary" src="<#=window.icon_emotion_switch_primary#>" alt="">\n                            <img class="pic_active_primary" src="<#=window.icon_emotion_switch_active_primary#>" alt="">\n                        </span>\n                    </div>\n                </span>\n            </div>\n            <div class="emotion_panel" id="js_emotion_panel">\n                <span class="emotion_panel_arrow_wrp" id="js_emotion_panel_arrow_wrp">\n                    <i class="emotion_panel_arrow arrow_out"></i>\n                    <i class="emotion_panel_arrow arrow_in"></i>\n                </span>\n                <div class="emotion_list_wrp" id="js_slide_wrapper">\n                    <!--<ul class="emotion_list"></ul>-->\n                    <!--<li class="emotion_item"><i class="icon_emotion"></i></li>-->\n                </div>\n                <ul class="emotion_navs" id="js_navbar">\n                    <!--<li class="emotion_nav"></li>-->\n                </ul>\n            </div>\n            <div class="discuss_btn_wrp"><a id="js_cmt_submit" class="btn btn_primary btn_discuss btn_disabled" href="##">留言</a></div>\n          </div>\n          <div class="discuss_container_bd">\n            <div class="" style="display:none">\n                <div class="mod_title_context">\n                    <strong class="mod_title">我的留言</strong>\n                </div>\n                <ul class="discuss_list" id="js_cmt_mylist"></ul>\n            </div>\n            <div class="weui-loadmore" id="js_mycmt_loading">\n                <i class="weui-loading"></i>\n                <span class="weui-loadmore__tips">正在加载</span>\n            </div>\n            <div id="js_cmt_toast" style="display: none;">\n                <div class="weui-mask_transparent"></div>\n                <div class="weui-toast">\n                    <i class="weui-icon-success-no-circle weui-icon_toast"></i>\n                    <p class="weui-toast__content">已留言</p>\n                </div>\n            </div>\n            <div class="weui-dialog__wrp weui-transition_opacity-hide" id="js_delete_panel_mobile">\n                <div class="weui-mask"></div>\n                <div class="weui-dialog">\n                    <div class="weui-dialog__bd">确定删除留言吗？</div>\n                    <div class="weui-dialog__ft">\n                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" id="js_delete_cancel_mobile">取消</a>\n                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" id="js_delete_confirm_mobile">删除</a>\n                    </div>\n                </div>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n<#}else{#>\n    <div id="js_cmt_mine" class="discuss_container editing access" style="display:none;">\n        <div class="discuss_container_inner">\n            <h2 class="rich_media_title"><#=window.msg_title.html(1)#></h2><!-- 标题要转义 -->\n            <span id="log"></span>\n            <div class="frm_textarea_box_wrp">\n                <span class="frm_textarea_box">\n                    <#if(window.friend_comment_enabled == 1){#>\n                    <!-- <textarea id="js_cmt_input" class="frm_textarea" placeholder="留言对朋友可见，被公众号筛选后，将对所有人可见。"></textarea> -->\n                    <textarea id="js_cmt_input" class="frm_textarea" placeholder="留言将由公众号筛选后显示，对所有人可见。"></textarea>\n                    <#}else{#>\n                    <textarea id="js_cmt_input" class="frm_textarea" placeholder="留言将由公众号筛选后显示，对所有人可见。"></textarea>\n                    <#}#>\n                    <div class="emotion_tool">\n                        <span class="emotion_switch" style="display:none;"></span>\n                        <span id="js_emotion_switch" class="pic_emotion_switch_wrp">\n                            <img class="pic_default" src="<#=window.icon_emotion_switch#>" alt="">\n                            <img class="pic_active" src="<#=window.icon_emotion_switch_active#>" alt="">\n                        </span>\n                        <div class="emotion_panel" id="js_emotion_panel">\n                            <span class="emotion_panel_arrow_wrp" id="js_emotion_panel_arrow_wrp">\n                                <i class="emotion_panel_arrow arrow_out"></i>\n                                <i class="emotion_panel_arrow arrow_in"></i>\n                            </span>\n                            <div class="emotion_list_wrp" id="js_slide_wrapper">\n                                <!--<ul class="emotion_list"></ul>-->\n                                <!--<li class="emotion_item"><i class="icon_emotion"></i></li>-->\n                            </div>\n                            <ul class="emotion_navs" id="js_navbar">\n                                <!--<li class="emotion_nav"></li>-->\n                            </ul>\n                        </div>\n                    </div>\n                </span>\n            </div>\n            <div class="discuss_btn_wrp"><a id="js_cmt_submit" class="btn btn_primary btn_discuss btn_disabled" href="##">留言</a></div>\n            <div class="discuss_list_wrp" style="display:none">\n                <div class="rich_tips with_line title_tips discuss_title_line">\n                    <span class="tips">我的留言</span>\n                </div>\n                <ul class="discuss_list" id="js_cmt_mylist"></ul>\n            </div>\n            <div class="rich_tips tips_global loading_tips" id="js_mycmt_loading">\n                <img src="<#=window.icon_loading_white#>" class="rich_icon icon_loading_white" alt="">\n                <span class="tips">加载中</span>\n            </div>\n            <div class="wx_poptips" id="js_cmt_toast" style="display:none;">\n                <img alt="" class="icon_toast" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABqCAYAAABUIcSXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMTUxMzkxZS1jYWVhLTRmZTMtYTY2NS0xNTRkNDJiOGQyMWIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTA3QzM2RTg3N0UwMTFFNEIzQURGMTQzNzQzMDAxQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTA3QzM2RTc3N0UwMTFFNEIzQURGMTQzNzQzMDAxQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NWMyOGVjZTMtNzllZS00ODlhLWIxZTYtYzNmM2RjNzg2YjI2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIxNTEzOTFlLWNhZWEtNGZlMy1hNjY1LTE1NGQ0MmI4ZDIxYiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmvxj1gAAAVrSURBVHja7J15rF1TFMbXk74q1ZKHGlMkJVIhIgg1FH+YEpEQJCKmGBpThRoSs5jVVNrSQUvEEENIhGiiNf9BiERICCFIRbUiDa2qvudbOetF3Tzv7XWGffa55/uS7593977n3vO7e5+199p7v56BgQGh0tcmvAUERREUQVEERREUQVEERREUQVEERREUQVEERREUQVEERREUQVEERVAUQVEERVAUQbVYk+HdvZVG8b5F0xj4RvhouB+eCy8KrdzDJc1RtAX8ILxvx98V1GyCSkN98Cx4z/95/Wn4fj6j6tUEeN4wkFSnw1MJqj5NhBfAuwaUHREUg4lqNMmePVsHll/HFhVfe1t3FwpJI8DXCCquDrCWNN4B6Tb4M3Z98aTPmTvh0YHl18PXw29yZiKejoPvcUD6E74yFBJbVDk6Bb7K8aP/Hb4c/tRzEYIqprPhSxzlf4Uvhb/0Xoig8qnHAJ3lqPMzfDH8XZ4LEpRf2sVdA5/sqPO9Qfop70UJyn+/boaPddT5yrq7VUUvTIVJI7q74MMddXR8NB1eXcYvhBpZm0s2w72/o86HFoKvLau/pYaXzjLMdUJ6y0LwtWV9CIIaXtvA8+G9HHV03u5q+K+yH47U0NoRngPv7KjzHDwTLj0bS1BDazfJJlcnOOostC6ysnCT+q80G/sIvFVgeW09D8FPVT0uoP7VfvAD8NjA8pqmuAN+OcYAjso0RbIZ8DGB5TVNcRO8JMaHY9SXSdfa3eeANJimWBLrA7JFiZwIXye+NMUV8CcxP2SRFjXefok7NRjSGZJlWUPvw2/wtNiQirSoXWyMsR28wR7AzzYM0oXw+Y7yK+CLJGeaoqjyrJSdZJD6Ov4+z5y6NJc0Az7NUecHydIUy+v60KNyQHoM3nKI1y7YCFiq0i7uBvgER52vDdKqWn9djhY1Dn4G3n6Ecqm2rF74dvgoR53S0hQxW9RJAZAGW5bSn58QJA27dQ7uIEedjywEX5NKVxCqsY6y+qA+LxFI4+yZ6oH0trWkNan80jygtIUsc5SflgAsDXgehfdx1KkkTRE76tN+Xue2jnTU0Ru1oIbvpt30bBtKhOp5yaaRkts0lic8V1i6dPcIRx2d/l8Y8XtNNEg7OOo8bl1kmmOKnDsO88CaYzejau0hWZqiL7C83oCH4SeTHvwV2BqqsHRVztSEYOmWF80NeXZT6Hd4KflResE9vCnBOlCyGfDNAstHTVPUDWoQ1t3iW+9WNizvlhfd4aerXd+ThqiMfNR6+9LvOOro5OY5JX2H4+F7HZD+kGzlamMgldWiirQsjcwWFbjmqZJteekJLK9pisvgL6RhKvuciZiwzrWWGapfrPy30kBVcSBIrw0aD3PU0XB6cehntq7rTMf7/2iQlktDVdXJLXlg6VjmiYBn6rWSTRCH6hvJ0hQrpcGq8oidsmHpTP8t8DGO9/vcWt9qabiqPgup1yKyQwvC2tSefZ73SSpNkUJ4PlLorlHZ+446nc8f3fIyywlJhwrTuwVSjBa1ccvSxN0hjjoK5xVrYZMd9V6XbFfgBukixTwGLg8sDam3dZR/wZ6L/dJlin1en8LS+bgpFbz3Ygvzu1J1HKxYNqxGpCmaCEo12rrBorD6LRp8UbpcdR5VWhTW35KlKd6QFqjuM2XzwlpnMxTvSkuUwuG/Xlg6NtPjbT6WFimF/VG6LEvXgn8QGDjMbBukVECFwhpoS+CQatfX2Q1q6H7wENHdrfCr0lKleEB9JyxNneus+VJpsVL9TwI6W65LovWIGl3KtVJaLv7LBwYTFEERFEVQFEERFEVQFEERFEVQFEERFEVQFEERFEVQFEERFFWq/hFgADUMN4RzT6/OAAAAAElFTkSuQmCC">\n                <p class="toast_content">已留言</p>\n            </div>\n        </div>\n    </div>\n<#}#>\n<div class="weui-webview-nav" style="display:none;" id="js_fake_bar">\n    <button class="weui-webview-nav__btn_goback" id="js_cmt_goback">goback</button>\n    <button class="weui-webview-nav__btn_forward weui-webview-nav__btn_disabled" disabled="disabled">forward</button>\n</div>\n';
});define("appmsg/cmt_tpl.html.js",[],function(){
return'<#if(window.new_appmsg){#>\n<li class="js_comment_item discuss_item cid<# if (is_from_me == 1) { #><#=my_id#><# } else { #><#=content_id#><# } #>" \n    id="cid<# if (is_from_me == 1) { #><#=my_id#><# } else { #><#=content_id#><# } #>" \n    data-elected="<#=report_elected#>" \n    data-friend="<#=report_friend#>" \n    data-content_id="<#=content_id#>"\n    >\n    <div class="discuss_item_hd">\n      <div class="user_info">\n          <div class="nickname_wrp">\n            <img class="avatar" src="<#=logo_url#>">\n            <strong class="nickname"><#=nick_name#><# if(is_from_friend == 1){ #>(朋友)<# } #></strong>\n            <# if(typeof is_top === \'number\' && is_top == 1){ #><span class="icon_appmsg_tag">置顶</span><# } #>\n          </div>\n      </div>\n      <# if (!isWxWork) { #>\n      <div class="discuss_opr">\n          <# if (is_from_me == 1) { #>\n            <a class="discuss_opr_meta discuss_del js_del" data-my-id="<#=my_id#>" data-content-id="<#=content_id#>">删除</a>\n          <# } #>\n          <# if(is_elected == 1){ #>\n          <span class="discuss_opr_meta media_tool_meta meta_praise js_comment_praise <# if(like_status == 1){ #>praised<# } #>" data-status="<#=like_status#>" data-content-id=\'<#=content_id#>\' data-scene="<#=scene#>" data-my-id=\'<#=my_id#>\'>\n            <button class="sns_opr_btn sns_praise_btn"><span data-num="<#=like_num#>" data-like="<#=like_status#>" class="sns_opr_num sns_opr_gap praise_num"><# if(like_num_format !== 0){ #><#=like_num_format#> <# } #></span></button>\n          </span>\n          <# } else { #>\n            <span class="discuss_opr_meta">未精选</span>\n          <# } #>\n      </div>\n      <# } #>\n    </div>\n\n    <div class="discuss_message">\n        <span class="discuss_status"><#=status#></span>\n        <div class="discuss_message_content js_comment_content" data-content="<#=content#>" data-my-id="<#=my_id#>"><#=content#></div>\n    </div>\n    <# if(reply_new && reply_new.reply_list && reply_new.reply_list.length > 0){ #>\n        <# for(var i = 0; i < reply_new.reply_list.length; i++){ #>\n            <div class="reply_result js_reply_item <# if (reply_new.reply_list[i].is_same) {#> reply_result_same <# } #>" <#if (i>=3 && type != \'mine\'){ #> style="display:none" <# } #> data-my-id="<#=my_id#>">\n                <div class="discuss_item_hd">\n                    <# if(reply_new.reply_list[i].is_from_author == 1){ #>\n                        <div class="user_info author_info">\n                        <div class="nickname_wrp">\n                            <div class="nickname">作者</div>\n                        </div>\n                        </div>\n                    <# } else { #>\n                        <div class="user_info">\n                            <div class="nickname_wrp">\n                            <img class="avatar" src="<#=logo_url#>">\n                            <strong class="nickname"><#=nick_name#></strong>\n                            </div>\n                        </div>\n                    <# } #>\n                    <# if (!isWxWork) { #>\n                    <div class="discuss_opr">\n                        <# if(reply_new.reply_list[i].reply_del_flag == 0){ #>\n                            <# if (reply_new.reply_list[i].is_from_me == 1) { #>\n                                <a class="discuss_opr_meta discuss_del js_reply_del" data-my-id="<#=my_id#>" data-content-id="<#=content_id#>" data-reply-id="<#=reply_new.reply_list[i].reply_id#>">删除</a>\n                            <# } #>\n                            <# if (reply_new.reply_list[i].reply_is_elected == 1){ #>\n                                <span class="discuss_opr_meta media_tool_meta meta_praise js_reply_praise <# if(reply_new.reply_list[i].reply_like_status == 1){ #>praised<# } #>" data-status="<#=reply_new.reply_list[i].reply_like_status#>" data-content-id="<#=content_id#>" data-my-id="<#=my_id#>" data-reply-id=\'<#=reply_new.reply_list[i].reply_id#>\' data-scene="<#=scene#>">\n                                  <button class="sns_opr_btn sns_praise_btn"><span data-num="<#=reply_new.reply_list[i].reply_like_num#>" data-like="<#=reply_new.reply_list[i].reply_like_status#>" class="sns_opr_num sns_opr_gap praise_num"><# if(reply_new.reply_list[i].reply_like_num_format !== 0){ #><#=reply_new.reply_list[i].reply_like_num_format#> <# } #></span></button>\n                                </span>\n                            <# } else { #>\n                                <span class="discuss_opr_meta js_reply_elect_status" data-reply-id=\'<#=reply_new.reply_list[i].reply_id#>\' data-my-id="<#=my_id#>">未精选</span>\n                            <# } #>\n                        <# } #>\n                    </div>\n                    <# } #>\n                </div>\n                <div class="discuss_message">\n                        <# if(reply_new.reply_list[i].reply_del_flag == 1){ #>\n                            <div class="discuss_message_content discuss_message_del">此回复已被删除</div>\n                        <# } else { #>\n                            <div class="discuss_message_content js_reply_content" data-reply-id="<#=reply_new.reply_list[i].reply_id#>" data-my-id="<#=my_id#>" data-content="<#=reply_new.reply_list[i].content#>"><#=reply_new.reply_list[i].content#></div>\n                        <# } #>\n                </div>\n            </div>\n        <# } #>\n    <# } #>\n    <# if(replyListCount > 3 && type != \'mine\'){ #>\n    <div class="discuss_extra_info js_extend_comment discuss_more_access" data-my-id="<#=my_id#>" data-num="<#=replyListCount-3#>">余下<#= replyListCount-3 #>条</div>\n    <# } #>\n    <!-- 上线前暂时隐藏回复入口 -->\n    <# if (supportReply) { #>\n    <p class="discuss_extra_info js_reply_div" data-my-id="<#=my_id#>" <#if (replyListCount > 3 && type != \'mine\'){ #> style="display:none" <# } #>>\n        <a class="js_comment_reply" data-my-id="<#=my_id#>" data-content-id="<#=content_id#>">回复</a>\n    </p>\n    <# } #>\n</li>\n<#}else{#>\n<li class="js_comment_item discuss_item cid<# if (is_from_me == 1) { #><#=my_id#><# } else { #><#=content_id#><# } #>" id="cid<# if (is_from_me == 1) { #><#=my_id#><# } else { #><#=content_id#><# } #>" data-elected="<#=report_elected#>" data-friend="<#=report_friend#>" data-content_id="<#=content_id#>">\n    <# if(is_elected == 1){ #>\n    <div class="discuss_opr">\n        <span class="media_tool_meta tips_global meta_praise js_comment_praise <# if(like_status == 1){ #>praised<# } #>" data-status="<#=like_status#>" data-content-id=\'<#=content_id#>\' data-scene="<#=scene#>">\n            <i class="icon_praise_gray"></i>\n            <span class="praise_num"  data-num="<#=like_num#>"  data-like="<#=like_status#>"><# if(like_num_format !== 0){ #><#=like_num_format#> <# } #></span>\n        </span>\n    </div>\n    <# } #>\n    <div class="user_info">\n        <strong class="nickname"><#=nick_name#><# if(is_from_friend == 1){ #>(朋友)<# } #></strong>\n        <img class="avatar" src="<#=logo_url#>">\n        <# if(typeof is_top === \'number\' && is_top == 1){ #><span class="icon_discuss_top">置顶</span><# } #>\n    </div>\n    <div class="discuss_message">\n        <span class="discuss_status"><#=status#></span>\n        <div class="discuss_message_content"><#=content#></div>\n    </div>\n    <p class="discuss_extra_info">\n        <#=time#>               \n        <# if (is_from_me == 1) { #>\n        <a class="discuss_del js_del" data-my-id="<#=my_id#>" data-content-id="<#=content_id#>">删除</a>\n        <# } #>\n    </p>\n    <# if(reply_new && reply_new.reply_list && reply_new.reply_list.length > 0){ #>\n        <div class="reply_result">\n            <div class="discuss_opr">\n                <span class="media_tool_meta tips_global meta_praise js_reply_praise <# if(reply_new.reply_list[0].reply_like_status == 1){ #>praised<# } #>" data-status="<#=reply_new.reply_list[0].reply_like_status#>" data-content-id="<#=content_id#>" data-reply-id=\'<#=reply_new.reply_list[0].reply_id#>\' data-scene="<#=scene#>">\n                    <i class="icon_praise_gray"></i>\n                    <span class="praise_num"  data-num="<#=reply_new.reply_list[0].reply_like_num#>" data-like="<#=reply_new.reply_list[0].reply_like_status#>"><# if(reply_new.reply_list[0].reply_like_num_format !== 0){ #><#=reply_new.reply_list[0].reply_like_num_format#> <# } #></span> \n                </span>\n            </div>\n            <#if(window.new_appmsg){#>\n            <div class="nickname">作者</div>\n            <#}else{#>\n            <div class="nickname">作者回复</div>\n            <# } #>\n            <div class="discuss_message">\n                <div class="discuss_message_content"><#=reply_new.reply_list[0].content#></div>\n            </div>\n            <p class="discuss_extra_info"><#=reply_new.reply_list[0].time#></p>\n        </div>\n    <# } #>\n        \n</li>\n<#}#>\n';
});define("sougou/a_tpl.html.js",[],function(){
return'<h3 class="rich_media_area_title">相关文章</h3>\n<ul class="relate_article_list">\n    <# for(var i in list){#>\n    <li class="relate_article_item">\n        <a class="relate_article_link sg_link" href="<#=list[i].url#>" target="_blank"><#=list[i].title#></a>\n    </li>\n    <#}#>\n</ul>\n';
});define("biz_common/utils/report.js",[],function(){
"use strict";
return function(n){
var e=new Image;
e.src=n;
};
});define("appmsg/articleReport.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_wap/utils/mmversion.js"],function(i){
"use strict";
function n(i){
i.dom&&(i.dom.style.display="",t.tap(i.dom,function(){
var n=["https://mp.weixin.qq.com/mp/infringement?url=",encodeURIComponent(i.link.htmlDecode()),"&title=",encodeURIComponent(i.title),"&__biz=",window.biz].join("");
return location.href=n+"#wechat_redirect",!1;
}));
}
i("biz_common/utils/string/html.js");
{
var t=i("biz_common/dom/event.js"),e=i("biz_wap/utils/mmversion.js");
({
not_in_mm:!e.isWp&&-1==navigator.userAgent.indexOf("MicroMessenger")
});
}
return{
init:n
};
});define("appmsg/topic_tpl.html.js",[],function(){
return'<span class="db topic_wrp">\n    <span class="topic_thumb" style="background-image:url({img_url});"></span>\n    <span class="topic_content">\n        <strong class="topic_title">{title}</strong>\n        <span class="topic_desc">{author}</span>\n        <span class="topic_info">\n            <span class="topic_info_extra"><span class="icon_topic"></span>话题</span>\n            <span class="topic_info_primary">相关文章{msg_num}篇</span>\n        </span>\n    </span>\n</span>\n';
});define("appmsg/appmsg_live_tpl.html.js",[],function(){
return'<# if (liveDeleted) { #>\n  <!--直播 已被删除-->\n  <div class="appmsg__live appmsg__live__unusual">直播间已被删除</div>\n<# } else { #>\n  <div class="appmsg__live">\n    <div class="appmsg__live__inner">\n      <div class="appmsg__live__main">\n        <div class="appmsg__live__cover__image" style="background: #FFF url(<#=cover#>) no-repeat center top / cover"></div>\n        <div class="appmsg__live__status__area">\n          <!--未开播-->\n          <div class="appmsg__live__status">\n            <div class="appmsg__live__status__tag"><#=tagStatusWord#></div><span class="appmsg__live__status__info"><#=statusInfoWord#></span>\n          </div>\n        </div>\n        <div class="appmsg__live__like-area js_live_like-area">\n          <# if (isInLive) { #>\n            <div class="appmsg__live__like-animation js_live_like-animation"></div>\n          <# } #>\n          <div class="appmsg__live__like-icon">\n            <div class="person-operation__item__inner mode-filter-black">\n              <div class="appmsg__live__like-icon__image"></div>\n            </div>\n          </div>\n          <div class="appmsg__live__like-info"><#=likeCount#></div>\n        </div>\n      </div>\n      <div class="appmsg__live__extend">\n        <div class="appmsg__live__extend__main">\n          <p class="appmsg__live__title"><#=title#></p>\n          <p class="appmsg__live__desc"><#=desc#></p>\n        </div>\n        <# if (showEntryBtn) { #>\n          <a href="javascript:;" class="appmsg__live__extend__button"><#=btnStatusWord#></a>\n        <# } #>\n      </div>\n    </div>\n  </div>\n<# } #>\n';
});define("biz_common/dom/offset.js",[],function(){
"use strict";
function f(f){
if(!f)return{};
for(var t=0,e=0,o=parseInt(document.body.style.marginTop,10)||0;f.offsetParent;)t+=f.offsetTop,
e+=f.offsetLeft,f=f.offsetParent;
return{
offsetTop:t>o?t-o:t,
offsetLeft:e
};
}
return{
getOffset:f
};
});define("appmsg/emotion/dom.js",["biz_common/dom/event.js"],function(t){
"use strict";
function e(t){
if("string"==typeof t){
document.querySelectorAll||!function(){
var t=document.createStyleSheet(),e=function(e,n){
var i,o=document.all,r=o.length,u=[];
for(t.addRule(e,"foo:bar"),i=0;r>i&&!("bar"===o[i].currentStyle.foo&&(u.push(o[i]),
u.length>n));i+=1);
return t.removeRule(0),u;
};
document.querySelectorAll=function(t){
return e(t,1/0);
};
}();
var e=document.querySelectorAll(t);
}else e=[t];
return{
el:e,
on:function(t,e){
return this.each(function(n){
i.on(n,t,e);
}),this;
},
hide:function(){
return this.each(function(t){
t.style.display="none";
}),this;
},
show:function(){
return this.each(function(t){
t.style.display="block";
}),this;
},
each:function(t){
return n(this.el,t),this;
},
width:function(){
return this.el[0].clientWidth;
},
css:function(t){
return this.each(function(e){
for(var n in t)e.style[n]=t[n];
}),this;
},
attr:function(t,e){
var n=this.el[0];
return e?(n.setAttribute(t,e),this):n.getAttribute(t);
},
append:function(t){
return t.el&&(t=t.el[0]),this.el[0].appendChild(t),this;
},
html:function(t){
this.each(function(e){
e.innerHTML=t;
});
}
};
}
function n(t,e){
for(var n=0,i=t.length;i>n;n++)e(t[n],n);
}
var i=t("biz_common/dom/event.js");
return e.el=function(t){
return document.createElement(t);
},e.later=function(t){
setTimeout(t,3);
},e.log=function(){},e.each=n,e;
});function _classCallCheck(t,e){
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
define("appmsg/emotion/emotion.js",["appmsg/emotion/dom.js","appmsg/emotion/slide.js","appmsg/emotion/common.js","appmsg/emotion/nav.js","appmsg/emotion/textarea.js","biz_common/utils/emoji_data.js","biz_common/utils/emoji_panel_data.js","biz_common/dom/class.js"],function(t){
"use strict";
function e(t){
var e=a(a.el("li")),i=a(a.el("i"));
e.attr("class","emotion_item del js_emotion_item"),e.attr("data-index",-1),i.attr("class","icon_emotion del");
var n=j+"px";
return e.css({
width:n,
height:n,
right:t+"px"
}),e.append(i),e;
}
function i(t){
var e=a(a.el("li")),i=a(a.el("i")),n=0;
i.attr("class","icon_emotion icon"+t),i.css({
backgroundPosition:"0px "+((1-t)*r.EMOTION_SIZE-n)+"px"
}),e.attr("class","emotion_item js_emotion_item"),e.attr("data-index",t);
var o=j+"px";
return e.css({
width:o,
height:o
}),e.append(i),e;
}
function n(t){
var e=h.filter(function(e){
for(var i=0;i<g.length;i++){
var n=g[i];
if(e[n]){
var o=new RegExp(e[n].replace("[","\\[").replace("]","\\]"),"g"),a=t.match(o);
if(a)return!0;
}
}
return!1;
});
return e&&e.length>0?e[0]:null;
}
function o(t){
for(var e=[],i=0;i<h.length;i++){
for(var o=h[i],s=0;s<g.length;s++){
var r=g[s];
if(o[r]){
var l=new RegExp(o[r].replace("[","\\[").replace("]","\\]"),"g"),c=t.match(l);
if(c){
e=e.concat(c);
continue;
}
}
}
if(o.emoji){
var l=new RegExp(o.emoji,"g"),c=t.match(l);
c&&(e=e.concat(c));
}
}
return a.each(e,function(e){
var i=void 0;
if(void 0!==v[e]){
var o=v[e],a=f[o];
i='<i class="icon_emotion_single '+a+'"></i>',t=t.replace(e,i);
}else{
var s=n(e);
s&&s.style&&(i='<i class="icon_emotion_single '+s.style+'"></i>',t=t.replace(e,i));
}
}),t;
}
for(var a=t("appmsg/emotion/dom.js"),s=t("appmsg/emotion/slide.js"),r=t("appmsg/emotion/common.js"),l=t("appmsg/emotion/nav.js"),c=t("appmsg/emotion/textarea.js"),h=t("biz_common/utils/emoji_data.js"),p=t("biz_common/utils/emoji_panel_data.js"),m=t("biz_common/dom/class.js"),u=void 0,d={},v={},f=[],g=["cn","us","hk"],_=15,w=r.EMOTIONS_COUNT,j=r.EMOTION_LI_SIZE,E=0;E<h.length;E++){
var C=h[E];
d[C.id]=C;
}
for(var E=0;E<p.length;E++){
var C=d[p[E]];
v[C.cn]=E,C.us&&(v[C.us]=E),C.hk&&(v[C.hk]=E),C.emoji&&(v[C.emoji]=E),f.push(C.style);
}
var b=function(){
function t(e){
_classCallCheck(this,t),u=0,this.opt=e,this.pannel=e.emotionPanel,this.isPannelShow=!1,
this.navs=[],this.listenTogglePannel(),this.buildEmotions(e),this.slide=new s({
emotionSlideWrapper:e.emotionSlideWrapper,
commonWidth:this.width,
pageCount:this.pageCount,
wrapperWidth:this.wrapperWidth,
navs:this.navs
}),l.activeNav(0,this.navs),this.listenClickOnEmotion(),this.textarea=new c({
inputArea:this.opt.inputArea,
submitBtn:this.opt.submitBtn
});
}
return _createClass(t,[{
key:"listenTogglePannel",
value:function(){
var t=this,e=this.opt.inputArea,i=e.el[0],n=this.opt.emotionPanelArrowWrp,o=this.opt.emotionSwitcher,s="emotion_switch_current";
this.pannel.hide();
var r=function(){
n.show(),t.pannel.show(),i.blur(),a.later(function(){
i.blur();
});
},l=function(){
n.hide(),t.pannel.hide(),i.focus(),a.later(function(){
i.focus();
});
};
o.on("tap",function(e){
e.preventDefault(),e.stopPropagation(),t.isPannelShow=!t.isPannelShow,t.isPannelShow?(r(),
o.each(function(t){
m.addClass(t,s);
})):(l(),o.each(function(t){
m.removeClass(t,s);
}));
}),e.on("tap",function(){
t.pannel.hide(),t.isPannelShow=!1;
});
}
},{
key:"setOuterDivWidth",
value:function(){
this.wrapperWidth=this.pageCount*this.width,this.opt.emotionSlideWrapper.css({
width:this.wrapperWidth+"px"
});
}
},{
key:"addEmotionsToList",
value:function(t,n,o){
for(var s=0,r=this.emotionsCountOnePage;r>s;s++){
var l=document.createElement("li");
if(u++,u>w)break;
l=i(u),a(t).append(l);
}
var c=e(o);
a(t).append(c);
}
},{
key:"generateEmotionListAndAppend",
value:function(){
for(var t=this.opt.emotionSlideWrapper.el[0],e=(this.width-this.emotionsOneLine*j)/2,i=0,n=this.pageCount;n>i;i++){
var o=document.createElement("ul");
o.setAttribute("class","emotion_list"),t.appendChild(o),a(o).css({
width:this.width+"px",
"float":"left",
paddingLeft:e+"px",
paddingRight:"0"
}),this.addEmotionsToList(o,i,e);
}
}
},{
key:"getPageCount",
value:function(){
var t=this.width-2*_;
this.emotionsOneLine=parseInt(t/j,10),this.emotionsCountOnePage=3*this.emotionsOneLine-1;
var e=parseInt(w/this.emotionsCountOnePage,10);
return w%this.emotionsCountOnePage!==0&&e++,e;
}
},{
key:"genrateNavs",
value:function(){
for(var t=0,e=this.pageCount;e>t;t++){
var i=a(a.el("li"));
i.attr("class","emotion_nav js_emotion_nav"),this.navs.push(i),this.opt.emotionNavBar.append(i);
}
}
},{
key:"buildEmotions",
value:function(){
this.width=window.innerWidth||document.body.clientWidth,this.pageCount=this.getPageCount(),
this.setOuterDivWidth(),this.generateEmotionListAndAppend(),this.genrateNavs();
}
},{
key:"hidePannel",
value:function(){
this.pannel.hide();
}
},{
key:"addEmotion",
value:function(t){
if(!this.slide.isMoved){
var e=a(t.currentTarget),i=+e.attr("data-index");
this.textarea.inputEmotion(i),this.opt.inputEmotion&&this.opt.inputEmotion();
}
}
},{
key:"listenClickOnEmotion",
value:function(){
a("li.js_emotion_item").on("click",this.addEmotion.bind(this)),a("li.js_emotion_item").on("touchend",this.addEmotion.bind(this));
}
}]),t;
}();
return{
Emotion:b,
encode:function(t){
t=o(t);
var e=/\/([\u4e00-\u9fa5\w]{1,4})/g,i=t.match(e);
return i?(a.each(i,function(e){
var i=e.replace("/",""),n=[i.slice(0,4),i.slice(0,3),i.slice(0,2),i.slice(0,1)];
a.each(n,function(e){
if(void 0!==v["["+e+"]"]){
var i=v["["+e+"]"],n=f[i],o='<i class="icon_emotion_single '+n+'"></i>';
t=t.replace("/"+e,o);
}
});
}),t):t;
}
};
});function _typeof(t){
return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t;
}
function _classCallCheck(t,e){
if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");
}
var _extends=Object.assign||function(t){
for(var e=1;e<arguments.length;e++){
var o=arguments[e];
for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);
}
return t;
},_createClass=function(){
function t(t,e){
for(var o=0;o<e.length;o++){
var n=e[o];
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);
}
}
return function(e,o,n){
return o&&t(e.prototype,o),n&&t(e,n),e;
};
}();
define("pages/mod/bottom_modal.js",["widget/wx-widget/wx_bottom_modal.css","pages/mod/bottom_modal.html.js","biz_common/tmpl.js","biz_common/dom/class.js","biz_common/dom/event.js","biz_wap/utils/device.js"],function(t){
"use strict";
function e(t,e,o,n){
o=n?o+"px":o,t.style[e]=o;
}
function o(t){
return Math.ceil(t.scrollTop+t.offsetHeight)>=t.scrollHeight;
}
t("widget/wx-widget/wx_bottom_modal.css");
var n=t("pages/mod/bottom_modal.html.js"),s=t("biz_common/tmpl.js"),l=t("biz_common/dom/class.js"),i=t("biz_common/dom/event.js"),a=t("biz_wap/utils/device.js"),r=100,c="weui-btn_disabled",m={
top:a.os.pc?"20%":screen.height/4-(screen.height-window.innerHeight)+"px",
btnText:"提交"
},u=function(){
function t(e){
var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
_classCallCheck(this,t),o=_extends({},m,o);
var l=document.createElement("div");
l.innerHTML=s.tmpl(n,{
hasBtn:o.hasBtn,
btnText:o.btnText,
extClass:o.extClass,
hasMask:!o.removeMask,
isTopic:!!o.isTopic
});
var i=l.firstChild;
this.opt=o,this.rootEle=i,this.contentEle=e,this.contentAreaWrp=i.getElementsByClassName("js_bottom_modal_bd")[0],
this.headAreaWrp=i.getElementsByClassName("js_bottom_modal_hd")[0],this.submitBtn=this.headAreaWrp.getElementsByClassName("js_submit_bottom_modal")[0],
this.contentArea=i.getElementsByClassName("js_bottom_modal_content")[0],this.closeBtn=this.headAreaWrp.getElementsByClassName("js_close_bottom_modal")[0],
o.removeMask||(this.maskEle=i.getElementsByClassName("js_bottom_modal_mask")[0]),
this.setTitle(o.title),this.contentAreaWrp.appendChild(e),document.body.appendChild(i),
o.cb&&o.cb(),this.bindEvent();
}
return _createClass(t,[{
key:"bindEvent",
value:function(){
var t=this,e=void 0,n=void 0,s=void 0;
this.maskEle&&(i.on(this.maskEle,"tap",function(){
t.hide();
}),i.on(this.maskEle,"touchmove",function(t){
t.preventDefault();
})),i.on(this.headAreaWrp,"touchmove",function(t){
t.preventDefault();
}),i.on(this.closeBtn,"tap",function(){
t.hide();
}),i.on(this.submitBtn,"tap",function(){
l.hasClass(t.submitBtn,c)||t.opt.btnClickCb&&t.opt.btnClickCb();
}),i.on(this.contentAreaWrp,"scroll",function(){
e&&0!==t.contentAreaWrp.scrollTop||(e=!0,setTimeout(function(){
e=!1;
},50),t.contentAreaWrp.scrollTop<=0&&!t.pullingDownLock&&(t.opt.onPullDownLoad&&t.opt.onPullDownLoad(),
t.pullingDownLock=!0),setTimeout(function(){
t.contentAreaWrp.scrollTop+t.contentAreaWrp.offsetHeight+r>t.contentEle.offsetHeight&&!t.pullingUpLock&&(t.opt.onPullUpLoad&&t.opt.onPullUpLoad(),
t.pullingUpLock=!0);
},100),t.opt.onScroll&&t.opt.onScroll(t.contentAreaWrp.scrollTop>s?"up":"down"),
s=t.contentAreaWrp.scrollTop);
}),i.on(this.contentAreaWrp,"touchstart",function(t){
n=t.touches[0].pageY;
}),i.on(this.contentAreaWrp,"touchmove",function(e){
var s=t.contentAreaWrp,l=e.touches[0].pageY-n,i=0===s.scrollTop&&l>0,a=o(s)&&0>l;
if(i||a)if(t.opt.innerScrollList&&t.opt.innerScrollList.length){
for(var r=0;r<t.opt.innerScrollList.length;r++){
var c=t.opt.innerScrollList[r];
if(e.touches[0].target===c&&(0!==c.scrollTop&&i||!o(c)&&a))return;
}
e.preventDefault();
}else e.preventDefault();
});
}
},{
key:"show",
value:function(t,o){
var n=this;
this.getShowStatus()||(l.addClass(this.rootEle,"wx_bottom_modal_show"),t&&(l.addClass(this.rootEle,"wx_bottom_modal_form"),
e(this.contentArea,"top",o)),setTimeout(function(){
!t&&e(n.contentArea,"top",n.opt.top);
}),t&&setTimeout(function(){
e(n.contentArea,"top","100%"),console.log(n.contentArea.offsetHeight),l.removeClass(n.rootEle,"wx_bottom_modal_form"),
setTimeout(function(){
e(n.contentArea,"top",n.opt.top);
});
},50),this.opt.onShow&&this.opt.onShow());
}
},{
key:"hide",
value:function(){
this.getShowStatus()&&(l.removeClass(this.rootEle,"wx_bottom_modal_show"),this.contentArea.removeAttribute("style"),
this.opt.onHide&&this.opt.onHide());
}
},{
key:"disableBtn",
value:function(){
l.addClass(this.submitBtn,c);
}
},{
key:"enableBtn",
value:function(){
l.removeClass(this.submitBtn,c);
}
},{
key:"finishPullUpLoad",
value:function(){
this.pullingUpLock=!1;
}
},{
key:"finishPullDownLoad",
value:function(){
this.pullingDownLock=!1;
}
},{
key:"setTitle",
value:function(t){
"string"==typeof t?this.headAreaWrp.getElementsByClassName("js_bottom_modal_title")[0].innerHTML=t:"object"===("undefined"==typeof t?"undefined":_typeof(t))&&t.innerHTML&&(this.headAreaWrp.getElementsByClassName("js_bottom_modal_title")[0].innerHTML=t.innerHTML);
}
},{
key:"scrollTo",
value:function(){
var t;
(t=this.contentAreaWrp).scrollTo.apply(t,arguments);
}
},{
key:"getScrollEle",
value:function(){
return this.contentAreaWrp;
}
},{
key:"setCloseBtnStyle",
value:function(t){
var e=this.closeBtn.getElementsByTagName("i")[0],o="weui-icon-close-thin",n="weui-icon-back-arrow-thin";
"back"===t?(l.removeClass(e,o),l.addClass(e,n)):(l.removeClass(e,n),l.addClass(e,o));
}
},{
key:"getShowStatus",
value:function(){
return l.hasClass(this.rootEle,"wx_bottom_modal_show");
}
}]),t;
}();
return u;
});