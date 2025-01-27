import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  imports: [NgFor],
  templateUrl: './pluck.component.html',
  styleUrl: './pluck.component.scss'
})
export class PluckComponent implements OnInit {
   
  constructor(){

   }

   users=[
    {
      name:'Manav',
      skill:'developer',
      job:{
        title:'UI developer',
        exp:'4 years'
      }
    },
    {
      name:'Naman',
      skill:'Java developer',
      job:{
        title:'Java developer',
        exp:'5 years'
      }
    },
    {
      name:'Karan',
      skill:'Angular developer',
      job:{
        title:'Forntend developer',
        exp:'4 years'
      }
    },
    {
      name:'shobit',
      skill:'Html developer',
      job:{
        title:'Html developer',
        exp:'6 years'
      }
    }
   ];

   data:string[]=[];
   data1:string[]=[];
  ngOnInit(): void {
    //Ex-01

    from(this.users).pipe(pluck('name'),toArray()).subscribe(res=>{
      this.data = res;
    });

    //Ex-02

    from(this.users).pipe(pluck('job','title'),toArray()).subscribe(res=>{
      this.data1 = res;
    });
  }

}
