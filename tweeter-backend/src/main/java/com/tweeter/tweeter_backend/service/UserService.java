package com.tweeter.tweeter_backend.service;

import com.tweeter.tweeter_backend.exceptions.EmailAlreadyTakenException;
import com.tweeter.tweeter_backend.exceptions.UserDoesNotExist;
import com.tweeter.tweeter_backend.models.ApplicationUser;
import com.tweeter.tweeter_backend.models.RegistrationObject;
import com.tweeter.tweeter_backend.models.Role;
import com.tweeter.tweeter_backend.repositories.RoleRepository;
import com.tweeter.tweeter_backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    public ApplicationUser registerUser(RegistrationObject ro) {
        ApplicationUser user = new ApplicationUser();
        user.setFirstName(ro.getFirstName());
        user.setLastName(ro.getLastName());
        user.setEmail(ro.getEmail());
        user.setPhone(ro.getPhone());
        user.setDateOfBirth(ro.getDateOfBirth());

        String name = user.getFirstName() + '_' + user.getLastName();

        boolean nameTaken = true;

        String tempName = "";

        while(nameTaken) {
            tempName = generateUsername(name.toLowerCase());

            if(userRepository.findByUsername(tempName).isEmpty()){
                nameTaken = false;
            }
        }

        user.setUsername(tempName);

        Set<Role> roles = user.getAuthorities();
        roles.add(roleRepository.findRoleByAuthority("ROLE_USER").get());
        user.setAuthorities(roles);

        try {
            return userRepository.save(user);
        } catch (Exception e) {
            throw new EmailAlreadyTakenException();
        }
    }

    private static String generateUsername(String name) {
        long generatedNumber = (long) Math.floor(Math.random() * 1_000_000_000);
        return name + generatedNumber;
    }


    public ApplicationUser getUserByUsername(String userName) {
        return userRepository.findByUsername(userName).orElseThrow(UserDoesNotExist::new);
    }

    public ApplicationUser updateUser(ApplicationUser user){
        try {
            return userRepository.save(user);
        } catch (Exception e) {
            throw new EmailAlreadyTakenException();
        }
    }

    public void generateEmailVerification(String username) {
        ApplicationUser user = getUserByUsername(username);
        user.setVerification(generateVerificationNumber());
        userRepository.save(user);
    }

    private Long generateVerificationNumber() {
        return (long)  Math.floor(Math.random() * 1_000_000);
    }
}
