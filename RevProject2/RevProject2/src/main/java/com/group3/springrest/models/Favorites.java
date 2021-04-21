package com.group3.springrest.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "favorites")
public class Favorites {
	
	private String username;
	private String recipeName;
	
	public Favorites() {
		
	}
	
	public Favorites(String username, String recipeName) {
		this.username = username;
		this.recipeName = recipeName;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Column(name = "recipeName", nullable = false)
	public String getRecipeName() {
		return recipeName;
	}

	public void setRecipeName(String recipeName) {
		this.recipeName = recipeName;
	}
	
	

}
