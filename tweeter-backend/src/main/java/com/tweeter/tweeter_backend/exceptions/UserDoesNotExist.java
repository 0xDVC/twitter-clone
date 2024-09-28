package com.tweeter.tweeter_backend.exceptions;

public class UserDoesNotExist extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public UserDoesNotExist() {
        super("This user does not exist");
    }
}
