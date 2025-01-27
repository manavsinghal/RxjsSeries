import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilitiesService } from '../../services/design-utilities.service';

@Component({
  selector: 'app-interval',
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent implements OnInit {

  videoSubscription! :Subscription;

  constructor(private _designUtilities:DesignUtilitiesService){

  }

  ngOnInit(): void {
    
    let inter = interval(1000); //Event stream using interval
    let broadcastVideoTimer = timer(5000,1000); //Event stream using timer(delay,interval)

    this.videoSubscription = broadcastVideoTimer.subscribe(res=>{
      let obs = 'Video '+res;
      this._designUtilities.print(obs,'#eleContainer');
      this._designUtilities.print(obs,'#eleContainer1');
      this._designUtilities.print(obs,'#eleContainer2');

      if(res>=5){
        this.videoSubscription.unsubscribe();
      }
    })

  }
}
