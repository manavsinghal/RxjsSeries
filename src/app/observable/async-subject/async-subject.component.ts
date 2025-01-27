import { Component, ElementRef, OnInit } from '@angular/core';
import { DesignUtilitiesService } from '../../services/design-utilities.service';

@Component({
  selector: 'app-async-subject',
  imports: [],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.scss'
})
export class AsyncSubjectComponent implements OnInit{

  value!:string;

  constructor(private duService:DesignUtilitiesService){

  }

  ngOnInit(): void {
    this.duService.asyncSubject.subscribe((res:string)=>{
      this.value = res;
    })
  }

  addVideo(text:any):void{
    this.duService.asyncSubject.next(text.value);
  }

  complete():void{
      this.duService.asyncSubject.complete();
  }
}
