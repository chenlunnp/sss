var pic2 = $(".content_4_2 li"),

   
    
    pic2.eq(0).show().siblings().hide();
   
    
    
		
		 $(".prev_t_3").click(function(){
            	i--;
                if(i == -1){
                	i = 2;
                }
            	pic2.eq(i).fadeIn(300).siblings().fadeOut(300);
            	
            	
       });
       $(".next_t_3").click(function(){
            autoplay2();
       });
       
       var i=0;
        var timerr2 = setInterval(autoplay,3000);
    //核心向右运动函数
    function autoplay2(){
    	i++;
        if(i == 3){
        	i = 0
        }
    	pic2.eq(i).fadeIn(300).siblings().fadeOut(300);
    	
    }

    $(".photo_1_1,.prev_t").hover(function(){
    	clearInterval(timerr2);
    },function(){
    	// alert("111");
    	timerr2 = setInterval(autoplay2,3000);
    });