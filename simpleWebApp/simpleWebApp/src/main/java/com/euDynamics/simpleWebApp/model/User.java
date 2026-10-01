package com.euDynamics.simpleWebApp.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="user_id")
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="surname")
    private String surname;

    @Column(name="gender")
    private String gender;

    @Column(name="birthdate")
    private LocalDate birthdate;

//    @Column(name="workAddress")
//    private String workAddress;
//
//    @Column(name="homeAddress")
//    private String homeAddress;

    @OneToOne(mappedBy = "user", cascade=CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private Address addresses;

    public User(){} //default constructor

    public User(String name, String surname, String gender, LocalDate birthdate){
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.birthdate = birthdate;

        this.addresses =  new Address();
        this.addresses.setUser(this);
    }

    public User(String name, String surname, String gender, LocalDate birthdate, String homeAddress, String workAddress){
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.birthdate = birthdate;
//        this.homeAddress = homeAddress;
//        this.workAddress = workAddress;

        this.addresses =  new Address(this, homeAddress,workAddress);
    }

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

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

    public LocalDate getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(LocalDate birthdate) {
        this.birthdate = birthdate;
    }

//    public String getWorkAddress() {
//        return workAddress;
//    }
//
//    public void setWorkAddress(String workAddress) {
//        this.workAddress = workAddress;
//    }
//
//    public String getHomeAddress() {
//        return homeAddress;
//    }
//
//    public void setHomeAddress(String homeAddress) {
//        this.homeAddress = homeAddress;
//    }

    public String getWorkAddress() {
        return addresses != null ? addresses.getWorkAddress() : null;
    }

    public void setWorkAddress(String workAddress) {
        if (this.addresses == null) {
            this.addresses = new Address();
            this.addresses.setUser(this);
        }
        this.addresses.setWorkAddress(workAddress);
    }

    public String getHomeAddress() {
        return addresses != null ? addresses.getHomeAddress() : null;
    }

    public void setHomeAddress(String homeAddress) {
        if (this.addresses == null) {
            this.addresses = new Address();
            this.addresses.setUser(this);
        }
        addresses.setHomeAddress(homeAddress);
    }
}