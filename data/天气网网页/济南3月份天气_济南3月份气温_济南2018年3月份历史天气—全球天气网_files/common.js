document.writeln("<div style=\"clear:both\"><\/div>");
document.writeln("<script type=\"text/javascript\" src=\"//cbjs.baidu.com/js/m.js\"></script>");
//ȫվ����
function duilian(){
/*
document.writeln("<script type=\'text/javascript\'>");
document.writeln("    /*tianqi ��ҳ����120*270 ������ 2016/8/10*");
document.writeln("    var cpro_id = \'u2728769\';");
document.writeln("</script>");
document.writeln("<script type=\'text/javascript\' src=\'//cpro.baidustatic.com/cpro/ui/f.js\'></script>");
*/
}

//��������Ӧ�����½ǹ��
function head20160811(){
	document.writeln("<script type=\'text/javascript\'>");
document.writeln("    /*tianqi�����Ƽ�������Ӧ ������ 2016/8/9*/");
document.writeln("    var cpro_psid = \'u2727460\';");
document.writeln("</script>");
document.writeln("<script type=\'text/javascript\' src=\'//su.bdimg.com/static/dspui/js/f.js\'></script>");
}
//����ȫվ�������
function dianping(){
	//tianqi�Ķ��� ȫվ����  ������ҳ
	document.writeln("<script charset=\'gbk\' src=\'//p.tanx.com/ex?i=mm_16234854_2536807_68816805\'></script>");

	//document.writeln("<a target=\"_blank\" rel=\"nofollow\" href=\"//jh.dianping.com/wedding/pop/mergeLp\"><img src=\"//www.tianqi.com/static/img/dianping_jh_960x64.jpg\" width=\"960\" height=\"64\"><\/a>");
}

var host = window.location.host;
var vpath=location.pathname;
if (host!="www.tianqi.com"){
	if(host=="wannianli.tianqi.com"){
		//document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/img/tuku_wnl_gbk.js\"></script>");
	}else{
		//document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/img/tuku.js\"></script>");
		//���и�������
		duilian();//����
	}
	head20160811();
	
	

	
}else{
	if(vpath!='/' && vpath!='/index.html'){
		duilian();
		if(vpath!='/index.php'){
			//document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/img/tuku.js\"></script>");
			head20160811();
		}else{
			document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/img/tuku_index.js\"></script>");
		}
	}else{
		//��ҳ��������
		document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/img/tuku_index.js\"></script>");
	}
}

//��վ��ͷ��960x64�Ĺ��
function head_01(){
	document.write('<script type="text/javascript">');
	document.write('    /*��tianqi��pc-960x90������ 2017/3/1*/');
	document.write('    var cpro_id = "u2907788";');
	document.write('</script>');
	document.write('<script type="text/javascript" src="https://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}

//ָ���Ĵ�����ʾ�Ĺ��
function index_city_sichuan(){
	/*
	document.writeln("<div style=\"float:left;background: #fff; border: 1px #c1daf2 solid; width:698px; font-size:13px;line-height:34px;padding: 0 0 3px;\">");
	document.writeln("<div style=\"float:left;width:698px; font-family:\'΢���ź�\'; font-size:18px;text-indent: 14px;line-height:36px;background:#F5FAFE;margin-bottom:16px;color:#06c;\">�Ĵ����������Ƽ�</div>");
	document.writeln("<ul style=\"float:left;\">");
	document.writeln("<li style=\"float:left;padding-left: 32px;width: 295px; text-align: center;\"><a target=\"_blank\" rel=\"nofollow\" href=\"//www.57go.com/zhuanti/jiuzaigou/\"><img src=\"//www.tianqi.com/static/img/ly_jiuzhaigou_1.jpg\" width=\"295\" height=\"165\"><b style=\"color:#06c;\">��կ������</b></a></li>");
	document.writeln("<li style=\"float:right;padding-left: 40px;width: 295px; text-align: center;\"><a target=\"_blank\" rel=\"nofollow\" href=\"//www.57go.com/zhuanti/daocheng/\"><img src=\"//www.tianqi.com/static/img/ly_sichuanjingdian_1.jpg\" width=\"295\" height=\"165\"><b style=\"color:#06c;\">�����Ƕ�����</b></a></li>");
	document.writeln("</ul>");
	document.writeln("</div>");
	
	document.writeln("<div style=\"padding-top:6px; display:block; overflow:hidden;clear:both\"><\/div>");
	*/
}

//ָ�����ز���ʾ�Ĺ��
function index_city_xizang(){
	document.writeln("<div style=\"float:left;padding-left: 15px;\">");
	document.writeln("<a target=\"_blank\" rel=\"nofollow\" href=\"//www.57go.com/zhuanti/chuanzhangxian/\"><img src=\"//www.tianqi.com/static/img/ly_xizang_2.jpg\" width=\"670\" height=\"142\"><\/a>");	
	document.writeln("</div>");
	document.writeln("<div style=\"padding-top:6px; display:block; overflow:hidden;clear:both\"><\/div>");
}

//��ʷҳ��ָ�������ز���ʾ�Ĺ��
function index_city_daocheng(){
	/*
	document.writeln("<div style=\"float:left;padding-left: 15px;\">");
	document.writeln("<a target=\"_blank\" rel=\"nofollow\" href=\"//www.57go.com/zhuanti/daocheng/\"><img src=\"//www.tianqi.com/static/img/ly_sichuanjingdian_2.jpg\" width=\"670\" height=\"142\"><\/a>");	
	document.writeln("</div>");
	document.writeln("<div style=\"padding-top:6px; display:block; overflow:hidden;clear:both\"><\/div>");
	*/
}

//ָ�����ǽ��졢3�졢7�졢10�졢15�����ʾ�Ĺ��
function head_01_sanya(){
	document.writeln("<a target=\"_blank\" href=\"//www.syfw.com/?tianqi\"><img src=\"//www.tianqi.com/static/js/images/ad.jpg\" width=\"960\" height=\"60\"><\/a>");	
}

//ָ��Խ�ϲ���ʾ�Ĺ��
function world_vietnam(){
	document.writeln("<a href=\"//www.zouba123.com\" target=\"_blank\"><img src=\"//www.tianqi.com/images/vietnam.jpg\" alt=\"Խ������\"><\/a>");
}

//ָ�����ڲ���ʾ�Ĺ��
function index_city_haikou(){

}
//===================================================================================
function bdshare(){
	document.writeln("<!-- Baidu Button BEGIN baidu -->");
	document.writeln("<div id=\"bdshare\" class=\"bdshare_t bds_tools get-codes-bdshare\">");
	document.writeln("<span style=\"display: block;font-family: '����',Arial;height:26px; line-height:26px;float: left;cursor: pointer;padding-left:5px;\">������</span>");
	document.writeln("<a class=\"bds_qzone\"></a>");
	document.writeln("<a class=\"bds_tqq\"></a>");
	document.writeln("<a class=\"bds_tsina\"></a>");          
	document.writeln("<a class=\"bds_renren\"></a>");
	document.writeln("<a class=\"bds_t163\"></a>");
	document.writeln("<a class=\"shareCount\"></a>");
	document.writeln("</div>");
	document.writeln("<!-- Baidu Button END -->");
}
function bigbdshare(){
	document.writeln("<div id=\"bdshare\" class=\"bdshare_t bds_tools get-codes-bdshare\">");
	document.writeln("<span style=\"display: block;font-family: '����',Arial;height: 16px;float: left;cursor: pointer;padding-top: 8px;padding-bottom: 3px;padding-left: 22px;\">������</span>");
	document.writeln("<!--5--><!-- JiaThis Button BEGIN -->");
	document.writeln("<div class=\"jiathis_style_32x32\">");
	document.writeln("<a class=\"jiathis_button_qzone\"></a>");
	document.writeln("<a class=\"jiathis_button_tsina\"></a>");
	document.writeln("<a class=\"jiathis_button_tqq\"></a>");
	document.writeln("<a class=\"jiathis_button_renren\"></a>");
	document.writeln("<a class=\"jiathis_button_kaixin001\"></a>");
	document.writeln("<a class=\"jiathis_counter_style\"></a>");
	document.writeln("</div>");
	document.writeln("<script type=\"text/javascript\" src=\"//v3.jiathis.com/code/jia.js?uid=1357718534512528&uid=1357718534512528\" charset=\"utf-8\"></script>");
	document.writeln("<!-- JiaThis Button END -->");
	document.writeln("</div>");
}

function index_021(){
	
}

function index_01(){
	
	/*	���� 2016.11.23
	document.writeln('<iframe src="//www.tianqi.com/static/gg/top_xingzuo.html" width="960" height="110" align="center,center" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" style="border:0; vertical-align:bottom;margin:0;" allowtransparency="true"></iframe>');
*/


/*	
	//document.writeln("<script type=\'text/javascript\'>");
//document.writeln("    /*tianqi����ҳ960*90 ������ 2016/8/9*");
//document.writeln("    var cpro_id = \'u2728064\';");
//document.writeln("</script>");
//document.writeln("<script type=\'text/javascript\' src=\'//cpro.baidustatic.com/cpro/ui/c.js\'></script>");
*/
}
function index_b03(){
	document.writeln("<a href=\"//www.weaoo.com\" target=\"_blank\"><img src=\"http:\/\/www.tianqi.com\/static\/img\/weaoo.gif\"><\/a>");
	document.writeln("<div style=\"padding-top:10px; display:block; overflow:hidden;clear:both\"><\/div>");
}
function index_05(){
	/*�ٶ�1210*/
	document.writeln("<script type=\'text/javascript\'>");
document.writeln("    /*tianqi��ҳ250*250 ������ 2016/8/9*/");
document.writeln("    var cpro_id = \'u2727466\';");
document.writeln("</script>");
document.writeln("<script type=\'text/javascript\' src=\'//cpro.baidustatic.com/cpro/ui/c.js\'></script>");
}
function index_08b(){
	document.writeln("<script type=\'text/javascript\'>");
document.writeln("    /*tianqi����ҳ700*90 ������ 2016/8/9*/");
document.writeln("    var cpro_id = \'u2727474\';");
document.writeln("</script>	");
document.writeln("<script type=\'text/javascript\' src=\'//cpro.baidustatic.com/cpro/ui/c.js\'></script>");
}
function index_015(){
	document.writeln("<script type=\'text/javascript\'>");
document.writeln("    /*tianqi����ָ��468*60 ������ 2016/8/9*/");
document.writeln("    var cpro_id = \'u2727490\';");
document.writeln("</script>");
document.writeln("<script type=\'text/javascript\' src=\'//cpro.baidustatic.com/cpro/ui/c.js\'></script>");
}
function lishi_index_01(){
	document.writeln("<script type=\'text/javascript\'>");
document.writeln("    /*tianqi ��ʷ960*90 ������ 2016/8/9*/");
document.writeln("    var cpro_id = \'u2727733\';");
document.writeln("</script>");
document.writeln("<script type=\'text/javascript\' src=\'//cpro.baidustatic.com/cpro/ui/c.js\'></script>");
}
function weilaitianqi_01(){
	document.writeln("<script type=\'text/javascript\'>");
document.writeln("    /*tianqiδ��15���960*90 ������ 2016/8/9*/");
document.writeln("    var cpro_id = \'u2727758\';");
document.writeln("</script>");
document.writeln("<script type=\'text/javascript\' src=\'//cpro.baidustatic.com/cpro/ui/c.js\'></script>");
}
function footer_gg01(){
	//document.writeln('<iframe src="//www.tianqi.com/static/test0929.html" width="960" height="60" align="center,center" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" style="border:0; vertical-align:bottom;margin:0;" allowtransparency="true"></iframe>');
	//document.writeln("<div style=\"margin-left:auto; margin-right:auto; width:960px;\">");
	//document.writeln("<div style=\"height:5px; display:block; overflow:hidden;clear:both;\"></div>");
	//document.writeln("<script src=\"//www.yokaunion.com/page/s.php?s=185&w=960&h=60\"></script>");
	//document.writeln("</div>");	
}
function bottom_gg(){
	/*
	var a=window.location.href;
	a = a.split(".")[0];
	a = a.split("//")[1];
	if(a!='lishi'){
		//document.writeln('<iframe src="//www.tianqi.com/static/test0928.html" width="960" height="60" align="center,center" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" style="border:0; vertical-align:bottom;margin:0;" allowtransparency="true"></iframe>');
		//document.writeln("<div style=\"height:2px; display:block; overflow:hidden;clear:both\"></div>");
		//document.writeln("<script type=\"text/javascript\" src=\"//www.yidian321.com/yi/tianqiad.js\"></script>");
		//document.writeln("<div style=\"clear:both\"></div>");
	}
	*/
}
function index_zthome(){
	document.writeln("<a href=\"//www.tianqi.com/zhuanti/wumai/\" target=\"_blank\"><img src=\"//www.tianqi.com/img/wumaizhuanti.gif\" alt=\"������Σ��\"></a>");
}
function index_02(){
	
}
function index_box02(){
	
}
function index_box03(){
	
}
function index_03(){

}
function index_04(){

}

function index_06(){

}
function index_07(){

}
function index_08(){

}
function index_08a(){
	
}

function index_09(){

}

function index_010(){

}

function index_011(){

}
function index_012(){

}
function index_014(){

}
function index_015s(){

}

function index_016(){

}
function but_footer(){

}
function but_footer212(){
	
}
function gywm_04(){

}
function view_news_04(){

}
function chengshi_f(){//���и���

}
function shuangpiao_02(){

}
function day71015_01(){

}
function youxia_f(){

}



