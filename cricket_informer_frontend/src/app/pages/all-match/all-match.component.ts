import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchCardComponent } from '../../match-card/match-card.component';
import { ApiCallService } from '../../services/api-call.service';

@Component({
  selector: 'app-all-match',
  standalone: true,
  imports: [CommonModule,MatchCardComponent],
  templateUrl: './all-match.component.html',
  styleUrl: './all-match.component.css'
})
export class AllMatchComponent implements OnInit{
    allMatch:any;

    constructor(private api: ApiCallService){}
     
    ngOnInit(): void {
      this.api.getAllMatches().subscribe({
        next:data=>{
       
          this.allMatch=data
        },
        error:error=> {
          console.log(error);
        },
      })
    }

}
