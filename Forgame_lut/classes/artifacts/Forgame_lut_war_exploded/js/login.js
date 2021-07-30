function checkUser () {
	var username = document.getElementById("username3").value;
	if (username.length < 3 || username.length > 12 || username == "") {
		document.getElementById("tishi_user").innerHTML = "<font color='red'>账号格式错误</font>"
		return false;
	}
	document.getElementById("tishi_user").innerHTML="<font color='green'>格式正确</font>";
	return true;
}

function checkPwd () {
	var password = document.getElementById("password3").value;
	if (isNaN(password) || password == "") {
		document.getElementById("tishi_pwd").innerHTML = "<font color='red'>密码格式错误且只能为数字</font>";
		return false;		
	}
	document.getElementById("tishi_pwd").innerHTML = "<font color='green'>格式正确</font>";
	return true;
}
function checkAll () {
	if (checkUser() == true && checkPwd() == true) {
		return true;
	}
	return false;
}