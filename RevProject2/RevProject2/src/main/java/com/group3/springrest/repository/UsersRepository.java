package com.group3.springrest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.group3.springrest.models.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {
	
	@Query(value = "SELECT * FROM users WHERE users.username = :username", nativeQuery = true)
	List<Users> findByUsername(@Param ("username")String username);

}
