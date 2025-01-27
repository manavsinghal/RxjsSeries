import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DesignUtilitiesService } from '../../services/design-utilities.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  imports: [NgFor,NgClass],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.scss'
})
export class ReplaySubjectComponent implements OnInit{

  userList1=[
    'Angular1','Angular2'
  ];
  userList2:string[]=[];
  userList3:string[]=[];

  button2:boolean = false;
  button3:boolean = false;

  button2Subscription!:Subscription;
  button3Subscription!:Subscription;

  constructor(private _duService:DesignUtilitiesService){

  }

  ngOnInit(): void {
    this._duService.video.subscribe(res=>{
      this.userList1.push(res);
    })
  }

  addVideo(video:any){
    this._duService.video.next(video.value);
  }

  isButtonClicked(id:number){
    if(id===2){
    this.button2 = !this.button2;

    if(!this.button2){
      this.button2Subscription = this._duService.video.subscribe((res:string)=>{
        this.userList2.push(res);
      })
    }else{
      this.button2Subscription.unsubscribe();
    }
    }else{
      this.button3 = !this.button3;
      if(!this.button3){
        this.button3Subscription = this._duService.video.subscribe((res:string)=>{
          this.userList3.push(res);
        })
      }else{
        this.button3Subscription.unsubscribe();
      }
    }
  }
}
