var pic1 = $(".cc_1 li"),

    pagesNode1 = $(".cc_2 li");
    
    pic.eq(0).show().siblings().hide();
    pagesNode1.eq(0).addClass("zzz"); 
    
    pagesNode1.each(function(index){
			var zzz1 =$(this);
			$(this).click(function(){
				zzz1.addClass("zzz").siblings().removeClass("zzz");
				var index =zzz1.index();
				pic1.eq(index).fadeIn(300).siblings().fadeOut(30);
			})
		}
		);
		
		 $(".prev_t_1").click(function(){
            	i--;
                if(i == -1){
                	i = 3;
                }
            	pic1.eq(i).fadeIn(300).siblings().fadeOut(300);
            	pagesNode1.eq(i).addClass("zzz").siblings().removeClass("zzz");  
            	
       });
       $(".next_t_1").click(function(){
            autoplay1();
       });
       
       var i=0;
        var timerr1 = setInterval(autoplay,3000);
    //核心向右运动函数
    function autoplay1(){
    	i++;
        if(i == 4){
        	i = 0
        }
    	pic1.eq(i).fadeIn(300).siblings().fadeOut(300);
    	pagesNode1.eq(i).addClass("zzz").siblings().removeClass("zzz");
    }

    $(".cc_1,.prev_t_1").hover(function(){
    	clearInterval(timerr1);
    },function(){
    	// alert("111");
    	timerr1 = setInterval(autoplay1,3000);
    });