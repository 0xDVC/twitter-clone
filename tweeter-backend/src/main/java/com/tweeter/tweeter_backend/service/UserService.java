package com.tweeter.tweeter_backend.service;

import com.tweeter.tweeter_backend.models.ApplicationUser;
import com.tweeter.tweeter_backend.models.Role;
import com.tweeter.tweeter_backend.repositories.RoleRepository;
import com.tweeter.tweeter_backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.logging.LoggersEndpoint;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Autowired
    public UserService(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    public ApplicationUser registerUser(ApplicationUser user) {
        Set<Role> roles = new HashSet<>();
        roles.add(roleRepository.findRoleByAuthority("ROLE_USER").get());
        user.setAuthorities(roles);

        return userRepository.save(user);
    }



}
