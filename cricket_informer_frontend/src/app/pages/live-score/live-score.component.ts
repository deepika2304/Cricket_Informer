import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from '../../services/api-call.service';
import { error } from 'console';
import { MatchCardComponent } from '../../match-card/match-card.component';

@Component({
  selector: 'app-live-score',
  standalone: true,
  imports: [CommonModule,MatchCardComponent],
  templateUrl: './live-score.component.html',
  styleUrl: './live-score.component.css'
})
export class LiveScoreComponent implements OnInit
{
    liveMatches:any

   constructor(private api: ApiCallService){}
         

     ngOnInit(): void {
        this.loadLiveMatches();
     }

     private loadLiveMatches() {
      this.api.getLiveMatches().subscribe({
        next: data => {
         
         this.liveMatches=data;
        },
        error:error=>{
         console.log(error)
        }
      });
     }
  }
