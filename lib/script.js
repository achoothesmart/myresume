//window.onscroll=scrollFn;
//document.getElementById('note').onKeyDown=EditorKey;
//window.setInterval(function(){timeBeing()},10);

$(document).ready(function(e) {
	
	$('#gotop').fadeOut(0);
	$('#footer').fadeOut(0);
	$('#headSmall').fadeOut(0);
	
	var ht=window.innerHeight-70;
	//document.getElementById('page').style="height:"+ht;
    
	$("#gotop").click(function()
	{
		$("html, body").animate({ scrollTop: -$(document).height()  }, 1000);
	}
	);
	
	$('#menu').click(function()
	{
		if(document.getElementById('sidePane').offsetLeft < 0)
		{
			$('#sidePane').animate({left:'0px'},500);
		}
		else
		{
			$('#sidePane').animate({left:'-200px'},500);
		}
	}
	);
	
	$('#page').click(function()
	{
		$('#sidePane').animate({left:'-200px'},500);
	}
	);
	
	$(document).scroll(function()
	{
		if(window.scrollY >=70)
		{
			$('#headSmall').fadeIn(700);
		}
		else
		{
			$('#headSmall').fadeOut(700);
		}
		
		
		if(window.scrollY >=70)
		{
			//document.getElementById('gotop').style="visibility:visible";
			$('#gotop').fadeIn(700);
			
		}
		else
		{
			//document.getElementById('gotop').style="visibility:hidden";
			$('#gotop').fadeOut(700);
			
		}
		
		
			//$('#gotop').animate({opacity:'1'});
		
		var diff=window.innerHeight-window.scrollY;
		
		if(window.scrollY >= diff)
		{ //reached bottom
			$('#footer').fadeIn(300);
		}
		else
		{
			$('#footer').fadeOut(300);
		}
	});
	
}); 

//JQuery ends


/*
function timeBeing()
{
	var HS_top=document.getElementById('headSmall').offsetTop;
	
	if(window.scrollY>=80 && HS_top<0)
	{
		HS_top++;
		
	}
	
	document.getElementById('headSmall').style.top=HS_top;
	
	if(window.scrollY<80 && HS_top>-30)
	{
		HS_top--;
		document.getElementById('headSmall').style.top=HS_top;
	}
	
	var Page_top=document.getElementById('page').offsetTop;
	var diff=window.innerHeight-window.scrollY;
	
	//document.getElementById('gotop').innerHTML="top " + HS_top  + "<br>scrolly " + window.scrollY + "<br>diff " + diff;
	
	if(window.scrollY >=70)
	{
		document.getElementById('gotop').style="visibility:visible";
	}
	else
	{
		document.getElementById('gotop').style="visibility:hidden";
	}
	//var Footer_top=document.getElementById('footer').offsetTop;
	if(window.scrollY >= diff)
	{ // reached bottom
		document.getElementById('footer').style.bottom=0;
	}
	else
		document.getElementById('footer').style.bottom=-30;
}
*/
