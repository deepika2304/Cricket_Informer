package com.cricket.api.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cricket.api.entities.Match;

public interface MatchRepo extends JpaRepository<Match, Integer>
{
    //Want to Fetch
	//we provide teamHeading
	
	Optional<Match>  findByTeamHeading(String teamHeading);
}
