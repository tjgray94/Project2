package com.group3.springrest.models;

import javax.persistence.*;

@Entity
@Table(name = "Users")
public class Users {
	
	private long user_id;
	private String fName;
	private String lName;
	private String email;
	private String username;
	private String pass_word;
	
	public Users() {
		
	}
	
	public Users(String fName, String lName, String email, String username) {
		this.fName = fName; 
		this.lName = lName;
		this.email = email;
		this.username = username;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getUser_id() {
		return user_id;
	}

	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}

	@Column(name = "fName", nullable = false)
	public String getfName() {
		return fName;
	}

	public void setfName(String fName) {
		this.fName = fName;
	}

	@Column(name = "lName", nullable = false)
	public String getlName() {
		return lName;
	}

	public void setlName(String lName) {
		this.lName = lName;
	}

	@Column(name = "email", nullable = false)
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Column(name = "username", nullable = false)
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Column(name = "pass_word", nullable = false)
	public String getPass_word() {
		return pass_word;
	}

	public void setPass_word(String pass_word) {
		this.pass_word = pass_word;
	}
	
}
