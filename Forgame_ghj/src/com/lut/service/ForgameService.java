package com.lut.service;

import com.lut.entity.User;

import java.util.List;

public interface ForgameService {
		//账号密码校验
		public List<User> StuLogin(String username, String password);
		/**
		 * 注册的实现方法
		 * @param user
		 * @return
		 */
		public int reg(User user);
}
