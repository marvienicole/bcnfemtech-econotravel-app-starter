package net.econotravel.econotravelapp.controllers;

import net.econotravel.econotravelapp.domain.Experience;
import net.econotravel.econotravelapp.repositories.ExperienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ExperienceController {

    private ExperienceRepository experienceRepository;

    @Autowired
    public ExperienceController(ExperienceRepository experienceRepository) {
        this.experienceRepository = experienceRepository;
    }

    @GetMapping("/experiences")
    public List<Experience> allExperiences() {

        return experienceRepository.findAll();
    }

}