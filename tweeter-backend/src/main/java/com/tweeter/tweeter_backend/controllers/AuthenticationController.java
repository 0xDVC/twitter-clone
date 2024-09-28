package com.tweeter.tweeter_backend.controllers;

import com.tweeter.tweeter_backend.exceptions.EmailAlreadyTakenException;
import com.tweeter.tweeter_backend.exceptions.UserDoesNotExist;
import com.tweeter.tweeter_backend.models.ApplicationUser;
import com.tweeter.tweeter_backend.models.RegistrationObject;
import com.tweeter.tweeter_backend.repositories.RoleRepository;
import com.tweeter.tweeter_backend.repositories.UserRepository;
import com.tweeter.tweeter_backend.service.UserService;
import org.apache.tomcat.util.http.parser.HttpParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;


/**
 * Controller for handling authentication-related requests.
 */
@RestController()
@RequestMapping("/auth")
public class AuthenticationController {
    private final UserService userService;
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    @Autowired
    public AuthenticationController(UserService userService, RoleRepository roleRepository, UserRepository userRepository) {
        this.userService = userService;
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
    }

    @ExceptionHandler({EmailAlreadyTakenException.class})
    public ResponseEntity<String> handleEmailTaken() {
        return new ResponseEntity<>("The email you provided is already in use", HttpStatus.CONFLICT);
    }

    @ExceptionHandler({UserDoesNotExist.class})
    public ResponseEntity<String> handleUserDoesntExist() {
        return new ResponseEntity<>("The user you are looking for does not exist", HttpStatus.NOT_FOUND);
    }

    /**
     * Endpoint for registering a new user.
     *
     * @param ro The user to register.
     * @return The registered user.
     */
    @PostMapping("/register")
    public ApplicationUser registerUser(@RequestBody RegistrationObject ro) {
        return userService.registerUser(ro);
    }

    @PutMapping("/update/phone")
    public ApplicationUser updatePhoneNumber(@RequestBody LinkedHashMap<String, String> body) {
        String userName = body.get("username");
        String phone = body.get("phone");

        ApplicationUser user = userService.getUserByUsername(userName);
        user.setPhone(phone);

        return userService.updateUser(user);
    }

    @PostMapping("/email/code")
    public ResponseEntity<String> createEmailVerificationCode(@RequestBody LinkedHashMap<String, String> body) {
        userService.generateEmailVerification(body.get("username"));
        return new ResponseEntity<>("Verification code generated, email sent", HttpStatus.CREATED);
    }

}
