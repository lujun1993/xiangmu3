// 设置边框的颜色，根据传入的边框参数的颜色来改变边框的颜色。
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

//获取localStorage里面的key,看是否等于所申请的电话号码。
function jugePhone(num){
	for(var v in localStorage){
		if(v==num){
			return false;
		}		
	}
	return true;
}

//对输入的手机号码进行验证
function checkNumber(){
	var phonenum=$("#phoneNumber").val();
	var regPhonenum = /^[1]\d{10}$/;
	if(!regPhonenum.test(phonenum)){
		if(phonenum==""){
			$(".phone_number>p").html("手机号码为必填项").css("color","#af1515");
		}
		else{
			$(".phone_number>p").html("手机号必须是以1开头的11位数字").css("color","#af1515");	
		}
		BorderChange(".left_num","#phoneNumber",1);
		return false;
	}
	else{
		if(localStorage.length!=0){
			if(jugePhone(phonenum)==false){
				$(".phone_number>p").html("该号码已被注册").css("color","#af1515");
				return false;
			}
			else{
				BorderChange(".left_num","#phoneNumber",0);
				$(".phone_number>p").html("手机号码填写成功").css("color","green");
				return true;
			}
		}
		else{
			BorderChange(".left_num","#phoneNumber",0);
			$(".phone_number>p").html("手机号码填写成功").css("color","green");
			return true;
		}
		
	}
}

//点击获取验证码，开始倒计时。
var nums=["0","1","2","3","4","5","6","7","8","9","10","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function getVerify(){
	var random1=Math.floor(Math.random()*36);
	var random2=Math.floor(Math.random()*36);
	var random3=Math.floor(Math.random()*36);
	var random4=Math.floor(Math.random()*36);
	var random5=Math.floor(Math.random()*36);
	var random6=Math.floor(Math.random()*36);
	var str="";
	str=nums[random1]+nums[random2]+nums[random3]+nums[random4]+nums[random5]+nums[random6];
	$("#showverify").html(str);
	var n=59;
	var timer=setInterval(function(){
		var verifynum=$("#verifyNumber").val();
		if(verifynum==$("#showverify").html()){//当输入的验证码正确时，停止倒计时。
			clearInterval(timer);
			$("#verifyBtn").html("重新获取");
		}
		else{
			$("#verifyBtn").html(n+"s");
			n--;
			if(n<10&&n>=0){
				n="0"+n;
			}
			else if(n<0){
				clearInterval(timer);
				$("#verifyBtn").html("重新获取");//当倒计时完成时要重新获取！
			}
		}	
	},1000);
}

// 判断验证码是否输入正确

function checkVerify(){
	var verifynum=$("#verifyNumber").val();
	if(verifynum==""){
		BorderChange(".left_ver","#verifyNumber",1)
		$(".get_verify>p").html("验证码为必填项").css("color","#af1515");
		return false;
	}
	else{
		if(verifynum==$("#showverify").html()){
			BorderChange(".left_ver","#verifyNumber",0);
			$(".get_verify>p").html("验证码填写成功").css("color","green");
			return true;
		}
		else{
			$(".get_verify>p").html("验证码错误").css("color","#af1515");
			BorderChange(".left_ver","#verifyNumber",1);
			return false;
		}	
	}
}

// 验证密码是否输入正确
function checkPassword(){
	var password=$("#setPassword").val();
	var regPassword = /^[\da-zA—Z]{6,14}$/;
	if(!regPassword.test(password)){
		if(password==""){
			$(".password_setin>p").html("登录密码为必填项").css("color","#af1515");
		}
		else{
			$(".password_setin>p").html("密码由6至14位的数字或字母组成").css("color","#af1515");
		}
		BorderChange(".left_pass","#setPassword",1);
		return false;
	}
	else{
		BorderChange(".left_pass","#setPassword",0);
		$(".password_setin>p").html("密码填写成功").css("color","green");
		return true;
	}
}
//验证第二次输入的密码是否正确
function checkRePassword(){
	var repassword=$("#rePassword").val();
	if(repassword==$("#setPassword").val()){
		BorderChange(".left_repass","#rePassword",0);
		$(".reconfirm>p").html("确认密码填写成功").css("color","green");
		return true;
	}
	else{
		if(repassword==""){
			$(".reconfirm>p").html("确认密码为必填项").css("color","#af1515");
		}
		else{
			$(".reconfirm>p").html("密码输入不一致").css("color","#af1515");
		}
		BorderChange(".left_repass","#rePassword",1);
		return false;
	}
}

//设置密码的可见性
var m=0;
function Seepss(){
	if(m==0){
		$("#setPassword,#rePassword").attr("type","text");
		$(".eye>i").attr("class","icon iconfont icon-password-show");
		m=1;
	}
	else if(m==1){
		$("#setPassword,#rePassword").attr("type","password");
		$(".eye>i").attr("class","icon iconfont icon-mimayincang");
		m=0;
	}
}

function setlocal(){//注册成功时，将电话号码和密码以键值对的形式存储。
	localStorage.setItem($("#phoneNumber").val(),$("#setPassword").val());
	alert("注册成功，请登录！");
}

function checkInput(){
	if(checkNumber()&&checkVerify()&&checkPassword()&&checkRePassword()){
		setlocal();//调用存储键值对的函数
		return true;
	}
	else{
		return false;
	}
}