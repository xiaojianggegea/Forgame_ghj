function checkUser() {
	var username = document.getElementById("username").value;
	var img = document.getElementById("tishi_user");
	if (username == "") {
		alert("账号不能为空");
		img.src = "images/cuowu.png";
		return false;
	} else if (username.length < 2 || username.length > 6) {
		alert("账号格式错误");
		img.src = "images/cuowu.png";
		return false;
	} else {
		img.src = "images/icon-test.png";
		return true;
	}
}

function checkPwd() {
	var password = document.getElementById("password").value;
	var img = document.getElementById("tishi_pwd");
	if (password == "") {
		alert("密码不能为空");
		img.src = "images/cuowu.png";
		return false;
	}else if(isNaN(password) || password.length <3 || password.length > 12){
		alert("密码只能是2~12位的数字!");
		img.src = "images/cuowu.png";
		return false;
	}else{
		img.src = "images/icon-test.png";
		return true;
	}
}

function checkRpt() {
	var password = document.getElementById("password").value;
	var password1 = document.getElementById("password1").value;
	var img = document.getElementById("tishi_rpt");
	if (password1 == "" ) {
		alert("密码不能为空！")
		img.src = "images/cuowu.png";
		return false;
	} else if(password == password1){
		img.src = "images/icon-test.png";
		return true;
	}else{
		img.src = "images/cuowu.png";
		return false;
	}
}

function checkAll() {
	var img = document.getElementById("sub");
	if (checkUser() == true && checkPwd() == true) {
		return true;
	}
	return false;
}
