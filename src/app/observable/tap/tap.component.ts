import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { DesignUtilitiesService } from '../../services/design-utilities.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-tap',
  imports: [NgStyle],
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.scss'
})
export class TapComponent implements OnInit{

  myColor:string='';

  constructor(private dUSerive:DesignUtilitiesService){

  }

  ngOnInit(): void {

    const source = interval(1500);

    //Ex-01 

    const arr=['Anup','Naman','Paul','John','Alex','Daughtery','Kamo'];

    let subs:Subscription;
    subs = source.pipe(tap(data=>{
      //console.log('Tap before =>',data);
      if(data>=5){
        subs.unsubscribe();
      }
    })
      ,map(data=>arr[data]),
    tap(data=>{
      //console.log('Tap After=>',data);
    }))
    .subscribe(res=>{
        this.dUSerive.print(res,'#ele1');
    });


    //Ex-02 

    const colors=['Red','Green','Blue','Yellow','Violet','Purple','Khaki'];

    let subs1:Subscription;
    subs1 = source.pipe(tap(data=>{
      //console.log('Tap before =>',data);
      
      if(data>=7){
        subs1.unsubscribe();
      }
      this.myColor = colors[data];
    })
      ,map(data=>colors[data]))
    .subscribe(res=>{
        this.dUSerive.print(res,'#ele2');
    });
  }

}
