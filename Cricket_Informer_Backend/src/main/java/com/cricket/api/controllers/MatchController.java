package com.cricket.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cricket.api.entities.Match;
import com.cricket.api.services.MatchService;

@RestController
@RequestMapping("/match")
@CrossOrigin("*")
public class MatchController {

	@Autowired
	private MatchService matchService;
	
	//get Live Matches
	@GetMapping("/live-score")
	public ResponseEntity<List<Match>> getLiveMatches(){
		System.out.println(matchService);
	   return new ResponseEntity<>(matchService.getLiveMatches(), HttpStatus.OK);
	}

	//Get all Matches
	@GetMapping("/allMatch")
	public ResponseEntity<List<Match>> getAllMatches(){
		   return new ResponseEntity<>(matchService.getAllMatches(), HttpStatus.OK);
		}
	
	//get Point Table
	@GetMapping("/point-table")
	public ResponseEntity<?> getPointTable(){
		   return new ResponseEntity<>(matchService.getPointTable(), HttpStatus.OK);
		}

	
}
