package com.lut.service;

import java.util.List;

import com.lut.entity.User;
		/**
		*登陆方法的实现
		*/
public interface ForgameService {
		public User StuLogin(String username, String password);
		/**
		 * 注册方法的实现
		 * @param user
		 * @return
		 */
		public int reg(User user);
}
