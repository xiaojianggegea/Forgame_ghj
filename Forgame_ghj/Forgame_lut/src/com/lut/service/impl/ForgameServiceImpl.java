package com.lut.service.impl;

import java.util.List;

import com.lut.dao.ForgameDao;
import com.lut.dao.impl.ForgameDaoImpl;
import com.lut.entity.User;
import com.lut.service.ForgameService;

public class ForgameServiceImpl implements ForgameService{
	ForgameDao fd = new ForgameDaoImpl();

	public User StuLogin(String username, String password) {
		List<User> list= fd.selectByUsernameAndPassword(username, password);
		if(list.size()>0) {
			return list.get(0);
			}
		return null;
	}

	@Override
	public int reg(User user) {
		// TODO Auto-generated method stub
		return fd.inster(user);
	}
	
}
