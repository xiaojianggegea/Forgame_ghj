package com.lut.dao;

import com.lut.entity.User;

import java.util.List;

public interface ForgameDao {
	public List<User> Query();
	//校验登录信息
	public List<User> StuLogin(String username, String password);
	public int inster(User record);
}
