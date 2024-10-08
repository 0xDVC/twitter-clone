package com.tweeter.tweeter_backend.exceptions;

public class VerificationCodeExpiredException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public VerificationCodeExpiredException() {
        super("Verification code has expired. Please request a new one.");
    }
}
