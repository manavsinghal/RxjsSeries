import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map, take, pluck, zip, forkJoin } from 'rxjs';

@Component({
  selector: 'app-zip-fork-join',
  imports: [NgFor],
  templateUrl: './zip-fork-join.component.html',
  styleUrl: './zip-fork-join.component.scss'
})
export class ZipForkJoinComponent {
  names = ['Manav','Singhal','Sonal','Jain'];
  colors = ['red','blue','green','violet','pink'];

  //TemplateRef
  @ViewChild('name') name!:ElementRef;
  @ViewChild('color') color!:ElementRef;

  constructor(){

  }

  ngAfterViewInit(): void {
    const nameObs = fromEvent<any>(this.name.nativeElement,'change').pipe(map(res=>res.target.value),take(4));
    const colcrObs = fromEvent<any>(this.color.nativeElement,'change').pipe(pluck('target','value'),take(3));

    //Ex-01
    zip(nameObs,colcrObs).subscribe(([name,color])=>{
      console.log(name,color);
      this.createDivEle(name,color,'ele1');
    })

    //Ex-02
    forkJoin([nameObs,colcrObs]).subscribe(([name,color])=>{
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
