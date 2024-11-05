package com.store.web.app.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.store.web.app.response.ApiResponse;

@RestControllerAdvice
public class GlobalExceptionController {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiResponse<Void>> hanlderResourceNotFoundException(ResourceNotFoundException e) {
        String message = e.getMessage();
        ApiResponse<Void> response = ApiResponse.<Void>builder()
                .data(null)
                .error(true)
                .message(message)
                .status(HttpStatus.NOT_FOUND).build();
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

}
