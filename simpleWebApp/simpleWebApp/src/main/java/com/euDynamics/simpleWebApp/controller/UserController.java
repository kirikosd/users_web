package com.euDynamics.simpleWebApp.controller;

import com.euDynamics.simpleWebApp.model.User;
import com.euDynamics.simpleWebApp.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/")
public class UserController {

    @Autowired
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @GetMapping("/display-users")
    public List<User> getAllUsers() {
        // This returns a JSON or XML with the users
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @PostMapping("/register-user")
    public ResponseEntity<User> registerNewUser(@RequestBody User user)throws URISyntaxException{
        User savedUser = userRepository.save(user);
        return ResponseEntity.created(new URI("/register-user/" + savedUser.getId())).body(savedUser);
    }

    @PutMapping("/update-user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        User currentUser = userRepository.findById(id).orElseThrow(RuntimeException::new);
        currentUser.setName(user.getName());
        currentUser.setSurname(user.getSurname());
        currentUser.setGender(user.getGender());
        currentUser.setBirthdate(user.getBirthdate());
        currentUser.setWorkAddress(user.getWorkAddress());
        currentUser.setHomeAddress(user.getHomeAddress());
        currentUser = userRepository.save(user);

        return ResponseEntity.ok(currentUser);
    }

    @DeleteMapping("/delete-user/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
