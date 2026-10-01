package com.euDynamics.simpleWebApp.model;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="user_id")
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="surname")
    private String surname;

    @Column(name="gender")
    private String gender;

    @Column(name="birthdate")
    private String birthdate;

//    @Column(name="workAddress")
//    private String workAddress;
//
//    @Column(name="homeAddress")
//    private String homeAddress;

    @OneToOne(mappedBy = "user", cascade=CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private Addresses addresses;

    public User(){} //default constructor

    public User(String name, String surname, String gender, String birthdate){
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.birthdate = birthdate;

        this.addresses =  new Addresses();
        this.addresses.setUser(this);
    }

    public User(String name, String surname, String gender, String birthdate, String homeAddress, String workAddress){
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.birthdate = birthdate;
//        this.homeAddress = homeAddress;
//        this.workAddress = workAddress;

        this.addresses =  new Addresses(this, homeAddress,workAddress);
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

    public String getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(String birthdate) {
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
        return addresses != null ? addresses.getWork_address() : null;
    }

    public void setWorkAddress(String workAddress) {
        if (this.addresses == null) {
            this.addresses = new Addresses();
            this.addresses.setUser(this);
        }
        this.addresses.setWork_address(workAddress);
    }

    public String getHomeAddress() {
        return addresses != null ? addresses.getHome_address() : null;
    }

    public void setHomeAddress(String homeAddress) {
        if (this.addresses == null) {
            this.addresses = new Addresses();
            this.addresses.setUser(this);
        }
        addresses.setHome_address(homeAddress);
    }
}