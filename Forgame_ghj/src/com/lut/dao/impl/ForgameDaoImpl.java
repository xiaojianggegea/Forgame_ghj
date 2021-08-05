package com.lut.dao.impl;

import com.lut.dao.ForgameDao;
import com.lut.entity.User;
import com.lut.util.DBUtil;

import java.util.List;

public class ForgameDaoImpl implements ForgameDao {
	public List<User> Query() {
		String sql = "select * from user";
		List<User> list = DBUtil.myQuery(sql, User.class);
		return list;
	}
	
	public List<User> StuLogin(String username, String password) {
		String sql = "select * from user where name=? and password=?";
		List<User> list = DBUtil.myQuery(sql, User.class, username, password);
		return list;
	}

	@Override
	public int inster(User record) {
		// TODO Auto-generated method stub
		String sql= sql = "insert into user value(?,?,?)";
		int n= DBUtil.myUpdate(sql, record.getId(),record.getName(),record.getPassword() );
		return n;
	}	
}
