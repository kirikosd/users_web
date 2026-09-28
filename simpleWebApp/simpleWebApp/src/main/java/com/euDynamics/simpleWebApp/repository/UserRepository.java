package com.euDynamics.simpleWebApp.repository;

import com.euDynamics.simpleWebApp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}