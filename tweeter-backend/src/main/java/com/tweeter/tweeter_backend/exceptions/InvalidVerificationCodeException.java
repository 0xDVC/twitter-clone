package com.tweeter.tweeter_backend.exceptions;

public class InvalidVerificationCodeException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public InvalidVerificationCodeException() {
        super("Invalid verification code");
    }
}
