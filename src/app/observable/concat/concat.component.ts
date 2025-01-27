import { Component, OnInit } from '@angular/core';
import { DesignUtilitiesService } from '../../services/design-utilities.service';
import { concat, interval, map, Observable, take } from 'rxjs';

@Component({
  selector: 'app-concat',
  imports: [],
  templateUrl: './concat.component.html',
  styleUrl: './concat.component.scss'
})
export class ConcatComponent implements OnInit{

  constructor(private duService:DesignUtilitiesService){

  }

  ngOnInit(): void {
      const techVideos = interval(1000).pipe(map((res)=>'TechVideo #'+(res+1)),take(5));
      const comedyVideos = interval(1000).pipe(map((res)=>'ComedyVideo #'+(res+1)),take(3));
      const newsVideos = interval(1000).pipe(map((res)=>'NewsVideo #'+(res+1)),take(4));

      const concatObs = concat(techVideos,comedyVideos,newsVideos);

      concatObs.subscribe((res)=>{
        this.duService.print(res,'#concat');
      })
  }
}
