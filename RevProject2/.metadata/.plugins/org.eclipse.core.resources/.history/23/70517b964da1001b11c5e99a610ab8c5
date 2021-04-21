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
import com.group3.springrest.models.Favorites;
import com.group3.springrest.repository.FavoritesRepository;

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
	
	@PostMapping("/favorites")
	public Favorites createFavorite(@Valid @RequestBody Favorites favorite) {
		return favoritesRepository.save(favorite);
	}

	@GetMapping("/favorites/{id}")
	public ResponseEntity<Favorites> getFavoritesByID(@PathVariable(value = "favorites_id") long favorites_id)
	throws ResourceNotFoundException {
		Favorites favorite = favoritesRepository.findById(favorites_id)
		.orElseThrow(() -> new ResourceNotFoundException ("Favorite not found for this id :: " + favorites_id));
	return ResponseEntity.ok().body(favorite);
	}
	
	@PutMapping("/favorites/{id}")
	public ResponseEntity<Favorites> updateFavorites(@PathVariable(value = "favorites_id") long favorites_id,
											@Valid @RequestBody Favorites favoritesDetails) throws ResourceNotFoundException {
		Favorites favorite = favoritesRepository.findById(favorites_id)
		.orElseThrow(() -> new ResourceNotFoundException ("Favorite not found for this id :: " + favorites_id));
		
		favorite.setRecipe_name(favoritesDetails.getRecipe_name());
		final Favorites updateFavorites = favoritesRepository.save(favorite);
		return ResponseEntity.ok(updateFavorites);
		
	}
}
