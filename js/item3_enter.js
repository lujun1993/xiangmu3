function BorderChange(a,b,color){
	if(color==1){
		return $(a).css("border","1px #af1515 solid")&&$(a).css("border-right","none")&&
		$(b).css("border","1px #af1515 solid")&&$(a).find("i").css("color","#af1515");
	}
	else if(color==0){
		return $(a).css("border","1px green solid")&&$(a).css("border-right","none")&&
		$(b).css("border","1px green solid")&&$(a).find("i").css("color","green");
	}	
}

function checkUsername(){
	var username=$("#userName").val();
	if(username==""){
		BorderChange(".left_user","#userName",1);
		$(".user_name>p").html("用户名为必填项").css("color","#af1515");
		return false;
	}
	else{
		for(var index in localStorage){
			if(index==username){
				BorderChange(".left_user","#userName",0);
				$(".user_name>p").html("用户名填写成功").css("color","green");
				return true;
			}
		}
		BorderChange(".left_user","#userName",1);
		$(".user_name>p").html("该用户不存在").css("color","#af1515");
		return false;
	}
	
}

function checkPassword(){
	var setpassword=$("#setPassword").val();
	if(setpassword==""){
		BorderChange(".left_pass","#setPassword",1);
		$(".set_password>p").html("密码为必填项").css("color","#af1515");
		return false;
	}
	else{
		if(localStorage[$("#userName").val()]==setpassword){
			BorderChange(".left_pass","#setPassword",0);
			$(".set_password>p").html("密码填写成功").css("color","green");
			return true;
		}
		else{
			BorderChange(".left_pass","#setPassword",1);
			$(".set_password>p").html("密码错误").css("color","#af1515");
			return false;
		}	
	}
}

var swiper=new Swiper(".swiper-container",{
});
$("#changePic").click(function(){
		swiper.slideTo(swiper.activeIndex+1,"0.5s");
	});

// 实现轮播图验证码
function checkVerify(){
	var getverify=$("#getVerify").val();
	var regpic=[/4[p][s][e]/i,/[j][g][m][j]/i,/[m]8[k]2/i,/[s][m][w][m]/i,/[u][w][v]6/i,
	/3[n]3[d]/i,/[d][w][s][e]/i,/[s][r][k][[e]/i,/[t][s][k][h]/i];//将轮播正则打包成数组。
	if(getverify==""){
		$(".selectpic").css("border","1px #af1515 solid").css("border-left","none");
		$(".verify input").css("border","1px #af1515 solid");
		$(".re_confirm>p").html("验证码为必填项").css("color","#af1515");
		return false;
	}
	else{
		if(regpic[swiper.activeIndex].test(getverify)){//不等于空值时，采用当前页面对应索引的正则对输入内容进行判断。
			$(".selectpic").css("border","1px green solid").css("border-left","none");
			$(".verify input").css("border","1px green solid");
			$(".re_confirm>p").html("验证码填写成功").css("color","green");
			return true;
		}
		else{
			$(".selectpic").css("border","1px #af1515 solid").css("border-left","none");
			$(".verify input").css("border","1px #af1515 solid");
			$(".re_confirm>p").html("验证码填写失败").css("color","#af1515");
			return false;
		}
	}				
}

function setEnter(){//将登录的账号存储到localStorage.
		localStorage.setItem("UserName",$("#userName").val());
		alert("登录成功！");
}

function checkInput(){
	if(checkUsername()&&checkPassword()&&checkVerify()){
		setEnter();
		return true;
	}
	else{
		return false;
	}
}
