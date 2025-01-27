import { Component, OnInit } from '@angular/core';
import { interval, map, take, merge } from 'rxjs';
import { DesignUtilitiesService } from '../../services/design-utilities.service';

@Component({
  selector: 'app-merge',
  imports: [],
  templateUrl: './merge.component.html',
  styleUrl: './merge.component.scss'
})
export class MergeComponent implements OnInit{

  constructor(private duService:DesignUtilitiesService){
  
    }
  
    ngOnInit(): void {
        const techVideos = interval(3000).pipe(map((res)=>'TechVideo #'+(res+1)),take(5));
        const comedyVideos = interval(6000).pipe(map((res)=>'ComedyVideo #'+(res+1)),take(3));
        const newsVideos = interval(5000).pipe(map((res)=>'NewsVideo #'+(res+1)),take(4));
  
        const concatObs = merge(techVideos,comedyVideos,newsVideos);
  
        concatObs.subscribe((res)=>{
          this.duService.print(res,'#concat');
        })
    }
}
