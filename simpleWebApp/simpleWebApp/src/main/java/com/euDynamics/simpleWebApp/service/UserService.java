package com.euDynamics.simpleWebApp.service;

import com.euDynamics.simpleWebApp.model.User;
import com.euDynamics.simpleWebApp.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public List<User> fetchAllUsers(){
        List<User> users = new ArrayList<>();

        // get user from database using the user repository and a database reference

        return users;
    }

}
