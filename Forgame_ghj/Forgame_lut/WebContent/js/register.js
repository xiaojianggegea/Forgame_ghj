			function checkUser() {
				var username = document.getElementsByClassName("username").value;
				if(username.length < 6 || username.length > 12 || username == "") {
					document.getElementById("tishi_user").innerHTML="<font color='red'>账号格式错误</font>";
					return false;
				}
				document.getElementById("tishi_user").innerHTML="<font color='green'>格式正确</font>";
				return true;
			}

			function checkPwd() {
				var password = document.getElementById("password").value;
				if(isNaN(password) || password == "") {
					document.getElementById("tishi_pwd").innerHTML="<font color='red'>密码格式错误且只能为数字</font>";
					return false;
				}
				document.getElementById("tishi_pwd").innerHTML="<font color='green'>格式正确</font>";
				return true;
			}

			function checkRpt() {
				var password = document.getElementById("password").value;
				var password1 = document.getElementById("password1").value;
				if(password == password1) {
					document.getElementById("tishi_rpt").innerHTML = "<font color='green'>两次密码相同</font>";
					document.getElementById("submit").disabled() = false;
				} else {
					document.getElementById("tishi_rpt").innerHTML = "<font color='red'>两次密码不相同</font>";
					document.getElementById("submit").disabled = true;
				}
			}

			function checkAll() {
				if(checkUser() == true && checkPwd() == true) {
					return true;
				}
				return false;
			}