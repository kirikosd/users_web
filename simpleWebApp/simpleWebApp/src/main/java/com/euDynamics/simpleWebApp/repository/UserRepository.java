package com.euDynamics.simpleWebApp.repository;

import com.euDynamics.simpleWebApp.model.User;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

}


//@Repository
//public class UserRepository {
//    //public DatabaseReference databaseRef;
//
////    public DatabaseReference(){
////        this.databaseRef = ...;
////    }
//
//    public void registerUser(User user){
//        //databaseRef.child(user);
//    }
//
//    public void getAllUsers(){
//        //return databaseRef;
//    }
//}
