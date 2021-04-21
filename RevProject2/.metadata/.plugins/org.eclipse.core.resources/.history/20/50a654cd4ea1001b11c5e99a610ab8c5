package com.group3.springrest.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group3.springrest.exceptions.ResourceNotFoundException;
import com.group3.springrest.models.Ingredients;
import com.group3.springrest.repository.IngredientRepository;

@RestController
@RequestMapping("api/i1")
public class IngredientController {
	
	@Autowired
	private IngredientRepository ingredientRepository;
	
	//http://localhost:9095/api/i1/ingredients
	@GetMapping("/ingredients")
	public List<Ingredients> getAllIngredients() {
		return ingredientRepository.findAll();
	}
	
	@PostMapping("/ingredients")
	public Ingredients createIngredient(@Valid @RequestBody Ingredients ingredient) {
		return ingredientRepository.save(ingredient);
	}
	
	@GetMapping("/ingredients/{id}")
	public ResponseEntity<Ingredients> getIngredientByID(@PathVariable(value = "ingredient_id") long ingredient_id)
	throws ResourceNotFoundException {
		Ingredients ingredient = ingredientRepository.findById(ingredient_id)
		.orElseThrow(() -> new ResourceNotFoundException ("Ingredient not found for this id :: " + ingredient_id));
	return ResponseEntity.ok().body(ingredient);
	}

	@PutMapping("/ingredients/{id}")
	public ResponseEntity<Ingredients> updateIngredients(@PathVariable(value = "ingredient_id") long ingredient_id,
											@Valid @RequestBody Ingredients ingredientDetails) throws ResourceNotFoundException {
		Ingredients ingredient = ingredientRepository.findById(ingredient_id)
		.orElseThrow(() -> new ResourceNotFoundException ("Ingredient not found for this id :: " + ingredient_id));
		
		ingredient.setIngredient_name(ingredientDetails.getIngredient_name());
		ingredient.setAmount(ingredientDetails.getAmount());
		final Ingredients updateIngredient = ingredientRepository.save(ingredient);
		return ResponseEntity.ok(updateIngredient);
		
	}
}
