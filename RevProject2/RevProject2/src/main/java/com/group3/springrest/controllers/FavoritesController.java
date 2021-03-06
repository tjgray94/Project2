package com.group3.springrest.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group3.springrest.exceptions.ResourceNotFoundException;
import com.group3.springrest.models.Favorites;
import com.group3.springrest.models.Ingredients;
import com.group3.springrest.models.Users;
import com.group3.springrest.repository.FavoritesRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/f1")
public class FavoritesController {
	
	@Autowired
	private FavoritesRepository favoritesRepository;
	
	//http://localhost:9095/api/f1/favorites
	@GetMapping("/favorites")
	public List<Favorites> getAllFavorites() {
		return favoritesRepository.findAll();
	}
	
	@PostMapping("/addfavorites/{username}/{recipeName}")
	public Favorites addFavorite(@PathVariable ("username") String username,
								@PathVariable ("recipeName") String recipeName) {
//		List<Favorites> all = favoritesRepository.findAll();
//		List<Favorites> filtered = new ArrayList<Favorites>();
//		for (Favorites value: all) {
//			if (value.getUsername().equals())
//		}
		
		return favoritesRepository.addFavorites(username, recipeName);
	}
	
//	@GetMapping("/{ingredient_name}")
//	public ResponseEntity <List<Ingredients>> findByIngredientName(@PathVariable("ingredient_name") String ingredient_name ){
//		List<Ingredients> all = ingredientRepository.findAll();
//		List<Ingredients> filtered = new ArrayList<Ingredients>();
//		for (Ingredients value: all) {
//			if (value.getIngredientName().equals(ingredient_name)) {
//				filtered.add(value);
//			} 
//			
//		}
//		
//		return new ResponseEntity <List<Ingredients>>(filtered, HttpStatus.OK);
//	}

//	@GetMapping("/favorites/{username}")
//	public ResponseEntity<Favorites> getFavoritesByUsername(@PathVariable(value = "username") String username)
//	throws ResourceNotFoundException {
//		Favorites favorite = favoritesRepository.findByUsername(username)
//		//.orElseThrow(() -> new ResourceNotFoundException ("Favorite not found for this id :: " + username));
//	return ResponseEntity.ok().body(favorite);
//	}
	
	
	
	@GetMapping("/favorites/{username}")
	public List<Favorites> findByUsername(@PathVariable (value = "username") String username) throws ResourceNotFoundException {
		//orElseThrow(() -> new ResourceNotFoundException ("Ingredient not found for this name :: " + ingredientName));
		return favoritesRepository.findByUsername(username);
	}	
}
