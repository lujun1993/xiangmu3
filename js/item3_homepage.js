//设置轮播图
	var swiper=new Swiper(".swiper-container",{
		pagination:".swiper-pagination",
		paginationClickable:true,
		direction:'vertical',
		mousewheelControl:true,
		onInit: function(swiper){ //swiper初始化
			swiperAnimateCache(swiper); //隐藏动画元素
			swiperAnimate(swiper); 	//初始化完成，开始动画
		},
		onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper);	//每页切换完毕开始当前动画
			// 切换页面改变导航栏的背景颜色、字体颜色以及背景跳动。
			$(".nav").hide();
			if(swiper.activeIndex!=0){
				$(".nav").css("background","#222");
				$("li,.enter_register,a").css("color","white");
				
				$(".nav").slideDown(200);	

			}
			else if(swiper.activeIndex==0){
				$(".nav").css("background","white");
				$("li").css("color","#222");
				$(".enter_register,a").css("color","#af1515");
				$(".nav").slideDown(200);
	
			}
		}	
	});

	/*设置视频属性*/
	var n=0;
	$(".video").click(function(){
		if(n==0){				//点击视频页面，如果视频在播放，关闭视频。
			$(".video")[0].pause();
			n=1;
		}
		else if(n==1){			//点击视频页面，如果视频关闭，播放视频。
			$(".video")[0].play();
			n=0;
		}
	});

$(function(){
	if(localStorage.getItem("UserName")){//页面加载完将已有的账号自动登录
		$(".enter_register").empty();
		$(".enter_register").html("<p>"+localStorage.getItem("UserName")+"&nbsp"+"<span>退出</span></p>");
	}
	$(".enter_register span").click(function(){//退出当前的账号可以登录或注册
		$(".enter_register").empty();
		$(".enter_register").html("<a href='item3_enter.html'>登录</a>/<a href='item3_register.html'>注册</a>");
	});
});

	
