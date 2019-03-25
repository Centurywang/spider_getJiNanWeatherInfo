

$("#province").selectbox();
$("#city").selectbox();
$("#zone").selectbox();

var week; 
if(new Date().getDay()==0) week="星期日"
if(new Date().getDay()==1) week="星期一"
if(new Date().getDay()==2) week="星期二" 
if(new Date().getDay()==3) week="星期三"
if(new Date().getDay()==4) week="星期四"
if(new Date().getDay()==5) week="星期五"
if(new Date().getDay()==6) week="星期六"
document.write(week);


function idemo(){
	var speed=40; //数字越大速度越慢
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
