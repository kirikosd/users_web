package com.euDynamics.simpleWebApp.model;

import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.antlr.v4.runtime.misc.NotNull;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private @Nullable Integer id;

    private String name;
    private String surname;
    private String gender;
    private String birthdate;
    private String workAddress;
    private String homeAddress;

    public User(){} //default constructor

    public User(String name, String surname, String gender, String birthdate){ // mandatory parameters constructor
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.birthdate = birthdate;
    }

    public User(String name, String surname, String gender, String birthdate, String workAddress, String homeAddress){ // all parameters constructor
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.birthdate = birthdate;
        this.workAddress = workAddress;
        this.homeAddress = homeAddress;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
    }

    public String getWorkAddress() {
        return workAddress;
    }

    public void setWorkAddress(String workAddress) {
        this.workAddress = workAddress;
    }

    public String getHomeAddress() {
        return homeAddress;
    }

    public void setHomeAddress(String homeAddress) {
        this.homeAddress = homeAddress;
    }
}
