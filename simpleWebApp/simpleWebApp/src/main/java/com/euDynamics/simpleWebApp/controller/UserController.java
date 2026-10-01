package com.euDynamics.simpleWebApp.controller;

import com.euDynamics.simpleWebApp.model.User;
import com.euDynamics.simpleWebApp.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import jakarta.validation.Valid;

@RestController
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @GetMapping("/display-users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build()).getBody();
    }

    @PostMapping("/register-user")
    public ResponseEntity<User> registerNewUser(@Valid @RequestBody User user)throws URISyntaxException{
        User savedUser = userRepository.save(user);
        return ResponseEntity.created(new URI("/register-user/" + savedUser.getId())).body(savedUser);
    }

    @PutMapping("/update-user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        return userRepository.findById(id)
                .map( currentUser -> {
                    currentUser.setName(user.getName());
                    currentUser.setSurname(user.getSurname());
                    currentUser.setGender(user.getGender());
                    currentUser.setBirthdate(user.getBirthdate());
                    currentUser.setWorkAddress(user.getWorkAddress());
                    currentUser.setHomeAddress(user.getHomeAddress());
                    return ResponseEntity.ok(userRepository.save(currentUser));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete-user/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        userRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
