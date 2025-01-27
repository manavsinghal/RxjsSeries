import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  imports: [NgFor],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit{

  constructor(){

  }
  
  data=[
    {id:1,name:'Manav',gender:'Male'},
    {id:2,name:'Anup',gender:'Male'},
    {id:3,name:'Shekar',gender:'Female'},
    {id:4,name:'Sharma',gender:'Male'},
    {id:5,name:'Sonal',gender:'Female'},
    {id:6,name:'Khushi',gender:'Female'},
    {id:7,name:'Paras',gender:'Male'},
    {id:8,name:'Nitin',gender:'Male'},
    {id:9,name:'Naman',gender:'Male'},
    {id:10,name:'Vaibhav',gender:'Male'},
    {id:11,name:'John',gender:'Female'},
    {id:12,name:'Paul',gender:'Female'},    
  ]

  res1:any=[];
  res2:any=[];
  res3:any=[];
  ngOnInit(): void {
    //Ex-01 Filter By name length

    from(this.data).pipe(filter(data=>data.name.length>5),toArray()).subscribe(res=>this.res1=res);

    from(this.data).pipe(filter(data=>data.gender==='Male'),toArray()).subscribe(res=>this.res2=res);

    from(this.data).pipe(filter(data=>data.id<6),toArray()).subscribe(res=>this.res3=res);
  }

}
