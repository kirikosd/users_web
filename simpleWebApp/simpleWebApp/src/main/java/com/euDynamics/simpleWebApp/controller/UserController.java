package com.euDynamics.simpleWebApp.controller;

import com.euDynamics.simpleWebApp.model.User;
import com.euDynamics.simpleWebApp.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@Controller
@RequestMapping("/homepage")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public @ResponseBody String registerNewUser(@RequestBody User user){
        userRepository.save(user);
        return "Successful Registration!";
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Integer id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
        userRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/display")
    public @ResponseBody Iterable<User> getAllUsers() {
        // This returns a JSON or XML with the users
        return userRepository.findAll();
    }
}
