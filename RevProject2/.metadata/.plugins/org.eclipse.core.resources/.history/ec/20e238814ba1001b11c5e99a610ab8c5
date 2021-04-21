package com.group3.springrest.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Ingredients")
public class Ingredients {
	
	private long ingredient_id;
	private String ingredient_name;
	private String amount;
	private long recipe_id;
	
	public Ingredients() {
		
	}
	
	public Ingredients(long ingredient_id, String ingredient_name, String amount, int recipe_id) {
		this.ingredient_id = ingredient_id; 
		this.ingredient_name = ingredient_name;
		this.amount = amount;
		this.recipe_id = recipe_id;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getIngredient_id() {
		return ingredient_id;
	}

	public void setIngredient_id(long ingredient_id) {
		this.ingredient_id = ingredient_id;
	}

	@Column(name = "ingredient_name", nullable = false)
	public String getIngredient_name() {
		return ingredient_name;
	}

	public void setIngredient_name(String ingredient_name) {
		this.ingredient_name = ingredient_name;
	}

	@Column(name = "amount", nullable = false)
	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	@Column(name = "recipe_id", nullable = false)
	public long getRecipe_id() {
		return recipe_id;
	}

	public void setRecipe_id(long recipe_id) {
		this.recipe_id = recipe_id;
	}
	
}
