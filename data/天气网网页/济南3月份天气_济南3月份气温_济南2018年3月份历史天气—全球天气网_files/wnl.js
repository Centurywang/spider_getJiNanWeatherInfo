//历史广告
document.write('<script type="text/javascript" src="http://www.cnys.com/data/tianqi_tuiguang.js"></script>');
document.write('<link href="http://img.cnys.com/pic/css/banner.css" rel="stylesheet" type="text/css">');

function wnani_021(){
}
function wnl_view01(){
	document.writeln("<script type=\'text/javascript\'>");
	document.writeln("    /*tianqi万年历内页橱窗广告336*280 创建于 2016/8/15*/");
	document.writeln("    var cpro_id = \'u2733648\';");
	document.writeln("</script>");
	document.writeln("<script type=\'text/javascript\' src=\'https://cpro.baidustatic.com/cpro/ui/c.js\'></script>");

	document.write('<div class="clear10"></div>');
	document.write('<div class="adbox330">');
	var outstr = getArrayItems(data_qiwen, 6);
	document.write('<div class="tit_right_02 bo0"><h4 style="color:#333;border-left:4px solid #39f;">奇闻趣事</h4></div>');
	document.write('<div class="clear10"></div>');
	document.write('<ul class="adpic145x105b" style="width:320px;">');		
	for (var i = 0; i < outstr.length; i++) {
		var ttt = outstr[i];
		var num = i+1;
		document.write('<li><a href="'+ ttt.url +'?f=wnl_qiwen" target="_blank"  title="'+ ttt.tit +'"  id="lbg'+num +'"><i><img src="'+ ttt.img +'" ></i><b>'+ ttt.tit +'</b></a></li>');
	}
	document.write('</ul>');
	document.write('</div>');

	document.write('<div class="clear10"></div>');
	document.write('<div class="adbox330">');
	var tuwen1 = getArrayItems(data_tuwen_pic, 1);
		var outstr = getArrayItems(data_tuwen_txt, 6);
		document.write('<div class="tit_right_02" style="border:none;"><h4 style="color:#333;border-left:4px solid #39f;">大家都在看</h4></div>');
		document.write('<div class="clear10"></div>');
		document.write('<dl class="tuwen300_01">');	
		document.write('<dt><a href="'+ tuwen1[0].url +'?f=wnl_tuwen_pic" target="_blank"  title="'+ tuwen1[0].tit +'"  id="lbg'+num +'"><i><img src="'+ tuwen1[0].img +'"></i><h5>'+ tuwen1[0].tit +'</h5></a></dt>');
		for (var i = 0; i < outstr.length; i++) {
			var ttt = outstr[i];
			var num = i+1;
			document.write('<dd><a href="'+ ttt.url +'?f=wnl_tuwen_txt" target="_blank"  title="'+ ttt.tit +'"  id="lbg'+num +'">'+ ttt.tit +'</a></dd>');
		}
		document.write('</dl>');
	document.write('</div>');
	

}
function wnl_view02(){
	
	document.writeln("<script type=\'text/javascript\'>");
	document.writeln("    /*tianqi图+自适应 创建于 2016/8/9*/");
	document.writeln("    var cpro_id = \'u2727823\';");
	document.writeln("</script>");
	document.writeln("<script type=\'text/javascript\' src=\'https://cpro.baidustatic.com/cpro/ui/i.js\'></script>");
}
function wnl_view0122(){
	
	document.write('<div class="clear10"></div>');
	document.write('<div class="adbox330">');
		var outstr = getArrayItems(data_redian, 4);
		document.write('<div class="tit_right_02"><h4 style="color:#333;border-left:4px solid #39f;">热点推荐</h4></div>');
		document.write('<div class="clear10"></div>');
		document.write('<ul class="adpic145x105a" style="width:320px;">');		
		for (var i = 0; i < outstr.length; i++) {
			var ttt = outstr[i];
			var num = i+1;
			document.write('<li><a href="'+ ttt.url +'?f=wnl_redian" target="_blank"  title="'+ ttt.tit +'"  id="lbg'+num +'"><i><img src="'+ ttt.img +'" ></i><b>'+ ttt.tit +'</b></a></li>');
		}
		document.write('</ul>');
	document.write('</div>');

	document.write('<div class="clear10"></div>');
	document.writeln("<script type=\'text/javascript\'>");
	document.writeln("    /*tianqi万年历右侧橱窗336*280 创建于 2016/8/15*/");
	document.writeln("    var cpro_id = \'u2733664\';");
	document.writeln("</script>");
	document.writeln("<script type=\'text/javascript\' src=\'https://cpro.baidustatic.com/cpro/ui/c.js\'></script>");

	document.write('<style>');
	document.write('.adbox330 {float:left;width:317px;border:1px solid #e3e3e3;padding:0 0 5px 15px}');
	document.write('.adpic145x105b li b {font-weight:normal;}');
	document.write('.tuwen300_01 a {color:#111;}');
	document.write('</style>');
}

function wnl_view03(){
	document.writeln("<div style=\" height:10px; display:block; overflow:hidden;clear:both\"><\/div>")
	document.writeln("<iframe src=\"http://www.tianqi.com/static/js/300x300.html\" width=\"300\" height=\"300\" align=\"center,center\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" frameborder=\"0\" allowtransparency=\"true\"></iframe>");
}

function wnl_banner01(){

	document.write('<script type="text/javascript">');
	document.write('    /*【tianqi】pc-960x90创建于 2017/3/1*/');
	document.write('    var cpro_id = "u2907788";');
	document.write('</script>');
	document.write('<script type="text/javascript" src="https://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}

function wnl_banner(){

}
function wnl_leftview01(){

}
function wnl_leftview02(){
	document.writeln("<script type=\'text/javascript\'>");
	document.writeln("    /*tianqi万年历底336*280 创建于 2016/8/15*/");
	document.writeln("    var cpro_id = \'u2733658\';");
	document.writeln("</script>");
	document.writeln("<script type=\'text/javascript\' src=\'https://cpro.baidustatic.com/cpro/ui/c.js\'></script>");
}
function wnl_leftview03(){
	document.writeln("<script type=\'text/javascript\'>");
	document.writeln("    /*tianqi万年历内页翻页原生600*250 创建于 2016/8/15*/");
	document.writeln("    var cpro_id = \'u2733662\';");
	document.writeln("</script>");
	document.writeln("<script type=\'text/javascript\' src=\'https://cpro.baidustatic.com/cpro/ui/c.js\'></script>");
}

function wnl_index_0111(){
/* 尾部广告2016.12.8	
	
document.writeln("<div style=\"width:960px; margin-left:auto; margin-right:auto\">");
document.writeln("<div style=\"height:6px; display:block; overflow:hidden;clear:both\"></div>");
document.writeln("<script src=\"http://www.yokaunion.com/page/s.php?s=185&w=960&h=60\"></script>");
document.writeln("</div>");
*/
}


//tianqi万年历资讯底部嵌入搜索推荐自适应 创建于 2016/8/23
function wnl_bottom_search(){
	document.writeln("<div style=\"clear:both; padding-top:8px;\"></div>");
	document.writeln("<script type=\'text/javascript\'>");
	document.writeln("         var cpro_psid = \'u2742026\';");
	document.writeln("         var cpro_pswidth = \'645\';");
	document.writeln("         var cpro_psheight = \'180\';");
	document.writeln("</script>");
	document.writeln("<script src=\'http://su.bdimg.com/static/dspui/js/ue.js\' type=\'text/javascript\'></script>");
}


// wannianli.tianqi.com 全站 包括wap端m.wannianli.tianqi.com  单独统计   2016.8.24
function wnl_bottom_tj(){
	document.writeln("<div style=\"display:none;\">");
	document.writeln("<script language=\'javascript\' type=\'text/javascript\' src=\'http://js.users.51.la/18957742.js\'></script>");
	document.writeln("<noscript><a href=\'http://www.51.la/?18957742\' target=\'_blank\'><img alt=\'&#x6211;&#x8981;&#x5566;&#x514D;&#x8D39;&#x7EDF;&#x8BA1;\' src=\'http://img.users.51.la/18957742.asp\' style=\'border:none\' /></a></noscript>");
	document.writeln("<script>");
	document.writeln("var _hmt = _hmt || [];");
	document.writeln("(function() {");
	document.writeln("  var hm = document.createElement(\'script\');");
	document.writeln("  hm.src = \'//hm.baidu.com/hm.js?2ef91e38f40ab974c7ffdfa8d0b5c2fe\';");
	document.writeln("  var s = document.getElementsByTagName(\'script\')[0]; ");
	document.writeln("  s.parentNode.insertBefore(hm, s);");
	document.writeln("})();");
	document.writeln("</script>");
	document.writeln("");
	document.writeln("</div>");
}