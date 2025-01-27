import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, map, pluck, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  imports: [NgFor],
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.scss'
})
export class CombineLatestComponent implements AfterViewInit{

  
  names = ['Manav','Singhal','Sonal','Jain'];
  colors = ['red','blue','green','violet','pink'];

  //TemplateRef
  @ViewChild('name') name!:ElementRef;
  @ViewChild('color') color!:ElementRef;

  constructor(){

  }

  ngAfterViewInit(): void {
    const nameObs = fromEvent<any>(this.name.nativeElement,'change').pipe(map(res=>res.target.value));
    const colcrObs = fromEvent<any>(this.color.nativeElement,'change').pipe(pluck('target','value'));

    //Ex-01
    combineLatest(nameObs,colcrObs).subscribe(([name,color])=>{
      console.log(name,color);
      this.createDivEle(name,color,'ele1');
    })

    //Ex-02
    nameObs.pipe(withLatestFrom(colcrObs)).subscribe(([name,color])=>{
      console.log(name,color);
      this.createDivEle(name,color,'ele2');
    })
  }

  createDivEle(name:string,color:string,id:string){
    let ele = document.createElement('div');
    ele.innerText = name;
    ele.setAttribute('class',color);
    document.getElementById(id)?.append(ele);
  }

}
