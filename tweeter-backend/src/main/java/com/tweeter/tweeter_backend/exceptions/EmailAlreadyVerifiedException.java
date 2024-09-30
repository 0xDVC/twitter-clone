package com.tweeter.tweeter_backend.exceptions;

public class EmailAlreadyVerifiedException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public EmailAlreadyVerifiedException() {
        super("Email is already verified");
    }
}
