

$("#province").selectbox();
$("#city").selectbox();
$("#zone").selectbox();

var week; 
if(new Date().getDay()==0) week="������"
if(new Date().getDay()==1) week="����һ"
if(new Date().getDay()==2) week="���ڶ�" 
if(new Date().getDay()==3) week="������"
if(new Date().getDay()==4) week="������"
if(new Date().getDay()==5) week="������"
if(new Date().getDay()==6) week="������"
document.write(week);


function idemo(){
	var speed=40; //����Խ���ٶ�Խ��
			var tab=document.getElementById("demo_left");
			var tab1=document.getElementById("demo1_left");
			var tab2=document.getElementById("demo2_left");
			tab2.innerHTML=tab1.innerHTML;
			function Marquee(){
			if(tab2.offsetWidth-tab.scrollLeft<=0)
			tab.scrollLeft-=tab1.offsetWidth
			else{
			tab.scrollLeft++;
			}
			}
			var MyMar=setInterval(Marquee,speed);
			tab.onmouseover=function() {clearInterval(MyMar)};
			tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};
	
	}


$(document).ready(function(){		
	$("#tq_nav").hover(function(){
	$("#tq_nav").removeClass("current01");
	$(".tq_boxnav").hide();  
	});
	
	$("#tq_nav").mouseover(function(){
	$("#tq_nav").addClass("current01");
	$(".tq_boxnav").show();
	});
})
