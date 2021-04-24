package com.lut.dao;

import java.util.List;

import com.lut.entity.User;

public interface ForgameDao {
	public List<User> selectByUsernameAndPassword(String username,String password);
	public int inster(User record);
}
