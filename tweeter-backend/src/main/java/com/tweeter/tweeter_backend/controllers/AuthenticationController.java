package com.tweeter.tweeter_backend.controllers;

import com.tweeter.tweeter_backend.models.ApplicationUser;
import com.tweeter.tweeter_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * Controller for handling authentication-related requests.
 */
@RestController()
@RequestMapping("/auth")
public class AuthenticationController {
    private final UserService userService;

    @Autowired
    public AuthenticationController(UserService userService) {
        this.userService = userService;
    }


    /**
     * Endpoint for registering a new user.
     *
     * @param user The user to register.
     * @return The registered user.
     */
    @PostMapping("/register")
    public ApplicationUser registerUser(@RequestBody ApplicationUser user) {
        System.out.println("Register endpoint hit");
        return userService.registerUser(user);
    }



}
