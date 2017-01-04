var pic = $(".photo_1_1 li"),

    pagesNode = $(".photo_2_1 li");
    
    pic.eq(0).show().siblings().hide();
    pagesNode.eq(0).addClass("zzz"); 
    
    pagesNode.each(function(index){
			var zzz =$(this);
			$(this).click(function(){
				zzz.addClass("zzz").siblings().removeClass("zzz");
				var index =zzz.index();
				pic.eq(index).fadeIn(300).siblings().fadeOut(30);
			})
		}
		);
		
		 $(".prev_t").click(function(){
            	i--;
                if(i == -1){
                	i = 2;
                }
            	pic.eq(i).fadeIn(300).siblings().fadeOut(300);
            	pagesNode.eq(i).addClass("ssss").siblings().removeClass("ssss");  
            	
       });
       $(".next_t").click(function(){
            autoplay();
       });
       
       var i=0;
        var timerr = setInterval("autoplay",3000);
    //核心向右运动函数
    function autoplay(){
    	i++;
        if(i == 3){
        	i = 0
        }
    	pic.eq(i).fadeIn(300).siblings().fadeOut(300);
    	pagesNode.eq(i).addClass("zzz").siblings().removeClass("zzz");
    }

    $(".photo_1_1,.prev_t").hover(function(){
    	clearInterval(timerr);
    },function(){
    	// alert("111");
    	timerr = setInterval("autoplay",3000);
    });
	

    

//左右轮播
 var w = $(window).width();
 var w_content = $(".content_4_2 ul");
 var w_prev = $('.prev_t_3');
 var w_next = $('.next_t_3');
 
 
 var contance = 0;
 var cont = 0;
 
// 判断屏幕大小
if(w > 1023){
	moveto = 944;
	maxcont = 2;
}else if(w > 734 && w < 1023){
	moveto = 712;
	maxcont = 3;
}else if(w > 377 && w <734){
	moveto = 259;
	maxcont = 11;
}else if(w < 376){
	moveto = 239;
	maxcont = 11;
}

w_next.click(function(){
	if(cont < maxcont){
	  contance = contance -moveto;
	   w_content.animate({left:contance+"px"},1000);
	  cont++;
	}
})

 w_prev.click(function(){
 	if(cont > 0 ){
	  contance = contance + moveto;
	   w_content.animate({left:contance+"px"},1000);
	  cont--;
	}
 })

$(".made1 li").each(function(index){
	var df=$(this);
	df.hover(function(){
		
		var qqq=df.index();
		$(".made").eq(qqq).fadeIn(300).siblings().fadeOut(30);
	})
})


$("#jian").hide();
$(".made1 li").mouseenter(function(){
	$("#jian").show()
});
$('#jian').mouseleave(function(){
	$("#jian").hide()
});