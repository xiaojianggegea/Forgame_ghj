package com.lut.dao.impl;

import java.util.List;

import com.lut.dao.ForgameDao;
import com.lut.entity.User;
import com.lut.util.DBUtil;

public class ForgameDaoImpl implements ForgameDao{
	
	
	@Override
	public int inster(User record) {
		// TODO Auto-generated method stub
		String sql= "insert into user value(?,?,?)";
		int n=DBUtil.myUpdate(sql, record.getId(),record.getName(),record.getPassword() );
		return n;
	}

	@Override
	public List<User> selectByUsernameAndPassword(String username, String password) {
		String sql = "select * from user where name=? and password=?";
		List<User> list = DBUtil.myQuery(sql, User.class, username, password);
		return list;
	}	
}
