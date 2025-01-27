import { AsyncPipe, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, map, Observable, shareReplay, toArray } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  imports: [NgFor,AsyncPipe],
  templateUrl: './share-replay.component.html',
  styleUrl: './share-replay.component.scss'
})
export class ShareReplayComponent implements OnInit{

  url = [{Name:'Product1',Type:'mobile'},
    {Name:'Product2',Type:'pc'},
    {Name:'Product3',Type:'product'},
    {Name:'Product4',Type:'mobile'},
    {Name:'Product5',Type:'pc'},
    {Name:'Product6',Type:'mobile'},
    {Name:'Product7',Type:'pc'}
  ];
  allProducts! :Observable<any>;
  mobileProducts!: Observable<any>;
  laptopProducts!: Observable<any>;

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.allProducts = from(this.url).pipe(shareReplay(),toArray());

    this.mobileProducts = this.allProducts.pipe(map(res=>res.filter((mobileData:any)=>
         mobileData.Type==='mobile'
    )));

    this.laptopProducts = this.allProducts.pipe(map(res=>res.filter((pcData:any)=>
       pcData.Type==='pc'
  )));
  }
}
