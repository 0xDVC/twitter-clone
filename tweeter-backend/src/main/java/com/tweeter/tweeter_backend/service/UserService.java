package com.tweeter.tweeter_backend.service;

import com.tweeter.tweeter_backend.exceptions.*;
import com.tweeter.tweeter_backend.models.ApplicationUser;
import com.tweeter.tweeter_backend.models.RegistrationObject;
import com.tweeter.tweeter_backend.models.Role;
import com.tweeter.tweeter_backend.repositories.RoleRepository;
import com.tweeter.tweeter_backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Set;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final MailService mailService;
    private static final long VERIFICATION_CODE_EXPIRATION_MINUTES = 3;


    @Autowired
    public UserService(UserRepository userRepository, RoleRepository roleRepository, MailService mailService) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.mailService = mailService;
    }

    public ApplicationUser registerUser(RegistrationObject ro) {
        ApplicationUser user = new ApplicationUser();
        user.setFirstName(ro.getFirstName());
        user.setLastName(ro.getLastName());
        user.setEmail(ro.getEmail());
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
        user.setVerificationExpiryTime(LocalDateTime.now().plusMinutes(VERIFICATION_CODE_EXPIRATION_MINUTES));

        try {
            mailService.sendEmail(user.getEmail(), "Email Verification", "Here is your verification code: " + user.getVerification() +  ". This code will expire in 2-" + VERIFICATION_CODE_EXPIRATION_MINUTES + " minutes.");
            userRepository.save(user);
        } catch (Exception e) {
            throw new EmailFailedToSendException();
        }
    }

    private Long generateVerificationNumber() {
        return (long) Math.floor(Math.random() * 1_000_000);
    }

    public ApplicationUser verifyEmail(String username, Long code) {
        ApplicationUser user = getUserByUsername(username);

        if (user.getVerification().equals(code)) {
            if (LocalDateTime.now().isAfter(user.getVerificationExpiryTime())) {
                throw new VerificationCodeExpiredException();
            }
            user.setEnabled(true);
            user.setVerification(null);
            user.setVerificationExpiryTime(null);
            return userRepository.save(user);
        } else {
            throw new InvalidVerificationCodeException();
        }
    }

    public void resendVerificationCode(String username) {
        ApplicationUser user = getUserByUsername(username);
        if (user.getEnabled()) {
            throw new EmailAlreadyVerifiedException();
        }
        generateEmailVerification(username);
    }
}
