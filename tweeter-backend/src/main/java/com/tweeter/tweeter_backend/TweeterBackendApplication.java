package com.tweeter.tweeter_backend;

import com.tweeter.tweeter_backend.models.ApplicationUser;
import com.tweeter.tweeter_backend.models.Role;
import com.tweeter.tweeter_backend.repositories.RoleRepository;
import com.tweeter.tweeter_backend.repositories.UserRepository;
import com.tweeter.tweeter_backend.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class TweeterBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(TweeterBackendApplication.class, args);
	}

	@Bean
	CommandLineRunner run(RoleRepository roleRepository, UserService userService) {
		return args -> {
			roleRepository.save(new Role(1, "ROLE_USER"));
			roleRepository.save(new Role(2, "ROLE_ADMIN"));
			roleRepository.save(new Role(3, "ROLE_MODERATOR"));

//			ApplicationUser user = new ApplicationUser();
//			user.setFirstName("John");
//			user.setLastName("Doe");
//			user.setEmail("john_doe@email.com");
//			user.setPhone("1234567890");
//			user.setUsername("john_doe");
//
//			Set<Role> roles = new HashSet<>();
//			roles.add(roleRepository.findRoleByAuthority("ROLE_USER").get());
//			user.setAuthorities(roles);
//			userService.registerUser(user);
		};
	}
}
