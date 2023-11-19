package com.cricket.api.services;

import java.util.*;

import com.cricket.api.entities.Match;

public interface MatchService 
{
	//get All Matches
		List<Match> getAllMatches();
		
	   //get Live Matches
		List<Match> getLiveMatches();
		
		//get Cricket World Cup 2023 point table
		List<List<String>> getPointTable();
}
