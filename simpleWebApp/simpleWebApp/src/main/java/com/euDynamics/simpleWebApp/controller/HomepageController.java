package com.euDynamics.simpleWebApp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class HomepageController {
    @GetMapping("/homepage")
    public String goToHomepage(){
        return "path to homepage file";
    }
}
