package com.group3.springrest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.group3.springrest.models.Favorites;
import com.group3.springrest.models.Ingredients;

@Repository
public interface FavoritesRepository extends JpaRepository<Favorites, Long> {
	
	@Query(value = "INSERT INTO favorites VALUES (username = :username AND recipeName = :recipeName)", nativeQuery = true)
	Favorites addFavorites(String username, String recipeName);
	
	List<Favorites> findByUsername(String username);
	

}
