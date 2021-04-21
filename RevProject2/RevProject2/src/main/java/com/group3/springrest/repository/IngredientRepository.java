package com.group3.springrest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.group3.springrest.models.Ingredients;
import com.group3.springrest.models.Users;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredients, String> {
//	List<Ingredients> findByIngredientNameContaining(String ingredientName);
	@Query(value = "SELECT * FROM ingredients WHERE ingredient_name = ?1)", nativeQuery = true)
	Ingredients findByIngredientName(String ingredient_name);
}
