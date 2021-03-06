package com.group3.springrest.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.data.domain.Example;
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
import com.group3.springrest.models.Users;
import com.group3.springrest.repository.UsersRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/u1")
public class UsersController {
	
//	@Configuration
//	@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
//	protected static class SecurityConfiguration extends WebSecurityConfigurerAdapter {
//	    
//	    protected void configure(HttpSecurity http) throws Exception {
//	      http
//	      .httpBasic()
//	      .and()
//	      .authorizeRequests()
//	      .antMatchers("/index.html", "/")
//	      .permitAll().anyRequest().authenticated();
//	    }
//	  }

	
	@Autowired
	private UsersRepository usersRepository;
	
	//http://localhost:9095/api/u1/users
	@GetMapping("/users")
	public List<Users> getAllUsers() {
		System.out.println("hello");
		return usersRepository.findAll();
	}
	
	@PostMapping("/createuser")
	public Users createUser(@Valid @RequestBody Users user) {
		
		return usersRepository.save(user);
	}
	
	@GetMapping("/{username}/{passWord}")
	public ResponseEntity <List<Users>> findByUsername(@PathVariable("username") String username,
													@PathVariable("passWord") String passWord){
		System.out.println("hello");
		List<Users> user = usersRepository.findByUsername(username);
		List<Users> loginUser = new ArrayList<Users>();
		if (username != null && user.get(0).getPassWord().equals(passWord)) {
			loginUser.add(user.get(0));
			
		}
		
	return new ResponseEntity <List<Users>>(loginUser,HttpStatus.OK);
	}
	
//	@PutMapping("/updateusers/{user_id}")
//	public ResponseEntity<Users> updateUser(@PathVariable(value = "user_id") Integer userId,
//											@Valid @RequestBody Users userDetails) throws ResourceNotFoundException {
//		Users user = usersRepository.findById(userId)
//		.orElseThrow(() -> new ResourceNotFoundException ("User not found for this id :: " + userId));
//		
//		user.setfName(userDetails.getfName());
//		user.setlName(userDetails.getlName());
//		user.setEmail(userDetails.getEmail());
//		user.setUsername(userDetails.getUsername());
//		final Users updateUser = usersRepository.save(user);
//		return ResponseEntity.ok(updateUser);
//	
//	}
	
	@PostMapping("/hello")
	public Users login(@RequestBody Users loginUser) throws ResourceNotFoundException {
		
		Example<Users> userExample = Example.of(loginUser);
		Users user = usersRepository.findOne(userExample).orElseThrow(() -> new ResourceNotFoundException("Wrong username or password. try again"));
		return user;
}}
