import { NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  imports: [NgIf],
  templateUrl: './debounce-time.component.html',
  styleUrl: './debounce-time.component.scss'
})
export class DebounceTimeComponent implements AfterViewInit{

  reqData = null;
  @ViewChild('myInput') myInput!:ElementRef;
  reqData1 = null;
  @ViewChild('myInput1') myInput1!:ElementRef;

  constructor(){

  }

  ngAfterViewInit(): void {
    //Ex-01
    fromEvent(this.myInput.nativeElement,'keyup').pipe(
      map((event:any)=>event.target.value),
      debounceTime(1000)
    ).subscribe(res=>{
      this.reqData = res;
    })

    //Ex-02

    fromEvent(this.myInput1.nativeElement,'keyup').pipe(
      map((event:any)=>event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(res=>{
      this.reqData1 = res;

      setTimeout(()=>{
        this.reqData1 = null;
      },1000)
    })
  }
  
}
