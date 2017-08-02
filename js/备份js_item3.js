	if(dochange=='btndo'){
		if(verifynum>=100000&&verifynum<=999999){
			verifynum="";
		}
		starTime();
	}
	else if(dochange=='inputdo'){
		if(verifynum>=100000&&verifynum<=999999){
			$("#verifyBtn").html("重新获取");
			clearInterval(timer);
			
		}
		else{
			starTime();
		}				
	}
}

function checkVerify(){
	var verifynum=$("#verifyNumber").val();
	if(verifynum<100000||verifynum>999999){
		if(verifynum==""){
			$(".get_verify>p").html("验证码为必填项").css("color","#af1515");
		}
		else{
			$(".get_verify>p").html("验证码错误").css("color","#af1515");
		}
		BorderChange(".left_ver","#verifyNumber",1);
		return false;
	}
	else{
		BorderChange(".left_ver","#verifyNumber",0);
		$(".get_verify>p").html("验证码填写成功").css("color","green");
		getVerify('inputdo');
		return true;
	}
}