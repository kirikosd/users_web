package com.euDynamics.simpleWebApp.model;

import jakarta.persistence.*;

@Entity
@Table(name="addresses")
public class Addresses {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="addresses_id")
    private Long id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    @Column(name="home_address")
    private String home_address;

    @Column(name="work_address")
    private String work_address;

    public Addresses() { }

    public Addresses(User user, String home_address, String work_address) {

        this.user = user;
        this.home_address = home_address;
        this.work_address = work_address;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getHome_address() {
        return home_address;
    }

    public void setHome_address(String home_address) {
        this.home_address = home_address;
    }

    public String getWork_address() {
        return work_address;
    }

    public void setWork_address(String work_address) {
        this.work_address = work_address;
    }
}
