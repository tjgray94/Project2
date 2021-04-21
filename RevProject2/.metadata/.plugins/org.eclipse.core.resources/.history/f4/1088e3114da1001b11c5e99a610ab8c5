package com.group3.springrest.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Favorites")
public class Favorites {
	
	private long favorites_id;
	private String recipe_name;
	
	public Favorites() {
		
	}
	
	public Favorites(long favorites_id, String recipe_name) {
		this.favorites_id = favorites_id;
		this.recipe_name = recipe_name;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getFavorites_id() {
		return favorites_id;
	}

	public void setFavorites_id(long favorites_id) {
		this.favorites_id = favorites_id;
	}

	@Column(name = "recipe_name", nullable = false)
	public String getRecipe_name() {
		return recipe_name;
	}

	public void setRecipe_name(String recipe_name) {
		this.recipe_name = recipe_name;
	}
	
	

}
