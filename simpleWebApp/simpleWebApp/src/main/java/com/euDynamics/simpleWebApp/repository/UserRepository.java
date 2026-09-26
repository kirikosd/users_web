package com.euDynamics.simpleWebApp.repository;

import com.euDynamics.simpleWebApp.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

}