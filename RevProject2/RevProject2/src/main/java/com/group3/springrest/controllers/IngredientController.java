package com.group3.springrest.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.group3.springrest.exceptions.ResourceNotFoundException;
import com.group3.springrest.models.Ingredients;
import com.group3.springrest.models.Users;
import com.group3.springrest.repository.IngredientRepository;

@CrossOrigin(origins = "*")
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
	
	@GetMapping("/{ingredient_name}")
	public ResponseEntity <List<Ingredients>> findByIngredientName(@PathVariable("ingredient_name") String ingredient_name ){
		List<Ingredients> all = ingredientRepository.findAll();
		List<Ingredients> filtered = new ArrayList<Ingredients>();
		for (Ingredients value: all) {
			if (value.getIngredientName().equals(ingredient_name)) {
				filtered.add(value);
			} 
			
		}
		
		return new ResponseEntity <List<Ingredients>>(filtered, HttpStatus.OK);
	}
	
//	@GetMapping("/ingredients/{name}")
//	public ResponseEntity<Ingredients> getIngredientByID(@PathVariable(value = "ingredient_name") String ingredientName)
//	throws ResourceNotFoundException {
//		List <Ingredients> ingredient = ingredientRepository.findByName(ingredientName)
//		.orElseThrow(() -> new ResourceNotFoundException ("Ingredient not found for this name :: " + ingredientName));
//	return ResponseEntity.ok().body(ingredient);
//	}

//	@PutMapping("/ingredients/{id}")
//	public ResponseEntity<Ingredients> updateIngredients(@PathVariable(value = "ingredient_id") long ingredientId,
//											@Valid @RequestBody Ingredients ingredientDetails) throws ResourceNotFoundException {
//		Ingredients ingredient = ingredientRepository.findById(ingredientId)
//		.orElseThrow(() -> new ResourceNotFoundException ("Ingredient not found for this id :: " + ingredientId));
//		
//		ingredient.setIngredientName(ingredientDetails.getIngredientName());
//		ingredient.setAmount(ingredientDetails.getAmount());
//		final Ingredients updateIngredient = ingredientRepository.save(ingredient);
//		return ResponseEntity.ok(updateIngredient);
//		
//	}
//	@GetMapping("/ingredients/{ingredient_name}")
//	public List<Ingredients> findByIngredientNameContaining(@PathVariable (value = "ingredient_name") String ingredientName) throws ResourceNotFoundException {
//		//orElseThrow(() -> new ResourceNotFoundException ("Ingredient not found for this name :: " + ingredientName));
//		return ingredientRepository.findByIngredientNameContaining(ingredientName);
//		
//	}
}
