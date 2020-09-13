define("a/tpl/sponsor_tpl.html.js",[],function(){
return'<!--互选广告-->\n<div class="mpad_sponsor" id="js_ad_area">\n    <div class="mpad_sponsor_placeholder">\n        <p class="mpad_sponsor_tips">广告，也可以是生活的一部分</p>\n    </div>\n    <div id="js_ad_inner" class="mpad_sponsor_inner js_ad_main_area js_material_<#=pos_type#>" data-type="<#=type#>" data-ticket="<#=ticket#>" data-url="<#=url#>" data-rl="<#=rl#>" data-aid="<#=aid#>" data-pt="<#=pt#>" data-tid="<#=traceid#>" data-gid="<#=group_id#>" data-apurl="<#=apurl#>" data-is_cpm="<#=is_cpm#>">\n        <# if(!!has_banner){ #> <!--图片-->\n            <div id="js_main_img" class="mpad_sponsor_bd" style="background-image:url(<#=banner#>)"></div>\n        \n        <# }else{ #> <!--视频-->\n            <div id="js_video_container"></div>\n\n        <# } #>\n        \n        <div class="mpad_sponsor_ft" id="js_ad_message">\n            <div class="mpad_sponsor_ft_hd">\n                <span class="<# if(!!isApp){ #>mpad_sponsor_avatar<# }else{ #>mpad_sponsor_avatar_round<# } #>" style="background-image:url(<#=avatar#>)"></span>\n                <# if(!!has_desc){ #>\n                <div class="mpad_sponsor_info">\n                    <p class="mpad_sponsor_title"><#=title#></p>\n                    <div class="mpad_more_innerdetail_container mpad_sponsor_desc" id="js_ad_detail">提供的广告                        <ul id="js_sponsor_opt_list" class="mpad_more_list" style="display: none">\n                            <li class="mpad_more_list_ele" id="js_btn_about">\n                                <a class="mpad_more_list_ele_container js_opt_item">关于广告</a>\n                            </li>\n                            <# if(parseInt(can_see_complaint)){ #> <!--带投诉-->\n                            <li class="mpad_more_list_ele" id="js_btn_complain" style="display: none">\n                                <a class="mpad_more_list_ele_container js_opt_item">投诉</a>\n                            </li>\n                            <# } #>\n                        </ul>\n                    </div>\n                </div>\n                <# } #>\n            </div>\n            <div class="mpad_sponsor_ft_ft">\n                <a class="mpad_sponsor_btn js_ad_action_<#=pos_type#>" id="js_ad_more"><# if(!!is_wx_app){ #><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAAGz7rX1AAAAAXNSR0IArs4c6QAAA65JREFUSA2lVk9oVGcQ/+a9tytoSm6t5pBK9i0trdCTXlrx4EEF/1w0p+Klh9LiQcF9uy9Gu2rcfXlJUfAfth4UvPTPQVop9FCagzdBoaAI+xJjDgpCBaMbzO6+N8687Dy/Td6GRD/Iznwzv5n55vtm5kWp5VahEkyr+Gc51FJdoVJDlhpLVW0J6BqGA8AfiLgXTPPTWCc+FlNwRqc+wTB8KBZjQ/kOb7rnhO9AtOOdpnjHkyO6448/s7LZz33XPsFmUPCCMRXhUcNQmwwri61G474yYJwuZCE7tuA/CRK7KlZqJxlZPfrxA1F0pR2n0lF0MnC8yaZCNEVON3PALw78nmpU/hWz9SCYNwwojpZsX4zaqU5bItDp/MyMzXvDytxiWr7yZG39ef2ZosczTfW15frBl60W3lYA4YdWT2+hsL7OQH2Vv+2bo32PyKwwVDd4M+baSdSo1dzNsjX9/QHTxSvOiR52Pz3sb4mSovqlXIYeOq6mRP6uTOrNsTOnGhyjKx8Rx6DgqT9k96UaFL1gVxThX3QpqACHIYKdqHCrAtVMEhZPTCNUfzKlC5FqqxSqwXV63IMiYP3bpb26CEHhU+YTgzJiwgtIKOVzClEVEwOnEoT1ahA61cnvBSSUwIe4EyjpiHvJ4JqhhNi757u5SwIUSh1yYbNtW3RDcXHKMTyydgW0mA4OQiiyBQOAPhEklF484TXG4rvl63KqtY0I6m+FMEJ7ake1R8Ml7EI9VYInlMcGkVIdDdPZz8j+vWhqaazE47A/k2uEje/oyrcTfoBtANQk/d6iE/44Wsq9ED+rDuJ4tbMYqcPiYDlKc+3QaCl/cVVBnEptgppxGzumgpkDA3bQiW/rgahBDlLNX6MHin1TVj+tOEipGtghYk0cmmBs8dzcHdnrlAbGNzQwrsYyUPNSiDomlYdMJqsrIGMtmWusL3pTX6goPCtYyvhmR4vz+A8bzR8QcB+l+L9lmbsqhYH/xKAbLV981jM3O3uXiiAfRW9rXko0DiJTiT4nC354CgK8akUfPOrmWJe/np3Lk0lv3DxK3aRmOUkPfl8wFk2FX+gEgyygEnxJ7bTPL9r/CmAl1HM33iPcR92wFl8Nf1DiZZhH6BOWGgCbrXW6E2w222nr0nSeMoProsIo+plLUPZCi97kVxHihOwp5QnPtVO/RwlGY+ISbg/L85q8KwuGOueX8ke6AlIUHX1CJ+7l/0Aihfz1jEcF0Smqkn+yZvbyiNNPY2P16w2TL37yLBAjYAAAAABJRU5ErkJggg==" alt=""><# } #><#=btn_text#></a>\n            </div>\n        </div>\n    </div>\n</div>';
});define("a/tpl/new_cpc_tpl.html.js",[],function(){
return'<!--cpc 文中广告-->\n<!--article_bottom 用于标示底部新样式，目前广告怕大量影响其它广告，所以只实验关注类-->\n<div id="js_cpc_area" class="mpad_cpc <# if(pos_type === 0 && parseInt(crt_size) === 708){ #>article_bottom<# } #>">\n    <!--有文字 "广告"-->\n    <!--<# if(tag_pos == \'left\'){ #>\n    "广告" 居左\n    <div class="mpad_cpc_adTag_left mpad_more_cps_left_container">广告<div href="javascript:;" class="mpad_more js_ad_opt_list_btn_<#=pos_type#>" <# if(!parseInt(can_see_complaint)){ #>style="display:none"<#}#>>\n                <ul class="mpad_more_list js_ad_opt_list js_ad_opt_list_<#=pos_type#>" style="display: none">\n                        <li class="mpad_more_list_ele">\n                            <a class="mpad_more_list_ele_container js_complain_btn_<#=pos_type#>" href="javascript:;">投诉</a>\n                        </li>\n                    </ul>\n        </div>\n    </div>\n    <# } else if(tag_pos == \'right\'){ #>\n    "广告" 居右\n    <div class="mpad_cpc_adTag_right mpad_more_cps_right_container">广告<div href="javascript:;" class="mpad_more js_ad_opt_list_btn_<#=pos_type#>" <# if(!parseInt(can_see_complaint)){ #>style="display:none"<#}#>>\n            <ul class="mpad_more_list js_ad_opt_list js_ad_opt_list_<#=pos_type#>" style="display: none">\n                <li class="mpad_more_list_ele">\n                    <a class="mpad_more_list_ele_container js_complain_btn_<#=pos_type#>" href="javascript:;">投诉</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <# } #>-->\n    <div class="mpad_cpc_inner">\n        <# if(isVideo){ #> <!--视频-->\n        <div id="js_video_container" class="mpad_cpc_bd js_ad_main_area mpad_cpc_video js_material_<#=pos_type#>" data-type="<#=type#>" data-ticket="<#=ticket#>" data-url="<#=url#>" data-rl="<#=rl#>"  data-aid="<#=aid#>" data-pt="<#=pt#>" data-tid="<#=traceid#>" data-gid="<#=group_id#>" data-apurl="<#=apurl#>" data-is_cpm="<#=is_cpm#>">\n            <div class="mpad_cpc_video_content js_video_container_new_protocol"></div> <!--这里放视频-->\n        </div>\n        \n        <# }else{ #> <!--纯图片-->\n        <div class="mpad_cpc_bd js_ad_main_area js_material_<#=pos_type#>" style="background-image:url(<#=banner#>)" data-type="<#=type#>" data-ticket="<#=ticket#>" data-url="<#=url#>" data-rl="<#=rl#>"  data-aid="<#=aid#>" data-pt="<#=pt#>" data-tid="<#=traceid#>" data-gid="<#=group_id#>" data-apurl="<#=apurl#>" data-is_cpm="<#=is_cpm#>"></div>\n        <# } #>\n        \n        <div class="mpad_cpc_ft <# if(!price){ #> single<# } #>">\n            <div class="mpad_cpc_ft_hd">\n                <# if(avatar){ #><!--头像-->\n                <!--app 为方头像，图文消息 为圆头像-->\n                <span class="<# if(isDownload){ #> mpad_cpc_avatar<# }else{ #> mpad_cpc_avatar_round<# } #>" style="background: url(<#=avatar#>) no-repeat center; background-size: contain;"></span>\n                <# } #>\n                \n                <div class="mpad_cpc_ft_msg ">\n                    <!--有title和金额-->\n                    <# if(!!title){ #>\n                        <p class="mpad_cpc_ft_msg_title"><#=title#></p>\n                        <# if(!!price){ #> <!--金额-->\n                        <p class="mpad_cpc_ft_msg_price">¥<#=price#></p>\n                        <# } #>\n\n                        <!--底部广告 描述，xx篇原创文章 xx位朋友关注-->\n                        <!-- 公众号描述 -->\n                        <!-- 原创文章 -->\n                        <!-- 好友关注 -->\n                        <# if(pos_type === 0 && parseInt(crt_size) === 708){ #>\n                        <p class="mpad_cpc_ft_msg_desc js_mpad_cpc_ft_msg_contact">\n                            <span class="mpad_cpc_ft_msg_desc_item"></span>\n                            <span class="mpad_cpc_ft_msg_desc_item"></span>\n                        </p>\n                        <# } #>\n                    <# } #>\n                    <# if(!(tag_pos == \'left\' || tag_pos == \'right\') && superscript){ #><!--广告标在里面-->\n                    <!--当没有title和价格的时候，出广告标，底部广告不会出现没有title的情况，所以底部不会出现广告标-->\n                    <!--更新：现在底部广告也有广告标了，并且也有title，所以加了superscript来控制角标 @scotthuang 2018-10-17-->\n                    <div class="mpad_cpc_adTag_inner mpad_more_innertips_container <# if(!title && !price){ #> single<# } #> js_ad_opt_list_btn_<#=pos_type#>">广告<div href="javascript:;" class="mpad_more js_mpad_more" <# if(!parseInt(can_see_complaint)){ #>style="display:none"<#}#>>\n                            <ul class="mpad_more_list js_ad_opt_list js_ad_opt_list_<#=pos_type#>" style="display: none">\n                                <li class="mpad_more_list_ele">\n                                    <a class="mpad_more_list_ele_container js_complain_btn_<#=pos_type#>" href="javascript:;">投诉</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <# } #>\n                </div>\n            </div>\n\n            \n            <# if(isDownload) {#>\n            <!--下载按钮 目前不会有小程序-->\n            <a href="javascript:void(0);" class="mpad_cpc_btn mpad_cpc_download_btn js_ad_action_<#=pos_type#>">\n                <div class="btn_download_outside js_download_outside"><#=btn_text#></div>\n                <div class="btn_progress js_download_percent" style="width: 0%"> \n                    <div class="btn_download_inner js_download_inner"><#=btn_text#></div>\n                </div>\n            </a>\n            <!--delay 用新的下载-->\n            <!--未下载-->\n            <!--下载中-->\n            <!--进度条更新这里-->\n            <!--暂停下载-->\n            <!--<a href="javascript:void(0);" class="mpad_cpc_btn js_ad_action_<#=pos_type#>"><#=btn_text#></a>\n            \n            <a href="javascript:void(0);" class="mpad_cpc_btn mpad_cpc_download_btn js_ad_action_<#=pos_type#>">\n                <div class="btn_progress js_download_percent" style="width: 0%"></div> \n                <span class="btn_download_cancel"></span>\n            </a>-->\n\n            <# }else{ #>\n            <!--非下载按钮-->\n            <a href="javascript:void(0);" class="mpad_cpc_btn js_ad_action_<#=pos_type#>">\n                <!--小程序标，文章底部用绿色。文中用白色-->\n                <# if(!!is_wx_app){ #>\n                <# if(pos_type === 0 && parseInt(crt_size) === 708){ #><img class="icon_wxapp icon_wxapp_article_bottom" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUzLjIgKDcyNjQzKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5ncmVlbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSI9PXNsaWNlPT0iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJhIiBmaWxsPSIjMDZBRTU2Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTExLjYyNDQxOSw4Ljc5MzE5MDMgTDExLjQyOTk3NTgsOC43OTY0NjI5NSBDMTAuODQyMDQ2NCw4Ljc5NjQ2Mjk1IDEwLjQ5OTkzOTgsOC4zNDc4NTg3MiAxMC43MjA5NTU3LDcuODMwNjU5MzggQzEwLjg3MjMwNyw3LjQ2MzMyNzYxIDExLjIxMzc3MDIsNy4xNzk2NDAyOCAxMS42MTcwMzc1LDcuMDg2NDY2MiBDMTIuNjk1OTg0OSw2LjgxNTU3NDMzIDEzLjQyOTA2MjksNS45Mzg0NjU0MiAxMy40MjkwNjI5LDQuOTE4NzcyOTkgQzEzLjQyOTA2MjksMy42ODI1MzI1NSAxMi4yOTQzMjg2LDIuNjc1MDkxOTUgMTAuODc3MDE0NCwyLjY3NTA5MTk1IEM5LjQ1OTcwMDA5LDIuNjc1MDkxOTUgOC4zMjQ5NjU3NywzLjY4MjUzMjU1IDguMzI0OTY1NzcsNC45MTg3NzI5OSBMOC4zMjQ5NjU3NywxMS4wODEyMjcgQzguMzI0OTY1NzcsMTMuMjUxNzU0MyA2LjQ1OTgwNTgsMTUgNC4xNjI0ODI4OCwxNSBDMS44NjUxNTk5NywxNSAwLDEzLjI1MTc1NDMgMCwxMS4wODEyMjcgQzAsOS4xNzgwMjgxNyAxLjQ0NDIzODYxLDcuNTUzNTA4MDcgMy40MTIwMzUyNSw3LjI0NDYyMDA4IEwzLjU3MDAyNDIyLDcuMjQ0NjIwMDggQzQuMDE1MTMxNzQsNy4yNDQ2MjAwOCA0LjMzNTc0NDEzLDcuNTIxNzc0NjQgNC4zMzU3NDM3OCw3LjkxNzU4NDM1IEM0LjMzNTkzMzYyLDcuOTg1NDA1OTQgNC4zMzQzNDk4NSw4LjAxNjc0NjIgNC4zMjc5MTIxNiw4LjA1NjkyMzEgQzQuMzE5MjMzODgsOC4xMTEwODMzOCA0LjMwMjMzNTkxLDguMTYyOTIyMTUgNC4yNzkwNDQzLDguMjEwNDIzNjUgQzQuMTM3MTg0ODEsOC41NTQ3MTg3NCAzLjc3NDUzNjY4LDguODUyODAwODQgMy4zODI5NjI1Myw4Ljk1NDYxNjgzIEMyLjMxMTgxMDQzLDkuMjIzNTUxNTIgMS41NzA5MzcwNSwxMC4wOTUzMDUxIDEuNTcwOTM3MDUsMTEuMDgxMjI3IEMxLjU3MDkzNzA1LDEyLjMxNzQ2NzUgMi43MDU2NzEzNywxMy4zMjQ5MDgxIDQuMTIyOTg1NjQsMTMuMzI0OTA4MSBDNS41NDAyOTk5MSwxMy4zMjQ5MDgxIDYuNjc1MDM0MjMsMTIuMzE3NDY3NSA2LjY3NTAzNDIzLDExLjA4MTIyNyBMNi42NzUwMzQyMyw0LjkxODc3Mjk5IEM2LjY3NTAzNDIzLDIuNzQ4MjQ1NjYgOC41NDAxOTQyLDEgMTAuODM3NTE3MSwxIEMxMy4xMzQ4NCwxIDE1LDIuNzQ4MjQ1NjYgMTUsNC45MTg3NzI5OSBDMTUsNi44MzIwNzU5NyAxMy41ODk3MzMsOC40Mzc2NzM4MyAxMS42MjQ0MTksOC43OTMxOTAzIFoiIGlkPSLlm77moIfpopzoibIiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="">\n                <# } else { #><img class="icon_wxapp icon_wxapp_article_bottom" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAAGz7rX1AAAAAXNSR0IArs4c6QAAA65JREFUSA2lVk9oVGcQ/+a9tytoSm6t5pBK9i0trdCTXlrx4EEF/1w0p+Klh9LiQcF9uy9Gu2rcfXlJUfAfth4UvPTPQVop9FCagzdBoaAI+xJjDgpCBaMbzO6+N8687Dy/Td6GRD/Iznwzv5n55vtm5kWp5VahEkyr+Gc51FJdoVJDlhpLVW0J6BqGA8AfiLgXTPPTWCc+FlNwRqc+wTB8KBZjQ/kOb7rnhO9AtOOdpnjHkyO6448/s7LZz33XPsFmUPCCMRXhUcNQmwwri61G474yYJwuZCE7tuA/CRK7KlZqJxlZPfrxA1F0pR2n0lF0MnC8yaZCNEVON3PALw78nmpU/hWz9SCYNwwojpZsX4zaqU5bItDp/MyMzXvDytxiWr7yZG39ef2ZosczTfW15frBl60W3lYA4YdWT2+hsL7OQH2Vv+2bo32PyKwwVDd4M+baSdSo1dzNsjX9/QHTxSvOiR52Pz3sb4mSovqlXIYeOq6mRP6uTOrNsTOnGhyjKx8Rx6DgqT9k96UaFL1gVxThX3QpqACHIYKdqHCrAtVMEhZPTCNUfzKlC5FqqxSqwXV63IMiYP3bpb26CEHhU+YTgzJiwgtIKOVzClEVEwOnEoT1ahA61cnvBSSUwIe4EyjpiHvJ4JqhhNi757u5SwIUSh1yYbNtW3RDcXHKMTyydgW0mA4OQiiyBQOAPhEklF484TXG4rvl63KqtY0I6m+FMEJ7ake1R8Ml7EI9VYInlMcGkVIdDdPZz8j+vWhqaazE47A/k2uEje/oyrcTfoBtANQk/d6iE/44Wsq9ED+rDuJ4tbMYqcPiYDlKc+3QaCl/cVVBnEptgppxGzumgpkDA3bQiW/rgahBDlLNX6MHin1TVj+tOEipGtghYk0cmmBs8dzcHdnrlAbGNzQwrsYyUPNSiDomlYdMJqsrIGMtmWusL3pTX6goPCtYyvhmR4vz+A8bzR8QcB+l+L9lmbsqhYH/xKAbLV981jM3O3uXiiAfRW9rXko0DiJTiT4nC354CgK8akUfPOrmWJe/np3Lk0lv3DxK3aRmOUkPfl8wFk2FX+gEgyygEnxJ7bTPL9r/CmAl1HM33iPcR92wFl8Nf1DiZZhH6BOWGgCbrXW6E2w222nr0nSeMoProsIo+plLUPZCi97kVxHihOwp5QnPtVO/RwlGY+ISbg/L85q8KwuGOueX8ke6AlIUHX1CJ+7l/0Aihfz1jEcF0Smqkn+yZvbyiNNPY2P16w2TL37yLBAjYAAAAABJRU5ErkJggg==" alt="" /><# } #>\n                <!--底部广告专用-->\n                <img class="icon_wxapp icon_wxapp_video_share_bottom" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUzLjIgKDcyNjQzKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT53aGl0ZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSI9PXNsaWNlPT0iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJhJ2EiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuNjI0NDE5LDguNzkzMTkwMyBMMTEuNDI5OTc1OCw4Ljc5NjQ2Mjk1IEMxMC44NDIwNDY0LDguNzk2NDYyOTUgMTAuNDk5OTM5OCw4LjM0Nzg1ODcyIDEwLjcyMDk1NTcsNy44MzA2NTkzOCBDMTAuODcyMzA3LDcuNDYzMzI3NjEgMTEuMjEzNzcwMiw3LjE3OTY0MDI4IDExLjYxNzAzNzUsNy4wODY0NjYyIEMxMi42OTU5ODQ5LDYuODE1NTc0MzMgMTMuNDI5MDYyOSw1LjkzODQ2NTQyIDEzLjQyOTA2MjksNC45MTg3NzI5OSBDMTMuNDI5MDYyOSwzLjY4MjUzMjU1IDEyLjI5NDMyODYsMi42NzUwOTE5NSAxMC44NzcwMTQ0LDIuNjc1MDkxOTUgQzkuNDU5NzAwMDksMi42NzUwOTE5NSA4LjMyNDk2NTc3LDMuNjgyNTMyNTUgOC4zMjQ5NjU3Nyw0LjkxODc3Mjk5IEw4LjMyNDk2NTc3LDExLjA4MTIyNyBDOC4zMjQ5NjU3NywxMy4yNTE3NTQzIDYuNDU5ODA1OCwxNSA0LjE2MjQ4Mjg4LDE1IEMxLjg2NTE1OTk3LDE1IDAsMTMuMjUxNzU0MyAwLDExLjA4MTIyNyBDMCw5LjE3ODAyODE3IDEuNDQ0MjM4NjEsNy41NTM1MDgwNyAzLjQxMjAzNTI1LDcuMjQ0NjIwMDggTDMuNTcwMDI0MjIsNy4yNDQ2MjAwOCBDNC4wMTUxMzE3NCw3LjI0NDYyMDA4IDQuMzM1NzQ0MTMsNy41MjE3NzQ2NCA0LjMzNTc0Mzc4LDcuOTE3NTg0MzUgQzQuMzM1OTMzNjIsNy45ODU0MDU5NCA0LjMzNDM0OTg1LDguMDE2NzQ2MiA0LjMyNzkxMjE2LDguMDU2OTIzMSBDNC4zMTkyMzM4OCw4LjExMTA4MzM4IDQuMzAyMzM1OTEsOC4xNjI5MjIxNSA0LjI3OTA0NDMsOC4yMTA0MjM2NSBDNC4xMzcxODQ4MSw4LjU1NDcxODc0IDMuNzc0NTM2NjgsOC44NTI4MDA4NCAzLjM4Mjk2MjUzLDguOTU0NjE2ODMgQzIuMzExODEwNDMsOS4yMjM1NTE1MiAxLjU3MDkzNzA1LDEwLjA5NTMwNTEgMS41NzA5MzcwNSwxMS4wODEyMjcgQzEuNTcwOTM3MDUsMTIuMzE3NDY3NSAyLjcwNTY3MTM3LDEzLjMyNDkwODEgNC4xMjI5ODU2NCwxMy4zMjQ5MDgxIEM1LjU0MDI5OTkxLDEzLjMyNDkwODEgNi42NzUwMzQyMywxMi4zMTc0Njc1IDYuNjc1MDM0MjMsMTEuMDgxMjI3IEw2LjY3NTAzNDIzLDQuOTE4NzcyOTkgQzYuNjc1MDM0MjMsMi43NDgyNDU2NiA4LjU0MDE5NDIsMSAxMC44Mzc1MTcxLDEgQzEzLjEzNDg0LDEgMTUsMi43NDgyNDU2NiAxNSw0LjkxODc3Mjk5IEMxNSw2LjgzMjA3NTk3IDEzLjU4OTczMyw4LjQzNzY3MzgzIDExLjYyNDQxOSw4Ljc5MzE5MDMgWiIgaWQ9IuWbvuagh+minOiJsiI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt="" /><# } #>\n                <#=btn_text#>\n            </a>\n            <# } #>\n            </div>\n        </div>\n    </div>\n</div>';
});define("appmsg/emotion/caret.js",[],function(e,t){
"use strict";
var t={};
return t.get=function(e){
var t=0;
if(document.selection){
e.focus();
var a=document.selection.createRange();
a.moveStart("character",-e.value.length),t=Sel.text.length;
}else(e.selectionStart||"0"==e.selectionStart)&&(t=e.selectionStart);
return t;
},t.set=function(e,t){
if(e.setSelectionRange)e.focus(),e.setSelectionRange(t,t);else if(e.createTextRange){
var a=e.createTextRange();
a.collapse(!0),a.moveEnd("character",t),a.moveStart("character",t),a.select();
}
},t;
});define("pages/similar_video_tpl.html.js",[],function(){
return'<# list.forEach(function (item, idx) { #>\n<li class="video-card__item js_similar_video_item js_related_item"  data-idx="<#=idx#>" data-url="<#=item.play_url#>" data-vid="<#=item.vid#>" data-time="<#=item.publish_time#>">\n  <div class="video-card__img-wrp">\n    <div class="video-card__img">\n      <img class="video-card__image-invisible js_similar_cover_img" src="<#=item.cover#>" alt="" >\n      <div class="video-card__duration_wrp">\n        <div class="video-card__duration_icon"></div>\n        <span class="video-card__duration"><#=item.formatDuration#></span>\n      </div>\n      <div class="video-card__mask-layer_full"></div>\n    </div>\n  </div>\n  <div class="video-card__desc-wrp">\n    <div class="video-card__desc"><#=item.title#></div>\n    <div class="video-card__detail">\n      <div class="video-card__source spacing_right read_num_wording"><#=item.srcDisplayName#></div>\n      <#if (item.like_num) { #>\n      <div class="video-card__source">赞<#=item.like_num#></div>\n      <# } #>\n    <div class="video-card__dislike-btn">\n        <button type="button" class="dislike_btn js_feedback_btn">不喜欢</button>\n      </div>\n      <!-- 去掉display:none;改用样式默认隐藏，加classnamme:feedback_dialog_show显示 -->\n      <div class="feedback_dialog_wrp js_feedback_dialog">\n        <div class="weui-mask js_mask"></div>\n        <!-- 底部时弹窗向上，加.feedback_dialog_pos_top -->\n        <div class="feedback_dialog js_dialog_wrp">\n          <div class="feedback_dialog_hd weui-flex">\n            <div class="weui-flex__item feedback_dialog_title">不看的原因</div>\n            <button type="button" class="weui-btn weui-btn_primary weui-btn_mini weui-btn_disabled js_submit">确定</button>\n          </div>\n          <div class="feedback_dialog_bd">\n            <ul class="feedback_tag_list">\n              <!-- 选中时tag加.feedback_tag_selected -->\n              <# reason.forEach(function(r) { #>\n              <li class="feedback_tag_item js_reason js_tag_item" data-value="<#=r.value#>"><#=r.name#></li>\n              <# }); #>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</li>\n<# }); #>';
});define("pages/video_collection/report.js",["pages/utils.js","biz_wap/jsapi/core.js","common/utils.js","biz_wap/utils/localstorage.js","biz_wap/utils/device.js","biz_wap/jsapi/leaveReport.js","biz_wap/utils/wapsdk.js","biz_common/base64.js"],function(e){
"use strict";
function n(e){
switch(e.EventType){
case 1:
g=e.StartTime;
break;

case 10:
y=e.StartTime;
break;

case 15:
if(!g)return;
var n=y-g;
y&&n>0&&(c.saveSpeeds({
sample:v,
uin:m,
pid:u,
speeds:{
sid:window.__second_open__?21:24,
time:n
}
}),console.log("[Video Save Speed] enterToStartDownloadTime",n));
var i=e.EndTime-g;
i>0&&(c.saveSpeeds({
sample:v,
uin:m,
pid:u,
speeds:{
sid:window.__second_open__?22:25,
time:i
}
}),console.log("[Video Save Speed] enterToPlayTime",i));
var o=e.EndTime-y;
y&&o>0&&(c.saveSpeeds({
sample:v,
uin:m,
pid:u,
speeds:{
sid:window.__second_open__?23:26,
time:o
}
}),console.log("[Video Save Speed] startDownloadToPlayTime",o)),c.send(),g=0;
}
}
function i(e){
"number"!=typeof e.StartTime&&(e.StartTime=Date.now()),"number"!=typeof e.EndTime&&(e.EndTime=Date.now()),
k.push({
type:5,
item:Object.keys(e).map(function(n){
return{
key:n,
val:e[n]+""
};
})
}),n(e);
}
function o(e){
T||(T=!0,i({
EventType:3
}),w.reportNow(e));
}
var t=e("pages/utils.js"),a=e("biz_wap/jsapi/core.js"),s=e("common/utils.js"),r=e("biz_wap/utils/localstorage.js"),d=e("biz_wap/utils/device.js"),w=e("biz_wap/jsapi/leaveReport.js"),c=e("biz_wap/utils/wapsdk.js"),p=e("biz_common/base64.js").toBase64,_="function"==typeof window.btoa?window.btoa:p,m="";
try{
m=window.encodeURIComponent(_(window.user_uin));
}catch(l){
m="";
}
var u=2181,v=.02;
c.setBasicTime({
sample:v,
uin:m,
pid:u
});
var g=0,y=0,T=!1,k=[];
return a.invoke("handleMPPageAction",{
action:"getEnterTime"
},function(e){
var n=e.clickTimeMs,o=r.get("__get_enter_video_common_time__");
n+""!==o?(r.set("__get_enter_video_common_time__",n),console.log("[Video Enter Time]",n)):n=0,
i({
EventType:1,
MiaoKai:window.__second_open__?1:0,
StartTime:n||window.enter_time||Date.now(),
EndTime:n||window.enter_time||Date.now()
});
}),window.addEventListener("load",function(){
i({
EventType:7
});
}),window.top===window&&w.addReport(function(e){
if(!s.isWcSlPage())return!1;
window.__second_open_auth_time__&&i({
EventType:6,
StartTime:window.__second_open_auth_time__,
EndTime:window.__second_open_auth_time__
}),e||i({
EventType:2
});
var n=navigator.userAgent.match(/Mozilla.*?\((.*?)\)(\s|$)/),o=navigator.userAgent.match(/Language\/(.*?)(\s|$)/),a=0,r=window.networkType;
switch(r||(r=navigator.userAgent.match(/NetType\/(.*?)(\s|$)/),r=r&&r[1]&&r[1].toLowerCase()),
r){
case"wifi":
a=1;
break;

case"2g":
a=2;
break;

case"3g":
a=3;
break;

case"2g/3g":
a=3;
break;

case"4g":
a=4;
}
var w={
type:5,
item:[{
key:"DeviceModel",
val:n&&n[1]||"unknown"
},{
key:"DeviceBrand",
val:n&&n[1]||"unknown"
},{
key:"OsName",
val:["ios","android","windows","Mac"].filter(function(e){
return d.os[e];
})[0]||"unknown"
},{
key:"OsVersion",
val:d.os.version||"unknown"
},{
key:"LanguageVersion",
val:o&&o[1]||"unknown"
},{
key:"NetType",
val:a+""
},{
key:"EnterId",
val:1*(window.enterid||window.cgiData.enterid||parseInt(Date.now()/1e3,10))+""
},{
key:"EnterPageId",
val:1*(window.enterid||window.cgiData.enterid||parseInt(Date.now()/1e3,10))+""
},{
key:"AppMsgUrl",
val:window.location.href
},{
key:"Vid",
val:window.cgiData.vid
},{
key:"Scene",
val:1*(window.scene||window.cgiData.scene||t.getParam("scene"))+""
},{
key:"SubScene",
val:1*(window.subscene||window.cgiData.subscene||t.getParam("subscene"))+""
}]
};
return{
reportUrl:"https://mp.weixin.qq.com/mp/videoh5report",
reportData:JSON.stringify({
report:k,
comm_fields:w
}),
method:"POST"
};
}),{
add19735ExtData:i,
leaveReportNowForSwitchVideo:o
};
});define("a/appdialog_confirm.html.js",[],function(){
return'<div class="wx_profile_dialog_primary">\n    <div class="weui-mask"></div>\n    <div class="weui-dialog weui-skin_android">\n        <div class="weui-dialog__hd"><strong class="weui-dialog__title">是否立即下载该应用</strong></div>\n        <div class="weui-dialog__bd">\n            <div class="weui-flex">\n                <div class="wx_profile_info_avatar_wrp">\n                    <span class="wx_profile_info_avatar">\n                        <img src="<#=app_img_url#>" alt="">\n                    </span>\n                </div>\n                <div class="weui-flex__item">\n                    <strong class="wx_profile_info_title"><#=app_name#></strong>\n                </div>\n            </div>\n        </div>\n        <div class="weui-dialog__ft">\n            <a href="javascript:;" class="js_cancel weui-dialog__btn weui-dialog__btn_default">取消</a>\n            <a href="javascript:;" class="js_ok weui-dialog__btn weui-dialog__btn_primary">下载</a>\n        </div>\n    </div>\n</div>\n';
});;define('widget/wx_profile_dialog_primary.css', [], function(require, exports, module) {
	return ".radius_avatar{display:inline-block;background-color:#fff;padding:3px;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;overflow:hidden;vertical-align:middle}.radius_avatar img{display:block;width:100%;height:100%;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;background-color:#eee}.wx_profile_dialog_primary .weui-mask{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,0.6)}.wx_profile_dialog_primary .weui-dialog{position:fixed;z-index:5000;width:80%;max-width:300px;top:50%;left:50%;-webkit-transform:translate(-50%,-65%);transform:translate(-50%,-65%);background-color:#fff;text-align:center;border-radius:3px;overflow:hidden}.wx_profile_dialog_primary .weui-dialog__hd{position:relative;padding:20px 20px 10px;text-align:left}.wx_profile_dialog_primary .weui-dialog__hd:after{content:\" \";position:absolute;left:20px;right:20px;bottom:0;height:1px;border-bottom:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.wx_profile_dialog_primary .weui-dialog__title{font-weight:400;font-size:17px}.wx_profile_dialog_primary .weui-dialog__bd{padding:16px 20px;min-height:40px;font-size:15px;line-height:1.3;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;color:#999}.wx_profile_dialog_primary .weui-dialog__bd:first-child{padding:2.7em 20px 1.7em;color:#353535}.wx_profile_dialog_primary .weui-dialog__ft{position:relative;line-height:44px;font-size:17px;display:-webkit-box;display:-webkit-flex;display:flex}.wx_profile_dialog_primary .weui-dialog__ft:after{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.wx_profile_dialog_primary .weui-dialog__btn{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#3cc51f;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.wx_profile_dialog_primary .weui-dialog__btn:active{background-color:#eee}.wx_profile_dialog_primary .weui-dialog__btn:after{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(0.5);transform:scaleX(0.5)}.wx_profile_dialog_primary .weui-dialog__btn:first-child:after{display:none}.wx_profile_dialog_primary .weui-dialog__btn_default{color:#353535}.wx_profile_dialog_primary .weui-dialog__btn_primary{color:#1aad19}.wx_profile_dialog_primary .weui-skin_android .weui-dialog{text-align:left;box-shadow:0 6px 30px 0 rgba(0,0,0,0.1)}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__title{font-size:21px}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__hd{text-align:left;padding:1.3em 1.6em 1.2em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__hd:after{display:none}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__bd{color:#999;padding:0 1.6em 1.4em;font-size:17px;text-align:left}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__bd:first-child{padding:1.6em 1.6em 2em;color:#353535}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__ft{display:block;text-align:right;line-height:42px;font-size:16px;padding:0 1.6em .7em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__ft:after{display:none}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn{display:inline-block;vertical-align:top;padding:0 .8em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:after{display:none}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:active{background-color:rgba(0,0,0,0.06)}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:visited{background-color:rgba(0,0,0,0.06)}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:last-child{margin-right:-0.8em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn_default{color:#808080}@media screen and (min-width:1024px){.wx_profile_dialog_primary .weui-dialog{width:35%}}.wx_profile_dialog_primary .weui-flex{display:-webkit-box;display:-webkit-flex;display:flex}.wx_profile_dialog_primary .weui-flex__item{-webkit-box-flex:1;-webkit-flex:1;flex:1}.wx_profile_dialog_primary .weui-flex{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.wx_profile_dialog_primary .weui-flex__item{word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.wx_profile_info_avatar_wrp{padding-right:10px}.wx_profile_info_avatar{width:50px;height:50px;padding:0;display:inline-block;background-color:#fff;vertical-align:middle}.wx_profile_info_avatar img{display:block;width:100%;border-radius:10px}.wx_profile_info_title{display:block;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-size:16px;font-weight:400;text-align:left}";
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
define("new_video/player.js",["page/pages/video_new.css","biz_common/utils/string/html.js","biz_wap/zepto/zepto.js","biz_wap/zepto/event.js","biz_wap/zepto/touch.js","biz_wap/jsapi/log.js","biz_common/dom/event.js","new_video/player.html.js","biz_wap/utils/device.js","biz_wap/utils/mmversion.js","new_video/ctl.js","biz_common/tmpl.js","pages/iframe_communicate.js","a/a_utils.js","biz_common/utils/url/parse.js","pages/version4video.js","biz_wap/utils/wapsdk.js","biz_common/base64.js","biz_wap/jsapi/core.js","new_video/plugin/util.js","biz_wap/utils/jsmonitor_report.js","common/utils.js","biz_wap/utils/ajax.js","appmsg/set_font_size.js"],function(e){
"use strict";
function t(){
o(),i();
}
function i(){
S.on("onNetWorkChange",function(e){
if(console.log("networkchanged",e),e.networkType||(e.networkType=e.netType),e.networkType&&e.simType)try{
if(!parent.window.lastNetworkType&&window.networkType&&window.simType)parent.window.lastNetworkType={
networkType:window.networkType,
simType:window.simType
};else if(b.isObjectValueEqual(parent.window.lastNetworkType,e))return;
if(window.simType=e.simType,window.networkType=e.networkType,b.isMobileNetwork(e.networkType)&&1!==e.simType&&parent.window.lastNetworkType&&("wifi"===parent.window.lastNetworkType.networkType||b.isNoneNetwork(parent.window.lastNetworkType.networkType)))for(var t in parent.window.__MpPlayers){
var i=parent.window.__MpPlayers[t];
i._g.isUserPause=!1,i._g.pauseNetType=null,!i.isPlay()&&!i.isEnd()&&i.isPause()&&i.hasBeginPlay()?(i._g.isUserPause=!0,
i._g.pauseNetType=parent.window.lastNetworkType.networkType):i.isPlay()&&("wifi"===parent.window.lastNetworkType.networkType&&b.isVideoNeedFlowNotice(i.opt.flow,2)||b.isNoneNetwork(parent.window.lastNetworkType.networkType)&&b.isVideoNeedFlowNotice(i.opt.flow,4))&&i.__showFlowNotice_1();
}
parent.window.lastNetworkType=e;
}catch(o){}
});
}
function o(){
document.webkitVisibilityState?document.addEventListener("webkitvisibilitychange",r,!1):document.msVisibilityState?document.addEventListener("msvisibilitychange",r,!1):document.visibilityState&&document.addEventListener("visibilitychange",r,!1);
try{
parent.window.__MpBindExitFullPage||(parent.window.__MpBindExitFullPage=!0,P.listenMpPageAction(function(e){
if(e&&"onExitMpVideoFullPage"===e.action)for(var t in parent.window.__MpPlayers)if(Object.prototype.hasOwnProperty.call(parent.window.__MpPlayers,t)){
var i=parent.window.__MpPlayers[t];
if(i&&i.__isInFullScreen){
var o=i.opt&&i.opt.extinfo&&i.opt.extinfo.vid?i.opt.extinfo.vid:"";
if(o&&o===e.videoVid){
if(i.__isInFullScreen=!1,!u.os.android){
var n=1*e.videoCurrTime;
n=-1===n?0/0:n;
var a=i.__getDuration();
parseInt(a,10)===parseInt(n,10)||n>a?i.videoEnd():i.play4outer(n,{
triggerEvent:!1
}),i.onFullScreenChange({
state:!1,
type:"jsapi"
});
}
break;
}
}
}
}));
}catch(e){
l.info("videoplayer jsapi ExitFullPage error:"+e);
}
}
function n(){
if("hidden"in document)return"hidden";
for(var e=["webkit","moz","ms","o"],t=0;t<e.length;t++)return e[t]+"Hidden"in document,
e[t]+"Hidden";
return null;
}
function a(){
var e=n();
return e?document[e]:!1;
}
function s(e,t){
t?(e.setAttribute("muted",!0),e.muted=!0):(e.removeAttribute("muted"),e.muted=!1);
}
function r(){
if(a())try{
for(var e in parent.window.__MpPlayers){
var t=parent.window.__MpPlayers[e];
if(t.hasBeginPlay()&&t.isPlay()){
t._useWcSlPlayer()||(t.pause4outer(),F.visibilityPausePlayer=t);
break;
}
}
}catch(i){}else{
var o=F.visibilityPausePlayer;
o&&!o._useWcSlPlayer()&&o.hasBeginPlay()&&!o.isEnd()&&(o.play4outer(),F.visibilityPausePlayer=null);
}
}
e("page/pages/video_new.css"),e("biz_common/utils/string/html.js"),e("biz_wap/zepto/zepto.js"),
e("biz_wap/zepto/event.js"),e("biz_wap/zepto/touch.js");
var l=e("biz_wap/jsapi/log.js"),d=e("biz_common/dom/event.js"),_=e("new_video/player.html.js"),u=e("biz_wap/utils/device.js"),c=e("biz_wap/utils/mmversion.js"),h=e("new_video/ctl.js"),p=e("biz_common/tmpl.js"),g=e("pages/iframe_communicate.js"),f=e("a/a_utils.js"),v=e("biz_common/utils/url/parse.js"),m=e("pages/version4video.js"),y=e("biz_wap/utils/wapsdk.js"),w=e("biz_common/base64.js"),S=e("biz_wap/jsapi/core.js"),b=e("new_video/plugin/util.js"),T=e("biz_wap/utils/jsmonitor_report.js"),P=e("common/utils.js"),j=e("biz_wap/utils/ajax.js"),C=e("appmsg/set_font_size.js"),k=18e4,B=3e3,F={
visibilityPausePlayer:null,
wcSlPlayerSupport:!1,
wcSlPlayerAndroidSafeAreaInsets:{
top:0,
left:0,
right:0,
bottom:0
},
hasAutoFlag:!1
};
try{
F._debug=window.parent.window.location.href.indexOf("&_debug=1")>0;
}catch(I){
F._debug=!1;
}
var x=5e3;
t();
var R=c.getInner();
window.top===window&&c.isWechat&&!c.isInMiniProgram&&(u.os.iphone&&c.gtVersion("7.0.15",1)||u.os.android&&(R>"27001037"&&"27001060">R||R>="27001100"))&&(F.wcSlPlayerSupport=!0,
console.log("support wcslplayer"),u.os.iphone&&S.invoke("handleVideoAction",{
action:"insertSameLayerVideo"
},function(e){
"same layer switch is closed"===e.err_desc&&(T.setSum(221515,13,1),console.log("support wcslplayer but switch is closed"));
})),u.os.android&&S.invoke("handleDeviceInfo",{
action:"getSafeAreaInsets"
},function(e){
console.log("getSafeAreaInsets for wcslplayer",e),-1!==e.err_msg.indexOf(":ok")&&(F.wcSlPlayerAndroidSafeAreaInsets.top=e.top,
F.wcSlPlayerAndroidSafeAreaInsets.left=e.left,F.wcSlPlayerAndroidSafeAreaInsets.right=window.screen.width-e.right,
F.wcSlPlayerAndroidSafeAreaInsets.bottom=window.screen.height-e.bottom);
});
var E=function(e){
F._debug&&console.log(e);
},M=(navigator.userAgent,function(){
return!0;
}()),W=function(){
return!!u.browser.M1;
}(),D=function(e,t){
var i=document.createElement("div");
return e in i.style?(i.style[e]=t,i.style[e]===t):!1;
},N=function(e){
var t=0,i=0,o=0;
return.5>e&&(e=0),e=Math.ceil(e),t=Math.floor(e/3600),i=Math.floor((e-3600*t)/60),
o=e-3600*t-60*i,0!=t?(10>t&&(t="0"+t),t+=":"):t="",10>i&&(i="0"+i),10>o&&(o="0"+o),
t+i+":"+o;
},V=!u.canSupportVideo,L=function(e){
var t=this,i=$(e.container);
"undefined"==typeof e.videoReportType&&(e.videoReportType=-1),e.width=e.width||300,
e.height=e.height||300,e.videoWidth=e.videoWidth||0,e.videoHeight=e.videoHeight||0,
e.duration=e.duration||0,e.videoFit=!1,e.isVideoSharePage=e.isVideoSharePage||!1;
var o={
needToFit:!1,
supportObjectFit:!1,
os:u.os
};
if(e.width&&e.height&&e.videoWidth&&e.videoHeight){
var n=Math.abs(e.width/e.height-e.videoWidth/e.videoHeight);
.1>=n&&(o.needToFit=!0,D("objectFit","fill")&&(o.supportObjectFit=!0,e.videoFit=!0));
}
if(e.ratio=e.ratio||e.width/e.height,e.autoplay=!!e.autoplay||!1,e.flow=e.flow&&parseFloat(e.flow)||0,
this.opt=e,this.id=e.id=+new Date+"_"+Math.floor(Math.random()*Math.floor(+new Date)),
this.opt.jsapiFullScreen!==!0&&(this.opt.jsapiFullScreen=!1),this.opt.canShareVideo!==!0&&(this.opt.canShareVideo=!1),
this.opt.pauseShowControll!==!0&&(this.opt.pauseShowControll=!1),this.__iosPreloadPause=!1,
this.__iosPreloadPlayFlag=!1,this.__iosIsRealPreload=!1,this.__forcePause=!1,this.__hasFuncControllBar=!0,
this.__dragTimes=[],this.__play_total_time=0,this.__last_playtime=0,this.__always_hide_loading=e.always_hide_loading||!1,
this.__last_loadingtime=0,this.__loadingCountFlag=null,this.__loadingCountFlagAuto=null,
this.__userplaytime=!1,this._playingBufferingStartTime=null,this._g={
oriSrc:this.opt.src,
timeupdateCacheCount:3,
serialTimeupdateCache:[],
resetShowingLoadingTimeoutId:null,
showingLoadingTimeoutId:null,
statusDefine:{
init:1,
play:1,
pause:1,
loading:1,
end:1,
error:1
},
subStatusDefine:{
init:1,
play:1,
playing:1,
waiting:1,
stalled:1,
seeking:1,
seeked:1,
preload:1,
resolutionchange:1
},
status:"init",
subStatus:"init",
triggerTimeupdateLog:!0,
isUserPause:!1,
pauseNetType:null,
hasReportBeginPlay:!1,
coverBase64:"",
loadingCoverBase64:!1,
touchForwarding:!1,
jsapiFullScreenId:null,
jsapiFullScreenErrCnt:0,
jsapiFullScreenErrLimit:2,
iosPreloadTmpPlay:!1,
fallbackFromWcSlVideoToH5Player:!1,
playbackRateBtnInfoId:e.playbackRateBtnInfoDefaultId
},e._mustHideFullScreen=W,e.display=e.autoHide?"none":"block",e.ad_muted_btn=e.ad_muted_btn||!1,
e.videoCrossOrigin=e.jsapiFullScreen&&u.os.ios?!0:!1,P.__useWcSlPlayer=e._initUseWcSlPlayer=this._useWcSlPlayer(),
console.log("use wcslplayer",P.__useWcSlPlayer),this._useWcSlPlayer()){
if(e.resolutionInfo&&e.resolutionInfo.length){
for(var a=0;a<e.resolutionInfo.length;a++){
var s=e.resolutionInfo[a];
if(s.src===e.src){
s.initCurrent=!0,e.initResolutionName=s.name;
break;
}
}
e.initResolutionName||(e.initResolutionName="清晰度");
}
if(e.playbackRateInfo&&e.playbackRateInfo.length){
e.width>e.height&&(e.playbackRateInfo=[].concat(e.playbackRateInfo),e.playbackRateInfo.reverse());
for(var a=0;a<e.playbackRateInfo.length;a++){
var s=e.playbackRateInfo[a];
if(1===s.rate){
s.initCurrent=!0,e.initPlaybackRateName=s.name;
break;
}
}
e.initPlaybackRateName||(e.initPlaybackRateName="倍速");
}
}
var r=p.tmpl(_,e,!1);
i.append(r);
var l=this.container=$("#js_mpvedio_"+this.id);
this._useWcSlPlayer()?(this.$video=l.find("wx-open-video"),this.__initFullProfile(),
T.setSum(221515,1,1),T.setSum(221515,u.os.android?6:5,1)):this.$video=l.find("video");
var d=this.video=this.$video[0];
this.__initData(),this.__initVideo();
var c=e.src;
if(!c)return this.changeStatus({
status:"error",
subStatus:"5"
}),void this.__triggerOutside("error",{
errorcode:5
});
if(this._useWcSlPlayer()||d.setAttribute("origin_src",c),V)return l.find(".js_btn_play").attr("href",c).show(),
this.__loadedHandler(),void this.__bindBtnEvent();
parent.window&&!parent.window.lastNetworkType&&window.networkType&&window.simType&&(parent.window.lastNetworkType={
networkType:window.networkType,
simType:window.simType
});
var h=e.plugins||[];
this._blockPlugin={};
for(var a=0,g=h.length;g>a;++a){
var f=h[a];
f.setPlayer(this),!!f.init&&f.init();
}
this.plugins=h,this._trigger("afterCheckVideoFit",o),this._trigger("loading",e),
this.__defineEvent(),this.__bindBtnEvent(),this.__bindVideoEvent(),this.__preventFontSizeChange(),
this.__addPostmessageListener();
try{
parent.window.__MpPlayers||(parent.window.__MpPlayers={}),parent.window.__MpPlayers[this.id]=this;
}catch(v){}
this.opt.canShareVideo&&setTimeout(function(){
t.getCoverBase64({
callback:function(){}
});
},1e3);
};
return $.extend(L.prototype,{
_jsapiLog:function(e){
var t=["vid:","videosrc:"];
this.opt&&this.opt.extinfo&&this.opt.extinfo.vid&&(t[0]+=this.opt.extinfo.vid),this.$video&&this.$video[0]&&this.$video[0].src&&(t[1]+=this.$video[0].src),
l.info("videoplayer "+e+";"+t.join(";"));
},
__triggerOutside:function(){
var e=this.opt,t=arguments,i=t[0],o=this,n=this.video;
if(i){
i=i.substr(0,1).toUpperCase()+i.substr(1);
var a=e["on"+i];
"function"==typeof a&&a.apply(this,t),this._useWcSlPlayer()||"BeginPlay"!=i||null!=o.__replaySec&&0!=o.__replaySec||!u.os.ios||(n.currentTime=.1);
}
},
__errorHandler:function(){
this.video.removeAttribute("src");
},
__loadingHandler:function(e){
this.showLoading(),this._trigger("ready",e);
},
__readyHandler:function(e){
var t=this.opt.src;
m.proxyPreloadExper()&&m.proxyPreloadExper().isUsePreload&&this.setSrc(t),this._trigger("loaded",e);
},
__loadedHandler:function(e){
return(e&&e.autoplay||this.opt.autoplay||window.__auto_play__)&&m.device.inWechat?(window.__auto_play__=!1,
this.videoCtlReport({
step:15
}),this._g.hasReportBeginPlay=!0,void this._trigger("readyBeginPlay",e)):void this._setBeginPlayStatus();
},
__readyBeginPlayHandler:function(e){
m.proxyPreloadExper()&&m.proxyPreloadExper().isUsePreload||this.dontReset||this.setSrc(this.opt.src),
this.dontReset&&(this.dontReset=!1),this._trigger("beginPlay",e);
},
__beginPlayHandler:function(e){
function t(e,t){
e.__firstPlayStart=+new Date,e.__userplaytime=!0,e._useWcSlPlayer()||(t.find(".js_video_poster").show(),
e.showControllBar()),e.showCover(),t.find(".js_video_play_controll").hide(),e.__hasBeginPlay=!0,
e.showLoading("firstTime"),e.opt.flowNotice&&e.__firstLoadedFlowNoticeJudge();
}
V&&(location.href=this.opt.src);
var i=this.container,o=this,n=this.video,a=void 0;
setTimeout(function(){
try{
o.__continueSec&&(o.__replaySec=o.__continueSec,o.__continueSec=null),o._jsapiLog("set continue:"+o.__replaySec),
o._useWcSlPlayer()?(e.replay&&(o.__canplay=!0,n.currentTime=0,setTimeout(function(){
o.showControllBar(),o.__hideControllTimeout();
},500)),t(o,i)):(a=n.play(),"object"===("undefined"==typeof a?"undefined":_typeof(a))?a.then(function(){
t(o,i);
}).catch(function(e){
("AbortError"===e.name||"NotAllowedError"===e.name)&&(o._setBeginPlayStatus(),o.dontReset=!0,
T.setSum(114217,16,1));
}):t(o,i));
}catch(s){
o._jsapiLog("play error");
}
},1);
},
__replayHandler:function(){
if(this.videoCtlReport({
step:9
}),!this._useWcSlPlayer()){
var e=this.video.muted;
this.setSrc(this.src,this.video.preload,!0),this.triggerMuted(e);
}
this._afterReplay();
},
__endHandler:function(){
this.container.find(".js_btn_play_aria").data("status","3").removeClass("video_playing"),
this.container.find(".js_play_bar_wrapper").hide(),this.hideControllBar(),this.hideTouchForward(),
this._hidePlayControllBar(),this.__hasBeginPlay=!1,this.__canplay=!1,this.isInFullScreen()&&this.showWcSlFullEndExitBtn(),
this.__hideSubSettingTimeout();
},
__hideControllTimeoutCallback:function(){
return this.__onTouch?void this.__hideControllTimeout():void(this.isPlay()&&this.hideControllBar());
},
__touchVideoHandler:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
if(this.opt.blockTouchVideo||this.__onTouch||this.opt.pauseShowControll&&this.isPause()||this.__userplaytime)return!1;
if(!this.__canplay||this.isEnd()&&this.opt.hideControllBarAtEnd)return void this.hideControllBar();
var t=this.container.find(".js_controll");
e.isShow===!0||"none"==t.css("display")?this.showControllBar():this.hideControllBar();
var i=this.container.find(".js_video_flow");
"none"!==i.css("display")&&this._g.isUserPause===!1&&this.__hideFlowNotice(),this.__hideControllTimeout(),
this.__hideSubSettingTimeout();
},
__hideControllTimeout:function(){
var e=this;
this.__touchVideoTimeoutHandler&&clearTimeout(this.__touchVideoTimeoutHandler),this.__touchVideoTimeoutHandler=setTimeout(function(){
e.__hideControllTimeoutCallback();
},x);
},
__hideSubSettingTimeout:function(){
var e=this;
this._useWcSlPlayer()&&(this.__hideSubSettingTimeoutHandler&&clearTimeout(this.__hideSubSettingTimeoutHandler),
this.container.find(".js_sub_setting").addClass("hide"),this.__hideSubSettingTimeoutHandler=setTimeout(function(){
delete e.__hideSubSettingTimeoutHandler;
var t=e.container.find(".js_play_mode_select"),i=e.container.find(".js_playback_mode_select");
t.length&&"flex"===t.css("display")?e._trigger("resolutionChange",{
action:"hide"
}):i.length&&"flex"===i.css("display")&&e._trigger("rateChange",{
action:"hide"
}),e.container.find(".js_play_mode_select").css("display","none"),e.container.find(".js_playback_mode_select").css("display","none");
},500));
},
__initData:function(){
this.log={
hasended:0,
lastsec:0,
duration:0,
video_error:0
},this.__hasBeginPlay=!1,this.__canplay=!1,this._playingBufferingStartTime=null,
this.__userplaytime=!1,this.__hasscroll=!1,this.__replaySec=null,this.__playQueue=[];
},
__initVideo:function(){
var e=this.opt,t=this.video;
t.addEventListener("contextmenu",function(e){
e.preventDefault();
},!1),t.hasAttribute("controls")&&t.removeAttribute("controls"),this._useWcSlPlayer()||(t.setAttribute("webkit-playsinline","isiPhoneShowPlaysinline"),
t.setAttribute("playsinline","isiPhoneShowPlaysinline")),e.loop&&t.setAttribute("loop",e.loop),
e.muted&&s(t,!0),this.$video.off("loadedmetadata durationchange"),this.__hasVideoDurationchange=!1;
},
__initFullProfile:function(){
var e=this,t=this.opt,i=this.container.find(".js_video_fullscreen_profile");
d.tap(i.find(".js_video_fullscreen_profile_exit")[0],function(){
e.exitFullScreen();
}),1!==window.isprofileblock&&d.tap(i.find(".js_video_fullscreen_go_profile")[0],function(){
S.invoke("profile",{
username:t.bizUserName
},function(){
e._trigger("profileJump",{
scene:"fullscreen"
});
});
}),t.videoTitle&&i.find(".js_video_fullscreen_title").text(t.videoTitle),t.headImgUrl&&i.find(".js_video_fullscreen_head").css("background","url("+t.headImgUrl+") no-repeat center / cover;"),
t.bizNickName&&i.find(".js_video_fullscreen_name").text(t.bizNickName);
},
__getDuration:function(){
var e=this.opt,t=this.video,i=t?t.duration:null;
return i&&1!=i?i:e.duration;
},
__videoDurationchange:function(){
var e=this;
if(!e.__hasVideoDurationchange){
var t=this.video,i=this.opt,o=this.container;
if(1/0!=t.duration&&t.duration>0&&1!=t.duration)e.duration=t.duration,e.__hasVideoDurationchange=!0;else{
if(!i.duration)return!1;
e.duration=i.duration,e.__hasVideoDurationchange=!0;
}
e.log.duration=e.duration,e.duration>>=0,o.find(".js_total_time").text(N(e.duration)),
this.__hasFuncControllBar&&o.find(".js_progress_bar").show();
var n=+new Date,a=n-e.log.loadwait_start;
e.log.loadwait=a,e._trigger("durationchange",{
loadwait:a
});
}
},
__startCountTime:function(){
var e=this,t=this.video;
t&&null===e.__last_playtime&&(e.__last_playtime=t.currentTime);
},
__endCountTime:function(){
var e=this,t=this.video;
t&&t.currentTime>e.__last_playtime&&null!==e.__last_playtime&&(e.__play_total_time+=t.currentTime-e.__last_playtime,
e.__last_playtime=null);
},
__bindVideoEvent:function(){
var e=this.$video,t=this,i=this.container,o=i.find(".js_switch"),n=this.video;
e.off("timeupdate").on("timeupdate",function(){
if(t.__forcePause===!0)return void E(t.id+":timeupdate __forcePause return");
if(t.__hasBeginPlay&&!t.__canplay)return t.showLoading(),!1;
n=t.video,null!=t.__replaySec&&(E(t.id+":timeupdate __replaySec"),n.pause(),n.currentTime=t.__replaySec,
t.__last_playtime=t.__replaySec,n.play(),t.__replaySec=null),t.__videoDurationchange();
var e=n.currentTime;
if(e>0){
t.__startCountTime(),t._addSerialTimeupdate(),"loading"===t._g.status&&"seeking"===t._g.subStatus||!t._checkPlayBySerialTimeupdate()||(t.hideLoading(),
t._g.touchForwarding||t.hideTouchForward());
var i=t.__getDuration();
t.__onTouch||(t.__setControllBar(e/i),t.__setPlayTime(e)),t.hideCover(),t._trigger("timeupdate",{
currentTime:e
}),t.afterFirstLoaded();
}
}),e.off("canplay").on("canplay",function(){
null!=t.__replaySec&&(n.currentTime=1*(1*t.__replaySec).toFixed(4),t.__last_playtime=t.__replaySec,
t.__replaySec=null),t.__canplay=!0,t._trigger("canplay");
}),e.off("ended").on("ended",function(){
E("player inner isend:"+t.isEnd()),t.isEnd()&&t.videoEnd();
}),e.off("emptied").on("emptied",function(){}),t.waitingHandlerTimer=null,e.off("stalled").on("stalled",function(){
if(this.__hasBeginPlay&&!t.waitingHandlerTimer){
t.changeStatus({
status:"loading",
subStatus:"stalled"
}),t.showLoading();
var e=n.src,i=n.readyState,o=n.error;
0!=i||o&&0!=o.code||(clearTimeout(t.waitingHandlerTimer),t.waitingHandlerTimer=null,
t.showLoading(),t.showCover(),n.pause(),n.src=e,n.load(),n.play(),E(t.id+":stalled"));
}
}),e.on("seeked",function(){
t.__onTouch||t.opt.jsapiFullScreen&&t.__isInFullScreen||(t.changeStatus({
status:"loading",
subStatus:"seeked"
}),t.__isPauseBeforeSeek?t.hideLoading():n.play(),delete t.__isPauseBeforeSeek),
E("video seeked event");
}),e.off("seeking").on("seeking",function(){
E("seeking,__hasBeginPlay:"+t.__hasBeginPlay),t.__hasBeginPlay&&(t.changeStatus({
status:"loading",
subStatus:"seeking"
}),t.showLoading());
}),e.off("waiting").on("waiting",function(){
if(E("waiting,__hasBeginPlay:"+t.__hasBeginPlay),t.__hasBeginPlay){
t.changeStatus({
status:"loading",
subStatus:"waiting"
}),t.showLoading(),t._jsapiLog("waiting counting begin"),t.loadingCountFlag||clearTimeout(t.loadingCountFlag),
t.__last_loadingtime=n.currentTime,t.loadingCountFlag=setTimeout(function(){
n.currentTime===t.__last_loadingtime&&(t.changeStatus({
status:"error",
subStatus:"6"
}),t.__triggerOutside("error",{
errorcode:6
}));
},k),clearTimeout(t.waitingHandlerTimer),t.waitingHandlerTimer=null;
var e=0;
try{
for(var i in parent.window.__MpPlayers)if(parent.window.__MpPlayers.hasOwnProperty(i)&&e++,
e>1)break;
}catch(o){}
e>1&&t.__forcePause===!1&&(t.waitingHandlerTimer=setTimeout(function(){
if(t.__forcePause!==!0){
var e=n.error;
if(0==n.readyState&&(!e||0==e.code)){
clearTimeout(t.waitingHandlerTimer),t.waitingHandlerTimer=null;
var i=n.src;
t.showLoading(),t.showCover(),n.pause(),n.src=i,tryReload++,n.load(),n.play(),E(t.id+":waitingHandlerTimer");
}
}
},1e4)),F.hasAutoFlag?(t.__loadingCountFlagAuto||clearTimeout(t.__loadingCountFlagAuto),
t.__loadingCountFlagAuto=setTimeout(function(){
n.currentTime===t.__last_loadingtime&&t._trigger("waiting",{
action:"changeToAuto"
});
},B),t._trigger("waiting",{
action:"normalLoading"
})):t._trigger("waiting");
}
}),e.off("play playing").on("play playing",function(e){
return t.__forcePause===!0||t._g.iosPreloadTmpPlay?void E(t.id+":play playing __forcePause return"):(t.changeStatus({
status:"play",
subStatus:e.type
}),setTimeout(function(){
t.adVideoStatus="play";
},10),E(t.id+":play playing"),o.removeClass("switch_on"),o.addClass("switch_off"),
t._hidePlayControllBar(),t.__startCountTime(),t._trigger("play"),t._useWcSlPlayer()&&t.__canplay&&(t.hideLoading(),
u.os.android&&!t.__hasFixedAndroidWebviewControllerReinitBug&&(t.__hasFixedAndroidWebviewControllerReinitBug=!0,
t.__fixAndroidWebviewControllerReinitBug())),void(o.find(".btn_opr")[0].innerHTML="暂停"));
}),e.off("pause").on("pause",function(){
t._g.iosPreloadTmpPlay||(E(t.id+":video pause event"),t.changeStatus({
status:"pause",
subStatus:""
}),setTimeout(function(){
t.adVideoStatus="pause";
},10),o.addClass("switch_on"),o.removeClass("switch_off"),!t.__canplay||t.isEnd()||t.__onTouch?t._hidePlayControllBar():(t.hideControllBar(),
t._showPlayControllBar()),t.__endCountTime(),t._trigger("pause"),o.find(".btn_opr")[0].innerHTML="播放");
}),e.off("error").on("error",function(e){
if(t._useWcSlPlayer())return t.changeStatus({
status:"error",
subStatus:"3"
}),T.setSum(221515,3,1),T.setSum(221515,u.os.android?10:9,1),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&e.detail&&window.WX_BJ_REPORT.BadJs.report("WcSlPlayer:Error",(window.__second_open__?"secopen:":"h5:")+JSON.stringify(e.detail)),
void t._trigger("error",{
errorcode:3,
error:e.detail
});
var i=void 0;
t.video.error&&(i=t.video.error.code),t.changeStatus({
status:"error",
subStatus:i||""
});
var o="/mp/ad_video_report?action=report_video_play_error",n=encodeURIComponent(t.video.baseURI);
j({
type:"GET",
dataType:"json",
timeout:3e4,
url:o+"&errorCode="+i+"&videoUrl="+n,
success:function(){},
error:function(){}
}),t._trigger("error",{
errorcode:i
});
}),e.off("webkitbeginfullscreen webkitendfullscreen webkitfullscreenchange mozfullscreenchange fullscreenchange").on("webkitbeginfullscreen webkitendfullscreen webkitfullscreenchange mozfullscreenchange fullscreenchange",function(e){
var i=void 0;
i=t._useWcSlPlayer()?e.detail.fullscreen:"webkitbeginfullscreen"==e.type?!0:"webkitendfullscreen"==e.type?!1:document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen,
t.onFullScreenChange({
state:i,
type:"h5"
});
}),this._useWcSlPlayer()&&(e.off("binderror").on("binderror",function(e){
t.__fallbackFromWcSlVideoToH5Player(),T.setSum(221515,4,1),T.setSum(221515,u.os.android?12:11,1),
window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&e.detail&&window.WX_BJ_REPORT.BadJs.report("WcSlPlayer:BindError",(window.__second_open__?"secopen:":"h5:")+JSON.stringify(e.detail)),
t._trigger("bindError",{
error:e.detail
});
}),e.off("resolutionchange").on("resolutionchange",function(){
t.changeStatus({
status:"loading",
subStatus:"resolutionchange"
});
var e=t.opt.resolutionInfo.filter(function(e){
return e.src===t.video.resolutionSrc;
})[0];
t._trigger("resolutionChange",{
action:"changed",
infoBefore:t.__resolutionInfoBeforeChange,
infoAfter:e
});
}),e.off("ratechange").on("ratechange",function(){
t._trigger("rateChange",{
action:"changed",
rateBefore:t.__playbackRateBeforeChange,
rateAfter:t.video.playbackRate
});
}),e.off("processstatechange").on("processstatechange",function(e){
t._trigger("processStateChange",{
event:e.detail.event,
playerType:e.detail.playerType,
timeStamp:e.detail.__timestamp
});
}));
},
__preventFontSizeChange:function(){
var e=this;
u.os.iphone?this.container.css("-webkit-text-size-adjust","none"):u.os.android?C.keepNormalFontSizeForAndroid(this.container[0]):u.os.ipad&&(u.os.getNumVersion()>=13?C.onFontScaleChange(function(){
return C.setFontSize(e.container[0],1);
}):this.container.css("-webkit-text-size-adjust","none"));
},
__fixAndroidWebviewControllerReinitBug:function(){
var e=this;
u.os.android&&c.ltVersion("7.0.19")&&this._useWcSlPlayer()&&!function(){
var t=function(){
S.invoke("handleMPPageAction",{
action:"hasActivity"
},function(e){
e&&e.err_msg&&-1!==e.err_msg.indexOf(":ok")?++i>=10&&clearInterval(n):o.video&&(console.warn("handleMPPageAction:hasActivity check failed, pause video"),
l.info("handleMPPageAction:hasActivity check failed, pause video"),clearInterval(n),
o.video.pause(),T.setSum(221515,2,1));
});
},i=0,o=e,n=setInterval(t,1e3);
}();
},
__defineEvent:function(){
var e=this;
this._event={
progressBarMousemove:function(t){
e.__hasFuncControllBar&&e.__onTouch&&e._pointerMoveHandler({
x:t.pageX||t.clientX,
y:t.pageY||t.clientY,
e:t
});
},
progressBarMouseup:function(t){
return e.__hasFuncControllBar&&e.__onTouch?(e._pointerUpHandler({
x:t.pageX||t.clientX,
y:t.pageY||t.clientY,
e:t
}),!1):void 0;
},
progressBarTouchmove:function(t){
if(e.__hasFuncControllBar&&e.__onTouch){
var i=t.changedTouches[0];
e._pointerMoveHandler({
x:i.pageX,
y:i.pageY,
e:t
});
}
},
progressBarTouchend:function(t){
if(e.__hasFuncControllBar&&e.__onTouch){
var i=t.changedTouches[0];
return e._pointerUpHandler({
x:i.pageX,
y:i.pageY,
e:t
}),!1;
}
},
broadcastPlay:function(t){
t.id!==e.id&&e.__hasBeginPlay&&!e.isEnd()&&e.pause4outer();
}
};
},
__addPostmessageListener:function(){
g.addListener({
type:"broadcastPlay",
func:this._event.broadcastPlay
});
},
__bindBtnEvent:function(){
function e(){
if(V)return location.href=o.opt.src,!1;
o.changeStatus({
status:"loading",
subStatus:"preload"
});
var e=2;
o._g.hasReportBeginPlay?e=9:window.cgiData&&"0"==window.cgiData.media_source&&(e=11),
o.videoCtlReport({
step:e
}),o._g.hasReportBeginPlay=!0,o._trigger("readyBeginPlay");
}
function t(){
var t=o.opt.canMePlay;
"function"==typeof t?t(e):e();
}
var i=this,o=this,n=this.opt,a=this.container,s=a.find(".js_btn_play"),r=a.find(".js_btn_play_aria"),l=a.find(".js_video_poster"),_=a.find(".js_switch"),h=a.find(".js_progress_bar"),p=a.find(".js_controll"),g=a.find(".js_page_video"),f=a.find(".js_full_mask"),v=a.find(".js_video_pause_controll"),m=a.find(".js_full_screen_control"),y=a.find(".js_share_btn"),w=a.find(".js_sub_setting");
if(this.opt.canShareVideo&&(y[0]&&d.on(y[0],"click",function(){
o.callJsapiShareVideo({
action:"shareEmbedMpVideo"
});
}),d.longtap(this.container[0],function(e){
p[0].contains(e.target)||e.target===p[0]||h[0].contains(e.target)||e.target===h[0]||o.callJsapiShareVideo({
action:"longPressEmbedMpVideo"
});
})),d.on(v[0],"tap",".js_btn_pause",function(){
o.play4outer();
}),o._useWcSlPlayer()){
var b=a.find(".js_video_fullscreen_menu_more");
((u.os.iphone||u.os.ipad)&&c.isWechat&&c.gtVersion("7.0.16",1)||u.os.android&&c.isWechat&&c.gtVersion("7.0.18",1))&&(b.css("display",""),
d.tap(b[0],function(){
o.isInFullScreen()&&(S.invoke("handleMPPageAction",{
action:"showMenu",
forbidFlag:3
},function(){}),console.log("======== _trigger showMenu"),o._trigger("showMenu",{
fullScreen:1
}));
}));
}
var P=void 0,j=void 0,C=0,k=0,B=0,I=o.__getDuration(),x=0,R=0,E=1,W=window.user_uin||0,D=0!==W&&Math.floor(W/100)%1e3<E,N=!1,L=void 0,H=void 0,A=0,z=!0,U=!1,O=!1,J=null,X=this.opt.width/this.opt.height,Y=function(e,t){
return c.isIOS&&(!o.isInFullScreen()&&(30>e||e>window.innerWidth-30)||o.isInFullScreen()&&(50>t||t>window.innerHeight-50))?!0:!1;
};
g.on("touchstart",function(e){
1==e.targetTouches.length&&(o.isEnd()||$(e.changedTouches[0].target).parents("div.js_progress_bar,div.js_controll,div.js_video_fullscreen_profile").length||n.blockTouchVideo||(J&&(clearTimeout(J),
J=null),L=P=new Date,H=j={
x:e.targetTouches[0].clientX,
y:e.targetTouches[0].clientY
},o._g.touchForwarding=!1,O=!0,z=!0,R=x=o.getCurTime()));
}),g.on("touchmove",function(e){
if(z&&1==e.targetTouches.length&&!(o.isEnd()||$(e.changedTouches[0].target).parents("div.js_progress_bar,div.js_controll,div.js_video_fullscreen_profile").length||Y(e.targetTouches[0].clientX,e.targetTouches[0].clientY)||n.blockTouchVideo)){
var t=new Date,i=e.changedTouches[0].clientX,a=e.changedTouches[0].clientY,s=Math.abs(i-H.x),r=Math.abs(a-H.y);
if(U||O&&(r>=20||r>s))return o._useWcSlPlayer()&&o.isInFullScreen()?!function(){
U=!0,o._g.touchForwarding=!0;
var t=(X>1?Math.max:Math.min)(window.screen.height,window.screen.width),n=parseInt(2*(j.y-a)/t*100);
n&&(n/=100,H.x<t/2?(n=o.video.brightness+n,o.video.brightness=n,o.__setUpperBar("亮度",n),
o.__setBrightnessChangeEventEmitTimer&&clearTimeout(o.__setBrightnessChangeEventEmitTimer),
o.__setBrightnessChangeEventEmitTimer=setTimeout(function(){
o.__setBrightnessChangeEventEmitTimer=null,o._trigger("brightnessChange",{
value:n,
touch:!0
});
},1e3)):(n=o.video.volume+n,o.video.volume=n,o.__setUpperBar("音量",n),o.__setVolumeChangeEventEmitTimer&&clearTimeout(o.__setVolumeChangeEventEmitTimer),
o.__setVolumeChangeEventEmitTimer=setTimeout(function(){
o.__setVolumeChangeEventEmitTimer=null,o._trigger("volumeChange",{
value:n,
touch:!0
});
},1e3)),j={
x:i,
y:a
},e.preventDefault());
}():z=!1,void(O=!1);
if(!(20>s)){
J&&(clearTimeout(J),J=null),O=!1,o._g.touchForwarding=!0;
var l=t-P,d=i-j.x,_=a-j.y,u=Math.sqrt(Math.pow(d,2)+Math.pow(_,2))+B,c=Math.min(Math.ceil(u/l),6);
k=Math.floor(.1*u+.2*c*c*c)*Math.ceil(I/500),B=0==k?u:0,0>d&&(k=-k);
var h=180*Math.atan2(_,d)/Math.PI;
o._g.touchForwarding||(h>=-30&&30>=h&&++C,(h>=150&&180>=h||h>=-180&&-150>=h)&&--C,
(C>=4||-4>=C)&&(5>=u?C=0:(A=Math.max(A,c),o._g.touchForwarding=!0))),o._g.touchForwarding&&(x+=k,
0>x&&(x=0),x>I&&(x=1*I),o.__setForwardBar(x),e.preventDefault()),j={
x:i,
y:a
},P=t;
}
}
}),g.on("touchend",function(e){
if(o._g.touchForwarding&&!U){
if(J=setTimeout(function(){
o.play(x);
},0),D&&(T.setSum(28307,29,1),!N)){
var t=(new Date,{
x:e.changedTouches[0].clientX,
y:e.changedTouches[0].clientY
}),i=t.x-H.x,n=t.y-H.y,a=parseInt(Math.sqrt(Math.pow(i,2)+Math.pow(n,2))),s=parseInt(180*Math.atan2(n,i)/Math.PI);
s>=-30&&30>=s||s>=150&&180>=s||s>=-180&&-150>=s||T.setSum(28307,35,1),T.setSum(28307,31,1),
T.setSum(28307,33,a),T.setSum(28307,34,A),N=!0;
}
o._seekReport(),o._trigger("handDragComplete",{
playTime:x,
startDragVideoTime:R
}),e.preventDefault();
}
o.hideTouchForward(),k=0,O=!1,o._g.touchForwarding=!1,z=!0,U=!1,C=0;
}),g.on("touchmove MSPointerMove pointermove mousemove",function(e){
o.isInFullScreen()&&!M&&e.preventDefault();
}),d.tap(g[0],function(e){
if(e.target!==p[0]&&!p[0].contains(e.target)&&e.target!==y[0]&&!(o._useWcSlPlayer()&&(e.target===w[0]||w[0].contains(e.target))||o.isEnd()||o._g.touchForwarding)){
if(o.__last_touchvideo&&Date.now()-o.__last_touchvideo<300)return o.playSwitch(!0),
void delete o.__last_touchvideo;
o.__last_touchvideo=Date.now(),e.preventDefault(),o.isPause()?o._useWcSlPlayer()&&(o.showControllBar(),
o.__hideSubSettingTimeout()):o._trigger("touchVideo");
}
}),d.tap(f[0],function(){
o.isEnd()||o._trigger("touchVideo");
}),f.on("touchmove MSPointerMove pointermove mousemove",function(e){
o.isInFullScreen()&&!M&&e.preventDefault();
}),d.on(r[0],"click",function(){
var e=$(r[0]),i=1*e.data("status");
0==i?(e.addClass("video_playing").data("status","1"),t()):1==i?(e.removeClass("video_playing").data("status","2"),
o.playSwitch(void 0,!1)):2==i?(e.addClass("video_playing").data("status","1"),o.playSwitch()):3==i&&(e.addClass("video_playing").data("status","1"),
o._trigger("ariaReplay"));
}),d.on(s[0],"click",function(){
t();
}),d.tap(s[0],function(){
t();
}),d.tap(_[0],function(){
o.playSwitch();
}),o.__onTouch=!1,h.on("mousedown",function(e){
o.__hasFuncControllBar&&(p.off("mousemove",o._event.progressBarMousemove).on("mousemove",o._event.progressBarMousemove),
l.off("mousemove",o._event.progressBarMousemove).on("mousemove",o._event.progressBarMousemove),
$(document.body).off("mouseup").on("mouseup",o._event.progressBarMouseup),o._pointerDownHandler({
x:e.pageX||e.clientX,
y:e.pageY||e.clientY,
e:e
}));
}),h.on("touchstart",function(e){
if(o.__hasFuncControllBar){
h.off("touchmove",o._event.progressBarTouchmove).on("touchmove",o._event.progressBarTouchmove),
h.off("touchend",o._event.progressBarTouchend).on("touchend",o._event.progressBarTouchend);
var t=e.changedTouches[0];
o._pointerDownHandler({
e:e,
x:t.pageX,
y:t.pageY
});
}
}),d.tap(m[0],function(e){
return o._useWcSlPlayer()?void(o.isInFullScreen()?o.exitFullScreen():o.enterFullScreen()):(o.isInFullScreen()?M&&o.exitFullScreen():M&&(T.setSum(28307,56,1),
o.enterFullScreen()),e.preventDefault(),!1);
}),this._useWcSlPlayer()&&!function(){
var e=a.find(".js_play_mode_select"),t=a.find(".js_playback_mode_select"),n=a.find(".js_playback_mode_change");
if(i.opt.resolutionInfo&&i.opt.resolutionInfo.length&&!function(){
var n=a.find(".js_play_mode_change");
d.tap(n[0],function(){
o.hideControllBar(),"flex"!==e.css("display")&&(o.__hideSubSettingTimeoutHandler&&clearTimeout(o.__hideSubSettingTimeoutHandler),
w.removeClass("hide"),e.css("display","flex"),t.length&&"flex"===t.css("display")&&t.css("display","none"),
o._trigger("resolutionChange",{
action:"show"
}));
});
for(var s=function(t){
var s=a.find(".js_resolution_"+t);
if(i.opt.resolutionInfo[t].src.indexOf("m3u8")>-1){
F.hasAutoFlag=!0;
var r=$(".js_auto_change_tip")[0];
d.tap(r,function(){
o.hideControllBar(),o._setResolution(t),$(".js_auto_change_tip")[0].style.display="none",
n.text(s.text()),e.find(".video_full-screen__sub-setting__item").removeClass("current"),
s.addClass("current"),o._trigger("resolutionChange",{
action:"select"
}),o.isPause()&&o.showControllBar();
});
}
d.tap(s[0],function(){
o._setResolution(t),o.__hideSubSettingTimeout(),e.find(".video_full-screen__sub-setting__item").removeClass("current"),
n.text(s.text()),s.addClass("current"),o._trigger("resolutionChange",{
action:"select"
}),o.isPause()&&o.showControllBar();
});
},r=0;r<i.opt.resolutionInfo.length;r++)s(r);
}(),d.tap(n[0],function(){
if(o.__isInFullScreen)o.hideControllBar(),"flex"!==t.css("display")&&(o.__hideSubSettingTimeoutHandler&&clearTimeout(o.__hideSubSettingTimeoutHandler),
w.removeClass("hide"),t.css("display","flex"),e.length&&"flex"===e.css("display")&&e.css("display","none"),
o._trigger("rateChange",{
action:"show"
}));else{
var i=o.opt.playbackRateInfo,n=o._g.playbackRateBtnInfoId;
o.video.playbackRate<i[o.opt.playbackRateBtnInfoDefaultId].rate||n>=i.length-1||0>=n?n=o.opt.playbackRateBtnInfoDefaultId:o.opt.width>o.opt.height?n--:n++;
var a=i[n].rate;
o._g.playbackRateBtnInfoId=n,o.showControllBar(),o.__hideControllTimeout(),o._trigger("rateChange",{
action:"show"
}),o._setPlaybackRate(a),o._trigger("rateChange",{
action:"select"
}),o._changePlaybackRateBtn(a);
}
}),i.opt.playbackRateInfo&&i.opt.playbackRateInfo.length)for(var s=function(e){
var t=a.find(".js_playback_"+e);
d.tap(t[0],function(){
var t=o.opt.playbackRateInfo[e].rate;
o._setPlaybackRate(t),o.__hideSubSettingTimeout(),o._changePlaybackRateList(t,e),
o._trigger("rateChange",{
action:"select"
}),o.isPause()&&o.showControllBar();
});
},r=0;r<i.opt.playbackRateInfo.length;r++)s(r);
}();
},
hideTouchForward:function(){
this.container.find(".js_forward").addClass("none");
},
playSwitch:function(e,t){
this.isPlay()?(e||this.videoCtlReport({
step:12
}),this.pause4outer({
doubleTap:e,
triggerEvent:t
})):this.play4outer(0/0,{
doubleTap:e
});
},
__firstLoadedFlowNoticeJudge:function(){
if(m.device.inWechat&&parent.window.lastNetworkType&&parent.window.lastNetworkType.networkType&&parent.window.lastNetworkType.simType&&b.isMobileNetwork(parent.window.lastNetworkType.networkType)&&1!==parent.window.lastNetworkType.simType){
var e=void 0;
e=this.opt.flow<100&&this.opt.flow>0?b.isVideoNeedFlowNotice(this.opt.flow,1):b.isVideoNeedFlowNotice(this.opt.flow,5),
e&&(this.opt.flow<100&&this.opt.flow>0?this.__showFlowNotice_1():this.__showFlowNotice_2(this.opt.flow));
}
},
__showFlowNotice_1:function(){
this.videoCtlReport({
step:16,
noticeType:1
}),this._trigger("flowNotice",{
flow:parseInt(1024*this.opt.flow),
noticeType:1
}),this.__flowNoticeTimer&&(clearTimeout(this.__flowNoticeTimer),this.__flowNoticeTimer=null);
var e=this.container.find(".js_video_flow").removeClass("flow_fade_out");
this.container.find(".js_flow_notice_1").show(),this.container.find(".js_flow_notice_2").hide(),
e.show(),e.addClass("flow_fade_out");
},
__showFlowNotice_2:function(e){
this.videoCtlReport({
step:16,
noticeType:2
}),this._trigger("flowNotice",{
flow:parseInt(1024*this.opt.flow),
noticeType:2
}),this.__flowNoticeTimer&&(clearTimeout(this.__flowNoticeTimer),this.__flowNoticeTimer=null),
this.container.find(".js_flow_notice_2").show(),this.container.find(".js_flow_notice_1").hide(),
this.container.find(".js_video_flow_num").html(e+"M"),this.container.find(".js_video_flow").removeClass("flow_fade_out").show(),
this.container.find(".js_video_flow").addClass("flow_fade_out");
},
__hideFlowNotice:function(){
this.__flowNoticeTimer&&(clearTimeout(this.__flowNoticeTimer),this.__flowNoticeTimer=null),
this.container.find(".js_video_flow").hide();
},
_pointerDownHandler:function(e){
this.__onTouch=!0,this.showControllBar(),this.container.find(".js_progress_bar").addClass("wrp_progress__draging"),
this.__isPauseBeforeSeek=this.isPause(),this.progressBarSeekData={
x1:e.x,
y1:e.y,
startTime:this.video.currentTime
},this.pause(),e.e.preventDefault();
},
_pointerMoveHandler:function(e){
var t=this.container.find(".js_played_bar"),i=this.container.find(".js_progress_bar");
this.__onTouch=!0,this.__has_drag=!0,this.progressBarSeekData.x2=e.x,this.progressBarSeekData.y2=e.y;
var o=t.offset(),n=i.width(),a=(e.x-o.left)/n,s=this.__getDuration(),r=1*(s*a).toFixed(4);
r>s&&(r=s-1);
var l=!1;
"undefined"==typeof this.progressBarSeekData.dragTime&&(l=!0);
var d=Math.abs(1*r-1*this.progressBarSeekData.dragTime);
(l||d>=.5)&&(this.progressBarSeekData.dragTime=r,E("_pointerMoveHandler set currentTime, dragTime:"+this.progressBarSeekData.dragTime+" currentTime:"+this.video.currentTime),
this._useWcSlPlayer()||(this.video.currentTime=this.progressBarSeekData.dragTime),
this.__setPlayTime(this.progressBarSeekData.dragTime)),this.__setControllBar(a),
e.e&&e.e.preventDefault();
},
_pointerUpHandler:function(e){
var t=this;
e.e.preventDefault(),this.container.find(".js_controll").off("mousemove",t._event.progressBarMousemove),
this.container.find(".js_video_poster").off("mousemove",t._event.progressBarMousemove),
$(document.body).off("mouseup",t._event.progressBarMouseup),this.container.find(".js_progress_bar").off("touchmove",t._event.progressBarTouchmove).off("touchend",t._event.progressBarTouchend),
this.container.find(".js_progress_bar").removeClass("wrp_progress__draging"),"undefined"==typeof this.progressBarSeekData.dragTime&&this._pointerMoveHandler({
x:e.x,
y:e.y
});
var i=this.progressBarSeekData.dragTime,o=this.progressBarSeekData.startTime;
i==this.video.currentTime&&(i-=.1),this.progressBarSeekData.startTime&&t.__dragTimes.push(Math.round(1e3*this.progressBarSeekData.startTime)+":#:"+Math.round(1e3*i)),
this.progressBarSeekData=null,E("_pointerUpHandler dragTime:"+i+" currentTime:"+this.video.currentTime),
setTimeout(function(){
t.__onTouch=!1,t.__forcePause=!1,t.isEnd()||(t.showLoading(),t.play(i),t._seekReport(),
t._trigger("barDragComplete",{
playTime:i,
startDragVideoTime:o
}));
},0),this.__hideControllTimeout();
},
_seekReport:function(){
this.videoCtlReport({
step:13
});
},
_hidePlayControllBar:function(){
this.container.find(".js_video_pause_controll").hide(),this._g.isUserPause&&m.device.inWechat&&("wifi"===this._g.pauseNetType&&b.isVideoNeedFlowNotice(this.opt.flow,3)||b.isNoneNetwork(this._g.pauseNetType)&&b.isVideoNeedFlowNotice(this.opt.flow,4)?this.__showFlowNotice_1():(this._g.isUserPause=!1,
this._g.pauseNetType=null)),this.__hideControllTimeout();
},
_showPlayControllBar:function(){
var e=this.container.find(".js_video_pause_controll");
this.isEnd()||(this.opt.pauseShowControll?(e.hide(),this.showControllBar()):(this.hideControllBar({
showShareBtn:!!this.opt.canShareVideo
}),e.show(),this.container.find(".js_video_play_controll").hide(),this.container.find(".js_play_bar_wrapper").hide()));
},
_addSerialTimeupdate:function(){
var e=this.video.currentTime,t=this._g.serialTimeupdateCache.length;
e>0&&(0==t||this._g.serialTimeupdateCache[t-1].currentTime!=e)&&(this._g.serialTimeupdateCache.length>=this._g.timeupdateCacheCount&&this._g.serialTimeupdateCache.shift(),
this._g.serialTimeupdateCache.push({
currentTime:e,
timeStamp:+new Date
}));
},
_checkPlayBySerialTimeupdate:function(){
if(this._g.serialTimeupdateCache.length<this._g.timeupdateCacheCount)return!1;
var e=this._g.serialTimeupdateCache.length,t=this._g.serialTimeupdateCache[e-1],i=this._g.serialTimeupdateCache[e-this._g.timeupdateCacheCount];
return t.timeStamp-i.timeStamp<2500?!0:!1;
},
_showPlayer:function(){
var e=this.container.find(".js_page_video");
e.show();
},
_hidePlayer:function(){
var e=this.container.find(".js_page_video");
e.hide();
},
__setPlayTime:function(e){
this.container.find(".js_now_play_time").text(N(e));
},
__setControllBar:function(e){
e=Math.ceil(100*e),0>e&&(e=0),e>100&&(e=100),this.__setBufferBar(e),e+="%";
var t=this.container;
t.find(".js_played_bar").css({
width:e
}),t.find(".js_played_speed_cnt").css({
left:e
});
},
__setForwardBar:function(e){
var t=this.container,i=this.__getDuration(),o=e/i;
t.find(".js_forward").removeClass("none"),t.find(".js_forward_seperator").text("/"),
t.find(".js_forward_total_time").text(N(i)),t.find(".js_forward_bar").css("width",100*o+"%"),
t.find(".js_forward_play_time").text(N(e));
},
__setUpperBar:function(e,t){
var i=this.container;
t=Math.min(t,1),t=Math.max(t,0),i.find(".js_forward").removeClass("none"),i.find(".js_forward_seperator").text(":"),
i.find(".js_forward_total_time").text(parseInt(100*t)+"%"),i.find(".js_forward_bar").css("width",100*t+"%"),
i.find(".js_forward_play_time").text(e);
},
__setBufferBar:function(e){
var t=this.container,i=this.video,o=this.__getDuration(),n=i.currentTime;
e=e||n/o;
var a=e;
this._useWcSlPlayer()&&i.buffered?a=i.buffered.percent:i.buffered&&i.buffered.length>0&&i.buffered.end&&o&&(a=i.buffered.end(0)/o,
a=Math.max(e,Math.ceil(parseInt(100*a))),a>98&&(a=100)),t.find(".js_buffer_bar").css({
width:a+"%"
});
},
__resetVideo:function(){
this.$video.remove();
var e=this.container,t=e.find(".js_video_poster");
if(this._useWcSlPlayer()){
var i=this.video.src,o=this.video.width,n=this.video.height;
t.append('<wx-open-video src="'+i+'" style="display:block;" width="'+o+'" height="'+n+'"fullscreen-after-orientation-change hide-ios-exit-btn-when-fullscreen></wx-open-video>'),
this.$video=t.find("wx-open-video");
}else t.append("<video></video>"),this.$video=t.find("video");
this.video=this.$video[0],this.__canplay=!1,this.__forcePause=!1,this.__initVideo(),
this.__iosPreloadPause=!1,this.__iosPreloadPlayFlag=!1,this.__bindVideoEvent();
},
__fallbackFromWcSlVideoToH5Player:function(){
console.error("fallback from wcslplayer to h5player",this.video.error),this._jsapiLog("fallback from wcslplayer to h5player: "+this.video.error),
S.invoke("handleDeviceInfo",{
action:"setOrientation",
orientation:0,
lock:!0
}),P.__useWcSlPlayer=!1,this._g.fallbackFromWcSlVideoToH5Player=!0,this.__resetVideo(),
this._trigger("loading"),this.container.find(".js_playback_mode_change").hide();
},
_trigger:function(e,t){
var i=this,o=this;
if("timeupdate"!==e||"timeupdate"===e&&this._g.triggerTimeupdateLog){
"timeupdate"===e&&(this._g.triggerTimeupdateLog=!1,setTimeout(function(){
i._g.triggerTimeupdateLog=!0;
},5e3));
try{
var n="",a=Object.prototype.toString.call(t);
n="[object String]"===a?t:"[object Object]"===a||"[object Array]"===a?JSON.stringify(t):"no params",
this._jsapiLog("trigger:"+e+";arg:"+n+";");
}catch(r){}
}
if("readyBeginPlay"==e&&(o.__iosPreloadPlayFlag=!1),"play"==e&&0==o.__iosPreloadPlayFlag){
if(o.__iosIsRealPreload&&s(o.video,!1),o.__forcePause=!1,o.opt.notPauseOtherVideoWhenPlay||g.broadcastMessage({
type:"broadcastPlay",
data:{
id:this.id
}
}),window.parent.originalVideoAdFrames&&0!=window.parent.originalVideoAdFrames.length)for(var l=0;l<window.parent.originalVideoAdFrames.length;l++)window.parent.originalVideoAdFrames[l].contentWindow.postMessage({
action:"pauseAd",
value:""
},"*");
f.postMessage(window.parent,"onVideoPlayV2",{
vid:v.getQuery("vid")
});
}
var d=this.plugins,_=this._blockPlugin[e]||this._blockPlugin.all,u=0;
if(_&&"function"==typeof _.recv&&(u|=_.recv(e,t),1&u))return!1;
for(var l=0,c=d.length;c>l&&(u|=d[l].recv(e,t),!(2&u));++l);
if(!(this._blockInnerHandler||4&u)){
var h=this["__"+e+"Handler"];
h&&h.call(this,t);
}
8&u||this.__triggerOutside(e,t);
},
_setBlockInnerHandler:function(e){
this._blockInnerHandler=e;
},
_setBlockPlugin:function(e,t){
this._blockPlugin[e]=t;
},
_getContainer:function(){
return this.container;
},
_setCover:function(e,t){
this.container.find(".js_poster_cover").css(t),this.opt.cover=e,this._g.coverBase64="";
},
_removeCover:function(e){
e=e||{
"background-image":"none"
},this.container.find(".js_poster_cover").css(e);
},
_afterReplay:function(){
this.__hasBeginPlay=!0,this.__userplaytime=!0,this.__firstPlayStart=+new Date,this.showLoading(),
this.play(),this._trigger("afterReplay");
},
_useWcSlPlayer:function(){
return this.opt.useWcSlPlayer&&this.supportWcSlPlayer();
},
_setResolution:function(e){
var t=this;
if(this._useWcSlPlayer()&&this.opt.resolutionInfo&&this.opt.resolutionInfo.length){
var i=this.opt.resolutionInfo[e];
this.video.resolutionSrc!==i.src&&(this.__resolutionInfoBeforeChange=this.opt.resolutionInfo.filter(function(e){
return e.src===t.video.resolutionSrc;
})[0],this.video.resolutionSrc=i.src);
}
},
_setPlaybackRate:function(e){
this._useWcSlPlayer()&&this.opt.playbackRateInfo&&this.opt.playbackRateInfo.length&&this.video.playbackRate!==e&&(this.__playbackRateBeforeChange=this.video.playbackRate,
this.video.playbackRate=e);
},
_changePlaybackRateList:function(e,t){
var i=this,o=function(t){
i.container.find(".js_playback_"+t).hasClass("current")||(i.container.find(".js_playback_mode_select .video_full-screen__sub-setting__item").removeClass("current"),
i.container.find(".js_playback_"+t).addClass("current"),$("#play_setting_mode__rate").text(1===e?"倍速":i.opt.playbackRateInfo[t].name));
};
if(t)o(t);else if(this.opt.playbackRateInfo&&this.opt.playbackRateInfo.length)for(var n=this.opt.playbackRateInfo,a=0;a<n.length;a++)if(e===n[a].rate){
o(a);
break;
}
},
_changePlaybackRateBtn:function(e,t){
var i=this,o=this.opt.playbackRateInfo,n=function(){
$("#play_setting_mode__rate").text(t&&1===e?"倍速":o[i._g.playbackRateBtnInfoId].name);
};
if(o[this._g.playbackRateBtnInfoId].rate===e)n();else for(var a=0;a<o.length;a++){
var s=o[a];
if(e===s.rate){
this._g.playbackRateBtnInfoId=a,n();
break;
}
}
},
setPlaybackRate:function(e){
this._useWcSlPlayer()&&(this._setPlaybackRate(e),this._changePlaybackRateBtn(e),
this._changePlaybackRateList(e));
},
setSrc:function(e,t,i){
var o=this,n=this.$video,a=(this.opt,this.video);
this.src=e,(!o.__iosPreloadPause||i)&&o.__initData(),o.__initVideo(),this.showCover(),
o.log.loadwait_start=+new Date,(!n.attr("src")||i)&&(n.attr("src",e),m.proxyPreloadExper()&&m.proxyPreloadExper().isUsePreload&&u.os.ios&&!o.opt.ad_muted_btn&&!function(){
var e=function t(){
o.__iosPreloadPause=!0;
var e=function i(){
o._g.iosPreloadTmpPlay=!1,a.removeEventListener("pause",i,!1);
};
a.addEventListener("pause",e,!1),a.pause(),o._trigger("ready",o.opt),a.removeEventListener("canplay",t,!1);
};
a.addEventListener("canplay",e,!1),4!==a.readyState&&(o._g.iosPreloadTmpPlay=!0,
o.__iosPreloadPlayFlag=!0,o.__iosIsRealPreload=!0,s(a,!0),a.play());
}()),a.preload=t||"metadata",n.on("loadedmetadata",function(){
if(o.__videoDurationchange(),o.__playQueue&&o.__playQueue.length>0){
var e=o.__playQueue[0].sec;
o.__playQueue=[],o.play(e);
}
}),a.duration>0&&1!=a.duration&&o.__videoDurationchange();
},
videoCtlReport:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=this.opt.extinfo;
if(t){
var i={
step:e.step,
vid:t.vid,
hit_bizuin:t.hit_bizuin,
hit_vid:t.hit_vid,
traceid:t.pageplayer._getTraceId(),
orderid:t.pageplayer._getOrderid(),
ori_status:t.pageplayer._getOriStatus(),
type:this.opt.videoReportType,
fromid:t.pageplayer._getFromid()
};
e.step>=16?(i.remind_traffic_size=parseInt(1024*this.opt.flow),i.traffic_reminder_type=e.noticeType,
h.commReport(i)):h.report(i);
}
},
videoEnd:function(){
this.changeStatus({
status:"end",
subStatus:""
}),this.__endCountTime(),this._trigger("end");
},
replay:function(){
this.container.find(".js_video_play_controll").hide(),this._trigger("readyBeginPlay",{
replay:!0
}),this._trigger("replay"),this.hideWcSlFullEndExitBtn();
},
resetVideo:function(){
this.opt.autoReplay||(this.opt.autoplay=!1),this._useWcSlPlayer()||this.container.find(".js_video_poster").hide(),
this.showCover(),this.__resetVideo(),this._trigger("loading");
},
setSrcWithTime:function(e){
var t=this.video.currentTime;
this.resetVideo(),this.setSrc(e,!1,!0),this._jsapiLog("lastPlayTime:"+t),this.__continueSec=t;
},
changeStatus:function(e){
var t=this._g;
if(t.statusDefine[e.status]&&(!e.subStatus||t.subStatusDefine[e.subStatus]||"error"===e.status)&&(t.status!==e.status||t.subStatus!==e.subStatus)){
var i=0;
"end"===e.status||"error"===e.status?(this._playingBufferingStartTime=null,this.__userplaytime=!1):"pause"===e.status?this._playingBufferingStartTime=null:"play"===e.status&&"playing"===e.subStatus&&null!==this._playingBufferingStartTime?(i=+new Date-this._playingBufferingStartTime,
this._playingBufferingStartTime=null):!this.__hasBeginPlay||!this.__canplay||this.__userplaytime||"loading"!==e.status||"waiting"!==e.subStatus&&"seeking"!==e.subStatus||null!==this._playingBufferingStartTime||(this._playingBufferingStartTime=+new Date);
var o=t.status,n=t.subStatus;
t.status=e.status,t.subStatus=e.subStatus;
var a=["player statusChange, preStatus:",o,"; status:",t.status,"; preSubStatus:",n,"; subStatus:",t.subStatus,"; video_duration:",this.video?this.video.duration:"0","; getvinfo_duration:",this.opt.duration,"; current_time:",this.video?this.video.currentTime:"0","; play_total_time:",this.getPlayTotalTime()].join("");
this._jsapiLog(a),E(a),g.broadcastMessage({
type:"statusChange",
data:{
id:this.id,
preStatus:o,
preSubStatus:n,
status:t.status,
subStatus:t.subStatus
}
}),this._trigger("statusChange",{
currentTime:this.video.currentTime,
preStatus:o,
preSubStatus:n,
status:t.status,
subStatus:t.subStatus
}),i&&this._trigger("playingBufferingTime",{
bufferingTime:i
});
}
},
play:function(e){
var t=this.video,i=this;
if(!i.isEnd()){
if(this._useWcSlPlayer()&&null==t.readyState)return void("number"!=typeof this.opt.initialTime?this.__playQueue[0]={
sec:e
}:(this.__last_playtime=e,this.__setPlayTime(e)));
if(!t||0==t.readyState)return void(this.__playQueue[0]={
sec:e
});
e*=1;
try{
if(isNaN(e)||"number"!=typeof e)i.__canplay&&i.isPause()||0==t.currentTime?t.play():t.currentTime=0;else{
var o=this.__getDuration();
e>=o&&(e=o-1),0>e&&(e=0),e=1*(1*e).toFixed(4),i.__last_playtime=e,i.__setPlayTime(e),
t.currentTime==e?t.play():t.currentTime=e;
}
}catch(n){
0==t.currentTime?t.play():t.currentTime=0;
}
}
},
pause:function(){
var e=this.video;
e&&0==e.readyState||(this.__replaySec=null,this.waitingHandlerTimer&&(clearTimeout(this.waitingHandlerTimer),
this.waitingHandlerTimer=null),e.pause(),E(this.id+":pause function"));
},
getCoverBase64:function(){
var e=this,t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
this._g.coverBase64?"function"==typeof t.callback&&t.callback({
cover64:this._g.coverBase64||""
}):!function(){
var i=e,o=new Image;
o.crossOrigin="anonymous",o.onload=function(){
this.onload=null,this.onerror=null;
try{
var e=this.naturalWidth||this.width,o=this.naturalHeight||this.height,n=document.createElement("canvas"),a=n.getContext("2d");
n.style.width=e+"px",n.width=e,n.style.height=o+"px",n.height=o,a.drawImage(this,0,0,e,o),
i._g.coverBase64=n.toDataURL("image/jpeg",1);
}catch(s){
this._jsapiLog("jsapi shareEmbedMpVideo error:"+s),i._g.coverBase64="";
}
"function"==typeof t.callback&&t.callback({
cover64:i._g.coverBase64
});
},o.onerror=function(){
this.onload=null,this.onerror=null,"function"==typeof t.callback&&t.callback({
cover64:""
});
},o.src=e.opt.cover;
}();
},
callJsapiShareVideo:function(){
var e=this,t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
if(this.opt.extinfo&&this.opt.extinfo.preview)return void g.postMessage({
type:"showTips",
data:{
msg:"预览图文中的视频不可分享"
}
});
if(!this._g.loadingCoverBase64){
var i=function(){
var i="",o="",n="";
try{
i=parent.window.msg_link.html(!1),o=parent.window.user_name||(window.cgiData?window.cgiData.username||window.cgiData.user_name:"")||"",
n=parent.window.nickname||(window.cgiData?window.cgiData.nick_name:"")||"";
}catch(a){
e._jsapiLog(t.action+" jsapi error:"+a);
}
var s=e.opt.extinfo,r="";
s&&(r=s.vid);
var l={
action:t.action,
mpUrl:i,
bizUsrName:o,
bizNickName:n,
videoVid:r,
videoUrl:v.addParam(e._g.oriSrc||e.src||e.opt.src,"video_md5",e.opt.videoMd5||""),
videoThumbUrl:e.opt.cover,
videoThumbData:e._g.coverBase64,
videoTitle:e.opt.videoTitle,
videoDuration:1*e.opt.duration
};
S.invoke("handleMPPageAction",l,function(){});
};
this._g.loadingCoverBase64=!0,this.getCoverBase64({
callback:function(){
e._g.loadingCoverBase64=!1,i();
}
});
}
},
onFullScreenChange:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.type,i=e.state,o=this.$video;
if(i?(o.parents(".js_inner").removeClass("not_fullscreen"),this.__isInFullScreen=!0,
this.showWcSlResolution(),this.isEnd()&&this.showWcSlFullEndExitBtn()):(o.parents(".js_inner").addClass("not_fullscreen"),
this.hideLoading(),this.__isInFullScreen=!1,this.hideWcSlResolution(),this.hideWcSlPlayback(),
this.isEnd()&&this.hideWcSlFullEndExitBtn()),this._useWcSlPlayer()){
var n=this.opt.width>this.opt.height?"page_video_skin-horizontal":"page_video_skin-vertical";
if(i){
if(this.container.find(".js_page_video").addClass(n),this.container.find(".js_full_screen_control").css("display","none"),
u.os.android)if(this.opt.width>this.opt.height){
var a=Math.max(F.wcSlPlayerAndroidSafeAreaInsets.top,F.wcSlPlayerAndroidSafeAreaInsets.bottom)+"px";
this.container.find(".js_page_video").find(".video_full-screen__head, .video_opr, .wrp_play_bar").css({
"padding-left":a,
"padding-right":a
}),this.container.find(".js_page_video").find(".js_sub_setting").css({
"padding-right":a
});
}else this.container.find(".js_page_video").find(".video_full-screen__head").css({
"padding-top":F.wcSlPlayerAndroidSafeAreaInsets.top+16+"px"
});
this._changePlaybackRateList(this.video.playbackRate);
}else{
if(this.container.find(".js_page_video").removeClass(n),this.container.find(".js_full_screen_control").css("display",null),
u.os.android)if(this.opt.width>this.opt.height){
var s=this.container.find(".js_page_video").find(".video_full-screen__head, .video_opr, .wrp_play_bar");
s.css("padding-left",null),s.css("padding-right",null);
}else this.container.find(".js_page_video").find(".video_full-screen__head").css("padding-top",null);
this._changePlaybackRateBtn(this.video.playbackRate,!0);
}
this.isEnd()||(this.showControllBar(),this.__hideControllTimeout());
}
this._trigger("fullscreenchange",{
state:i,
type:t
}),g.broadcastMessage({
type:"fullscreenchange",
data:{
fullScreen:this.__isInFullScreen,
type:t,
id:this.id
}
});
},
enterFullScreen:function(){
var e=this;
if(this._useWcSlPlayer()){
var t=this.opt.width>this.opt.height?90:0;
return void this.video.requestFullscreen(t);
}
var i=function(){
e._g.jsapiFullScreenId&&(clearTimeout(e._g.jsapiFullScreenId),e._g.jsapiFullScreenId=null);
var t=e.video;
t.requestFullscreen?(t.requestFullscreen(),e.__isInFullScreen=!0):t.mozRequestFullScreen?(t.mozRequestFullScreen(),
e.__isInFullScreen=!0):t.webkitRequestFullscreen?(t.webkitRequestFullscreen(),e.__isInFullScreen=!0):t.webkitEnterFullscreen&&(t.webkitEnterFullscreen(),
e.__isInFullScreen=!0);
};
if(this._g.jsapiFullScreenId&&(clearTimeout(this._g.jsapiFullScreenId),this._g.jsapiFullScreenId=null),
!this.opt.jsapiFullScreen||this._g.jsapiFullScreenErrCnt>=this._g.jsapiFullScreenErrLimit)return void i();
u.os.android||this.pause4outer({
triggerEvent:!1
});
var o="",n="",a="",s="",r="",l=this;
try{
if(r=parent.window.source||"",o=parent.window.msg_link.html(!1),n=parent.window.user_name||(window.cgiData?window.cgiData.username||window.cgiData.user_name:"")||"",
a=parent.window.nickname||(window.cgiData?window.cgiData.nick_name:"")||"",this.opt.videoCrossOrigin){
var d=document.createElement("canvas"),_=d.getContext("2d");
d.style.width=this.opt.videoWidth+"px",d.width=this.opt.videoWidth,d.style.height=this.opt.videoHeight+"px",
d.height=this.opt.videoHeight,_.drawImage(this.$video[0],0,0,this.opt.videoWidth,this.opt.videoHeight),
s=d.toDataURL("image/jpeg",1);
}
}catch(c){
this._jsapiLog("jsapi enterfullsrceen error:"+c);
}
var h=this.$video[0],p=null,g=null;
try{
for(g=h.getBoundingClientRect(),p={
left:g.left,
top:g.top,
height:g.bottom-g.top,
width:g.right-g.left
};h.ownerDocument.defaultView.parent!==window&&(h=h.ownerDocument.defaultView.frameElement);)g=h.getBoundingClientRect(),
p.left+=g.left,p.top+=g.top;
p.left=Math.round(p.left),p.top=Math.round(p.top),p.height=Math.round(p.height),
p.width=Math.round(p.width);
}catch(c){
this._jsapiLog("jsapi enterfullsrceen error:"+c),p={
left:0,
top:0,
height:0,
width:0
};
}
var f=this.opt.extinfo,m="";
f&&(m=f.vid);
var y={
action:"enterEmbedMpVideo",
mpBizUin:this.opt.__biz||"",
mpAppMsgId:this.opt.mid||"",
mpIndex:this.opt.idx||"",
mpUrl:o,
bizUsrName:n,
bizNickName:a,
videoUrl:v.addParam(this._g.oriSrc||this.src||this.opt.src,"video_md5",this.opt.videoMd5||""),
videoTitle:this.opt.videoTitle,
videoCurrTime:this.getCurTime(),
videoWidth:this.opt.videoWidth,
videoHeight:this.opt.videoHeight,
videoThumbUrl:this.opt.cover,
videoDuration:1*this.opt.duration,
videoVid:m,
playerX:p.left,
playerY:p.top,
playerWidth:p.width,
playerHeight:p.height,
subscene:1*r,
headImgUrl:this.opt.headImgUrl,
currFrameData:s,
forbidForward:this.opt.canShareVideo?0:1
};
this.__isInFullScreen=!0,s&&(this._g.jsapiFullScreenId=setTimeout(function(){
e.__isInFullScreen=!1;
},2e3)),S.invoke("handleMPPageAction",y,function(e){
l._g.jsapiFullScreenId&&(clearTimeout(l._g.jsapiFullScreenId),l._g.jsapiFullScreenId=null),
/:ok$/.test(e.err_msg)?(l.__isInFullScreen=!0,l.onFullScreenChange({
state:!0,
type:"jsapi"
})):(l.__isInFullScreen=!1,u.os.android||l.play4outer(0/0,{
triggerEvent:!1
}),l._g.jsapiFullScreenErrCnt++);
}),u.os.android&&(parent.window.CustomFullscreenApi&&"function"==typeof parent.window.CustomFullscreenApi._customEnterFullscreen&&parent.window.CustomFullscreenApi._customEnterFullscreen(!0),
i());
},
exitFullScreen:function(){
this.hideLoading(),this._useWcSlPlayer()?this.video.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen(),
this.__isInFullScreen=!1;
},
isInFullScreen:function(){
return!!this.__isInFullScreen;
},
play4outer:function(e){
var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
this.__forcePause=!1,this.play(e),t.triggerEvent!==!1&&this._trigger("userplay",{
doubleTap:t.doubleTap
}),this._hidePlayControllBar();
},
pause4outer:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
this.hideLoading(),this.pause(),e.triggerEvent!==!1&&this._trigger("userpause",{
doubleTap:e.doubleTap
}),this.hideControllBar(),this._showPlayControllBar();
},
setWidth:function(e){
this.container.find(".js_page_video").css({
width:e
});
},
setHeight:function(e){
this.container.find(".js_page_video").css({
height:e
});
},
showCover:function(){
this.container.find(".js_poster_cover").show();
},
hideCover:function(){
this.container.find(".js_poster_cover").hide();
},
showFuncControllBar:function(){
this.container.find(".js_play_bar_wrapper").removeClass("wrp_play_bar_hide_speed-dot"),
this.container.find(".js_progress_bar,.js_full_screen_control").show(),this.__hasFuncControllBar=!0;
},
hideFuncControllBar:function(){
this.container.find(".js_play_bar_wrapper").addClass("wrp_play_bar_hide_speed-dot"),
this.container.find(".js_progress_bar,.js_full_screen_control").hide(),this.__hasFuncControllBar=!1;
},
showControllBar:function(){
this.__touchVideoTimeoutHandler&&clearTimeout(this.__touchVideoTimeoutHandler),this.__timerHideControll&&(clearTimeout(this.__timerHideControll),
this.__timerHideControll=null),this.__userplaytime||(this.container.find(".js_play_bar_wrapper").removeClass("opr_fade_out wrp_play_bar_hide_speed-dot").show(),
this.container.find(".js_played_speed_cnt").removeClass("opr_fade_out"),this.container.find(".js_controll").removeClass("opr_fade_out").show(),
this._useWcSlPlayer()&&this.container.find(".js_video_fullscreen_profile").removeClass("opr_fade_out").css("display",this.isInFullScreen()?null:"none")),
this.opt.canShareVideo&&(this.__userplaytime?this.container.find(".js_page_video").addClass("wx_video_status_initial"):this.container.find(".js_page_video").removeClass("wx_video_status_initial"),
this.container.find(".js_share_btn_contain").removeClass("opr_fade_out").show());
},
hideControllBar:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=this,i=t.container.find(".js_controll"),o=t.container.find(".js_play_bar_wrapper"),n=t.container.find(".js_played_speed_cnt"),a=t.container.find(".js_video_fullscreen_profile"),s=t.container.find(".js_share_btn_contain");
i.removeClass("opr_fade_in"),t.isInFullScreen()?(o.removeClass("opr_fade_in"),t._useWcSlPlayer()&&a.removeClass("opr_fade_in")):n.removeClass("opr_fade_in"),
t.__timerHideControll&&clearTimeout(t.__timerHideControll),i.addClass("opr_fade_out"),
t.isInFullScreen()?(o.addClass("opr_fade_out"),t._useWcSlPlayer()&&a.addClass("opr_fade_out")):n.addClass("opr_fade_out"),
e.showShareBtn!==!0?s.removeClass("opr_fade_in").addClass("opr_fade_out"):s.removeClass("opr_fade_out").show(),
t.__timerHideControll=setTimeout(function(){
t.isInFullScreen()?o.hide():o.addClass("wrp_play_bar_hide_speed-dot"),i.hide(),t._useWcSlPlayer()&&a.css("display","none"),
e.showShareBtn!==!0&&s.hide(),1===t.video.playbackRate&&$("#play_setting_mode__rate").text("倍速");
},100);
},
showLoading:function(e){
var t=this;
this.__always_hide_loading||this.__isshowLoading&&this.video&&this.video.currentTime>1||(this.__isshowLoading=!0,
this._g.resetShowingLoadingTimeoutId&&(clearTimeout(this._g.resetShowingLoadingTimeoutId),
this._g.resetShowingLoadingTimeoutId=null),this._g.resetShowingLoadingTimeoutId=window.setTimeout(function(){
t.__isshowLoading=!1;
},1e3),this._g.showingLoadingTimeoutId&&(clearTimeout(this._g.showingLoadingTimeoutId),
this._g.showingLoadingTimeoutId=null),"firstTime"==e?this._useWcSlPlayer()?this._g.showingLoadingTimeoutId=setTimeout(function(){
t.container.find(".js_loading").addClass("start_loading").show();
},800):this.container.find(".js_loading").addClass("start_loading").show():this._g.showingLoadingTimeoutId=setTimeout(function(){
t.container.find(".js_loading").show();
},800));
},
hideLoading:function(){
this.container.find(".js_loading").removeClass("start_loading").hide(),this._g.showingLoadingTimeoutId&&(clearTimeout(this._g.showingLoadingTimeoutId),
this._g.showingLoadingTimeoutId=null);
},
showWcSlResolution:function(){
this._useWcSlPlayer()&&this.opt.resolutionInfo&&this.opt.resolutionInfo.length&&this.container.find(".js_play_mode_change").css("display",null);
},
hideWcSlResolution:function(){
this._useWcSlPlayer()&&this.opt.resolutionInfo&&this.opt.resolutionInfo.length&&(this.container.find(".js_play_mode_change").css("display","none"),
this.container.find(".js_play_mode_select").css("display","none"));
},
hideWcSlPlayback:function(){
this._useWcSlPlayer()&&this.opt.playbackRateInfo&&this.opt.playbackRateInfo.length&&this.container.find(".js_playback_mode_select").css("display","none");
},
showWcSlFullEndExitBtn:function(){
var e=this;
if(this._useWcSlPlayer()){
var t=this.container.find(".js_video_fullscreen_end");
this.__hasBindWcSlFullEndExitBtnTapEvent||(this.__hasBindWcSlFullEndExitBtnTapEvent=!0,
d.tap(t.find(".js_video_fullscreen_end_exit")[0],function(){
e.exitFullScreen();
})),t.css("display",null);
}
},
hideWcSlFullEndExitBtn:function(){
this._useWcSlPlayer()&&this.container.find(".js_video_fullscreen_end").css("display","none");
},
triggerMuted:function(e){
e?(s(this.video,!0),this.container.find(".js_muted_btn").addClass("muting")):(s(this.video,!1),
this.container.find(".js_muted_btn").removeClass("muting"));
},
setVideoCSS:function(e){
var t=this,i=t.container,o=i.find(".js_page_video");
o.css(e);
},
afterFirstLoaded:function(){
this.__userplaytime&&(this.__userplaytime=!1,this.reportRealLoadingTime(),this._useWcSlPlayer()||this._trigger("touchVideo",{
isShow:!0
}));
},
reportRealLoadingTime:function(){
var e=this;
e.__firstPlayEnd=+new Date;
var t=parseInt(e.__firstPlayEnd-e.__firstPlayStart);
if(console.info("[视频点击播放耗时]",t),e._trigger("firstBufferingTime",{
bufferingTime:t,
initialTime:e.opt.initialTime
}),m.proxyPreloadExper()){
var i=w.toBase64(JSON.stringify({
scene:window.source,
sessionid:window.sessionid
}));
1==m.proxyPreloadExper().experSet?y.saveSpeeds({
sample:1,
uin:window.encodeURIComponent(w.toBase64(window.user_uin))||uin,
pid:1045,
speeds:{
sid:21,
time:t
},
user_define:i
}):2==m.proxyPreloadExper().experSet?y.saveSpeeds({
sample:1,
uin:window.encodeURIComponent(w.toBase64(window.user_uin))||uin,
pid:1045,
speeds:{
sid:22,
time:t
},
user_define:i
}):3==m.proxyPreloadExper().experSet?y.saveSpeeds({
sample:1,
uin:window.encodeURIComponent(w.toBase64(window.user_uin))||uin,
pid:1045,
speeds:{
sid:23,
time:t
},
user_define:i
}):4==m.proxyPreloadExper().experSet&&y.saveSpeeds({
sample:1,
uin:window.encodeURIComponent(w.toBase64(window.user_uin))||uin,
pid:1045,
speeds:{
sid:24,
time:t
},
user_define:i
}),y.send();
}
},
hasFullScreen:function(){
return this.isInFullScreen();
},
hasDrag:function(){
return!!this.__has_drag;
},
getCurTime:function(){
return this.video.currentTime;
},
getPlaybackRate:function(){
return this.video.playbackRate;
},
getResolutionInfo:function(){
var e=this;
return this._useWcSlPlayer()?this.opt.resolutionInfo?this.opt.resolutionInfo.filter(function(t){
return t.src===e.video.resolutionSrc;
})[0]:null:void 0;
},
getEndDom:function(){
return this.container.find(".js_end_dom");
},
getDrag:function(){
return this.__dragTimes;
},
getPlayTotalTime:function(){
return this.__endCountTime(),this.__play_total_time;
},
getWcSlPlayerAndroidSafeAreaInsets:function(){
return F.wcSlPlayerAndroidSafeAreaInsets;
},
supportWcSlPlayer:function(){
return window.__failConfigWxOpen?!1:this._g.fallbackFromWcSlVideoToH5Player?!1:F.wcSlPlayerSupport;
},
getLog:function(){
var e=this.log||{};
return{
hasended:e.hasended,
last_ms:Math.floor(1e3*(e.lastsec||0)),
duration_ms:Math.floor(1e3*(e.duration||0)),
video_error:e.video_error||0,
video_error_code:e.video_error_code||0,
loadwait:e.loadwait||0
};
},
isPlay:function(){
return!this.video.paused&&!this.isEnd();
},
isPause:function(){
return!!this.video.paused;
},
isEnd:function(){
return!!this.video.ended;
},
hasBeginPlay:function(){
return this.__hasBeginPlay;
},
destroy:function(){
g.removeListener({
type:"broadcastPlay",
func:this._event.broadcastPlay
});
try{
delete parent.window.__MpPlayers[this.id];
}catch(e){}
F.visibilityPausePlayer===this&&(F.visibilityPausePlayer=null);
},
_setBeginPlayStatus:function(){
var e=this;
this.hideLoading(),this.container.find(".js_video_play_controll").css({
display:"block"
});
var t=this.opt.duration;
t&&t>0&&this.container.find(".js_video_length").html(N(t)).show(),1==this.__iosPreloadPause&&!function(){
var t=e;
setTimeout(function(){
var e=t.container.find(".js_video_pause_controll");
e.hide();
var i=t.container.find(".js_video_play_controll");
i.show();
});
}();
},
showPlayBtn:function(){
this.container.find(".js_video_play_controll").show();
},
hidePlayBtn:function(){
this.container.find(".js_video_play_controll").hide();
},
autoChangeTip:function(e){
var t=this,i=void 0;
switch(e.type){
case"autoChange":
i=".js_auto_change_tip";
break;

case"autoSuc":
i=".js_auto_change_suc_tip";
break;

default:
i=null;
}
switch(e.option){
case"show":
this.container.find(".video__top-tips__mask").removeClass("video__top-tips__showOut").addClass("video__top-tips__showIn"),
this.container.find(".js_auto_change_tip_mask").show(),this.container.find(i).show();
break;

case"hide":
this.container.find(".video__top-tips__mask").removeClass("video__top-tips__showIn").addClass("video__top-tips__showOut"),
setTimeout(function(){
t.container.find(i).hide(),t.container.find(".js_auto_change_tip_mask").hide();
},500);
}
}
}),L._getFormatTime=N,L;
});define("a/tpl/mpda_bottom_tpl.html.js",[],function(){
return'<div class="rich_media_extra">\n    <div class="weui-loadmore weui-loadmore_line mod_title_context_primary mpad_more_container">\n        <span class="weui-loadmore__tips js_ad_opt_list_btn_0">广告<!--投诉入口 begin-->\n            <div class="mpad_more js_mpad_more">\n                <ul class="mpad_more_list js_ad_opt_list js_ad_opt_list_0" style="display:none">\n                    <li class="mpad_more_list_ele">\n                        <a class="mpad_more_list_ele_container js_complain_btn_0" href="javascript:;">投诉</a>\n                    </li>\n                </ul>\n            </div>\n            <!--投诉入口 end--> \n        </span>\n    </div>\n    <!--广告插入位置-->\n    <#=adTpl#>\n</div>';
});define("a/tpl/crt_size_map.js",["a/a_config.js","biz_wap/utils/ajax.js","a/a_sign.js","biz_common/utils/url/parse.js","a/tpl/new_cpc_tpl.html.js","a/tpl/sponsor_tpl.html.js","a/tpl/banner_tpl.html.js","a/tpl/cardticket_tpl.html.js","a/tpl/info_tpl.html.js","a/tpl/smallcard_tpl.html.js","a/tpl/promote_tpl.html.js","a/tpl/banner_info_tpl.html.js","a/tpl/smallbanner_info_tpl.html.js","a/tpl/smallbanner_msg_tpl.html.js"],function(t){
"use strict";
function a(t){
t.biz_info.is_subscribed?(t.btn_text="查看",window.__addIdKeyReport&&window.__addIdKeyReport(24729,65,1)):window.__addIdKeyReport&&window.__addIdKeyReport(24729,64,1);
}
var _=t("a/a_config.js"),e=t("biz_wap/utils/ajax.js"),n=t("a/a_sign.js"),p=t("biz_common/utils/url/parse.js");
return{
484:{
tpl:t("a/tpl/new_cpc_tpl.html.js"),
renderData:{
isVideo:!1,
superscript:!0
}
},
996:{
tpl:t("a/tpl/sponsor_tpl.html.js"),
renderData:{
has_banner:!1,
has_desc:!0
}
},
997:{
tpl:t("a/tpl/sponsor_tpl.html.js"),
renderData:{
has_banner:!1,
has_desc:!0
}
},
998:{
multiLogic:[{
selection:{
pos_type:_.AD_POS.POS_SPONSOR
},
tpl:t("a/tpl/sponsor_tpl.html.js"),
renderData:{
has_banner:!0,
has_desc:!0
}
},{
selection:{
pos_type:_.AD_POS.POS_BOTTOM
},
tpl:t("a/tpl/banner_tpl.html.js")
}]
},
135:{
multiLogic:[{
selection:{
pos_type:_.AD_POS.POS_BOTTOM,
product_type:_.AD_TYPE.CARD_PRODUCT_TYPE
},
tpl:t("a/tpl/cardticket_tpl.html.js"),
paramsPreHandler:function(t){
return t.title=t.card_info.card_title,t.avatar=t.card_info.card_logo_url,t.desc=t.card_info.card_brand_name,
t;
}
},{
selection:{
pos_type:_.AD_POS.POS_BOTTOM,
product_type:_.AD_TYPE.ADD_CONTACT_PRODUCT_TYPE
},
tpl:t("a/tpl/info_tpl.html.js"),
paramsPreHandler:function(t){
return t.title=t.avatarTitle,t.desc=t.hint_txt,a(t),t;
},
renderData:{
isWxapp:!1
}
}]
},
267:{
tpl:t("a/tpl/smallcard_tpl.html.js"),
paramsPreHandler:function(t){
return t.title=t.mp_shop_info.name,t.avatar=t.mp_shop_info.img,t.priceBefore=parseInt(t.mp_shop_info.ori_price/100),
t.price=parseInt(t.mp_shop_info.cur_price/100),t;
}
},
133:{
tpl:t("a/tpl/banner_tpl.html.js")
},
420:{
tpl:t("a/tpl/banner_tpl.html.js")
},
134:{
tpl:t("a/tpl/promote_tpl.html.js"),
paramsAlias:{
title:"hint_txt",
desc:"ad_desc",
avatar:"image_url"
}
},
538:{
tpl:t("a/tpl/new_cpc_tpl.html.js"),
renderData:{
isVideo:!0,
tag_pos:-1,
price:!1,
superscript:!1
},
paramsAlias:{
title:"avatarTitle"
}
},
567:{
tpl:t("a/tpl/banner_tpl.html.js")
},
354:{
tpl:t("a/tpl/banner_info_tpl.html.js"),
paramsAlias:{
banner:"image_url"
},
paramsPreHandler:function(t){
return t.hint_txt&&(t.desc=t.hint_txt.split("|")[0],t.suply_desc=t.hint_txt.split("|")[1]||""),
t.product_type==_.AD_TYPE.ADD_CONTACT_PRODUCT_TYPE?(t.title=t.avatarTitle,t.size=t.app_info.app_size):(t.product_type==_.AD_TYPE.ANDROID_APP_PRODUCT_TYPE||t.product_type==_.AD_TYPE.IOS_APP_PRODUCT_TYPE)&&(t.title=t.app_info.app_name,
t.size=t.app_info.app_size,"进入应用"==t.btn_text&&(t.btn_text="进入")),t;
}
},
117:{
tpl:t("a/tpl/smallbanner_info_tpl.html.js"),
paramsAlias:{
banner:"image_url"
},
paramsPreHandler:function(t){
return t.product_type==_.AD_TYPE.ADD_CONTACT_PRODUCT_TYPE?t.title=t.avatarTitle:(t.product_type==_.AD_TYPE.ANDROID_APP_PRODUCT_TYPE||t.product_type==_.AD_TYPE.IOS_APP_PRODUCT_TYPE)&&(t.title=t.app_info.app_name,
"进入应用"==t.btn_text&&(t.btn_text="进入")),a(t),t;
}
},
355:{
tpl:t("a/tpl/smallbanner_info_tpl.html.js"),
paramsAlias:{
banner:"image_url"
},
paramsPreHandler:function(t){
return t.product_type==_.AD_TYPE.ADD_CONTACT_PRODUCT_TYPE?t.title=t.avatarTitle:(t.product_type==_.AD_TYPE.ANDROID_APP_PRODUCT_TYPE||t.product_type==_.AD_TYPE.IOS_APP_PRODUCT_TYPE)&&(t.title=t.app_info.app_name,
"进入应用"==t.btn_text&&(t.btn_text="进入")),a(t),t;
}
},
568:{
tpl:t("a/tpl/smallbanner_info_tpl.html.js"),
paramsAlias:{
banner:"image_url"
},
paramsPreHandler:function(t){
return t.product_type==_.AD_TYPE.ADD_CONTACT_PRODUCT_TYPE?t.title=t.avatarTitle:(t.product_type==_.AD_TYPE.ANDROID_APP_PRODUCT_TYPE||t.product_type==_.AD_TYPE.IOS_APP_PRODUCT_TYPE)&&(t.title=t.app_info.app_name,
"进入应用"==t.btn_text&&(t.btn_text="进入")),a(t),t;
}
},
677:{
tpl:t("a/tpl/smallbanner_msg_tpl.html.js"),
paramsPreHandler:function(t){
var a=t.shop_image;
return t.shop_image.length>0&&(a=a[0]),t.banner=a.image_url,t.title=t.hint_txt,t.tags=a.mp_tags,
t;
}
},
708:{
tpl:t("a/tpl/new_cpc_tpl.html.js"),
paramsPreHandler:function(t){
return t.isVideo=!1,t.price="",t.tag_pos="",t.superscript="",a(t),t;
},
afterRender:function(t,a){
function _(){
i.style.display="none";
}
if(a){
var i=a.getElementsByClassName("js_mpad_cpc_ft_msg_contact")[0];
i&&setTimeout(function(){
var a=["aid="+t.aid,"appid="+t.biz_appid,"pass_ticket="+window.pass_ticket,"pos_type="+t.pos_type,"sn="+window.sn,"user_uin="+window.user_uin,"uxinfo="+(t.uxinfo||"")].join("&");
n.createSign({
beforeSign:a,
timeout:2e3
},function(n,l,r,s){
e({
url:p.join("/mp/getappmsgad",{
action:"getbizext",
ad_sign_data:n,
ad_sign_k1:l,
ad_sign_k2:r,
ad_sign_md5:s,
pos_type:t.pos_type,
aid:t.aid,
pass_ticket:encodeURIComponent(window.pass_ticket)
},!0),
type:"POST",
notEncode:!0,
data:{
sn:window.sn,
appmsgid:window.appmsgid,
idx:window.idx,
appid:t.biz_appid,
__biz:window.biz,
mid:window.mid,
send_time:window.send_time||"",
uxinfo:t.uxinfo||"",
before_sign:a
},
success:function(t){
try{
t=JSON.parse(t);
}catch(a){
return void _();
}
if(!t.biz_info)return void _();
var e=i.getElementsByTagName("span")[0],n=i.getElementsByTagName("span")[1],p=t.biz_info.original_cnt>=10?t.biz_info.original_cnt+"篇原创文章":"",l=t.biz_info.comm_sub_cnt>0?t.biz_info.comm_sub_cnt+"位朋友关注":"";
p?(e.innerHTML=p,n.innerHTML=l):l?e.innerHTML=l:t.biz_info.signature?e.innerHTML=t.biz_info.signature:_();
},
error:function(){
_();
}
});
});
},1e3);
}
}
}
};
});define("biz_wap/jsapi/cardticket.js",["biz_wap/jsapi/core.js"],function(e){
"use strict";
var c=e("biz_wap/jsapi/core.js"),r={
openCardDetail:function(e){
function r(){
c.invoke("openCardDetail",{
card_id:e.card_id,
card_ext:e.card_ext
},function(c){
"open_card_detail:fail"==c.err_msg||"open_card_detail:ok"==c.err_msg||"open_card_detail:cancel"==c.err_msg?e.success&&e.success(c):c.err_msg.indexOf("function_not_exist")>=0?e.function_not_exist&&e.function_not_exist():"system:access_denied"==c.err_msg?e.access_denied&&e.access_denied("openCardDetail"):e.error&&e.error(c);
});
}
function n(){
c.invoke("batchAddCard",{
card_list:[{
card_id:e.card_id,
card_ext:e.card_ext
}]
},function(c){
"batch_add_card:ok"==c.err_msg||"batch_add_card:fail"==c.err_msg||"batch_add_card:cancel"==c.err_msg?e.success&&e.success(c):c.err_msg.indexOf("function_not_exist")>=0?r():"system:access_denied"==c.err_msg?e.access_denied&&e.access_denied("batchAddCard"):e.error&&e.error(c);
});
}
n();
},
supportCardDetail:function(e){
c.invoke("openCardDetail",{
card_id:"err_id"
},function(c){
e.callback(c.err_msg.indexOf("function_not_exist")>=0?!1:!0);
});
},
openCard:function(e){
c.invoke("batchViewCard",{
cardList:[{
cardId:e.cardId,
code:e.code
}]
},function(c){
c.err_msg.indexOf("function_not_exist")>=0?e.function_not_exist&&e.function_not_exist():e.success&&e.success(c);
});
}
};
return r;
});define("biz_common/utils/emoji_panel_data.js",[],function(){
"use strict";
return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,36,37,38,39,40,41,42,44,45,46,47,48,49,50,51,52,54,55,56,57,60,62,63,64,65,66,67,68,70,74,75,76,78,79,80,81,82,83,84,85,89,92,93,94,95,300,301,302,303,304,305,306,307,204,205,202,206,212,211,313,314,315,316,317,318,319,320,321,322,323,308,309,310,311,312,209,324,215,214];
});function _classCallCheck(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");
}
var _createClass=function(){
function e(e,t){
for(var n=0;n<t.length;n++){
var a=t[n];
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a);
}
}
return function(t,n,a){
return n&&e(t.prototype,n),a&&e(t,a),t;
};
}();
define("appmsg/emotion/textarea.js",["appmsg/emotion/dom.js","appmsg/emotion/caret.js","biz_common/dom/class.js","biz_common/utils/emoji_data.js","biz_common/utils/emoji_panel_data.js"],function(e){
"use strict";
function t(e){
for(var t=0,n=l.length;n>t;t++)if(l[t]===e)return!0;
return!1;
}
for(var n=e("appmsg/emotion/dom.js"),a=e("appmsg/emotion/caret.js"),i=e("biz_common/dom/class.js"),s=e("biz_common/utils/emoji_data.js"),r=e("biz_common/utils/emoji_panel_data.js"),o={},l=[],u=0;u<s.length;u++){
var c=s[u];
o[c.id]=c;
}
for(var u=0;u<r.length;u++)l.push(o[r[u]].cn);
var m=function(){
function e(t){
_classCallCheck(this,e),this.textarea=t.inputArea,this.submitBtn=t.submitBtn,this.makeTextAreaFast(),
this.listenDelete();
}
return _createClass(e,[{
key:"insertEmotion",
value:function(e){
var t=this.textarea.el[0],i=a.get(t),s=t.value;
s=s.slice(0,i)+e+s.slice(i),t.value=s,a.set(t,i+e.length+1),t.blur(),n.later(function(){
t.blur();
}),this.setBtn(s);
}
},{
key:"makeTextAreaFast",
value:function(){
var e="translate3d(0, 0, 0)";
this.textarea.css({
webkitTransform:e,
transform:e
});
}
},{
key:"listenDelete",
value:function(){
var e=this,t=8;
this.textarea.on("keydown",function(n){
n.keyCode===t&&e.deleteEmotion(!0)&&n.preventDefault();
});
}
},{
key:"deleteEmotion",
value:function(e){
function i(){
var e=r-1;
0>e&&(e=0);
var t=o.slice(0,e),n=o.slice(r);
s.value=t+n,a.set(s,e);
}
var s=this.textarea.el[0],r=a.get(s),o=s.value,l=4,u=r-l;
0>u&&(u=0,l=r-u);
var c=o.slice(u,r),m=c.match(/\[([\u4e00-\u9fa5\w]+)\]$/g);
if(m){
var f=m[0],v=l-f.length,h=f.replace("[","").replace("]","");
if(t(h)){
var b=c.replace(f,""),d=o.slice(0,u)+b+o.slice(r);
s.value=d,a.set(s,u+v);
}else{
if(e)return!1;
i();
}
}else{
if(e)return!1;
i();
}
return e?(s.focus(),n.later(function(){
s.focus();
})):(s.blur(),n.later(function(){
s.blur();
})),this.setBtn(s.value),!0;
}
},{
key:"setBtn",
value:function(e){
if(this.submitBtn){
var t=this.submitBtn.el[0];
e.length<1?i.addClass(t,"btn_disabled"):i.removeClass(t,"btn_disabled");
}
}
},{
key:"inputEmotion",
value:function(e,t){
-1===e?this.deleteEmotion(t):this.insertEmotion(l[e-1]);
}
}]),e;
}();
return m;
});define("appmsg/emotion/nav.js",["appmsg/emotion/dom.js"],function(n){
"use strict";
function t(n,t){
o.each(t,function(o,a){
a===n?t[a].attr("class","emotion_nav current"):t[a].attr("class","emotion_nav");
});
}
var o=n("appmsg/emotion/dom.js");
return{
activeNav:t
};
});define("appmsg/emotion/common.js",[],function(){
"use strict";
return{
EMOTIONS_COUNT:112,
EMOTION_LI_SIZE:36,
EMOTION_SIZE:22
};
});