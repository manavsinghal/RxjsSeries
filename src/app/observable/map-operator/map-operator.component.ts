import { Component, OnInit } from '@angular/core';
import { DesignUtilitiesService } from '../../services/design-utilities.service';
import { from, interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  imports: [],
  templateUrl: './map-operator.component.html',
  styleUrl: './map-operator.component.scss'
})
export class MapOperatorComponent implements OnInit {
  constructor(private dUService:DesignUtilitiesService){

  }

  videoSubscription! :Subscription;
  videoSubscription1! :Subscription;

  ngOnInit(): void {
    //Ex 01 data => 'Video '+data

    const broadcastVideo = interval(1000);

    this.videoSubscription = broadcastVideo.pipe(map((data:number)=>'Video '+data)).subscribe(res=>{
      this.dUService.print(res,'#ele1');
    });

    setTimeout(()=>{
      this.videoSubscription.unsubscribe();
    },1000*10);


    //Ex 02 data=>data*10;

    const broadcastVideo2 = interval(1000);

    this.videoSubscription1 = broadcastVideo.pipe(map((data:number)=>data*10)).subscribe(res=>{
      this.dUService.print(''+res,'#ele2');
    });

    setTimeout(()=>{
      this.videoSubscription1.unsubscribe();
    },1000*10);

    //Ex 03 name from Object

    const member = from([{name:'Manav',id:1},{name:'Singhal',id:2},{name:'Deepak',id:3},{name:'Singhal',id:4},{name:'Gaurav',id:5}]);

    member.pipe(map(data=>data.name)).subscribe(res=>{
      this.dUService.print(res,'#ele3');
    })
  }
}
